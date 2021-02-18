const express = require('express');
const router = express.Router();

// const Recipe = require('../../models/Diary');

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

     console.log(date, physicalScore, musicScore, workScore)

    // try {

    //     let exist = await Recipe.findOne({ uri });
    //     if(exist) {
    //         return res.status(400).json({ errors: [{ msg: 'Recipe already exist!' }] });
    //     }

    //     const newRecipe = new Recipe({
    //         label: label,
    //         image: image,
    //         source: source,
    //         uri: uri,
    //         url: url,
    //         ingredientLines: ingredientLines,
    //         calories: calories,
    //         numberIngredients: numberIngredients,
    //         yield: yield
    //     });

    //     await newRecipe.save();
    //     res.send('Recipe saved!')
        
    // } catch (err) {
    //     console.error(err.message);
    //     res.status(500).send('Server Error!!')
        
    // }

});