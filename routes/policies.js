var express = require('express');
var router = express.Router();

var rawPolicy = {
    policy_id                   :   'String',
    insured                     :   'String',       //URL to user resource
    vehicle                     :   'String',       //URL to vehicle resource
    claims                      :   ['String'],     //URLs to claims resources
    policy_143567               :   'String',
    insurer                     :   'String',
    gross_premium_amount        :   143567,
    bi_limit_per_person         :   143567,
    bi_limit_per_accident       :   143567,
    pd_limit                    :   143567,
    coll_deductible             :   143567,
    comp_deductible             :   143567,
    umbi_limit_per_person       :   143567,
    umbi_limit_per_accident     :   143567,
    umpd                        :   143567,
    cdw_waiver                  :   true,
    rental_car                  :   true,
    roadside_assistance         :   true,
    lease_gap_coverage          :   true,
    inception_unix_secs         :   143567,
    expiry_unix_secs            :   143567
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
