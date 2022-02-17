var Test = require('../config/testConfig.js');

contract('SolnSquareVerifier', async (accounts) => {

    var config;
    var proof;
    var input;

    before('Contract Config', async () => {
        config = await Test.Config(accounts);
        proof = config.proof;
        input = config.input;
    });

    describe('match ERC721 spec', function () {
      // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
        it('should mint an ERC721 token ', async function () {

            config.solnSquareVerifier.Transfer()
                .on('data', (event) => {
                    console.log(`\n\n emit Transfer() tokenId : ${event.returnValues.tokenId}`);
                })
                .on('error', console.error);

            const tokenId = config.firstTokenId

            let status = await config.solnSquareVerifier.mint(
                config.owner,
                tokenId, { from: config.owner });

        })
        // Test if a new solution can be added for contract - SolnSquareVerifier
        it('should add a new solution', async function () {

            config.solnSquareVerifier.Transfer()
                .on('data', (event) => {
                    console.log(`emit Transfer() tokenId : ${event.returnValues.tokenId}`);
                })
                .on('error', console.error);

            const tokenId = config.firstTokenId + 1

            let status = await config.solnSquareVerifier.addSolution(
                proof.A,
                proof.A_p,
                proof.B,
                proof.B_p,
                proof.C,
                proof.C_p,
                proof.H,
                proof.K,
                input,
                config.owner,
                tokenId, {
                    from: config.owner
                });

        })

    });

});