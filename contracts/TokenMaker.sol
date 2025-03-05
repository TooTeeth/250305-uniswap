// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenMaker is ERC20 {
    constructor(string memory _name, string memory _symbol, uint initialSupply) ERC20(_name, _symbol) {
        _mint(msg.sender, initialSupply);
    }
}