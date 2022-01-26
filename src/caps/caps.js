'use strict';


const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3008;

const router = require('./router')

app.use(router);

app.listen(PORT, 
  () => 
  console.log(`Server is running on port ${PORT}`));

