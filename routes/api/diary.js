const express = require('express');
const router = express.Router();

const Diary = require('../../models/Diary');

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

     
     
     try {
         const newDiary = new Diary({
             date: date,
             physicalScore: physicalScore,
             musicScore: musicScore,
             workScore: workScore
            })
         
         let exist = await Diary.findOne({ date: date });
         if(exist) {
                //  return res.status(400).json({ errors: [{ msg: 'Event already recored' }] });
            exist.remove();
            await newDiary.save();
            res.send('Event updated!')

         }
             
                
                
        await newDiary.save();
        res.send('Event recored!')
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error!!')
        
    }

});

module.exports = router;