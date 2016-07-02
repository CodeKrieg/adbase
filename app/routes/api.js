// REQUIRE PACKAGES ------------------------------------------------------------
var User       = require('../models/user');
var jwt        = require('jsonwebtoken');
var config     = require('../../config');

// API ROUTES CONFIGURATION ----------------------------------------------------
var secret = config.secret;

module.exports = function(app, express) {

    // express router instance
    var apiRouter = express.Router();

    // CODE FOR JWT AUTHENTICATION TO BE ADDED HERE


    return apiRouter;
};