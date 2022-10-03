require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  hardhat:{
    forking:{
      url:'https://eth-mainnet.g.alchemy.com/v2/Ev_51SKh2JJ974INj4l7rcTIIjNU1pBa'
    },
    chainId:1
  }
};
