var express = require('express');
var router = express.Router();

var rawUser = {
  user_id             : 'user_id:12345',
  claims              : [
    'claim_1:url',
    'claim_2:url',
    'claim_3:url'
  ],     //URLs to claim resources

  policies            : [
    'policy_1:url',
    'policy_2:url',
    'policy_3:url'
  ],     //URLs to policy resources
  vehicles            : [
    'vehicle_1:url',
    'vehicle_2:url',
    'vehicle_3:url'
  ],     //URLs to vehicle resources

  first_name          : 'Hail',
  middle_initial      : '.',
  last_name           : 'Hydra',

  gender              : 'male',
  ssn                 : 'ssn:12134616',
  license_number      : 'ln:12536136721',

  address             : 'Haidian District',
  address2            : 'Chaoyang District',
  city                : 'Beijing',
  state               : 'valid',
  phone               : '15600560999',
  email               : '34513141641@gmail.com',
  language            : 'English'
};

var user = {
  status: 200,
  users: rawUser
}
var users =  {
  status              : 200,
  users               : [
      rawUser,rawUser, rawUser
  ]
};


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

router.get('/:user_id', function(req,res,next){
  res.send(user);
});
module.exports = router;
