const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

// Initialize the Express app
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Define the port
const PORT = process.env.PORT || 3000;

// Email setup using Nodemailer
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nanayakkaradilnethfi@gmail.com", // Replace with your email
    pass: "xdlj ushk fhxs tzzq", // Replace with your app-specific password
  },
});

// Verify the email transporter
contactEmail.verify((error) => {
  if (error) {
    console.error("Error verifying email transporter:", error);
  } else {
    console.log("Email transporter ready to send emails");
  }
});

// Define the /contact API endpoint
app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const mail = {
    from: `${firstName} ${lastName} <${email}>`,
    to: "your-email@gmail.com", // Replace with your email
    subject: "Contact Form Submission - Portfolio",
    html: `
      <h3>Contact Details</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h4>Message:</h4>
      <p>${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ code: 500, message: "Failed to send message" });
    } else {
      res.status(200).json({ code: 200, message: "Message sent successfully" });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
