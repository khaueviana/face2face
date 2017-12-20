var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('User');

var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

var loginRequired = require("./../helpers/loginRequired");

router.get('/', loginRequired, function (req, res, next) {
  User.find().then(function (user) {
    return res.send(user);
  }).catch(function (e) {
    return res.sendStatus(404);
  });
});

router.get('/:id', function (req, res, next) {
  User.findById(req.params.id).then(function (user) {
    return res.send(user);
  }).catch(function (e) {
    return res.sendStatus(404);
  });
});

router.post('/', function (req, res, next) {
  var user = new User();
  user.username = req.body.username;
  user.email = req.body.email;
  user.password = bcrypt.hashSync(req.body.password, 10);

  return user.save().then(function () {
    return res.sendStatus(200);
  }).catch(function (e) {
    return res.sendStatus(404);
  });
});

router.post('/signin', function (req, res) {
  User.findOne({
    email: req.body.email
  }, function (err, user) {
    if (err) throw err;
    if (!user) {
      res.status(401).json({ message: 'Authentication failed. User not found.' });
    } else if (user) {
      if (!user.comparePassword(req.body.password)) {
        res.status(401).json({ message: 'Authentication failed. Wrong password.' });
      } else {
        return res.json({ token: jwt.sign({ email: user.email, username: user.username, _id: user._id }, 'RESTFULAPIs') });
      }
    }
  });
});

router.put('/:id', function (req, res, next) {
  var id = req.params.id;

  var user = new User();
  user._id = id;
  user.username = req.body.username;
  user.email = req.body.email;
  user.password = req.body.password;

  User.findByIdAndUpdate(id, user).then(function (user) {
    return res.send(user);
  }).catch(function (e) {
    console.log(e);
    return res.send('Not Found');
  });
});

module.exports = router;
