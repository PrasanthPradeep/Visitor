const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bluestacku116@gmail.com',
      pass: 'Prasanth @ 3'
    }
  });
  const mailOptions = {
    from: 'bluestacku116@gmail.com',
    to: 'programmerprasanth@gmail.com',
    subject: 'New photo from your website',
    html: `<img src="${req.body.image}" />`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent', info.response);
      res.send('Email sent successfully');
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
