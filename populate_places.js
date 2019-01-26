const Place = require('./models/Place');
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/appsss');

//     place_id:{ type: Number, required: true},
//     place_name:{ type: String, required: true},
//     description:{ type: String, required: true},
//     year_of_foundation:{ type: Date, required: false},
//     ratings:{ type: [RatingSchema], required: false},
//     pictures:{ type: [String], required: false},
//     reviews:{ type: [ReviewSchema], required: false},
//     menus:{ type: [MenuSchema], required: false},
//     location:{ type: [LocationSchema], required: true}


let places = [
  {
    place_id: 1,
    place_name:"sdfgdsafdsfsd",
    description:"sdfasdfdsagwegdfsgdfsgdfh",
    year_of_foundation: Date.now(),
    location : {lat: 123, long: 435}
  },
  {
    place_id: 2,
    place_name:"afdsfsd",
    description:"segdfsgdfsgdfh",
    year_of_foundation: Date.now(),
    location : {lat: 1123, long: 443}
  },

]
places.forEach((eachItem) => {
  new Place(eachItem).save();
  console.log("saved");
});

// Place.find().then(data => {
//   console.log(data);
// })