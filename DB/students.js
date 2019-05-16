const mongoose = require('mongoose');
const db = require('./mongo.js');

const studentSchema = new mongoose.Schema({
  id: Number,
  name: String,
  profilePic: String,
  lastCalled: Number,
  timesCalled: String,
  notes: Array,
});

const studentData = mongoose.model('studentData', studentSchema);

export default studentData;
