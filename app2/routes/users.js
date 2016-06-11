var express = require('express');
var router = express.Router();

var Users = [];

router.get('/user', function(req, res, next) {
  res.status(200).send({
    users: Users
  });
});


router.post('/user', function(req, res, next){

  var username = req.body.username;
  var user_id = req.body.user_id;
  var obj = {
    user_id: user_id,
    username: username
  };
  Users.push(obj);
  res.send({
    status: 200,
    method: 'post',
    users: Users
  });
});


router.put('/user', function(req, res, next){
  var user_id = req.body.user_id;
  var username = req.body.username;

  for(var u in Users){
    var usr = Users[u];
    if(usr.user_id === user_id){
      usr.username = username;
      break;
    }
  }
  res.send({
    status: 200,
    message: 'updated the user...'
  })
});


router.delete('/user', function(req, res, next){
  var user_id = req.body.user_id;
  var username = req.body.username;

  var indx = -1;
  for(var u in Users){
    var usr = Users[u];
    if(usr.user_id === user_id){
      indx = u;
      break;
    }
  }
  if(indx !== -1 ){
    Users.splice(indx, 1);
  }
  res.send({
    status: 200,
    method:'delete'
  })
});

module.exports = router;
