const { ethers } = require('hardhat');
const { RPC_URL, PRIVATE_KEY } = require('./constants');

const getSigner = () =>{
    
    return new ethers.Wallet( PRIVATE_KEY, getProvider() );
}

const getProvider = () =>{
    return  new ethers.providers.JsonRpcProvider(RPC_URL);
}

// const getContract = async ( ,address ) => await ethers.getContractAt(address)

module.exports = { getSigner, getProvider }