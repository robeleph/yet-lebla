// const Places = require('../models/places');
// const Foods = require('../models/food');
const Places = require('../models/models/Place');
const Foods = require('../models/models/Food');

exports.searchPlace = (queryString, limit) => {
    if (limit)
        return Places.find({
            place_name: new RegExp(`.?${queryString}.?`)
        }).limit(Number(limit));
    return Places.find({
        place_name: new RegExp(`.?${queryString}.?`)
    });
};

exports.searchFood = (queryString, limit) => {
    if (limit)
        return Foods.find({
            food_name: new RegExp(`.?${queryString}.?`)
        }).limit(Number(limit));
    return Foods.find({
        food_name: new RegExp(`.?${queryString}.?`)
    });
}