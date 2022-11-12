//require - import
// this file index.js basically means "./constants"
const contractAddresses = require("./contractAddresses.json");
const abi = require("./abi.json");
// console.log(`AC address:${contractAddresses["31337"][0]}`);
module.exports = {
  contractAddresses,
  abi,
};
