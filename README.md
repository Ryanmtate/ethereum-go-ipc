# ethereum-go-ipc
Promisified Ethereum JSON RPC wrappers for Geth (Ethereum Go-Lang implementation)



## Start Here

```npm install ethereum-go-ipc --save```


```js
const geth = require("ethereum-go-ipc");

// default IPC path set to '/root/.ethereum/geth.ipc'
geth.setGethSocket("/path/to/geth.ipc");

// optional geth.delay(ms) for managing race conditions.
// Simply put, allow geth node time to load.

geth.delay(3000).then(() => {
  return geth.newAccount('password');
}).then((created) => {
  return geth.listAccounts();
}).then((accounts) => {
  console.log(accounts);
}).catch((error) => {
  console.log(error);
});

```

### Notes

For a list of implemented methods, see exports:
- [exports](https://github.com/Ryanmtate/ethereum-go-ipc/blob/master/lib/gethIPC.js)
