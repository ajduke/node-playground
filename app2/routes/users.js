var express = require('express');
var mongojs = require('mongojs');
var router = express.Router();

var db = mongojs('localhost:27017/starbucks', ['users']);

var Users = [];
router.get('/', function(req, res, next){
  res.send({
    message: 'root of API'
  })
});

router.get('/user', function(req, res, next) {
  db.users.find({},{}, function(err, doc){
    res.status(200).send({
      status: 200,
      data: {
        users: doc
      }

    });
  });

});


router.post('/user', function(req, res, next){
  var username = req.body.username;
  var user_id = req.body.user_id;
  var obj = {
    user_id: user_id,
    username: username
  };

  db.users.insert(obj, function(err, doc){
    if(err) {
      res.status(500).end({
        status: 500,
        users: doc
      });
    } else {
      res.send({
        status: 200,
        users: doc
      });
    }
  })



});


router.put('/user', function(req, res, next){
  var user_id = req.body.user_id;
  var username = req.body.username;


  db.users.update({user_id: user_id}, {$set:{userame: username}}, function(err, doc){
    if(err){
      console.log("Error ", err.code);
      res.status(500).send({
        status: 500,
        data: doc
      })
      return
    }

    res.send({
      status: 200,
      message: 'updated the user...',
      doc: doc
    })
  })

});


router.delete('/user', function(req, res, next){
  var user_id = req.body.user_id;
  db.users.remove({user_id: user_id}, function(err, doc){
    if(err){
      console.log("Error ", err.code);
      res.status(500).send({
        status: 500,
        data: doc
      })
      return
    }
  })
  res.send({
    status: 200,
    method:'delete'
  })
});

module.exports = router;
