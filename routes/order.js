var express = require('express');
var router = express.Router();
const order = require('../model/order');
const agents = require('../model/agents');

/* GET users listing. */
router.get('/getAll', function(req, res, next) {
    order.find({}, function(err, data){
        if(err){
            res.send(err);
        } 
        console.log(data);
        res.send(data);
    });
});

router.get('/findById/:id', function(req, res, next) {
    order.findById(req.params.id, function(err, data){
        if(err){
            res.send(err);
        } 
        console.log(data);
        res.send(data);
    });
});

router.post('/create', function(req, res, next) {
    // agents.find
    res.send('data');
})

module.exports = router;
