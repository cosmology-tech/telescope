# Developing

We're excited you made it here! Please read about how to build and contribute to Telescope!

### Initial setup

In the root directory:

```
yarn 
yarn bootstrap  ## this links the local packages instead of the versions that live on npm
yarn build      ## this recursively builds all packages (this command also exists inside each package)
```

### Building

```
yarn build
```

### Editing interdependent packages

Because we are using lerna/yarn workspaces, packages in the `./packages` folder act as local `npm` modules.

If you edit a package, make sure to cd into it, and run `yarn buidl`, or separately, `yarn build` and `yarn build:ts`.

For example, if you edit a file in `./packages/types` and you want to make sure it's up-to-date in another package, such as `./packages/ast`, the changes propagate after you run these commands:

```
yarn build
yarn build:ts # now the types will also show up
```

### Tests

Then `cd` into a package and run the tests, for exmaple:

```
cd ./packages/ast
yarn test:watch
```

If you are doing major development, you'll probably want to open up a few windows, and run tests in at least these three packages:

the `ast` package:

```
cd ./packages/ast
yarn test:watch
```

the `parser` package:

```
cd ./packages/parser
yarn test:watch
```

the `telescope` package will also generate more fixtures, so you can see the end result.  

```
cd ./packages/telescope
yarn test:watch
```

### Packages and workspace

We have in our `./packages` folder numerous packages. 

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

### Generators

See our [plugin generators](https://github.com/osmosis-labs/telescope/blob/main/packages/telescope/src/generators).

### Working with ASTs

See our docs on [working with ASTs](https://github.com/osmosis-labs/telescope/blob/main/docs/working-with-asts.md).