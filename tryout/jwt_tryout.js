var CryptoJS = require('crypto-js');
var JsonWebTokens = require('jsonwebtoken');
require('./stacklogs');

const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit(); // eslint-disable-line no-process-exit
  }

  switch (key.name) {
    case BASE64ENCODESTRING:
      console.log(getBase64(toBeEncoded));
      break;
    case PRINTTOKEN:
      console.log(JSON.stringify(exampleJWT));
      break;
    case '3':
      console.log(decodeToken(exampleJWTBase64));
      break;
    case '4':
      if(verifySignature(exampleJWTBase64, "secret"))
        console.log("Token signature verified.");
      else console.log("Token signature invalid!");
      break;
    case '5':
      console.log(signToken(exampleJWTPayload, 'secret'));
      break;
    case '6':
      var tokenString = exampleJWT.header+'.'+exampleJWT.payload+'.'+exampleJWT.signature;
      console.log(JsonWebTokens.verify(tokenString, 'secret'));
      break;

    default:
      break;

  }

});

var toBeEncoded = "Eksempelstreng";

function signToken(jwt, secret){
  return JsonWebTokens.sign(jwt, secret);
}

function getBase64(rawStr){
  console.log("function called: " + __function + "()");
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

var exampleJWTPayload = exampleJWT[1];

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
