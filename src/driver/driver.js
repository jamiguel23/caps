'use strict';


const socketClient = require('socket.io-client');

const socket = socketClient.connect('http://localhost:3002/caps');

socket.on('pickup', payload => {
  socket.emit('join', payload.store)
  console.log('Picked up order: ', payload.orderID);

  setTimeout(() => {
    socket.emit('in-transit', payload);
  },2000);

  setTimeout(() => {
    socket.emit('delivered', payload);
  }, 4000);

  setTimeout(() => {
    process.exit();
  },6000)
});

