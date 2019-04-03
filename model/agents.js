const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
const nameSchema = new mongoose.Schema({
    // _id: new ObjectId(),
    name: String,
    phone: Number,
    status: String,
    liveLocation: {}
}, { collection : 'agents' });

const agents = mongoose.model('agents', nameSchema);
module.exports = agents;