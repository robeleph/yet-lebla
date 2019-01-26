// const Places = require('../models/places');
const Places = require('../models/models/Place');

exports.retrieveAllPlaces = function(limit) {
    if(limit)
        return Places.find().limit(Number(limit));
    return Places.find();
}