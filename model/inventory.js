const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
const nameSchema = new mongoose.Schema({
    _id: ObjectId,
    productName: String,
    quantity: Number
}, { collection : 'inventory' });

const productInventory = mongoose.model('inventory', nameSchema);
module.exports = productInventory;