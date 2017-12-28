var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/', function(req, res, next) {
    User.find().then(function(user) {
        return res.send(user);
    }).catch(function(e) {
        return res.sendStatus(404);
    });
});

router.get('/:id', function(req, res, next) {
    User.findById(req.params.id).then(function(user) {
        return res.send(user);
    }).catch(function(e) {
        return res.sendStatus(404);
    });
});

router.post('/', function(req, res, next) {
    var user = new User();

    user.insert({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }).then(function(response) {
        return response ? res.sendStatus(200) : res.sendStatus(400);
    });
});

router.post('/signin', function(req, res) {
    var user = new User();

    user.signin({
        username: req.body.username,
        password: req.body.password
    }).then(function(response) {
        if (response.isSuccess) {
            return res.send(response);
        } else {
            return res.status(401).json(response);
        }
    })
});

router.put('/:id', function(req, res, next) {
    var user = new User();

    user.update({
        _id: req.params.id,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }).then(function(response) {
        return res.sendStatus(user ? 200 : 404);
    })
});

module.exports = router;