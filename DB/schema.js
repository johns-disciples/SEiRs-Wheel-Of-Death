const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restingdb');
mongoose.Promise = global.Promise;

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
