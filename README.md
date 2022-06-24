# Telescope 🔭
## Babel for the Cosmos

A TypeScript Transpiler for Cosmos Protobufs

<p align="center">
  <img width="220" src="https://user-images.githubusercontent.com/545047/175660665-5cbde84b-0928-4e59-ab56-be6adb2f3a7e.png">
</p>


## Quickstart

Follow the instructions below to kick off your Telescope module.

```sh
npm install -g @osmonauts/telescope
```

### Generate

Use the `generate` command to create a new repository with the default proto files. 

```sh
telescope generate
cd ./your-new-project
yarn 
```
### Install

To install chain protobufs, run the `install` command. 

```sh
telescope install
```

It's not necessary, but you may also specify specific packages, e.g.

```sh
telescope install @protobufs/osmosis
```

### Transpile

To create the Typescript files, run the `transpile` command. 

```sh
telescope transpile
```

You should now seem some `.ts` files generated in `./src`. These are the real source files used in your application.

### Build

Finally, run `install` and `buidl` to generate the JS and types for publishing your module to npm.

```sh
yarn install
yarn buidl
```

## Advanced Usage

See our [advanced usage documentation](https://github.com/osmosis-labs/telescope/blob/master/packages/telescope/docs/readme.md).
## Disclaimer

AS DESCRIBED IN THE OSMOSIS LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating Telescope will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the Telescope code or Telescope CLI, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
