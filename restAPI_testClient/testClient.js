var jwt = require('../examplejwt').JWTBase64;
var Client = require('node-rest-client').Client;

var client = new Client();

// set content-type header and data as json in args parameter
var args = {
    data: jwt,
    headers: { "Content-Type": "application/json" }
};

client.post("http://localhost:8081/decodeToken", args, function (data, response) {
    console.log(JSON.parse(data));
});
