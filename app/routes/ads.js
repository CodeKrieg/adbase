// grab modules

// export routes
module.exports = function(ads) {
    
    // GET /ads 
    ads.get('/ads', function(req, res){
        res.render('/public/views/ads.jade');
    });
};