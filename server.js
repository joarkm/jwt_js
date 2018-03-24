var CryptoJS = require('crypto-js');

function getBase64(rawStr){
  var wordArray = CryptoJS.enc.Utf8.parse(rawStr);
  return CryptoJS.enc.Base64.stringify(wordArray);
}

function decodeToken(jwtBase64){
  var header = CryptoJS.enc.Base64.parse(jwtBase64.header).toString(CryptoJS.enc.Utf8);
  var payload = CryptoJS.enc.Base64.parse(jwtBase64.payload).toString(CryptoJS.enc.Utf8);

  var decodedToken = {
    "header": header,
    "payload": payload
  }
  return decodedToken;
}

function verifySignature(jwt, secret){

  var stringToHash = jwt.header + '.' + jwt.payload;
  console.log("'header'.'payload'")
  console.log(stringToHash);

  console.log(jwt.signature);
  var signature = CryptoJS.HmacSHA256(stringToHash, secret);
  var base64Signature = CryptoJS.enc.Base64.stringify(signature);
  console.log(base64Signature);

  return jwt.signature == base64Signature;
}

var exampleJWT = [
  {
    "alg":  "HS256",
    "typ":  "JWT"
  },
  {
    "sub": "1234567890",
    "name": "John Doe",
    "iat": 1516239022
  }
];

var exampleJWTBase64 = {
  "header":     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  "payload":    "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ",
  "signature":  "XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o"
};

var constants = {
  BASE64ENCODESTRING: '1',
  PRINTTOKEN: '2',
  DECODETOKEN: '3',
  VERIFYSIGNATURE: '4',
  SIGNTOKEN: '5'
}
const BASE64ENCODESTRING = '1', PRINTTOKEN = '2', DECODETOKEN = '3', VERIFYSIGNATURE = '4', SIGNTOKEN = '5';

console.log("Press...");
for(key in constants)
  console.log(constants[key] + " to " + key);
