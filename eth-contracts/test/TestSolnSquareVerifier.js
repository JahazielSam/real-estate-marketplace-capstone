var json = require("./proof.json");
var solnSquareContract = artifacts.require('SolnSquareVerifier');
var verifierContract = artifacts.require("../../zokrates/code/Verifier");

contract('Square_verifier', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];
    const account_four = accounts[3];
    const symbol = "HST721";
    const name = "HouseToken721";
    const uri = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";

    // Test if a new solution can be added for contract - SolnSquareVerifier

    describe('Test if a new solution can be added for contract - SolnSquareVerifier', function () {
        beforeEach(async function () {
            const verifierSol = await verifierContract.new({from: account_one});
            this.contract = await solnSquareContract.new(verifierSol.address, name, symbol, {from: account_one});

        })

        it('add new solution', async function () {
          let result = await this.contract.addSolution(json.proof.a,json.proof.b,json.proof.c,json.inputs,{from:account_two});
          assert.equal(result.logs[0].args[1], account_two,"Solution-address and the sender's adddress does not match with each other.");
          try{
            let secondSol = await this.contract.addSolution(json.proof.a,json.proof.b,json.proof.c,json.inputs,{from:account_two});
            throw(secondSol)
          }catch(error){
            assert.equal(error.reason,"Solution Exists Already !!","Two similar solutions are made.");
          }
        });
  });

  // Test if an ERC721 token can be minted for contract - SolnSquareVerifier

    describe('Test if an ERC721 token can be minted for contract - SolnSquareVerifier', function () {
        beforeEach(async function () {
          const verifierSol = await verifierContract.new({from: account_one});
          this.contract = await solnSquareContract.new(verifierSol.address, name, symbol, {from: account_one});
        })

        it('mintERC721', async function () {

          let resultSol = await this.contract.addSolution(json.proof.a,json.proof.b,json.proof.c,json.inputs,{from:account_one});
          assert.equal(resultSol.logs[0].args[1], account_one,"Solution-address doesn't match senders adddress");
          await this.contract.mintNewNFT(json.inputs[0],json.inputs[1],account_three,{from:account_one});
          let accountBalance = await this.contract.balanceOf(account_three);
          assert.equal(parseInt(accountBalance), 1, "Incorrect token balance");

          let uri = await this.contract.tokenURI(0,{from:account_one});
          assert.equal(uri, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/0"," Incorrect uri");


        });
    });

})
