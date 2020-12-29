const Funding = artifacts.require("Funding")
const TestNFT = artifacts.require("TestNFT")

module.exports = function (deployer) {
  let nft
  deployer
    .deploy(TestNFT)
    .then((_nft) => {
      nft = _nft
      return deployer.deploy(Funding, nft.address)
    })
    .then((funding) => {
      return nft.addMinter(funding.address)
    })
}
