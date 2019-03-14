module.exports = {
  networks: {
    development: {
      host: "https://testnet-wallet.smilo.network/api",
      port: 443,
      network_id: "10", // Match any network id
      gas: 1000000,
      gasPrice: 1000000000, // 10 gwei
    }
  }
};
