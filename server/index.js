const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const port = 3001;
const db = require('../database/schema.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('public',
  {
    setHeaders: function (res, path) {
      res.setHeader("Access-Control-Allow-Origin", "*");
    }
  }));

app.get('/reservation', (req, res) => {
  const reservation = (req.query);
  // requested party size
  const partySize = reservation.size;
  db.Restaurant.find({
    // find the restaurant in the database based on id
    restaurantId: reservation.id,
  }, (err, results) => {
    // array of all reservations for this restaurant
    const { timeslots } = results[0];
    // how many people this restaurant can handle
    const { maxHeadCount } = results[0];
    // returns an array of reservations under that time. it will always be just one object in this array
    const thisTimeslot = timeslots.filter((timeSlot) => timeSlot.time === reservation.time);

    // if the reservations in this timeslot exist (are bigger than 0 reservations)
    // and party size is smaller than maximum allowed spots minus already taken spots or if the reservations in this timeslot don't exist and max allowed headcount doesn't exceed the partysize
    // send available timeslots
    // otherwise send not available

    if ((thisTimeslot.length > 0)
      && (partySize < (maxHeadCount - thisTimeslot[0].currentHeadCount))
      || ((thisTimeslot.length === 0) && (partySize < maxHeadCount))) {
      // send three available dates to book the place
      res.set('Access-Control-Allow-Origin', '*')
      res.end(JSON.stringify(['7:15 PM', '7:30 PM', '8:00 PM']));
    } else {
      res.end('not available');
    }
  });
});
app.listen(port);
