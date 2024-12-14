const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    const distance = data.distance ? data.distance.toFixed(2) : "Unknown distance";
    const result = data.totalPrice !== undefined ? data.totalPrice.toFixed(2) : "Unknown price";


    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Order from ${data.name}`,
      html: `
        <h1>New Order Details</h1>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Start Address:</strong> ${data.startAddress}</p>
        <p><strong>End Address:</strong> ${data.endAddress}</p>
        <p><strong>Distance:</strong> ${distance} km</p>
        <p><strong>Vehicle:</strong> ${data.vehicle}</p>
        <p><strong>Total Price:</strong> ${result} EUR</p>
        <p><strong>Delivery Date:</strong> ${data.deliveryDate}</p>
         <p><strong>Selected Options:</strong></p>
    <ul>
      <li>Refrigerator: ${data.options.refrigerator ? "Yes" : "No"}</li>
      <li>ADR: ${data.options.adr ? "Yes" : "No"}</li>
      <li>Platform: ${data.options.platform ? "Yes" : "No"}</li>
    </ul>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send email.", error }),
    };
  }
};
