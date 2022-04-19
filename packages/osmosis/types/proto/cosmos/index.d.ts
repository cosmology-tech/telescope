import * as _610 from "./app/v1alpha1/config";
import * as _612 from "./app/v1alpha1/module";
import * as _614 from "./app/v1alpha1/query";
import * as _616 from "./auth/v1beta1/auth";
import * as _618 from "./auth/v1beta1/genesis";
import * as _620 from "./auth/v1beta1/query";
import * as _622 from "./authz/v1beta1/authz";
import * as _624 from "./authz/v1beta1/event";
import * as _626 from "./authz/v1beta1/genesis";
import * as _628 from "./authz/v1beta1/query";
import * as _630 from "./authz/v1beta1/tx";
import * as _638 from "./bank/v1beta1/authz";
import * as _640 from "./bank/v1beta1/bank";
import * as _642 from "./bank/v1beta1/genesis";
import * as _644 from "./bank/v1beta1/query";
import * as _646 from "./bank/v1beta1/tx";
import * as _654 from "./base/abci/v1beta1/abci";
import * as _656 from "./base/kv/v1beta1/kv";
import * as _658 from "./base/query/v1beta1/pagination";
import * as _660 from "./base/reflection/v1beta1/reflection";
import * as _662 from "./base/reflection/v2alpha1/reflection";
import * as _664 from "./base/snapshots/v1beta1/snapshot";
import * as _666 from "./base/store/v1beta1/commit_info";
import * as _668 from "./base/store/v1beta1/listening";
import * as _670 from "./base/tendermint/v1beta1/query";
import * as _672 from "./base/v1beta1/coin";
import * as _674 from "./capability/v1beta1/capability";
import * as _676 from "./capability/v1beta1/genesis";
import * as _678 from "./crisis/v1beta1/genesis";
import * as _680 from "./crisis/v1beta1/tx";
import * as _688 from "./crypto/ed25519/keys";
import * as _690 from "./crypto/hd/v1/hd";
import * as _692 from "./crypto/keyring/v1/record";
import * as _694 from "./crypto/multisig/keys";
import * as _696 from "./crypto/secp256k1/keys";
import * as _698 from "./crypto/secp256r1/keys";
import * as _700 from "./distribution/v1beta1/distribution";
import * as _702 from "./distribution/v1beta1/genesis";
import * as _704 from "./distribution/v1beta1/query";
import * as _706 from "./distribution/v1beta1/tx";
import * as _714 from "./evidence/v1beta1/evidence";
import * as _716 from "./evidence/v1beta1/genesis";
import * as _718 from "./evidence/v1beta1/query";
import * as _720 from "./evidence/v1beta1/tx";
import * as _728 from "./feegrant/v1beta1/feegrant";
import * as _730 from "./feegrant/v1beta1/genesis";
import * as _732 from "./feegrant/v1beta1/query";
import * as _734 from "./feegrant/v1beta1/tx";
import * as _742 from "./genutil/v1beta1/genesis";
import * as _744 from "./gov/v1/genesis";
import * as _746 from "./gov/v1/gov";
import * as _748 from "./gov/v1/query";
import * as _750 from "./gov/v1/tx";
import * as _758 from "./gov/v1beta1/genesis";
import * as _760 from "./gov/v1beta1/gov";
import * as _762 from "./gov/v1beta1/query";
import * as _764 from "./gov/v1beta1/tx";
import * as _772 from "./group/v1/events";
import * as _774 from "./group/v1/genesis";
import * as _776 from "./group/v1/query";
import * as _778 from "./group/v1/tx";
import * as _786 from "./group/v1/types";
import * as _788 from "./mint/v1beta1/genesis";
import * as _790 from "./mint/v1beta1/mint";
import * as _792 from "./mint/v1beta1/query";
import * as _796 from "./nft/v1beta1/event";
import * as _798 from "./nft/v1beta1/genesis";
import * as _800 from "./nft/v1beta1/nft";
import * as _802 from "./nft/v1beta1/query";
import * as _804 from "./nft/v1beta1/tx";
import * as _812 from "./orm/v1/orm";
import * as _814 from "./orm/v1alpha1/schema";
import * as _816 from "./params/v1beta1/params";
import * as _818 from "./params/v1beta1/query";
import * as _820 from "./slashing/v1beta1/genesis";
import * as _822 from "./slashing/v1beta1/query";
import * as _824 from "./slashing/v1beta1/slashing";
import * as _826 from "./slashing/v1beta1/tx";
import * as _834 from "./staking/v1beta1/authz";
import * as _836 from "./staking/v1beta1/genesis";
import * as _838 from "./staking/v1beta1/query";
import * as _840 from "./staking/v1beta1/staking";
import * as _842 from "./staking/v1beta1/tx";
import * as _850 from "./tx/signing/v1beta1/signing";
import * as _852 from "./tx/v1beta1/service";
import * as _854 from "./tx/v1beta1/tx";
import * as _856 from "./upgrade/v1beta1/query";
import * as _858 from "./upgrade/v1beta1/tx";
import * as _866 from "./upgrade/v1beta1/upgrade";
import * as _868 from "./vesting/v1beta1/tx";
import * as _876 from "./vesting/v1beta1/vesting";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryConfigRequest: {
                encode(_: _614.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _614.QueryConfigRequest;
                fromJSON(_: any): _614.QueryConfigRequest;
                toJSON(_: _614.QueryConfigRequest): unknown;
                fromPartial<I extends unknown>(_: I): _614.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _614.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _614.QueryConfigResponse;
                fromJSON(object: any): _614.QueryConfigResponse;
                toJSON(message: _614.QueryConfigResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _614.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _612.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _612.ModuleDescriptor;
                fromJSON(object: any): _612.ModuleDescriptor;
                toJSON(message: _612.ModuleDescriptor): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _612.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _612.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _612.PackageReference;
                fromJSON(object: any): _612.PackageReference;
                toJSON(message: _612.PackageReference): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _612.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _612.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _612.MigrateFromInfo;
                fromJSON(object: any): _612.MigrateFromInfo;
                toJSON(message: _612.MigrateFromInfo): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _612.MigrateFromInfo;
            };
            Config: {
                encode(message: _610.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _610.Config;
                fromJSON(object: any): _610.Config;
                toJSON(message: _610.Config): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _610.Config;
            };
            ModuleConfig: {
                encode(message: _610.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _610.ModuleConfig;
                fromJSON(object: any): _610.ModuleConfig;
                toJSON(message: _610.ModuleConfig): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _610.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryAccountsRequest: {
                encode(message: _620.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _620.QueryAccountsRequest;
                fromJSON(object: any): _620.QueryAccountsRequest;
                toJSON(message: _620.QueryAccountsRequest): unknown;
                fromPartial<I extends unknown>(object: I): _620.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _620.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _620.QueryAccountsResponse;
                fromJSON(object: any): _620.QueryAccountsResponse;
                toJSON(message: _620.QueryAccountsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _620.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _620.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _620.QueryAccountRequest;
                fromJSON(object: any): _620.QueryAccountRequest;
                toJSON(message: _620.QueryAccountRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _620.QueryAccountRequest;
            };
            QueryModuleAccountsRequest: {
                encode(_: _620.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _620.QueryModuleAccountsRequest;
                fromJSON(_: any): _620.QueryModuleAccountsRequest;
                toJSON(_: _620.QueryModuleAccountsRequest): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _620.QueryModuleAccountsRequest;
            };
            QueryParamsResponse: {
                encode(message: _620.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _620.QueryParamsResponse;
                fromJSON(object: any): _620.QueryParamsResponse;
                toJSON(message: _620.QueryParamsResponse): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _620.QueryParamsResponse;
            };
            QueryAccountResponse: {
                encode(message: _620.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _620.QueryAccountResponse;
                fromJSON(object: any): _620.QueryAccountResponse;
                toJSON(message: _620.QueryAccountResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _620.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _620.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _620.QueryParamsRequest;
                fromJSON(_: any): _620.QueryParamsRequest;
                toJSON(_: _620.QueryParamsRequest): unknown;
                fromPartial<I_6 extends unknown>(_: I_6): _620.QueryParamsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _620.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _620.QueryModuleAccountsResponse;
                fromJSON(object: any): _620.QueryModuleAccountsResponse;
                toJSON(message: _620.QueryModuleAccountsResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _620.QueryModuleAccountsResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _620.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _620.Bech32PrefixRequest;
                fromJSON(_: any): _620.Bech32PrefixRequest;
                toJSON(_: _620.Bech32PrefixRequest): unknown;
                fromPartial<I_8 extends unknown>(_: I_8): _620.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _620.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _620.Bech32PrefixResponse;
                fromJSON(object: any): _620.Bech32PrefixResponse;
                toJSON(message: _620.Bech32PrefixResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _620.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _620.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _620.AddressBytesToStringRequest;
                fromJSON(object: any): _620.AddressBytesToStringRequest;
                toJSON(message: _620.AddressBytesToStringRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _620.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _620.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _620.AddressBytesToStringResponse;
                fromJSON(object: any): _620.AddressBytesToStringResponse;
                toJSON(message: _620.AddressBytesToStringResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _620.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _620.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _620.AddressStringToBytesRequest;
                fromJSON(object: any): _620.AddressStringToBytesRequest;
                toJSON(message: _620.AddressStringToBytesRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _620.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _620.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _620.AddressStringToBytesResponse;
                fromJSON(object: any): _620.AddressStringToBytesResponse;
                toJSON(message: _620.AddressStringToBytesResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _620.AddressStringToBytesResponse;
            };
            GenesisState: {
                encode(message: _618.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _618.GenesisState;
                fromJSON(object: any): _618.GenesisState;
                toJSON(message: _618.GenesisState): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _618.GenesisState;
            };
            BaseAccount: {
                encode(message: _616.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.BaseAccount;
                fromJSON(object: any): _616.BaseAccount;
                toJSON(message: _616.BaseAccount): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _616.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _616.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.ModuleAccount;
                fromJSON(object: any): _616.ModuleAccount;
                toJSON(message: _616.ModuleAccount): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _616.ModuleAccount;
            };
            Params: {
                encode(message: _616.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.Params;
                fromJSON(object: any): _616.Params;
                toJSON(message: _616.Params): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _616.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgGrant: {
                encode(message: _630.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgGrant;
                fromJSON(object: any): _630.MsgGrant;
                toJSON(message: _630.MsgGrant): unknown;
                fromPartial<I extends unknown>(object: I): _630.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _630.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgExecResponse;
                fromJSON(object: any): _630.MsgExecResponse;
                toJSON(message: _630.MsgExecResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _630.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _630.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgExec;
                fromJSON(object: any): _630.MsgExec;
                toJSON(message: _630.MsgExec): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _630.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _630.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgGrantResponse;
                fromJSON(_: any): _630.MsgGrantResponse;
                toJSON(_: _630.MsgGrantResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _630.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _630.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgRevoke;
                fromJSON(object: any): _630.MsgRevoke;
                toJSON(message: _630.MsgRevoke): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _630.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _630.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgRevokeResponse;
                fromJSON(_: any): _630.MsgRevokeResponse;
                toJSON(_: _630.MsgRevokeResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _630.MsgRevokeResponse;
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _630.MsgGrant) => {
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
                    }) => _630.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _630.MsgExec) => {
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
                    }) => _630.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _630.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _630.MsgRevoke;
                };
            };
            encoded: {
                grant(value: _630.MsgGrant): {
                    type_url: string;
                    value: Uint8Array;
                };
                exec(value: _630.MsgExec): {
                    type_url: string;
                    value: Uint8Array;
                };
                revoke(value: _630.MsgRevoke): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                grant(value: any): {
                    typeUrl: string;
                    value: _630.MsgGrant;
                };
                exec(value: any): {
                    typeUrl: string;
                    value: _630.MsgExec;
                };
                revoke(value: any): {
                    typeUrl: string;
                    value: _630.MsgRevoke;
                };
            };
            toJSON: {
                grant(value: _630.MsgGrant): {
                    typeUrl: string;
                    value: unknown;
                };
                exec(value: _630.MsgExec): {
                    typeUrl: string;
                    value: unknown;
                };
                revoke(value: _630.MsgRevoke): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                grant(value: _630.MsgGrant): {
                    typeUrl: string;
                    value: _630.MsgGrant;
                };
                exec(value: _630.MsgExec): {
                    typeUrl: string;
                    value: _630.MsgExec;
                };
                revoke(value: _630.MsgRevoke): {
                    typeUrl: string;
                    value: _630.MsgRevoke;
                };
            };
            messages: {
                grant(value: _630.MsgGrant): {
                    typeUrl: string;
                    value: _630.MsgGrant;
                };
                exec(value: _630.MsgExec): {
                    typeUrl: string;
                    value: _630.MsgExec;
                };
                revoke(value: _630.MsgRevoke): {
                    typeUrl: string;
                    value: _630.MsgRevoke;
                };
            };
            QueryGrantsRequest: {
                encode(message: _628.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _628.QueryGrantsRequest;
                fromJSON(object: any): _628.QueryGrantsRequest;
                toJSON(message: _628.QueryGrantsRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _628.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _628.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _628.QueryGrantsResponse;
                fromJSON(object: any): _628.QueryGrantsResponse;
                toJSON(message: _628.QueryGrantsResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _628.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _628.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _628.QueryGranterGrantsRequest;
                fromJSON(object: any): _628.QueryGranterGrantsRequest;
                toJSON(message: _628.QueryGranterGrantsRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _628.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _628.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _628.QueryGranterGrantsResponse;
                fromJSON(object: any): _628.QueryGranterGrantsResponse;
                toJSON(message: _628.QueryGranterGrantsResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _628.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _628.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _628.QueryGranteeGrantsRequest;
                fromJSON(object: any): _628.QueryGranteeGrantsRequest;
                toJSON(message: _628.QueryGranteeGrantsRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _628.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _628.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _628.QueryGranteeGrantsResponse;
                fromJSON(object: any): _628.QueryGranteeGrantsResponse;
                toJSON(message: _628.QueryGranteeGrantsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _628.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _626.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _626.GenesisState;
                fromJSON(object: any): _626.GenesisState;
                toJSON(message: _626.GenesisState): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _626.GenesisState;
            };
            EventGrant: {
                encode(message: _624.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.EventGrant;
                fromJSON(object: any): _624.EventGrant;
                toJSON(message: _624.EventGrant): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _624.EventGrant;
            };
            EventRevoke: {
                encode(message: _624.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.EventRevoke;
                fromJSON(object: any): _624.EventRevoke;
                toJSON(message: _624.EventRevoke): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _624.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _622.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.GenericAuthorization;
                fromJSON(object: any): _622.GenericAuthorization;
                toJSON(message: _622.GenericAuthorization): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _622.GenericAuthorization;
            };
            Grant: {
                encode(message: _622.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.Grant;
                fromJSON(object: any): _622.Grant;
                toJSON(message: _622.Grant): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _622.Grant;
            };
            GrantAuthorization: {
                encode(message: _622.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.GrantAuthorization;
                fromJSON(object: any): _622.GrantAuthorization;
                toJSON(message: _622.GrantAuthorization): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _622.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _622.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.GrantQueueItem;
                fromJSON(object: any): _622.GrantQueueItem;
                toJSON(message: _622.GrantQueueItem): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _622.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgSend: {
                encode(message: _646.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _646.MsgSend;
                fromJSON(object: any): _646.MsgSend;
                toJSON(message: _646.MsgSend): unknown;
                fromPartial<I extends unknown>(object: I): _646.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _646.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _646.MsgSendResponse;
                fromJSON(_: any): _646.MsgSendResponse;
                toJSON(_: _646.MsgSendResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _646.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _646.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _646.MsgMultiSend;
                fromJSON(object: any): _646.MsgMultiSend;
                toJSON(message: _646.MsgMultiSend): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _646.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _646.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _646.MsgMultiSendResponse;
                fromJSON(_: any): _646.MsgMultiSendResponse;
                toJSON(_: _646.MsgMultiSendResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _646.MsgMultiSendResponse;
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _646.MsgSend) => {
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
                    }) => _646.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _646.MsgMultiSend) => {
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
                    }) => _646.MsgMultiSend;
                };
            };
            encoded: {
                send(value: _646.MsgSend): {
                    type_url: string;
                    value: Uint8Array;
                };
                multiSend(value: _646.MsgMultiSend): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                send(value: any): {
                    typeUrl: string;
                    value: _646.MsgSend;
                };
                multiSend(value: any): {
                    typeUrl: string;
                    value: _646.MsgMultiSend;
                };
            };
            toJSON: {
                send(value: _646.MsgSend): {
                    typeUrl: string;
                    value: unknown;
                };
                multiSend(value: _646.MsgMultiSend): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                send(value: _646.MsgSend): {
                    typeUrl: string;
                    value: _646.MsgSend;
                };
                multiSend(value: _646.MsgMultiSend): {
                    typeUrl: string;
                    value: _646.MsgMultiSend;
                };
            };
            messages: {
                send(value: _646.MsgSend): {
                    typeUrl: string;
                    value: _646.MsgSend;
                };
                multiSend(value: _646.MsgMultiSend): {
                    typeUrl: string;
                    value: _646.MsgMultiSend;
                };
            };
            QueryBalanceRequest: {
                encode(message: _644.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QueryBalanceRequest;
                fromJSON(object: any): _644.QueryBalanceRequest;
                toJSON(message: _644.QueryBalanceRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _644.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _644.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QueryBalanceResponse;
                fromJSON(object: any): _644.QueryBalanceResponse;
                toJSON(message: _644.QueryBalanceResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _644.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _644.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QueryAllBalancesRequest;
                fromJSON(object: any): _644.QueryAllBalancesRequest;
                toJSON(message: _644.QueryAllBalancesRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _644.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _644.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QueryAllBalancesResponse;
                fromJSON(object: any): _644.QueryAllBalancesResponse;
                toJSON(message: _644.QueryAllBalancesResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _644.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _644.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QuerySpendableBalancesRequest;
                fromJSON(object: any): _644.QuerySpendableBalancesRequest;
                toJSON(message: _644.QuerySpendableBalancesRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _644.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _644.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QuerySpendableBalancesResponse;
                fromJSON(object: any): _644.QuerySpendableBalancesResponse;
                toJSON(message: _644.QuerySpendableBalancesResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _644.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _644.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QueryTotalSupplyRequest;
                fromJSON(object: any): _644.QueryTotalSupplyRequest;
                toJSON(message: _644.QueryTotalSupplyRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _644.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _644.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QueryTotalSupplyResponse;
                fromJSON(object: any): _644.QueryTotalSupplyResponse;
                toJSON(message: _644.QueryTotalSupplyResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _644.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _644.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QuerySupplyOfRequest;
                fromJSON(object: any): _644.QuerySupplyOfRequest;
                toJSON(message: _644.QuerySupplyOfRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _644.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _644.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QuerySupplyOfResponse;
                fromJSON(object: any): _644.QuerySupplyOfResponse;
                toJSON(message: _644.QuerySupplyOfResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _644.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _644.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QueryParamsRequest;
                fromJSON(_: any): _644.QueryParamsRequest;
                toJSON(_: _644.QueryParamsRequest): unknown;
                fromPartial<I_14 extends unknown>(_: I_14): _644.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _644.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QueryParamsResponse;
                fromJSON(object: any): _644.QueryParamsResponse;
                toJSON(message: _644.QueryParamsResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _644.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _644.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QueryDenomsMetadataRequest;
                fromJSON(object: any): _644.QueryDenomsMetadataRequest;
                toJSON(message: _644.QueryDenomsMetadataRequest): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _644.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _644.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QueryDenomsMetadataResponse;
                fromJSON(object: any): _644.QueryDenomsMetadataResponse;
                toJSON(message: _644.QueryDenomsMetadataResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _644.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _644.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QueryDenomMetadataRequest;
                fromJSON(object: any): _644.QueryDenomMetadataRequest;
                toJSON(message: _644.QueryDenomMetadataRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _644.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _644.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QueryDenomMetadataResponse;
                fromJSON(object: any): _644.QueryDenomMetadataResponse;
                toJSON(message: _644.QueryDenomMetadataResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _644.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _644.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QueryDenomOwnersRequest;
                fromJSON(object: any): _644.QueryDenomOwnersRequest;
                toJSON(message: _644.QueryDenomOwnersRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _644.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _644.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.DenomOwner;
                fromJSON(object: any): _644.DenomOwner;
                toJSON(message: _644.DenomOwner): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _644.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _644.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QueryDenomOwnersResponse;
                fromJSON(object: any): _644.QueryDenomOwnersResponse;
                toJSON(message: _644.QueryDenomOwnersResponse): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _644.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _642.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.GenesisState;
                fromJSON(object: any): _642.GenesisState;
                toJSON(message: _642.GenesisState): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _642.GenesisState;
            };
            Balance: {
                encode(message: _642.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.Balance;
                fromJSON(object: any): _642.Balance;
                toJSON(message: _642.Balance): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _642.Balance;
            };
            Params: {
                encode(message: _640.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _640.Params;
                fromJSON(object: any): _640.Params;
                toJSON(message: _640.Params): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _640.Params;
            };
            SendEnabled: {
                encode(message: _640.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _640.SendEnabled;
                fromJSON(object: any): _640.SendEnabled;
                toJSON(message: _640.SendEnabled): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _640.SendEnabled;
            };
            Input: {
                encode(message: _640.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _640.Input;
                fromJSON(object: any): _640.Input;
                toJSON(message: _640.Input): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _640.Input;
            };
            Output: {
                encode(message: _640.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _640.Output;
                fromJSON(object: any): _640.Output;
                toJSON(message: _640.Output): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _640.Output;
            };
            Supply: {
                encode(message: _640.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _640.Supply;
                fromJSON(object: any): _640.Supply;
                toJSON(message: _640.Supply): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _640.Supply;
            };
            DenomUnit: {
                encode(message: _640.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _640.DenomUnit;
                fromJSON(object: any): _640.DenomUnit;
                toJSON(message: _640.DenomUnit): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _640.DenomUnit;
            };
            Metadata: {
                encode(message: _640.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _640.Metadata;
                fromJSON(object: any): _640.Metadata;
                toJSON(message: _640.Metadata): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _640.Metadata;
            };
            SendAuthorization: {
                encode(message: _638.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _638.SendAuthorization;
                fromJSON(object: any): _638.SendAuthorization;
                toJSON(message: _638.SendAuthorization): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _638.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _654.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.TxResponse;
                    fromJSON(object: any): _654.TxResponse;
                    toJSON(message: _654.TxResponse): unknown;
                    fromPartial<I extends unknown>(object: I): _654.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _654.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.ABCIMessageLog;
                    fromJSON(object: any): _654.ABCIMessageLog;
                    toJSON(message: _654.ABCIMessageLog): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _654.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _654.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.StringEvent;
                    fromJSON(object: any): _654.StringEvent;
                    toJSON(message: _654.StringEvent): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _654.StringEvent;
                };
                Attribute: {
                    encode(message: _654.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.Attribute;
                    fromJSON(object: any): _654.Attribute;
                    toJSON(message: _654.Attribute): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _654.Attribute;
                };
                GasInfo: {
                    encode(message: _654.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.GasInfo;
                    fromJSON(object: any): _654.GasInfo;
                    toJSON(message: _654.GasInfo): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _654.GasInfo;
                };
                Result: {
                    encode(message: _654.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.Result;
                    fromJSON(object: any): _654.Result;
                    toJSON(message: _654.Result): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _654.Result;
                };
                SimulationResponse: {
                    encode(message: _654.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.SimulationResponse;
                    fromJSON(object: any): _654.SimulationResponse;
                    toJSON(message: _654.SimulationResponse): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _654.SimulationResponse;
                };
                MsgData: {
                    encode(message: _654.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.MsgData;
                    fromJSON(object: any): _654.MsgData;
                    toJSON(message: _654.MsgData): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _654.MsgData;
                };
                TxMsgData: {
                    encode(message: _654.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.TxMsgData;
                    fromJSON(object: any): _654.TxMsgData;
                    toJSON(message: _654.TxMsgData): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _654.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _654.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.SearchTxsResult;
                    fromJSON(object: any): _654.SearchTxsResult;
                    toJSON(message: _654.SearchTxsResult): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _654.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _656.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.Pairs;
                    fromJSON(object: any): _656.Pairs;
                    toJSON(message: _656.Pairs): unknown;
                    fromPartial<I extends unknown>(object: I): _656.Pairs;
                };
                Pair: {
                    encode(message: _656.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.Pair;
                    fromJSON(object: any): _656.Pair;
                    toJSON(message: _656.Pair): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _656.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _658.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _658.PageRequest;
                    fromJSON(object: any): _658.PageRequest;
                    toJSON(message: _658.PageRequest): unknown;
                    fromPartial<I extends unknown>(object: I): _658.PageRequest;
                };
                PageResponse: {
                    encode(message: _658.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _658.PageResponse;
                    fromJSON(object: any): _658.PageResponse;
                    toJSON(message: _658.PageResponse): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _658.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _660.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.ListAllInterfacesRequest;
                    fromJSON(_: any): _660.ListAllInterfacesRequest;
                    toJSON(_: _660.ListAllInterfacesRequest): unknown;
                    fromPartial<I extends unknown>(_: I): _660.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _660.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.ListAllInterfacesResponse;
                    fromJSON(object: any): _660.ListAllInterfacesResponse;
                    toJSON(message: _660.ListAllInterfacesResponse): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _660.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _660.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.ListImplementationsRequest;
                    fromJSON(object: any): _660.ListImplementationsRequest;
                    toJSON(message: _660.ListImplementationsRequest): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _660.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _660.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.ListImplementationsResponse;
                    fromJSON(object: any): _660.ListImplementationsResponse;
                    toJSON(message: _660.ListImplementationsResponse): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _660.ListImplementationsResponse;
                };
                ReflectionServiceClientImpl: typeof _660.ReflectionServiceClientImpl;
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _662.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.AppDescriptor;
                    fromJSON(object: any): _662.AppDescriptor;
                    toJSON(message: _662.AppDescriptor): unknown;
                    fromPartial<I extends unknown>(object: I): _662.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _662.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.TxDescriptor;
                    fromJSON(object: any): _662.TxDescriptor;
                    toJSON(message: _662.TxDescriptor): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _662.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _662.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.AuthnDescriptor;
                    fromJSON(object: any): _662.AuthnDescriptor;
                    toJSON(message: _662.AuthnDescriptor): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _662.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _662.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.SigningModeDescriptor;
                    fromJSON(object: any): _662.SigningModeDescriptor;
                    toJSON(message: _662.SigningModeDescriptor): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _662.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _662.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.ChainDescriptor;
                    fromJSON(object: any): _662.ChainDescriptor;
                    toJSON(message: _662.ChainDescriptor): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _662.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _662.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.CodecDescriptor;
                    fromJSON(object: any): _662.CodecDescriptor;
                    toJSON(message: _662.CodecDescriptor): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _662.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _662.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.InterfaceDescriptor;
                    fromJSON(object: any): _662.InterfaceDescriptor;
                    toJSON(message: _662.InterfaceDescriptor): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _662.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _662.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _662.InterfaceImplementerDescriptor;
                    toJSON(message: _662.InterfaceImplementerDescriptor): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _662.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _662.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _662.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _662.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _662.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _662.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.ConfigurationDescriptor;
                    fromJSON(object: any): _662.ConfigurationDescriptor;
                    toJSON(message: _662.ConfigurationDescriptor): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _662.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _662.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.MsgDescriptor;
                    fromJSON(object: any): _662.MsgDescriptor;
                    toJSON(message: _662.MsgDescriptor): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _662.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _662.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _662.GetAuthnDescriptorRequest;
                    toJSON(_: _662.GetAuthnDescriptorRequest): unknown;
                    fromPartial<I_11 extends unknown>(_: I_11): _662.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _662.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _662.GetAuthnDescriptorResponse;
                    toJSON(message: _662.GetAuthnDescriptorResponse): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _662.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _662.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.GetChainDescriptorRequest;
                    fromJSON(_: any): _662.GetChainDescriptorRequest;
                    toJSON(_: _662.GetChainDescriptorRequest): unknown;
                    fromPartial<I_13 extends unknown>(_: I_13): _662.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _662.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.GetChainDescriptorResponse;
                    fromJSON(object: any): _662.GetChainDescriptorResponse;
                    toJSON(message: _662.GetChainDescriptorResponse): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _662.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _662.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.GetCodecDescriptorRequest;
                    fromJSON(_: any): _662.GetCodecDescriptorRequest;
                    toJSON(_: _662.GetCodecDescriptorRequest): unknown;
                    fromPartial<I_15 extends unknown>(_: I_15): _662.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _662.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.GetCodecDescriptorResponse;
                    fromJSON(object: any): _662.GetCodecDescriptorResponse;
                    toJSON(message: _662.GetCodecDescriptorResponse): unknown;
                    fromPartial<I_16 extends unknown>(object: I_16): _662.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _662.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _662.GetConfigurationDescriptorRequest;
                    toJSON(_: _662.GetConfigurationDescriptorRequest): unknown;
                    fromPartial<I_17 extends unknown>(_: I_17): _662.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _662.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _662.GetConfigurationDescriptorResponse;
                    toJSON(message: _662.GetConfigurationDescriptorResponse): unknown;
                    fromPartial<I_18 extends unknown>(object: I_18): _662.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _662.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _662.GetQueryServicesDescriptorRequest;
                    toJSON(_: _662.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial<I_19 extends unknown>(_: I_19): _662.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _662.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _662.GetQueryServicesDescriptorResponse;
                    toJSON(message: _662.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial<I_20 extends unknown>(object: I_20): _662.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _662.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.GetTxDescriptorRequest;
                    fromJSON(_: any): _662.GetTxDescriptorRequest;
                    toJSON(_: _662.GetTxDescriptorRequest): unknown;
                    fromPartial<I_21 extends unknown>(_: I_21): _662.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _662.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.GetTxDescriptorResponse;
                    fromJSON(object: any): _662.GetTxDescriptorResponse;
                    toJSON(message: _662.GetTxDescriptorResponse): unknown;
                    fromPartial<I_22 extends unknown>(object: I_22): _662.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _662.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.QueryServicesDescriptor;
                    fromJSON(object: any): _662.QueryServicesDescriptor;
                    toJSON(message: _662.QueryServicesDescriptor): unknown;
                    fromPartial<I_23 extends unknown>(object: I_23): _662.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _662.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.QueryServiceDescriptor;
                    fromJSON(object: any): _662.QueryServiceDescriptor;
                    toJSON(message: _662.QueryServiceDescriptor): unknown;
                    fromPartial<I_24 extends unknown>(object: I_24): _662.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _662.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.QueryMethodDescriptor;
                    fromJSON(object: any): _662.QueryMethodDescriptor;
                    toJSON(message: _662.QueryMethodDescriptor): unknown;
                    fromPartial<I_25 extends unknown>(object: I_25): _662.QueryMethodDescriptor;
                };
                ReflectionServiceClientImpl: typeof _662.ReflectionServiceClientImpl;
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _664.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.Snapshot;
                    fromJSON(object: any): _664.Snapshot;
                    toJSON(message: _664.Snapshot): unknown;
                    fromPartial<I extends unknown>(object: I): _664.Snapshot;
                };
                Metadata: {
                    encode(message: _664.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.Metadata;
                    fromJSON(object: any): _664.Metadata;
                    toJSON(message: _664.Metadata): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _664.Metadata;
                };
                SnapshotItem: {
                    encode(message: _664.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.SnapshotItem;
                    fromJSON(object: any): _664.SnapshotItem;
                    toJSON(message: _664.SnapshotItem): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _664.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _664.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.SnapshotStoreItem;
                    fromJSON(object: any): _664.SnapshotStoreItem;
                    toJSON(message: _664.SnapshotStoreItem): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _664.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _664.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.SnapshotIAVLItem;
                    fromJSON(object: any): _664.SnapshotIAVLItem;
                    toJSON(message: _664.SnapshotIAVLItem): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _664.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _664.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.SnapshotExtensionMeta;
                    fromJSON(object: any): _664.SnapshotExtensionMeta;
                    toJSON(message: _664.SnapshotExtensionMeta): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _664.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _664.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.SnapshotExtensionPayload;
                    fromJSON(object: any): _664.SnapshotExtensionPayload;
                    toJSON(message: _664.SnapshotExtensionPayload): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _664.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _664.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.SnapshotKVItem;
                    fromJSON(object: any): _664.SnapshotKVItem;
                    toJSON(message: _664.SnapshotKVItem): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _664.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _664.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.SnapshotSchema;
                    fromJSON(object: any): _664.SnapshotSchema;
                    toJSON(message: _664.SnapshotSchema): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _664.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _668.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _668.StoreKVPair;
                    fromJSON(object: any): _668.StoreKVPair;
                    toJSON(message: _668.StoreKVPair): unknown;
                    fromPartial<I extends unknown>(object: I): _668.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _666.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.CommitInfo;
                    fromJSON(object: any): _666.CommitInfo;
                    toJSON(message: _666.CommitInfo): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _666.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _666.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.StoreInfo;
                    fromJSON(object: any): _666.StoreInfo;
                    toJSON(message: _666.StoreInfo): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _666.StoreInfo;
                };
                CommitID: {
                    encode(message: _666.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.CommitID;
                    fromJSON(object: any): _666.CommitID;
                    toJSON(message: _666.CommitID): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _666.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                GetValidatorSetByHeightRequest: {
                    encode(message: _670.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _670.GetValidatorSetByHeightRequest;
                    toJSON(message: _670.GetValidatorSetByHeightRequest): unknown;
                    fromPartial<I extends unknown>(object: I): _670.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _670.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _670.GetValidatorSetByHeightResponse;
                    toJSON(message: _670.GetValidatorSetByHeightResponse): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _670.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _670.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _670.GetLatestValidatorSetRequest;
                    toJSON(message: _670.GetLatestValidatorSetRequest): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _670.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _670.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _670.GetLatestValidatorSetResponse;
                    toJSON(message: _670.GetLatestValidatorSetResponse): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _670.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _670.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.Validator;
                    fromJSON(object: any): _670.Validator;
                    toJSON(message: _670.Validator): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _670.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _670.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.GetBlockByHeightRequest;
                    fromJSON(object: any): _670.GetBlockByHeightRequest;
                    toJSON(message: _670.GetBlockByHeightRequest): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _670.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _670.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.GetBlockByHeightResponse;
                    fromJSON(object: any): _670.GetBlockByHeightResponse;
                    toJSON(message: _670.GetBlockByHeightResponse): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _670.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _670.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.GetLatestBlockRequest;
                    fromJSON(_: any): _670.GetLatestBlockRequest;
                    toJSON(_: _670.GetLatestBlockRequest): unknown;
                    fromPartial<I_7 extends unknown>(_: I_7): _670.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _670.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.GetLatestBlockResponse;
                    fromJSON(object: any): _670.GetLatestBlockResponse;
                    toJSON(message: _670.GetLatestBlockResponse): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _670.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _670.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.GetSyncingRequest;
                    fromJSON(_: any): _670.GetSyncingRequest;
                    toJSON(_: _670.GetSyncingRequest): unknown;
                    fromPartial<I_9 extends unknown>(_: I_9): _670.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _670.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.GetSyncingResponse;
                    fromJSON(object: any): _670.GetSyncingResponse;
                    toJSON(message: _670.GetSyncingResponse): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _670.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _670.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.GetNodeInfoRequest;
                    fromJSON(_: any): _670.GetNodeInfoRequest;
                    toJSON(_: _670.GetNodeInfoRequest): unknown;
                    fromPartial<I_11 extends unknown>(_: I_11): _670.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _670.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.GetNodeInfoResponse;
                    fromJSON(object: any): _670.GetNodeInfoResponse;
                    toJSON(message: _670.GetNodeInfoResponse): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _670.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _670.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.VersionInfo;
                    fromJSON(object: any): _670.VersionInfo;
                    toJSON(message: _670.VersionInfo): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _670.VersionInfo;
                };
                Module: {
                    encode(message: _670.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.Module;
                    fromJSON(object: any): _670.Module;
                    toJSON(message: _670.Module): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _670.Module;
                };
                ServiceClientImpl: typeof _670.ServiceClientImpl;
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _672.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.Coin;
                fromJSON(object: any): _672.Coin;
                toJSON(message: _672.Coin): unknown;
                fromPartial<I extends unknown>(object: I): _672.Coin;
            };
            DecCoin: {
                encode(message: _672.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.DecCoin;
                fromJSON(object: any): _672.DecCoin;
                toJSON(message: _672.DecCoin): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _672.DecCoin;
            };
            IntProto: {
                encode(message: _672.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.IntProto;
                fromJSON(object: any): _672.IntProto;
                toJSON(message: _672.IntProto): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _672.IntProto;
            };
            DecProto: {
                encode(message: _672.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.DecProto;
                fromJSON(object: any): _672.DecProto;
                toJSON(message: _672.DecProto): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _672.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _676.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.GenesisOwners;
                fromJSON(object: any): _676.GenesisOwners;
                toJSON(message: _676.GenesisOwners): unknown;
                fromPartial<I extends unknown>(object: I): _676.GenesisOwners;
            };
            GenesisState: {
                encode(message: _676.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.GenesisState;
                fromJSON(object: any): _676.GenesisState;
                toJSON(message: _676.GenesisState): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _676.GenesisState;
            };
            Capability: {
                encode(message: _674.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.Capability;
                fromJSON(object: any): _674.Capability;
                toJSON(message: _674.Capability): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _674.Capability;
            };
            Owner: {
                encode(message: _674.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.Owner;
                fromJSON(object: any): _674.Owner;
                toJSON(message: _674.Owner): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _674.Owner;
            };
            CapabilityOwners: {
                encode(message: _674.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.CapabilityOwners;
                fromJSON(object: any): _674.CapabilityOwners;
                toJSON(message: _674.CapabilityOwners): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _674.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgVerifyInvariant: {
                encode(message: _680.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _680.MsgVerifyInvariant;
                fromJSON(object: any): _680.MsgVerifyInvariant;
                toJSON(message: _680.MsgVerifyInvariant): unknown;
                fromPartial<I extends unknown>(object: I): _680.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _680.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _680.MsgVerifyInvariantResponse;
                fromJSON(_: any): _680.MsgVerifyInvariantResponse;
                toJSON(_: _680.MsgVerifyInvariantResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _680.MsgVerifyInvariantResponse;
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _680.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _680.MsgVerifyInvariant;
                };
            };
            encoded: {
                verifyInvariant(value: _680.MsgVerifyInvariant): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                verifyInvariant(value: any): {
                    typeUrl: string;
                    value: _680.MsgVerifyInvariant;
                };
            };
            toJSON: {
                verifyInvariant(value: _680.MsgVerifyInvariant): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                verifyInvariant(value: _680.MsgVerifyInvariant): {
                    typeUrl: string;
                    value: _680.MsgVerifyInvariant;
                };
            };
            messages: {
                verifyInvariant(value: _680.MsgVerifyInvariant): {
                    typeUrl: string;
                    value: _680.MsgVerifyInvariant;
                };
            };
            GenesisState: {
                encode(message: _678.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _678.GenesisState;
                fromJSON(object: any): _678.GenesisState;
                toJSON(message: _678.GenesisState): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _678.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _688.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _688.PubKey;
                fromJSON(object: any): _688.PubKey;
                toJSON(message: _688.PubKey): unknown;
                fromPartial<I extends unknown>(object: I): _688.PubKey;
            };
            PrivKey: {
                encode(message: _688.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _688.PrivKey;
                fromJSON(object: any): _688.PrivKey;
                toJSON(message: _688.PrivKey): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _688.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _690.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.BIP44Params;
                    fromJSON(object: any): _690.BIP44Params;
                    toJSON(message: _690.BIP44Params): unknown;
                    fromPartial<I extends unknown>(object: I): _690.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _692.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.Record;
                    fromJSON(object: any): _692.Record;
                    toJSON(message: _692.Record): unknown;
                    fromPartial<I extends unknown>(object: I): _692.Record;
                };
                Record_Local: {
                    encode(message: _692.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.Record_Local;
                    fromJSON(object: any): _692.Record_Local;
                    toJSON(message: _692.Record_Local): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _692.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _692.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.Record_Ledger;
                    fromJSON(object: any): _692.Record_Ledger;
                    toJSON(message: _692.Record_Ledger): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _692.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _692.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.Record_Multi;
                    fromJSON(_: any): _692.Record_Multi;
                    toJSON(_: _692.Record_Multi): unknown;
                    fromPartial<I_3 extends unknown>(_: I_3): _692.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _692.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.Record_Offline;
                    fromJSON(_: any): _692.Record_Offline;
                    toJSON(_: _692.Record_Offline): unknown;
                    fromPartial<I_4 extends unknown>(_: I_4): _692.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _694.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.LegacyAminoPubKey;
                fromJSON(object: any): _694.LegacyAminoPubKey;
                toJSON(message: _694.LegacyAminoPubKey): unknown;
                fromPartial<I extends unknown>(object: I): _694.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _696.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _696.PubKey;
                fromJSON(object: any): _696.PubKey;
                toJSON(message: _696.PubKey): unknown;
                fromPartial<I extends unknown>(object: I): _696.PubKey;
            };
            PrivKey: {
                encode(message: _696.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _696.PrivKey;
                fromJSON(object: any): _696.PrivKey;
                toJSON(message: _696.PrivKey): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _696.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _698.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _698.PubKey;
                fromJSON(object: any): _698.PubKey;
                toJSON(message: _698.PubKey): unknown;
                fromPartial<I extends unknown>(object: I): _698.PubKey;
            };
            PrivKey: {
                encode(message: _698.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _698.PrivKey;
                fromJSON(object: any): _698.PrivKey;
                toJSON(message: _698.PrivKey): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _698.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgSetWithdrawAddress: {
                encode(message: _706.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.MsgSetWithdrawAddress;
                fromJSON(object: any): _706.MsgSetWithdrawAddress;
                toJSON(message: _706.MsgSetWithdrawAddress): unknown;
                fromPartial<I extends unknown>(object: I): _706.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _706.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _706.MsgSetWithdrawAddressResponse;
                toJSON(_: _706.MsgSetWithdrawAddressResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _706.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _706.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _706.MsgWithdrawDelegatorReward;
                toJSON(message: _706.MsgWithdrawDelegatorReward): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _706.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _706.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _706.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _706.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _706.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _706.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _706.MsgWithdrawValidatorCommission;
                toJSON(message: _706.MsgWithdrawValidatorCommission): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _706.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _706.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _706.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _706.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _706.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _706.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.MsgFundCommunityPool;
                fromJSON(object: any): _706.MsgFundCommunityPool;
                toJSON(message: _706.MsgFundCommunityPool): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _706.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _706.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _706.MsgFundCommunityPoolResponse;
                toJSON(_: _706.MsgFundCommunityPoolResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _706.MsgFundCommunityPoolResponse;
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _706.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _706.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _706.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _706.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _706.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _706.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _706.MsgFundCommunityPool) => {
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
                    }) => _706.MsgFundCommunityPool;
                };
            };
            encoded: {
                setWithdrawAddress(value: _706.MsgSetWithdrawAddress): {
                    type_url: string;
                    value: Uint8Array;
                };
                withdrawDelegatorReward(value: _706.MsgWithdrawDelegatorReward): {
                    type_url: string;
                    value: Uint8Array;
                };
                withdrawValidatorCommission(value: _706.MsgWithdrawValidatorCommission): {
                    type_url: string;
                    value: Uint8Array;
                };
                fundCommunityPool(value: _706.MsgFundCommunityPool): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                setWithdrawAddress(value: any): {
                    typeUrl: string;
                    value: _706.MsgSetWithdrawAddress;
                };
                withdrawDelegatorReward(value: any): {
                    typeUrl: string;
                    value: _706.MsgWithdrawDelegatorReward;
                };
                withdrawValidatorCommission(value: any): {
                    typeUrl: string;
                    value: _706.MsgWithdrawValidatorCommission;
                };
                fundCommunityPool(value: any): {
                    typeUrl: string;
                    value: _706.MsgFundCommunityPool;
                };
            };
            toJSON: {
                setWithdrawAddress(value: _706.MsgSetWithdrawAddress): {
                    typeUrl: string;
                    value: unknown;
                };
                withdrawDelegatorReward(value: _706.MsgWithdrawDelegatorReward): {
                    typeUrl: string;
                    value: unknown;
                };
                withdrawValidatorCommission(value: _706.MsgWithdrawValidatorCommission): {
                    typeUrl: string;
                    value: unknown;
                };
                fundCommunityPool(value: _706.MsgFundCommunityPool): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                setWithdrawAddress(value: _706.MsgSetWithdrawAddress): {
                    typeUrl: string;
                    value: _706.MsgSetWithdrawAddress;
                };
                withdrawDelegatorReward(value: _706.MsgWithdrawDelegatorReward): {
                    typeUrl: string;
                    value: _706.MsgWithdrawDelegatorReward;
                };
                withdrawValidatorCommission(value: _706.MsgWithdrawValidatorCommission): {
                    typeUrl: string;
                    value: _706.MsgWithdrawValidatorCommission;
                };
                fundCommunityPool(value: _706.MsgFundCommunityPool): {
                    typeUrl: string;
                    value: _706.MsgFundCommunityPool;
                };
            };
            messages: {
                setWithdrawAddress(value: _706.MsgSetWithdrawAddress): {
                    typeUrl: string;
                    value: _706.MsgSetWithdrawAddress;
                };
                withdrawDelegatorReward(value: _706.MsgWithdrawDelegatorReward): {
                    typeUrl: string;
                    value: _706.MsgWithdrawDelegatorReward;
                };
                withdrawValidatorCommission(value: _706.MsgWithdrawValidatorCommission): {
                    typeUrl: string;
                    value: _706.MsgWithdrawValidatorCommission;
                };
                fundCommunityPool(value: _706.MsgFundCommunityPool): {
                    typeUrl: string;
                    value: _706.MsgFundCommunityPool;
                };
            };
            QueryParamsRequest: {
                encode(_: _704.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _704.QueryParamsRequest;
                fromJSON(_: any): _704.QueryParamsRequest;
                toJSON(_: _704.QueryParamsRequest): unknown;
                fromPartial<I_8 extends unknown>(_: I_8): _704.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _704.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _704.QueryParamsResponse;
                fromJSON(object: any): _704.QueryParamsResponse;
                toJSON(message: _704.QueryParamsResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _704.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _704.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _704.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _704.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _704.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _704.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _704.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _704.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _704.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _704.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _704.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _704.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _704.QueryValidatorCommissionRequest;
                fromJSON(object: any): _704.QueryValidatorCommissionRequest;
                toJSON(message: _704.QueryValidatorCommissionRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _704.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _704.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _704.QueryValidatorCommissionResponse;
                fromJSON(object: any): _704.QueryValidatorCommissionResponse;
                toJSON(message: _704.QueryValidatorCommissionResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _704.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _704.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _704.QueryValidatorSlashesRequest;
                fromJSON(object: any): _704.QueryValidatorSlashesRequest;
                toJSON(message: _704.QueryValidatorSlashesRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _704.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _704.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _704.QueryValidatorSlashesResponse;
                fromJSON(object: any): _704.QueryValidatorSlashesResponse;
                toJSON(message: _704.QueryValidatorSlashesResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _704.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _704.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _704.QueryDelegationRewardsRequest;
                fromJSON(object: any): _704.QueryDelegationRewardsRequest;
                toJSON(message: _704.QueryDelegationRewardsRequest): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _704.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _704.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _704.QueryDelegationRewardsResponse;
                fromJSON(object: any): _704.QueryDelegationRewardsResponse;
                toJSON(message: _704.QueryDelegationRewardsResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _704.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _704.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _704.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _704.QueryDelegationTotalRewardsRequest;
                toJSON(message: _704.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _704.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _704.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _704.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _704.QueryDelegationTotalRewardsResponse;
                toJSON(message: _704.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _704.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _704.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _704.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _704.QueryDelegatorValidatorsRequest;
                toJSON(message: _704.QueryDelegatorValidatorsRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _704.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _704.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _704.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _704.QueryDelegatorValidatorsResponse;
                toJSON(message: _704.QueryDelegatorValidatorsResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _704.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _704.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _704.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _704.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _704.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _704.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _704.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _704.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _704.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _704.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _704.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _704.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _704.QueryCommunityPoolRequest;
                fromJSON(_: any): _704.QueryCommunityPoolRequest;
                toJSON(_: _704.QueryCommunityPoolRequest): unknown;
                fromPartial<I_24 extends unknown>(_: I_24): _704.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _704.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _704.QueryCommunityPoolResponse;
                fromJSON(object: any): _704.QueryCommunityPoolResponse;
                toJSON(message: _704.QueryCommunityPoolResponse): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _704.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _702.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _702.DelegatorWithdrawInfo;
                fromJSON(object: any): _702.DelegatorWithdrawInfo;
                toJSON(message: _702.DelegatorWithdrawInfo): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _702.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _702.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _702.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _702.ValidatorOutstandingRewardsRecord;
                toJSON(message: _702.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _702.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _702.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _702.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _702.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _702.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _702.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _702.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _702.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _702.ValidatorHistoricalRewardsRecord;
                toJSON(message: _702.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _702.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _702.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _702.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _702.ValidatorCurrentRewardsRecord;
                toJSON(message: _702.ValidatorCurrentRewardsRecord): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _702.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _702.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _702.DelegatorStartingInfoRecord;
                fromJSON(object: any): _702.DelegatorStartingInfoRecord;
                toJSON(message: _702.DelegatorStartingInfoRecord): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _702.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _702.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _702.ValidatorSlashEventRecord;
                fromJSON(object: any): _702.ValidatorSlashEventRecord;
                toJSON(message: _702.ValidatorSlashEventRecord): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _702.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _702.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _702.GenesisState;
                fromJSON(object: any): _702.GenesisState;
                toJSON(message: _702.GenesisState): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _702.GenesisState;
            };
            Params: {
                encode(message: _700.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _700.Params;
                fromJSON(object: any): _700.Params;
                toJSON(message: _700.Params): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _700.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _700.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _700.ValidatorHistoricalRewards;
                fromJSON(object: any): _700.ValidatorHistoricalRewards;
                toJSON(message: _700.ValidatorHistoricalRewards): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _700.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _700.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _700.ValidatorCurrentRewards;
                fromJSON(object: any): _700.ValidatorCurrentRewards;
                toJSON(message: _700.ValidatorCurrentRewards): unknown;
                fromPartial<I_36 extends unknown>(object: I_36): _700.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _700.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _700.ValidatorAccumulatedCommission;
                fromJSON(object: any): _700.ValidatorAccumulatedCommission;
                toJSON(message: _700.ValidatorAccumulatedCommission): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _700.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _700.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _700.ValidatorOutstandingRewards;
                fromJSON(object: any): _700.ValidatorOutstandingRewards;
                toJSON(message: _700.ValidatorOutstandingRewards): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _700.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _700.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _700.ValidatorSlashEvent;
                fromJSON(object: any): _700.ValidatorSlashEvent;
                toJSON(message: _700.ValidatorSlashEvent): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _700.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _700.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _700.ValidatorSlashEvents;
                fromJSON(object: any): _700.ValidatorSlashEvents;
                toJSON(message: _700.ValidatorSlashEvents): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _700.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _700.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _700.FeePool;
                fromJSON(object: any): _700.FeePool;
                toJSON(message: _700.FeePool): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _700.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _700.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _700.CommunityPoolSpendProposal;
                fromJSON(object: any): _700.CommunityPoolSpendProposal;
                toJSON(message: _700.CommunityPoolSpendProposal): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _700.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _700.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _700.DelegatorStartingInfo;
                fromJSON(object: any): _700.DelegatorStartingInfo;
                toJSON(message: _700.DelegatorStartingInfo): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _700.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _700.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _700.DelegationDelegatorReward;
                fromJSON(object: any): _700.DelegationDelegatorReward;
                toJSON(message: _700.DelegationDelegatorReward): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _700.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _700.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _700.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _700.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _700.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _700.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgSubmitEvidence: {
                encode(message: _720.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _720.MsgSubmitEvidence;
                fromJSON(object: any): _720.MsgSubmitEvidence;
                toJSON(message: _720.MsgSubmitEvidence): unknown;
                fromPartial<I extends unknown>(object: I): _720.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _720.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _720.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _720.MsgSubmitEvidenceResponse;
                toJSON(message: _720.MsgSubmitEvidenceResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _720.MsgSubmitEvidenceResponse;
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _720.MsgSubmitEvidence) => {
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
                    }) => _720.MsgSubmitEvidence;
                };
            };
            encoded: {
                submitEvidence(value: _720.MsgSubmitEvidence): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                submitEvidence(value: any): {
                    typeUrl: string;
                    value: _720.MsgSubmitEvidence;
                };
            };
            toJSON: {
                submitEvidence(value: _720.MsgSubmitEvidence): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                submitEvidence(value: _720.MsgSubmitEvidence): {
                    typeUrl: string;
                    value: _720.MsgSubmitEvidence;
                };
            };
            messages: {
                submitEvidence(value: _720.MsgSubmitEvidence): {
                    typeUrl: string;
                    value: _720.MsgSubmitEvidence;
                };
            };
            QueryEvidenceRequest: {
                encode(message: _718.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _718.QueryEvidenceRequest;
                fromJSON(object: any): _718.QueryEvidenceRequest;
                toJSON(message: _718.QueryEvidenceRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _718.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _718.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _718.QueryEvidenceResponse;
                fromJSON(object: any): _718.QueryEvidenceResponse;
                toJSON(message: _718.QueryEvidenceResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _718.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _718.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _718.QueryAllEvidenceRequest;
                fromJSON(object: any): _718.QueryAllEvidenceRequest;
                toJSON(message: _718.QueryAllEvidenceRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _718.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _718.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _718.QueryAllEvidenceResponse;
                fromJSON(object: any): _718.QueryAllEvidenceResponse;
                toJSON(message: _718.QueryAllEvidenceResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _718.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _716.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.GenesisState;
                fromJSON(object: any): _716.GenesisState;
                toJSON(message: _716.GenesisState): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _716.GenesisState;
            };
            Equivocation: {
                encode(message: _714.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _714.Equivocation;
                fromJSON(object: any): _714.Equivocation;
                toJSON(message: _714.Equivocation): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _714.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgGrantAllowance: {
                encode(message: _734.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _734.MsgGrantAllowance;
                fromJSON(object: any): _734.MsgGrantAllowance;
                toJSON(message: _734.MsgGrantAllowance): unknown;
                fromPartial<I extends unknown>(object: I): _734.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _734.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _734.MsgGrantAllowanceResponse;
                fromJSON(_: any): _734.MsgGrantAllowanceResponse;
                toJSON(_: _734.MsgGrantAllowanceResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _734.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _734.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _734.MsgRevokeAllowance;
                fromJSON(object: any): _734.MsgRevokeAllowance;
                toJSON(message: _734.MsgRevokeAllowance): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _734.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _734.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _734.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _734.MsgRevokeAllowanceResponse;
                toJSON(_: _734.MsgRevokeAllowanceResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _734.MsgRevokeAllowanceResponse;
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _734.MsgGrantAllowance) => {
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
                    }) => _734.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _734.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _734.MsgRevokeAllowance;
                };
            };
            encoded: {
                grantAllowance(value: _734.MsgGrantAllowance): {
                    type_url: string;
                    value: Uint8Array;
                };
                revokeAllowance(value: _734.MsgRevokeAllowance): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                grantAllowance(value: any): {
                    typeUrl: string;
                    value: _734.MsgGrantAllowance;
                };
                revokeAllowance(value: any): {
                    typeUrl: string;
                    value: _734.MsgRevokeAllowance;
                };
            };
            toJSON: {
                grantAllowance(value: _734.MsgGrantAllowance): {
                    typeUrl: string;
                    value: unknown;
                };
                revokeAllowance(value: _734.MsgRevokeAllowance): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                grantAllowance(value: _734.MsgGrantAllowance): {
                    typeUrl: string;
                    value: _734.MsgGrantAllowance;
                };
                revokeAllowance(value: _734.MsgRevokeAllowance): {
                    typeUrl: string;
                    value: _734.MsgRevokeAllowance;
                };
            };
            messages: {
                grantAllowance(value: _734.MsgGrantAllowance): {
                    typeUrl: string;
                    value: _734.MsgGrantAllowance;
                };
                revokeAllowance(value: _734.MsgRevokeAllowance): {
                    typeUrl: string;
                    value: _734.MsgRevokeAllowance;
                };
            };
            QueryAllowanceRequest: {
                encode(message: _732.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _732.QueryAllowanceRequest;
                fromJSON(object: any): _732.QueryAllowanceRequest;
                toJSON(message: _732.QueryAllowanceRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _732.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _732.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _732.QueryAllowanceResponse;
                fromJSON(object: any): _732.QueryAllowanceResponse;
                toJSON(message: _732.QueryAllowanceResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _732.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _732.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _732.QueryAllowancesRequest;
                fromJSON(object: any): _732.QueryAllowancesRequest;
                toJSON(message: _732.QueryAllowancesRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _732.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _732.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _732.QueryAllowancesResponse;
                fromJSON(object: any): _732.QueryAllowancesResponse;
                toJSON(message: _732.QueryAllowancesResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _732.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _732.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _732.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _732.QueryAllowancesByGranterRequest;
                toJSON(message: _732.QueryAllowancesByGranterRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _732.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _732.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _732.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _732.QueryAllowancesByGranterResponse;
                toJSON(message: _732.QueryAllowancesByGranterResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _732.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _730.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.GenesisState;
                fromJSON(object: any): _730.GenesisState;
                toJSON(message: _730.GenesisState): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _730.GenesisState;
            };
            BasicAllowance: {
                encode(message: _728.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _728.BasicAllowance;
                fromJSON(object: any): _728.BasicAllowance;
                toJSON(message: _728.BasicAllowance): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _728.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _728.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _728.PeriodicAllowance;
                fromJSON(object: any): _728.PeriodicAllowance;
                toJSON(message: _728.PeriodicAllowance): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _728.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _728.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _728.AllowedMsgAllowance;
                fromJSON(object: any): _728.AllowedMsgAllowance;
                toJSON(message: _728.AllowedMsgAllowance): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _728.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _728.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _728.Grant;
                fromJSON(object: any): _728.Grant;
                toJSON(message: _728.Grant): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _728.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _742.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _742.GenesisState;
                fromJSON(object: any): _742.GenesisState;
                toJSON(message: _742.GenesisState): unknown;
                fromPartial<I extends unknown>(object: I): _742.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgSubmitProposal: {
                encode(message: _750.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _750.MsgSubmitProposal;
                fromJSON(object: any): _750.MsgSubmitProposal;
                toJSON(message: _750.MsgSubmitProposal): unknown;
                fromPartial<I extends unknown>(object: I): _750.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _750.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _750.MsgSubmitProposalResponse;
                fromJSON(object: any): _750.MsgSubmitProposalResponse;
                toJSON(message: _750.MsgSubmitProposalResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _750.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _750.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _750.MsgExecLegacyContent;
                fromJSON(object: any): _750.MsgExecLegacyContent;
                toJSON(message: _750.MsgExecLegacyContent): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _750.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _750.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _750.MsgExecLegacyContentResponse;
                fromJSON(_: any): _750.MsgExecLegacyContentResponse;
                toJSON(_: _750.MsgExecLegacyContentResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _750.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _750.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _750.MsgVote;
                fromJSON(object: any): _750.MsgVote;
                toJSON(message: _750.MsgVote): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _750.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _750.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _750.MsgVoteResponse;
                fromJSON(_: any): _750.MsgVoteResponse;
                toJSON(_: _750.MsgVoteResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _750.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _750.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _750.MsgVoteWeighted;
                fromJSON(object: any): _750.MsgVoteWeighted;
                toJSON(message: _750.MsgVoteWeighted): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _750.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _750.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _750.MsgVoteWeightedResponse;
                fromJSON(_: any): _750.MsgVoteWeightedResponse;
                toJSON(_: _750.MsgVoteWeightedResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _750.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _750.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _750.MsgDeposit;
                fromJSON(object: any): _750.MsgDeposit;
                toJSON(message: _750.MsgDeposit): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _750.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _750.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _750.MsgDepositResponse;
                fromJSON(_: any): _750.MsgDepositResponse;
                toJSON(_: _750.MsgDepositResponse): unknown;
                fromPartial<I_9 extends unknown>(_: I_9): _750.MsgDepositResponse;
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _750.MsgSubmitProposal) => {
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
                    }) => _750.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _750.MsgExecLegacyContent) => {
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
                    }) => _750.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _750.MsgVote) => {
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
                    }) => _750.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _750.MsgVoteWeighted) => {
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
                    }) => _750.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _750.MsgDeposit) => {
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
                    }) => _750.MsgDeposit;
                };
            };
            encoded: {
                submitProposal(value: _750.MsgSubmitProposal): {
                    type_url: string;
                    value: Uint8Array;
                };
                execLegacyContent(value: _750.MsgExecLegacyContent): {
                    type_url: string;
                    value: Uint8Array;
                };
                vote(value: _750.MsgVote): {
                    type_url: string;
                    value: Uint8Array;
                };
                voteWeighted(value: _750.MsgVoteWeighted): {
                    type_url: string;
                    value: Uint8Array;
                };
                deposit(value: _750.MsgDeposit): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                submitProposal(value: any): {
                    typeUrl: string;
                    value: _750.MsgSubmitProposal;
                };
                execLegacyContent(value: any): {
                    typeUrl: string;
                    value: _750.MsgExecLegacyContent;
                };
                vote(value: any): {
                    typeUrl: string;
                    value: _750.MsgVote;
                };
                voteWeighted(value: any): {
                    typeUrl: string;
                    value: _750.MsgVoteWeighted;
                };
                deposit(value: any): {
                    typeUrl: string;
                    value: _750.MsgDeposit;
                };
            };
            toJSON: {
                submitProposal(value: _750.MsgSubmitProposal): {
                    typeUrl: string;
                    value: unknown;
                };
                execLegacyContent(value: _750.MsgExecLegacyContent): {
                    typeUrl: string;
                    value: unknown;
                };
                vote(value: _750.MsgVote): {
                    typeUrl: string;
                    value: unknown;
                };
                voteWeighted(value: _750.MsgVoteWeighted): {
                    typeUrl: string;
                    value: unknown;
                };
                deposit(value: _750.MsgDeposit): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                submitProposal(value: _750.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _750.MsgSubmitProposal;
                };
                execLegacyContent(value: _750.MsgExecLegacyContent): {
                    typeUrl: string;
                    value: _750.MsgExecLegacyContent;
                };
                vote(value: _750.MsgVote): {
                    typeUrl: string;
                    value: _750.MsgVote;
                };
                voteWeighted(value: _750.MsgVoteWeighted): {
                    typeUrl: string;
                    value: _750.MsgVoteWeighted;
                };
                deposit(value: _750.MsgDeposit): {
                    typeUrl: string;
                    value: _750.MsgDeposit;
                };
            };
            messages: {
                submitProposal(value: _750.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _750.MsgSubmitProposal;
                };
                execLegacyContent(value: _750.MsgExecLegacyContent): {
                    typeUrl: string;
                    value: _750.MsgExecLegacyContent;
                };
                vote(value: _750.MsgVote): {
                    typeUrl: string;
                    value: _750.MsgVote;
                };
                voteWeighted(value: _750.MsgVoteWeighted): {
                    typeUrl: string;
                    value: _750.MsgVoteWeighted;
                };
                deposit(value: _750.MsgDeposit): {
                    typeUrl: string;
                    value: _750.MsgDeposit;
                };
            };
            QueryProposalRequest: {
                encode(message: _748.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _748.QueryProposalRequest;
                fromJSON(object: any): _748.QueryProposalRequest;
                toJSON(message: _748.QueryProposalRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _748.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _748.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _748.QueryProposalResponse;
                fromJSON(object: any): _748.QueryProposalResponse;
                toJSON(message: _748.QueryProposalResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _748.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _748.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _748.QueryProposalsRequest;
                fromJSON(object: any): _748.QueryProposalsRequest;
                toJSON(message: _748.QueryProposalsRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _748.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _748.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _748.QueryProposalsResponse;
                fromJSON(object: any): _748.QueryProposalsResponse;
                toJSON(message: _748.QueryProposalsResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _748.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _748.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _748.QueryVoteRequest;
                fromJSON(object: any): _748.QueryVoteRequest;
                toJSON(message: _748.QueryVoteRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _748.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _748.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _748.QueryVoteResponse;
                fromJSON(object: any): _748.QueryVoteResponse;
                toJSON(message: _748.QueryVoteResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _748.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _748.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _748.QueryVotesRequest;
                fromJSON(object: any): _748.QueryVotesRequest;
                toJSON(message: _748.QueryVotesRequest): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _748.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _748.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _748.QueryVotesResponse;
                fromJSON(object: any): _748.QueryVotesResponse;
                toJSON(message: _748.QueryVotesResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _748.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _748.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _748.QueryParamsRequest;
                fromJSON(object: any): _748.QueryParamsRequest;
                toJSON(message: _748.QueryParamsRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _748.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _748.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _748.QueryParamsResponse;
                fromJSON(object: any): _748.QueryParamsResponse;
                toJSON(message: _748.QueryParamsResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _748.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _748.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _748.QueryDepositRequest;
                fromJSON(object: any): _748.QueryDepositRequest;
                toJSON(message: _748.QueryDepositRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _748.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _748.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _748.QueryDepositResponse;
                fromJSON(object: any): _748.QueryDepositResponse;
                toJSON(message: _748.QueryDepositResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _748.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _748.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _748.QueryDepositsRequest;
                fromJSON(object: any): _748.QueryDepositsRequest;
                toJSON(message: _748.QueryDepositsRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _748.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _748.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _748.QueryDepositsResponse;
                fromJSON(object: any): _748.QueryDepositsResponse;
                toJSON(message: _748.QueryDepositsResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _748.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _748.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _748.QueryTallyResultRequest;
                fromJSON(object: any): _748.QueryTallyResultRequest;
                toJSON(message: _748.QueryTallyResultRequest): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _748.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _748.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _748.QueryTallyResultResponse;
                fromJSON(object: any): _748.QueryTallyResultResponse;
                toJSON(message: _748.QueryTallyResultResponse): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _748.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _746.VoteOption;
            voteOptionToJSON(object: _746.VoteOption): string;
            proposalStatusFromJSON(object: any): _746.ProposalStatus;
            proposalStatusToJSON(object: _746.ProposalStatus): string;
            VoteOption: typeof _746.VoteOption;
            ProposalStatus: typeof _746.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _746.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _746.WeightedVoteOption;
                fromJSON(object: any): _746.WeightedVoteOption;
                toJSON(message: _746.WeightedVoteOption): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _746.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _746.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _746.Deposit;
                fromJSON(object: any): _746.Deposit;
                toJSON(message: _746.Deposit): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _746.Deposit;
            };
            Proposal: {
                encode(message: _746.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _746.Proposal;
                fromJSON(object: any): _746.Proposal;
                toJSON(message: _746.Proposal): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _746.Proposal;
            };
            TallyResult: {
                encode(message: _746.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _746.TallyResult;
                fromJSON(object: any): _746.TallyResult;
                toJSON(message: _746.TallyResult): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _746.TallyResult;
            };
            Vote: {
                encode(message: _746.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _746.Vote;
                fromJSON(object: any): _746.Vote;
                toJSON(message: _746.Vote): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _746.Vote;
            };
            DepositParams: {
                encode(message: _746.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _746.DepositParams;
                fromJSON(object: any): _746.DepositParams;
                toJSON(message: _746.DepositParams): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _746.DepositParams;
            };
            VotingParams: {
                encode(message: _746.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _746.VotingParams;
                fromJSON(object: any): _746.VotingParams;
                toJSON(message: _746.VotingParams): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _746.VotingParams;
            };
            TallyParams: {
                encode(message: _746.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _746.TallyParams;
                fromJSON(object: any): _746.TallyParams;
                toJSON(message: _746.TallyParams): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _746.TallyParams;
            };
            GenesisState: {
                encode(message: _744.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _744.GenesisState;
                fromJSON(object: any): _744.GenesisState;
                toJSON(message: _744.GenesisState): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _744.GenesisState;
            };
        };
        const v1beta1: {
            MsgSubmitProposal: {
                encode(message: _764.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _764.MsgSubmitProposal;
                fromJSON(object: any): _764.MsgSubmitProposal;
                toJSON(message: _764.MsgSubmitProposal): unknown;
                fromPartial<I extends unknown>(object: I): _764.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _764.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _764.MsgSubmitProposalResponse;
                fromJSON(object: any): _764.MsgSubmitProposalResponse;
                toJSON(message: _764.MsgSubmitProposalResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _764.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _764.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _764.MsgVote;
                fromJSON(object: any): _764.MsgVote;
                toJSON(message: _764.MsgVote): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _764.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _764.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _764.MsgVoteResponse;
                fromJSON(_: any): _764.MsgVoteResponse;
                toJSON(_: _764.MsgVoteResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _764.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _764.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _764.MsgVoteWeighted;
                fromJSON(object: any): _764.MsgVoteWeighted;
                toJSON(message: _764.MsgVoteWeighted): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _764.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _764.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _764.MsgVoteWeightedResponse;
                fromJSON(_: any): _764.MsgVoteWeightedResponse;
                toJSON(_: _764.MsgVoteWeightedResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _764.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _764.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _764.MsgDeposit;
                fromJSON(object: any): _764.MsgDeposit;
                toJSON(message: _764.MsgDeposit): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _764.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _764.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _764.MsgDepositResponse;
                fromJSON(_: any): _764.MsgDepositResponse;
                toJSON(_: _764.MsgDepositResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _764.MsgDepositResponse;
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _764.MsgSubmitProposal) => {
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
                    }) => _764.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _764.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _764.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _764.MsgVoteWeighted) => {
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
                    }) => _764.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _764.MsgDeposit) => {
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
                    }) => _764.MsgDeposit;
                };
            };
            encoded: {
                submitProposal(value: _764.MsgSubmitProposal): {
                    type_url: string;
                    value: Uint8Array;
                };
                vote(value: _764.MsgVote): {
                    type_url: string;
                    value: Uint8Array;
                };
                voteWeighted(value: _764.MsgVoteWeighted): {
                    type_url: string;
                    value: Uint8Array;
                };
                deposit(value: _764.MsgDeposit): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                submitProposal(value: any): {
                    typeUrl: string;
                    value: _764.MsgSubmitProposal;
                };
                vote(value: any): {
                    typeUrl: string;
                    value: _764.MsgVote;
                };
                voteWeighted(value: any): {
                    typeUrl: string;
                    value: _764.MsgVoteWeighted;
                };
                deposit(value: any): {
                    typeUrl: string;
                    value: _764.MsgDeposit;
                };
            };
            toJSON: {
                submitProposal(value: _764.MsgSubmitProposal): {
                    typeUrl: string;
                    value: unknown;
                };
                vote(value: _764.MsgVote): {
                    typeUrl: string;
                    value: unknown;
                };
                voteWeighted(value: _764.MsgVoteWeighted): {
                    typeUrl: string;
                    value: unknown;
                };
                deposit(value: _764.MsgDeposit): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                submitProposal(value: _764.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _764.MsgSubmitProposal;
                };
                vote(value: _764.MsgVote): {
                    typeUrl: string;
                    value: _764.MsgVote;
                };
                voteWeighted(value: _764.MsgVoteWeighted): {
                    typeUrl: string;
                    value: _764.MsgVoteWeighted;
                };
                deposit(value: _764.MsgDeposit): {
                    typeUrl: string;
                    value: _764.MsgDeposit;
                };
            };
            messages: {
                submitProposal(value: _764.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _764.MsgSubmitProposal;
                };
                vote(value: _764.MsgVote): {
                    typeUrl: string;
                    value: _764.MsgVote;
                };
                voteWeighted(value: _764.MsgVoteWeighted): {
                    typeUrl: string;
                    value: _764.MsgVoteWeighted;
                };
                deposit(value: _764.MsgDeposit): {
                    typeUrl: string;
                    value: _764.MsgDeposit;
                };
            };
            QueryProposalRequest: {
                encode(message: _762.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _762.QueryProposalRequest;
                fromJSON(object: any): _762.QueryProposalRequest;
                toJSON(message: _762.QueryProposalRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _762.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _762.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _762.QueryProposalResponse;
                fromJSON(object: any): _762.QueryProposalResponse;
                toJSON(message: _762.QueryProposalResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _762.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _762.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _762.QueryProposalsRequest;
                fromJSON(object: any): _762.QueryProposalsRequest;
                toJSON(message: _762.QueryProposalsRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _762.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _762.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _762.QueryProposalsResponse;
                fromJSON(object: any): _762.QueryProposalsResponse;
                toJSON(message: _762.QueryProposalsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _762.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _762.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _762.QueryVoteRequest;
                fromJSON(object: any): _762.QueryVoteRequest;
                toJSON(message: _762.QueryVoteRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _762.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _762.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _762.QueryVoteResponse;
                fromJSON(object: any): _762.QueryVoteResponse;
                toJSON(message: _762.QueryVoteResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _762.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _762.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _762.QueryVotesRequest;
                fromJSON(object: any): _762.QueryVotesRequest;
                toJSON(message: _762.QueryVotesRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _762.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _762.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _762.QueryVotesResponse;
                fromJSON(object: any): _762.QueryVotesResponse;
                toJSON(message: _762.QueryVotesResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _762.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _762.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _762.QueryParamsRequest;
                fromJSON(object: any): _762.QueryParamsRequest;
                toJSON(message: _762.QueryParamsRequest): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _762.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _762.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _762.QueryParamsResponse;
                fromJSON(object: any): _762.QueryParamsResponse;
                toJSON(message: _762.QueryParamsResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _762.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _762.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _762.QueryDepositRequest;
                fromJSON(object: any): _762.QueryDepositRequest;
                toJSON(message: _762.QueryDepositRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _762.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _762.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _762.QueryDepositResponse;
                fromJSON(object: any): _762.QueryDepositResponse;
                toJSON(message: _762.QueryDepositResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _762.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _762.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _762.QueryDepositsRequest;
                fromJSON(object: any): _762.QueryDepositsRequest;
                toJSON(message: _762.QueryDepositsRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _762.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _762.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _762.QueryDepositsResponse;
                fromJSON(object: any): _762.QueryDepositsResponse;
                toJSON(message: _762.QueryDepositsResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _762.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _762.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _762.QueryTallyResultRequest;
                fromJSON(object: any): _762.QueryTallyResultRequest;
                toJSON(message: _762.QueryTallyResultRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _762.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _762.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _762.QueryTallyResultResponse;
                fromJSON(object: any): _762.QueryTallyResultResponse;
                toJSON(message: _762.QueryTallyResultResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _762.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _760.VoteOption;
            voteOptionToJSON(object: _760.VoteOption): string;
            proposalStatusFromJSON(object: any): _760.ProposalStatus;
            proposalStatusToJSON(object: _760.ProposalStatus): string;
            VoteOption: typeof _760.VoteOption;
            ProposalStatus: typeof _760.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _760.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _760.WeightedVoteOption;
                fromJSON(object: any): _760.WeightedVoteOption;
                toJSON(message: _760.WeightedVoteOption): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _760.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _760.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _760.TextProposal;
                fromJSON(object: any): _760.TextProposal;
                toJSON(message: _760.TextProposal): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _760.TextProposal;
            };
            Deposit: {
                encode(message: _760.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _760.Deposit;
                fromJSON(object: any): _760.Deposit;
                toJSON(message: _760.Deposit): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _760.Deposit;
            };
            Proposal: {
                encode(message: _760.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _760.Proposal;
                fromJSON(object: any): _760.Proposal;
                toJSON(message: _760.Proposal): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _760.Proposal;
            };
            TallyResult: {
                encode(message: _760.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _760.TallyResult;
                fromJSON(object: any): _760.TallyResult;
                toJSON(message: _760.TallyResult): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _760.TallyResult;
            };
            Vote: {
                encode(message: _760.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _760.Vote;
                fromJSON(object: any): _760.Vote;
                toJSON(message: _760.Vote): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _760.Vote;
            };
            DepositParams: {
                encode(message: _760.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _760.DepositParams;
                fromJSON(object: any): _760.DepositParams;
                toJSON(message: _760.DepositParams): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _760.DepositParams;
            };
            VotingParams: {
                encode(message: _760.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _760.VotingParams;
                fromJSON(object: any): _760.VotingParams;
                toJSON(message: _760.VotingParams): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _760.VotingParams;
            };
            TallyParams: {
                encode(message: _760.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _760.TallyParams;
                fromJSON(object: any): _760.TallyParams;
                toJSON(message: _760.TallyParams): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _760.TallyParams;
            };
            GenesisState: {
                encode(message: _758.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _758.GenesisState;
                fromJSON(object: any): _758.GenesisState;
                toJSON(message: _758.GenesisState): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _758.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            voteOptionFromJSON(object: any): _786.VoteOption;
            voteOptionToJSON(object: _786.VoteOption): string;
            proposalStatusFromJSON(object: any): _786.ProposalStatus;
            proposalStatusToJSON(object: _786.ProposalStatus): string;
            proposalResultFromJSON(object: any): _786.ProposalResult;
            proposalResultToJSON(object: _786.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _786.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _786.ProposalExecutorResult): string;
            VoteOption: typeof _786.VoteOption;
            ProposalStatus: typeof _786.ProposalStatus;
            ProposalResult: typeof _786.ProposalResult;
            ProposalExecutorResult: typeof _786.ProposalExecutorResult;
            Member: {
                encode(message: _786.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _786.Member;
                fromJSON(object: any): _786.Member;
                toJSON(message: _786.Member): unknown;
                fromPartial<I extends unknown>(object: I): _786.Member;
            };
            Members: {
                encode(message: _786.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _786.Members;
                fromJSON(object: any): _786.Members;
                toJSON(message: _786.Members): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _786.Members;
            };
            ThresholdDecisionPolicy: {
                encode(message: _786.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _786.ThresholdDecisionPolicy;
                fromJSON(object: any): _786.ThresholdDecisionPolicy;
                toJSON(message: _786.ThresholdDecisionPolicy): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _786.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _786.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _786.PercentageDecisionPolicy;
                fromJSON(object: any): _786.PercentageDecisionPolicy;
                toJSON(message: _786.PercentageDecisionPolicy): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _786.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _786.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _786.DecisionPolicyWindows;
                fromJSON(object: any): _786.DecisionPolicyWindows;
                toJSON(message: _786.DecisionPolicyWindows): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _786.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _786.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _786.GroupInfo;
                fromJSON(object: any): _786.GroupInfo;
                toJSON(message: _786.GroupInfo): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _786.GroupInfo;
            };
            GroupMember: {
                encode(message: _786.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _786.GroupMember;
                fromJSON(object: any): _786.GroupMember;
                toJSON(message: _786.GroupMember): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _786.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _786.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _786.GroupPolicyInfo;
                fromJSON(object: any): _786.GroupPolicyInfo;
                toJSON(message: _786.GroupPolicyInfo): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _786.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _786.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _786.Proposal;
                fromJSON(object: any): _786.Proposal;
                toJSON(message: _786.Proposal): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _786.Proposal;
            };
            TallyResult: {
                encode(message: _786.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _786.TallyResult;
                fromJSON(object: any): _786.TallyResult;
                toJSON(message: _786.TallyResult): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _786.TallyResult;
            };
            Vote: {
                encode(message: _786.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _786.Vote;
                fromJSON(object: any): _786.Vote;
                toJSON(message: _786.Vote): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _786.Vote;
            };
            execFromJSON(object: any): _778.Exec;
            execToJSON(object: _778.Exec): string;
            Exec: typeof _778.Exec;
            MsgCreateGroup: {
                encode(message: _778.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgCreateGroup;
                fromJSON(object: any): _778.MsgCreateGroup;
                toJSON(message: _778.MsgCreateGroup): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _778.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _778.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgCreateGroupResponse;
                fromJSON(object: any): _778.MsgCreateGroupResponse;
                toJSON(message: _778.MsgCreateGroupResponse): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _778.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _778.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgUpdateGroupMembers;
                fromJSON(object: any): _778.MsgUpdateGroupMembers;
                toJSON(message: _778.MsgUpdateGroupMembers): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _778.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _778.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _778.MsgUpdateGroupMembersResponse;
                toJSON(_: _778.MsgUpdateGroupMembersResponse): unknown;
                fromPartial<I_14 extends unknown>(_: I_14): _778.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _778.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgUpdateGroupAdmin;
                fromJSON(object: any): _778.MsgUpdateGroupAdmin;
                toJSON(message: _778.MsgUpdateGroupAdmin): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _778.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _778.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _778.MsgUpdateGroupAdminResponse;
                toJSON(_: _778.MsgUpdateGroupAdminResponse): unknown;
                fromPartial<I_16 extends unknown>(_: I_16): _778.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _778.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgUpdateGroupMetadata;
                fromJSON(object: any): _778.MsgUpdateGroupMetadata;
                toJSON(message: _778.MsgUpdateGroupMetadata): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _778.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _778.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _778.MsgUpdateGroupMetadataResponse;
                toJSON(_: _778.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial<I_18 extends unknown>(_: I_18): _778.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _778.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgCreateGroupPolicy;
                fromJSON(object: any): _778.MsgCreateGroupPolicy;
                toJSON(message: _778.MsgCreateGroupPolicy): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _778.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _778.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _778.MsgCreateGroupPolicyResponse;
                toJSON(message: _778.MsgCreateGroupPolicyResponse): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _778.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _778.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _778.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _778.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _778.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _778.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _778.MsgCreateGroupWithPolicy;
                toJSON(message: _778.MsgCreateGroupWithPolicy): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _778.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _778.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _778.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _778.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _778.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _778.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _778.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _778.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial<I_24 extends unknown>(_: I_24): _778.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _778.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _778.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _778.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _778.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _778.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _778.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _778.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial<I_26 extends unknown>(_: I_26): _778.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _778.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _778.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _778.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _778.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _778.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _778.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _778.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial<I_28 extends unknown>(_: I_28): _778.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _778.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgSubmitProposal;
                fromJSON(object: any): _778.MsgSubmitProposal;
                toJSON(message: _778.MsgSubmitProposal): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _778.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _778.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgSubmitProposalResponse;
                fromJSON(object: any): _778.MsgSubmitProposalResponse;
                toJSON(message: _778.MsgSubmitProposalResponse): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _778.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _778.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgWithdrawProposal;
                fromJSON(object: any): _778.MsgWithdrawProposal;
                toJSON(message: _778.MsgWithdrawProposal): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _778.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _778.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgWithdrawProposalResponse;
                fromJSON(_: any): _778.MsgWithdrawProposalResponse;
                toJSON(_: _778.MsgWithdrawProposalResponse): unknown;
                fromPartial<I_32 extends unknown>(_: I_32): _778.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _778.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgVote;
                fromJSON(object: any): _778.MsgVote;
                toJSON(message: _778.MsgVote): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _778.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _778.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgVoteResponse;
                fromJSON(_: any): _778.MsgVoteResponse;
                toJSON(_: _778.MsgVoteResponse): unknown;
                fromPartial<I_34 extends unknown>(_: I_34): _778.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _778.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgExec;
                fromJSON(object: any): _778.MsgExec;
                toJSON(message: _778.MsgExec): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _778.MsgExec;
            };
            MsgExecResponse: {
                encode(_: _778.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgExecResponse;
                fromJSON(_: any): _778.MsgExecResponse;
                toJSON(_: _778.MsgExecResponse): unknown;
                fromPartial<I_36 extends unknown>(_: I_36): _778.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _778.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgLeaveGroup;
                fromJSON(object: any): _778.MsgLeaveGroup;
                toJSON(message: _778.MsgLeaveGroup): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _778.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _778.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.MsgLeaveGroupResponse;
                fromJSON(_: any): _778.MsgLeaveGroupResponse;
                toJSON(_: _778.MsgLeaveGroupResponse): unknown;
                fromPartial<I_38 extends unknown>(_: I_38): _778.MsgLeaveGroupResponse;
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _778.MsgCreateGroup) => {
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
                    }) => _778.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _778.MsgUpdateGroupMembers) => {
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
                    }) => _778.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _778.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _778.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _778.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _778.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _778.MsgCreateGroupPolicy) => {
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
                    }) => _778.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _778.MsgCreateGroupWithPolicy) => {
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
                    }) => _778.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, address, newAdmin }: _778.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, address, new_admin }: {
                        admin: string;
                        address: string;
                        new_admin: string;
                    }) => _778.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, address, decisionPolicy }: _778.MsgUpdateGroupPolicyDecisionPolicy) => {
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
                    }) => _778.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, address, metadata }: _778.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, address, metadata }: {
                        admin: string;
                        address: string;
                        metadata: string;
                    }) => _778.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ address, proposers, metadata, messages, exec }: _778.MsgSubmitProposal) => {
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
                    }) => _778.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _778.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _778.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _778.MsgVote) => {
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
                    }) => _778.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, signer }: _778.MsgExec) => {
                        proposal_id: string;
                        signer: string;
                    };
                    fromAmino: ({ proposal_id, signer }: {
                        proposal_id: string;
                        signer: string;
                    }) => _778.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _778.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _778.MsgLeaveGroup;
                };
            };
            encoded: {
                createGroup(value: _778.MsgCreateGroup): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupMembers(value: _778.MsgUpdateGroupMembers): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupAdmin(value: _778.MsgUpdateGroupAdmin): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupMetadata(value: _778.MsgUpdateGroupMetadata): {
                    type_url: string;
                    value: Uint8Array;
                };
                createGroupPolicy(value: _778.MsgCreateGroupPolicy): {
                    type_url: string;
                    value: Uint8Array;
                };
                createGroupWithPolicy(value: _778.MsgCreateGroupWithPolicy): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupPolicyAdmin(value: _778.MsgUpdateGroupPolicyAdmin): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupPolicyDecisionPolicy(value: _778.MsgUpdateGroupPolicyDecisionPolicy): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupPolicyMetadata(value: _778.MsgUpdateGroupPolicyMetadata): {
                    type_url: string;
                    value: Uint8Array;
                };
                submitProposal(value: _778.MsgSubmitProposal): {
                    type_url: string;
                    value: Uint8Array;
                };
                withdrawProposal(value: _778.MsgWithdrawProposal): {
                    type_url: string;
                    value: Uint8Array;
                };
                vote(value: _778.MsgVote): {
                    type_url: string;
                    value: Uint8Array;
                };
                exec(value: _778.MsgExec): {
                    type_url: string;
                    value: Uint8Array;
                };
                leaveGroup(value: _778.MsgLeaveGroup): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                createGroup(value: any): {
                    typeUrl: string;
                    value: _778.MsgCreateGroup;
                };
                updateGroupMembers(value: any): {
                    typeUrl: string;
                    value: _778.MsgUpdateGroupMembers;
                };
                updateGroupAdmin(value: any): {
                    typeUrl: string;
                    value: _778.MsgUpdateGroupAdmin;
                };
                updateGroupMetadata(value: any): {
                    typeUrl: string;
                    value: _778.MsgUpdateGroupMetadata;
                };
                createGroupPolicy(value: any): {
                    typeUrl: string;
                    value: _778.MsgCreateGroupPolicy;
                };
                createGroupWithPolicy(value: any): {
                    typeUrl: string;
                    value: _778.MsgCreateGroupWithPolicy;
                };
                updateGroupPolicyAdmin(value: any): {
                    typeUrl: string;
                    value: _778.MsgUpdateGroupPolicyAdmin;
                };
                updateGroupPolicyDecisionPolicy(value: any): {
                    typeUrl: string;
                    value: _778.MsgUpdateGroupPolicyDecisionPolicy;
                };
                updateGroupPolicyMetadata(value: any): {
                    typeUrl: string;
                    value: _778.MsgUpdateGroupPolicyMetadata;
                };
                submitProposal(value: any): {
                    typeUrl: string;
                    value: _778.MsgSubmitProposal;
                };
                withdrawProposal(value: any): {
                    typeUrl: string;
                    value: _778.MsgWithdrawProposal;
                };
                vote(value: any): {
                    typeUrl: string;
                    value: _778.MsgVote;
                };
                exec(value: any): {
                    typeUrl: string;
                    value: _778.MsgExec;
                };
                leaveGroup(value: any): {
                    typeUrl: string;
                    value: _778.MsgLeaveGroup;
                };
            };
            toJSON: {
                createGroup(value: _778.MsgCreateGroup): {
                    typeUrl: string;
                    value: unknown;
                };
                updateGroupMembers(value: _778.MsgUpdateGroupMembers): {
                    typeUrl: string;
                    value: unknown;
                };
                updateGroupAdmin(value: _778.MsgUpdateGroupAdmin): {
                    typeUrl: string;
                    value: unknown;
                };
                updateGroupMetadata(value: _778.MsgUpdateGroupMetadata): {
                    typeUrl: string;
                    value: unknown;
                };
                createGroupPolicy(value: _778.MsgCreateGroupPolicy): {
                    typeUrl: string;
                    value: unknown;
                };
                createGroupWithPolicy(value: _778.MsgCreateGroupWithPolicy): {
                    typeUrl: string;
                    value: unknown;
                };
                updateGroupPolicyAdmin(value: _778.MsgUpdateGroupPolicyAdmin): {
                    typeUrl: string;
                    value: unknown;
                };
                updateGroupPolicyDecisionPolicy(value: _778.MsgUpdateGroupPolicyDecisionPolicy): {
                    typeUrl: string;
                    value: unknown;
                };
                updateGroupPolicyMetadata(value: _778.MsgUpdateGroupPolicyMetadata): {
                    typeUrl: string;
                    value: unknown;
                };
                submitProposal(value: _778.MsgSubmitProposal): {
                    typeUrl: string;
                    value: unknown;
                };
                withdrawProposal(value: _778.MsgWithdrawProposal): {
                    typeUrl: string;
                    value: unknown;
                };
                vote(value: _778.MsgVote): {
                    typeUrl: string;
                    value: unknown;
                };
                exec(value: _778.MsgExec): {
                    typeUrl: string;
                    value: unknown;
                };
                leaveGroup(value: _778.MsgLeaveGroup): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                createGroup(value: _778.MsgCreateGroup): {
                    typeUrl: string;
                    value: _778.MsgCreateGroup;
                };
                updateGroupMembers(value: _778.MsgUpdateGroupMembers): {
                    typeUrl: string;
                    value: _778.MsgUpdateGroupMembers;
                };
                updateGroupAdmin(value: _778.MsgUpdateGroupAdmin): {
                    typeUrl: string;
                    value: _778.MsgUpdateGroupAdmin;
                };
                updateGroupMetadata(value: _778.MsgUpdateGroupMetadata): {
                    typeUrl: string;
                    value: _778.MsgUpdateGroupMetadata;
                };
                createGroupPolicy(value: _778.MsgCreateGroupPolicy): {
                    typeUrl: string;
                    value: _778.MsgCreateGroupPolicy;
                };
                createGroupWithPolicy(value: _778.MsgCreateGroupWithPolicy): {
                    typeUrl: string;
                    value: _778.MsgCreateGroupWithPolicy;
                };
                updateGroupPolicyAdmin(value: _778.MsgUpdateGroupPolicyAdmin): {
                    typeUrl: string;
                    value: _778.MsgUpdateGroupPolicyAdmin;
                };
                updateGroupPolicyDecisionPolicy(value: _778.MsgUpdateGroupPolicyDecisionPolicy): {
                    typeUrl: string;
                    value: _778.MsgUpdateGroupPolicyDecisionPolicy;
                };
                updateGroupPolicyMetadata(value: _778.MsgUpdateGroupPolicyMetadata): {
                    typeUrl: string;
                    value: _778.MsgUpdateGroupPolicyMetadata;
                };
                submitProposal(value: _778.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _778.MsgSubmitProposal;
                };
                withdrawProposal(value: _778.MsgWithdrawProposal): {
                    typeUrl: string;
                    value: _778.MsgWithdrawProposal;
                };
                vote(value: _778.MsgVote): {
                    typeUrl: string;
                    value: _778.MsgVote;
                };
                exec(value: _778.MsgExec): {
                    typeUrl: string;
                    value: _778.MsgExec;
                };
                leaveGroup(value: _778.MsgLeaveGroup): {
                    typeUrl: string;
                    value: _778.MsgLeaveGroup;
                };
            };
            messages: {
                createGroup(value: _778.MsgCreateGroup): {
                    typeUrl: string;
                    value: _778.MsgCreateGroup;
                };
                updateGroupMembers(value: _778.MsgUpdateGroupMembers): {
                    typeUrl: string;
                    value: _778.MsgUpdateGroupMembers;
                };
                updateGroupAdmin(value: _778.MsgUpdateGroupAdmin): {
                    typeUrl: string;
                    value: _778.MsgUpdateGroupAdmin;
                };
                updateGroupMetadata(value: _778.MsgUpdateGroupMetadata): {
                    typeUrl: string;
                    value: _778.MsgUpdateGroupMetadata;
                };
                createGroupPolicy(value: _778.MsgCreateGroupPolicy): {
                    typeUrl: string;
                    value: _778.MsgCreateGroupPolicy;
                };
                createGroupWithPolicy(value: _778.MsgCreateGroupWithPolicy): {
                    typeUrl: string;
                    value: _778.MsgCreateGroupWithPolicy;
                };
                updateGroupPolicyAdmin(value: _778.MsgUpdateGroupPolicyAdmin): {
                    typeUrl: string;
                    value: _778.MsgUpdateGroupPolicyAdmin;
                };
                updateGroupPolicyDecisionPolicy(value: _778.MsgUpdateGroupPolicyDecisionPolicy): {
                    typeUrl: string;
                    value: _778.MsgUpdateGroupPolicyDecisionPolicy;
                };
                updateGroupPolicyMetadata(value: _778.MsgUpdateGroupPolicyMetadata): {
                    typeUrl: string;
                    value: _778.MsgUpdateGroupPolicyMetadata;
                };
                submitProposal(value: _778.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _778.MsgSubmitProposal;
                };
                withdrawProposal(value: _778.MsgWithdrawProposal): {
                    typeUrl: string;
                    value: _778.MsgWithdrawProposal;
                };
                vote(value: _778.MsgVote): {
                    typeUrl: string;
                    value: _778.MsgVote;
                };
                exec(value: _778.MsgExec): {
                    typeUrl: string;
                    value: _778.MsgExec;
                };
                leaveGroup(value: _778.MsgLeaveGroup): {
                    typeUrl: string;
                    value: _778.MsgLeaveGroup;
                };
            };
            QueryGroupInfoRequest: {
                encode(message: _776.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryGroupInfoRequest;
                fromJSON(object: any): _776.QueryGroupInfoRequest;
                toJSON(message: _776.QueryGroupInfoRequest): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _776.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _776.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryGroupInfoResponse;
                fromJSON(object: any): _776.QueryGroupInfoResponse;
                toJSON(message: _776.QueryGroupInfoResponse): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _776.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _776.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _776.QueryGroupPolicyInfoRequest;
                toJSON(message: _776.QueryGroupPolicyInfoRequest): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _776.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _776.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _776.QueryGroupPolicyInfoResponse;
                toJSON(message: _776.QueryGroupPolicyInfoResponse): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _776.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _776.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryGroupMembersRequest;
                fromJSON(object: any): _776.QueryGroupMembersRequest;
                toJSON(message: _776.QueryGroupMembersRequest): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _776.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _776.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryGroupMembersResponse;
                fromJSON(object: any): _776.QueryGroupMembersResponse;
                toJSON(message: _776.QueryGroupMembersResponse): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _776.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _776.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryGroupsByAdminRequest;
                fromJSON(object: any): _776.QueryGroupsByAdminRequest;
                toJSON(message: _776.QueryGroupsByAdminRequest): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _776.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _776.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryGroupsByAdminResponse;
                fromJSON(object: any): _776.QueryGroupsByAdminResponse;
                toJSON(message: _776.QueryGroupsByAdminResponse): unknown;
                fromPartial<I_46 extends unknown>(object: I_46): _776.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _776.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _776.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _776.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial<I_47 extends unknown>(object: I_47): _776.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _776.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _776.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _776.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial<I_48 extends unknown>(object: I_48): _776.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _776.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _776.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _776.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial<I_49 extends unknown>(object: I_49): _776.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _776.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _776.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _776.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial<I_50 extends unknown>(object: I_50): _776.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _776.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryProposalRequest;
                fromJSON(object: any): _776.QueryProposalRequest;
                toJSON(message: _776.QueryProposalRequest): unknown;
                fromPartial<I_51 extends unknown>(object: I_51): _776.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _776.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryProposalResponse;
                fromJSON(object: any): _776.QueryProposalResponse;
                toJSON(message: _776.QueryProposalResponse): unknown;
                fromPartial<I_52 extends unknown>(object: I_52): _776.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _776.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _776.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _776.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial<I_53 extends unknown>(object: I_53): _776.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _776.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _776.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _776.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial<I_54 extends unknown>(object: I_54): _776.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _776.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _776.QueryVoteByProposalVoterRequest;
                toJSON(message: _776.QueryVoteByProposalVoterRequest): unknown;
                fromPartial<I_55 extends unknown>(object: I_55): _776.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _776.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _776.QueryVoteByProposalVoterResponse;
                toJSON(message: _776.QueryVoteByProposalVoterResponse): unknown;
                fromPartial<I_56 extends unknown>(object: I_56): _776.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _776.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryVotesByProposalRequest;
                fromJSON(object: any): _776.QueryVotesByProposalRequest;
                toJSON(message: _776.QueryVotesByProposalRequest): unknown;
                fromPartial<I_57 extends unknown>(object: I_57): _776.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _776.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryVotesByProposalResponse;
                fromJSON(object: any): _776.QueryVotesByProposalResponse;
                toJSON(message: _776.QueryVotesByProposalResponse): unknown;
                fromPartial<I_58 extends unknown>(object: I_58): _776.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _776.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryVotesByVoterRequest;
                fromJSON(object: any): _776.QueryVotesByVoterRequest;
                toJSON(message: _776.QueryVotesByVoterRequest): unknown;
                fromPartial<I_59 extends unknown>(object: I_59): _776.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _776.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryVotesByVoterResponse;
                fromJSON(object: any): _776.QueryVotesByVoterResponse;
                toJSON(message: _776.QueryVotesByVoterResponse): unknown;
                fromPartial<I_60 extends unknown>(object: I_60): _776.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _776.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryGroupsByMemberRequest;
                fromJSON(object: any): _776.QueryGroupsByMemberRequest;
                toJSON(message: _776.QueryGroupsByMemberRequest): unknown;
                fromPartial<I_61 extends unknown>(object: I_61): _776.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _776.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryGroupsByMemberResponse;
                fromJSON(object: any): _776.QueryGroupsByMemberResponse;
                toJSON(message: _776.QueryGroupsByMemberResponse): unknown;
                fromPartial<I_62 extends unknown>(object: I_62): _776.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _776.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryTallyResultRequest;
                fromJSON(object: any): _776.QueryTallyResultRequest;
                toJSON(message: _776.QueryTallyResultRequest): unknown;
                fromPartial<I_63 extends unknown>(object: I_63): _776.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _776.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.QueryTallyResultResponse;
                fromJSON(object: any): _776.QueryTallyResultResponse;
                toJSON(message: _776.QueryTallyResultResponse): unknown;
                fromPartial<I_64 extends unknown>(object: I_64): _776.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _774.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _774.GenesisState;
                fromJSON(object: any): _774.GenesisState;
                toJSON(message: _774.GenesisState): unknown;
                fromPartial<I_65 extends unknown>(object: I_65): _774.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _772.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _772.EventCreateGroup;
                fromJSON(object: any): _772.EventCreateGroup;
                toJSON(message: _772.EventCreateGroup): unknown;
                fromPartial<I_66 extends unknown>(object: I_66): _772.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _772.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _772.EventUpdateGroup;
                fromJSON(object: any): _772.EventUpdateGroup;
                toJSON(message: _772.EventUpdateGroup): unknown;
                fromPartial<I_67 extends unknown>(object: I_67): _772.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _772.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _772.EventCreateGroupPolicy;
                fromJSON(object: any): _772.EventCreateGroupPolicy;
                toJSON(message: _772.EventCreateGroupPolicy): unknown;
                fromPartial<I_68 extends unknown>(object: I_68): _772.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _772.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _772.EventUpdateGroupPolicy;
                fromJSON(object: any): _772.EventUpdateGroupPolicy;
                toJSON(message: _772.EventUpdateGroupPolicy): unknown;
                fromPartial<I_69 extends unknown>(object: I_69): _772.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _772.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _772.EventSubmitProposal;
                fromJSON(object: any): _772.EventSubmitProposal;
                toJSON(message: _772.EventSubmitProposal): unknown;
                fromPartial<I_70 extends unknown>(object: I_70): _772.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _772.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _772.EventWithdrawProposal;
                fromJSON(object: any): _772.EventWithdrawProposal;
                toJSON(message: _772.EventWithdrawProposal): unknown;
                fromPartial<I_71 extends unknown>(object: I_71): _772.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _772.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _772.EventVote;
                fromJSON(object: any): _772.EventVote;
                toJSON(message: _772.EventVote): unknown;
                fromPartial<I_72 extends unknown>(object: I_72): _772.EventVote;
            };
            EventExec: {
                encode(message: _772.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _772.EventExec;
                fromJSON(object: any): _772.EventExec;
                toJSON(message: _772.EventExec): unknown;
                fromPartial<I_73 extends unknown>(object: I_73): _772.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _772.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _772.EventLeaveGroup;
                fromJSON(object: any): _772.EventLeaveGroup;
                toJSON(message: _772.EventLeaveGroup): unknown;
                fromPartial<I_74 extends unknown>(object: I_74): _772.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _792.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _792.QueryParamsRequest;
                fromJSON(_: any): _792.QueryParamsRequest;
                toJSON(_: _792.QueryParamsRequest): unknown;
                fromPartial<I extends unknown>(_: I): _792.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _792.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _792.QueryParamsResponse;
                fromJSON(object: any): _792.QueryParamsResponse;
                toJSON(message: _792.QueryParamsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _792.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _792.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _792.QueryInflationRequest;
                fromJSON(_: any): _792.QueryInflationRequest;
                toJSON(_: _792.QueryInflationRequest): unknown;
                fromPartial<I_2 extends unknown>(_: I_2): _792.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _792.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _792.QueryInflationResponse;
                fromJSON(object: any): _792.QueryInflationResponse;
                toJSON(message: _792.QueryInflationResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _792.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _792.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _792.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _792.QueryAnnualProvisionsRequest;
                toJSON(_: _792.QueryAnnualProvisionsRequest): unknown;
                fromPartial<I_4 extends unknown>(_: I_4): _792.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _792.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _792.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _792.QueryAnnualProvisionsResponse;
                toJSON(message: _792.QueryAnnualProvisionsResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _792.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _790.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _790.Minter;
                fromJSON(object: any): _790.Minter;
                toJSON(message: _790.Minter): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _790.Minter;
            };
            Params: {
                encode(message: _790.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _790.Params;
                fromJSON(object: any): _790.Params;
                toJSON(message: _790.Params): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _790.Params;
            };
            GenesisState: {
                encode(message: _788.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _788.GenesisState;
                fromJSON(object: any): _788.GenesisState;
                toJSON(message: _788.GenesisState): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _788.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgSend: {
                encode(message: _804.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _804.MsgSend;
                fromJSON(object: any): _804.MsgSend;
                toJSON(message: _804.MsgSend): unknown;
                fromPartial<I extends unknown>(object: I): _804.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _804.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _804.MsgSendResponse;
                fromJSON(_: any): _804.MsgSendResponse;
                toJSON(_: _804.MsgSendResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _804.MsgSendResponse;
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _804.MsgSend) => {
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
                    }) => _804.MsgSend;
                };
            };
            encoded: {
                send(value: _804.MsgSend): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                send(value: any): {
                    typeUrl: string;
                    value: _804.MsgSend;
                };
            };
            toJSON: {
                send(value: _804.MsgSend): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                send(value: _804.MsgSend): {
                    typeUrl: string;
                    value: _804.MsgSend;
                };
            };
            messages: {
                send(value: _804.MsgSend): {
                    typeUrl: string;
                    value: _804.MsgSend;
                };
            };
            QueryBalanceRequest: {
                encode(message: _802.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.QueryBalanceRequest;
                fromJSON(object: any): _802.QueryBalanceRequest;
                toJSON(message: _802.QueryBalanceRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _802.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _802.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.QueryBalanceResponse;
                fromJSON(object: any): _802.QueryBalanceResponse;
                toJSON(message: _802.QueryBalanceResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _802.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _802.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.QueryOwnerRequest;
                fromJSON(object: any): _802.QueryOwnerRequest;
                toJSON(message: _802.QueryOwnerRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _802.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _802.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.QueryOwnerResponse;
                fromJSON(object: any): _802.QueryOwnerResponse;
                toJSON(message: _802.QueryOwnerResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _802.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _802.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.QuerySupplyRequest;
                fromJSON(object: any): _802.QuerySupplyRequest;
                toJSON(message: _802.QuerySupplyRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _802.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _802.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.QuerySupplyResponse;
                fromJSON(object: any): _802.QuerySupplyResponse;
                toJSON(message: _802.QuerySupplyResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _802.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _802.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.QueryNFTsRequest;
                fromJSON(object: any): _802.QueryNFTsRequest;
                toJSON(message: _802.QueryNFTsRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _802.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _802.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.QueryNFTsResponse;
                fromJSON(object: any): _802.QueryNFTsResponse;
                toJSON(message: _802.QueryNFTsResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _802.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _802.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.QueryNFTRequest;
                fromJSON(object: any): _802.QueryNFTRequest;
                toJSON(message: _802.QueryNFTRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _802.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _802.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.QueryNFTResponse;
                fromJSON(object: any): _802.QueryNFTResponse;
                toJSON(message: _802.QueryNFTResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _802.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _802.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.QueryClassRequest;
                fromJSON(object: any): _802.QueryClassRequest;
                toJSON(message: _802.QueryClassRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _802.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _802.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.QueryClassResponse;
                fromJSON(object: any): _802.QueryClassResponse;
                toJSON(message: _802.QueryClassResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _802.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _802.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.QueryClassesRequest;
                fromJSON(object: any): _802.QueryClassesRequest;
                toJSON(message: _802.QueryClassesRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _802.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _802.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.QueryClassesResponse;
                fromJSON(object: any): _802.QueryClassesResponse;
                toJSON(message: _802.QueryClassesResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _802.QueryClassesResponse;
            };
            Class: {
                encode(message: _800.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _800.Class;
                fromJSON(object: any): _800.Class;
                toJSON(message: _800.Class): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _800.Class;
            };
            NFT: {
                encode(message: _800.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _800.NFT;
                fromJSON(object: any): _800.NFT;
                toJSON(message: _800.NFT): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _800.NFT;
            };
            GenesisState: {
                encode(message: _798.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _798.GenesisState;
                fromJSON(object: any): _798.GenesisState;
                toJSON(message: _798.GenesisState): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _798.GenesisState;
            };
            Entry: {
                encode(message: _798.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _798.Entry;
                fromJSON(object: any): _798.Entry;
                toJSON(message: _798.Entry): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _798.Entry;
            };
            EventSend: {
                encode(message: _796.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _796.EventSend;
                fromJSON(object: any): _796.EventSend;
                toJSON(message: _796.EventSend): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _796.EventSend;
            };
            EventMint: {
                encode(message: _796.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _796.EventMint;
                fromJSON(object: any): _796.EventMint;
                toJSON(message: _796.EventMint): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _796.EventMint;
            };
            EventBurn: {
                encode(message: _796.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _796.EventBurn;
                fromJSON(object: any): _796.EventBurn;
                toJSON(message: _796.EventBurn): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _796.EventBurn;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _812.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _812.TableDescriptor;
                fromJSON(object: any): _812.TableDescriptor;
                toJSON(message: _812.TableDescriptor): unknown;
                fromPartial<I extends unknown>(object: I): _812.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _812.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _812.PrimaryKeyDescriptor;
                fromJSON(object: any): _812.PrimaryKeyDescriptor;
                toJSON(message: _812.PrimaryKeyDescriptor): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _812.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _812.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _812.SecondaryIndexDescriptor;
                fromJSON(object: any): _812.SecondaryIndexDescriptor;
                toJSON(message: _812.SecondaryIndexDescriptor): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _812.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _812.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _812.SingletonDescriptor;
                fromJSON(object: any): _812.SingletonDescriptor;
                toJSON(message: _812.SingletonDescriptor): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _812.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _814.StorageType;
            storageTypeToJSON(object: _814.StorageType): string;
            StorageType: typeof _814.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _814.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _814.ModuleSchemaDescriptor;
                fromJSON(object: any): _814.ModuleSchemaDescriptor;
                toJSON(message: _814.ModuleSchemaDescriptor): unknown;
                fromPartial<I extends unknown>(object: I): _814.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _814.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _814.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _814.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _814.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _814.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryParamsRequest: {
                encode(message: _818.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _818.QueryParamsRequest;
                fromJSON(object: any): _818.QueryParamsRequest;
                toJSON(message: _818.QueryParamsRequest): unknown;
                fromPartial<I extends unknown>(object: I): _818.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _818.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _818.QueryParamsResponse;
                fromJSON(object: any): _818.QueryParamsResponse;
                toJSON(message: _818.QueryParamsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _818.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _818.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _818.QuerySubspacesRequest;
                fromJSON(_: any): _818.QuerySubspacesRequest;
                toJSON(_: _818.QuerySubspacesRequest): unknown;
                fromPartial<I_2 extends unknown>(_: I_2): _818.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _818.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _818.QuerySubspacesResponse;
                fromJSON(object: any): _818.QuerySubspacesResponse;
                toJSON(message: _818.QuerySubspacesResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _818.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _818.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _818.Subspace;
                fromJSON(object: any): _818.Subspace;
                toJSON(message: _818.Subspace): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _818.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _816.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _816.ParameterChangeProposal;
                fromJSON(object: any): _816.ParameterChangeProposal;
                toJSON(message: _816.ParameterChangeProposal): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _816.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _816.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _816.ParamChange;
                fromJSON(object: any): _816.ParamChange;
                toJSON(message: _816.ParamChange): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _816.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgUnjail: {
                encode(message: _826.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _826.MsgUnjail;
                fromJSON(object: any): _826.MsgUnjail;
                toJSON(message: _826.MsgUnjail): unknown;
                fromPartial<I extends unknown>(object: I): _826.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _826.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _826.MsgUnjailResponse;
                fromJSON(_: any): _826.MsgUnjailResponse;
                toJSON(_: _826.MsgUnjailResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _826.MsgUnjailResponse;
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _826.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _826.MsgUnjail;
                };
            };
            encoded: {
                unjail(value: _826.MsgUnjail): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                unjail(value: any): {
                    typeUrl: string;
                    value: _826.MsgUnjail;
                };
            };
            toJSON: {
                unjail(value: _826.MsgUnjail): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                unjail(value: _826.MsgUnjail): {
                    typeUrl: string;
                    value: _826.MsgUnjail;
                };
            };
            messages: {
                unjail(value: _826.MsgUnjail): {
                    typeUrl: string;
                    value: _826.MsgUnjail;
                };
            };
            ValidatorSigningInfo: {
                encode(message: _824.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.ValidatorSigningInfo;
                fromJSON(object: any): _824.ValidatorSigningInfo;
                toJSON(message: _824.ValidatorSigningInfo): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _824.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _824.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.Params;
                fromJSON(object: any): _824.Params;
                toJSON(message: _824.Params): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _824.Params;
            };
            QueryParamsRequest: {
                encode(_: _822.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _822.QueryParamsRequest;
                fromJSON(_: any): _822.QueryParamsRequest;
                toJSON(_: _822.QueryParamsRequest): unknown;
                fromPartial<I_4 extends unknown>(_: I_4): _822.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _822.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _822.QueryParamsResponse;
                fromJSON(object: any): _822.QueryParamsResponse;
                toJSON(message: _822.QueryParamsResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _822.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _822.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _822.QuerySigningInfoRequest;
                fromJSON(object: any): _822.QuerySigningInfoRequest;
                toJSON(message: _822.QuerySigningInfoRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _822.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _822.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _822.QuerySigningInfoResponse;
                fromJSON(object: any): _822.QuerySigningInfoResponse;
                toJSON(message: _822.QuerySigningInfoResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _822.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _822.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _822.QuerySigningInfosRequest;
                fromJSON(object: any): _822.QuerySigningInfosRequest;
                toJSON(message: _822.QuerySigningInfosRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _822.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _822.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _822.QuerySigningInfosResponse;
                fromJSON(object: any): _822.QuerySigningInfosResponse;
                toJSON(message: _822.QuerySigningInfosResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _822.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _820.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _820.GenesisState;
                fromJSON(object: any): _820.GenesisState;
                toJSON(message: _820.GenesisState): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _820.GenesisState;
            };
            SigningInfo: {
                encode(message: _820.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _820.SigningInfo;
                fromJSON(object: any): _820.SigningInfo;
                toJSON(message: _820.SigningInfo): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _820.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _820.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _820.ValidatorMissedBlocks;
                fromJSON(object: any): _820.ValidatorMissedBlocks;
                toJSON(message: _820.ValidatorMissedBlocks): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _820.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _820.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _820.MissedBlock;
                fromJSON(object: any): _820.MissedBlock;
                toJSON(message: _820.MissedBlock): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _820.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgCreateValidator: {
                encode(message: _842.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _842.MsgCreateValidator;
                fromJSON(object: any): _842.MsgCreateValidator;
                toJSON(message: _842.MsgCreateValidator): unknown;
                fromPartial<I extends unknown>(object: I): _842.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _842.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _842.MsgCreateValidatorResponse;
                fromJSON(_: any): _842.MsgCreateValidatorResponse;
                toJSON(_: _842.MsgCreateValidatorResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _842.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _842.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _842.MsgEditValidator;
                fromJSON(object: any): _842.MsgEditValidator;
                toJSON(message: _842.MsgEditValidator): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _842.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _842.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _842.MsgEditValidatorResponse;
                fromJSON(_: any): _842.MsgEditValidatorResponse;
                toJSON(_: _842.MsgEditValidatorResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _842.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _842.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _842.MsgDelegate;
                fromJSON(object: any): _842.MsgDelegate;
                toJSON(message: _842.MsgDelegate): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _842.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _842.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _842.MsgDelegateResponse;
                fromJSON(_: any): _842.MsgDelegateResponse;
                toJSON(_: _842.MsgDelegateResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _842.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _842.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _842.MsgBeginRedelegate;
                fromJSON(object: any): _842.MsgBeginRedelegate;
                toJSON(message: _842.MsgBeginRedelegate): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _842.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _842.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _842.MsgBeginRedelegateResponse;
                fromJSON(object: any): _842.MsgBeginRedelegateResponse;
                toJSON(message: _842.MsgBeginRedelegateResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _842.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _842.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _842.MsgUndelegate;
                fromJSON(object: any): _842.MsgUndelegate;
                toJSON(message: _842.MsgUndelegate): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _842.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _842.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _842.MsgUndelegateResponse;
                fromJSON(object: any): _842.MsgUndelegateResponse;
                toJSON(message: _842.MsgUndelegateResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _842.MsgUndelegateResponse;
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _842.MsgCreateValidator) => {
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
                    }) => _842.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _842.MsgEditValidator) => {
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
                    }) => _842.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _842.MsgDelegate) => {
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
                    }) => _842.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _842.MsgBeginRedelegate) => {
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
                    }) => _842.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _842.MsgUndelegate) => {
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
                    }) => _842.MsgUndelegate;
                };
            };
            encoded: {
                createValidator(value: _842.MsgCreateValidator): {
                    type_url: string;
                    value: Uint8Array;
                };
                editValidator(value: _842.MsgEditValidator): {
                    type_url: string;
                    value: Uint8Array;
                };
                delegate(value: _842.MsgDelegate): {
                    type_url: string;
                    value: Uint8Array;
                };
                beginRedelegate(value: _842.MsgBeginRedelegate): {
                    type_url: string;
                    value: Uint8Array;
                };
                undelegate(value: _842.MsgUndelegate): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                createValidator(value: any): {
                    typeUrl: string;
                    value: _842.MsgCreateValidator;
                };
                editValidator(value: any): {
                    typeUrl: string;
                    value: _842.MsgEditValidator;
                };
                delegate(value: any): {
                    typeUrl: string;
                    value: _842.MsgDelegate;
                };
                beginRedelegate(value: any): {
                    typeUrl: string;
                    value: _842.MsgBeginRedelegate;
                };
                undelegate(value: any): {
                    typeUrl: string;
                    value: _842.MsgUndelegate;
                };
            };
            toJSON: {
                createValidator(value: _842.MsgCreateValidator): {
                    typeUrl: string;
                    value: unknown;
                };
                editValidator(value: _842.MsgEditValidator): {
                    typeUrl: string;
                    value: unknown;
                };
                delegate(value: _842.MsgDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                beginRedelegate(value: _842.MsgBeginRedelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                undelegate(value: _842.MsgUndelegate): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                createValidator(value: _842.MsgCreateValidator): {
                    typeUrl: string;
                    value: _842.MsgCreateValidator;
                };
                editValidator(value: _842.MsgEditValidator): {
                    typeUrl: string;
                    value: _842.MsgEditValidator;
                };
                delegate(value: _842.MsgDelegate): {
                    typeUrl: string;
                    value: _842.MsgDelegate;
                };
                beginRedelegate(value: _842.MsgBeginRedelegate): {
                    typeUrl: string;
                    value: _842.MsgBeginRedelegate;
                };
                undelegate(value: _842.MsgUndelegate): {
                    typeUrl: string;
                    value: _842.MsgUndelegate;
                };
            };
            messages: {
                createValidator(value: _842.MsgCreateValidator): {
                    typeUrl: string;
                    value: _842.MsgCreateValidator;
                };
                editValidator(value: _842.MsgEditValidator): {
                    typeUrl: string;
                    value: _842.MsgEditValidator;
                };
                delegate(value: _842.MsgDelegate): {
                    typeUrl: string;
                    value: _842.MsgDelegate;
                };
                beginRedelegate(value: _842.MsgBeginRedelegate): {
                    typeUrl: string;
                    value: _842.MsgBeginRedelegate;
                };
                undelegate(value: _842.MsgUndelegate): {
                    typeUrl: string;
                    value: _842.MsgUndelegate;
                };
            };
            bondStatusFromJSON(object: any): _840.BondStatus;
            bondStatusToJSON(object: _840.BondStatus): string;
            BondStatus: typeof _840.BondStatus;
            HistoricalInfo: {
                encode(message: _840.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _840.HistoricalInfo;
                fromJSON(object: any): _840.HistoricalInfo;
                toJSON(message: _840.HistoricalInfo): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _840.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _840.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _840.CommissionRates;
                fromJSON(object: any): _840.CommissionRates;
                toJSON(message: _840.CommissionRates): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _840.CommissionRates;
            };
            Commission: {
                encode(message: _840.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _840.Commission;
                fromJSON(object: any): _840.Commission;
                toJSON(message: _840.Commission): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _840.Commission;
            };
            Description: {
                encode(message: _840.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _840.Description;
                fromJSON(object: any): _840.Description;
                toJSON(message: _840.Description): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _840.Description;
            };
            Validator: {
                encode(message: _840.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _840.Validator;
                fromJSON(object: any): _840.Validator;
                toJSON(message: _840.Validator): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _840.Validator;
            };
            ValAddresses: {
                encode(message: _840.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _840.ValAddresses;
                fromJSON(object: any): _840.ValAddresses;
                toJSON(message: _840.ValAddresses): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _840.ValAddresses;
            };
            DVPair: {
                encode(message: _840.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _840.DVPair;
                fromJSON(object: any): _840.DVPair;
                toJSON(message: _840.DVPair): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _840.DVPair;
            };
            DVPairs: {
                encode(message: _840.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _840.DVPairs;
                fromJSON(object: any): _840.DVPairs;
                toJSON(message: _840.DVPairs): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _840.DVPairs;
            };
            DVVTriplet: {
                encode(message: _840.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _840.DVVTriplet;
                fromJSON(object: any): _840.DVVTriplet;
                toJSON(message: _840.DVVTriplet): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _840.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _840.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _840.DVVTriplets;
                fromJSON(object: any): _840.DVVTriplets;
                toJSON(message: _840.DVVTriplets): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _840.DVVTriplets;
            };
            Delegation: {
                encode(message: _840.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _840.Delegation;
                fromJSON(object: any): _840.Delegation;
                toJSON(message: _840.Delegation): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _840.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _840.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _840.UnbondingDelegation;
                fromJSON(object: any): _840.UnbondingDelegation;
                toJSON(message: _840.UnbondingDelegation): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _840.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _840.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _840.UnbondingDelegationEntry;
                fromJSON(object: any): _840.UnbondingDelegationEntry;
                toJSON(message: _840.UnbondingDelegationEntry): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _840.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _840.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _840.RedelegationEntry;
                fromJSON(object: any): _840.RedelegationEntry;
                toJSON(message: _840.RedelegationEntry): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _840.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _840.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _840.Redelegation;
                fromJSON(object: any): _840.Redelegation;
                toJSON(message: _840.Redelegation): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _840.Redelegation;
            };
            Params: {
                encode(message: _840.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _840.Params;
                fromJSON(object: any): _840.Params;
                toJSON(message: _840.Params): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _840.Params;
            };
            DelegationResponse: {
                encode(message: _840.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _840.DelegationResponse;
                fromJSON(object: any): _840.DelegationResponse;
                toJSON(message: _840.DelegationResponse): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _840.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _840.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _840.RedelegationEntryResponse;
                fromJSON(object: any): _840.RedelegationEntryResponse;
                toJSON(message: _840.RedelegationEntryResponse): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _840.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _840.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _840.RedelegationResponse;
                fromJSON(object: any): _840.RedelegationResponse;
                toJSON(message: _840.RedelegationResponse): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _840.RedelegationResponse;
            };
            Pool: {
                encode(message: _840.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _840.Pool;
                fromJSON(object: any): _840.Pool;
                toJSON(message: _840.Pool): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _840.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _838.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryValidatorsRequest;
                fromJSON(object: any): _838.QueryValidatorsRequest;
                toJSON(message: _838.QueryValidatorsRequest): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _838.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _838.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryValidatorsResponse;
                fromJSON(object: any): _838.QueryValidatorsResponse;
                toJSON(message: _838.QueryValidatorsResponse): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _838.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _838.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryValidatorRequest;
                fromJSON(object: any): _838.QueryValidatorRequest;
                toJSON(message: _838.QueryValidatorRequest): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _838.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _838.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryValidatorResponse;
                fromJSON(object: any): _838.QueryValidatorResponse;
                toJSON(message: _838.QueryValidatorResponse): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _838.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _838.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _838.QueryValidatorDelegationsRequest;
                toJSON(message: _838.QueryValidatorDelegationsRequest): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _838.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _838.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _838.QueryValidatorDelegationsResponse;
                toJSON(message: _838.QueryValidatorDelegationsResponse): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _838.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _838.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _838.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _838.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial<I_36 extends unknown>(object: I_36): _838.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _838.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _838.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _838.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _838.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _838.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryDelegationRequest;
                fromJSON(object: any): _838.QueryDelegationRequest;
                toJSON(message: _838.QueryDelegationRequest): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _838.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _838.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryDelegationResponse;
                fromJSON(object: any): _838.QueryDelegationResponse;
                toJSON(message: _838.QueryDelegationResponse): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _838.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _838.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _838.QueryUnbondingDelegationRequest;
                toJSON(message: _838.QueryUnbondingDelegationRequest): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _838.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _838.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _838.QueryUnbondingDelegationResponse;
                toJSON(message: _838.QueryUnbondingDelegationResponse): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _838.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _838.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _838.QueryDelegatorDelegationsRequest;
                toJSON(message: _838.QueryDelegatorDelegationsRequest): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _838.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _838.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _838.QueryDelegatorDelegationsResponse;
                toJSON(message: _838.QueryDelegatorDelegationsResponse): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _838.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _838.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _838.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _838.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _838.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _838.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _838.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _838.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _838.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _838.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryRedelegationsRequest;
                fromJSON(object: any): _838.QueryRedelegationsRequest;
                toJSON(message: _838.QueryRedelegationsRequest): unknown;
                fromPartial<I_46 extends unknown>(object: I_46): _838.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _838.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryRedelegationsResponse;
                fromJSON(object: any): _838.QueryRedelegationsResponse;
                toJSON(message: _838.QueryRedelegationsResponse): unknown;
                fromPartial<I_47 extends unknown>(object: I_47): _838.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _838.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _838.QueryDelegatorValidatorsRequest;
                toJSON(message: _838.QueryDelegatorValidatorsRequest): unknown;
                fromPartial<I_48 extends unknown>(object: I_48): _838.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _838.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _838.QueryDelegatorValidatorsResponse;
                toJSON(message: _838.QueryDelegatorValidatorsResponse): unknown;
                fromPartial<I_49 extends unknown>(object: I_49): _838.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _838.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _838.QueryDelegatorValidatorRequest;
                toJSON(message: _838.QueryDelegatorValidatorRequest): unknown;
                fromPartial<I_50 extends unknown>(object: I_50): _838.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _838.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _838.QueryDelegatorValidatorResponse;
                toJSON(message: _838.QueryDelegatorValidatorResponse): unknown;
                fromPartial<I_51 extends unknown>(object: I_51): _838.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _838.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryHistoricalInfoRequest;
                fromJSON(object: any): _838.QueryHistoricalInfoRequest;
                toJSON(message: _838.QueryHistoricalInfoRequest): unknown;
                fromPartial<I_52 extends unknown>(object: I_52): _838.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _838.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryHistoricalInfoResponse;
                fromJSON(object: any): _838.QueryHistoricalInfoResponse;
                toJSON(message: _838.QueryHistoricalInfoResponse): unknown;
                fromPartial<I_53 extends unknown>(object: I_53): _838.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _838.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryPoolRequest;
                fromJSON(_: any): _838.QueryPoolRequest;
                toJSON(_: _838.QueryPoolRequest): unknown;
                fromPartial<I_54 extends unknown>(_: I_54): _838.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _838.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryPoolResponse;
                fromJSON(object: any): _838.QueryPoolResponse;
                toJSON(message: _838.QueryPoolResponse): unknown;
                fromPartial<I_55 extends unknown>(object: I_55): _838.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _838.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryParamsRequest;
                fromJSON(_: any): _838.QueryParamsRequest;
                toJSON(_: _838.QueryParamsRequest): unknown;
                fromPartial<I_56 extends unknown>(_: I_56): _838.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _838.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.QueryParamsResponse;
                fromJSON(object: any): _838.QueryParamsResponse;
                toJSON(message: _838.QueryParamsResponse): unknown;
                fromPartial<I_57 extends unknown>(object: I_57): _838.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _836.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _836.GenesisState;
                fromJSON(object: any): _836.GenesisState;
                toJSON(message: _836.GenesisState): unknown;
                fromPartial<I_58 extends unknown>(object: I_58): _836.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _836.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _836.LastValidatorPower;
                fromJSON(object: any): _836.LastValidatorPower;
                toJSON(message: _836.LastValidatorPower): unknown;
                fromPartial<I_59 extends unknown>(object: I_59): _836.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _834.AuthorizationType;
            authorizationTypeToJSON(object: _834.AuthorizationType): string;
            AuthorizationType: typeof _834.AuthorizationType;
            StakeAuthorization: {
                encode(message: _834.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _834.StakeAuthorization;
                fromJSON(object: any): _834.StakeAuthorization;
                toJSON(message: _834.StakeAuthorization): unknown;
                fromPartial<I_60 extends unknown>(object: I_60): _834.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _834.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _834.StakeAuthorization_Validators;
                fromJSON(object: any): _834.StakeAuthorization_Validators;
                toJSON(message: _834.StakeAuthorization_Validators): unknown;
                fromPartial<I_61 extends unknown>(object: I_61): _834.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _850.SignMode;
                signModeToJSON(object: _850.SignMode): string;
                SignMode: typeof _850.SignMode;
                SignatureDescriptors: {
                    encode(message: _850.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _850.SignatureDescriptors;
                    fromJSON(object: any): _850.SignatureDescriptors;
                    toJSON(message: _850.SignatureDescriptors): unknown;
                    fromPartial<I extends unknown>(object: I): _850.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _850.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _850.SignatureDescriptor;
                    fromJSON(object: any): _850.SignatureDescriptor;
                    toJSON(message: _850.SignatureDescriptor): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _850.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _850.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _850.SignatureDescriptor_Data;
                    fromJSON(object: any): _850.SignatureDescriptor_Data;
                    toJSON(message: _850.SignatureDescriptor_Data): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _850.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _850.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _850.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _850.SignatureDescriptor_Data_Single;
                    toJSON(message: _850.SignatureDescriptor_Data_Single): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _850.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _850.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _850.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _850.SignatureDescriptor_Data_Multi;
                    toJSON(message: _850.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _850.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            Tx: {
                encode(message: _854.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _854.Tx;
                fromJSON(object: any): _854.Tx;
                toJSON(message: _854.Tx): unknown;
                fromPartial<I extends unknown>(object: I): _854.Tx;
            };
            TxRaw: {
                encode(message: _854.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _854.TxRaw;
                fromJSON(object: any): _854.TxRaw;
                toJSON(message: _854.TxRaw): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _854.TxRaw;
            };
            SignDoc: {
                encode(message: _854.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _854.SignDoc;
                fromJSON(object: any): _854.SignDoc;
                toJSON(message: _854.SignDoc): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _854.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _854.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _854.SignDocDirectAux;
                fromJSON(object: any): _854.SignDocDirectAux;
                toJSON(message: _854.SignDocDirectAux): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _854.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _854.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _854.TxBody;
                fromJSON(object: any): _854.TxBody;
                toJSON(message: _854.TxBody): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _854.TxBody;
            };
            AuthInfo: {
                encode(message: _854.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _854.AuthInfo;
                fromJSON(object: any): _854.AuthInfo;
                toJSON(message: _854.AuthInfo): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _854.AuthInfo;
            };
            SignerInfo: {
                encode(message: _854.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _854.SignerInfo;
                fromJSON(object: any): _854.SignerInfo;
                toJSON(message: _854.SignerInfo): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _854.SignerInfo;
            };
            ModeInfo: {
                encode(message: _854.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _854.ModeInfo;
                fromJSON(object: any): _854.ModeInfo;
                toJSON(message: _854.ModeInfo): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _854.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _854.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _854.ModeInfo_Single;
                fromJSON(object: any): _854.ModeInfo_Single;
                toJSON(message: _854.ModeInfo_Single): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _854.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _854.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _854.ModeInfo_Multi;
                fromJSON(object: any): _854.ModeInfo_Multi;
                toJSON(message: _854.ModeInfo_Multi): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _854.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _854.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _854.Fee;
                fromJSON(object: any): _854.Fee;
                toJSON(message: _854.Fee): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _854.Fee;
            };
            Tip: {
                encode(message: _854.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _854.Tip;
                fromJSON(object: any): _854.Tip;
                toJSON(message: _854.Tip): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _854.Tip;
            };
            AuxSignerData: {
                encode(message: _854.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _854.AuxSignerData;
                fromJSON(object: any): _854.AuxSignerData;
                toJSON(message: _854.AuxSignerData): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _854.AuxSignerData;
            };
            orderByFromJSON(object: any): _852.OrderBy;
            orderByToJSON(object: _852.OrderBy): string;
            broadcastModeFromJSON(object: any): _852.BroadcastMode;
            broadcastModeToJSON(object: _852.BroadcastMode): string;
            OrderBy: typeof _852.OrderBy;
            BroadcastMode: typeof _852.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _852.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.GetTxsEventRequest;
                fromJSON(object: any): _852.GetTxsEventRequest;
                toJSON(message: _852.GetTxsEventRequest): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _852.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _852.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.GetTxsEventResponse;
                fromJSON(object: any): _852.GetTxsEventResponse;
                toJSON(message: _852.GetTxsEventResponse): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _852.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _852.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.BroadcastTxRequest;
                fromJSON(object: any): _852.BroadcastTxRequest;
                toJSON(message: _852.BroadcastTxRequest): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _852.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _852.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.BroadcastTxResponse;
                fromJSON(object: any): _852.BroadcastTxResponse;
                toJSON(message: _852.BroadcastTxResponse): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _852.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _852.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.SimulateRequest;
                fromJSON(object: any): _852.SimulateRequest;
                toJSON(message: _852.SimulateRequest): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _852.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _852.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.SimulateResponse;
                fromJSON(object: any): _852.SimulateResponse;
                toJSON(message: _852.SimulateResponse): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _852.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _852.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.GetTxRequest;
                fromJSON(object: any): _852.GetTxRequest;
                toJSON(message: _852.GetTxRequest): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _852.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _852.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.GetTxResponse;
                fromJSON(object: any): _852.GetTxResponse;
                toJSON(message: _852.GetTxResponse): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _852.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _852.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.GetBlockWithTxsRequest;
                fromJSON(object: any): _852.GetBlockWithTxsRequest;
                toJSON(message: _852.GetBlockWithTxsRequest): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _852.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _852.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.GetBlockWithTxsResponse;
                fromJSON(object: any): _852.GetBlockWithTxsResponse;
                toJSON(message: _852.GetBlockWithTxsResponse): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _852.GetBlockWithTxsResponse;
            };
            ServiceClientImpl: typeof _852.ServiceClientImpl;
        };
    }
    namespace upgrade {
        const v1beta1: {
            Plan: {
                encode(message: _866.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _866.Plan;
                fromJSON(object: any): _866.Plan;
                toJSON(message: _866.Plan): unknown;
                fromPartial<I extends unknown>(object: I): _866.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _866.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _866.SoftwareUpgradeProposal;
                fromJSON(object: any): _866.SoftwareUpgradeProposal;
                toJSON(message: _866.SoftwareUpgradeProposal): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _866.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _866.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _866.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _866.CancelSoftwareUpgradeProposal;
                toJSON(message: _866.CancelSoftwareUpgradeProposal): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _866.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _866.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _866.ModuleVersion;
                fromJSON(object: any): _866.ModuleVersion;
                toJSON(message: _866.ModuleVersion): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _866.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _858.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _858.MsgSoftwareUpgrade;
                fromJSON(object: any): _858.MsgSoftwareUpgrade;
                toJSON(message: _858.MsgSoftwareUpgrade): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _858.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _858.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _858.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _858.MsgSoftwareUpgradeResponse;
                toJSON(_: _858.MsgSoftwareUpgradeResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _858.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _858.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _858.MsgCancelUpgrade;
                fromJSON(object: any): _858.MsgCancelUpgrade;
                toJSON(message: _858.MsgCancelUpgrade): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _858.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _858.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _858.MsgCancelUpgradeResponse;
                fromJSON(_: any): _858.MsgCancelUpgradeResponse;
                toJSON(_: _858.MsgCancelUpgradeResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _858.MsgCancelUpgradeResponse;
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _858.MsgSoftwareUpgrade) => {
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
                    }) => _858.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _858.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _858.MsgCancelUpgrade;
                };
            };
            encoded: {
                softwareUpgrade(value: _858.MsgSoftwareUpgrade): {
                    type_url: string;
                    value: Uint8Array;
                };
                cancelUpgrade(value: _858.MsgCancelUpgrade): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                softwareUpgrade(value: any): {
                    typeUrl: string;
                    value: _858.MsgSoftwareUpgrade;
                };
                cancelUpgrade(value: any): {
                    typeUrl: string;
                    value: _858.MsgCancelUpgrade;
                };
            };
            toJSON: {
                softwareUpgrade(value: _858.MsgSoftwareUpgrade): {
                    typeUrl: string;
                    value: unknown;
                };
                cancelUpgrade(value: _858.MsgCancelUpgrade): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                softwareUpgrade(value: _858.MsgSoftwareUpgrade): {
                    typeUrl: string;
                    value: _858.MsgSoftwareUpgrade;
                };
                cancelUpgrade(value: _858.MsgCancelUpgrade): {
                    typeUrl: string;
                    value: _858.MsgCancelUpgrade;
                };
            };
            messages: {
                softwareUpgrade(value: _858.MsgSoftwareUpgrade): {
                    typeUrl: string;
                    value: _858.MsgSoftwareUpgrade;
                };
                cancelUpgrade(value: _858.MsgCancelUpgrade): {
                    typeUrl: string;
                    value: _858.MsgCancelUpgrade;
                };
            };
            QueryCurrentPlanRequest: {
                encode(_: _856.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _856.QueryCurrentPlanRequest;
                fromJSON(_: any): _856.QueryCurrentPlanRequest;
                toJSON(_: _856.QueryCurrentPlanRequest): unknown;
                fromPartial<I_8 extends unknown>(_: I_8): _856.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _856.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _856.QueryCurrentPlanResponse;
                fromJSON(object: any): _856.QueryCurrentPlanResponse;
                toJSON(message: _856.QueryCurrentPlanResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _856.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _856.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _856.QueryAppliedPlanRequest;
                fromJSON(object: any): _856.QueryAppliedPlanRequest;
                toJSON(message: _856.QueryAppliedPlanRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _856.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _856.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _856.QueryAppliedPlanResponse;
                fromJSON(object: any): _856.QueryAppliedPlanResponse;
                toJSON(message: _856.QueryAppliedPlanResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _856.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _856.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _856.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _856.QueryUpgradedConsensusStateRequest;
                toJSON(message: _856.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _856.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _856.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _856.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _856.QueryUpgradedConsensusStateResponse;
                toJSON(message: _856.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _856.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _856.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _856.QueryModuleVersionsRequest;
                fromJSON(object: any): _856.QueryModuleVersionsRequest;
                toJSON(message: _856.QueryModuleVersionsRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _856.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _856.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _856.QueryModuleVersionsResponse;
                fromJSON(object: any): _856.QueryModuleVersionsResponse;
                toJSON(message: _856.QueryModuleVersionsResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _856.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _856.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _856.QueryAuthorityRequest;
                fromJSON(_: any): _856.QueryAuthorityRequest;
                toJSON(_: _856.QueryAuthorityRequest): unknown;
                fromPartial<I_16 extends unknown>(_: I_16): _856.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _856.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _856.QueryAuthorityResponse;
                fromJSON(object: any): _856.QueryAuthorityResponse;
                toJSON(message: _856.QueryAuthorityResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _856.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            BaseVestingAccount: {
                encode(message: _876.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _876.BaseVestingAccount;
                fromJSON(object: any): _876.BaseVestingAccount;
                toJSON(message: _876.BaseVestingAccount): unknown;
                fromPartial<I extends unknown>(object: I): _876.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _876.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _876.ContinuousVestingAccount;
                fromJSON(object: any): _876.ContinuousVestingAccount;
                toJSON(message: _876.ContinuousVestingAccount): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _876.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _876.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _876.DelayedVestingAccount;
                fromJSON(object: any): _876.DelayedVestingAccount;
                toJSON(message: _876.DelayedVestingAccount): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _876.DelayedVestingAccount;
            };
            Period: {
                encode(message: _876.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _876.Period;
                fromJSON(object: any): _876.Period;
                toJSON(message: _876.Period): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _876.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _876.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _876.PeriodicVestingAccount;
                fromJSON(object: any): _876.PeriodicVestingAccount;
                toJSON(message: _876.PeriodicVestingAccount): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _876.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _876.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _876.PermanentLockedAccount;
                fromJSON(object: any): _876.PermanentLockedAccount;
                toJSON(message: _876.PermanentLockedAccount): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _876.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _868.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _868.MsgCreateVestingAccount;
                fromJSON(object: any): _868.MsgCreateVestingAccount;
                toJSON(message: _868.MsgCreateVestingAccount): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _868.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _868.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _868.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _868.MsgCreateVestingAccountResponse;
                toJSON(_: _868.MsgCreateVestingAccountResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _868.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _868.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _868.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _868.MsgCreatePermanentLockedAccount;
                toJSON(message: _868.MsgCreatePermanentLockedAccount): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _868.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _868.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _868.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _868.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _868.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial<I_9 extends unknown>(_: I_9): _868.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _868.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _868.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _868.MsgCreatePeriodicVestingAccount;
                toJSON(message: _868.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _868.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _868.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _868.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _868.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _868.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial<I_11 extends unknown>(_: I_11): _868.MsgCreatePeriodicVestingAccountResponse;
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _868.MsgCreateVestingAccount) => {
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
                    }) => _868.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _868.MsgCreatePermanentLockedAccount) => {
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
                    }) => _868.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _868.MsgCreatePeriodicVestingAccount) => {
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
                    }) => _868.MsgCreatePeriodicVestingAccount;
                };
            };
            encoded: {
                createVestingAccount(value: _868.MsgCreateVestingAccount): {
                    type_url: string;
                    value: Uint8Array;
                };
                createPermanentLockedAccount(value: _868.MsgCreatePermanentLockedAccount): {
                    type_url: string;
                    value: Uint8Array;
                };
                createPeriodicVestingAccount(value: _868.MsgCreatePeriodicVestingAccount): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                createVestingAccount(value: any): {
                    typeUrl: string;
                    value: _868.MsgCreateVestingAccount;
                };
                createPermanentLockedAccount(value: any): {
                    typeUrl: string;
                    value: _868.MsgCreatePermanentLockedAccount;
                };
                createPeriodicVestingAccount(value: any): {
                    typeUrl: string;
                    value: _868.MsgCreatePeriodicVestingAccount;
                };
            };
            toJSON: {
                createVestingAccount(value: _868.MsgCreateVestingAccount): {
                    typeUrl: string;
                    value: unknown;
                };
                createPermanentLockedAccount(value: _868.MsgCreatePermanentLockedAccount): {
                    typeUrl: string;
                    value: unknown;
                };
                createPeriodicVestingAccount(value: _868.MsgCreatePeriodicVestingAccount): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                createVestingAccount(value: _868.MsgCreateVestingAccount): {
                    typeUrl: string;
                    value: _868.MsgCreateVestingAccount;
                };
                createPermanentLockedAccount(value: _868.MsgCreatePermanentLockedAccount): {
                    typeUrl: string;
                    value: _868.MsgCreatePermanentLockedAccount;
                };
                createPeriodicVestingAccount(value: _868.MsgCreatePeriodicVestingAccount): {
                    typeUrl: string;
                    value: _868.MsgCreatePeriodicVestingAccount;
                };
            };
            messages: {
                createVestingAccount(value: _868.MsgCreateVestingAccount): {
                    typeUrl: string;
                    value: _868.MsgCreateVestingAccount;
                };
                createPermanentLockedAccount(value: _868.MsgCreatePermanentLockedAccount): {
                    typeUrl: string;
                    value: _868.MsgCreatePermanentLockedAccount;
                };
                createPeriodicVestingAccount(value: _868.MsgCreatePeriodicVestingAccount): {
                    typeUrl: string;
                    value: _868.MsgCreatePeriodicVestingAccount;
                };
            };
        };
    }
}
