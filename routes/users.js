var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('User');

router.get('/', function(req, res, next) {
  User.find().then(function(user){
    return res.send(user);
  }).catch(function(e) {
    return res.sendStatus(404);
  });
});

router.get('/getById/:id', function(req, res, next) {
  User.findById(req.params.id).then(function(user) {
    return res.send(user);
  }).catch(function(e) {
    return res.sendStatus(404);
  });
});

router.post('/create', function(req, res, next) {
  var user = new User();
  user.username = req.body.username;
  user.email = req.body.email;
  user.password = req.body.password;

  return user.save().then(function(){
    return res.sendStatus(200);
  }).catch(function(e) {
    return res.sendStatus(404);
  });
});

module.exports = router;
