(function(){
  module.exports = {
    CryptoJS: require('crypto-js'),
    getBase64: function(rawStr){
      var wordArray = CryptoJS.enc.Utf8.parse(rawStr);
      return CryptoJS.enc.Base64.stringify(wordArray);
    },
    decodeToken: function(jwtBase64){
      var header = CryptoJS.enc.Base64.parse(jwtBase64.header).toString(CryptoJS.enc.Utf8);
      var payload = CryptoJS.enc.Base64.parse(jwtBase64.payload).toString(CryptoJS.enc.Utf8);

      var decodedToken = {
        "header": header,
        "payload": payload
      }
      return decodedToken;
    },
    verifySignature: function(jwt, secret){

      var stringToHash = jwt.header + '.' + jwt.payload;
      console.log("'header'.'payload'")
      console.log(stringToHash);

      console.log(jwt.signature);
      var signature = CryptoJS.HmacSHA256(stringToHash, secret);
      var base64Signature = CryptoJS.enc.Base64.stringify(signature);
      console.log(base64Signature);

      return jwt.signature == base64Signature;
    },

    exampleJWT: [
      {
        "alg":  "HS256",
        "typ":  "JWT"
      },
      {
        "sub": "1234567890",
        "name": "John Doe",
        "iat": 1516239022
      }
    ],

    exampleJWTBase64: {
      "header":     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
      "payload":    "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ",
      "signature":  "XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o"
    }
  }


}());
