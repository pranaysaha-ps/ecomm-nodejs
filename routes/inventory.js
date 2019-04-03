var express = require('express');
var router = express.Router();
const inventory = require('../model/inventory');

/* GET users listing. */
router.get('/getAll', function(req, res, next) {
    inventory.find({}, function(err, data){
        if(err){
            res.send(err);
        } 
        console.log(data);
        res.send(data);
    });
});

router.get('/findById/:id', function(req, res, next) {
    inventory.findById(req.params.id, function(err, data){
        if(err){
            res.send(err);
        } 
        console.log(data);
        res.send(data);
    });
});

module.exports = router;
