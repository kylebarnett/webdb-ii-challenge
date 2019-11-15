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

server.get('/:id', (req, res) => {
  const { id } = req.params;
  db('cars').where({ id })
    .then(car => {
      if (car.length > 0) {
        res.status(200).json(car)
      } else {
        res.status(404).json({ message: `${id} not found.` })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Error getting ID.' })
    })
})

server.post('/', (req, res) => {
  const { body } = req;
  db('cars').insert(body)
    .then(car => {
      res.status(201).json(car)
    })
    .catch(err => {
      res.status(500).json({ message: 'Error creating car entry.' })
    })
})

module.exports = server;