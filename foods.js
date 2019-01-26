// const Food = require('../models/food');
const Food = require('../models/models/Food');
const mongoose = require('mongoose');

exports.retrieveFoods = function (req, type, handler) {
    const limit = req.query.limit || 10;
    const startsWith = req.query.startsWith;
    const around = req.query.around;

    return Food.find(handler);
}

exports.retrieveFood = function (req) {
    return new Promise((resolve, reject) => {
        const limit = req.query.limit || 10;
        const startsWith = req.query.startsWith;
        const around = req.query.around;

        const foodName = req.params.foodName;

        Food
            .where('name').eq(foodName)
            .limit(limit)
            .exec((err, data) => {
                if (err || !data.length) reject(`${foodName} is not found`);
                resolve(data);
            });
    });
}

exports.retrieveAllFoods = function (limit) {
    return function(){
        if(limit) return Food.find().limit(Number(limit));
        return Food.find();
    }().populate('posted_by', ['firstname', 'lastname', 'username', '']);
}

