const express = require('express');
const router = express.Router();
const moment = require('moment');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

const Diary = require('../../models/Diary');

dotenv.config()
const SENDER_EMAIL = process.env.SENDER_EMAIL;
const SENDER_PASSWORD = process.env.SENDER_PASSWORD;
const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL;


// @route    POST api/diary
// @desc     adding diary record
// @access   Public
router.post('/', async (req, res) => {
    const { 
        date,
        physicalScore,
        musicScore,
        workScore
     } = req.body

     if(physicalScore < 7) {
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
            text: `Be sure to do more exercise tomorrow! Your physical score today is only ${physicalScore}!`
        };
          
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
            console.log(error);
            } else {
            console.log('Email sent: ' + info.response);
            }
        });
     }
     
     try {
         const newDiary = new Diary({
             date: date,
             physicalScore: physicalScore,
             musicScore: musicScore,
             workScore: workScore
            })
            
            let exist = await Diary.findOne({ date: date });
            console.log(exist)
            if(exist) {
                //  return res.status(400).json({ errors: [{ msg: 'Event already recored' }] });
                exist.remove();
                await newDiary.save();
                res.send('Event updated for ' + moment(date).format('DD/MM/YYYY'));
                
            }
            
            
            
            await newDiary.save();
            res.send(`Event recored for ` + moment(date).format('DD/MM/YYYY'));
            
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error!!')
        
    }

});

// @route    GET api/diary
// @desc     Get all saved events
// @access   Public
router.get('/', async (req, res) => {
    try {
        const diary = await Diary.find().sort({ date: 1 }); //sort by the date, oldest first
        res.json(diary);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error!');
    }
});

module.exports = router;