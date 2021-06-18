const EC = require("elliptic").ec;
var ec = new EC("secp256k1")

var key = ec.genKeyPair()
const privateKey = key.getPrivate()
const publicKey = key.getPublic()

// console.log(privateKey)
// console.log(publicKey)