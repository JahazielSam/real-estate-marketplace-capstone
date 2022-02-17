var TestConfigFile = require('../config/testConfig.js');

contract('Verifier', async (accounts) => {

    var config;
    var proof;
    var input;

    before('setup contract', async () => {
        config = await TestConfigFile.Config(accounts);
        proof = config.proof;
        input = config.input;
    });

    describe('verification with correct proof', function () {
        // Test verification with correct proof
        it('Verifier.verifyTx(..) returns true with correct proof', async () => {
            console.log(proof);
            console.log(input);
            const verificationResult = await config.verifier.verifyTx.call(
                proof.A,
                proof.A_p,
                proof.B,
                proof.B_p,
                proof.C,
                proof.C_p,
                proof.H,
                proof.K,
                input
            )
            console.log("The result is :" + verificationResult)
            assert(verificationResult, 'Incorrect Proof')
        })
    });

    describe('verification with incorrect proof', function () {

        // Test verification with incorrect proof
        it('Verifier.verifyTx(..) returns false with incorrect proof', async () => {
            // just change A_p with A
            const verificationResult = await config.verifier.verifyTx.call(
                proof.A_p,
                proof.A,
                proof.B,
                proof.B_p,
                proof.C,
                proof.C_p,
                proof.H,
                proof.K,
                input
            )
            console.log("The result is :" + verificationResult)
            assert(!verificationResult, 'Incorrect Proof results')
        })
    });

});
