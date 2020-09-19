// Require application dependencies
const express = require('express');

var bodyParser = require('body-parser')

// Create our app by calling the express function
const app = express();

// Register a route handler for GET requests made to /hello
app.get('/', (req, res) => {
  res.send("Hello to Express world");
});

// Why is this used for?
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

///routing and  db  config
app.use('/api', require('./route/route')(express)) //routing  file  configuration
require('./db/db')   //db configuration Mongo db
//
// Get port from environment or default to port 3000.
const port = process.env.PORT || 3001;      // http methods 3001/api/add

// Ask our app to listen on the calculated port.
app.listen(port, () => {
  console.log(`Successfully express js server listening on port ${port}`);
});
