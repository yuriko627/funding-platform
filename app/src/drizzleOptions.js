import Web3 from "web3";
import Funding from "./contracts/Funding.json";

const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:8545"),
  },
  contracts: [Funding],
  events: {}
};

export default options;
