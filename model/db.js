//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = 'mongodb_url';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
const connection = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
connection.on('error', console.error.bind(console, 'Mongoconnection connection error:'));

connection.on('open', console.log.bind(console, 'Connected'));

module.exports = connection;
