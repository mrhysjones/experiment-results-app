var mongoose = require('mongoose');

var ResultSchema = new mongoose.Schema({
  experimentID: {type: String, required: true},
  itemID: {type: String, required: true}, 
  resultData: [{
  	emotionData: [{
  		happy: String, 
  		sad: String, 
  		surprise: String, 
  		fear: String, 
  		disgust: String, 
  		neutral: String, 
  		anger: String, 
  		contempt: String
  	}], 
    trackingData: [{
      data: Array
    }]
  }],
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Result', ResultSchema);