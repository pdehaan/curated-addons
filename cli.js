#!/usr/bin/env node

const lib = require("./lib");
const addons = require("./addons.json");

main(addons)
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

async function main(addons) {
  const res = await lib.fetchAddons(addons);
  console.log(JSON.stringify(res, null, 2));
}
