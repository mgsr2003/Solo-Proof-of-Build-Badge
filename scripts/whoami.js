const hre = require("hardhat");
(async () => {
  const [me] = await hre.ethers.getSigners();
  console.log("Hardhat signer:", me.address);
})();
