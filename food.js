const mongoose = require('mongoose');

const ReviewSchema = require('./schemas/reviews');

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    id : {
        type: Number,
        required : false,
        unique: true
    },
    name : {
        type: String,
        required : true
    },
    label : {
        type: String,
        required : true
    },
    price : {
        type: String,
        required : true
    },
    food_type : {
        type: String,
        required : true
    },

    pic : {
        type : String,
        required : false
    },

    place : {
        type : String,
        required : false
    },

    address : {
        type : String,
        required : false
    },

    reviews : {
        type: [ReviewSchema],
        required : false
    }
});

module.exports = mongoose.model('Food', foodSchema);
