[< back](https://github.com/osmosis-labs/telescope/blob/main/docs/README.md)

# creating new generators

## 0 find a home for the code

Find a folder that makes sense for the new generator. Only if you really need to, create a new one inside of `packages/ast/src`:

```
├── bundle
├── clients
├── docs
├── encoding
├── plugins
├── registry
├── state
├── utils
```

| folder    | purpose                                                                        | 
| --------- | -----------------------------------------------------------------------------  |
| bundle    | for creating bundled object that map to go exports, e.g. `cosmos.bank.v1beta1` |
| clients   | for building LCD, RPC, gRPC or Stargate clients                                |
| docs      | for generating markdown and automated documentation                            |
| encoding  | for generating code that does Proto or Amino encoding                          |
| plugins   | for looking up options when building plugins                                   |
| registry  | for generating the CosmJS message registry                                     |
| state     | for generating state management plugins, such as react-query or mobx           |
| utils     | other AST utilities, usually babel helpers                                     |

## 1 write the AST function

for example, in `packages/ast/src/clients/rpc/class/some-new-rpc-client.ts`. Make sure to include `context: GenericParseContext` as the first property of all AST functions. The `ProtoService` is only here in this example because we intend to use it as we create the AST generator.

If you are not sure how to write ASTs with `@babel/types`, please see our docs on [working with ASTs](https://github.com/osmosis-labs/telescope/blob/main/docs/working-with-asts.md). You can also checkout [astexplorer.net](https://astexplorer.net) to visually browse and learn ASTs, but they are quite verbose compared to our script when you run `yarn test:ast`.

```js
import { ProtoService } from "@osmonauts/types";
import { GenericParseContext } from "../../../encoding";
import * as t from '@babel/types';

export const createSomeNewRpcClient = (
    context: GenericParseContext,
    service: ProtoService
) => {
    return t.exportNamedDeclaration(
        t.tsInterfaceDeclaration(
            t.identifier('MyAwesomeInterface'),
            null,
            [],
            t.tsInterfaceBody([
                // ... more code ...
            ])
        )
    );
};
```

## 2 add it to the index

in this example, we're in `packages/ast/src/clients/rpc/class/index.ts`

```js
export * from './rpc';
export * from './some-new-rpc-client';
```

## 3 add a test

in this example, `packages/ast/src/clients/rpc/class/some-new-rpc-client.test.ts`

```js
import { ProtoStore, traverse, getNestedProto } from '@osmonauts/proto-parser'
import { defaultTelescopeOptions, ProtoService } from '@osmonauts/types';
import { expectCode, getTestProtoStore, printCode } from '../../../../test-utils';
import { GenericParseContext } from '../../../encoding';
import { createSomeNewRpcClient } from './some-new-rpc-client';

const store = getTestProtoStore();
// set any options that you need for this feature
store.options.rpcClients.type = 'some-new-rpc-client'
store.traverseAll();

it('GRPC web Msg Client', () => {
    const ref = store.findProto('cosmos/bank/v1beta1/tx.proto');
    const res = traverse(store, ref);
    const service: ProtoService = getNestedProto(res).Msg;
    const context = new GenericParseContext(ref, store, store.options);

    // while you are prototyping, you can use `printCode`
    printCode(createSomeNewRpcClient(context, service))

    // once you finish, use `expectCode` to generate a snapshot
    expectCode(createSomeNewRpcClient(context, service))
});
```

[< back](https://github.com/osmosis-labs/telescope/blob/main/docs/README.md)