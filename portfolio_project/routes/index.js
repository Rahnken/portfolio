var express = require('express');
var router = express.Router();

/* GET INDEX PAGE page. */
router.get('/', function(req, res, next) {


  res.render('index', { title: 'Eric Donnelly '});

});
module.exports = router;