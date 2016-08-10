var express = require('express');
var User = require('../models/user');
var router = express.Router();

// Signup route
router.post('/', function(req, res) {
  // see if the user already exists by checking their email and comparing to the database
  console.log('hey');
  User.findOne({email: req.body.email}, function(err, user) {
    if (user) return res.status(400).send({message: "Email already exisits"});

    User.create(req.body, function(error, user) {
      if (err) return res.status(500).send(error);

      return res.send(user);
    });
  });
});

router.get('/:id', function(req, res) {
  User.findById(req.params.id, function(error, user) {
    if (error) return res.status(500).send(error);

    return res.send(user);
  });
});

module.exports = router;
// CREATE SEPARATE FILE OR ROUTE FOR LOGIN. IT SHOULD BE A POST ROUTE
// IF LOGIN INFO IS EQUAL TO REQ.BODY.EMAIL AND PASSWORD, return res.send(user);
