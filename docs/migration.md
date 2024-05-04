[< back](https://github.com/cosmology-tech/telescope/blob/main/docs/README.md)

## Migration to v1.0

### deprecated aminoEncoding.useRecursiveV2encoding

If `aminoEncoding.useRecursiveV2encoding: false` is used in your config, and want to keep it(not recommended). It's changed into `aminoEncoding.useLegacyInlineEncoding: true`.

We have removed the `useRecursiveV2encoding` option, then Telescope will use `useLegacyInlineEncoding: false` as default value. And the new version of the logic of this part will be applied.

And we'll deprecate `useLegacyInlineEncoding` option eventually to make sure the new logic will be applied.

### interfaces.enabled

the default value of `interfaces.enabled` handling decoding of Any type has been changed into true.

If it's wanted to be kept off, please set explicitly:

```
    interfaces: {
        enabled: false,
    },
```

### prototypes.typingsFormat.customTypes.useCosmosSDKDec

the default value of `prototypes.typingsFormat.customTypes.useCosmosSDKDec` has been changed into true for decimal fields to be properly decoded using Decimal.fromAtomics.

Even though it's not recommended, if it's wanted to be kept off, please set explicitly:

```
    prototypes: {
        typingsFormat: {
            customTypes: {
              useCosmosSDKDec: false
            }
        },
    }
```

### BigInt

The default value of `prototypes.typingsFormat.num64` has been changed into 'bigint' for better handling int64 fields.

If it's wanted to be kept to be 'long', please set explicitly:

```
    prototypes: {
        typingsFormat: {
            num64: 'long',
        },
    }
```

### useDeepPartial

The default value of `prototypes.typingsFormat.useDeepPartial` has been changed into 'false'.

If it's wanted to be kept on, please set explicitly:

```
    prototypes: {
        typingsFormat: {
            useDeepPartial: true
        },
    }
```

### typeUrls

The default values of `prototypes.addTypeUrlToDecoders` and `prototypes.addTypeUrlToObjects` have been changed into 'true'.

If they're wanted to be kept off, please set explicitly:

```
    prototypes: {
      addTypeUrlToDecoders: false,
      addTypeUrlToObjects: false,
    }
```

### prototypes.methods

The default values of listed methods have been changed to 'true'.

```
    prototypes: {
       methods: {
            toAmino: true,
            fromAmino: true,
            toProto: true,
            fromProto: true
        },
    }
```

If they're wanted to be kept off, please set explicitly:

```
    prototypes: {
       methods: {
            toAmino: false,
            fromAmino: false,
            toProto: false,
            fromProto: false
        },
    }
```

