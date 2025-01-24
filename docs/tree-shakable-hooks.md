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
