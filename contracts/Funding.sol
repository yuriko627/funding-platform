// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;
import "@openzeppelin/contracts/token/ERC721/ERC721Mintable.sol";

contract Funding {
    ERC721Mintable nft;

    constructor(address _nftAddress) public {
        nft = ERC721Mintable(_nftAddress);
    }

    function fund() public payable {
        nft.safeMint(msg.sender, 1);
    }
}
