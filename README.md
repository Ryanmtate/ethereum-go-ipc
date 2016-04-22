# ethereum-go-ipc
Promisified Ethereum JSON RPC wrappers for Geth (Ethereum Go-Lang implementation)



## Start Here

```npm install ethereum-go-ipc --save```


```js
const geth = require("ethereum-go-ipc");

geth.listAccounts().then((accounts) => {
  console.log(accounts);
}).catch((error) => {
  console.log(error);
});

```

### Notes

For a list of implemented methods, see exports:
- [exports](https://github.com/Ryanmtate/ethereum-go-ipc/blob/master/lib/gethIPC.js)
