# Telescope 🔭

A TypeScript Transpiler for Comsos Protobufs

<p align="center">
  <img width="220" src="https://user-images.githubusercontent.com/545047/163644159-e5e5c22b-ad60-421e-aabd-31f06d3e3f4d.png">
</p>

```
npm install -g @cosmonauts/telescope
```

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
import telescope from '@cosmonauts/telescope';

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