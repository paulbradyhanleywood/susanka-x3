var express = require('express');
var app = express();

//set port variable to deployed port or 8000 for local host
var port = process.env.PORT || 8001;

//set dirname to client folder to serve static ASSETS (.css, .png, .jpg)
app.use('/', express.static(__dirname + '/public'));

// port message
app.listen(port, function() {
  console.log("Listening on port " + port + "...");
});
