'use strict';

const event = require('./events')
const vendor = require('./vendor')
const driver = require('./driver')




event.on('pickup', (payload) => 
  logEvent ('pickup', payload));
event.on('in-transit', (payload) => logEvent('in-transit', payload));
event.on('delivered', (payload) => logEvent('delivered', payload));


function logEvent(event, payload) {
  let timestamp = new Date();
  console.log('Event', {event, timestamp, payload});
}
