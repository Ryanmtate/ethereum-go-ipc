const Promise = require('bluebird');
const net = require('net');
const Web3 = require('web3');
var gethSocket = '/root/.ethereum/geth.ipc';
var web3;

exports.delay = (ms) => {
  return Promise.delay(ms);
}

exports.setGethSocket = (ipcPath) => {
  gethSocket = ipcPath;
  return;
}

exports.setRpcUri = (rpcUri) => {
    exports.rpcUri = rpcUri;
}

exports.listAccounts = () => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'personal_listAccounts',params: [],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}

exports.newAccount = (password) => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'personal_newAccount',params: [password],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  });
}

exports.deleteAccount = (address, password) => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'personal_deleteAccount',params: [address, password],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}


exports.unlockAccount = (address, password, _duration) => {
  return new Promise((resolve, reject) => {
    var duration = _duration || 60;
    var payload = {jsonrpc: '2.0',method: 'personal_unlockAccount',params: [address, password, duration],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}

exports.datadir = () => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'admin_datadir',params: [],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}

exports.verbosity = (level) => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'admin_verbosity',params: [level],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}

exports.nodeInfo = () => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'admin_nodeInfo',params: [],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}

exports.addPeer = (nodeUrl) => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'admin_addPeer',params: [nodeUrl],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}

exports.peers = () => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'admin_peers',params: [],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}

exports.startNatSpec = () => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'admin_startNatSpec',params: [],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}

exports.getContractInfo = (address) => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'admin_getContractInfo',params: [address],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}

exports.saveInfo = (contractInfo, filename) => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'admin_saveInfo',params: [contractInfo, filename],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}

exports.register = (address, contractaddress, contenthash) => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'admin_register',params: [address, contractaddress, contenthash],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}

exports.registerUrl = (address, codehash, contenthash) => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'admin_registerUrl',params: [address, codehash, contenthash],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}

exports.minerStart = (threadCount) => {
    return new Promise((resolve, reject) => {
        var payload = {jsonrpc: '2.0',method: 'miner_start',params: [threadCount],id: 1};
    gethCall(payload, (error, data) => {
        if(error){reject(error);}
        if(data && data.error){reject(data.error);}
    if(data){resolve(data.result);}
});
})
}

exports.minerStop = (threadCount) => {
    return new Promise((resolve, reject) => {
        var payload = {jsonrpc: '2.0',method: 'miner_stop',params: [threadCount],id: 1};
    gethCall(payload, (error, data) => {
        if(error){reject(error);}
        if(data && data.error){reject(data.error);}
    if(data){resolve(data.result);}
});
})
}

exports.startAutoDag = () => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'miner_startAutoDAG',params: [],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}

exports.stopAutoDAG = () => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'miner_stopAutoDAG',params: [],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}

exports.makeDAG = (blockNumber, dir) => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'miner_makeDAG',params: [blockNumber, dir],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}

exports.hashrate = () => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'miner_hashrate',params: [],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}

exports.setExtra = (msg) => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'miner_setExtra',params: [msg],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}

exports.setGasPrice = (gasPrice) => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'miner_setGasPrice',params: [gasPrice],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}

exports.setEtherbase = (account) => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'miner_setEtherbase',params: [account],id: 1};
    gethCall(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}

exports.setHead = (blockNumber) => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'debug_setHead',params: [blockNumber],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}

exports.seedHash = (blockNumber) => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'debug_seedHash',params: [blockNumber],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}

exports.processBlock = (blockNumber) => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'debug_processBlock',params: [blockNumber],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}

exports.printBlock = (blockNumber) => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'debug_printBlock',params: [blockNumber],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}

exports.dumpBlock = (blockNumber) => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'debug_dumpBlock',params: [blockNumber],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}

exports.metrics = (raw) => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'debug_metrics',params: [raw],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  })
}

exports.getTransactionByHash = (txhash) => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'eth_getTransactionByHash',params: [txhash],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  });
}

exports.newFilter = (filter) => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'eth_newFilter',params: [filter],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  });
}

exports.getFilterChanges = (filterID) => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'eth_getFilterChanges',params: [filterID],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      if(data){resolve(data.result);}
    });
  });
}

exports.syncing = () => {
  return new Promise((resolve, reject) => {
    var payload = {jsonrpc: '2.0',method: 'eth_syncing',params: [],id: 1};
    gethIPC(payload, (error, data) => {
      if(error){reject(error);}
      if(data && data.error){reject(data.error);}
      resolve(data);
    });
  })
}

exports.web3Provider = () => {
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else if (typeof exports.rpcUri !== 'undefined') {
        web3 = new Web3(new Web3.providers.HttpProvider(exports.rpcUri));
    } else {
        // set the provider you want from Web3.providers
        web3 = new Web3(new Web3.providers.IpcProvider(gethSocket, net));
    }

    return web3;
}

function gethCall(payload, next) {
    if (exports.rpcUri) {
        gethRPC(payload, next);
    } else {
        gethIPC(payload, next);
    }
}

// Geth RPC connection
function gethRPC(payload, next) {
    var provider = exports.web3Provider();
    provider.currentProvider.send(payload, function (arg0, arg1, arg2, arg3) {
        next();
    });
}

// Geth Socket Connection
function gethIPC(payload, next){
  if(payload == null){
    console.log('no payload');
    next('no payload', null);
  };

  var client = net.connect({path: gethSocket}, () => {
    client.end(JSON.stringify(payload));
  })


  client.on('connection', (d) => {
    console.log(d)
  });

  client.on('data', (data) => {
    // var response = "";
    // response += JSON.stringify(data);
    // var res = JSON.parse(response);
    next(null, data)
  });

  client.on('end', () => {
    // console.log('Socket Received payload');
  });

  client.on('error', (data) => {
    // var response = "";
    // response += data.toString();
    // var res = JSON.parse(response);
    next(data, null);
  });

  process.setMaxListeners(Infinity);

  process.on('SIGINT', () => {
    console.log("Caught interrupt signal");

    client.end();
    process.exit();
  });
};
