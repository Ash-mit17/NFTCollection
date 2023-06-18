const hre = require('hardhat')

async function main() {
  /*
  DeployContract in ethers.js is an abstraction used to deploy new smart contracts,
  so whitelistContract here is a factory for instances of our Whitelist contract.
  */
  // here we deploy the contract

// 10 is the Maximum number of whitelisted addresses allowed

// wait for the contract to deploy


const whitelistContract = await hre.ethers.getContractFactory("NFT");
const contract = await whitelistContract.deploy("https://nft-collection-sneh1999.vercel.app/api/","0x5c89574B599Eb9e6963eaF1958F7AdEB02582F0A");
await contract.deployed();

    

// print the address of the deployed contract
console.log("NFT Contract Address:", contract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  //whitelist sc address : 0x5c89574B599Eb9e6963eaF1958F7AdEB02582F0A
  // NFT sc address : 0x371ef7A549AEb3DDe2eB99F8c911A046537f7181