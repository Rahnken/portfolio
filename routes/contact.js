const express = require('express');
const nodemailer = require("nodemailer");
const router = express.Router();



router.get('/',((req, res, next) => {
    res.render('contact',{title:'Contact Me'})
}));

// POST route from contact form
router.post('/', (req, res) => {

    // Instantiate the SMTP server
    const smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    // Specify what the email will look like
    const mailOpts = {
        from: 'Your sender info here', // This is ignored by Gmail
        to: process.env.EMAIL_USER,
        subject: 'New message from contact form at ericdonnellydevelopment.tech',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    }

    // Attempt to send the email
    smtpTrans.sendMail(mailOpts, (error, response) => {
        if (error) {
            res.render('email/contact-failure',{title:'Contact Form Failure',error:error}) // Show a page indicating failure
            console.log(error);
        }
        else {
            res.render('email/contact-success',{title:' Contact Form Sent ',message:"Message sent , will respond when available "}) // Show a page indicating success
        }
    })
})

module.exports = router;