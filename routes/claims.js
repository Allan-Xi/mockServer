var express = require('express');
var router = express.Router();

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

var claim = {
    status: 200,
    claim: rawClaim
}
var claims = {
    status :200,
    claims:[
        rawClaim,rawClaim,rawClaim
    ]
}
/* GET listing. */
router.get('/', function(req, res, next) {
    res.send(claims);
});

router.get('/:policy_id', function(req, res, next) {
    res.send(claim);
});

module.exports = router;
