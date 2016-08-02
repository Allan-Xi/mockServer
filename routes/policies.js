var express = require('express');
var router = express.Router();

var rawPolicy = {
    policy_id                   :   'policy_id: 12345798',
    insured                     :   'Someone',       //URL to user resource
    vehicle                     :   'vehicle_url',       //URL to vehicle resource
    claims                      :   ['claim_url_1','claim_url_2'],     //URLs to claims resources
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

var policy = {
    status: 200,
    policy: rawPolicy
}
var policies = {
    status :200,
    policies:[
        rawPolicy,rawPolicy,rawPolicy
    ]
}
/* GET listing. */
router.get('/', function(req, res, next) {
    res.send(policies);
});

router.get('/:policy_id', function(req, res, next) {
    res.send(policy);
});

module.exports = router;
