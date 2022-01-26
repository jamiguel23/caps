'use strict';

// const event = require('../events');
const URL = 'http://localhost:2000'

const socketioClient = require('socket.io-client');
const socket = socketioClient.connect(URL);
const caps = socketioClient.connect(`${URL}/caps`)

let delivery = {
  store: 'Pat Salmon Cookies',
  orderID: '86753092813308004',
  customer: 'Mike Jones',
  address: '1234 Main St'
}

caps.on('pickup', (delivery) => {
  setInterval(() => {

    let delivery = {
      store: 'Pat Salmon Cookies',
      orderID: '86753092813308004',
      customer: 'Mike Jones',
      address: '1234 Main St'
    }
    
  console.log('Delivery received', delivery)
  caps.emit('driver-pickup', delivery) 

  }, 5000)

})

// setInterval(() => {
  // let delivery = {
  //   store: 'Pat Salmon Cookies',
  //   orderID: '86753092813308004',
  //   customer: 'Mike Jones',
  //   address: '1234 Main St'
  // }
  // console.log('Delivery received', delivery)
  // caps.emit('pickup', delivery) 
// }, 5000)

// caps.on('delivered', handleDeliv);

// function handleDeliv(payload) {
//   console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
// }
