var mongoose = require('mongoose');

var OutfitSchema = new mongoose.Schema({
  image: {type: String},
  description: {type: String},
  date: {type: Date},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
});

module.exports = mongoose.model('outfit', OutfitSchema);
