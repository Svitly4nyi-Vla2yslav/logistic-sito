const fetch = require("node-fetch");

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    if (!data.amount) {
      throw new Error("Amount is required for the payment.");
    }

    const revolutEndpoint = "https://b2b.revolut.com/api/1.0/order";

    const paymentPayload = {
      amount: data.amount * 100, // Переведення суми в копійки
      currency: "EUR",
      merchant_order_ext_ref: `ORDER_${Date.now()}`,
      description: `Payment for logistics service`,
      capture_mode: "AUTOMATIC",
      success_url: "https://your-site.com/success", // Змінити на реальний URL успіху
      cancel_url: "https://your-site.com/cancel",   // Змінити на реальний URL відміни
    };

    const response = await fetch(revolutEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REVOLUT_API_KEY}`,
      },
      body: JSON.stringify(paymentPayload),
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(`Revolut API Error: ${errorDetails.message}`);
    }

    const responseData = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify({ paymentLink: responseData.payment_link }),
    };
  } catch (error) {
    console.error("Error creating payment:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to create payment.", error }),
    };
  }
};
