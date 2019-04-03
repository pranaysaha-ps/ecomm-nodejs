var express = require('express');
var router = express.Router();
const order = require('../model/order');
const agents = require('../model/agents');

/* GET users listing. */
router.get('/getAll', function(req, res, next) {
    agents.find({}, function(err, data){
        if(err){
            res.send(err);
        } 
        console.log(data);
        res.send(data);
    });
});

router.get('/findById/:id', function(req, res, next) {
    agents.findById(req.params.id, function(err, data){
        if(err){
            res.send(err);
        } 
        console.log(data);
        res.send(data);
    });
});

router.post('/create', function(req, res, next) {
    var agent = new agents(req.body);
    agent.save()
    .then(item => {
        console.log(item);
        res.send("Agent saved to database");
    })
    .catch(err => {
        console.log(err);
        res.status(400).send("Unable to save to database");
    });
})

module.exports = router;
