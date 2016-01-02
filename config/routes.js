var express = require('express');
var router = module.exports = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});
