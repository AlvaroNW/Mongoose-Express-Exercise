const mongoose = require('mongoose')
require('dotenv').config();

module.exports = () =>{
    mongoose
    .connect(process.env.MONGODB_URI,)
    .then(() => console.log('Connected to Mongo'))
    .catch((err) => console.log(err));

}
