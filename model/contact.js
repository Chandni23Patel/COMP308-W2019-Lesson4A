let mongoose = require('mongoose');

//create model class
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
},
{
    collection: "first"
} );

module.exports = mongoose.model('demo',contactSchema);