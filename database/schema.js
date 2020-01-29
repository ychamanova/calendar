const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurant-calendar', { useMongoClient: true });
const restaurantSchema = mongoose.Schema({
    restaurantId: Number,
    numberOfBookings: Number, //goes to the bottom of the component
    maxHeadCount: Number, //max head count per 30 minute interval
    timeslots: [
        {
            time: String, // array of objects
            currentHeadCount: Number
        }
    ]
});

let Restaurant = mongoose.model('Restaurant', restaurantSchema);

let findSlot =
    Restaurant.find()


module.exports.restaurantSchema = restaurantSchema;
module.exports.Restaurant = Restaurant;
module.exports.findSlot = findSlot;