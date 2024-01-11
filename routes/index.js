const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail')

router.get('/', (req, res, next) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'nathanejbrown@gmail.com', 
    from: 'nathanejbrown@gmail.com', 
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
})

module.exports = router;