const mongoose = require('mongoose');

const doughSettingsSchema = new mongoose.Schema({
  userID: {
    type: String,
    default: ''
  },
  //dough, bill, goal
  dataType: {
    type: String,
    default: ''
  },
  //Source desc, bill desc, goal desc
  dataDesc: {
    type: String,
    default: ''
  },
  timestamp: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('doughSetting', doughSettingsSchema);