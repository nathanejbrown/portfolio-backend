const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail')

router.post('/send-email', (req, res, next) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const {name, email, subject, message} = req.body;
  const msg = {
    to: 'nathanejbrown@gmail.com', 
    from: 'dennis.nathan@me.com', 
    subject: `${subject} from ${name}, ${email}`,
    text: message
  }
  sgMail
    .send(msg)
    .then(() => {
      res.send({
        status: 'success'
      })
    })
    .catch((error) => {
      res.send({
        status: 'failed'
      })
    })
})

module.exports = router;