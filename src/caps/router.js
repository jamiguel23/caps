'use strict';

const express = require('express');
const router = express.Router();

const socketioClient = require('socket.io-client');
const socket = socketioClient.connect('http://localhost:3008');



let delivery = {
  store: 'Pat Salmon Cookies',
  orderID: '86753092813308004',
  customer: 'Mike Jones',
  address: '1234 Main St'
}

// router.post('/pickup', (req, res) => {
//   if (JSON.stringify(req.body) === '{}') {
//     req.body = delivery;
//   }
//   socket.emit('pickup', req.body);
//   res.status(200).send(`Delivery for order# ${JSON.stringify(req.body.orderID)}`);
// });


module.exports = router;
