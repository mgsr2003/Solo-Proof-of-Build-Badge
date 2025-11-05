const { Wallet } = require("ethers");
const fs = require("fs");
const w = Wallet.createRandom();
const out = {
  address: w.address,
  privateKey: w.privateKey,
  mnemonic: w.mnemonic.phrase
};
fs.writeFileSync("new_burner.json", JSON.stringify(out, null, 2), { mode: 0o600 });
console.log("Created new burner wallet:", out.address);
console.log("Saved to new_burner.json (permissions 600).");
