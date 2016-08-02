var express = require('express');
var router = express.Router();

var rawClaim = {
    claim_id                    : 'String',
    trip                        : 'String',       //URL to trip resource
    policy                      : 'String',       //URL to policy resource
    driver                      : 'String',       //URL to user resource
    vehicle                     : 'String',       //URL to vehicle resource
    accident_time_unix_secs     : 1231,
    accident_location_lat       : 1231,
    accident_location_long      : 1231,
    own_vehicle_photo_urls      : [],       //upload to S3 and include urls here
    damage_description_mp3_urls : [],       //upload to S3 and include urls here
    passengers                  : [
        {
            first_name          : 'String',
            last_name           : 'String',
            dob                 : 'String',   //MM/DD/YYYY
            address             : 'String',
            city                : 'String',
            state               : 'String',
            zip                 : 'String'
        },//...
    ],
    third_parties               : [
        {
            person              : {
                first_name          : 'String',
                last_name           : 'String',
                dob                 : 'String',   //MM/DD/YYYY
                address             : 'String',
                city                : 'String',
                state               : 'String',
                zip                 : 'String',
                license_1231      : 'String'
            },
            vehicle             : {             //Optional if pedestrian
                year                : 'String',
                make                : 'String',
                model               : 'String',
                photo_urls          : []        //upload to S3 and include urls here
            },
            policy              : {             //Optional if pedestrian
                policy_num          : 'String',
                insurer             : 'String'
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
