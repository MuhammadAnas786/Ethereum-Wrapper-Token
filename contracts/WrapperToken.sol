pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract WrapperToken is ERC20 {
    // IERC20 public immutable NativeToken;
    // ERC20 public immutable WrapperToken;

    constructor() ERC20("WrappedEth","WETH"){
        // NativeToken = IERC20(_NativeToken);
    }

    fallback() external payable {
        Deposit()
    }

    // function recieve() external payable {
    //     Deposit();
    // }

    function Deposit() external payable returns ( uint256 ){
        _mint( msg.sender,msg.value );
        return msg.value;
    }
    function withdrawBalance(uint256 amount) external returns( uint256 ){
        require(balanceOf(msg.sender)>=amount);
        _burn( msg.sender,amount );
       (bool sent, bytes memory data) = payable(msg.sender).call{value:amount}("");
       require(sent, "Failed to send Ether");
       return amount;
    }


}
