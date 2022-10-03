const { ethers } = require('hardhat');
const { getSigner } = require('../utils/helper');

const deploy = async() =>{

    const tokenContract = await ethers.getContractFactory("WrapperToken", getSigner() );
    // let supply = ethers.utils.parseUnits('1000000'.toString(), "ether")
    const TokenContract = await tokenContract.deploy();
    await TokenContract.deployed();

    console.log(TokenContract.address);
}

deploy().catch( err =>{
    console.log(err)
} )