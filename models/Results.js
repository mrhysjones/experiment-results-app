var mongoose = require('mongoose');

var ResultSchema = new mongoose.Schema({
  experimentID: {type: String, required: true},
  experimentName: {type: String, required: true}, 
  itemData: [{
    itemID: {type: String, required: true}, 
    data: {type: String, required: true},
    dataType: {type: String, enum: ['twitter', 'youtube', 'webpage'], required: true}, 
    displaySeconds: {type: Number, required: true}
  }], 
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