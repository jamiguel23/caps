'use strict';


const URL = 'http://localhost:3008'

const socketioClient = require('socket.io-client');
const socket = socketioClient.connect(URL);
const nameSpace = socketioClient.connect(`${URL}/caps`)


nameSpace.on('pickup', handleDeliv);


function handleDeliv(payload){
 setTimeout(() => {
  console.log('driver handling order #', payload.orderID)
  nameSpace.emit('in-transit', payload)
 }, 1000);

//  setTimeout(() => {
//    console.log(`DRIVER: delivered ${payload.orderID}`);
//    socket.emit('delivered', payload)
//  }, 3008)
}
