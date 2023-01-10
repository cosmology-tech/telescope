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

[< back](https://github.com/osmosis-labs/telescope/blob/main/docs/README.md)