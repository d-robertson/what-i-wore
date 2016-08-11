var express = require('express');
var Outfit = require('../models/outfit');
// var User = require('../models/user');
var router = express.Router();

router.route('/')
  .post(function(req, res) {
    Outfit.create({
      image: req.body.image,
      description: req.body.description,
      date: req.body.date,
      user: req.user.id
       }, function(err, outfits) {
      if (err) return res.status(500).send(err);

      return res.send(outfits);
    });
  })
  .get(function(req, res) {
      Outfit.find({
        user: req.user.id
      }, function(err, outfit) {
        if (err) return res.status(500).send(err);

        return res.send(outfit);
      });
    });

// router.post('/', function(req, res) {
//     // // Outfit.create(req.body, function(err, outfits) {
//     //   console.log(User.outfit)
//     //   console.log(typeof User.outfit)
//     //   console.log(req.body)
//     //   if (User.outfit) {
//     //     User.outfit.push(req.body)
//     //   } else {
//     //     User.outfit = [];
//     //     User.outfit.push(req.body)
//     //   }
//     //   console.log(User.outfit)
//     //   User.save()(function(err, outfits) {
//     //   console.log(err)
//     //   if (err) return res.status(500).send(err);

//     //   // return res.send(User.outfits);
//     // });

//     // req.user => your user object

//     //find the user in the database

//     // add the outfit from req.body to the user

//     // save

//     // return a response
// });



  router.route('/:id')
    .get(function(req, res) {
      Outfit.findById(req.params.id, function(err, outfit) {
        if (err) return res.status(500).send(err);

        return res.send(outfit);
      });
    })
    .put(function(req, res) {
      Outfit.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if (err) return res.status(500).send(err);

        return res.send({ message: 'success' });
      });
    })
    .delete(function(req, res) {
      Outfit.findByIdAndRemove(req.params.id, function(err) {
        if (err) return res.status(500).send(err);

        return res.send({ message: 'success' });
      });
    });




module.exports = router;
