'use strict';


const socketio = require('socket.io');

const PORT = process.env.PORT || 3002;

const server = socketio(PORT); 
const caps = server.of('/caps');

const queue = {
  // packages: {},
  // addPackage: function() {},
  // removePackage: function() {},
}

caps.on('connection', (socket) =>  {
  console.log('socket connected');

  socket.on('join', room => {
    socket.join(room);
    console.log(socket.id, 'joined', room, 'room')
  });

  socket.on('pickup', payload => {

    logEvent('pickup', payload)
    queue[payload.orderID] = payload
    console.log('queue after emitting pickup', queue);
    socket.broadcast.emit('pickup', payload);
  });
  socket.on('in-transit', payload => {
    
    logEvent('in-transit', payload)
  });
  socket.on('delivered', payload => {
    
    logEvent('delivered', payload)
    socket.broadcast.emit('delivered', payload);
    // socket.in(payload.store).emit('delivered', payload);
    delete queue[payload.orderID];
    console.log('queue after delivery', queue)
  });


});

function logEvent(event, payload) {
  let timestamp = new Date();

  console.log('Event', {event, timestamp, payload});
}
