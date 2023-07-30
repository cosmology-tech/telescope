[< back](https://github.com/cosmology-tech/telescope/blob/main/docs/README.md)

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

If you are not sure how to write ASTs with `@babel/types`, please see our docs on [working with ASTs](https://github.com/cosmology-tech/telescope/blob/main/docs/working-with-asts.md). You can also checkout [astexplorer.net](https://astexplorer.net) to visually browse and learn ASTs, but they are quite verbose compared to our script when you run `yarn test:ast`.

```js
import { ProtoService } from "@osmonauts/types";
import { GenericParseContext } from "../../../encoding";
import * as t from '@babel/types';

export const createSomeNewRpcClient = (
    context: GenericParseContext,
    service: ProtoService
) => {
    context.addUtil("SuperInterface");

    return t.exportNamedDeclaration(
        t.tsInterfaceDeclaration(
            t.identifier('MyAwesomeInterface'),
            null,
            [t.tsExpressionWithTypeArguments(t.identifier('SuperInterface'))],
            t.tsInterfaceBody([
                // ... more code ...
            ])
        )
    );
};
```

If we need to import from other packages, context.addUtil is recommended. For detail about this, please see: [Common helpers or utils](https://github.com/cosmology-tech/telescope/blob/main/docs/helpers.md)

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

Note: Run "yarn buidl" in ast package folder to keep it updated to other packages, by doing this, code in telescope package can invoke newly built ast functions. More detail on this, please see our docs on [Packages and workspace](https://github.com/cosmology-tech/telescope/blob/main/docs/packages.md).
```
cd packages/ast
yarn buidl
```
## 4 options

add option for the new plugin in packages/types/src/telescope.ts. In this example, we add an option for the new rpc client plugin.
```js
interface TelescopeOpts {
    // ... more options ...
    newRpcClient?: {
        enabled: boolean;
        // the scope of packages to control the logic of the plugin.
        include?: {
            // patterns including wildcards. eg: 'osmosis/**/gamm/**/query.proto'
            patterns?: string[];
            // certian package paths. eg: 'cosmos.bank.v1beta1'
            packages?: string[];
            // certain proto file. eg: 'akash/cert/v1beta2/query.proto'
            protos?: string[];
        }
    };
```

Note: After editing the option in types package, don't forget to run "yarn buidl" inside the types package keeping other packages up-to-date with the newest changes of the option. More detail on this, please see our docs on [Packages and workspace](https://github.com/cosmology-tech/telescope/blob/main/docs/packages.md).
```
cd packages/types
yarn buidl
```

## 5 generators

create a generator for the new plugin in packages/telescope/src/generators

```
├── create-aggregated-lcd-client.ts
├── ...other generators
├── create-helpers.ts
├── create-index.ts
```


| file    | purpose                                                                        |
| --------- | -----------------------------------------------------------------------------  |
| create-helpers.ts    | Create common helper files as needed. Edit this if a new common helper's added. |
| create-index.ts   | automatically include all generated files into index.ts.                                |


A generator is a function with at least one parameter called builder, which carries the context and files to generate. And bundler as the second parameter if needed, which carries the context to generate bundle files.

In this example, we create a simple generator

```js
export const plugin = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {
    // see if the plugin's enabled.
    if (!builder.options.reactQuery.enabled) {
        return;
    }

    // define a name of the file.
    const localname = 'hooks.ts';

    ...code for creating proto ref.

    // create context or get context from bundler.
    const pCtx = new TelescopeParseContext(
        ref,
        builder.store,
        builder.options
    );

    // generate code using ast functions.
    const ast = createScopedRpcHookFactory(
        pCtx.proto,
        obj,
        'createRpcQueryHooks'
    )

    // generate imports added by context.addUtil
    const imports = fixlocalpaths(aggregateImports(pCtx, {}, localname));
    const importStmts = getImportStatements(
        localname,
        imports
    );

    // construct the AST
    const prog = []
        .concat(importStmts)
        .concat(ast);

    // write the file.
    const filename = join(builder.outPath, localname);
    builder.files.push(localname);

    writeAstToFile(builder.outPath, builder.options, prog, filename);

};
```

## 6 add generator to builder

add newly created generator to packages/telescope/src/builder.ts

```js
export class TelescopeBuilder {
  async build() {

    ... invoking generators

    // find a proper place for new generators.

    // create all common helper files.
    createHelpers(this);

    // finally, write one index file with all files, exported
    createIndex(this);
  }
}
```

## 7 add a test and generate fixtures

in this example, we generate fixtures to verify the code has been generated as expected.

Please make sure don't output to __fixtures__/output1 or output2, those're production code that shouldn't be broken. Any test code should be generated under folders under v-next folder.

```js
const outPath = __dirname + '/../../../__fixtures__/v-next/outputv3';

// setup options with your new plugin enabled
const options: TelescopeOptions = {
    ...options
};

const input: TelescopeInput = {
    outPath,
    // input path with proto files
    protoDirs: [__dirname + '/../../../__fixtures__/chain1'],
    options
};

const telescope = new TelescopeBuilder(input);

describe('bundle package registries and root file names', () => {
    it('bundleRegistries', async () => {
        await telescope.build();
        const registries = bundleRegistries(telescope);
        const result = registries.map(reg => ({
            ['package']: reg.package,
            contexts: parseContextsForRegistry(reg.contexts as TelescopeParseContext[])
        }))
    });

})
```

[< back](https://github.com/cosmology-tech/telescope/blob/main/docs/README.md)