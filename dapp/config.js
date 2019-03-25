var txDefaultOrig =
{
  gasLimit: 3141592,
  gasPrice: 18000000000,
  ethereumNode: "https://api.smilo.network:443",
  connectionChecker:{
    method : "OPTIONS",
    url : "https://www.google.com",
    checkInterval: 5000
  },
  ethGasStation: "https://safe-relay.gnosis.pm/api/v1/gas-station/",
  wallet: "injected",
  defaultChainID: null,
  // Mainnet
  walletFactoryAddress: "0x6e95c8e8557abc08b46f3c347ba06f8dc012763f",
  tokens: [
    {
      'address': '0x6810e776880c02933d47db1b9fc05908e5386b96',
      'name': 'Smilo USD',
      'symbol': 'sUSD',
      'decimals': 18
    },
    {
      'address': '0xa74476443119A942dE498590Fe1f2454d7D4aC0d',
      'name': 'Smilo Euro',
      'symbol': 'sEURO',
      'decimals': 18
    }
  ]
};

if (isElectron) {
  txDefaultOrig.wallet = "remotenode";
}

var txDefault = {
  ethereumNodes : [
    {
      url : "https://api.smilo.network:443",
      name: "Smilo Mainnet"
    },
    {
      url : "https://testnet-wallet.smilo.network:443/api",
      name: "Smilo Testnet"
    },
    {
      url : "http://localhost:22000",
      name: "Local node"
    }
  ],
  walletFactoryAddresses: {
    'mainnet': {
      name: 'Mainnet',
      address: txDefaultOrig.walletFactoryAddress
    },
    'testnet': {
      name: 'Testnet',
      address: '0x45b5F368a8c9Cfe9eb06A3E21A86eC4beF865dFe'
    },
    'privatenet': {
      name: 'Privatenet',
      address: '0x4545bd298eEEaB88EE42068Cd6b7482F0C052AcD'
    },
    'localhost': {
      name: 'Localhost',
      address: '0x5d2B69E1311C1bb6F3e662bd19f4770447195E4e'
    }
  }
};

var oldWalletFactoryAddresses = [
  ("0x12ff9a987c648c5608b2c2a76f58de74a3bf1987").toLowerCase(),
  ("0xed5a90efa30637606ddaf4f4b3d42bb49d79bd4e").toLowerCase(),
  ("0xa0dbdadcbcc540be9bf4e9a812035eb1289dad73").toLowerCase()
];

/**
* Update the default wallet factory address in local storage
*/
function checkWalletFactoryAddress() {
  var userConfig = JSON.parse(localStorage.getItem("userConfig"));

  if (userConfig && oldWalletFactoryAddresses.indexOf(userConfig.walletFactoryAddress.toLowerCase()) >= 0) {
    userConfig.walletFactoryAddress = txDefaultOrig.walletFactoryAddress;
    localStorage.setItem("userConfig", JSON.stringify(userConfig));
  }
}

/**
* Reload configuration
*/
function loadConfiguration () {
  var userConfig = JSON.parse(localStorage.getItem("userConfig"));
  Object.assign(txDefault, txDefaultOrig, userConfig);
}

checkWalletFactoryAddress();
loadConfiguration();
