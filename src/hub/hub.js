'use strict';

const socketio=require('socket.io');

const PORT = process.env.PORT || 3008;

const server = socketio(PORT);
const nameSpace = server.of('/caps')

server.on('connection', (socket) => {

  console.log('Connection made', socket.id);
  // socket.emit('banana', {
  //   data: "banana",
  // })
});

// pickup event
server.on('connection', (socket) => {
  nameSpace.on('pickup', (payload) => {
    nameSpace.broadcast.emit('pickup', payload)
    logger('pickup', payload);
  });
  // caps.emit('pickup', payload);
});
// In-transit
server.on('in-transit', (payload) => logEvent('in-transit', payload));

function logEvent(event, payload) {
  let timestamp = new Date();

  console.log('Event', {event, timestamp, payload});
}
