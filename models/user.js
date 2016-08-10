var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

// create a schema
var UserSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// var User = mongoose.model('User', userSchema);

UserSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    var returnJson = {
      id: ret._id,
      email: ret.email
    };
    return returnJson;
  }
});

UserSchema.methods.authenticated = function(password, callback) {
  var user = this;
  var isAuthenticated = bcrypt.compareSync(password, user.password);
  console.log(isAuthenticated);

  callback(null, isAuthenticated ? user : false)
};

UserSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    next();
  } else {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  }
});


module.exports = mongoose.model('User', UserSchema);
