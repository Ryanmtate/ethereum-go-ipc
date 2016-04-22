const geth = require('./index');

geth.setGethSocket();

geth.listAccounts().then((accounts) => {
  console.log(accounts);
}).catch((error) => {
  console.log(error);
});
