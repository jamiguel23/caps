'use strict';


const socketio = require('socket.io');

const PORT = process.env.PORT || 3002;

const server = socketio(PORT); 
const caps = server.of('/caps');


caps.on('connection', (socket) =>  {
  console.log('socket connected');


  socket.on('join', room => {
    socket.join(room);
  });

  // receive package waiting to be picked up
  socket.on('pickup', payload => {

    socket.broadcast.emit('pickup', payload);
    logEvent('pickup', payload)
  });
  socket.on('in-transit', payload => {
    // run logger
    // socket.emit('in-transit', payload);
    logEvent('in-transit', payload)
  });
  socket.on('delivered', payload => {
    
    socket.broadcast.emit('delivered', payload);
    logEvent('delivered', payload)
  });

  

});

function logEvent(event, payload) {
  let timestamp = new Date();

  console.log('Event', {event, timestamp, payload});
}
