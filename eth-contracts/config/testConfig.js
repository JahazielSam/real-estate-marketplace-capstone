
var BigNumber = require('../../node_modules/bignumber.js');
var ERC721Mintable = artifacts.require("./ERC721Mintable.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
var Verifier = artifacts.require("./Verifier.sol");

var proofJSON = {
	"proof":
	{
		"A":["0x13c220892f08ce33ab69335c47106347213183b811405e06a05dac5205ec8c6d", "0x16474cf6a29af6dfacbb14bcb6b58b6558141dbf29043d49623261ae2b11d729"],
		"A_p":["0xddfe8eec8acba4e063f69125bd430e18516936006eaa5faa8f6861e8a669c2e", "0x341dba3d11b08062c67075d50d380a6d5925ad439484e5f1bb334b653eb8c0"],
		"B":
			[["0x2feaa0c1fb4e1597c7f6ce3fee268291ba2c4a25b73a0fa06e301b4d0533c4c5", "0x2e941d97f36c6dc17dc2656d6a1fa080de0d66c03970c3386fc2c6f1f2a23678"], ["0x161eadda71f579cc9d094053cbc4696ae77c03bf80189216da91946bfeef2b78", "0x14c8a5ae013f9998bdd23b72a60914f83be2e251ea8528f9d19f367f64da7a7d"]],
		
		"B_p":["0x2e17dfeb84f783a022b3039cfed70d0344866c06be69a998ecfc42d33d0f4a46", "0x51e8b557594cccbfa01bd1e3d2899a6da2cf0a2c6265bff04a9d6f5bcff6192"],
		"C":["0xa222db5a86e9146ff3af4706378891f3b6833cb5ff1b3881c91fea252c62b5", "0x24ba26096e6ce164208635dc3ba604a7842c763c54df065c2ac9726a409f1a07"],
		"C_p":["0x6ff61c2ea471c28c4a1458ebd219ce452afb8484b21efeccc4e396f2ba144cc", "0x205300b1057a7f497799f938fe10ac2aff26177b62b1345efc44396ca84b3170"],
		"H":["0x2aeecbb04f6ea552b619c1611562df2a2bb2b4c921eb5a91dc44054a9deaca3b", "0x2fb1fd9516487e5e741afe1fae0742b5b13542f927e4685ded93b74f55fa257a"],
		"K":["0xccc79f3e17c9cf98659031de7dc3025e16a4a8ad094d441abf8f03661bfbd7c", "0x1ebadcb01f628976945fc212d5c4844181ff35a95a85d119382a56d94904cabb"]
	},
	"input":[9,1]
}


var Config = async function (accounts) {

    const _owner = accounts[0];
    const _account_one = accounts[0];
    const _account_two = accounts[1];

    const proof = proofJSON['proof'];
    const input = proofJSON['input'];

    const _symbol = 'REM'
    const _name = 'Real Estate Marketplace'
    const _baseTokenURI = 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/'
    const _firstTokenId = 1
    const _lastTokenId = 10

    let erc721Mintable = await ERC721Mintable.new(_name, _symbol, _baseTokenURI);
    let verifier = await Verifier.new();
    let solnSquareVerifier = await SolnSquareVerifier.new(verifier.address, _name, _symbol, _baseTokenURI);



    return {
        owner: _owner,
        account_one: _account_one,
        account_two: _account_two,
        firstTokenId: _firstTokenId,
        lastTokenId: _lastTokenId,
        proof: proof,
        input: input,
        name: _name,
        symbol: _symbol,
        baseTokenURI: _baseTokenURI,
        weiMultiple: (new BigNumber(10)).pow(18),
        myToken: erc721Mintable,
        solnSquareVerifier: solnSquareVerifier,
        verifier: verifier
    }
}

module.exports = {
    Config: Config
};