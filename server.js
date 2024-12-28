const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

// Server setup
const app = express();
app.use(cors());
app.use(express.json());
app.listen(3000, () => console.log("Server Running on Port 3000"));

// Email setup
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nanayakkaradilnethfi@gmail.com", // Your email
    pass: "xdlj ushk fhxs tzzq", // Your app-specific password
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.error("Email verification error:", error);
  } else {
    console.log("Ready to Send Emails");
  }
});

// Contact API endpoint
app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const mail = {
    from: `${firstName} ${lastName} <${email}>`,
    to: "nanayakkaradilnethfi@gmail.com",
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
      res.status(500).json({ code: 500, status: "Failed to send message." });
    } else {
      res.status(200).json({ code: 200, status: "Message Sent Successfully" });
    }
  });
});
