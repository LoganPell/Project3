const mongoose = require('mongoose');

const doughDataSchema = new mongoose.Schema({
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
  //Dollar amount
  dataAmount: {
    type: Number,
  },
  //when type is active
  dataDate: {
    type: Date
  },
  dataReccurance: {
    type: String,
    default: 'One Time'
  },
  timestamp: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('doughData', doughDataSchema);