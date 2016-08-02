var express = require('express');
var router = express.Router();

var rawQuote = {
    quote_id                    :   'quote_id:123567',
    driver                      :   'driver_url',         // url to user resoure
    vehicle                     :   'vehicle_url',         // url to vehicle resoure
    gross_premium_amount        :   12341234,
    bi_limit_per_person         :   12341234,
    bi_limit_per_accident       :   12341234,
    pd_limit                    :   12341234,
    coll_deductible             :   12341234,
    comp_deductible             :   12341234,
    umbi_limit_per_person       :   12341234,
    umbi_limit_per_accident     :   12341234,
    umpd                        :   12341234,
    cdw_waiver                  :   true,
    rental_car                  :   true,
    roadside_assistance         :   true,
    lease_gap_coverage          :   true,
    inception_unix_secs         :   1234,       // Unix time, secs since epoch
    duration_secs               :   12341        // Length of time coverage is required in seconds
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
