var express = require('express');
var router = express.Router();

router.post('/',function(req, res) {

});
router.get('/', function(req, res) {
  console.log(req.method);
      if (req.method.toLowerCase() == 'get') {
        res.sendFile('views/index.html', {root: process.cwd()});
    } else if (req.method.toLowerCase() == 'post') {
        console.log("Post");
    }
});


module.exports = router;
