var mongoose = require('mongoose');

var ResultSchema = new mongoose.Schema({
  experimentID: {type: String, required: true},
  itemID: {type: String, required: true}, 
  resultData: [{
  	emotionData: [{
  		angry: Number, 
  		contempt: Number, 
  		disgust: Number, 
  		fear: Number, 
  		happy: Number, 
  		sadness: Number, 
  		surprise: Number, 
  		neutral: Number
  	}], 
    trackingData: [{
      data: Array
    }]
  }],
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Result', ResultSchema);