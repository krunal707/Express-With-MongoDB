// Using Node.js `require()`
const mongoose = require('mongoose');






mongoose.connect('mongodb://localhost:27017/MainBook');
var db = mongoose.connection;
console.log("db")
db.on('error', console.error.bind(console, "connection failed"));
db.once('open', function () {
	console.log("Database conencted successfully!");
});
