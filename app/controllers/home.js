const express = require('express');

const router = express.Router();

const Counter = require('../models/counter');

let counter = new Counter();
// get home page
router.get('/', (req, res, next) => {
  // render the view
  res.render('index', { title: 'Counter', counter: counter });
});

router.get('/count', (req, res, next) => {
  // delegate request
  counter.count();
  // render view
  res.render('index', { title: 'Counter', counter: counter });
});

module.exports = router;
