const sha256 = require('crypto-js/sha256')

class Block {
    constructor(timestamp, data, previousHash = "") {
        this.timestamp = timestamp
        this.data = data
        this.previousHash = previousHash
        this.hash = this.calculateHash()
    }

    calculateHash() {
        return sha256(this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()]
    }

    createGenesisBlock() {
        return new Block('01/01/2017', "Genesis Block", '0')
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1]
    }

    addNewBlock(block) {
        block.previousHash = this.getLatestBlock()
        block.hash = block.calculateHash()
        this.chain.push(block)
    }
}

let sifatCoin = new Blockchain()
sifatCoin.addNewBlock(new Block('01/01/2021', {amount:10}))
sifatCoin.addNewBlock(new Block('01/02/2021', {amount:100}))