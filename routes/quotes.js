var express = require('express');
var router = express.Router();

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

var quote = {
    status  : 200,
    policy  : rawQuote
}
var quotes = {
    status  :   200,
    quotes:   [
        rawQuote, rawQuote, rawQuote
    ]
};

/* GET listing. */
router.get('/', function(req, res, next) {
    res.send(quotes);
});

router.get('/quote_id', function(req, res, next) {
    res.send(quote);
});


module.exports = router;
