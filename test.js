const geth = require('./index');

geth.setGethSocket("/Users/ryan/Library/Ethereum/geth.ipc");


geth.delay(3000).then(() => {
  return geth.newAccount('password');
}).then((created) => {
  return geth.newAccount('password');
}).then((created) => {
  return geth.listAccounts();
}).then((accounts) => {
  console.log(accounts);
}).catch((error) => {
  console.log(error);
});
