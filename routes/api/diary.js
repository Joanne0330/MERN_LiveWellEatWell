const express = require('express');
const router = express.Router();
const moment = require('moment');

const Diary = require('../../models/Diary');
const mailer = require('../../middleware/mailer');


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
        mailer(date, physicalScore)
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