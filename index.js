const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
// Cross Origin Resource Sharing is 'Enabled'
app.use(cors());
// Hotel Stay Services Posts
const hotelStays = require('./data/hotelStays.json');
// Travel Destination Lists
const travelDest = require('./data/travelDest.json');

app.get('/',(req,res) => {
    res.send("Hello Travel Guru Server")
})
// Destination Data API
app.get('/destination',(req,res) => {
    res.send(travelDest);
})
// Hotel Stays Services Posts API
app.get('/hotelStays/:id',(req,res)=>{
    const id = req.params.id;
    const hotelRoomStays = hotelStays.filter(stay => stay.location_id === id );
    res.send(hotelRoomStays);
})

app.listen(port, ()=>{
    console.log("The server is running on the port:",port);
})
