[< back](https://github.com/hyperweb-io/telescope/blob/main/docs/README.md)

# Tests

`cd` into a package and run the tests, for example:

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

[< back](https://github.com/hyperweb-io/telescope/blob/main/docs/README.md)
