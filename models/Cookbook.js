//import connection
const mongoose = require('../db/connection')
const Schema = mongoose.Schema

/* Create Cookbook as new schema
    Properties:
    title (string),
    yearPublished (integer),
*/
const cookbookSchema = new mongoose.Schema({
    title: String,
    yearPublished: {type: Number},
})

//export model
const Cookbook = mongoose.model('Cookbooks', cookbookSchema);

module.exports = Cookbook;
