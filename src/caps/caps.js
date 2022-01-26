'use strict';


const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

const router = require('./router')

app.use(router);

app.listen(PORT, 
  () => 
  console.log(`Server is running on port ${PORT}`));
  

// const event = require('../events.js')
// const vendor = require('../modules/vendor.js')
// const driver = require('../modules/driver.js')

// const socket = socketioClient.connect('http://localhost:3001');



// socket.on('pickup', (payload) => logEvent ('pickup', payload));
// socket.on('in-transit', (payload) => logEvent('in-transit', payload));
// socket.on('delivered', (payload) => logEvent('delivered', payload));
 

// function logEvent(event, payload) {
//   let timestamp = new Date();

//   console.log('Event', {event, timestamp, payload});
// }
