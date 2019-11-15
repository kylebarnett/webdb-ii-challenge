const express = require('express');
const helmet = require('helmet');
const server = express();
const db = require('./data/dbConfig.js');
server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  db('cars')
  .then(results => {
    res.json(results)
  })
})
module.exports = server;