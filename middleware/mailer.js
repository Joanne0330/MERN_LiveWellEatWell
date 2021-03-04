const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const moment = require('moment');

dotenv.config()
const SENDER_EMAIL = process.env.SENDER_EMAIL;
const SENDER_PASSWORD = process.env.SENDER_PASSWORD;
const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL;

module.exports = function (date, physicalScore) { 

    const convertedDate = moment(date).format('DD/MM/YYYY')
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: `${SENDER_EMAIL}`,
          pass: `${SENDER_PASSWORD}`
        }
      });
      
    const mailOptions = {
        from: `${SENDER_EMAIL}`,
        to: `${RECEIVER_EMAIL}`,
        subject: 'A reminder from Live Well Eat Well App!',
        text: `Be sure to do more exercise tomorrow! Your physical score on ${convertedDate} is only ${physicalScore}!`
    };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        } else {
        console.log('Email sent: ' + info.response);
        }
    });
};