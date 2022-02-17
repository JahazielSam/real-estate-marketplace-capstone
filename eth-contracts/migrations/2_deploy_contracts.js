// migrating the appropriate contracts
var ERC721Mintable = artifacts.require("./ERC721Mintable.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
var Verifier = artifacts.require("./Verifier.sol");


module.exports = function (deployer) {

  let symbol = 'UREM'
  let name = 'UD - Real Estate MarketPlace'
  let baseTokenURI = 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/'

  deployer.deploy(ERC721Mintable, name, symbol, baseTokenURI);
  deployer.deploy(Verifier)
    .then(() => {
      return deployer.deploy(SolnSquareVerifier, Verifier.address, name, symbol, baseTokenURI)
    });

};