const express = require('express');
const router = express.Router();

const Recipe = require('../../models/Recipe');

// @route    POST api/recipes
// @desc     adding a recipe
// @access   Public
router.post('/', async (req, res) => {
    const { 
        label, 
        image, 
        source, 
        uri,
        url,
        ingredientLines,
        calories,
        numberIngredients,
        yield
     } = req.body

    try {

        let exist = await Recipe.findOne({ uri });
        if(exist) {
            return res.status(400).json({ errors: [{ msg: 'Recipe already exist!' }] });
        }

        const newRecipe = new Recipe({
            label: label,
            image: image,
            source: source,
            uri: uri,
            url: url,
            ingredientLines: ingredientLines,
            calories: calories,
            numberIngredients: numberIngredients,
            yield: yield
        });

        await newRecipe.save();
        res.send('Recipe saved!')
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error!!')
        
    }

});

// @route GET api/recipes
// @desc Test route
// @access Public
router.get('/', (req, res) => res.send('Recipe route!!!'));

module.exports = router;