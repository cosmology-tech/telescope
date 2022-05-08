# @osmonauts/telescope

## Babel for the Cosmos

A TypeScript Transpiler for Cosmos Protobufs


<p align="center">
  <img width="220" src="https://user-images.githubusercontent.com/545047/163644159-e5e5c22b-ad60-421e-aabd-31f06d3e3f4d.png">
</p>


```
$ telescope
? [cmd] what do you want to do? (Use arrow keys or type to search)
❯ generate
  transpile
  ts-proto
```

Generally, you will want to run commands in this order:

1. generate
2. ts-proto
3. transpile
### generate

Use the `generate` command to create a new repository with the default proto files. 

```sh
telescope generate
cd ./your-new-project
yarn 
```

### ts-proto

Next, run the `ts-proto` command

```sh
telescope ts-proto
```

You should now seem some `.ts` files generated in `./out`.
### transpile

Finally, run the `transpile` command. This is where we add some `ts-proto` enhancements and output the final code.

```sh
telescope transpile
```

You should now seem some `.ts` files generated in `./src`. These are the real source files used in your application.
## programatic usage

```js
import telescope from '@osmonauts/telescope';

// specify proto path and out path
telescope(protoPath, outPath);
```
# Building with Telescope

You will need the `protoc` command installed on your machine.

## mac

http://google.github.io/proto-lens/installing-protoc.html

```
brew install protobuf
```


## Disclaimer

AS DESCRIBED IN THE OSMOSIS LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating Telescope will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the Telescope code or Telescope CLI, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
