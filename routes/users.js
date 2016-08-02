var express = require('express');
var router = express.Router();

var rawUser = {
  user_id             : '12313212345',
  claims              : [
    '/claims/654564',
    '/claims/6542164',
    '/claims/6545664',
  ],     //URLs to claim resources

  policies            : [
    '/policies/141615431',
    '/policies/141615432',
    '/policies/141615433'
  ],     //URLs to policy resources
  vehicles            : [
    '/vehicles/456465465',
    '/vehicles/456465466',
    '/vehicles/456465467'
  ],     //URLs to vehicle resources

  first_name          : 'Hail',
  middle_initial      : '.',
  last_name           : 'Hydra',

  gender              : 'male',
  ssn                 : '12134616',
  license_number      : '12536136721',

  address             : 'Haidian District',
  address2            : 'Chaoyang District',
  city                : 'Beijing',
  state               : 'valid',
  phone               : '15600560999',
  email               : '34513141641@gmail.com',
  reg_unix_secs       : 12362576,
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
