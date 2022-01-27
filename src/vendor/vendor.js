'use strict';

// const event = require('../events');
const socketClient = require('socket.io-client');
const uuid = require('uuid').v4

const socket = socketClient.connect('http://localhost:3002/caps');

const storeName = '1-206-flowers';

socket.emit('join', storeName)

let payload = {
  store: storeName,
  orderID: uuid(),
  customer: 'Mike Jones',
  address: '1234 Main St'
}

setInterval(() => {

  socket.emit('pickup', payload)

}, 5000)





socket.on('delivered', handleDeliv);

function handleDeliv(payload) {
  console.log(`Order number ${payload.orderID} delivered`);
  process.exit();
}
