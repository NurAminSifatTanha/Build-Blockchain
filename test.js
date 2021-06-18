const {Block, Transaction, BlockChain} = require('./index')

const EC = require("elliptic").ec;
let ec = new EC("secp256k1")

let key = ec.genKeyPair()
const privateKey = key.getPrivate('hex')
// publicKey
const walletnumber = key.getPublic("hex")

const learncoin = new BlockChain()

const tx1 = new Transaction(walletnumber, 'randomaccess', 100)
tx1.signTransaction(key)
learncoin.addTransaction(tx1)

learncoin.minePendingTransaction(walletnumber)
console.log(learncoin.getBalanceOfAddress(walletnumber))