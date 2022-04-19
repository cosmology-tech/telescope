import * as _0 from "./confio/proofs";
import * as _2 from "./cosmos_proto/cosmos";
import * as _4 from "./cosmos/app/v1alpha1/config";
import * as _6 from "./cosmos/app/v1alpha1/module";
import * as _8 from "./cosmos/app/v1alpha1/query";
import * as _10 from "./cosmos/auth/v1beta1/auth";
import * as _12 from "./cosmos/auth/v1beta1/genesis";
import * as _14 from "./cosmos/auth/v1beta1/query";
import * as _16 from "./cosmos/authz/v1beta1/authz";
import * as _18 from "./cosmos/authz/v1beta1/event";
import * as _20 from "./cosmos/authz/v1beta1/genesis";
import * as _22 from "./cosmos/authz/v1beta1/query";
import * as _24 from "./cosmos/authz/v1beta1/tx";
import * as _32 from "./cosmos/bank/v1beta1/authz";
import * as _34 from "./cosmos/bank/v1beta1/bank";
import * as _36 from "./cosmos/bank/v1beta1/genesis";
import * as _38 from "./cosmos/bank/v1beta1/query";
import * as _40 from "./cosmos/bank/v1beta1/tx";
import * as _48 from "./cosmos/base/abci/v1beta1/abci";
import * as _50 from "./cosmos/base/kv/v1beta1/kv";
import * as _52 from "./cosmos/base/query/v1beta1/pagination";
import * as _54 from "./cosmos/base/reflection/v1beta1/reflection";
import * as _56 from "./cosmos/base/reflection/v2alpha1/reflection";
import * as _58 from "./cosmos/base/snapshots/v1beta1/snapshot";
import * as _60 from "./cosmos/base/store/v1beta1/commit_info";
import * as _62 from "./cosmos/base/store/v1beta1/listening";
import * as _64 from "./cosmos/base/tendermint/v1beta1/query";
import * as _66 from "./cosmos/base/v1beta1/coin";
import * as _68 from "./cosmos/capability/v1beta1/capability";
import * as _70 from "./cosmos/capability/v1beta1/genesis";
import * as _72 from "./cosmos/crisis/v1beta1/genesis";
import * as _74 from "./cosmos/crisis/v1beta1/tx";
import * as _82 from "./cosmos/crypto/ed25519/keys";
import * as _84 from "./cosmos/crypto/hd/v1/hd";
import * as _86 from "./cosmos/crypto/keyring/v1/record";
import * as _88 from "./cosmos/crypto/multisig/keys";
import * as _90 from "./cosmos/crypto/secp256k1/keys";
import * as _92 from "./cosmos/crypto/secp256r1/keys";
import * as _94 from "./cosmos/distribution/v1beta1/distribution";
import * as _96 from "./cosmos/distribution/v1beta1/genesis";
import * as _98 from "./cosmos/distribution/v1beta1/query";
import * as _100 from "./cosmos/distribution/v1beta1/tx";
import * as _108 from "./cosmos/evidence/v1beta1/evidence";
import * as _110 from "./cosmos/evidence/v1beta1/genesis";
import * as _112 from "./cosmos/evidence/v1beta1/query";
import * as _114 from "./cosmos/evidence/v1beta1/tx";
import * as _122 from "./cosmos/feegrant/v1beta1/feegrant";
import * as _124 from "./cosmos/feegrant/v1beta1/genesis";
import * as _126 from "./cosmos/feegrant/v1beta1/query";
import * as _128 from "./cosmos/feegrant/v1beta1/tx";
import * as _136 from "./cosmos/genutil/v1beta1/genesis";
import * as _138 from "./cosmos/gov/v1/genesis";
import * as _140 from "./cosmos/gov/v1/gov";
import * as _142 from "./cosmos/gov/v1/query";
import * as _144 from "./cosmos/gov/v1/tx";
import * as _152 from "./cosmos/gov/v1beta1/genesis";
import * as _154 from "./cosmos/gov/v1beta1/gov";
import * as _156 from "./cosmos/gov/v1beta1/query";
import * as _158 from "./cosmos/gov/v1beta1/tx";
import * as _166 from "./cosmos/group/v1/events";
import * as _168 from "./cosmos/group/v1/genesis";
import * as _170 from "./cosmos/group/v1/query";
import * as _172 from "./cosmos/group/v1/tx";
import * as _180 from "./cosmos/group/v1/types";
import * as _182 from "./cosmos/mint/v1beta1/genesis";
import * as _184 from "./cosmos/mint/v1beta1/mint";
import * as _186 from "./cosmos/mint/v1beta1/query";
import * as _190 from "./cosmos/nft/v1beta1/event";
import * as _192 from "./cosmos/nft/v1beta1/genesis";
import * as _194 from "./cosmos/nft/v1beta1/nft";
import * as _196 from "./cosmos/nft/v1beta1/query";
import * as _198 from "./cosmos/nft/v1beta1/tx";
import * as _206 from "./cosmos/orm/v1/orm";
import * as _208 from "./cosmos/orm/v1alpha1/schema";
import * as _210 from "./cosmos/params/v1beta1/params";
import * as _212 from "./cosmos/params/v1beta1/query";
import * as _214 from "./cosmos/slashing/v1beta1/genesis";
import * as _216 from "./cosmos/slashing/v1beta1/query";
import * as _218 from "./cosmos/slashing/v1beta1/slashing";
import * as _220 from "./cosmos/slashing/v1beta1/tx";
import * as _228 from "./cosmos/staking/v1beta1/authz";
import * as _230 from "./cosmos/staking/v1beta1/genesis";
import * as _232 from "./cosmos/staking/v1beta1/query";
import * as _234 from "./cosmos/staking/v1beta1/staking";
import * as _236 from "./cosmos/staking/v1beta1/tx";
import * as _244 from "./cosmos/tx/signing/v1beta1/signing";
import * as _246 from "./cosmos/tx/v1beta1/service";
import * as _248 from "./cosmos/tx/v1beta1/tx";
import * as _250 from "./cosmos/upgrade/v1beta1/query";
import * as _252 from "./cosmos/upgrade/v1beta1/tx";
import * as _260 from "./cosmos/upgrade/v1beta1/upgrade";
import * as _262 from "./cosmos/vesting/v1beta1/tx";
import * as _270 from "./cosmos/vesting/v1beta1/vesting";
import * as _272 from "./cosmwasm/wasm/v1/genesis";
import * as _274 from "./cosmwasm/wasm/v1/ibc";
import * as _276 from "./cosmwasm/wasm/v1/proposal";
import * as _278 from "./cosmwasm/wasm/v1/query";
import * as _280 from "./cosmwasm/wasm/v1/tx";
import * as _288 from "./cosmwasm/wasm/v1/types";
import * as _294 from "./google/api/auth";
import * as _296 from "./google/api/backend";
import * as _298 from "./google/api/billing";
import * as _302 from "./google/api/config_change";
import * as _304 from "./google/api/consumer";
import * as _306 from "./google/api/context";
import * as _308 from "./google/api/control";
import * as _310 from "./google/api/distribution";
import * as _312 from "./google/api/documentation";
import * as _314 from "./google/api/endpoint";
import * as _316 from "./google/api/error_reason";
import * as _318 from "./google/api/field_behavior";
import * as _320 from "./google/api/http";
import * as _322 from "./google/api/httpbody";
import * as _324 from "./google/api/label";
import * as _326 from "./google/api/launch_stage";
import * as _328 from "./google/api/log";
import * as _330 from "./google/api/logging";
import * as _332 from "./google/api/metric";
import * as _334 from "./google/api/monitored_resource";
import * as _336 from "./google/api/monitoring";
import * as _338 from "./google/api/quota";
import * as _340 from "./google/api/resource";
import * as _342 from "./google/api/routing";
import * as _344 from "./google/api/service";
import * as _346 from "./google/api/source_info";
import * as _348 from "./google/api/system_parameter";
import * as _350 from "./google/api/usage";
import * as _352 from "./google/api/visibility";
import * as _354 from "./google/logging/type/http_request";
import * as _356 from "./google/logging/type/log_severity";
import * as _358 from "./google/logging/v2/log_entry";
import * as _360 from "./google/logging/v2/logging_config";
import * as _362 from "./google/logging/v2/logging_metrics";
import * as _364 from "./google/logging/v2/logging";
import * as _366 from "./google/longrunning/operations";
import * as _368 from "./google/protobuf/any";
import * as _370 from "./google/protobuf/api";
import * as _372 from "./google/protobuf/descriptor";
import * as _374 from "./google/protobuf/duration";
import * as _376 from "./google/protobuf/empty";
import * as _378 from "./google/protobuf/field_mask";
import * as _380 from "./google/protobuf/source_context";
import * as _382 from "./google/protobuf/struct";
import * as _384 from "./google/protobuf/timestamp";
import * as _386 from "./google/protobuf/type";
import * as _388 from "./google/protobuf/wrappers";
import * as _390 from "./google/rpc/code";
import * as _392 from "./google/rpc/error_details";
import * as _394 from "./google/rpc/status";
import * as _396 from "./ibc/applications/transfer/v1/genesis";
import * as _398 from "./ibc/applications/transfer/v1/query";
import * as _400 from "./ibc/applications/transfer/v1/transfer";
import * as _402 from "./ibc/applications/transfer/v1/tx";
import * as _410 from "./ibc/applications/transfer/v2/packet";
import * as _412 from "./ibc/core/channel/v1/channel";
import * as _414 from "./ibc/core/channel/v1/genesis";
import * as _416 from "./ibc/core/channel/v1/query";
import * as _418 from "./ibc/core/channel/v1/tx";
import * as _426 from "./ibc/core/client/v1/client";
import * as _428 from "./ibc/core/client/v1/genesis";
import * as _430 from "./ibc/core/client/v1/query";
import * as _432 from "./ibc/core/client/v1/tx";
import * as _440 from "./ibc/core/commitment/v1/commitment";
import * as _442 from "./ibc/core/connection/v1/connection";
import * as _444 from "./ibc/core/connection/v1/genesis";
import * as _446 from "./ibc/core/connection/v1/query";
import * as _448 from "./ibc/core/connection/v1/tx";
import * as _456 from "./ibc/core/port/v1/query";
import * as _458 from "./ibc/core/types/v1/genesis";
import * as _460 from "./ibc/lightclients/localhost/v1/localhost";
import * as _462 from "./ibc/lightclients/solomachine/v1/solomachine";
import * as _464 from "./ibc/lightclients/solomachine/v2/solomachine";
import * as _466 from "./ibc/lightclients/tendermint/v1/tendermint";
import * as _468 from "./osmosis/claim/v1beta1/claim";
import * as _470 from "./osmosis/claim/v1beta1/genesis";
import * as _472 from "./osmosis/claim/v1beta1/params";
import * as _474 from "./osmosis/claim/v1beta1/query";
import * as _476 from "./osmosis/epochs/genesis";
import * as _478 from "./osmosis/epochs/query";
import * as _480 from "./osmosis/gamm/pool-models/balancer/balancerPool";
import * as _482 from "./osmosis/gamm/pool-models/balancer/tx";
import * as _484 from "./osmosis/gamm/v1beta1/genesis";
import * as _486 from "./osmosis/gamm/v1beta1/query";
import * as _488 from "./osmosis/gamm/v1beta1/tx";
import * as _496 from "./osmosis/incentives/gauge";
import * as _498 from "./osmosis/incentives/genesis";
import * as _500 from "./osmosis/incentives/params";
import * as _502 from "./osmosis/incentives/query";
import * as _504 from "./osmosis/incentives/tx";
import * as _512 from "./osmosis/lockup/genesis";
import * as _514 from "./osmosis/lockup/lock";
import * as _516 from "./osmosis/lockup/query";
import * as _518 from "./osmosis/lockup/tx";
import * as _526 from "./osmosis/mint/v1beta1/genesis";
import * as _528 from "./osmosis/mint/v1beta1/mint";
import * as _530 from "./osmosis/mint/v1beta1/query";
import * as _532 from "./osmosis/pool-incentives/v1beta1/genesis";
import * as _534 from "./osmosis/pool-incentives/v1beta1/gov";
import * as _536 from "./osmosis/pool-incentives/v1beta1/incentives";
import * as _538 from "./osmosis/pool-incentives/v1beta1/query";
import * as _540 from "./osmosis/store/v1beta1/tree";
import * as _542 from "./osmosis/superfluid/genesis";
import * as _544 from "./osmosis/superfluid/params";
import * as _546 from "./osmosis/superfluid/query";
import * as _548 from "./osmosis/superfluid/superfluid";
import * as _550 from "./osmosis/superfluid/tx";
import * as _558 from "./osmosis/txfees/v1beta1/feetoken";
import * as _560 from "./osmosis/txfees/v1beta1/genesis";
import * as _562 from "./osmosis/txfees/v1beta1/gov";
import * as _564 from "./osmosis/txfees/v1beta1/query";
import * as _566 from "./secret/compute/v1beta1/genesis";
import * as _568 from "./secret/compute/v1beta1/msg";
import * as _570 from "./secret/compute/v1beta1/query";
import * as _572 from "./secret/compute/v1beta1/types";
import * as _574 from "./secret/registration/v1beta1/genesis";
import * as _576 from "./secret/registration/v1beta1/msg";
import * as _578 from "./secret/registration/v1beta1/query";
import * as _580 from "./secret/registration/v1beta1/types";
import * as _582 from "./secret/registration/v1beta1/remote_attestation/types";
import * as _584 from "./tendermint/abci/types";
import * as _586 from "./tendermint/crypto/keys";
import * as _588 from "./tendermint/crypto/proof";
import * as _590 from "./tendermint/libs/bits/types";
import * as _592 from "./tendermint/p2p/types";
import * as _594 from "./tendermint/types/block";
import * as _596 from "./tendermint/types/evidence";
import * as _598 from "./tendermint/types/params";
import * as _600 from "./tendermint/types/types";
import * as _602 from "./tendermint/types/validator";
import * as _604 from "./tendermint/version/types";
export declare const ics23: {
    hashOpFromJSON(object: any): _0.HashOp;
    hashOpToJSON(object: _0.HashOp): string;
    lengthOpFromJSON(object: any): _0.LengthOp;
    lengthOpToJSON(object: _0.LengthOp): string;
    HashOp: typeof _0.HashOp;
    LengthOp: typeof _0.LengthOp;
    ExistenceProof: {
        encode(message: _0.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ExistenceProof;
        fromJSON(object: any): _0.ExistenceProof;
        toJSON(message: _0.ExistenceProof): unknown;
        fromPartial<I extends unknown>(object: I): _0.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _0.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.NonExistenceProof;
        fromJSON(object: any): _0.NonExistenceProof;
        toJSON(message: _0.NonExistenceProof): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): _0.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _0.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CommitmentProof;
        fromJSON(object: any): _0.CommitmentProof;
        toJSON(message: _0.CommitmentProof): unknown;
        fromPartial<I_2 extends unknown>(object: I_2): _0.CommitmentProof;
    };
    LeafOp: {
        encode(message: _0.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.LeafOp;
        fromJSON(object: any): _0.LeafOp;
        toJSON(message: _0.LeafOp): unknown;
        fromPartial<I_3 extends unknown>(object: I_3): _0.LeafOp;
    };
    InnerOp: {
        encode(message: _0.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.InnerOp;
        fromJSON(object: any): _0.InnerOp;
        toJSON(message: _0.InnerOp): unknown;
        fromPartial<I_4 extends unknown>(object: I_4): _0.InnerOp;
    };
    ProofSpec: {
        encode(message: _0.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ProofSpec;
        fromJSON(object: any): _0.ProofSpec;
        toJSON(message: _0.ProofSpec): unknown;
        fromPartial<I_5 extends unknown>(object: I_5): _0.ProofSpec;
    };
    InnerSpec: {
        encode(message: _0.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.InnerSpec;
        fromJSON(object: any): _0.InnerSpec;
        toJSON(message: _0.InnerSpec): unknown;
        fromPartial<I_6 extends unknown>(object: I_6): _0.InnerSpec;
    };
    BatchProof: {
        encode(message: _0.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.BatchProof;
        fromJSON(object: any): _0.BatchProof;
        toJSON(message: _0.BatchProof): unknown;
        fromPartial<I_7 extends unknown>(object: I_7): _0.BatchProof;
    };
    BatchEntry: {
        encode(message: _0.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.BatchEntry;
        fromJSON(object: any): _0.BatchEntry;
        toJSON(message: _0.BatchEntry): unknown;
        fromPartial<I_8 extends unknown>(object: I_8): _0.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _0.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CompressedBatchProof;
        fromJSON(object: any): _0.CompressedBatchProof;
        toJSON(message: _0.CompressedBatchProof): unknown;
        fromPartial<I_9 extends unknown>(object: I_9): _0.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _0.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CompressedBatchEntry;
        fromJSON(object: any): _0.CompressedBatchEntry;
        toJSON(message: _0.CompressedBatchEntry): unknown;
        fromPartial<I_10 extends unknown>(object: I_10): _0.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _0.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CompressedExistenceProof;
        fromJSON(object: any): _0.CompressedExistenceProof;
        toJSON(message: _0.CompressedExistenceProof): unknown;
        fromPartial<I_11 extends unknown>(object: I_11): _0.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _0.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CompressedNonExistenceProof;
        fromJSON(object: any): _0.CompressedNonExistenceProof;
        toJSON(message: _0.CompressedNonExistenceProof): unknown;
        fromPartial<I_12 extends unknown>(object: I_12): _0.CompressedNonExistenceProof;
    };
};
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _2.ScalarType;
    scalarTypeToJSON(object: _2.ScalarType): string;
    ScalarType: typeof _2.ScalarType;
    InterfaceDescriptor: {
        encode(message: _2.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.InterfaceDescriptor;
        fromJSON(object: any): _2.InterfaceDescriptor;
        toJSON(message: _2.InterfaceDescriptor): unknown;
        fromPartial<I extends unknown>(object: I): _2.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _2.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ScalarDescriptor;
        fromJSON(object: any): _2.ScalarDescriptor;
        toJSON(message: _2.ScalarDescriptor): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): _2.ScalarDescriptor;
    };
};
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryConfigRequest: {
                encode(_: _8.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryConfigRequest;
                fromJSON(_: any): _8.QueryConfigRequest;
                toJSON(_: _8.QueryConfigRequest): unknown;
                fromPartial<I extends unknown>(_: I): _8.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _8.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryConfigResponse;
                fromJSON(object: any): _8.QueryConfigResponse;
                toJSON(message: _8.QueryConfigResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _8.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _6.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.ModuleDescriptor;
                fromJSON(object: any): _6.ModuleDescriptor;
                toJSON(message: _6.ModuleDescriptor): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _6.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _6.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.PackageReference;
                fromJSON(object: any): _6.PackageReference;
                toJSON(message: _6.PackageReference): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _6.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _6.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MigrateFromInfo;
                fromJSON(object: any): _6.MigrateFromInfo;
                toJSON(message: _6.MigrateFromInfo): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _6.MigrateFromInfo;
            };
            Config: {
                encode(message: _4.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.Config;
                fromJSON(object: any): _4.Config;
                toJSON(message: _4.Config): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _4.Config;
            };
            ModuleConfig: {
                encode(message: _4.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.ModuleConfig;
                fromJSON(object: any): _4.ModuleConfig;
                toJSON(message: _4.ModuleConfig): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _4.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryAccountsRequest: {
                encode(message: _14.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryAccountsRequest;
                fromJSON(object: any): _14.QueryAccountsRequest;
                toJSON(message: _14.QueryAccountsRequest): unknown;
                fromPartial<I extends unknown>(object: I): _14.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _14.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryAccountsResponse;
                fromJSON(object: any): _14.QueryAccountsResponse;
                toJSON(message: _14.QueryAccountsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _14.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _14.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryAccountRequest;
                fromJSON(object: any): _14.QueryAccountRequest;
                toJSON(message: _14.QueryAccountRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _14.QueryAccountRequest;
            };
            QueryModuleAccountsRequest: {
                encode(_: _14.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryModuleAccountsRequest;
                fromJSON(_: any): _14.QueryModuleAccountsRequest;
                toJSON(_: _14.QueryModuleAccountsRequest): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _14.QueryModuleAccountsRequest;
            };
            QueryParamsResponse: {
                encode(message: _14.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryParamsResponse;
                fromJSON(object: any): _14.QueryParamsResponse;
                toJSON(message: _14.QueryParamsResponse): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _14.QueryParamsResponse;
            };
            QueryAccountResponse: {
                encode(message: _14.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryAccountResponse;
                fromJSON(object: any): _14.QueryAccountResponse;
                toJSON(message: _14.QueryAccountResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _14.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _14.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryParamsRequest;
                fromJSON(_: any): _14.QueryParamsRequest;
                toJSON(_: _14.QueryParamsRequest): unknown;
                fromPartial<I_6 extends unknown>(_: I_6): _14.QueryParamsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _14.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryModuleAccountsResponse;
                fromJSON(object: any): _14.QueryModuleAccountsResponse;
                toJSON(message: _14.QueryModuleAccountsResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _14.QueryModuleAccountsResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _14.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Bech32PrefixRequest;
                fromJSON(_: any): _14.Bech32PrefixRequest;
                toJSON(_: _14.Bech32PrefixRequest): unknown;
                fromPartial<I_8 extends unknown>(_: I_8): _14.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _14.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Bech32PrefixResponse;
                fromJSON(object: any): _14.Bech32PrefixResponse;
                toJSON(message: _14.Bech32PrefixResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _14.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _14.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.AddressBytesToStringRequest;
                fromJSON(object: any): _14.AddressBytesToStringRequest;
                toJSON(message: _14.AddressBytesToStringRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _14.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _14.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.AddressBytesToStringResponse;
                fromJSON(object: any): _14.AddressBytesToStringResponse;
                toJSON(message: _14.AddressBytesToStringResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _14.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _14.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.AddressStringToBytesRequest;
                fromJSON(object: any): _14.AddressStringToBytesRequest;
                toJSON(message: _14.AddressStringToBytesRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _14.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _14.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.AddressStringToBytesResponse;
                fromJSON(object: any): _14.AddressStringToBytesResponse;
                toJSON(message: _14.AddressStringToBytesResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _14.AddressStringToBytesResponse;
            };
            GenesisState: {
                encode(message: _12.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GenesisState;
                fromJSON(object: any): _12.GenesisState;
                toJSON(message: _12.GenesisState): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _12.GenesisState;
            };
            BaseAccount: {
                encode(message: _10.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.BaseAccount;
                fromJSON(object: any): _10.BaseAccount;
                toJSON(message: _10.BaseAccount): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _10.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _10.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.ModuleAccount;
                fromJSON(object: any): _10.ModuleAccount;
                toJSON(message: _10.ModuleAccount): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _10.ModuleAccount;
            };
            Params: {
                encode(message: _10.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Params;
                fromJSON(object: any): _10.Params;
                toJSON(message: _10.Params): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _10.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgGrant: {
                encode(message: _24.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgGrant;
                fromJSON(object: any): _24.MsgGrant;
                toJSON(message: _24.MsgGrant): unknown;
                fromPartial<I extends unknown>(object: I): _24.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _24.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgExecResponse;
                fromJSON(object: any): _24.MsgExecResponse;
                toJSON(message: _24.MsgExecResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _24.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _24.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgExec;
                fromJSON(object: any): _24.MsgExec;
                toJSON(message: _24.MsgExec): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _24.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _24.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgGrantResponse;
                fromJSON(_: any): _24.MsgGrantResponse;
                toJSON(_: _24.MsgGrantResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _24.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _24.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgRevoke;
                fromJSON(object: any): _24.MsgRevoke;
                toJSON(message: _24.MsgRevoke): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _24.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _24.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgRevokeResponse;
                fromJSON(_: any): _24.MsgRevokeResponse;
                toJSON(_: _24.MsgRevokeResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _24.MsgRevokeResponse;
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _24.MsgGrant) => {
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
                    }) => _24.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _24.MsgExec) => {
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
                    }) => _24.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _24.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _24.MsgRevoke;
                };
            };
            encoded: {
                grant(value: _24.MsgGrant): {
                    type_url: string;
                    value: Uint8Array;
                };
                exec(value: _24.MsgExec): {
                    type_url: string;
                    value: Uint8Array;
                };
                revoke(value: _24.MsgRevoke): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                grant(value: any): {
                    typeUrl: string;
                    value: _24.MsgGrant;
                };
                exec(value: any): {
                    typeUrl: string;
                    value: _24.MsgExec;
                };
                revoke(value: any): {
                    typeUrl: string;
                    value: _24.MsgRevoke;
                };
            };
            toJSON: {
                grant(value: _24.MsgGrant): {
                    typeUrl: string;
                    value: unknown;
                };
                exec(value: _24.MsgExec): {
                    typeUrl: string;
                    value: unknown;
                };
                revoke(value: _24.MsgRevoke): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                grant(value: _24.MsgGrant): {
                    typeUrl: string;
                    value: _24.MsgGrant;
                };
                exec(value: _24.MsgExec): {
                    typeUrl: string;
                    value: _24.MsgExec;
                };
                revoke(value: _24.MsgRevoke): {
                    typeUrl: string;
                    value: _24.MsgRevoke;
                };
            };
            messages: {
                grant(value: _24.MsgGrant): {
                    typeUrl: string;
                    value: _24.MsgGrant;
                };
                exec(value: _24.MsgExec): {
                    typeUrl: string;
                    value: _24.MsgExec;
                };
                revoke(value: _24.MsgRevoke): {
                    typeUrl: string;
                    value: _24.MsgRevoke;
                };
            };
            QueryGrantsRequest: {
                encode(message: _22.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryGrantsRequest;
                fromJSON(object: any): _22.QueryGrantsRequest;
                toJSON(message: _22.QueryGrantsRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _22.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _22.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryGrantsResponse;
                fromJSON(object: any): _22.QueryGrantsResponse;
                toJSON(message: _22.QueryGrantsResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _22.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _22.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryGranterGrantsRequest;
                fromJSON(object: any): _22.QueryGranterGrantsRequest;
                toJSON(message: _22.QueryGranterGrantsRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _22.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _22.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryGranterGrantsResponse;
                fromJSON(object: any): _22.QueryGranterGrantsResponse;
                toJSON(message: _22.QueryGranterGrantsResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _22.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _22.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryGranteeGrantsRequest;
                fromJSON(object: any): _22.QueryGranteeGrantsRequest;
                toJSON(message: _22.QueryGranteeGrantsRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _22.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _22.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryGranteeGrantsResponse;
                fromJSON(object: any): _22.QueryGranteeGrantsResponse;
                toJSON(message: _22.QueryGranteeGrantsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _22.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _20.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.GenesisState;
                fromJSON(object: any): _20.GenesisState;
                toJSON(message: _20.GenesisState): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _20.GenesisState;
            };
            EventGrant: {
                encode(message: _18.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.EventGrant;
                fromJSON(object: any): _18.EventGrant;
                toJSON(message: _18.EventGrant): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _18.EventGrant;
            };
            EventRevoke: {
                encode(message: _18.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.EventRevoke;
                fromJSON(object: any): _18.EventRevoke;
                toJSON(message: _18.EventRevoke): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _18.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _16.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.GenericAuthorization;
                fromJSON(object: any): _16.GenericAuthorization;
                toJSON(message: _16.GenericAuthorization): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _16.GenericAuthorization;
            };
            Grant: {
                encode(message: _16.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Grant;
                fromJSON(object: any): _16.Grant;
                toJSON(message: _16.Grant): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _16.Grant;
            };
            GrantAuthorization: {
                encode(message: _16.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.GrantAuthorization;
                fromJSON(object: any): _16.GrantAuthorization;
                toJSON(message: _16.GrantAuthorization): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _16.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _16.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.GrantQueueItem;
                fromJSON(object: any): _16.GrantQueueItem;
                toJSON(message: _16.GrantQueueItem): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _16.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgSend: {
                encode(message: _40.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgSend;
                fromJSON(object: any): _40.MsgSend;
                toJSON(message: _40.MsgSend): unknown;
                fromPartial<I extends unknown>(object: I): _40.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _40.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgSendResponse;
                fromJSON(_: any): _40.MsgSendResponse;
                toJSON(_: _40.MsgSendResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _40.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _40.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgMultiSend;
                fromJSON(object: any): _40.MsgMultiSend;
                toJSON(message: _40.MsgMultiSend): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _40.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _40.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgMultiSendResponse;
                fromJSON(_: any): _40.MsgMultiSendResponse;
                toJSON(_: _40.MsgMultiSendResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _40.MsgMultiSendResponse;
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _40.MsgSend) => {
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
                    }) => _40.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _40.MsgMultiSend) => {
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
                    }) => _40.MsgMultiSend;
                };
            };
            encoded: {
                send(value: _40.MsgSend): {
                    type_url: string;
                    value: Uint8Array;
                };
                multiSend(value: _40.MsgMultiSend): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                send(value: any): {
                    typeUrl: string;
                    value: _40.MsgSend;
                };
                multiSend(value: any): {
                    typeUrl: string;
                    value: _40.MsgMultiSend;
                };
            };
            toJSON: {
                send(value: _40.MsgSend): {
                    typeUrl: string;
                    value: unknown;
                };
                multiSend(value: _40.MsgMultiSend): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                send(value: _40.MsgSend): {
                    typeUrl: string;
                    value: _40.MsgSend;
                };
                multiSend(value: _40.MsgMultiSend): {
                    typeUrl: string;
                    value: _40.MsgMultiSend;
                };
            };
            messages: {
                send(value: _40.MsgSend): {
                    typeUrl: string;
                    value: _40.MsgSend;
                };
                multiSend(value: _40.MsgMultiSend): {
                    typeUrl: string;
                    value: _40.MsgMultiSend;
                };
            };
            QueryBalanceRequest: {
                encode(message: _38.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryBalanceRequest;
                fromJSON(object: any): _38.QueryBalanceRequest;
                toJSON(message: _38.QueryBalanceRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _38.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _38.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryBalanceResponse;
                fromJSON(object: any): _38.QueryBalanceResponse;
                toJSON(message: _38.QueryBalanceResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _38.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _38.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryAllBalancesRequest;
                fromJSON(object: any): _38.QueryAllBalancesRequest;
                toJSON(message: _38.QueryAllBalancesRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _38.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _38.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryAllBalancesResponse;
                fromJSON(object: any): _38.QueryAllBalancesResponse;
                toJSON(message: _38.QueryAllBalancesResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _38.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _38.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QuerySpendableBalancesRequest;
                fromJSON(object: any): _38.QuerySpendableBalancesRequest;
                toJSON(message: _38.QuerySpendableBalancesRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _38.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _38.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QuerySpendableBalancesResponse;
                fromJSON(object: any): _38.QuerySpendableBalancesResponse;
                toJSON(message: _38.QuerySpendableBalancesResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _38.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _38.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryTotalSupplyRequest;
                fromJSON(object: any): _38.QueryTotalSupplyRequest;
                toJSON(message: _38.QueryTotalSupplyRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _38.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _38.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryTotalSupplyResponse;
                fromJSON(object: any): _38.QueryTotalSupplyResponse;
                toJSON(message: _38.QueryTotalSupplyResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _38.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _38.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QuerySupplyOfRequest;
                fromJSON(object: any): _38.QuerySupplyOfRequest;
                toJSON(message: _38.QuerySupplyOfRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _38.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _38.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QuerySupplyOfResponse;
                fromJSON(object: any): _38.QuerySupplyOfResponse;
                toJSON(message: _38.QuerySupplyOfResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _38.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _38.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryParamsRequest;
                fromJSON(_: any): _38.QueryParamsRequest;
                toJSON(_: _38.QueryParamsRequest): unknown;
                fromPartial<I_14 extends unknown>(_: I_14): _38.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _38.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryParamsResponse;
                fromJSON(object: any): _38.QueryParamsResponse;
                toJSON(message: _38.QueryParamsResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _38.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _38.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDenomsMetadataRequest;
                fromJSON(object: any): _38.QueryDenomsMetadataRequest;
                toJSON(message: _38.QueryDenomsMetadataRequest): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _38.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _38.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDenomsMetadataResponse;
                fromJSON(object: any): _38.QueryDenomsMetadataResponse;
                toJSON(message: _38.QueryDenomsMetadataResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _38.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _38.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDenomMetadataRequest;
                fromJSON(object: any): _38.QueryDenomMetadataRequest;
                toJSON(message: _38.QueryDenomMetadataRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _38.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _38.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDenomMetadataResponse;
                fromJSON(object: any): _38.QueryDenomMetadataResponse;
                toJSON(message: _38.QueryDenomMetadataResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _38.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _38.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDenomOwnersRequest;
                fromJSON(object: any): _38.QueryDenomOwnersRequest;
                toJSON(message: _38.QueryDenomOwnersRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _38.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _38.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.DenomOwner;
                fromJSON(object: any): _38.DenomOwner;
                toJSON(message: _38.DenomOwner): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _38.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _38.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDenomOwnersResponse;
                fromJSON(object: any): _38.QueryDenomOwnersResponse;
                toJSON(message: _38.QueryDenomOwnersResponse): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _38.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _36.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.GenesisState;
                fromJSON(object: any): _36.GenesisState;
                toJSON(message: _36.GenesisState): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _36.GenesisState;
            };
            Balance: {
                encode(message: _36.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Balance;
                fromJSON(object: any): _36.Balance;
                toJSON(message: _36.Balance): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _36.Balance;
            };
            Params: {
                encode(message: _34.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Params;
                fromJSON(object: any): _34.Params;
                toJSON(message: _34.Params): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _34.Params;
            };
            SendEnabled: {
                encode(message: _34.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.SendEnabled;
                fromJSON(object: any): _34.SendEnabled;
                toJSON(message: _34.SendEnabled): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _34.SendEnabled;
            };
            Input: {
                encode(message: _34.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Input;
                fromJSON(object: any): _34.Input;
                toJSON(message: _34.Input): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _34.Input;
            };
            Output: {
                encode(message: _34.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Output;
                fromJSON(object: any): _34.Output;
                toJSON(message: _34.Output): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _34.Output;
            };
            Supply: {
                encode(message: _34.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Supply;
                fromJSON(object: any): _34.Supply;
                toJSON(message: _34.Supply): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _34.Supply;
            };
            DenomUnit: {
                encode(message: _34.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DenomUnit;
                fromJSON(object: any): _34.DenomUnit;
                toJSON(message: _34.DenomUnit): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _34.DenomUnit;
            };
            Metadata: {
                encode(message: _34.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Metadata;
                fromJSON(object: any): _34.Metadata;
                toJSON(message: _34.Metadata): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _34.Metadata;
            };
            SendAuthorization: {
                encode(message: _32.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.SendAuthorization;
                fromJSON(object: any): _32.SendAuthorization;
                toJSON(message: _32.SendAuthorization): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _32.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _48.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.TxResponse;
                    fromJSON(object: any): _48.TxResponse;
                    toJSON(message: _48.TxResponse): unknown;
                    fromPartial<I extends unknown>(object: I): _48.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _48.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ABCIMessageLog;
                    fromJSON(object: any): _48.ABCIMessageLog;
                    toJSON(message: _48.ABCIMessageLog): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _48.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _48.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.StringEvent;
                    fromJSON(object: any): _48.StringEvent;
                    toJSON(message: _48.StringEvent): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _48.StringEvent;
                };
                Attribute: {
                    encode(message: _48.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Attribute;
                    fromJSON(object: any): _48.Attribute;
                    toJSON(message: _48.Attribute): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _48.Attribute;
                };
                GasInfo: {
                    encode(message: _48.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.GasInfo;
                    fromJSON(object: any): _48.GasInfo;
                    toJSON(message: _48.GasInfo): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _48.GasInfo;
                };
                Result: {
                    encode(message: _48.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Result;
                    fromJSON(object: any): _48.Result;
                    toJSON(message: _48.Result): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _48.Result;
                };
                SimulationResponse: {
                    encode(message: _48.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.SimulationResponse;
                    fromJSON(object: any): _48.SimulationResponse;
                    toJSON(message: _48.SimulationResponse): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _48.SimulationResponse;
                };
                MsgData: {
                    encode(message: _48.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgData;
                    fromJSON(object: any): _48.MsgData;
                    toJSON(message: _48.MsgData): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _48.MsgData;
                };
                TxMsgData: {
                    encode(message: _48.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.TxMsgData;
                    fromJSON(object: any): _48.TxMsgData;
                    toJSON(message: _48.TxMsgData): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _48.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _48.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.SearchTxsResult;
                    fromJSON(object: any): _48.SearchTxsResult;
                    toJSON(message: _48.SearchTxsResult): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _48.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _50.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Pairs;
                    fromJSON(object: any): _50.Pairs;
                    toJSON(message: _50.Pairs): unknown;
                    fromPartial<I extends unknown>(object: I): _50.Pairs;
                };
                Pair: {
                    encode(message: _50.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Pair;
                    fromJSON(object: any): _50.Pair;
                    toJSON(message: _50.Pair): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _50.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _52.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.PageRequest;
                    fromJSON(object: any): _52.PageRequest;
                    toJSON(message: _52.PageRequest): unknown;
                    fromPartial<I extends unknown>(object: I): _52.PageRequest;
                };
                PageResponse: {
                    encode(message: _52.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.PageResponse;
                    fromJSON(object: any): _52.PageResponse;
                    toJSON(message: _52.PageResponse): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _52.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _54.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.ListAllInterfacesRequest;
                    fromJSON(_: any): _54.ListAllInterfacesRequest;
                    toJSON(_: _54.ListAllInterfacesRequest): unknown;
                    fromPartial<I extends unknown>(_: I): _54.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _54.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.ListAllInterfacesResponse;
                    fromJSON(object: any): _54.ListAllInterfacesResponse;
                    toJSON(message: _54.ListAllInterfacesResponse): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _54.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _54.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.ListImplementationsRequest;
                    fromJSON(object: any): _54.ListImplementationsRequest;
                    toJSON(message: _54.ListImplementationsRequest): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _54.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _54.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.ListImplementationsResponse;
                    fromJSON(object: any): _54.ListImplementationsResponse;
                    toJSON(message: _54.ListImplementationsResponse): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _54.ListImplementationsResponse;
                };
                ReflectionServiceClientImpl: typeof _54.ReflectionServiceClientImpl;
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _56.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.AppDescriptor;
                    fromJSON(object: any): _56.AppDescriptor;
                    toJSON(message: _56.AppDescriptor): unknown;
                    fromPartial<I extends unknown>(object: I): _56.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _56.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.TxDescriptor;
                    fromJSON(object: any): _56.TxDescriptor;
                    toJSON(message: _56.TxDescriptor): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _56.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _56.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.AuthnDescriptor;
                    fromJSON(object: any): _56.AuthnDescriptor;
                    toJSON(message: _56.AuthnDescriptor): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _56.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _56.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.SigningModeDescriptor;
                    fromJSON(object: any): _56.SigningModeDescriptor;
                    toJSON(message: _56.SigningModeDescriptor): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _56.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _56.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.ChainDescriptor;
                    fromJSON(object: any): _56.ChainDescriptor;
                    toJSON(message: _56.ChainDescriptor): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _56.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _56.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.CodecDescriptor;
                    fromJSON(object: any): _56.CodecDescriptor;
                    toJSON(message: _56.CodecDescriptor): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _56.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _56.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.InterfaceDescriptor;
                    fromJSON(object: any): _56.InterfaceDescriptor;
                    toJSON(message: _56.InterfaceDescriptor): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _56.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _56.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _56.InterfaceImplementerDescriptor;
                    toJSON(message: _56.InterfaceImplementerDescriptor): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _56.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _56.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _56.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _56.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _56.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _56.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.ConfigurationDescriptor;
                    fromJSON(object: any): _56.ConfigurationDescriptor;
                    toJSON(message: _56.ConfigurationDescriptor): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _56.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _56.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgDescriptor;
                    fromJSON(object: any): _56.MsgDescriptor;
                    toJSON(message: _56.MsgDescriptor): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _56.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _56.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _56.GetAuthnDescriptorRequest;
                    toJSON(_: _56.GetAuthnDescriptorRequest): unknown;
                    fromPartial<I_11 extends unknown>(_: I_11): _56.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _56.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _56.GetAuthnDescriptorResponse;
                    toJSON(message: _56.GetAuthnDescriptorResponse): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _56.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _56.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GetChainDescriptorRequest;
                    fromJSON(_: any): _56.GetChainDescriptorRequest;
                    toJSON(_: _56.GetChainDescriptorRequest): unknown;
                    fromPartial<I_13 extends unknown>(_: I_13): _56.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _56.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GetChainDescriptorResponse;
                    fromJSON(object: any): _56.GetChainDescriptorResponse;
                    toJSON(message: _56.GetChainDescriptorResponse): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _56.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _56.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GetCodecDescriptorRequest;
                    fromJSON(_: any): _56.GetCodecDescriptorRequest;
                    toJSON(_: _56.GetCodecDescriptorRequest): unknown;
                    fromPartial<I_15 extends unknown>(_: I_15): _56.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _56.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GetCodecDescriptorResponse;
                    fromJSON(object: any): _56.GetCodecDescriptorResponse;
                    toJSON(message: _56.GetCodecDescriptorResponse): unknown;
                    fromPartial<I_16 extends unknown>(object: I_16): _56.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _56.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _56.GetConfigurationDescriptorRequest;
                    toJSON(_: _56.GetConfigurationDescriptorRequest): unknown;
                    fromPartial<I_17 extends unknown>(_: I_17): _56.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _56.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _56.GetConfigurationDescriptorResponse;
                    toJSON(message: _56.GetConfigurationDescriptorResponse): unknown;
                    fromPartial<I_18 extends unknown>(object: I_18): _56.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _56.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _56.GetQueryServicesDescriptorRequest;
                    toJSON(_: _56.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial<I_19 extends unknown>(_: I_19): _56.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _56.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _56.GetQueryServicesDescriptorResponse;
                    toJSON(message: _56.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial<I_20 extends unknown>(object: I_20): _56.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _56.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GetTxDescriptorRequest;
                    fromJSON(_: any): _56.GetTxDescriptorRequest;
                    toJSON(_: _56.GetTxDescriptorRequest): unknown;
                    fromPartial<I_21 extends unknown>(_: I_21): _56.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _56.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GetTxDescriptorResponse;
                    fromJSON(object: any): _56.GetTxDescriptorResponse;
                    toJSON(message: _56.GetTxDescriptorResponse): unknown;
                    fromPartial<I_22 extends unknown>(object: I_22): _56.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _56.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryServicesDescriptor;
                    fromJSON(object: any): _56.QueryServicesDescriptor;
                    toJSON(message: _56.QueryServicesDescriptor): unknown;
                    fromPartial<I_23 extends unknown>(object: I_23): _56.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _56.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryServiceDescriptor;
                    fromJSON(object: any): _56.QueryServiceDescriptor;
                    toJSON(message: _56.QueryServiceDescriptor): unknown;
                    fromPartial<I_24 extends unknown>(object: I_24): _56.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _56.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryMethodDescriptor;
                    fromJSON(object: any): _56.QueryMethodDescriptor;
                    toJSON(message: _56.QueryMethodDescriptor): unknown;
                    fromPartial<I_25 extends unknown>(object: I_25): _56.QueryMethodDescriptor;
                };
                ReflectionServiceClientImpl: typeof _56.ReflectionServiceClientImpl;
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _58.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Snapshot;
                    fromJSON(object: any): _58.Snapshot;
                    toJSON(message: _58.Snapshot): unknown;
                    fromPartial<I extends unknown>(object: I): _58.Snapshot;
                };
                Metadata: {
                    encode(message: _58.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Metadata;
                    fromJSON(object: any): _58.Metadata;
                    toJSON(message: _58.Metadata): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _58.Metadata;
                };
                SnapshotItem: {
                    encode(message: _58.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.SnapshotItem;
                    fromJSON(object: any): _58.SnapshotItem;
                    toJSON(message: _58.SnapshotItem): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _58.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _58.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.SnapshotStoreItem;
                    fromJSON(object: any): _58.SnapshotStoreItem;
                    toJSON(message: _58.SnapshotStoreItem): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _58.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _58.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.SnapshotIAVLItem;
                    fromJSON(object: any): _58.SnapshotIAVLItem;
                    toJSON(message: _58.SnapshotIAVLItem): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _58.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _58.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.SnapshotExtensionMeta;
                    fromJSON(object: any): _58.SnapshotExtensionMeta;
                    toJSON(message: _58.SnapshotExtensionMeta): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _58.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _58.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.SnapshotExtensionPayload;
                    fromJSON(object: any): _58.SnapshotExtensionPayload;
                    toJSON(message: _58.SnapshotExtensionPayload): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _58.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _58.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.SnapshotKVItem;
                    fromJSON(object: any): _58.SnapshotKVItem;
                    toJSON(message: _58.SnapshotKVItem): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _58.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _58.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.SnapshotSchema;
                    fromJSON(object: any): _58.SnapshotSchema;
                    toJSON(message: _58.SnapshotSchema): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _58.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _62.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.StoreKVPair;
                    fromJSON(object: any): _62.StoreKVPair;
                    toJSON(message: _62.StoreKVPair): unknown;
                    fromPartial<I extends unknown>(object: I): _62.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _60.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.CommitInfo;
                    fromJSON(object: any): _60.CommitInfo;
                    toJSON(message: _60.CommitInfo): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _60.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _60.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.StoreInfo;
                    fromJSON(object: any): _60.StoreInfo;
                    toJSON(message: _60.StoreInfo): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _60.StoreInfo;
                };
                CommitID: {
                    encode(message: _60.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.CommitID;
                    fromJSON(object: any): _60.CommitID;
                    toJSON(message: _60.CommitID): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _60.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                GetValidatorSetByHeightRequest: {
                    encode(message: _64.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _64.GetValidatorSetByHeightRequest;
                    toJSON(message: _64.GetValidatorSetByHeightRequest): unknown;
                    fromPartial<I extends unknown>(object: I): _64.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _64.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _64.GetValidatorSetByHeightResponse;
                    toJSON(message: _64.GetValidatorSetByHeightResponse): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _64.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _64.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _64.GetLatestValidatorSetRequest;
                    toJSON(message: _64.GetLatestValidatorSetRequest): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _64.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _64.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _64.GetLatestValidatorSetResponse;
                    toJSON(message: _64.GetLatestValidatorSetResponse): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _64.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _64.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Validator;
                    fromJSON(object: any): _64.Validator;
                    toJSON(message: _64.Validator): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _64.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _64.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GetBlockByHeightRequest;
                    fromJSON(object: any): _64.GetBlockByHeightRequest;
                    toJSON(message: _64.GetBlockByHeightRequest): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _64.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _64.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GetBlockByHeightResponse;
                    fromJSON(object: any): _64.GetBlockByHeightResponse;
                    toJSON(message: _64.GetBlockByHeightResponse): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _64.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _64.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GetLatestBlockRequest;
                    fromJSON(_: any): _64.GetLatestBlockRequest;
                    toJSON(_: _64.GetLatestBlockRequest): unknown;
                    fromPartial<I_7 extends unknown>(_: I_7): _64.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _64.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GetLatestBlockResponse;
                    fromJSON(object: any): _64.GetLatestBlockResponse;
                    toJSON(message: _64.GetLatestBlockResponse): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _64.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _64.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GetSyncingRequest;
                    fromJSON(_: any): _64.GetSyncingRequest;
                    toJSON(_: _64.GetSyncingRequest): unknown;
                    fromPartial<I_9 extends unknown>(_: I_9): _64.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _64.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GetSyncingResponse;
                    fromJSON(object: any): _64.GetSyncingResponse;
                    toJSON(message: _64.GetSyncingResponse): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _64.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _64.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GetNodeInfoRequest;
                    fromJSON(_: any): _64.GetNodeInfoRequest;
                    toJSON(_: _64.GetNodeInfoRequest): unknown;
                    fromPartial<I_11 extends unknown>(_: I_11): _64.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _64.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GetNodeInfoResponse;
                    fromJSON(object: any): _64.GetNodeInfoResponse;
                    toJSON(message: _64.GetNodeInfoResponse): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _64.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _64.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.VersionInfo;
                    fromJSON(object: any): _64.VersionInfo;
                    toJSON(message: _64.VersionInfo): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _64.VersionInfo;
                };
                Module: {
                    encode(message: _64.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Module;
                    fromJSON(object: any): _64.Module;
                    toJSON(message: _64.Module): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _64.Module;
                };
                ServiceClientImpl: typeof _64.ServiceClientImpl;
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _66.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Coin;
                fromJSON(object: any): _66.Coin;
                toJSON(message: _66.Coin): unknown;
                fromPartial<I extends unknown>(object: I): _66.Coin;
            };
            DecCoin: {
                encode(message: _66.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.DecCoin;
                fromJSON(object: any): _66.DecCoin;
                toJSON(message: _66.DecCoin): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _66.DecCoin;
            };
            IntProto: {
                encode(message: _66.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.IntProto;
                fromJSON(object: any): _66.IntProto;
                toJSON(message: _66.IntProto): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _66.IntProto;
            };
            DecProto: {
                encode(message: _66.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.DecProto;
                fromJSON(object: any): _66.DecProto;
                toJSON(message: _66.DecProto): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _66.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _70.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.GenesisOwners;
                fromJSON(object: any): _70.GenesisOwners;
                toJSON(message: _70.GenesisOwners): unknown;
                fromPartial<I extends unknown>(object: I): _70.GenesisOwners;
            };
            GenesisState: {
                encode(message: _70.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.GenesisState;
                fromJSON(object: any): _70.GenesisState;
                toJSON(message: _70.GenesisState): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _70.GenesisState;
            };
            Capability: {
                encode(message: _68.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Capability;
                fromJSON(object: any): _68.Capability;
                toJSON(message: _68.Capability): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _68.Capability;
            };
            Owner: {
                encode(message: _68.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Owner;
                fromJSON(object: any): _68.Owner;
                toJSON(message: _68.Owner): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _68.Owner;
            };
            CapabilityOwners: {
                encode(message: _68.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.CapabilityOwners;
                fromJSON(object: any): _68.CapabilityOwners;
                toJSON(message: _68.CapabilityOwners): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _68.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgVerifyInvariant: {
                encode(message: _74.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgVerifyInvariant;
                fromJSON(object: any): _74.MsgVerifyInvariant;
                toJSON(message: _74.MsgVerifyInvariant): unknown;
                fromPartial<I extends unknown>(object: I): _74.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _74.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgVerifyInvariantResponse;
                fromJSON(_: any): _74.MsgVerifyInvariantResponse;
                toJSON(_: _74.MsgVerifyInvariantResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _74.MsgVerifyInvariantResponse;
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _74.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _74.MsgVerifyInvariant;
                };
            };
            encoded: {
                verifyInvariant(value: _74.MsgVerifyInvariant): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                verifyInvariant(value: any): {
                    typeUrl: string;
                    value: _74.MsgVerifyInvariant;
                };
            };
            toJSON: {
                verifyInvariant(value: _74.MsgVerifyInvariant): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                verifyInvariant(value: _74.MsgVerifyInvariant): {
                    typeUrl: string;
                    value: _74.MsgVerifyInvariant;
                };
            };
            messages: {
                verifyInvariant(value: _74.MsgVerifyInvariant): {
                    typeUrl: string;
                    value: _74.MsgVerifyInvariant;
                };
            };
            GenesisState: {
                encode(message: _72.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GenesisState;
                fromJSON(object: any): _72.GenesisState;
                toJSON(message: _72.GenesisState): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _72.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _82.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.PubKey;
                fromJSON(object: any): _82.PubKey;
                toJSON(message: _82.PubKey): unknown;
                fromPartial<I extends unknown>(object: I): _82.PubKey;
            };
            PrivKey: {
                encode(message: _82.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.PrivKey;
                fromJSON(object: any): _82.PrivKey;
                toJSON(message: _82.PrivKey): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _82.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _84.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.BIP44Params;
                    fromJSON(object: any): _84.BIP44Params;
                    toJSON(message: _84.BIP44Params): unknown;
                    fromPartial<I extends unknown>(object: I): _84.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _86.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Record;
                    fromJSON(object: any): _86.Record;
                    toJSON(message: _86.Record): unknown;
                    fromPartial<I extends unknown>(object: I): _86.Record;
                };
                Record_Local: {
                    encode(message: _86.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Record_Local;
                    fromJSON(object: any): _86.Record_Local;
                    toJSON(message: _86.Record_Local): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _86.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _86.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Record_Ledger;
                    fromJSON(object: any): _86.Record_Ledger;
                    toJSON(message: _86.Record_Ledger): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _86.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _86.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Record_Multi;
                    fromJSON(_: any): _86.Record_Multi;
                    toJSON(_: _86.Record_Multi): unknown;
                    fromPartial<I_3 extends unknown>(_: I_3): _86.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _86.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Record_Offline;
                    fromJSON(_: any): _86.Record_Offline;
                    toJSON(_: _86.Record_Offline): unknown;
                    fromPartial<I_4 extends unknown>(_: I_4): _86.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _88.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.LegacyAminoPubKey;
                fromJSON(object: any): _88.LegacyAminoPubKey;
                toJSON(message: _88.LegacyAminoPubKey): unknown;
                fromPartial<I extends unknown>(object: I): _88.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _90.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.PubKey;
                fromJSON(object: any): _90.PubKey;
                toJSON(message: _90.PubKey): unknown;
                fromPartial<I extends unknown>(object: I): _90.PubKey;
            };
            PrivKey: {
                encode(message: _90.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.PrivKey;
                fromJSON(object: any): _90.PrivKey;
                toJSON(message: _90.PrivKey): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _90.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _92.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.PubKey;
                fromJSON(object: any): _92.PubKey;
                toJSON(message: _92.PubKey): unknown;
                fromPartial<I extends unknown>(object: I): _92.PubKey;
            };
            PrivKey: {
                encode(message: _92.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.PrivKey;
                fromJSON(object: any): _92.PrivKey;
                toJSON(message: _92.PrivKey): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _92.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgSetWithdrawAddress: {
                encode(message: _100.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgSetWithdrawAddress;
                fromJSON(object: any): _100.MsgSetWithdrawAddress;
                toJSON(message: _100.MsgSetWithdrawAddress): unknown;
                fromPartial<I extends unknown>(object: I): _100.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _100.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _100.MsgSetWithdrawAddressResponse;
                toJSON(_: _100.MsgSetWithdrawAddressResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _100.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _100.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _100.MsgWithdrawDelegatorReward;
                toJSON(message: _100.MsgWithdrawDelegatorReward): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _100.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _100.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _100.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _100.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _100.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _100.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _100.MsgWithdrawValidatorCommission;
                toJSON(message: _100.MsgWithdrawValidatorCommission): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _100.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _100.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _100.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _100.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _100.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _100.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgFundCommunityPool;
                fromJSON(object: any): _100.MsgFundCommunityPool;
                toJSON(message: _100.MsgFundCommunityPool): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _100.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _100.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _100.MsgFundCommunityPoolResponse;
                toJSON(_: _100.MsgFundCommunityPoolResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _100.MsgFundCommunityPoolResponse;
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _100.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _100.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _100.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _100.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _100.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _100.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _100.MsgFundCommunityPool) => {
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
                    }) => _100.MsgFundCommunityPool;
                };
            };
            encoded: {
                setWithdrawAddress(value: _100.MsgSetWithdrawAddress): {
                    type_url: string;
                    value: Uint8Array;
                };
                withdrawDelegatorReward(value: _100.MsgWithdrawDelegatorReward): {
                    type_url: string;
                    value: Uint8Array;
                };
                withdrawValidatorCommission(value: _100.MsgWithdrawValidatorCommission): {
                    type_url: string;
                    value: Uint8Array;
                };
                fundCommunityPool(value: _100.MsgFundCommunityPool): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                setWithdrawAddress(value: any): {
                    typeUrl: string;
                    value: _100.MsgSetWithdrawAddress;
                };
                withdrawDelegatorReward(value: any): {
                    typeUrl: string;
                    value: _100.MsgWithdrawDelegatorReward;
                };
                withdrawValidatorCommission(value: any): {
                    typeUrl: string;
                    value: _100.MsgWithdrawValidatorCommission;
                };
                fundCommunityPool(value: any): {
                    typeUrl: string;
                    value: _100.MsgFundCommunityPool;
                };
            };
            toJSON: {
                setWithdrawAddress(value: _100.MsgSetWithdrawAddress): {
                    typeUrl: string;
                    value: unknown;
                };
                withdrawDelegatorReward(value: _100.MsgWithdrawDelegatorReward): {
                    typeUrl: string;
                    value: unknown;
                };
                withdrawValidatorCommission(value: _100.MsgWithdrawValidatorCommission): {
                    typeUrl: string;
                    value: unknown;
                };
                fundCommunityPool(value: _100.MsgFundCommunityPool): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                setWithdrawAddress(value: _100.MsgSetWithdrawAddress): {
                    typeUrl: string;
                    value: _100.MsgSetWithdrawAddress;
                };
                withdrawDelegatorReward(value: _100.MsgWithdrawDelegatorReward): {
                    typeUrl: string;
                    value: _100.MsgWithdrawDelegatorReward;
                };
                withdrawValidatorCommission(value: _100.MsgWithdrawValidatorCommission): {
                    typeUrl: string;
                    value: _100.MsgWithdrawValidatorCommission;
                };
                fundCommunityPool(value: _100.MsgFundCommunityPool): {
                    typeUrl: string;
                    value: _100.MsgFundCommunityPool;
                };
            };
            messages: {
                setWithdrawAddress(value: _100.MsgSetWithdrawAddress): {
                    typeUrl: string;
                    value: _100.MsgSetWithdrawAddress;
                };
                withdrawDelegatorReward(value: _100.MsgWithdrawDelegatorReward): {
                    typeUrl: string;
                    value: _100.MsgWithdrawDelegatorReward;
                };
                withdrawValidatorCommission(value: _100.MsgWithdrawValidatorCommission): {
                    typeUrl: string;
                    value: _100.MsgWithdrawValidatorCommission;
                };
                fundCommunityPool(value: _100.MsgFundCommunityPool): {
                    typeUrl: string;
                    value: _100.MsgFundCommunityPool;
                };
            };
            QueryParamsRequest: {
                encode(_: _98.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryParamsRequest;
                fromJSON(_: any): _98.QueryParamsRequest;
                toJSON(_: _98.QueryParamsRequest): unknown;
                fromPartial<I_8 extends unknown>(_: I_8): _98.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _98.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryParamsResponse;
                fromJSON(object: any): _98.QueryParamsResponse;
                toJSON(message: _98.QueryParamsResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _98.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _98.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _98.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _98.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _98.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _98.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _98.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _98.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _98.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _98.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryValidatorCommissionRequest;
                fromJSON(object: any): _98.QueryValidatorCommissionRequest;
                toJSON(message: _98.QueryValidatorCommissionRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _98.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _98.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryValidatorCommissionResponse;
                fromJSON(object: any): _98.QueryValidatorCommissionResponse;
                toJSON(message: _98.QueryValidatorCommissionResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _98.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _98.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryValidatorSlashesRequest;
                fromJSON(object: any): _98.QueryValidatorSlashesRequest;
                toJSON(message: _98.QueryValidatorSlashesRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _98.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _98.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryValidatorSlashesResponse;
                fromJSON(object: any): _98.QueryValidatorSlashesResponse;
                toJSON(message: _98.QueryValidatorSlashesResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _98.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _98.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryDelegationRewardsRequest;
                fromJSON(object: any): _98.QueryDelegationRewardsRequest;
                toJSON(message: _98.QueryDelegationRewardsRequest): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _98.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _98.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryDelegationRewardsResponse;
                fromJSON(object: any): _98.QueryDelegationRewardsResponse;
                toJSON(message: _98.QueryDelegationRewardsResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _98.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _98.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _98.QueryDelegationTotalRewardsRequest;
                toJSON(message: _98.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _98.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _98.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _98.QueryDelegationTotalRewardsResponse;
                toJSON(message: _98.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _98.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _98.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _98.QueryDelegatorValidatorsRequest;
                toJSON(message: _98.QueryDelegatorValidatorsRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _98.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _98.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _98.QueryDelegatorValidatorsResponse;
                toJSON(message: _98.QueryDelegatorValidatorsResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _98.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _98.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _98.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _98.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _98.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _98.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _98.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _98.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _98.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _98.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryCommunityPoolRequest;
                fromJSON(_: any): _98.QueryCommunityPoolRequest;
                toJSON(_: _98.QueryCommunityPoolRequest): unknown;
                fromPartial<I_24 extends unknown>(_: I_24): _98.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _98.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryCommunityPoolResponse;
                fromJSON(object: any): _98.QueryCommunityPoolResponse;
                toJSON(message: _98.QueryCommunityPoolResponse): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _98.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _96.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.DelegatorWithdrawInfo;
                fromJSON(object: any): _96.DelegatorWithdrawInfo;
                toJSON(message: _96.DelegatorWithdrawInfo): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _96.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _96.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _96.ValidatorOutstandingRewardsRecord;
                toJSON(message: _96.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _96.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _96.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _96.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _96.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _96.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _96.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _96.ValidatorHistoricalRewardsRecord;
                toJSON(message: _96.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _96.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _96.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _96.ValidatorCurrentRewardsRecord;
                toJSON(message: _96.ValidatorCurrentRewardsRecord): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _96.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _96.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.DelegatorStartingInfoRecord;
                fromJSON(object: any): _96.DelegatorStartingInfoRecord;
                toJSON(message: _96.DelegatorStartingInfoRecord): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _96.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _96.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ValidatorSlashEventRecord;
                fromJSON(object: any): _96.ValidatorSlashEventRecord;
                toJSON(message: _96.ValidatorSlashEventRecord): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _96.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _96.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GenesisState;
                fromJSON(object: any): _96.GenesisState;
                toJSON(message: _96.GenesisState): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _96.GenesisState;
            };
            Params: {
                encode(message: _94.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Params;
                fromJSON(object: any): _94.Params;
                toJSON(message: _94.Params): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _94.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _94.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ValidatorHistoricalRewards;
                fromJSON(object: any): _94.ValidatorHistoricalRewards;
                toJSON(message: _94.ValidatorHistoricalRewards): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _94.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _94.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ValidatorCurrentRewards;
                fromJSON(object: any): _94.ValidatorCurrentRewards;
                toJSON(message: _94.ValidatorCurrentRewards): unknown;
                fromPartial<I_36 extends unknown>(object: I_36): _94.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _94.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ValidatorAccumulatedCommission;
                fromJSON(object: any): _94.ValidatorAccumulatedCommission;
                toJSON(message: _94.ValidatorAccumulatedCommission): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _94.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _94.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ValidatorOutstandingRewards;
                fromJSON(object: any): _94.ValidatorOutstandingRewards;
                toJSON(message: _94.ValidatorOutstandingRewards): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _94.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _94.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ValidatorSlashEvent;
                fromJSON(object: any): _94.ValidatorSlashEvent;
                toJSON(message: _94.ValidatorSlashEvent): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _94.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _94.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ValidatorSlashEvents;
                fromJSON(object: any): _94.ValidatorSlashEvents;
                toJSON(message: _94.ValidatorSlashEvents): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _94.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _94.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.FeePool;
                fromJSON(object: any): _94.FeePool;
                toJSON(message: _94.FeePool): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _94.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _94.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.CommunityPoolSpendProposal;
                fromJSON(object: any): _94.CommunityPoolSpendProposal;
                toJSON(message: _94.CommunityPoolSpendProposal): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _94.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _94.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.DelegatorStartingInfo;
                fromJSON(object: any): _94.DelegatorStartingInfo;
                toJSON(message: _94.DelegatorStartingInfo): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _94.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _94.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.DelegationDelegatorReward;
                fromJSON(object: any): _94.DelegationDelegatorReward;
                toJSON(message: _94.DelegationDelegatorReward): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _94.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _94.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _94.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _94.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _94.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgSubmitEvidence: {
                encode(message: _114.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgSubmitEvidence;
                fromJSON(object: any): _114.MsgSubmitEvidence;
                toJSON(message: _114.MsgSubmitEvidence): unknown;
                fromPartial<I extends unknown>(object: I): _114.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _114.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _114.MsgSubmitEvidenceResponse;
                toJSON(message: _114.MsgSubmitEvidenceResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _114.MsgSubmitEvidenceResponse;
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _114.MsgSubmitEvidence) => {
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
                    }) => _114.MsgSubmitEvidence;
                };
            };
            encoded: {
                submitEvidence(value: _114.MsgSubmitEvidence): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                submitEvidence(value: any): {
                    typeUrl: string;
                    value: _114.MsgSubmitEvidence;
                };
            };
            toJSON: {
                submitEvidence(value: _114.MsgSubmitEvidence): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                submitEvidence(value: _114.MsgSubmitEvidence): {
                    typeUrl: string;
                    value: _114.MsgSubmitEvidence;
                };
            };
            messages: {
                submitEvidence(value: _114.MsgSubmitEvidence): {
                    typeUrl: string;
                    value: _114.MsgSubmitEvidence;
                };
            };
            QueryEvidenceRequest: {
                encode(message: _112.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryEvidenceRequest;
                fromJSON(object: any): _112.QueryEvidenceRequest;
                toJSON(message: _112.QueryEvidenceRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _112.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _112.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryEvidenceResponse;
                fromJSON(object: any): _112.QueryEvidenceResponse;
                toJSON(message: _112.QueryEvidenceResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _112.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _112.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryAllEvidenceRequest;
                fromJSON(object: any): _112.QueryAllEvidenceRequest;
                toJSON(message: _112.QueryAllEvidenceRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _112.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _112.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryAllEvidenceResponse;
                fromJSON(object: any): _112.QueryAllEvidenceResponse;
                toJSON(message: _112.QueryAllEvidenceResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _112.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _110.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.GenesisState;
                fromJSON(object: any): _110.GenesisState;
                toJSON(message: _110.GenesisState): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _110.GenesisState;
            };
            Equivocation: {
                encode(message: _108.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Equivocation;
                fromJSON(object: any): _108.Equivocation;
                toJSON(message: _108.Equivocation): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _108.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgGrantAllowance: {
                encode(message: _128.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.MsgGrantAllowance;
                fromJSON(object: any): _128.MsgGrantAllowance;
                toJSON(message: _128.MsgGrantAllowance): unknown;
                fromPartial<I extends unknown>(object: I): _128.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _128.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.MsgGrantAllowanceResponse;
                fromJSON(_: any): _128.MsgGrantAllowanceResponse;
                toJSON(_: _128.MsgGrantAllowanceResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _128.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _128.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.MsgRevokeAllowance;
                fromJSON(object: any): _128.MsgRevokeAllowance;
                toJSON(message: _128.MsgRevokeAllowance): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _128.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _128.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _128.MsgRevokeAllowanceResponse;
                toJSON(_: _128.MsgRevokeAllowanceResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _128.MsgRevokeAllowanceResponse;
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _128.MsgGrantAllowance) => {
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
                    }) => _128.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _128.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _128.MsgRevokeAllowance;
                };
            };
            encoded: {
                grantAllowance(value: _128.MsgGrantAllowance): {
                    type_url: string;
                    value: Uint8Array;
                };
                revokeAllowance(value: _128.MsgRevokeAllowance): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                grantAllowance(value: any): {
                    typeUrl: string;
                    value: _128.MsgGrantAllowance;
                };
                revokeAllowance(value: any): {
                    typeUrl: string;
                    value: _128.MsgRevokeAllowance;
                };
            };
            toJSON: {
                grantAllowance(value: _128.MsgGrantAllowance): {
                    typeUrl: string;
                    value: unknown;
                };
                revokeAllowance(value: _128.MsgRevokeAllowance): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                grantAllowance(value: _128.MsgGrantAllowance): {
                    typeUrl: string;
                    value: _128.MsgGrantAllowance;
                };
                revokeAllowance(value: _128.MsgRevokeAllowance): {
                    typeUrl: string;
                    value: _128.MsgRevokeAllowance;
                };
            };
            messages: {
                grantAllowance(value: _128.MsgGrantAllowance): {
                    typeUrl: string;
                    value: _128.MsgGrantAllowance;
                };
                revokeAllowance(value: _128.MsgRevokeAllowance): {
                    typeUrl: string;
                    value: _128.MsgRevokeAllowance;
                };
            };
            QueryAllowanceRequest: {
                encode(message: _126.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAllowanceRequest;
                fromJSON(object: any): _126.QueryAllowanceRequest;
                toJSON(message: _126.QueryAllowanceRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _126.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _126.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAllowanceResponse;
                fromJSON(object: any): _126.QueryAllowanceResponse;
                toJSON(message: _126.QueryAllowanceResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _126.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _126.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAllowancesRequest;
                fromJSON(object: any): _126.QueryAllowancesRequest;
                toJSON(message: _126.QueryAllowancesRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _126.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _126.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAllowancesResponse;
                fromJSON(object: any): _126.QueryAllowancesResponse;
                toJSON(message: _126.QueryAllowancesResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _126.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _126.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _126.QueryAllowancesByGranterRequest;
                toJSON(message: _126.QueryAllowancesByGranterRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _126.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _126.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _126.QueryAllowancesByGranterResponse;
                toJSON(message: _126.QueryAllowancesByGranterResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _126.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _124.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.GenesisState;
                fromJSON(object: any): _124.GenesisState;
                toJSON(message: _124.GenesisState): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _124.GenesisState;
            };
            BasicAllowance: {
                encode(message: _122.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.BasicAllowance;
                fromJSON(object: any): _122.BasicAllowance;
                toJSON(message: _122.BasicAllowance): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _122.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _122.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.PeriodicAllowance;
                fromJSON(object: any): _122.PeriodicAllowance;
                toJSON(message: _122.PeriodicAllowance): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _122.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _122.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.AllowedMsgAllowance;
                fromJSON(object: any): _122.AllowedMsgAllowance;
                toJSON(message: _122.AllowedMsgAllowance): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _122.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _122.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Grant;
                fromJSON(object: any): _122.Grant;
                toJSON(message: _122.Grant): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _122.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _136.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GenesisState;
                fromJSON(object: any): _136.GenesisState;
                toJSON(message: _136.GenesisState): unknown;
                fromPartial<I extends unknown>(object: I): _136.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgSubmitProposal: {
                encode(message: _144.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgSubmitProposal;
                fromJSON(object: any): _144.MsgSubmitProposal;
                toJSON(message: _144.MsgSubmitProposal): unknown;
                fromPartial<I extends unknown>(object: I): _144.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _144.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgSubmitProposalResponse;
                fromJSON(object: any): _144.MsgSubmitProposalResponse;
                toJSON(message: _144.MsgSubmitProposalResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _144.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _144.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgExecLegacyContent;
                fromJSON(object: any): _144.MsgExecLegacyContent;
                toJSON(message: _144.MsgExecLegacyContent): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _144.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _144.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgExecLegacyContentResponse;
                fromJSON(_: any): _144.MsgExecLegacyContentResponse;
                toJSON(_: _144.MsgExecLegacyContentResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _144.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _144.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgVote;
                fromJSON(object: any): _144.MsgVote;
                toJSON(message: _144.MsgVote): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _144.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _144.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgVoteResponse;
                fromJSON(_: any): _144.MsgVoteResponse;
                toJSON(_: _144.MsgVoteResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _144.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _144.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgVoteWeighted;
                fromJSON(object: any): _144.MsgVoteWeighted;
                toJSON(message: _144.MsgVoteWeighted): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _144.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _144.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgVoteWeightedResponse;
                fromJSON(_: any): _144.MsgVoteWeightedResponse;
                toJSON(_: _144.MsgVoteWeightedResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _144.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _144.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgDeposit;
                fromJSON(object: any): _144.MsgDeposit;
                toJSON(message: _144.MsgDeposit): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _144.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _144.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgDepositResponse;
                fromJSON(_: any): _144.MsgDepositResponse;
                toJSON(_: _144.MsgDepositResponse): unknown;
                fromPartial<I_9 extends unknown>(_: I_9): _144.MsgDepositResponse;
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _144.MsgSubmitProposal) => {
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
                    }) => _144.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _144.MsgExecLegacyContent) => {
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
                    }) => _144.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _144.MsgVote) => {
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
                    }) => _144.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _144.MsgVoteWeighted) => {
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
                    }) => _144.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _144.MsgDeposit) => {
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
                    }) => _144.MsgDeposit;
                };
            };
            encoded: {
                submitProposal(value: _144.MsgSubmitProposal): {
                    type_url: string;
                    value: Uint8Array;
                };
                execLegacyContent(value: _144.MsgExecLegacyContent): {
                    type_url: string;
                    value: Uint8Array;
                };
                vote(value: _144.MsgVote): {
                    type_url: string;
                    value: Uint8Array;
                };
                voteWeighted(value: _144.MsgVoteWeighted): {
                    type_url: string;
                    value: Uint8Array;
                };
                deposit(value: _144.MsgDeposit): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                submitProposal(value: any): {
                    typeUrl: string;
                    value: _144.MsgSubmitProposal;
                };
                execLegacyContent(value: any): {
                    typeUrl: string;
                    value: _144.MsgExecLegacyContent;
                };
                vote(value: any): {
                    typeUrl: string;
                    value: _144.MsgVote;
                };
                voteWeighted(value: any): {
                    typeUrl: string;
                    value: _144.MsgVoteWeighted;
                };
                deposit(value: any): {
                    typeUrl: string;
                    value: _144.MsgDeposit;
                };
            };
            toJSON: {
                submitProposal(value: _144.MsgSubmitProposal): {
                    typeUrl: string;
                    value: unknown;
                };
                execLegacyContent(value: _144.MsgExecLegacyContent): {
                    typeUrl: string;
                    value: unknown;
                };
                vote(value: _144.MsgVote): {
                    typeUrl: string;
                    value: unknown;
                };
                voteWeighted(value: _144.MsgVoteWeighted): {
                    typeUrl: string;
                    value: unknown;
                };
                deposit(value: _144.MsgDeposit): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                submitProposal(value: _144.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _144.MsgSubmitProposal;
                };
                execLegacyContent(value: _144.MsgExecLegacyContent): {
                    typeUrl: string;
                    value: _144.MsgExecLegacyContent;
                };
                vote(value: _144.MsgVote): {
                    typeUrl: string;
                    value: _144.MsgVote;
                };
                voteWeighted(value: _144.MsgVoteWeighted): {
                    typeUrl: string;
                    value: _144.MsgVoteWeighted;
                };
                deposit(value: _144.MsgDeposit): {
                    typeUrl: string;
                    value: _144.MsgDeposit;
                };
            };
            messages: {
                submitProposal(value: _144.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _144.MsgSubmitProposal;
                };
                execLegacyContent(value: _144.MsgExecLegacyContent): {
                    typeUrl: string;
                    value: _144.MsgExecLegacyContent;
                };
                vote(value: _144.MsgVote): {
                    typeUrl: string;
                    value: _144.MsgVote;
                };
                voteWeighted(value: _144.MsgVoteWeighted): {
                    typeUrl: string;
                    value: _144.MsgVoteWeighted;
                };
                deposit(value: _144.MsgDeposit): {
                    typeUrl: string;
                    value: _144.MsgDeposit;
                };
            };
            QueryProposalRequest: {
                encode(message: _142.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryProposalRequest;
                fromJSON(object: any): _142.QueryProposalRequest;
                toJSON(message: _142.QueryProposalRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _142.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _142.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryProposalResponse;
                fromJSON(object: any): _142.QueryProposalResponse;
                toJSON(message: _142.QueryProposalResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _142.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _142.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryProposalsRequest;
                fromJSON(object: any): _142.QueryProposalsRequest;
                toJSON(message: _142.QueryProposalsRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _142.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _142.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryProposalsResponse;
                fromJSON(object: any): _142.QueryProposalsResponse;
                toJSON(message: _142.QueryProposalsResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _142.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _142.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryVoteRequest;
                fromJSON(object: any): _142.QueryVoteRequest;
                toJSON(message: _142.QueryVoteRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _142.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _142.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryVoteResponse;
                fromJSON(object: any): _142.QueryVoteResponse;
                toJSON(message: _142.QueryVoteResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _142.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _142.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryVotesRequest;
                fromJSON(object: any): _142.QueryVotesRequest;
                toJSON(message: _142.QueryVotesRequest): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _142.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _142.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryVotesResponse;
                fromJSON(object: any): _142.QueryVotesResponse;
                toJSON(message: _142.QueryVotesResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _142.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _142.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryParamsRequest;
                fromJSON(object: any): _142.QueryParamsRequest;
                toJSON(message: _142.QueryParamsRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _142.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _142.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryParamsResponse;
                fromJSON(object: any): _142.QueryParamsResponse;
                toJSON(message: _142.QueryParamsResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _142.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _142.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryDepositRequest;
                fromJSON(object: any): _142.QueryDepositRequest;
                toJSON(message: _142.QueryDepositRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _142.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _142.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryDepositResponse;
                fromJSON(object: any): _142.QueryDepositResponse;
                toJSON(message: _142.QueryDepositResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _142.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _142.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryDepositsRequest;
                fromJSON(object: any): _142.QueryDepositsRequest;
                toJSON(message: _142.QueryDepositsRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _142.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _142.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryDepositsResponse;
                fromJSON(object: any): _142.QueryDepositsResponse;
                toJSON(message: _142.QueryDepositsResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _142.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _142.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryTallyResultRequest;
                fromJSON(object: any): _142.QueryTallyResultRequest;
                toJSON(message: _142.QueryTallyResultRequest): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _142.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _142.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryTallyResultResponse;
                fromJSON(object: any): _142.QueryTallyResultResponse;
                toJSON(message: _142.QueryTallyResultResponse): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _142.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _140.VoteOption;
            voteOptionToJSON(object: _140.VoteOption): string;
            proposalStatusFromJSON(object: any): _140.ProposalStatus;
            proposalStatusToJSON(object: _140.ProposalStatus): string;
            VoteOption: typeof _140.VoteOption;
            ProposalStatus: typeof _140.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _140.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.WeightedVoteOption;
                fromJSON(object: any): _140.WeightedVoteOption;
                toJSON(message: _140.WeightedVoteOption): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _140.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _140.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Deposit;
                fromJSON(object: any): _140.Deposit;
                toJSON(message: _140.Deposit): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _140.Deposit;
            };
            Proposal: {
                encode(message: _140.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Proposal;
                fromJSON(object: any): _140.Proposal;
                toJSON(message: _140.Proposal): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _140.Proposal;
            };
            TallyResult: {
                encode(message: _140.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.TallyResult;
                fromJSON(object: any): _140.TallyResult;
                toJSON(message: _140.TallyResult): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _140.TallyResult;
            };
            Vote: {
                encode(message: _140.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Vote;
                fromJSON(object: any): _140.Vote;
                toJSON(message: _140.Vote): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _140.Vote;
            };
            DepositParams: {
                encode(message: _140.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.DepositParams;
                fromJSON(object: any): _140.DepositParams;
                toJSON(message: _140.DepositParams): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _140.DepositParams;
            };
            VotingParams: {
                encode(message: _140.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.VotingParams;
                fromJSON(object: any): _140.VotingParams;
                toJSON(message: _140.VotingParams): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _140.VotingParams;
            };
            TallyParams: {
                encode(message: _140.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.TallyParams;
                fromJSON(object: any): _140.TallyParams;
                toJSON(message: _140.TallyParams): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _140.TallyParams;
            };
            GenesisState: {
                encode(message: _138.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.GenesisState;
                fromJSON(object: any): _138.GenesisState;
                toJSON(message: _138.GenesisState): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _138.GenesisState;
            };
        };
        const v1beta1: {
            MsgSubmitProposal: {
                encode(message: _158.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgSubmitProposal;
                fromJSON(object: any): _158.MsgSubmitProposal;
                toJSON(message: _158.MsgSubmitProposal): unknown;
                fromPartial<I extends unknown>(object: I): _158.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _158.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgSubmitProposalResponse;
                fromJSON(object: any): _158.MsgSubmitProposalResponse;
                toJSON(message: _158.MsgSubmitProposalResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _158.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _158.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgVote;
                fromJSON(object: any): _158.MsgVote;
                toJSON(message: _158.MsgVote): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _158.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _158.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgVoteResponse;
                fromJSON(_: any): _158.MsgVoteResponse;
                toJSON(_: _158.MsgVoteResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _158.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _158.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgVoteWeighted;
                fromJSON(object: any): _158.MsgVoteWeighted;
                toJSON(message: _158.MsgVoteWeighted): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _158.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _158.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgVoteWeightedResponse;
                fromJSON(_: any): _158.MsgVoteWeightedResponse;
                toJSON(_: _158.MsgVoteWeightedResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _158.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _158.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgDeposit;
                fromJSON(object: any): _158.MsgDeposit;
                toJSON(message: _158.MsgDeposit): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _158.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _158.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgDepositResponse;
                fromJSON(_: any): _158.MsgDepositResponse;
                toJSON(_: _158.MsgDepositResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _158.MsgDepositResponse;
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _158.MsgSubmitProposal) => {
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
                    }) => _158.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _158.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _158.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _158.MsgVoteWeighted) => {
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
                    }) => _158.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _158.MsgDeposit) => {
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
                    }) => _158.MsgDeposit;
                };
            };
            encoded: {
                submitProposal(value: _158.MsgSubmitProposal): {
                    type_url: string;
                    value: Uint8Array;
                };
                vote(value: _158.MsgVote): {
                    type_url: string;
                    value: Uint8Array;
                };
                voteWeighted(value: _158.MsgVoteWeighted): {
                    type_url: string;
                    value: Uint8Array;
                };
                deposit(value: _158.MsgDeposit): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                submitProposal(value: any): {
                    typeUrl: string;
                    value: _158.MsgSubmitProposal;
                };
                vote(value: any): {
                    typeUrl: string;
                    value: _158.MsgVote;
                };
                voteWeighted(value: any): {
                    typeUrl: string;
                    value: _158.MsgVoteWeighted;
                };
                deposit(value: any): {
                    typeUrl: string;
                    value: _158.MsgDeposit;
                };
            };
            toJSON: {
                submitProposal(value: _158.MsgSubmitProposal): {
                    typeUrl: string;
                    value: unknown;
                };
                vote(value: _158.MsgVote): {
                    typeUrl: string;
                    value: unknown;
                };
                voteWeighted(value: _158.MsgVoteWeighted): {
                    typeUrl: string;
                    value: unknown;
                };
                deposit(value: _158.MsgDeposit): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                submitProposal(value: _158.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _158.MsgSubmitProposal;
                };
                vote(value: _158.MsgVote): {
                    typeUrl: string;
                    value: _158.MsgVote;
                };
                voteWeighted(value: _158.MsgVoteWeighted): {
                    typeUrl: string;
                    value: _158.MsgVoteWeighted;
                };
                deposit(value: _158.MsgDeposit): {
                    typeUrl: string;
                    value: _158.MsgDeposit;
                };
            };
            messages: {
                submitProposal(value: _158.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _158.MsgSubmitProposal;
                };
                vote(value: _158.MsgVote): {
                    typeUrl: string;
                    value: _158.MsgVote;
                };
                voteWeighted(value: _158.MsgVoteWeighted): {
                    typeUrl: string;
                    value: _158.MsgVoteWeighted;
                };
                deposit(value: _158.MsgDeposit): {
                    typeUrl: string;
                    value: _158.MsgDeposit;
                };
            };
            QueryProposalRequest: {
                encode(message: _156.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryProposalRequest;
                fromJSON(object: any): _156.QueryProposalRequest;
                toJSON(message: _156.QueryProposalRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _156.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _156.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryProposalResponse;
                fromJSON(object: any): _156.QueryProposalResponse;
                toJSON(message: _156.QueryProposalResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _156.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _156.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryProposalsRequest;
                fromJSON(object: any): _156.QueryProposalsRequest;
                toJSON(message: _156.QueryProposalsRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _156.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _156.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryProposalsResponse;
                fromJSON(object: any): _156.QueryProposalsResponse;
                toJSON(message: _156.QueryProposalsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _156.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _156.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryVoteRequest;
                fromJSON(object: any): _156.QueryVoteRequest;
                toJSON(message: _156.QueryVoteRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _156.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _156.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryVoteResponse;
                fromJSON(object: any): _156.QueryVoteResponse;
                toJSON(message: _156.QueryVoteResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _156.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _156.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryVotesRequest;
                fromJSON(object: any): _156.QueryVotesRequest;
                toJSON(message: _156.QueryVotesRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _156.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _156.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryVotesResponse;
                fromJSON(object: any): _156.QueryVotesResponse;
                toJSON(message: _156.QueryVotesResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _156.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _156.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryParamsRequest;
                fromJSON(object: any): _156.QueryParamsRequest;
                toJSON(message: _156.QueryParamsRequest): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _156.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _156.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryParamsResponse;
                fromJSON(object: any): _156.QueryParamsResponse;
                toJSON(message: _156.QueryParamsResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _156.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _156.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryDepositRequest;
                fromJSON(object: any): _156.QueryDepositRequest;
                toJSON(message: _156.QueryDepositRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _156.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _156.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryDepositResponse;
                fromJSON(object: any): _156.QueryDepositResponse;
                toJSON(message: _156.QueryDepositResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _156.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _156.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryDepositsRequest;
                fromJSON(object: any): _156.QueryDepositsRequest;
                toJSON(message: _156.QueryDepositsRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _156.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _156.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryDepositsResponse;
                fromJSON(object: any): _156.QueryDepositsResponse;
                toJSON(message: _156.QueryDepositsResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _156.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _156.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryTallyResultRequest;
                fromJSON(object: any): _156.QueryTallyResultRequest;
                toJSON(message: _156.QueryTallyResultRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _156.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _156.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryTallyResultResponse;
                fromJSON(object: any): _156.QueryTallyResultResponse;
                toJSON(message: _156.QueryTallyResultResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _156.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _154.VoteOption;
            voteOptionToJSON(object: _154.VoteOption): string;
            proposalStatusFromJSON(object: any): _154.ProposalStatus;
            proposalStatusToJSON(object: _154.ProposalStatus): string;
            VoteOption: typeof _154.VoteOption;
            ProposalStatus: typeof _154.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _154.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.WeightedVoteOption;
                fromJSON(object: any): _154.WeightedVoteOption;
                toJSON(message: _154.WeightedVoteOption): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _154.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _154.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.TextProposal;
                fromJSON(object: any): _154.TextProposal;
                toJSON(message: _154.TextProposal): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _154.TextProposal;
            };
            Deposit: {
                encode(message: _154.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.Deposit;
                fromJSON(object: any): _154.Deposit;
                toJSON(message: _154.Deposit): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _154.Deposit;
            };
            Proposal: {
                encode(message: _154.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.Proposal;
                fromJSON(object: any): _154.Proposal;
                toJSON(message: _154.Proposal): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _154.Proposal;
            };
            TallyResult: {
                encode(message: _154.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.TallyResult;
                fromJSON(object: any): _154.TallyResult;
                toJSON(message: _154.TallyResult): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _154.TallyResult;
            };
            Vote: {
                encode(message: _154.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.Vote;
                fromJSON(object: any): _154.Vote;
                toJSON(message: _154.Vote): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _154.Vote;
            };
            DepositParams: {
                encode(message: _154.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.DepositParams;
                fromJSON(object: any): _154.DepositParams;
                toJSON(message: _154.DepositParams): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _154.DepositParams;
            };
            VotingParams: {
                encode(message: _154.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.VotingParams;
                fromJSON(object: any): _154.VotingParams;
                toJSON(message: _154.VotingParams): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _154.VotingParams;
            };
            TallyParams: {
                encode(message: _154.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.TallyParams;
                fromJSON(object: any): _154.TallyParams;
                toJSON(message: _154.TallyParams): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _154.TallyParams;
            };
            GenesisState: {
                encode(message: _152.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.GenesisState;
                fromJSON(object: any): _152.GenesisState;
                toJSON(message: _152.GenesisState): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _152.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            voteOptionFromJSON(object: any): _180.VoteOption;
            voteOptionToJSON(object: _180.VoteOption): string;
            proposalStatusFromJSON(object: any): _180.ProposalStatus;
            proposalStatusToJSON(object: _180.ProposalStatus): string;
            proposalResultFromJSON(object: any): _180.ProposalResult;
            proposalResultToJSON(object: _180.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _180.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _180.ProposalExecutorResult): string;
            VoteOption: typeof _180.VoteOption;
            ProposalStatus: typeof _180.ProposalStatus;
            ProposalResult: typeof _180.ProposalResult;
            ProposalExecutorResult: typeof _180.ProposalExecutorResult;
            Member: {
                encode(message: _180.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Member;
                fromJSON(object: any): _180.Member;
                toJSON(message: _180.Member): unknown;
                fromPartial<I extends unknown>(object: I): _180.Member;
            };
            Members: {
                encode(message: _180.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Members;
                fromJSON(object: any): _180.Members;
                toJSON(message: _180.Members): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _180.Members;
            };
            ThresholdDecisionPolicy: {
                encode(message: _180.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ThresholdDecisionPolicy;
                fromJSON(object: any): _180.ThresholdDecisionPolicy;
                toJSON(message: _180.ThresholdDecisionPolicy): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _180.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _180.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.PercentageDecisionPolicy;
                fromJSON(object: any): _180.PercentageDecisionPolicy;
                toJSON(message: _180.PercentageDecisionPolicy): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _180.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _180.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.DecisionPolicyWindows;
                fromJSON(object: any): _180.DecisionPolicyWindows;
                toJSON(message: _180.DecisionPolicyWindows): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _180.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _180.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.GroupInfo;
                fromJSON(object: any): _180.GroupInfo;
                toJSON(message: _180.GroupInfo): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _180.GroupInfo;
            };
            GroupMember: {
                encode(message: _180.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.GroupMember;
                fromJSON(object: any): _180.GroupMember;
                toJSON(message: _180.GroupMember): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _180.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _180.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.GroupPolicyInfo;
                fromJSON(object: any): _180.GroupPolicyInfo;
                toJSON(message: _180.GroupPolicyInfo): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _180.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _180.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Proposal;
                fromJSON(object: any): _180.Proposal;
                toJSON(message: _180.Proposal): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _180.Proposal;
            };
            TallyResult: {
                encode(message: _180.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.TallyResult;
                fromJSON(object: any): _180.TallyResult;
                toJSON(message: _180.TallyResult): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _180.TallyResult;
            };
            Vote: {
                encode(message: _180.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Vote;
                fromJSON(object: any): _180.Vote;
                toJSON(message: _180.Vote): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _180.Vote;
            };
            execFromJSON(object: any): _172.Exec;
            execToJSON(object: _172.Exec): string;
            Exec: typeof _172.Exec;
            MsgCreateGroup: {
                encode(message: _172.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgCreateGroup;
                fromJSON(object: any): _172.MsgCreateGroup;
                toJSON(message: _172.MsgCreateGroup): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _172.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _172.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgCreateGroupResponse;
                fromJSON(object: any): _172.MsgCreateGroupResponse;
                toJSON(message: _172.MsgCreateGroupResponse): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _172.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _172.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgUpdateGroupMembers;
                fromJSON(object: any): _172.MsgUpdateGroupMembers;
                toJSON(message: _172.MsgUpdateGroupMembers): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _172.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _172.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _172.MsgUpdateGroupMembersResponse;
                toJSON(_: _172.MsgUpdateGroupMembersResponse): unknown;
                fromPartial<I_14 extends unknown>(_: I_14): _172.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _172.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgUpdateGroupAdmin;
                fromJSON(object: any): _172.MsgUpdateGroupAdmin;
                toJSON(message: _172.MsgUpdateGroupAdmin): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _172.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _172.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _172.MsgUpdateGroupAdminResponse;
                toJSON(_: _172.MsgUpdateGroupAdminResponse): unknown;
                fromPartial<I_16 extends unknown>(_: I_16): _172.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _172.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgUpdateGroupMetadata;
                fromJSON(object: any): _172.MsgUpdateGroupMetadata;
                toJSON(message: _172.MsgUpdateGroupMetadata): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _172.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _172.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _172.MsgUpdateGroupMetadataResponse;
                toJSON(_: _172.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial<I_18 extends unknown>(_: I_18): _172.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _172.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgCreateGroupPolicy;
                fromJSON(object: any): _172.MsgCreateGroupPolicy;
                toJSON(message: _172.MsgCreateGroupPolicy): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _172.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _172.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _172.MsgCreateGroupPolicyResponse;
                toJSON(message: _172.MsgCreateGroupPolicyResponse): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _172.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _172.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _172.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _172.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _172.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _172.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _172.MsgCreateGroupWithPolicy;
                toJSON(message: _172.MsgCreateGroupWithPolicy): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _172.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _172.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _172.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _172.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _172.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _172.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _172.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _172.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial<I_24 extends unknown>(_: I_24): _172.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _172.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _172.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _172.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _172.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _172.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _172.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _172.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial<I_26 extends unknown>(_: I_26): _172.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _172.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _172.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _172.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _172.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _172.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _172.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _172.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial<I_28 extends unknown>(_: I_28): _172.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _172.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgSubmitProposal;
                fromJSON(object: any): _172.MsgSubmitProposal;
                toJSON(message: _172.MsgSubmitProposal): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _172.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _172.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgSubmitProposalResponse;
                fromJSON(object: any): _172.MsgSubmitProposalResponse;
                toJSON(message: _172.MsgSubmitProposalResponse): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _172.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _172.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgWithdrawProposal;
                fromJSON(object: any): _172.MsgWithdrawProposal;
                toJSON(message: _172.MsgWithdrawProposal): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _172.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _172.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgWithdrawProposalResponse;
                fromJSON(_: any): _172.MsgWithdrawProposalResponse;
                toJSON(_: _172.MsgWithdrawProposalResponse): unknown;
                fromPartial<I_32 extends unknown>(_: I_32): _172.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _172.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgVote;
                fromJSON(object: any): _172.MsgVote;
                toJSON(message: _172.MsgVote): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _172.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _172.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgVoteResponse;
                fromJSON(_: any): _172.MsgVoteResponse;
                toJSON(_: _172.MsgVoteResponse): unknown;
                fromPartial<I_34 extends unknown>(_: I_34): _172.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _172.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgExec;
                fromJSON(object: any): _172.MsgExec;
                toJSON(message: _172.MsgExec): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _172.MsgExec;
            };
            MsgExecResponse: {
                encode(_: _172.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgExecResponse;
                fromJSON(_: any): _172.MsgExecResponse;
                toJSON(_: _172.MsgExecResponse): unknown;
                fromPartial<I_36 extends unknown>(_: I_36): _172.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _172.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgLeaveGroup;
                fromJSON(object: any): _172.MsgLeaveGroup;
                toJSON(message: _172.MsgLeaveGroup): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _172.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _172.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgLeaveGroupResponse;
                fromJSON(_: any): _172.MsgLeaveGroupResponse;
                toJSON(_: _172.MsgLeaveGroupResponse): unknown;
                fromPartial<I_38 extends unknown>(_: I_38): _172.MsgLeaveGroupResponse;
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _172.MsgCreateGroup) => {
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
                    }) => _172.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _172.MsgUpdateGroupMembers) => {
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
                    }) => _172.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _172.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _172.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _172.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _172.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _172.MsgCreateGroupPolicy) => {
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
                    }) => _172.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _172.MsgCreateGroupWithPolicy) => {
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
                    }) => _172.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, address, newAdmin }: _172.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, address, new_admin }: {
                        admin: string;
                        address: string;
                        new_admin: string;
                    }) => _172.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, address, decisionPolicy }: _172.MsgUpdateGroupPolicyDecisionPolicy) => {
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
                    }) => _172.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, address, metadata }: _172.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, address, metadata }: {
                        admin: string;
                        address: string;
                        metadata: string;
                    }) => _172.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ address, proposers, metadata, messages, exec }: _172.MsgSubmitProposal) => {
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
                    }) => _172.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _172.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _172.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _172.MsgVote) => {
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
                    }) => _172.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, signer }: _172.MsgExec) => {
                        proposal_id: string;
                        signer: string;
                    };
                    fromAmino: ({ proposal_id, signer }: {
                        proposal_id: string;
                        signer: string;
                    }) => _172.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _172.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _172.MsgLeaveGroup;
                };
            };
            encoded: {
                createGroup(value: _172.MsgCreateGroup): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupMembers(value: _172.MsgUpdateGroupMembers): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupAdmin(value: _172.MsgUpdateGroupAdmin): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupMetadata(value: _172.MsgUpdateGroupMetadata): {
                    type_url: string;
                    value: Uint8Array;
                };
                createGroupPolicy(value: _172.MsgCreateGroupPolicy): {
                    type_url: string;
                    value: Uint8Array;
                };
                createGroupWithPolicy(value: _172.MsgCreateGroupWithPolicy): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupPolicyAdmin(value: _172.MsgUpdateGroupPolicyAdmin): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupPolicyDecisionPolicy(value: _172.MsgUpdateGroupPolicyDecisionPolicy): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupPolicyMetadata(value: _172.MsgUpdateGroupPolicyMetadata): {
                    type_url: string;
                    value: Uint8Array;
                };
                submitProposal(value: _172.MsgSubmitProposal): {
                    type_url: string;
                    value: Uint8Array;
                };
                withdrawProposal(value: _172.MsgWithdrawProposal): {
                    type_url: string;
                    value: Uint8Array;
                };
                vote(value: _172.MsgVote): {
                    type_url: string;
                    value: Uint8Array;
                };
                exec(value: _172.MsgExec): {
                    type_url: string;
                    value: Uint8Array;
                };
                leaveGroup(value: _172.MsgLeaveGroup): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                createGroup(value: any): {
                    typeUrl: string;
                    value: _172.MsgCreateGroup;
                };
                updateGroupMembers(value: any): {
                    typeUrl: string;
                    value: _172.MsgUpdateGroupMembers;
                };
                updateGroupAdmin(value: any): {
                    typeUrl: string;
                    value: _172.MsgUpdateGroupAdmin;
                };
                updateGroupMetadata(value: any): {
                    typeUrl: string;
                    value: _172.MsgUpdateGroupMetadata;
                };
                createGroupPolicy(value: any): {
                    typeUrl: string;
                    value: _172.MsgCreateGroupPolicy;
                };
                createGroupWithPolicy(value: any): {
                    typeUrl: string;
                    value: _172.MsgCreateGroupWithPolicy;
                };
                updateGroupPolicyAdmin(value: any): {
                    typeUrl: string;
                    value: _172.MsgUpdateGroupPolicyAdmin;
                };
                updateGroupPolicyDecisionPolicy(value: any): {
                    typeUrl: string;
                    value: _172.MsgUpdateGroupPolicyDecisionPolicy;
                };
                updateGroupPolicyMetadata(value: any): {
                    typeUrl: string;
                    value: _172.MsgUpdateGroupPolicyMetadata;
                };
                submitProposal(value: any): {
                    typeUrl: string;
                    value: _172.MsgSubmitProposal;
                };
                withdrawProposal(value: any): {
                    typeUrl: string;
                    value: _172.MsgWithdrawProposal;
                };
                vote(value: any): {
                    typeUrl: string;
                    value: _172.MsgVote;
                };
                exec(value: any): {
                    typeUrl: string;
                    value: _172.MsgExec;
                };
                leaveGroup(value: any): {
                    typeUrl: string;
                    value: _172.MsgLeaveGroup;
                };
            };
            toJSON: {
                createGroup(value: _172.MsgCreateGroup): {
                    typeUrl: string;
                    value: unknown;
                };
                updateGroupMembers(value: _172.MsgUpdateGroupMembers): {
                    typeUrl: string;
                    value: unknown;
                };
                updateGroupAdmin(value: _172.MsgUpdateGroupAdmin): {
                    typeUrl: string;
                    value: unknown;
                };
                updateGroupMetadata(value: _172.MsgUpdateGroupMetadata): {
                    typeUrl: string;
                    value: unknown;
                };
                createGroupPolicy(value: _172.MsgCreateGroupPolicy): {
                    typeUrl: string;
                    value: unknown;
                };
                createGroupWithPolicy(value: _172.MsgCreateGroupWithPolicy): {
                    typeUrl: string;
                    value: unknown;
                };
                updateGroupPolicyAdmin(value: _172.MsgUpdateGroupPolicyAdmin): {
                    typeUrl: string;
                    value: unknown;
                };
                updateGroupPolicyDecisionPolicy(value: _172.MsgUpdateGroupPolicyDecisionPolicy): {
                    typeUrl: string;
                    value: unknown;
                };
                updateGroupPolicyMetadata(value: _172.MsgUpdateGroupPolicyMetadata): {
                    typeUrl: string;
                    value: unknown;
                };
                submitProposal(value: _172.MsgSubmitProposal): {
                    typeUrl: string;
                    value: unknown;
                };
                withdrawProposal(value: _172.MsgWithdrawProposal): {
                    typeUrl: string;
                    value: unknown;
                };
                vote(value: _172.MsgVote): {
                    typeUrl: string;
                    value: unknown;
                };
                exec(value: _172.MsgExec): {
                    typeUrl: string;
                    value: unknown;
                };
                leaveGroup(value: _172.MsgLeaveGroup): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                createGroup(value: _172.MsgCreateGroup): {
                    typeUrl: string;
                    value: _172.MsgCreateGroup;
                };
                updateGroupMembers(value: _172.MsgUpdateGroupMembers): {
                    typeUrl: string;
                    value: _172.MsgUpdateGroupMembers;
                };
                updateGroupAdmin(value: _172.MsgUpdateGroupAdmin): {
                    typeUrl: string;
                    value: _172.MsgUpdateGroupAdmin;
                };
                updateGroupMetadata(value: _172.MsgUpdateGroupMetadata): {
                    typeUrl: string;
                    value: _172.MsgUpdateGroupMetadata;
                };
                createGroupPolicy(value: _172.MsgCreateGroupPolicy): {
                    typeUrl: string;
                    value: _172.MsgCreateGroupPolicy;
                };
                createGroupWithPolicy(value: _172.MsgCreateGroupWithPolicy): {
                    typeUrl: string;
                    value: _172.MsgCreateGroupWithPolicy;
                };
                updateGroupPolicyAdmin(value: _172.MsgUpdateGroupPolicyAdmin): {
                    typeUrl: string;
                    value: _172.MsgUpdateGroupPolicyAdmin;
                };
                updateGroupPolicyDecisionPolicy(value: _172.MsgUpdateGroupPolicyDecisionPolicy): {
                    typeUrl: string;
                    value: _172.MsgUpdateGroupPolicyDecisionPolicy;
                };
                updateGroupPolicyMetadata(value: _172.MsgUpdateGroupPolicyMetadata): {
                    typeUrl: string;
                    value: _172.MsgUpdateGroupPolicyMetadata;
                };
                submitProposal(value: _172.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _172.MsgSubmitProposal;
                };
                withdrawProposal(value: _172.MsgWithdrawProposal): {
                    typeUrl: string;
                    value: _172.MsgWithdrawProposal;
                };
                vote(value: _172.MsgVote): {
                    typeUrl: string;
                    value: _172.MsgVote;
                };
                exec(value: _172.MsgExec): {
                    typeUrl: string;
                    value: _172.MsgExec;
                };
                leaveGroup(value: _172.MsgLeaveGroup): {
                    typeUrl: string;
                    value: _172.MsgLeaveGroup;
                };
            };
            messages: {
                createGroup(value: _172.MsgCreateGroup): {
                    typeUrl: string;
                    value: _172.MsgCreateGroup;
                };
                updateGroupMembers(value: _172.MsgUpdateGroupMembers): {
                    typeUrl: string;
                    value: _172.MsgUpdateGroupMembers;
                };
                updateGroupAdmin(value: _172.MsgUpdateGroupAdmin): {
                    typeUrl: string;
                    value: _172.MsgUpdateGroupAdmin;
                };
                updateGroupMetadata(value: _172.MsgUpdateGroupMetadata): {
                    typeUrl: string;
                    value: _172.MsgUpdateGroupMetadata;
                };
                createGroupPolicy(value: _172.MsgCreateGroupPolicy): {
                    typeUrl: string;
                    value: _172.MsgCreateGroupPolicy;
                };
                createGroupWithPolicy(value: _172.MsgCreateGroupWithPolicy): {
                    typeUrl: string;
                    value: _172.MsgCreateGroupWithPolicy;
                };
                updateGroupPolicyAdmin(value: _172.MsgUpdateGroupPolicyAdmin): {
                    typeUrl: string;
                    value: _172.MsgUpdateGroupPolicyAdmin;
                };
                updateGroupPolicyDecisionPolicy(value: _172.MsgUpdateGroupPolicyDecisionPolicy): {
                    typeUrl: string;
                    value: _172.MsgUpdateGroupPolicyDecisionPolicy;
                };
                updateGroupPolicyMetadata(value: _172.MsgUpdateGroupPolicyMetadata): {
                    typeUrl: string;
                    value: _172.MsgUpdateGroupPolicyMetadata;
                };
                submitProposal(value: _172.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _172.MsgSubmitProposal;
                };
                withdrawProposal(value: _172.MsgWithdrawProposal): {
                    typeUrl: string;
                    value: _172.MsgWithdrawProposal;
                };
                vote(value: _172.MsgVote): {
                    typeUrl: string;
                    value: _172.MsgVote;
                };
                exec(value: _172.MsgExec): {
                    typeUrl: string;
                    value: _172.MsgExec;
                };
                leaveGroup(value: _172.MsgLeaveGroup): {
                    typeUrl: string;
                    value: _172.MsgLeaveGroup;
                };
            };
            QueryGroupInfoRequest: {
                encode(message: _170.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGroupInfoRequest;
                fromJSON(object: any): _170.QueryGroupInfoRequest;
                toJSON(message: _170.QueryGroupInfoRequest): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _170.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _170.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGroupInfoResponse;
                fromJSON(object: any): _170.QueryGroupInfoResponse;
                toJSON(message: _170.QueryGroupInfoResponse): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _170.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _170.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _170.QueryGroupPolicyInfoRequest;
                toJSON(message: _170.QueryGroupPolicyInfoRequest): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _170.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _170.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _170.QueryGroupPolicyInfoResponse;
                toJSON(message: _170.QueryGroupPolicyInfoResponse): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _170.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _170.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGroupMembersRequest;
                fromJSON(object: any): _170.QueryGroupMembersRequest;
                toJSON(message: _170.QueryGroupMembersRequest): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _170.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _170.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGroupMembersResponse;
                fromJSON(object: any): _170.QueryGroupMembersResponse;
                toJSON(message: _170.QueryGroupMembersResponse): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _170.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _170.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGroupsByAdminRequest;
                fromJSON(object: any): _170.QueryGroupsByAdminRequest;
                toJSON(message: _170.QueryGroupsByAdminRequest): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _170.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _170.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGroupsByAdminResponse;
                fromJSON(object: any): _170.QueryGroupsByAdminResponse;
                toJSON(message: _170.QueryGroupsByAdminResponse): unknown;
                fromPartial<I_46 extends unknown>(object: I_46): _170.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _170.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _170.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _170.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial<I_47 extends unknown>(object: I_47): _170.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _170.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _170.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _170.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial<I_48 extends unknown>(object: I_48): _170.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _170.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _170.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _170.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial<I_49 extends unknown>(object: I_49): _170.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _170.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _170.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _170.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial<I_50 extends unknown>(object: I_50): _170.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _170.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryProposalRequest;
                fromJSON(object: any): _170.QueryProposalRequest;
                toJSON(message: _170.QueryProposalRequest): unknown;
                fromPartial<I_51 extends unknown>(object: I_51): _170.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _170.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryProposalResponse;
                fromJSON(object: any): _170.QueryProposalResponse;
                toJSON(message: _170.QueryProposalResponse): unknown;
                fromPartial<I_52 extends unknown>(object: I_52): _170.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _170.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _170.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _170.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial<I_53 extends unknown>(object: I_53): _170.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _170.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _170.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _170.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial<I_54 extends unknown>(object: I_54): _170.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _170.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _170.QueryVoteByProposalVoterRequest;
                toJSON(message: _170.QueryVoteByProposalVoterRequest): unknown;
                fromPartial<I_55 extends unknown>(object: I_55): _170.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _170.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _170.QueryVoteByProposalVoterResponse;
                toJSON(message: _170.QueryVoteByProposalVoterResponse): unknown;
                fromPartial<I_56 extends unknown>(object: I_56): _170.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _170.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryVotesByProposalRequest;
                fromJSON(object: any): _170.QueryVotesByProposalRequest;
                toJSON(message: _170.QueryVotesByProposalRequest): unknown;
                fromPartial<I_57 extends unknown>(object: I_57): _170.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _170.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryVotesByProposalResponse;
                fromJSON(object: any): _170.QueryVotesByProposalResponse;
                toJSON(message: _170.QueryVotesByProposalResponse): unknown;
                fromPartial<I_58 extends unknown>(object: I_58): _170.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _170.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryVotesByVoterRequest;
                fromJSON(object: any): _170.QueryVotesByVoterRequest;
                toJSON(message: _170.QueryVotesByVoterRequest): unknown;
                fromPartial<I_59 extends unknown>(object: I_59): _170.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _170.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryVotesByVoterResponse;
                fromJSON(object: any): _170.QueryVotesByVoterResponse;
                toJSON(message: _170.QueryVotesByVoterResponse): unknown;
                fromPartial<I_60 extends unknown>(object: I_60): _170.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _170.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGroupsByMemberRequest;
                fromJSON(object: any): _170.QueryGroupsByMemberRequest;
                toJSON(message: _170.QueryGroupsByMemberRequest): unknown;
                fromPartial<I_61 extends unknown>(object: I_61): _170.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _170.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGroupsByMemberResponse;
                fromJSON(object: any): _170.QueryGroupsByMemberResponse;
                toJSON(message: _170.QueryGroupsByMemberResponse): unknown;
                fromPartial<I_62 extends unknown>(object: I_62): _170.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _170.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryTallyResultRequest;
                fromJSON(object: any): _170.QueryTallyResultRequest;
                toJSON(message: _170.QueryTallyResultRequest): unknown;
                fromPartial<I_63 extends unknown>(object: I_63): _170.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _170.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryTallyResultResponse;
                fromJSON(object: any): _170.QueryTallyResultResponse;
                toJSON(message: _170.QueryTallyResultResponse): unknown;
                fromPartial<I_64 extends unknown>(object: I_64): _170.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _168.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.GenesisState;
                fromJSON(object: any): _168.GenesisState;
                toJSON(message: _168.GenesisState): unknown;
                fromPartial<I_65 extends unknown>(object: I_65): _168.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _166.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.EventCreateGroup;
                fromJSON(object: any): _166.EventCreateGroup;
                toJSON(message: _166.EventCreateGroup): unknown;
                fromPartial<I_66 extends unknown>(object: I_66): _166.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _166.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.EventUpdateGroup;
                fromJSON(object: any): _166.EventUpdateGroup;
                toJSON(message: _166.EventUpdateGroup): unknown;
                fromPartial<I_67 extends unknown>(object: I_67): _166.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _166.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.EventCreateGroupPolicy;
                fromJSON(object: any): _166.EventCreateGroupPolicy;
                toJSON(message: _166.EventCreateGroupPolicy): unknown;
                fromPartial<I_68 extends unknown>(object: I_68): _166.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _166.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.EventUpdateGroupPolicy;
                fromJSON(object: any): _166.EventUpdateGroupPolicy;
                toJSON(message: _166.EventUpdateGroupPolicy): unknown;
                fromPartial<I_69 extends unknown>(object: I_69): _166.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _166.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.EventSubmitProposal;
                fromJSON(object: any): _166.EventSubmitProposal;
                toJSON(message: _166.EventSubmitProposal): unknown;
                fromPartial<I_70 extends unknown>(object: I_70): _166.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _166.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.EventWithdrawProposal;
                fromJSON(object: any): _166.EventWithdrawProposal;
                toJSON(message: _166.EventWithdrawProposal): unknown;
                fromPartial<I_71 extends unknown>(object: I_71): _166.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _166.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.EventVote;
                fromJSON(object: any): _166.EventVote;
                toJSON(message: _166.EventVote): unknown;
                fromPartial<I_72 extends unknown>(object: I_72): _166.EventVote;
            };
            EventExec: {
                encode(message: _166.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.EventExec;
                fromJSON(object: any): _166.EventExec;
                toJSON(message: _166.EventExec): unknown;
                fromPartial<I_73 extends unknown>(object: I_73): _166.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _166.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.EventLeaveGroup;
                fromJSON(object: any): _166.EventLeaveGroup;
                toJSON(message: _166.EventLeaveGroup): unknown;
                fromPartial<I_74 extends unknown>(object: I_74): _166.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _186.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryParamsRequest;
                fromJSON(_: any): _186.QueryParamsRequest;
                toJSON(_: _186.QueryParamsRequest): unknown;
                fromPartial<I extends unknown>(_: I): _186.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _186.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryParamsResponse;
                fromJSON(object: any): _186.QueryParamsResponse;
                toJSON(message: _186.QueryParamsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _186.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _186.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryInflationRequest;
                fromJSON(_: any): _186.QueryInflationRequest;
                toJSON(_: _186.QueryInflationRequest): unknown;
                fromPartial<I_2 extends unknown>(_: I_2): _186.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _186.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryInflationResponse;
                fromJSON(object: any): _186.QueryInflationResponse;
                toJSON(message: _186.QueryInflationResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _186.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _186.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _186.QueryAnnualProvisionsRequest;
                toJSON(_: _186.QueryAnnualProvisionsRequest): unknown;
                fromPartial<I_4 extends unknown>(_: I_4): _186.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _186.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _186.QueryAnnualProvisionsResponse;
                toJSON(message: _186.QueryAnnualProvisionsResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _186.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _184.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.Minter;
                fromJSON(object: any): _184.Minter;
                toJSON(message: _184.Minter): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _184.Minter;
            };
            Params: {
                encode(message: _184.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.Params;
                fromJSON(object: any): _184.Params;
                toJSON(message: _184.Params): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _184.Params;
            };
            GenesisState: {
                encode(message: _182.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.GenesisState;
                fromJSON(object: any): _182.GenesisState;
                toJSON(message: _182.GenesisState): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _182.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgSend: {
                encode(message: _198.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.MsgSend;
                fromJSON(object: any): _198.MsgSend;
                toJSON(message: _198.MsgSend): unknown;
                fromPartial<I extends unknown>(object: I): _198.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _198.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.MsgSendResponse;
                fromJSON(_: any): _198.MsgSendResponse;
                toJSON(_: _198.MsgSendResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _198.MsgSendResponse;
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _198.MsgSend) => {
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
                    }) => _198.MsgSend;
                };
            };
            encoded: {
                send(value: _198.MsgSend): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                send(value: any): {
                    typeUrl: string;
                    value: _198.MsgSend;
                };
            };
            toJSON: {
                send(value: _198.MsgSend): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                send(value: _198.MsgSend): {
                    typeUrl: string;
                    value: _198.MsgSend;
                };
            };
            messages: {
                send(value: _198.MsgSend): {
                    typeUrl: string;
                    value: _198.MsgSend;
                };
            };
            QueryBalanceRequest: {
                encode(message: _196.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.QueryBalanceRequest;
                fromJSON(object: any): _196.QueryBalanceRequest;
                toJSON(message: _196.QueryBalanceRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _196.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _196.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.QueryBalanceResponse;
                fromJSON(object: any): _196.QueryBalanceResponse;
                toJSON(message: _196.QueryBalanceResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _196.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _196.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.QueryOwnerRequest;
                fromJSON(object: any): _196.QueryOwnerRequest;
                toJSON(message: _196.QueryOwnerRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _196.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _196.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.QueryOwnerResponse;
                fromJSON(object: any): _196.QueryOwnerResponse;
                toJSON(message: _196.QueryOwnerResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _196.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _196.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.QuerySupplyRequest;
                fromJSON(object: any): _196.QuerySupplyRequest;
                toJSON(message: _196.QuerySupplyRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _196.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _196.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.QuerySupplyResponse;
                fromJSON(object: any): _196.QuerySupplyResponse;
                toJSON(message: _196.QuerySupplyResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _196.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _196.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.QueryNFTsRequest;
                fromJSON(object: any): _196.QueryNFTsRequest;
                toJSON(message: _196.QueryNFTsRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _196.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _196.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.QueryNFTsResponse;
                fromJSON(object: any): _196.QueryNFTsResponse;
                toJSON(message: _196.QueryNFTsResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _196.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _196.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.QueryNFTRequest;
                fromJSON(object: any): _196.QueryNFTRequest;
                toJSON(message: _196.QueryNFTRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _196.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _196.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.QueryNFTResponse;
                fromJSON(object: any): _196.QueryNFTResponse;
                toJSON(message: _196.QueryNFTResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _196.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _196.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.QueryClassRequest;
                fromJSON(object: any): _196.QueryClassRequest;
                toJSON(message: _196.QueryClassRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _196.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _196.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.QueryClassResponse;
                fromJSON(object: any): _196.QueryClassResponse;
                toJSON(message: _196.QueryClassResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _196.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _196.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.QueryClassesRequest;
                fromJSON(object: any): _196.QueryClassesRequest;
                toJSON(message: _196.QueryClassesRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _196.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _196.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.QueryClassesResponse;
                fromJSON(object: any): _196.QueryClassesResponse;
                toJSON(message: _196.QueryClassesResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _196.QueryClassesResponse;
            };
            Class: {
                encode(message: _194.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.Class;
                fromJSON(object: any): _194.Class;
                toJSON(message: _194.Class): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _194.Class;
            };
            NFT: {
                encode(message: _194.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.NFT;
                fromJSON(object: any): _194.NFT;
                toJSON(message: _194.NFT): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _194.NFT;
            };
            GenesisState: {
                encode(message: _192.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.GenesisState;
                fromJSON(object: any): _192.GenesisState;
                toJSON(message: _192.GenesisState): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _192.GenesisState;
            };
            Entry: {
                encode(message: _192.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.Entry;
                fromJSON(object: any): _192.Entry;
                toJSON(message: _192.Entry): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _192.Entry;
            };
            EventSend: {
                encode(message: _190.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.EventSend;
                fromJSON(object: any): _190.EventSend;
                toJSON(message: _190.EventSend): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _190.EventSend;
            };
            EventMint: {
                encode(message: _190.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.EventMint;
                fromJSON(object: any): _190.EventMint;
                toJSON(message: _190.EventMint): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _190.EventMint;
            };
            EventBurn: {
                encode(message: _190.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.EventBurn;
                fromJSON(object: any): _190.EventBurn;
                toJSON(message: _190.EventBurn): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _190.EventBurn;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _206.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.TableDescriptor;
                fromJSON(object: any): _206.TableDescriptor;
                toJSON(message: _206.TableDescriptor): unknown;
                fromPartial<I extends unknown>(object: I): _206.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _206.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.PrimaryKeyDescriptor;
                fromJSON(object: any): _206.PrimaryKeyDescriptor;
                toJSON(message: _206.PrimaryKeyDescriptor): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _206.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _206.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.SecondaryIndexDescriptor;
                fromJSON(object: any): _206.SecondaryIndexDescriptor;
                toJSON(message: _206.SecondaryIndexDescriptor): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _206.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _206.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.SingletonDescriptor;
                fromJSON(object: any): _206.SingletonDescriptor;
                toJSON(message: _206.SingletonDescriptor): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _206.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _208.StorageType;
            storageTypeToJSON(object: _208.StorageType): string;
            StorageType: typeof _208.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _208.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.ModuleSchemaDescriptor;
                fromJSON(object: any): _208.ModuleSchemaDescriptor;
                toJSON(message: _208.ModuleSchemaDescriptor): unknown;
                fromPartial<I extends unknown>(object: I): _208.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _208.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _208.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _208.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _208.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryParamsRequest: {
                encode(message: _212.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.QueryParamsRequest;
                fromJSON(object: any): _212.QueryParamsRequest;
                toJSON(message: _212.QueryParamsRequest): unknown;
                fromPartial<I extends unknown>(object: I): _212.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _212.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.QueryParamsResponse;
                fromJSON(object: any): _212.QueryParamsResponse;
                toJSON(message: _212.QueryParamsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _212.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _212.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.QuerySubspacesRequest;
                fromJSON(_: any): _212.QuerySubspacesRequest;
                toJSON(_: _212.QuerySubspacesRequest): unknown;
                fromPartial<I_2 extends unknown>(_: I_2): _212.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _212.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.QuerySubspacesResponse;
                fromJSON(object: any): _212.QuerySubspacesResponse;
                toJSON(message: _212.QuerySubspacesResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _212.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _212.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.Subspace;
                fromJSON(object: any): _212.Subspace;
                toJSON(message: _212.Subspace): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _212.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _210.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.ParameterChangeProposal;
                fromJSON(object: any): _210.ParameterChangeProposal;
                toJSON(message: _210.ParameterChangeProposal): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _210.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _210.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.ParamChange;
                fromJSON(object: any): _210.ParamChange;
                toJSON(message: _210.ParamChange): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _210.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgUnjail: {
                encode(message: _220.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.MsgUnjail;
                fromJSON(object: any): _220.MsgUnjail;
                toJSON(message: _220.MsgUnjail): unknown;
                fromPartial<I extends unknown>(object: I): _220.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _220.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.MsgUnjailResponse;
                fromJSON(_: any): _220.MsgUnjailResponse;
                toJSON(_: _220.MsgUnjailResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _220.MsgUnjailResponse;
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _220.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _220.MsgUnjail;
                };
            };
            encoded: {
                unjail(value: _220.MsgUnjail): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                unjail(value: any): {
                    typeUrl: string;
                    value: _220.MsgUnjail;
                };
            };
            toJSON: {
                unjail(value: _220.MsgUnjail): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                unjail(value: _220.MsgUnjail): {
                    typeUrl: string;
                    value: _220.MsgUnjail;
                };
            };
            messages: {
                unjail(value: _220.MsgUnjail): {
                    typeUrl: string;
                    value: _220.MsgUnjail;
                };
            };
            ValidatorSigningInfo: {
                encode(message: _218.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.ValidatorSigningInfo;
                fromJSON(object: any): _218.ValidatorSigningInfo;
                toJSON(message: _218.ValidatorSigningInfo): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _218.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _218.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.Params;
                fromJSON(object: any): _218.Params;
                toJSON(message: _218.Params): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _218.Params;
            };
            QueryParamsRequest: {
                encode(_: _216.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryParamsRequest;
                fromJSON(_: any): _216.QueryParamsRequest;
                toJSON(_: _216.QueryParamsRequest): unknown;
                fromPartial<I_4 extends unknown>(_: I_4): _216.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _216.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryParamsResponse;
                fromJSON(object: any): _216.QueryParamsResponse;
                toJSON(message: _216.QueryParamsResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _216.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _216.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QuerySigningInfoRequest;
                fromJSON(object: any): _216.QuerySigningInfoRequest;
                toJSON(message: _216.QuerySigningInfoRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _216.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _216.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QuerySigningInfoResponse;
                fromJSON(object: any): _216.QuerySigningInfoResponse;
                toJSON(message: _216.QuerySigningInfoResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _216.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _216.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QuerySigningInfosRequest;
                fromJSON(object: any): _216.QuerySigningInfosRequest;
                toJSON(message: _216.QuerySigningInfosRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _216.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _216.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QuerySigningInfosResponse;
                fromJSON(object: any): _216.QuerySigningInfosResponse;
                toJSON(message: _216.QuerySigningInfosResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _216.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _214.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.GenesisState;
                fromJSON(object: any): _214.GenesisState;
                toJSON(message: _214.GenesisState): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _214.GenesisState;
            };
            SigningInfo: {
                encode(message: _214.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.SigningInfo;
                fromJSON(object: any): _214.SigningInfo;
                toJSON(message: _214.SigningInfo): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _214.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _214.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ValidatorMissedBlocks;
                fromJSON(object: any): _214.ValidatorMissedBlocks;
                toJSON(message: _214.ValidatorMissedBlocks): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _214.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _214.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.MissedBlock;
                fromJSON(object: any): _214.MissedBlock;
                toJSON(message: _214.MissedBlock): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _214.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgCreateValidator: {
                encode(message: _236.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.MsgCreateValidator;
                fromJSON(object: any): _236.MsgCreateValidator;
                toJSON(message: _236.MsgCreateValidator): unknown;
                fromPartial<I extends unknown>(object: I): _236.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _236.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.MsgCreateValidatorResponse;
                fromJSON(_: any): _236.MsgCreateValidatorResponse;
                toJSON(_: _236.MsgCreateValidatorResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _236.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _236.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.MsgEditValidator;
                fromJSON(object: any): _236.MsgEditValidator;
                toJSON(message: _236.MsgEditValidator): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _236.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _236.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.MsgEditValidatorResponse;
                fromJSON(_: any): _236.MsgEditValidatorResponse;
                toJSON(_: _236.MsgEditValidatorResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _236.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _236.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.MsgDelegate;
                fromJSON(object: any): _236.MsgDelegate;
                toJSON(message: _236.MsgDelegate): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _236.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _236.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.MsgDelegateResponse;
                fromJSON(_: any): _236.MsgDelegateResponse;
                toJSON(_: _236.MsgDelegateResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _236.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _236.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.MsgBeginRedelegate;
                fromJSON(object: any): _236.MsgBeginRedelegate;
                toJSON(message: _236.MsgBeginRedelegate): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _236.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _236.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.MsgBeginRedelegateResponse;
                fromJSON(object: any): _236.MsgBeginRedelegateResponse;
                toJSON(message: _236.MsgBeginRedelegateResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _236.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _236.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.MsgUndelegate;
                fromJSON(object: any): _236.MsgUndelegate;
                toJSON(message: _236.MsgUndelegate): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _236.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _236.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.MsgUndelegateResponse;
                fromJSON(object: any): _236.MsgUndelegateResponse;
                toJSON(message: _236.MsgUndelegateResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _236.MsgUndelegateResponse;
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _236.MsgCreateValidator) => {
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
                    }) => _236.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _236.MsgEditValidator) => {
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
                    }) => _236.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _236.MsgDelegate) => {
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
                    }) => _236.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _236.MsgBeginRedelegate) => {
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
                    }) => _236.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _236.MsgUndelegate) => {
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
                    }) => _236.MsgUndelegate;
                };
            };
            encoded: {
                createValidator(value: _236.MsgCreateValidator): {
                    type_url: string;
                    value: Uint8Array;
                };
                editValidator(value: _236.MsgEditValidator): {
                    type_url: string;
                    value: Uint8Array;
                };
                delegate(value: _236.MsgDelegate): {
                    type_url: string;
                    value: Uint8Array;
                };
                beginRedelegate(value: _236.MsgBeginRedelegate): {
                    type_url: string;
                    value: Uint8Array;
                };
                undelegate(value: _236.MsgUndelegate): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                createValidator(value: any): {
                    typeUrl: string;
                    value: _236.MsgCreateValidator;
                };
                editValidator(value: any): {
                    typeUrl: string;
                    value: _236.MsgEditValidator;
                };
                delegate(value: any): {
                    typeUrl: string;
                    value: _236.MsgDelegate;
                };
                beginRedelegate(value: any): {
                    typeUrl: string;
                    value: _236.MsgBeginRedelegate;
                };
                undelegate(value: any): {
                    typeUrl: string;
                    value: _236.MsgUndelegate;
                };
            };
            toJSON: {
                createValidator(value: _236.MsgCreateValidator): {
                    typeUrl: string;
                    value: unknown;
                };
                editValidator(value: _236.MsgEditValidator): {
                    typeUrl: string;
                    value: unknown;
                };
                delegate(value: _236.MsgDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                beginRedelegate(value: _236.MsgBeginRedelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                undelegate(value: _236.MsgUndelegate): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                createValidator(value: _236.MsgCreateValidator): {
                    typeUrl: string;
                    value: _236.MsgCreateValidator;
                };
                editValidator(value: _236.MsgEditValidator): {
                    typeUrl: string;
                    value: _236.MsgEditValidator;
                };
                delegate(value: _236.MsgDelegate): {
                    typeUrl: string;
                    value: _236.MsgDelegate;
                };
                beginRedelegate(value: _236.MsgBeginRedelegate): {
                    typeUrl: string;
                    value: _236.MsgBeginRedelegate;
                };
                undelegate(value: _236.MsgUndelegate): {
                    typeUrl: string;
                    value: _236.MsgUndelegate;
                };
            };
            messages: {
                createValidator(value: _236.MsgCreateValidator): {
                    typeUrl: string;
                    value: _236.MsgCreateValidator;
                };
                editValidator(value: _236.MsgEditValidator): {
                    typeUrl: string;
                    value: _236.MsgEditValidator;
                };
                delegate(value: _236.MsgDelegate): {
                    typeUrl: string;
                    value: _236.MsgDelegate;
                };
                beginRedelegate(value: _236.MsgBeginRedelegate): {
                    typeUrl: string;
                    value: _236.MsgBeginRedelegate;
                };
                undelegate(value: _236.MsgUndelegate): {
                    typeUrl: string;
                    value: _236.MsgUndelegate;
                };
            };
            bondStatusFromJSON(object: any): _234.BondStatus;
            bondStatusToJSON(object: _234.BondStatus): string;
            BondStatus: typeof _234.BondStatus;
            HistoricalInfo: {
                encode(message: _234.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.HistoricalInfo;
                fromJSON(object: any): _234.HistoricalInfo;
                toJSON(message: _234.HistoricalInfo): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _234.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _234.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.CommissionRates;
                fromJSON(object: any): _234.CommissionRates;
                toJSON(message: _234.CommissionRates): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _234.CommissionRates;
            };
            Commission: {
                encode(message: _234.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.Commission;
                fromJSON(object: any): _234.Commission;
                toJSON(message: _234.Commission): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _234.Commission;
            };
            Description: {
                encode(message: _234.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.Description;
                fromJSON(object: any): _234.Description;
                toJSON(message: _234.Description): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _234.Description;
            };
            Validator: {
                encode(message: _234.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.Validator;
                fromJSON(object: any): _234.Validator;
                toJSON(message: _234.Validator): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _234.Validator;
            };
            ValAddresses: {
                encode(message: _234.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.ValAddresses;
                fromJSON(object: any): _234.ValAddresses;
                toJSON(message: _234.ValAddresses): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _234.ValAddresses;
            };
            DVPair: {
                encode(message: _234.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.DVPair;
                fromJSON(object: any): _234.DVPair;
                toJSON(message: _234.DVPair): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _234.DVPair;
            };
            DVPairs: {
                encode(message: _234.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.DVPairs;
                fromJSON(object: any): _234.DVPairs;
                toJSON(message: _234.DVPairs): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _234.DVPairs;
            };
            DVVTriplet: {
                encode(message: _234.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.DVVTriplet;
                fromJSON(object: any): _234.DVVTriplet;
                toJSON(message: _234.DVVTriplet): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _234.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _234.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.DVVTriplets;
                fromJSON(object: any): _234.DVVTriplets;
                toJSON(message: _234.DVVTriplets): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _234.DVVTriplets;
            };
            Delegation: {
                encode(message: _234.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.Delegation;
                fromJSON(object: any): _234.Delegation;
                toJSON(message: _234.Delegation): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _234.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _234.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.UnbondingDelegation;
                fromJSON(object: any): _234.UnbondingDelegation;
                toJSON(message: _234.UnbondingDelegation): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _234.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _234.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.UnbondingDelegationEntry;
                fromJSON(object: any): _234.UnbondingDelegationEntry;
                toJSON(message: _234.UnbondingDelegationEntry): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _234.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _234.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.RedelegationEntry;
                fromJSON(object: any): _234.RedelegationEntry;
                toJSON(message: _234.RedelegationEntry): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _234.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _234.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.Redelegation;
                fromJSON(object: any): _234.Redelegation;
                toJSON(message: _234.Redelegation): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _234.Redelegation;
            };
            Params: {
                encode(message: _234.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.Params;
                fromJSON(object: any): _234.Params;
                toJSON(message: _234.Params): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _234.Params;
            };
            DelegationResponse: {
                encode(message: _234.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.DelegationResponse;
                fromJSON(object: any): _234.DelegationResponse;
                toJSON(message: _234.DelegationResponse): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _234.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _234.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.RedelegationEntryResponse;
                fromJSON(object: any): _234.RedelegationEntryResponse;
                toJSON(message: _234.RedelegationEntryResponse): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _234.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _234.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.RedelegationResponse;
                fromJSON(object: any): _234.RedelegationResponse;
                toJSON(message: _234.RedelegationResponse): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _234.RedelegationResponse;
            };
            Pool: {
                encode(message: _234.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.Pool;
                fromJSON(object: any): _234.Pool;
                toJSON(message: _234.Pool): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _234.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _232.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryValidatorsRequest;
                fromJSON(object: any): _232.QueryValidatorsRequest;
                toJSON(message: _232.QueryValidatorsRequest): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _232.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _232.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryValidatorsResponse;
                fromJSON(object: any): _232.QueryValidatorsResponse;
                toJSON(message: _232.QueryValidatorsResponse): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _232.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _232.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryValidatorRequest;
                fromJSON(object: any): _232.QueryValidatorRequest;
                toJSON(message: _232.QueryValidatorRequest): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _232.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _232.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryValidatorResponse;
                fromJSON(object: any): _232.QueryValidatorResponse;
                toJSON(message: _232.QueryValidatorResponse): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _232.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _232.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _232.QueryValidatorDelegationsRequest;
                toJSON(message: _232.QueryValidatorDelegationsRequest): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _232.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _232.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _232.QueryValidatorDelegationsResponse;
                toJSON(message: _232.QueryValidatorDelegationsResponse): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _232.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _232.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _232.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _232.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial<I_36 extends unknown>(object: I_36): _232.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _232.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _232.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _232.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _232.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _232.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryDelegationRequest;
                fromJSON(object: any): _232.QueryDelegationRequest;
                toJSON(message: _232.QueryDelegationRequest): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _232.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _232.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryDelegationResponse;
                fromJSON(object: any): _232.QueryDelegationResponse;
                toJSON(message: _232.QueryDelegationResponse): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _232.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _232.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _232.QueryUnbondingDelegationRequest;
                toJSON(message: _232.QueryUnbondingDelegationRequest): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _232.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _232.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _232.QueryUnbondingDelegationResponse;
                toJSON(message: _232.QueryUnbondingDelegationResponse): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _232.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _232.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _232.QueryDelegatorDelegationsRequest;
                toJSON(message: _232.QueryDelegatorDelegationsRequest): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _232.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _232.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _232.QueryDelegatorDelegationsResponse;
                toJSON(message: _232.QueryDelegatorDelegationsResponse): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _232.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _232.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _232.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _232.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _232.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _232.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _232.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _232.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _232.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _232.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryRedelegationsRequest;
                fromJSON(object: any): _232.QueryRedelegationsRequest;
                toJSON(message: _232.QueryRedelegationsRequest): unknown;
                fromPartial<I_46 extends unknown>(object: I_46): _232.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _232.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryRedelegationsResponse;
                fromJSON(object: any): _232.QueryRedelegationsResponse;
                toJSON(message: _232.QueryRedelegationsResponse): unknown;
                fromPartial<I_47 extends unknown>(object: I_47): _232.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _232.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _232.QueryDelegatorValidatorsRequest;
                toJSON(message: _232.QueryDelegatorValidatorsRequest): unknown;
                fromPartial<I_48 extends unknown>(object: I_48): _232.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _232.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _232.QueryDelegatorValidatorsResponse;
                toJSON(message: _232.QueryDelegatorValidatorsResponse): unknown;
                fromPartial<I_49 extends unknown>(object: I_49): _232.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _232.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _232.QueryDelegatorValidatorRequest;
                toJSON(message: _232.QueryDelegatorValidatorRequest): unknown;
                fromPartial<I_50 extends unknown>(object: I_50): _232.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _232.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _232.QueryDelegatorValidatorResponse;
                toJSON(message: _232.QueryDelegatorValidatorResponse): unknown;
                fromPartial<I_51 extends unknown>(object: I_51): _232.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _232.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryHistoricalInfoRequest;
                fromJSON(object: any): _232.QueryHistoricalInfoRequest;
                toJSON(message: _232.QueryHistoricalInfoRequest): unknown;
                fromPartial<I_52 extends unknown>(object: I_52): _232.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _232.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryHistoricalInfoResponse;
                fromJSON(object: any): _232.QueryHistoricalInfoResponse;
                toJSON(message: _232.QueryHistoricalInfoResponse): unknown;
                fromPartial<I_53 extends unknown>(object: I_53): _232.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _232.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryPoolRequest;
                fromJSON(_: any): _232.QueryPoolRequest;
                toJSON(_: _232.QueryPoolRequest): unknown;
                fromPartial<I_54 extends unknown>(_: I_54): _232.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _232.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryPoolResponse;
                fromJSON(object: any): _232.QueryPoolResponse;
                toJSON(message: _232.QueryPoolResponse): unknown;
                fromPartial<I_55 extends unknown>(object: I_55): _232.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _232.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryParamsRequest;
                fromJSON(_: any): _232.QueryParamsRequest;
                toJSON(_: _232.QueryParamsRequest): unknown;
                fromPartial<I_56 extends unknown>(_: I_56): _232.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _232.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryParamsResponse;
                fromJSON(object: any): _232.QueryParamsResponse;
                toJSON(message: _232.QueryParamsResponse): unknown;
                fromPartial<I_57 extends unknown>(object: I_57): _232.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _230.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.GenesisState;
                fromJSON(object: any): _230.GenesisState;
                toJSON(message: _230.GenesisState): unknown;
                fromPartial<I_58 extends unknown>(object: I_58): _230.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _230.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.LastValidatorPower;
                fromJSON(object: any): _230.LastValidatorPower;
                toJSON(message: _230.LastValidatorPower): unknown;
                fromPartial<I_59 extends unknown>(object: I_59): _230.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _228.AuthorizationType;
            authorizationTypeToJSON(object: _228.AuthorizationType): string;
            AuthorizationType: typeof _228.AuthorizationType;
            StakeAuthorization: {
                encode(message: _228.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.StakeAuthorization;
                fromJSON(object: any): _228.StakeAuthorization;
                toJSON(message: _228.StakeAuthorization): unknown;
                fromPartial<I_60 extends unknown>(object: I_60): _228.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _228.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.StakeAuthorization_Validators;
                fromJSON(object: any): _228.StakeAuthorization_Validators;
                toJSON(message: _228.StakeAuthorization_Validators): unknown;
                fromPartial<I_61 extends unknown>(object: I_61): _228.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _244.SignMode;
                signModeToJSON(object: _244.SignMode): string;
                SignMode: typeof _244.SignMode;
                SignatureDescriptors: {
                    encode(message: _244.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.SignatureDescriptors;
                    fromJSON(object: any): _244.SignatureDescriptors;
                    toJSON(message: _244.SignatureDescriptors): unknown;
                    fromPartial<I extends unknown>(object: I): _244.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _244.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.SignatureDescriptor;
                    fromJSON(object: any): _244.SignatureDescriptor;
                    toJSON(message: _244.SignatureDescriptor): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _244.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _244.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.SignatureDescriptor_Data;
                    fromJSON(object: any): _244.SignatureDescriptor_Data;
                    toJSON(message: _244.SignatureDescriptor_Data): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _244.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _244.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _244.SignatureDescriptor_Data_Single;
                    toJSON(message: _244.SignatureDescriptor_Data_Single): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _244.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _244.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _244.SignatureDescriptor_Data_Multi;
                    toJSON(message: _244.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _244.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            Tx: {
                encode(message: _248.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.Tx;
                fromJSON(object: any): _248.Tx;
                toJSON(message: _248.Tx): unknown;
                fromPartial<I extends unknown>(object: I): _248.Tx;
            };
            TxRaw: {
                encode(message: _248.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.TxRaw;
                fromJSON(object: any): _248.TxRaw;
                toJSON(message: _248.TxRaw): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _248.TxRaw;
            };
            SignDoc: {
                encode(message: _248.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.SignDoc;
                fromJSON(object: any): _248.SignDoc;
                toJSON(message: _248.SignDoc): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _248.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _248.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.SignDocDirectAux;
                fromJSON(object: any): _248.SignDocDirectAux;
                toJSON(message: _248.SignDocDirectAux): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _248.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _248.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.TxBody;
                fromJSON(object: any): _248.TxBody;
                toJSON(message: _248.TxBody): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _248.TxBody;
            };
            AuthInfo: {
                encode(message: _248.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.AuthInfo;
                fromJSON(object: any): _248.AuthInfo;
                toJSON(message: _248.AuthInfo): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _248.AuthInfo;
            };
            SignerInfo: {
                encode(message: _248.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.SignerInfo;
                fromJSON(object: any): _248.SignerInfo;
                toJSON(message: _248.SignerInfo): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _248.SignerInfo;
            };
            ModeInfo: {
                encode(message: _248.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.ModeInfo;
                fromJSON(object: any): _248.ModeInfo;
                toJSON(message: _248.ModeInfo): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _248.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _248.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.ModeInfo_Single;
                fromJSON(object: any): _248.ModeInfo_Single;
                toJSON(message: _248.ModeInfo_Single): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _248.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _248.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.ModeInfo_Multi;
                fromJSON(object: any): _248.ModeInfo_Multi;
                toJSON(message: _248.ModeInfo_Multi): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _248.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _248.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.Fee;
                fromJSON(object: any): _248.Fee;
                toJSON(message: _248.Fee): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _248.Fee;
            };
            Tip: {
                encode(message: _248.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.Tip;
                fromJSON(object: any): _248.Tip;
                toJSON(message: _248.Tip): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _248.Tip;
            };
            AuxSignerData: {
                encode(message: _248.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.AuxSignerData;
                fromJSON(object: any): _248.AuxSignerData;
                toJSON(message: _248.AuxSignerData): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _248.AuxSignerData;
            };
            orderByFromJSON(object: any): _246.OrderBy;
            orderByToJSON(object: _246.OrderBy): string;
            broadcastModeFromJSON(object: any): _246.BroadcastMode;
            broadcastModeToJSON(object: _246.BroadcastMode): string;
            OrderBy: typeof _246.OrderBy;
            BroadcastMode: typeof _246.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _246.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.GetTxsEventRequest;
                fromJSON(object: any): _246.GetTxsEventRequest;
                toJSON(message: _246.GetTxsEventRequest): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _246.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _246.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.GetTxsEventResponse;
                fromJSON(object: any): _246.GetTxsEventResponse;
                toJSON(message: _246.GetTxsEventResponse): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _246.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _246.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.BroadcastTxRequest;
                fromJSON(object: any): _246.BroadcastTxRequest;
                toJSON(message: _246.BroadcastTxRequest): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _246.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _246.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.BroadcastTxResponse;
                fromJSON(object: any): _246.BroadcastTxResponse;
                toJSON(message: _246.BroadcastTxResponse): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _246.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _246.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.SimulateRequest;
                fromJSON(object: any): _246.SimulateRequest;
                toJSON(message: _246.SimulateRequest): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _246.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _246.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.SimulateResponse;
                fromJSON(object: any): _246.SimulateResponse;
                toJSON(message: _246.SimulateResponse): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _246.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _246.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.GetTxRequest;
                fromJSON(object: any): _246.GetTxRequest;
                toJSON(message: _246.GetTxRequest): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _246.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _246.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.GetTxResponse;
                fromJSON(object: any): _246.GetTxResponse;
                toJSON(message: _246.GetTxResponse): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _246.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _246.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.GetBlockWithTxsRequest;
                fromJSON(object: any): _246.GetBlockWithTxsRequest;
                toJSON(message: _246.GetBlockWithTxsRequest): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _246.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _246.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.GetBlockWithTxsResponse;
                fromJSON(object: any): _246.GetBlockWithTxsResponse;
                toJSON(message: _246.GetBlockWithTxsResponse): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _246.GetBlockWithTxsResponse;
            };
            ServiceClientImpl: typeof _246.ServiceClientImpl;
        };
    }
    namespace upgrade {
        const v1beta1: {
            Plan: {
                encode(message: _260.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.Plan;
                fromJSON(object: any): _260.Plan;
                toJSON(message: _260.Plan): unknown;
                fromPartial<I extends unknown>(object: I): _260.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _260.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.SoftwareUpgradeProposal;
                fromJSON(object: any): _260.SoftwareUpgradeProposal;
                toJSON(message: _260.SoftwareUpgradeProposal): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _260.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _260.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _260.CancelSoftwareUpgradeProposal;
                toJSON(message: _260.CancelSoftwareUpgradeProposal): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _260.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _260.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.ModuleVersion;
                fromJSON(object: any): _260.ModuleVersion;
                toJSON(message: _260.ModuleVersion): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _260.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _252.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.MsgSoftwareUpgrade;
                fromJSON(object: any): _252.MsgSoftwareUpgrade;
                toJSON(message: _252.MsgSoftwareUpgrade): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _252.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _252.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _252.MsgSoftwareUpgradeResponse;
                toJSON(_: _252.MsgSoftwareUpgradeResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _252.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _252.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.MsgCancelUpgrade;
                fromJSON(object: any): _252.MsgCancelUpgrade;
                toJSON(message: _252.MsgCancelUpgrade): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _252.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _252.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.MsgCancelUpgradeResponse;
                fromJSON(_: any): _252.MsgCancelUpgradeResponse;
                toJSON(_: _252.MsgCancelUpgradeResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _252.MsgCancelUpgradeResponse;
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _252.MsgSoftwareUpgrade) => {
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
                    }) => _252.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _252.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _252.MsgCancelUpgrade;
                };
            };
            encoded: {
                softwareUpgrade(value: _252.MsgSoftwareUpgrade): {
                    type_url: string;
                    value: Uint8Array;
                };
                cancelUpgrade(value: _252.MsgCancelUpgrade): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                softwareUpgrade(value: any): {
                    typeUrl: string;
                    value: _252.MsgSoftwareUpgrade;
                };
                cancelUpgrade(value: any): {
                    typeUrl: string;
                    value: _252.MsgCancelUpgrade;
                };
            };
            toJSON: {
                softwareUpgrade(value: _252.MsgSoftwareUpgrade): {
                    typeUrl: string;
                    value: unknown;
                };
                cancelUpgrade(value: _252.MsgCancelUpgrade): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                softwareUpgrade(value: _252.MsgSoftwareUpgrade): {
                    typeUrl: string;
                    value: _252.MsgSoftwareUpgrade;
                };
                cancelUpgrade(value: _252.MsgCancelUpgrade): {
                    typeUrl: string;
                    value: _252.MsgCancelUpgrade;
                };
            };
            messages: {
                softwareUpgrade(value: _252.MsgSoftwareUpgrade): {
                    typeUrl: string;
                    value: _252.MsgSoftwareUpgrade;
                };
                cancelUpgrade(value: _252.MsgCancelUpgrade): {
                    typeUrl: string;
                    value: _252.MsgCancelUpgrade;
                };
            };
            QueryCurrentPlanRequest: {
                encode(_: _250.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.QueryCurrentPlanRequest;
                fromJSON(_: any): _250.QueryCurrentPlanRequest;
                toJSON(_: _250.QueryCurrentPlanRequest): unknown;
                fromPartial<I_8 extends unknown>(_: I_8): _250.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _250.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.QueryCurrentPlanResponse;
                fromJSON(object: any): _250.QueryCurrentPlanResponse;
                toJSON(message: _250.QueryCurrentPlanResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _250.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _250.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.QueryAppliedPlanRequest;
                fromJSON(object: any): _250.QueryAppliedPlanRequest;
                toJSON(message: _250.QueryAppliedPlanRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _250.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _250.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.QueryAppliedPlanResponse;
                fromJSON(object: any): _250.QueryAppliedPlanResponse;
                toJSON(message: _250.QueryAppliedPlanResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _250.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _250.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _250.QueryUpgradedConsensusStateRequest;
                toJSON(message: _250.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _250.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _250.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _250.QueryUpgradedConsensusStateResponse;
                toJSON(message: _250.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _250.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _250.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.QueryModuleVersionsRequest;
                fromJSON(object: any): _250.QueryModuleVersionsRequest;
                toJSON(message: _250.QueryModuleVersionsRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _250.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _250.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.QueryModuleVersionsResponse;
                fromJSON(object: any): _250.QueryModuleVersionsResponse;
                toJSON(message: _250.QueryModuleVersionsResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _250.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _250.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.QueryAuthorityRequest;
                fromJSON(_: any): _250.QueryAuthorityRequest;
                toJSON(_: _250.QueryAuthorityRequest): unknown;
                fromPartial<I_16 extends unknown>(_: I_16): _250.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _250.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.QueryAuthorityResponse;
                fromJSON(object: any): _250.QueryAuthorityResponse;
                toJSON(message: _250.QueryAuthorityResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _250.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            BaseVestingAccount: {
                encode(message: _270.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.BaseVestingAccount;
                fromJSON(object: any): _270.BaseVestingAccount;
                toJSON(message: _270.BaseVestingAccount): unknown;
                fromPartial<I extends unknown>(object: I): _270.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _270.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.ContinuousVestingAccount;
                fromJSON(object: any): _270.ContinuousVestingAccount;
                toJSON(message: _270.ContinuousVestingAccount): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _270.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _270.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.DelayedVestingAccount;
                fromJSON(object: any): _270.DelayedVestingAccount;
                toJSON(message: _270.DelayedVestingAccount): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _270.DelayedVestingAccount;
            };
            Period: {
                encode(message: _270.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.Period;
                fromJSON(object: any): _270.Period;
                toJSON(message: _270.Period): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _270.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _270.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.PeriodicVestingAccount;
                fromJSON(object: any): _270.PeriodicVestingAccount;
                toJSON(message: _270.PeriodicVestingAccount): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _270.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _270.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.PermanentLockedAccount;
                fromJSON(object: any): _270.PermanentLockedAccount;
                toJSON(message: _270.PermanentLockedAccount): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _270.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _262.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgCreateVestingAccount;
                fromJSON(object: any): _262.MsgCreateVestingAccount;
                toJSON(message: _262.MsgCreateVestingAccount): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _262.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _262.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _262.MsgCreateVestingAccountResponse;
                toJSON(_: _262.MsgCreateVestingAccountResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _262.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _262.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _262.MsgCreatePermanentLockedAccount;
                toJSON(message: _262.MsgCreatePermanentLockedAccount): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _262.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _262.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _262.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _262.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial<I_9 extends unknown>(_: I_9): _262.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _262.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _262.MsgCreatePeriodicVestingAccount;
                toJSON(message: _262.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _262.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _262.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _262.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _262.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial<I_11 extends unknown>(_: I_11): _262.MsgCreatePeriodicVestingAccountResponse;
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _262.MsgCreateVestingAccount) => {
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
                    }) => _262.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _262.MsgCreatePermanentLockedAccount) => {
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
                    }) => _262.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _262.MsgCreatePeriodicVestingAccount) => {
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
                    }) => _262.MsgCreatePeriodicVestingAccount;
                };
            };
            encoded: {
                createVestingAccount(value: _262.MsgCreateVestingAccount): {
                    type_url: string;
                    value: Uint8Array;
                };
                createPermanentLockedAccount(value: _262.MsgCreatePermanentLockedAccount): {
                    type_url: string;
                    value: Uint8Array;
                };
                createPeriodicVestingAccount(value: _262.MsgCreatePeriodicVestingAccount): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                createVestingAccount(value: any): {
                    typeUrl: string;
                    value: _262.MsgCreateVestingAccount;
                };
                createPermanentLockedAccount(value: any): {
                    typeUrl: string;
                    value: _262.MsgCreatePermanentLockedAccount;
                };
                createPeriodicVestingAccount(value: any): {
                    typeUrl: string;
                    value: _262.MsgCreatePeriodicVestingAccount;
                };
            };
            toJSON: {
                createVestingAccount(value: _262.MsgCreateVestingAccount): {
                    typeUrl: string;
                    value: unknown;
                };
                createPermanentLockedAccount(value: _262.MsgCreatePermanentLockedAccount): {
                    typeUrl: string;
                    value: unknown;
                };
                createPeriodicVestingAccount(value: _262.MsgCreatePeriodicVestingAccount): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                createVestingAccount(value: _262.MsgCreateVestingAccount): {
                    typeUrl: string;
                    value: _262.MsgCreateVestingAccount;
                };
                createPermanentLockedAccount(value: _262.MsgCreatePermanentLockedAccount): {
                    typeUrl: string;
                    value: _262.MsgCreatePermanentLockedAccount;
                };
                createPeriodicVestingAccount(value: _262.MsgCreatePeriodicVestingAccount): {
                    typeUrl: string;
                    value: _262.MsgCreatePeriodicVestingAccount;
                };
            };
            messages: {
                createVestingAccount(value: _262.MsgCreateVestingAccount): {
                    typeUrl: string;
                    value: _262.MsgCreateVestingAccount;
                };
                createPermanentLockedAccount(value: _262.MsgCreatePermanentLockedAccount): {
                    typeUrl: string;
                    value: _262.MsgCreatePermanentLockedAccount;
                };
                createPeriodicVestingAccount(value: _262.MsgCreatePeriodicVestingAccount): {
                    typeUrl: string;
                    value: _262.MsgCreatePeriodicVestingAccount;
                };
            };
        };
    }
}
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            accessTypeFromJSON(object: any): _288.AccessType;
            accessTypeToJSON(object: _288.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _288.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _288.ContractCodeHistoryOperationType): string;
            AccessType: typeof _288.AccessType;
            ContractCodeHistoryOperationType: typeof _288.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _288.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.AccessTypeParam;
                fromJSON(object: any): _288.AccessTypeParam;
                toJSON(message: _288.AccessTypeParam): unknown;
                fromPartial<I extends unknown>(object: I): _288.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _288.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.AccessConfig;
                fromJSON(object: any): _288.AccessConfig;
                toJSON(message: _288.AccessConfig): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _288.AccessConfig;
            };
            Params: {
                encode(message: _288.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.Params;
                fromJSON(object: any): _288.Params;
                toJSON(message: _288.Params): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _288.Params;
            };
            CodeInfo: {
                encode(message: _288.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.CodeInfo;
                fromJSON(object: any): _288.CodeInfo;
                toJSON(message: _288.CodeInfo): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _288.CodeInfo;
            };
            ContractInfo: {
                encode(message: _288.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.ContractInfo;
                fromJSON(object: any): _288.ContractInfo;
                toJSON(message: _288.ContractInfo): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _288.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _288.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.ContractCodeHistoryEntry;
                fromJSON(object: any): _288.ContractCodeHistoryEntry;
                toJSON(message: _288.ContractCodeHistoryEntry): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _288.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _288.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.AbsoluteTxPosition;
                fromJSON(object: any): _288.AbsoluteTxPosition;
                toJSON(message: _288.AbsoluteTxPosition): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _288.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _288.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.Model;
                fromJSON(object: any): _288.Model;
                toJSON(message: _288.Model): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _288.Model;
            };
            MsgStoreCode: {
                encode(message: _280.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgStoreCode;
                fromJSON(object: any): _280.MsgStoreCode;
                toJSON(message: _280.MsgStoreCode): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _280.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _280.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgStoreCodeResponse;
                fromJSON(object: any): _280.MsgStoreCodeResponse;
                toJSON(message: _280.MsgStoreCodeResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _280.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _280.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgInstantiateContract;
                fromJSON(object: any): _280.MsgInstantiateContract;
                toJSON(message: _280.MsgInstantiateContract): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _280.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _280.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgInstantiateContractResponse;
                fromJSON(object: any): _280.MsgInstantiateContractResponse;
                toJSON(message: _280.MsgInstantiateContractResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _280.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _280.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgExecuteContract;
                fromJSON(object: any): _280.MsgExecuteContract;
                toJSON(message: _280.MsgExecuteContract): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _280.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _280.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgExecuteContractResponse;
                fromJSON(object: any): _280.MsgExecuteContractResponse;
                toJSON(message: _280.MsgExecuteContractResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _280.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _280.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgMigrateContract;
                fromJSON(object: any): _280.MsgMigrateContract;
                toJSON(message: _280.MsgMigrateContract): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _280.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _280.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgMigrateContractResponse;
                fromJSON(object: any): _280.MsgMigrateContractResponse;
                toJSON(message: _280.MsgMigrateContractResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _280.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _280.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgUpdateAdmin;
                fromJSON(object: any): _280.MsgUpdateAdmin;
                toJSON(message: _280.MsgUpdateAdmin): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _280.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _280.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgUpdateAdminResponse;
                fromJSON(_: any): _280.MsgUpdateAdminResponse;
                toJSON(_: _280.MsgUpdateAdminResponse): unknown;
                fromPartial<I_17 extends unknown>(_: I_17): _280.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _280.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgClearAdmin;
                fromJSON(object: any): _280.MsgClearAdmin;
                toJSON(message: _280.MsgClearAdmin): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _280.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _280.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgClearAdminResponse;
                fromJSON(_: any): _280.MsgClearAdminResponse;
                toJSON(_: _280.MsgClearAdminResponse): unknown;
                fromPartial<I_19 extends unknown>(_: I_19): _280.MsgClearAdminResponse;
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _280.MsgStoreCode) => {
                        sender: string;
                        wasm_byte_code: Uint8Array;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                        };
                    };
                    fromAmino: ({ sender, wasm_byte_code, instantiate_permission }: {
                        sender: string;
                        wasm_byte_code: Uint8Array;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                        };
                    }) => _280.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _280.MsgInstantiateContract) => {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, admin, code_id, label, msg, funds }: {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _280.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _280.MsgExecuteContract) => {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, contract, msg, funds }: {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _280.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _280.MsgMigrateContract) => {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    };
                    fromAmino: ({ sender, contract, code_id, msg }: {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    }) => _280.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _280.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _280.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _280.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _280.MsgClearAdmin;
                };
            };
            encoded: {
                storeCode(value: _280.MsgStoreCode): {
                    type_url: string;
                    value: Uint8Array;
                };
                instantiateContract(value: _280.MsgInstantiateContract): {
                    type_url: string;
                    value: Uint8Array;
                };
                executeContract(value: _280.MsgExecuteContract): {
                    type_url: string;
                    value: Uint8Array;
                };
                migrateContract(value: _280.MsgMigrateContract): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateAdmin(value: _280.MsgUpdateAdmin): {
                    type_url: string;
                    value: Uint8Array;
                };
                clearAdmin(value: _280.MsgClearAdmin): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                storeCode(value: any): {
                    typeUrl: string;
                    value: _280.MsgStoreCode;
                };
                instantiateContract(value: any): {
                    typeUrl: string;
                    value: _280.MsgInstantiateContract;
                };
                executeContract(value: any): {
                    typeUrl: string;
                    value: _280.MsgExecuteContract;
                };
                migrateContract(value: any): {
                    typeUrl: string;
                    value: _280.MsgMigrateContract;
                };
                updateAdmin(value: any): {
                    typeUrl: string;
                    value: _280.MsgUpdateAdmin;
                };
                clearAdmin(value: any): {
                    typeUrl: string;
                    value: _280.MsgClearAdmin;
                };
            };
            toJSON: {
                storeCode(value: _280.MsgStoreCode): {
                    typeUrl: string;
                    value: unknown;
                };
                instantiateContract(value: _280.MsgInstantiateContract): {
                    typeUrl: string;
                    value: unknown;
                };
                executeContract(value: _280.MsgExecuteContract): {
                    typeUrl: string;
                    value: unknown;
                };
                migrateContract(value: _280.MsgMigrateContract): {
                    typeUrl: string;
                    value: unknown;
                };
                updateAdmin(value: _280.MsgUpdateAdmin): {
                    typeUrl: string;
                    value: unknown;
                };
                clearAdmin(value: _280.MsgClearAdmin): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                storeCode(value: _280.MsgStoreCode): {
                    typeUrl: string;
                    value: _280.MsgStoreCode;
                };
                instantiateContract(value: _280.MsgInstantiateContract): {
                    typeUrl: string;
                    value: _280.MsgInstantiateContract;
                };
                executeContract(value: _280.MsgExecuteContract): {
                    typeUrl: string;
                    value: _280.MsgExecuteContract;
                };
                migrateContract(value: _280.MsgMigrateContract): {
                    typeUrl: string;
                    value: _280.MsgMigrateContract;
                };
                updateAdmin(value: _280.MsgUpdateAdmin): {
                    typeUrl: string;
                    value: _280.MsgUpdateAdmin;
                };
                clearAdmin(value: _280.MsgClearAdmin): {
                    typeUrl: string;
                    value: _280.MsgClearAdmin;
                };
            };
            messages: {
                storeCode(value: _280.MsgStoreCode): {
                    typeUrl: string;
                    value: _280.MsgStoreCode;
                };
                instantiateContract(value: _280.MsgInstantiateContract): {
                    typeUrl: string;
                    value: _280.MsgInstantiateContract;
                };
                executeContract(value: _280.MsgExecuteContract): {
                    typeUrl: string;
                    value: _280.MsgExecuteContract;
                };
                migrateContract(value: _280.MsgMigrateContract): {
                    typeUrl: string;
                    value: _280.MsgMigrateContract;
                };
                updateAdmin(value: _280.MsgUpdateAdmin): {
                    typeUrl: string;
                    value: _280.MsgUpdateAdmin;
                };
                clearAdmin(value: _280.MsgClearAdmin): {
                    typeUrl: string;
                    value: _280.MsgClearAdmin;
                };
            };
            QueryContractInfoRequest: {
                encode(message: _278.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryContractInfoRequest;
                fromJSON(object: any): _278.QueryContractInfoRequest;
                toJSON(message: _278.QueryContractInfoRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _278.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _278.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryContractInfoResponse;
                fromJSON(object: any): _278.QueryContractInfoResponse;
                toJSON(message: _278.QueryContractInfoResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _278.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _278.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryContractHistoryRequest;
                fromJSON(object: any): _278.QueryContractHistoryRequest;
                toJSON(message: _278.QueryContractHistoryRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _278.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _278.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryContractHistoryResponse;
                fromJSON(object: any): _278.QueryContractHistoryResponse;
                toJSON(message: _278.QueryContractHistoryResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _278.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _278.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryContractsByCodeRequest;
                fromJSON(object: any): _278.QueryContractsByCodeRequest;
                toJSON(message: _278.QueryContractsByCodeRequest): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _278.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _278.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryContractsByCodeResponse;
                fromJSON(object: any): _278.QueryContractsByCodeResponse;
                toJSON(message: _278.QueryContractsByCodeResponse): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _278.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _278.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryAllContractStateRequest;
                fromJSON(object: any): _278.QueryAllContractStateRequest;
                toJSON(message: _278.QueryAllContractStateRequest): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _278.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _278.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryAllContractStateResponse;
                fromJSON(object: any): _278.QueryAllContractStateResponse;
                toJSON(message: _278.QueryAllContractStateResponse): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _278.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _278.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryRawContractStateRequest;
                fromJSON(object: any): _278.QueryRawContractStateRequest;
                toJSON(message: _278.QueryRawContractStateRequest): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _278.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _278.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryRawContractStateResponse;
                fromJSON(object: any): _278.QueryRawContractStateResponse;
                toJSON(message: _278.QueryRawContractStateResponse): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _278.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _278.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QuerySmartContractStateRequest;
                fromJSON(object: any): _278.QuerySmartContractStateRequest;
                toJSON(message: _278.QuerySmartContractStateRequest): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _278.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _278.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QuerySmartContractStateResponse;
                fromJSON(object: any): _278.QuerySmartContractStateResponse;
                toJSON(message: _278.QuerySmartContractStateResponse): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _278.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _278.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryCodeRequest;
                fromJSON(object: any): _278.QueryCodeRequest;
                toJSON(message: _278.QueryCodeRequest): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _278.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _278.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.CodeInfoResponse;
                fromJSON(object: any): _278.CodeInfoResponse;
                toJSON(message: _278.CodeInfoResponse): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _278.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _278.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryCodeResponse;
                fromJSON(object: any): _278.QueryCodeResponse;
                toJSON(message: _278.QueryCodeResponse): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _278.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _278.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryCodesRequest;
                fromJSON(object: any): _278.QueryCodesRequest;
                toJSON(message: _278.QueryCodesRequest): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _278.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _278.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryCodesResponse;
                fromJSON(object: any): _278.QueryCodesResponse;
                toJSON(message: _278.QueryCodesResponse): unknown;
                fromPartial<I_36 extends unknown>(object: I_36): _278.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _278.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryPinnedCodesRequest;
                fromJSON(object: any): _278.QueryPinnedCodesRequest;
                toJSON(message: _278.QueryPinnedCodesRequest): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _278.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _278.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryPinnedCodesResponse;
                fromJSON(object: any): _278.QueryPinnedCodesResponse;
                toJSON(message: _278.QueryPinnedCodesResponse): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _278.QueryPinnedCodesResponse;
            };
            StoreCodeProposal: {
                encode(message: _276.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.StoreCodeProposal;
                fromJSON(object: any): _276.StoreCodeProposal;
                toJSON(message: _276.StoreCodeProposal): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _276.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _276.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.InstantiateContractProposal;
                fromJSON(object: any): _276.InstantiateContractProposal;
                toJSON(message: _276.InstantiateContractProposal): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _276.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _276.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.MigrateContractProposal;
                fromJSON(object: any): _276.MigrateContractProposal;
                toJSON(message: _276.MigrateContractProposal): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _276.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _276.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.SudoContractProposal;
                fromJSON(object: any): _276.SudoContractProposal;
                toJSON(message: _276.SudoContractProposal): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _276.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _276.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.ExecuteContractProposal;
                fromJSON(object: any): _276.ExecuteContractProposal;
                toJSON(message: _276.ExecuteContractProposal): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _276.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _276.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.UpdateAdminProposal;
                fromJSON(object: any): _276.UpdateAdminProposal;
                toJSON(message: _276.UpdateAdminProposal): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _276.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _276.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.ClearAdminProposal;
                fromJSON(object: any): _276.ClearAdminProposal;
                toJSON(message: _276.ClearAdminProposal): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _276.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _276.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.PinCodesProposal;
                fromJSON(object: any): _276.PinCodesProposal;
                toJSON(message: _276.PinCodesProposal): unknown;
                fromPartial<I_46 extends unknown>(object: I_46): _276.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _276.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.UnpinCodesProposal;
                fromJSON(object: any): _276.UnpinCodesProposal;
                toJSON(message: _276.UnpinCodesProposal): unknown;
                fromPartial<I_47 extends unknown>(object: I_47): _276.UnpinCodesProposal;
            };
            MsgIBCSend: {
                encode(message: _274.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _274.MsgIBCSend;
                fromJSON(object: any): _274.MsgIBCSend;
                toJSON(message: _274.MsgIBCSend): unknown;
                fromPartial<I_48 extends unknown>(object: I_48): _274.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _274.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _274.MsgIBCCloseChannel;
                fromJSON(object: any): _274.MsgIBCCloseChannel;
                toJSON(message: _274.MsgIBCCloseChannel): unknown;
                fromPartial<I_49 extends unknown>(object: I_49): _274.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _272.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.GenesisState;
                fromJSON(object: any): _272.GenesisState;
                toJSON(message: _272.GenesisState): unknown;
                fromPartial<I_50 extends unknown>(object: I_50): _272.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _272.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.GenesisState_GenMsgs;
                fromJSON(object: any): _272.GenesisState_GenMsgs;
                toJSON(message: _272.GenesisState_GenMsgs): unknown;
                fromPartial<I_51 extends unknown>(object: I_51): _272.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _272.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.Code;
                fromJSON(object: any): _272.Code;
                toJSON(message: _272.Code): unknown;
                fromPartial<I_52 extends unknown>(object: I_52): _272.Code;
            };
            Contract: {
                encode(message: _272.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.Contract;
                fromJSON(object: any): _272.Contract;
                toJSON(message: _272.Contract): unknown;
                fromPartial<I_53 extends unknown>(object: I_53): _272.Contract;
            };
            Sequence: {
                encode(message: _272.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.Sequence;
                fromJSON(object: any): _272.Sequence;
                toJSON(message: _272.Sequence): unknown;
                fromPartial<I_54 extends unknown>(object: I_54): _272.Sequence;
            };
        };
    }
}
export declare const gogoproto: {};
export declare namespace google {
    const api: {
        Visibility: {
            encode(message: _352.Visibility, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _352.Visibility;
            fromJSON(object: any): _352.Visibility;
            toJSON(message: _352.Visibility): unknown;
            fromPartial<I extends unknown>(object: I): _352.Visibility;
        };
        VisibilityRule: {
            encode(message: _352.VisibilityRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _352.VisibilityRule;
            fromJSON(object: any): _352.VisibilityRule;
            toJSON(message: _352.VisibilityRule): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _352.VisibilityRule;
        };
        Usage: {
            encode(message: _350.Usage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.Usage;
            fromJSON(object: any): _350.Usage;
            toJSON(message: _350.Usage): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _350.Usage;
        };
        UsageRule: {
            encode(message: _350.UsageRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.UsageRule;
            fromJSON(object: any): _350.UsageRule;
            toJSON(message: _350.UsageRule): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _350.UsageRule;
        };
        SystemParameters: {
            encode(message: _348.SystemParameters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _348.SystemParameters;
            fromJSON(object: any): _348.SystemParameters;
            toJSON(message: _348.SystemParameters): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _348.SystemParameters;
        };
        SystemParameterRule: {
            encode(message: _348.SystemParameterRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _348.SystemParameterRule;
            fromJSON(object: any): _348.SystemParameterRule;
            toJSON(message: _348.SystemParameterRule): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _348.SystemParameterRule;
        };
        SystemParameter: {
            encode(message: _348.SystemParameter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _348.SystemParameter;
            fromJSON(object: any): _348.SystemParameter;
            toJSON(message: _348.SystemParameter): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _348.SystemParameter;
        };
        SourceInfo: {
            encode(message: _346.SourceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.SourceInfo;
            fromJSON(object: any): _346.SourceInfo;
            toJSON(message: _346.SourceInfo): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _346.SourceInfo;
        };
        Service: {
            encode(message: _344.Service, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _344.Service;
            fromJSON(object: any): _344.Service;
            toJSON(message: _344.Service): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _344.Service;
        };
        RoutingRule: {
            encode(message: _342.RoutingRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _342.RoutingRule;
            fromJSON(object: any): _342.RoutingRule;
            toJSON(message: _342.RoutingRule): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _342.RoutingRule;
        };
        RoutingParameter: {
            encode(message: _342.RoutingParameter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _342.RoutingParameter;
            fromJSON(object: any): _342.RoutingParameter;
            toJSON(message: _342.RoutingParameter): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _342.RoutingParameter;
        };
        resourceDescriptor_HistoryFromJSON(object: any): _340.ResourceDescriptor_History;
        resourceDescriptor_HistoryToJSON(object: _340.ResourceDescriptor_History): string;
        resourceDescriptor_StyleFromJSON(object: any): _340.ResourceDescriptor_Style;
        resourceDescriptor_StyleToJSON(object: _340.ResourceDescriptor_Style): string;
        ResourceDescriptor: {
            encode(message: _340.ResourceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.ResourceDescriptor;
            fromJSON(object: any): _340.ResourceDescriptor;
            toJSON(message: _340.ResourceDescriptor): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _340.ResourceDescriptor;
        };
        ResourceDescriptor_History: typeof _340.ResourceDescriptor_History;
        ResourceDescriptor_Style: typeof _340.ResourceDescriptor_Style;
        ResourceReference: {
            encode(message: _340.ResourceReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.ResourceReference;
            fromJSON(object: any): _340.ResourceReference;
            toJSON(message: _340.ResourceReference): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _340.ResourceReference;
        };
        Quota: {
            encode(message: _338.Quota, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.Quota;
            fromJSON(object: any): _338.Quota;
            toJSON(message: _338.Quota): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _338.Quota;
        };
        MetricRule: {
            encode(message: _338.MetricRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.MetricRule;
            fromJSON(object: any): _338.MetricRule;
            toJSON(message: _338.MetricRule): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _338.MetricRule;
        };
        MetricRule_MetricCostsEntry: {
            encode(message: _338.MetricRule_MetricCostsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.MetricRule_MetricCostsEntry;
            fromJSON(object: any): _338.MetricRule_MetricCostsEntry;
            toJSON(message: _338.MetricRule_MetricCostsEntry): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _338.MetricRule_MetricCostsEntry;
        };
        QuotaLimit: {
            encode(message: _338.QuotaLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.QuotaLimit;
            fromJSON(object: any): _338.QuotaLimit;
            toJSON(message: _338.QuotaLimit): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _338.QuotaLimit;
        };
        QuotaLimit_ValuesEntry: {
            encode(message: _338.QuotaLimit_ValuesEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.QuotaLimit_ValuesEntry;
            fromJSON(object: any): _338.QuotaLimit_ValuesEntry;
            toJSON(message: _338.QuotaLimit_ValuesEntry): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _338.QuotaLimit_ValuesEntry;
        };
        Monitoring: {
            encode(message: _336.Monitoring, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _336.Monitoring;
            fromJSON(object: any): _336.Monitoring;
            toJSON(message: _336.Monitoring): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _336.Monitoring;
        };
        Monitoring_MonitoringDestination: {
            encode(message: _336.Monitoring_MonitoringDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _336.Monitoring_MonitoringDestination;
            fromJSON(object: any): _336.Monitoring_MonitoringDestination;
            toJSON(message: _336.Monitoring_MonitoringDestination): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _336.Monitoring_MonitoringDestination;
        };
        MonitoredResourceDescriptor: {
            encode(message: _334.MonitoredResourceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _334.MonitoredResourceDescriptor;
            fromJSON(object: any): _334.MonitoredResourceDescriptor;
            toJSON(message: _334.MonitoredResourceDescriptor): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _334.MonitoredResourceDescriptor;
        };
        MonitoredResource: {
            encode(message: _334.MonitoredResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _334.MonitoredResource;
            fromJSON(object: any): _334.MonitoredResource;
            toJSON(message: _334.MonitoredResource): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _334.MonitoredResource;
        };
        MonitoredResource_LabelsEntry: {
            encode(message: _334.MonitoredResource_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _334.MonitoredResource_LabelsEntry;
            fromJSON(object: any): _334.MonitoredResource_LabelsEntry;
            toJSON(message: _334.MonitoredResource_LabelsEntry): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _334.MonitoredResource_LabelsEntry;
        };
        MonitoredResourceMetadata: {
            encode(message: _334.MonitoredResourceMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _334.MonitoredResourceMetadata;
            fromJSON(object: any): _334.MonitoredResourceMetadata;
            toJSON(message: _334.MonitoredResourceMetadata): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _334.MonitoredResourceMetadata;
        };
        MonitoredResourceMetadata_UserLabelsEntry: {
            encode(message: _334.MonitoredResourceMetadata_UserLabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _334.MonitoredResourceMetadata_UserLabelsEntry;
            fromJSON(object: any): _334.MonitoredResourceMetadata_UserLabelsEntry;
            toJSON(message: _334.MonitoredResourceMetadata_UserLabelsEntry): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _334.MonitoredResourceMetadata_UserLabelsEntry;
        };
        metricDescriptor_MetricKindFromJSON(object: any): _332.MetricDescriptor_MetricKind;
        metricDescriptor_MetricKindToJSON(object: _332.MetricDescriptor_MetricKind): string;
        metricDescriptor_ValueTypeFromJSON(object: any): _332.MetricDescriptor_ValueType;
        metricDescriptor_ValueTypeToJSON(object: _332.MetricDescriptor_ValueType): string;
        MetricDescriptor: {
            encode(message: _332.MetricDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _332.MetricDescriptor;
            fromJSON(object: any): _332.MetricDescriptor;
            toJSON(message: _332.MetricDescriptor): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _332.MetricDescriptor;
        };
        MetricDescriptor_MetricKind: typeof _332.MetricDescriptor_MetricKind;
        MetricDescriptor_ValueType: typeof _332.MetricDescriptor_ValueType;
        MetricDescriptor_MetricDescriptorMetadata: {
            encode(message: _332.MetricDescriptor_MetricDescriptorMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _332.MetricDescriptor_MetricDescriptorMetadata;
            fromJSON(object: any): _332.MetricDescriptor_MetricDescriptorMetadata;
            toJSON(message: _332.MetricDescriptor_MetricDescriptorMetadata): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _332.MetricDescriptor_MetricDescriptorMetadata;
        };
        Metric: {
            encode(message: _332.Metric, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _332.Metric;
            fromJSON(object: any): _332.Metric;
            toJSON(message: _332.Metric): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _332.Metric;
        };
        Metric_LabelsEntry: {
            encode(message: _332.Metric_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _332.Metric_LabelsEntry;
            fromJSON(object: any): _332.Metric_LabelsEntry;
            toJSON(message: _332.Metric_LabelsEntry): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _332.Metric_LabelsEntry;
        };
        Logging: {
            encode(message: _330.Logging, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _330.Logging;
            fromJSON(object: any): _330.Logging;
            toJSON(message: _330.Logging): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _330.Logging;
        };
        Logging_LoggingDestination: {
            encode(message: _330.Logging_LoggingDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _330.Logging_LoggingDestination;
            fromJSON(object: any): _330.Logging_LoggingDestination;
            toJSON(message: _330.Logging_LoggingDestination): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _330.Logging_LoggingDestination;
        };
        LogDescriptor: {
            encode(message: _328.LogDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _328.LogDescriptor;
            fromJSON(object: any): _328.LogDescriptor;
            toJSON(message: _328.LogDescriptor): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _328.LogDescriptor;
        };
        launchStageFromJSON(object: any): _326.LaunchStage;
        launchStageToJSON(object: _326.LaunchStage): string;
        LaunchStage: typeof _326.LaunchStage;
        labelDescriptor_ValueTypeFromJSON(object: any): _324.LabelDescriptor_ValueType;
        labelDescriptor_ValueTypeToJSON(object: _324.LabelDescriptor_ValueType): string;
        LabelDescriptor: {
            encode(message: _324.LabelDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _324.LabelDescriptor;
            fromJSON(object: any): _324.LabelDescriptor;
            toJSON(message: _324.LabelDescriptor): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _324.LabelDescriptor;
        };
        LabelDescriptor_ValueType: typeof _324.LabelDescriptor_ValueType;
        HttpBody: {
            encode(message: _322.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _322.HttpBody;
            fromJSON(object: any): _322.HttpBody;
            toJSON(message: _322.HttpBody): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _322.HttpBody;
        };
        Http: {
            encode(message: _320.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _320.Http;
            fromJSON(object: any): _320.Http;
            toJSON(message: _320.Http): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _320.Http;
        };
        HttpRule: {
            encode(message: _320.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _320.HttpRule;
            fromJSON(object: any): _320.HttpRule;
            toJSON(message: _320.HttpRule): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _320.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _320.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _320.CustomHttpPattern;
            fromJSON(object: any): _320.CustomHttpPattern;
            toJSON(message: _320.CustomHttpPattern): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _320.CustomHttpPattern;
        };
        fieldBehaviorFromJSON(object: any): _318.FieldBehavior;
        fieldBehaviorToJSON(object: _318.FieldBehavior): string;
        FieldBehavior: typeof _318.FieldBehavior;
        errorReasonFromJSON(object: any): _316.ErrorReason;
        errorReasonToJSON(object: _316.ErrorReason): string;
        ErrorReason: typeof _316.ErrorReason;
        Endpoint: {
            encode(message: _314.Endpoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.Endpoint;
            fromJSON(object: any): _314.Endpoint;
            toJSON(message: _314.Endpoint): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _314.Endpoint;
        };
        Documentation: {
            encode(message: _312.Documentation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _312.Documentation;
            fromJSON(object: any): _312.Documentation;
            toJSON(message: _312.Documentation): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _312.Documentation;
        };
        DocumentationRule: {
            encode(message: _312.DocumentationRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _312.DocumentationRule;
            fromJSON(object: any): _312.DocumentationRule;
            toJSON(message: _312.DocumentationRule): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _312.DocumentationRule;
        };
        Page: {
            encode(message: _312.Page, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _312.Page;
            fromJSON(object: any): _312.Page;
            toJSON(message: _312.Page): unknown;
            fromPartial<I_40 extends unknown>(object: I_40): _312.Page;
        };
        Distribution: {
            encode(message: _310.Distribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.Distribution;
            fromJSON(object: any): _310.Distribution;
            toJSON(message: _310.Distribution): unknown;
            fromPartial<I_41 extends unknown>(object: I_41): _310.Distribution;
        };
        Distribution_Range: {
            encode(message: _310.Distribution_Range, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.Distribution_Range;
            fromJSON(object: any): _310.Distribution_Range;
            toJSON(message: _310.Distribution_Range): unknown;
            fromPartial<I_42 extends unknown>(object: I_42): _310.Distribution_Range;
        };
        Distribution_BucketOptions: {
            encode(message: _310.Distribution_BucketOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.Distribution_BucketOptions;
            fromJSON(object: any): _310.Distribution_BucketOptions;
            toJSON(message: _310.Distribution_BucketOptions): unknown;
            fromPartial<I_43 extends unknown>(object: I_43): _310.Distribution_BucketOptions;
        };
        Distribution_BucketOptions_Linear: {
            encode(message: _310.Distribution_BucketOptions_Linear, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.Distribution_BucketOptions_Linear;
            fromJSON(object: any): _310.Distribution_BucketOptions_Linear;
            toJSON(message: _310.Distribution_BucketOptions_Linear): unknown;
            fromPartial<I_44 extends unknown>(object: I_44): _310.Distribution_BucketOptions_Linear;
        };
        Distribution_BucketOptions_Exponential: {
            encode(message: _310.Distribution_BucketOptions_Exponential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.Distribution_BucketOptions_Exponential;
            fromJSON(object: any): _310.Distribution_BucketOptions_Exponential;
            toJSON(message: _310.Distribution_BucketOptions_Exponential): unknown;
            fromPartial<I_45 extends unknown>(object: I_45): _310.Distribution_BucketOptions_Exponential;
        };
        Distribution_BucketOptions_Explicit: {
            encode(message: _310.Distribution_BucketOptions_Explicit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.Distribution_BucketOptions_Explicit;
            fromJSON(object: any): _310.Distribution_BucketOptions_Explicit;
            toJSON(message: _310.Distribution_BucketOptions_Explicit): unknown;
            fromPartial<I_46 extends unknown>(object: I_46): _310.Distribution_BucketOptions_Explicit;
        };
        Distribution_Exemplar: {
            encode(message: _310.Distribution_Exemplar, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.Distribution_Exemplar;
            fromJSON(object: any): _310.Distribution_Exemplar;
            toJSON(message: _310.Distribution_Exemplar): unknown;
            fromPartial<I_47 extends unknown>(object: I_47): _310.Distribution_Exemplar;
        };
        Control: {
            encode(message: _308.Control, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _308.Control;
            fromJSON(object: any): _308.Control;
            toJSON(message: _308.Control): unknown;
            fromPartial<I_48 extends unknown>(object: I_48): _308.Control;
        };
        Context: {
            encode(message: _306.Context, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.Context;
            fromJSON(object: any): _306.Context;
            toJSON(message: _306.Context): unknown;
            fromPartial<I_49 extends unknown>(object: I_49): _306.Context;
        };
        ContextRule: {
            encode(message: _306.ContextRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.ContextRule;
            fromJSON(object: any): _306.ContextRule;
            toJSON(message: _306.ContextRule): unknown;
            fromPartial<I_50 extends unknown>(object: I_50): _306.ContextRule;
        };
        property_PropertyTypeFromJSON(object: any): _304.Property_PropertyType;
        property_PropertyTypeToJSON(object: _304.Property_PropertyType): string;
        ProjectProperties: {
            encode(message: _304.ProjectProperties, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.ProjectProperties;
            fromJSON(object: any): _304.ProjectProperties;
            toJSON(message: _304.ProjectProperties): unknown;
            fromPartial<I_51 extends unknown>(object: I_51): _304.ProjectProperties;
        };
        Property: {
            encode(message: _304.Property, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.Property;
            fromJSON(object: any): _304.Property;
            toJSON(message: _304.Property): unknown;
            fromPartial<I_52 extends unknown>(object: I_52): _304.Property;
        };
        Property_PropertyType: typeof _304.Property_PropertyType;
        changeTypeFromJSON(object: any): _302.ChangeType;
        changeTypeToJSON(object: _302.ChangeType): string;
        ChangeType: typeof _302.ChangeType;
        ConfigChange: {
            encode(message: _302.ConfigChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _302.ConfigChange;
            fromJSON(object: any): _302.ConfigChange;
            toJSON(message: _302.ConfigChange): unknown;
            fromPartial<I_53 extends unknown>(object: I_53): _302.ConfigChange;
        };
        Advice: {
            encode(message: _302.Advice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _302.Advice;
            fromJSON(object: any): _302.Advice;
            toJSON(message: _302.Advice): unknown;
            fromPartial<I_54 extends unknown>(object: I_54): _302.Advice;
        };
        Billing: {
            encode(message: _298.Billing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.Billing;
            fromJSON(object: any): _298.Billing;
            toJSON(message: _298.Billing): unknown;
            fromPartial<I_55 extends unknown>(object: I_55): _298.Billing;
        };
        Billing_BillingDestination: {
            encode(message: _298.Billing_BillingDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.Billing_BillingDestination;
            fromJSON(object: any): _298.Billing_BillingDestination;
            toJSON(message: _298.Billing_BillingDestination): unknown;
            fromPartial<I_56 extends unknown>(object: I_56): _298.Billing_BillingDestination;
        };
        backendRule_PathTranslationFromJSON(object: any): _296.BackendRule_PathTranslation;
        backendRule_PathTranslationToJSON(object: _296.BackendRule_PathTranslation): string;
        Backend: {
            encode(message: _296.Backend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _296.Backend;
            fromJSON(object: any): _296.Backend;
            toJSON(message: _296.Backend): unknown;
            fromPartial<I_57 extends unknown>(object: I_57): _296.Backend;
        };
        BackendRule: {
            encode(message: _296.BackendRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _296.BackendRule;
            fromJSON(object: any): _296.BackendRule;
            toJSON(message: _296.BackendRule): unknown;
            fromPartial<I_58 extends unknown>(object: I_58): _296.BackendRule;
        };
        BackendRule_PathTranslation: typeof _296.BackendRule_PathTranslation;
        Authentication: {
            encode(message: _294.Authentication, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.Authentication;
            fromJSON(object: any): _294.Authentication;
            toJSON(message: _294.Authentication): unknown;
            fromPartial<I_59 extends unknown>(object: I_59): _294.Authentication;
        };
        AuthenticationRule: {
            encode(message: _294.AuthenticationRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.AuthenticationRule;
            fromJSON(object: any): _294.AuthenticationRule;
            toJSON(message: _294.AuthenticationRule): unknown;
            fromPartial<I_60 extends unknown>(object: I_60): _294.AuthenticationRule;
        };
        JwtLocation: {
            encode(message: _294.JwtLocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.JwtLocation;
            fromJSON(object: any): _294.JwtLocation;
            toJSON(message: _294.JwtLocation): unknown;
            fromPartial<I_61 extends unknown>(object: I_61): _294.JwtLocation;
        };
        AuthProvider: {
            encode(message: _294.AuthProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.AuthProvider;
            fromJSON(object: any): _294.AuthProvider;
            toJSON(message: _294.AuthProvider): unknown;
            fromPartial<I_62 extends unknown>(object: I_62): _294.AuthProvider;
        };
        OAuthRequirements: {
            encode(message: _294.OAuthRequirements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.OAuthRequirements;
            fromJSON(object: any): _294.OAuthRequirements;
            toJSON(message: _294.OAuthRequirements): unknown;
            fromPartial<I_63 extends unknown>(object: I_63): _294.OAuthRequirements;
        };
        AuthRequirement: {
            encode(message: _294.AuthRequirement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.AuthRequirement;
            fromJSON(object: any): _294.AuthRequirement;
            toJSON(message: _294.AuthRequirement): unknown;
            fromPartial<I_64 extends unknown>(object: I_64): _294.AuthRequirement;
        };
    };
    namespace logging {
        const type: {
            logSeverityFromJSON(object: any): _356.LogSeverity;
            logSeverityToJSON(object: _356.LogSeverity): string;
            LogSeverity: typeof _356.LogSeverity;
            HttpRequest: {
                encode(message: _354.HttpRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _354.HttpRequest;
                fromJSON(object: any): _354.HttpRequest;
                toJSON(message: _354.HttpRequest): unknown;
                fromPartial<I extends unknown>(object: I): _354.HttpRequest;
            };
        };
        const v2: {
            tailLogEntriesResponse_SuppressionInfo_ReasonFromJSON(object: any): _364.TailLogEntriesResponse_SuppressionInfo_Reason;
            tailLogEntriesResponse_SuppressionInfo_ReasonToJSON(object: _364.TailLogEntriesResponse_SuppressionInfo_Reason): string;
            DeleteLogRequest: {
                encode(message: _364.DeleteLogRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.DeleteLogRequest;
                fromJSON(object: any): _364.DeleteLogRequest;
                toJSON(message: _364.DeleteLogRequest): unknown;
                fromPartial<I extends unknown>(object: I): _364.DeleteLogRequest;
            };
            WriteLogEntriesRequest: {
                encode(message: _364.WriteLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.WriteLogEntriesRequest;
                fromJSON(object: any): _364.WriteLogEntriesRequest;
                toJSON(message: _364.WriteLogEntriesRequest): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _364.WriteLogEntriesRequest;
            };
            WriteLogEntriesRequest_LabelsEntry: {
                encode(message: _364.WriteLogEntriesRequest_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.WriteLogEntriesRequest_LabelsEntry;
                fromJSON(object: any): _364.WriteLogEntriesRequest_LabelsEntry;
                toJSON(message: _364.WriteLogEntriesRequest_LabelsEntry): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _364.WriteLogEntriesRequest_LabelsEntry;
            };
            WriteLogEntriesResponse: {
                encode(_: _364.WriteLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.WriteLogEntriesResponse;
                fromJSON(_: any): _364.WriteLogEntriesResponse;
                toJSON(_: _364.WriteLogEntriesResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _364.WriteLogEntriesResponse;
            };
            WriteLogEntriesPartialErrors: {
                encode(message: _364.WriteLogEntriesPartialErrors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.WriteLogEntriesPartialErrors;
                fromJSON(object: any): _364.WriteLogEntriesPartialErrors;
                toJSON(message: _364.WriteLogEntriesPartialErrors): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _364.WriteLogEntriesPartialErrors;
            };
            WriteLogEntriesPartialErrors_LogEntryErrorsEntry: {
                encode(message: _364.WriteLogEntriesPartialErrors_LogEntryErrorsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
                fromJSON(object: any): _364.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
                toJSON(message: _364.WriteLogEntriesPartialErrors_LogEntryErrorsEntry): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _364.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
            };
            ListLogEntriesRequest: {
                encode(message: _364.ListLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.ListLogEntriesRequest;
                fromJSON(object: any): _364.ListLogEntriesRequest;
                toJSON(message: _364.ListLogEntriesRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _364.ListLogEntriesRequest;
            };
            ListLogEntriesResponse: {
                encode(message: _364.ListLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.ListLogEntriesResponse;
                fromJSON(object: any): _364.ListLogEntriesResponse;
                toJSON(message: _364.ListLogEntriesResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _364.ListLogEntriesResponse;
            };
            ListMonitoredResourceDescriptorsRequest: {
                encode(message: _364.ListMonitoredResourceDescriptorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.ListMonitoredResourceDescriptorsRequest;
                fromJSON(object: any): _364.ListMonitoredResourceDescriptorsRequest;
                toJSON(message: _364.ListMonitoredResourceDescriptorsRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _364.ListMonitoredResourceDescriptorsRequest;
            };
            ListMonitoredResourceDescriptorsResponse: {
                encode(message: _364.ListMonitoredResourceDescriptorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.ListMonitoredResourceDescriptorsResponse;
                fromJSON(object: any): _364.ListMonitoredResourceDescriptorsResponse;
                toJSON(message: _364.ListMonitoredResourceDescriptorsResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _364.ListMonitoredResourceDescriptorsResponse;
            };
            ListLogsRequest: {
                encode(message: _364.ListLogsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.ListLogsRequest;
                fromJSON(object: any): _364.ListLogsRequest;
                toJSON(message: _364.ListLogsRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _364.ListLogsRequest;
            };
            ListLogsResponse: {
                encode(message: _364.ListLogsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.ListLogsResponse;
                fromJSON(object: any): _364.ListLogsResponse;
                toJSON(message: _364.ListLogsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _364.ListLogsResponse;
            };
            TailLogEntriesRequest: {
                encode(message: _364.TailLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.TailLogEntriesRequest;
                fromJSON(object: any): _364.TailLogEntriesRequest;
                toJSON(message: _364.TailLogEntriesRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _364.TailLogEntriesRequest;
            };
            TailLogEntriesResponse: {
                encode(message: _364.TailLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.TailLogEntriesResponse;
                fromJSON(object: any): _364.TailLogEntriesResponse;
                toJSON(message: _364.TailLogEntriesResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _364.TailLogEntriesResponse;
            };
            TailLogEntriesResponse_SuppressionInfo: {
                encode(message: _364.TailLogEntriesResponse_SuppressionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.TailLogEntriesResponse_SuppressionInfo;
                fromJSON(object: any): _364.TailLogEntriesResponse_SuppressionInfo;
                toJSON(message: _364.TailLogEntriesResponse_SuppressionInfo): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _364.TailLogEntriesResponse_SuppressionInfo;
            };
            TailLogEntriesResponse_SuppressionInfo_Reason: typeof _364.TailLogEntriesResponse_SuppressionInfo_Reason;
            LoggingServiceV2ClientImpl: typeof _364.LoggingServiceV2ClientImpl;
            logMetric_ApiVersionFromJSON(object: any): _362.LogMetric_ApiVersion;
            logMetric_ApiVersionToJSON(object: _362.LogMetric_ApiVersion): string;
            LogMetric: {
                encode(message: _362.LogMetric, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _362.LogMetric;
                fromJSON(object: any): _362.LogMetric;
                toJSON(message: _362.LogMetric): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _362.LogMetric;
            };
            LogMetric_ApiVersion: typeof _362.LogMetric_ApiVersion;
            LogMetric_LabelExtractorsEntry: {
                encode(message: _362.LogMetric_LabelExtractorsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _362.LogMetric_LabelExtractorsEntry;
                fromJSON(object: any): _362.LogMetric_LabelExtractorsEntry;
                toJSON(message: _362.LogMetric_LabelExtractorsEntry): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _362.LogMetric_LabelExtractorsEntry;
            };
            ListLogMetricsRequest: {
                encode(message: _362.ListLogMetricsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _362.ListLogMetricsRequest;
                fromJSON(object: any): _362.ListLogMetricsRequest;
                toJSON(message: _362.ListLogMetricsRequest): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _362.ListLogMetricsRequest;
            };
            ListLogMetricsResponse: {
                encode(message: _362.ListLogMetricsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _362.ListLogMetricsResponse;
                fromJSON(object: any): _362.ListLogMetricsResponse;
                toJSON(message: _362.ListLogMetricsResponse): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _362.ListLogMetricsResponse;
            };
            GetLogMetricRequest: {
                encode(message: _362.GetLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _362.GetLogMetricRequest;
                fromJSON(object: any): _362.GetLogMetricRequest;
                toJSON(message: _362.GetLogMetricRequest): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _362.GetLogMetricRequest;
            };
            CreateLogMetricRequest: {
                encode(message: _362.CreateLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _362.CreateLogMetricRequest;
                fromJSON(object: any): _362.CreateLogMetricRequest;
                toJSON(message: _362.CreateLogMetricRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _362.CreateLogMetricRequest;
            };
            UpdateLogMetricRequest: {
                encode(message: _362.UpdateLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _362.UpdateLogMetricRequest;
                fromJSON(object: any): _362.UpdateLogMetricRequest;
                toJSON(message: _362.UpdateLogMetricRequest): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _362.UpdateLogMetricRequest;
            };
            DeleteLogMetricRequest: {
                encode(message: _362.DeleteLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _362.DeleteLogMetricRequest;
                fromJSON(object: any): _362.DeleteLogMetricRequest;
                toJSON(message: _362.DeleteLogMetricRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _362.DeleteLogMetricRequest;
            };
            MetricsServiceV2ClientImpl: typeof _362.MetricsServiceV2ClientImpl;
            lifecycleStateFromJSON(object: any): _360.LifecycleState;
            lifecycleStateToJSON(object: _360.LifecycleState): string;
            operationStateFromJSON(object: any): _360.OperationState;
            operationStateToJSON(object: _360.OperationState): string;
            logSink_VersionFormatFromJSON(object: any): _360.LogSink_VersionFormat;
            logSink_VersionFormatToJSON(object: _360.LogSink_VersionFormat): string;
            LifecycleState: typeof _360.LifecycleState;
            OperationState: typeof _360.OperationState;
            LogBucket: {
                encode(message: _360.LogBucket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.LogBucket;
                fromJSON(object: any): _360.LogBucket;
                toJSON(message: _360.LogBucket): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _360.LogBucket;
            };
            LogView: {
                encode(message: _360.LogView, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.LogView;
                fromJSON(object: any): _360.LogView;
                toJSON(message: _360.LogView): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _360.LogView;
            };
            LogSink: {
                encode(message: _360.LogSink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.LogSink;
                fromJSON(object: any): _360.LogSink;
                toJSON(message: _360.LogSink): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _360.LogSink;
            };
            LogSink_VersionFormat: typeof _360.LogSink_VersionFormat;
            BigQueryOptions: {
                encode(message: _360.BigQueryOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.BigQueryOptions;
                fromJSON(object: any): _360.BigQueryOptions;
                toJSON(message: _360.BigQueryOptions): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _360.BigQueryOptions;
            };
            ListBucketsRequest: {
                encode(message: _360.ListBucketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.ListBucketsRequest;
                fromJSON(object: any): _360.ListBucketsRequest;
                toJSON(message: _360.ListBucketsRequest): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _360.ListBucketsRequest;
            };
            ListBucketsResponse: {
                encode(message: _360.ListBucketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.ListBucketsResponse;
                fromJSON(object: any): _360.ListBucketsResponse;
                toJSON(message: _360.ListBucketsResponse): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _360.ListBucketsResponse;
            };
            CreateBucketRequest: {
                encode(message: _360.CreateBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.CreateBucketRequest;
                fromJSON(object: any): _360.CreateBucketRequest;
                toJSON(message: _360.CreateBucketRequest): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _360.CreateBucketRequest;
            };
            UpdateBucketRequest: {
                encode(message: _360.UpdateBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.UpdateBucketRequest;
                fromJSON(object: any): _360.UpdateBucketRequest;
                toJSON(message: _360.UpdateBucketRequest): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _360.UpdateBucketRequest;
            };
            GetBucketRequest: {
                encode(message: _360.GetBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.GetBucketRequest;
                fromJSON(object: any): _360.GetBucketRequest;
                toJSON(message: _360.GetBucketRequest): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _360.GetBucketRequest;
            };
            DeleteBucketRequest: {
                encode(message: _360.DeleteBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.DeleteBucketRequest;
                fromJSON(object: any): _360.DeleteBucketRequest;
                toJSON(message: _360.DeleteBucketRequest): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _360.DeleteBucketRequest;
            };
            UndeleteBucketRequest: {
                encode(message: _360.UndeleteBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.UndeleteBucketRequest;
                fromJSON(object: any): _360.UndeleteBucketRequest;
                toJSON(message: _360.UndeleteBucketRequest): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _360.UndeleteBucketRequest;
            };
            ListViewsRequest: {
                encode(message: _360.ListViewsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.ListViewsRequest;
                fromJSON(object: any): _360.ListViewsRequest;
                toJSON(message: _360.ListViewsRequest): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _360.ListViewsRequest;
            };
            ListViewsResponse: {
                encode(message: _360.ListViewsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.ListViewsResponse;
                fromJSON(object: any): _360.ListViewsResponse;
                toJSON(message: _360.ListViewsResponse): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _360.ListViewsResponse;
            };
            CreateViewRequest: {
                encode(message: _360.CreateViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.CreateViewRequest;
                fromJSON(object: any): _360.CreateViewRequest;
                toJSON(message: _360.CreateViewRequest): unknown;
                fromPartial<I_36 extends unknown>(object: I_36): _360.CreateViewRequest;
            };
            UpdateViewRequest: {
                encode(message: _360.UpdateViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.UpdateViewRequest;
                fromJSON(object: any): _360.UpdateViewRequest;
                toJSON(message: _360.UpdateViewRequest): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _360.UpdateViewRequest;
            };
            GetViewRequest: {
                encode(message: _360.GetViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.GetViewRequest;
                fromJSON(object: any): _360.GetViewRequest;
                toJSON(message: _360.GetViewRequest): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _360.GetViewRequest;
            };
            DeleteViewRequest: {
                encode(message: _360.DeleteViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.DeleteViewRequest;
                fromJSON(object: any): _360.DeleteViewRequest;
                toJSON(message: _360.DeleteViewRequest): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _360.DeleteViewRequest;
            };
            ListSinksRequest: {
                encode(message: _360.ListSinksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.ListSinksRequest;
                fromJSON(object: any): _360.ListSinksRequest;
                toJSON(message: _360.ListSinksRequest): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _360.ListSinksRequest;
            };
            ListSinksResponse: {
                encode(message: _360.ListSinksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.ListSinksResponse;
                fromJSON(object: any): _360.ListSinksResponse;
                toJSON(message: _360.ListSinksResponse): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _360.ListSinksResponse;
            };
            GetSinkRequest: {
                encode(message: _360.GetSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.GetSinkRequest;
                fromJSON(object: any): _360.GetSinkRequest;
                toJSON(message: _360.GetSinkRequest): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _360.GetSinkRequest;
            };
            CreateSinkRequest: {
                encode(message: _360.CreateSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.CreateSinkRequest;
                fromJSON(object: any): _360.CreateSinkRequest;
                toJSON(message: _360.CreateSinkRequest): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _360.CreateSinkRequest;
            };
            UpdateSinkRequest: {
                encode(message: _360.UpdateSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.UpdateSinkRequest;
                fromJSON(object: any): _360.UpdateSinkRequest;
                toJSON(message: _360.UpdateSinkRequest): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _360.UpdateSinkRequest;
            };
            DeleteSinkRequest: {
                encode(message: _360.DeleteSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.DeleteSinkRequest;
                fromJSON(object: any): _360.DeleteSinkRequest;
                toJSON(message: _360.DeleteSinkRequest): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _360.DeleteSinkRequest;
            };
            LogExclusion: {
                encode(message: _360.LogExclusion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.LogExclusion;
                fromJSON(object: any): _360.LogExclusion;
                toJSON(message: _360.LogExclusion): unknown;
                fromPartial<I_46 extends unknown>(object: I_46): _360.LogExclusion;
            };
            ListExclusionsRequest: {
                encode(message: _360.ListExclusionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.ListExclusionsRequest;
                fromJSON(object: any): _360.ListExclusionsRequest;
                toJSON(message: _360.ListExclusionsRequest): unknown;
                fromPartial<I_47 extends unknown>(object: I_47): _360.ListExclusionsRequest;
            };
            ListExclusionsResponse: {
                encode(message: _360.ListExclusionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.ListExclusionsResponse;
                fromJSON(object: any): _360.ListExclusionsResponse;
                toJSON(message: _360.ListExclusionsResponse): unknown;
                fromPartial<I_48 extends unknown>(object: I_48): _360.ListExclusionsResponse;
            };
            GetExclusionRequest: {
                encode(message: _360.GetExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.GetExclusionRequest;
                fromJSON(object: any): _360.GetExclusionRequest;
                toJSON(message: _360.GetExclusionRequest): unknown;
                fromPartial<I_49 extends unknown>(object: I_49): _360.GetExclusionRequest;
            };
            CreateExclusionRequest: {
                encode(message: _360.CreateExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.CreateExclusionRequest;
                fromJSON(object: any): _360.CreateExclusionRequest;
                toJSON(message: _360.CreateExclusionRequest): unknown;
                fromPartial<I_50 extends unknown>(object: I_50): _360.CreateExclusionRequest;
            };
            UpdateExclusionRequest: {
                encode(message: _360.UpdateExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.UpdateExclusionRequest;
                fromJSON(object: any): _360.UpdateExclusionRequest;
                toJSON(message: _360.UpdateExclusionRequest): unknown;
                fromPartial<I_51 extends unknown>(object: I_51): _360.UpdateExclusionRequest;
            };
            DeleteExclusionRequest: {
                encode(message: _360.DeleteExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.DeleteExclusionRequest;
                fromJSON(object: any): _360.DeleteExclusionRequest;
                toJSON(message: _360.DeleteExclusionRequest): unknown;
                fromPartial<I_52 extends unknown>(object: I_52): _360.DeleteExclusionRequest;
            };
            GetCmekSettingsRequest: {
                encode(message: _360.GetCmekSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.GetCmekSettingsRequest;
                fromJSON(object: any): _360.GetCmekSettingsRequest;
                toJSON(message: _360.GetCmekSettingsRequest): unknown;
                fromPartial<I_53 extends unknown>(object: I_53): _360.GetCmekSettingsRequest;
            };
            UpdateCmekSettingsRequest: {
                encode(message: _360.UpdateCmekSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.UpdateCmekSettingsRequest;
                fromJSON(object: any): _360.UpdateCmekSettingsRequest;
                toJSON(message: _360.UpdateCmekSettingsRequest): unknown;
                fromPartial<I_54 extends unknown>(object: I_54): _360.UpdateCmekSettingsRequest;
            };
            CmekSettings: {
                encode(message: _360.CmekSettings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.CmekSettings;
                fromJSON(object: any): _360.CmekSettings;
                toJSON(message: _360.CmekSettings): unknown;
                fromPartial<I_55 extends unknown>(object: I_55): _360.CmekSettings;
            };
            GetSettingsRequest: {
                encode(message: _360.GetSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.GetSettingsRequest;
                fromJSON(object: any): _360.GetSettingsRequest;
                toJSON(message: _360.GetSettingsRequest): unknown;
                fromPartial<I_56 extends unknown>(object: I_56): _360.GetSettingsRequest;
            };
            UpdateSettingsRequest: {
                encode(message: _360.UpdateSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.UpdateSettingsRequest;
                fromJSON(object: any): _360.UpdateSettingsRequest;
                toJSON(message: _360.UpdateSettingsRequest): unknown;
                fromPartial<I_57 extends unknown>(object: I_57): _360.UpdateSettingsRequest;
            };
            Settings: {
                encode(message: _360.Settings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.Settings;
                fromJSON(object: any): _360.Settings;
                toJSON(message: _360.Settings): unknown;
                fromPartial<I_58 extends unknown>(object: I_58): _360.Settings;
            };
            CopyLogEntriesRequest: {
                encode(message: _360.CopyLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.CopyLogEntriesRequest;
                fromJSON(object: any): _360.CopyLogEntriesRequest;
                toJSON(message: _360.CopyLogEntriesRequest): unknown;
                fromPartial<I_59 extends unknown>(object: I_59): _360.CopyLogEntriesRequest;
            };
            CopyLogEntriesMetadata: {
                encode(message: _360.CopyLogEntriesMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.CopyLogEntriesMetadata;
                fromJSON(object: any): _360.CopyLogEntriesMetadata;
                toJSON(message: _360.CopyLogEntriesMetadata): unknown;
                fromPartial<I_60 extends unknown>(object: I_60): _360.CopyLogEntriesMetadata;
            };
            CopyLogEntriesResponse: {
                encode(message: _360.CopyLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.CopyLogEntriesResponse;
                fromJSON(object: any): _360.CopyLogEntriesResponse;
                toJSON(message: _360.CopyLogEntriesResponse): unknown;
                fromPartial<I_61 extends unknown>(object: I_61): _360.CopyLogEntriesResponse;
            };
            ConfigServiceV2ClientImpl: typeof _360.ConfigServiceV2ClientImpl;
            LogEntry: {
                encode(message: _358.LogEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _358.LogEntry;
                fromJSON(object: any): _358.LogEntry;
                toJSON(message: _358.LogEntry): unknown;
                fromPartial<I_62 extends unknown>(object: I_62): _358.LogEntry;
            };
            LogEntry_LabelsEntry: {
                encode(message: _358.LogEntry_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _358.LogEntry_LabelsEntry;
                fromJSON(object: any): _358.LogEntry_LabelsEntry;
                toJSON(message: _358.LogEntry_LabelsEntry): unknown;
                fromPartial<I_63 extends unknown>(object: I_63): _358.LogEntry_LabelsEntry;
            };
            LogEntryOperation: {
                encode(message: _358.LogEntryOperation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _358.LogEntryOperation;
                fromJSON(object: any): _358.LogEntryOperation;
                toJSON(message: _358.LogEntryOperation): unknown;
                fromPartial<I_64 extends unknown>(object: I_64): _358.LogEntryOperation;
            };
            LogEntrySourceLocation: {
                encode(message: _358.LogEntrySourceLocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _358.LogEntrySourceLocation;
                fromJSON(object: any): _358.LogEntrySourceLocation;
                toJSON(message: _358.LogEntrySourceLocation): unknown;
                fromPartial<I_65 extends unknown>(object: I_65): _358.LogEntrySourceLocation;
            };
            LogSplit: {
                encode(message: _358.LogSplit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _358.LogSplit;
                fromJSON(object: any): _358.LogSplit;
                toJSON(message: _358.LogSplit): unknown;
                fromPartial<I_66 extends unknown>(object: I_66): _358.LogSplit;
            };
        };
    }
    const longrunning: {
        Operation: {
            encode(message: _366.Operation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _366.Operation;
            fromJSON(object: any): _366.Operation;
            toJSON(message: _366.Operation): unknown;
            fromPartial<I extends unknown>(object: I): _366.Operation;
        };
        GetOperationRequest: {
            encode(message: _366.GetOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _366.GetOperationRequest;
            fromJSON(object: any): _366.GetOperationRequest;
            toJSON(message: _366.GetOperationRequest): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _366.GetOperationRequest;
        };
        ListOperationsRequest: {
            encode(message: _366.ListOperationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _366.ListOperationsRequest;
            fromJSON(object: any): _366.ListOperationsRequest;
            toJSON(message: _366.ListOperationsRequest): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _366.ListOperationsRequest;
        };
        ListOperationsResponse: {
            encode(message: _366.ListOperationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _366.ListOperationsResponse;
            fromJSON(object: any): _366.ListOperationsResponse;
            toJSON(message: _366.ListOperationsResponse): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _366.ListOperationsResponse;
        };
        CancelOperationRequest: {
            encode(message: _366.CancelOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _366.CancelOperationRequest;
            fromJSON(object: any): _366.CancelOperationRequest;
            toJSON(message: _366.CancelOperationRequest): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _366.CancelOperationRequest;
        };
        DeleteOperationRequest: {
            encode(message: _366.DeleteOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _366.DeleteOperationRequest;
            fromJSON(object: any): _366.DeleteOperationRequest;
            toJSON(message: _366.DeleteOperationRequest): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _366.DeleteOperationRequest;
        };
        WaitOperationRequest: {
            encode(message: _366.WaitOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _366.WaitOperationRequest;
            fromJSON(object: any): _366.WaitOperationRequest;
            toJSON(message: _366.WaitOperationRequest): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _366.WaitOperationRequest;
        };
        OperationInfo: {
            encode(message: _366.OperationInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _366.OperationInfo;
            fromJSON(object: any): _366.OperationInfo;
            toJSON(message: _366.OperationInfo): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _366.OperationInfo;
        };
        OperationsClientImpl: typeof _366.OperationsClientImpl;
    };
    const protobuf: {
        DoubleValue: {
            encode(message: _388.DoubleValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _388.DoubleValue;
            fromJSON(object: any): _388.DoubleValue;
            toJSON(message: _388.DoubleValue): unknown;
            fromPartial<I extends unknown>(object: I): _388.DoubleValue;
        };
        FloatValue: {
            encode(message: _388.FloatValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _388.FloatValue;
            fromJSON(object: any): _388.FloatValue;
            toJSON(message: _388.FloatValue): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _388.FloatValue;
        };
        Int64Value: {
            encode(message: _388.Int64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _388.Int64Value;
            fromJSON(object: any): _388.Int64Value;
            toJSON(message: _388.Int64Value): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _388.Int64Value;
        };
        UInt64Value: {
            encode(message: _388.UInt64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _388.UInt64Value;
            fromJSON(object: any): _388.UInt64Value;
            toJSON(message: _388.UInt64Value): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _388.UInt64Value;
        };
        Int32Value: {
            encode(message: _388.Int32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _388.Int32Value;
            fromJSON(object: any): _388.Int32Value;
            toJSON(message: _388.Int32Value): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _388.Int32Value;
        };
        UInt32Value: {
            encode(message: _388.UInt32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _388.UInt32Value;
            fromJSON(object: any): _388.UInt32Value;
            toJSON(message: _388.UInt32Value): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _388.UInt32Value;
        };
        BoolValue: {
            encode(message: _388.BoolValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _388.BoolValue;
            fromJSON(object: any): _388.BoolValue;
            toJSON(message: _388.BoolValue): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _388.BoolValue;
        };
        StringValue: {
            encode(message: _388.StringValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _388.StringValue;
            fromJSON(object: any): _388.StringValue;
            toJSON(message: _388.StringValue): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _388.StringValue;
        };
        BytesValue: {
            encode(message: _388.BytesValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _388.BytesValue;
            fromJSON(object: any): _388.BytesValue;
            toJSON(message: _388.BytesValue): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _388.BytesValue;
        };
        syntaxFromJSON(object: any): _386.Syntax;
        syntaxToJSON(object: _386.Syntax): string;
        field_KindFromJSON(object: any): _386.Field_Kind;
        field_KindToJSON(object: _386.Field_Kind): string;
        field_CardinalityFromJSON(object: any): _386.Field_Cardinality;
        field_CardinalityToJSON(object: _386.Field_Cardinality): string;
        Syntax: typeof _386.Syntax;
        Type: {
            encode(message: _386.Type, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.Type;
            fromJSON(object: any): _386.Type;
            toJSON(message: _386.Type): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _386.Type;
        };
        Field: {
            encode(message: _386.Field, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.Field;
            fromJSON(object: any): _386.Field;
            toJSON(message: _386.Field): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _386.Field;
        };
        Field_Kind: typeof _386.Field_Kind;
        Field_Cardinality: typeof _386.Field_Cardinality;
        Enum: {
            encode(message: _386.Enum, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.Enum;
            fromJSON(object: any): _386.Enum;
            toJSON(message: _386.Enum): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _386.Enum;
        };
        EnumValue: {
            encode(message: _386.EnumValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.EnumValue;
            fromJSON(object: any): _386.EnumValue;
            toJSON(message: _386.EnumValue): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _386.EnumValue;
        };
        Option: {
            encode(message: _386.Option, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.Option;
            fromJSON(object: any): _386.Option;
            toJSON(message: _386.Option): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _386.Option;
        };
        Timestamp: {
            encode(message: _384.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _384.Timestamp;
            fromJSON(object: any): _384.Timestamp;
            toJSON(message: _384.Timestamp): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _384.Timestamp;
        };
        nullValueFromJSON(object: any): _382.NullValue;
        nullValueToJSON(object: _382.NullValue): string;
        NullValue: typeof _382.NullValue;
        Struct: {
            encode(message: _382.Struct, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.Struct;
            fromJSON(object: any): _382.Struct;
            toJSON(message: _382.Struct): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _382.Struct;
            wrap(object: {
                [key: string]: any;
            }): _382.Struct;
            unwrap(message: _382.Struct): {
                [key: string]: any;
            };
        };
        Struct_FieldsEntry: {
            encode(message: _382.Struct_FieldsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.Struct_FieldsEntry;
            fromJSON(object: any): _382.Struct_FieldsEntry;
            toJSON(message: _382.Struct_FieldsEntry): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _382.Struct_FieldsEntry;
        };
        Value: {
            encode(message: _382.Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.Value;
            fromJSON(object: any): _382.Value;
            toJSON(message: _382.Value): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _382.Value;
            wrap(value: any): _382.Value;
            unwrap(message: _382.Value): string | number | boolean | Object | any[];
        };
        ListValue: {
            encode(message: _382.ListValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.ListValue;
            fromJSON(object: any): _382.ListValue;
            toJSON(message: _382.ListValue): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _382.ListValue;
            wrap(value: any[]): _382.ListValue;
            unwrap(message: _382.ListValue): any[];
        };
        SourceContext: {
            encode(message: _380.SourceContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _380.SourceContext;
            fromJSON(object: any): _380.SourceContext;
            toJSON(message: _380.SourceContext): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _380.SourceContext;
        };
        FieldMask: {
            encode(message: _378.FieldMask, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _378.FieldMask;
            fromJSON(object: any): _378.FieldMask;
            toJSON(message: _378.FieldMask): string;
            fromPartial<I_20 extends unknown>(object: I_20): _378.FieldMask;
            wrap(paths: string[]): _378.FieldMask;
            unwrap(message: _378.FieldMask): string[];
        };
        Empty: {
            encode(_: _376.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _376.Empty;
            fromJSON(_: any): _376.Empty;
            toJSON(_: _376.Empty): unknown;
            fromPartial<I_21 extends unknown>(_: I_21): _376.Empty;
        };
        Duration: {
            encode(message: _374.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _374.Duration;
            fromJSON(object: any): _374.Duration;
            toJSON(message: _374.Duration): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _374.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _372.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _372.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _372.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _372.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _372.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _372.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _372.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _372.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _372.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _372.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _372.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _372.MethodOptions_IdempotencyLevel): string;
        FileDescriptorSet: {
            encode(message: _372.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.FileDescriptorSet;
            fromJSON(object: any): _372.FileDescriptorSet;
            toJSON(message: _372.FileDescriptorSet): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _372.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _372.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.FileDescriptorProto;
            fromJSON(object: any): _372.FileDescriptorProto;
            toJSON(message: _372.FileDescriptorProto): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _372.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _372.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.DescriptorProto;
            fromJSON(object: any): _372.DescriptorProto;
            toJSON(message: _372.DescriptorProto): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _372.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _372.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _372.DescriptorProto_ExtensionRange;
            toJSON(message: _372.DescriptorProto_ExtensionRange): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _372.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _372.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.DescriptorProto_ReservedRange;
            fromJSON(object: any): _372.DescriptorProto_ReservedRange;
            toJSON(message: _372.DescriptorProto_ReservedRange): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _372.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _372.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.ExtensionRangeOptions;
            fromJSON(object: any): _372.ExtensionRangeOptions;
            toJSON(message: _372.ExtensionRangeOptions): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _372.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _372.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.FieldDescriptorProto;
            fromJSON(object: any): _372.FieldDescriptorProto;
            toJSON(message: _372.FieldDescriptorProto): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _372.FieldDescriptorProto;
        };
        FieldDescriptorProto_Type: typeof _372.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _372.FieldDescriptorProto_Label;
        OneofDescriptorProto: {
            encode(message: _372.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.OneofDescriptorProto;
            fromJSON(object: any): _372.OneofDescriptorProto;
            toJSON(message: _372.OneofDescriptorProto): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _372.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _372.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.EnumDescriptorProto;
            fromJSON(object: any): _372.EnumDescriptorProto;
            toJSON(message: _372.EnumDescriptorProto): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _372.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _372.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _372.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _372.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _372.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _372.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.EnumValueDescriptorProto;
            fromJSON(object: any): _372.EnumValueDescriptorProto;
            toJSON(message: _372.EnumValueDescriptorProto): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _372.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _372.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.ServiceDescriptorProto;
            fromJSON(object: any): _372.ServiceDescriptorProto;
            toJSON(message: _372.ServiceDescriptorProto): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _372.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _372.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.MethodDescriptorProto;
            fromJSON(object: any): _372.MethodDescriptorProto;
            toJSON(message: _372.MethodDescriptorProto): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _372.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _372.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.FileOptions;
            fromJSON(object: any): _372.FileOptions;
            toJSON(message: _372.FileOptions): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _372.FileOptions;
        };
        FileOptions_OptimizeMode: typeof _372.FileOptions_OptimizeMode;
        MessageOptions: {
            encode(message: _372.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.MessageOptions;
            fromJSON(object: any): _372.MessageOptions;
            toJSON(message: _372.MessageOptions): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _372.MessageOptions;
        };
        FieldOptions: {
            encode(message: _372.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.FieldOptions;
            fromJSON(object: any): _372.FieldOptions;
            toJSON(message: _372.FieldOptions): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _372.FieldOptions;
        };
        FieldOptions_CType: typeof _372.FieldOptions_CType;
        FieldOptions_JSType: typeof _372.FieldOptions_JSType;
        OneofOptions: {
            encode(message: _372.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.OneofOptions;
            fromJSON(object: any): _372.OneofOptions;
            toJSON(message: _372.OneofOptions): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _372.OneofOptions;
        };
        EnumOptions: {
            encode(message: _372.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.EnumOptions;
            fromJSON(object: any): _372.EnumOptions;
            toJSON(message: _372.EnumOptions): unknown;
            fromPartial<I_40 extends unknown>(object: I_40): _372.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _372.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.EnumValueOptions;
            fromJSON(object: any): _372.EnumValueOptions;
            toJSON(message: _372.EnumValueOptions): unknown;
            fromPartial<I_41 extends unknown>(object: I_41): _372.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _372.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.ServiceOptions;
            fromJSON(object: any): _372.ServiceOptions;
            toJSON(message: _372.ServiceOptions): unknown;
            fromPartial<I_42 extends unknown>(object: I_42): _372.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _372.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.MethodOptions;
            fromJSON(object: any): _372.MethodOptions;
            toJSON(message: _372.MethodOptions): unknown;
            fromPartial<I_43 extends unknown>(object: I_43): _372.MethodOptions;
        };
        MethodOptions_IdempotencyLevel: typeof _372.MethodOptions_IdempotencyLevel;
        UninterpretedOption: {
            encode(message: _372.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.UninterpretedOption;
            fromJSON(object: any): _372.UninterpretedOption;
            toJSON(message: _372.UninterpretedOption): unknown;
            fromPartial<I_44 extends unknown>(object: I_44): _372.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _372.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.UninterpretedOption_NamePart;
            fromJSON(object: any): _372.UninterpretedOption_NamePart;
            toJSON(message: _372.UninterpretedOption_NamePart): unknown;
            fromPartial<I_45 extends unknown>(object: I_45): _372.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _372.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.SourceCodeInfo;
            fromJSON(object: any): _372.SourceCodeInfo;
            toJSON(message: _372.SourceCodeInfo): unknown;
            fromPartial<I_46 extends unknown>(object: I_46): _372.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _372.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.SourceCodeInfo_Location;
            fromJSON(object: any): _372.SourceCodeInfo_Location;
            toJSON(message: _372.SourceCodeInfo_Location): unknown;
            fromPartial<I_47 extends unknown>(object: I_47): _372.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _372.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.GeneratedCodeInfo;
            fromJSON(object: any): _372.GeneratedCodeInfo;
            toJSON(message: _372.GeneratedCodeInfo): unknown;
            fromPartial<I_48 extends unknown>(object: I_48): _372.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _372.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _372.GeneratedCodeInfo_Annotation;
            toJSON(message: _372.GeneratedCodeInfo_Annotation): unknown;
            fromPartial<I_49 extends unknown>(object: I_49): _372.GeneratedCodeInfo_Annotation;
        };
        Api: {
            encode(message: _370.Api, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.Api;
            fromJSON(object: any): _370.Api;
            toJSON(message: _370.Api): unknown;
            fromPartial<I_50 extends unknown>(object: I_50): _370.Api;
        };
        Method: {
            encode(message: _370.Method, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.Method;
            fromJSON(object: any): _370.Method;
            toJSON(message: _370.Method): unknown;
            fromPartial<I_51 extends unknown>(object: I_51): _370.Method;
        };
        Mixin: {
            encode(message: _370.Mixin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.Mixin;
            fromJSON(object: any): _370.Mixin;
            toJSON(message: _370.Mixin): unknown;
            fromPartial<I_52 extends unknown>(object: I_52): _370.Mixin;
        };
        Any: {
            encode(message: _368.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.Any;
            fromJSON(object: any): _368.Any;
            toJSON(message: _368.Any): unknown;
            fromPartial<I_53 extends unknown>(object: I_53): _368.Any;
        };
    };
    const rpc: {
        Status: {
            encode(message: _394.Status, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _394.Status;
            fromJSON(object: any): _394.Status;
            toJSON(message: _394.Status): unknown;
            fromPartial<I extends unknown>(object: I): _394.Status;
        };
        RetryInfo: {
            encode(message: _392.RetryInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.RetryInfo;
            fromJSON(object: any): _392.RetryInfo;
            toJSON(message: _392.RetryInfo): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _392.RetryInfo;
        };
        DebugInfo: {
            encode(message: _392.DebugInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.DebugInfo;
            fromJSON(object: any): _392.DebugInfo;
            toJSON(message: _392.DebugInfo): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _392.DebugInfo;
        };
        QuotaFailure: {
            encode(message: _392.QuotaFailure, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.QuotaFailure;
            fromJSON(object: any): _392.QuotaFailure;
            toJSON(message: _392.QuotaFailure): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _392.QuotaFailure;
        };
        QuotaFailure_Violation: {
            encode(message: _392.QuotaFailure_Violation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.QuotaFailure_Violation;
            fromJSON(object: any): _392.QuotaFailure_Violation;
            toJSON(message: _392.QuotaFailure_Violation): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _392.QuotaFailure_Violation;
        };
        ErrorInfo: {
            encode(message: _392.ErrorInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.ErrorInfo;
            fromJSON(object: any): _392.ErrorInfo;
            toJSON(message: _392.ErrorInfo): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _392.ErrorInfo;
        };
        ErrorInfo_MetadataEntry: {
            encode(message: _392.ErrorInfo_MetadataEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.ErrorInfo_MetadataEntry;
            fromJSON(object: any): _392.ErrorInfo_MetadataEntry;
            toJSON(message: _392.ErrorInfo_MetadataEntry): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _392.ErrorInfo_MetadataEntry;
        };
        PreconditionFailure: {
            encode(message: _392.PreconditionFailure, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.PreconditionFailure;
            fromJSON(object: any): _392.PreconditionFailure;
            toJSON(message: _392.PreconditionFailure): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _392.PreconditionFailure;
        };
        PreconditionFailure_Violation: {
            encode(message: _392.PreconditionFailure_Violation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.PreconditionFailure_Violation;
            fromJSON(object: any): _392.PreconditionFailure_Violation;
            toJSON(message: _392.PreconditionFailure_Violation): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _392.PreconditionFailure_Violation;
        };
        BadRequest: {
            encode(message: _392.BadRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.BadRequest;
            fromJSON(object: any): _392.BadRequest;
            toJSON(message: _392.BadRequest): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _392.BadRequest;
        };
        BadRequest_FieldViolation: {
            encode(message: _392.BadRequest_FieldViolation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.BadRequest_FieldViolation;
            fromJSON(object: any): _392.BadRequest_FieldViolation;
            toJSON(message: _392.BadRequest_FieldViolation): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _392.BadRequest_FieldViolation;
        };
        RequestInfo: {
            encode(message: _392.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.RequestInfo;
            fromJSON(object: any): _392.RequestInfo;
            toJSON(message: _392.RequestInfo): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _392.RequestInfo;
        };
        ResourceInfo: {
            encode(message: _392.ResourceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.ResourceInfo;
            fromJSON(object: any): _392.ResourceInfo;
            toJSON(message: _392.ResourceInfo): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _392.ResourceInfo;
        };
        Help: {
            encode(message: _392.Help, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.Help;
            fromJSON(object: any): _392.Help;
            toJSON(message: _392.Help): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _392.Help;
        };
        Help_Link: {
            encode(message: _392.Help_Link, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.Help_Link;
            fromJSON(object: any): _392.Help_Link;
            toJSON(message: _392.Help_Link): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _392.Help_Link;
        };
        LocalizedMessage: {
            encode(message: _392.LocalizedMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.LocalizedMessage;
            fromJSON(object: any): _392.LocalizedMessage;
            toJSON(message: _392.LocalizedMessage): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _392.LocalizedMessage;
        };
        codeFromJSON(object: any): _390.Code;
        codeToJSON(object: _390.Code): string;
        Code: typeof _390.Code;
    };
}
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgTransfer: {
                    encode(message: _402.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _402.MsgTransfer;
                    fromJSON(object: any): _402.MsgTransfer;
                    toJSON(message: _402.MsgTransfer): unknown;
                    fromPartial<I extends unknown>(object: I): _402.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _402.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _402.MsgTransferResponse;
                    fromJSON(_: any): _402.MsgTransferResponse;
                    toJSON(_: _402.MsgTransferResponse): unknown;
                    fromPartial<I_1 extends unknown>(_: I_1): _402.MsgTransferResponse;
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _402.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("./amino.helpers").AminoHeight;
                            timeout_timestamp: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("./amino.helpers").AminoHeight;
                            timeout_timestamp: string;
                        }) => _402.MsgTransfer;
                    };
                };
                encoded: {
                    transfer(value: _402.MsgTransfer): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                fromJSON: {
                    transfer(value: any): {
                        typeUrl: string;
                        value: _402.MsgTransfer;
                    };
                };
                toJSON: {
                    transfer(value: _402.MsgTransfer): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                json: {
                    transfer(value: _402.MsgTransfer): {
                        typeUrl: string;
                        value: _402.MsgTransfer;
                    };
                };
                messages: {
                    transfer(value: _402.MsgTransfer): {
                        typeUrl: string;
                        value: _402.MsgTransfer;
                    };
                };
                DenomTrace: {
                    encode(message: _400.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.DenomTrace;
                    fromJSON(object: any): _400.DenomTrace;
                    toJSON(message: _400.DenomTrace): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _400.DenomTrace;
                };
                Params: {
                    encode(message: _400.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.Params;
                    fromJSON(object: any): _400.Params;
                    toJSON(message: _400.Params): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _400.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _398.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _398.QueryDenomTraceRequest;
                    fromJSON(object: any): _398.QueryDenomTraceRequest;
                    toJSON(message: _398.QueryDenomTraceRequest): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _398.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _398.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _398.QueryDenomTraceResponse;
                    fromJSON(object: any): _398.QueryDenomTraceResponse;
                    toJSON(message: _398.QueryDenomTraceResponse): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _398.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _398.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _398.QueryDenomTracesRequest;
                    fromJSON(object: any): _398.QueryDenomTracesRequest;
                    toJSON(message: _398.QueryDenomTracesRequest): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _398.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _398.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _398.QueryDenomTracesResponse;
                    fromJSON(object: any): _398.QueryDenomTracesResponse;
                    toJSON(message: _398.QueryDenomTracesResponse): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _398.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _398.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _398.QueryParamsRequest;
                    fromJSON(_: any): _398.QueryParamsRequest;
                    toJSON(_: _398.QueryParamsRequest): unknown;
                    fromPartial<I_8 extends unknown>(_: I_8): _398.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _398.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _398.QueryParamsResponse;
                    fromJSON(object: any): _398.QueryParamsResponse;
                    toJSON(message: _398.QueryParamsResponse): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _398.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _396.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _396.GenesisState;
                    fromJSON(object: any): _396.GenesisState;
                    toJSON(message: _396.GenesisState): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _396.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _410.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _410.FungibleTokenPacketData;
                    fromJSON(object: any): _410.FungibleTokenPacketData;
                    toJSON(message: _410.FungibleTokenPacketData): unknown;
                    fromPartial<I extends unknown>(object: I): _410.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgChannelOpenInit: {
                    encode(message: _418.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgChannelOpenInit;
                    fromJSON(object: any): _418.MsgChannelOpenInit;
                    toJSON(message: _418.MsgChannelOpenInit): unknown;
                    fromPartial<I extends unknown>(object: I): _418.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _418.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _418.MsgChannelOpenInitResponse;
                    toJSON(_: _418.MsgChannelOpenInitResponse): unknown;
                    fromPartial<I_1 extends unknown>(_: I_1): _418.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _418.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgChannelOpenTry;
                    fromJSON(object: any): _418.MsgChannelOpenTry;
                    toJSON(message: _418.MsgChannelOpenTry): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _418.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _418.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _418.MsgChannelOpenTryResponse;
                    toJSON(_: _418.MsgChannelOpenTryResponse): unknown;
                    fromPartial<I_3 extends unknown>(_: I_3): _418.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _418.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgChannelOpenAck;
                    fromJSON(object: any): _418.MsgChannelOpenAck;
                    toJSON(message: _418.MsgChannelOpenAck): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _418.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _418.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _418.MsgChannelOpenAckResponse;
                    toJSON(_: _418.MsgChannelOpenAckResponse): unknown;
                    fromPartial<I_5 extends unknown>(_: I_5): _418.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _418.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgChannelOpenConfirm;
                    fromJSON(object: any): _418.MsgChannelOpenConfirm;
                    toJSON(message: _418.MsgChannelOpenConfirm): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _418.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _418.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _418.MsgChannelOpenConfirmResponse;
                    toJSON(_: _418.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial<I_7 extends unknown>(_: I_7): _418.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _418.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgChannelCloseInit;
                    fromJSON(object: any): _418.MsgChannelCloseInit;
                    toJSON(message: _418.MsgChannelCloseInit): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _418.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _418.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _418.MsgChannelCloseInitResponse;
                    toJSON(_: _418.MsgChannelCloseInitResponse): unknown;
                    fromPartial<I_9 extends unknown>(_: I_9): _418.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _418.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgChannelCloseConfirm;
                    fromJSON(object: any): _418.MsgChannelCloseConfirm;
                    toJSON(message: _418.MsgChannelCloseConfirm): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _418.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _418.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _418.MsgChannelCloseConfirmResponse;
                    toJSON(_: _418.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial<I_11 extends unknown>(_: I_11): _418.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _418.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgRecvPacket;
                    fromJSON(object: any): _418.MsgRecvPacket;
                    toJSON(message: _418.MsgRecvPacket): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _418.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _418.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgRecvPacketResponse;
                    fromJSON(_: any): _418.MsgRecvPacketResponse;
                    toJSON(_: _418.MsgRecvPacketResponse): unknown;
                    fromPartial<I_13 extends unknown>(_: I_13): _418.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _418.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgTimeout;
                    fromJSON(object: any): _418.MsgTimeout;
                    toJSON(message: _418.MsgTimeout): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _418.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _418.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgTimeoutResponse;
                    fromJSON(_: any): _418.MsgTimeoutResponse;
                    toJSON(_: _418.MsgTimeoutResponse): unknown;
                    fromPartial<I_15 extends unknown>(_: I_15): _418.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _418.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgTimeoutOnClose;
                    fromJSON(object: any): _418.MsgTimeoutOnClose;
                    toJSON(message: _418.MsgTimeoutOnClose): unknown;
                    fromPartial<I_16 extends unknown>(object: I_16): _418.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _418.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _418.MsgTimeoutOnCloseResponse;
                    toJSON(_: _418.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial<I_17 extends unknown>(_: I_17): _418.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _418.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgAcknowledgement;
                    fromJSON(object: any): _418.MsgAcknowledgement;
                    toJSON(message: _418.MsgAcknowledgement): unknown;
                    fromPartial<I_18 extends unknown>(object: I_18): _418.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _418.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgAcknowledgementResponse;
                    fromJSON(_: any): _418.MsgAcknowledgementResponse;
                    toJSON(_: _418.MsgAcknowledgementResponse): unknown;
                    fromPartial<I_19 extends unknown>(_: I_19): _418.MsgAcknowledgementResponse;
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _418.MsgChannelOpenInit) => {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel, signer }: {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        }) => _418.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _418.MsgChannelOpenTry) => {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("./amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("./amino.helpers").AminoHeight;
                            signer: string;
                        }) => _418.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _418.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("./amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("./amino.helpers").AminoHeight;
                            signer: string;
                        }) => _418.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _418.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("./amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("./amino.helpers").AminoHeight;
                            signer: string;
                        }) => _418.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _418.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _418.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _418.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("./amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("./amino.helpers").AminoHeight;
                            signer: string;
                        }) => _418.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _418.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("./amino.helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("./amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_commitment, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("./amino.helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("./amino.helpers").AminoHeight;
                            signer: string;
                        }) => _418.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _418.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("./amino.helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("./amino.helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("./amino.helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("./amino.helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _418.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _418.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("./amino.helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("./amino.helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("./amino.helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("./amino.helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _418.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _418.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("./amino.helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("./amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("./amino.helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("./amino.helpers").AminoHeight;
                            signer: string;
                        }) => _418.MsgAcknowledgement;
                    };
                };
                encoded: {
                    channelOpenInit(value: _418.MsgChannelOpenInit): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelOpenTry(value: _418.MsgChannelOpenTry): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelOpenAck(value: _418.MsgChannelOpenAck): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelOpenConfirm(value: _418.MsgChannelOpenConfirm): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelCloseInit(value: _418.MsgChannelCloseInit): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelCloseConfirm(value: _418.MsgChannelCloseConfirm): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    recvPacket(value: _418.MsgRecvPacket): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    timeout(value: _418.MsgTimeout): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    timeoutOnClose(value: _418.MsgTimeoutOnClose): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    acknowledgement(value: _418.MsgAcknowledgement): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                fromJSON: {
                    channelOpenInit(value: any): {
                        typeUrl: string;
                        value: _418.MsgChannelOpenInit;
                    };
                    channelOpenTry(value: any): {
                        typeUrl: string;
                        value: _418.MsgChannelOpenTry;
                    };
                    channelOpenAck(value: any): {
                        typeUrl: string;
                        value: _418.MsgChannelOpenAck;
                    };
                    channelOpenConfirm(value: any): {
                        typeUrl: string;
                        value: _418.MsgChannelOpenConfirm;
                    };
                    channelCloseInit(value: any): {
                        typeUrl: string;
                        value: _418.MsgChannelCloseInit;
                    };
                    channelCloseConfirm(value: any): {
                        typeUrl: string;
                        value: _418.MsgChannelCloseConfirm;
                    };
                    recvPacket(value: any): {
                        typeUrl: string;
                        value: _418.MsgRecvPacket;
                    };
                    timeout(value: any): {
                        typeUrl: string;
                        value: _418.MsgTimeout;
                    };
                    timeoutOnClose(value: any): {
                        typeUrl: string;
                        value: _418.MsgTimeoutOnClose;
                    };
                    acknowledgement(value: any): {
                        typeUrl: string;
                        value: _418.MsgAcknowledgement;
                    };
                };
                toJSON: {
                    channelOpenInit(value: _418.MsgChannelOpenInit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelOpenTry(value: _418.MsgChannelOpenTry): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelOpenAck(value: _418.MsgChannelOpenAck): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelOpenConfirm(value: _418.MsgChannelOpenConfirm): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelCloseInit(value: _418.MsgChannelCloseInit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelCloseConfirm(value: _418.MsgChannelCloseConfirm): {
                        typeUrl: string;
                        value: unknown;
                    };
                    recvPacket(value: _418.MsgRecvPacket): {
                        typeUrl: string;
                        value: unknown;
                    };
                    timeout(value: _418.MsgTimeout): {
                        typeUrl: string;
                        value: unknown;
                    };
                    timeoutOnClose(value: _418.MsgTimeoutOnClose): {
                        typeUrl: string;
                        value: unknown;
                    };
                    acknowledgement(value: _418.MsgAcknowledgement): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                json: {
                    channelOpenInit(value: _418.MsgChannelOpenInit): {
                        typeUrl: string;
                        value: _418.MsgChannelOpenInit;
                    };
                    channelOpenTry(value: _418.MsgChannelOpenTry): {
                        typeUrl: string;
                        value: _418.MsgChannelOpenTry;
                    };
                    channelOpenAck(value: _418.MsgChannelOpenAck): {
                        typeUrl: string;
                        value: _418.MsgChannelOpenAck;
                    };
                    channelOpenConfirm(value: _418.MsgChannelOpenConfirm): {
                        typeUrl: string;
                        value: _418.MsgChannelOpenConfirm;
                    };
                    channelCloseInit(value: _418.MsgChannelCloseInit): {
                        typeUrl: string;
                        value: _418.MsgChannelCloseInit;
                    };
                    channelCloseConfirm(value: _418.MsgChannelCloseConfirm): {
                        typeUrl: string;
                        value: _418.MsgChannelCloseConfirm;
                    };
                    recvPacket(value: _418.MsgRecvPacket): {
                        typeUrl: string;
                        value: _418.MsgRecvPacket;
                    };
                    timeout(value: _418.MsgTimeout): {
                        typeUrl: string;
                        value: _418.MsgTimeout;
                    };
                    timeoutOnClose(value: _418.MsgTimeoutOnClose): {
                        typeUrl: string;
                        value: _418.MsgTimeoutOnClose;
                    };
                    acknowledgement(value: _418.MsgAcknowledgement): {
                        typeUrl: string;
                        value: _418.MsgAcknowledgement;
                    };
                };
                messages: {
                    channelOpenInit(value: _418.MsgChannelOpenInit): {
                        typeUrl: string;
                        value: _418.MsgChannelOpenInit;
                    };
                    channelOpenTry(value: _418.MsgChannelOpenTry): {
                        typeUrl: string;
                        value: _418.MsgChannelOpenTry;
                    };
                    channelOpenAck(value: _418.MsgChannelOpenAck): {
                        typeUrl: string;
                        value: _418.MsgChannelOpenAck;
                    };
                    channelOpenConfirm(value: _418.MsgChannelOpenConfirm): {
                        typeUrl: string;
                        value: _418.MsgChannelOpenConfirm;
                    };
                    channelCloseInit(value: _418.MsgChannelCloseInit): {
                        typeUrl: string;
                        value: _418.MsgChannelCloseInit;
                    };
                    channelCloseConfirm(value: _418.MsgChannelCloseConfirm): {
                        typeUrl: string;
                        value: _418.MsgChannelCloseConfirm;
                    };
                    recvPacket(value: _418.MsgRecvPacket): {
                        typeUrl: string;
                        value: _418.MsgRecvPacket;
                    };
                    timeout(value: _418.MsgTimeout): {
                        typeUrl: string;
                        value: _418.MsgTimeout;
                    };
                    timeoutOnClose(value: _418.MsgTimeoutOnClose): {
                        typeUrl: string;
                        value: _418.MsgTimeoutOnClose;
                    };
                    acknowledgement(value: _418.MsgAcknowledgement): {
                        typeUrl: string;
                        value: _418.MsgAcknowledgement;
                    };
                };
                QueryChannelRequest: {
                    encode(message: _416.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryChannelRequest;
                    fromJSON(object: any): _416.QueryChannelRequest;
                    toJSON(message: _416.QueryChannelRequest): unknown;
                    fromPartial<I_20 extends unknown>(object: I_20): _416.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _416.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryChannelResponse;
                    fromJSON(object: any): _416.QueryChannelResponse;
                    toJSON(message: _416.QueryChannelResponse): unknown;
                    fromPartial<I_21 extends unknown>(object: I_21): _416.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _416.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryChannelsRequest;
                    fromJSON(object: any): _416.QueryChannelsRequest;
                    toJSON(message: _416.QueryChannelsRequest): unknown;
                    fromPartial<I_22 extends unknown>(object: I_22): _416.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _416.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryChannelsResponse;
                    fromJSON(object: any): _416.QueryChannelsResponse;
                    toJSON(message: _416.QueryChannelsResponse): unknown;
                    fromPartial<I_23 extends unknown>(object: I_23): _416.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _416.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _416.QueryConnectionChannelsRequest;
                    toJSON(message: _416.QueryConnectionChannelsRequest): unknown;
                    fromPartial<I_24 extends unknown>(object: I_24): _416.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _416.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _416.QueryConnectionChannelsResponse;
                    toJSON(message: _416.QueryConnectionChannelsResponse): unknown;
                    fromPartial<I_25 extends unknown>(object: I_25): _416.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _416.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryChannelClientStateRequest;
                    fromJSON(object: any): _416.QueryChannelClientStateRequest;
                    toJSON(message: _416.QueryChannelClientStateRequest): unknown;
                    fromPartial<I_26 extends unknown>(object: I_26): _416.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _416.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryChannelClientStateResponse;
                    fromJSON(object: any): _416.QueryChannelClientStateResponse;
                    toJSON(message: _416.QueryChannelClientStateResponse): unknown;
                    fromPartial<I_27 extends unknown>(object: I_27): _416.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _416.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _416.QueryChannelConsensusStateRequest;
                    toJSON(message: _416.QueryChannelConsensusStateRequest): unknown;
                    fromPartial<I_28 extends unknown>(object: I_28): _416.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _416.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _416.QueryChannelConsensusStateResponse;
                    toJSON(message: _416.QueryChannelConsensusStateResponse): unknown;
                    fromPartial<I_29 extends unknown>(object: I_29): _416.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _416.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _416.QueryPacketCommitmentRequest;
                    toJSON(message: _416.QueryPacketCommitmentRequest): unknown;
                    fromPartial<I_30 extends unknown>(object: I_30): _416.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _416.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _416.QueryPacketCommitmentResponse;
                    toJSON(message: _416.QueryPacketCommitmentResponse): unknown;
                    fromPartial<I_31 extends unknown>(object: I_31): _416.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _416.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _416.QueryPacketCommitmentsRequest;
                    toJSON(message: _416.QueryPacketCommitmentsRequest): unknown;
                    fromPartial<I_32 extends unknown>(object: I_32): _416.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _416.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _416.QueryPacketCommitmentsResponse;
                    toJSON(message: _416.QueryPacketCommitmentsResponse): unknown;
                    fromPartial<I_33 extends unknown>(object: I_33): _416.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _416.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryPacketReceiptRequest;
                    fromJSON(object: any): _416.QueryPacketReceiptRequest;
                    toJSON(message: _416.QueryPacketReceiptRequest): unknown;
                    fromPartial<I_34 extends unknown>(object: I_34): _416.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _416.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryPacketReceiptResponse;
                    fromJSON(object: any): _416.QueryPacketReceiptResponse;
                    toJSON(message: _416.QueryPacketReceiptResponse): unknown;
                    fromPartial<I_35 extends unknown>(object: I_35): _416.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _416.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _416.QueryPacketAcknowledgementRequest;
                    toJSON(message: _416.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial<I_36 extends unknown>(object: I_36): _416.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _416.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _416.QueryPacketAcknowledgementResponse;
                    toJSON(message: _416.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial<I_37 extends unknown>(object: I_37): _416.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _416.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _416.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _416.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial<I_38 extends unknown>(object: I_38): _416.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _416.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _416.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _416.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial<I_39 extends unknown>(object: I_39): _416.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _416.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _416.QueryUnreceivedPacketsRequest;
                    toJSON(message: _416.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial<I_40 extends unknown>(object: I_40): _416.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _416.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _416.QueryUnreceivedPacketsResponse;
                    toJSON(message: _416.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial<I_41 extends unknown>(object: I_41): _416.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _416.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _416.QueryUnreceivedAcksRequest;
                    toJSON(message: _416.QueryUnreceivedAcksRequest): unknown;
                    fromPartial<I_42 extends unknown>(object: I_42): _416.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _416.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _416.QueryUnreceivedAcksResponse;
                    toJSON(message: _416.QueryUnreceivedAcksResponse): unknown;
                    fromPartial<I_43 extends unknown>(object: I_43): _416.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _416.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _416.QueryNextSequenceReceiveRequest;
                    toJSON(message: _416.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial<I_44 extends unknown>(object: I_44): _416.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _416.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _416.QueryNextSequenceReceiveResponse;
                    toJSON(message: _416.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial<I_45 extends unknown>(object: I_45): _416.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _414.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _414.GenesisState;
                    fromJSON(object: any): _414.GenesisState;
                    toJSON(message: _414.GenesisState): unknown;
                    fromPartial<I_46 extends unknown>(object: I_46): _414.GenesisState;
                };
                PacketSequence: {
                    encode(message: _414.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _414.PacketSequence;
                    fromJSON(object: any): _414.PacketSequence;
                    toJSON(message: _414.PacketSequence): unknown;
                    fromPartial<I_47 extends unknown>(object: I_47): _414.PacketSequence;
                };
                stateFromJSON(object: any): _412.State;
                stateToJSON(object: _412.State): string;
                orderFromJSON(object: any): _412.Order;
                orderToJSON(object: _412.Order): string;
                State: typeof _412.State;
                Order: typeof _412.Order;
                Channel: {
                    encode(message: _412.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _412.Channel;
                    fromJSON(object: any): _412.Channel;
                    toJSON(message: _412.Channel): unknown;
                    fromPartial<I_48 extends unknown>(object: I_48): _412.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _412.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _412.IdentifiedChannel;
                    fromJSON(object: any): _412.IdentifiedChannel;
                    toJSON(message: _412.IdentifiedChannel): unknown;
                    fromPartial<I_49 extends unknown>(object: I_49): _412.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _412.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _412.Counterparty;
                    fromJSON(object: any): _412.Counterparty;
                    toJSON(message: _412.Counterparty): unknown;
                    fromPartial<I_50 extends unknown>(object: I_50): _412.Counterparty;
                };
                Packet: {
                    encode(message: _412.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _412.Packet;
                    fromJSON(object: any): _412.Packet;
                    toJSON(message: _412.Packet): unknown;
                    fromPartial<I_51 extends unknown>(object: I_51): _412.Packet;
                };
                PacketState: {
                    encode(message: _412.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _412.PacketState;
                    fromJSON(object: any): _412.PacketState;
                    toJSON(message: _412.PacketState): unknown;
                    fromPartial<I_52 extends unknown>(object: I_52): _412.PacketState;
                };
                Acknowledgement: {
                    encode(message: _412.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _412.Acknowledgement;
                    fromJSON(object: any): _412.Acknowledgement;
                    toJSON(message: _412.Acknowledgement): unknown;
                    fromPartial<I_53 extends unknown>(object: I_53): _412.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgCreateClient: {
                    encode(message: _432.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _432.MsgCreateClient;
                    fromJSON(object: any): _432.MsgCreateClient;
                    toJSON(message: _432.MsgCreateClient): unknown;
                    fromPartial<I extends unknown>(object: I): _432.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _432.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _432.MsgCreateClientResponse;
                    fromJSON(_: any): _432.MsgCreateClientResponse;
                    toJSON(_: _432.MsgCreateClientResponse): unknown;
                    fromPartial<I_1 extends unknown>(_: I_1): _432.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _432.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _432.MsgUpdateClient;
                    fromJSON(object: any): _432.MsgUpdateClient;
                    toJSON(message: _432.MsgUpdateClient): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _432.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _432.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _432.MsgUpdateClientResponse;
                    fromJSON(_: any): _432.MsgUpdateClientResponse;
                    toJSON(_: _432.MsgUpdateClientResponse): unknown;
                    fromPartial<I_3 extends unknown>(_: I_3): _432.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _432.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _432.MsgUpgradeClient;
                    fromJSON(object: any): _432.MsgUpgradeClient;
                    toJSON(message: _432.MsgUpgradeClient): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _432.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _432.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _432.MsgUpgradeClientResponse;
                    fromJSON(_: any): _432.MsgUpgradeClientResponse;
                    toJSON(_: _432.MsgUpgradeClientResponse): unknown;
                    fromPartial<I_5 extends unknown>(_: I_5): _432.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _432.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _432.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _432.MsgSubmitMisbehaviour;
                    toJSON(message: _432.MsgSubmitMisbehaviour): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _432.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _432.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _432.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _432.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _432.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial<I_7 extends unknown>(_: I_7): _432.MsgSubmitMisbehaviourResponse;
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _432.MsgCreateClient) => {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_state, consensus_state, signer }: {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _432.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _432.MsgUpdateClient) => {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, header, signer }: {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _432.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _432.MsgUpgradeClient) => {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        };
                        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        }) => _432.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _432.MsgSubmitMisbehaviour) => {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, misbehaviour, signer }: {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _432.MsgSubmitMisbehaviour;
                    };
                };
                encoded: {
                    createClient(value: _432.MsgCreateClient): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    updateClient(value: _432.MsgUpdateClient): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    upgradeClient(value: _432.MsgUpgradeClient): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    submitMisbehaviour(value: _432.MsgSubmitMisbehaviour): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                fromJSON: {
                    createClient(value: any): {
                        typeUrl: string;
                        value: _432.MsgCreateClient;
                    };
                    updateClient(value: any): {
                        typeUrl: string;
                        value: _432.MsgUpdateClient;
                    };
                    upgradeClient(value: any): {
                        typeUrl: string;
                        value: _432.MsgUpgradeClient;
                    };
                    submitMisbehaviour(value: any): {
                        typeUrl: string;
                        value: _432.MsgSubmitMisbehaviour;
                    };
                };
                toJSON: {
                    createClient(value: _432.MsgCreateClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClient(value: _432.MsgUpdateClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                    upgradeClient(value: _432.MsgUpgradeClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitMisbehaviour(value: _432.MsgSubmitMisbehaviour): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                json: {
                    createClient(value: _432.MsgCreateClient): {
                        typeUrl: string;
                        value: _432.MsgCreateClient;
                    };
                    updateClient(value: _432.MsgUpdateClient): {
                        typeUrl: string;
                        value: _432.MsgUpdateClient;
                    };
                    upgradeClient(value: _432.MsgUpgradeClient): {
                        typeUrl: string;
                        value: _432.MsgUpgradeClient;
                    };
                    submitMisbehaviour(value: _432.MsgSubmitMisbehaviour): {
                        typeUrl: string;
                        value: _432.MsgSubmitMisbehaviour;
                    };
                };
                messages: {
                    createClient(value: _432.MsgCreateClient): {
                        typeUrl: string;
                        value: _432.MsgCreateClient;
                    };
                    updateClient(value: _432.MsgUpdateClient): {
                        typeUrl: string;
                        value: _432.MsgUpdateClient;
                    };
                    upgradeClient(value: _432.MsgUpgradeClient): {
                        typeUrl: string;
                        value: _432.MsgUpgradeClient;
                    };
                    submitMisbehaviour(value: _432.MsgSubmitMisbehaviour): {
                        typeUrl: string;
                        value: _432.MsgSubmitMisbehaviour;
                    };
                };
                QueryClientStateRequest: {
                    encode(message: _430.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.QueryClientStateRequest;
                    fromJSON(object: any): _430.QueryClientStateRequest;
                    toJSON(message: _430.QueryClientStateRequest): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _430.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _430.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.QueryClientStateResponse;
                    fromJSON(object: any): _430.QueryClientStateResponse;
                    toJSON(message: _430.QueryClientStateResponse): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _430.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _430.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.QueryClientStatesRequest;
                    fromJSON(object: any): _430.QueryClientStatesRequest;
                    toJSON(message: _430.QueryClientStatesRequest): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _430.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _430.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.QueryClientStatesResponse;
                    fromJSON(object: any): _430.QueryClientStatesResponse;
                    toJSON(message: _430.QueryClientStatesResponse): unknown;
                    fromPartial<I_11 extends unknown>(object: I_11): _430.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _430.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.QueryConsensusStateRequest;
                    fromJSON(object: any): _430.QueryConsensusStateRequest;
                    toJSON(message: _430.QueryConsensusStateRequest): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _430.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _430.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.QueryConsensusStateResponse;
                    fromJSON(object: any): _430.QueryConsensusStateResponse;
                    toJSON(message: _430.QueryConsensusStateResponse): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _430.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _430.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.QueryConsensusStatesRequest;
                    fromJSON(object: any): _430.QueryConsensusStatesRequest;
                    toJSON(message: _430.QueryConsensusStatesRequest): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _430.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _430.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.QueryConsensusStatesResponse;
                    fromJSON(object: any): _430.QueryConsensusStatesResponse;
                    toJSON(message: _430.QueryConsensusStatesResponse): unknown;
                    fromPartial<I_15 extends unknown>(object: I_15): _430.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _430.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.QueryClientStatusRequest;
                    fromJSON(object: any): _430.QueryClientStatusRequest;
                    toJSON(message: _430.QueryClientStatusRequest): unknown;
                    fromPartial<I_16 extends unknown>(object: I_16): _430.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _430.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.QueryClientStatusResponse;
                    fromJSON(object: any): _430.QueryClientStatusResponse;
                    toJSON(message: _430.QueryClientStatusResponse): unknown;
                    fromPartial<I_17 extends unknown>(object: I_17): _430.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _430.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.QueryClientParamsRequest;
                    fromJSON(_: any): _430.QueryClientParamsRequest;
                    toJSON(_: _430.QueryClientParamsRequest): unknown;
                    fromPartial<I_18 extends unknown>(_: I_18): _430.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _430.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.QueryClientParamsResponse;
                    fromJSON(object: any): _430.QueryClientParamsResponse;
                    toJSON(message: _430.QueryClientParamsResponse): unknown;
                    fromPartial<I_19 extends unknown>(object: I_19): _430.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _430.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _430.QueryUpgradedClientStateRequest;
                    toJSON(_: _430.QueryUpgradedClientStateRequest): unknown;
                    fromPartial<I_20 extends unknown>(_: I_20): _430.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _430.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _430.QueryUpgradedClientStateResponse;
                    toJSON(message: _430.QueryUpgradedClientStateResponse): unknown;
                    fromPartial<I_21 extends unknown>(object: I_21): _430.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _430.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _430.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _430.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial<I_22 extends unknown>(_: I_22): _430.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _430.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _430.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _430.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial<I_23 extends unknown>(object: I_23): _430.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _428.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _428.GenesisState;
                    fromJSON(object: any): _428.GenesisState;
                    toJSON(message: _428.GenesisState): unknown;
                    fromPartial<I_24 extends unknown>(object: I_24): _428.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _428.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _428.GenesisMetadata;
                    fromJSON(object: any): _428.GenesisMetadata;
                    toJSON(message: _428.GenesisMetadata): unknown;
                    fromPartial<I_25 extends unknown>(object: I_25): _428.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _428.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _428.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _428.IdentifiedGenesisMetadata;
                    toJSON(message: _428.IdentifiedGenesisMetadata): unknown;
                    fromPartial<I_26 extends unknown>(object: I_26): _428.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _426.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _426.IdentifiedClientState;
                    fromJSON(object: any): _426.IdentifiedClientState;
                    toJSON(message: _426.IdentifiedClientState): unknown;
                    fromPartial<I_27 extends unknown>(object: I_27): _426.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _426.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _426.ConsensusStateWithHeight;
                    fromJSON(object: any): _426.ConsensusStateWithHeight;
                    toJSON(message: _426.ConsensusStateWithHeight): unknown;
                    fromPartial<I_28 extends unknown>(object: I_28): _426.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _426.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _426.ClientConsensusStates;
                    fromJSON(object: any): _426.ClientConsensusStates;
                    toJSON(message: _426.ClientConsensusStates): unknown;
                    fromPartial<I_29 extends unknown>(object: I_29): _426.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _426.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _426.ClientUpdateProposal;
                    fromJSON(object: any): _426.ClientUpdateProposal;
                    toJSON(message: _426.ClientUpdateProposal): unknown;
                    fromPartial<I_30 extends unknown>(object: I_30): _426.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _426.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _426.UpgradeProposal;
                    fromJSON(object: any): _426.UpgradeProposal;
                    toJSON(message: _426.UpgradeProposal): unknown;
                    fromPartial<I_31 extends unknown>(object: I_31): _426.UpgradeProposal;
                };
                Height: {
                    encode(message: _426.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _426.Height;
                    fromJSON(object: any): _426.Height;
                    toJSON(message: _426.Height): unknown;
                    fromPartial<I_32 extends unknown>(object: I_32): _426.Height;
                };
                Params: {
                    encode(message: _426.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _426.Params;
                    fromJSON(object: any): _426.Params;
                    toJSON(message: _426.Params): unknown;
                    fromPartial<I_33 extends unknown>(object: I_33): _426.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _440.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.MerkleRoot;
                    fromJSON(object: any): _440.MerkleRoot;
                    toJSON(message: _440.MerkleRoot): unknown;
                    fromPartial<I extends unknown>(object: I): _440.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _440.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.MerklePrefix;
                    fromJSON(object: any): _440.MerklePrefix;
                    toJSON(message: _440.MerklePrefix): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _440.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _440.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.MerklePath;
                    fromJSON(object: any): _440.MerklePath;
                    toJSON(message: _440.MerklePath): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _440.MerklePath;
                };
                MerkleProof: {
                    encode(message: _440.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.MerkleProof;
                    fromJSON(object: any): _440.MerkleProof;
                    toJSON(message: _440.MerkleProof): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _440.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgConnectionOpenInit: {
                    encode(message: _448.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _448.MsgConnectionOpenInit;
                    fromJSON(object: any): _448.MsgConnectionOpenInit;
                    toJSON(message: _448.MsgConnectionOpenInit): unknown;
                    fromPartial<I extends unknown>(object: I): _448.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _448.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _448.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _448.MsgConnectionOpenInitResponse;
                    toJSON(_: _448.MsgConnectionOpenInitResponse): unknown;
                    fromPartial<I_1 extends unknown>(_: I_1): _448.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _448.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _448.MsgConnectionOpenTry;
                    fromJSON(object: any): _448.MsgConnectionOpenTry;
                    toJSON(message: _448.MsgConnectionOpenTry): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _448.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _448.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _448.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _448.MsgConnectionOpenTryResponse;
                    toJSON(_: _448.MsgConnectionOpenTryResponse): unknown;
                    fromPartial<I_3 extends unknown>(_: I_3): _448.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _448.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _448.MsgConnectionOpenAck;
                    fromJSON(object: any): _448.MsgConnectionOpenAck;
                    toJSON(message: _448.MsgConnectionOpenAck): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _448.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _448.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _448.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _448.MsgConnectionOpenAckResponse;
                    toJSON(_: _448.MsgConnectionOpenAckResponse): unknown;
                    fromPartial<I_5 extends unknown>(_: I_5): _448.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _448.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _448.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _448.MsgConnectionOpenConfirm;
                    toJSON(message: _448.MsgConnectionOpenConfirm): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _448.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _448.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _448.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _448.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _448.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial<I_7 extends unknown>(_: I_7): _448.MsgConnectionOpenConfirmResponse;
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _448.MsgConnectionOpenInit) => {
                            client_id: string;
                            counterparty: {
                                port_id: string;
                                channel_id: string;
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        };
                        fromAmino: ({ client_id, counterparty, version, delay_period, signer }: {
                            client_id: string;
                            counterparty: {
                                port_id: string;
                                channel_id: string;
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        }) => _448.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _448.MsgConnectionOpenTry) => {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                port_id: string;
                                channel_id: string;
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("./amino.helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("./amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                port_id: string;
                                channel_id: string;
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("./amino.helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("./amino.helpers").AminoHeight;
                            signer: string;
                        }) => _448.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _448.MsgConnectionOpenAck) => {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("./amino.helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("./amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("./amino.helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("./amino.helpers").AminoHeight;
                            signer: string;
                        }) => _448.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _448.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("./amino.helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("./amino.helpers").AminoHeight;
                            signer: string;
                        }) => _448.MsgConnectionOpenConfirm;
                    };
                };
                encoded: {
                    connectionOpenInit(value: _448.MsgConnectionOpenInit): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    connectionOpenTry(value: _448.MsgConnectionOpenTry): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    connectionOpenAck(value: _448.MsgConnectionOpenAck): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    connectionOpenConfirm(value: _448.MsgConnectionOpenConfirm): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                fromJSON: {
                    connectionOpenInit(value: any): {
                        typeUrl: string;
                        value: _448.MsgConnectionOpenInit;
                    };
                    connectionOpenTry(value: any): {
                        typeUrl: string;
                        value: _448.MsgConnectionOpenTry;
                    };
                    connectionOpenAck(value: any): {
                        typeUrl: string;
                        value: _448.MsgConnectionOpenAck;
                    };
                    connectionOpenConfirm(value: any): {
                        typeUrl: string;
                        value: _448.MsgConnectionOpenConfirm;
                    };
                };
                toJSON: {
                    connectionOpenInit(value: _448.MsgConnectionOpenInit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    connectionOpenTry(value: _448.MsgConnectionOpenTry): {
                        typeUrl: string;
                        value: unknown;
                    };
                    connectionOpenAck(value: _448.MsgConnectionOpenAck): {
                        typeUrl: string;
                        value: unknown;
                    };
                    connectionOpenConfirm(value: _448.MsgConnectionOpenConfirm): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                json: {
                    connectionOpenInit(value: _448.MsgConnectionOpenInit): {
                        typeUrl: string;
                        value: _448.MsgConnectionOpenInit;
                    };
                    connectionOpenTry(value: _448.MsgConnectionOpenTry): {
                        typeUrl: string;
                        value: _448.MsgConnectionOpenTry;
                    };
                    connectionOpenAck(value: _448.MsgConnectionOpenAck): {
                        typeUrl: string;
                        value: _448.MsgConnectionOpenAck;
                    };
                    connectionOpenConfirm(value: _448.MsgConnectionOpenConfirm): {
                        typeUrl: string;
                        value: _448.MsgConnectionOpenConfirm;
                    };
                };
                messages: {
                    connectionOpenInit(value: _448.MsgConnectionOpenInit): {
                        typeUrl: string;
                        value: _448.MsgConnectionOpenInit;
                    };
                    connectionOpenTry(value: _448.MsgConnectionOpenTry): {
                        typeUrl: string;
                        value: _448.MsgConnectionOpenTry;
                    };
                    connectionOpenAck(value: _448.MsgConnectionOpenAck): {
                        typeUrl: string;
                        value: _448.MsgConnectionOpenAck;
                    };
                    connectionOpenConfirm(value: _448.MsgConnectionOpenConfirm): {
                        typeUrl: string;
                        value: _448.MsgConnectionOpenConfirm;
                    };
                };
                QueryConnectionRequest: {
                    encode(message: _446.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _446.QueryConnectionRequest;
                    fromJSON(object: any): _446.QueryConnectionRequest;
                    toJSON(message: _446.QueryConnectionRequest): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _446.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _446.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _446.QueryConnectionResponse;
                    fromJSON(object: any): _446.QueryConnectionResponse;
                    toJSON(message: _446.QueryConnectionResponse): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _446.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _446.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _446.QueryConnectionsRequest;
                    fromJSON(object: any): _446.QueryConnectionsRequest;
                    toJSON(message: _446.QueryConnectionsRequest): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _446.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _446.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _446.QueryConnectionsResponse;
                    fromJSON(object: any): _446.QueryConnectionsResponse;
                    toJSON(message: _446.QueryConnectionsResponse): unknown;
                    fromPartial<I_11 extends unknown>(object: I_11): _446.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _446.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _446.QueryClientConnectionsRequest;
                    fromJSON(object: any): _446.QueryClientConnectionsRequest;
                    toJSON(message: _446.QueryClientConnectionsRequest): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _446.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _446.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _446.QueryClientConnectionsResponse;
                    fromJSON(object: any): _446.QueryClientConnectionsResponse;
                    toJSON(message: _446.QueryClientConnectionsResponse): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _446.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _446.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _446.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _446.QueryConnectionClientStateRequest;
                    toJSON(message: _446.QueryConnectionClientStateRequest): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _446.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _446.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _446.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _446.QueryConnectionClientStateResponse;
                    toJSON(message: _446.QueryConnectionClientStateResponse): unknown;
                    fromPartial<I_15 extends unknown>(object: I_15): _446.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _446.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _446.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _446.QueryConnectionConsensusStateRequest;
                    toJSON(message: _446.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial<I_16 extends unknown>(object: I_16): _446.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _446.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _446.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _446.QueryConnectionConsensusStateResponse;
                    toJSON(message: _446.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial<I_17 extends unknown>(object: I_17): _446.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _444.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _444.GenesisState;
                    fromJSON(object: any): _444.GenesisState;
                    toJSON(message: _444.GenesisState): unknown;
                    fromPartial<I_18 extends unknown>(object: I_18): _444.GenesisState;
                };
                stateFromJSON(object: any): _442.State;
                stateToJSON(object: _442.State): string;
                State: typeof _442.State;
                ConnectionEnd: {
                    encode(message: _442.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.ConnectionEnd;
                    fromJSON(object: any): _442.ConnectionEnd;
                    toJSON(message: _442.ConnectionEnd): unknown;
                    fromPartial<I_19 extends unknown>(object: I_19): _442.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _442.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.IdentifiedConnection;
                    fromJSON(object: any): _442.IdentifiedConnection;
                    toJSON(message: _442.IdentifiedConnection): unknown;
                    fromPartial<I_20 extends unknown>(object: I_20): _442.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _442.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.Counterparty;
                    fromJSON(object: any): _442.Counterparty;
                    toJSON(message: _442.Counterparty): unknown;
                    fromPartial<I_21 extends unknown>(object: I_21): _442.Counterparty;
                };
                ClientPaths: {
                    encode(message: _442.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.ClientPaths;
                    fromJSON(object: any): _442.ClientPaths;
                    toJSON(message: _442.ClientPaths): unknown;
                    fromPartial<I_22 extends unknown>(object: I_22): _442.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _442.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.ConnectionPaths;
                    fromJSON(object: any): _442.ConnectionPaths;
                    toJSON(message: _442.ConnectionPaths): unknown;
                    fromPartial<I_23 extends unknown>(object: I_23): _442.ConnectionPaths;
                };
                Version: {
                    encode(message: _442.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.Version;
                    fromJSON(object: any): _442.Version;
                    toJSON(message: _442.Version): unknown;
                    fromPartial<I_24 extends unknown>(object: I_24): _442.Version;
                };
                Params: {
                    encode(message: _442.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.Params;
                    fromJSON(object: any): _442.Params;
                    toJSON(message: _442.Params): unknown;
                    fromPartial<I_25 extends unknown>(object: I_25): _442.Params;
                };
            };
        }
        namespace port {
            const v1: {
                QueryAppVersionRequest: {
                    encode(message: _456.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.QueryAppVersionRequest;
                    fromJSON(object: any): _456.QueryAppVersionRequest;
                    toJSON(message: _456.QueryAppVersionRequest): unknown;
                    fromPartial<I extends unknown>(object: I): _456.QueryAppVersionRequest;
                };
                QueryAppVersionResponse: {
                    encode(message: _456.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.QueryAppVersionResponse;
                    fromJSON(object: any): _456.QueryAppVersionResponse;
                    toJSON(message: _456.QueryAppVersionResponse): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _456.QueryAppVersionResponse;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _458.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _458.GenesisState;
                    fromJSON(object: any): _458.GenesisState;
                    toJSON(message: _458.GenesisState): unknown;
                    fromPartial<I extends unknown>(object: I): _458.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _460.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.ClientState;
                    fromJSON(object: any): _460.ClientState;
                    toJSON(message: _460.ClientState): unknown;
                    fromPartial<I extends unknown>(object: I): _460.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _462.DataType;
                dataTypeToJSON(object: _462.DataType): string;
                DataType: typeof _462.DataType;
                ClientState: {
                    encode(message: _462.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.ClientState;
                    fromJSON(object: any): _462.ClientState;
                    toJSON(message: _462.ClientState): unknown;
                    fromPartial<I extends unknown>(object: I): _462.ClientState;
                };
                ConsensusState: {
                    encode(message: _462.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.ConsensusState;
                    fromJSON(object: any): _462.ConsensusState;
                    toJSON(message: _462.ConsensusState): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _462.ConsensusState;
                };
                Header: {
                    encode(message: _462.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.Header;
                    fromJSON(object: any): _462.Header;
                    toJSON(message: _462.Header): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _462.Header;
                };
                Misbehaviour: {
                    encode(message: _462.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.Misbehaviour;
                    fromJSON(object: any): _462.Misbehaviour;
                    toJSON(message: _462.Misbehaviour): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _462.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _462.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.SignatureAndData;
                    fromJSON(object: any): _462.SignatureAndData;
                    toJSON(message: _462.SignatureAndData): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _462.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _462.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.TimestampedSignatureData;
                    fromJSON(object: any): _462.TimestampedSignatureData;
                    toJSON(message: _462.TimestampedSignatureData): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _462.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _462.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.SignBytes;
                    fromJSON(object: any): _462.SignBytes;
                    toJSON(message: _462.SignBytes): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _462.SignBytes;
                };
                HeaderData: {
                    encode(message: _462.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.HeaderData;
                    fromJSON(object: any): _462.HeaderData;
                    toJSON(message: _462.HeaderData): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _462.HeaderData;
                };
                ClientStateData: {
                    encode(message: _462.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.ClientStateData;
                    fromJSON(object: any): _462.ClientStateData;
                    toJSON(message: _462.ClientStateData): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _462.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _462.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.ConsensusStateData;
                    fromJSON(object: any): _462.ConsensusStateData;
                    toJSON(message: _462.ConsensusStateData): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _462.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _462.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.ConnectionStateData;
                    fromJSON(object: any): _462.ConnectionStateData;
                    toJSON(message: _462.ConnectionStateData): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _462.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _462.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.ChannelStateData;
                    fromJSON(object: any): _462.ChannelStateData;
                    toJSON(message: _462.ChannelStateData): unknown;
                    fromPartial<I_11 extends unknown>(object: I_11): _462.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _462.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.PacketCommitmentData;
                    fromJSON(object: any): _462.PacketCommitmentData;
                    toJSON(message: _462.PacketCommitmentData): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _462.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _462.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.PacketAcknowledgementData;
                    fromJSON(object: any): _462.PacketAcknowledgementData;
                    toJSON(message: _462.PacketAcknowledgementData): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _462.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _462.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.PacketReceiptAbsenceData;
                    fromJSON(object: any): _462.PacketReceiptAbsenceData;
                    toJSON(message: _462.PacketReceiptAbsenceData): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _462.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _462.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.NextSequenceRecvData;
                    fromJSON(object: any): _462.NextSequenceRecvData;
                    toJSON(message: _462.NextSequenceRecvData): unknown;
                    fromPartial<I_15 extends unknown>(object: I_15): _462.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _464.DataType;
                dataTypeToJSON(object: _464.DataType): string;
                DataType: typeof _464.DataType;
                ClientState: {
                    encode(message: _464.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.ClientState;
                    fromJSON(object: any): _464.ClientState;
                    toJSON(message: _464.ClientState): unknown;
                    fromPartial<I extends unknown>(object: I): _464.ClientState;
                };
                ConsensusState: {
                    encode(message: _464.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.ConsensusState;
                    fromJSON(object: any): _464.ConsensusState;
                    toJSON(message: _464.ConsensusState): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _464.ConsensusState;
                };
                Header: {
                    encode(message: _464.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.Header;
                    fromJSON(object: any): _464.Header;
                    toJSON(message: _464.Header): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _464.Header;
                };
                Misbehaviour: {
                    encode(message: _464.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.Misbehaviour;
                    fromJSON(object: any): _464.Misbehaviour;
                    toJSON(message: _464.Misbehaviour): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _464.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _464.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.SignatureAndData;
                    fromJSON(object: any): _464.SignatureAndData;
                    toJSON(message: _464.SignatureAndData): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _464.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _464.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.TimestampedSignatureData;
                    fromJSON(object: any): _464.TimestampedSignatureData;
                    toJSON(message: _464.TimestampedSignatureData): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _464.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _464.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.SignBytes;
                    fromJSON(object: any): _464.SignBytes;
                    toJSON(message: _464.SignBytes): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _464.SignBytes;
                };
                HeaderData: {
                    encode(message: _464.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.HeaderData;
                    fromJSON(object: any): _464.HeaderData;
                    toJSON(message: _464.HeaderData): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _464.HeaderData;
                };
                ClientStateData: {
                    encode(message: _464.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.ClientStateData;
                    fromJSON(object: any): _464.ClientStateData;
                    toJSON(message: _464.ClientStateData): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _464.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _464.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.ConsensusStateData;
                    fromJSON(object: any): _464.ConsensusStateData;
                    toJSON(message: _464.ConsensusStateData): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _464.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _464.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.ConnectionStateData;
                    fromJSON(object: any): _464.ConnectionStateData;
                    toJSON(message: _464.ConnectionStateData): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _464.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _464.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.ChannelStateData;
                    fromJSON(object: any): _464.ChannelStateData;
                    toJSON(message: _464.ChannelStateData): unknown;
                    fromPartial<I_11 extends unknown>(object: I_11): _464.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _464.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.PacketCommitmentData;
                    fromJSON(object: any): _464.PacketCommitmentData;
                    toJSON(message: _464.PacketCommitmentData): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _464.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _464.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.PacketAcknowledgementData;
                    fromJSON(object: any): _464.PacketAcknowledgementData;
                    toJSON(message: _464.PacketAcknowledgementData): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _464.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _464.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.PacketReceiptAbsenceData;
                    fromJSON(object: any): _464.PacketReceiptAbsenceData;
                    toJSON(message: _464.PacketReceiptAbsenceData): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _464.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _464.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.NextSequenceRecvData;
                    fromJSON(object: any): _464.NextSequenceRecvData;
                    toJSON(message: _464.NextSequenceRecvData): unknown;
                    fromPartial<I_15 extends unknown>(object: I_15): _464.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _466.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _466.ClientState;
                    fromJSON(object: any): _466.ClientState;
                    toJSON(message: _466.ClientState): unknown;
                    fromPartial<I extends unknown>(object: I): _466.ClientState;
                };
                ConsensusState: {
                    encode(message: _466.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _466.ConsensusState;
                    fromJSON(object: any): _466.ConsensusState;
                    toJSON(message: _466.ConsensusState): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _466.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _466.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _466.Misbehaviour;
                    fromJSON(object: any): _466.Misbehaviour;
                    toJSON(message: _466.Misbehaviour): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _466.Misbehaviour;
                };
                Header: {
                    encode(message: _466.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _466.Header;
                    fromJSON(object: any): _466.Header;
                    toJSON(message: _466.Header): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _466.Header;
                };
                Fraction: {
                    encode(message: _466.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _466.Fraction;
                    fromJSON(object: any): _466.Fraction;
                    toJSON(message: _466.Fraction): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _466.Fraction;
                };
            };
        }
    }
}
export declare namespace osmosis {
    namespace claim {
        const v1beta1: {
            QueryModuleAccountBalanceRequest: {
                encode(_: _474.QueryModuleAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryModuleAccountBalanceRequest;
                fromJSON(_: any): _474.QueryModuleAccountBalanceRequest;
                toJSON(_: _474.QueryModuleAccountBalanceRequest): unknown;
                fromPartial<I extends unknown>(_: I): _474.QueryModuleAccountBalanceRequest;
            };
            QueryModuleAccountBalanceResponse: {
                encode(message: _474.QueryModuleAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryModuleAccountBalanceResponse;
                fromJSON(object: any): _474.QueryModuleAccountBalanceResponse;
                toJSON(message: _474.QueryModuleAccountBalanceResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _474.QueryModuleAccountBalanceResponse;
            };
            QueryParamsRequest: {
                encode(_: _474.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryParamsRequest;
                fromJSON(_: any): _474.QueryParamsRequest;
                toJSON(_: _474.QueryParamsRequest): unknown;
                fromPartial<I_2 extends unknown>(_: I_2): _474.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _474.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryParamsResponse;
                fromJSON(object: any): _474.QueryParamsResponse;
                toJSON(message: _474.QueryParamsResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _474.QueryParamsResponse;
            };
            QueryClaimRecordRequest: {
                encode(message: _474.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryClaimRecordRequest;
                fromJSON(object: any): _474.QueryClaimRecordRequest;
                toJSON(message: _474.QueryClaimRecordRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _474.QueryClaimRecordRequest;
            };
            QueryClaimRecordResponse: {
                encode(message: _474.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryClaimRecordResponse;
                fromJSON(object: any): _474.QueryClaimRecordResponse;
                toJSON(message: _474.QueryClaimRecordResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _474.QueryClaimRecordResponse;
            };
            QueryClaimableForActionRequest: {
                encode(message: _474.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryClaimableForActionRequest;
                fromJSON(object: any): _474.QueryClaimableForActionRequest;
                toJSON(message: _474.QueryClaimableForActionRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _474.QueryClaimableForActionRequest;
            };
            QueryClaimableForActionResponse: {
                encode(message: _474.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryClaimableForActionResponse;
                fromJSON(object: any): _474.QueryClaimableForActionResponse;
                toJSON(message: _474.QueryClaimableForActionResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _474.QueryClaimableForActionResponse;
            };
            QueryTotalClaimableRequest: {
                encode(message: _474.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryTotalClaimableRequest;
                fromJSON(object: any): _474.QueryTotalClaimableRequest;
                toJSON(message: _474.QueryTotalClaimableRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _474.QueryTotalClaimableRequest;
            };
            QueryTotalClaimableResponse: {
                encode(message: _474.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryTotalClaimableResponse;
                fromJSON(object: any): _474.QueryTotalClaimableResponse;
                toJSON(message: _474.QueryTotalClaimableResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _474.QueryTotalClaimableResponse;
            };
            Params: {
                encode(message: _472.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _472.Params;
                fromJSON(object: any): _472.Params;
                toJSON(message: _472.Params): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _472.Params;
            };
            GenesisState: {
                encode(message: _470.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _470.GenesisState;
                fromJSON(object: any): _470.GenesisState;
                toJSON(message: _470.GenesisState): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _470.GenesisState;
            };
            actionFromJSON(object: any): _468.Action;
            actionToJSON(object: _468.Action): string;
            Action: typeof _468.Action;
            ClaimRecord: {
                encode(message: _468.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _468.ClaimRecord;
                fromJSON(object: any): _468.ClaimRecord;
                toJSON(message: _468.ClaimRecord): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _468.ClaimRecord;
            };
        };
    }
    namespace epochs {
        const v1beta1: {
            QueryEpochsInfoRequest: {
                encode(_: _478.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _478.QueryEpochsInfoRequest;
                fromJSON(_: any): _478.QueryEpochsInfoRequest;
                toJSON(_: _478.QueryEpochsInfoRequest): unknown;
                fromPartial<I extends unknown>(_: I): _478.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _478.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _478.QueryEpochsInfoResponse;
                fromJSON(object: any): _478.QueryEpochsInfoResponse;
                toJSON(message: _478.QueryEpochsInfoResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _478.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _478.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _478.QueryCurrentEpochRequest;
                fromJSON(object: any): _478.QueryCurrentEpochRequest;
                toJSON(message: _478.QueryCurrentEpochRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _478.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _478.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _478.QueryCurrentEpochResponse;
                fromJSON(object: any): _478.QueryCurrentEpochResponse;
                toJSON(message: _478.QueryCurrentEpochResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _478.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _476.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _476.EpochInfo;
                fromJSON(object: any): _476.EpochInfo;
                toJSON(message: _476.EpochInfo): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _476.EpochInfo;
            };
            GenesisState: {
                encode(message: _476.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _476.GenesisState;
                fromJSON(object: any): _476.GenesisState;
                toJSON(message: _476.GenesisState): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _476.GenesisState;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgJoinPool: {
                encode(message: _488.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _488.MsgJoinPool;
                fromJSON(object: any): _488.MsgJoinPool;
                toJSON(message: _488.MsgJoinPool): unknown;
                fromPartial<I extends unknown>(object: I): _488.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(_: _488.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _488.MsgJoinPoolResponse;
                fromJSON(_: any): _488.MsgJoinPoolResponse;
                toJSON(_: _488.MsgJoinPoolResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _488.MsgJoinPoolResponse;
            };
            MsgExitPool: {
                encode(message: _488.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _488.MsgExitPool;
                fromJSON(object: any): _488.MsgExitPool;
                toJSON(message: _488.MsgExitPool): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _488.MsgExitPool;
            };
            MsgExitPoolResponse: {
                encode(_: _488.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _488.MsgExitPoolResponse;
                fromJSON(_: any): _488.MsgExitPoolResponse;
                toJSON(_: _488.MsgExitPoolResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _488.MsgExitPoolResponse;
            };
            SwapAmountInRoute: {
                encode(message: _488.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _488.SwapAmountInRoute;
                fromJSON(object: any): _488.SwapAmountInRoute;
                toJSON(message: _488.SwapAmountInRoute): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _488.SwapAmountInRoute;
            };
            MsgSwapExactAmountIn: {
                encode(message: _488.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _488.MsgSwapExactAmountIn;
                fromJSON(object: any): _488.MsgSwapExactAmountIn;
                toJSON(message: _488.MsgSwapExactAmountIn): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _488.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _488.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _488.MsgSwapExactAmountInResponse;
                fromJSON(object: any): _488.MsgSwapExactAmountInResponse;
                toJSON(message: _488.MsgSwapExactAmountInResponse): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _488.MsgSwapExactAmountInResponse;
            };
            SwapAmountOutRoute: {
                encode(message: _488.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _488.SwapAmountOutRoute;
                fromJSON(object: any): _488.SwapAmountOutRoute;
                toJSON(message: _488.SwapAmountOutRoute): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _488.SwapAmountOutRoute;
            };
            MsgSwapExactAmountOut: {
                encode(message: _488.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _488.MsgSwapExactAmountOut;
                fromJSON(object: any): _488.MsgSwapExactAmountOut;
                toJSON(message: _488.MsgSwapExactAmountOut): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _488.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _488.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _488.MsgSwapExactAmountOutResponse;
                fromJSON(object: any): _488.MsgSwapExactAmountOutResponse;
                toJSON(message: _488.MsgSwapExactAmountOutResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _488.MsgSwapExactAmountOutResponse;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _488.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _488.MsgJoinSwapExternAmountIn;
                fromJSON(object: any): _488.MsgJoinSwapExternAmountIn;
                toJSON(message: _488.MsgJoinSwapExternAmountIn): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _488.MsgJoinSwapExternAmountIn;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _488.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _488.MsgJoinSwapExternAmountInResponse;
                fromJSON(object: any): _488.MsgJoinSwapExternAmountInResponse;
                toJSON(message: _488.MsgJoinSwapExternAmountInResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _488.MsgJoinSwapExternAmountInResponse;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _488.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _488.MsgJoinSwapShareAmountOut;
                fromJSON(object: any): _488.MsgJoinSwapShareAmountOut;
                toJSON(message: _488.MsgJoinSwapShareAmountOut): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _488.MsgJoinSwapShareAmountOut;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _488.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _488.MsgJoinSwapShareAmountOutResponse;
                fromJSON(object: any): _488.MsgJoinSwapShareAmountOutResponse;
                toJSON(message: _488.MsgJoinSwapShareAmountOutResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _488.MsgJoinSwapShareAmountOutResponse;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _488.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _488.MsgExitSwapShareAmountIn;
                fromJSON(object: any): _488.MsgExitSwapShareAmountIn;
                toJSON(message: _488.MsgExitSwapShareAmountIn): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _488.MsgExitSwapShareAmountIn;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _488.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _488.MsgExitSwapShareAmountInResponse;
                fromJSON(object: any): _488.MsgExitSwapShareAmountInResponse;
                toJSON(message: _488.MsgExitSwapShareAmountInResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _488.MsgExitSwapShareAmountInResponse;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _488.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _488.MsgExitSwapExternAmountOut;
                fromJSON(object: any): _488.MsgExitSwapExternAmountOut;
                toJSON(message: _488.MsgExitSwapExternAmountOut): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _488.MsgExitSwapExternAmountOut;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _488.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _488.MsgExitSwapExternAmountOutResponse;
                fromJSON(object: any): _488.MsgExitSwapExternAmountOutResponse;
                toJSON(message: _488.MsgExitSwapExternAmountOutResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _488.MsgExitSwapExternAmountOutResponse;
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: _488.MsgJoinPool) => {
                        sender: string;
                        poolId: string;
                        shareOutAmount: string;
                        tokenInMaxs: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: {
                        sender: string;
                        poolId: string;
                        shareOutAmount: string;
                        tokenInMaxs: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _488.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: _488.MsgExitPool) => {
                        sender: string;
                        poolId: string;
                        shareInAmount: string;
                        tokenOutMins: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: {
                        sender: string;
                        poolId: string;
                        shareInAmount: string;
                        tokenOutMins: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _488.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _488.MsgSwapExactAmountIn) => {
                        sender: string;
                        routes: {
                            poolId: string;
                            tokenOutDenom: string;
                        }[];
                        tokenIn: {
                            denom: string;
                            amount: string;
                        };
                        tokenOutMinAmount: string;
                    };
                    fromAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: {
                        sender: string;
                        routes: {
                            poolId: string;
                            tokenOutDenom: string;
                        }[];
                        tokenIn: {
                            denom: string;
                            amount: string;
                        };
                        tokenOutMinAmount: string;
                    }) => _488.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _488.MsgSwapExactAmountOut) => {
                        sender: string;
                        routes: {
                            poolId: string;
                            tokenInDenom: string;
                        }[];
                        tokenInMaxAmount: string;
                        tokenOut: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: {
                        sender: string;
                        routes: {
                            poolId: string;
                            tokenInDenom: string;
                        }[];
                        tokenInMaxAmount: string;
                        tokenOut: {
                            denom: string;
                            amount: string;
                        };
                    }) => _488.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: _488.MsgJoinSwapExternAmountIn) => {
                        sender: string;
                        poolId: string;
                        tokenIn: {
                            denom: string;
                            amount: string;
                        };
                        shareOutMinAmount: string;
                    };
                    fromAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: {
                        sender: string;
                        poolId: string;
                        tokenIn: {
                            denom: string;
                            amount: string;
                        };
                        shareOutMinAmount: string;
                    }) => _488.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: _488.MsgJoinSwapShareAmountOut) => {
                        sender: string;
                        poolId: string;
                        tokenInDenom: string;
                        shareOutAmount: string;
                        tokenInMaxAmount: string;
                    };
                    fromAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: {
                        sender: string;
                        poolId: string;
                        tokenInDenom: string;
                        shareOutAmount: string;
                        tokenInMaxAmount: string;
                    }) => _488.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: _488.MsgExitSwapExternAmountOut) => {
                        sender: string;
                        poolId: string;
                        tokenOut: {
                            denom: string;
                            amount: string;
                        };
                        shareInMaxAmount: string;
                    };
                    fromAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: {
                        sender: string;
                        poolId: string;
                        tokenOut: {
                            denom: string;
                            amount: string;
                        };
                        shareInMaxAmount: string;
                    }) => _488.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: _488.MsgExitSwapShareAmountIn) => {
                        sender: string;
                        poolId: string;
                        tokenOutDenom: string;
                        shareInAmount: string;
                        tokenOutMinAmount: string;
                    };
                    fromAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: {
                        sender: string;
                        poolId: string;
                        tokenOutDenom: string;
                        shareInAmount: string;
                        tokenOutMinAmount: string;
                    }) => _488.MsgExitSwapShareAmountIn;
                };
            };
            encoded: {
                joinPool(value: _488.MsgJoinPool): {
                    type_url: string;
                    value: Uint8Array;
                };
                exitPool(value: _488.MsgExitPool): {
                    type_url: string;
                    value: Uint8Array;
                };
                swapExactAmountIn(value: _488.MsgSwapExactAmountIn): {
                    type_url: string;
                    value: Uint8Array;
                };
                swapExactAmountOut(value: _488.MsgSwapExactAmountOut): {
                    type_url: string;
                    value: Uint8Array;
                };
                joinSwapExternAmountIn(value: _488.MsgJoinSwapExternAmountIn): {
                    type_url: string;
                    value: Uint8Array;
                };
                joinSwapShareAmountOut(value: _488.MsgJoinSwapShareAmountOut): {
                    type_url: string;
                    value: Uint8Array;
                };
                exitSwapExternAmountOut(value: _488.MsgExitSwapExternAmountOut): {
                    type_url: string;
                    value: Uint8Array;
                };
                exitSwapShareAmountIn(value: _488.MsgExitSwapShareAmountIn): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                joinPool(value: any): {
                    typeUrl: string;
                    value: _488.MsgJoinPool;
                };
                exitPool(value: any): {
                    typeUrl: string;
                    value: _488.MsgExitPool;
                };
                swapExactAmountIn(value: any): {
                    typeUrl: string;
                    value: _488.MsgSwapExactAmountIn;
                };
                swapExactAmountOut(value: any): {
                    typeUrl: string;
                    value: _488.MsgSwapExactAmountOut;
                };
                joinSwapExternAmountIn(value: any): {
                    typeUrl: string;
                    value: _488.MsgJoinSwapExternAmountIn;
                };
                joinSwapShareAmountOut(value: any): {
                    typeUrl: string;
                    value: _488.MsgJoinSwapShareAmountOut;
                };
                exitSwapExternAmountOut(value: any): {
                    typeUrl: string;
                    value: _488.MsgExitSwapExternAmountOut;
                };
                exitSwapShareAmountIn(value: any): {
                    typeUrl: string;
                    value: _488.MsgExitSwapShareAmountIn;
                };
            };
            toJSON: {
                joinPool(value: _488.MsgJoinPool): {
                    typeUrl: string;
                    value: unknown;
                };
                exitPool(value: _488.MsgExitPool): {
                    typeUrl: string;
                    value: unknown;
                };
                swapExactAmountIn(value: _488.MsgSwapExactAmountIn): {
                    typeUrl: string;
                    value: unknown;
                };
                swapExactAmountOut(value: _488.MsgSwapExactAmountOut): {
                    typeUrl: string;
                    value: unknown;
                };
                joinSwapExternAmountIn(value: _488.MsgJoinSwapExternAmountIn): {
                    typeUrl: string;
                    value: unknown;
                };
                joinSwapShareAmountOut(value: _488.MsgJoinSwapShareAmountOut): {
                    typeUrl: string;
                    value: unknown;
                };
                exitSwapExternAmountOut(value: _488.MsgExitSwapExternAmountOut): {
                    typeUrl: string;
                    value: unknown;
                };
                exitSwapShareAmountIn(value: _488.MsgExitSwapShareAmountIn): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                joinPool(value: _488.MsgJoinPool): {
                    typeUrl: string;
                    value: _488.MsgJoinPool;
                };
                exitPool(value: _488.MsgExitPool): {
                    typeUrl: string;
                    value: _488.MsgExitPool;
                };
                swapExactAmountIn(value: _488.MsgSwapExactAmountIn): {
                    typeUrl: string;
                    value: _488.MsgSwapExactAmountIn;
                };
                swapExactAmountOut(value: _488.MsgSwapExactAmountOut): {
                    typeUrl: string;
                    value: _488.MsgSwapExactAmountOut;
                };
                joinSwapExternAmountIn(value: _488.MsgJoinSwapExternAmountIn): {
                    typeUrl: string;
                    value: _488.MsgJoinSwapExternAmountIn;
                };
                joinSwapShareAmountOut(value: _488.MsgJoinSwapShareAmountOut): {
                    typeUrl: string;
                    value: _488.MsgJoinSwapShareAmountOut;
                };
                exitSwapExternAmountOut(value: _488.MsgExitSwapExternAmountOut): {
                    typeUrl: string;
                    value: _488.MsgExitSwapExternAmountOut;
                };
                exitSwapShareAmountIn(value: _488.MsgExitSwapShareAmountIn): {
                    typeUrl: string;
                    value: _488.MsgExitSwapShareAmountIn;
                };
            };
            messages: {
                joinPool(value: _488.MsgJoinPool): {
                    typeUrl: string;
                    value: _488.MsgJoinPool;
                };
                exitPool(value: _488.MsgExitPool): {
                    typeUrl: string;
                    value: _488.MsgExitPool;
                };
                swapExactAmountIn(value: _488.MsgSwapExactAmountIn): {
                    typeUrl: string;
                    value: _488.MsgSwapExactAmountIn;
                };
                swapExactAmountOut(value: _488.MsgSwapExactAmountOut): {
                    typeUrl: string;
                    value: _488.MsgSwapExactAmountOut;
                };
                joinSwapExternAmountIn(value: _488.MsgJoinSwapExternAmountIn): {
                    typeUrl: string;
                    value: _488.MsgJoinSwapExternAmountIn;
                };
                joinSwapShareAmountOut(value: _488.MsgJoinSwapShareAmountOut): {
                    typeUrl: string;
                    value: _488.MsgJoinSwapShareAmountOut;
                };
                exitSwapExternAmountOut(value: _488.MsgExitSwapExternAmountOut): {
                    typeUrl: string;
                    value: _488.MsgExitSwapExternAmountOut;
                };
                exitSwapShareAmountIn(value: _488.MsgExitSwapShareAmountIn): {
                    typeUrl: string;
                    value: _488.MsgExitSwapShareAmountIn;
                };
            };
            QueryPoolRequest: {
                encode(message: _486.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.QueryPoolRequest;
                fromJSON(object: any): _486.QueryPoolRequest;
                toJSON(message: _486.QueryPoolRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _486.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _486.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.QueryPoolResponse;
                fromJSON(object: any): _486.QueryPoolResponse;
                toJSON(message: _486.QueryPoolResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _486.QueryPoolResponse;
            };
            QueryPoolsRequest: {
                encode(message: _486.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.QueryPoolsRequest;
                fromJSON(object: any): _486.QueryPoolsRequest;
                toJSON(message: _486.QueryPoolsRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _486.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _486.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.QueryPoolsResponse;
                fromJSON(object: any): _486.QueryPoolsResponse;
                toJSON(message: _486.QueryPoolsResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _486.QueryPoolsResponse;
            };
            QueryNumPoolsRequest: {
                encode(_: _486.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.QueryNumPoolsRequest;
                fromJSON(_: any): _486.QueryNumPoolsRequest;
                toJSON(_: _486.QueryNumPoolsRequest): unknown;
                fromPartial<I_22 extends unknown>(_: I_22): _486.QueryNumPoolsRequest;
            };
            QueryNumPoolsResponse: {
                encode(message: _486.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.QueryNumPoolsResponse;
                fromJSON(object: any): _486.QueryNumPoolsResponse;
                toJSON(message: _486.QueryNumPoolsResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _486.QueryNumPoolsResponse;
            };
            QueryPoolParamsRequest: {
                encode(message: _486.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.QueryPoolParamsRequest;
                fromJSON(object: any): _486.QueryPoolParamsRequest;
                toJSON(message: _486.QueryPoolParamsRequest): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _486.QueryPoolParamsRequest;
            };
            QueryPoolParamsResponse: {
                encode(message: _486.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.QueryPoolParamsResponse;
                fromJSON(object: any): _486.QueryPoolParamsResponse;
                toJSON(message: _486.QueryPoolParamsResponse): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _486.QueryPoolParamsResponse;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _486.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.QueryTotalPoolLiquidityRequest;
                fromJSON(object: any): _486.QueryTotalPoolLiquidityRequest;
                toJSON(message: _486.QueryTotalPoolLiquidityRequest): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _486.QueryTotalPoolLiquidityRequest;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _486.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.QueryTotalPoolLiquidityResponse;
                fromJSON(object: any): _486.QueryTotalPoolLiquidityResponse;
                toJSON(message: _486.QueryTotalPoolLiquidityResponse): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _486.QueryTotalPoolLiquidityResponse;
            };
            QueryTotalSharesRequest: {
                encode(message: _486.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.QueryTotalSharesRequest;
                fromJSON(object: any): _486.QueryTotalSharesRequest;
                toJSON(message: _486.QueryTotalSharesRequest): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _486.QueryTotalSharesRequest;
            };
            QueryTotalSharesResponse: {
                encode(message: _486.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.QueryTotalSharesResponse;
                fromJSON(object: any): _486.QueryTotalSharesResponse;
                toJSON(message: _486.QueryTotalSharesResponse): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _486.QueryTotalSharesResponse;
            };
            QuerySpotPriceRequest: {
                encode(message: _486.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.QuerySpotPriceRequest;
                fromJSON(object: any): _486.QuerySpotPriceRequest;
                toJSON(message: _486.QuerySpotPriceRequest): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _486.QuerySpotPriceRequest;
            };
            QuerySpotPriceResponse: {
                encode(message: _486.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.QuerySpotPriceResponse;
                fromJSON(object: any): _486.QuerySpotPriceResponse;
                toJSON(message: _486.QuerySpotPriceResponse): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _486.QuerySpotPriceResponse;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _486.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.QuerySwapExactAmountInRequest;
                fromJSON(object: any): _486.QuerySwapExactAmountInRequest;
                toJSON(message: _486.QuerySwapExactAmountInRequest): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _486.QuerySwapExactAmountInRequest;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _486.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.QuerySwapExactAmountInResponse;
                fromJSON(object: any): _486.QuerySwapExactAmountInResponse;
                toJSON(message: _486.QuerySwapExactAmountInResponse): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _486.QuerySwapExactAmountInResponse;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _486.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.QuerySwapExactAmountOutRequest;
                fromJSON(object: any): _486.QuerySwapExactAmountOutRequest;
                toJSON(message: _486.QuerySwapExactAmountOutRequest): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _486.QuerySwapExactAmountOutRequest;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _486.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.QuerySwapExactAmountOutResponse;
                fromJSON(object: any): _486.QuerySwapExactAmountOutResponse;
                toJSON(message: _486.QuerySwapExactAmountOutResponse): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _486.QuerySwapExactAmountOutResponse;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _486.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.QueryTotalLiquidityRequest;
                fromJSON(_: any): _486.QueryTotalLiquidityRequest;
                toJSON(_: _486.QueryTotalLiquidityRequest): unknown;
                fromPartial<I_36 extends unknown>(_: I_36): _486.QueryTotalLiquidityRequest;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _486.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.QueryTotalLiquidityResponse;
                fromJSON(object: any): _486.QueryTotalLiquidityResponse;
                toJSON(message: _486.QueryTotalLiquidityResponse): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _486.QueryTotalLiquidityResponse;
            };
            Params: {
                encode(message: _484.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _484.Params;
                fromJSON(object: any): _484.Params;
                toJSON(message: _484.Params): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _484.Params;
            };
            GenesisState: {
                encode(message: _484.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _484.GenesisState;
                fromJSON(object: any): _484.GenesisState;
                toJSON(message: _484.GenesisState): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _484.GenesisState;
            };
            MsgCreateBalancerPool: {
                encode(message: _482.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.MsgCreateBalancerPool;
                fromJSON(object: any): _482.MsgCreateBalancerPool;
                toJSON(message: _482.MsgCreateBalancerPool): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _482.MsgCreateBalancerPool;
            };
            MsgCreateBalancerPoolResponse: {
                encode(message: _482.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.MsgCreateBalancerPoolResponse;
                fromJSON(object: any): _482.MsgCreateBalancerPoolResponse;
                toJSON(message: _482.MsgCreateBalancerPoolResponse): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _482.MsgCreateBalancerPoolResponse;
            };
            BalancerMsgClientImpl: typeof _482.BalancerMsgClientImpl;
            SmoothWeightChangeParams: {
                encode(message: _480.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.SmoothWeightChangeParams;
                fromJSON(object: any): _480.SmoothWeightChangeParams;
                toJSON(message: _480.SmoothWeightChangeParams): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _480.SmoothWeightChangeParams;
            };
            PoolParams: {
                encode(message: _480.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.PoolParams;
                fromJSON(object: any): _480.PoolParams;
                toJSON(message: _480.PoolParams): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _480.PoolParams;
            };
            PoolAsset: {
                encode(message: _480.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.PoolAsset;
                fromJSON(object: any): _480.PoolAsset;
                toJSON(message: _480.PoolAsset): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _480.PoolAsset;
            };
            Pool: {
                encode(message: _480.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.Pool;
                fromJSON(object: any): _480.Pool;
                toJSON(message: _480.Pool): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _480.Pool;
            };
        };
    }
    const incentives: {
        MsgCreateGauge: {
            encode(message: _504.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _504.MsgCreateGauge;
            fromJSON(object: any): _504.MsgCreateGauge;
            toJSON(message: _504.MsgCreateGauge): unknown;
            fromPartial<I extends unknown>(object: I): _504.MsgCreateGauge;
        };
        MsgCreateGaugeResponse: {
            encode(_: _504.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _504.MsgCreateGaugeResponse;
            fromJSON(_: any): _504.MsgCreateGaugeResponse;
            toJSON(_: _504.MsgCreateGaugeResponse): unknown;
            fromPartial<I_1 extends unknown>(_: I_1): _504.MsgCreateGaugeResponse;
        };
        MsgAddToGauge: {
            encode(message: _504.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _504.MsgAddToGauge;
            fromJSON(object: any): _504.MsgAddToGauge;
            toJSON(message: _504.MsgAddToGauge): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _504.MsgAddToGauge;
        };
        MsgAddToGaugeResponse: {
            encode(_: _504.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _504.MsgAddToGaugeResponse;
            fromJSON(_: any): _504.MsgAddToGaugeResponse;
            toJSON(_: _504.MsgAddToGaugeResponse): unknown;
            fromPartial<I_3 extends unknown>(_: I_3): _504.MsgAddToGaugeResponse;
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: _504.MsgCreateGauge) => {
                    isPerpetual: boolean;
                    owner: string;
                    distributeTo: {
                        lockQueryType: number;
                        denom: string;
                        duration: string;
                        timestamp: Date;
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    startTime: Date;
                    numEpochsPaidOver: string;
                };
                fromAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: {
                    isPerpetual: boolean;
                    owner: string;
                    distributeTo: {
                        lockQueryType: number;
                        denom: string;
                        duration: string;
                        timestamp: Date;
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    startTime: Date;
                    numEpochsPaidOver: string;
                }) => _504.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: ({ owner, gaugeId, rewards }: _504.MsgAddToGauge) => {
                    owner: string;
                    gaugeId: string;
                    rewards: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromAmino: ({ owner, gaugeId, rewards }: {
                    owner: string;
                    gaugeId: string;
                    rewards: {
                        denom: string;
                        amount: string;
                    }[];
                }) => _504.MsgAddToGauge;
            };
        };
        encoded: {
            createGauge(value: _504.MsgCreateGauge): {
                type_url: string;
                value: Uint8Array;
            };
            addToGauge(value: _504.MsgAddToGauge): {
                type_url: string;
                value: Uint8Array;
            };
        };
        fromJSON: {
            createGauge(value: any): {
                typeUrl: string;
                value: _504.MsgCreateGauge;
            };
            addToGauge(value: any): {
                typeUrl: string;
                value: _504.MsgAddToGauge;
            };
        };
        toJSON: {
            createGauge(value: _504.MsgCreateGauge): {
                typeUrl: string;
                value: unknown;
            };
            addToGauge(value: _504.MsgAddToGauge): {
                typeUrl: string;
                value: unknown;
            };
        };
        json: {
            createGauge(value: _504.MsgCreateGauge): {
                typeUrl: string;
                value: _504.MsgCreateGauge;
            };
            addToGauge(value: _504.MsgAddToGauge): {
                typeUrl: string;
                value: _504.MsgAddToGauge;
            };
        };
        messages: {
            createGauge(value: _504.MsgCreateGauge): {
                typeUrl: string;
                value: _504.MsgCreateGauge;
            };
            addToGauge(value: _504.MsgAddToGauge): {
                typeUrl: string;
                value: _504.MsgAddToGauge;
            };
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _502.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.ModuleToDistributeCoinsRequest;
            fromJSON(_: any): _502.ModuleToDistributeCoinsRequest;
            toJSON(_: _502.ModuleToDistributeCoinsRequest): unknown;
            fromPartial<I_4 extends unknown>(_: I_4): _502.ModuleToDistributeCoinsRequest;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _502.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.ModuleToDistributeCoinsResponse;
            fromJSON(object: any): _502.ModuleToDistributeCoinsResponse;
            toJSON(message: _502.ModuleToDistributeCoinsResponse): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _502.ModuleToDistributeCoinsResponse;
        };
        ModuleDistributedCoinsRequest: {
            encode(_: _502.ModuleDistributedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.ModuleDistributedCoinsRequest;
            fromJSON(_: any): _502.ModuleDistributedCoinsRequest;
            toJSON(_: _502.ModuleDistributedCoinsRequest): unknown;
            fromPartial<I_6 extends unknown>(_: I_6): _502.ModuleDistributedCoinsRequest;
        };
        ModuleDistributedCoinsResponse: {
            encode(message: _502.ModuleDistributedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.ModuleDistributedCoinsResponse;
            fromJSON(object: any): _502.ModuleDistributedCoinsResponse;
            toJSON(message: _502.ModuleDistributedCoinsResponse): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _502.ModuleDistributedCoinsResponse;
        };
        GaugeByIDRequest: {
            encode(message: _502.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.GaugeByIDRequest;
            fromJSON(object: any): _502.GaugeByIDRequest;
            toJSON(message: _502.GaugeByIDRequest): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _502.GaugeByIDRequest;
        };
        GaugeByIDResponse: {
            encode(message: _502.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.GaugeByIDResponse;
            fromJSON(object: any): _502.GaugeByIDResponse;
            toJSON(message: _502.GaugeByIDResponse): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _502.GaugeByIDResponse;
        };
        GaugesRequest: {
            encode(message: _502.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.GaugesRequest;
            fromJSON(object: any): _502.GaugesRequest;
            toJSON(message: _502.GaugesRequest): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _502.GaugesRequest;
        };
        GaugesResponse: {
            encode(message: _502.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.GaugesResponse;
            fromJSON(object: any): _502.GaugesResponse;
            toJSON(message: _502.GaugesResponse): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _502.GaugesResponse;
        };
        ActiveGaugesRequest: {
            encode(message: _502.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.ActiveGaugesRequest;
            fromJSON(object: any): _502.ActiveGaugesRequest;
            toJSON(message: _502.ActiveGaugesRequest): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _502.ActiveGaugesRequest;
        };
        ActiveGaugesResponse: {
            encode(message: _502.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.ActiveGaugesResponse;
            fromJSON(object: any): _502.ActiveGaugesResponse;
            toJSON(message: _502.ActiveGaugesResponse): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _502.ActiveGaugesResponse;
        };
        ActiveGaugesPerDenomRequest: {
            encode(message: _502.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.ActiveGaugesPerDenomRequest;
            fromJSON(object: any): _502.ActiveGaugesPerDenomRequest;
            toJSON(message: _502.ActiveGaugesPerDenomRequest): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _502.ActiveGaugesPerDenomRequest;
        };
        ActiveGaugesPerDenomResponse: {
            encode(message: _502.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.ActiveGaugesPerDenomResponse;
            fromJSON(object: any): _502.ActiveGaugesPerDenomResponse;
            toJSON(message: _502.ActiveGaugesPerDenomResponse): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _502.ActiveGaugesPerDenomResponse;
        };
        UpcomingGaugesRequest: {
            encode(message: _502.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.UpcomingGaugesRequest;
            fromJSON(object: any): _502.UpcomingGaugesRequest;
            toJSON(message: _502.UpcomingGaugesRequest): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _502.UpcomingGaugesRequest;
        };
        UpcomingGaugesResponse: {
            encode(message: _502.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.UpcomingGaugesResponse;
            fromJSON(object: any): _502.UpcomingGaugesResponse;
            toJSON(message: _502.UpcomingGaugesResponse): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _502.UpcomingGaugesResponse;
        };
        RewardsEstRequest: {
            encode(message: _502.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.RewardsEstRequest;
            fromJSON(object: any): _502.RewardsEstRequest;
            toJSON(message: _502.RewardsEstRequest): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _502.RewardsEstRequest;
        };
        RewardsEstResponse: {
            encode(message: _502.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.RewardsEstResponse;
            fromJSON(object: any): _502.RewardsEstResponse;
            toJSON(message: _502.RewardsEstResponse): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _502.RewardsEstResponse;
        };
        QueryLockableDurationsRequest: {
            encode(_: _502.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.QueryLockableDurationsRequest;
            fromJSON(_: any): _502.QueryLockableDurationsRequest;
            toJSON(_: _502.QueryLockableDurationsRequest): unknown;
            fromPartial<I_20 extends unknown>(_: I_20): _502.QueryLockableDurationsRequest;
        };
        QueryLockableDurationsResponse: {
            encode(message: _502.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.QueryLockableDurationsResponse;
            fromJSON(object: any): _502.QueryLockableDurationsResponse;
            toJSON(message: _502.QueryLockableDurationsResponse): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _502.QueryLockableDurationsResponse;
        };
        Params: {
            encode(message: _500.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _500.Params;
            fromJSON(object: any): _500.Params;
            toJSON(message: _500.Params): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _500.Params;
        };
        GenesisState: {
            encode(message: _498.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _498.GenesisState;
            fromJSON(object: any): _498.GenesisState;
            toJSON(message: _498.GenesisState): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _498.GenesisState;
        };
        Gauge: {
            encode(message: _496.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _496.Gauge;
            fromJSON(object: any): _496.Gauge;
            toJSON(message: _496.Gauge): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _496.Gauge;
        };
        LockableDurationsInfo: {
            encode(message: _496.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _496.LockableDurationsInfo;
            fromJSON(object: any): _496.LockableDurationsInfo;
            toJSON(message: _496.LockableDurationsInfo): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _496.LockableDurationsInfo;
        };
    };
    const lockup: {
        MsgLockTokens: {
            encode(message: _518.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _518.MsgLockTokens;
            fromJSON(object: any): _518.MsgLockTokens;
            toJSON(message: _518.MsgLockTokens): unknown;
            fromPartial<I extends unknown>(object: I): _518.MsgLockTokens;
        };
        MsgLockTokensResponse: {
            encode(message: _518.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _518.MsgLockTokensResponse;
            fromJSON(object: any): _518.MsgLockTokensResponse;
            toJSON(message: _518.MsgLockTokensResponse): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _518.MsgLockTokensResponse;
        };
        MsgBeginUnlockingAll: {
            encode(message: _518.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _518.MsgBeginUnlockingAll;
            fromJSON(object: any): _518.MsgBeginUnlockingAll;
            toJSON(message: _518.MsgBeginUnlockingAll): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _518.MsgBeginUnlockingAll;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _518.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _518.MsgBeginUnlockingAllResponse;
            fromJSON(object: any): _518.MsgBeginUnlockingAllResponse;
            toJSON(message: _518.MsgBeginUnlockingAllResponse): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _518.MsgBeginUnlockingAllResponse;
        };
        MsgBeginUnlocking: {
            encode(message: _518.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _518.MsgBeginUnlocking;
            fromJSON(object: any): _518.MsgBeginUnlocking;
            toJSON(message: _518.MsgBeginUnlocking): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _518.MsgBeginUnlocking;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _518.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _518.MsgBeginUnlockingResponse;
            fromJSON(object: any): _518.MsgBeginUnlockingResponse;
            toJSON(message: _518.MsgBeginUnlockingResponse): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _518.MsgBeginUnlockingResponse;
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: ({ owner, duration, coins }: _518.MsgLockTokens) => {
                    owner: string;
                    duration: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromAmino: ({ owner, duration, coins }: {
                    owner: string;
                    duration: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                }) => _518.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: ({ owner }: _518.MsgBeginUnlockingAll) => {
                    owner: string;
                };
                fromAmino: ({ owner }: {
                    owner: string;
                }) => _518.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _518.MsgBeginUnlocking) => {
                    owner: string;
                    id: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromAmino: ({ owner, id, coins }: {
                    owner: string;
                    id: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                }) => _518.MsgBeginUnlocking;
            };
        };
        encoded: {
            lockTokens(value: _518.MsgLockTokens): {
                type_url: string;
                value: Uint8Array;
            };
            beginUnlockingAll(value: _518.MsgBeginUnlockingAll): {
                type_url: string;
                value: Uint8Array;
            };
            beginUnlocking(value: _518.MsgBeginUnlocking): {
                type_url: string;
                value: Uint8Array;
            };
        };
        fromJSON: {
            lockTokens(value: any): {
                typeUrl: string;
                value: _518.MsgLockTokens;
            };
            beginUnlockingAll(value: any): {
                typeUrl: string;
                value: _518.MsgBeginUnlockingAll;
            };
            beginUnlocking(value: any): {
                typeUrl: string;
                value: _518.MsgBeginUnlocking;
            };
        };
        toJSON: {
            lockTokens(value: _518.MsgLockTokens): {
                typeUrl: string;
                value: unknown;
            };
            beginUnlockingAll(value: _518.MsgBeginUnlockingAll): {
                typeUrl: string;
                value: unknown;
            };
            beginUnlocking(value: _518.MsgBeginUnlocking): {
                typeUrl: string;
                value: unknown;
            };
        };
        json: {
            lockTokens(value: _518.MsgLockTokens): {
                typeUrl: string;
                value: _518.MsgLockTokens;
            };
            beginUnlockingAll(value: _518.MsgBeginUnlockingAll): {
                typeUrl: string;
                value: _518.MsgBeginUnlockingAll;
            };
            beginUnlocking(value: _518.MsgBeginUnlocking): {
                typeUrl: string;
                value: _518.MsgBeginUnlocking;
            };
        };
        messages: {
            lockTokens(value: _518.MsgLockTokens): {
                typeUrl: string;
                value: _518.MsgLockTokens;
            };
            beginUnlockingAll(value: _518.MsgBeginUnlockingAll): {
                typeUrl: string;
                value: _518.MsgBeginUnlockingAll;
            };
            beginUnlocking(value: _518.MsgBeginUnlocking): {
                typeUrl: string;
                value: _518.MsgBeginUnlocking;
            };
        };
        ModuleBalanceRequest: {
            encode(_: _516.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.ModuleBalanceRequest;
            fromJSON(_: any): _516.ModuleBalanceRequest;
            toJSON(_: _516.ModuleBalanceRequest): unknown;
            fromPartial<I_6 extends unknown>(_: I_6): _516.ModuleBalanceRequest;
        };
        ModuleBalanceResponse: {
            encode(message: _516.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.ModuleBalanceResponse;
            fromJSON(object: any): _516.ModuleBalanceResponse;
            toJSON(message: _516.ModuleBalanceResponse): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _516.ModuleBalanceResponse;
        };
        ModuleLockedAmountRequest: {
            encode(_: _516.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.ModuleLockedAmountRequest;
            fromJSON(_: any): _516.ModuleLockedAmountRequest;
            toJSON(_: _516.ModuleLockedAmountRequest): unknown;
            fromPartial<I_8 extends unknown>(_: I_8): _516.ModuleLockedAmountRequest;
        };
        ModuleLockedAmountResponse: {
            encode(message: _516.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.ModuleLockedAmountResponse;
            fromJSON(object: any): _516.ModuleLockedAmountResponse;
            toJSON(message: _516.ModuleLockedAmountResponse): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _516.ModuleLockedAmountResponse;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _516.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.AccountUnlockableCoinsRequest;
            fromJSON(object: any): _516.AccountUnlockableCoinsRequest;
            toJSON(message: _516.AccountUnlockableCoinsRequest): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _516.AccountUnlockableCoinsRequest;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _516.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.AccountUnlockableCoinsResponse;
            fromJSON(object: any): _516.AccountUnlockableCoinsResponse;
            toJSON(message: _516.AccountUnlockableCoinsResponse): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _516.AccountUnlockableCoinsResponse;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _516.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.AccountUnlockingCoinsRequest;
            fromJSON(object: any): _516.AccountUnlockingCoinsRequest;
            toJSON(message: _516.AccountUnlockingCoinsRequest): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _516.AccountUnlockingCoinsRequest;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _516.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.AccountUnlockingCoinsResponse;
            fromJSON(object: any): _516.AccountUnlockingCoinsResponse;
            toJSON(message: _516.AccountUnlockingCoinsResponse): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _516.AccountUnlockingCoinsResponse;
        };
        AccountLockedCoinsRequest: {
            encode(message: _516.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.AccountLockedCoinsRequest;
            fromJSON(object: any): _516.AccountLockedCoinsRequest;
            toJSON(message: _516.AccountLockedCoinsRequest): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _516.AccountLockedCoinsRequest;
        };
        AccountLockedCoinsResponse: {
            encode(message: _516.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.AccountLockedCoinsResponse;
            fromJSON(object: any): _516.AccountLockedCoinsResponse;
            toJSON(message: _516.AccountLockedCoinsResponse): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _516.AccountLockedCoinsResponse;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _516.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.AccountLockedPastTimeRequest;
            fromJSON(object: any): _516.AccountLockedPastTimeRequest;
            toJSON(message: _516.AccountLockedPastTimeRequest): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _516.AccountLockedPastTimeRequest;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _516.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.AccountLockedPastTimeResponse;
            fromJSON(object: any): _516.AccountLockedPastTimeResponse;
            toJSON(message: _516.AccountLockedPastTimeResponse): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _516.AccountLockedPastTimeResponse;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _516.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromJSON(object: any): _516.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toJSON(message: _516.AccountLockedPastTimeNotUnlockingOnlyRequest): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _516.AccountLockedPastTimeNotUnlockingOnlyRequest;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _516.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromJSON(object: any): _516.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toJSON(message: _516.AccountLockedPastTimeNotUnlockingOnlyResponse): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _516.AccountLockedPastTimeNotUnlockingOnlyResponse;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _516.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.AccountUnlockedBeforeTimeRequest;
            fromJSON(object: any): _516.AccountUnlockedBeforeTimeRequest;
            toJSON(message: _516.AccountUnlockedBeforeTimeRequest): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _516.AccountUnlockedBeforeTimeRequest;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _516.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.AccountUnlockedBeforeTimeResponse;
            fromJSON(object: any): _516.AccountUnlockedBeforeTimeResponse;
            toJSON(message: _516.AccountUnlockedBeforeTimeResponse): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _516.AccountUnlockedBeforeTimeResponse;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _516.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.AccountLockedPastTimeDenomRequest;
            fromJSON(object: any): _516.AccountLockedPastTimeDenomRequest;
            toJSON(message: _516.AccountLockedPastTimeDenomRequest): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _516.AccountLockedPastTimeDenomRequest;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _516.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.AccountLockedPastTimeDenomResponse;
            fromJSON(object: any): _516.AccountLockedPastTimeDenomResponse;
            toJSON(message: _516.AccountLockedPastTimeDenomResponse): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _516.AccountLockedPastTimeDenomResponse;
        };
        LockedDenomRequest: {
            encode(message: _516.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.LockedDenomRequest;
            fromJSON(object: any): _516.LockedDenomRequest;
            toJSON(message: _516.LockedDenomRequest): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _516.LockedDenomRequest;
        };
        LockedDenomResponse: {
            encode(message: _516.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.LockedDenomResponse;
            fromJSON(object: any): _516.LockedDenomResponse;
            toJSON(message: _516.LockedDenomResponse): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _516.LockedDenomResponse;
        };
        LockedRequest: {
            encode(message: _516.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.LockedRequest;
            fromJSON(object: any): _516.LockedRequest;
            toJSON(message: _516.LockedRequest): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _516.LockedRequest;
        };
        LockedResponse: {
            encode(message: _516.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.LockedResponse;
            fromJSON(object: any): _516.LockedResponse;
            toJSON(message: _516.LockedResponse): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _516.LockedResponse;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _516.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.SyntheticLockupsByLockupIDRequest;
            fromJSON(object: any): _516.SyntheticLockupsByLockupIDRequest;
            toJSON(message: _516.SyntheticLockupsByLockupIDRequest): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _516.SyntheticLockupsByLockupIDRequest;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _516.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.SyntheticLockupsByLockupIDResponse;
            fromJSON(object: any): _516.SyntheticLockupsByLockupIDResponse;
            toJSON(message: _516.SyntheticLockupsByLockupIDResponse): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _516.SyntheticLockupsByLockupIDResponse;
        };
        AccountLockedLongerDurationRequest: {
            encode(message: _516.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.AccountLockedLongerDurationRequest;
            fromJSON(object: any): _516.AccountLockedLongerDurationRequest;
            toJSON(message: _516.AccountLockedLongerDurationRequest): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _516.AccountLockedLongerDurationRequest;
        };
        AccountLockedLongerDurationResponse: {
            encode(message: _516.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.AccountLockedLongerDurationResponse;
            fromJSON(object: any): _516.AccountLockedLongerDurationResponse;
            toJSON(message: _516.AccountLockedLongerDurationResponse): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _516.AccountLockedLongerDurationResponse;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            encode(message: _516.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromJSON(object: any): _516.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toJSON(message: _516.AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _516.AccountLockedLongerDurationNotUnlockingOnlyRequest;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            encode(message: _516.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromJSON(object: any): _516.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toJSON(message: _516.AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _516.AccountLockedLongerDurationNotUnlockingOnlyResponse;
        };
        AccountLockedLongerDurationDenomRequest: {
            encode(message: _516.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.AccountLockedLongerDurationDenomRequest;
            fromJSON(object: any): _516.AccountLockedLongerDurationDenomRequest;
            toJSON(message: _516.AccountLockedLongerDurationDenomRequest): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _516.AccountLockedLongerDurationDenomRequest;
        };
        AccountLockedLongerDurationDenomResponse: {
            encode(message: _516.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.AccountLockedLongerDurationDenomResponse;
            fromJSON(object: any): _516.AccountLockedLongerDurationDenomResponse;
            toJSON(message: _516.AccountLockedLongerDurationDenomResponse): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _516.AccountLockedLongerDurationDenomResponse;
        };
        lockQueryTypeFromJSON(object: any): _514.LockQueryType;
        lockQueryTypeToJSON(object: _514.LockQueryType): string;
        LockQueryType: typeof _514.LockQueryType;
        PeriodLock: {
            encode(message: _514.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _514.PeriodLock;
            fromJSON(object: any): _514.PeriodLock;
            toJSON(message: _514.PeriodLock): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _514.PeriodLock;
        };
        QueryCondition: {
            encode(message: _514.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _514.QueryCondition;
            fromJSON(object: any): _514.QueryCondition;
            toJSON(message: _514.QueryCondition): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _514.QueryCondition;
        };
        SyntheticLock: {
            encode(message: _514.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _514.SyntheticLock;
            fromJSON(object: any): _514.SyntheticLock;
            toJSON(message: _514.SyntheticLock): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _514.SyntheticLock;
        };
        GenesisState: {
            encode(message: _512.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _512.GenesisState;
            fromJSON(object: any): _512.GenesisState;
            toJSON(message: _512.GenesisState): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _512.GenesisState;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _530.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _530.QueryParamsRequest;
                fromJSON(_: any): _530.QueryParamsRequest;
                toJSON(_: _530.QueryParamsRequest): unknown;
                fromPartial<I extends unknown>(_: I): _530.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _530.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _530.QueryParamsResponse;
                fromJSON(object: any): _530.QueryParamsResponse;
                toJSON(message: _530.QueryParamsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _530.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _530.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _530.QueryEpochProvisionsRequest;
                fromJSON(_: any): _530.QueryEpochProvisionsRequest;
                toJSON(_: _530.QueryEpochProvisionsRequest): unknown;
                fromPartial<I_2 extends unknown>(_: I_2): _530.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _530.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _530.QueryEpochProvisionsResponse;
                fromJSON(object: any): _530.QueryEpochProvisionsResponse;
                toJSON(message: _530.QueryEpochProvisionsResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _530.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _528.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _528.Minter;
                fromJSON(object: any): _528.Minter;
                toJSON(message: _528.Minter): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _528.Minter;
            };
            WeightedAddress: {
                encode(message: _528.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _528.WeightedAddress;
                fromJSON(object: any): _528.WeightedAddress;
                toJSON(message: _528.WeightedAddress): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _528.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _528.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _528.DistributionProportions;
                fromJSON(object: any): _528.DistributionProportions;
                toJSON(message: _528.DistributionProportions): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _528.DistributionProportions;
            };
            Params: {
                encode(message: _528.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _528.Params;
                fromJSON(object: any): _528.Params;
                toJSON(message: _528.Params): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _528.Params;
            };
            GenesisState: {
                encode(message: _526.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _526.GenesisState;
                fromJSON(object: any): _526.GenesisState;
                toJSON(message: _526.GenesisState): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _526.GenesisState;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryGaugeIdsRequest: {
                encode(message: _538.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _538.QueryGaugeIdsRequest;
                fromJSON(object: any): _538.QueryGaugeIdsRequest;
                toJSON(message: _538.QueryGaugeIdsRequest): unknown;
                fromPartial<I extends unknown>(object: I): _538.QueryGaugeIdsRequest;
            };
            QueryGaugeIdsResponse: {
                encode(message: _538.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _538.QueryGaugeIdsResponse;
                fromJSON(object: any): _538.QueryGaugeIdsResponse;
                toJSON(message: _538.QueryGaugeIdsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _538.QueryGaugeIdsResponse;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                encode(message: _538.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _538.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromJSON(object: any): _538.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toJSON(message: _538.QueryGaugeIdsResponse_GaugeIdWithDuration): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _538.QueryGaugeIdsResponse_GaugeIdWithDuration;
            };
            QueryDistrInfoRequest: {
                encode(_: _538.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _538.QueryDistrInfoRequest;
                fromJSON(_: any): _538.QueryDistrInfoRequest;
                toJSON(_: _538.QueryDistrInfoRequest): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _538.QueryDistrInfoRequest;
            };
            QueryDistrInfoResponse: {
                encode(message: _538.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _538.QueryDistrInfoResponse;
                fromJSON(object: any): _538.QueryDistrInfoResponse;
                toJSON(message: _538.QueryDistrInfoResponse): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _538.QueryDistrInfoResponse;
            };
            QueryParamsRequest: {
                encode(_: _538.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _538.QueryParamsRequest;
                fromJSON(_: any): _538.QueryParamsRequest;
                toJSON(_: _538.QueryParamsRequest): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _538.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _538.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _538.QueryParamsResponse;
                fromJSON(object: any): _538.QueryParamsResponse;
                toJSON(message: _538.QueryParamsResponse): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _538.QueryParamsResponse;
            };
            QueryLockableDurationsRequest: {
                encode(_: _538.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _538.QueryLockableDurationsRequest;
                fromJSON(_: any): _538.QueryLockableDurationsRequest;
                toJSON(_: _538.QueryLockableDurationsRequest): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _538.QueryLockableDurationsRequest;
            };
            QueryLockableDurationsResponse: {
                encode(message: _538.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _538.QueryLockableDurationsResponse;
                fromJSON(object: any): _538.QueryLockableDurationsResponse;
                toJSON(message: _538.QueryLockableDurationsResponse): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _538.QueryLockableDurationsResponse;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _538.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _538.QueryIncentivizedPoolsRequest;
                fromJSON(_: any): _538.QueryIncentivizedPoolsRequest;
                toJSON(_: _538.QueryIncentivizedPoolsRequest): unknown;
                fromPartial<I_9 extends unknown>(_: I_9): _538.QueryIncentivizedPoolsRequest;
            };
            IncentivizedPool: {
                encode(message: _538.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _538.IncentivizedPool;
                fromJSON(object: any): _538.IncentivizedPool;
                toJSON(message: _538.IncentivizedPool): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _538.IncentivizedPool;
            };
            QueryIncentivizedPoolsResponse: {
                encode(message: _538.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _538.QueryIncentivizedPoolsResponse;
                fromJSON(object: any): _538.QueryIncentivizedPoolsResponse;
                toJSON(message: _538.QueryIncentivizedPoolsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _538.QueryIncentivizedPoolsResponse;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _538.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _538.QueryExternalIncentiveGaugesRequest;
                fromJSON(_: any): _538.QueryExternalIncentiveGaugesRequest;
                toJSON(_: _538.QueryExternalIncentiveGaugesRequest): unknown;
                fromPartial<I_12 extends unknown>(_: I_12): _538.QueryExternalIncentiveGaugesRequest;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _538.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _538.QueryExternalIncentiveGaugesResponse;
                fromJSON(object: any): _538.QueryExternalIncentiveGaugesResponse;
                toJSON(message: _538.QueryExternalIncentiveGaugesResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _538.QueryExternalIncentiveGaugesResponse;
            };
            Params: {
                encode(message: _536.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _536.Params;
                fromJSON(object: any): _536.Params;
                toJSON(message: _536.Params): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _536.Params;
            };
            LockableDurationsInfo: {
                encode(message: _536.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _536.LockableDurationsInfo;
                fromJSON(object: any): _536.LockableDurationsInfo;
                toJSON(message: _536.LockableDurationsInfo): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _536.LockableDurationsInfo;
            };
            DistrInfo: {
                encode(message: _536.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _536.DistrInfo;
                fromJSON(object: any): _536.DistrInfo;
                toJSON(message: _536.DistrInfo): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _536.DistrInfo;
            };
            DistrRecord: {
                encode(message: _536.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _536.DistrRecord;
                fromJSON(object: any): _536.DistrRecord;
                toJSON(message: _536.DistrRecord): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _536.DistrRecord;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _534.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _534.ReplacePoolIncentivesProposal;
                fromJSON(object: any): _534.ReplacePoolIncentivesProposal;
                toJSON(message: _534.ReplacePoolIncentivesProposal): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _534.ReplacePoolIncentivesProposal;
            };
            UpdatePoolIncentivesProposal: {
                encode(message: _534.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _534.UpdatePoolIncentivesProposal;
                fromJSON(object: any): _534.UpdatePoolIncentivesProposal;
                toJSON(message: _534.UpdatePoolIncentivesProposal): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _534.UpdatePoolIncentivesProposal;
            };
            GenesisState: {
                encode(message: _532.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.GenesisState;
                fromJSON(object: any): _532.GenesisState;
                toJSON(message: _532.GenesisState): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _532.GenesisState;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                encode(message: _540.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _540.Node;
                fromJSON(object: any): _540.Node;
                toJSON(message: _540.Node): unknown;
                fromPartial<I extends unknown>(object: I): _540.Node;
            };
            Child: {
                encode(message: _540.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _540.Child;
                fromJSON(object: any): _540.Child;
                toJSON(message: _540.Child): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _540.Child;
            };
            Leaf: {
                encode(message: _540.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _540.Leaf;
                fromJSON(object: any): _540.Leaf;
                toJSON(message: _540.Leaf): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _540.Leaf;
            };
        };
    }
    const superfluid: {
        MsgSuperfluidDelegate: {
            encode(message: _550.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _550.MsgSuperfluidDelegate;
            fromJSON(object: any): _550.MsgSuperfluidDelegate;
            toJSON(message: _550.MsgSuperfluidDelegate): unknown;
            fromPartial<I extends unknown>(object: I): _550.MsgSuperfluidDelegate;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _550.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _550.MsgSuperfluidDelegateResponse;
            fromJSON(_: any): _550.MsgSuperfluidDelegateResponse;
            toJSON(_: _550.MsgSuperfluidDelegateResponse): unknown;
            fromPartial<I_1 extends unknown>(_: I_1): _550.MsgSuperfluidDelegateResponse;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _550.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _550.MsgSuperfluidUndelegate;
            fromJSON(object: any): _550.MsgSuperfluidUndelegate;
            toJSON(message: _550.MsgSuperfluidUndelegate): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _550.MsgSuperfluidUndelegate;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _550.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _550.MsgSuperfluidUndelegateResponse;
            fromJSON(_: any): _550.MsgSuperfluidUndelegateResponse;
            toJSON(_: _550.MsgSuperfluidUndelegateResponse): unknown;
            fromPartial<I_3 extends unknown>(_: I_3): _550.MsgSuperfluidUndelegateResponse;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _550.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _550.MsgSuperfluidUnbondLock;
            fromJSON(object: any): _550.MsgSuperfluidUnbondLock;
            toJSON(message: _550.MsgSuperfluidUnbondLock): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _550.MsgSuperfluidUnbondLock;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _550.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _550.MsgSuperfluidUnbondLockResponse;
            fromJSON(_: any): _550.MsgSuperfluidUnbondLockResponse;
            toJSON(_: _550.MsgSuperfluidUnbondLockResponse): unknown;
            fromPartial<I_5 extends unknown>(_: I_5): _550.MsgSuperfluidUnbondLockResponse;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _550.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _550.MsgLockAndSuperfluidDelegate;
            fromJSON(object: any): _550.MsgLockAndSuperfluidDelegate;
            toJSON(message: _550.MsgLockAndSuperfluidDelegate): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _550.MsgLockAndSuperfluidDelegate;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _550.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _550.MsgLockAndSuperfluidDelegateResponse;
            fromJSON(object: any): _550.MsgLockAndSuperfluidDelegateResponse;
            toJSON(message: _550.MsgLockAndSuperfluidDelegateResponse): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _550.MsgLockAndSuperfluidDelegateResponse;
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId, valAddr }: _550.MsgSuperfluidDelegate) => {
                    sender: string;
                    lockId: string;
                    valAddr: string;
                };
                fromAmino: ({ sender, lockId, valAddr }: {
                    sender: string;
                    lockId: string;
                    valAddr: string;
                }) => _550.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _550.MsgSuperfluidUndelegate) => {
                    sender: string;
                    lockId: string;
                };
                fromAmino: ({ sender, lockId }: {
                    sender: string;
                    lockId: string;
                }) => _550.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _550.MsgSuperfluidUnbondLock) => {
                    sender: string;
                    lockId: string;
                };
                fromAmino: ({ sender, lockId }: {
                    sender: string;
                    lockId: string;
                }) => _550.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, coins, valAddr }: _550.MsgLockAndSuperfluidDelegate) => {
                    sender: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    valAddr: string;
                };
                fromAmino: ({ sender, coins, valAddr }: {
                    sender: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    valAddr: string;
                }) => _550.MsgLockAndSuperfluidDelegate;
            };
        };
        encoded: {
            superfluidDelegate(value: _550.MsgSuperfluidDelegate): {
                type_url: string;
                value: Uint8Array;
            };
            superfluidUndelegate(value: _550.MsgSuperfluidUndelegate): {
                type_url: string;
                value: Uint8Array;
            };
            superfluidUnbondLock(value: _550.MsgSuperfluidUnbondLock): {
                type_url: string;
                value: Uint8Array;
            };
            lockAndSuperfluidDelegate(value: _550.MsgLockAndSuperfluidDelegate): {
                type_url: string;
                value: Uint8Array;
            };
        };
        fromJSON: {
            superfluidDelegate(value: any): {
                typeUrl: string;
                value: _550.MsgSuperfluidDelegate;
            };
            superfluidUndelegate(value: any): {
                typeUrl: string;
                value: _550.MsgSuperfluidUndelegate;
            };
            superfluidUnbondLock(value: any): {
                typeUrl: string;
                value: _550.MsgSuperfluidUnbondLock;
            };
            lockAndSuperfluidDelegate(value: any): {
                typeUrl: string;
                value: _550.MsgLockAndSuperfluidDelegate;
            };
        };
        toJSON: {
            superfluidDelegate(value: _550.MsgSuperfluidDelegate): {
                typeUrl: string;
                value: unknown;
            };
            superfluidUndelegate(value: _550.MsgSuperfluidUndelegate): {
                typeUrl: string;
                value: unknown;
            };
            superfluidUnbondLock(value: _550.MsgSuperfluidUnbondLock): {
                typeUrl: string;
                value: unknown;
            };
            lockAndSuperfluidDelegate(value: _550.MsgLockAndSuperfluidDelegate): {
                typeUrl: string;
                value: unknown;
            };
        };
        json: {
            superfluidDelegate(value: _550.MsgSuperfluidDelegate): {
                typeUrl: string;
                value: _550.MsgSuperfluidDelegate;
            };
            superfluidUndelegate(value: _550.MsgSuperfluidUndelegate): {
                typeUrl: string;
                value: _550.MsgSuperfluidUndelegate;
            };
            superfluidUnbondLock(value: _550.MsgSuperfluidUnbondLock): {
                typeUrl: string;
                value: _550.MsgSuperfluidUnbondLock;
            };
            lockAndSuperfluidDelegate(value: _550.MsgLockAndSuperfluidDelegate): {
                typeUrl: string;
                value: _550.MsgLockAndSuperfluidDelegate;
            };
        };
        messages: {
            superfluidDelegate(value: _550.MsgSuperfluidDelegate): {
                typeUrl: string;
                value: _550.MsgSuperfluidDelegate;
            };
            superfluidUndelegate(value: _550.MsgSuperfluidUndelegate): {
                typeUrl: string;
                value: _550.MsgSuperfluidUndelegate;
            };
            superfluidUnbondLock(value: _550.MsgSuperfluidUnbondLock): {
                typeUrl: string;
                value: _550.MsgSuperfluidUnbondLock;
            };
            lockAndSuperfluidDelegate(value: _550.MsgLockAndSuperfluidDelegate): {
                typeUrl: string;
                value: _550.MsgLockAndSuperfluidDelegate;
            };
        };
        superfluidAssetTypeFromJSON(object: any): _548.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _548.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _548.SuperfluidAssetType;
        SuperfluidAsset: {
            encode(message: _548.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.SuperfluidAsset;
            fromJSON(object: any): _548.SuperfluidAsset;
            toJSON(message: _548.SuperfluidAsset): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _548.SuperfluidAsset;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _548.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.SuperfluidIntermediaryAccount;
            fromJSON(object: any): _548.SuperfluidIntermediaryAccount;
            toJSON(message: _548.SuperfluidIntermediaryAccount): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _548.SuperfluidIntermediaryAccount;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _548.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.OsmoEquivalentMultiplierRecord;
            fromJSON(object: any): _548.OsmoEquivalentMultiplierRecord;
            toJSON(message: _548.OsmoEquivalentMultiplierRecord): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _548.OsmoEquivalentMultiplierRecord;
        };
        SuperfluidDelegationRecord: {
            encode(message: _548.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.SuperfluidDelegationRecord;
            fromJSON(object: any): _548.SuperfluidDelegationRecord;
            toJSON(message: _548.SuperfluidDelegationRecord): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _548.SuperfluidDelegationRecord;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _548.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.LockIdIntermediaryAccountConnection;
            fromJSON(object: any): _548.LockIdIntermediaryAccountConnection;
            toJSON(message: _548.LockIdIntermediaryAccountConnection): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _548.LockIdIntermediaryAccountConnection;
        };
        QueryParamsRequest: {
            encode(_: _546.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryParamsRequest;
            fromJSON(_: any): _546.QueryParamsRequest;
            toJSON(_: _546.QueryParamsRequest): unknown;
            fromPartial<I_13 extends unknown>(_: I_13): _546.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _546.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryParamsResponse;
            fromJSON(object: any): _546.QueryParamsResponse;
            toJSON(message: _546.QueryParamsResponse): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _546.QueryParamsResponse;
        };
        AssetTypeRequest: {
            encode(message: _546.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.AssetTypeRequest;
            fromJSON(object: any): _546.AssetTypeRequest;
            toJSON(message: _546.AssetTypeRequest): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _546.AssetTypeRequest;
        };
        AssetTypeResponse: {
            encode(message: _546.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.AssetTypeResponse;
            fromJSON(object: any): _546.AssetTypeResponse;
            toJSON(message: _546.AssetTypeResponse): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _546.AssetTypeResponse;
        };
        AllAssetsRequest: {
            encode(_: _546.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.AllAssetsRequest;
            fromJSON(_: any): _546.AllAssetsRequest;
            toJSON(_: _546.AllAssetsRequest): unknown;
            fromPartial<I_17 extends unknown>(_: I_17): _546.AllAssetsRequest;
        };
        AllAssetsResponse: {
            encode(message: _546.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.AllAssetsResponse;
            fromJSON(object: any): _546.AllAssetsResponse;
            toJSON(message: _546.AllAssetsResponse): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _546.AllAssetsResponse;
        };
        AssetMultiplierRequest: {
            encode(message: _546.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.AssetMultiplierRequest;
            fromJSON(object: any): _546.AssetMultiplierRequest;
            toJSON(message: _546.AssetMultiplierRequest): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _546.AssetMultiplierRequest;
        };
        AssetMultiplierResponse: {
            encode(message: _546.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.AssetMultiplierResponse;
            fromJSON(object: any): _546.AssetMultiplierResponse;
            toJSON(message: _546.AssetMultiplierResponse): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _546.AssetMultiplierResponse;
        };
        SuperfluidIntermediaryAccountInfo: {
            encode(message: _546.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.SuperfluidIntermediaryAccountInfo;
            fromJSON(object: any): _546.SuperfluidIntermediaryAccountInfo;
            toJSON(message: _546.SuperfluidIntermediaryAccountInfo): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _546.SuperfluidIntermediaryAccountInfo;
        };
        AllIntermediaryAccountsRequest: {
            encode(message: _546.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.AllIntermediaryAccountsRequest;
            fromJSON(object: any): _546.AllIntermediaryAccountsRequest;
            toJSON(message: _546.AllIntermediaryAccountsRequest): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _546.AllIntermediaryAccountsRequest;
        };
        AllIntermediaryAccountsResponse: {
            encode(message: _546.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.AllIntermediaryAccountsResponse;
            fromJSON(object: any): _546.AllIntermediaryAccountsResponse;
            toJSON(message: _546.AllIntermediaryAccountsResponse): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _546.AllIntermediaryAccountsResponse;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _546.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.ConnectedIntermediaryAccountRequest;
            fromJSON(object: any): _546.ConnectedIntermediaryAccountRequest;
            toJSON(message: _546.ConnectedIntermediaryAccountRequest): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _546.ConnectedIntermediaryAccountRequest;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _546.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.ConnectedIntermediaryAccountResponse;
            fromJSON(object: any): _546.ConnectedIntermediaryAccountResponse;
            toJSON(message: _546.ConnectedIntermediaryAccountResponse): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _546.ConnectedIntermediaryAccountResponse;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _546.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.TotalSuperfluidDelegationsRequest;
            fromJSON(_: any): _546.TotalSuperfluidDelegationsRequest;
            toJSON(_: _546.TotalSuperfluidDelegationsRequest): unknown;
            fromPartial<I_26 extends unknown>(_: I_26): _546.TotalSuperfluidDelegationsRequest;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _546.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.TotalSuperfluidDelegationsResponse;
            fromJSON(object: any): _546.TotalSuperfluidDelegationsResponse;
            toJSON(message: _546.TotalSuperfluidDelegationsResponse): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _546.TotalSuperfluidDelegationsResponse;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _546.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.SuperfluidDelegationAmountRequest;
            fromJSON(object: any): _546.SuperfluidDelegationAmountRequest;
            toJSON(message: _546.SuperfluidDelegationAmountRequest): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _546.SuperfluidDelegationAmountRequest;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _546.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.SuperfluidDelegationAmountResponse;
            fromJSON(object: any): _546.SuperfluidDelegationAmountResponse;
            toJSON(message: _546.SuperfluidDelegationAmountResponse): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _546.SuperfluidDelegationAmountResponse;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _546.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.SuperfluidDelegationsByDelegatorRequest;
            fromJSON(object: any): _546.SuperfluidDelegationsByDelegatorRequest;
            toJSON(message: _546.SuperfluidDelegationsByDelegatorRequest): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _546.SuperfluidDelegationsByDelegatorRequest;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _546.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.SuperfluidDelegationsByDelegatorResponse;
            fromJSON(object: any): _546.SuperfluidDelegationsByDelegatorResponse;
            toJSON(message: _546.SuperfluidDelegationsByDelegatorResponse): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _546.SuperfluidDelegationsByDelegatorResponse;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _546.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.SuperfluidUndelegationsByDelegatorRequest;
            fromJSON(object: any): _546.SuperfluidUndelegationsByDelegatorRequest;
            toJSON(message: _546.SuperfluidUndelegationsByDelegatorRequest): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _546.SuperfluidUndelegationsByDelegatorRequest;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _546.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.SuperfluidUndelegationsByDelegatorResponse;
            fromJSON(object: any): _546.SuperfluidUndelegationsByDelegatorResponse;
            toJSON(message: _546.SuperfluidUndelegationsByDelegatorResponse): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _546.SuperfluidUndelegationsByDelegatorResponse;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _546.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.SuperfluidDelegationsByValidatorDenomRequest;
            fromJSON(object: any): _546.SuperfluidDelegationsByValidatorDenomRequest;
            toJSON(message: _546.SuperfluidDelegationsByValidatorDenomRequest): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _546.SuperfluidDelegationsByValidatorDenomRequest;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _546.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.SuperfluidDelegationsByValidatorDenomResponse;
            fromJSON(object: any): _546.SuperfluidDelegationsByValidatorDenomResponse;
            toJSON(message: _546.SuperfluidDelegationsByValidatorDenomResponse): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _546.SuperfluidDelegationsByValidatorDenomResponse;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _546.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromJSON(object: any): _546.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toJSON(message: _546.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _546.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _546.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromJSON(object: any): _546.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toJSON(message: _546.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _546.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
        };
        Params: {
            encode(message: _544.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.Params;
            fromJSON(object: any): _544.Params;
            toJSON(message: _544.Params): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _544.Params;
        };
        GenesisState: {
            encode(message: _542.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _542.GenesisState;
            fromJSON(object: any): _542.GenesisState;
            toJSON(message: _542.GenesisState): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _542.GenesisState;
        };
    };
    namespace txfees {
        const v1beta1: {
            QueryFeeTokensRequest: {
                encode(_: _564.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _564.QueryFeeTokensRequest;
                fromJSON(_: any): _564.QueryFeeTokensRequest;
                toJSON(_: _564.QueryFeeTokensRequest): unknown;
                fromPartial<I extends unknown>(_: I): _564.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _564.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _564.QueryFeeTokensResponse;
                fromJSON(object: any): _564.QueryFeeTokensResponse;
                toJSON(message: _564.QueryFeeTokensResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _564.QueryFeeTokensResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _564.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _564.QueryDenomPoolIdRequest;
                fromJSON(object: any): _564.QueryDenomPoolIdRequest;
                toJSON(message: _564.QueryDenomPoolIdRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _564.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _564.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _564.QueryDenomPoolIdResponse;
                fromJSON(object: any): _564.QueryDenomPoolIdResponse;
                toJSON(message: _564.QueryDenomPoolIdResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _564.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _564.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _564.QueryBaseDenomRequest;
                fromJSON(_: any): _564.QueryBaseDenomRequest;
                toJSON(_: _564.QueryBaseDenomRequest): unknown;
                fromPartial<I_4 extends unknown>(_: I_4): _564.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _564.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _564.QueryBaseDenomResponse;
                fromJSON(object: any): _564.QueryBaseDenomResponse;
                toJSON(message: _564.QueryBaseDenomResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _564.QueryBaseDenomResponse;
            };
            UpdateFeeTokenProposal: {
                encode(message: _562.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.UpdateFeeTokenProposal;
                fromJSON(object: any): _562.UpdateFeeTokenProposal;
                toJSON(message: _562.UpdateFeeTokenProposal): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _562.UpdateFeeTokenProposal;
            };
            GenesisState: {
                encode(message: _560.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _560.GenesisState;
                fromJSON(object: any): _560.GenesisState;
                toJSON(message: _560.GenesisState): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _560.GenesisState;
            };
            FeeToken: {
                encode(message: _558.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _558.FeeToken;
                fromJSON(object: any): _558.FeeToken;
                toJSON(message: _558.FeeToken): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _558.FeeToken;
            };
        };
    }
}
export declare namespace secret {
    namespace compute {
        const v1beta1: {
            accessTypeFromJSON(object: any): _572.AccessType;
            accessTypeToJSON(object: _572.AccessType): string;
            AccessType: typeof _572.AccessType;
            AccessTypeParam: {
                encode(message: _572.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _572.AccessTypeParam;
                fromJSON(object: any): _572.AccessTypeParam;
                toJSON(message: _572.AccessTypeParam): unknown;
                fromPartial<I extends unknown>(object: I): _572.AccessTypeParam;
            };
            CodeInfo: {
                encode(message: _572.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _572.CodeInfo;
                fromJSON(object: any): _572.CodeInfo;
                toJSON(message: _572.CodeInfo): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _572.CodeInfo;
            };
            ContractCustomInfo: {
                encode(message: _572.ContractCustomInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _572.ContractCustomInfo;
                fromJSON(object: any): _572.ContractCustomInfo;
                toJSON(message: _572.ContractCustomInfo): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _572.ContractCustomInfo;
            };
            ContractInfo: {
                encode(message: _572.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _572.ContractInfo;
                fromJSON(object: any): _572.ContractInfo;
                toJSON(message: _572.ContractInfo): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _572.ContractInfo;
            };
            AbsoluteTxPosition: {
                encode(message: _572.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _572.AbsoluteTxPosition;
                fromJSON(object: any): _572.AbsoluteTxPosition;
                toJSON(message: _572.AbsoluteTxPosition): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _572.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _572.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _572.Model;
                fromJSON(object: any): _572.Model;
                toJSON(message: _572.Model): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _572.Model;
            };
            QueryContractInfoRequest: {
                encode(message: _570.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.QueryContractInfoRequest;
                fromJSON(object: any): _570.QueryContractInfoRequest;
                toJSON(message: _570.QueryContractInfoRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _570.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _570.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.QueryContractInfoResponse;
                fromJSON(object: any): _570.QueryContractInfoResponse;
                toJSON(message: _570.QueryContractInfoResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _570.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _570.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.QueryContractHistoryRequest;
                fromJSON(object: any): _570.QueryContractHistoryRequest;
                toJSON(message: _570.QueryContractHistoryRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _570.QueryContractHistoryRequest;
            };
            QueryContractsByCodeRequest: {
                encode(message: _570.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.QueryContractsByCodeRequest;
                fromJSON(object: any): _570.QueryContractsByCodeRequest;
                toJSON(message: _570.QueryContractsByCodeRequest): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _570.QueryContractsByCodeRequest;
            };
            ContractInfoWithAddress: {
                encode(message: _570.ContractInfoWithAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.ContractInfoWithAddress;
                fromJSON(object: any): _570.ContractInfoWithAddress;
                toJSON(message: _570.ContractInfoWithAddress): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _570.ContractInfoWithAddress;
            };
            QueryContractsByCodeResponse: {
                encode(message: _570.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.QueryContractsByCodeResponse;
                fromJSON(object: any): _570.QueryContractsByCodeResponse;
                toJSON(message: _570.QueryContractsByCodeResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _570.QueryContractsByCodeResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _570.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.QuerySmartContractStateRequest;
                fromJSON(object: any): _570.QuerySmartContractStateRequest;
                toJSON(message: _570.QuerySmartContractStateRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _570.QuerySmartContractStateRequest;
            };
            QueryContractAddressByLabelRequest: {
                encode(message: _570.QueryContractAddressByLabelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.QueryContractAddressByLabelRequest;
                fromJSON(object: any): _570.QueryContractAddressByLabelRequest;
                toJSON(message: _570.QueryContractAddressByLabelRequest): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _570.QueryContractAddressByLabelRequest;
            };
            QueryContractKeyRequest: {
                encode(message: _570.QueryContractKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.QueryContractKeyRequest;
                fromJSON(object: any): _570.QueryContractKeyRequest;
                toJSON(message: _570.QueryContractKeyRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _570.QueryContractKeyRequest;
            };
            QueryContractHashRequest: {
                encode(message: _570.QueryContractHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.QueryContractHashRequest;
                fromJSON(object: any): _570.QueryContractHashRequest;
                toJSON(message: _570.QueryContractHashRequest): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _570.QueryContractHashRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _570.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.QuerySmartContractStateResponse;
                fromJSON(object: any): _570.QuerySmartContractStateResponse;
                toJSON(message: _570.QuerySmartContractStateResponse): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _570.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _570.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.QueryCodeRequest;
                fromJSON(object: any): _570.QueryCodeRequest;
                toJSON(message: _570.QueryCodeRequest): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _570.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _570.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.CodeInfoResponse;
                fromJSON(object: any): _570.CodeInfoResponse;
                toJSON(message: _570.CodeInfoResponse): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _570.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _570.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.QueryCodeResponse;
                fromJSON(object: any): _570.QueryCodeResponse;
                toJSON(message: _570.QueryCodeResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _570.QueryCodeResponse;
            };
            QueryCodesResponse: {
                encode(message: _570.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.QueryCodesResponse;
                fromJSON(object: any): _570.QueryCodesResponse;
                toJSON(message: _570.QueryCodesResponse): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _570.QueryCodesResponse;
            };
            QueryContractAddressByLabelResponse: {
                encode(message: _570.QueryContractAddressByLabelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.QueryContractAddressByLabelResponse;
                fromJSON(object: any): _570.QueryContractAddressByLabelResponse;
                toJSON(message: _570.QueryContractAddressByLabelResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _570.QueryContractAddressByLabelResponse;
            };
            QueryContractKeyResponse: {
                encode(message: _570.QueryContractKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.QueryContractKeyResponse;
                fromJSON(object: any): _570.QueryContractKeyResponse;
                toJSON(message: _570.QueryContractKeyResponse): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _570.QueryContractKeyResponse;
            };
            QueryContractHashResponse: {
                encode(message: _570.QueryContractHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.QueryContractHashResponse;
                fromJSON(object: any): _570.QueryContractHashResponse;
                toJSON(message: _570.QueryContractHashResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _570.QueryContractHashResponse;
            };
            DecryptedAnswer: {
                encode(message: _570.DecryptedAnswer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.DecryptedAnswer;
                fromJSON(object: any): _570.DecryptedAnswer;
                toJSON(message: _570.DecryptedAnswer): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _570.DecryptedAnswer;
            };
            MsgStoreCode: {
                encode(message: _568.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _568.MsgStoreCode;
                fromJSON(object: any): _568.MsgStoreCode;
                toJSON(message: _568.MsgStoreCode): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _568.MsgStoreCode;
            };
            MsgInstantiateContract: {
                encode(message: _568.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _568.MsgInstantiateContract;
                fromJSON(object: any): _568.MsgInstantiateContract;
                toJSON(message: _568.MsgInstantiateContract): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _568.MsgInstantiateContract;
            };
            MsgExecuteContract: {
                encode(message: _568.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _568.MsgExecuteContract;
                fromJSON(object: any): _568.MsgExecuteContract;
                toJSON(message: _568.MsgExecuteContract): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _568.MsgExecuteContract;
            };
            GenesisState: {
                encode(message: _566.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.GenesisState;
                fromJSON(object: any): _566.GenesisState;
                toJSON(message: _566.GenesisState): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _566.GenesisState;
            };
            Code: {
                encode(message: _566.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.Code;
                fromJSON(object: any): _566.Code;
                toJSON(message: _566.Code): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _566.Code;
            };
            Contract: {
                encode(message: _566.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.Contract;
                fromJSON(object: any): _566.Contract;
                toJSON(message: _566.Contract): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _566.Contract;
            };
            Sequence: {
                encode(message: _566.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.Sequence;
                fromJSON(object: any): _566.Sequence;
                toJSON(message: _566.Sequence): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _566.Sequence;
            };
        };
    }
    namespace registration {
        const v1beta1: {
            SeedConfig: {
                encode(message: _580.SeedConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _580.SeedConfig;
                fromJSON(object: any): _580.SeedConfig;
                toJSON(message: _580.SeedConfig): unknown;
                fromPartial<I extends unknown>(object: I): _580.SeedConfig;
            };
            RegistrationNodeInfo: {
                encode(message: _580.RegistrationNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _580.RegistrationNodeInfo;
                fromJSON(object: any): _580.RegistrationNodeInfo;
                toJSON(message: _580.RegistrationNodeInfo): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _580.RegistrationNodeInfo;
            };
            QueryEncryptedSeedRequest: {
                encode(message: _578.QueryEncryptedSeedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.QueryEncryptedSeedRequest;
                fromJSON(object: any): _578.QueryEncryptedSeedRequest;
                toJSON(message: _578.QueryEncryptedSeedRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _578.QueryEncryptedSeedRequest;
            };
            QueryEncryptedSeedResponse: {
                encode(message: _578.QueryEncryptedSeedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.QueryEncryptedSeedResponse;
                fromJSON(object: any): _578.QueryEncryptedSeedResponse;
                toJSON(message: _578.QueryEncryptedSeedResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _578.QueryEncryptedSeedResponse;
            };
            RaAuthenticate: {
                encode(message: _576.RaAuthenticate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.RaAuthenticate;
                fromJSON(object: any): _576.RaAuthenticate;
                toJSON(message: _576.RaAuthenticate): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _576.RaAuthenticate;
            };
            MasterCertificate: {
                encode(message: _576.MasterCertificate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.MasterCertificate;
                fromJSON(object: any): _576.MasterCertificate;
                toJSON(message: _576.MasterCertificate): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _576.MasterCertificate;
            };
            Key: {
                encode(message: _576.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.Key;
                fromJSON(object: any): _576.Key;
                toJSON(message: _576.Key): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _576.Key;
            };
            GenesisState: {
                encode(message: _574.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.GenesisState;
                fromJSON(object: any): _574.GenesisState;
                toJSON(message: _574.GenesisState): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _574.GenesisState;
            };
        };
        namespace remote_attestation {
            const v1beta1: {
                QuoteReport: {
                    encode(message: _582.QuoteReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.QuoteReport;
                    fromJSON(object: any): _582.QuoteReport;
                    toJSON(message: _582.QuoteReport): unknown;
                    fromPartial<I extends unknown>(object: I): _582.QuoteReport;
                };
                QuoteReportBody: {
                    encode(message: _582.QuoteReportBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.QuoteReportBody;
                    fromJSON(object: any): _582.QuoteReportBody;
                    toJSON(message: _582.QuoteReportBody): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _582.QuoteReportBody;
                };
                QuoteReportData: {
                    encode(message: _582.QuoteReportData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.QuoteReportData;
                    fromJSON(object: any): _582.QuoteReportData;
                    toJSON(message: _582.QuoteReportData): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _582.QuoteReportData;
                };
                EndorsedAttestationReport: {
                    encode(message: _582.EndorsedAttestationReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.EndorsedAttestationReport;
                    fromJSON(object: any): _582.EndorsedAttestationReport;
                    toJSON(message: _582.EndorsedAttestationReport): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _582.EndorsedAttestationReport;
                };
                SGXEC256Signature: {
                    encode(message: _582.SGXEC256Signature, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.SGXEC256Signature;
                    fromJSON(object: any): _582.SGXEC256Signature;
                    toJSON(message: _582.SGXEC256Signature): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _582.SGXEC256Signature;
                };
                PlatformInfoBlob: {
                    encode(message: _582.PlatformInfoBlob, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.PlatformInfoBlob;
                    fromJSON(object: any): _582.PlatformInfoBlob;
                    toJSON(message: _582.PlatformInfoBlob): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _582.PlatformInfoBlob;
                };
            };
        }
    }
}
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _584.CheckTxType;
        checkTxTypeToJSON(object: _584.CheckTxType): string;
        evidenceTypeFromJSON(object: any): _584.EvidenceType;
        evidenceTypeToJSON(object: _584.EvidenceType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _584.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _584.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _584.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _584.ResponseApplySnapshotChunk_Result): string;
        CheckTxType: typeof _584.CheckTxType;
        EvidenceType: typeof _584.EvidenceType;
        Request: {
            encode(message: _584.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.Request;
            fromJSON(object: any): _584.Request;
            toJSON(message: _584.Request): unknown;
            fromPartial<I extends unknown>(object: I): _584.Request;
        };
        RequestEcho: {
            encode(message: _584.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.RequestEcho;
            fromJSON(object: any): _584.RequestEcho;
            toJSON(message: _584.RequestEcho): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _584.RequestEcho;
        };
        RequestFlush: {
            encode(_: _584.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.RequestFlush;
            fromJSON(_: any): _584.RequestFlush;
            toJSON(_: _584.RequestFlush): unknown;
            fromPartial<I_2 extends unknown>(_: I_2): _584.RequestFlush;
        };
        RequestInfo: {
            encode(message: _584.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.RequestInfo;
            fromJSON(object: any): _584.RequestInfo;
            toJSON(message: _584.RequestInfo): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _584.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _584.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.RequestSetOption;
            fromJSON(object: any): _584.RequestSetOption;
            toJSON(message: _584.RequestSetOption): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _584.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _584.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.RequestInitChain;
            fromJSON(object: any): _584.RequestInitChain;
            toJSON(message: _584.RequestInitChain): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _584.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _584.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.RequestQuery;
            fromJSON(object: any): _584.RequestQuery;
            toJSON(message: _584.RequestQuery): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _584.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _584.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.RequestBeginBlock;
            fromJSON(object: any): _584.RequestBeginBlock;
            toJSON(message: _584.RequestBeginBlock): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _584.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _584.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.RequestCheckTx;
            fromJSON(object: any): _584.RequestCheckTx;
            toJSON(message: _584.RequestCheckTx): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _584.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _584.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.RequestDeliverTx;
            fromJSON(object: any): _584.RequestDeliverTx;
            toJSON(message: _584.RequestDeliverTx): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _584.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _584.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.RequestEndBlock;
            fromJSON(object: any): _584.RequestEndBlock;
            toJSON(message: _584.RequestEndBlock): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _584.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _584.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.RequestCommit;
            fromJSON(_: any): _584.RequestCommit;
            toJSON(_: _584.RequestCommit): unknown;
            fromPartial<I_11 extends unknown>(_: I_11): _584.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _584.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.RequestListSnapshots;
            fromJSON(_: any): _584.RequestListSnapshots;
            toJSON(_: _584.RequestListSnapshots): unknown;
            fromPartial<I_12 extends unknown>(_: I_12): _584.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _584.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.RequestOfferSnapshot;
            fromJSON(object: any): _584.RequestOfferSnapshot;
            toJSON(message: _584.RequestOfferSnapshot): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _584.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _584.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.RequestLoadSnapshotChunk;
            fromJSON(object: any): _584.RequestLoadSnapshotChunk;
            toJSON(message: _584.RequestLoadSnapshotChunk): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _584.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _584.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.RequestApplySnapshotChunk;
            fromJSON(object: any): _584.RequestApplySnapshotChunk;
            toJSON(message: _584.RequestApplySnapshotChunk): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _584.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _584.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.Response;
            fromJSON(object: any): _584.Response;
            toJSON(message: _584.Response): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _584.Response;
        };
        ResponseException: {
            encode(message: _584.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.ResponseException;
            fromJSON(object: any): _584.ResponseException;
            toJSON(message: _584.ResponseException): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _584.ResponseException;
        };
        ResponseEcho: {
            encode(message: _584.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.ResponseEcho;
            fromJSON(object: any): _584.ResponseEcho;
            toJSON(message: _584.ResponseEcho): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _584.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _584.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.ResponseFlush;
            fromJSON(_: any): _584.ResponseFlush;
            toJSON(_: _584.ResponseFlush): unknown;
            fromPartial<I_19 extends unknown>(_: I_19): _584.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _584.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.ResponseInfo;
            fromJSON(object: any): _584.ResponseInfo;
            toJSON(message: _584.ResponseInfo): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _584.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _584.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.ResponseSetOption;
            fromJSON(object: any): _584.ResponseSetOption;
            toJSON(message: _584.ResponseSetOption): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _584.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _584.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.ResponseInitChain;
            fromJSON(object: any): _584.ResponseInitChain;
            toJSON(message: _584.ResponseInitChain): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _584.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _584.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.ResponseQuery;
            fromJSON(object: any): _584.ResponseQuery;
            toJSON(message: _584.ResponseQuery): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _584.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _584.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.ResponseBeginBlock;
            fromJSON(object: any): _584.ResponseBeginBlock;
            toJSON(message: _584.ResponseBeginBlock): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _584.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _584.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.ResponseCheckTx;
            fromJSON(object: any): _584.ResponseCheckTx;
            toJSON(message: _584.ResponseCheckTx): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _584.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _584.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.ResponseDeliverTx;
            fromJSON(object: any): _584.ResponseDeliverTx;
            toJSON(message: _584.ResponseDeliverTx): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _584.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _584.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.ResponseEndBlock;
            fromJSON(object: any): _584.ResponseEndBlock;
            toJSON(message: _584.ResponseEndBlock): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _584.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _584.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.ResponseCommit;
            fromJSON(object: any): _584.ResponseCommit;
            toJSON(message: _584.ResponseCommit): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _584.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _584.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.ResponseListSnapshots;
            fromJSON(object: any): _584.ResponseListSnapshots;
            toJSON(message: _584.ResponseListSnapshots): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _584.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _584.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.ResponseOfferSnapshot;
            fromJSON(object: any): _584.ResponseOfferSnapshot;
            toJSON(message: _584.ResponseOfferSnapshot): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _584.ResponseOfferSnapshot;
        };
        ResponseOfferSnapshot_Result: typeof _584.ResponseOfferSnapshot_Result;
        ResponseLoadSnapshotChunk: {
            encode(message: _584.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _584.ResponseLoadSnapshotChunk;
            toJSON(message: _584.ResponseLoadSnapshotChunk): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _584.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _584.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.ResponseApplySnapshotChunk;
            fromJSON(object: any): _584.ResponseApplySnapshotChunk;
            toJSON(message: _584.ResponseApplySnapshotChunk): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _584.ResponseApplySnapshotChunk;
        };
        ResponseApplySnapshotChunk_Result: typeof _584.ResponseApplySnapshotChunk_Result;
        ConsensusParams: {
            encode(message: _584.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.ConsensusParams;
            fromJSON(object: any): _584.ConsensusParams;
            toJSON(message: _584.ConsensusParams): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _584.ConsensusParams;
        };
        BlockParams: {
            encode(message: _584.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.BlockParams;
            fromJSON(object: any): _584.BlockParams;
            toJSON(message: _584.BlockParams): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _584.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _584.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.LastCommitInfo;
            fromJSON(object: any): _584.LastCommitInfo;
            toJSON(message: _584.LastCommitInfo): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _584.LastCommitInfo;
        };
        Event: {
            encode(message: _584.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.Event;
            fromJSON(object: any): _584.Event;
            toJSON(message: _584.Event): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _584.Event;
        };
        EventAttribute: {
            encode(message: _584.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.EventAttribute;
            fromJSON(object: any): _584.EventAttribute;
            toJSON(message: _584.EventAttribute): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _584.EventAttribute;
        };
        TxResult: {
            encode(message: _584.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.TxResult;
            fromJSON(object: any): _584.TxResult;
            toJSON(message: _584.TxResult): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _584.TxResult;
        };
        Validator: {
            encode(message: _584.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.Validator;
            fromJSON(object: any): _584.Validator;
            toJSON(message: _584.Validator): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _584.Validator;
        };
        ValidatorUpdate: {
            encode(message: _584.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.ValidatorUpdate;
            fromJSON(object: any): _584.ValidatorUpdate;
            toJSON(message: _584.ValidatorUpdate): unknown;
            fromPartial<I_40 extends unknown>(object: I_40): _584.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _584.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.VoteInfo;
            fromJSON(object: any): _584.VoteInfo;
            toJSON(message: _584.VoteInfo): unknown;
            fromPartial<I_41 extends unknown>(object: I_41): _584.VoteInfo;
        };
        Evidence: {
            encode(message: _584.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.Evidence;
            fromJSON(object: any): _584.Evidence;
            toJSON(message: _584.Evidence): unknown;
            fromPartial<I_42 extends unknown>(object: I_42): _584.Evidence;
        };
        Snapshot: {
            encode(message: _584.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.Snapshot;
            fromJSON(object: any): _584.Snapshot;
            toJSON(message: _584.Snapshot): unknown;
            fromPartial<I_43 extends unknown>(object: I_43): _584.Snapshot;
        };
        ABCIApplicationClientImpl: typeof _584.ABCIApplicationClientImpl;
    };
    const crypto: {
        Proof: {
            encode(message: _588.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.Proof;
            fromJSON(object: any): _588.Proof;
            toJSON(message: _588.Proof): unknown;
            fromPartial<I extends unknown>(object: I): _588.Proof;
        };
        ValueOp: {
            encode(message: _588.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.ValueOp;
            fromJSON(object: any): _588.ValueOp;
            toJSON(message: _588.ValueOp): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _588.ValueOp;
        };
        DominoOp: {
            encode(message: _588.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.DominoOp;
            fromJSON(object: any): _588.DominoOp;
            toJSON(message: _588.DominoOp): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _588.DominoOp;
        };
        ProofOp: {
            encode(message: _588.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.ProofOp;
            fromJSON(object: any): _588.ProofOp;
            toJSON(message: _588.ProofOp): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _588.ProofOp;
        };
        ProofOps: {
            encode(message: _588.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.ProofOps;
            fromJSON(object: any): _588.ProofOps;
            toJSON(message: _588.ProofOps): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _588.ProofOps;
        };
        PublicKey: {
            encode(message: _586.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.PublicKey;
            fromJSON(object: any): _586.PublicKey;
            toJSON(message: _586.PublicKey): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _586.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _590.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.BitArray;
                fromJSON(object: any): _590.BitArray;
                toJSON(message: _590.BitArray): unknown;
                fromPartial<I extends unknown>(object: I): _590.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _592.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _592.ProtocolVersion;
            fromJSON(object: any): _592.ProtocolVersion;
            toJSON(message: _592.ProtocolVersion): unknown;
            fromPartial<I extends unknown>(object: I): _592.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _592.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _592.NodeInfo;
            fromJSON(object: any): _592.NodeInfo;
            toJSON(message: _592.NodeInfo): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _592.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _592.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _592.NodeInfoOther;
            fromJSON(object: any): _592.NodeInfoOther;
            toJSON(message: _592.NodeInfoOther): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _592.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _592.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _592.PeerInfo;
            fromJSON(object: any): _592.PeerInfo;
            toJSON(message: _592.PeerInfo): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _592.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _592.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _592.PeerAddressInfo;
            fromJSON(object: any): _592.PeerAddressInfo;
            toJSON(message: _592.PeerAddressInfo): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _592.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _602.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.ValidatorSet;
            fromJSON(object: any): _602.ValidatorSet;
            toJSON(message: _602.ValidatorSet): unknown;
            fromPartial<I extends unknown>(object: I): _602.ValidatorSet;
        };
        Validator: {
            encode(message: _602.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.Validator;
            fromJSON(object: any): _602.Validator;
            toJSON(message: _602.Validator): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _602.Validator;
        };
        SimpleValidator: {
            encode(message: _602.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.SimpleValidator;
            fromJSON(object: any): _602.SimpleValidator;
            toJSON(message: _602.SimpleValidator): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _602.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _600.BlockIDFlag;
        blockIDFlagToJSON(object: _600.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _600.SignedMsgType;
        signedMsgTypeToJSON(object: _600.SignedMsgType): string;
        BlockIDFlag: typeof _600.BlockIDFlag;
        SignedMsgType: typeof _600.SignedMsgType;
        PartSetHeader: {
            encode(message: _600.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.PartSetHeader;
            fromJSON(object: any): _600.PartSetHeader;
            toJSON(message: _600.PartSetHeader): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _600.PartSetHeader;
        };
        Part: {
            encode(message: _600.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.Part;
            fromJSON(object: any): _600.Part;
            toJSON(message: _600.Part): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _600.Part;
        };
        BlockID: {
            encode(message: _600.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.BlockID;
            fromJSON(object: any): _600.BlockID;
            toJSON(message: _600.BlockID): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _600.BlockID;
        };
        Header: {
            encode(message: _600.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.Header;
            fromJSON(object: any): _600.Header;
            toJSON(message: _600.Header): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _600.Header;
        };
        Data: {
            encode(message: _600.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.Data;
            fromJSON(object: any): _600.Data;
            toJSON(message: _600.Data): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _600.Data;
        };
        Vote: {
            encode(message: _600.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.Vote;
            fromJSON(object: any): _600.Vote;
            toJSON(message: _600.Vote): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _600.Vote;
        };
        Commit: {
            encode(message: _600.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.Commit;
            fromJSON(object: any): _600.Commit;
            toJSON(message: _600.Commit): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _600.Commit;
        };
        CommitSig: {
            encode(message: _600.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.CommitSig;
            fromJSON(object: any): _600.CommitSig;
            toJSON(message: _600.CommitSig): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _600.CommitSig;
        };
        Proposal: {
            encode(message: _600.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.Proposal;
            fromJSON(object: any): _600.Proposal;
            toJSON(message: _600.Proposal): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _600.Proposal;
        };
        SignedHeader: {
            encode(message: _600.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.SignedHeader;
            fromJSON(object: any): _600.SignedHeader;
            toJSON(message: _600.SignedHeader): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _600.SignedHeader;
        };
        LightBlock: {
            encode(message: _600.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.LightBlock;
            fromJSON(object: any): _600.LightBlock;
            toJSON(message: _600.LightBlock): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _600.LightBlock;
        };
        BlockMeta: {
            encode(message: _600.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.BlockMeta;
            fromJSON(object: any): _600.BlockMeta;
            toJSON(message: _600.BlockMeta): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _600.BlockMeta;
        };
        TxProof: {
            encode(message: _600.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.TxProof;
            fromJSON(object: any): _600.TxProof;
            toJSON(message: _600.TxProof): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _600.TxProof;
        };
        ConsensusParams: {
            encode(message: _598.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.ConsensusParams;
            fromJSON(object: any): _598.ConsensusParams;
            toJSON(message: _598.ConsensusParams): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _598.ConsensusParams;
        };
        BlockParams: {
            encode(message: _598.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.BlockParams;
            fromJSON(object: any): _598.BlockParams;
            toJSON(message: _598.BlockParams): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _598.BlockParams;
        };
        EvidenceParams: {
            encode(message: _598.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.EvidenceParams;
            fromJSON(object: any): _598.EvidenceParams;
            toJSON(message: _598.EvidenceParams): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _598.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _598.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.ValidatorParams;
            fromJSON(object: any): _598.ValidatorParams;
            toJSON(message: _598.ValidatorParams): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _598.ValidatorParams;
        };
        VersionParams: {
            encode(message: _598.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.VersionParams;
            fromJSON(object: any): _598.VersionParams;
            toJSON(message: _598.VersionParams): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _598.VersionParams;
        };
        HashedParams: {
            encode(message: _598.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.HashedParams;
            fromJSON(object: any): _598.HashedParams;
            toJSON(message: _598.HashedParams): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _598.HashedParams;
        };
        Evidence: {
            encode(message: _596.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _596.Evidence;
            fromJSON(object: any): _596.Evidence;
            toJSON(message: _596.Evidence): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _596.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _596.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _596.DuplicateVoteEvidence;
            fromJSON(object: any): _596.DuplicateVoteEvidence;
            toJSON(message: _596.DuplicateVoteEvidence): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _596.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _596.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _596.LightClientAttackEvidence;
            fromJSON(object: any): _596.LightClientAttackEvidence;
            toJSON(message: _596.LightClientAttackEvidence): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _596.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _596.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _596.EvidenceList;
            fromJSON(object: any): _596.EvidenceList;
            toJSON(message: _596.EvidenceList): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _596.EvidenceList;
        };
        Block: {
            encode(message: _594.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _594.Block;
            fromJSON(object: any): _594.Block;
            toJSON(message: _594.Block): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _594.Block;
        };
    };
    const version: {
        App: {
            encode(message: _604.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _604.App;
            fromJSON(object: any): _604.App;
            toJSON(message: _604.App): unknown;
            fromPartial<I extends unknown>(object: I): _604.App;
        };
        Consensus: {
            encode(message: _604.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _604.Consensus;
            fromJSON(object: any): _604.Consensus;
            toJSON(message: _604.Consensus): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _604.Consensus;
        };
    };
}
