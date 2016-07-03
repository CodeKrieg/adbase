// REQUIRED PACKAGES -----------------------------------------------------------
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;
    pug      = require('pug');

//USER SCHEMA -----------------------------------------------------------
var AdSchema = new Schema({
    Title: String,
    URL: { type: String, index: { unique: true }},
    Image: { type: String, required: true, select: false },
    Description: { type: String, require: true },
    Tags: { type: String },
    Author: { type: String },

});

// Exports the business module

module.exports = mongoose.model('Ad', AdSchema );