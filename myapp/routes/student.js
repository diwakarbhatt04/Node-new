var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/list', function(req, res, next) {
	console.log('got the route');
	var con = req.con;
	con.query('select * from student;', function(errors,students){
		res.render('student/index', {title: 'Node', students: students});
	});
});


router.get('/read/', function(req,res,next)
    {
    	var con = req.con;
    	con.query('select * from student;', function(errors,students){
    	res.render('student/read', {title: 'Node', students: students});
	  });
    });

router.get('/delete/:id', function(req,res,next){
	res.send("delete");
	con.query('select * from student;', function(errors,students){
    	res.render('student/read', {title: 'Node', students: students});
	  });
});

// show ADD student Form
router.get('/add/',function(req,res,next){
	res.render('student/add');
});

router.post('/add/', function(req,res,next){
	// var data = {
 //            name: req.sanitize('name').escape().trim(),
 //            p_no: req.sanitize('p_no').escape().trim(),
 //        }
	var con = req.con;
		//req.flash('success', 'Data added successfully!');
	con.query('INSERT INTO 'student'('name','p_no') VALUES('diwakar', 122345);', function(errors,students){
    	
    	res.redirect('student/read');
	  });
});


router.get('/edit/:id', function(req,res,next){
	res.send("edit");
});
module.exports = router;
   