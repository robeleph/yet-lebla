const Food = require('./models/Food');
const User = require('./models/User');
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/appsss');

// food_id:{ type: Number, required: true, unique: true},
// food_name:{ type: String, required: true},
// price:{ type: String, required: true},
// ratings:{ type: [RatingSchema], required: false},
// pictures:{ type: [String], required: true},
// reviews:{ type: [ReviewSchema], required: false},
// posted_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
// date:{ type: Date, required: false},
// allowed_by:{ type: [ReligionSchema], required: false}

let foods = [
//   {
//     food_name:"Pizza",
//     price:"43.00",
//     post_date: Date.now()
//   },
  {
    food_name:"Pizza",
    price:"43.00",
    post_date: Date.now()
  }
]
foods.forEach((eachItem) => {
    User.find({user_id:1}).then(user => {
        eachItem.posted_by = user[0]._id;
        console.log(eachItem);
        new Food(eachItem).save(err => {
            if(err)
                console.log(err);
            else
                console.log("saved");
            });    
    });

});

// Place.find().then(data => {
//   console.log(data);
// })