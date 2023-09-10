const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer configuration (use your email and SMTP settings)
const transporter = nodemailer.createTransport({
  service: 'your_email_service', // e.g., 'Gmail'
  auth: {
    user: 'your_email@example.com',
    pass: 'your_email_password',
  },
});

// Dummy mailbox for receiving emails
const receivedEmails = [];

app.post('/send_email', (req, res) => {
  const { recipient, subject, message } = req.body;

  const mailOptions = {
    from: 'your_email@example.com',
    to: recipient,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Email could not be sent.');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully!');
    }
  });
});

app.get('/receive_emails', (req, res) => {
  res.json(receivedEmails);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
