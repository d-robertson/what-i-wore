var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

// create a schema
var userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    var returnJson = {
      id: ret._id,
      email: ret.email
    };
    return returnJson;
  }
});

userSchema.methods.authenticated = function(password, callback) {
  var user = this;
  var isAuthenticated = bcrypt.compareSync(password, user.password);
  console.log(isAuthenticated);

  callback(null, isAuthenticated ? user : false)
};

userSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    next();
  } else {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  }
});

var User = mongoose.model('User', userSchema);
module.exports = User;
