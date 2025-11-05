const { Wallet } = require("ethers"); const fs=require("fs");
const w = Wallet.createRandom();
fs.writeFileSync("new_burner.json", JSON.stringify({address:w.address, privateKey:w.privateKey, mnemonic:w.mnemonic.phrase}, null, 2), {mode:0o600});
console.log("New address:", w.address);
