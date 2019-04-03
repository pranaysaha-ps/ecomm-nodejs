//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
// var mongoDB = 'mongodb://pranaysaha:leaf123@ds155045.mlab.com:55045/leaf-ecomm';
const mongoDB = 'mongodb://pranaysaha:ecomm123@ds121636.mlab.com:21636/ecomm';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
const connection = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
connection.on('error', console.error.bind(console, 'Mongoconnection connection error:'));

connection.on('open', console.log.bind(console, 'Connected'));

module.exports = connection;