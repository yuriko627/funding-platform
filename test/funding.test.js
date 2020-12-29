const Funding = artifacts.require("Funding")
const TestNFT = artifacts.require("TestNFT")

contract("Funding", (accounts) => {
  it("should return NFTz after receiving 1 ETH", async () => {
    const fundingInstance = await Funding.deployed()
    const nft = await TestNFT.deployed()

    const alice = accounts[0]

    //receive 1ETH
    await fundingInstance.fund({
      from: alice,
      value: web3.utils.toWei("1", "ether")
    })

    // Alice gets NFTz
    const balance = await nft.balanceOf(alice)
    assert.equal(balance, 1, "balance of NFT should be incremented.")
  })
})
