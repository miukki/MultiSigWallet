var HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config({ path: ".env" });

module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*", // Match any network id
            gas: 4712388,
            gasPrice: 10000000, // 0,01 gwei
        },
        mainnet: {
            provider: () =>
                new HDWalletProvider(process.env.MNEMONIC_MAINNET, "https://api.smilo.foundation", 0, 5, "m/44'/20080914'/0'/0/"),
            port: 443,
            network_id: "20080914", // Match network id
            gas: 4712387,
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
