// grab modules

// export routes
module.exports = function(index) {
    // index routes ===============
    // root
    index.get('/', function(req, res){
        res.render('../public/views/index.jade', {
            user: req.user
        });
    });
};