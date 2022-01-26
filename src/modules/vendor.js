'use strict';

// const event = require('../events');

const socketioClient = require('socket.io-client');
const socket = socketioClient.connect('http://localhost:3002');


// socket.on('banana', payload => {
//   console.log(payload);
// })

setInterval(() => {
  let delivery = {
    store: 'Pat Salmon Cookies',
    orderID: '86753092813308004',
    customer: 'Mike Jones',
    address: '1234 Main St'
  }
  console.log('Delivery received', delivery)
  socket.emit('pickup', delivery) 
}, 5000)

socket.on('delivered', handleDeliv);

function handleDeliv(payload) {
  console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
}
