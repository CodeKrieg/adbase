// BASE SETUP
// =============================================================================

// REQUIRE PACKAGES ------------------------------------------------------------
var express    = require('express'),
    app        = express();
var bodyParser = require('body-parser');
var morgan     = require('morgan');
var mongoose   = require('mongoose');
var path       = require('path');
var config     = require('./config'); // internal module


// APP CONFIGURATION
// =============================================================================

// use body-parser to grab information from POST req.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configuration to handle CORS requests
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Hedears', 'X-Requested-With,content-type, Authorization' );
    next();
}); 

// log requests to the console
app.use(morgan('dev'));

// connect to database
mongoose.connect(config.database);

// static files location
app.use(express.static(__dirname + '/public'));


// API ROUTES ==================================================================
var apiRoutes = require('./app/routes/api')(app, express);
app.use('/api', apiRoutes);

// main catchall route that sends users to front-end angular
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + "/public/app/views/index.html"));
});


// START SERVER ================================================================
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The server is up!");
});

