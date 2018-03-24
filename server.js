var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var exampleJWTLib = require('./examplejwt');
var jsonwebtoken = require('./jsonwebtoken');

// parse application/json
app.use(bodyParser.json())

app.get('/exampletoken', function (req, res) {
  // Prepare output in JSON format
  response = exampleJWTLib.JWT;
  console.log(response);
  res.end(JSON.stringify(response));
})

app.post('/decodeToken', function (req, res) {
  var jwt = req.body;
  console.log(jwt);
  response = jsonwebtoken.decodeToken(jwt);
  console.log(response);

  res.setHeader('Content-Type', 'text/plain');
  res.end(JSON.stringify(response));

})

app.get('/', function (req, res) {
  res.send('Hello World');
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
});
