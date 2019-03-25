var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "miracle globe install spoon stuff cousin help april top couch then cheese";


module.exports = {
    networks: {
        // Another network with more advanced options...
        localhost: {
            host: "localhost",     // Localhost (default: none)
            port: 22000,            // Standard Ethereum port (default: none)
            network_id: "10",       // Any network (default: none)
            gas: 4712387,
            gasPrice: 10000000,  // 20 gwei (in wei) (default: 1 gwei)
            from: "0xecf7e57d01d3d155e5fc33dbc7a58355685ba39c"        // Account to send txs from (default: accounts[0])
        },
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*", // Match any network id
            gas: 4712388,
            gasPrice: 10000000, // 0,01 gwei
        },
        testnet: {
            provider: () =>
                new HDWalletProvider(mnemonic, "https://testnet-wallet.smilo.network/api", 0, 5, "m/44'/20080914'/0'/0/"),
            port: 443,
            network_id: "10", // Match network id
            gas: 4712388,
            gasPrice: 10000000, // 0,01 gwei
        }
    },
    compilers: {
        solc: {
            version: "0.4.25",
            docker: true, // Use a version obtained through docker
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 2   // Optimize for how many times you intend to run the code
                }
            }
        }
    }
};
