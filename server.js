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
    .catch(err => {
      res.status(500).json({ message: 'Error getting car data.' })
    })
})

server.post('/', (req, res) => {
  const { body } = req;
  db('cars').insert(body)
    .then(car => {
      res.status(201).json(car)
    })
})

module.exports = server;