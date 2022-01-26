'use strict';

// const event = require('../events');
const socketClient = require('socket.io-client');

const socket = socketClient.connect('http://localhost:3002/caps');

let payload = {
  store: 'Pat Salmon Cookies',
  orderID: '86753092813308004',
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
