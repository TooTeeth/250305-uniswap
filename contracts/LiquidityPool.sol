// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LiquidityPool is ERC20 {
    IERC20 public tokenA;
    IERC20 public tokenB;

    uint256 public reserveA;
    uint256 public reserveB;

    constructor(IERC20 _tokenA, IERC20 _tokenB) ERC20("Liquidity Provider Token", "LPT") {
        tokenA = _tokenA;
        tokenB = _tokenB;
    }

    function addLiquidity(uint amountA, uint amountB) external {
        require(tokenA.transferFrom(msg.sender, address(this), amountA), "Failed Transfer TokenA");
        require(tokenB.transferFrom(msg.sender, address(this), amountB), "Failed Transfer TokenB");

        reserveA += amountA;
        reserveB += amountB;

        uint liquidity = amountA + amountB;
        _mint(msg.sender, liquidity);
    }

    function removeLiquidity(uint liquidity) external {
        require(balanceOf(msg.sender) >= liquidity, "Not enough LP tokens");

        uint totalLPTokens = totalSupply();

        uint amountA = (liquidity * reserveA) / totalLPTokens;
        uint amountB = (liquidity * reserveB) / totalLPTokens;

        _burn(msg.sender, liquidity);
        reserveA -= amountA;
        reserveB -= amountB;

        require(tokenA.transfer(msg.sender, amountA), "Failed Transfer TokenA");
        require(tokenB.transfer(msg.sender, amountB), "Failed Transfer TokenB");
    }

    function getInputPrice(uint inputAmount, uint inputReserve, uint outputReserve) public pure returns (uint) {
        require(inputReserve > 0 && outputReserve > 0, "Error Reserve Value");

        uint inputAmoutWithFee = inputAmount * 997; // 0.3% 수수료 적용 (1000 - 3)

        uint numerator = inputAmoutWithFee * outputReserve;
        uint denominator = (inputReserve * 1000) + inputAmoutWithFee;

        return numerator / denominator;
    }

    function swapAForB(uint amountAIn, uint minBOut) external {
        require(tokenA.transferFrom(msg.sender, address(this), amountAIn), "Failed Transfer TokenA");

        uint tokenBOut = getInputPrice(amountAIn, reserveA, reserveB);
        require(tokenBOut >= minBOut, "Not Enough TokenB");

        reserveA += amountAIn;
        reserveB -= tokenBOut;

        require(tokenB.transfer(msg.sender, tokenBOut), "Failed Transfer TokenB");
    }

    function swapBForA(uint amountBIn, uint minAOut) external {
        require(tokenB.transferFrom(msg.sender, address(this), amountBIn), "Failed Transfer TokenB");

        uint tokenAOut = getInputPrice(amountBIn, reserveB, reserveA);
        require(tokenAOut >= minAOut, "Not Enough TokenB");

        reserveB += amountBIn;
        reserveA -= tokenAOut;

        require(tokenA.transfer(msg.sender, tokenAOut), "Failed Transfer TokenA");
    }
}