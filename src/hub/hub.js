'use strict';

const PORT = process.env.PORT || 2000;
const socketio=require('socket.io')(PORT);
socketio.on('connection', (socket) => {
  console.log('CORE', socket.id)
  console.log('****************');
})

// const server = socketio(PORT);
const caps = socketio.of('/caps')

caps.on('connection', (socket) => {

  socket.emit('pickup')
  // console.log('Connection made', socket.id);
  socket.on('pickup', (payload) => {
    console.log('pick');
    logEvent('pickup', payload);
    // caps.emit('pickup', payload)
  })
  socket.emit('driver-pickup');

  // socket.on('join', (room) => {
  //   console.log('created room');
  //   socket.join(room);
  // })
  // socket.emit('banana', {
  //   data: "banana",
  // })
});



// pickup event
// server.on('connection', (socket) => {
//   caps.on('pickup', (payload) => {
//     caps.broadcast.emit('pickup', payload)
//     logger('pickup', payload);
//   });
  // caps.emit('pickup', payload);
// });
// In-transit
// server.on('in-transit', (payload) => logEvent('in-transit', payload));

function logEvent(event, payload) {
  let timestamp = new Date();

  console.log('Event', {event, timestamp, payload});
}
