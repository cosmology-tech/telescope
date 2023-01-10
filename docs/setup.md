[< back](https://github.com/osmosis-labs/telescope/blob/main/docs/README.md)

## Setup

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

[< back](https://github.com/osmosis-labs/telescope/blob/main/docs/README.md)