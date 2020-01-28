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

//create 100 restaurant documents in the database

let restaurants = [];

restaurantCount = 1;

for (var i = 0; i < 20; i++) {

    let restaurantOne = {
        restaurantId: restaurantCount,
        numberOfBookings: 21, //goes to the bottom of the component
        maxHeadCount: 10,
        timeslots: [
            {
                time: '8:00 PM',
                currentHeadCount: 4
            }, {
                time: '8:30 PM',
                currentHeadCount: 10
            },
            {
                time: '9:00 PM',
                currentHeadCount: 6
            }, {
                time: '9:30 PM',
                currentHeadCount: 10
            }
        ]
    }
    let restaurantTwo = {
        restaurantId: restaurantCount + 1,
        numberOfBookings: 32, //goes to the bottom of the component
        maxHeadCount: 12,
        timeslots: [
            {
                time: '11:00 AM',
                currentHeadCount: 4
            }, {
                time: '12:30 PM',
                currentHeadCount: 1
            },
            {
                time: '2:00 PM',
                currentHeadCount: 8
            }, {
                time: '2:30 PM',
                currentHeadCount: 12
            }
        ]
    }
    let restaurantThree = {
        restaurantId: restaurantCount + 2,
        numberOfBookings: 45, //goes to the bottom of the component
        maxHeadCount: 8,
        timeslots: [
            {
                time: '6:00 PM',
                currentHeadCount: 12
            }, {
                time: '6:30 PM',
                currentHeadCount: 12
            },
            {
                time: '7:00 PM',
                currentHeadCount: 10
            }, {
                time: '7:30 PM',
                currentHeadCount: 12
            },
            {
                time: '8:30 PM',
                currentHeadCount: 12
            }
        ]
    }

    let restaurantFour = {
        restaurantId: restaurantCount + 3,
        numberOfBookings: 15, //goes to the bottom of the component
        maxHeadCount: 30,
        timeslots: [
            {
                time: '1:00 PM',
                currentHeadCount: 25
            }, {
                time: '3:30 PM',
                currentHeadCount: 2
            },
            {
                time: '4:30 PM',
                currentHeadCount: 2
            },
            {
                time: '5:00 PM',
                currentHeadCount: 8
            }, {
                time: '8:30 PM',
                currentHeadCount: 30
            }
        ]
    }

    let restaurantFive = {
        restaurantId: restaurantCount + 4,
        numberOfBookings: 7, //goes to the bottom of the component
        maxHeadCount: 16,
        timeslots: [
            {
                time: '5:00 PM',
                currentHeadCount: 16
            }, {
                time: '5:30 PM',
                currentHeadCount: 16
            },
            {
                time: '6:00 PM',
                currentHeadCount: 16
            },
            {
                time: '6:30 PM',
                currentHeadCount: 16
            },
            {
                time: '7:00 PM',
                currentHeadCount: 16
            },
            {
                time: '7:30 PM',
                currentHeadCount: 16
            },
            {
                time: '8:00 PM',
                currentHeadCount: 16
            }
        ]
    }

    restaurants.push(restaurantOne);
    restaurants.push(restaurantTwo);
    restaurants.push(restaurantThree);
    restaurants.push(restaurantFour);
    restaurants.push(restaurantFive);
    restaurantCount = restaurantCount + 5;
}

//run this file once to load the fake data
//Restaurant.insertMany(restaurants);

let findSlot = () => {
    Restaurant.find();
}

module.exports.findSlot = findSlot;