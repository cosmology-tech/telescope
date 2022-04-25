import * as _654 from "./app/v1alpha1/config";
import * as _655 from "./app/v1alpha1/module";
import * as _656 from "./app/v1alpha1/query";
import * as _657 from "./auth/v1beta1/auth";
import * as _658 from "./auth/v1beta1/genesis";
import * as _659 from "./auth/v1beta1/query";
import * as _660 from "./authz/v1beta1/authz";
import * as _661 from "./authz/v1beta1/event";
import * as _662 from "./authz/v1beta1/genesis";
import * as _663 from "./authz/v1beta1/query";
import * as _664 from "./authz/v1beta1/tx";
import * as _673 from "./bank/v1beta1/authz";
import * as _674 from "./bank/v1beta1/bank";
import * as _675 from "./bank/v1beta1/genesis";
import * as _676 from "./bank/v1beta1/query";
import * as _677 from "./bank/v1beta1/tx";
import * as _686 from "./base/abci/v1beta1/abci";
import * as _687 from "./base/kv/v1beta1/kv";
import * as _688 from "./base/query/v1beta1/pagination";
import * as _689 from "./base/reflection/v1beta1/reflection";
import * as _690 from "./base/reflection/v2alpha1/reflection";
import * as _691 from "./base/snapshots/v1beta1/snapshot";
import * as _692 from "./base/store/v1beta1/commit_info";
import * as _693 from "./base/store/v1beta1/listening";
import * as _694 from "./base/tendermint/v1beta1/query";
import * as _695 from "./base/v1beta1/coin";
import * as _696 from "./capability/v1beta1/capability";
import * as _697 from "./capability/v1beta1/genesis";
import * as _698 from "./crisis/v1beta1/genesis";
import * as _699 from "./crisis/v1beta1/tx";
import * as _708 from "./crypto/ed25519/keys";
import * as _709 from "./crypto/hd/v1/hd";
import * as _710 from "./crypto/keyring/v1/record";
import * as _711 from "./crypto/multisig/keys";
import * as _712 from "./crypto/secp256k1/keys";
import * as _713 from "./crypto/secp256r1/keys";
import * as _714 from "./distribution/v1beta1/distribution";
import * as _715 from "./distribution/v1beta1/genesis";
import * as _716 from "./distribution/v1beta1/query";
import * as _717 from "./distribution/v1beta1/tx";
import * as _726 from "./evidence/v1beta1/evidence";
import * as _727 from "./evidence/v1beta1/genesis";
import * as _728 from "./evidence/v1beta1/query";
import * as _729 from "./evidence/v1beta1/tx";
import * as _738 from "./feegrant/v1beta1/feegrant";
import * as _739 from "./feegrant/v1beta1/genesis";
import * as _740 from "./feegrant/v1beta1/query";
import * as _741 from "./feegrant/v1beta1/tx";
import * as _750 from "./genutil/v1beta1/genesis";
import * as _751 from "./gov/v1/genesis";
import * as _752 from "./gov/v1/gov";
import * as _753 from "./gov/v1/query";
import * as _754 from "./gov/v1/tx";
import * as _763 from "./gov/v1beta1/genesis";
import * as _764 from "./gov/v1beta1/gov";
import * as _765 from "./gov/v1beta1/query";
import * as _766 from "./gov/v1beta1/tx";
import * as _775 from "./group/v1/events";
import * as _776 from "./group/v1/genesis";
import * as _777 from "./group/v1/query";
import * as _778 from "./group/v1/tx";
import * as _787 from "./group/v1/types";
import * as _788 from "./mint/v1beta1/genesis";
import * as _789 from "./mint/v1beta1/mint";
import * as _790 from "./mint/v1beta1/query";
import * as _792 from "./nft/v1beta1/event";
import * as _793 from "./nft/v1beta1/genesis";
import * as _794 from "./nft/v1beta1/nft";
import * as _795 from "./nft/v1beta1/query";
import * as _796 from "./nft/v1beta1/tx";
import * as _805 from "./orm/v1/orm";
import * as _806 from "./orm/v1alpha1/schema";
import * as _807 from "./params/v1beta1/params";
import * as _808 from "./params/v1beta1/query";
import * as _809 from "./slashing/v1beta1/genesis";
import * as _810 from "./slashing/v1beta1/query";
import * as _811 from "./slashing/v1beta1/slashing";
import * as _812 from "./slashing/v1beta1/tx";
import * as _821 from "./staking/v1beta1/authz";
import * as _822 from "./staking/v1beta1/genesis";
import * as _823 from "./staking/v1beta1/query";
import * as _824 from "./staking/v1beta1/staking";
import * as _825 from "./staking/v1beta1/tx";
import * as _834 from "./tx/signing/v1beta1/signing";
import * as _835 from "./tx/v1beta1/service";
import * as _836 from "./tx/v1beta1/tx";
import * as _837 from "./upgrade/v1beta1/query";
import * as _838 from "./upgrade/v1beta1/tx";
import * as _847 from "./upgrade/v1beta1/upgrade";
import * as _848 from "./vesting/v1beta1/tx";
import * as _857 from "./vesting/v1beta1/vesting";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryConfigRequest: {
                encode(_: _656.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.QueryConfigRequest;
                fromJSON(_: any): _656.QueryConfigRequest;
                toJSON(_: _656.QueryConfigRequest): unknown;
                fromPartial<I extends unknown>(_: I): _656.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _656.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.QueryConfigResponse;
                fromJSON(object: any): _656.QueryConfigResponse;
                toJSON(message: _656.QueryConfigResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _656.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _655.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _655.ModuleDescriptor;
                fromJSON(object: any): _655.ModuleDescriptor;
                toJSON(message: _655.ModuleDescriptor): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _655.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _655.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _655.PackageReference;
                fromJSON(object: any): _655.PackageReference;
                toJSON(message: _655.PackageReference): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _655.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _655.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _655.MigrateFromInfo;
                fromJSON(object: any): _655.MigrateFromInfo;
                toJSON(message: _655.MigrateFromInfo): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _655.MigrateFromInfo;
            };
            Config: {
                encode(message: _654.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.Config;
                fromJSON(object: any): _654.Config;
                toJSON(message: _654.Config): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _654.Config;
            };
            ModuleConfig: {
                encode(message: _654.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.ModuleConfig;
                fromJSON(object: any): _654.ModuleConfig;
                toJSON(message: _654.ModuleConfig): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _654.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryAccountsRequest: {
                encode(message: _659.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _659.QueryAccountsRequest;
                fromJSON(object: any): _659.QueryAccountsRequest;
                toJSON(message: _659.QueryAccountsRequest): unknown;
                fromPartial<I extends unknown>(object: I): _659.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _659.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _659.QueryAccountsResponse;
                fromJSON(object: any): _659.QueryAccountsResponse;
                toJSON(message: _659.QueryAccountsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _659.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _659.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _659.QueryAccountRequest;
                fromJSON(object: any): _659.QueryAccountRequest;
                toJSON(message: _659.QueryAccountRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _659.QueryAccountRequest;
            };
            QueryModuleAccountsRequest: {
                encode(_: _659.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _659.QueryModuleAccountsRequest;
                fromJSON(_: any): _659.QueryModuleAccountsRequest;
                toJSON(_: _659.QueryModuleAccountsRequest): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _659.QueryModuleAccountsRequest;
            };
            QueryParamsResponse: {
                encode(message: _659.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _659.QueryParamsResponse;
                fromJSON(object: any): _659.QueryParamsResponse;
                toJSON(message: _659.QueryParamsResponse): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _659.QueryParamsResponse;
            };
            QueryAccountResponse: {
                encode(message: _659.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _659.QueryAccountResponse;
                fromJSON(object: any): _659.QueryAccountResponse;
                toJSON(message: _659.QueryAccountResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _659.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _659.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _659.QueryParamsRequest;
                fromJSON(_: any): _659.QueryParamsRequest;
                toJSON(_: _659.QueryParamsRequest): unknown;
                fromPartial<I_6 extends unknown>(_: I_6): _659.QueryParamsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _659.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _659.QueryModuleAccountsResponse;
                fromJSON(object: any): _659.QueryModuleAccountsResponse;
                toJSON(message: _659.QueryModuleAccountsResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _659.QueryModuleAccountsResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _659.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _659.Bech32PrefixRequest;
                fromJSON(_: any): _659.Bech32PrefixRequest;
                toJSON(_: _659.Bech32PrefixRequest): unknown;
                fromPartial<I_8 extends unknown>(_: I_8): _659.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _659.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _659.Bech32PrefixResponse;
                fromJSON(object: any): _659.Bech32PrefixResponse;
                toJSON(message: _659.Bech32PrefixResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _659.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _659.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _659.AddressBytesToStringRequest;
                fromJSON(object: any): _659.AddressBytesToStringRequest;
                toJSON(message: _659.AddressBytesToStringRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _659.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _659.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _659.AddressBytesToStringResponse;
                fromJSON(object: any): _659.AddressBytesToStringResponse;
                toJSON(message: _659.AddressBytesToStringResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _659.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _659.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _659.AddressStringToBytesRequest;
                fromJSON(object: any): _659.AddressStringToBytesRequest;
                toJSON(message: _659.AddressStringToBytesRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _659.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _659.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _659.AddressStringToBytesResponse;
                fromJSON(object: any): _659.AddressStringToBytesResponse;
                toJSON(message: _659.AddressStringToBytesResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _659.AddressStringToBytesResponse;
            };
            GenesisState: {
                encode(message: _658.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _658.GenesisState;
                fromJSON(object: any): _658.GenesisState;
                toJSON(message: _658.GenesisState): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _658.GenesisState;
            };
            BaseAccount: {
                encode(message: _657.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _657.BaseAccount;
                fromJSON(object: any): _657.BaseAccount;
                toJSON(message: _657.BaseAccount): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _657.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _657.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _657.ModuleAccount;
                fromJSON(object: any): _657.ModuleAccount;
                toJSON(message: _657.ModuleAccount): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _657.ModuleAccount;
            };
            Params: {
                encode(message: _657.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _657.Params;
                fromJSON(object: any): _657.Params;
                toJSON(message: _657.Params): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _657.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgGrant: {
                encode(message: _664.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.MsgGrant;
                fromJSON(object: any): _664.MsgGrant;
                toJSON(message: _664.MsgGrant): unknown;
                fromPartial<I extends unknown>(object: I): _664.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _664.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.MsgExecResponse;
                fromJSON(object: any): _664.MsgExecResponse;
                toJSON(message: _664.MsgExecResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _664.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _664.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.MsgExec;
                fromJSON(object: any): _664.MsgExec;
                toJSON(message: _664.MsgExec): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _664.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _664.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.MsgGrantResponse;
                fromJSON(_: any): _664.MsgGrantResponse;
                toJSON(_: _664.MsgGrantResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _664.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _664.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.MsgRevoke;
                fromJSON(object: any): _664.MsgRevoke;
                toJSON(message: _664.MsgRevoke): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _664.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _664.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.MsgRevokeResponse;
                fromJSON(_: any): _664.MsgRevokeResponse;
                toJSON(_: _664.MsgRevokeResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _664.MsgRevokeResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _664.MsgGrant) => {
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
                    }) => _664.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _664.MsgExec) => {
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
                    }) => _664.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _664.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _664.MsgRevoke;
                };
            };
            encoded: {
                grant(value: _664.MsgGrant): {
                    type_url: string;
                    value: Uint8Array;
                };
                exec(value: _664.MsgExec): {
                    type_url: string;
                    value: Uint8Array;
                };
                revoke(value: _664.MsgRevoke): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                grant(value: any): {
                    typeUrl: string;
                    value: _664.MsgGrant;
                };
                exec(value: any): {
                    typeUrl: string;
                    value: _664.MsgExec;
                };
                revoke(value: any): {
                    typeUrl: string;
                    value: _664.MsgRevoke;
                };
            };
            toJSON: {
                grant(value: _664.MsgGrant): {
                    typeUrl: string;
                    value: unknown;
                };
                exec(value: _664.MsgExec): {
                    typeUrl: string;
                    value: unknown;
                };
                revoke(value: _664.MsgRevoke): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                grant(value: _664.MsgGrant): {
                    typeUrl: string;
                    value: _664.MsgGrant;
                };
                exec(value: _664.MsgExec): {
                    typeUrl: string;
                    value: _664.MsgExec;
                };
                revoke(value: _664.MsgRevoke): {
                    typeUrl: string;
                    value: _664.MsgRevoke;
                };
            };
            messages: {
                grant(value: _664.MsgGrant): {
                    typeUrl: string;
                    value: _664.MsgGrant;
                };
                exec(value: _664.MsgExec): {
                    typeUrl: string;
                    value: _664.MsgExec;
                };
                revoke(value: _664.MsgRevoke): {
                    typeUrl: string;
                    value: _664.MsgRevoke;
                };
            };
            QueryGrantsRequest: {
                encode(message: _663.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.QueryGrantsRequest;
                fromJSON(object: any): _663.QueryGrantsRequest;
                toJSON(message: _663.QueryGrantsRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _663.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _663.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.QueryGrantsResponse;
                fromJSON(object: any): _663.QueryGrantsResponse;
                toJSON(message: _663.QueryGrantsResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _663.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _663.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.QueryGranterGrantsRequest;
                fromJSON(object: any): _663.QueryGranterGrantsRequest;
                toJSON(message: _663.QueryGranterGrantsRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _663.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _663.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.QueryGranterGrantsResponse;
                fromJSON(object: any): _663.QueryGranterGrantsResponse;
                toJSON(message: _663.QueryGranterGrantsResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _663.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _663.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.QueryGranteeGrantsRequest;
                fromJSON(object: any): _663.QueryGranteeGrantsRequest;
                toJSON(message: _663.QueryGranteeGrantsRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _663.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _663.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.QueryGranteeGrantsResponse;
                fromJSON(object: any): _663.QueryGranteeGrantsResponse;
                toJSON(message: _663.QueryGranteeGrantsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _663.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _662.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.GenesisState;
                fromJSON(object: any): _662.GenesisState;
                toJSON(message: _662.GenesisState): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _662.GenesisState;
            };
            EventGrant: {
                encode(message: _661.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.EventGrant;
                fromJSON(object: any): _661.EventGrant;
                toJSON(message: _661.EventGrant): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _661.EventGrant;
            };
            EventRevoke: {
                encode(message: _661.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.EventRevoke;
                fromJSON(object: any): _661.EventRevoke;
                toJSON(message: _661.EventRevoke): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _661.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _660.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.GenericAuthorization;
                fromJSON(object: any): _660.GenericAuthorization;
                toJSON(message: _660.GenericAuthorization): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _660.GenericAuthorization;
            };
            Grant: {
                encode(message: _660.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.Grant;
                fromJSON(object: any): _660.Grant;
                toJSON(message: _660.Grant): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _660.Grant;
            };
            GrantAuthorization: {
                encode(message: _660.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.GrantAuthorization;
                fromJSON(object: any): _660.GrantAuthorization;
                toJSON(message: _660.GrantAuthorization): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _660.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _660.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.GrantQueueItem;
                fromJSON(object: any): _660.GrantQueueItem;
                toJSON(message: _660.GrantQueueItem): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _660.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgSend: {
                encode(message: _677.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _677.MsgSend;
                fromJSON(object: any): _677.MsgSend;
                toJSON(message: _677.MsgSend): unknown;
                fromPartial<I extends unknown>(object: I): _677.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _677.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _677.MsgSendResponse;
                fromJSON(_: any): _677.MsgSendResponse;
                toJSON(_: _677.MsgSendResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _677.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _677.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _677.MsgMultiSend;
                fromJSON(object: any): _677.MsgMultiSend;
                toJSON(message: _677.MsgMultiSend): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _677.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _677.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _677.MsgMultiSendResponse;
                fromJSON(_: any): _677.MsgMultiSendResponse;
                toJSON(_: _677.MsgMultiSendResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _677.MsgMultiSendResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _677.MsgSend) => {
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
                    }) => _677.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _677.MsgMultiSend) => {
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
                    }) => _677.MsgMultiSend;
                };
            };
            encoded: {
                send(value: _677.MsgSend): {
                    type_url: string;
                    value: Uint8Array;
                };
                multiSend(value: _677.MsgMultiSend): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                send(value: any): {
                    typeUrl: string;
                    value: _677.MsgSend;
                };
                multiSend(value: any): {
                    typeUrl: string;
                    value: _677.MsgMultiSend;
                };
            };
            toJSON: {
                send(value: _677.MsgSend): {
                    typeUrl: string;
                    value: unknown;
                };
                multiSend(value: _677.MsgMultiSend): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                send(value: _677.MsgSend): {
                    typeUrl: string;
                    value: _677.MsgSend;
                };
                multiSend(value: _677.MsgMultiSend): {
                    typeUrl: string;
                    value: _677.MsgMultiSend;
                };
            };
            messages: {
                send(value: _677.MsgSend): {
                    typeUrl: string;
                    value: _677.MsgSend;
                };
                multiSend(value: _677.MsgMultiSend): {
                    typeUrl: string;
                    value: _677.MsgMultiSend;
                };
            };
            QueryBalanceRequest: {
                encode(message: _676.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.QueryBalanceRequest;
                fromJSON(object: any): _676.QueryBalanceRequest;
                toJSON(message: _676.QueryBalanceRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _676.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _676.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.QueryBalanceResponse;
                fromJSON(object: any): _676.QueryBalanceResponse;
                toJSON(message: _676.QueryBalanceResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _676.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _676.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.QueryAllBalancesRequest;
                fromJSON(object: any): _676.QueryAllBalancesRequest;
                toJSON(message: _676.QueryAllBalancesRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _676.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _676.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.QueryAllBalancesResponse;
                fromJSON(object: any): _676.QueryAllBalancesResponse;
                toJSON(message: _676.QueryAllBalancesResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _676.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _676.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.QuerySpendableBalancesRequest;
                fromJSON(object: any): _676.QuerySpendableBalancesRequest;
                toJSON(message: _676.QuerySpendableBalancesRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _676.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _676.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.QuerySpendableBalancesResponse;
                fromJSON(object: any): _676.QuerySpendableBalancesResponse;
                toJSON(message: _676.QuerySpendableBalancesResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _676.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _676.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.QueryTotalSupplyRequest;
                fromJSON(object: any): _676.QueryTotalSupplyRequest;
                toJSON(message: _676.QueryTotalSupplyRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _676.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _676.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.QueryTotalSupplyResponse;
                fromJSON(object: any): _676.QueryTotalSupplyResponse;
                toJSON(message: _676.QueryTotalSupplyResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _676.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _676.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.QuerySupplyOfRequest;
                fromJSON(object: any): _676.QuerySupplyOfRequest;
                toJSON(message: _676.QuerySupplyOfRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _676.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _676.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.QuerySupplyOfResponse;
                fromJSON(object: any): _676.QuerySupplyOfResponse;
                toJSON(message: _676.QuerySupplyOfResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _676.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _676.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.QueryParamsRequest;
                fromJSON(_: any): _676.QueryParamsRequest;
                toJSON(_: _676.QueryParamsRequest): unknown;
                fromPartial<I_14 extends unknown>(_: I_14): _676.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _676.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.QueryParamsResponse;
                fromJSON(object: any): _676.QueryParamsResponse;
                toJSON(message: _676.QueryParamsResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _676.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _676.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.QueryDenomsMetadataRequest;
                fromJSON(object: any): _676.QueryDenomsMetadataRequest;
                toJSON(message: _676.QueryDenomsMetadataRequest): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _676.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _676.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.QueryDenomsMetadataResponse;
                fromJSON(object: any): _676.QueryDenomsMetadataResponse;
                toJSON(message: _676.QueryDenomsMetadataResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _676.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _676.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.QueryDenomMetadataRequest;
                fromJSON(object: any): _676.QueryDenomMetadataRequest;
                toJSON(message: _676.QueryDenomMetadataRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _676.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _676.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.QueryDenomMetadataResponse;
                fromJSON(object: any): _676.QueryDenomMetadataResponse;
                toJSON(message: _676.QueryDenomMetadataResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _676.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _676.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.QueryDenomOwnersRequest;
                fromJSON(object: any): _676.QueryDenomOwnersRequest;
                toJSON(message: _676.QueryDenomOwnersRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _676.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _676.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.DenomOwner;
                fromJSON(object: any): _676.DenomOwner;
                toJSON(message: _676.DenomOwner): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _676.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _676.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.QueryDenomOwnersResponse;
                fromJSON(object: any): _676.QueryDenomOwnersResponse;
                toJSON(message: _676.QueryDenomOwnersResponse): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _676.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _675.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.GenesisState;
                fromJSON(object: any): _675.GenesisState;
                toJSON(message: _675.GenesisState): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _675.GenesisState;
            };
            Balance: {
                encode(message: _675.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.Balance;
                fromJSON(object: any): _675.Balance;
                toJSON(message: _675.Balance): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _675.Balance;
            };
            Params: {
                encode(message: _674.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.Params;
                fromJSON(object: any): _674.Params;
                toJSON(message: _674.Params): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _674.Params;
            };
            SendEnabled: {
                encode(message: _674.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.SendEnabled;
                fromJSON(object: any): _674.SendEnabled;
                toJSON(message: _674.SendEnabled): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _674.SendEnabled;
            };
            Input: {
                encode(message: _674.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.Input;
                fromJSON(object: any): _674.Input;
                toJSON(message: _674.Input): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _674.Input;
            };
            Output: {
                encode(message: _674.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.Output;
                fromJSON(object: any): _674.Output;
                toJSON(message: _674.Output): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _674.Output;
            };
            Supply: {
                encode(message: _674.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.Supply;
                fromJSON(object: any): _674.Supply;
                toJSON(message: _674.Supply): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _674.Supply;
            };
            DenomUnit: {
                encode(message: _674.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.DenomUnit;
                fromJSON(object: any): _674.DenomUnit;
                toJSON(message: _674.DenomUnit): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _674.DenomUnit;
            };
            Metadata: {
                encode(message: _674.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.Metadata;
                fromJSON(object: any): _674.Metadata;
                toJSON(message: _674.Metadata): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _674.Metadata;
            };
            SendAuthorization: {
                encode(message: _673.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.SendAuthorization;
                fromJSON(object: any): _673.SendAuthorization;
                toJSON(message: _673.SendAuthorization): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _673.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _686.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _686.TxResponse;
                    fromJSON(object: any): _686.TxResponse;
                    toJSON(message: _686.TxResponse): unknown;
                    fromPartial<I extends unknown>(object: I): _686.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _686.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _686.ABCIMessageLog;
                    fromJSON(object: any): _686.ABCIMessageLog;
                    toJSON(message: _686.ABCIMessageLog): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _686.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _686.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _686.StringEvent;
                    fromJSON(object: any): _686.StringEvent;
                    toJSON(message: _686.StringEvent): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _686.StringEvent;
                };
                Attribute: {
                    encode(message: _686.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _686.Attribute;
                    fromJSON(object: any): _686.Attribute;
                    toJSON(message: _686.Attribute): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _686.Attribute;
                };
                GasInfo: {
                    encode(message: _686.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _686.GasInfo;
                    fromJSON(object: any): _686.GasInfo;
                    toJSON(message: _686.GasInfo): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _686.GasInfo;
                };
                Result: {
                    encode(message: _686.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _686.Result;
                    fromJSON(object: any): _686.Result;
                    toJSON(message: _686.Result): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _686.Result;
                };
                SimulationResponse: {
                    encode(message: _686.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _686.SimulationResponse;
                    fromJSON(object: any): _686.SimulationResponse;
                    toJSON(message: _686.SimulationResponse): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _686.SimulationResponse;
                };
                MsgData: {
                    encode(message: _686.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _686.MsgData;
                    fromJSON(object: any): _686.MsgData;
                    toJSON(message: _686.MsgData): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _686.MsgData;
                };
                TxMsgData: {
                    encode(message: _686.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _686.TxMsgData;
                    fromJSON(object: any): _686.TxMsgData;
                    toJSON(message: _686.TxMsgData): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _686.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _686.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _686.SearchTxsResult;
                    fromJSON(object: any): _686.SearchTxsResult;
                    toJSON(message: _686.SearchTxsResult): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _686.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _687.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _687.Pairs;
                    fromJSON(object: any): _687.Pairs;
                    toJSON(message: _687.Pairs): unknown;
                    fromPartial<I extends unknown>(object: I): _687.Pairs;
                };
                Pair: {
                    encode(message: _687.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _687.Pair;
                    fromJSON(object: any): _687.Pair;
                    toJSON(message: _687.Pair): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _687.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _688.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _688.PageRequest;
                    fromJSON(object: any): _688.PageRequest;
                    toJSON(message: _688.PageRequest): unknown;
                    fromPartial<I extends unknown>(object: I): _688.PageRequest;
                };
                PageResponse: {
                    encode(message: _688.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _688.PageResponse;
                    fromJSON(object: any): _688.PageResponse;
                    toJSON(message: _688.PageResponse): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _688.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _689.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.ListAllInterfacesRequest;
                    fromJSON(_: any): _689.ListAllInterfacesRequest;
                    toJSON(_: _689.ListAllInterfacesRequest): unknown;
                    fromPartial<I extends unknown>(_: I): _689.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _689.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.ListAllInterfacesResponse;
                    fromJSON(object: any): _689.ListAllInterfacesResponse;
                    toJSON(message: _689.ListAllInterfacesResponse): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _689.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _689.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.ListImplementationsRequest;
                    fromJSON(object: any): _689.ListImplementationsRequest;
                    toJSON(message: _689.ListImplementationsRequest): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _689.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _689.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.ListImplementationsResponse;
                    fromJSON(object: any): _689.ListImplementationsResponse;
                    toJSON(message: _689.ListImplementationsResponse): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _689.ListImplementationsResponse;
                };
                ReflectionServiceClientImpl: typeof _689.ReflectionServiceClientImpl;
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _690.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.AppDescriptor;
                    fromJSON(object: any): _690.AppDescriptor;
                    toJSON(message: _690.AppDescriptor): unknown;
                    fromPartial<I extends unknown>(object: I): _690.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _690.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.TxDescriptor;
                    fromJSON(object: any): _690.TxDescriptor;
                    toJSON(message: _690.TxDescriptor): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _690.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _690.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.AuthnDescriptor;
                    fromJSON(object: any): _690.AuthnDescriptor;
                    toJSON(message: _690.AuthnDescriptor): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _690.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _690.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.SigningModeDescriptor;
                    fromJSON(object: any): _690.SigningModeDescriptor;
                    toJSON(message: _690.SigningModeDescriptor): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _690.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _690.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.ChainDescriptor;
                    fromJSON(object: any): _690.ChainDescriptor;
                    toJSON(message: _690.ChainDescriptor): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _690.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _690.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.CodecDescriptor;
                    fromJSON(object: any): _690.CodecDescriptor;
                    toJSON(message: _690.CodecDescriptor): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _690.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _690.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.InterfaceDescriptor;
                    fromJSON(object: any): _690.InterfaceDescriptor;
                    toJSON(message: _690.InterfaceDescriptor): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _690.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _690.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _690.InterfaceImplementerDescriptor;
                    toJSON(message: _690.InterfaceImplementerDescriptor): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _690.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _690.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _690.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _690.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _690.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _690.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.ConfigurationDescriptor;
                    fromJSON(object: any): _690.ConfigurationDescriptor;
                    toJSON(message: _690.ConfigurationDescriptor): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _690.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _690.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.MsgDescriptor;
                    fromJSON(object: any): _690.MsgDescriptor;
                    toJSON(message: _690.MsgDescriptor): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _690.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _690.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _690.GetAuthnDescriptorRequest;
                    toJSON(_: _690.GetAuthnDescriptorRequest): unknown;
                    fromPartial<I_11 extends unknown>(_: I_11): _690.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _690.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _690.GetAuthnDescriptorResponse;
                    toJSON(message: _690.GetAuthnDescriptorResponse): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _690.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _690.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.GetChainDescriptorRequest;
                    fromJSON(_: any): _690.GetChainDescriptorRequest;
                    toJSON(_: _690.GetChainDescriptorRequest): unknown;
                    fromPartial<I_13 extends unknown>(_: I_13): _690.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _690.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.GetChainDescriptorResponse;
                    fromJSON(object: any): _690.GetChainDescriptorResponse;
                    toJSON(message: _690.GetChainDescriptorResponse): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _690.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _690.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.GetCodecDescriptorRequest;
                    fromJSON(_: any): _690.GetCodecDescriptorRequest;
                    toJSON(_: _690.GetCodecDescriptorRequest): unknown;
                    fromPartial<I_15 extends unknown>(_: I_15): _690.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _690.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.GetCodecDescriptorResponse;
                    fromJSON(object: any): _690.GetCodecDescriptorResponse;
                    toJSON(message: _690.GetCodecDescriptorResponse): unknown;
                    fromPartial<I_16 extends unknown>(object: I_16): _690.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _690.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _690.GetConfigurationDescriptorRequest;
                    toJSON(_: _690.GetConfigurationDescriptorRequest): unknown;
                    fromPartial<I_17 extends unknown>(_: I_17): _690.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _690.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _690.GetConfigurationDescriptorResponse;
                    toJSON(message: _690.GetConfigurationDescriptorResponse): unknown;
                    fromPartial<I_18 extends unknown>(object: I_18): _690.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _690.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _690.GetQueryServicesDescriptorRequest;
                    toJSON(_: _690.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial<I_19 extends unknown>(_: I_19): _690.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _690.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _690.GetQueryServicesDescriptorResponse;
                    toJSON(message: _690.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial<I_20 extends unknown>(object: I_20): _690.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _690.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.GetTxDescriptorRequest;
                    fromJSON(_: any): _690.GetTxDescriptorRequest;
                    toJSON(_: _690.GetTxDescriptorRequest): unknown;
                    fromPartial<I_21 extends unknown>(_: I_21): _690.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _690.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.GetTxDescriptorResponse;
                    fromJSON(object: any): _690.GetTxDescriptorResponse;
                    toJSON(message: _690.GetTxDescriptorResponse): unknown;
                    fromPartial<I_22 extends unknown>(object: I_22): _690.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _690.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.QueryServicesDescriptor;
                    fromJSON(object: any): _690.QueryServicesDescriptor;
                    toJSON(message: _690.QueryServicesDescriptor): unknown;
                    fromPartial<I_23 extends unknown>(object: I_23): _690.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _690.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.QueryServiceDescriptor;
                    fromJSON(object: any): _690.QueryServiceDescriptor;
                    toJSON(message: _690.QueryServiceDescriptor): unknown;
                    fromPartial<I_24 extends unknown>(object: I_24): _690.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _690.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.QueryMethodDescriptor;
                    fromJSON(object: any): _690.QueryMethodDescriptor;
                    toJSON(message: _690.QueryMethodDescriptor): unknown;
                    fromPartial<I_25 extends unknown>(object: I_25): _690.QueryMethodDescriptor;
                };
                ReflectionServiceClientImpl: typeof _690.ReflectionServiceClientImpl;
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _691.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _691.Snapshot;
                    fromJSON(object: any): _691.Snapshot;
                    toJSON(message: _691.Snapshot): unknown;
                    fromPartial<I extends unknown>(object: I): _691.Snapshot;
                };
                Metadata: {
                    encode(message: _691.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _691.Metadata;
                    fromJSON(object: any): _691.Metadata;
                    toJSON(message: _691.Metadata): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _691.Metadata;
                };
                SnapshotItem: {
                    encode(message: _691.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _691.SnapshotItem;
                    fromJSON(object: any): _691.SnapshotItem;
                    toJSON(message: _691.SnapshotItem): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _691.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _691.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _691.SnapshotStoreItem;
                    fromJSON(object: any): _691.SnapshotStoreItem;
                    toJSON(message: _691.SnapshotStoreItem): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _691.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _691.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _691.SnapshotIAVLItem;
                    fromJSON(object: any): _691.SnapshotIAVLItem;
                    toJSON(message: _691.SnapshotIAVLItem): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _691.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _691.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _691.SnapshotExtensionMeta;
                    fromJSON(object: any): _691.SnapshotExtensionMeta;
                    toJSON(message: _691.SnapshotExtensionMeta): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _691.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _691.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _691.SnapshotExtensionPayload;
                    fromJSON(object: any): _691.SnapshotExtensionPayload;
                    toJSON(message: _691.SnapshotExtensionPayload): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _691.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _691.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _691.SnapshotKVItem;
                    fromJSON(object: any): _691.SnapshotKVItem;
                    toJSON(message: _691.SnapshotKVItem): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _691.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _691.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _691.SnapshotSchema;
                    fromJSON(object: any): _691.SnapshotSchema;
                    toJSON(message: _691.SnapshotSchema): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _691.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _693.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _693.StoreKVPair;
                    fromJSON(object: any): _693.StoreKVPair;
                    toJSON(message: _693.StoreKVPair): unknown;
                    fromPartial<I extends unknown>(object: I): _693.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _692.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.CommitInfo;
                    fromJSON(object: any): _692.CommitInfo;
                    toJSON(message: _692.CommitInfo): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _692.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _692.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.StoreInfo;
                    fromJSON(object: any): _692.StoreInfo;
                    toJSON(message: _692.StoreInfo): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _692.StoreInfo;
                };
                CommitID: {
                    encode(message: _692.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.CommitID;
                    fromJSON(object: any): _692.CommitID;
                    toJSON(message: _692.CommitID): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _692.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                GetValidatorSetByHeightRequest: {
                    encode(message: _694.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _694.GetValidatorSetByHeightRequest;
                    toJSON(message: _694.GetValidatorSetByHeightRequest): unknown;
                    fromPartial<I extends unknown>(object: I): _694.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _694.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _694.GetValidatorSetByHeightResponse;
                    toJSON(message: _694.GetValidatorSetByHeightResponse): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _694.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _694.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _694.GetLatestValidatorSetRequest;
                    toJSON(message: _694.GetLatestValidatorSetRequest): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _694.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _694.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _694.GetLatestValidatorSetResponse;
                    toJSON(message: _694.GetLatestValidatorSetResponse): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _694.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _694.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.Validator;
                    fromJSON(object: any): _694.Validator;
                    toJSON(message: _694.Validator): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _694.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _694.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.GetBlockByHeightRequest;
                    fromJSON(object: any): _694.GetBlockByHeightRequest;
                    toJSON(message: _694.GetBlockByHeightRequest): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _694.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _694.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.GetBlockByHeightResponse;
                    fromJSON(object: any): _694.GetBlockByHeightResponse;
                    toJSON(message: _694.GetBlockByHeightResponse): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _694.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _694.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.GetLatestBlockRequest;
                    fromJSON(_: any): _694.GetLatestBlockRequest;
                    toJSON(_: _694.GetLatestBlockRequest): unknown;
                    fromPartial<I_7 extends unknown>(_: I_7): _694.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _694.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.GetLatestBlockResponse;
                    fromJSON(object: any): _694.GetLatestBlockResponse;
                    toJSON(message: _694.GetLatestBlockResponse): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _694.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _694.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.GetSyncingRequest;
                    fromJSON(_: any): _694.GetSyncingRequest;
                    toJSON(_: _694.GetSyncingRequest): unknown;
                    fromPartial<I_9 extends unknown>(_: I_9): _694.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _694.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.GetSyncingResponse;
                    fromJSON(object: any): _694.GetSyncingResponse;
                    toJSON(message: _694.GetSyncingResponse): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _694.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _694.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.GetNodeInfoRequest;
                    fromJSON(_: any): _694.GetNodeInfoRequest;
                    toJSON(_: _694.GetNodeInfoRequest): unknown;
                    fromPartial<I_11 extends unknown>(_: I_11): _694.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _694.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.GetNodeInfoResponse;
                    fromJSON(object: any): _694.GetNodeInfoResponse;
                    toJSON(message: _694.GetNodeInfoResponse): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _694.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _694.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.VersionInfo;
                    fromJSON(object: any): _694.VersionInfo;
                    toJSON(message: _694.VersionInfo): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _694.VersionInfo;
                };
                Module: {
                    encode(message: _694.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.Module;
                    fromJSON(object: any): _694.Module;
                    toJSON(message: _694.Module): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _694.Module;
                };
                ServiceClientImpl: typeof _694.ServiceClientImpl;
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _695.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _695.Coin;
                fromJSON(object: any): _695.Coin;
                toJSON(message: _695.Coin): unknown;
                fromPartial<I extends unknown>(object: I): _695.Coin;
            };
            DecCoin: {
                encode(message: _695.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _695.DecCoin;
                fromJSON(object: any): _695.DecCoin;
                toJSON(message: _695.DecCoin): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _695.DecCoin;
            };
            IntProto: {
                encode(message: _695.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _695.IntProto;
                fromJSON(object: any): _695.IntProto;
                toJSON(message: _695.IntProto): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _695.IntProto;
            };
            DecProto: {
                encode(message: _695.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _695.DecProto;
                fromJSON(object: any): _695.DecProto;
                toJSON(message: _695.DecProto): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _695.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _697.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _697.GenesisOwners;
                fromJSON(object: any): _697.GenesisOwners;
                toJSON(message: _697.GenesisOwners): unknown;
                fromPartial<I extends unknown>(object: I): _697.GenesisOwners;
            };
            GenesisState: {
                encode(message: _697.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _697.GenesisState;
                fromJSON(object: any): _697.GenesisState;
                toJSON(message: _697.GenesisState): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _697.GenesisState;
            };
            Capability: {
                encode(message: _696.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _696.Capability;
                fromJSON(object: any): _696.Capability;
                toJSON(message: _696.Capability): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _696.Capability;
            };
            Owner: {
                encode(message: _696.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _696.Owner;
                fromJSON(object: any): _696.Owner;
                toJSON(message: _696.Owner): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _696.Owner;
            };
            CapabilityOwners: {
                encode(message: _696.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _696.CapabilityOwners;
                fromJSON(object: any): _696.CapabilityOwners;
                toJSON(message: _696.CapabilityOwners): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _696.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgVerifyInvariant: {
                encode(message: _699.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _699.MsgVerifyInvariant;
                fromJSON(object: any): _699.MsgVerifyInvariant;
                toJSON(message: _699.MsgVerifyInvariant): unknown;
                fromPartial<I extends unknown>(object: I): _699.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _699.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _699.MsgVerifyInvariantResponse;
                fromJSON(_: any): _699.MsgVerifyInvariantResponse;
                toJSON(_: _699.MsgVerifyInvariantResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _699.MsgVerifyInvariantResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _699.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _699.MsgVerifyInvariant;
                };
            };
            encoded: {
                verifyInvariant(value: _699.MsgVerifyInvariant): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                verifyInvariant(value: any): {
                    typeUrl: string;
                    value: _699.MsgVerifyInvariant;
                };
            };
            toJSON: {
                verifyInvariant(value: _699.MsgVerifyInvariant): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                verifyInvariant(value: _699.MsgVerifyInvariant): {
                    typeUrl: string;
                    value: _699.MsgVerifyInvariant;
                };
            };
            messages: {
                verifyInvariant(value: _699.MsgVerifyInvariant): {
                    typeUrl: string;
                    value: _699.MsgVerifyInvariant;
                };
            };
            GenesisState: {
                encode(message: _698.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _698.GenesisState;
                fromJSON(object: any): _698.GenesisState;
                toJSON(message: _698.GenesisState): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _698.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _708.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _708.PubKey;
                fromJSON(object: any): _708.PubKey;
                toJSON(message: _708.PubKey): unknown;
                fromPartial<I extends unknown>(object: I): _708.PubKey;
            };
            PrivKey: {
                encode(message: _708.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _708.PrivKey;
                fromJSON(object: any): _708.PrivKey;
                toJSON(message: _708.PrivKey): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _708.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _709.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _709.BIP44Params;
                    fromJSON(object: any): _709.BIP44Params;
                    toJSON(message: _709.BIP44Params): unknown;
                    fromPartial<I extends unknown>(object: I): _709.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _710.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _710.Record;
                    fromJSON(object: any): _710.Record;
                    toJSON(message: _710.Record): unknown;
                    fromPartial<I extends unknown>(object: I): _710.Record;
                };
                Record_Local: {
                    encode(message: _710.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _710.Record_Local;
                    fromJSON(object: any): _710.Record_Local;
                    toJSON(message: _710.Record_Local): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _710.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _710.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _710.Record_Ledger;
                    fromJSON(object: any): _710.Record_Ledger;
                    toJSON(message: _710.Record_Ledger): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _710.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _710.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _710.Record_Multi;
                    fromJSON(_: any): _710.Record_Multi;
                    toJSON(_: _710.Record_Multi): unknown;
                    fromPartial<I_3 extends unknown>(_: I_3): _710.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _710.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _710.Record_Offline;
                    fromJSON(_: any): _710.Record_Offline;
                    toJSON(_: _710.Record_Offline): unknown;
                    fromPartial<I_4 extends unknown>(_: I_4): _710.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _711.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _711.LegacyAminoPubKey;
                fromJSON(object: any): _711.LegacyAminoPubKey;
                toJSON(message: _711.LegacyAminoPubKey): unknown;
                fromPartial<I extends unknown>(object: I): _711.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _712.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _712.PubKey;
                fromJSON(object: any): _712.PubKey;
                toJSON(message: _712.PubKey): unknown;
                fromPartial<I extends unknown>(object: I): _712.PubKey;
            };
            PrivKey: {
                encode(message: _712.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _712.PrivKey;
                fromJSON(object: any): _712.PrivKey;
                toJSON(message: _712.PrivKey): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _712.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _713.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _713.PubKey;
                fromJSON(object: any): _713.PubKey;
                toJSON(message: _713.PubKey): unknown;
                fromPartial<I extends unknown>(object: I): _713.PubKey;
            };
            PrivKey: {
                encode(message: _713.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _713.PrivKey;
                fromJSON(object: any): _713.PrivKey;
                toJSON(message: _713.PrivKey): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _713.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgSetWithdrawAddress: {
                encode(message: _717.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _717.MsgSetWithdrawAddress;
                fromJSON(object: any): _717.MsgSetWithdrawAddress;
                toJSON(message: _717.MsgSetWithdrawAddress): unknown;
                fromPartial<I extends unknown>(object: I): _717.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _717.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _717.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _717.MsgSetWithdrawAddressResponse;
                toJSON(_: _717.MsgSetWithdrawAddressResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _717.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _717.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _717.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _717.MsgWithdrawDelegatorReward;
                toJSON(message: _717.MsgWithdrawDelegatorReward): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _717.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _717.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _717.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _717.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _717.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _717.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _717.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _717.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _717.MsgWithdrawValidatorCommission;
                toJSON(message: _717.MsgWithdrawValidatorCommission): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _717.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _717.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _717.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _717.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _717.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _717.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _717.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _717.MsgFundCommunityPool;
                fromJSON(object: any): _717.MsgFundCommunityPool;
                toJSON(message: _717.MsgFundCommunityPool): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _717.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _717.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _717.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _717.MsgFundCommunityPoolResponse;
                toJSON(_: _717.MsgFundCommunityPoolResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _717.MsgFundCommunityPoolResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _717.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _717.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _717.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _717.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _717.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _717.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _717.MsgFundCommunityPool) => {
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
                    }) => _717.MsgFundCommunityPool;
                };
            };
            encoded: {
                setWithdrawAddress(value: _717.MsgSetWithdrawAddress): {
                    type_url: string;
                    value: Uint8Array;
                };
                withdrawDelegatorReward(value: _717.MsgWithdrawDelegatorReward): {
                    type_url: string;
                    value: Uint8Array;
                };
                withdrawValidatorCommission(value: _717.MsgWithdrawValidatorCommission): {
                    type_url: string;
                    value: Uint8Array;
                };
                fundCommunityPool(value: _717.MsgFundCommunityPool): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                setWithdrawAddress(value: any): {
                    typeUrl: string;
                    value: _717.MsgSetWithdrawAddress;
                };
                withdrawDelegatorReward(value: any): {
                    typeUrl: string;
                    value: _717.MsgWithdrawDelegatorReward;
                };
                withdrawValidatorCommission(value: any): {
                    typeUrl: string;
                    value: _717.MsgWithdrawValidatorCommission;
                };
                fundCommunityPool(value: any): {
                    typeUrl: string;
                    value: _717.MsgFundCommunityPool;
                };
            };
            toJSON: {
                setWithdrawAddress(value: _717.MsgSetWithdrawAddress): {
                    typeUrl: string;
                    value: unknown;
                };
                withdrawDelegatorReward(value: _717.MsgWithdrawDelegatorReward): {
                    typeUrl: string;
                    value: unknown;
                };
                withdrawValidatorCommission(value: _717.MsgWithdrawValidatorCommission): {
                    typeUrl: string;
                    value: unknown;
                };
                fundCommunityPool(value: _717.MsgFundCommunityPool): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                setWithdrawAddress(value: _717.MsgSetWithdrawAddress): {
                    typeUrl: string;
                    value: _717.MsgSetWithdrawAddress;
                };
                withdrawDelegatorReward(value: _717.MsgWithdrawDelegatorReward): {
                    typeUrl: string;
                    value: _717.MsgWithdrawDelegatorReward;
                };
                withdrawValidatorCommission(value: _717.MsgWithdrawValidatorCommission): {
                    typeUrl: string;
                    value: _717.MsgWithdrawValidatorCommission;
                };
                fundCommunityPool(value: _717.MsgFundCommunityPool): {
                    typeUrl: string;
                    value: _717.MsgFundCommunityPool;
                };
            };
            messages: {
                setWithdrawAddress(value: _717.MsgSetWithdrawAddress): {
                    typeUrl: string;
                    value: _717.MsgSetWithdrawAddress;
                };
                withdrawDelegatorReward(value: _717.MsgWithdrawDelegatorReward): {
                    typeUrl: string;
                    value: _717.MsgWithdrawDelegatorReward;
                };
                withdrawValidatorCommission(value: _717.MsgWithdrawValidatorCommission): {
                    typeUrl: string;
                    value: _717.MsgWithdrawValidatorCommission;
                };
                fundCommunityPool(value: _717.MsgFundCommunityPool): {
                    typeUrl: string;
                    value: _717.MsgFundCommunityPool;
                };
            };
            QueryParamsRequest: {
                encode(_: _716.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.QueryParamsRequest;
                fromJSON(_: any): _716.QueryParamsRequest;
                toJSON(_: _716.QueryParamsRequest): unknown;
                fromPartial<I_8 extends unknown>(_: I_8): _716.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _716.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.QueryParamsResponse;
                fromJSON(object: any): _716.QueryParamsResponse;
                toJSON(message: _716.QueryParamsResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _716.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _716.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _716.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _716.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _716.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _716.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _716.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _716.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _716.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _716.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.QueryValidatorCommissionRequest;
                fromJSON(object: any): _716.QueryValidatorCommissionRequest;
                toJSON(message: _716.QueryValidatorCommissionRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _716.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _716.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.QueryValidatorCommissionResponse;
                fromJSON(object: any): _716.QueryValidatorCommissionResponse;
                toJSON(message: _716.QueryValidatorCommissionResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _716.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _716.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.QueryValidatorSlashesRequest;
                fromJSON(object: any): _716.QueryValidatorSlashesRequest;
                toJSON(message: _716.QueryValidatorSlashesRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _716.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _716.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.QueryValidatorSlashesResponse;
                fromJSON(object: any): _716.QueryValidatorSlashesResponse;
                toJSON(message: _716.QueryValidatorSlashesResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _716.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _716.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.QueryDelegationRewardsRequest;
                fromJSON(object: any): _716.QueryDelegationRewardsRequest;
                toJSON(message: _716.QueryDelegationRewardsRequest): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _716.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _716.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.QueryDelegationRewardsResponse;
                fromJSON(object: any): _716.QueryDelegationRewardsResponse;
                toJSON(message: _716.QueryDelegationRewardsResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _716.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _716.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _716.QueryDelegationTotalRewardsRequest;
                toJSON(message: _716.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _716.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _716.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _716.QueryDelegationTotalRewardsResponse;
                toJSON(message: _716.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _716.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _716.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _716.QueryDelegatorValidatorsRequest;
                toJSON(message: _716.QueryDelegatorValidatorsRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _716.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _716.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _716.QueryDelegatorValidatorsResponse;
                toJSON(message: _716.QueryDelegatorValidatorsResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _716.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _716.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _716.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _716.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _716.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _716.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _716.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _716.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _716.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _716.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.QueryCommunityPoolRequest;
                fromJSON(_: any): _716.QueryCommunityPoolRequest;
                toJSON(_: _716.QueryCommunityPoolRequest): unknown;
                fromPartial<I_24 extends unknown>(_: I_24): _716.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _716.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.QueryCommunityPoolResponse;
                fromJSON(object: any): _716.QueryCommunityPoolResponse;
                toJSON(message: _716.QueryCommunityPoolResponse): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _716.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _715.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _715.DelegatorWithdrawInfo;
                fromJSON(object: any): _715.DelegatorWithdrawInfo;
                toJSON(message: _715.DelegatorWithdrawInfo): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _715.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _715.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _715.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _715.ValidatorOutstandingRewardsRecord;
                toJSON(message: _715.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _715.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _715.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _715.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _715.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _715.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _715.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _715.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _715.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _715.ValidatorHistoricalRewardsRecord;
                toJSON(message: _715.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _715.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _715.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _715.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _715.ValidatorCurrentRewardsRecord;
                toJSON(message: _715.ValidatorCurrentRewardsRecord): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _715.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _715.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _715.DelegatorStartingInfoRecord;
                fromJSON(object: any): _715.DelegatorStartingInfoRecord;
                toJSON(message: _715.DelegatorStartingInfoRecord): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _715.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _715.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _715.ValidatorSlashEventRecord;
                fromJSON(object: any): _715.ValidatorSlashEventRecord;
                toJSON(message: _715.ValidatorSlashEventRecord): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _715.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _715.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _715.GenesisState;
                fromJSON(object: any): _715.GenesisState;
                toJSON(message: _715.GenesisState): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _715.GenesisState;
            };
            Params: {
                encode(message: _714.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _714.Params;
                fromJSON(object: any): _714.Params;
                toJSON(message: _714.Params): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _714.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _714.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _714.ValidatorHistoricalRewards;
                fromJSON(object: any): _714.ValidatorHistoricalRewards;
                toJSON(message: _714.ValidatorHistoricalRewards): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _714.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _714.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _714.ValidatorCurrentRewards;
                fromJSON(object: any): _714.ValidatorCurrentRewards;
                toJSON(message: _714.ValidatorCurrentRewards): unknown;
                fromPartial<I_36 extends unknown>(object: I_36): _714.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _714.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _714.ValidatorAccumulatedCommission;
                fromJSON(object: any): _714.ValidatorAccumulatedCommission;
                toJSON(message: _714.ValidatorAccumulatedCommission): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _714.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _714.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _714.ValidatorOutstandingRewards;
                fromJSON(object: any): _714.ValidatorOutstandingRewards;
                toJSON(message: _714.ValidatorOutstandingRewards): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _714.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _714.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _714.ValidatorSlashEvent;
                fromJSON(object: any): _714.ValidatorSlashEvent;
                toJSON(message: _714.ValidatorSlashEvent): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _714.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _714.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _714.ValidatorSlashEvents;
                fromJSON(object: any): _714.ValidatorSlashEvents;
                toJSON(message: _714.ValidatorSlashEvents): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _714.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _714.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _714.FeePool;
                fromJSON(object: any): _714.FeePool;
                toJSON(message: _714.FeePool): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _714.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _714.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _714.CommunityPoolSpendProposal;
                fromJSON(object: any): _714.CommunityPoolSpendProposal;
                toJSON(message: _714.CommunityPoolSpendProposal): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _714.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _714.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _714.DelegatorStartingInfo;
                fromJSON(object: any): _714.DelegatorStartingInfo;
                toJSON(message: _714.DelegatorStartingInfo): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _714.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _714.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _714.DelegationDelegatorReward;
                fromJSON(object: any): _714.DelegationDelegatorReward;
                toJSON(message: _714.DelegationDelegatorReward): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _714.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _714.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _714.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _714.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _714.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _714.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgSubmitEvidence: {
                encode(message: _729.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _729.MsgSubmitEvidence;
                fromJSON(object: any): _729.MsgSubmitEvidence;
                toJSON(message: _729.MsgSubmitEvidence): unknown;
                fromPartial<I extends unknown>(object: I): _729.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _729.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _729.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _729.MsgSubmitEvidenceResponse;
                toJSON(message: _729.MsgSubmitEvidenceResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _729.MsgSubmitEvidenceResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _729.MsgSubmitEvidence) => {
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
                    }) => _729.MsgSubmitEvidence;
                };
            };
            encoded: {
                submitEvidence(value: _729.MsgSubmitEvidence): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                submitEvidence(value: any): {
                    typeUrl: string;
                    value: _729.MsgSubmitEvidence;
                };
            };
            toJSON: {
                submitEvidence(value: _729.MsgSubmitEvidence): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                submitEvidence(value: _729.MsgSubmitEvidence): {
                    typeUrl: string;
                    value: _729.MsgSubmitEvidence;
                };
            };
            messages: {
                submitEvidence(value: _729.MsgSubmitEvidence): {
                    typeUrl: string;
                    value: _729.MsgSubmitEvidence;
                };
            };
            QueryEvidenceRequest: {
                encode(message: _728.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _728.QueryEvidenceRequest;
                fromJSON(object: any): _728.QueryEvidenceRequest;
                toJSON(message: _728.QueryEvidenceRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _728.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _728.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _728.QueryEvidenceResponse;
                fromJSON(object: any): _728.QueryEvidenceResponse;
                toJSON(message: _728.QueryEvidenceResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _728.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _728.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _728.QueryAllEvidenceRequest;
                fromJSON(object: any): _728.QueryAllEvidenceRequest;
                toJSON(message: _728.QueryAllEvidenceRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _728.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _728.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _728.QueryAllEvidenceResponse;
                fromJSON(object: any): _728.QueryAllEvidenceResponse;
                toJSON(message: _728.QueryAllEvidenceResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _728.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _727.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _727.GenesisState;
                fromJSON(object: any): _727.GenesisState;
                toJSON(message: _727.GenesisState): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _727.GenesisState;
            };
            Equivocation: {
                encode(message: _726.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _726.Equivocation;
                fromJSON(object: any): _726.Equivocation;
                toJSON(message: _726.Equivocation): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _726.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgGrantAllowance: {
                encode(message: _741.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _741.MsgGrantAllowance;
                fromJSON(object: any): _741.MsgGrantAllowance;
                toJSON(message: _741.MsgGrantAllowance): unknown;
                fromPartial<I extends unknown>(object: I): _741.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _741.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _741.MsgGrantAllowanceResponse;
                fromJSON(_: any): _741.MsgGrantAllowanceResponse;
                toJSON(_: _741.MsgGrantAllowanceResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _741.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _741.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _741.MsgRevokeAllowance;
                fromJSON(object: any): _741.MsgRevokeAllowance;
                toJSON(message: _741.MsgRevokeAllowance): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _741.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _741.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _741.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _741.MsgRevokeAllowanceResponse;
                toJSON(_: _741.MsgRevokeAllowanceResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _741.MsgRevokeAllowanceResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _741.MsgGrantAllowance) => {
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
                    }) => _741.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _741.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _741.MsgRevokeAllowance;
                };
            };
            encoded: {
                grantAllowance(value: _741.MsgGrantAllowance): {
                    type_url: string;
                    value: Uint8Array;
                };
                revokeAllowance(value: _741.MsgRevokeAllowance): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                grantAllowance(value: any): {
                    typeUrl: string;
                    value: _741.MsgGrantAllowance;
                };
                revokeAllowance(value: any): {
                    typeUrl: string;
                    value: _741.MsgRevokeAllowance;
                };
            };
            toJSON: {
                grantAllowance(value: _741.MsgGrantAllowance): {
                    typeUrl: string;
                    value: unknown;
                };
                revokeAllowance(value: _741.MsgRevokeAllowance): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                grantAllowance(value: _741.MsgGrantAllowance): {
                    typeUrl: string;
                    value: _741.MsgGrantAllowance;
                };
                revokeAllowance(value: _741.MsgRevokeAllowance): {
                    typeUrl: string;
                    value: _741.MsgRevokeAllowance;
                };
            };
            messages: {
                grantAllowance(value: _741.MsgGrantAllowance): {
                    typeUrl: string;
                    value: _741.MsgGrantAllowance;
                };
                revokeAllowance(value: _741.MsgRevokeAllowance): {
                    typeUrl: string;
                    value: _741.MsgRevokeAllowance;
                };
            };
            QueryAllowanceRequest: {
                encode(message: _740.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _740.QueryAllowanceRequest;
                fromJSON(object: any): _740.QueryAllowanceRequest;
                toJSON(message: _740.QueryAllowanceRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _740.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _740.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _740.QueryAllowanceResponse;
                fromJSON(object: any): _740.QueryAllowanceResponse;
                toJSON(message: _740.QueryAllowanceResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _740.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _740.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _740.QueryAllowancesRequest;
                fromJSON(object: any): _740.QueryAllowancesRequest;
                toJSON(message: _740.QueryAllowancesRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _740.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _740.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _740.QueryAllowancesResponse;
                fromJSON(object: any): _740.QueryAllowancesResponse;
                toJSON(message: _740.QueryAllowancesResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _740.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _740.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _740.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _740.QueryAllowancesByGranterRequest;
                toJSON(message: _740.QueryAllowancesByGranterRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _740.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _740.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _740.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _740.QueryAllowancesByGranterResponse;
                toJSON(message: _740.QueryAllowancesByGranterResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _740.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _739.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _739.GenesisState;
                fromJSON(object: any): _739.GenesisState;
                toJSON(message: _739.GenesisState): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _739.GenesisState;
            };
            BasicAllowance: {
                encode(message: _738.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _738.BasicAllowance;
                fromJSON(object: any): _738.BasicAllowance;
                toJSON(message: _738.BasicAllowance): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _738.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _738.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _738.PeriodicAllowance;
                fromJSON(object: any): _738.PeriodicAllowance;
                toJSON(message: _738.PeriodicAllowance): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _738.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _738.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _738.AllowedMsgAllowance;
                fromJSON(object: any): _738.AllowedMsgAllowance;
                toJSON(message: _738.AllowedMsgAllowance): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _738.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _738.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _738.Grant;
                fromJSON(object: any): _738.Grant;
                toJSON(message: _738.Grant): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _738.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _750.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _750.GenesisState;
                fromJSON(object: any): _750.GenesisState;
                toJSON(message: _750.GenesisState): unknown;
                fromPartial<I extends unknown>(object: I): _750.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgSubmitProposal: {
                encode(message: _754.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _754.MsgSubmitProposal;
                fromJSON(object: any): _754.MsgSubmitProposal;
                toJSON(message: _754.MsgSubmitProposal): unknown;
                fromPartial<I extends unknown>(object: I): _754.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _754.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _754.MsgSubmitProposalResponse;
                fromJSON(object: any): _754.MsgSubmitProposalResponse;
                toJSON(message: _754.MsgSubmitProposalResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _754.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _754.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _754.MsgExecLegacyContent;
                fromJSON(object: any): _754.MsgExecLegacyContent;
                toJSON(message: _754.MsgExecLegacyContent): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _754.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _754.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _754.MsgExecLegacyContentResponse;
                fromJSON(_: any): _754.MsgExecLegacyContentResponse;
                toJSON(_: _754.MsgExecLegacyContentResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _754.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _754.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _754.MsgVote;
                fromJSON(object: any): _754.MsgVote;
                toJSON(message: _754.MsgVote): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _754.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _754.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _754.MsgVoteResponse;
                fromJSON(_: any): _754.MsgVoteResponse;
                toJSON(_: _754.MsgVoteResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _754.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _754.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _754.MsgVoteWeighted;
                fromJSON(object: any): _754.MsgVoteWeighted;
                toJSON(message: _754.MsgVoteWeighted): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _754.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _754.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _754.MsgVoteWeightedResponse;
                fromJSON(_: any): _754.MsgVoteWeightedResponse;
                toJSON(_: _754.MsgVoteWeightedResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _754.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _754.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _754.MsgDeposit;
                fromJSON(object: any): _754.MsgDeposit;
                toJSON(message: _754.MsgDeposit): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _754.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _754.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _754.MsgDepositResponse;
                fromJSON(_: any): _754.MsgDepositResponse;
                toJSON(_: _754.MsgDepositResponse): unknown;
                fromPartial<I_9 extends unknown>(_: I_9): _754.MsgDepositResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _754.MsgSubmitProposal) => {
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
                    }) => _754.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _754.MsgExecLegacyContent) => {
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
                    }) => _754.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _754.MsgVote) => {
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
                    }) => _754.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _754.MsgVoteWeighted) => {
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
                    }) => _754.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _754.MsgDeposit) => {
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
                    }) => _754.MsgDeposit;
                };
            };
            encoded: {
                submitProposal(value: _754.MsgSubmitProposal): {
                    type_url: string;
                    value: Uint8Array;
                };
                execLegacyContent(value: _754.MsgExecLegacyContent): {
                    type_url: string;
                    value: Uint8Array;
                };
                vote(value: _754.MsgVote): {
                    type_url: string;
                    value: Uint8Array;
                };
                voteWeighted(value: _754.MsgVoteWeighted): {
                    type_url: string;
                    value: Uint8Array;
                };
                deposit(value: _754.MsgDeposit): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                submitProposal(value: any): {
                    typeUrl: string;
                    value: _754.MsgSubmitProposal;
                };
                execLegacyContent(value: any): {
                    typeUrl: string;
                    value: _754.MsgExecLegacyContent;
                };
                vote(value: any): {
                    typeUrl: string;
                    value: _754.MsgVote;
                };
                voteWeighted(value: any): {
                    typeUrl: string;
                    value: _754.MsgVoteWeighted;
                };
                deposit(value: any): {
                    typeUrl: string;
                    value: _754.MsgDeposit;
                };
            };
            toJSON: {
                submitProposal(value: _754.MsgSubmitProposal): {
                    typeUrl: string;
                    value: unknown;
                };
                execLegacyContent(value: _754.MsgExecLegacyContent): {
                    typeUrl: string;
                    value: unknown;
                };
                vote(value: _754.MsgVote): {
                    typeUrl: string;
                    value: unknown;
                };
                voteWeighted(value: _754.MsgVoteWeighted): {
                    typeUrl: string;
                    value: unknown;
                };
                deposit(value: _754.MsgDeposit): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                submitProposal(value: _754.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _754.MsgSubmitProposal;
                };
                execLegacyContent(value: _754.MsgExecLegacyContent): {
                    typeUrl: string;
                    value: _754.MsgExecLegacyContent;
                };
                vote(value: _754.MsgVote): {
                    typeUrl: string;
                    value: _754.MsgVote;
                };
                voteWeighted(value: _754.MsgVoteWeighted): {
                    typeUrl: string;
                    value: _754.MsgVoteWeighted;
                };
                deposit(value: _754.MsgDeposit): {
                    typeUrl: string;
                    value: _754.MsgDeposit;
                };
            };
            messages: {
                submitProposal(value: _754.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _754.MsgSubmitProposal;
                };
                execLegacyContent(value: _754.MsgExecLegacyContent): {
                    typeUrl: string;
                    value: _754.MsgExecLegacyContent;
                };
                vote(value: _754.MsgVote): {
                    typeUrl: string;
                    value: _754.MsgVote;
                };
                voteWeighted(value: _754.MsgVoteWeighted): {
                    typeUrl: string;
                    value: _754.MsgVoteWeighted;
                };
                deposit(value: _754.MsgDeposit): {
                    typeUrl: string;
                    value: _754.MsgDeposit;
                };
            };
            QueryProposalRequest: {
                encode(message: _753.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _753.QueryProposalRequest;
                fromJSON(object: any): _753.QueryProposalRequest;
                toJSON(message: _753.QueryProposalRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _753.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _753.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _753.QueryProposalResponse;
                fromJSON(object: any): _753.QueryProposalResponse;
                toJSON(message: _753.QueryProposalResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _753.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _753.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _753.QueryProposalsRequest;
                fromJSON(object: any): _753.QueryProposalsRequest;
                toJSON(message: _753.QueryProposalsRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _753.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _753.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _753.QueryProposalsResponse;
                fromJSON(object: any): _753.QueryProposalsResponse;
                toJSON(message: _753.QueryProposalsResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _753.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _753.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _753.QueryVoteRequest;
                fromJSON(object: any): _753.QueryVoteRequest;
                toJSON(message: _753.QueryVoteRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _753.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _753.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _753.QueryVoteResponse;
                fromJSON(object: any): _753.QueryVoteResponse;
                toJSON(message: _753.QueryVoteResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _753.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _753.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _753.QueryVotesRequest;
                fromJSON(object: any): _753.QueryVotesRequest;
                toJSON(message: _753.QueryVotesRequest): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _753.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _753.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _753.QueryVotesResponse;
                fromJSON(object: any): _753.QueryVotesResponse;
                toJSON(message: _753.QueryVotesResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _753.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _753.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _753.QueryParamsRequest;
                fromJSON(object: any): _753.QueryParamsRequest;
                toJSON(message: _753.QueryParamsRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _753.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _753.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _753.QueryParamsResponse;
                fromJSON(object: any): _753.QueryParamsResponse;
                toJSON(message: _753.QueryParamsResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _753.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _753.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _753.QueryDepositRequest;
                fromJSON(object: any): _753.QueryDepositRequest;
                toJSON(message: _753.QueryDepositRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _753.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _753.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _753.QueryDepositResponse;
                fromJSON(object: any): _753.QueryDepositResponse;
                toJSON(message: _753.QueryDepositResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _753.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _753.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _753.QueryDepositsRequest;
                fromJSON(object: any): _753.QueryDepositsRequest;
                toJSON(message: _753.QueryDepositsRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _753.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _753.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _753.QueryDepositsResponse;
                fromJSON(object: any): _753.QueryDepositsResponse;
                toJSON(message: _753.QueryDepositsResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _753.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _753.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _753.QueryTallyResultRequest;
                fromJSON(object: any): _753.QueryTallyResultRequest;
                toJSON(message: _753.QueryTallyResultRequest): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _753.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _753.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _753.QueryTallyResultResponse;
                fromJSON(object: any): _753.QueryTallyResultResponse;
                toJSON(message: _753.QueryTallyResultResponse): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _753.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _752.VoteOption;
            voteOptionToJSON(object: _752.VoteOption): string;
            proposalStatusFromJSON(object: any): _752.ProposalStatus;
            proposalStatusToJSON(object: _752.ProposalStatus): string;
            VoteOption: typeof _752.VoteOption;
            ProposalStatus: typeof _752.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _752.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.WeightedVoteOption;
                fromJSON(object: any): _752.WeightedVoteOption;
                toJSON(message: _752.WeightedVoteOption): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _752.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _752.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.Deposit;
                fromJSON(object: any): _752.Deposit;
                toJSON(message: _752.Deposit): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _752.Deposit;
            };
            Proposal: {
                encode(message: _752.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.Proposal;
                fromJSON(object: any): _752.Proposal;
                toJSON(message: _752.Proposal): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _752.Proposal;
            };
            TallyResult: {
                encode(message: _752.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.TallyResult;
                fromJSON(object: any): _752.TallyResult;
                toJSON(message: _752.TallyResult): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _752.TallyResult;
            };
            Vote: {
                encode(message: _752.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.Vote;
                fromJSON(object: any): _752.Vote;
                toJSON(message: _752.Vote): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _752.Vote;
            };
            DepositParams: {
                encode(message: _752.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.DepositParams;
                fromJSON(object: any): _752.DepositParams;
                toJSON(message: _752.DepositParams): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _752.DepositParams;
            };
            VotingParams: {
                encode(message: _752.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.VotingParams;
                fromJSON(object: any): _752.VotingParams;
                toJSON(message: _752.VotingParams): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _752.VotingParams;
            };
            TallyParams: {
                encode(message: _752.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.TallyParams;
                fromJSON(object: any): _752.TallyParams;
                toJSON(message: _752.TallyParams): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _752.TallyParams;
            };
            GenesisState: {
                encode(message: _751.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _751.GenesisState;
                fromJSON(object: any): _751.GenesisState;
                toJSON(message: _751.GenesisState): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _751.GenesisState;
            };
        };
        const v1beta1: {
            MsgSubmitProposal: {
                encode(message: _766.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _766.MsgSubmitProposal;
                fromJSON(object: any): _766.MsgSubmitProposal;
                toJSON(message: _766.MsgSubmitProposal): unknown;
                fromPartial<I extends unknown>(object: I): _766.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _766.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _766.MsgSubmitProposalResponse;
                fromJSON(object: any): _766.MsgSubmitProposalResponse;
                toJSON(message: _766.MsgSubmitProposalResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _766.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _766.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _766.MsgVote;
                fromJSON(object: any): _766.MsgVote;
                toJSON(message: _766.MsgVote): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _766.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _766.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _766.MsgVoteResponse;
                fromJSON(_: any): _766.MsgVoteResponse;
                toJSON(_: _766.MsgVoteResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _766.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _766.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _766.MsgVoteWeighted;
                fromJSON(object: any): _766.MsgVoteWeighted;
                toJSON(message: _766.MsgVoteWeighted): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _766.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _766.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _766.MsgVoteWeightedResponse;
                fromJSON(_: any): _766.MsgVoteWeightedResponse;
                toJSON(_: _766.MsgVoteWeightedResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _766.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _766.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _766.MsgDeposit;
                fromJSON(object: any): _766.MsgDeposit;
                toJSON(message: _766.MsgDeposit): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _766.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _766.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _766.MsgDepositResponse;
                fromJSON(_: any): _766.MsgDepositResponse;
                toJSON(_: _766.MsgDepositResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _766.MsgDepositResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _766.MsgSubmitProposal) => {
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
                    }) => _766.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _766.MsgVote) => {
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
                    }) => _766.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _766.MsgVoteWeighted) => {
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
                    }) => _766.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _766.MsgDeposit) => {
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
                    }) => _766.MsgDeposit;
                };
            };
            encoded: {
                submitProposal(value: _766.MsgSubmitProposal): {
                    type_url: string;
                    value: Uint8Array;
                };
                vote(value: _766.MsgVote): {
                    type_url: string;
                    value: Uint8Array;
                };
                voteWeighted(value: _766.MsgVoteWeighted): {
                    type_url: string;
                    value: Uint8Array;
                };
                deposit(value: _766.MsgDeposit): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                submitProposal(value: any): {
                    typeUrl: string;
                    value: _766.MsgSubmitProposal;
                };
                vote(value: any): {
                    typeUrl: string;
                    value: _766.MsgVote;
                };
                voteWeighted(value: any): {
                    typeUrl: string;
                    value: _766.MsgVoteWeighted;
                };
                deposit(value: any): {
                    typeUrl: string;
                    value: _766.MsgDeposit;
                };
            };
            toJSON: {
                submitProposal(value: _766.MsgSubmitProposal): {
                    typeUrl: string;
                    value: unknown;
                };
                vote(value: _766.MsgVote): {
                    typeUrl: string;
                    value: unknown;
                };
                voteWeighted(value: _766.MsgVoteWeighted): {
                    typeUrl: string;
                    value: unknown;
                };
                deposit(value: _766.MsgDeposit): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                submitProposal(value: _766.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _766.MsgSubmitProposal;
                };
                vote(value: _766.MsgVote): {
                    typeUrl: string;
                    value: _766.MsgVote;
                };
                voteWeighted(value: _766.MsgVoteWeighted): {
                    typeUrl: string;
                    value: _766.MsgVoteWeighted;
                };
                deposit(value: _766.MsgDeposit): {
                    typeUrl: string;
                    value: _766.MsgDeposit;
                };
            };
            messages: {
                submitProposal(value: _766.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _766.MsgSubmitProposal;
                };
                vote(value: _766.MsgVote): {
                    typeUrl: string;
                    value: _766.MsgVote;
                };
                voteWeighted(value: _766.MsgVoteWeighted): {
                    typeUrl: string;
                    value: _766.MsgVoteWeighted;
                };
                deposit(value: _766.MsgDeposit): {
                    typeUrl: string;
                    value: _766.MsgDeposit;
                };
            };
            QueryProposalRequest: {
                encode(message: _765.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _765.QueryProposalRequest;
                fromJSON(object: any): _765.QueryProposalRequest;
                toJSON(message: _765.QueryProposalRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _765.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _765.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _765.QueryProposalResponse;
                fromJSON(object: any): _765.QueryProposalResponse;
                toJSON(message: _765.QueryProposalResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _765.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _765.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _765.QueryProposalsRequest;
                fromJSON(object: any): _765.QueryProposalsRequest;
                toJSON(message: _765.QueryProposalsRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _765.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _765.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _765.QueryProposalsResponse;
                fromJSON(object: any): _765.QueryProposalsResponse;
                toJSON(message: _765.QueryProposalsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _765.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _765.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _765.QueryVoteRequest;
                fromJSON(object: any): _765.QueryVoteRequest;
                toJSON(message: _765.QueryVoteRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _765.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _765.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _765.QueryVoteResponse;
                fromJSON(object: any): _765.QueryVoteResponse;
                toJSON(message: _765.QueryVoteResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _765.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _765.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _765.QueryVotesRequest;
                fromJSON(object: any): _765.QueryVotesRequest;
                toJSON(message: _765.QueryVotesRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _765.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _765.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _765.QueryVotesResponse;
                fromJSON(object: any): _765.QueryVotesResponse;
                toJSON(message: _765.QueryVotesResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _765.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _765.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _765.QueryParamsRequest;
                fromJSON(object: any): _765.QueryParamsRequest;
                toJSON(message: _765.QueryParamsRequest): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _765.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _765.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _765.QueryParamsResponse;
                fromJSON(object: any): _765.QueryParamsResponse;
                toJSON(message: _765.QueryParamsResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _765.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _765.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _765.QueryDepositRequest;
                fromJSON(object: any): _765.QueryDepositRequest;
                toJSON(message: _765.QueryDepositRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _765.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _765.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _765.QueryDepositResponse;
                fromJSON(object: any): _765.QueryDepositResponse;
                toJSON(message: _765.QueryDepositResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _765.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _765.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _765.QueryDepositsRequest;
                fromJSON(object: any): _765.QueryDepositsRequest;
                toJSON(message: _765.QueryDepositsRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _765.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _765.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _765.QueryDepositsResponse;
                fromJSON(object: any): _765.QueryDepositsResponse;
                toJSON(message: _765.QueryDepositsResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _765.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _765.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _765.QueryTallyResultRequest;
                fromJSON(object: any): _765.QueryTallyResultRequest;
                toJSON(message: _765.QueryTallyResultRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _765.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _765.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _765.QueryTallyResultResponse;
                fromJSON(object: any): _765.QueryTallyResultResponse;
                toJSON(message: _765.QueryTallyResultResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _765.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _764.VoteOption;
            voteOptionToJSON(object: _764.VoteOption): string;
            proposalStatusFromJSON(object: any): _764.ProposalStatus;
            proposalStatusToJSON(object: _764.ProposalStatus): string;
            VoteOption: typeof _764.VoteOption;
            ProposalStatus: typeof _764.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _764.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _764.WeightedVoteOption;
                fromJSON(object: any): _764.WeightedVoteOption;
                toJSON(message: _764.WeightedVoteOption): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _764.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _764.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _764.TextProposal;
                fromJSON(object: any): _764.TextProposal;
                toJSON(message: _764.TextProposal): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _764.TextProposal;
            };
            Deposit: {
                encode(message: _764.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _764.Deposit;
                fromJSON(object: any): _764.Deposit;
                toJSON(message: _764.Deposit): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _764.Deposit;
            };
            Proposal: {
                encode(message: _764.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _764.Proposal;
                fromJSON(object: any): _764.Proposal;
                toJSON(message: _764.Proposal): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _764.Proposal;
            };
            TallyResult: {
                encode(message: _764.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _764.TallyResult;
                fromJSON(object: any): _764.TallyResult;
                toJSON(message: _764.TallyResult): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _764.TallyResult;
            };
            Vote: {
                encode(message: _764.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _764.Vote;
                fromJSON(object: any): _764.Vote;
                toJSON(message: _764.Vote): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _764.Vote;
            };
            DepositParams: {
                encode(message: _764.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _764.DepositParams;
                fromJSON(object: any): _764.DepositParams;
                toJSON(message: _764.DepositParams): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _764.DepositParams;
            };
            VotingParams: {
                encode(message: _764.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _764.VotingParams;
                fromJSON(object: any): _764.VotingParams;
                toJSON(message: _764.VotingParams): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _764.VotingParams;
            };
            TallyParams: {
                encode(message: _764.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _764.TallyParams;
                fromJSON(object: any): _764.TallyParams;
                toJSON(message: _764.TallyParams): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _764.TallyParams;
            };
            GenesisState: {
                encode(message: _763.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _763.GenesisState;
                fromJSON(object: any): _763.GenesisState;
                toJSON(message: _763.GenesisState): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _763.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            voteOptionFromJSON(object: any): _787.VoteOption;
            voteOptionToJSON(object: _787.VoteOption): string;
            proposalStatusFromJSON(object: any): _787.ProposalStatus;
            proposalStatusToJSON(object: _787.ProposalStatus): string;
            proposalResultFromJSON(object: any): _787.ProposalResult;
            proposalResultToJSON(object: _787.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _787.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _787.ProposalExecutorResult): string;
            VoteOption: typeof _787.VoteOption;
            ProposalStatus: typeof _787.ProposalStatus;
            ProposalResult: typeof _787.ProposalResult;
            ProposalExecutorResult: typeof _787.ProposalExecutorResult;
            Member: {
                encode(message: _787.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _787.Member;
                fromJSON(object: any): _787.Member;
                toJSON(message: _787.Member): unknown;
                fromPartial<I extends unknown>(object: I): _787.Member;
            };
            Members: {
                encode(message: _787.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _787.Members;
                fromJSON(object: any): _787.Members;
                toJSON(message: _787.Members): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _787.Members;
            };
            ThresholdDecisionPolicy: {
                encode(message: _787.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _787.ThresholdDecisionPolicy;
                fromJSON(object: any): _787.ThresholdDecisionPolicy;
                toJSON(message: _787.ThresholdDecisionPolicy): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _787.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _787.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _787.PercentageDecisionPolicy;
                fromJSON(object: any): _787.PercentageDecisionPolicy;
                toJSON(message: _787.PercentageDecisionPolicy): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _787.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _787.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _787.DecisionPolicyWindows;
                fromJSON(object: any): _787.DecisionPolicyWindows;
                toJSON(message: _787.DecisionPolicyWindows): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _787.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _787.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _787.GroupInfo;
                fromJSON(object: any): _787.GroupInfo;
                toJSON(message: _787.GroupInfo): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _787.GroupInfo;
            };
            GroupMember: {
                encode(message: _787.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _787.GroupMember;
                fromJSON(object: any): _787.GroupMember;
                toJSON(message: _787.GroupMember): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _787.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _787.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _787.GroupPolicyInfo;
                fromJSON(object: any): _787.GroupPolicyInfo;
                toJSON(message: _787.GroupPolicyInfo): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _787.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _787.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _787.Proposal;
                fromJSON(object: any): _787.Proposal;
                toJSON(message: _787.Proposal): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _787.Proposal;
            };
            TallyResult: {
                encode(message: _787.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _787.TallyResult;
                fromJSON(object: any): _787.TallyResult;
                toJSON(message: _787.TallyResult): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _787.TallyResult;
            };
            Vote: {
                encode(message: _787.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _787.Vote;
                fromJSON(object: any): _787.Vote;
                toJSON(message: _787.Vote): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _787.Vote;
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
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
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
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _778.MsgSubmitProposal) => {
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
                    toAmino: ({ proposalId, voter, option, metadata }: _778.MsgVote) => {
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
                    }) => _778.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _778.MsgExec) => {
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
                encode(message: _777.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryGroupInfoRequest;
                fromJSON(object: any): _777.QueryGroupInfoRequest;
                toJSON(message: _777.QueryGroupInfoRequest): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _777.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _777.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryGroupInfoResponse;
                fromJSON(object: any): _777.QueryGroupInfoResponse;
                toJSON(message: _777.QueryGroupInfoResponse): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _777.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _777.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _777.QueryGroupPolicyInfoRequest;
                toJSON(message: _777.QueryGroupPolicyInfoRequest): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _777.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _777.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _777.QueryGroupPolicyInfoResponse;
                toJSON(message: _777.QueryGroupPolicyInfoResponse): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _777.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _777.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryGroupMembersRequest;
                fromJSON(object: any): _777.QueryGroupMembersRequest;
                toJSON(message: _777.QueryGroupMembersRequest): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _777.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _777.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryGroupMembersResponse;
                fromJSON(object: any): _777.QueryGroupMembersResponse;
                toJSON(message: _777.QueryGroupMembersResponse): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _777.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _777.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryGroupsByAdminRequest;
                fromJSON(object: any): _777.QueryGroupsByAdminRequest;
                toJSON(message: _777.QueryGroupsByAdminRequest): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _777.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _777.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryGroupsByAdminResponse;
                fromJSON(object: any): _777.QueryGroupsByAdminResponse;
                toJSON(message: _777.QueryGroupsByAdminResponse): unknown;
                fromPartial<I_46 extends unknown>(object: I_46): _777.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _777.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _777.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _777.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial<I_47 extends unknown>(object: I_47): _777.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _777.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _777.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _777.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial<I_48 extends unknown>(object: I_48): _777.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _777.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _777.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _777.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial<I_49 extends unknown>(object: I_49): _777.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _777.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _777.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _777.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial<I_50 extends unknown>(object: I_50): _777.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _777.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryProposalRequest;
                fromJSON(object: any): _777.QueryProposalRequest;
                toJSON(message: _777.QueryProposalRequest): unknown;
                fromPartial<I_51 extends unknown>(object: I_51): _777.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _777.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryProposalResponse;
                fromJSON(object: any): _777.QueryProposalResponse;
                toJSON(message: _777.QueryProposalResponse): unknown;
                fromPartial<I_52 extends unknown>(object: I_52): _777.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _777.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _777.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _777.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial<I_53 extends unknown>(object: I_53): _777.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _777.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _777.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _777.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial<I_54 extends unknown>(object: I_54): _777.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _777.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _777.QueryVoteByProposalVoterRequest;
                toJSON(message: _777.QueryVoteByProposalVoterRequest): unknown;
                fromPartial<I_55 extends unknown>(object: I_55): _777.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _777.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _777.QueryVoteByProposalVoterResponse;
                toJSON(message: _777.QueryVoteByProposalVoterResponse): unknown;
                fromPartial<I_56 extends unknown>(object: I_56): _777.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _777.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryVotesByProposalRequest;
                fromJSON(object: any): _777.QueryVotesByProposalRequest;
                toJSON(message: _777.QueryVotesByProposalRequest): unknown;
                fromPartial<I_57 extends unknown>(object: I_57): _777.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _777.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryVotesByProposalResponse;
                fromJSON(object: any): _777.QueryVotesByProposalResponse;
                toJSON(message: _777.QueryVotesByProposalResponse): unknown;
                fromPartial<I_58 extends unknown>(object: I_58): _777.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _777.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryVotesByVoterRequest;
                fromJSON(object: any): _777.QueryVotesByVoterRequest;
                toJSON(message: _777.QueryVotesByVoterRequest): unknown;
                fromPartial<I_59 extends unknown>(object: I_59): _777.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _777.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryVotesByVoterResponse;
                fromJSON(object: any): _777.QueryVotesByVoterResponse;
                toJSON(message: _777.QueryVotesByVoterResponse): unknown;
                fromPartial<I_60 extends unknown>(object: I_60): _777.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _777.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryGroupsByMemberRequest;
                fromJSON(object: any): _777.QueryGroupsByMemberRequest;
                toJSON(message: _777.QueryGroupsByMemberRequest): unknown;
                fromPartial<I_61 extends unknown>(object: I_61): _777.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _777.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryGroupsByMemberResponse;
                fromJSON(object: any): _777.QueryGroupsByMemberResponse;
                toJSON(message: _777.QueryGroupsByMemberResponse): unknown;
                fromPartial<I_62 extends unknown>(object: I_62): _777.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _777.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryTallyResultRequest;
                fromJSON(object: any): _777.QueryTallyResultRequest;
                toJSON(message: _777.QueryTallyResultRequest): unknown;
                fromPartial<I_63 extends unknown>(object: I_63): _777.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _777.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.QueryTallyResultResponse;
                fromJSON(object: any): _777.QueryTallyResultResponse;
                toJSON(message: _777.QueryTallyResultResponse): unknown;
                fromPartial<I_64 extends unknown>(object: I_64): _777.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _776.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _776.GenesisState;
                fromJSON(object: any): _776.GenesisState;
                toJSON(message: _776.GenesisState): unknown;
                fromPartial<I_65 extends unknown>(object: I_65): _776.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _775.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _775.EventCreateGroup;
                fromJSON(object: any): _775.EventCreateGroup;
                toJSON(message: _775.EventCreateGroup): unknown;
                fromPartial<I_66 extends unknown>(object: I_66): _775.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _775.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _775.EventUpdateGroup;
                fromJSON(object: any): _775.EventUpdateGroup;
                toJSON(message: _775.EventUpdateGroup): unknown;
                fromPartial<I_67 extends unknown>(object: I_67): _775.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _775.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _775.EventCreateGroupPolicy;
                fromJSON(object: any): _775.EventCreateGroupPolicy;
                toJSON(message: _775.EventCreateGroupPolicy): unknown;
                fromPartial<I_68 extends unknown>(object: I_68): _775.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _775.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _775.EventUpdateGroupPolicy;
                fromJSON(object: any): _775.EventUpdateGroupPolicy;
                toJSON(message: _775.EventUpdateGroupPolicy): unknown;
                fromPartial<I_69 extends unknown>(object: I_69): _775.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _775.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _775.EventSubmitProposal;
                fromJSON(object: any): _775.EventSubmitProposal;
                toJSON(message: _775.EventSubmitProposal): unknown;
                fromPartial<I_70 extends unknown>(object: I_70): _775.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _775.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _775.EventWithdrawProposal;
                fromJSON(object: any): _775.EventWithdrawProposal;
                toJSON(message: _775.EventWithdrawProposal): unknown;
                fromPartial<I_71 extends unknown>(object: I_71): _775.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _775.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _775.EventVote;
                fromJSON(object: any): _775.EventVote;
                toJSON(message: _775.EventVote): unknown;
                fromPartial<I_72 extends unknown>(object: I_72): _775.EventVote;
            };
            EventExec: {
                encode(message: _775.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _775.EventExec;
                fromJSON(object: any): _775.EventExec;
                toJSON(message: _775.EventExec): unknown;
                fromPartial<I_73 extends unknown>(object: I_73): _775.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _775.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _775.EventLeaveGroup;
                fromJSON(object: any): _775.EventLeaveGroup;
                toJSON(message: _775.EventLeaveGroup): unknown;
                fromPartial<I_74 extends unknown>(object: I_74): _775.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _790.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _790.QueryParamsRequest;
                fromJSON(_: any): _790.QueryParamsRequest;
                toJSON(_: _790.QueryParamsRequest): unknown;
                fromPartial<I extends unknown>(_: I): _790.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _790.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _790.QueryParamsResponse;
                fromJSON(object: any): _790.QueryParamsResponse;
                toJSON(message: _790.QueryParamsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _790.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _790.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _790.QueryInflationRequest;
                fromJSON(_: any): _790.QueryInflationRequest;
                toJSON(_: _790.QueryInflationRequest): unknown;
                fromPartial<I_2 extends unknown>(_: I_2): _790.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _790.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _790.QueryInflationResponse;
                fromJSON(object: any): _790.QueryInflationResponse;
                toJSON(message: _790.QueryInflationResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _790.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _790.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _790.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _790.QueryAnnualProvisionsRequest;
                toJSON(_: _790.QueryAnnualProvisionsRequest): unknown;
                fromPartial<I_4 extends unknown>(_: I_4): _790.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _790.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _790.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _790.QueryAnnualProvisionsResponse;
                toJSON(message: _790.QueryAnnualProvisionsResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _790.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _789.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _789.Minter;
                fromJSON(object: any): _789.Minter;
                toJSON(message: _789.Minter): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _789.Minter;
            };
            Params: {
                encode(message: _789.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _789.Params;
                fromJSON(object: any): _789.Params;
                toJSON(message: _789.Params): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _789.Params;
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
                encode(message: _796.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _796.MsgSend;
                fromJSON(object: any): _796.MsgSend;
                toJSON(message: _796.MsgSend): unknown;
                fromPartial<I extends unknown>(object: I): _796.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _796.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _796.MsgSendResponse;
                fromJSON(_: any): _796.MsgSendResponse;
                toJSON(_: _796.MsgSendResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _796.MsgSendResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _796.MsgSend) => {
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
                    }) => _796.MsgSend;
                };
            };
            encoded: {
                send(value: _796.MsgSend): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                send(value: any): {
                    typeUrl: string;
                    value: _796.MsgSend;
                };
            };
            toJSON: {
                send(value: _796.MsgSend): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                send(value: _796.MsgSend): {
                    typeUrl: string;
                    value: _796.MsgSend;
                };
            };
            messages: {
                send(value: _796.MsgSend): {
                    typeUrl: string;
                    value: _796.MsgSend;
                };
            };
            QueryBalanceRequest: {
                encode(message: _795.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _795.QueryBalanceRequest;
                fromJSON(object: any): _795.QueryBalanceRequest;
                toJSON(message: _795.QueryBalanceRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _795.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _795.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _795.QueryBalanceResponse;
                fromJSON(object: any): _795.QueryBalanceResponse;
                toJSON(message: _795.QueryBalanceResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _795.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _795.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _795.QueryOwnerRequest;
                fromJSON(object: any): _795.QueryOwnerRequest;
                toJSON(message: _795.QueryOwnerRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _795.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _795.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _795.QueryOwnerResponse;
                fromJSON(object: any): _795.QueryOwnerResponse;
                toJSON(message: _795.QueryOwnerResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _795.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _795.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _795.QuerySupplyRequest;
                fromJSON(object: any): _795.QuerySupplyRequest;
                toJSON(message: _795.QuerySupplyRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _795.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _795.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _795.QuerySupplyResponse;
                fromJSON(object: any): _795.QuerySupplyResponse;
                toJSON(message: _795.QuerySupplyResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _795.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _795.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _795.QueryNFTsRequest;
                fromJSON(object: any): _795.QueryNFTsRequest;
                toJSON(message: _795.QueryNFTsRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _795.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _795.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _795.QueryNFTsResponse;
                fromJSON(object: any): _795.QueryNFTsResponse;
                toJSON(message: _795.QueryNFTsResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _795.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _795.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _795.QueryNFTRequest;
                fromJSON(object: any): _795.QueryNFTRequest;
                toJSON(message: _795.QueryNFTRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _795.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _795.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _795.QueryNFTResponse;
                fromJSON(object: any): _795.QueryNFTResponse;
                toJSON(message: _795.QueryNFTResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _795.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _795.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _795.QueryClassRequest;
                fromJSON(object: any): _795.QueryClassRequest;
                toJSON(message: _795.QueryClassRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _795.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _795.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _795.QueryClassResponse;
                fromJSON(object: any): _795.QueryClassResponse;
                toJSON(message: _795.QueryClassResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _795.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _795.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _795.QueryClassesRequest;
                fromJSON(object: any): _795.QueryClassesRequest;
                toJSON(message: _795.QueryClassesRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _795.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _795.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _795.QueryClassesResponse;
                fromJSON(object: any): _795.QueryClassesResponse;
                toJSON(message: _795.QueryClassesResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _795.QueryClassesResponse;
            };
            Class: {
                encode(message: _794.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _794.Class;
                fromJSON(object: any): _794.Class;
                toJSON(message: _794.Class): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _794.Class;
            };
            NFT: {
                encode(message: _794.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _794.NFT;
                fromJSON(object: any): _794.NFT;
                toJSON(message: _794.NFT): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _794.NFT;
            };
            GenesisState: {
                encode(message: _793.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _793.GenesisState;
                fromJSON(object: any): _793.GenesisState;
                toJSON(message: _793.GenesisState): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _793.GenesisState;
            };
            Entry: {
                encode(message: _793.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _793.Entry;
                fromJSON(object: any): _793.Entry;
                toJSON(message: _793.Entry): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _793.Entry;
            };
            EventSend: {
                encode(message: _792.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _792.EventSend;
                fromJSON(object: any): _792.EventSend;
                toJSON(message: _792.EventSend): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _792.EventSend;
            };
            EventMint: {
                encode(message: _792.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _792.EventMint;
                fromJSON(object: any): _792.EventMint;
                toJSON(message: _792.EventMint): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _792.EventMint;
            };
            EventBurn: {
                encode(message: _792.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _792.EventBurn;
                fromJSON(object: any): _792.EventBurn;
                toJSON(message: _792.EventBurn): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _792.EventBurn;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _805.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _805.TableDescriptor;
                fromJSON(object: any): _805.TableDescriptor;
                toJSON(message: _805.TableDescriptor): unknown;
                fromPartial<I extends unknown>(object: I): _805.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _805.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _805.PrimaryKeyDescriptor;
                fromJSON(object: any): _805.PrimaryKeyDescriptor;
                toJSON(message: _805.PrimaryKeyDescriptor): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _805.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _805.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _805.SecondaryIndexDescriptor;
                fromJSON(object: any): _805.SecondaryIndexDescriptor;
                toJSON(message: _805.SecondaryIndexDescriptor): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _805.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _805.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _805.SingletonDescriptor;
                fromJSON(object: any): _805.SingletonDescriptor;
                toJSON(message: _805.SingletonDescriptor): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _805.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _806.StorageType;
            storageTypeToJSON(object: _806.StorageType): string;
            StorageType: typeof _806.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _806.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _806.ModuleSchemaDescriptor;
                fromJSON(object: any): _806.ModuleSchemaDescriptor;
                toJSON(message: _806.ModuleSchemaDescriptor): unknown;
                fromPartial<I extends unknown>(object: I): _806.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _806.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _806.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _806.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _806.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _806.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryParamsRequest: {
                encode(message: _808.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _808.QueryParamsRequest;
                fromJSON(object: any): _808.QueryParamsRequest;
                toJSON(message: _808.QueryParamsRequest): unknown;
                fromPartial<I extends unknown>(object: I): _808.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _808.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _808.QueryParamsResponse;
                fromJSON(object: any): _808.QueryParamsResponse;
                toJSON(message: _808.QueryParamsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _808.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _808.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _808.QuerySubspacesRequest;
                fromJSON(_: any): _808.QuerySubspacesRequest;
                toJSON(_: _808.QuerySubspacesRequest): unknown;
                fromPartial<I_2 extends unknown>(_: I_2): _808.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _808.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _808.QuerySubspacesResponse;
                fromJSON(object: any): _808.QuerySubspacesResponse;
                toJSON(message: _808.QuerySubspacesResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _808.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _808.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _808.Subspace;
                fromJSON(object: any): _808.Subspace;
                toJSON(message: _808.Subspace): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _808.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _807.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _807.ParameterChangeProposal;
                fromJSON(object: any): _807.ParameterChangeProposal;
                toJSON(message: _807.ParameterChangeProposal): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _807.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _807.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _807.ParamChange;
                fromJSON(object: any): _807.ParamChange;
                toJSON(message: _807.ParamChange): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _807.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgUnjail: {
                encode(message: _812.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _812.MsgUnjail;
                fromJSON(object: any): _812.MsgUnjail;
                toJSON(message: _812.MsgUnjail): unknown;
                fromPartial<I extends unknown>(object: I): _812.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _812.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _812.MsgUnjailResponse;
                fromJSON(_: any): _812.MsgUnjailResponse;
                toJSON(_: _812.MsgUnjailResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _812.MsgUnjailResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _812.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _812.MsgUnjail;
                };
            };
            encoded: {
                unjail(value: _812.MsgUnjail): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                unjail(value: any): {
                    typeUrl: string;
                    value: _812.MsgUnjail;
                };
            };
            toJSON: {
                unjail(value: _812.MsgUnjail): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                unjail(value: _812.MsgUnjail): {
                    typeUrl: string;
                    value: _812.MsgUnjail;
                };
            };
            messages: {
                unjail(value: _812.MsgUnjail): {
                    typeUrl: string;
                    value: _812.MsgUnjail;
                };
            };
            ValidatorSigningInfo: {
                encode(message: _811.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _811.ValidatorSigningInfo;
                fromJSON(object: any): _811.ValidatorSigningInfo;
                toJSON(message: _811.ValidatorSigningInfo): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _811.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _811.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _811.Params;
                fromJSON(object: any): _811.Params;
                toJSON(message: _811.Params): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _811.Params;
            };
            QueryParamsRequest: {
                encode(_: _810.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _810.QueryParamsRequest;
                fromJSON(_: any): _810.QueryParamsRequest;
                toJSON(_: _810.QueryParamsRequest): unknown;
                fromPartial<I_4 extends unknown>(_: I_4): _810.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _810.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _810.QueryParamsResponse;
                fromJSON(object: any): _810.QueryParamsResponse;
                toJSON(message: _810.QueryParamsResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _810.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _810.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _810.QuerySigningInfoRequest;
                fromJSON(object: any): _810.QuerySigningInfoRequest;
                toJSON(message: _810.QuerySigningInfoRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _810.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _810.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _810.QuerySigningInfoResponse;
                fromJSON(object: any): _810.QuerySigningInfoResponse;
                toJSON(message: _810.QuerySigningInfoResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _810.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _810.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _810.QuerySigningInfosRequest;
                fromJSON(object: any): _810.QuerySigningInfosRequest;
                toJSON(message: _810.QuerySigningInfosRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _810.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _810.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _810.QuerySigningInfosResponse;
                fromJSON(object: any): _810.QuerySigningInfosResponse;
                toJSON(message: _810.QuerySigningInfosResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _810.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _809.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _809.GenesisState;
                fromJSON(object: any): _809.GenesisState;
                toJSON(message: _809.GenesisState): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _809.GenesisState;
            };
            SigningInfo: {
                encode(message: _809.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _809.SigningInfo;
                fromJSON(object: any): _809.SigningInfo;
                toJSON(message: _809.SigningInfo): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _809.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _809.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _809.ValidatorMissedBlocks;
                fromJSON(object: any): _809.ValidatorMissedBlocks;
                toJSON(message: _809.ValidatorMissedBlocks): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _809.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _809.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _809.MissedBlock;
                fromJSON(object: any): _809.MissedBlock;
                toJSON(message: _809.MissedBlock): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _809.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgCreateValidator: {
                encode(message: _825.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.MsgCreateValidator;
                fromJSON(object: any): _825.MsgCreateValidator;
                toJSON(message: _825.MsgCreateValidator): unknown;
                fromPartial<I extends unknown>(object: I): _825.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _825.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.MsgCreateValidatorResponse;
                fromJSON(_: any): _825.MsgCreateValidatorResponse;
                toJSON(_: _825.MsgCreateValidatorResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _825.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _825.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.MsgEditValidator;
                fromJSON(object: any): _825.MsgEditValidator;
                toJSON(message: _825.MsgEditValidator): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _825.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _825.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.MsgEditValidatorResponse;
                fromJSON(_: any): _825.MsgEditValidatorResponse;
                toJSON(_: _825.MsgEditValidatorResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _825.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _825.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.MsgDelegate;
                fromJSON(object: any): _825.MsgDelegate;
                toJSON(message: _825.MsgDelegate): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _825.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _825.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.MsgDelegateResponse;
                fromJSON(_: any): _825.MsgDelegateResponse;
                toJSON(_: _825.MsgDelegateResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _825.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _825.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.MsgBeginRedelegate;
                fromJSON(object: any): _825.MsgBeginRedelegate;
                toJSON(message: _825.MsgBeginRedelegate): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _825.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _825.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.MsgBeginRedelegateResponse;
                fromJSON(object: any): _825.MsgBeginRedelegateResponse;
                toJSON(message: _825.MsgBeginRedelegateResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _825.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _825.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.MsgUndelegate;
                fromJSON(object: any): _825.MsgUndelegate;
                toJSON(message: _825.MsgUndelegate): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _825.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _825.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.MsgUndelegateResponse;
                fromJSON(object: any): _825.MsgUndelegateResponse;
                toJSON(message: _825.MsgUndelegateResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _825.MsgUndelegateResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _825.MsgCreateValidator) => {
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
                    }) => _825.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _825.MsgEditValidator) => {
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
                    }) => _825.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _825.MsgDelegate) => {
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
                    }) => _825.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _825.MsgBeginRedelegate) => {
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
                    }) => _825.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _825.MsgUndelegate) => {
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
                    }) => _825.MsgUndelegate;
                };
            };
            encoded: {
                createValidator(value: _825.MsgCreateValidator): {
                    type_url: string;
                    value: Uint8Array;
                };
                editValidator(value: _825.MsgEditValidator): {
                    type_url: string;
                    value: Uint8Array;
                };
                delegate(value: _825.MsgDelegate): {
                    type_url: string;
                    value: Uint8Array;
                };
                beginRedelegate(value: _825.MsgBeginRedelegate): {
                    type_url: string;
                    value: Uint8Array;
                };
                undelegate(value: _825.MsgUndelegate): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                createValidator(value: any): {
                    typeUrl: string;
                    value: _825.MsgCreateValidator;
                };
                editValidator(value: any): {
                    typeUrl: string;
                    value: _825.MsgEditValidator;
                };
                delegate(value: any): {
                    typeUrl: string;
                    value: _825.MsgDelegate;
                };
                beginRedelegate(value: any): {
                    typeUrl: string;
                    value: _825.MsgBeginRedelegate;
                };
                undelegate(value: any): {
                    typeUrl: string;
                    value: _825.MsgUndelegate;
                };
            };
            toJSON: {
                createValidator(value: _825.MsgCreateValidator): {
                    typeUrl: string;
                    value: unknown;
                };
                editValidator(value: _825.MsgEditValidator): {
                    typeUrl: string;
                    value: unknown;
                };
                delegate(value: _825.MsgDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                beginRedelegate(value: _825.MsgBeginRedelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                undelegate(value: _825.MsgUndelegate): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                createValidator(value: _825.MsgCreateValidator): {
                    typeUrl: string;
                    value: _825.MsgCreateValidator;
                };
                editValidator(value: _825.MsgEditValidator): {
                    typeUrl: string;
                    value: _825.MsgEditValidator;
                };
                delegate(value: _825.MsgDelegate): {
                    typeUrl: string;
                    value: _825.MsgDelegate;
                };
                beginRedelegate(value: _825.MsgBeginRedelegate): {
                    typeUrl: string;
                    value: _825.MsgBeginRedelegate;
                };
                undelegate(value: _825.MsgUndelegate): {
                    typeUrl: string;
                    value: _825.MsgUndelegate;
                };
            };
            messages: {
                createValidator(value: _825.MsgCreateValidator): {
                    typeUrl: string;
                    value: _825.MsgCreateValidator;
                };
                editValidator(value: _825.MsgEditValidator): {
                    typeUrl: string;
                    value: _825.MsgEditValidator;
                };
                delegate(value: _825.MsgDelegate): {
                    typeUrl: string;
                    value: _825.MsgDelegate;
                };
                beginRedelegate(value: _825.MsgBeginRedelegate): {
                    typeUrl: string;
                    value: _825.MsgBeginRedelegate;
                };
                undelegate(value: _825.MsgUndelegate): {
                    typeUrl: string;
                    value: _825.MsgUndelegate;
                };
            };
            bondStatusFromJSON(object: any): _824.BondStatus;
            bondStatusToJSON(object: _824.BondStatus): string;
            BondStatus: typeof _824.BondStatus;
            HistoricalInfo: {
                encode(message: _824.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.HistoricalInfo;
                fromJSON(object: any): _824.HistoricalInfo;
                toJSON(message: _824.HistoricalInfo): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _824.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _824.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.CommissionRates;
                fromJSON(object: any): _824.CommissionRates;
                toJSON(message: _824.CommissionRates): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _824.CommissionRates;
            };
            Commission: {
                encode(message: _824.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.Commission;
                fromJSON(object: any): _824.Commission;
                toJSON(message: _824.Commission): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _824.Commission;
            };
            Description: {
                encode(message: _824.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.Description;
                fromJSON(object: any): _824.Description;
                toJSON(message: _824.Description): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _824.Description;
            };
            Validator: {
                encode(message: _824.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.Validator;
                fromJSON(object: any): _824.Validator;
                toJSON(message: _824.Validator): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _824.Validator;
            };
            ValAddresses: {
                encode(message: _824.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.ValAddresses;
                fromJSON(object: any): _824.ValAddresses;
                toJSON(message: _824.ValAddresses): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _824.ValAddresses;
            };
            DVPair: {
                encode(message: _824.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.DVPair;
                fromJSON(object: any): _824.DVPair;
                toJSON(message: _824.DVPair): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _824.DVPair;
            };
            DVPairs: {
                encode(message: _824.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.DVPairs;
                fromJSON(object: any): _824.DVPairs;
                toJSON(message: _824.DVPairs): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _824.DVPairs;
            };
            DVVTriplet: {
                encode(message: _824.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.DVVTriplet;
                fromJSON(object: any): _824.DVVTriplet;
                toJSON(message: _824.DVVTriplet): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _824.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _824.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.DVVTriplets;
                fromJSON(object: any): _824.DVVTriplets;
                toJSON(message: _824.DVVTriplets): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _824.DVVTriplets;
            };
            Delegation: {
                encode(message: _824.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.Delegation;
                fromJSON(object: any): _824.Delegation;
                toJSON(message: _824.Delegation): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _824.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _824.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.UnbondingDelegation;
                fromJSON(object: any): _824.UnbondingDelegation;
                toJSON(message: _824.UnbondingDelegation): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _824.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _824.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.UnbondingDelegationEntry;
                fromJSON(object: any): _824.UnbondingDelegationEntry;
                toJSON(message: _824.UnbondingDelegationEntry): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _824.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _824.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.RedelegationEntry;
                fromJSON(object: any): _824.RedelegationEntry;
                toJSON(message: _824.RedelegationEntry): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _824.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _824.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.Redelegation;
                fromJSON(object: any): _824.Redelegation;
                toJSON(message: _824.Redelegation): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _824.Redelegation;
            };
            Params: {
                encode(message: _824.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.Params;
                fromJSON(object: any): _824.Params;
                toJSON(message: _824.Params): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _824.Params;
            };
            DelegationResponse: {
                encode(message: _824.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.DelegationResponse;
                fromJSON(object: any): _824.DelegationResponse;
                toJSON(message: _824.DelegationResponse): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _824.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _824.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.RedelegationEntryResponse;
                fromJSON(object: any): _824.RedelegationEntryResponse;
                toJSON(message: _824.RedelegationEntryResponse): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _824.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _824.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.RedelegationResponse;
                fromJSON(object: any): _824.RedelegationResponse;
                toJSON(message: _824.RedelegationResponse): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _824.RedelegationResponse;
            };
            Pool: {
                encode(message: _824.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.Pool;
                fromJSON(object: any): _824.Pool;
                toJSON(message: _824.Pool): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _824.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _823.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryValidatorsRequest;
                fromJSON(object: any): _823.QueryValidatorsRequest;
                toJSON(message: _823.QueryValidatorsRequest): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _823.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _823.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryValidatorsResponse;
                fromJSON(object: any): _823.QueryValidatorsResponse;
                toJSON(message: _823.QueryValidatorsResponse): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _823.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _823.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryValidatorRequest;
                fromJSON(object: any): _823.QueryValidatorRequest;
                toJSON(message: _823.QueryValidatorRequest): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _823.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _823.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryValidatorResponse;
                fromJSON(object: any): _823.QueryValidatorResponse;
                toJSON(message: _823.QueryValidatorResponse): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _823.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _823.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _823.QueryValidatorDelegationsRequest;
                toJSON(message: _823.QueryValidatorDelegationsRequest): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _823.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _823.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _823.QueryValidatorDelegationsResponse;
                toJSON(message: _823.QueryValidatorDelegationsResponse): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _823.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _823.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _823.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _823.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial<I_36 extends unknown>(object: I_36): _823.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _823.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _823.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _823.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _823.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _823.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryDelegationRequest;
                fromJSON(object: any): _823.QueryDelegationRequest;
                toJSON(message: _823.QueryDelegationRequest): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _823.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _823.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryDelegationResponse;
                fromJSON(object: any): _823.QueryDelegationResponse;
                toJSON(message: _823.QueryDelegationResponse): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _823.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _823.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _823.QueryUnbondingDelegationRequest;
                toJSON(message: _823.QueryUnbondingDelegationRequest): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _823.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _823.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _823.QueryUnbondingDelegationResponse;
                toJSON(message: _823.QueryUnbondingDelegationResponse): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _823.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _823.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _823.QueryDelegatorDelegationsRequest;
                toJSON(message: _823.QueryDelegatorDelegationsRequest): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _823.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _823.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _823.QueryDelegatorDelegationsResponse;
                toJSON(message: _823.QueryDelegatorDelegationsResponse): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _823.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _823.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _823.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _823.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _823.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _823.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _823.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _823.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _823.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _823.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryRedelegationsRequest;
                fromJSON(object: any): _823.QueryRedelegationsRequest;
                toJSON(message: _823.QueryRedelegationsRequest): unknown;
                fromPartial<I_46 extends unknown>(object: I_46): _823.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _823.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryRedelegationsResponse;
                fromJSON(object: any): _823.QueryRedelegationsResponse;
                toJSON(message: _823.QueryRedelegationsResponse): unknown;
                fromPartial<I_47 extends unknown>(object: I_47): _823.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _823.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _823.QueryDelegatorValidatorsRequest;
                toJSON(message: _823.QueryDelegatorValidatorsRequest): unknown;
                fromPartial<I_48 extends unknown>(object: I_48): _823.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _823.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _823.QueryDelegatorValidatorsResponse;
                toJSON(message: _823.QueryDelegatorValidatorsResponse): unknown;
                fromPartial<I_49 extends unknown>(object: I_49): _823.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _823.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _823.QueryDelegatorValidatorRequest;
                toJSON(message: _823.QueryDelegatorValidatorRequest): unknown;
                fromPartial<I_50 extends unknown>(object: I_50): _823.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _823.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _823.QueryDelegatorValidatorResponse;
                toJSON(message: _823.QueryDelegatorValidatorResponse): unknown;
                fromPartial<I_51 extends unknown>(object: I_51): _823.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _823.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryHistoricalInfoRequest;
                fromJSON(object: any): _823.QueryHistoricalInfoRequest;
                toJSON(message: _823.QueryHistoricalInfoRequest): unknown;
                fromPartial<I_52 extends unknown>(object: I_52): _823.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _823.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryHistoricalInfoResponse;
                fromJSON(object: any): _823.QueryHistoricalInfoResponse;
                toJSON(message: _823.QueryHistoricalInfoResponse): unknown;
                fromPartial<I_53 extends unknown>(object: I_53): _823.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _823.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryPoolRequest;
                fromJSON(_: any): _823.QueryPoolRequest;
                toJSON(_: _823.QueryPoolRequest): unknown;
                fromPartial<I_54 extends unknown>(_: I_54): _823.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _823.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryPoolResponse;
                fromJSON(object: any): _823.QueryPoolResponse;
                toJSON(message: _823.QueryPoolResponse): unknown;
                fromPartial<I_55 extends unknown>(object: I_55): _823.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _823.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryParamsRequest;
                fromJSON(_: any): _823.QueryParamsRequest;
                toJSON(_: _823.QueryParamsRequest): unknown;
                fromPartial<I_56 extends unknown>(_: I_56): _823.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _823.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.QueryParamsResponse;
                fromJSON(object: any): _823.QueryParamsResponse;
                toJSON(message: _823.QueryParamsResponse): unknown;
                fromPartial<I_57 extends unknown>(object: I_57): _823.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _822.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _822.GenesisState;
                fromJSON(object: any): _822.GenesisState;
                toJSON(message: _822.GenesisState): unknown;
                fromPartial<I_58 extends unknown>(object: I_58): _822.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _822.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _822.LastValidatorPower;
                fromJSON(object: any): _822.LastValidatorPower;
                toJSON(message: _822.LastValidatorPower): unknown;
                fromPartial<I_59 extends unknown>(object: I_59): _822.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _821.AuthorizationType;
            authorizationTypeToJSON(object: _821.AuthorizationType): string;
            AuthorizationType: typeof _821.AuthorizationType;
            StakeAuthorization: {
                encode(message: _821.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _821.StakeAuthorization;
                fromJSON(object: any): _821.StakeAuthorization;
                toJSON(message: _821.StakeAuthorization): unknown;
                fromPartial<I_60 extends unknown>(object: I_60): _821.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _821.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _821.StakeAuthorization_Validators;
                fromJSON(object: any): _821.StakeAuthorization_Validators;
                toJSON(message: _821.StakeAuthorization_Validators): unknown;
                fromPartial<I_61 extends unknown>(object: I_61): _821.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _834.SignMode;
                signModeToJSON(object: _834.SignMode): string;
                SignMode: typeof _834.SignMode;
                SignatureDescriptors: {
                    encode(message: _834.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _834.SignatureDescriptors;
                    fromJSON(object: any): _834.SignatureDescriptors;
                    toJSON(message: _834.SignatureDescriptors): unknown;
                    fromPartial<I extends unknown>(object: I): _834.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _834.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _834.SignatureDescriptor;
                    fromJSON(object: any): _834.SignatureDescriptor;
                    toJSON(message: _834.SignatureDescriptor): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _834.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _834.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _834.SignatureDescriptor_Data;
                    fromJSON(object: any): _834.SignatureDescriptor_Data;
                    toJSON(message: _834.SignatureDescriptor_Data): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _834.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _834.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _834.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _834.SignatureDescriptor_Data_Single;
                    toJSON(message: _834.SignatureDescriptor_Data_Single): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _834.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _834.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _834.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _834.SignatureDescriptor_Data_Multi;
                    toJSON(message: _834.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _834.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            Tx: {
                encode(message: _836.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _836.Tx;
                fromJSON(object: any): _836.Tx;
                toJSON(message: _836.Tx): unknown;
                fromPartial<I extends unknown>(object: I): _836.Tx;
            };
            TxRaw: {
                encode(message: _836.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _836.TxRaw;
                fromJSON(object: any): _836.TxRaw;
                toJSON(message: _836.TxRaw): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _836.TxRaw;
            };
            SignDoc: {
                encode(message: _836.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _836.SignDoc;
                fromJSON(object: any): _836.SignDoc;
                toJSON(message: _836.SignDoc): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _836.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _836.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _836.SignDocDirectAux;
                fromJSON(object: any): _836.SignDocDirectAux;
                toJSON(message: _836.SignDocDirectAux): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _836.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _836.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _836.TxBody;
                fromJSON(object: any): _836.TxBody;
                toJSON(message: _836.TxBody): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _836.TxBody;
            };
            AuthInfo: {
                encode(message: _836.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _836.AuthInfo;
                fromJSON(object: any): _836.AuthInfo;
                toJSON(message: _836.AuthInfo): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _836.AuthInfo;
            };
            SignerInfo: {
                encode(message: _836.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _836.SignerInfo;
                fromJSON(object: any): _836.SignerInfo;
                toJSON(message: _836.SignerInfo): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _836.SignerInfo;
            };
            ModeInfo: {
                encode(message: _836.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _836.ModeInfo;
                fromJSON(object: any): _836.ModeInfo;
                toJSON(message: _836.ModeInfo): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _836.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _836.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _836.ModeInfo_Single;
                fromJSON(object: any): _836.ModeInfo_Single;
                toJSON(message: _836.ModeInfo_Single): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _836.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _836.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _836.ModeInfo_Multi;
                fromJSON(object: any): _836.ModeInfo_Multi;
                toJSON(message: _836.ModeInfo_Multi): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _836.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _836.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _836.Fee;
                fromJSON(object: any): _836.Fee;
                toJSON(message: _836.Fee): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _836.Fee;
            };
            Tip: {
                encode(message: _836.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _836.Tip;
                fromJSON(object: any): _836.Tip;
                toJSON(message: _836.Tip): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _836.Tip;
            };
            AuxSignerData: {
                encode(message: _836.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _836.AuxSignerData;
                fromJSON(object: any): _836.AuxSignerData;
                toJSON(message: _836.AuxSignerData): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _836.AuxSignerData;
            };
            orderByFromJSON(object: any): _835.OrderBy;
            orderByToJSON(object: _835.OrderBy): string;
            broadcastModeFromJSON(object: any): _835.BroadcastMode;
            broadcastModeToJSON(object: _835.BroadcastMode): string;
            OrderBy: typeof _835.OrderBy;
            BroadcastMode: typeof _835.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _835.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _835.GetTxsEventRequest;
                fromJSON(object: any): _835.GetTxsEventRequest;
                toJSON(message: _835.GetTxsEventRequest): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _835.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _835.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _835.GetTxsEventResponse;
                fromJSON(object: any): _835.GetTxsEventResponse;
                toJSON(message: _835.GetTxsEventResponse): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _835.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _835.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _835.BroadcastTxRequest;
                fromJSON(object: any): _835.BroadcastTxRequest;
                toJSON(message: _835.BroadcastTxRequest): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _835.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _835.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _835.BroadcastTxResponse;
                fromJSON(object: any): _835.BroadcastTxResponse;
                toJSON(message: _835.BroadcastTxResponse): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _835.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _835.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _835.SimulateRequest;
                fromJSON(object: any): _835.SimulateRequest;
                toJSON(message: _835.SimulateRequest): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _835.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _835.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _835.SimulateResponse;
                fromJSON(object: any): _835.SimulateResponse;
                toJSON(message: _835.SimulateResponse): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _835.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _835.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _835.GetTxRequest;
                fromJSON(object: any): _835.GetTxRequest;
                toJSON(message: _835.GetTxRequest): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _835.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _835.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _835.GetTxResponse;
                fromJSON(object: any): _835.GetTxResponse;
                toJSON(message: _835.GetTxResponse): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _835.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _835.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _835.GetBlockWithTxsRequest;
                fromJSON(object: any): _835.GetBlockWithTxsRequest;
                toJSON(message: _835.GetBlockWithTxsRequest): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _835.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _835.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _835.GetBlockWithTxsResponse;
                fromJSON(object: any): _835.GetBlockWithTxsResponse;
                toJSON(message: _835.GetBlockWithTxsResponse): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _835.GetBlockWithTxsResponse;
            };
            ServiceClientImpl: typeof _835.ServiceClientImpl;
        };
    }
    namespace upgrade {
        const v1beta1: {
            Plan: {
                encode(message: _847.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _847.Plan;
                fromJSON(object: any): _847.Plan;
                toJSON(message: _847.Plan): unknown;
                fromPartial<I extends unknown>(object: I): _847.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _847.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _847.SoftwareUpgradeProposal;
                fromJSON(object: any): _847.SoftwareUpgradeProposal;
                toJSON(message: _847.SoftwareUpgradeProposal): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _847.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _847.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _847.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _847.CancelSoftwareUpgradeProposal;
                toJSON(message: _847.CancelSoftwareUpgradeProposal): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _847.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _847.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _847.ModuleVersion;
                fromJSON(object: any): _847.ModuleVersion;
                toJSON(message: _847.ModuleVersion): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _847.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _838.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.MsgSoftwareUpgrade;
                fromJSON(object: any): _838.MsgSoftwareUpgrade;
                toJSON(message: _838.MsgSoftwareUpgrade): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _838.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _838.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _838.MsgSoftwareUpgradeResponse;
                toJSON(_: _838.MsgSoftwareUpgradeResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _838.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _838.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.MsgCancelUpgrade;
                fromJSON(object: any): _838.MsgCancelUpgrade;
                toJSON(message: _838.MsgCancelUpgrade): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _838.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _838.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.MsgCancelUpgradeResponse;
                fromJSON(_: any): _838.MsgCancelUpgradeResponse;
                toJSON(_: _838.MsgCancelUpgradeResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _838.MsgCancelUpgradeResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _838.MsgSoftwareUpgrade) => {
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
                    }) => _838.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _838.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _838.MsgCancelUpgrade;
                };
            };
            encoded: {
                softwareUpgrade(value: _838.MsgSoftwareUpgrade): {
                    type_url: string;
                    value: Uint8Array;
                };
                cancelUpgrade(value: _838.MsgCancelUpgrade): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                softwareUpgrade(value: any): {
                    typeUrl: string;
                    value: _838.MsgSoftwareUpgrade;
                };
                cancelUpgrade(value: any): {
                    typeUrl: string;
                    value: _838.MsgCancelUpgrade;
                };
            };
            toJSON: {
                softwareUpgrade(value: _838.MsgSoftwareUpgrade): {
                    typeUrl: string;
                    value: unknown;
                };
                cancelUpgrade(value: _838.MsgCancelUpgrade): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                softwareUpgrade(value: _838.MsgSoftwareUpgrade): {
                    typeUrl: string;
                    value: _838.MsgSoftwareUpgrade;
                };
                cancelUpgrade(value: _838.MsgCancelUpgrade): {
                    typeUrl: string;
                    value: _838.MsgCancelUpgrade;
                };
            };
            messages: {
                softwareUpgrade(value: _838.MsgSoftwareUpgrade): {
                    typeUrl: string;
                    value: _838.MsgSoftwareUpgrade;
                };
                cancelUpgrade(value: _838.MsgCancelUpgrade): {
                    typeUrl: string;
                    value: _838.MsgCancelUpgrade;
                };
            };
            QueryCurrentPlanRequest: {
                encode(_: _837.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _837.QueryCurrentPlanRequest;
                fromJSON(_: any): _837.QueryCurrentPlanRequest;
                toJSON(_: _837.QueryCurrentPlanRequest): unknown;
                fromPartial<I_8 extends unknown>(_: I_8): _837.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _837.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _837.QueryCurrentPlanResponse;
                fromJSON(object: any): _837.QueryCurrentPlanResponse;
                toJSON(message: _837.QueryCurrentPlanResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _837.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _837.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _837.QueryAppliedPlanRequest;
                fromJSON(object: any): _837.QueryAppliedPlanRequest;
                toJSON(message: _837.QueryAppliedPlanRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _837.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _837.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _837.QueryAppliedPlanResponse;
                fromJSON(object: any): _837.QueryAppliedPlanResponse;
                toJSON(message: _837.QueryAppliedPlanResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _837.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _837.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _837.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _837.QueryUpgradedConsensusStateRequest;
                toJSON(message: _837.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _837.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _837.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _837.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _837.QueryUpgradedConsensusStateResponse;
                toJSON(message: _837.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _837.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _837.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _837.QueryModuleVersionsRequest;
                fromJSON(object: any): _837.QueryModuleVersionsRequest;
                toJSON(message: _837.QueryModuleVersionsRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _837.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _837.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _837.QueryModuleVersionsResponse;
                fromJSON(object: any): _837.QueryModuleVersionsResponse;
                toJSON(message: _837.QueryModuleVersionsResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _837.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _837.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _837.QueryAuthorityRequest;
                fromJSON(_: any): _837.QueryAuthorityRequest;
                toJSON(_: _837.QueryAuthorityRequest): unknown;
                fromPartial<I_16 extends unknown>(_: I_16): _837.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _837.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _837.QueryAuthorityResponse;
                fromJSON(object: any): _837.QueryAuthorityResponse;
                toJSON(message: _837.QueryAuthorityResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _837.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            BaseVestingAccount: {
                encode(message: _857.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _857.BaseVestingAccount;
                fromJSON(object: any): _857.BaseVestingAccount;
                toJSON(message: _857.BaseVestingAccount): unknown;
                fromPartial<I extends unknown>(object: I): _857.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _857.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _857.ContinuousVestingAccount;
                fromJSON(object: any): _857.ContinuousVestingAccount;
                toJSON(message: _857.ContinuousVestingAccount): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _857.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _857.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _857.DelayedVestingAccount;
                fromJSON(object: any): _857.DelayedVestingAccount;
                toJSON(message: _857.DelayedVestingAccount): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _857.DelayedVestingAccount;
            };
            Period: {
                encode(message: _857.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _857.Period;
                fromJSON(object: any): _857.Period;
                toJSON(message: _857.Period): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _857.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _857.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _857.PeriodicVestingAccount;
                fromJSON(object: any): _857.PeriodicVestingAccount;
                toJSON(message: _857.PeriodicVestingAccount): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _857.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _857.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _857.PermanentLockedAccount;
                fromJSON(object: any): _857.PermanentLockedAccount;
                toJSON(message: _857.PermanentLockedAccount): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _857.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _848.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _848.MsgCreateVestingAccount;
                fromJSON(object: any): _848.MsgCreateVestingAccount;
                toJSON(message: _848.MsgCreateVestingAccount): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _848.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _848.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _848.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _848.MsgCreateVestingAccountResponse;
                toJSON(_: _848.MsgCreateVestingAccountResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _848.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _848.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _848.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _848.MsgCreatePermanentLockedAccount;
                toJSON(message: _848.MsgCreatePermanentLockedAccount): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _848.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _848.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _848.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _848.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _848.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial<I_9 extends unknown>(_: I_9): _848.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _848.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _848.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _848.MsgCreatePeriodicVestingAccount;
                toJSON(message: _848.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _848.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _848.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _848.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _848.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _848.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial<I_11 extends unknown>(_: I_11): _848.MsgCreatePeriodicVestingAccountResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _848.MsgCreateVestingAccount) => {
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
                    }) => _848.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _848.MsgCreatePermanentLockedAccount) => {
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
                    }) => _848.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _848.MsgCreatePeriodicVestingAccount) => {
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
                    }) => _848.MsgCreatePeriodicVestingAccount;
                };
            };
            encoded: {
                createVestingAccount(value: _848.MsgCreateVestingAccount): {
                    type_url: string;
                    value: Uint8Array;
                };
                createPermanentLockedAccount(value: _848.MsgCreatePermanentLockedAccount): {
                    type_url: string;
                    value: Uint8Array;
                };
                createPeriodicVestingAccount(value: _848.MsgCreatePeriodicVestingAccount): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                createVestingAccount(value: any): {
                    typeUrl: string;
                    value: _848.MsgCreateVestingAccount;
                };
                createPermanentLockedAccount(value: any): {
                    typeUrl: string;
                    value: _848.MsgCreatePermanentLockedAccount;
                };
                createPeriodicVestingAccount(value: any): {
                    typeUrl: string;
                    value: _848.MsgCreatePeriodicVestingAccount;
                };
            };
            toJSON: {
                createVestingAccount(value: _848.MsgCreateVestingAccount): {
                    typeUrl: string;
                    value: unknown;
                };
                createPermanentLockedAccount(value: _848.MsgCreatePermanentLockedAccount): {
                    typeUrl: string;
                    value: unknown;
                };
                createPeriodicVestingAccount(value: _848.MsgCreatePeriodicVestingAccount): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                createVestingAccount(value: _848.MsgCreateVestingAccount): {
                    typeUrl: string;
                    value: _848.MsgCreateVestingAccount;
                };
                createPermanentLockedAccount(value: _848.MsgCreatePermanentLockedAccount): {
                    typeUrl: string;
                    value: _848.MsgCreatePermanentLockedAccount;
                };
                createPeriodicVestingAccount(value: _848.MsgCreatePeriodicVestingAccount): {
                    typeUrl: string;
                    value: _848.MsgCreatePeriodicVestingAccount;
                };
            };
            messages: {
                createVestingAccount(value: _848.MsgCreateVestingAccount): {
                    typeUrl: string;
                    value: _848.MsgCreateVestingAccount;
                };
                createPermanentLockedAccount(value: _848.MsgCreatePermanentLockedAccount): {
                    typeUrl: string;
                    value: _848.MsgCreatePermanentLockedAccount;
                };
                createPeriodicVestingAccount(value: _848.MsgCreatePeriodicVestingAccount): {
                    typeUrl: string;
                    value: _848.MsgCreatePeriodicVestingAccount;
                };
            };
        };
    }
}
