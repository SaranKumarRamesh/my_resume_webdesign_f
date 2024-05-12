// Run this file first before ng serve using node server.js

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Import the cors middleware

const app = express();

const PORT = process.env.PORT || 3000;

// Allow requests from all origins
app.use(cors());

// Middleware to parse JSON body
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// POST endpoint to handle form submission
app.post('/api/send-email', (req, res) => {
  const { name, email, requirements } = req.body;

  // Create a Nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'sarankumarj2006@gmail.com', // Your Gmail address
      pass: 'gblzvtbmsoqtegml' // Your Gmail password
    }
  });

  // Email content
  let mailOptions = {
    from: 'sarankumarj2006@gmail.com', // Sender address
    to: 'sarankumarj2006@gmail.com', // Receiver address
    subject: 'New Contact Form Submission', // Subject line
    text: `
      Name: ${name}
      Email: ${email}
      Requirements: ${requirements}
    `
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
