//Defines a sample token. This is the default token found at https://jwt.io
module.exports = {

  JWT: [
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

  JWTBase64: {
    "header":     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "payload":    "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ",
    "signature":  "XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o"
  }

}
