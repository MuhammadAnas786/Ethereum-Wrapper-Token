const { expect } = require('chai');
const { ethers } = require('hardhat');
const { isCallTrace } = require('hardhat/internal/hardhat-network/stack-traces/message-trace');
const { DAI, WETH9, SWAP_CONTRACT, USDC, WRAPPER_CONTRACT } = require('../utils/constants');
const { getSigner } = require('../utils/helper');

describe('WrapEth', () =>{

    let wallet
    let wrapper
    let weth
    let balanceInWeiWeth
    let balanceWeth 
    let balanceInWeiDai 
    let balanceDai 

    before(async () => {

        wallet = getSigner();
        // dai = await ethers.getContractAt("IERC20",DAI);
        // usdc = await ethers.getContractAt("IERC20",USDC);
        // weth = await ethers.getContractAt("IWETH",WETH9);
        wrapper = await ethers.getContractAt("WrapperToken",WRAPPER_CONTRACT);

    })
    it('Creating wrapper tokens',async function(){

       
        const amountIn = 10n ** 18n;
       let val = await wrapper.connect(wallet).getWrappedTokens({value:amountIn});
        // await weth.connect(wallet).approve(SWAP_CONTRACT,amountIn);
        

        // await swap.connect(wallet).swapExactInputSingle(amountIn, WETH9, DAI );

      
    })

    // it('Withdrawing wrapper tokens',async function(){

    //     const amountIn = 10n ** 18n;
    //     await wrapper.connect(wallet).approve(WRAPPER_CONTRACT,amountIn);
    //   let val =  await wrapper.connect(wallet).withdrawBalance(amountIn);

    // })

    // it('swapExactOutputSingle Swap DAI with WETH',async function(){

       
    //     const amountOut = 10n ** 18n;
    //     const amountIn= 2000n * 10n ** 18n
    //     console.log(ethers.utils.formatEther(amountIn))
    //     // await weth.connect(wallet).deposit({value:amountIn});
    //     await dai.connect(wallet).approve(SWAP_CONTRACT, amountIn);
        

    //     await swap.connect(wallet).swapExactOutputSingle(amountOut, amountIn, DAI, WETH9 );

      
    // })

    
    afterEach(async() =>{

        balanceInWeiWeth = await wrapper.balanceOf(wallet.address);
        balanceWeth = ethers.utils.formatEther(balanceInWeiWeth);
        // balanceInWeiDai = await dai.balanceOf(wallet.address);
        // balanceDai = ethers.utils.formatEther(balanceInWeiDai);


        console.log( "Balance WETH: " + balanceWeth );
        // console.log( "Balance DAI: " + balanceDai );
    })

})


