const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3004;
const db = require('../database/schema.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/id/reservation', (req, res) => {
    let reservation = (req.query);
    const partySize = reservation.size; //requested party size
    db.Restaurant.find({
        restaurantId: reservation.id //find the restaurant in the database based on id
    }, (err, results) => {
        const timeslots = results[0].timeslots; //array of all reservations for this restaurant
        const maxHeadCount = results[0].maxHeadCount; //how many people this restaurant can handle

        const thisTimeslot = timeslots.filter((timeSlot) => timeSlot.time === reservation.time);//returns an array of reservations under that time. it will always be just one object in this array

        //if the reservations in this timeslot exist (are bigger than 0 reservations)
        //and party size is smaller than maximum allowed spots minus already taken spots or if the reservations in this timeslot don't exist and max allowed headcount doesn't exceed the partysize
        //send available
        //otherwise send not available

        ((thisTimeslot.length > 0) && (partySize < (maxHeadCount - thisTimeslot[0].currentHeadCount)) ||
            ((thisTimeslot.length === 0) && (partySize < maxHeadCount)))
            ? res.end('available')
            : res.end('not available')
    })
})
app.listen(port, () => console.log(`Open Table reservations listening on port ${port}!`));
