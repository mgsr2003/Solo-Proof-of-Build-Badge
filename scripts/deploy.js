const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const Badge = await hre.ethers.getContractFactory("DidLabBadge");
  const badge = await Badge.deploy(); // ✅ no constructor args
  await badge.waitForDeployment();
  console.log("Deployer:", deployer.address);
  console.log("DidLabBadge:", await badge.getAddress());
}

main().catch((e) => { console.error(e); process.exit(1); });
