# @cosmonauts/ast-gen

Cosmos Typescript ASTs

## messages

```js
import generate from '@babel/generator';
import { messages } from '@cosmonauts/ast-gen';

export const mutations: Mutation[] = [
    { methodName: 'joinPool', typeUrl: '/cosmos.pools.transfer.v1.MsgJoinPool', TypeName: 'MsgJoinPool' },
    { methodName: 'exitPool', typeUrl: '/cosmos.pools.transfer.v1.MsgExitPool', TypeName: 'MsgExitPool' }
];

const ast = messages(mutations)
console.log(generate(myModule).code)
```

produces:

```js
export const messages = {
  joinPool(value: MsgJoinPool) {
    return {
      typeUrl: "/cosmos.pools.transfer.v1.MsgJoinPool",
      value: MsgJoinPool.fromPartial(value)
    };
  },
  exitPool(value: MsgExitPool) {
    return {
      typeUrl: "/cosmos.pools.transfer.v1.MsgExitPool",
      value: MsgExitPool.fromPartial(value)
    };
  }
};
```

## encoded


```js
import generate from '@babel/generator';
import { encoded } from '@cosmonauts/ast-gen';

export const mutations: Mutation[] = [
    { methodName: 'joinPool', typeUrl: '/cosmos.pools.transfer.v1.MsgJoinPool', TypeName: 'MsgJoinPool' },
    { methodName: 'exitPool', typeUrl: '/cosmos.pools.transfer.v1.MsgExitPool', TypeName: 'MsgExitPool' }
];

const ast = encoded(mutations)
console.log(generate(myModule).code)
```

produces:

```js
export const encoded = {
  joinPool(value: MsgJoinPool) {
    return {
      type_url: "/cosmos.pools.transfer.v1.MsgJoinPool",
      value: MsgJoinPool.encode(value).finish()
    };
  },

  exitPool(value: MsgExitPool) {
    return {
      type_url: "/cosmos.pools.transfer.v1.MsgExitPool",
      value: MsgExitPool.encode(value).finish()
    };
  }
};
```
## namespaces

```js
import generate from '@babel/generator';
import * as t from '@babel/types';
import { recursiveNamespace } from '@cosmonauts/ast-gen';

const myModule = recursiveNamespace(
    [
        'osmosis',
        'gamm',
        'v1beta',
        'pools'
    ].reverse(), [astBody]);

console.log(generate(t.program(myModule)).code)
```

produces:

```js
export namespace osmosis {
  export namespace gamm {
    export namespace v1beta {
      export namespace pools {

          // astBody here

      }
    }
  }
}
```