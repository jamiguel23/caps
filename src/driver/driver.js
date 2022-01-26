'use strict';


const URL = 'http://localhost:2000'

const socketioClient = require('socket.io-client');
const socket = socketioClient.connect(URL);
const caps = socketioClient.connect(`${URL}/caps`)


// caps.on('pickup', handleDeliv);
caps.on('driver-pickup', () => {
  console.log('w/e')
});


function handleDeliv(payload){

 setTimeout(() => {
  console.log('driver handling order #', payload.orderID)
  caps.emit('in-transit', payload)
 }, 1000);

//  setTimeout(() => {
//    console.log(`DRIVER: delivered ${payload.orderID}`);
//    socket.emit('delivered', payload)
//  }, 3000)
}
