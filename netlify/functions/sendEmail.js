const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    // Конфігурація транспорту для Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // або ваш поштовий провайдер
      auth: {
        user: process.env.EMAIL_USER, // Корпоративна пошта
        pass: process.env.EMAIL_PASS, // Пароль від пошти (або App Password)
      },
    });

    // Формування листа
    const mailOptions = {
      from: process.env.EMAIL_USER, // Від кого
      to: process.env.EMAIL_RECEIVER, // Куди надсилати
      subject: `New Order from ${data.name}`, // Тема листа
      html: `
        <h1>New Order Details</h1>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Start Address:</strong> ${data.startAddress}</p>
        <p><strong>End Address:</strong> ${data.endAddress}</p>
        <p><strong>Distance:</strong> ${data.distance.toFixed(2)} km</p>
        <p><strong>Vehicle:</strong> ${data.vehicle}</p>
        <p><strong>Total Price:</strong> ${data.result.toFixed(2)} EUR</p>
        <p><strong>Delivery Date:</strong> ${data.deliveryDate}</p>
      `,
    };

    // Відправка листа
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
