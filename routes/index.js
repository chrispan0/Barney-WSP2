var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

router.get('/video', function(req, res) {
  res.render('video', { title: 'Video' }); // This renders video.ejs
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

router.get('/thanks', function(req, res, next) {
  res.render('thanks', { title: 'Thank You' });
});

module.exports = router;
