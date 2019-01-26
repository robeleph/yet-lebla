const User = require('./models/User');
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/appsss');

// user_id:{ type: Number, required: true},
// firstname:{ type: String, required: true},
// lastname:{ type: String, required: true},
// username:{ type: String, required: true},
// email:{ type: String, required: true},
// password:{ type: String, required: true},
// religion:{ type: ReligionSchema, required: false},
// recommended_food: {type: [], required: false},
// rated_food_list: {type: [], required: false}

let users = [
  {
    user_id: 1,
    firstname:"tibebeselasie",
    lastname:"mehari",
    username:"tibebe",
    password:"password",
    email: "tibebe@gmail.com"
  }
]
users.forEach((eachItem) => {
  new User(eachItem).save();
  console.log("saved");
});

// Place.find().then(data => {
//   console.log(data);
// })