'use strict';

// const event = require('../events');
const URL = 'http://localhost:3008'

const socketioClient = require('socket.io-client');
const socket = socketioClient.connect(URL);
const nameSpace = socketioClient.connect(`${URL}/caps`)


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
  nameSpace.emit('pickup', delivery) 
}, 5000)

// nameSpace.on('delivered', handleDeliv);

// function handleDeliv(payload) {
//   console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
// }
