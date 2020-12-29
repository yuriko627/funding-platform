pragma solidity >=0.4.21 <0.7.0;

import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721Mintable.sol";

contract TestNFT is ERC721Full, ERC721Mintable {
    constructor() public ERC721Full("TestNFT", "TNFT") {}
}
