'use strict';

const event = require('./events.js');

event.on('pickup', handleDeliv);


function handleDeliv(payload){
 setTimeout(() => {
  console.log('driver', payload.orderID)
  event.emit('in-transit', payload)
 }, 1000);

 setTimeout(() => {
   console.log(`DRIVER: delivered ${payload.orderID}`);
   event.emit('delivered', payload)
 }, 3000)
}
