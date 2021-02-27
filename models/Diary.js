const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiarySchema = new Schema({
    date: {
        type: Date,
    },
    physicalScore: {
        type: Number
    }, 
    musicScore: {
        type: Number
    },
    workScore: {
        type: Number
    }

});

module.exports = Diary = mongoose.model('diary', DiarySchema);