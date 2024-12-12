const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    // Перевірка обов'язкових полів
    if (!data.name || !data.email || !data.details) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Name, email, and details are required." }),
      };
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Logistics Inquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER, // Логістична компанія
      subject: `Inquiry from ${data.name}`,
      html: `
        <h1>New Logistics Inquiry</h1>
        <p><strong>Name:</strong> ${data.name}</p>
        ${data.companyName ? `<p><strong>Company Name:</strong> ${data.companyName}</p>` : ""}
        ${data.contactPerson ? `<p><strong>Contact Person:</strong> ${data.contactPerson}</p>` : ""}
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
        <p><strong>Details:</strong></p>
        <p>${data.details}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Logistics email sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending logistics email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send logistics email.", error }),
    };
  }
};
