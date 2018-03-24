var jwt = require('../jsonwebtoken');
var exampleJWT = require('../examplejwt');

const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit(); // eslint-disable-line no-process-exit
  }

  switch (key.name) {
    case GETVARIABLES:
      console.log(exampleJWT.JWT);
      console.log(exampleJWT.JWTBase64);
      break;

    case DECODETOKEN:
      jwt.decodeToken(exampleJWT.JWTBase64);
      break;

    case TOBASE64:
      console.log(jwt.getBase64("teststring"));
      break;

    default:
      break;
  }

});

var constants = {
  GETVARIABLES: '1',
  DECODETOKEN: '2',
  TOBASE64: '3'
}
const GETVARIABLES = '1', DECODETOKEN = '2', TOBASE64 = '3';

console.log("Press...");
for(key in constants)
  console.log(constants[key] + " to " + key);
