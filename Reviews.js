var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Review schema
var ReviewSchema = new Schema({
  movieId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Movie', 
    required: true 
  },
  username: { 
    type: String, 
    required: true, 
    trim: true 
  },
  review: { 
    type: String, 
    required: true 
  },
  rating: { 
    type: Number, 
    required: true, 
    min: 0, 
    max: 5 
  }
});

// return the model
module.exports = mongoose.model('Review', ReviewSchema);