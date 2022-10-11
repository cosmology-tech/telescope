# protobuf/amino info

This is for developers developing Telescope.

### protobuf options

- `gogoproto.customname` it's a pure Golang thing. We can skip.
- `gogoproto.jsontag` : impacts amino encoding. It's in the format of `(gogoproto.jsontag) = "foo_bar,omitempty"`, and the omitempty part is optional. This means that the field name will be foo_bar.
- `json_name` : it changes the ProtoJSON field name, doesn't impact amino. We can skip.
- `gogoproto.moretags` : only used for YAML, we can skip.

### amino encoding

The table below is from [scrtlabs](https://github.com/scrtlabs/secret.js/blob/master/DEVELOPERS.md)

#### Amino types and how they're represented in JSON

| Amino     | JSON    | Note                                        | Source                                                                                                            |
| --------- | ------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| string    | string  |                                             | [tendermint/go-amino](https://github.com/tendermint/go-amino/blob/8e779b71f4/json-decode.go#L142-L143)            |
| bool      | boolean |                                             | [tendermint/go-amino](https://github.com/tendermint/go-amino/blob/8e779b71f4/json-decode.go#L142-L143)            |
| int       | string  |                                             | [tendermint/go-amino](https://github.com/tendermint/go-amino/blob/8e779b71f4/json-decode.go#L116-L121)            |
| int64     | string  |                                             | [tendermint/go-amino](https://github.com/tendermint/go-amino/blob/8e779b71f4/json-decode.go#L116-L121)            |
| uint      | string  |                                             | [tendermint/go-amino](https://github.com/tendermint/go-amino/blob/8e779b71f4/json-decode.go#L116-L121)            |
| uint64    | string  |                                             | [tendermint/go-amino](https://github.com/tendermint/go-amino/blob/8e779b71f4/json-decode.go#L116-L121)            |
| int8      | number  |                                             | [tendermint/go-amino](https://github.com/tendermint/go-amino/blob/8e779b71f4/json-decode.go#L130-L132)            |
| int16     | number  |                                             | [tendermint/go-amino](https://github.com/tendermint/go-amino/blob/8e779b71f4/json-decode.go#L130-L132)            |
| int32     | number  |                                             | [tendermint/go-amino](https://github.com/tendermint/go-amino/blob/8e779b71f4/json-decode.go#L130-L132)            |
| uint8     | number  |                                             | [tendermint/go-amino](https://github.com/tendermint/go-amino/blob/8e779b71f4/json-decode.go#L130-L132)            |
| uint16    | number  |                                             | [tendermint/go-amino](https://github.com/tendermint/go-amino/blob/8e779b71f4/json-decode.go#L130-L132)            |
| uint32    | number  |                                             | [tendermint/go-amino](https://github.com/tendermint/go-amino/blob/8e779b71f4/json-decode.go#L130-L132)            |
| Dec       | string  | Must have 18 digits after the decimal point |                                                                                                                   |
| Int       | string  |                                             |
| Timestamp | string  | RFC 3339                                    | [tendermint/go-amino](https://github.com/tendermint/tendermint/blob/8e779b71f4/libs/json/decoder_test.go#L64-L66) |
| Duration  | string  | Duration is int64                           | https://pkg.go.dev/time?utm_source=gopls#Duration                                                                 |

See examples in:

- https://github.com/tendermint/tendermint/blob/v0.34.19/libs/json/decoder_test.go
- https://github.com/tendermint/tendermint/blob/v0.34.19/libs/json/encoder_test.go