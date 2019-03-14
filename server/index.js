const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const redis = require('redis');
const PORT = process.env.PORT || 3000;
import client from '../DB/redis.js';

const numOfStudentsNotCalledYet;
// Temp script to generate data for testing
const seedData = require('../DB/dummyData.json');

const app = express();
app.use(express.static(path.join(__dirname, '../dist')));
// For when/if we send data to client we can practice sending it in a body
app.use(bodyParser({extended: true}));
// So we don't have to specify a bunch of headers
app.use(cors());

// Temp dev route
app.get('/dev', function (req, res) {
  const studentData = seedData;
  res.send(studentData)
})

//GET ALL STUDENTS
app.get('/students', function (req, res) {

  //TODO: need to install ioredis to get all hashes

});

//GET RANDOM STUDENT
app.get('/students/leastpicked', function (req, res) {
  const randomNum = Math.floor(Math.random() * numOfStudentsNotCalledYet);
  const randomName = client.lindex('notCalledYet', randomNum);

  client.hgetall(randomName, function(err, object) {
    if (err) { console.log('Could not get random student: ', err); }
    else { res.send(object); }
  });

});


//ADD ENTIRE CLASS
app.post('/class/submit', function(req, res) {

//If called, can add lastCalled and notes prop
  const studentNames = req.body;

  for (var i = 0; i < studentNames.length; i++) {
    client.hmset(`${studentNames[i]}`, {
      'id': `${i}`,
      'fullname': studentNames[i],
      'profilePic': 'somePic'
    }, function(err, reply) {
      if (err) { console.log('Could not add class: ', err); }
      else { console.log('Class added successfully!'); }
    });

    client.rpush([`notCalledYet`, studentNames[i]], function(err, reply) {
      if (err) { console.log('Could not add student names', err) }
      else {
        numOfStudentsNotCalledYet = reply;
        console.log('Names added:', reply);
      }
    });
  }
});

// Allows for the update of how many times a student has been called
app.post('/student/:studentId', function (req, res) {
  let {studentId} = req.params;
  seedData[studentId - 1].timesCalled++;
  res.sendStatus(202);
});

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
})