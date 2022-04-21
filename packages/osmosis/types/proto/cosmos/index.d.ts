import * as _420 from "./app/v1alpha1/config";
import * as _421 from "./app/v1alpha1/module";
import * as _422 from "./app/v1alpha1/query";
import * as _423 from "./auth/v1beta1/auth";
import * as _424 from "./auth/v1beta1/genesis";
import * as _425 from "./auth/v1beta1/query";
import * as _426 from "./authz/v1beta1/authz";
import * as _427 from "./authz/v1beta1/event";
import * as _428 from "./authz/v1beta1/genesis";
import * as _429 from "./authz/v1beta1/query";
import * as _430 from "./authz/v1beta1/tx";
import * as _439 from "./bank/v1beta1/authz";
import * as _440 from "./bank/v1beta1/bank";
import * as _441 from "./bank/v1beta1/genesis";
import * as _442 from "./bank/v1beta1/query";
import * as _443 from "./bank/v1beta1/tx";
import * as _452 from "./base/abci/v1beta1/abci";
import * as _453 from "./base/kv/v1beta1/kv";
import * as _454 from "./base/query/v1beta1/pagination";
import * as _455 from "./base/reflection/v1beta1/reflection";
import * as _456 from "./base/reflection/v2alpha1/reflection";
import * as _457 from "./base/snapshots/v1beta1/snapshot";
import * as _458 from "./base/store/v1beta1/commit_info";
import * as _459 from "./base/store/v1beta1/listening";
import * as _460 from "./base/tendermint/v1beta1/query";
import * as _461 from "./base/v1beta1/coin";
import * as _462 from "./capability/v1beta1/capability";
import * as _463 from "./capability/v1beta1/genesis";
import * as _464 from "./crisis/v1beta1/genesis";
import * as _465 from "./crisis/v1beta1/tx";
import * as _474 from "./crypto/ed25519/keys";
import * as _475 from "./crypto/hd/v1/hd";
import * as _476 from "./crypto/keyring/v1/record";
import * as _477 from "./crypto/multisig/keys";
import * as _478 from "./crypto/secp256k1/keys";
import * as _479 from "./crypto/secp256r1/keys";
import * as _480 from "./distribution/v1beta1/distribution";
import * as _481 from "./distribution/v1beta1/genesis";
import * as _482 from "./distribution/v1beta1/query";
import * as _483 from "./distribution/v1beta1/tx";
import * as _492 from "./evidence/v1beta1/evidence";
import * as _493 from "./evidence/v1beta1/genesis";
import * as _494 from "./evidence/v1beta1/query";
import * as _495 from "./evidence/v1beta1/tx";
import * as _504 from "./feegrant/v1beta1/feegrant";
import * as _505 from "./feegrant/v1beta1/genesis";
import * as _506 from "./feegrant/v1beta1/query";
import * as _507 from "./feegrant/v1beta1/tx";
import * as _516 from "./genutil/v1beta1/genesis";
import * as _517 from "./gov/v1/genesis";
import * as _518 from "./gov/v1/gov";
import * as _519 from "./gov/v1/query";
import * as _520 from "./gov/v1/tx";
import * as _529 from "./gov/v1beta1/genesis";
import * as _530 from "./gov/v1beta1/gov";
import * as _531 from "./gov/v1beta1/query";
import * as _532 from "./gov/v1beta1/tx";
import * as _541 from "./group/v1/events";
import * as _542 from "./group/v1/genesis";
import * as _543 from "./group/v1/query";
import * as _544 from "./group/v1/tx";
import * as _553 from "./group/v1/types";
import * as _554 from "./mint/v1beta1/genesis";
import * as _555 from "./mint/v1beta1/mint";
import * as _556 from "./mint/v1beta1/query";
import * as _558 from "./nft/v1beta1/event";
import * as _559 from "./nft/v1beta1/genesis";
import * as _560 from "./nft/v1beta1/nft";
import * as _561 from "./nft/v1beta1/query";
import * as _562 from "./nft/v1beta1/tx";
import * as _571 from "./orm/v1/orm";
import * as _572 from "./orm/v1alpha1/schema";
import * as _573 from "./params/v1beta1/params";
import * as _574 from "./params/v1beta1/query";
import * as _575 from "./slashing/v1beta1/genesis";
import * as _576 from "./slashing/v1beta1/query";
import * as _577 from "./slashing/v1beta1/slashing";
import * as _578 from "./slashing/v1beta1/tx";
import * as _587 from "./staking/v1beta1/authz";
import * as _588 from "./staking/v1beta1/genesis";
import * as _589 from "./staking/v1beta1/query";
import * as _590 from "./staking/v1beta1/staking";
import * as _591 from "./staking/v1beta1/tx";
import * as _600 from "./tx/signing/v1beta1/signing";
import * as _601 from "./tx/v1beta1/service";
import * as _602 from "./tx/v1beta1/tx";
import * as _603 from "./upgrade/v1beta1/query";
import * as _604 from "./upgrade/v1beta1/tx";
import * as _613 from "./upgrade/v1beta1/upgrade";
import * as _614 from "./vesting/v1beta1/tx";
import * as _623 from "./vesting/v1beta1/vesting";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryConfigRequest: {
                encode(_: _422.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _422.QueryConfigRequest;
                fromJSON(_: any): _422.QueryConfigRequest;
                toJSON(_: _422.QueryConfigRequest): unknown;
                fromPartial<I extends unknown>(_: I): _422.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _422.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _422.QueryConfigResponse;
                fromJSON(object: any): _422.QueryConfigResponse;
                toJSON(message: _422.QueryConfigResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _422.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _421.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _421.ModuleDescriptor;
                fromJSON(object: any): _421.ModuleDescriptor;
                toJSON(message: _421.ModuleDescriptor): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _421.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _421.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _421.PackageReference;
                fromJSON(object: any): _421.PackageReference;
                toJSON(message: _421.PackageReference): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _421.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _421.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _421.MigrateFromInfo;
                fromJSON(object: any): _421.MigrateFromInfo;
                toJSON(message: _421.MigrateFromInfo): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _421.MigrateFromInfo;
            };
            Config: {
                encode(message: _420.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _420.Config;
                fromJSON(object: any): _420.Config;
                toJSON(message: _420.Config): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _420.Config;
            };
            ModuleConfig: {
                encode(message: _420.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _420.ModuleConfig;
                fromJSON(object: any): _420.ModuleConfig;
                toJSON(message: _420.ModuleConfig): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _420.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryAccountsRequest: {
                encode(message: _425.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.QueryAccountsRequest;
                fromJSON(object: any): _425.QueryAccountsRequest;
                toJSON(message: _425.QueryAccountsRequest): unknown;
                fromPartial<I extends unknown>(object: I): _425.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _425.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.QueryAccountsResponse;
                fromJSON(object: any): _425.QueryAccountsResponse;
                toJSON(message: _425.QueryAccountsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _425.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _425.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.QueryAccountRequest;
                fromJSON(object: any): _425.QueryAccountRequest;
                toJSON(message: _425.QueryAccountRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _425.QueryAccountRequest;
            };
            QueryModuleAccountsRequest: {
                encode(_: _425.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.QueryModuleAccountsRequest;
                fromJSON(_: any): _425.QueryModuleAccountsRequest;
                toJSON(_: _425.QueryModuleAccountsRequest): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _425.QueryModuleAccountsRequest;
            };
            QueryParamsResponse: {
                encode(message: _425.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.QueryParamsResponse;
                fromJSON(object: any): _425.QueryParamsResponse;
                toJSON(message: _425.QueryParamsResponse): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _425.QueryParamsResponse;
            };
            QueryAccountResponse: {
                encode(message: _425.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.QueryAccountResponse;
                fromJSON(object: any): _425.QueryAccountResponse;
                toJSON(message: _425.QueryAccountResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _425.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _425.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.QueryParamsRequest;
                fromJSON(_: any): _425.QueryParamsRequest;
                toJSON(_: _425.QueryParamsRequest): unknown;
                fromPartial<I_6 extends unknown>(_: I_6): _425.QueryParamsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _425.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.QueryModuleAccountsResponse;
                fromJSON(object: any): _425.QueryModuleAccountsResponse;
                toJSON(message: _425.QueryModuleAccountsResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _425.QueryModuleAccountsResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _425.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.Bech32PrefixRequest;
                fromJSON(_: any): _425.Bech32PrefixRequest;
                toJSON(_: _425.Bech32PrefixRequest): unknown;
                fromPartial<I_8 extends unknown>(_: I_8): _425.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _425.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.Bech32PrefixResponse;
                fromJSON(object: any): _425.Bech32PrefixResponse;
                toJSON(message: _425.Bech32PrefixResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _425.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _425.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.AddressBytesToStringRequest;
                fromJSON(object: any): _425.AddressBytesToStringRequest;
                toJSON(message: _425.AddressBytesToStringRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _425.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _425.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.AddressBytesToStringResponse;
                fromJSON(object: any): _425.AddressBytesToStringResponse;
                toJSON(message: _425.AddressBytesToStringResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _425.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _425.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.AddressStringToBytesRequest;
                fromJSON(object: any): _425.AddressStringToBytesRequest;
                toJSON(message: _425.AddressStringToBytesRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _425.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _425.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.AddressStringToBytesResponse;
                fromJSON(object: any): _425.AddressStringToBytesResponse;
                toJSON(message: _425.AddressStringToBytesResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _425.AddressStringToBytesResponse;
            };
            GenesisState: {
                encode(message: _424.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _424.GenesisState;
                fromJSON(object: any): _424.GenesisState;
                toJSON(message: _424.GenesisState): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _424.GenesisState;
            };
            BaseAccount: {
                encode(message: _423.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _423.BaseAccount;
                fromJSON(object: any): _423.BaseAccount;
                toJSON(message: _423.BaseAccount): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _423.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _423.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _423.ModuleAccount;
                fromJSON(object: any): _423.ModuleAccount;
                toJSON(message: _423.ModuleAccount): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _423.ModuleAccount;
            };
            Params: {
                encode(message: _423.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _423.Params;
                fromJSON(object: any): _423.Params;
                toJSON(message: _423.Params): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _423.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgGrant: {
                encode(message: _430.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.MsgGrant;
                fromJSON(object: any): _430.MsgGrant;
                toJSON(message: _430.MsgGrant): unknown;
                fromPartial<I extends unknown>(object: I): _430.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _430.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.MsgExecResponse;
                fromJSON(object: any): _430.MsgExecResponse;
                toJSON(message: _430.MsgExecResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _430.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _430.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.MsgExec;
                fromJSON(object: any): _430.MsgExec;
                toJSON(message: _430.MsgExec): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _430.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _430.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.MsgGrantResponse;
                fromJSON(_: any): _430.MsgGrantResponse;
                toJSON(_: _430.MsgGrantResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _430.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _430.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.MsgRevoke;
                fromJSON(object: any): _430.MsgRevoke;
                toJSON(message: _430.MsgRevoke): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _430.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _430.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.MsgRevokeResponse;
                fromJSON(_: any): _430.MsgRevokeResponse;
                toJSON(_: _430.MsgRevokeResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _430.MsgRevokeResponse;
            };
            registry: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    encode(message: _430.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.MsgGrant;
                    fromJSON(object: any): _430.MsgGrant;
                    toJSON(message: _430.MsgGrant): unknown;
                    fromPartial<I extends unknown>(object: I): _430.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    encode(message: _430.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.MsgExec;
                    fromJSON(object: any): _430.MsgExec;
                    toJSON(message: _430.MsgExec): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _430.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    encode(message: _430.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.MsgRevoke;
                    fromJSON(object: any): _430.MsgRevoke;
                    toJSON(message: _430.MsgRevoke): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _430.MsgRevoke;
                };
            };
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _430.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: Date;
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: Date;
                        };
                    }) => _430.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _430.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _430.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _430.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _430.MsgRevoke;
                };
            };
            encoded: {
                grant(value: _430.MsgGrant): {
                    type_url: string;
                    value: Uint8Array;
                };
                exec(value: _430.MsgExec): {
                    type_url: string;
                    value: Uint8Array;
                };
                revoke(value: _430.MsgRevoke): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                grant(value: any): {
                    typeUrl: string;
                    value: _430.MsgGrant;
                };
                exec(value: any): {
                    typeUrl: string;
                    value: _430.MsgExec;
                };
                revoke(value: any): {
                    typeUrl: string;
                    value: _430.MsgRevoke;
                };
            };
            toJSON: {
                grant(value: _430.MsgGrant): {
                    typeUrl: string;
                    value: unknown;
                };
                exec(value: _430.MsgExec): {
                    typeUrl: string;
                    value: unknown;
                };
                revoke(value: _430.MsgRevoke): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                grant(value: _430.MsgGrant): {
                    typeUrl: string;
                    value: _430.MsgGrant;
                };
                exec(value: _430.MsgExec): {
                    typeUrl: string;
                    value: _430.MsgExec;
                };
                revoke(value: _430.MsgRevoke): {
                    typeUrl: string;
                    value: _430.MsgRevoke;
                };
            };
            messages: {
                grant(value: _430.MsgGrant): {
                    typeUrl: string;
                    value: _430.MsgGrant;
                };
                exec(value: _430.MsgExec): {
                    typeUrl: string;
                    value: _430.MsgExec;
                };
                revoke(value: _430.MsgRevoke): {
                    typeUrl: string;
                    value: _430.MsgRevoke;
                };
            };
            QueryGrantsRequest: {
                encode(message: _429.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QueryGrantsRequest;
                fromJSON(object: any): _429.QueryGrantsRequest;
                toJSON(message: _429.QueryGrantsRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _429.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _429.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QueryGrantsResponse;
                fromJSON(object: any): _429.QueryGrantsResponse;
                toJSON(message: _429.QueryGrantsResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _429.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _429.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QueryGranterGrantsRequest;
                fromJSON(object: any): _429.QueryGranterGrantsRequest;
                toJSON(message: _429.QueryGranterGrantsRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _429.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _429.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QueryGranterGrantsResponse;
                fromJSON(object: any): _429.QueryGranterGrantsResponse;
                toJSON(message: _429.QueryGranterGrantsResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _429.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _429.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QueryGranteeGrantsRequest;
                fromJSON(object: any): _429.QueryGranteeGrantsRequest;
                toJSON(message: _429.QueryGranteeGrantsRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _429.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _429.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QueryGranteeGrantsResponse;
                fromJSON(object: any): _429.QueryGranteeGrantsResponse;
                toJSON(message: _429.QueryGranteeGrantsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _429.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _428.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _428.GenesisState;
                fromJSON(object: any): _428.GenesisState;
                toJSON(message: _428.GenesisState): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _428.GenesisState;
            };
            EventGrant: {
                encode(message: _427.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _427.EventGrant;
                fromJSON(object: any): _427.EventGrant;
                toJSON(message: _427.EventGrant): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _427.EventGrant;
            };
            EventRevoke: {
                encode(message: _427.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _427.EventRevoke;
                fromJSON(object: any): _427.EventRevoke;
                toJSON(message: _427.EventRevoke): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _427.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _426.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _426.GenericAuthorization;
                fromJSON(object: any): _426.GenericAuthorization;
                toJSON(message: _426.GenericAuthorization): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _426.GenericAuthorization;
            };
            Grant: {
                encode(message: _426.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _426.Grant;
                fromJSON(object: any): _426.Grant;
                toJSON(message: _426.Grant): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _426.Grant;
            };
            GrantAuthorization: {
                encode(message: _426.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _426.GrantAuthorization;
                fromJSON(object: any): _426.GrantAuthorization;
                toJSON(message: _426.GrantAuthorization): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _426.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _426.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _426.GrantQueueItem;
                fromJSON(object: any): _426.GrantQueueItem;
                toJSON(message: _426.GrantQueueItem): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _426.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgSend: {
                encode(message: _443.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _443.MsgSend;
                fromJSON(object: any): _443.MsgSend;
                toJSON(message: _443.MsgSend): unknown;
                fromPartial<I extends unknown>(object: I): _443.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _443.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _443.MsgSendResponse;
                fromJSON(_: any): _443.MsgSendResponse;
                toJSON(_: _443.MsgSendResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _443.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _443.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _443.MsgMultiSend;
                fromJSON(object: any): _443.MsgMultiSend;
                toJSON(message: _443.MsgMultiSend): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _443.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _443.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _443.MsgMultiSendResponse;
                fromJSON(_: any): _443.MsgMultiSendResponse;
                toJSON(_: _443.MsgMultiSendResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _443.MsgMultiSendResponse;
            };
            registry: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    encode(message: _443.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _443.MsgSend;
                    fromJSON(object: any): _443.MsgSend;
                    toJSON(message: _443.MsgSend): unknown;
                    fromPartial<I extends unknown>(object: I): _443.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    encode(message: _443.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _443.MsgMultiSend;
                    fromJSON(object: any): _443.MsgMultiSend;
                    toJSON(message: _443.MsgMultiSend): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _443.MsgMultiSend;
                };
            };
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _443.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _443.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _443.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _443.MsgMultiSend;
                };
            };
            encoded: {
                send(value: _443.MsgSend): {
                    type_url: string;
                    value: Uint8Array;
                };
                multiSend(value: _443.MsgMultiSend): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                send(value: any): {
                    typeUrl: string;
                    value: _443.MsgSend;
                };
                multiSend(value: any): {
                    typeUrl: string;
                    value: _443.MsgMultiSend;
                };
            };
            toJSON: {
                send(value: _443.MsgSend): {
                    typeUrl: string;
                    value: unknown;
                };
                multiSend(value: _443.MsgMultiSend): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                send(value: _443.MsgSend): {
                    typeUrl: string;
                    value: _443.MsgSend;
                };
                multiSend(value: _443.MsgMultiSend): {
                    typeUrl: string;
                    value: _443.MsgMultiSend;
                };
            };
            messages: {
                send(value: _443.MsgSend): {
                    typeUrl: string;
                    value: _443.MsgSend;
                };
                multiSend(value: _443.MsgMultiSend): {
                    typeUrl: string;
                    value: _443.MsgMultiSend;
                };
            };
            QueryBalanceRequest: {
                encode(message: _442.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.QueryBalanceRequest;
                fromJSON(object: any): _442.QueryBalanceRequest;
                toJSON(message: _442.QueryBalanceRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _442.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _442.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.QueryBalanceResponse;
                fromJSON(object: any): _442.QueryBalanceResponse;
                toJSON(message: _442.QueryBalanceResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _442.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _442.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.QueryAllBalancesRequest;
                fromJSON(object: any): _442.QueryAllBalancesRequest;
                toJSON(message: _442.QueryAllBalancesRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _442.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _442.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.QueryAllBalancesResponse;
                fromJSON(object: any): _442.QueryAllBalancesResponse;
                toJSON(message: _442.QueryAllBalancesResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _442.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _442.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.QuerySpendableBalancesRequest;
                fromJSON(object: any): _442.QuerySpendableBalancesRequest;
                toJSON(message: _442.QuerySpendableBalancesRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _442.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _442.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.QuerySpendableBalancesResponse;
                fromJSON(object: any): _442.QuerySpendableBalancesResponse;
                toJSON(message: _442.QuerySpendableBalancesResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _442.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _442.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.QueryTotalSupplyRequest;
                fromJSON(object: any): _442.QueryTotalSupplyRequest;
                toJSON(message: _442.QueryTotalSupplyRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _442.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _442.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.QueryTotalSupplyResponse;
                fromJSON(object: any): _442.QueryTotalSupplyResponse;
                toJSON(message: _442.QueryTotalSupplyResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _442.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _442.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.QuerySupplyOfRequest;
                fromJSON(object: any): _442.QuerySupplyOfRequest;
                toJSON(message: _442.QuerySupplyOfRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _442.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _442.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.QuerySupplyOfResponse;
                fromJSON(object: any): _442.QuerySupplyOfResponse;
                toJSON(message: _442.QuerySupplyOfResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _442.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _442.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.QueryParamsRequest;
                fromJSON(_: any): _442.QueryParamsRequest;
                toJSON(_: _442.QueryParamsRequest): unknown;
                fromPartial<I_14 extends unknown>(_: I_14): _442.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _442.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.QueryParamsResponse;
                fromJSON(object: any): _442.QueryParamsResponse;
                toJSON(message: _442.QueryParamsResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _442.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _442.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.QueryDenomsMetadataRequest;
                fromJSON(object: any): _442.QueryDenomsMetadataRequest;
                toJSON(message: _442.QueryDenomsMetadataRequest): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _442.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _442.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.QueryDenomsMetadataResponse;
                fromJSON(object: any): _442.QueryDenomsMetadataResponse;
                toJSON(message: _442.QueryDenomsMetadataResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _442.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _442.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.QueryDenomMetadataRequest;
                fromJSON(object: any): _442.QueryDenomMetadataRequest;
                toJSON(message: _442.QueryDenomMetadataRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _442.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _442.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.QueryDenomMetadataResponse;
                fromJSON(object: any): _442.QueryDenomMetadataResponse;
                toJSON(message: _442.QueryDenomMetadataResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _442.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _442.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.QueryDenomOwnersRequest;
                fromJSON(object: any): _442.QueryDenomOwnersRequest;
                toJSON(message: _442.QueryDenomOwnersRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _442.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _442.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.DenomOwner;
                fromJSON(object: any): _442.DenomOwner;
                toJSON(message: _442.DenomOwner): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _442.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _442.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.QueryDenomOwnersResponse;
                fromJSON(object: any): _442.QueryDenomOwnersResponse;
                toJSON(message: _442.QueryDenomOwnersResponse): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _442.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _441.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.GenesisState;
                fromJSON(object: any): _441.GenesisState;
                toJSON(message: _441.GenesisState): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _441.GenesisState;
            };
            Balance: {
                encode(message: _441.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.Balance;
                fromJSON(object: any): _441.Balance;
                toJSON(message: _441.Balance): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _441.Balance;
            };
            Params: {
                encode(message: _440.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.Params;
                fromJSON(object: any): _440.Params;
                toJSON(message: _440.Params): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _440.Params;
            };
            SendEnabled: {
                encode(message: _440.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.SendEnabled;
                fromJSON(object: any): _440.SendEnabled;
                toJSON(message: _440.SendEnabled): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _440.SendEnabled;
            };
            Input: {
                encode(message: _440.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.Input;
                fromJSON(object: any): _440.Input;
                toJSON(message: _440.Input): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _440.Input;
            };
            Output: {
                encode(message: _440.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.Output;
                fromJSON(object: any): _440.Output;
                toJSON(message: _440.Output): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _440.Output;
            };
            Supply: {
                encode(message: _440.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.Supply;
                fromJSON(object: any): _440.Supply;
                toJSON(message: _440.Supply): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _440.Supply;
            };
            DenomUnit: {
                encode(message: _440.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.DenomUnit;
                fromJSON(object: any): _440.DenomUnit;
                toJSON(message: _440.DenomUnit): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _440.DenomUnit;
            };
            Metadata: {
                encode(message: _440.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.Metadata;
                fromJSON(object: any): _440.Metadata;
                toJSON(message: _440.Metadata): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _440.Metadata;
            };
            SendAuthorization: {
                encode(message: _439.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _439.SendAuthorization;
                fromJSON(object: any): _439.SendAuthorization;
                toJSON(message: _439.SendAuthorization): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _439.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _452.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.TxResponse;
                    fromJSON(object: any): _452.TxResponse;
                    toJSON(message: _452.TxResponse): unknown;
                    fromPartial<I extends unknown>(object: I): _452.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _452.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.ABCIMessageLog;
                    fromJSON(object: any): _452.ABCIMessageLog;
                    toJSON(message: _452.ABCIMessageLog): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _452.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _452.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.StringEvent;
                    fromJSON(object: any): _452.StringEvent;
                    toJSON(message: _452.StringEvent): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _452.StringEvent;
                };
                Attribute: {
                    encode(message: _452.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.Attribute;
                    fromJSON(object: any): _452.Attribute;
                    toJSON(message: _452.Attribute): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _452.Attribute;
                };
                GasInfo: {
                    encode(message: _452.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.GasInfo;
                    fromJSON(object: any): _452.GasInfo;
                    toJSON(message: _452.GasInfo): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _452.GasInfo;
                };
                Result: {
                    encode(message: _452.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.Result;
                    fromJSON(object: any): _452.Result;
                    toJSON(message: _452.Result): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _452.Result;
                };
                SimulationResponse: {
                    encode(message: _452.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.SimulationResponse;
                    fromJSON(object: any): _452.SimulationResponse;
                    toJSON(message: _452.SimulationResponse): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _452.SimulationResponse;
                };
                MsgData: {
                    encode(message: _452.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.MsgData;
                    fromJSON(object: any): _452.MsgData;
                    toJSON(message: _452.MsgData): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _452.MsgData;
                };
                TxMsgData: {
                    encode(message: _452.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.TxMsgData;
                    fromJSON(object: any): _452.TxMsgData;
                    toJSON(message: _452.TxMsgData): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _452.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _452.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.SearchTxsResult;
                    fromJSON(object: any): _452.SearchTxsResult;
                    toJSON(message: _452.SearchTxsResult): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _452.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _453.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.Pairs;
                    fromJSON(object: any): _453.Pairs;
                    toJSON(message: _453.Pairs): unknown;
                    fromPartial<I extends unknown>(object: I): _453.Pairs;
                };
                Pair: {
                    encode(message: _453.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.Pair;
                    fromJSON(object: any): _453.Pair;
                    toJSON(message: _453.Pair): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _453.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _454.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.PageRequest;
                    fromJSON(object: any): _454.PageRequest;
                    toJSON(message: _454.PageRequest): unknown;
                    fromPartial<I extends unknown>(object: I): _454.PageRequest;
                };
                PageResponse: {
                    encode(message: _454.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.PageResponse;
                    fromJSON(object: any): _454.PageResponse;
                    toJSON(message: _454.PageResponse): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _454.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _455.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _455.ListAllInterfacesRequest;
                    fromJSON(_: any): _455.ListAllInterfacesRequest;
                    toJSON(_: _455.ListAllInterfacesRequest): unknown;
                    fromPartial<I extends unknown>(_: I): _455.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _455.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _455.ListAllInterfacesResponse;
                    fromJSON(object: any): _455.ListAllInterfacesResponse;
                    toJSON(message: _455.ListAllInterfacesResponse): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _455.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _455.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _455.ListImplementationsRequest;
                    fromJSON(object: any): _455.ListImplementationsRequest;
                    toJSON(message: _455.ListImplementationsRequest): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _455.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _455.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _455.ListImplementationsResponse;
                    fromJSON(object: any): _455.ListImplementationsResponse;
                    toJSON(message: _455.ListImplementationsResponse): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _455.ListImplementationsResponse;
                };
                ReflectionServiceClientImpl: typeof _455.ReflectionServiceClientImpl;
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _456.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.AppDescriptor;
                    fromJSON(object: any): _456.AppDescriptor;
                    toJSON(message: _456.AppDescriptor): unknown;
                    fromPartial<I extends unknown>(object: I): _456.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _456.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.TxDescriptor;
                    fromJSON(object: any): _456.TxDescriptor;
                    toJSON(message: _456.TxDescriptor): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _456.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _456.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.AuthnDescriptor;
                    fromJSON(object: any): _456.AuthnDescriptor;
                    toJSON(message: _456.AuthnDescriptor): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _456.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _456.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.SigningModeDescriptor;
                    fromJSON(object: any): _456.SigningModeDescriptor;
                    toJSON(message: _456.SigningModeDescriptor): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _456.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _456.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.ChainDescriptor;
                    fromJSON(object: any): _456.ChainDescriptor;
                    toJSON(message: _456.ChainDescriptor): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _456.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _456.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.CodecDescriptor;
                    fromJSON(object: any): _456.CodecDescriptor;
                    toJSON(message: _456.CodecDescriptor): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _456.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _456.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.InterfaceDescriptor;
                    fromJSON(object: any): _456.InterfaceDescriptor;
                    toJSON(message: _456.InterfaceDescriptor): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _456.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _456.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _456.InterfaceImplementerDescriptor;
                    toJSON(message: _456.InterfaceImplementerDescriptor): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _456.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _456.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _456.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _456.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _456.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _456.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.ConfigurationDescriptor;
                    fromJSON(object: any): _456.ConfigurationDescriptor;
                    toJSON(message: _456.ConfigurationDescriptor): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _456.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _456.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.MsgDescriptor;
                    fromJSON(object: any): _456.MsgDescriptor;
                    toJSON(message: _456.MsgDescriptor): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _456.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _456.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _456.GetAuthnDescriptorRequest;
                    toJSON(_: _456.GetAuthnDescriptorRequest): unknown;
                    fromPartial<I_11 extends unknown>(_: I_11): _456.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _456.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _456.GetAuthnDescriptorResponse;
                    toJSON(message: _456.GetAuthnDescriptorResponse): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _456.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _456.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.GetChainDescriptorRequest;
                    fromJSON(_: any): _456.GetChainDescriptorRequest;
                    toJSON(_: _456.GetChainDescriptorRequest): unknown;
                    fromPartial<I_13 extends unknown>(_: I_13): _456.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _456.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.GetChainDescriptorResponse;
                    fromJSON(object: any): _456.GetChainDescriptorResponse;
                    toJSON(message: _456.GetChainDescriptorResponse): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _456.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _456.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.GetCodecDescriptorRequest;
                    fromJSON(_: any): _456.GetCodecDescriptorRequest;
                    toJSON(_: _456.GetCodecDescriptorRequest): unknown;
                    fromPartial<I_15 extends unknown>(_: I_15): _456.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _456.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.GetCodecDescriptorResponse;
                    fromJSON(object: any): _456.GetCodecDescriptorResponse;
                    toJSON(message: _456.GetCodecDescriptorResponse): unknown;
                    fromPartial<I_16 extends unknown>(object: I_16): _456.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _456.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _456.GetConfigurationDescriptorRequest;
                    toJSON(_: _456.GetConfigurationDescriptorRequest): unknown;
                    fromPartial<I_17 extends unknown>(_: I_17): _456.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _456.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _456.GetConfigurationDescriptorResponse;
                    toJSON(message: _456.GetConfigurationDescriptorResponse): unknown;
                    fromPartial<I_18 extends unknown>(object: I_18): _456.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _456.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _456.GetQueryServicesDescriptorRequest;
                    toJSON(_: _456.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial<I_19 extends unknown>(_: I_19): _456.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _456.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _456.GetQueryServicesDescriptorResponse;
                    toJSON(message: _456.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial<I_20 extends unknown>(object: I_20): _456.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _456.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.GetTxDescriptorRequest;
                    fromJSON(_: any): _456.GetTxDescriptorRequest;
                    toJSON(_: _456.GetTxDescriptorRequest): unknown;
                    fromPartial<I_21 extends unknown>(_: I_21): _456.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _456.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.GetTxDescriptorResponse;
                    fromJSON(object: any): _456.GetTxDescriptorResponse;
                    toJSON(message: _456.GetTxDescriptorResponse): unknown;
                    fromPartial<I_22 extends unknown>(object: I_22): _456.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _456.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.QueryServicesDescriptor;
                    fromJSON(object: any): _456.QueryServicesDescriptor;
                    toJSON(message: _456.QueryServicesDescriptor): unknown;
                    fromPartial<I_23 extends unknown>(object: I_23): _456.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _456.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.QueryServiceDescriptor;
                    fromJSON(object: any): _456.QueryServiceDescriptor;
                    toJSON(message: _456.QueryServiceDescriptor): unknown;
                    fromPartial<I_24 extends unknown>(object: I_24): _456.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _456.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.QueryMethodDescriptor;
                    fromJSON(object: any): _456.QueryMethodDescriptor;
                    toJSON(message: _456.QueryMethodDescriptor): unknown;
                    fromPartial<I_25 extends unknown>(object: I_25): _456.QueryMethodDescriptor;
                };
                ReflectionServiceClientImpl: typeof _456.ReflectionServiceClientImpl;
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _457.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _457.Snapshot;
                    fromJSON(object: any): _457.Snapshot;
                    toJSON(message: _457.Snapshot): unknown;
                    fromPartial<I extends unknown>(object: I): _457.Snapshot;
                };
                Metadata: {
                    encode(message: _457.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _457.Metadata;
                    fromJSON(object: any): _457.Metadata;
                    toJSON(message: _457.Metadata): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _457.Metadata;
                };
                SnapshotItem: {
                    encode(message: _457.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _457.SnapshotItem;
                    fromJSON(object: any): _457.SnapshotItem;
                    toJSON(message: _457.SnapshotItem): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _457.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _457.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _457.SnapshotStoreItem;
                    fromJSON(object: any): _457.SnapshotStoreItem;
                    toJSON(message: _457.SnapshotStoreItem): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _457.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _457.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _457.SnapshotIAVLItem;
                    fromJSON(object: any): _457.SnapshotIAVLItem;
                    toJSON(message: _457.SnapshotIAVLItem): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _457.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _457.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _457.SnapshotExtensionMeta;
                    fromJSON(object: any): _457.SnapshotExtensionMeta;
                    toJSON(message: _457.SnapshotExtensionMeta): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _457.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _457.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _457.SnapshotExtensionPayload;
                    fromJSON(object: any): _457.SnapshotExtensionPayload;
                    toJSON(message: _457.SnapshotExtensionPayload): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _457.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _457.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _457.SnapshotKVItem;
                    fromJSON(object: any): _457.SnapshotKVItem;
                    toJSON(message: _457.SnapshotKVItem): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _457.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _457.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _457.SnapshotSchema;
                    fromJSON(object: any): _457.SnapshotSchema;
                    toJSON(message: _457.SnapshotSchema): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _457.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _459.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _459.StoreKVPair;
                    fromJSON(object: any): _459.StoreKVPair;
                    toJSON(message: _459.StoreKVPair): unknown;
                    fromPartial<I extends unknown>(object: I): _459.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _458.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _458.CommitInfo;
                    fromJSON(object: any): _458.CommitInfo;
                    toJSON(message: _458.CommitInfo): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _458.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _458.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _458.StoreInfo;
                    fromJSON(object: any): _458.StoreInfo;
                    toJSON(message: _458.StoreInfo): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _458.StoreInfo;
                };
                CommitID: {
                    encode(message: _458.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _458.CommitID;
                    fromJSON(object: any): _458.CommitID;
                    toJSON(message: _458.CommitID): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _458.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                GetValidatorSetByHeightRequest: {
                    encode(message: _460.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _460.GetValidatorSetByHeightRequest;
                    toJSON(message: _460.GetValidatorSetByHeightRequest): unknown;
                    fromPartial<I extends unknown>(object: I): _460.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _460.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _460.GetValidatorSetByHeightResponse;
                    toJSON(message: _460.GetValidatorSetByHeightResponse): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _460.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _460.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _460.GetLatestValidatorSetRequest;
                    toJSON(message: _460.GetLatestValidatorSetRequest): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _460.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _460.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _460.GetLatestValidatorSetResponse;
                    toJSON(message: _460.GetLatestValidatorSetResponse): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _460.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _460.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.Validator;
                    fromJSON(object: any): _460.Validator;
                    toJSON(message: _460.Validator): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _460.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _460.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.GetBlockByHeightRequest;
                    fromJSON(object: any): _460.GetBlockByHeightRequest;
                    toJSON(message: _460.GetBlockByHeightRequest): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _460.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _460.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.GetBlockByHeightResponse;
                    fromJSON(object: any): _460.GetBlockByHeightResponse;
                    toJSON(message: _460.GetBlockByHeightResponse): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _460.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _460.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.GetLatestBlockRequest;
                    fromJSON(_: any): _460.GetLatestBlockRequest;
                    toJSON(_: _460.GetLatestBlockRequest): unknown;
                    fromPartial<I_7 extends unknown>(_: I_7): _460.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _460.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.GetLatestBlockResponse;
                    fromJSON(object: any): _460.GetLatestBlockResponse;
                    toJSON(message: _460.GetLatestBlockResponse): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _460.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _460.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.GetSyncingRequest;
                    fromJSON(_: any): _460.GetSyncingRequest;
                    toJSON(_: _460.GetSyncingRequest): unknown;
                    fromPartial<I_9 extends unknown>(_: I_9): _460.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _460.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.GetSyncingResponse;
                    fromJSON(object: any): _460.GetSyncingResponse;
                    toJSON(message: _460.GetSyncingResponse): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _460.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _460.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.GetNodeInfoRequest;
                    fromJSON(_: any): _460.GetNodeInfoRequest;
                    toJSON(_: _460.GetNodeInfoRequest): unknown;
                    fromPartial<I_11 extends unknown>(_: I_11): _460.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _460.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.GetNodeInfoResponse;
                    fromJSON(object: any): _460.GetNodeInfoResponse;
                    toJSON(message: _460.GetNodeInfoResponse): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _460.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _460.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.VersionInfo;
                    fromJSON(object: any): _460.VersionInfo;
                    toJSON(message: _460.VersionInfo): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _460.VersionInfo;
                };
                Module: {
                    encode(message: _460.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.Module;
                    fromJSON(object: any): _460.Module;
                    toJSON(message: _460.Module): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _460.Module;
                };
                ServiceClientImpl: typeof _460.ServiceClientImpl;
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _461.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _461.Coin;
                fromJSON(object: any): _461.Coin;
                toJSON(message: _461.Coin): unknown;
                fromPartial<I extends unknown>(object: I): _461.Coin;
            };
            DecCoin: {
                encode(message: _461.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _461.DecCoin;
                fromJSON(object: any): _461.DecCoin;
                toJSON(message: _461.DecCoin): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _461.DecCoin;
            };
            IntProto: {
                encode(message: _461.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _461.IntProto;
                fromJSON(object: any): _461.IntProto;
                toJSON(message: _461.IntProto): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _461.IntProto;
            };
            DecProto: {
                encode(message: _461.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _461.DecProto;
                fromJSON(object: any): _461.DecProto;
                toJSON(message: _461.DecProto): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _461.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _463.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.GenesisOwners;
                fromJSON(object: any): _463.GenesisOwners;
                toJSON(message: _463.GenesisOwners): unknown;
                fromPartial<I extends unknown>(object: I): _463.GenesisOwners;
            };
            GenesisState: {
                encode(message: _463.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.GenesisState;
                fromJSON(object: any): _463.GenesisState;
                toJSON(message: _463.GenesisState): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _463.GenesisState;
            };
            Capability: {
                encode(message: _462.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.Capability;
                fromJSON(object: any): _462.Capability;
                toJSON(message: _462.Capability): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _462.Capability;
            };
            Owner: {
                encode(message: _462.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.Owner;
                fromJSON(object: any): _462.Owner;
                toJSON(message: _462.Owner): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _462.Owner;
            };
            CapabilityOwners: {
                encode(message: _462.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.CapabilityOwners;
                fromJSON(object: any): _462.CapabilityOwners;
                toJSON(message: _462.CapabilityOwners): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _462.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgVerifyInvariant: {
                encode(message: _465.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgVerifyInvariant;
                fromJSON(object: any): _465.MsgVerifyInvariant;
                toJSON(message: _465.MsgVerifyInvariant): unknown;
                fromPartial<I extends unknown>(object: I): _465.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _465.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgVerifyInvariantResponse;
                fromJSON(_: any): _465.MsgVerifyInvariantResponse;
                toJSON(_: _465.MsgVerifyInvariantResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _465.MsgVerifyInvariantResponse;
            };
            registry: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    encode(message: _465.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgVerifyInvariant;
                    fromJSON(object: any): _465.MsgVerifyInvariant;
                    toJSON(message: _465.MsgVerifyInvariant): unknown;
                    fromPartial<I extends unknown>(object: I): _465.MsgVerifyInvariant;
                };
            };
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _465.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _465.MsgVerifyInvariant;
                };
            };
            encoded: {
                verifyInvariant(value: _465.MsgVerifyInvariant): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                verifyInvariant(value: any): {
                    typeUrl: string;
                    value: _465.MsgVerifyInvariant;
                };
            };
            toJSON: {
                verifyInvariant(value: _465.MsgVerifyInvariant): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                verifyInvariant(value: _465.MsgVerifyInvariant): {
                    typeUrl: string;
                    value: _465.MsgVerifyInvariant;
                };
            };
            messages: {
                verifyInvariant(value: _465.MsgVerifyInvariant): {
                    typeUrl: string;
                    value: _465.MsgVerifyInvariant;
                };
            };
            GenesisState: {
                encode(message: _464.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.GenesisState;
                fromJSON(object: any): _464.GenesisState;
                toJSON(message: _464.GenesisState): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _464.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _474.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.PubKey;
                fromJSON(object: any): _474.PubKey;
                toJSON(message: _474.PubKey): unknown;
                fromPartial<I extends unknown>(object: I): _474.PubKey;
            };
            PrivKey: {
                encode(message: _474.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.PrivKey;
                fromJSON(object: any): _474.PrivKey;
                toJSON(message: _474.PrivKey): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _474.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _475.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _475.BIP44Params;
                    fromJSON(object: any): _475.BIP44Params;
                    toJSON(message: _475.BIP44Params): unknown;
                    fromPartial<I extends unknown>(object: I): _475.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _476.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _476.Record;
                    fromJSON(object: any): _476.Record;
                    toJSON(message: _476.Record): unknown;
                    fromPartial<I extends unknown>(object: I): _476.Record;
                };
                Record_Local: {
                    encode(message: _476.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _476.Record_Local;
                    fromJSON(object: any): _476.Record_Local;
                    toJSON(message: _476.Record_Local): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _476.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _476.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _476.Record_Ledger;
                    fromJSON(object: any): _476.Record_Ledger;
                    toJSON(message: _476.Record_Ledger): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _476.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _476.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _476.Record_Multi;
                    fromJSON(_: any): _476.Record_Multi;
                    toJSON(_: _476.Record_Multi): unknown;
                    fromPartial<I_3 extends unknown>(_: I_3): _476.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _476.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _476.Record_Offline;
                    fromJSON(_: any): _476.Record_Offline;
                    toJSON(_: _476.Record_Offline): unknown;
                    fromPartial<I_4 extends unknown>(_: I_4): _476.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _477.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _477.LegacyAminoPubKey;
                fromJSON(object: any): _477.LegacyAminoPubKey;
                toJSON(message: _477.LegacyAminoPubKey): unknown;
                fromPartial<I extends unknown>(object: I): _477.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _478.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _478.PubKey;
                fromJSON(object: any): _478.PubKey;
                toJSON(message: _478.PubKey): unknown;
                fromPartial<I extends unknown>(object: I): _478.PubKey;
            };
            PrivKey: {
                encode(message: _478.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _478.PrivKey;
                fromJSON(object: any): _478.PrivKey;
                toJSON(message: _478.PrivKey): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _478.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _479.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _479.PubKey;
                fromJSON(object: any): _479.PubKey;
                toJSON(message: _479.PubKey): unknown;
                fromPartial<I extends unknown>(object: I): _479.PubKey;
            };
            PrivKey: {
                encode(message: _479.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _479.PrivKey;
                fromJSON(object: any): _479.PrivKey;
                toJSON(message: _479.PrivKey): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _479.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgSetWithdrawAddress: {
                encode(message: _483.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _483.MsgSetWithdrawAddress;
                fromJSON(object: any): _483.MsgSetWithdrawAddress;
                toJSON(message: _483.MsgSetWithdrawAddress): unknown;
                fromPartial<I extends unknown>(object: I): _483.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _483.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _483.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _483.MsgSetWithdrawAddressResponse;
                toJSON(_: _483.MsgSetWithdrawAddressResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _483.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _483.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _483.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _483.MsgWithdrawDelegatorReward;
                toJSON(message: _483.MsgWithdrawDelegatorReward): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _483.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _483.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _483.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _483.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _483.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _483.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _483.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _483.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _483.MsgWithdrawValidatorCommission;
                toJSON(message: _483.MsgWithdrawValidatorCommission): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _483.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _483.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _483.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _483.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _483.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _483.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _483.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _483.MsgFundCommunityPool;
                fromJSON(object: any): _483.MsgFundCommunityPool;
                toJSON(message: _483.MsgFundCommunityPool): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _483.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _483.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _483.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _483.MsgFundCommunityPoolResponse;
                toJSON(_: _483.MsgFundCommunityPoolResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _483.MsgFundCommunityPoolResponse;
            };
            registry: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    encode(message: _483.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _483.MsgSetWithdrawAddress;
                    fromJSON(object: any): _483.MsgSetWithdrawAddress;
                    toJSON(message: _483.MsgSetWithdrawAddress): unknown;
                    fromPartial<I extends unknown>(object: I): _483.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    encode(message: _483.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _483.MsgWithdrawDelegatorReward;
                    fromJSON(object: any): _483.MsgWithdrawDelegatorReward;
                    toJSON(message: _483.MsgWithdrawDelegatorReward): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _483.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    encode(message: _483.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _483.MsgWithdrawValidatorCommission;
                    fromJSON(object: any): _483.MsgWithdrawValidatorCommission;
                    toJSON(message: _483.MsgWithdrawValidatorCommission): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _483.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    encode(message: _483.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _483.MsgFundCommunityPool;
                    fromJSON(object: any): _483.MsgFundCommunityPool;
                    toJSON(message: _483.MsgFundCommunityPool): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _483.MsgFundCommunityPool;
                };
            };
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _483.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _483.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _483.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _483.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _483.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _483.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _483.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _483.MsgFundCommunityPool;
                };
            };
            encoded: {
                setWithdrawAddress(value: _483.MsgSetWithdrawAddress): {
                    type_url: string;
                    value: Uint8Array;
                };
                withdrawDelegatorReward(value: _483.MsgWithdrawDelegatorReward): {
                    type_url: string;
                    value: Uint8Array;
                };
                withdrawValidatorCommission(value: _483.MsgWithdrawValidatorCommission): {
                    type_url: string;
                    value: Uint8Array;
                };
                fundCommunityPool(value: _483.MsgFundCommunityPool): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                setWithdrawAddress(value: any): {
                    typeUrl: string;
                    value: _483.MsgSetWithdrawAddress;
                };
                withdrawDelegatorReward(value: any): {
                    typeUrl: string;
                    value: _483.MsgWithdrawDelegatorReward;
                };
                withdrawValidatorCommission(value: any): {
                    typeUrl: string;
                    value: _483.MsgWithdrawValidatorCommission;
                };
                fundCommunityPool(value: any): {
                    typeUrl: string;
                    value: _483.MsgFundCommunityPool;
                };
            };
            toJSON: {
                setWithdrawAddress(value: _483.MsgSetWithdrawAddress): {
                    typeUrl: string;
                    value: unknown;
                };
                withdrawDelegatorReward(value: _483.MsgWithdrawDelegatorReward): {
                    typeUrl: string;
                    value: unknown;
                };
                withdrawValidatorCommission(value: _483.MsgWithdrawValidatorCommission): {
                    typeUrl: string;
                    value: unknown;
                };
                fundCommunityPool(value: _483.MsgFundCommunityPool): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                setWithdrawAddress(value: _483.MsgSetWithdrawAddress): {
                    typeUrl: string;
                    value: _483.MsgSetWithdrawAddress;
                };
                withdrawDelegatorReward(value: _483.MsgWithdrawDelegatorReward): {
                    typeUrl: string;
                    value: _483.MsgWithdrawDelegatorReward;
                };
                withdrawValidatorCommission(value: _483.MsgWithdrawValidatorCommission): {
                    typeUrl: string;
                    value: _483.MsgWithdrawValidatorCommission;
                };
                fundCommunityPool(value: _483.MsgFundCommunityPool): {
                    typeUrl: string;
                    value: _483.MsgFundCommunityPool;
                };
            };
            messages: {
                setWithdrawAddress(value: _483.MsgSetWithdrawAddress): {
                    typeUrl: string;
                    value: _483.MsgSetWithdrawAddress;
                };
                withdrawDelegatorReward(value: _483.MsgWithdrawDelegatorReward): {
                    typeUrl: string;
                    value: _483.MsgWithdrawDelegatorReward;
                };
                withdrawValidatorCommission(value: _483.MsgWithdrawValidatorCommission): {
                    typeUrl: string;
                    value: _483.MsgWithdrawValidatorCommission;
                };
                fundCommunityPool(value: _483.MsgFundCommunityPool): {
                    typeUrl: string;
                    value: _483.MsgFundCommunityPool;
                };
            };
            QueryParamsRequest: {
                encode(_: _482.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.QueryParamsRequest;
                fromJSON(_: any): _482.QueryParamsRequest;
                toJSON(_: _482.QueryParamsRequest): unknown;
                fromPartial<I_8 extends unknown>(_: I_8): _482.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _482.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.QueryParamsResponse;
                fromJSON(object: any): _482.QueryParamsResponse;
                toJSON(message: _482.QueryParamsResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _482.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _482.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _482.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _482.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _482.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _482.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _482.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _482.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _482.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _482.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.QueryValidatorCommissionRequest;
                fromJSON(object: any): _482.QueryValidatorCommissionRequest;
                toJSON(message: _482.QueryValidatorCommissionRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _482.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _482.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.QueryValidatorCommissionResponse;
                fromJSON(object: any): _482.QueryValidatorCommissionResponse;
                toJSON(message: _482.QueryValidatorCommissionResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _482.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _482.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.QueryValidatorSlashesRequest;
                fromJSON(object: any): _482.QueryValidatorSlashesRequest;
                toJSON(message: _482.QueryValidatorSlashesRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _482.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _482.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.QueryValidatorSlashesResponse;
                fromJSON(object: any): _482.QueryValidatorSlashesResponse;
                toJSON(message: _482.QueryValidatorSlashesResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _482.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _482.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.QueryDelegationRewardsRequest;
                fromJSON(object: any): _482.QueryDelegationRewardsRequest;
                toJSON(message: _482.QueryDelegationRewardsRequest): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _482.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _482.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.QueryDelegationRewardsResponse;
                fromJSON(object: any): _482.QueryDelegationRewardsResponse;
                toJSON(message: _482.QueryDelegationRewardsResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _482.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _482.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _482.QueryDelegationTotalRewardsRequest;
                toJSON(message: _482.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _482.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _482.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _482.QueryDelegationTotalRewardsResponse;
                toJSON(message: _482.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _482.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _482.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _482.QueryDelegatorValidatorsRequest;
                toJSON(message: _482.QueryDelegatorValidatorsRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _482.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _482.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _482.QueryDelegatorValidatorsResponse;
                toJSON(message: _482.QueryDelegatorValidatorsResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _482.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _482.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _482.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _482.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _482.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _482.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _482.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _482.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _482.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _482.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.QueryCommunityPoolRequest;
                fromJSON(_: any): _482.QueryCommunityPoolRequest;
                toJSON(_: _482.QueryCommunityPoolRequest): unknown;
                fromPartial<I_24 extends unknown>(_: I_24): _482.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _482.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.QueryCommunityPoolResponse;
                fromJSON(object: any): _482.QueryCommunityPoolResponse;
                toJSON(message: _482.QueryCommunityPoolResponse): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _482.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _481.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _481.DelegatorWithdrawInfo;
                fromJSON(object: any): _481.DelegatorWithdrawInfo;
                toJSON(message: _481.DelegatorWithdrawInfo): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _481.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _481.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _481.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _481.ValidatorOutstandingRewardsRecord;
                toJSON(message: _481.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _481.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _481.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _481.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _481.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _481.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _481.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _481.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _481.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _481.ValidatorHistoricalRewardsRecord;
                toJSON(message: _481.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _481.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _481.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _481.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _481.ValidatorCurrentRewardsRecord;
                toJSON(message: _481.ValidatorCurrentRewardsRecord): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _481.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _481.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _481.DelegatorStartingInfoRecord;
                fromJSON(object: any): _481.DelegatorStartingInfoRecord;
                toJSON(message: _481.DelegatorStartingInfoRecord): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _481.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _481.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _481.ValidatorSlashEventRecord;
                fromJSON(object: any): _481.ValidatorSlashEventRecord;
                toJSON(message: _481.ValidatorSlashEventRecord): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _481.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _481.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _481.GenesisState;
                fromJSON(object: any): _481.GenesisState;
                toJSON(message: _481.GenesisState): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _481.GenesisState;
            };
            Params: {
                encode(message: _480.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.Params;
                fromJSON(object: any): _480.Params;
                toJSON(message: _480.Params): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _480.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _480.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.ValidatorHistoricalRewards;
                fromJSON(object: any): _480.ValidatorHistoricalRewards;
                toJSON(message: _480.ValidatorHistoricalRewards): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _480.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _480.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.ValidatorCurrentRewards;
                fromJSON(object: any): _480.ValidatorCurrentRewards;
                toJSON(message: _480.ValidatorCurrentRewards): unknown;
                fromPartial<I_36 extends unknown>(object: I_36): _480.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _480.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.ValidatorAccumulatedCommission;
                fromJSON(object: any): _480.ValidatorAccumulatedCommission;
                toJSON(message: _480.ValidatorAccumulatedCommission): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _480.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _480.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.ValidatorOutstandingRewards;
                fromJSON(object: any): _480.ValidatorOutstandingRewards;
                toJSON(message: _480.ValidatorOutstandingRewards): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _480.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _480.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.ValidatorSlashEvent;
                fromJSON(object: any): _480.ValidatorSlashEvent;
                toJSON(message: _480.ValidatorSlashEvent): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _480.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _480.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.ValidatorSlashEvents;
                fromJSON(object: any): _480.ValidatorSlashEvents;
                toJSON(message: _480.ValidatorSlashEvents): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _480.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _480.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.FeePool;
                fromJSON(object: any): _480.FeePool;
                toJSON(message: _480.FeePool): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _480.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _480.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.CommunityPoolSpendProposal;
                fromJSON(object: any): _480.CommunityPoolSpendProposal;
                toJSON(message: _480.CommunityPoolSpendProposal): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _480.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _480.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.DelegatorStartingInfo;
                fromJSON(object: any): _480.DelegatorStartingInfo;
                toJSON(message: _480.DelegatorStartingInfo): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _480.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _480.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.DelegationDelegatorReward;
                fromJSON(object: any): _480.DelegationDelegatorReward;
                toJSON(message: _480.DelegationDelegatorReward): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _480.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _480.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _480.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _480.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _480.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgSubmitEvidence: {
                encode(message: _495.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _495.MsgSubmitEvidence;
                fromJSON(object: any): _495.MsgSubmitEvidence;
                toJSON(message: _495.MsgSubmitEvidence): unknown;
                fromPartial<I extends unknown>(object: I): _495.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _495.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _495.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _495.MsgSubmitEvidenceResponse;
                toJSON(message: _495.MsgSubmitEvidenceResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _495.MsgSubmitEvidenceResponse;
            };
            registry: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    encode(message: _495.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _495.MsgSubmitEvidence;
                    fromJSON(object: any): _495.MsgSubmitEvidence;
                    toJSON(message: _495.MsgSubmitEvidence): unknown;
                    fromPartial<I extends unknown>(object: I): _495.MsgSubmitEvidence;
                };
            };
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _495.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _495.MsgSubmitEvidence;
                };
            };
            encoded: {
                submitEvidence(value: _495.MsgSubmitEvidence): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                submitEvidence(value: any): {
                    typeUrl: string;
                    value: _495.MsgSubmitEvidence;
                };
            };
            toJSON: {
                submitEvidence(value: _495.MsgSubmitEvidence): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                submitEvidence(value: _495.MsgSubmitEvidence): {
                    typeUrl: string;
                    value: _495.MsgSubmitEvidence;
                };
            };
            messages: {
                submitEvidence(value: _495.MsgSubmitEvidence): {
                    typeUrl: string;
                    value: _495.MsgSubmitEvidence;
                };
            };
            QueryEvidenceRequest: {
                encode(message: _494.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _494.QueryEvidenceRequest;
                fromJSON(object: any): _494.QueryEvidenceRequest;
                toJSON(message: _494.QueryEvidenceRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _494.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _494.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _494.QueryEvidenceResponse;
                fromJSON(object: any): _494.QueryEvidenceResponse;
                toJSON(message: _494.QueryEvidenceResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _494.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _494.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _494.QueryAllEvidenceRequest;
                fromJSON(object: any): _494.QueryAllEvidenceRequest;
                toJSON(message: _494.QueryAllEvidenceRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _494.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _494.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _494.QueryAllEvidenceResponse;
                fromJSON(object: any): _494.QueryAllEvidenceResponse;
                toJSON(message: _494.QueryAllEvidenceResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _494.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _493.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _493.GenesisState;
                fromJSON(object: any): _493.GenesisState;
                toJSON(message: _493.GenesisState): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _493.GenesisState;
            };
            Equivocation: {
                encode(message: _492.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _492.Equivocation;
                fromJSON(object: any): _492.Equivocation;
                toJSON(message: _492.Equivocation): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _492.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgGrantAllowance: {
                encode(message: _507.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _507.MsgGrantAllowance;
                fromJSON(object: any): _507.MsgGrantAllowance;
                toJSON(message: _507.MsgGrantAllowance): unknown;
                fromPartial<I extends unknown>(object: I): _507.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _507.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _507.MsgGrantAllowanceResponse;
                fromJSON(_: any): _507.MsgGrantAllowanceResponse;
                toJSON(_: _507.MsgGrantAllowanceResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _507.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _507.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _507.MsgRevokeAllowance;
                fromJSON(object: any): _507.MsgRevokeAllowance;
                toJSON(message: _507.MsgRevokeAllowance): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _507.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _507.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _507.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _507.MsgRevokeAllowanceResponse;
                toJSON(_: _507.MsgRevokeAllowanceResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _507.MsgRevokeAllowanceResponse;
            };
            registry: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    encode(message: _507.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _507.MsgGrantAllowance;
                    fromJSON(object: any): _507.MsgGrantAllowance;
                    toJSON(message: _507.MsgGrantAllowance): unknown;
                    fromPartial<I extends unknown>(object: I): _507.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    encode(message: _507.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _507.MsgRevokeAllowance;
                    fromJSON(object: any): _507.MsgRevokeAllowance;
                    toJSON(message: _507.MsgRevokeAllowance): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _507.MsgRevokeAllowance;
                };
            };
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _507.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _507.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _507.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _507.MsgRevokeAllowance;
                };
            };
            encoded: {
                grantAllowance(value: _507.MsgGrantAllowance): {
                    type_url: string;
                    value: Uint8Array;
                };
                revokeAllowance(value: _507.MsgRevokeAllowance): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                grantAllowance(value: any): {
                    typeUrl: string;
                    value: _507.MsgGrantAllowance;
                };
                revokeAllowance(value: any): {
                    typeUrl: string;
                    value: _507.MsgRevokeAllowance;
                };
            };
            toJSON: {
                grantAllowance(value: _507.MsgGrantAllowance): {
                    typeUrl: string;
                    value: unknown;
                };
                revokeAllowance(value: _507.MsgRevokeAllowance): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                grantAllowance(value: _507.MsgGrantAllowance): {
                    typeUrl: string;
                    value: _507.MsgGrantAllowance;
                };
                revokeAllowance(value: _507.MsgRevokeAllowance): {
                    typeUrl: string;
                    value: _507.MsgRevokeAllowance;
                };
            };
            messages: {
                grantAllowance(value: _507.MsgGrantAllowance): {
                    typeUrl: string;
                    value: _507.MsgGrantAllowance;
                };
                revokeAllowance(value: _507.MsgRevokeAllowance): {
                    typeUrl: string;
                    value: _507.MsgRevokeAllowance;
                };
            };
            QueryAllowanceRequest: {
                encode(message: _506.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _506.QueryAllowanceRequest;
                fromJSON(object: any): _506.QueryAllowanceRequest;
                toJSON(message: _506.QueryAllowanceRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _506.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _506.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _506.QueryAllowanceResponse;
                fromJSON(object: any): _506.QueryAllowanceResponse;
                toJSON(message: _506.QueryAllowanceResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _506.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _506.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _506.QueryAllowancesRequest;
                fromJSON(object: any): _506.QueryAllowancesRequest;
                toJSON(message: _506.QueryAllowancesRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _506.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _506.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _506.QueryAllowancesResponse;
                fromJSON(object: any): _506.QueryAllowancesResponse;
                toJSON(message: _506.QueryAllowancesResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _506.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _506.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _506.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _506.QueryAllowancesByGranterRequest;
                toJSON(message: _506.QueryAllowancesByGranterRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _506.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _506.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _506.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _506.QueryAllowancesByGranterResponse;
                toJSON(message: _506.QueryAllowancesByGranterResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _506.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _505.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _505.GenesisState;
                fromJSON(object: any): _505.GenesisState;
                toJSON(message: _505.GenesisState): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _505.GenesisState;
            };
            BasicAllowance: {
                encode(message: _504.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _504.BasicAllowance;
                fromJSON(object: any): _504.BasicAllowance;
                toJSON(message: _504.BasicAllowance): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _504.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _504.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _504.PeriodicAllowance;
                fromJSON(object: any): _504.PeriodicAllowance;
                toJSON(message: _504.PeriodicAllowance): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _504.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _504.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _504.AllowedMsgAllowance;
                fromJSON(object: any): _504.AllowedMsgAllowance;
                toJSON(message: _504.AllowedMsgAllowance): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _504.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _504.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _504.Grant;
                fromJSON(object: any): _504.Grant;
                toJSON(message: _504.Grant): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _504.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _516.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.GenesisState;
                fromJSON(object: any): _516.GenesisState;
                toJSON(message: _516.GenesisState): unknown;
                fromPartial<I extends unknown>(object: I): _516.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgSubmitProposal: {
                encode(message: _520.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _520.MsgSubmitProposal;
                fromJSON(object: any): _520.MsgSubmitProposal;
                toJSON(message: _520.MsgSubmitProposal): unknown;
                fromPartial<I extends unknown>(object: I): _520.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _520.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _520.MsgSubmitProposalResponse;
                fromJSON(object: any): _520.MsgSubmitProposalResponse;
                toJSON(message: _520.MsgSubmitProposalResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _520.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _520.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _520.MsgExecLegacyContent;
                fromJSON(object: any): _520.MsgExecLegacyContent;
                toJSON(message: _520.MsgExecLegacyContent): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _520.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _520.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _520.MsgExecLegacyContentResponse;
                fromJSON(_: any): _520.MsgExecLegacyContentResponse;
                toJSON(_: _520.MsgExecLegacyContentResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _520.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _520.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _520.MsgVote;
                fromJSON(object: any): _520.MsgVote;
                toJSON(message: _520.MsgVote): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _520.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _520.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _520.MsgVoteResponse;
                fromJSON(_: any): _520.MsgVoteResponse;
                toJSON(_: _520.MsgVoteResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _520.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _520.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _520.MsgVoteWeighted;
                fromJSON(object: any): _520.MsgVoteWeighted;
                toJSON(message: _520.MsgVoteWeighted): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _520.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _520.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _520.MsgVoteWeightedResponse;
                fromJSON(_: any): _520.MsgVoteWeightedResponse;
                toJSON(_: _520.MsgVoteWeightedResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _520.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _520.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _520.MsgDeposit;
                fromJSON(object: any): _520.MsgDeposit;
                toJSON(message: _520.MsgDeposit): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _520.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _520.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _520.MsgDepositResponse;
                fromJSON(_: any): _520.MsgDepositResponse;
                toJSON(_: _520.MsgDepositResponse): unknown;
                fromPartial<I_9 extends unknown>(_: I_9): _520.MsgDepositResponse;
            };
            registry: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    encode(message: _520.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _520.MsgSubmitProposal;
                    fromJSON(object: any): _520.MsgSubmitProposal;
                    toJSON(message: _520.MsgSubmitProposal): unknown;
                    fromPartial<I extends unknown>(object: I): _520.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    encode(message: _520.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _520.MsgExecLegacyContent;
                    fromJSON(object: any): _520.MsgExecLegacyContent;
                    toJSON(message: _520.MsgExecLegacyContent): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _520.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    encode(message: _520.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _520.MsgVote;
                    fromJSON(object: any): _520.MsgVote;
                    toJSON(message: _520.MsgVote): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _520.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    encode(message: _520.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _520.MsgVoteWeighted;
                    fromJSON(object: any): _520.MsgVoteWeighted;
                    toJSON(message: _520.MsgVoteWeighted): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _520.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    encode(message: _520.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _520.MsgDeposit;
                    fromJSON(object: any): _520.MsgDeposit;
                    toJSON(message: _520.MsgDeposit): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _520.MsgDeposit;
                };
            };
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _520.MsgSubmitProposal) => {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata }: {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    }) => _520.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _520.MsgExecLegacyContent) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    };
                    fromAmino: ({ content, authority }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    }) => _520.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _520.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    }) => _520.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _520.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, options, metadata }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    }) => _520.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _520.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _520.MsgDeposit;
                };
            };
            encoded: {
                submitProposal(value: _520.MsgSubmitProposal): {
                    type_url: string;
                    value: Uint8Array;
                };
                execLegacyContent(value: _520.MsgExecLegacyContent): {
                    type_url: string;
                    value: Uint8Array;
                };
                vote(value: _520.MsgVote): {
                    type_url: string;
                    value: Uint8Array;
                };
                voteWeighted(value: _520.MsgVoteWeighted): {
                    type_url: string;
                    value: Uint8Array;
                };
                deposit(value: _520.MsgDeposit): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                submitProposal(value: any): {
                    typeUrl: string;
                    value: _520.MsgSubmitProposal;
                };
                execLegacyContent(value: any): {
                    typeUrl: string;
                    value: _520.MsgExecLegacyContent;
                };
                vote(value: any): {
                    typeUrl: string;
                    value: _520.MsgVote;
                };
                voteWeighted(value: any): {
                    typeUrl: string;
                    value: _520.MsgVoteWeighted;
                };
                deposit(value: any): {
                    typeUrl: string;
                    value: _520.MsgDeposit;
                };
            };
            toJSON: {
                submitProposal(value: _520.MsgSubmitProposal): {
                    typeUrl: string;
                    value: unknown;
                };
                execLegacyContent(value: _520.MsgExecLegacyContent): {
                    typeUrl: string;
                    value: unknown;
                };
                vote(value: _520.MsgVote): {
                    typeUrl: string;
                    value: unknown;
                };
                voteWeighted(value: _520.MsgVoteWeighted): {
                    typeUrl: string;
                    value: unknown;
                };
                deposit(value: _520.MsgDeposit): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                submitProposal(value: _520.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _520.MsgSubmitProposal;
                };
                execLegacyContent(value: _520.MsgExecLegacyContent): {
                    typeUrl: string;
                    value: _520.MsgExecLegacyContent;
                };
                vote(value: _520.MsgVote): {
                    typeUrl: string;
                    value: _520.MsgVote;
                };
                voteWeighted(value: _520.MsgVoteWeighted): {
                    typeUrl: string;
                    value: _520.MsgVoteWeighted;
                };
                deposit(value: _520.MsgDeposit): {
                    typeUrl: string;
                    value: _520.MsgDeposit;
                };
            };
            messages: {
                submitProposal(value: _520.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _520.MsgSubmitProposal;
                };
                execLegacyContent(value: _520.MsgExecLegacyContent): {
                    typeUrl: string;
                    value: _520.MsgExecLegacyContent;
                };
                vote(value: _520.MsgVote): {
                    typeUrl: string;
                    value: _520.MsgVote;
                };
                voteWeighted(value: _520.MsgVoteWeighted): {
                    typeUrl: string;
                    value: _520.MsgVoteWeighted;
                };
                deposit(value: _520.MsgDeposit): {
                    typeUrl: string;
                    value: _520.MsgDeposit;
                };
            };
            QueryProposalRequest: {
                encode(message: _519.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _519.QueryProposalRequest;
                fromJSON(object: any): _519.QueryProposalRequest;
                toJSON(message: _519.QueryProposalRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _519.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _519.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _519.QueryProposalResponse;
                fromJSON(object: any): _519.QueryProposalResponse;
                toJSON(message: _519.QueryProposalResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _519.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _519.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _519.QueryProposalsRequest;
                fromJSON(object: any): _519.QueryProposalsRequest;
                toJSON(message: _519.QueryProposalsRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _519.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _519.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _519.QueryProposalsResponse;
                fromJSON(object: any): _519.QueryProposalsResponse;
                toJSON(message: _519.QueryProposalsResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _519.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _519.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _519.QueryVoteRequest;
                fromJSON(object: any): _519.QueryVoteRequest;
                toJSON(message: _519.QueryVoteRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _519.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _519.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _519.QueryVoteResponse;
                fromJSON(object: any): _519.QueryVoteResponse;
                toJSON(message: _519.QueryVoteResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _519.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _519.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _519.QueryVotesRequest;
                fromJSON(object: any): _519.QueryVotesRequest;
                toJSON(message: _519.QueryVotesRequest): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _519.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _519.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _519.QueryVotesResponse;
                fromJSON(object: any): _519.QueryVotesResponse;
                toJSON(message: _519.QueryVotesResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _519.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _519.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _519.QueryParamsRequest;
                fromJSON(object: any): _519.QueryParamsRequest;
                toJSON(message: _519.QueryParamsRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _519.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _519.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _519.QueryParamsResponse;
                fromJSON(object: any): _519.QueryParamsResponse;
                toJSON(message: _519.QueryParamsResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _519.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _519.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _519.QueryDepositRequest;
                fromJSON(object: any): _519.QueryDepositRequest;
                toJSON(message: _519.QueryDepositRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _519.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _519.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _519.QueryDepositResponse;
                fromJSON(object: any): _519.QueryDepositResponse;
                toJSON(message: _519.QueryDepositResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _519.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _519.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _519.QueryDepositsRequest;
                fromJSON(object: any): _519.QueryDepositsRequest;
                toJSON(message: _519.QueryDepositsRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _519.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _519.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _519.QueryDepositsResponse;
                fromJSON(object: any): _519.QueryDepositsResponse;
                toJSON(message: _519.QueryDepositsResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _519.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _519.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _519.QueryTallyResultRequest;
                fromJSON(object: any): _519.QueryTallyResultRequest;
                toJSON(message: _519.QueryTallyResultRequest): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _519.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _519.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _519.QueryTallyResultResponse;
                fromJSON(object: any): _519.QueryTallyResultResponse;
                toJSON(message: _519.QueryTallyResultResponse): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _519.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _518.VoteOption;
            voteOptionToJSON(object: _518.VoteOption): string;
            proposalStatusFromJSON(object: any): _518.ProposalStatus;
            proposalStatusToJSON(object: _518.ProposalStatus): string;
            VoteOption: typeof _518.VoteOption;
            ProposalStatus: typeof _518.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _518.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _518.WeightedVoteOption;
                fromJSON(object: any): _518.WeightedVoteOption;
                toJSON(message: _518.WeightedVoteOption): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _518.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _518.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _518.Deposit;
                fromJSON(object: any): _518.Deposit;
                toJSON(message: _518.Deposit): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _518.Deposit;
            };
            Proposal: {
                encode(message: _518.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _518.Proposal;
                fromJSON(object: any): _518.Proposal;
                toJSON(message: _518.Proposal): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _518.Proposal;
            };
            TallyResult: {
                encode(message: _518.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _518.TallyResult;
                fromJSON(object: any): _518.TallyResult;
                toJSON(message: _518.TallyResult): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _518.TallyResult;
            };
            Vote: {
                encode(message: _518.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _518.Vote;
                fromJSON(object: any): _518.Vote;
                toJSON(message: _518.Vote): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _518.Vote;
            };
            DepositParams: {
                encode(message: _518.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _518.DepositParams;
                fromJSON(object: any): _518.DepositParams;
                toJSON(message: _518.DepositParams): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _518.DepositParams;
            };
            VotingParams: {
                encode(message: _518.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _518.VotingParams;
                fromJSON(object: any): _518.VotingParams;
                toJSON(message: _518.VotingParams): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _518.VotingParams;
            };
            TallyParams: {
                encode(message: _518.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _518.TallyParams;
                fromJSON(object: any): _518.TallyParams;
                toJSON(message: _518.TallyParams): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _518.TallyParams;
            };
            GenesisState: {
                encode(message: _517.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _517.GenesisState;
                fromJSON(object: any): _517.GenesisState;
                toJSON(message: _517.GenesisState): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _517.GenesisState;
            };
        };
        const v1beta1: {
            MsgSubmitProposal: {
                encode(message: _532.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.MsgSubmitProposal;
                fromJSON(object: any): _532.MsgSubmitProposal;
                toJSON(message: _532.MsgSubmitProposal): unknown;
                fromPartial<I extends unknown>(object: I): _532.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _532.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.MsgSubmitProposalResponse;
                fromJSON(object: any): _532.MsgSubmitProposalResponse;
                toJSON(message: _532.MsgSubmitProposalResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _532.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _532.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.MsgVote;
                fromJSON(object: any): _532.MsgVote;
                toJSON(message: _532.MsgVote): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _532.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _532.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.MsgVoteResponse;
                fromJSON(_: any): _532.MsgVoteResponse;
                toJSON(_: _532.MsgVoteResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _532.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _532.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.MsgVoteWeighted;
                fromJSON(object: any): _532.MsgVoteWeighted;
                toJSON(message: _532.MsgVoteWeighted): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _532.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _532.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.MsgVoteWeightedResponse;
                fromJSON(_: any): _532.MsgVoteWeightedResponse;
                toJSON(_: _532.MsgVoteWeightedResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _532.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _532.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.MsgDeposit;
                fromJSON(object: any): _532.MsgDeposit;
                toJSON(message: _532.MsgDeposit): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _532.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _532.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.MsgDepositResponse;
                fromJSON(_: any): _532.MsgDepositResponse;
                toJSON(_: _532.MsgDepositResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _532.MsgDepositResponse;
            };
            registry: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    encode(message: _532.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.MsgSubmitProposal;
                    fromJSON(object: any): _532.MsgSubmitProposal;
                    toJSON(message: _532.MsgSubmitProposal): unknown;
                    fromPartial<I extends unknown>(object: I): _532.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    encode(message: _532.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.MsgVote;
                    fromJSON(object: any): _532.MsgVote;
                    toJSON(message: _532.MsgVote): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _532.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    encode(message: _532.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.MsgVoteWeighted;
                    fromJSON(object: any): _532.MsgVoteWeighted;
                    toJSON(message: _532.MsgVoteWeighted): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _532.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    encode(message: _532.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.MsgDeposit;
                    fromJSON(object: any): _532.MsgDeposit;
                    toJSON(message: _532.MsgDeposit): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _532.MsgDeposit;
                };
            };
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _532.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _532.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _532.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _532.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _532.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _532.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _532.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _532.MsgDeposit;
                };
            };
            encoded: {
                submitProposal(value: _532.MsgSubmitProposal): {
                    type_url: string;
                    value: Uint8Array;
                };
                vote(value: _532.MsgVote): {
                    type_url: string;
                    value: Uint8Array;
                };
                voteWeighted(value: _532.MsgVoteWeighted): {
                    type_url: string;
                    value: Uint8Array;
                };
                deposit(value: _532.MsgDeposit): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                submitProposal(value: any): {
                    typeUrl: string;
                    value: _532.MsgSubmitProposal;
                };
                vote(value: any): {
                    typeUrl: string;
                    value: _532.MsgVote;
                };
                voteWeighted(value: any): {
                    typeUrl: string;
                    value: _532.MsgVoteWeighted;
                };
                deposit(value: any): {
                    typeUrl: string;
                    value: _532.MsgDeposit;
                };
            };
            toJSON: {
                submitProposal(value: _532.MsgSubmitProposal): {
                    typeUrl: string;
                    value: unknown;
                };
                vote(value: _532.MsgVote): {
                    typeUrl: string;
                    value: unknown;
                };
                voteWeighted(value: _532.MsgVoteWeighted): {
                    typeUrl: string;
                    value: unknown;
                };
                deposit(value: _532.MsgDeposit): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                submitProposal(value: _532.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _532.MsgSubmitProposal;
                };
                vote(value: _532.MsgVote): {
                    typeUrl: string;
                    value: _532.MsgVote;
                };
                voteWeighted(value: _532.MsgVoteWeighted): {
                    typeUrl: string;
                    value: _532.MsgVoteWeighted;
                };
                deposit(value: _532.MsgDeposit): {
                    typeUrl: string;
                    value: _532.MsgDeposit;
                };
            };
            messages: {
                submitProposal(value: _532.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _532.MsgSubmitProposal;
                };
                vote(value: _532.MsgVote): {
                    typeUrl: string;
                    value: _532.MsgVote;
                };
                voteWeighted(value: _532.MsgVoteWeighted): {
                    typeUrl: string;
                    value: _532.MsgVoteWeighted;
                };
                deposit(value: _532.MsgDeposit): {
                    typeUrl: string;
                    value: _532.MsgDeposit;
                };
            };
            QueryProposalRequest: {
                encode(message: _531.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryProposalRequest;
                fromJSON(object: any): _531.QueryProposalRequest;
                toJSON(message: _531.QueryProposalRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _531.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _531.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryProposalResponse;
                fromJSON(object: any): _531.QueryProposalResponse;
                toJSON(message: _531.QueryProposalResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _531.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _531.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryProposalsRequest;
                fromJSON(object: any): _531.QueryProposalsRequest;
                toJSON(message: _531.QueryProposalsRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _531.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _531.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryProposalsResponse;
                fromJSON(object: any): _531.QueryProposalsResponse;
                toJSON(message: _531.QueryProposalsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _531.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _531.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryVoteRequest;
                fromJSON(object: any): _531.QueryVoteRequest;
                toJSON(message: _531.QueryVoteRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _531.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _531.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryVoteResponse;
                fromJSON(object: any): _531.QueryVoteResponse;
                toJSON(message: _531.QueryVoteResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _531.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _531.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryVotesRequest;
                fromJSON(object: any): _531.QueryVotesRequest;
                toJSON(message: _531.QueryVotesRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _531.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _531.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryVotesResponse;
                fromJSON(object: any): _531.QueryVotesResponse;
                toJSON(message: _531.QueryVotesResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _531.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _531.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryParamsRequest;
                fromJSON(object: any): _531.QueryParamsRequest;
                toJSON(message: _531.QueryParamsRequest): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _531.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _531.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryParamsResponse;
                fromJSON(object: any): _531.QueryParamsResponse;
                toJSON(message: _531.QueryParamsResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _531.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _531.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryDepositRequest;
                fromJSON(object: any): _531.QueryDepositRequest;
                toJSON(message: _531.QueryDepositRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _531.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _531.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryDepositResponse;
                fromJSON(object: any): _531.QueryDepositResponse;
                toJSON(message: _531.QueryDepositResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _531.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _531.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryDepositsRequest;
                fromJSON(object: any): _531.QueryDepositsRequest;
                toJSON(message: _531.QueryDepositsRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _531.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _531.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryDepositsResponse;
                fromJSON(object: any): _531.QueryDepositsResponse;
                toJSON(message: _531.QueryDepositsResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _531.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _531.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryTallyResultRequest;
                fromJSON(object: any): _531.QueryTallyResultRequest;
                toJSON(message: _531.QueryTallyResultRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _531.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _531.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryTallyResultResponse;
                fromJSON(object: any): _531.QueryTallyResultResponse;
                toJSON(message: _531.QueryTallyResultResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _531.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _530.VoteOption;
            voteOptionToJSON(object: _530.VoteOption): string;
            proposalStatusFromJSON(object: any): _530.ProposalStatus;
            proposalStatusToJSON(object: _530.ProposalStatus): string;
            VoteOption: typeof _530.VoteOption;
            ProposalStatus: typeof _530.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _530.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _530.WeightedVoteOption;
                fromJSON(object: any): _530.WeightedVoteOption;
                toJSON(message: _530.WeightedVoteOption): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _530.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _530.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _530.TextProposal;
                fromJSON(object: any): _530.TextProposal;
                toJSON(message: _530.TextProposal): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _530.TextProposal;
            };
            Deposit: {
                encode(message: _530.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _530.Deposit;
                fromJSON(object: any): _530.Deposit;
                toJSON(message: _530.Deposit): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _530.Deposit;
            };
            Proposal: {
                encode(message: _530.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _530.Proposal;
                fromJSON(object: any): _530.Proposal;
                toJSON(message: _530.Proposal): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _530.Proposal;
            };
            TallyResult: {
                encode(message: _530.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _530.TallyResult;
                fromJSON(object: any): _530.TallyResult;
                toJSON(message: _530.TallyResult): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _530.TallyResult;
            };
            Vote: {
                encode(message: _530.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _530.Vote;
                fromJSON(object: any): _530.Vote;
                toJSON(message: _530.Vote): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _530.Vote;
            };
            DepositParams: {
                encode(message: _530.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _530.DepositParams;
                fromJSON(object: any): _530.DepositParams;
                toJSON(message: _530.DepositParams): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _530.DepositParams;
            };
            VotingParams: {
                encode(message: _530.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _530.VotingParams;
                fromJSON(object: any): _530.VotingParams;
                toJSON(message: _530.VotingParams): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _530.VotingParams;
            };
            TallyParams: {
                encode(message: _530.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _530.TallyParams;
                fromJSON(object: any): _530.TallyParams;
                toJSON(message: _530.TallyParams): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _530.TallyParams;
            };
            GenesisState: {
                encode(message: _529.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _529.GenesisState;
                fromJSON(object: any): _529.GenesisState;
                toJSON(message: _529.GenesisState): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _529.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            voteOptionFromJSON(object: any): _553.VoteOption;
            voteOptionToJSON(object: _553.VoteOption): string;
            proposalStatusFromJSON(object: any): _553.ProposalStatus;
            proposalStatusToJSON(object: _553.ProposalStatus): string;
            proposalResultFromJSON(object: any): _553.ProposalResult;
            proposalResultToJSON(object: _553.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _553.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _553.ProposalExecutorResult): string;
            VoteOption: typeof _553.VoteOption;
            ProposalStatus: typeof _553.ProposalStatus;
            ProposalResult: typeof _553.ProposalResult;
            ProposalExecutorResult: typeof _553.ProposalExecutorResult;
            Member: {
                encode(message: _553.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _553.Member;
                fromJSON(object: any): _553.Member;
                toJSON(message: _553.Member): unknown;
                fromPartial<I extends unknown>(object: I): _553.Member;
            };
            Members: {
                encode(message: _553.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _553.Members;
                fromJSON(object: any): _553.Members;
                toJSON(message: _553.Members): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _553.Members;
            };
            ThresholdDecisionPolicy: {
                encode(message: _553.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _553.ThresholdDecisionPolicy;
                fromJSON(object: any): _553.ThresholdDecisionPolicy;
                toJSON(message: _553.ThresholdDecisionPolicy): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _553.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _553.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _553.PercentageDecisionPolicy;
                fromJSON(object: any): _553.PercentageDecisionPolicy;
                toJSON(message: _553.PercentageDecisionPolicy): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _553.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _553.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _553.DecisionPolicyWindows;
                fromJSON(object: any): _553.DecisionPolicyWindows;
                toJSON(message: _553.DecisionPolicyWindows): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _553.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _553.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _553.GroupInfo;
                fromJSON(object: any): _553.GroupInfo;
                toJSON(message: _553.GroupInfo): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _553.GroupInfo;
            };
            GroupMember: {
                encode(message: _553.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _553.GroupMember;
                fromJSON(object: any): _553.GroupMember;
                toJSON(message: _553.GroupMember): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _553.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _553.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _553.GroupPolicyInfo;
                fromJSON(object: any): _553.GroupPolicyInfo;
                toJSON(message: _553.GroupPolicyInfo): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _553.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _553.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _553.Proposal;
                fromJSON(object: any): _553.Proposal;
                toJSON(message: _553.Proposal): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _553.Proposal;
            };
            TallyResult: {
                encode(message: _553.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _553.TallyResult;
                fromJSON(object: any): _553.TallyResult;
                toJSON(message: _553.TallyResult): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _553.TallyResult;
            };
            Vote: {
                encode(message: _553.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _553.Vote;
                fromJSON(object: any): _553.Vote;
                toJSON(message: _553.Vote): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _553.Vote;
            };
            execFromJSON(object: any): _544.Exec;
            execToJSON(object: _544.Exec): string;
            Exec: typeof _544.Exec;
            MsgCreateGroup: {
                encode(message: _544.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgCreateGroup;
                fromJSON(object: any): _544.MsgCreateGroup;
                toJSON(message: _544.MsgCreateGroup): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _544.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _544.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgCreateGroupResponse;
                fromJSON(object: any): _544.MsgCreateGroupResponse;
                toJSON(message: _544.MsgCreateGroupResponse): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _544.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _544.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgUpdateGroupMembers;
                fromJSON(object: any): _544.MsgUpdateGroupMembers;
                toJSON(message: _544.MsgUpdateGroupMembers): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _544.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _544.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _544.MsgUpdateGroupMembersResponse;
                toJSON(_: _544.MsgUpdateGroupMembersResponse): unknown;
                fromPartial<I_14 extends unknown>(_: I_14): _544.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _544.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgUpdateGroupAdmin;
                fromJSON(object: any): _544.MsgUpdateGroupAdmin;
                toJSON(message: _544.MsgUpdateGroupAdmin): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _544.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _544.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _544.MsgUpdateGroupAdminResponse;
                toJSON(_: _544.MsgUpdateGroupAdminResponse): unknown;
                fromPartial<I_16 extends unknown>(_: I_16): _544.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _544.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgUpdateGroupMetadata;
                fromJSON(object: any): _544.MsgUpdateGroupMetadata;
                toJSON(message: _544.MsgUpdateGroupMetadata): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _544.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _544.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _544.MsgUpdateGroupMetadataResponse;
                toJSON(_: _544.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial<I_18 extends unknown>(_: I_18): _544.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _544.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgCreateGroupPolicy;
                fromJSON(object: any): _544.MsgCreateGroupPolicy;
                toJSON(message: _544.MsgCreateGroupPolicy): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _544.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _544.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _544.MsgCreateGroupPolicyResponse;
                toJSON(message: _544.MsgCreateGroupPolicyResponse): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _544.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _544.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _544.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _544.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _544.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _544.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _544.MsgCreateGroupWithPolicy;
                toJSON(message: _544.MsgCreateGroupWithPolicy): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _544.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _544.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _544.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _544.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _544.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _544.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _544.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _544.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial<I_24 extends unknown>(_: I_24): _544.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _544.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _544.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _544.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _544.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _544.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _544.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _544.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial<I_26 extends unknown>(_: I_26): _544.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _544.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _544.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _544.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _544.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _544.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _544.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _544.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial<I_28 extends unknown>(_: I_28): _544.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _544.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgSubmitProposal;
                fromJSON(object: any): _544.MsgSubmitProposal;
                toJSON(message: _544.MsgSubmitProposal): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _544.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _544.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgSubmitProposalResponse;
                fromJSON(object: any): _544.MsgSubmitProposalResponse;
                toJSON(message: _544.MsgSubmitProposalResponse): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _544.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _544.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgWithdrawProposal;
                fromJSON(object: any): _544.MsgWithdrawProposal;
                toJSON(message: _544.MsgWithdrawProposal): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _544.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _544.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgWithdrawProposalResponse;
                fromJSON(_: any): _544.MsgWithdrawProposalResponse;
                toJSON(_: _544.MsgWithdrawProposalResponse): unknown;
                fromPartial<I_32 extends unknown>(_: I_32): _544.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _544.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgVote;
                fromJSON(object: any): _544.MsgVote;
                toJSON(message: _544.MsgVote): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _544.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _544.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgVoteResponse;
                fromJSON(_: any): _544.MsgVoteResponse;
                toJSON(_: _544.MsgVoteResponse): unknown;
                fromPartial<I_34 extends unknown>(_: I_34): _544.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _544.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgExec;
                fromJSON(object: any): _544.MsgExec;
                toJSON(message: _544.MsgExec): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _544.MsgExec;
            };
            MsgExecResponse: {
                encode(_: _544.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgExecResponse;
                fromJSON(_: any): _544.MsgExecResponse;
                toJSON(_: _544.MsgExecResponse): unknown;
                fromPartial<I_36 extends unknown>(_: I_36): _544.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _544.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgLeaveGroup;
                fromJSON(object: any): _544.MsgLeaveGroup;
                toJSON(message: _544.MsgLeaveGroup): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _544.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _544.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgLeaveGroupResponse;
                fromJSON(_: any): _544.MsgLeaveGroupResponse;
                toJSON(_: _544.MsgLeaveGroupResponse): unknown;
                fromPartial<I_38 extends unknown>(_: I_38): _544.MsgLeaveGroupResponse;
            };
            registry: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    encode(message: _544.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgCreateGroup;
                    fromJSON(object: any): _544.MsgCreateGroup;
                    toJSON(message: _544.MsgCreateGroup): unknown;
                    fromPartial<I_11 extends unknown>(object: I_11): _544.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    encode(message: _544.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgUpdateGroupMembers;
                    fromJSON(object: any): _544.MsgUpdateGroupMembers;
                    toJSON(message: _544.MsgUpdateGroupMembers): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _544.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    encode(message: _544.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgUpdateGroupAdmin;
                    fromJSON(object: any): _544.MsgUpdateGroupAdmin;
                    toJSON(message: _544.MsgUpdateGroupAdmin): unknown;
                    fromPartial<I_15 extends unknown>(object: I_15): _544.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    encode(message: _544.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgUpdateGroupMetadata;
                    fromJSON(object: any): _544.MsgUpdateGroupMetadata;
                    toJSON(message: _544.MsgUpdateGroupMetadata): unknown;
                    fromPartial<I_17 extends unknown>(object: I_17): _544.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    encode(message: _544.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgCreateGroupPolicy;
                    fromJSON(object: any): _544.MsgCreateGroupPolicy;
                    toJSON(message: _544.MsgCreateGroupPolicy): unknown;
                    fromPartial<I_19 extends unknown>(object: I_19): _544.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    encode(message: _544.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgCreateGroupWithPolicy;
                    fromJSON(object: any): _544.MsgCreateGroupWithPolicy;
                    toJSON(message: _544.MsgCreateGroupWithPolicy): unknown;
                    fromPartial<I_22 extends unknown>(object: I_22): _544.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    encode(message: _544.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgUpdateGroupPolicyAdmin;
                    fromJSON(object: any): _544.MsgUpdateGroupPolicyAdmin;
                    toJSON(message: _544.MsgUpdateGroupPolicyAdmin): unknown;
                    fromPartial<I_21 extends unknown>(object: I_21): _544.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    encode(message: _544.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgUpdateGroupPolicyDecisionPolicy;
                    fromJSON(object: any): _544.MsgUpdateGroupPolicyDecisionPolicy;
                    toJSON(message: _544.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                    fromPartial<I_25 extends unknown>(object: I_25): _544.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    encode(message: _544.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgUpdateGroupPolicyMetadata;
                    fromJSON(object: any): _544.MsgUpdateGroupPolicyMetadata;
                    toJSON(message: _544.MsgUpdateGroupPolicyMetadata): unknown;
                    fromPartial<I_27 extends unknown>(object: I_27): _544.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    encode(message: _544.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgSubmitProposal;
                    fromJSON(object: any): _544.MsgSubmitProposal;
                    toJSON(message: _544.MsgSubmitProposal): unknown;
                    fromPartial<I_29 extends unknown>(object: I_29): _544.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    encode(message: _544.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgWithdrawProposal;
                    fromJSON(object: any): _544.MsgWithdrawProposal;
                    toJSON(message: _544.MsgWithdrawProposal): unknown;
                    fromPartial<I_31 extends unknown>(object: I_31): _544.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    encode(message: _544.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgVote;
                    fromJSON(object: any): _544.MsgVote;
                    toJSON(message: _544.MsgVote): unknown;
                    fromPartial<I_33 extends unknown>(object: I_33): _544.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    encode(message: _544.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgExec;
                    fromJSON(object: any): _544.MsgExec;
                    toJSON(message: _544.MsgExec): unknown;
                    fromPartial<I_35 extends unknown>(object: I_35): _544.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    encode(message: _544.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgLeaveGroup;
                    fromJSON(object: any): _544.MsgLeaveGroup;
                    toJSON(message: _544.MsgLeaveGroup): unknown;
                    fromPartial<I_37 extends unknown>(object: I_37): _544.MsgLeaveGroup;
                };
            };
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _544.MsgCreateGroup) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: Date;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ admin, members, metadata }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: Date;
                        }[];
                        metadata: string;
                    }) => _544.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _544.MsgUpdateGroupMembers) => {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: Date;
                        }[];
                    };
                    fromAmino: ({ admin, group_id, member_updates }: {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: Date;
                        }[];
                    }) => _544.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _544.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _544.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _544.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _544.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _544.MsgCreateGroupPolicy) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_id, metadata, decision_policy }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _544.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _544.MsgCreateGroupWithPolicy) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: Date;
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, members, group_metadata, group_policy_metadata, group_policy_as_admin, decision_policy }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: Date;
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _544.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, address, newAdmin }: _544.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, address, new_admin }: {
                        admin: string;
                        address: string;
                        new_admin: string;
                    }) => _544.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, address, decisionPolicy }: _544.MsgUpdateGroupPolicyDecisionPolicy) => {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, address, decision_policy }: {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _544.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, address, metadata }: _544.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, address, metadata }: {
                        admin: string;
                        address: string;
                        metadata: string;
                    }) => _544.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ address, proposers, metadata, messages, exec }: _544.MsgSubmitProposal) => {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    };
                    fromAmino: ({ address, proposers, metadata, messages, exec }: {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    }) => _544.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _544.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _544.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _544.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata, exec }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    }) => _544.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, signer }: _544.MsgExec) => {
                        proposal_id: string;
                        signer: string;
                    };
                    fromAmino: ({ proposal_id, signer }: {
                        proposal_id: string;
                        signer: string;
                    }) => _544.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _544.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _544.MsgLeaveGroup;
                };
            };
            encoded: {
                createGroup(value: _544.MsgCreateGroup): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupMembers(value: _544.MsgUpdateGroupMembers): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupAdmin(value: _544.MsgUpdateGroupAdmin): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupMetadata(value: _544.MsgUpdateGroupMetadata): {
                    type_url: string;
                    value: Uint8Array;
                };
                createGroupPolicy(value: _544.MsgCreateGroupPolicy): {
                    type_url: string;
                    value: Uint8Array;
                };
                createGroupWithPolicy(value: _544.MsgCreateGroupWithPolicy): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupPolicyAdmin(value: _544.MsgUpdateGroupPolicyAdmin): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupPolicyDecisionPolicy(value: _544.MsgUpdateGroupPolicyDecisionPolicy): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupPolicyMetadata(value: _544.MsgUpdateGroupPolicyMetadata): {
                    type_url: string;
                    value: Uint8Array;
                };
                submitProposal(value: _544.MsgSubmitProposal): {
                    type_url: string;
                    value: Uint8Array;
                };
                withdrawProposal(value: _544.MsgWithdrawProposal): {
                    type_url: string;
                    value: Uint8Array;
                };
                vote(value: _544.MsgVote): {
                    type_url: string;
                    value: Uint8Array;
                };
                exec(value: _544.MsgExec): {
                    type_url: string;
                    value: Uint8Array;
                };
                leaveGroup(value: _544.MsgLeaveGroup): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                createGroup(value: any): {
                    typeUrl: string;
                    value: _544.MsgCreateGroup;
                };
                updateGroupMembers(value: any): {
                    typeUrl: string;
                    value: _544.MsgUpdateGroupMembers;
                };
                updateGroupAdmin(value: any): {
                    typeUrl: string;
                    value: _544.MsgUpdateGroupAdmin;
                };
                updateGroupMetadata(value: any): {
                    typeUrl: string;
                    value: _544.MsgUpdateGroupMetadata;
                };
                createGroupPolicy(value: any): {
                    typeUrl: string;
                    value: _544.MsgCreateGroupPolicy;
                };
                createGroupWithPolicy(value: any): {
                    typeUrl: string;
                    value: _544.MsgCreateGroupWithPolicy;
                };
                updateGroupPolicyAdmin(value: any): {
                    typeUrl: string;
                    value: _544.MsgUpdateGroupPolicyAdmin;
                };
                updateGroupPolicyDecisionPolicy(value: any): {
                    typeUrl: string;
                    value: _544.MsgUpdateGroupPolicyDecisionPolicy;
                };
                updateGroupPolicyMetadata(value: any): {
                    typeUrl: string;
                    value: _544.MsgUpdateGroupPolicyMetadata;
                };
                submitProposal(value: any): {
                    typeUrl: string;
                    value: _544.MsgSubmitProposal;
                };
                withdrawProposal(value: any): {
                    typeUrl: string;
                    value: _544.MsgWithdrawProposal;
                };
                vote(value: any): {
                    typeUrl: string;
                    value: _544.MsgVote;
                };
                exec(value: any): {
                    typeUrl: string;
                    value: _544.MsgExec;
                };
                leaveGroup(value: any): {
                    typeUrl: string;
                    value: _544.MsgLeaveGroup;
                };
            };
            toJSON: {
                createGroup(value: _544.MsgCreateGroup): {
                    typeUrl: string;
                    value: unknown;
                };
                updateGroupMembers(value: _544.MsgUpdateGroupMembers): {
                    typeUrl: string;
                    value: unknown;
                };
                updateGroupAdmin(value: _544.MsgUpdateGroupAdmin): {
                    typeUrl: string;
                    value: unknown;
                };
                updateGroupMetadata(value: _544.MsgUpdateGroupMetadata): {
                    typeUrl: string;
                    value: unknown;
                };
                createGroupPolicy(value: _544.MsgCreateGroupPolicy): {
                    typeUrl: string;
                    value: unknown;
                };
                createGroupWithPolicy(value: _544.MsgCreateGroupWithPolicy): {
                    typeUrl: string;
                    value: unknown;
                };
                updateGroupPolicyAdmin(value: _544.MsgUpdateGroupPolicyAdmin): {
                    typeUrl: string;
                    value: unknown;
                };
                updateGroupPolicyDecisionPolicy(value: _544.MsgUpdateGroupPolicyDecisionPolicy): {
                    typeUrl: string;
                    value: unknown;
                };
                updateGroupPolicyMetadata(value: _544.MsgUpdateGroupPolicyMetadata): {
                    typeUrl: string;
                    value: unknown;
                };
                submitProposal(value: _544.MsgSubmitProposal): {
                    typeUrl: string;
                    value: unknown;
                };
                withdrawProposal(value: _544.MsgWithdrawProposal): {
                    typeUrl: string;
                    value: unknown;
                };
                vote(value: _544.MsgVote): {
                    typeUrl: string;
                    value: unknown;
                };
                exec(value: _544.MsgExec): {
                    typeUrl: string;
                    value: unknown;
                };
                leaveGroup(value: _544.MsgLeaveGroup): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                createGroup(value: _544.MsgCreateGroup): {
                    typeUrl: string;
                    value: _544.MsgCreateGroup;
                };
                updateGroupMembers(value: _544.MsgUpdateGroupMembers): {
                    typeUrl: string;
                    value: _544.MsgUpdateGroupMembers;
                };
                updateGroupAdmin(value: _544.MsgUpdateGroupAdmin): {
                    typeUrl: string;
                    value: _544.MsgUpdateGroupAdmin;
                };
                updateGroupMetadata(value: _544.MsgUpdateGroupMetadata): {
                    typeUrl: string;
                    value: _544.MsgUpdateGroupMetadata;
                };
                createGroupPolicy(value: _544.MsgCreateGroupPolicy): {
                    typeUrl: string;
                    value: _544.MsgCreateGroupPolicy;
                };
                createGroupWithPolicy(value: _544.MsgCreateGroupWithPolicy): {
                    typeUrl: string;
                    value: _544.MsgCreateGroupWithPolicy;
                };
                updateGroupPolicyAdmin(value: _544.MsgUpdateGroupPolicyAdmin): {
                    typeUrl: string;
                    value: _544.MsgUpdateGroupPolicyAdmin;
                };
                updateGroupPolicyDecisionPolicy(value: _544.MsgUpdateGroupPolicyDecisionPolicy): {
                    typeUrl: string;
                    value: _544.MsgUpdateGroupPolicyDecisionPolicy;
                };
                updateGroupPolicyMetadata(value: _544.MsgUpdateGroupPolicyMetadata): {
                    typeUrl: string;
                    value: _544.MsgUpdateGroupPolicyMetadata;
                };
                submitProposal(value: _544.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _544.MsgSubmitProposal;
                };
                withdrawProposal(value: _544.MsgWithdrawProposal): {
                    typeUrl: string;
                    value: _544.MsgWithdrawProposal;
                };
                vote(value: _544.MsgVote): {
                    typeUrl: string;
                    value: _544.MsgVote;
                };
                exec(value: _544.MsgExec): {
                    typeUrl: string;
                    value: _544.MsgExec;
                };
                leaveGroup(value: _544.MsgLeaveGroup): {
                    typeUrl: string;
                    value: _544.MsgLeaveGroup;
                };
            };
            messages: {
                createGroup(value: _544.MsgCreateGroup): {
                    typeUrl: string;
                    value: _544.MsgCreateGroup;
                };
                updateGroupMembers(value: _544.MsgUpdateGroupMembers): {
                    typeUrl: string;
                    value: _544.MsgUpdateGroupMembers;
                };
                updateGroupAdmin(value: _544.MsgUpdateGroupAdmin): {
                    typeUrl: string;
                    value: _544.MsgUpdateGroupAdmin;
                };
                updateGroupMetadata(value: _544.MsgUpdateGroupMetadata): {
                    typeUrl: string;
                    value: _544.MsgUpdateGroupMetadata;
                };
                createGroupPolicy(value: _544.MsgCreateGroupPolicy): {
                    typeUrl: string;
                    value: _544.MsgCreateGroupPolicy;
                };
                createGroupWithPolicy(value: _544.MsgCreateGroupWithPolicy): {
                    typeUrl: string;
                    value: _544.MsgCreateGroupWithPolicy;
                };
                updateGroupPolicyAdmin(value: _544.MsgUpdateGroupPolicyAdmin): {
                    typeUrl: string;
                    value: _544.MsgUpdateGroupPolicyAdmin;
                };
                updateGroupPolicyDecisionPolicy(value: _544.MsgUpdateGroupPolicyDecisionPolicy): {
                    typeUrl: string;
                    value: _544.MsgUpdateGroupPolicyDecisionPolicy;
                };
                updateGroupPolicyMetadata(value: _544.MsgUpdateGroupPolicyMetadata): {
                    typeUrl: string;
                    value: _544.MsgUpdateGroupPolicyMetadata;
                };
                submitProposal(value: _544.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _544.MsgSubmitProposal;
                };
                withdrawProposal(value: _544.MsgWithdrawProposal): {
                    typeUrl: string;
                    value: _544.MsgWithdrawProposal;
                };
                vote(value: _544.MsgVote): {
                    typeUrl: string;
                    value: _544.MsgVote;
                };
                exec(value: _544.MsgExec): {
                    typeUrl: string;
                    value: _544.MsgExec;
                };
                leaveGroup(value: _544.MsgLeaveGroup): {
                    typeUrl: string;
                    value: _544.MsgLeaveGroup;
                };
            };
            QueryGroupInfoRequest: {
                encode(message: _543.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryGroupInfoRequest;
                fromJSON(object: any): _543.QueryGroupInfoRequest;
                toJSON(message: _543.QueryGroupInfoRequest): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _543.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _543.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryGroupInfoResponse;
                fromJSON(object: any): _543.QueryGroupInfoResponse;
                toJSON(message: _543.QueryGroupInfoResponse): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _543.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _543.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _543.QueryGroupPolicyInfoRequest;
                toJSON(message: _543.QueryGroupPolicyInfoRequest): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _543.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _543.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _543.QueryGroupPolicyInfoResponse;
                toJSON(message: _543.QueryGroupPolicyInfoResponse): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _543.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _543.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryGroupMembersRequest;
                fromJSON(object: any): _543.QueryGroupMembersRequest;
                toJSON(message: _543.QueryGroupMembersRequest): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _543.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _543.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryGroupMembersResponse;
                fromJSON(object: any): _543.QueryGroupMembersResponse;
                toJSON(message: _543.QueryGroupMembersResponse): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _543.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _543.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryGroupsByAdminRequest;
                fromJSON(object: any): _543.QueryGroupsByAdminRequest;
                toJSON(message: _543.QueryGroupsByAdminRequest): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _543.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _543.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryGroupsByAdminResponse;
                fromJSON(object: any): _543.QueryGroupsByAdminResponse;
                toJSON(message: _543.QueryGroupsByAdminResponse): unknown;
                fromPartial<I_46 extends unknown>(object: I_46): _543.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _543.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _543.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _543.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial<I_47 extends unknown>(object: I_47): _543.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _543.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _543.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _543.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial<I_48 extends unknown>(object: I_48): _543.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _543.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _543.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _543.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial<I_49 extends unknown>(object: I_49): _543.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _543.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _543.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _543.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial<I_50 extends unknown>(object: I_50): _543.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _543.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryProposalRequest;
                fromJSON(object: any): _543.QueryProposalRequest;
                toJSON(message: _543.QueryProposalRequest): unknown;
                fromPartial<I_51 extends unknown>(object: I_51): _543.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _543.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryProposalResponse;
                fromJSON(object: any): _543.QueryProposalResponse;
                toJSON(message: _543.QueryProposalResponse): unknown;
                fromPartial<I_52 extends unknown>(object: I_52): _543.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _543.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _543.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _543.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial<I_53 extends unknown>(object: I_53): _543.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _543.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _543.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _543.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial<I_54 extends unknown>(object: I_54): _543.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _543.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _543.QueryVoteByProposalVoterRequest;
                toJSON(message: _543.QueryVoteByProposalVoterRequest): unknown;
                fromPartial<I_55 extends unknown>(object: I_55): _543.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _543.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _543.QueryVoteByProposalVoterResponse;
                toJSON(message: _543.QueryVoteByProposalVoterResponse): unknown;
                fromPartial<I_56 extends unknown>(object: I_56): _543.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _543.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryVotesByProposalRequest;
                fromJSON(object: any): _543.QueryVotesByProposalRequest;
                toJSON(message: _543.QueryVotesByProposalRequest): unknown;
                fromPartial<I_57 extends unknown>(object: I_57): _543.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _543.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryVotesByProposalResponse;
                fromJSON(object: any): _543.QueryVotesByProposalResponse;
                toJSON(message: _543.QueryVotesByProposalResponse): unknown;
                fromPartial<I_58 extends unknown>(object: I_58): _543.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _543.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryVotesByVoterRequest;
                fromJSON(object: any): _543.QueryVotesByVoterRequest;
                toJSON(message: _543.QueryVotesByVoterRequest): unknown;
                fromPartial<I_59 extends unknown>(object: I_59): _543.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _543.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryVotesByVoterResponse;
                fromJSON(object: any): _543.QueryVotesByVoterResponse;
                toJSON(message: _543.QueryVotesByVoterResponse): unknown;
                fromPartial<I_60 extends unknown>(object: I_60): _543.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _543.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryGroupsByMemberRequest;
                fromJSON(object: any): _543.QueryGroupsByMemberRequest;
                toJSON(message: _543.QueryGroupsByMemberRequest): unknown;
                fromPartial<I_61 extends unknown>(object: I_61): _543.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _543.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryGroupsByMemberResponse;
                fromJSON(object: any): _543.QueryGroupsByMemberResponse;
                toJSON(message: _543.QueryGroupsByMemberResponse): unknown;
                fromPartial<I_62 extends unknown>(object: I_62): _543.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _543.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryTallyResultRequest;
                fromJSON(object: any): _543.QueryTallyResultRequest;
                toJSON(message: _543.QueryTallyResultRequest): unknown;
                fromPartial<I_63 extends unknown>(object: I_63): _543.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _543.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryTallyResultResponse;
                fromJSON(object: any): _543.QueryTallyResultResponse;
                toJSON(message: _543.QueryTallyResultResponse): unknown;
                fromPartial<I_64 extends unknown>(object: I_64): _543.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _542.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _542.GenesisState;
                fromJSON(object: any): _542.GenesisState;
                toJSON(message: _542.GenesisState): unknown;
                fromPartial<I_65 extends unknown>(object: I_65): _542.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _541.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _541.EventCreateGroup;
                fromJSON(object: any): _541.EventCreateGroup;
                toJSON(message: _541.EventCreateGroup): unknown;
                fromPartial<I_66 extends unknown>(object: I_66): _541.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _541.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _541.EventUpdateGroup;
                fromJSON(object: any): _541.EventUpdateGroup;
                toJSON(message: _541.EventUpdateGroup): unknown;
                fromPartial<I_67 extends unknown>(object: I_67): _541.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _541.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _541.EventCreateGroupPolicy;
                fromJSON(object: any): _541.EventCreateGroupPolicy;
                toJSON(message: _541.EventCreateGroupPolicy): unknown;
                fromPartial<I_68 extends unknown>(object: I_68): _541.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _541.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _541.EventUpdateGroupPolicy;
                fromJSON(object: any): _541.EventUpdateGroupPolicy;
                toJSON(message: _541.EventUpdateGroupPolicy): unknown;
                fromPartial<I_69 extends unknown>(object: I_69): _541.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _541.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _541.EventSubmitProposal;
                fromJSON(object: any): _541.EventSubmitProposal;
                toJSON(message: _541.EventSubmitProposal): unknown;
                fromPartial<I_70 extends unknown>(object: I_70): _541.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _541.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _541.EventWithdrawProposal;
                fromJSON(object: any): _541.EventWithdrawProposal;
                toJSON(message: _541.EventWithdrawProposal): unknown;
                fromPartial<I_71 extends unknown>(object: I_71): _541.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _541.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _541.EventVote;
                fromJSON(object: any): _541.EventVote;
                toJSON(message: _541.EventVote): unknown;
                fromPartial<I_72 extends unknown>(object: I_72): _541.EventVote;
            };
            EventExec: {
                encode(message: _541.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _541.EventExec;
                fromJSON(object: any): _541.EventExec;
                toJSON(message: _541.EventExec): unknown;
                fromPartial<I_73 extends unknown>(object: I_73): _541.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _541.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _541.EventLeaveGroup;
                fromJSON(object: any): _541.EventLeaveGroup;
                toJSON(message: _541.EventLeaveGroup): unknown;
                fromPartial<I_74 extends unknown>(object: I_74): _541.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _556.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryParamsRequest;
                fromJSON(_: any): _556.QueryParamsRequest;
                toJSON(_: _556.QueryParamsRequest): unknown;
                fromPartial<I extends unknown>(_: I): _556.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _556.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryParamsResponse;
                fromJSON(object: any): _556.QueryParamsResponse;
                toJSON(message: _556.QueryParamsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _556.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _556.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryInflationRequest;
                fromJSON(_: any): _556.QueryInflationRequest;
                toJSON(_: _556.QueryInflationRequest): unknown;
                fromPartial<I_2 extends unknown>(_: I_2): _556.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _556.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryInflationResponse;
                fromJSON(object: any): _556.QueryInflationResponse;
                toJSON(message: _556.QueryInflationResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _556.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _556.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _556.QueryAnnualProvisionsRequest;
                toJSON(_: _556.QueryAnnualProvisionsRequest): unknown;
                fromPartial<I_4 extends unknown>(_: I_4): _556.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _556.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _556.QueryAnnualProvisionsResponse;
                toJSON(message: _556.QueryAnnualProvisionsResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _556.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _555.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _555.Minter;
                fromJSON(object: any): _555.Minter;
                toJSON(message: _555.Minter): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _555.Minter;
            };
            Params: {
                encode(message: _555.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _555.Params;
                fromJSON(object: any): _555.Params;
                toJSON(message: _555.Params): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _555.Params;
            };
            GenesisState: {
                encode(message: _554.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _554.GenesisState;
                fromJSON(object: any): _554.GenesisState;
                toJSON(message: _554.GenesisState): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _554.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgSend: {
                encode(message: _562.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgSend;
                fromJSON(object: any): _562.MsgSend;
                toJSON(message: _562.MsgSend): unknown;
                fromPartial<I extends unknown>(object: I): _562.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _562.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgSendResponse;
                fromJSON(_: any): _562.MsgSendResponse;
                toJSON(_: _562.MsgSendResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _562.MsgSendResponse;
            };
            registry: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    encode(message: _562.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgSend;
                    fromJSON(object: any): _562.MsgSend;
                    toJSON(message: _562.MsgSend): unknown;
                    fromPartial<I extends unknown>(object: I): _562.MsgSend;
                };
            };
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _562.MsgSend) => {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    };
                    fromAmino: ({ class_id, id, sender, receiver }: {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    }) => _562.MsgSend;
                };
            };
            encoded: {
                send(value: _562.MsgSend): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                send(value: any): {
                    typeUrl: string;
                    value: _562.MsgSend;
                };
            };
            toJSON: {
                send(value: _562.MsgSend): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                send(value: _562.MsgSend): {
                    typeUrl: string;
                    value: _562.MsgSend;
                };
            };
            messages: {
                send(value: _562.MsgSend): {
                    typeUrl: string;
                    value: _562.MsgSend;
                };
            };
            QueryBalanceRequest: {
                encode(message: _561.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.QueryBalanceRequest;
                fromJSON(object: any): _561.QueryBalanceRequest;
                toJSON(message: _561.QueryBalanceRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _561.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _561.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.QueryBalanceResponse;
                fromJSON(object: any): _561.QueryBalanceResponse;
                toJSON(message: _561.QueryBalanceResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _561.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _561.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.QueryOwnerRequest;
                fromJSON(object: any): _561.QueryOwnerRequest;
                toJSON(message: _561.QueryOwnerRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _561.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _561.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.QueryOwnerResponse;
                fromJSON(object: any): _561.QueryOwnerResponse;
                toJSON(message: _561.QueryOwnerResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _561.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _561.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.QuerySupplyRequest;
                fromJSON(object: any): _561.QuerySupplyRequest;
                toJSON(message: _561.QuerySupplyRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _561.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _561.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.QuerySupplyResponse;
                fromJSON(object: any): _561.QuerySupplyResponse;
                toJSON(message: _561.QuerySupplyResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _561.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _561.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.QueryNFTsRequest;
                fromJSON(object: any): _561.QueryNFTsRequest;
                toJSON(message: _561.QueryNFTsRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _561.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _561.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.QueryNFTsResponse;
                fromJSON(object: any): _561.QueryNFTsResponse;
                toJSON(message: _561.QueryNFTsResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _561.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _561.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.QueryNFTRequest;
                fromJSON(object: any): _561.QueryNFTRequest;
                toJSON(message: _561.QueryNFTRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _561.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _561.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.QueryNFTResponse;
                fromJSON(object: any): _561.QueryNFTResponse;
                toJSON(message: _561.QueryNFTResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _561.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _561.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.QueryClassRequest;
                fromJSON(object: any): _561.QueryClassRequest;
                toJSON(message: _561.QueryClassRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _561.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _561.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.QueryClassResponse;
                fromJSON(object: any): _561.QueryClassResponse;
                toJSON(message: _561.QueryClassResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _561.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _561.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.QueryClassesRequest;
                fromJSON(object: any): _561.QueryClassesRequest;
                toJSON(message: _561.QueryClassesRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _561.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _561.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.QueryClassesResponse;
                fromJSON(object: any): _561.QueryClassesResponse;
                toJSON(message: _561.QueryClassesResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _561.QueryClassesResponse;
            };
            Class: {
                encode(message: _560.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _560.Class;
                fromJSON(object: any): _560.Class;
                toJSON(message: _560.Class): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _560.Class;
            };
            NFT: {
                encode(message: _560.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _560.NFT;
                fromJSON(object: any): _560.NFT;
                toJSON(message: _560.NFT): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _560.NFT;
            };
            GenesisState: {
                encode(message: _559.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _559.GenesisState;
                fromJSON(object: any): _559.GenesisState;
                toJSON(message: _559.GenesisState): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _559.GenesisState;
            };
            Entry: {
                encode(message: _559.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _559.Entry;
                fromJSON(object: any): _559.Entry;
                toJSON(message: _559.Entry): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _559.Entry;
            };
            EventSend: {
                encode(message: _558.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _558.EventSend;
                fromJSON(object: any): _558.EventSend;
                toJSON(message: _558.EventSend): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _558.EventSend;
            };
            EventMint: {
                encode(message: _558.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _558.EventMint;
                fromJSON(object: any): _558.EventMint;
                toJSON(message: _558.EventMint): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _558.EventMint;
            };
            EventBurn: {
                encode(message: _558.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _558.EventBurn;
                fromJSON(object: any): _558.EventBurn;
                toJSON(message: _558.EventBurn): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _558.EventBurn;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _571.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _571.TableDescriptor;
                fromJSON(object: any): _571.TableDescriptor;
                toJSON(message: _571.TableDescriptor): unknown;
                fromPartial<I extends unknown>(object: I): _571.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _571.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _571.PrimaryKeyDescriptor;
                fromJSON(object: any): _571.PrimaryKeyDescriptor;
                toJSON(message: _571.PrimaryKeyDescriptor): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _571.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _571.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _571.SecondaryIndexDescriptor;
                fromJSON(object: any): _571.SecondaryIndexDescriptor;
                toJSON(message: _571.SecondaryIndexDescriptor): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _571.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _571.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _571.SingletonDescriptor;
                fromJSON(object: any): _571.SingletonDescriptor;
                toJSON(message: _571.SingletonDescriptor): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _571.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _572.StorageType;
            storageTypeToJSON(object: _572.StorageType): string;
            StorageType: typeof _572.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _572.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _572.ModuleSchemaDescriptor;
                fromJSON(object: any): _572.ModuleSchemaDescriptor;
                toJSON(message: _572.ModuleSchemaDescriptor): unknown;
                fromPartial<I extends unknown>(object: I): _572.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _572.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _572.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _572.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _572.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _572.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryParamsRequest: {
                encode(message: _574.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.QueryParamsRequest;
                fromJSON(object: any): _574.QueryParamsRequest;
                toJSON(message: _574.QueryParamsRequest): unknown;
                fromPartial<I extends unknown>(object: I): _574.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _574.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.QueryParamsResponse;
                fromJSON(object: any): _574.QueryParamsResponse;
                toJSON(message: _574.QueryParamsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _574.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _574.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.QuerySubspacesRequest;
                fromJSON(_: any): _574.QuerySubspacesRequest;
                toJSON(_: _574.QuerySubspacesRequest): unknown;
                fromPartial<I_2 extends unknown>(_: I_2): _574.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _574.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.QuerySubspacesResponse;
                fromJSON(object: any): _574.QuerySubspacesResponse;
                toJSON(message: _574.QuerySubspacesResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _574.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _574.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.Subspace;
                fromJSON(object: any): _574.Subspace;
                toJSON(message: _574.Subspace): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _574.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _573.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.ParameterChangeProposal;
                fromJSON(object: any): _573.ParameterChangeProposal;
                toJSON(message: _573.ParameterChangeProposal): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _573.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _573.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.ParamChange;
                fromJSON(object: any): _573.ParamChange;
                toJSON(message: _573.ParamChange): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _573.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgUnjail: {
                encode(message: _578.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.MsgUnjail;
                fromJSON(object: any): _578.MsgUnjail;
                toJSON(message: _578.MsgUnjail): unknown;
                fromPartial<I extends unknown>(object: I): _578.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _578.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.MsgUnjailResponse;
                fromJSON(_: any): _578.MsgUnjailResponse;
                toJSON(_: _578.MsgUnjailResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _578.MsgUnjailResponse;
            };
            registry: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    encode(message: _578.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.MsgUnjail;
                    fromJSON(object: any): _578.MsgUnjail;
                    toJSON(message: _578.MsgUnjail): unknown;
                    fromPartial<I extends unknown>(object: I): _578.MsgUnjail;
                };
            };
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _578.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _578.MsgUnjail;
                };
            };
            encoded: {
                unjail(value: _578.MsgUnjail): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                unjail(value: any): {
                    typeUrl: string;
                    value: _578.MsgUnjail;
                };
            };
            toJSON: {
                unjail(value: _578.MsgUnjail): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                unjail(value: _578.MsgUnjail): {
                    typeUrl: string;
                    value: _578.MsgUnjail;
                };
            };
            messages: {
                unjail(value: _578.MsgUnjail): {
                    typeUrl: string;
                    value: _578.MsgUnjail;
                };
            };
            ValidatorSigningInfo: {
                encode(message: _577.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.ValidatorSigningInfo;
                fromJSON(object: any): _577.ValidatorSigningInfo;
                toJSON(message: _577.ValidatorSigningInfo): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _577.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _577.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.Params;
                fromJSON(object: any): _577.Params;
                toJSON(message: _577.Params): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _577.Params;
            };
            QueryParamsRequest: {
                encode(_: _576.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.QueryParamsRequest;
                fromJSON(_: any): _576.QueryParamsRequest;
                toJSON(_: _576.QueryParamsRequest): unknown;
                fromPartial<I_4 extends unknown>(_: I_4): _576.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _576.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.QueryParamsResponse;
                fromJSON(object: any): _576.QueryParamsResponse;
                toJSON(message: _576.QueryParamsResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _576.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _576.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.QuerySigningInfoRequest;
                fromJSON(object: any): _576.QuerySigningInfoRequest;
                toJSON(message: _576.QuerySigningInfoRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _576.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _576.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.QuerySigningInfoResponse;
                fromJSON(object: any): _576.QuerySigningInfoResponse;
                toJSON(message: _576.QuerySigningInfoResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _576.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _576.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.QuerySigningInfosRequest;
                fromJSON(object: any): _576.QuerySigningInfosRequest;
                toJSON(message: _576.QuerySigningInfosRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _576.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _576.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.QuerySigningInfosResponse;
                fromJSON(object: any): _576.QuerySigningInfosResponse;
                toJSON(message: _576.QuerySigningInfosResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _576.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _575.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _575.GenesisState;
                fromJSON(object: any): _575.GenesisState;
                toJSON(message: _575.GenesisState): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _575.GenesisState;
            };
            SigningInfo: {
                encode(message: _575.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _575.SigningInfo;
                fromJSON(object: any): _575.SigningInfo;
                toJSON(message: _575.SigningInfo): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _575.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _575.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _575.ValidatorMissedBlocks;
                fromJSON(object: any): _575.ValidatorMissedBlocks;
                toJSON(message: _575.ValidatorMissedBlocks): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _575.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _575.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _575.MissedBlock;
                fromJSON(object: any): _575.MissedBlock;
                toJSON(message: _575.MissedBlock): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _575.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgCreateValidator: {
                encode(message: _591.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.MsgCreateValidator;
                fromJSON(object: any): _591.MsgCreateValidator;
                toJSON(message: _591.MsgCreateValidator): unknown;
                fromPartial<I extends unknown>(object: I): _591.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _591.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.MsgCreateValidatorResponse;
                fromJSON(_: any): _591.MsgCreateValidatorResponse;
                toJSON(_: _591.MsgCreateValidatorResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _591.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _591.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.MsgEditValidator;
                fromJSON(object: any): _591.MsgEditValidator;
                toJSON(message: _591.MsgEditValidator): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _591.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _591.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.MsgEditValidatorResponse;
                fromJSON(_: any): _591.MsgEditValidatorResponse;
                toJSON(_: _591.MsgEditValidatorResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _591.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _591.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.MsgDelegate;
                fromJSON(object: any): _591.MsgDelegate;
                toJSON(message: _591.MsgDelegate): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _591.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _591.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.MsgDelegateResponse;
                fromJSON(_: any): _591.MsgDelegateResponse;
                toJSON(_: _591.MsgDelegateResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _591.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _591.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.MsgBeginRedelegate;
                fromJSON(object: any): _591.MsgBeginRedelegate;
                toJSON(message: _591.MsgBeginRedelegate): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _591.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _591.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.MsgBeginRedelegateResponse;
                fromJSON(object: any): _591.MsgBeginRedelegateResponse;
                toJSON(message: _591.MsgBeginRedelegateResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _591.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _591.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.MsgUndelegate;
                fromJSON(object: any): _591.MsgUndelegate;
                toJSON(message: _591.MsgUndelegate): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _591.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _591.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.MsgUndelegateResponse;
                fromJSON(object: any): _591.MsgUndelegateResponse;
                toJSON(message: _591.MsgUndelegateResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _591.MsgUndelegateResponse;
            };
            registry: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    encode(message: _591.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.MsgCreateValidator;
                    fromJSON(object: any): _591.MsgCreateValidator;
                    toJSON(message: _591.MsgCreateValidator): unknown;
                    fromPartial<I extends unknown>(object: I): _591.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    encode(message: _591.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.MsgEditValidator;
                    fromJSON(object: any): _591.MsgEditValidator;
                    toJSON(message: _591.MsgEditValidator): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _591.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    encode(message: _591.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.MsgDelegate;
                    fromJSON(object: any): _591.MsgDelegate;
                    toJSON(message: _591.MsgDelegate): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _591.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    encode(message: _591.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.MsgBeginRedelegate;
                    fromJSON(object: any): _591.MsgBeginRedelegate;
                    toJSON(message: _591.MsgBeginRedelegate): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _591.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    encode(message: _591.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.MsgUndelegate;
                    fromJSON(object: any): _591.MsgUndelegate;
                    toJSON(message: _591.MsgUndelegate): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _591.MsgUndelegate;
                };
            };
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _591.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _591.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _591.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _591.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _591.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _591.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _591.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _591.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _591.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _591.MsgUndelegate;
                };
            };
            encoded: {
                createValidator(value: _591.MsgCreateValidator): {
                    type_url: string;
                    value: Uint8Array;
                };
                editValidator(value: _591.MsgEditValidator): {
                    type_url: string;
                    value: Uint8Array;
                };
                delegate(value: _591.MsgDelegate): {
                    type_url: string;
                    value: Uint8Array;
                };
                beginRedelegate(value: _591.MsgBeginRedelegate): {
                    type_url: string;
                    value: Uint8Array;
                };
                undelegate(value: _591.MsgUndelegate): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                createValidator(value: any): {
                    typeUrl: string;
                    value: _591.MsgCreateValidator;
                };
                editValidator(value: any): {
                    typeUrl: string;
                    value: _591.MsgEditValidator;
                };
                delegate(value: any): {
                    typeUrl: string;
                    value: _591.MsgDelegate;
                };
                beginRedelegate(value: any): {
                    typeUrl: string;
                    value: _591.MsgBeginRedelegate;
                };
                undelegate(value: any): {
                    typeUrl: string;
                    value: _591.MsgUndelegate;
                };
            };
            toJSON: {
                createValidator(value: _591.MsgCreateValidator): {
                    typeUrl: string;
                    value: unknown;
                };
                editValidator(value: _591.MsgEditValidator): {
                    typeUrl: string;
                    value: unknown;
                };
                delegate(value: _591.MsgDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                beginRedelegate(value: _591.MsgBeginRedelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                undelegate(value: _591.MsgUndelegate): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                createValidator(value: _591.MsgCreateValidator): {
                    typeUrl: string;
                    value: _591.MsgCreateValidator;
                };
                editValidator(value: _591.MsgEditValidator): {
                    typeUrl: string;
                    value: _591.MsgEditValidator;
                };
                delegate(value: _591.MsgDelegate): {
                    typeUrl: string;
                    value: _591.MsgDelegate;
                };
                beginRedelegate(value: _591.MsgBeginRedelegate): {
                    typeUrl: string;
                    value: _591.MsgBeginRedelegate;
                };
                undelegate(value: _591.MsgUndelegate): {
                    typeUrl: string;
                    value: _591.MsgUndelegate;
                };
            };
            messages: {
                createValidator(value: _591.MsgCreateValidator): {
                    typeUrl: string;
                    value: _591.MsgCreateValidator;
                };
                editValidator(value: _591.MsgEditValidator): {
                    typeUrl: string;
                    value: _591.MsgEditValidator;
                };
                delegate(value: _591.MsgDelegate): {
                    typeUrl: string;
                    value: _591.MsgDelegate;
                };
                beginRedelegate(value: _591.MsgBeginRedelegate): {
                    typeUrl: string;
                    value: _591.MsgBeginRedelegate;
                };
                undelegate(value: _591.MsgUndelegate): {
                    typeUrl: string;
                    value: _591.MsgUndelegate;
                };
            };
            bondStatusFromJSON(object: any): _590.BondStatus;
            bondStatusToJSON(object: _590.BondStatus): string;
            BondStatus: typeof _590.BondStatus;
            HistoricalInfo: {
                encode(message: _590.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.HistoricalInfo;
                fromJSON(object: any): _590.HistoricalInfo;
                toJSON(message: _590.HistoricalInfo): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _590.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _590.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.CommissionRates;
                fromJSON(object: any): _590.CommissionRates;
                toJSON(message: _590.CommissionRates): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _590.CommissionRates;
            };
            Commission: {
                encode(message: _590.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.Commission;
                fromJSON(object: any): _590.Commission;
                toJSON(message: _590.Commission): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _590.Commission;
            };
            Description: {
                encode(message: _590.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.Description;
                fromJSON(object: any): _590.Description;
                toJSON(message: _590.Description): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _590.Description;
            };
            Validator: {
                encode(message: _590.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.Validator;
                fromJSON(object: any): _590.Validator;
                toJSON(message: _590.Validator): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _590.Validator;
            };
            ValAddresses: {
                encode(message: _590.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.ValAddresses;
                fromJSON(object: any): _590.ValAddresses;
                toJSON(message: _590.ValAddresses): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _590.ValAddresses;
            };
            DVPair: {
                encode(message: _590.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.DVPair;
                fromJSON(object: any): _590.DVPair;
                toJSON(message: _590.DVPair): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _590.DVPair;
            };
            DVPairs: {
                encode(message: _590.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.DVPairs;
                fromJSON(object: any): _590.DVPairs;
                toJSON(message: _590.DVPairs): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _590.DVPairs;
            };
            DVVTriplet: {
                encode(message: _590.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.DVVTriplet;
                fromJSON(object: any): _590.DVVTriplet;
                toJSON(message: _590.DVVTriplet): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _590.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _590.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.DVVTriplets;
                fromJSON(object: any): _590.DVVTriplets;
                toJSON(message: _590.DVVTriplets): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _590.DVVTriplets;
            };
            Delegation: {
                encode(message: _590.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.Delegation;
                fromJSON(object: any): _590.Delegation;
                toJSON(message: _590.Delegation): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _590.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _590.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.UnbondingDelegation;
                fromJSON(object: any): _590.UnbondingDelegation;
                toJSON(message: _590.UnbondingDelegation): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _590.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _590.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.UnbondingDelegationEntry;
                fromJSON(object: any): _590.UnbondingDelegationEntry;
                toJSON(message: _590.UnbondingDelegationEntry): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _590.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _590.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.RedelegationEntry;
                fromJSON(object: any): _590.RedelegationEntry;
                toJSON(message: _590.RedelegationEntry): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _590.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _590.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.Redelegation;
                fromJSON(object: any): _590.Redelegation;
                toJSON(message: _590.Redelegation): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _590.Redelegation;
            };
            Params: {
                encode(message: _590.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.Params;
                fromJSON(object: any): _590.Params;
                toJSON(message: _590.Params): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _590.Params;
            };
            DelegationResponse: {
                encode(message: _590.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.DelegationResponse;
                fromJSON(object: any): _590.DelegationResponse;
                toJSON(message: _590.DelegationResponse): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _590.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _590.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.RedelegationEntryResponse;
                fromJSON(object: any): _590.RedelegationEntryResponse;
                toJSON(message: _590.RedelegationEntryResponse): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _590.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _590.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.RedelegationResponse;
                fromJSON(object: any): _590.RedelegationResponse;
                toJSON(message: _590.RedelegationResponse): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _590.RedelegationResponse;
            };
            Pool: {
                encode(message: _590.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.Pool;
                fromJSON(object: any): _590.Pool;
                toJSON(message: _590.Pool): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _590.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _589.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryValidatorsRequest;
                fromJSON(object: any): _589.QueryValidatorsRequest;
                toJSON(message: _589.QueryValidatorsRequest): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _589.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _589.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryValidatorsResponse;
                fromJSON(object: any): _589.QueryValidatorsResponse;
                toJSON(message: _589.QueryValidatorsResponse): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _589.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _589.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryValidatorRequest;
                fromJSON(object: any): _589.QueryValidatorRequest;
                toJSON(message: _589.QueryValidatorRequest): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _589.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _589.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryValidatorResponse;
                fromJSON(object: any): _589.QueryValidatorResponse;
                toJSON(message: _589.QueryValidatorResponse): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _589.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _589.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _589.QueryValidatorDelegationsRequest;
                toJSON(message: _589.QueryValidatorDelegationsRequest): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _589.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _589.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _589.QueryValidatorDelegationsResponse;
                toJSON(message: _589.QueryValidatorDelegationsResponse): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _589.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _589.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _589.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _589.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial<I_36 extends unknown>(object: I_36): _589.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _589.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _589.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _589.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _589.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _589.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryDelegationRequest;
                fromJSON(object: any): _589.QueryDelegationRequest;
                toJSON(message: _589.QueryDelegationRequest): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _589.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _589.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryDelegationResponse;
                fromJSON(object: any): _589.QueryDelegationResponse;
                toJSON(message: _589.QueryDelegationResponse): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _589.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _589.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _589.QueryUnbondingDelegationRequest;
                toJSON(message: _589.QueryUnbondingDelegationRequest): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _589.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _589.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _589.QueryUnbondingDelegationResponse;
                toJSON(message: _589.QueryUnbondingDelegationResponse): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _589.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _589.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _589.QueryDelegatorDelegationsRequest;
                toJSON(message: _589.QueryDelegatorDelegationsRequest): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _589.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _589.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _589.QueryDelegatorDelegationsResponse;
                toJSON(message: _589.QueryDelegatorDelegationsResponse): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _589.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _589.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _589.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _589.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _589.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _589.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _589.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _589.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _589.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _589.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryRedelegationsRequest;
                fromJSON(object: any): _589.QueryRedelegationsRequest;
                toJSON(message: _589.QueryRedelegationsRequest): unknown;
                fromPartial<I_46 extends unknown>(object: I_46): _589.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _589.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryRedelegationsResponse;
                fromJSON(object: any): _589.QueryRedelegationsResponse;
                toJSON(message: _589.QueryRedelegationsResponse): unknown;
                fromPartial<I_47 extends unknown>(object: I_47): _589.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _589.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _589.QueryDelegatorValidatorsRequest;
                toJSON(message: _589.QueryDelegatorValidatorsRequest): unknown;
                fromPartial<I_48 extends unknown>(object: I_48): _589.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _589.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _589.QueryDelegatorValidatorsResponse;
                toJSON(message: _589.QueryDelegatorValidatorsResponse): unknown;
                fromPartial<I_49 extends unknown>(object: I_49): _589.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _589.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _589.QueryDelegatorValidatorRequest;
                toJSON(message: _589.QueryDelegatorValidatorRequest): unknown;
                fromPartial<I_50 extends unknown>(object: I_50): _589.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _589.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _589.QueryDelegatorValidatorResponse;
                toJSON(message: _589.QueryDelegatorValidatorResponse): unknown;
                fromPartial<I_51 extends unknown>(object: I_51): _589.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _589.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryHistoricalInfoRequest;
                fromJSON(object: any): _589.QueryHistoricalInfoRequest;
                toJSON(message: _589.QueryHistoricalInfoRequest): unknown;
                fromPartial<I_52 extends unknown>(object: I_52): _589.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _589.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryHistoricalInfoResponse;
                fromJSON(object: any): _589.QueryHistoricalInfoResponse;
                toJSON(message: _589.QueryHistoricalInfoResponse): unknown;
                fromPartial<I_53 extends unknown>(object: I_53): _589.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _589.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryPoolRequest;
                fromJSON(_: any): _589.QueryPoolRequest;
                toJSON(_: _589.QueryPoolRequest): unknown;
                fromPartial<I_54 extends unknown>(_: I_54): _589.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _589.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryPoolResponse;
                fromJSON(object: any): _589.QueryPoolResponse;
                toJSON(message: _589.QueryPoolResponse): unknown;
                fromPartial<I_55 extends unknown>(object: I_55): _589.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _589.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryParamsRequest;
                fromJSON(_: any): _589.QueryParamsRequest;
                toJSON(_: _589.QueryParamsRequest): unknown;
                fromPartial<I_56 extends unknown>(_: I_56): _589.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _589.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryParamsResponse;
                fromJSON(object: any): _589.QueryParamsResponse;
                toJSON(message: _589.QueryParamsResponse): unknown;
                fromPartial<I_57 extends unknown>(object: I_57): _589.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _588.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.GenesisState;
                fromJSON(object: any): _588.GenesisState;
                toJSON(message: _588.GenesisState): unknown;
                fromPartial<I_58 extends unknown>(object: I_58): _588.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _588.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.LastValidatorPower;
                fromJSON(object: any): _588.LastValidatorPower;
                toJSON(message: _588.LastValidatorPower): unknown;
                fromPartial<I_59 extends unknown>(object: I_59): _588.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _587.AuthorizationType;
            authorizationTypeToJSON(object: _587.AuthorizationType): string;
            AuthorizationType: typeof _587.AuthorizationType;
            StakeAuthorization: {
                encode(message: _587.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _587.StakeAuthorization;
                fromJSON(object: any): _587.StakeAuthorization;
                toJSON(message: _587.StakeAuthorization): unknown;
                fromPartial<I_60 extends unknown>(object: I_60): _587.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _587.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _587.StakeAuthorization_Validators;
                fromJSON(object: any): _587.StakeAuthorization_Validators;
                toJSON(message: _587.StakeAuthorization_Validators): unknown;
                fromPartial<I_61 extends unknown>(object: I_61): _587.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _600.SignMode;
                signModeToJSON(object: _600.SignMode): string;
                SignMode: typeof _600.SignMode;
                SignatureDescriptors: {
                    encode(message: _600.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.SignatureDescriptors;
                    fromJSON(object: any): _600.SignatureDescriptors;
                    toJSON(message: _600.SignatureDescriptors): unknown;
                    fromPartial<I extends unknown>(object: I): _600.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _600.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.SignatureDescriptor;
                    fromJSON(object: any): _600.SignatureDescriptor;
                    toJSON(message: _600.SignatureDescriptor): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _600.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _600.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.SignatureDescriptor_Data;
                    fromJSON(object: any): _600.SignatureDescriptor_Data;
                    toJSON(message: _600.SignatureDescriptor_Data): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _600.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _600.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _600.SignatureDescriptor_Data_Single;
                    toJSON(message: _600.SignatureDescriptor_Data_Single): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _600.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _600.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _600.SignatureDescriptor_Data_Multi;
                    toJSON(message: _600.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _600.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            Tx: {
                encode(message: _602.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.Tx;
                fromJSON(object: any): _602.Tx;
                toJSON(message: _602.Tx): unknown;
                fromPartial<I extends unknown>(object: I): _602.Tx;
            };
            TxRaw: {
                encode(message: _602.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.TxRaw;
                fromJSON(object: any): _602.TxRaw;
                toJSON(message: _602.TxRaw): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _602.TxRaw;
            };
            SignDoc: {
                encode(message: _602.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.SignDoc;
                fromJSON(object: any): _602.SignDoc;
                toJSON(message: _602.SignDoc): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _602.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _602.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.SignDocDirectAux;
                fromJSON(object: any): _602.SignDocDirectAux;
                toJSON(message: _602.SignDocDirectAux): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _602.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _602.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.TxBody;
                fromJSON(object: any): _602.TxBody;
                toJSON(message: _602.TxBody): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _602.TxBody;
            };
            AuthInfo: {
                encode(message: _602.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.AuthInfo;
                fromJSON(object: any): _602.AuthInfo;
                toJSON(message: _602.AuthInfo): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _602.AuthInfo;
            };
            SignerInfo: {
                encode(message: _602.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.SignerInfo;
                fromJSON(object: any): _602.SignerInfo;
                toJSON(message: _602.SignerInfo): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _602.SignerInfo;
            };
            ModeInfo: {
                encode(message: _602.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.ModeInfo;
                fromJSON(object: any): _602.ModeInfo;
                toJSON(message: _602.ModeInfo): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _602.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _602.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.ModeInfo_Single;
                fromJSON(object: any): _602.ModeInfo_Single;
                toJSON(message: _602.ModeInfo_Single): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _602.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _602.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.ModeInfo_Multi;
                fromJSON(object: any): _602.ModeInfo_Multi;
                toJSON(message: _602.ModeInfo_Multi): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _602.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _602.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.Fee;
                fromJSON(object: any): _602.Fee;
                toJSON(message: _602.Fee): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _602.Fee;
            };
            Tip: {
                encode(message: _602.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.Tip;
                fromJSON(object: any): _602.Tip;
                toJSON(message: _602.Tip): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _602.Tip;
            };
            AuxSignerData: {
                encode(message: _602.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.AuxSignerData;
                fromJSON(object: any): _602.AuxSignerData;
                toJSON(message: _602.AuxSignerData): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _602.AuxSignerData;
            };
            orderByFromJSON(object: any): _601.OrderBy;
            orderByToJSON(object: _601.OrderBy): string;
            broadcastModeFromJSON(object: any): _601.BroadcastMode;
            broadcastModeToJSON(object: _601.BroadcastMode): string;
            OrderBy: typeof _601.OrderBy;
            BroadcastMode: typeof _601.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _601.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _601.GetTxsEventRequest;
                fromJSON(object: any): _601.GetTxsEventRequest;
                toJSON(message: _601.GetTxsEventRequest): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _601.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _601.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _601.GetTxsEventResponse;
                fromJSON(object: any): _601.GetTxsEventResponse;
                toJSON(message: _601.GetTxsEventResponse): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _601.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _601.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _601.BroadcastTxRequest;
                fromJSON(object: any): _601.BroadcastTxRequest;
                toJSON(message: _601.BroadcastTxRequest): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _601.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _601.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _601.BroadcastTxResponse;
                fromJSON(object: any): _601.BroadcastTxResponse;
                toJSON(message: _601.BroadcastTxResponse): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _601.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _601.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _601.SimulateRequest;
                fromJSON(object: any): _601.SimulateRequest;
                toJSON(message: _601.SimulateRequest): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _601.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _601.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _601.SimulateResponse;
                fromJSON(object: any): _601.SimulateResponse;
                toJSON(message: _601.SimulateResponse): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _601.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _601.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _601.GetTxRequest;
                fromJSON(object: any): _601.GetTxRequest;
                toJSON(message: _601.GetTxRequest): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _601.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _601.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _601.GetTxResponse;
                fromJSON(object: any): _601.GetTxResponse;
                toJSON(message: _601.GetTxResponse): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _601.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _601.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _601.GetBlockWithTxsRequest;
                fromJSON(object: any): _601.GetBlockWithTxsRequest;
                toJSON(message: _601.GetBlockWithTxsRequest): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _601.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _601.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _601.GetBlockWithTxsResponse;
                fromJSON(object: any): _601.GetBlockWithTxsResponse;
                toJSON(message: _601.GetBlockWithTxsResponse): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _601.GetBlockWithTxsResponse;
            };
            ServiceClientImpl: typeof _601.ServiceClientImpl;
        };
    }
    namespace upgrade {
        const v1beta1: {
            Plan: {
                encode(message: _613.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _613.Plan;
                fromJSON(object: any): _613.Plan;
                toJSON(message: _613.Plan): unknown;
                fromPartial<I extends unknown>(object: I): _613.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _613.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _613.SoftwareUpgradeProposal;
                fromJSON(object: any): _613.SoftwareUpgradeProposal;
                toJSON(message: _613.SoftwareUpgradeProposal): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _613.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _613.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _613.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _613.CancelSoftwareUpgradeProposal;
                toJSON(message: _613.CancelSoftwareUpgradeProposal): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _613.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _613.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _613.ModuleVersion;
                fromJSON(object: any): _613.ModuleVersion;
                toJSON(message: _613.ModuleVersion): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _613.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _604.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _604.MsgSoftwareUpgrade;
                fromJSON(object: any): _604.MsgSoftwareUpgrade;
                toJSON(message: _604.MsgSoftwareUpgrade): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _604.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _604.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _604.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _604.MsgSoftwareUpgradeResponse;
                toJSON(_: _604.MsgSoftwareUpgradeResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _604.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _604.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _604.MsgCancelUpgrade;
                fromJSON(object: any): _604.MsgCancelUpgrade;
                toJSON(message: _604.MsgCancelUpgrade): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _604.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _604.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _604.MsgCancelUpgradeResponse;
                fromJSON(_: any): _604.MsgCancelUpgradeResponse;
                toJSON(_: _604.MsgCancelUpgradeResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _604.MsgCancelUpgradeResponse;
            };
            registry: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    encode(message: _604.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _604.MsgSoftwareUpgrade;
                    fromJSON(object: any): _604.MsgSoftwareUpgrade;
                    toJSON(message: _604.MsgSoftwareUpgrade): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _604.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    encode(message: _604.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _604.MsgCancelUpgrade;
                    fromJSON(object: any): _604.MsgCancelUpgrade;
                    toJSON(message: _604.MsgCancelUpgrade): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _604.MsgCancelUpgrade;
                };
            };
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _604.MsgSoftwareUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: Date;
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: Date;
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _604.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _604.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _604.MsgCancelUpgrade;
                };
            };
            encoded: {
                softwareUpgrade(value: _604.MsgSoftwareUpgrade): {
                    type_url: string;
                    value: Uint8Array;
                };
                cancelUpgrade(value: _604.MsgCancelUpgrade): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                softwareUpgrade(value: any): {
                    typeUrl: string;
                    value: _604.MsgSoftwareUpgrade;
                };
                cancelUpgrade(value: any): {
                    typeUrl: string;
                    value: _604.MsgCancelUpgrade;
                };
            };
            toJSON: {
                softwareUpgrade(value: _604.MsgSoftwareUpgrade): {
                    typeUrl: string;
                    value: unknown;
                };
                cancelUpgrade(value: _604.MsgCancelUpgrade): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                softwareUpgrade(value: _604.MsgSoftwareUpgrade): {
                    typeUrl: string;
                    value: _604.MsgSoftwareUpgrade;
                };
                cancelUpgrade(value: _604.MsgCancelUpgrade): {
                    typeUrl: string;
                    value: _604.MsgCancelUpgrade;
                };
            };
            messages: {
                softwareUpgrade(value: _604.MsgSoftwareUpgrade): {
                    typeUrl: string;
                    value: _604.MsgSoftwareUpgrade;
                };
                cancelUpgrade(value: _604.MsgCancelUpgrade): {
                    typeUrl: string;
                    value: _604.MsgCancelUpgrade;
                };
            };
            QueryCurrentPlanRequest: {
                encode(_: _603.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _603.QueryCurrentPlanRequest;
                fromJSON(_: any): _603.QueryCurrentPlanRequest;
                toJSON(_: _603.QueryCurrentPlanRequest): unknown;
                fromPartial<I_8 extends unknown>(_: I_8): _603.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _603.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _603.QueryCurrentPlanResponse;
                fromJSON(object: any): _603.QueryCurrentPlanResponse;
                toJSON(message: _603.QueryCurrentPlanResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _603.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _603.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _603.QueryAppliedPlanRequest;
                fromJSON(object: any): _603.QueryAppliedPlanRequest;
                toJSON(message: _603.QueryAppliedPlanRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _603.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _603.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _603.QueryAppliedPlanResponse;
                fromJSON(object: any): _603.QueryAppliedPlanResponse;
                toJSON(message: _603.QueryAppliedPlanResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _603.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _603.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _603.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _603.QueryUpgradedConsensusStateRequest;
                toJSON(message: _603.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _603.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _603.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _603.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _603.QueryUpgradedConsensusStateResponse;
                toJSON(message: _603.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _603.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _603.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _603.QueryModuleVersionsRequest;
                fromJSON(object: any): _603.QueryModuleVersionsRequest;
                toJSON(message: _603.QueryModuleVersionsRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _603.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _603.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _603.QueryModuleVersionsResponse;
                fromJSON(object: any): _603.QueryModuleVersionsResponse;
                toJSON(message: _603.QueryModuleVersionsResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _603.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _603.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _603.QueryAuthorityRequest;
                fromJSON(_: any): _603.QueryAuthorityRequest;
                toJSON(_: _603.QueryAuthorityRequest): unknown;
                fromPartial<I_16 extends unknown>(_: I_16): _603.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _603.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _603.QueryAuthorityResponse;
                fromJSON(object: any): _603.QueryAuthorityResponse;
                toJSON(message: _603.QueryAuthorityResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _603.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            BaseVestingAccount: {
                encode(message: _623.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _623.BaseVestingAccount;
                fromJSON(object: any): _623.BaseVestingAccount;
                toJSON(message: _623.BaseVestingAccount): unknown;
                fromPartial<I extends unknown>(object: I): _623.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _623.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _623.ContinuousVestingAccount;
                fromJSON(object: any): _623.ContinuousVestingAccount;
                toJSON(message: _623.ContinuousVestingAccount): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _623.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _623.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _623.DelayedVestingAccount;
                fromJSON(object: any): _623.DelayedVestingAccount;
                toJSON(message: _623.DelayedVestingAccount): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _623.DelayedVestingAccount;
            };
            Period: {
                encode(message: _623.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _623.Period;
                fromJSON(object: any): _623.Period;
                toJSON(message: _623.Period): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _623.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _623.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _623.PeriodicVestingAccount;
                fromJSON(object: any): _623.PeriodicVestingAccount;
                toJSON(message: _623.PeriodicVestingAccount): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _623.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _623.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _623.PermanentLockedAccount;
                fromJSON(object: any): _623.PermanentLockedAccount;
                toJSON(message: _623.PermanentLockedAccount): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _623.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _614.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _614.MsgCreateVestingAccount;
                fromJSON(object: any): _614.MsgCreateVestingAccount;
                toJSON(message: _614.MsgCreateVestingAccount): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _614.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _614.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _614.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _614.MsgCreateVestingAccountResponse;
                toJSON(_: _614.MsgCreateVestingAccountResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _614.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _614.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _614.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _614.MsgCreatePermanentLockedAccount;
                toJSON(message: _614.MsgCreatePermanentLockedAccount): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _614.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _614.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _614.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _614.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _614.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial<I_9 extends unknown>(_: I_9): _614.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _614.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _614.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _614.MsgCreatePeriodicVestingAccount;
                toJSON(message: _614.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _614.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _614.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _614.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _614.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _614.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial<I_11 extends unknown>(_: I_11): _614.MsgCreatePeriodicVestingAccountResponse;
            };
            registry: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    encode(message: _614.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _614.MsgCreateVestingAccount;
                    fromJSON(object: any): _614.MsgCreateVestingAccount;
                    toJSON(message: _614.MsgCreateVestingAccount): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _614.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    encode(message: _614.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _614.MsgCreatePermanentLockedAccount;
                    fromJSON(object: any): _614.MsgCreatePermanentLockedAccount;
                    toJSON(message: _614.MsgCreatePermanentLockedAccount): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _614.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    encode(message: _614.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _614.MsgCreatePeriodicVestingAccount;
                    fromJSON(object: any): _614.MsgCreatePeriodicVestingAccount;
                    toJSON(message: _614.MsgCreatePeriodicVestingAccount): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _614.MsgCreatePeriodicVestingAccount;
                };
            };
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _614.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _614.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _614.MsgCreatePermanentLockedAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _614.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _614.MsgCreatePeriodicVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, start_time, vesting_periods }: {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _614.MsgCreatePeriodicVestingAccount;
                };
            };
            encoded: {
                createVestingAccount(value: _614.MsgCreateVestingAccount): {
                    type_url: string;
                    value: Uint8Array;
                };
                createPermanentLockedAccount(value: _614.MsgCreatePermanentLockedAccount): {
                    type_url: string;
                    value: Uint8Array;
                };
                createPeriodicVestingAccount(value: _614.MsgCreatePeriodicVestingAccount): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                createVestingAccount(value: any): {
                    typeUrl: string;
                    value: _614.MsgCreateVestingAccount;
                };
                createPermanentLockedAccount(value: any): {
                    typeUrl: string;
                    value: _614.MsgCreatePermanentLockedAccount;
                };
                createPeriodicVestingAccount(value: any): {
                    typeUrl: string;
                    value: _614.MsgCreatePeriodicVestingAccount;
                };
            };
            toJSON: {
                createVestingAccount(value: _614.MsgCreateVestingAccount): {
                    typeUrl: string;
                    value: unknown;
                };
                createPermanentLockedAccount(value: _614.MsgCreatePermanentLockedAccount): {
                    typeUrl: string;
                    value: unknown;
                };
                createPeriodicVestingAccount(value: _614.MsgCreatePeriodicVestingAccount): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                createVestingAccount(value: _614.MsgCreateVestingAccount): {
                    typeUrl: string;
                    value: _614.MsgCreateVestingAccount;
                };
                createPermanentLockedAccount(value: _614.MsgCreatePermanentLockedAccount): {
                    typeUrl: string;
                    value: _614.MsgCreatePermanentLockedAccount;
                };
                createPeriodicVestingAccount(value: _614.MsgCreatePeriodicVestingAccount): {
                    typeUrl: string;
                    value: _614.MsgCreatePeriodicVestingAccount;
                };
            };
            messages: {
                createVestingAccount(value: _614.MsgCreateVestingAccount): {
                    typeUrl: string;
                    value: _614.MsgCreateVestingAccount;
                };
                createPermanentLockedAccount(value: _614.MsgCreatePermanentLockedAccount): {
                    typeUrl: string;
                    value: _614.MsgCreatePermanentLockedAccount;
                };
                createPeriodicVestingAccount(value: _614.MsgCreatePeriodicVestingAccount): {
                    typeUrl: string;
                    value: _614.MsgCreatePeriodicVestingAccount;
                };
            };
        };
    }
}
