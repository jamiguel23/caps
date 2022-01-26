'use strict';

// const event = require('../events.js');

const socketioClient = require('socket.io-client');
const socket = socketioClient.connect('http://localhost:3002');

socket.on('banana', payload => {
  console.log(payload);
})

socket.on('pickup', handleDeliv);


function handleDeliv(payload){
 setTimeout(() => {
  console.log('driver', payload.orderID)
  socket.emit('in-transit', payload)
 }, 1000);

//  setTimeout(() => {
//    console.log(`DRIVER: delivered ${payload.orderID}`);
//    socket.emit('delivered', payload)
//  }, 3000)
}
