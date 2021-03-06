// REQUIRE PACKAGES ------------------------------------------------------------
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');

// DB CONFIGURATION ------------------------------------------------------------
// user schema

var UserSchema = new Schema({
    // name: String,
    // username: { type: String, required: true, index: { unique: true }},
    // password: { type: String, required: true, select: false }

    //  ^---- example of schema. customize it
});

// hash password before user is saved
UserSchema.pre('save', function(next){
    var user = this;

    // hash the password only if the password has been changed or user is new 
    if (!user.isModified('password')) return next();

    // generate hash
    bcrypt.hash(user.password, null, null, function(err, hash) {
        if (err) return next(err);

        // change the password to the hashed version
        user.password = hash;
        next();
    });
});

// method to compare a given password with the database hash
UserSchema.methods.comparePassword = function(password) {
    var user = this;

    return bcrypt.compareSync(password, user.password);
};

// export model
module.exports = mongoose.model('User', UserSchema);