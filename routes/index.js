var express = require('express');
var boards = require('./boards')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<p>HTML Data</p>');
});

app.use('/boards', boards);


module.exports = router;
