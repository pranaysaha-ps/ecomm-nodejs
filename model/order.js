const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
const nameSchema = new mongoose.Schema({
    _id: ObjectId,
    quantity: Number,
    user: {},
    product:{},
    agent: {}
}, { collection : 'order' });

const order = mongoose.model('order', nameSchema);
module.exports = order;