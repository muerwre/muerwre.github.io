For common functions see [Common typescript examples](Common%20typescript%20examples.md). 

## Getting smart contract instance

Useful for calling smart contract methods:

```typescript
import { Contract } from 'web3-eth-contract';
import { web3 } from '.';

const getContract = (abi: object, address?: string): Contract => {
  const abiFromJson = JSON.parse(JSON.stringify(abi));
  return new web3.eth.Contract(abiFromJson, address);
};

export default getContract;
```
## Executing contract method

Contract has **read** and **write** methods. To get a list of methods, you can paste contract address on  [https://etherscan.io/ ETH](https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7#readContract) or any other service.

 **Read** methods doesn't require spending **gas**. **Write** methods cost some amount of **gas**, hence they will be executed with confirmation from user.

### Example for #Metamask without private key

```typescript
// see example below
import { getContract } from '.';

// ABI of contract
const CONTRACT_ABI = { /* ... */ };
 // address for contract
const CONTRACT_ADDRESS = '0xdea164f67df4dbfe675d5271c9d404e0260f33bb';

export const executeContractMethod = async ({}) => {
  // getting contract
  const contract = getContract(CONTRACT_ABI, CONTRACT_ADDRESS);
  
  // Calling write method
  try {
    // authorizing with Metamask
    await web3.currentProvider.request({ method: 'eth_requestAccounts' });
    // getting wallet address
    const addressUser = web3.currentProvider.selectedAddress;
    // calling "store" store method for contract
    // payload should include `from` address, that matches
    // current user's wallet
    await contract.methods.store(0, 'Parameter').send({
      from: addressUser,
    });
  } catch (e) {
    throw new Error(e);
  }
  
  // calling read method
  try {
    // this method can return data
    const result = await contract.methods.retrieve().call();
  } catch (e) {
    throw new Error(e);
  }
}
```

### Node.js and React Native example

```typescript
// see example below
import { getContract } from '.';

// ABI контракта
const CONTRACT_ABI = { /* ... */ };
// contract address
const CONTRACT_ADDRESS = '0xdea164f67df4dbfe675d5271c9d404e0260f33bb';
// getting contract
const contract = getContract(CONTRACT_ABI, CONTRACT_ADDRESS);
// account's private key
const privateKey = '...';

// write-methods requires private key
const executeContractMethod = async (val: number) => {
    const transaction = contract.methods.store(val);
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    const options = {
      to: CONTRACT_ADDRESS,
      data: transaction.encodeABI(),
      gas: await transaction.estimateGas({ from: account.address }),
      gasPrice: await web3.eth.getGasPrice(),
    };
    const signed = await web3.eth.accounts.signTransaction(
      options,
      privateKey,
    );
    await web3.eth.sendSignedTransaction(signed.rawTransaction!);
};
```

### Calling a batch of contract's methods

Function calls batch of requests, returning array of results. For example:

```typescript
  const requests = [
   contract.method.balanceOf().call,
   contract.method.getStaked().call
  ]

  const result = await makeBatchRequest(request);
```

```typescript
const web3 = new Web3(Web3.givenProvider || PROVIDER_URL);

const makeBatchRequest = (calls: any[]) => {
  try {
    const web3 = getWeb3NoAccount();
    const batch = new web3.BatchRequest();

    const promises = calls.map((call) => {
      return new Promise((resolve, reject) => {
        batch.add(
          call.request({}, (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          })
        );
      });
    });

    batch.execute();

    return Promise.all(promises);
  } catch {
    return null;
  }
};

export default makeBatchRequest;
```

## Subscribing to smart contract events

There're different ways to subscribe for contract events. For all of them you will need following variables:

```typescript
  import Web3 from 'web3';
  const web3 = new Web3('YOUR_RPC_ENDPOINT_HERE');
  const ABI = 'YOUR ABI HERE';
  const CONTRACT_ADDRESS = 'YOUR CONTRACT ADDRESS HERE';
  const myContract = new Web3.Contract(ABI, CONTRACT_ADDRESS);
```

### By accessing contract.events

```typescript
referralProgramContract.events
  .RegisterUser()
  .on('connected', (subscriptionId: string) => {
    console.log(`| UserRegistered | events | ${subscriptionId}`);
  })
  .on(
    'data',
    async (event: {
      removed: boolean;
      returnValues: RegisterUserResponseInterface;
    }) => {
      try {
        if (event.removed) {
          return;
        }
        const { user, referrer } = event.returnValues;
        console.log(user, referrer);
      } catch (e) {
        console.log(`| ONCE | ${e}`);
      }
    },
  )
  .on('error', (error: ErrnoException) => {
    console.log(error);
  });
```

### With filtering

We're listening to `Transfer` event here:

```typescript
  let options = {
    filter: {
        value: [],
    },
    fromBlock: 0
  };

  myContract.events.Transfer(options)
    .on('data', event => console.log(event))
    .on('changed', changed => console.log(changed))
    .on('error', err => throw err)
    .on('connected', str => console.log(str))
```

### Common Subscribe method

Filtering options can also be specified:

```typescript
  let options = {
    fromBlock: 0,
    address: ['address-1', 'address-2'],    //Only get events from specific addresses
    topics: []                              //What topics to subscribe to
  };

  let subscription = ('logs', options, (err,event) => {
      if (!err)
      console.log(event)
  });

  subscription.on('data', event => console.log(event))
  subscription.on('changed', changed => console.log(changed))
  subscription.on('error', err => { throw err })
  subscription.on('connected', nr => console.log(nr))
```

### Getting event history

Getting history for `Transfer` events for specific values. More info can be found [here](https://web3js.readthedocs.io/en/v1.2.11/web3-eth-subscribe.html#)

```typescript 
  //example options(optional)
  let options = {
    filter: {
        // only get events where transfer value was 1000 or 1337
        value: ['1000', '1337']    
    },
    // number | "earliest" | "pending" | "latest"
    fromBlock: 0,                  
    toBlock: 'latest'
  };

  myContract.getPastEvents('Transfer', options)
    .then(results => console.log(results))
    .catch(err => throw err);

```

