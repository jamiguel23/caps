'use strict';

const event = require('./events');


setInterval(() => {
  let delivery = {
    store: 'Pat Salmon Cookies',
    orderID: '86753092813308004',
    customer: 'Mike Jones',
    address: '1234 Main St'
  }
  console.log('this is something', delivery)
  event.emit('pickup', delivery) 
}, 5000)

event.on('delivered', handleDeliv);

function handleDeliv(payload) {
  console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
}
