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

  addresses             : [
    {
      location  :  'haidian',
      type      : 'notype',
      modified_date:  '01/12/2013'},
    {
      location  :  'haidian',
      type      : 'notype',
      modified_date:  '01/12/2013'},
    {
      location  :  'haidian',
      type      : 'notype',
      modified_date:  '01/12/2013'}
  ],
  address             : 'Haidian District',
  address2            : 'Chaoyang District',
  city                : 'Beijing',
  state               : 'valid',
  phone               : '15600560999',
  email               : '34513141641@gmail.com',
  reg_unix_secs       : 12362576,
  language            : 'English'
};
var rawClaim = {
  claim_id                    : '12357287',
  trip                        : '/trips/46514651',       //URL to trip resource
  policy                      : '/policies/46514651',       //URL to policy resource
  driver                      : '/users/46514651',       //URL to user resource
  vehicle                     : '/vehicles/46514651',       //URL to vehicle resource
  accident_time_unix_secs     : 151715157,
  accident_location_lat       : 90,
  accident_location_long      : 40,
  own_vehicle_photo_urls      : [
    '/images/damaged_car.jpg',
    '/images/damaged_car.jpg',
    '/images/damaged_car.jpg',
    '/images/damaged_car.jpg',
    '/images/damaged_car.jpg',
    '/images/damaged_car.jpg'],       //upload to S3 and include urls here
  damage_description_mp3_urls : [],       //upload to S3 and include urls here
  passengers                  : [
    {
      first_name          : 'passenger',
      last_name           : '1',
      dob                 : '01/12/2015',   //MM/DD/YYYY
      address             : 'Haidian, Beijing',
      city                : 'Beijing',
      state               : 'valid',
      zip                 : '123456'
    },//...
  ],
  third_parties               : [
    {
      person              : {
        first_name          : 'Hail',
        last_name           : 'Hydra',
        dob                 : '02/20/2015',   //MM/DD/YYYY
        address             : 'Haidian District',
        city                : 'Beijing',
        state               : 'val',
        zip                 : 'zip Number',
        license_number      : '123456789'
      },
      vehicle             : {             //Optional if pedestrian
        year                : '2015',
        make                : 'Toyata',
        model               : 'S1',
        photo_urls          : []        //upload to S3 and include urls here
      },
      policy              : {             //Optional if pedestrian
        policy_num          : '1241662127',
        insurer             : 'Journey'
      }
    }]
};
var rawPolicy = {
  policy_id                   :   '12345798',
  insured                     :   '/users/4764564',       //URL to user resource
  vehicle                     :   '/vehicles/654765',       //URL to vehicle resource
  claims                      :   ['/claims/56465321','/claims/654351'],     //URLs to claims resources
  policy_number               :   '14175257373',
  insurer                     :   'Journey',
  gross_premium_amount        :   143567,
  bi_limit_per_person         :   23120,
  bi_limit_per_accident       :   7465,
  pd_limit                    :   146,
  coll_deductible             :   78,
  comp_deductible             :   9456,
  umbi_limit_per_person       :   143567,
  umbi_limit_per_accident     :   143567,
  umpd                        :   75,
  cdw_waiver                  :   true,
  rental_car                  :   true,
  roadside_assistance         :   true,
  lease_gap_coverage          :   true,
  inception_unix_secs         :   145465121,
  expiry_unix_secs            :   163546517
};
var rawQuote = {
  quote_id                    :   '123567',
  driver                      :   '/drivers/12654321365',         // url to user resoure
  vehicle                     :   '/vehicles/5651231',         // url to vehicle resoure
  gross_premium_amount        :   456456,
  bi_limit_per_person         :   576,
  bi_limit_per_accident       :   7869,
  pd_limit                    :   456,
  coll_deductible             :   789,
  comp_deductible             :   13,
  umbi_limit_per_person       :   9789,
  umbi_limit_per_accident     :   143,
  umpd                        :   46,
  cdw_waiver                  :   true,
  rental_car                  :   true,
  roadside_assistance         :   true,
  lease_gap_coverage          :   true,
  inception_unix_secs         :   4576576,       // Unix time, secs since epoch
  duration_secs               :   12312        // Length of time coverage is required in seconds
}
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
  if(req.query.expand == 'true'){


    res.send({
      status:200,
      users:{
        policies:[rawPolicy],
        claims: [rawClaim],
        quotes: [rawQuote]
      }
    });
    } else{
    res.send(user);
  }
});
module.exports = router;
