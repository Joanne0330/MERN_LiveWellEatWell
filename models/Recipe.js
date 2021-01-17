const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    label: {
        type: String
    },
    image: {
        type: String
    },
    source: {
        type: String
    },
    uri: {
        type: String
    },
    url: {
        type: String
    },
    ingredientLines: {
        type: [String]
    },
    calories: {
        type: Number
    }, 
    numberIngredients: {
        type: Number
    },
    yield: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);