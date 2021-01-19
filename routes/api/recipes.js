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

// @route    GET api/recipes
// @desc     Get all saved recipes
// @access   Public
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find().sort({ date: -1 }); //sort by the date, most recent fist
        res.json(recipes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error!');
    }
});


// @route    DELETE api/recipes/:id
// @desc     Delete a recipe from collection
// @access   Public
router.delete('/:id', async ( req, res ) => {
    try {
        // console.log(req.params.id);
        const recipe = await Recipe.findById(req.params.id);

        if(!recipe) {
            return res.status(404).json({ msg: 'Recipe not found!'});
        }

        await recipe.remove();
        res.json({msg: 'Recipe removed!'})

    } catch (err) {
        console.err(err.message);

        if(err.kind === 'ObjectId') {  //if the kind of error is due to the incorrectly formatted id
            return res.status(404).json({ msg: 'Recipe not found!!'}); 
        }
        res.status(500).send('Server Error!');  
    }
});

module.exports = router;