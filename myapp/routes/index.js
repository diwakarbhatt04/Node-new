var express = require('express');
var router = express.Router();

/* GET home page. */
var student = [{
	          id:"1",
	          name:"Arun",
	          p_no:"455646"
             },
             { id:"2",
	          name:"Arjun",
	          p_no:"78646"}];
router.get('/table', function(req, res, next) {
  res.render('index', { title: 'Node', array: student });
});

module.exports = router;
