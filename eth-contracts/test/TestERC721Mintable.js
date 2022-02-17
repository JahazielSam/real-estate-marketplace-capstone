var Test = require('../config/testConfig.js');
var BigNumber = require('../../node_modules/bignumber.js');

contract('ERC721Mintable', async (accounts) => {

    before('Configure Contract', async () => {
        config = await Test.Config(accounts);
    });

    describe('match ERC721 spec', function () {

        it('should mint 10 tokens', async function () {

            config.myToken.Transfer()
                .on('data', (event) => {
                })
                .on('error', console.error);

            const token_Id = config.firstTokenId

            for (let i = token_Id; i <= config.lastTokenId; i++) {
                let status = await config.myToken.mint(config.owner, i, { from: config.owner });
            }

        })

        it('should return total supply', async function () {

            let status = await config.myToken.totalSupply.call();
            assert.equal(status, config.lastTokenId, "Total Supply is not Correct !");

        })

        it('should get token balance', async function () {

            let status = await config.myToken.balanceOf.call(config.owner);
            assert.equal(status, config.lastTokenId, "Balance is not correct !");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {

            const tokenId = config.firstTokenId
            let expectedTokenUri = config.baseTokenURI.concat(tokenId)

            let status = await config.myToken.tokenURI.call(tokenId, { from: config.owner });
            assert.equal(status, expectedTokenUri, "Token URL is not proper");

        })

        it('should transfer token from one owner to another', async function () {
            const tokenId = config.firstTokenId
            let res1 = await config.myToken.approve(config.account_two, tokenId, { from: config.owner });
            let res2 = await config.myToken.transferFrom(config.owner, config.account_two, tokenId, { from: config.owner });
            let res3 = await config.myToken.ownerOf.call(tokenId);
            assert.equal(res3, config.account_two, "New Owner is not correct");
        })
    });

    describe('have ownership properties', function () {

        it('should return contract owner', async function () {
            let ownerAddress = await config.myToken.owner.call();
            assert.equal(ownerAddress, config.owner, "account[0] is owner");
        })

        it('should fail when minting when address is not contract owner', async function () {
            const token_Id = config.lastTokenId + 1
            try {
                await config.myToken.mint(config.account_two, token_Id, { from: config.account_two });
            }
            catch (e) {
                console.log('Minting Error : ', e.reason);
            }
        })

    });

});