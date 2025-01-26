# Guide to Generating Tree-Shakable Hooks

We are planning to **deprecate the `reactQuery` option** in the Telescope options. Instead, we are introducing **tree-shakable hooks** to replace the functionality. This guide explains how to enable and use the new hooks.

---

## Overview
Tree-shakable hooks are available for both **React** and **Vue**. These hooks are designed to improve modularity and optimize performance by allowing you to import only the functionality you need.

---

## Enabling Tree-Shakable Hooks

To enable the generation of tree-shakable hooks, configure the `TelescopeOptions` as follows:

```typescript
TelescopeOptions: {
  ...,  
  helperFunctions?: {
    ...,  
    hooks?: {
      react: boolean;
      vue?: boolean;
    };
  };
}
```

### **React**
Set `TelescopeOptions.helperFunctions.hooks.react` to `true`.

### **Vue**
Set `TelescopeOptions.helperFunctions.hooks.vue` to `true`.

---

## Generated Files

When enabled, the following files will be generated in the respective directories of each package:

- **React Query File**:  
  `v-next/outputhelperfunc/cosmos/react-query`
- **Vue Query File**:  
  `v-next/outputhelperfunc/cosmos/vue-query`

Additionally, subdirectory files will be generated for specific modules, such as:

- `v-next/outputhelperfunc/cosmos/bank/v1beta1/query.rpc.func.ts`
- `v-next/outputhelperfunc/cosmos/bank/v1beta1/query.rpc.react.ts`
- `v-next/outputhelperfunc/cosmos/bank/v1beta1/query.rpc.vue.ts`

---

## File Details

### **1. `query.rpc.func.ts`**
This file contains shared functions that can be used by both React and Vue hooks. For example:

```typescript
export const createGetBalance = (clientResolver?: RpcResolver) =>
  buildQuery<QueryBalanceRequest, QueryBalanceResponse>({
    encode: QueryBalanceRequest.encode,
    decode: QueryBalanceResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "Balance",
    clientResolver,
    deps: [QueryBalanceRequest, QueryBalanceResponse],
  });
```

---

### **2. `query.rpc.react.ts`**
This file contains React-specific hooks. Example:

```typescript
export const useGetBalance = buildUseQuery<QueryBalanceRequest, QueryBalanceResponse>({
  builderQueryFn: createGetBalance,
  queryKeyPrefix: "BalanceQuery",
});
```

---

### **3. `query.rpc.vue.ts`**
This file contains Vue-specific hooks. Example:

```typescript
export const useGetBalance = buildUseVueQuery<QueryBalanceRequest, QueryBalanceResponse>({
  builderQueryFn: createGetBalance,
  queryKeyPrefix: "BalanceQuery",
});
```

---

## Advantages of Tree-Shakable Hooks

1. **Modularity**: Single functionality can be invoked independently.
2. **Improved Performance**: Reduces the need for large, bloated objects with unwanted properties.
3. **Framework-Specific**: Provides optimized hooks tailored for React and Vue.

By adopting this approach, you can ensure cleaner, more maintainable, and efficient code.


## Use Example of Shared Functions

Shared functions allow you to create API interaction logic that can be used across both React and Vue without duplicating code. Here's an example of how you might use the shared function `createGetBalance`:

```typescript
import { createGetBalance } from "@interchainjs/cosmos-types/cosmos/bank/v1beta1/query.rpc.func";

({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } = useChain('osmosis'));
const rpcEndpoint = await getRpcEndpoint();
getBalance = createGetBalance(rpcEndpoint);
const { balance } = await getBalance({
  address: directAddress,
  denom,
});
```

In this example, the createGetBalance function is called with an RPC endpoint and is used to fetch the balance for a specific address and denomination.

## Use Example of Tree-Shakable Hooks

Tree-shakable hooks provide a framework-specific API interaction method. Here's an example of how to use the tree-shakable hook `useGetBalance` in a React component:

```typescript
import BigNumber from "bignumber.js";
import { useGetBalance } from "../../codegen/cosmos/bank/v1beta1/query.rpc.vue";
import { Ref, computed } from "vue";
import { assetLists } from "@chain-registry/v2";

const defaultChainName = 'osmosistestnet' // 'cosmoshub'\
const defaultAssetList = assetLists.find((assetList) => assetList.chainName === defaultChainName)
const defaultRpcEndpoint = 'https://rpc.testnet.osmosis.zone' // 'https://cosmos-rpc.publicnode.com'

export const useBalanceVue = (address: Ref) => {
  const coin = defaultAssetList?.assets[0];

  const denom = coin!.base!

  const COIN_DISPLAY_EXPONENT = coin!.denomUnits.find(
    (unit) => unit.denom === coin!.display
  )?.exponent as number;

  const request = computed(() => ({
    address: address.value,
    denom,
  }));

  const {
    data: balance,
    isSuccess: isBalanceLoaded,
    isLoading: isFetchingBalance,
    refetch: refetchBalance
  } = useGetBalance({
    request,
    options: {
      enabled: !!address,
      //@ts-ignore
      select: ({ balance }) =>
        new BigNumber(balance?.amount ?? 0).multipliedBy(
          10 ** -COIN_DISPLAY_EXPONENT
        ),
    },
    clientResolver: defaultRpcEndpoint,
  })

  return {
    balance,
    isBalanceLoaded,
    isFetchingBalance,
    refetchBalance,
  };
};

export default useBalanceVue;
```
In this example, the `defaultChainName`, `defaultAssetList`, and `defaultRpcEndpoint` are hardcoded for demonstration purposes. Please modify them according to your specific requirements.