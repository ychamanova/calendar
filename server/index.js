const express = require('express');
const app = express();
const port = 3004;
const db = require('../database/schema.js')

//app.use(express.static());
app.use(express.json());

//app.use(express.static('public'));

app.get('/reservation', (req, res) => {
    let reservation = (req.query);
    //pass on a query object to database
    //id, size, time
    //send response based on the data
    console.log(db.findSlot);
    //find all reservations
    db.findSlot.exec((err, data) => {
        res.send(data);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
