# Udacity Blockchain Capstone

This project is about managing Real Estate Marketplace in Etherium Blockchain.Each property is represented by ERC721 Token. before you can mint a token you need to verify that you are the owner of the property.zk-SNARKs is used to create a verification system which can prove you have title to the property without revealing that specific information on the property.Once the token has been verified you will place it on a blockchain market place (OpenSea) for others to purchase.

# Tools

- [Remix - Solidity IDE](https://remix.ethereum.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Truffle Framework](https://truffleframework.com/)
- [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
- [Open Zeppelin ](https://openzeppelin.org/)
- [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
- [Docker](https://docs.docker.com/install/)
- [ZoKrates](https://github.com/Zokrates/ZoKrates)

# Install

To install, first clone this repo, and give:

npm install
npm install --save truffle-hdwallet-provider

Start Ganache in CLI or GUI:
Below is the command for CLI:

ganache-cli -a 40 -m "<YOUR MNEMONIC>"

In a new terminal window,move inside eth-contracts/ Compile smart contracts:
cd eth-contracts/
truffle compile

# Testing the Contracts

To run truffle tests: In directory eth-contracts/
cd eth-contracts/

truffle test test/TestERC721Mintable.js
truffle test test/TestSquareVerifier.js
truffle test test/TestSolnSquareVerifier.js

For all tests:
truffle test (All 11 tests should pass. For single file tests)

# Deployment in Rinkeby

truffle compile
truffle migrate --network rinkeby --reset

## Rinkeby Deployment output:

# Compiling your contracts...

> Everything is up to date, there is nothing to compile.

# Starting migrations...

> Network name: 'rinkeby'
> Network id: 4
> Block gas limit: 0x1c8debe

# 1_initial_migration.js

Deploying 'Migrations'

---

> transaction hash: 0x0a77f8365ed8ce010013ba406b4f6769c675b215808753946a93cb190c71c038
> Blocks: 1 Seconds: 19
> contract address: 0x62DA180389267363f0cd9e54dc3F6D91bD9609C3
> block number: 10187828
> block timestamp: 1645163038
> account: 0xe1737213b90fe8ab149C49ae32e881c036375107
> balance: 6.790064269209576058
> gas used: 224605
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.0044921 ETH

---

> Total cost: 0.000492786 ETH

# 2_deploy_contracts.js

Deploying 'ERC721Mintable'

---

> transaction hash: 0xe886dfdbfe9dac0559f32df42769b2df1debeadc9ef1794e678ce743d2021762
> Blocks: 1 Seconds: 9
> contract address: 0xd9C13dD916C45e3F6Ba909F91765Ca669419b51a
> block number: 10187830
> block timestamp: 1645163068
> account: 0xe1737213b90fe8ab149C49ae32e881c036375107
> balance: 6.726392449209576058
> gas used: 3137828
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.06275656 ETH

Deploying 'Verifier'

---

> transaction hash: 0x71954bdd33c45a7fe69527364958a7a6a7d865dafaec4575559c09e727a83100
> Blocks: 1 Seconds: 17
> contract address: 0xB0881f666948BFA8dEc7654f9d5c725f91bE33C1
> block number: 10187832
> block timestamp: 1645163098
> account: 0xe1737213b90fe8ab149C49ae32e881c036375107
> balance: 6.698538369209576058
> gas used: 1392704
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.02785408 ETH

Deploying 'SolnSquareVerifier'

---

> transaction hash: 0x7fdec2c45f675c9f5552e3608439321ca0a1c834162a56c5a7e77d8c99e3b1b6
> Blocks: 1 Seconds: 17
> contract address: 0xc67b711390c4a5010346BF069e0f2Cc829FfEFb4
> block number: 10187834
> block timestamp: 1645163128
> account: 0xe1737213b90fe8ab149C49ae32e881c036375107
> balance: 6.617485729209576058
> gas used: 4052632
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.08105264 ETH

---

> Total cost: 0.020266616 ETH

# Summary

> Total deployments: 4
> Final cost: 0.17615538 ETH

## Contract Adress - SolnSquareVerifier

```
0xc67b711390c4a5010346BF069e0f2Cc829FfEFb4
```

## Contract ABI

```
[
    {
      "constant": true,
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "name": "_result",
          "type": "string"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "name": "_result",
          "type": "string"
        },
        {
          "name": "_proof",
          "type": "bytes"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isOwner",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "baseTokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "verifierAddress",
          "type": "address"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "baseTokenURI",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "SolutionAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "a",
          "type": "uint256[2]"
        },
        {
          "name": "a_p",
          "type": "uint256[2]"
        },
        {
          "name": "b",
          "type": "uint256[2][2]"
        },
        {
          "name": "b_p",
          "type": "uint256[2]"
        },
        {
          "name": "c",
          "type": "uint256[2]"
        },
        {
          "name": "c_p",
          "type": "uint256[2]"
        },
        {
          "name": "h",
          "type": "uint256[2]"
        },
        {
          "name": "k",
          "type": "uint256[2]"
        },
        {
          "name": "input",
          "type": "uint256[2]"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "addSolution",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "key",
          "type": "bytes32"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "mintVerified",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
```

## On Rnkeby

```
https://rinkeby.etherscan.io/address/0x24b05adcf84c2dae205d379993674fab201e416d
```

## To Mint tokens

https://www.myetherwallet.com/interface/interact-with-contract

## OpenSea marketplace

https://testnets.opensea.io/assets/0xc67b711390c4a5010346bf069e0f2cc829ffefb4/3
https://testnets.opensea.io/assets/0xc67b711390c4a5010346bf069e0f2cc829ffefb4/2
https://testnets.opensea.io/assets/0xc67b711390c4a5010346bf069e0f2cc829ffefb4/8
https://testnets.opensea.io/assets/0xc67b711390c4a5010346bf069e0f2cc829ffefb4/5
https://testnets.opensea.io/assets/0xc67b711390c4a5010346bf069e0f2cc829ffefb4/4

## Storefront on Opensea for Tokens

https://testnets.opensea.io/collection/ud-real-estate-marketplace

## Transactions on market place (While buying from another account)

```
https://rinkeby.etherscan.io/tx/0x2b030f892cfe04506d94ead02b116cf0ace4cfa881d22d2ed271f5c49ce610e8
```

```
https://rinkeby.etherscan.io/tx/0x883b16416aefd14a066cacb92b736e6d3f268bf713c26390d7bf63baa6b5b1cd
```

```
https://rinkeby.etherscan.io/tx/0x04d40126d01a6fcd3cf5ef29cef4d2af10651c386e7c68004ac58a077488b66f
```

```
https://rinkeby.etherscan.io/tx/0xd45b4e239da2f2dbd51d7afb35485ffab8a862293a42d21bec44e8597e03ab86
```

```
https://rinkeby.etherscan.io/tx/0x19605456072b3848e2daf719890c4536c0786f1adefd0ff6f6ef9248dc6c144d
```
