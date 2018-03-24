var express = require('express');
var app = express();
var exampleJWTLib = require('./examplejwt');
var jsonwebtoken = require('./jsonwebtoken');

app.get('/exampletoken', function (req, res) {
   // Prepare output in JSON format
   response = exampleJWTLib.JWT;
   console.log(response);
   res.end(JSON.stringify(response));
})

app.get('/decodetoken', function (req, res) {
   // Prepare output in JSON format
   var jwt = exampleJWTLib.JWTBase64;
   response = jsonwebtoken.decodeToken(jwt);
   console.log(response);
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
