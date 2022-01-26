'use strict';

const socketio=require('socket.io');

const PORT = process.env.PORT || 3002;

const server = socketio(PORT);


server.on('connection', (socket) => {

  console.log('Connection made');
  // socket.emit('banana', {
  //   data: "banana",
  // })
});

// pickup event
server.on('pickup', (payload) =>  logEvent ('pickup', payload));

server.on('in-transit', (payload) => logEvent('in-transit', payload));

function logEvent(event, payload) {
  let timestamp = new Date();

  console.log('Event', {event, timestamp, payload});
}
