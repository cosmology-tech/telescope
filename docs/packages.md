[< back](https://github.com/osmosis-labs/telescope/blob/main/docs/README.md)

# Packages and workspace

We use lerna/yarn workspaces. You'll see we have in our `./packages` folder numerous packages: 

```
├── ast
├── babel
├── lcd
├── parser
├── telescope
├── test
├── types
└── utils
```

| folder    | purpose                                                                        | 
| --------- | -----------------------------------------------------------------------------  |
| ast       | for creating new AST functions                                                 |
| babel     | (not currently used)                                                           |
| lcd       | for giving LCD clients to generated code that uses the LCD client              |
| parser    | protobuf parser, and protobuf traversal                                        |
| telescope | the CLI,                                    |
| test      | for generating the CosmJS message registry                                     |
| types     | for generating state management plugins, such as react-query or mobx           |
| utils     | other AST utilities, usually babel helpers                                     |

### Editing interdependent packages

Because we are using lerna/yarn workspaces, packages in the `./packages` folder act as local `npm` modules.

If you edit a package, make sure to cd into it, and run `yarn buidl`, or separately, `yarn build` and `yarn build:ts`.

For example, if you edit a file in `./packages/types` and you want to make sure it's up-to-date in another package, such as `./packages/ast`, the changes propagate after you run these commands:

```
yarn build
yarn build:ts # now the types will also show up
```


[< back](https://github.com/osmosis-labs/telescope/blob/main/docs/README.md)