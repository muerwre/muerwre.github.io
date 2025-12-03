- Simple #dapp example for tests: [https://metamask.github.io/test-dapp/](https://metamask.github.io/test-dapp/)
- Interaction with smart contracts described in [Smart contracts](Smart%20contracts.md)

## Connecting to node

If #Metamask extension installed, `Web3.givenProvider` is available in global window. You can use [Infura](https://infura.io) or your node instead:

```typescript
import Web3 from 'web3';

// URL of your node
const PROVIDER_URL = 'https://...';

export const web3 = new Web3(Web3.givenProvider || PROVIDER_URL);
``` 

## Getting wallet balance

```typescript
const getBalance = async (address: string) => {
    return await web3.eth.getBalance(address);
}
```

## Getting wallet address

```typescript
// first we need to authorize
const authorize = async () => {
  await web3.currentProvider.request({ method: 'eth_requestAccounts' });
}

// then we can get wallet address
const getCurrentAddressUser = () => {
    return web3.currentProvider.selectedAddress;
}
```

## Sending transaction

Sending `value` tokens with `memo` as value:

```typescript

const transfer = async ({ 
  from, 
  to, 
  value, 
  memo, 
  privateKey, 
  gasLimit = 44000 
}) => {
    const nonce = await web3.eth.getTransactionCount(from);
    const gasPrice = await web3.eth.getGasPrice();
    
    const rawTx = {
      from,
      to,
      value: web3.utils.toHex(Web3.utils.toWei(value, 'ether')),
      gasLimit: web3.utils.toHex(gasLimit),
      gasPrice: web3.utils.toHex(gasPrice),
      nonce: web3.utils.toHex(nonce),
      data: memo,
    };
    
    const privateKeyBuffer = EthUtil.toBuffer(privateKey);
    
    const tx = new Transaction(rawTx);
    
    tx.sign(privateKeyBuffer);
    const serializedTx = tx.serialize();
    
    return this.web3.eth.sendSignedTransaction(
      `0x${serializedTx.toString('hex')}`
    );
}
```

## Estimating transaction FEE

Useful to get fixed amount of tokens from user with pre-estimated fee.

```typescript
import { web3 } from '.';

const estimateFee = async ({
    from,
    to,
    value,
    memo,
}) => {
    const gasPrice = await web3.eth.getGasPrice();
    const gasLimit = await web3.eth.estimateGas({
      from,
      to,
      value: web3.utils.toHex(web3.utils.toWei(value, 'ether')),
      data: web3.utils.asciiToHex(memo),
    }).call();
    
    return web3.utils.fromWei(
      BigInt(gasPrice.toString())
        .multiply(BigInt(gasLimit.toString()))
        .toString()
    );
}
```

## Subscribing to wallet address change

```typescript
import { web3 } from '.';

web3.currentProvider.on('accountsChanged', callback);
```


## Watching network change

```typescript
ethereum.on('chainChanged', handler: (chainId: string) => void);
```

## Adding custom token to wallet

```typescript
window.ethereum
  .request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: '0xb60e8dd61c5d32be8058bb8eb970870f07233155',
        symbol: 'FOO',
        decimals: 18,
        image: 'https://foo.io/token-image.svg',
      },
    },
  })
  .then((success) => {
    if (success) {
      console.log('FOO successfully added to wallet!')
    } else {
      throw new Error('Something went wrong.')
    }
  })
  .catch(console.error)
  ```

## Changing network to custom 

Checking current chainId:

```typescript
const getChainID = async () => {
    return ethereum.request({ method: 'eth_chainId' })
}
```

Asking wallet to change current network:

```typescript
try {
  await window.ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: '0x03' }], // ropsten chainID (3) in hex
  });
} catch (switchError) {
  // This error code indicates that the chain has not been added to MetaMask.
  if (error.code === 4902) {
    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{ 
          chainId: '0x03', // ropsten chainID (3) in hex
          chainName: 'Ropsten Test Network', 
          nativeCurrency: { 
              name: 'ETH',
              symbol: 'ETH',
              decimals: 18
          }, 
          rpcUrls: ['https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'], 
          blockExplorerUrls: ['https://ropsten.etherscan.io'] 
        }] ,
      });
    } catch (addError) {
      // handle "add" error
    }
  }
  // handle other "switch" errors
}
```

