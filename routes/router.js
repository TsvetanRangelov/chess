var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.sendFile('views/index.html', {root: process.cwd()});
});

router.get('/home', function(req, res){
  res.sendFile('views/home.html', {root: process.cwd()});
});


module.exports = router;
