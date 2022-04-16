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
import * as _29 from "./cosmos/bank/v1beta1/authz";
import * as _31 from "./cosmos/bank/v1beta1/bank";
import * as _33 from "./cosmos/bank/v1beta1/genesis";
import * as _35 from "./cosmos/bank/v1beta1/query";
import * as _37 from "./cosmos/bank/v1beta1/tx";
import * as _42 from "./cosmos/base/abci/v1beta1/abci";
import * as _44 from "./cosmos/base/kv/v1beta1/kv";
import * as _46 from "./cosmos/base/query/v1beta1/pagination";
import * as _48 from "./cosmos/base/reflection/v1beta1/reflection";
import * as _50 from "./cosmos/base/reflection/v2alpha1/reflection";
import * as _52 from "./cosmos/base/snapshots/v1beta1/snapshot";
import * as _54 from "./cosmos/base/store/v1beta1/commit_info";
import * as _56 from "./cosmos/base/store/v1beta1/listening";
import * as _58 from "./cosmos/base/tendermint/v1beta1/query";
import * as _60 from "./cosmos/base/v1beta1/coin";
import * as _62 from "./cosmos/capability/v1beta1/capability";
import * as _64 from "./cosmos/capability/v1beta1/genesis";
import * as _66 from "./cosmos/crisis/v1beta1/genesis";
import * as _68 from "./cosmos/crisis/v1beta1/tx";
import * as _73 from "./cosmos/crypto/ed25519/keys";
import * as _75 from "./cosmos/crypto/hd/v1/hd";
import * as _77 from "./cosmos/crypto/keyring/v1/record";
import * as _79 from "./cosmos/crypto/multisig/keys";
import * as _81 from "./cosmos/crypto/secp256k1/keys";
import * as _83 from "./cosmos/crypto/secp256r1/keys";
import * as _85 from "./cosmos/distribution/v1beta1/distribution";
import * as _87 from "./cosmos/distribution/v1beta1/genesis";
import * as _89 from "./cosmos/distribution/v1beta1/query";
import * as _91 from "./cosmos/distribution/v1beta1/tx";
import * as _96 from "./cosmos/evidence/v1beta1/evidence";
import * as _98 from "./cosmos/evidence/v1beta1/genesis";
import * as _100 from "./cosmos/evidence/v1beta1/query";
import * as _102 from "./cosmos/evidence/v1beta1/tx";
import * as _107 from "./cosmos/feegrant/v1beta1/feegrant";
import * as _109 from "./cosmos/feegrant/v1beta1/genesis";
import * as _111 from "./cosmos/feegrant/v1beta1/query";
import * as _113 from "./cosmos/feegrant/v1beta1/tx";
import * as _118 from "./cosmos/genutil/v1beta1/genesis";
import * as _120 from "./cosmos/gov/v1/genesis";
import * as _122 from "./cosmos/gov/v1/gov";
import * as _124 from "./cosmos/gov/v1/query";
import * as _126 from "./cosmos/gov/v1/tx";
import * as _131 from "./cosmos/gov/v1beta1/genesis";
import * as _133 from "./cosmos/gov/v1beta1/gov";
import * as _135 from "./cosmos/gov/v1beta1/query";
import * as _137 from "./cosmos/gov/v1beta1/tx";
import * as _142 from "./cosmos/group/v1/events";
import * as _144 from "./cosmos/group/v1/genesis";
import * as _146 from "./cosmos/group/v1/query";
import * as _148 from "./cosmos/group/v1/tx";
import * as _153 from "./cosmos/group/v1/types";
import * as _155 from "./cosmos/mint/v1beta1/genesis";
import * as _157 from "./cosmos/mint/v1beta1/mint";
import * as _159 from "./cosmos/mint/v1beta1/query";
import * as _163 from "./cosmos/nft/v1beta1/event";
import * as _165 from "./cosmos/nft/v1beta1/genesis";
import * as _167 from "./cosmos/nft/v1beta1/nft";
import * as _169 from "./cosmos/nft/v1beta1/query";
import * as _171 from "./cosmos/nft/v1beta1/tx";
import * as _176 from "./cosmos/orm/v1/orm";
import * as _178 from "./cosmos/orm/v1alpha1/schema";
import * as _180 from "./cosmos/params/v1beta1/params";
import * as _182 from "./cosmos/params/v1beta1/query";
import * as _184 from "./cosmos/slashing/v1beta1/genesis";
import * as _186 from "./cosmos/slashing/v1beta1/query";
import * as _188 from "./cosmos/slashing/v1beta1/slashing";
import * as _190 from "./cosmos/slashing/v1beta1/tx";
import * as _195 from "./cosmos/staking/v1beta1/authz";
import * as _197 from "./cosmos/staking/v1beta1/genesis";
import * as _199 from "./cosmos/staking/v1beta1/query";
import * as _201 from "./cosmos/staking/v1beta1/staking";
import * as _203 from "./cosmos/staking/v1beta1/tx";
import * as _208 from "./cosmos/tx/signing/v1beta1/signing";
import * as _210 from "./cosmos/tx/v1beta1/service";
import * as _212 from "./cosmos/tx/v1beta1/tx";
import * as _214 from "./cosmos/upgrade/v1beta1/query";
import * as _216 from "./cosmos/upgrade/v1beta1/tx";
import * as _221 from "./cosmos/upgrade/v1beta1/upgrade";
import * as _223 from "./cosmos/vesting/v1beta1/tx";
import * as _228 from "./cosmos/vesting/v1beta1/vesting";
import * as _230 from "./cosmwasm/wasm/v1/genesis";
import * as _232 from "./cosmwasm/wasm/v1/ibc";
import * as _234 from "./cosmwasm/wasm/v1/proposal";
import * as _236 from "./cosmwasm/wasm/v1/query";
import * as _238 from "./cosmwasm/wasm/v1/tx";
import * as _243 from "./cosmwasm/wasm/v1/types";
import * as _249 from "./google/api/auth";
import * as _251 from "./google/api/backend";
import * as _253 from "./google/api/billing";
import * as _257 from "./google/api/config_change";
import * as _259 from "./google/api/consumer";
import * as _261 from "./google/api/context";
import * as _263 from "./google/api/control";
import * as _265 from "./google/api/distribution";
import * as _267 from "./google/api/documentation";
import * as _269 from "./google/api/endpoint";
import * as _271 from "./google/api/error_reason";
import * as _273 from "./google/api/field_behavior";
import * as _275 from "./google/api/http";
import * as _277 from "./google/api/httpbody";
import * as _279 from "./google/api/label";
import * as _281 from "./google/api/launch_stage";
import * as _283 from "./google/api/log";
import * as _285 from "./google/api/logging";
import * as _287 from "./google/api/metric";
import * as _289 from "./google/api/monitored_resource";
import * as _291 from "./google/api/monitoring";
import * as _293 from "./google/api/quota";
import * as _295 from "./google/api/resource";
import * as _297 from "./google/api/routing";
import * as _299 from "./google/api/service";
import * as _301 from "./google/api/source_info";
import * as _303 from "./google/api/system_parameter";
import * as _305 from "./google/api/usage";
import * as _307 from "./google/api/visibility";
import * as _309 from "./google/logging/type/http_request";
import * as _311 from "./google/logging/type/log_severity";
import * as _313 from "./google/logging/v2/log_entry";
import * as _315 from "./google/logging/v2/logging_config";
import * as _317 from "./google/logging/v2/logging_metrics";
import * as _319 from "./google/logging/v2/logging";
import * as _321 from "./google/longrunning/operations";
import * as _323 from "./google/protobuf/any";
import * as _325 from "./google/protobuf/api";
import * as _327 from "./google/protobuf/descriptor";
import * as _329 from "./google/protobuf/duration";
import * as _331 from "./google/protobuf/empty";
import * as _333 from "./google/protobuf/field_mask";
import * as _335 from "./google/protobuf/source_context";
import * as _337 from "./google/protobuf/struct";
import * as _339 from "./google/protobuf/timestamp";
import * as _341 from "./google/protobuf/type";
import * as _343 from "./google/protobuf/wrappers";
import * as _345 from "./google/rpc/code";
import * as _347 from "./google/rpc/error_details";
import * as _349 from "./google/rpc/status";
import * as _351 from "./ibc/applications/transfer/v1/genesis";
import * as _353 from "./ibc/applications/transfer/v1/query";
import * as _355 from "./ibc/applications/transfer/v1/transfer";
import * as _357 from "./ibc/applications/transfer/v1/tx";
import * as _362 from "./ibc/applications/transfer/v2/packet";
import * as _364 from "./ibc/core/channel/v1/channel";
import * as _366 from "./ibc/core/channel/v1/genesis";
import * as _368 from "./ibc/core/channel/v1/query";
import * as _370 from "./ibc/core/channel/v1/tx";
import * as _375 from "./ibc/core/client/v1/client";
import * as _377 from "./ibc/core/client/v1/genesis";
import * as _379 from "./ibc/core/client/v1/query";
import * as _381 from "./ibc/core/client/v1/tx";
import * as _386 from "./ibc/core/commitment/v1/commitment";
import * as _388 from "./ibc/core/connection/v1/connection";
import * as _390 from "./ibc/core/connection/v1/genesis";
import * as _392 from "./ibc/core/connection/v1/query";
import * as _394 from "./ibc/core/connection/v1/tx";
import * as _399 from "./ibc/core/port/v1/query";
import * as _401 from "./ibc/core/types/v1/genesis";
import * as _403 from "./ibc/lightclients/localhost/v1/localhost";
import * as _405 from "./ibc/lightclients/solomachine/v1/solomachine";
import * as _407 from "./ibc/lightclients/solomachine/v2/solomachine";
import * as _409 from "./ibc/lightclients/tendermint/v1/tendermint";
import * as _411 from "./osmosis/claim/v1beta1/claim";
import * as _413 from "./osmosis/claim/v1beta1/genesis";
import * as _415 from "./osmosis/claim/v1beta1/params";
import * as _417 from "./osmosis/claim/v1beta1/query";
import * as _419 from "./osmosis/epochs/genesis";
import * as _421 from "./osmosis/epochs/query";
import * as _423 from "./osmosis/gamm/pool-models/balancer/balancerPool";
import * as _425 from "./osmosis/gamm/pool-models/balancer/tx";
import * as _427 from "./osmosis/gamm/v1beta1/genesis";
import * as _429 from "./osmosis/gamm/v1beta1/query";
import * as _431 from "./osmosis/gamm/v1beta1/tx";
import * as _436 from "./osmosis/incentives/gauge";
import * as _438 from "./osmosis/incentives/genesis";
import * as _440 from "./osmosis/incentives/params";
import * as _442 from "./osmosis/incentives/query";
import * as _444 from "./osmosis/incentives/tx";
import * as _449 from "./osmosis/lockup/genesis";
import * as _451 from "./osmosis/lockup/lock";
import * as _453 from "./osmosis/lockup/query";
import * as _455 from "./osmosis/lockup/tx";
import * as _460 from "./osmosis/mint/v1beta1/genesis";
import * as _462 from "./osmosis/mint/v1beta1/mint";
import * as _464 from "./osmosis/mint/v1beta1/query";
import * as _466 from "./osmosis/pool-incentives/v1beta1/genesis";
import * as _468 from "./osmosis/pool-incentives/v1beta1/gov";
import * as _470 from "./osmosis/pool-incentives/v1beta1/incentives";
import * as _472 from "./osmosis/pool-incentives/v1beta1/query";
import * as _474 from "./osmosis/store/v1beta1/tree";
import * as _476 from "./osmosis/superfluid/genesis";
import * as _478 from "./osmosis/superfluid/params";
import * as _480 from "./osmosis/superfluid/query";
import * as _482 from "./osmosis/superfluid/superfluid";
import * as _484 from "./osmosis/superfluid/tx";
import * as _489 from "./osmosis/txfees/v1beta1/feetoken";
import * as _491 from "./osmosis/txfees/v1beta1/genesis";
import * as _493 from "./osmosis/txfees/v1beta1/gov";
import * as _495 from "./osmosis/txfees/v1beta1/query";
import * as _497 from "./secret/compute/v1beta1/genesis";
import * as _499 from "./secret/compute/v1beta1/msg";
import * as _501 from "./secret/compute/v1beta1/query";
import * as _503 from "./secret/compute/v1beta1/types";
import * as _505 from "./secret/registration/v1beta1/genesis";
import * as _507 from "./secret/registration/v1beta1/msg";
import * as _509 from "./secret/registration/v1beta1/query";
import * as _511 from "./secret/registration/v1beta1/types";
import * as _513 from "./secret/registration/v1beta1/remote_attestation/types";
import * as _515 from "./tendermint/abci/types";
import * as _517 from "./tendermint/crypto/keys";
import * as _519 from "./tendermint/crypto/proof";
import * as _521 from "./tendermint/libs/bits/types";
import * as _523 from "./tendermint/p2p/types";
import * as _525 from "./tendermint/types/block";
import * as _527 from "./tendermint/types/evidence";
import * as _529 from "./tendermint/types/params";
import * as _531 from "./tendermint/types/types";
import * as _533 from "./tendermint/types/validator";
import * as _535 from "./tendermint/version/types";
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
                encode(message: _37.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgSend;
                fromJSON(object: any): _37.MsgSend;
                toJSON(message: _37.MsgSend): unknown;
                fromPartial<I extends unknown>(object: I): _37.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _37.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgSendResponse;
                fromJSON(_: any): _37.MsgSendResponse;
                toJSON(_: _37.MsgSendResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _37.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _37.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgMultiSend;
                fromJSON(object: any): _37.MsgMultiSend;
                toJSON(message: _37.MsgMultiSend): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _37.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _37.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgMultiSendResponse;
                fromJSON(_: any): _37.MsgMultiSendResponse;
                toJSON(_: _37.MsgMultiSendResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _37.MsgMultiSendResponse;
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _37.MsgSend) => {
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
                    }) => _37.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _37.MsgMultiSend) => {
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
                    }) => _37.MsgMultiSend;
                };
            };
            encoded: {
                send(value: _37.MsgSend): {
                    type_url: string;
                    value: Uint8Array;
                };
                multiSend(value: _37.MsgMultiSend): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            messages: {
                send(value: _37.MsgSend): {
                    typeUrl: string;
                    value: _37.MsgSend;
                };
                multiSend(value: _37.MsgMultiSend): {
                    typeUrl: string;
                    value: _37.MsgMultiSend;
                };
            };
            QueryBalanceRequest: {
                encode(message: _35.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryBalanceRequest;
                fromJSON(object: any): _35.QueryBalanceRequest;
                toJSON(message: _35.QueryBalanceRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _35.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _35.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryBalanceResponse;
                fromJSON(object: any): _35.QueryBalanceResponse;
                toJSON(message: _35.QueryBalanceResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _35.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _35.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryAllBalancesRequest;
                fromJSON(object: any): _35.QueryAllBalancesRequest;
                toJSON(message: _35.QueryAllBalancesRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _35.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _35.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryAllBalancesResponse;
                fromJSON(object: any): _35.QueryAllBalancesResponse;
                toJSON(message: _35.QueryAllBalancesResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _35.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _35.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QuerySpendableBalancesRequest;
                fromJSON(object: any): _35.QuerySpendableBalancesRequest;
                toJSON(message: _35.QuerySpendableBalancesRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _35.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _35.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QuerySpendableBalancesResponse;
                fromJSON(object: any): _35.QuerySpendableBalancesResponse;
                toJSON(message: _35.QuerySpendableBalancesResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _35.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _35.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryTotalSupplyRequest;
                fromJSON(object: any): _35.QueryTotalSupplyRequest;
                toJSON(message: _35.QueryTotalSupplyRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _35.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _35.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryTotalSupplyResponse;
                fromJSON(object: any): _35.QueryTotalSupplyResponse;
                toJSON(message: _35.QueryTotalSupplyResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _35.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _35.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QuerySupplyOfRequest;
                fromJSON(object: any): _35.QuerySupplyOfRequest;
                toJSON(message: _35.QuerySupplyOfRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _35.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _35.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QuerySupplyOfResponse;
                fromJSON(object: any): _35.QuerySupplyOfResponse;
                toJSON(message: _35.QuerySupplyOfResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _35.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _35.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryParamsRequest;
                fromJSON(_: any): _35.QueryParamsRequest;
                toJSON(_: _35.QueryParamsRequest): unknown;
                fromPartial<I_14 extends unknown>(_: I_14): _35.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _35.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryParamsResponse;
                fromJSON(object: any): _35.QueryParamsResponse;
                toJSON(message: _35.QueryParamsResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _35.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _35.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDenomsMetadataRequest;
                fromJSON(object: any): _35.QueryDenomsMetadataRequest;
                toJSON(message: _35.QueryDenomsMetadataRequest): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _35.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _35.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDenomsMetadataResponse;
                fromJSON(object: any): _35.QueryDenomsMetadataResponse;
                toJSON(message: _35.QueryDenomsMetadataResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _35.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _35.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDenomMetadataRequest;
                fromJSON(object: any): _35.QueryDenomMetadataRequest;
                toJSON(message: _35.QueryDenomMetadataRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _35.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _35.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDenomMetadataResponse;
                fromJSON(object: any): _35.QueryDenomMetadataResponse;
                toJSON(message: _35.QueryDenomMetadataResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _35.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _35.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDenomOwnersRequest;
                fromJSON(object: any): _35.QueryDenomOwnersRequest;
                toJSON(message: _35.QueryDenomOwnersRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _35.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _35.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.DenomOwner;
                fromJSON(object: any): _35.DenomOwner;
                toJSON(message: _35.DenomOwner): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _35.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _35.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDenomOwnersResponse;
                fromJSON(object: any): _35.QueryDenomOwnersResponse;
                toJSON(message: _35.QueryDenomOwnersResponse): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _35.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _33.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GenesisState;
                fromJSON(object: any): _33.GenesisState;
                toJSON(message: _33.GenesisState): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _33.GenesisState;
            };
            Balance: {
                encode(message: _33.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Balance;
                fromJSON(object: any): _33.Balance;
                toJSON(message: _33.Balance): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _33.Balance;
            };
            Params: {
                encode(message: _31.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Params;
                fromJSON(object: any): _31.Params;
                toJSON(message: _31.Params): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _31.Params;
            };
            SendEnabled: {
                encode(message: _31.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.SendEnabled;
                fromJSON(object: any): _31.SendEnabled;
                toJSON(message: _31.SendEnabled): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _31.SendEnabled;
            };
            Input: {
                encode(message: _31.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Input;
                fromJSON(object: any): _31.Input;
                toJSON(message: _31.Input): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _31.Input;
            };
            Output: {
                encode(message: _31.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Output;
                fromJSON(object: any): _31.Output;
                toJSON(message: _31.Output): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _31.Output;
            };
            Supply: {
                encode(message: _31.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Supply;
                fromJSON(object: any): _31.Supply;
                toJSON(message: _31.Supply): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _31.Supply;
            };
            DenomUnit: {
                encode(message: _31.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.DenomUnit;
                fromJSON(object: any): _31.DenomUnit;
                toJSON(message: _31.DenomUnit): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _31.DenomUnit;
            };
            Metadata: {
                encode(message: _31.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Metadata;
                fromJSON(object: any): _31.Metadata;
                toJSON(message: _31.Metadata): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _31.Metadata;
            };
            SendAuthorization: {
                encode(message: _29.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SendAuthorization;
                fromJSON(object: any): _29.SendAuthorization;
                toJSON(message: _29.SendAuthorization): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _29.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _42.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.TxResponse;
                    fromJSON(object: any): _42.TxResponse;
                    toJSON(message: _42.TxResponse): unknown;
                    fromPartial<I extends unknown>(object: I): _42.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _42.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.ABCIMessageLog;
                    fromJSON(object: any): _42.ABCIMessageLog;
                    toJSON(message: _42.ABCIMessageLog): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _42.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _42.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.StringEvent;
                    fromJSON(object: any): _42.StringEvent;
                    toJSON(message: _42.StringEvent): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _42.StringEvent;
                };
                Attribute: {
                    encode(message: _42.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Attribute;
                    fromJSON(object: any): _42.Attribute;
                    toJSON(message: _42.Attribute): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _42.Attribute;
                };
                GasInfo: {
                    encode(message: _42.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GasInfo;
                    fromJSON(object: any): _42.GasInfo;
                    toJSON(message: _42.GasInfo): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _42.GasInfo;
                };
                Result: {
                    encode(message: _42.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Result;
                    fromJSON(object: any): _42.Result;
                    toJSON(message: _42.Result): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _42.Result;
                };
                SimulationResponse: {
                    encode(message: _42.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.SimulationResponse;
                    fromJSON(object: any): _42.SimulationResponse;
                    toJSON(message: _42.SimulationResponse): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _42.SimulationResponse;
                };
                MsgData: {
                    encode(message: _42.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgData;
                    fromJSON(object: any): _42.MsgData;
                    toJSON(message: _42.MsgData): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _42.MsgData;
                };
                TxMsgData: {
                    encode(message: _42.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.TxMsgData;
                    fromJSON(object: any): _42.TxMsgData;
                    toJSON(message: _42.TxMsgData): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _42.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _42.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.SearchTxsResult;
                    fromJSON(object: any): _42.SearchTxsResult;
                    toJSON(message: _42.SearchTxsResult): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _42.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _44.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Pairs;
                    fromJSON(object: any): _44.Pairs;
                    toJSON(message: _44.Pairs): unknown;
                    fromPartial<I extends unknown>(object: I): _44.Pairs;
                };
                Pair: {
                    encode(message: _44.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Pair;
                    fromJSON(object: any): _44.Pair;
                    toJSON(message: _44.Pair): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _44.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _46.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.PageRequest;
                    fromJSON(object: any): _46.PageRequest;
                    toJSON(message: _46.PageRequest): unknown;
                    fromPartial<I extends unknown>(object: I): _46.PageRequest;
                };
                PageResponse: {
                    encode(message: _46.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.PageResponse;
                    fromJSON(object: any): _46.PageResponse;
                    toJSON(message: _46.PageResponse): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _46.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _48.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ListAllInterfacesRequest;
                    fromJSON(_: any): _48.ListAllInterfacesRequest;
                    toJSON(_: _48.ListAllInterfacesRequest): unknown;
                    fromPartial<I extends unknown>(_: I): _48.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _48.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ListAllInterfacesResponse;
                    fromJSON(object: any): _48.ListAllInterfacesResponse;
                    toJSON(message: _48.ListAllInterfacesResponse): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _48.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _48.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ListImplementationsRequest;
                    fromJSON(object: any): _48.ListImplementationsRequest;
                    toJSON(message: _48.ListImplementationsRequest): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _48.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _48.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ListImplementationsResponse;
                    fromJSON(object: any): _48.ListImplementationsResponse;
                    toJSON(message: _48.ListImplementationsResponse): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _48.ListImplementationsResponse;
                };
                ReflectionServiceClientImpl: typeof _48.ReflectionServiceClientImpl;
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _50.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.AppDescriptor;
                    fromJSON(object: any): _50.AppDescriptor;
                    toJSON(message: _50.AppDescriptor): unknown;
                    fromPartial<I extends unknown>(object: I): _50.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _50.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.TxDescriptor;
                    fromJSON(object: any): _50.TxDescriptor;
                    toJSON(message: _50.TxDescriptor): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _50.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _50.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.AuthnDescriptor;
                    fromJSON(object: any): _50.AuthnDescriptor;
                    toJSON(message: _50.AuthnDescriptor): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _50.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _50.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.SigningModeDescriptor;
                    fromJSON(object: any): _50.SigningModeDescriptor;
                    toJSON(message: _50.SigningModeDescriptor): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _50.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _50.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ChainDescriptor;
                    fromJSON(object: any): _50.ChainDescriptor;
                    toJSON(message: _50.ChainDescriptor): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _50.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _50.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.CodecDescriptor;
                    fromJSON(object: any): _50.CodecDescriptor;
                    toJSON(message: _50.CodecDescriptor): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _50.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _50.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.InterfaceDescriptor;
                    fromJSON(object: any): _50.InterfaceDescriptor;
                    toJSON(message: _50.InterfaceDescriptor): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _50.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _50.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _50.InterfaceImplementerDescriptor;
                    toJSON(message: _50.InterfaceImplementerDescriptor): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _50.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _50.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _50.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _50.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _50.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _50.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ConfigurationDescriptor;
                    fromJSON(object: any): _50.ConfigurationDescriptor;
                    toJSON(message: _50.ConfigurationDescriptor): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _50.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _50.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgDescriptor;
                    fromJSON(object: any): _50.MsgDescriptor;
                    toJSON(message: _50.MsgDescriptor): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _50.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _50.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _50.GetAuthnDescriptorRequest;
                    toJSON(_: _50.GetAuthnDescriptorRequest): unknown;
                    fromPartial<I_11 extends unknown>(_: I_11): _50.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _50.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _50.GetAuthnDescriptorResponse;
                    toJSON(message: _50.GetAuthnDescriptorResponse): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _50.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _50.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GetChainDescriptorRequest;
                    fromJSON(_: any): _50.GetChainDescriptorRequest;
                    toJSON(_: _50.GetChainDescriptorRequest): unknown;
                    fromPartial<I_13 extends unknown>(_: I_13): _50.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _50.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GetChainDescriptorResponse;
                    fromJSON(object: any): _50.GetChainDescriptorResponse;
                    toJSON(message: _50.GetChainDescriptorResponse): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _50.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _50.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GetCodecDescriptorRequest;
                    fromJSON(_: any): _50.GetCodecDescriptorRequest;
                    toJSON(_: _50.GetCodecDescriptorRequest): unknown;
                    fromPartial<I_15 extends unknown>(_: I_15): _50.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _50.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GetCodecDescriptorResponse;
                    fromJSON(object: any): _50.GetCodecDescriptorResponse;
                    toJSON(message: _50.GetCodecDescriptorResponse): unknown;
                    fromPartial<I_16 extends unknown>(object: I_16): _50.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _50.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _50.GetConfigurationDescriptorRequest;
                    toJSON(_: _50.GetConfigurationDescriptorRequest): unknown;
                    fromPartial<I_17 extends unknown>(_: I_17): _50.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _50.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _50.GetConfigurationDescriptorResponse;
                    toJSON(message: _50.GetConfigurationDescriptorResponse): unknown;
                    fromPartial<I_18 extends unknown>(object: I_18): _50.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _50.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _50.GetQueryServicesDescriptorRequest;
                    toJSON(_: _50.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial<I_19 extends unknown>(_: I_19): _50.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _50.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _50.GetQueryServicesDescriptorResponse;
                    toJSON(message: _50.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial<I_20 extends unknown>(object: I_20): _50.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _50.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GetTxDescriptorRequest;
                    fromJSON(_: any): _50.GetTxDescriptorRequest;
                    toJSON(_: _50.GetTxDescriptorRequest): unknown;
                    fromPartial<I_21 extends unknown>(_: I_21): _50.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _50.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GetTxDescriptorResponse;
                    fromJSON(object: any): _50.GetTxDescriptorResponse;
                    toJSON(message: _50.GetTxDescriptorResponse): unknown;
                    fromPartial<I_22 extends unknown>(object: I_22): _50.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _50.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryServicesDescriptor;
                    fromJSON(object: any): _50.QueryServicesDescriptor;
                    toJSON(message: _50.QueryServicesDescriptor): unknown;
                    fromPartial<I_23 extends unknown>(object: I_23): _50.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _50.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryServiceDescriptor;
                    fromJSON(object: any): _50.QueryServiceDescriptor;
                    toJSON(message: _50.QueryServiceDescriptor): unknown;
                    fromPartial<I_24 extends unknown>(object: I_24): _50.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _50.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryMethodDescriptor;
                    fromJSON(object: any): _50.QueryMethodDescriptor;
                    toJSON(message: _50.QueryMethodDescriptor): unknown;
                    fromPartial<I_25 extends unknown>(object: I_25): _50.QueryMethodDescriptor;
                };
                ReflectionServiceClientImpl: typeof _50.ReflectionServiceClientImpl;
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _52.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Snapshot;
                    fromJSON(object: any): _52.Snapshot;
                    toJSON(message: _52.Snapshot): unknown;
                    fromPartial<I extends unknown>(object: I): _52.Snapshot;
                };
                Metadata: {
                    encode(message: _52.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Metadata;
                    fromJSON(object: any): _52.Metadata;
                    toJSON(message: _52.Metadata): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _52.Metadata;
                };
                SnapshotItem: {
                    encode(message: _52.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.SnapshotItem;
                    fromJSON(object: any): _52.SnapshotItem;
                    toJSON(message: _52.SnapshotItem): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _52.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _52.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.SnapshotStoreItem;
                    fromJSON(object: any): _52.SnapshotStoreItem;
                    toJSON(message: _52.SnapshotStoreItem): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _52.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _52.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.SnapshotIAVLItem;
                    fromJSON(object: any): _52.SnapshotIAVLItem;
                    toJSON(message: _52.SnapshotIAVLItem): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _52.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _52.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.SnapshotExtensionMeta;
                    fromJSON(object: any): _52.SnapshotExtensionMeta;
                    toJSON(message: _52.SnapshotExtensionMeta): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _52.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _52.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.SnapshotExtensionPayload;
                    fromJSON(object: any): _52.SnapshotExtensionPayload;
                    toJSON(message: _52.SnapshotExtensionPayload): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _52.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _52.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.SnapshotKVItem;
                    fromJSON(object: any): _52.SnapshotKVItem;
                    toJSON(message: _52.SnapshotKVItem): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _52.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _52.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.SnapshotSchema;
                    fromJSON(object: any): _52.SnapshotSchema;
                    toJSON(message: _52.SnapshotSchema): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _52.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _56.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.StoreKVPair;
                    fromJSON(object: any): _56.StoreKVPair;
                    toJSON(message: _56.StoreKVPair): unknown;
                    fromPartial<I extends unknown>(object: I): _56.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _54.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.CommitInfo;
                    fromJSON(object: any): _54.CommitInfo;
                    toJSON(message: _54.CommitInfo): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _54.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _54.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.StoreInfo;
                    fromJSON(object: any): _54.StoreInfo;
                    toJSON(message: _54.StoreInfo): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _54.StoreInfo;
                };
                CommitID: {
                    encode(message: _54.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.CommitID;
                    fromJSON(object: any): _54.CommitID;
                    toJSON(message: _54.CommitID): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _54.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                GetValidatorSetByHeightRequest: {
                    encode(message: _58.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _58.GetValidatorSetByHeightRequest;
                    toJSON(message: _58.GetValidatorSetByHeightRequest): unknown;
                    fromPartial<I extends unknown>(object: I): _58.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _58.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _58.GetValidatorSetByHeightResponse;
                    toJSON(message: _58.GetValidatorSetByHeightResponse): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _58.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _58.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _58.GetLatestValidatorSetRequest;
                    toJSON(message: _58.GetLatestValidatorSetRequest): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _58.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _58.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _58.GetLatestValidatorSetResponse;
                    toJSON(message: _58.GetLatestValidatorSetResponse): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _58.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _58.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Validator;
                    fromJSON(object: any): _58.Validator;
                    toJSON(message: _58.Validator): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _58.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _58.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.GetBlockByHeightRequest;
                    fromJSON(object: any): _58.GetBlockByHeightRequest;
                    toJSON(message: _58.GetBlockByHeightRequest): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _58.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _58.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.GetBlockByHeightResponse;
                    fromJSON(object: any): _58.GetBlockByHeightResponse;
                    toJSON(message: _58.GetBlockByHeightResponse): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _58.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _58.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.GetLatestBlockRequest;
                    fromJSON(_: any): _58.GetLatestBlockRequest;
                    toJSON(_: _58.GetLatestBlockRequest): unknown;
                    fromPartial<I_7 extends unknown>(_: I_7): _58.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _58.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.GetLatestBlockResponse;
                    fromJSON(object: any): _58.GetLatestBlockResponse;
                    toJSON(message: _58.GetLatestBlockResponse): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _58.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _58.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.GetSyncingRequest;
                    fromJSON(_: any): _58.GetSyncingRequest;
                    toJSON(_: _58.GetSyncingRequest): unknown;
                    fromPartial<I_9 extends unknown>(_: I_9): _58.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _58.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.GetSyncingResponse;
                    fromJSON(object: any): _58.GetSyncingResponse;
                    toJSON(message: _58.GetSyncingResponse): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _58.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _58.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.GetNodeInfoRequest;
                    fromJSON(_: any): _58.GetNodeInfoRequest;
                    toJSON(_: _58.GetNodeInfoRequest): unknown;
                    fromPartial<I_11 extends unknown>(_: I_11): _58.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _58.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.GetNodeInfoResponse;
                    fromJSON(object: any): _58.GetNodeInfoResponse;
                    toJSON(message: _58.GetNodeInfoResponse): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _58.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _58.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.VersionInfo;
                    fromJSON(object: any): _58.VersionInfo;
                    toJSON(message: _58.VersionInfo): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _58.VersionInfo;
                };
                Module: {
                    encode(message: _58.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Module;
                    fromJSON(object: any): _58.Module;
                    toJSON(message: _58.Module): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _58.Module;
                };
                ServiceClientImpl: typeof _58.ServiceClientImpl;
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _60.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Coin;
                fromJSON(object: any): _60.Coin;
                toJSON(message: _60.Coin): unknown;
                fromPartial<I extends unknown>(object: I): _60.Coin;
            };
            DecCoin: {
                encode(message: _60.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.DecCoin;
                fromJSON(object: any): _60.DecCoin;
                toJSON(message: _60.DecCoin): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _60.DecCoin;
            };
            IntProto: {
                encode(message: _60.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.IntProto;
                fromJSON(object: any): _60.IntProto;
                toJSON(message: _60.IntProto): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _60.IntProto;
            };
            DecProto: {
                encode(message: _60.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.DecProto;
                fromJSON(object: any): _60.DecProto;
                toJSON(message: _60.DecProto): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _60.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _64.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GenesisOwners;
                fromJSON(object: any): _64.GenesisOwners;
                toJSON(message: _64.GenesisOwners): unknown;
                fromPartial<I extends unknown>(object: I): _64.GenesisOwners;
            };
            GenesisState: {
                encode(message: _64.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GenesisState;
                fromJSON(object: any): _64.GenesisState;
                toJSON(message: _64.GenesisState): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _64.GenesisState;
            };
            Capability: {
                encode(message: _62.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Capability;
                fromJSON(object: any): _62.Capability;
                toJSON(message: _62.Capability): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _62.Capability;
            };
            Owner: {
                encode(message: _62.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Owner;
                fromJSON(object: any): _62.Owner;
                toJSON(message: _62.Owner): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _62.Owner;
            };
            CapabilityOwners: {
                encode(message: _62.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.CapabilityOwners;
                fromJSON(object: any): _62.CapabilityOwners;
                toJSON(message: _62.CapabilityOwners): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _62.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgVerifyInvariant: {
                encode(message: _68.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgVerifyInvariant;
                fromJSON(object: any): _68.MsgVerifyInvariant;
                toJSON(message: _68.MsgVerifyInvariant): unknown;
                fromPartial<I extends unknown>(object: I): _68.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _68.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgVerifyInvariantResponse;
                fromJSON(_: any): _68.MsgVerifyInvariantResponse;
                toJSON(_: _68.MsgVerifyInvariantResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _68.MsgVerifyInvariantResponse;
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _68.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _68.MsgVerifyInvariant;
                };
            };
            encoded: {
                verifyInvariant(value: _68.MsgVerifyInvariant): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            messages: {
                verifyInvariant(value: _68.MsgVerifyInvariant): {
                    typeUrl: string;
                    value: _68.MsgVerifyInvariant;
                };
            };
            GenesisState: {
                encode(message: _66.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GenesisState;
                fromJSON(object: any): _66.GenesisState;
                toJSON(message: _66.GenesisState): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _66.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _73.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.PubKey;
                fromJSON(object: any): _73.PubKey;
                toJSON(message: _73.PubKey): unknown;
                fromPartial<I extends unknown>(object: I): _73.PubKey;
            };
            PrivKey: {
                encode(message: _73.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.PrivKey;
                fromJSON(object: any): _73.PrivKey;
                toJSON(message: _73.PrivKey): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _73.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _75.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.BIP44Params;
                    fromJSON(object: any): _75.BIP44Params;
                    toJSON(message: _75.BIP44Params): unknown;
                    fromPartial<I extends unknown>(object: I): _75.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _77.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Record;
                    fromJSON(object: any): _77.Record;
                    toJSON(message: _77.Record): unknown;
                    fromPartial<I extends unknown>(object: I): _77.Record;
                };
                Record_Local: {
                    encode(message: _77.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Record_Local;
                    fromJSON(object: any): _77.Record_Local;
                    toJSON(message: _77.Record_Local): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _77.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _77.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Record_Ledger;
                    fromJSON(object: any): _77.Record_Ledger;
                    toJSON(message: _77.Record_Ledger): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _77.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _77.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Record_Multi;
                    fromJSON(_: any): _77.Record_Multi;
                    toJSON(_: _77.Record_Multi): unknown;
                    fromPartial<I_3 extends unknown>(_: I_3): _77.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _77.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Record_Offline;
                    fromJSON(_: any): _77.Record_Offline;
                    toJSON(_: _77.Record_Offline): unknown;
                    fromPartial<I_4 extends unknown>(_: I_4): _77.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _79.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.LegacyAminoPubKey;
                fromJSON(object: any): _79.LegacyAminoPubKey;
                toJSON(message: _79.LegacyAminoPubKey): unknown;
                fromPartial<I extends unknown>(object: I): _79.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _81.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.PubKey;
                fromJSON(object: any): _81.PubKey;
                toJSON(message: _81.PubKey): unknown;
                fromPartial<I extends unknown>(object: I): _81.PubKey;
            };
            PrivKey: {
                encode(message: _81.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.PrivKey;
                fromJSON(object: any): _81.PrivKey;
                toJSON(message: _81.PrivKey): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _81.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _83.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.PubKey;
                fromJSON(object: any): _83.PubKey;
                toJSON(message: _83.PubKey): unknown;
                fromPartial<I extends unknown>(object: I): _83.PubKey;
            };
            PrivKey: {
                encode(message: _83.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.PrivKey;
                fromJSON(object: any): _83.PrivKey;
                toJSON(message: _83.PrivKey): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _83.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgSetWithdrawAddress: {
                encode(message: _91.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgSetWithdrawAddress;
                fromJSON(object: any): _91.MsgSetWithdrawAddress;
                toJSON(message: _91.MsgSetWithdrawAddress): unknown;
                fromPartial<I extends unknown>(object: I): _91.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _91.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _91.MsgSetWithdrawAddressResponse;
                toJSON(_: _91.MsgSetWithdrawAddressResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _91.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _91.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _91.MsgWithdrawDelegatorReward;
                toJSON(message: _91.MsgWithdrawDelegatorReward): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _91.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _91.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _91.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _91.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _91.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _91.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _91.MsgWithdrawValidatorCommission;
                toJSON(message: _91.MsgWithdrawValidatorCommission): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _91.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _91.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _91.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _91.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _91.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _91.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgFundCommunityPool;
                fromJSON(object: any): _91.MsgFundCommunityPool;
                toJSON(message: _91.MsgFundCommunityPool): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _91.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _91.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _91.MsgFundCommunityPoolResponse;
                toJSON(_: _91.MsgFundCommunityPoolResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _91.MsgFundCommunityPoolResponse;
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _91.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _91.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _91.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _91.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _91.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _91.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _91.MsgFundCommunityPool) => {
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
                    }) => _91.MsgFundCommunityPool;
                };
            };
            encoded: {
                setWithdrawAddress(value: _91.MsgSetWithdrawAddress): {
                    type_url: string;
                    value: Uint8Array;
                };
                withdrawDelegatorReward(value: _91.MsgWithdrawDelegatorReward): {
                    type_url: string;
                    value: Uint8Array;
                };
                withdrawValidatorCommission(value: _91.MsgWithdrawValidatorCommission): {
                    type_url: string;
                    value: Uint8Array;
                };
                fundCommunityPool(value: _91.MsgFundCommunityPool): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            messages: {
                setWithdrawAddress(value: _91.MsgSetWithdrawAddress): {
                    typeUrl: string;
                    value: _91.MsgSetWithdrawAddress;
                };
                withdrawDelegatorReward(value: _91.MsgWithdrawDelegatorReward): {
                    typeUrl: string;
                    value: _91.MsgWithdrawDelegatorReward;
                };
                withdrawValidatorCommission(value: _91.MsgWithdrawValidatorCommission): {
                    typeUrl: string;
                    value: _91.MsgWithdrawValidatorCommission;
                };
                fundCommunityPool(value: _91.MsgFundCommunityPool): {
                    typeUrl: string;
                    value: _91.MsgFundCommunityPool;
                };
            };
            QueryParamsRequest: {
                encode(_: _89.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryParamsRequest;
                fromJSON(_: any): _89.QueryParamsRequest;
                toJSON(_: _89.QueryParamsRequest): unknown;
                fromPartial<I_8 extends unknown>(_: I_8): _89.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _89.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryParamsResponse;
                fromJSON(object: any): _89.QueryParamsResponse;
                toJSON(message: _89.QueryParamsResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _89.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _89.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _89.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _89.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _89.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _89.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _89.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _89.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _89.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _89.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryValidatorCommissionRequest;
                fromJSON(object: any): _89.QueryValidatorCommissionRequest;
                toJSON(message: _89.QueryValidatorCommissionRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _89.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _89.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryValidatorCommissionResponse;
                fromJSON(object: any): _89.QueryValidatorCommissionResponse;
                toJSON(message: _89.QueryValidatorCommissionResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _89.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _89.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryValidatorSlashesRequest;
                fromJSON(object: any): _89.QueryValidatorSlashesRequest;
                toJSON(message: _89.QueryValidatorSlashesRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _89.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _89.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryValidatorSlashesResponse;
                fromJSON(object: any): _89.QueryValidatorSlashesResponse;
                toJSON(message: _89.QueryValidatorSlashesResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _89.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _89.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryDelegationRewardsRequest;
                fromJSON(object: any): _89.QueryDelegationRewardsRequest;
                toJSON(message: _89.QueryDelegationRewardsRequest): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _89.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _89.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryDelegationRewardsResponse;
                fromJSON(object: any): _89.QueryDelegationRewardsResponse;
                toJSON(message: _89.QueryDelegationRewardsResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _89.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _89.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _89.QueryDelegationTotalRewardsRequest;
                toJSON(message: _89.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _89.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _89.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _89.QueryDelegationTotalRewardsResponse;
                toJSON(message: _89.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _89.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _89.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _89.QueryDelegatorValidatorsRequest;
                toJSON(message: _89.QueryDelegatorValidatorsRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _89.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _89.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _89.QueryDelegatorValidatorsResponse;
                toJSON(message: _89.QueryDelegatorValidatorsResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _89.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _89.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _89.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _89.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _89.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _89.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _89.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _89.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _89.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _89.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryCommunityPoolRequest;
                fromJSON(_: any): _89.QueryCommunityPoolRequest;
                toJSON(_: _89.QueryCommunityPoolRequest): unknown;
                fromPartial<I_24 extends unknown>(_: I_24): _89.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _89.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryCommunityPoolResponse;
                fromJSON(object: any): _89.QueryCommunityPoolResponse;
                toJSON(message: _89.QueryCommunityPoolResponse): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _89.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _87.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.DelegatorWithdrawInfo;
                fromJSON(object: any): _87.DelegatorWithdrawInfo;
                toJSON(message: _87.DelegatorWithdrawInfo): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _87.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _87.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _87.ValidatorOutstandingRewardsRecord;
                toJSON(message: _87.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _87.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _87.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _87.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _87.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _87.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _87.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _87.ValidatorHistoricalRewardsRecord;
                toJSON(message: _87.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _87.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _87.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _87.ValidatorCurrentRewardsRecord;
                toJSON(message: _87.ValidatorCurrentRewardsRecord): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _87.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _87.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.DelegatorStartingInfoRecord;
                fromJSON(object: any): _87.DelegatorStartingInfoRecord;
                toJSON(message: _87.DelegatorStartingInfoRecord): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _87.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _87.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ValidatorSlashEventRecord;
                fromJSON(object: any): _87.ValidatorSlashEventRecord;
                toJSON(message: _87.ValidatorSlashEventRecord): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _87.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _87.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.GenesisState;
                fromJSON(object: any): _87.GenesisState;
                toJSON(message: _87.GenesisState): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _87.GenesisState;
            };
            Params: {
                encode(message: _85.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Params;
                fromJSON(object: any): _85.Params;
                toJSON(message: _85.Params): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _85.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _85.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ValidatorHistoricalRewards;
                fromJSON(object: any): _85.ValidatorHistoricalRewards;
                toJSON(message: _85.ValidatorHistoricalRewards): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _85.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _85.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ValidatorCurrentRewards;
                fromJSON(object: any): _85.ValidatorCurrentRewards;
                toJSON(message: _85.ValidatorCurrentRewards): unknown;
                fromPartial<I_36 extends unknown>(object: I_36): _85.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _85.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ValidatorAccumulatedCommission;
                fromJSON(object: any): _85.ValidatorAccumulatedCommission;
                toJSON(message: _85.ValidatorAccumulatedCommission): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _85.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _85.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ValidatorOutstandingRewards;
                fromJSON(object: any): _85.ValidatorOutstandingRewards;
                toJSON(message: _85.ValidatorOutstandingRewards): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _85.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _85.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ValidatorSlashEvent;
                fromJSON(object: any): _85.ValidatorSlashEvent;
                toJSON(message: _85.ValidatorSlashEvent): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _85.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _85.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ValidatorSlashEvents;
                fromJSON(object: any): _85.ValidatorSlashEvents;
                toJSON(message: _85.ValidatorSlashEvents): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _85.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _85.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.FeePool;
                fromJSON(object: any): _85.FeePool;
                toJSON(message: _85.FeePool): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _85.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _85.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.CommunityPoolSpendProposal;
                fromJSON(object: any): _85.CommunityPoolSpendProposal;
                toJSON(message: _85.CommunityPoolSpendProposal): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _85.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _85.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DelegatorStartingInfo;
                fromJSON(object: any): _85.DelegatorStartingInfo;
                toJSON(message: _85.DelegatorStartingInfo): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _85.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _85.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DelegationDelegatorReward;
                fromJSON(object: any): _85.DelegationDelegatorReward;
                toJSON(message: _85.DelegationDelegatorReward): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _85.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _85.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _85.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _85.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _85.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgSubmitEvidence: {
                encode(message: _102.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgSubmitEvidence;
                fromJSON(object: any): _102.MsgSubmitEvidence;
                toJSON(message: _102.MsgSubmitEvidence): unknown;
                fromPartial<I extends unknown>(object: I): _102.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _102.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _102.MsgSubmitEvidenceResponse;
                toJSON(message: _102.MsgSubmitEvidenceResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _102.MsgSubmitEvidenceResponse;
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _102.MsgSubmitEvidence) => {
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
                    }) => _102.MsgSubmitEvidence;
                };
            };
            encoded: {
                submitEvidence(value: _102.MsgSubmitEvidence): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            messages: {
                submitEvidence(value: _102.MsgSubmitEvidence): {
                    typeUrl: string;
                    value: _102.MsgSubmitEvidence;
                };
            };
            QueryEvidenceRequest: {
                encode(message: _100.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryEvidenceRequest;
                fromJSON(object: any): _100.QueryEvidenceRequest;
                toJSON(message: _100.QueryEvidenceRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _100.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _100.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryEvidenceResponse;
                fromJSON(object: any): _100.QueryEvidenceResponse;
                toJSON(message: _100.QueryEvidenceResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _100.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _100.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryAllEvidenceRequest;
                fromJSON(object: any): _100.QueryAllEvidenceRequest;
                toJSON(message: _100.QueryAllEvidenceRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _100.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _100.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryAllEvidenceResponse;
                fromJSON(object: any): _100.QueryAllEvidenceResponse;
                toJSON(message: _100.QueryAllEvidenceResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _100.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _98.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.GenesisState;
                fromJSON(object: any): _98.GenesisState;
                toJSON(message: _98.GenesisState): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _98.GenesisState;
            };
            Equivocation: {
                encode(message: _96.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Equivocation;
                fromJSON(object: any): _96.Equivocation;
                toJSON(message: _96.Equivocation): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _96.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgGrantAllowance: {
                encode(message: _113.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgGrantAllowance;
                fromJSON(object: any): _113.MsgGrantAllowance;
                toJSON(message: _113.MsgGrantAllowance): unknown;
                fromPartial<I extends unknown>(object: I): _113.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _113.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgGrantAllowanceResponse;
                fromJSON(_: any): _113.MsgGrantAllowanceResponse;
                toJSON(_: _113.MsgGrantAllowanceResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _113.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _113.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgRevokeAllowance;
                fromJSON(object: any): _113.MsgRevokeAllowance;
                toJSON(message: _113.MsgRevokeAllowance): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _113.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _113.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _113.MsgRevokeAllowanceResponse;
                toJSON(_: _113.MsgRevokeAllowanceResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _113.MsgRevokeAllowanceResponse;
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _113.MsgGrantAllowance) => {
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
                    }) => _113.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _113.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _113.MsgRevokeAllowance;
                };
            };
            encoded: {
                grantAllowance(value: _113.MsgGrantAllowance): {
                    type_url: string;
                    value: Uint8Array;
                };
                revokeAllowance(value: _113.MsgRevokeAllowance): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            messages: {
                grantAllowance(value: _113.MsgGrantAllowance): {
                    typeUrl: string;
                    value: _113.MsgGrantAllowance;
                };
                revokeAllowance(value: _113.MsgRevokeAllowance): {
                    typeUrl: string;
                    value: _113.MsgRevokeAllowance;
                };
            };
            QueryAllowanceRequest: {
                encode(message: _111.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryAllowanceRequest;
                fromJSON(object: any): _111.QueryAllowanceRequest;
                toJSON(message: _111.QueryAllowanceRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _111.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _111.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryAllowanceResponse;
                fromJSON(object: any): _111.QueryAllowanceResponse;
                toJSON(message: _111.QueryAllowanceResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _111.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _111.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryAllowancesRequest;
                fromJSON(object: any): _111.QueryAllowancesRequest;
                toJSON(message: _111.QueryAllowancesRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _111.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _111.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryAllowancesResponse;
                fromJSON(object: any): _111.QueryAllowancesResponse;
                toJSON(message: _111.QueryAllowancesResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _111.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _111.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _111.QueryAllowancesByGranterRequest;
                toJSON(message: _111.QueryAllowancesByGranterRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _111.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _111.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _111.QueryAllowancesByGranterResponse;
                toJSON(message: _111.QueryAllowancesByGranterResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _111.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _109.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.GenesisState;
                fromJSON(object: any): _109.GenesisState;
                toJSON(message: _109.GenesisState): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _109.GenesisState;
            };
            BasicAllowance: {
                encode(message: _107.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.BasicAllowance;
                fromJSON(object: any): _107.BasicAllowance;
                toJSON(message: _107.BasicAllowance): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _107.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _107.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.PeriodicAllowance;
                fromJSON(object: any): _107.PeriodicAllowance;
                toJSON(message: _107.PeriodicAllowance): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _107.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _107.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.AllowedMsgAllowance;
                fromJSON(object: any): _107.AllowedMsgAllowance;
                toJSON(message: _107.AllowedMsgAllowance): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _107.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _107.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Grant;
                fromJSON(object: any): _107.Grant;
                toJSON(message: _107.Grant): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _107.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _118.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.GenesisState;
                fromJSON(object: any): _118.GenesisState;
                toJSON(message: _118.GenesisState): unknown;
                fromPartial<I extends unknown>(object: I): _118.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgSubmitProposal: {
                encode(message: _126.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgSubmitProposal;
                fromJSON(object: any): _126.MsgSubmitProposal;
                toJSON(message: _126.MsgSubmitProposal): unknown;
                fromPartial<I extends unknown>(object: I): _126.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _126.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgSubmitProposalResponse;
                fromJSON(object: any): _126.MsgSubmitProposalResponse;
                toJSON(message: _126.MsgSubmitProposalResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _126.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _126.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgExecLegacyContent;
                fromJSON(object: any): _126.MsgExecLegacyContent;
                toJSON(message: _126.MsgExecLegacyContent): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _126.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _126.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgExecLegacyContentResponse;
                fromJSON(_: any): _126.MsgExecLegacyContentResponse;
                toJSON(_: _126.MsgExecLegacyContentResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _126.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _126.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgVote;
                fromJSON(object: any): _126.MsgVote;
                toJSON(message: _126.MsgVote): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _126.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _126.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgVoteResponse;
                fromJSON(_: any): _126.MsgVoteResponse;
                toJSON(_: _126.MsgVoteResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _126.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _126.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgVoteWeighted;
                fromJSON(object: any): _126.MsgVoteWeighted;
                toJSON(message: _126.MsgVoteWeighted): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _126.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _126.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgVoteWeightedResponse;
                fromJSON(_: any): _126.MsgVoteWeightedResponse;
                toJSON(_: _126.MsgVoteWeightedResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _126.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _126.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgDeposit;
                fromJSON(object: any): _126.MsgDeposit;
                toJSON(message: _126.MsgDeposit): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _126.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _126.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgDepositResponse;
                fromJSON(_: any): _126.MsgDepositResponse;
                toJSON(_: _126.MsgDepositResponse): unknown;
                fromPartial<I_9 extends unknown>(_: I_9): _126.MsgDepositResponse;
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _126.MsgSubmitProposal) => {
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
                    }) => _126.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _126.MsgExecLegacyContent) => {
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
                    }) => _126.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _126.MsgVote) => {
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
                    }) => _126.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _126.MsgVoteWeighted) => {
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
                    }) => _126.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _126.MsgDeposit) => {
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
                    }) => _126.MsgDeposit;
                };
            };
            encoded: {
                submitProposal(value: _126.MsgSubmitProposal): {
                    type_url: string;
                    value: Uint8Array;
                };
                execLegacyContent(value: _126.MsgExecLegacyContent): {
                    type_url: string;
                    value: Uint8Array;
                };
                vote(value: _126.MsgVote): {
                    type_url: string;
                    value: Uint8Array;
                };
                voteWeighted(value: _126.MsgVoteWeighted): {
                    type_url: string;
                    value: Uint8Array;
                };
                deposit(value: _126.MsgDeposit): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            messages: {
                submitProposal(value: _126.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _126.MsgSubmitProposal;
                };
                execLegacyContent(value: _126.MsgExecLegacyContent): {
                    typeUrl: string;
                    value: _126.MsgExecLegacyContent;
                };
                vote(value: _126.MsgVote): {
                    typeUrl: string;
                    value: _126.MsgVote;
                };
                voteWeighted(value: _126.MsgVoteWeighted): {
                    typeUrl: string;
                    value: _126.MsgVoteWeighted;
                };
                deposit(value: _126.MsgDeposit): {
                    typeUrl: string;
                    value: _126.MsgDeposit;
                };
            };
            QueryProposalRequest: {
                encode(message: _124.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryProposalRequest;
                fromJSON(object: any): _124.QueryProposalRequest;
                toJSON(message: _124.QueryProposalRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _124.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _124.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryProposalResponse;
                fromJSON(object: any): _124.QueryProposalResponse;
                toJSON(message: _124.QueryProposalResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _124.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _124.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryProposalsRequest;
                fromJSON(object: any): _124.QueryProposalsRequest;
                toJSON(message: _124.QueryProposalsRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _124.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _124.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryProposalsResponse;
                fromJSON(object: any): _124.QueryProposalsResponse;
                toJSON(message: _124.QueryProposalsResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _124.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _124.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryVoteRequest;
                fromJSON(object: any): _124.QueryVoteRequest;
                toJSON(message: _124.QueryVoteRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _124.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _124.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryVoteResponse;
                fromJSON(object: any): _124.QueryVoteResponse;
                toJSON(message: _124.QueryVoteResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _124.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _124.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryVotesRequest;
                fromJSON(object: any): _124.QueryVotesRequest;
                toJSON(message: _124.QueryVotesRequest): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _124.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _124.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryVotesResponse;
                fromJSON(object: any): _124.QueryVotesResponse;
                toJSON(message: _124.QueryVotesResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _124.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _124.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryParamsRequest;
                fromJSON(object: any): _124.QueryParamsRequest;
                toJSON(message: _124.QueryParamsRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _124.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _124.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryParamsResponse;
                fromJSON(object: any): _124.QueryParamsResponse;
                toJSON(message: _124.QueryParamsResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _124.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _124.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryDepositRequest;
                fromJSON(object: any): _124.QueryDepositRequest;
                toJSON(message: _124.QueryDepositRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _124.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _124.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryDepositResponse;
                fromJSON(object: any): _124.QueryDepositResponse;
                toJSON(message: _124.QueryDepositResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _124.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _124.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryDepositsRequest;
                fromJSON(object: any): _124.QueryDepositsRequest;
                toJSON(message: _124.QueryDepositsRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _124.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _124.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryDepositsResponse;
                fromJSON(object: any): _124.QueryDepositsResponse;
                toJSON(message: _124.QueryDepositsResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _124.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _124.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryTallyResultRequest;
                fromJSON(object: any): _124.QueryTallyResultRequest;
                toJSON(message: _124.QueryTallyResultRequest): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _124.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _124.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryTallyResultResponse;
                fromJSON(object: any): _124.QueryTallyResultResponse;
                toJSON(message: _124.QueryTallyResultResponse): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _124.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _122.VoteOption;
            voteOptionToJSON(object: _122.VoteOption): string;
            proposalStatusFromJSON(object: any): _122.ProposalStatus;
            proposalStatusToJSON(object: _122.ProposalStatus): string;
            VoteOption: typeof _122.VoteOption;
            ProposalStatus: typeof _122.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _122.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.WeightedVoteOption;
                fromJSON(object: any): _122.WeightedVoteOption;
                toJSON(message: _122.WeightedVoteOption): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _122.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _122.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Deposit;
                fromJSON(object: any): _122.Deposit;
                toJSON(message: _122.Deposit): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _122.Deposit;
            };
            Proposal: {
                encode(message: _122.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Proposal;
                fromJSON(object: any): _122.Proposal;
                toJSON(message: _122.Proposal): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _122.Proposal;
            };
            TallyResult: {
                encode(message: _122.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.TallyResult;
                fromJSON(object: any): _122.TallyResult;
                toJSON(message: _122.TallyResult): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _122.TallyResult;
            };
            Vote: {
                encode(message: _122.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Vote;
                fromJSON(object: any): _122.Vote;
                toJSON(message: _122.Vote): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _122.Vote;
            };
            DepositParams: {
                encode(message: _122.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.DepositParams;
                fromJSON(object: any): _122.DepositParams;
                toJSON(message: _122.DepositParams): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _122.DepositParams;
            };
            VotingParams: {
                encode(message: _122.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.VotingParams;
                fromJSON(object: any): _122.VotingParams;
                toJSON(message: _122.VotingParams): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _122.VotingParams;
            };
            TallyParams: {
                encode(message: _122.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.TallyParams;
                fromJSON(object: any): _122.TallyParams;
                toJSON(message: _122.TallyParams): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _122.TallyParams;
            };
            GenesisState: {
                encode(message: _120.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.GenesisState;
                fromJSON(object: any): _120.GenesisState;
                toJSON(message: _120.GenesisState): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _120.GenesisState;
            };
        };
        const v1beta1: {
            MsgSubmitProposal: {
                encode(message: _137.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgSubmitProposal;
                fromJSON(object: any): _137.MsgSubmitProposal;
                toJSON(message: _137.MsgSubmitProposal): unknown;
                fromPartial<I extends unknown>(object: I): _137.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _137.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgSubmitProposalResponse;
                fromJSON(object: any): _137.MsgSubmitProposalResponse;
                toJSON(message: _137.MsgSubmitProposalResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _137.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _137.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgVote;
                fromJSON(object: any): _137.MsgVote;
                toJSON(message: _137.MsgVote): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _137.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _137.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgVoteResponse;
                fromJSON(_: any): _137.MsgVoteResponse;
                toJSON(_: _137.MsgVoteResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _137.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _137.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgVoteWeighted;
                fromJSON(object: any): _137.MsgVoteWeighted;
                toJSON(message: _137.MsgVoteWeighted): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _137.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _137.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgVoteWeightedResponse;
                fromJSON(_: any): _137.MsgVoteWeightedResponse;
                toJSON(_: _137.MsgVoteWeightedResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _137.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _137.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgDeposit;
                fromJSON(object: any): _137.MsgDeposit;
                toJSON(message: _137.MsgDeposit): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _137.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _137.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgDepositResponse;
                fromJSON(_: any): _137.MsgDepositResponse;
                toJSON(_: _137.MsgDepositResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _137.MsgDepositResponse;
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _137.MsgSubmitProposal) => {
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
                    }) => _137.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _137.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _137.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _137.MsgVoteWeighted) => {
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
                    }) => _137.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _137.MsgDeposit) => {
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
                    }) => _137.MsgDeposit;
                };
            };
            encoded: {
                submitProposal(value: _137.MsgSubmitProposal): {
                    type_url: string;
                    value: Uint8Array;
                };
                vote(value: _137.MsgVote): {
                    type_url: string;
                    value: Uint8Array;
                };
                voteWeighted(value: _137.MsgVoteWeighted): {
                    type_url: string;
                    value: Uint8Array;
                };
                deposit(value: _137.MsgDeposit): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            messages: {
                submitProposal(value: _137.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _137.MsgSubmitProposal;
                };
                vote(value: _137.MsgVote): {
                    typeUrl: string;
                    value: _137.MsgVote;
                };
                voteWeighted(value: _137.MsgVoteWeighted): {
                    typeUrl: string;
                    value: _137.MsgVoteWeighted;
                };
                deposit(value: _137.MsgDeposit): {
                    typeUrl: string;
                    value: _137.MsgDeposit;
                };
            };
            QueryProposalRequest: {
                encode(message: _135.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryProposalRequest;
                fromJSON(object: any): _135.QueryProposalRequest;
                toJSON(message: _135.QueryProposalRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _135.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _135.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryProposalResponse;
                fromJSON(object: any): _135.QueryProposalResponse;
                toJSON(message: _135.QueryProposalResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _135.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _135.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryProposalsRequest;
                fromJSON(object: any): _135.QueryProposalsRequest;
                toJSON(message: _135.QueryProposalsRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _135.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _135.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryProposalsResponse;
                fromJSON(object: any): _135.QueryProposalsResponse;
                toJSON(message: _135.QueryProposalsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _135.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _135.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryVoteRequest;
                fromJSON(object: any): _135.QueryVoteRequest;
                toJSON(message: _135.QueryVoteRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _135.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _135.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryVoteResponse;
                fromJSON(object: any): _135.QueryVoteResponse;
                toJSON(message: _135.QueryVoteResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _135.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _135.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryVotesRequest;
                fromJSON(object: any): _135.QueryVotesRequest;
                toJSON(message: _135.QueryVotesRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _135.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _135.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryVotesResponse;
                fromJSON(object: any): _135.QueryVotesResponse;
                toJSON(message: _135.QueryVotesResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _135.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _135.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryParamsRequest;
                fromJSON(object: any): _135.QueryParamsRequest;
                toJSON(message: _135.QueryParamsRequest): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _135.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _135.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryParamsResponse;
                fromJSON(object: any): _135.QueryParamsResponse;
                toJSON(message: _135.QueryParamsResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _135.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _135.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryDepositRequest;
                fromJSON(object: any): _135.QueryDepositRequest;
                toJSON(message: _135.QueryDepositRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _135.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _135.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryDepositResponse;
                fromJSON(object: any): _135.QueryDepositResponse;
                toJSON(message: _135.QueryDepositResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _135.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _135.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryDepositsRequest;
                fromJSON(object: any): _135.QueryDepositsRequest;
                toJSON(message: _135.QueryDepositsRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _135.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _135.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryDepositsResponse;
                fromJSON(object: any): _135.QueryDepositsResponse;
                toJSON(message: _135.QueryDepositsResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _135.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _135.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryTallyResultRequest;
                fromJSON(object: any): _135.QueryTallyResultRequest;
                toJSON(message: _135.QueryTallyResultRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _135.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _135.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryTallyResultResponse;
                fromJSON(object: any): _135.QueryTallyResultResponse;
                toJSON(message: _135.QueryTallyResultResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _135.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _133.VoteOption;
            voteOptionToJSON(object: _133.VoteOption): string;
            proposalStatusFromJSON(object: any): _133.ProposalStatus;
            proposalStatusToJSON(object: _133.ProposalStatus): string;
            VoteOption: typeof _133.VoteOption;
            ProposalStatus: typeof _133.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _133.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.WeightedVoteOption;
                fromJSON(object: any): _133.WeightedVoteOption;
                toJSON(message: _133.WeightedVoteOption): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _133.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _133.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.TextProposal;
                fromJSON(object: any): _133.TextProposal;
                toJSON(message: _133.TextProposal): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _133.TextProposal;
            };
            Deposit: {
                encode(message: _133.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Deposit;
                fromJSON(object: any): _133.Deposit;
                toJSON(message: _133.Deposit): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _133.Deposit;
            };
            Proposal: {
                encode(message: _133.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Proposal;
                fromJSON(object: any): _133.Proposal;
                toJSON(message: _133.Proposal): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _133.Proposal;
            };
            TallyResult: {
                encode(message: _133.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.TallyResult;
                fromJSON(object: any): _133.TallyResult;
                toJSON(message: _133.TallyResult): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _133.TallyResult;
            };
            Vote: {
                encode(message: _133.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Vote;
                fromJSON(object: any): _133.Vote;
                toJSON(message: _133.Vote): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _133.Vote;
            };
            DepositParams: {
                encode(message: _133.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.DepositParams;
                fromJSON(object: any): _133.DepositParams;
                toJSON(message: _133.DepositParams): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _133.DepositParams;
            };
            VotingParams: {
                encode(message: _133.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.VotingParams;
                fromJSON(object: any): _133.VotingParams;
                toJSON(message: _133.VotingParams): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _133.VotingParams;
            };
            TallyParams: {
                encode(message: _133.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.TallyParams;
                fromJSON(object: any): _133.TallyParams;
                toJSON(message: _133.TallyParams): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _133.TallyParams;
            };
            GenesisState: {
                encode(message: _131.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.GenesisState;
                fromJSON(object: any): _131.GenesisState;
                toJSON(message: _131.GenesisState): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _131.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            voteOptionFromJSON(object: any): _153.VoteOption;
            voteOptionToJSON(object: _153.VoteOption): string;
            proposalStatusFromJSON(object: any): _153.ProposalStatus;
            proposalStatusToJSON(object: _153.ProposalStatus): string;
            proposalResultFromJSON(object: any): _153.ProposalResult;
            proposalResultToJSON(object: _153.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _153.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _153.ProposalExecutorResult): string;
            VoteOption: typeof _153.VoteOption;
            ProposalStatus: typeof _153.ProposalStatus;
            ProposalResult: typeof _153.ProposalResult;
            ProposalExecutorResult: typeof _153.ProposalExecutorResult;
            Member: {
                encode(message: _153.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Member;
                fromJSON(object: any): _153.Member;
                toJSON(message: _153.Member): unknown;
                fromPartial<I extends unknown>(object: I): _153.Member;
            };
            Members: {
                encode(message: _153.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Members;
                fromJSON(object: any): _153.Members;
                toJSON(message: _153.Members): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _153.Members;
            };
            ThresholdDecisionPolicy: {
                encode(message: _153.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.ThresholdDecisionPolicy;
                fromJSON(object: any): _153.ThresholdDecisionPolicy;
                toJSON(message: _153.ThresholdDecisionPolicy): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _153.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _153.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.PercentageDecisionPolicy;
                fromJSON(object: any): _153.PercentageDecisionPolicy;
                toJSON(message: _153.PercentageDecisionPolicy): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _153.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _153.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.DecisionPolicyWindows;
                fromJSON(object: any): _153.DecisionPolicyWindows;
                toJSON(message: _153.DecisionPolicyWindows): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _153.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _153.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.GroupInfo;
                fromJSON(object: any): _153.GroupInfo;
                toJSON(message: _153.GroupInfo): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _153.GroupInfo;
            };
            GroupMember: {
                encode(message: _153.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.GroupMember;
                fromJSON(object: any): _153.GroupMember;
                toJSON(message: _153.GroupMember): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _153.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _153.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.GroupPolicyInfo;
                fromJSON(object: any): _153.GroupPolicyInfo;
                toJSON(message: _153.GroupPolicyInfo): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _153.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _153.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Proposal;
                fromJSON(object: any): _153.Proposal;
                toJSON(message: _153.Proposal): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _153.Proposal;
            };
            TallyResult: {
                encode(message: _153.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.TallyResult;
                fromJSON(object: any): _153.TallyResult;
                toJSON(message: _153.TallyResult): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _153.TallyResult;
            };
            Vote: {
                encode(message: _153.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Vote;
                fromJSON(object: any): _153.Vote;
                toJSON(message: _153.Vote): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _153.Vote;
            };
            execFromJSON(object: any): _148.Exec;
            execToJSON(object: _148.Exec): string;
            Exec: typeof _148.Exec;
            MsgCreateGroup: {
                encode(message: _148.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgCreateGroup;
                fromJSON(object: any): _148.MsgCreateGroup;
                toJSON(message: _148.MsgCreateGroup): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _148.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _148.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgCreateGroupResponse;
                fromJSON(object: any): _148.MsgCreateGroupResponse;
                toJSON(message: _148.MsgCreateGroupResponse): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _148.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _148.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateGroupMembers;
                fromJSON(object: any): _148.MsgUpdateGroupMembers;
                toJSON(message: _148.MsgUpdateGroupMembers): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _148.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _148.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _148.MsgUpdateGroupMembersResponse;
                toJSON(_: _148.MsgUpdateGroupMembersResponse): unknown;
                fromPartial<I_14 extends unknown>(_: I_14): _148.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _148.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateGroupAdmin;
                fromJSON(object: any): _148.MsgUpdateGroupAdmin;
                toJSON(message: _148.MsgUpdateGroupAdmin): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _148.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _148.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _148.MsgUpdateGroupAdminResponse;
                toJSON(_: _148.MsgUpdateGroupAdminResponse): unknown;
                fromPartial<I_16 extends unknown>(_: I_16): _148.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _148.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateGroupMetadata;
                fromJSON(object: any): _148.MsgUpdateGroupMetadata;
                toJSON(message: _148.MsgUpdateGroupMetadata): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _148.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _148.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _148.MsgUpdateGroupMetadataResponse;
                toJSON(_: _148.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial<I_18 extends unknown>(_: I_18): _148.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _148.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgCreateGroupPolicy;
                fromJSON(object: any): _148.MsgCreateGroupPolicy;
                toJSON(message: _148.MsgCreateGroupPolicy): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _148.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _148.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _148.MsgCreateGroupPolicyResponse;
                toJSON(message: _148.MsgCreateGroupPolicyResponse): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _148.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _148.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _148.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _148.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _148.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _148.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _148.MsgCreateGroupWithPolicy;
                toJSON(message: _148.MsgCreateGroupWithPolicy): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _148.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _148.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _148.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _148.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _148.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _148.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _148.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _148.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial<I_24 extends unknown>(_: I_24): _148.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _148.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _148.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _148.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _148.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _148.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _148.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _148.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial<I_26 extends unknown>(_: I_26): _148.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _148.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _148.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _148.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _148.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _148.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _148.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _148.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial<I_28 extends unknown>(_: I_28): _148.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _148.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgSubmitProposal;
                fromJSON(object: any): _148.MsgSubmitProposal;
                toJSON(message: _148.MsgSubmitProposal): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _148.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _148.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgSubmitProposalResponse;
                fromJSON(object: any): _148.MsgSubmitProposalResponse;
                toJSON(message: _148.MsgSubmitProposalResponse): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _148.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _148.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgWithdrawProposal;
                fromJSON(object: any): _148.MsgWithdrawProposal;
                toJSON(message: _148.MsgWithdrawProposal): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _148.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _148.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgWithdrawProposalResponse;
                fromJSON(_: any): _148.MsgWithdrawProposalResponse;
                toJSON(_: _148.MsgWithdrawProposalResponse): unknown;
                fromPartial<I_32 extends unknown>(_: I_32): _148.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _148.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgVote;
                fromJSON(object: any): _148.MsgVote;
                toJSON(message: _148.MsgVote): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _148.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _148.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgVoteResponse;
                fromJSON(_: any): _148.MsgVoteResponse;
                toJSON(_: _148.MsgVoteResponse): unknown;
                fromPartial<I_34 extends unknown>(_: I_34): _148.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _148.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgExec;
                fromJSON(object: any): _148.MsgExec;
                toJSON(message: _148.MsgExec): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _148.MsgExec;
            };
            MsgExecResponse: {
                encode(_: _148.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgExecResponse;
                fromJSON(_: any): _148.MsgExecResponse;
                toJSON(_: _148.MsgExecResponse): unknown;
                fromPartial<I_36 extends unknown>(_: I_36): _148.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _148.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgLeaveGroup;
                fromJSON(object: any): _148.MsgLeaveGroup;
                toJSON(message: _148.MsgLeaveGroup): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _148.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _148.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgLeaveGroupResponse;
                fromJSON(_: any): _148.MsgLeaveGroupResponse;
                toJSON(_: _148.MsgLeaveGroupResponse): unknown;
                fromPartial<I_38 extends unknown>(_: I_38): _148.MsgLeaveGroupResponse;
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _148.MsgCreateGroup) => {
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
                    }) => _148.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _148.MsgUpdateGroupMembers) => {
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
                    }) => _148.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _148.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _148.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _148.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _148.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _148.MsgCreateGroupPolicy) => {
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
                    }) => _148.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _148.MsgCreateGroupWithPolicy) => {
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
                    }) => _148.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, address, newAdmin }: _148.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, address, new_admin }: {
                        admin: string;
                        address: string;
                        new_admin: string;
                    }) => _148.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, address, decisionPolicy }: _148.MsgUpdateGroupPolicyDecisionPolicy) => {
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
                    }) => _148.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, address, metadata }: _148.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, address, metadata }: {
                        admin: string;
                        address: string;
                        metadata: string;
                    }) => _148.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ address, proposers, metadata, messages, exec }: _148.MsgSubmitProposal) => {
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
                    }) => _148.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _148.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _148.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _148.MsgVote) => {
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
                    }) => _148.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, signer }: _148.MsgExec) => {
                        proposal_id: string;
                        signer: string;
                    };
                    fromAmino: ({ proposal_id, signer }: {
                        proposal_id: string;
                        signer: string;
                    }) => _148.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _148.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _148.MsgLeaveGroup;
                };
            };
            encoded: {
                createGroup(value: _148.MsgCreateGroup): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupMembers(value: _148.MsgUpdateGroupMembers): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupAdmin(value: _148.MsgUpdateGroupAdmin): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupMetadata(value: _148.MsgUpdateGroupMetadata): {
                    type_url: string;
                    value: Uint8Array;
                };
                createGroupPolicy(value: _148.MsgCreateGroupPolicy): {
                    type_url: string;
                    value: Uint8Array;
                };
                createGroupWithPolicy(value: _148.MsgCreateGroupWithPolicy): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupPolicyAdmin(value: _148.MsgUpdateGroupPolicyAdmin): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupPolicyDecisionPolicy(value: _148.MsgUpdateGroupPolicyDecisionPolicy): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupPolicyMetadata(value: _148.MsgUpdateGroupPolicyMetadata): {
                    type_url: string;
                    value: Uint8Array;
                };
                submitProposal(value: _148.MsgSubmitProposal): {
                    type_url: string;
                    value: Uint8Array;
                };
                withdrawProposal(value: _148.MsgWithdrawProposal): {
                    type_url: string;
                    value: Uint8Array;
                };
                vote(value: _148.MsgVote): {
                    type_url: string;
                    value: Uint8Array;
                };
                exec(value: _148.MsgExec): {
                    type_url: string;
                    value: Uint8Array;
                };
                leaveGroup(value: _148.MsgLeaveGroup): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            messages: {
                createGroup(value: _148.MsgCreateGroup): {
                    typeUrl: string;
                    value: _148.MsgCreateGroup;
                };
                updateGroupMembers(value: _148.MsgUpdateGroupMembers): {
                    typeUrl: string;
                    value: _148.MsgUpdateGroupMembers;
                };
                updateGroupAdmin(value: _148.MsgUpdateGroupAdmin): {
                    typeUrl: string;
                    value: _148.MsgUpdateGroupAdmin;
                };
                updateGroupMetadata(value: _148.MsgUpdateGroupMetadata): {
                    typeUrl: string;
                    value: _148.MsgUpdateGroupMetadata;
                };
                createGroupPolicy(value: _148.MsgCreateGroupPolicy): {
                    typeUrl: string;
                    value: _148.MsgCreateGroupPolicy;
                };
                createGroupWithPolicy(value: _148.MsgCreateGroupWithPolicy): {
                    typeUrl: string;
                    value: _148.MsgCreateGroupWithPolicy;
                };
                updateGroupPolicyAdmin(value: _148.MsgUpdateGroupPolicyAdmin): {
                    typeUrl: string;
                    value: _148.MsgUpdateGroupPolicyAdmin;
                };
                updateGroupPolicyDecisionPolicy(value: _148.MsgUpdateGroupPolicyDecisionPolicy): {
                    typeUrl: string;
                    value: _148.MsgUpdateGroupPolicyDecisionPolicy;
                };
                updateGroupPolicyMetadata(value: _148.MsgUpdateGroupPolicyMetadata): {
                    typeUrl: string;
                    value: _148.MsgUpdateGroupPolicyMetadata;
                };
                submitProposal(value: _148.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _148.MsgSubmitProposal;
                };
                withdrawProposal(value: _148.MsgWithdrawProposal): {
                    typeUrl: string;
                    value: _148.MsgWithdrawProposal;
                };
                vote(value: _148.MsgVote): {
                    typeUrl: string;
                    value: _148.MsgVote;
                };
                exec(value: _148.MsgExec): {
                    typeUrl: string;
                    value: _148.MsgExec;
                };
                leaveGroup(value: _148.MsgLeaveGroup): {
                    typeUrl: string;
                    value: _148.MsgLeaveGroup;
                };
            };
            QueryGroupInfoRequest: {
                encode(message: _146.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryGroupInfoRequest;
                fromJSON(object: any): _146.QueryGroupInfoRequest;
                toJSON(message: _146.QueryGroupInfoRequest): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _146.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _146.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryGroupInfoResponse;
                fromJSON(object: any): _146.QueryGroupInfoResponse;
                toJSON(message: _146.QueryGroupInfoResponse): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _146.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _146.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _146.QueryGroupPolicyInfoRequest;
                toJSON(message: _146.QueryGroupPolicyInfoRequest): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _146.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _146.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _146.QueryGroupPolicyInfoResponse;
                toJSON(message: _146.QueryGroupPolicyInfoResponse): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _146.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _146.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryGroupMembersRequest;
                fromJSON(object: any): _146.QueryGroupMembersRequest;
                toJSON(message: _146.QueryGroupMembersRequest): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _146.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _146.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryGroupMembersResponse;
                fromJSON(object: any): _146.QueryGroupMembersResponse;
                toJSON(message: _146.QueryGroupMembersResponse): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _146.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _146.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryGroupsByAdminRequest;
                fromJSON(object: any): _146.QueryGroupsByAdminRequest;
                toJSON(message: _146.QueryGroupsByAdminRequest): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _146.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _146.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryGroupsByAdminResponse;
                fromJSON(object: any): _146.QueryGroupsByAdminResponse;
                toJSON(message: _146.QueryGroupsByAdminResponse): unknown;
                fromPartial<I_46 extends unknown>(object: I_46): _146.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _146.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _146.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _146.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial<I_47 extends unknown>(object: I_47): _146.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _146.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _146.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _146.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial<I_48 extends unknown>(object: I_48): _146.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _146.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _146.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _146.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial<I_49 extends unknown>(object: I_49): _146.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _146.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _146.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _146.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial<I_50 extends unknown>(object: I_50): _146.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _146.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryProposalRequest;
                fromJSON(object: any): _146.QueryProposalRequest;
                toJSON(message: _146.QueryProposalRequest): unknown;
                fromPartial<I_51 extends unknown>(object: I_51): _146.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _146.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryProposalResponse;
                fromJSON(object: any): _146.QueryProposalResponse;
                toJSON(message: _146.QueryProposalResponse): unknown;
                fromPartial<I_52 extends unknown>(object: I_52): _146.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _146.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _146.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _146.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial<I_53 extends unknown>(object: I_53): _146.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _146.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _146.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _146.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial<I_54 extends unknown>(object: I_54): _146.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _146.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _146.QueryVoteByProposalVoterRequest;
                toJSON(message: _146.QueryVoteByProposalVoterRequest): unknown;
                fromPartial<I_55 extends unknown>(object: I_55): _146.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _146.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _146.QueryVoteByProposalVoterResponse;
                toJSON(message: _146.QueryVoteByProposalVoterResponse): unknown;
                fromPartial<I_56 extends unknown>(object: I_56): _146.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _146.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryVotesByProposalRequest;
                fromJSON(object: any): _146.QueryVotesByProposalRequest;
                toJSON(message: _146.QueryVotesByProposalRequest): unknown;
                fromPartial<I_57 extends unknown>(object: I_57): _146.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _146.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryVotesByProposalResponse;
                fromJSON(object: any): _146.QueryVotesByProposalResponse;
                toJSON(message: _146.QueryVotesByProposalResponse): unknown;
                fromPartial<I_58 extends unknown>(object: I_58): _146.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _146.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryVotesByVoterRequest;
                fromJSON(object: any): _146.QueryVotesByVoterRequest;
                toJSON(message: _146.QueryVotesByVoterRequest): unknown;
                fromPartial<I_59 extends unknown>(object: I_59): _146.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _146.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryVotesByVoterResponse;
                fromJSON(object: any): _146.QueryVotesByVoterResponse;
                toJSON(message: _146.QueryVotesByVoterResponse): unknown;
                fromPartial<I_60 extends unknown>(object: I_60): _146.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _146.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryGroupsByMemberRequest;
                fromJSON(object: any): _146.QueryGroupsByMemberRequest;
                toJSON(message: _146.QueryGroupsByMemberRequest): unknown;
                fromPartial<I_61 extends unknown>(object: I_61): _146.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _146.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryGroupsByMemberResponse;
                fromJSON(object: any): _146.QueryGroupsByMemberResponse;
                toJSON(message: _146.QueryGroupsByMemberResponse): unknown;
                fromPartial<I_62 extends unknown>(object: I_62): _146.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _146.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryTallyResultRequest;
                fromJSON(object: any): _146.QueryTallyResultRequest;
                toJSON(message: _146.QueryTallyResultRequest): unknown;
                fromPartial<I_63 extends unknown>(object: I_63): _146.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _146.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryTallyResultResponse;
                fromJSON(object: any): _146.QueryTallyResultResponse;
                toJSON(message: _146.QueryTallyResultResponse): unknown;
                fromPartial<I_64 extends unknown>(object: I_64): _146.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _144.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.GenesisState;
                fromJSON(object: any): _144.GenesisState;
                toJSON(message: _144.GenesisState): unknown;
                fromPartial<I_65 extends unknown>(object: I_65): _144.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _142.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.EventCreateGroup;
                fromJSON(object: any): _142.EventCreateGroup;
                toJSON(message: _142.EventCreateGroup): unknown;
                fromPartial<I_66 extends unknown>(object: I_66): _142.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _142.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.EventUpdateGroup;
                fromJSON(object: any): _142.EventUpdateGroup;
                toJSON(message: _142.EventUpdateGroup): unknown;
                fromPartial<I_67 extends unknown>(object: I_67): _142.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _142.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.EventCreateGroupPolicy;
                fromJSON(object: any): _142.EventCreateGroupPolicy;
                toJSON(message: _142.EventCreateGroupPolicy): unknown;
                fromPartial<I_68 extends unknown>(object: I_68): _142.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _142.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.EventUpdateGroupPolicy;
                fromJSON(object: any): _142.EventUpdateGroupPolicy;
                toJSON(message: _142.EventUpdateGroupPolicy): unknown;
                fromPartial<I_69 extends unknown>(object: I_69): _142.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _142.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.EventSubmitProposal;
                fromJSON(object: any): _142.EventSubmitProposal;
                toJSON(message: _142.EventSubmitProposal): unknown;
                fromPartial<I_70 extends unknown>(object: I_70): _142.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _142.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.EventWithdrawProposal;
                fromJSON(object: any): _142.EventWithdrawProposal;
                toJSON(message: _142.EventWithdrawProposal): unknown;
                fromPartial<I_71 extends unknown>(object: I_71): _142.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _142.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.EventVote;
                fromJSON(object: any): _142.EventVote;
                toJSON(message: _142.EventVote): unknown;
                fromPartial<I_72 extends unknown>(object: I_72): _142.EventVote;
            };
            EventExec: {
                encode(message: _142.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.EventExec;
                fromJSON(object: any): _142.EventExec;
                toJSON(message: _142.EventExec): unknown;
                fromPartial<I_73 extends unknown>(object: I_73): _142.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _142.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.EventLeaveGroup;
                fromJSON(object: any): _142.EventLeaveGroup;
                toJSON(message: _142.EventLeaveGroup): unknown;
                fromPartial<I_74 extends unknown>(object: I_74): _142.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _159.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryParamsRequest;
                fromJSON(_: any): _159.QueryParamsRequest;
                toJSON(_: _159.QueryParamsRequest): unknown;
                fromPartial<I extends unknown>(_: I): _159.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _159.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryParamsResponse;
                fromJSON(object: any): _159.QueryParamsResponse;
                toJSON(message: _159.QueryParamsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _159.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _159.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryInflationRequest;
                fromJSON(_: any): _159.QueryInflationRequest;
                toJSON(_: _159.QueryInflationRequest): unknown;
                fromPartial<I_2 extends unknown>(_: I_2): _159.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _159.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryInflationResponse;
                fromJSON(object: any): _159.QueryInflationResponse;
                toJSON(message: _159.QueryInflationResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _159.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _159.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _159.QueryAnnualProvisionsRequest;
                toJSON(_: _159.QueryAnnualProvisionsRequest): unknown;
                fromPartial<I_4 extends unknown>(_: I_4): _159.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _159.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _159.QueryAnnualProvisionsResponse;
                toJSON(message: _159.QueryAnnualProvisionsResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _159.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _157.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Minter;
                fromJSON(object: any): _157.Minter;
                toJSON(message: _157.Minter): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _157.Minter;
            };
            Params: {
                encode(message: _157.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Params;
                fromJSON(object: any): _157.Params;
                toJSON(message: _157.Params): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _157.Params;
            };
            GenesisState: {
                encode(message: _155.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.GenesisState;
                fromJSON(object: any): _155.GenesisState;
                toJSON(message: _155.GenesisState): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _155.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgSend: {
                encode(message: _171.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgSend;
                fromJSON(object: any): _171.MsgSend;
                toJSON(message: _171.MsgSend): unknown;
                fromPartial<I extends unknown>(object: I): _171.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _171.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgSendResponse;
                fromJSON(_: any): _171.MsgSendResponse;
                toJSON(_: _171.MsgSendResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _171.MsgSendResponse;
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _171.MsgSend) => {
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
                    }) => _171.MsgSend;
                };
            };
            encoded: {
                send(value: _171.MsgSend): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            messages: {
                send(value: _171.MsgSend): {
                    typeUrl: string;
                    value: _171.MsgSend;
                };
            };
            QueryBalanceRequest: {
                encode(message: _169.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryBalanceRequest;
                fromJSON(object: any): _169.QueryBalanceRequest;
                toJSON(message: _169.QueryBalanceRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _169.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _169.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryBalanceResponse;
                fromJSON(object: any): _169.QueryBalanceResponse;
                toJSON(message: _169.QueryBalanceResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _169.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _169.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryOwnerRequest;
                fromJSON(object: any): _169.QueryOwnerRequest;
                toJSON(message: _169.QueryOwnerRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _169.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _169.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryOwnerResponse;
                fromJSON(object: any): _169.QueryOwnerResponse;
                toJSON(message: _169.QueryOwnerResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _169.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _169.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QuerySupplyRequest;
                fromJSON(object: any): _169.QuerySupplyRequest;
                toJSON(message: _169.QuerySupplyRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _169.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _169.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QuerySupplyResponse;
                fromJSON(object: any): _169.QuerySupplyResponse;
                toJSON(message: _169.QuerySupplyResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _169.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _169.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryNFTsRequest;
                fromJSON(object: any): _169.QueryNFTsRequest;
                toJSON(message: _169.QueryNFTsRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _169.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _169.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryNFTsResponse;
                fromJSON(object: any): _169.QueryNFTsResponse;
                toJSON(message: _169.QueryNFTsResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _169.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _169.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryNFTRequest;
                fromJSON(object: any): _169.QueryNFTRequest;
                toJSON(message: _169.QueryNFTRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _169.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _169.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryNFTResponse;
                fromJSON(object: any): _169.QueryNFTResponse;
                toJSON(message: _169.QueryNFTResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _169.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _169.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryClassRequest;
                fromJSON(object: any): _169.QueryClassRequest;
                toJSON(message: _169.QueryClassRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _169.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _169.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryClassResponse;
                fromJSON(object: any): _169.QueryClassResponse;
                toJSON(message: _169.QueryClassResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _169.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _169.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryClassesRequest;
                fromJSON(object: any): _169.QueryClassesRequest;
                toJSON(message: _169.QueryClassesRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _169.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _169.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.QueryClassesResponse;
                fromJSON(object: any): _169.QueryClassesResponse;
                toJSON(message: _169.QueryClassesResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _169.QueryClassesResponse;
            };
            Class: {
                encode(message: _167.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.Class;
                fromJSON(object: any): _167.Class;
                toJSON(message: _167.Class): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _167.Class;
            };
            NFT: {
                encode(message: _167.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.NFT;
                fromJSON(object: any): _167.NFT;
                toJSON(message: _167.NFT): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _167.NFT;
            };
            GenesisState: {
                encode(message: _165.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.GenesisState;
                fromJSON(object: any): _165.GenesisState;
                toJSON(message: _165.GenesisState): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _165.GenesisState;
            };
            Entry: {
                encode(message: _165.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.Entry;
                fromJSON(object: any): _165.Entry;
                toJSON(message: _165.Entry): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _165.Entry;
            };
            EventSend: {
                encode(message: _163.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EventSend;
                fromJSON(object: any): _163.EventSend;
                toJSON(message: _163.EventSend): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _163.EventSend;
            };
            EventMint: {
                encode(message: _163.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EventMint;
                fromJSON(object: any): _163.EventMint;
                toJSON(message: _163.EventMint): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _163.EventMint;
            };
            EventBurn: {
                encode(message: _163.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EventBurn;
                fromJSON(object: any): _163.EventBurn;
                toJSON(message: _163.EventBurn): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _163.EventBurn;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _176.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.TableDescriptor;
                fromJSON(object: any): _176.TableDescriptor;
                toJSON(message: _176.TableDescriptor): unknown;
                fromPartial<I extends unknown>(object: I): _176.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _176.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.PrimaryKeyDescriptor;
                fromJSON(object: any): _176.PrimaryKeyDescriptor;
                toJSON(message: _176.PrimaryKeyDescriptor): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _176.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _176.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.SecondaryIndexDescriptor;
                fromJSON(object: any): _176.SecondaryIndexDescriptor;
                toJSON(message: _176.SecondaryIndexDescriptor): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _176.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _176.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.SingletonDescriptor;
                fromJSON(object: any): _176.SingletonDescriptor;
                toJSON(message: _176.SingletonDescriptor): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _176.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _178.StorageType;
            storageTypeToJSON(object: _178.StorageType): string;
            StorageType: typeof _178.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _178.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.ModuleSchemaDescriptor;
                fromJSON(object: any): _178.ModuleSchemaDescriptor;
                toJSON(message: _178.ModuleSchemaDescriptor): unknown;
                fromPartial<I extends unknown>(object: I): _178.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _178.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _178.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _178.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _178.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryParamsRequest: {
                encode(message: _182.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryParamsRequest;
                fromJSON(object: any): _182.QueryParamsRequest;
                toJSON(message: _182.QueryParamsRequest): unknown;
                fromPartial<I extends unknown>(object: I): _182.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _182.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryParamsResponse;
                fromJSON(object: any): _182.QueryParamsResponse;
                toJSON(message: _182.QueryParamsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _182.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _182.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QuerySubspacesRequest;
                fromJSON(_: any): _182.QuerySubspacesRequest;
                toJSON(_: _182.QuerySubspacesRequest): unknown;
                fromPartial<I_2 extends unknown>(_: I_2): _182.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _182.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QuerySubspacesResponse;
                fromJSON(object: any): _182.QuerySubspacesResponse;
                toJSON(message: _182.QuerySubspacesResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _182.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _182.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.Subspace;
                fromJSON(object: any): _182.Subspace;
                toJSON(message: _182.Subspace): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _182.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _180.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ParameterChangeProposal;
                fromJSON(object: any): _180.ParameterChangeProposal;
                toJSON(message: _180.ParameterChangeProposal): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _180.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _180.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ParamChange;
                fromJSON(object: any): _180.ParamChange;
                toJSON(message: _180.ParamChange): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _180.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgUnjail: {
                encode(message: _190.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgUnjail;
                fromJSON(object: any): _190.MsgUnjail;
                toJSON(message: _190.MsgUnjail): unknown;
                fromPartial<I extends unknown>(object: I): _190.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _190.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgUnjailResponse;
                fromJSON(_: any): _190.MsgUnjailResponse;
                toJSON(_: _190.MsgUnjailResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _190.MsgUnjailResponse;
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _190.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _190.MsgUnjail;
                };
            };
            encoded: {
                unjail(value: _190.MsgUnjail): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            messages: {
                unjail(value: _190.MsgUnjail): {
                    typeUrl: string;
                    value: _190.MsgUnjail;
                };
            };
            ValidatorSigningInfo: {
                encode(message: _188.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.ValidatorSigningInfo;
                fromJSON(object: any): _188.ValidatorSigningInfo;
                toJSON(message: _188.ValidatorSigningInfo): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _188.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _188.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.Params;
                fromJSON(object: any): _188.Params;
                toJSON(message: _188.Params): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _188.Params;
            };
            QueryParamsRequest: {
                encode(_: _186.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryParamsRequest;
                fromJSON(_: any): _186.QueryParamsRequest;
                toJSON(_: _186.QueryParamsRequest): unknown;
                fromPartial<I_4 extends unknown>(_: I_4): _186.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _186.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryParamsResponse;
                fromJSON(object: any): _186.QueryParamsResponse;
                toJSON(message: _186.QueryParamsResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _186.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _186.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QuerySigningInfoRequest;
                fromJSON(object: any): _186.QuerySigningInfoRequest;
                toJSON(message: _186.QuerySigningInfoRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _186.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _186.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QuerySigningInfoResponse;
                fromJSON(object: any): _186.QuerySigningInfoResponse;
                toJSON(message: _186.QuerySigningInfoResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _186.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _186.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QuerySigningInfosRequest;
                fromJSON(object: any): _186.QuerySigningInfosRequest;
                toJSON(message: _186.QuerySigningInfosRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _186.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _186.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QuerySigningInfosResponse;
                fromJSON(object: any): _186.QuerySigningInfosResponse;
                toJSON(message: _186.QuerySigningInfosResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _186.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _184.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.GenesisState;
                fromJSON(object: any): _184.GenesisState;
                toJSON(message: _184.GenesisState): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _184.GenesisState;
            };
            SigningInfo: {
                encode(message: _184.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.SigningInfo;
                fromJSON(object: any): _184.SigningInfo;
                toJSON(message: _184.SigningInfo): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _184.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _184.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.ValidatorMissedBlocks;
                fromJSON(object: any): _184.ValidatorMissedBlocks;
                toJSON(message: _184.ValidatorMissedBlocks): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _184.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _184.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MissedBlock;
                fromJSON(object: any): _184.MissedBlock;
                toJSON(message: _184.MissedBlock): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _184.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgCreateValidator: {
                encode(message: _203.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgCreateValidator;
                fromJSON(object: any): _203.MsgCreateValidator;
                toJSON(message: _203.MsgCreateValidator): unknown;
                fromPartial<I extends unknown>(object: I): _203.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _203.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgCreateValidatorResponse;
                fromJSON(_: any): _203.MsgCreateValidatorResponse;
                toJSON(_: _203.MsgCreateValidatorResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _203.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _203.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgEditValidator;
                fromJSON(object: any): _203.MsgEditValidator;
                toJSON(message: _203.MsgEditValidator): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _203.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _203.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgEditValidatorResponse;
                fromJSON(_: any): _203.MsgEditValidatorResponse;
                toJSON(_: _203.MsgEditValidatorResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _203.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _203.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgDelegate;
                fromJSON(object: any): _203.MsgDelegate;
                toJSON(message: _203.MsgDelegate): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _203.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _203.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgDelegateResponse;
                fromJSON(_: any): _203.MsgDelegateResponse;
                toJSON(_: _203.MsgDelegateResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _203.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _203.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgBeginRedelegate;
                fromJSON(object: any): _203.MsgBeginRedelegate;
                toJSON(message: _203.MsgBeginRedelegate): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _203.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _203.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgBeginRedelegateResponse;
                fromJSON(object: any): _203.MsgBeginRedelegateResponse;
                toJSON(message: _203.MsgBeginRedelegateResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _203.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _203.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgUndelegate;
                fromJSON(object: any): _203.MsgUndelegate;
                toJSON(message: _203.MsgUndelegate): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _203.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _203.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgUndelegateResponse;
                fromJSON(object: any): _203.MsgUndelegateResponse;
                toJSON(message: _203.MsgUndelegateResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _203.MsgUndelegateResponse;
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _203.MsgCreateValidator) => {
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
                    }) => _203.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _203.MsgEditValidator) => {
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
                    }) => _203.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _203.MsgDelegate) => {
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
                    }) => _203.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _203.MsgBeginRedelegate) => {
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
                    }) => _203.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _203.MsgUndelegate) => {
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
                    }) => _203.MsgUndelegate;
                };
            };
            encoded: {
                createValidator(value: _203.MsgCreateValidator): {
                    type_url: string;
                    value: Uint8Array;
                };
                editValidator(value: _203.MsgEditValidator): {
                    type_url: string;
                    value: Uint8Array;
                };
                delegate(value: _203.MsgDelegate): {
                    type_url: string;
                    value: Uint8Array;
                };
                beginRedelegate(value: _203.MsgBeginRedelegate): {
                    type_url: string;
                    value: Uint8Array;
                };
                undelegate(value: _203.MsgUndelegate): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            messages: {
                createValidator(value: _203.MsgCreateValidator): {
                    typeUrl: string;
                    value: _203.MsgCreateValidator;
                };
                editValidator(value: _203.MsgEditValidator): {
                    typeUrl: string;
                    value: _203.MsgEditValidator;
                };
                delegate(value: _203.MsgDelegate): {
                    typeUrl: string;
                    value: _203.MsgDelegate;
                };
                beginRedelegate(value: _203.MsgBeginRedelegate): {
                    typeUrl: string;
                    value: _203.MsgBeginRedelegate;
                };
                undelegate(value: _203.MsgUndelegate): {
                    typeUrl: string;
                    value: _203.MsgUndelegate;
                };
            };
            bondStatusFromJSON(object: any): _201.BondStatus;
            bondStatusToJSON(object: _201.BondStatus): string;
            BondStatus: typeof _201.BondStatus;
            HistoricalInfo: {
                encode(message: _201.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.HistoricalInfo;
                fromJSON(object: any): _201.HistoricalInfo;
                toJSON(message: _201.HistoricalInfo): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _201.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _201.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.CommissionRates;
                fromJSON(object: any): _201.CommissionRates;
                toJSON(message: _201.CommissionRates): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _201.CommissionRates;
            };
            Commission: {
                encode(message: _201.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.Commission;
                fromJSON(object: any): _201.Commission;
                toJSON(message: _201.Commission): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _201.Commission;
            };
            Description: {
                encode(message: _201.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.Description;
                fromJSON(object: any): _201.Description;
                toJSON(message: _201.Description): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _201.Description;
            };
            Validator: {
                encode(message: _201.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.Validator;
                fromJSON(object: any): _201.Validator;
                toJSON(message: _201.Validator): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _201.Validator;
            };
            ValAddresses: {
                encode(message: _201.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.ValAddresses;
                fromJSON(object: any): _201.ValAddresses;
                toJSON(message: _201.ValAddresses): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _201.ValAddresses;
            };
            DVPair: {
                encode(message: _201.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.DVPair;
                fromJSON(object: any): _201.DVPair;
                toJSON(message: _201.DVPair): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _201.DVPair;
            };
            DVPairs: {
                encode(message: _201.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.DVPairs;
                fromJSON(object: any): _201.DVPairs;
                toJSON(message: _201.DVPairs): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _201.DVPairs;
            };
            DVVTriplet: {
                encode(message: _201.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.DVVTriplet;
                fromJSON(object: any): _201.DVVTriplet;
                toJSON(message: _201.DVVTriplet): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _201.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _201.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.DVVTriplets;
                fromJSON(object: any): _201.DVVTriplets;
                toJSON(message: _201.DVVTriplets): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _201.DVVTriplets;
            };
            Delegation: {
                encode(message: _201.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.Delegation;
                fromJSON(object: any): _201.Delegation;
                toJSON(message: _201.Delegation): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _201.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _201.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.UnbondingDelegation;
                fromJSON(object: any): _201.UnbondingDelegation;
                toJSON(message: _201.UnbondingDelegation): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _201.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _201.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.UnbondingDelegationEntry;
                fromJSON(object: any): _201.UnbondingDelegationEntry;
                toJSON(message: _201.UnbondingDelegationEntry): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _201.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _201.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.RedelegationEntry;
                fromJSON(object: any): _201.RedelegationEntry;
                toJSON(message: _201.RedelegationEntry): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _201.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _201.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.Redelegation;
                fromJSON(object: any): _201.Redelegation;
                toJSON(message: _201.Redelegation): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _201.Redelegation;
            };
            Params: {
                encode(message: _201.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.Params;
                fromJSON(object: any): _201.Params;
                toJSON(message: _201.Params): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _201.Params;
            };
            DelegationResponse: {
                encode(message: _201.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.DelegationResponse;
                fromJSON(object: any): _201.DelegationResponse;
                toJSON(message: _201.DelegationResponse): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _201.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _201.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.RedelegationEntryResponse;
                fromJSON(object: any): _201.RedelegationEntryResponse;
                toJSON(message: _201.RedelegationEntryResponse): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _201.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _201.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.RedelegationResponse;
                fromJSON(object: any): _201.RedelegationResponse;
                toJSON(message: _201.RedelegationResponse): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _201.RedelegationResponse;
            };
            Pool: {
                encode(message: _201.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.Pool;
                fromJSON(object: any): _201.Pool;
                toJSON(message: _201.Pool): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _201.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _199.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryValidatorsRequest;
                fromJSON(object: any): _199.QueryValidatorsRequest;
                toJSON(message: _199.QueryValidatorsRequest): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _199.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _199.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryValidatorsResponse;
                fromJSON(object: any): _199.QueryValidatorsResponse;
                toJSON(message: _199.QueryValidatorsResponse): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _199.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _199.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryValidatorRequest;
                fromJSON(object: any): _199.QueryValidatorRequest;
                toJSON(message: _199.QueryValidatorRequest): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _199.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _199.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryValidatorResponse;
                fromJSON(object: any): _199.QueryValidatorResponse;
                toJSON(message: _199.QueryValidatorResponse): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _199.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _199.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _199.QueryValidatorDelegationsRequest;
                toJSON(message: _199.QueryValidatorDelegationsRequest): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _199.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _199.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _199.QueryValidatorDelegationsResponse;
                toJSON(message: _199.QueryValidatorDelegationsResponse): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _199.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _199.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _199.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _199.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial<I_36 extends unknown>(object: I_36): _199.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _199.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _199.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _199.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _199.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _199.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryDelegationRequest;
                fromJSON(object: any): _199.QueryDelegationRequest;
                toJSON(message: _199.QueryDelegationRequest): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _199.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _199.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryDelegationResponse;
                fromJSON(object: any): _199.QueryDelegationResponse;
                toJSON(message: _199.QueryDelegationResponse): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _199.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _199.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _199.QueryUnbondingDelegationRequest;
                toJSON(message: _199.QueryUnbondingDelegationRequest): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _199.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _199.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _199.QueryUnbondingDelegationResponse;
                toJSON(message: _199.QueryUnbondingDelegationResponse): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _199.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _199.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _199.QueryDelegatorDelegationsRequest;
                toJSON(message: _199.QueryDelegatorDelegationsRequest): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _199.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _199.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _199.QueryDelegatorDelegationsResponse;
                toJSON(message: _199.QueryDelegatorDelegationsResponse): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _199.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _199.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _199.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _199.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _199.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _199.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _199.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _199.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _199.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _199.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryRedelegationsRequest;
                fromJSON(object: any): _199.QueryRedelegationsRequest;
                toJSON(message: _199.QueryRedelegationsRequest): unknown;
                fromPartial<I_46 extends unknown>(object: I_46): _199.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _199.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryRedelegationsResponse;
                fromJSON(object: any): _199.QueryRedelegationsResponse;
                toJSON(message: _199.QueryRedelegationsResponse): unknown;
                fromPartial<I_47 extends unknown>(object: I_47): _199.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _199.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _199.QueryDelegatorValidatorsRequest;
                toJSON(message: _199.QueryDelegatorValidatorsRequest): unknown;
                fromPartial<I_48 extends unknown>(object: I_48): _199.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _199.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _199.QueryDelegatorValidatorsResponse;
                toJSON(message: _199.QueryDelegatorValidatorsResponse): unknown;
                fromPartial<I_49 extends unknown>(object: I_49): _199.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _199.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _199.QueryDelegatorValidatorRequest;
                toJSON(message: _199.QueryDelegatorValidatorRequest): unknown;
                fromPartial<I_50 extends unknown>(object: I_50): _199.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _199.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _199.QueryDelegatorValidatorResponse;
                toJSON(message: _199.QueryDelegatorValidatorResponse): unknown;
                fromPartial<I_51 extends unknown>(object: I_51): _199.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _199.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryHistoricalInfoRequest;
                fromJSON(object: any): _199.QueryHistoricalInfoRequest;
                toJSON(message: _199.QueryHistoricalInfoRequest): unknown;
                fromPartial<I_52 extends unknown>(object: I_52): _199.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _199.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryHistoricalInfoResponse;
                fromJSON(object: any): _199.QueryHistoricalInfoResponse;
                toJSON(message: _199.QueryHistoricalInfoResponse): unknown;
                fromPartial<I_53 extends unknown>(object: I_53): _199.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _199.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryPoolRequest;
                fromJSON(_: any): _199.QueryPoolRequest;
                toJSON(_: _199.QueryPoolRequest): unknown;
                fromPartial<I_54 extends unknown>(_: I_54): _199.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _199.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryPoolResponse;
                fromJSON(object: any): _199.QueryPoolResponse;
                toJSON(message: _199.QueryPoolResponse): unknown;
                fromPartial<I_55 extends unknown>(object: I_55): _199.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _199.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryParamsRequest;
                fromJSON(_: any): _199.QueryParamsRequest;
                toJSON(_: _199.QueryParamsRequest): unknown;
                fromPartial<I_56 extends unknown>(_: I_56): _199.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _199.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryParamsResponse;
                fromJSON(object: any): _199.QueryParamsResponse;
                toJSON(message: _199.QueryParamsResponse): unknown;
                fromPartial<I_57 extends unknown>(object: I_57): _199.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _197.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.GenesisState;
                fromJSON(object: any): _197.GenesisState;
                toJSON(message: _197.GenesisState): unknown;
                fromPartial<I_58 extends unknown>(object: I_58): _197.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _197.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.LastValidatorPower;
                fromJSON(object: any): _197.LastValidatorPower;
                toJSON(message: _197.LastValidatorPower): unknown;
                fromPartial<I_59 extends unknown>(object: I_59): _197.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _195.AuthorizationType;
            authorizationTypeToJSON(object: _195.AuthorizationType): string;
            AuthorizationType: typeof _195.AuthorizationType;
            StakeAuthorization: {
                encode(message: _195.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.StakeAuthorization;
                fromJSON(object: any): _195.StakeAuthorization;
                toJSON(message: _195.StakeAuthorization): unknown;
                fromPartial<I_60 extends unknown>(object: I_60): _195.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _195.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.StakeAuthorization_Validators;
                fromJSON(object: any): _195.StakeAuthorization_Validators;
                toJSON(message: _195.StakeAuthorization_Validators): unknown;
                fromPartial<I_61 extends unknown>(object: I_61): _195.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _208.SignMode;
                signModeToJSON(object: _208.SignMode): string;
                SignMode: typeof _208.SignMode;
                SignatureDescriptors: {
                    encode(message: _208.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.SignatureDescriptors;
                    fromJSON(object: any): _208.SignatureDescriptors;
                    toJSON(message: _208.SignatureDescriptors): unknown;
                    fromPartial<I extends unknown>(object: I): _208.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _208.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.SignatureDescriptor;
                    fromJSON(object: any): _208.SignatureDescriptor;
                    toJSON(message: _208.SignatureDescriptor): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _208.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _208.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.SignatureDescriptor_Data;
                    fromJSON(object: any): _208.SignatureDescriptor_Data;
                    toJSON(message: _208.SignatureDescriptor_Data): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _208.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _208.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _208.SignatureDescriptor_Data_Single;
                    toJSON(message: _208.SignatureDescriptor_Data_Single): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _208.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _208.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _208.SignatureDescriptor_Data_Multi;
                    toJSON(message: _208.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _208.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            Tx: {
                encode(message: _212.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.Tx;
                fromJSON(object: any): _212.Tx;
                toJSON(message: _212.Tx): unknown;
                fromPartial<I extends unknown>(object: I): _212.Tx;
            };
            TxRaw: {
                encode(message: _212.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.TxRaw;
                fromJSON(object: any): _212.TxRaw;
                toJSON(message: _212.TxRaw): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _212.TxRaw;
            };
            SignDoc: {
                encode(message: _212.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.SignDoc;
                fromJSON(object: any): _212.SignDoc;
                toJSON(message: _212.SignDoc): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _212.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _212.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.SignDocDirectAux;
                fromJSON(object: any): _212.SignDocDirectAux;
                toJSON(message: _212.SignDocDirectAux): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _212.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _212.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.TxBody;
                fromJSON(object: any): _212.TxBody;
                toJSON(message: _212.TxBody): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _212.TxBody;
            };
            AuthInfo: {
                encode(message: _212.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.AuthInfo;
                fromJSON(object: any): _212.AuthInfo;
                toJSON(message: _212.AuthInfo): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _212.AuthInfo;
            };
            SignerInfo: {
                encode(message: _212.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.SignerInfo;
                fromJSON(object: any): _212.SignerInfo;
                toJSON(message: _212.SignerInfo): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _212.SignerInfo;
            };
            ModeInfo: {
                encode(message: _212.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.ModeInfo;
                fromJSON(object: any): _212.ModeInfo;
                toJSON(message: _212.ModeInfo): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _212.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _212.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.ModeInfo_Single;
                fromJSON(object: any): _212.ModeInfo_Single;
                toJSON(message: _212.ModeInfo_Single): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _212.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _212.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.ModeInfo_Multi;
                fromJSON(object: any): _212.ModeInfo_Multi;
                toJSON(message: _212.ModeInfo_Multi): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _212.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _212.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.Fee;
                fromJSON(object: any): _212.Fee;
                toJSON(message: _212.Fee): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _212.Fee;
            };
            Tip: {
                encode(message: _212.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.Tip;
                fromJSON(object: any): _212.Tip;
                toJSON(message: _212.Tip): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _212.Tip;
            };
            AuxSignerData: {
                encode(message: _212.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.AuxSignerData;
                fromJSON(object: any): _212.AuxSignerData;
                toJSON(message: _212.AuxSignerData): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _212.AuxSignerData;
            };
            orderByFromJSON(object: any): _210.OrderBy;
            orderByToJSON(object: _210.OrderBy): string;
            broadcastModeFromJSON(object: any): _210.BroadcastMode;
            broadcastModeToJSON(object: _210.BroadcastMode): string;
            OrderBy: typeof _210.OrderBy;
            BroadcastMode: typeof _210.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _210.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.GetTxsEventRequest;
                fromJSON(object: any): _210.GetTxsEventRequest;
                toJSON(message: _210.GetTxsEventRequest): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _210.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _210.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.GetTxsEventResponse;
                fromJSON(object: any): _210.GetTxsEventResponse;
                toJSON(message: _210.GetTxsEventResponse): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _210.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _210.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.BroadcastTxRequest;
                fromJSON(object: any): _210.BroadcastTxRequest;
                toJSON(message: _210.BroadcastTxRequest): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _210.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _210.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.BroadcastTxResponse;
                fromJSON(object: any): _210.BroadcastTxResponse;
                toJSON(message: _210.BroadcastTxResponse): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _210.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _210.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.SimulateRequest;
                fromJSON(object: any): _210.SimulateRequest;
                toJSON(message: _210.SimulateRequest): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _210.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _210.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.SimulateResponse;
                fromJSON(object: any): _210.SimulateResponse;
                toJSON(message: _210.SimulateResponse): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _210.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _210.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.GetTxRequest;
                fromJSON(object: any): _210.GetTxRequest;
                toJSON(message: _210.GetTxRequest): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _210.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _210.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.GetTxResponse;
                fromJSON(object: any): _210.GetTxResponse;
                toJSON(message: _210.GetTxResponse): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _210.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _210.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.GetBlockWithTxsRequest;
                fromJSON(object: any): _210.GetBlockWithTxsRequest;
                toJSON(message: _210.GetBlockWithTxsRequest): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _210.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _210.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.GetBlockWithTxsResponse;
                fromJSON(object: any): _210.GetBlockWithTxsResponse;
                toJSON(message: _210.GetBlockWithTxsResponse): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _210.GetBlockWithTxsResponse;
            };
            ServiceClientImpl: typeof _210.ServiceClientImpl;
        };
    }
    namespace upgrade {
        const v1beta1: {
            Plan: {
                encode(message: _221.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.Plan;
                fromJSON(object: any): _221.Plan;
                toJSON(message: _221.Plan): unknown;
                fromPartial<I extends unknown>(object: I): _221.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _221.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.SoftwareUpgradeProposal;
                fromJSON(object: any): _221.SoftwareUpgradeProposal;
                toJSON(message: _221.SoftwareUpgradeProposal): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _221.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _221.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _221.CancelSoftwareUpgradeProposal;
                toJSON(message: _221.CancelSoftwareUpgradeProposal): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _221.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _221.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.ModuleVersion;
                fromJSON(object: any): _221.ModuleVersion;
                toJSON(message: _221.ModuleVersion): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _221.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _216.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgSoftwareUpgrade;
                fromJSON(object: any): _216.MsgSoftwareUpgrade;
                toJSON(message: _216.MsgSoftwareUpgrade): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _216.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _216.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _216.MsgSoftwareUpgradeResponse;
                toJSON(_: _216.MsgSoftwareUpgradeResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _216.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _216.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgCancelUpgrade;
                fromJSON(object: any): _216.MsgCancelUpgrade;
                toJSON(message: _216.MsgCancelUpgrade): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _216.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _216.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgCancelUpgradeResponse;
                fromJSON(_: any): _216.MsgCancelUpgradeResponse;
                toJSON(_: _216.MsgCancelUpgradeResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _216.MsgCancelUpgradeResponse;
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _216.MsgSoftwareUpgrade) => {
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
                    }) => _216.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _216.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _216.MsgCancelUpgrade;
                };
            };
            encoded: {
                softwareUpgrade(value: _216.MsgSoftwareUpgrade): {
                    type_url: string;
                    value: Uint8Array;
                };
                cancelUpgrade(value: _216.MsgCancelUpgrade): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            messages: {
                softwareUpgrade(value: _216.MsgSoftwareUpgrade): {
                    typeUrl: string;
                    value: _216.MsgSoftwareUpgrade;
                };
                cancelUpgrade(value: _216.MsgCancelUpgrade): {
                    typeUrl: string;
                    value: _216.MsgCancelUpgrade;
                };
            };
            QueryCurrentPlanRequest: {
                encode(_: _214.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.QueryCurrentPlanRequest;
                fromJSON(_: any): _214.QueryCurrentPlanRequest;
                toJSON(_: _214.QueryCurrentPlanRequest): unknown;
                fromPartial<I_8 extends unknown>(_: I_8): _214.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _214.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.QueryCurrentPlanResponse;
                fromJSON(object: any): _214.QueryCurrentPlanResponse;
                toJSON(message: _214.QueryCurrentPlanResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _214.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _214.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.QueryAppliedPlanRequest;
                fromJSON(object: any): _214.QueryAppliedPlanRequest;
                toJSON(message: _214.QueryAppliedPlanRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _214.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _214.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.QueryAppliedPlanResponse;
                fromJSON(object: any): _214.QueryAppliedPlanResponse;
                toJSON(message: _214.QueryAppliedPlanResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _214.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _214.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _214.QueryUpgradedConsensusStateRequest;
                toJSON(message: _214.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _214.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _214.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _214.QueryUpgradedConsensusStateResponse;
                toJSON(message: _214.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _214.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _214.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.QueryModuleVersionsRequest;
                fromJSON(object: any): _214.QueryModuleVersionsRequest;
                toJSON(message: _214.QueryModuleVersionsRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _214.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _214.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.QueryModuleVersionsResponse;
                fromJSON(object: any): _214.QueryModuleVersionsResponse;
                toJSON(message: _214.QueryModuleVersionsResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _214.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _214.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.QueryAuthorityRequest;
                fromJSON(_: any): _214.QueryAuthorityRequest;
                toJSON(_: _214.QueryAuthorityRequest): unknown;
                fromPartial<I_16 extends unknown>(_: I_16): _214.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _214.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.QueryAuthorityResponse;
                fromJSON(object: any): _214.QueryAuthorityResponse;
                toJSON(message: _214.QueryAuthorityResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _214.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            BaseVestingAccount: {
                encode(message: _228.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.BaseVestingAccount;
                fromJSON(object: any): _228.BaseVestingAccount;
                toJSON(message: _228.BaseVestingAccount): unknown;
                fromPartial<I extends unknown>(object: I): _228.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _228.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.ContinuousVestingAccount;
                fromJSON(object: any): _228.ContinuousVestingAccount;
                toJSON(message: _228.ContinuousVestingAccount): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _228.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _228.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.DelayedVestingAccount;
                fromJSON(object: any): _228.DelayedVestingAccount;
                toJSON(message: _228.DelayedVestingAccount): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _228.DelayedVestingAccount;
            };
            Period: {
                encode(message: _228.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.Period;
                fromJSON(object: any): _228.Period;
                toJSON(message: _228.Period): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _228.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _228.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.PeriodicVestingAccount;
                fromJSON(object: any): _228.PeriodicVestingAccount;
                toJSON(message: _228.PeriodicVestingAccount): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _228.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _228.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.PermanentLockedAccount;
                fromJSON(object: any): _228.PermanentLockedAccount;
                toJSON(message: _228.PermanentLockedAccount): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _228.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _223.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgCreateVestingAccount;
                fromJSON(object: any): _223.MsgCreateVestingAccount;
                toJSON(message: _223.MsgCreateVestingAccount): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _223.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _223.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _223.MsgCreateVestingAccountResponse;
                toJSON(_: _223.MsgCreateVestingAccountResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _223.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _223.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _223.MsgCreatePermanentLockedAccount;
                toJSON(message: _223.MsgCreatePermanentLockedAccount): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _223.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _223.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _223.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _223.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial<I_9 extends unknown>(_: I_9): _223.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _223.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _223.MsgCreatePeriodicVestingAccount;
                toJSON(message: _223.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _223.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _223.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _223.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _223.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial<I_11 extends unknown>(_: I_11): _223.MsgCreatePeriodicVestingAccountResponse;
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _223.MsgCreateVestingAccount) => {
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
                    }) => _223.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _223.MsgCreatePermanentLockedAccount) => {
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
                    }) => _223.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _223.MsgCreatePeriodicVestingAccount) => {
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
                    }) => _223.MsgCreatePeriodicVestingAccount;
                };
            };
            encoded: {
                createVestingAccount(value: _223.MsgCreateVestingAccount): {
                    type_url: string;
                    value: Uint8Array;
                };
                createPermanentLockedAccount(value: _223.MsgCreatePermanentLockedAccount): {
                    type_url: string;
                    value: Uint8Array;
                };
                createPeriodicVestingAccount(value: _223.MsgCreatePeriodicVestingAccount): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            messages: {
                createVestingAccount(value: _223.MsgCreateVestingAccount): {
                    typeUrl: string;
                    value: _223.MsgCreateVestingAccount;
                };
                createPermanentLockedAccount(value: _223.MsgCreatePermanentLockedAccount): {
                    typeUrl: string;
                    value: _223.MsgCreatePermanentLockedAccount;
                };
                createPeriodicVestingAccount(value: _223.MsgCreatePeriodicVestingAccount): {
                    typeUrl: string;
                    value: _223.MsgCreatePeriodicVestingAccount;
                };
            };
        };
    }
}
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            accessTypeFromJSON(object: any): _243.AccessType;
            accessTypeToJSON(object: _243.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _243.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _243.ContractCodeHistoryOperationType): string;
            AccessType: typeof _243.AccessType;
            ContractCodeHistoryOperationType: typeof _243.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _243.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.AccessTypeParam;
                fromJSON(object: any): _243.AccessTypeParam;
                toJSON(message: _243.AccessTypeParam): unknown;
                fromPartial<I extends unknown>(object: I): _243.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _243.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.AccessConfig;
                fromJSON(object: any): _243.AccessConfig;
                toJSON(message: _243.AccessConfig): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _243.AccessConfig;
            };
            Params: {
                encode(message: _243.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.Params;
                fromJSON(object: any): _243.Params;
                toJSON(message: _243.Params): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _243.Params;
            };
            CodeInfo: {
                encode(message: _243.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.CodeInfo;
                fromJSON(object: any): _243.CodeInfo;
                toJSON(message: _243.CodeInfo): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _243.CodeInfo;
            };
            ContractInfo: {
                encode(message: _243.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.ContractInfo;
                fromJSON(object: any): _243.ContractInfo;
                toJSON(message: _243.ContractInfo): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _243.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _243.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.ContractCodeHistoryEntry;
                fromJSON(object: any): _243.ContractCodeHistoryEntry;
                toJSON(message: _243.ContractCodeHistoryEntry): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _243.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _243.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.AbsoluteTxPosition;
                fromJSON(object: any): _243.AbsoluteTxPosition;
                toJSON(message: _243.AbsoluteTxPosition): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _243.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _243.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.Model;
                fromJSON(object: any): _243.Model;
                toJSON(message: _243.Model): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _243.Model;
            };
            MsgStoreCode: {
                encode(message: _238.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.MsgStoreCode;
                fromJSON(object: any): _238.MsgStoreCode;
                toJSON(message: _238.MsgStoreCode): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _238.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _238.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.MsgStoreCodeResponse;
                fromJSON(object: any): _238.MsgStoreCodeResponse;
                toJSON(message: _238.MsgStoreCodeResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _238.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _238.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.MsgInstantiateContract;
                fromJSON(object: any): _238.MsgInstantiateContract;
                toJSON(message: _238.MsgInstantiateContract): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _238.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _238.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.MsgInstantiateContractResponse;
                fromJSON(object: any): _238.MsgInstantiateContractResponse;
                toJSON(message: _238.MsgInstantiateContractResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _238.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _238.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.MsgExecuteContract;
                fromJSON(object: any): _238.MsgExecuteContract;
                toJSON(message: _238.MsgExecuteContract): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _238.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _238.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.MsgExecuteContractResponse;
                fromJSON(object: any): _238.MsgExecuteContractResponse;
                toJSON(message: _238.MsgExecuteContractResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _238.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _238.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.MsgMigrateContract;
                fromJSON(object: any): _238.MsgMigrateContract;
                toJSON(message: _238.MsgMigrateContract): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _238.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _238.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.MsgMigrateContractResponse;
                fromJSON(object: any): _238.MsgMigrateContractResponse;
                toJSON(message: _238.MsgMigrateContractResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _238.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _238.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.MsgUpdateAdmin;
                fromJSON(object: any): _238.MsgUpdateAdmin;
                toJSON(message: _238.MsgUpdateAdmin): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _238.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _238.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.MsgUpdateAdminResponse;
                fromJSON(_: any): _238.MsgUpdateAdminResponse;
                toJSON(_: _238.MsgUpdateAdminResponse): unknown;
                fromPartial<I_17 extends unknown>(_: I_17): _238.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _238.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.MsgClearAdmin;
                fromJSON(object: any): _238.MsgClearAdmin;
                toJSON(message: _238.MsgClearAdmin): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _238.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _238.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.MsgClearAdminResponse;
                fromJSON(_: any): _238.MsgClearAdminResponse;
                toJSON(_: _238.MsgClearAdminResponse): unknown;
                fromPartial<I_19 extends unknown>(_: I_19): _238.MsgClearAdminResponse;
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _238.MsgStoreCode) => {
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
                    }) => _238.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _238.MsgInstantiateContract) => {
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
                    }) => _238.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _238.MsgExecuteContract) => {
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
                    }) => _238.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _238.MsgMigrateContract) => {
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
                    }) => _238.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _238.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _238.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _238.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _238.MsgClearAdmin;
                };
            };
            encoded: {
                storeCode(value: _238.MsgStoreCode): {
                    type_url: string;
                    value: Uint8Array;
                };
                instantiateContract(value: _238.MsgInstantiateContract): {
                    type_url: string;
                    value: Uint8Array;
                };
                executeContract(value: _238.MsgExecuteContract): {
                    type_url: string;
                    value: Uint8Array;
                };
                migrateContract(value: _238.MsgMigrateContract): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateAdmin(value: _238.MsgUpdateAdmin): {
                    type_url: string;
                    value: Uint8Array;
                };
                clearAdmin(value: _238.MsgClearAdmin): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            messages: {
                storeCode(value: _238.MsgStoreCode): {
                    typeUrl: string;
                    value: _238.MsgStoreCode;
                };
                instantiateContract(value: _238.MsgInstantiateContract): {
                    typeUrl: string;
                    value: _238.MsgInstantiateContract;
                };
                executeContract(value: _238.MsgExecuteContract): {
                    typeUrl: string;
                    value: _238.MsgExecuteContract;
                };
                migrateContract(value: _238.MsgMigrateContract): {
                    typeUrl: string;
                    value: _238.MsgMigrateContract;
                };
                updateAdmin(value: _238.MsgUpdateAdmin): {
                    typeUrl: string;
                    value: _238.MsgUpdateAdmin;
                };
                clearAdmin(value: _238.MsgClearAdmin): {
                    typeUrl: string;
                    value: _238.MsgClearAdmin;
                };
            };
            QueryContractInfoRequest: {
                encode(message: _236.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryContractInfoRequest;
                fromJSON(object: any): _236.QueryContractInfoRequest;
                toJSON(message: _236.QueryContractInfoRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _236.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _236.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryContractInfoResponse;
                fromJSON(object: any): _236.QueryContractInfoResponse;
                toJSON(message: _236.QueryContractInfoResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _236.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _236.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryContractHistoryRequest;
                fromJSON(object: any): _236.QueryContractHistoryRequest;
                toJSON(message: _236.QueryContractHistoryRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _236.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _236.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryContractHistoryResponse;
                fromJSON(object: any): _236.QueryContractHistoryResponse;
                toJSON(message: _236.QueryContractHistoryResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _236.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _236.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryContractsByCodeRequest;
                fromJSON(object: any): _236.QueryContractsByCodeRequest;
                toJSON(message: _236.QueryContractsByCodeRequest): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _236.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _236.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryContractsByCodeResponse;
                fromJSON(object: any): _236.QueryContractsByCodeResponse;
                toJSON(message: _236.QueryContractsByCodeResponse): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _236.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _236.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryAllContractStateRequest;
                fromJSON(object: any): _236.QueryAllContractStateRequest;
                toJSON(message: _236.QueryAllContractStateRequest): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _236.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _236.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryAllContractStateResponse;
                fromJSON(object: any): _236.QueryAllContractStateResponse;
                toJSON(message: _236.QueryAllContractStateResponse): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _236.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _236.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryRawContractStateRequest;
                fromJSON(object: any): _236.QueryRawContractStateRequest;
                toJSON(message: _236.QueryRawContractStateRequest): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _236.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _236.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryRawContractStateResponse;
                fromJSON(object: any): _236.QueryRawContractStateResponse;
                toJSON(message: _236.QueryRawContractStateResponse): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _236.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _236.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QuerySmartContractStateRequest;
                fromJSON(object: any): _236.QuerySmartContractStateRequest;
                toJSON(message: _236.QuerySmartContractStateRequest): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _236.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _236.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QuerySmartContractStateResponse;
                fromJSON(object: any): _236.QuerySmartContractStateResponse;
                toJSON(message: _236.QuerySmartContractStateResponse): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _236.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _236.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryCodeRequest;
                fromJSON(object: any): _236.QueryCodeRequest;
                toJSON(message: _236.QueryCodeRequest): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _236.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _236.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.CodeInfoResponse;
                fromJSON(object: any): _236.CodeInfoResponse;
                toJSON(message: _236.CodeInfoResponse): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _236.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _236.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryCodeResponse;
                fromJSON(object: any): _236.QueryCodeResponse;
                toJSON(message: _236.QueryCodeResponse): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _236.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _236.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryCodesRequest;
                fromJSON(object: any): _236.QueryCodesRequest;
                toJSON(message: _236.QueryCodesRequest): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _236.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _236.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryCodesResponse;
                fromJSON(object: any): _236.QueryCodesResponse;
                toJSON(message: _236.QueryCodesResponse): unknown;
                fromPartial<I_36 extends unknown>(object: I_36): _236.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _236.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryPinnedCodesRequest;
                fromJSON(object: any): _236.QueryPinnedCodesRequest;
                toJSON(message: _236.QueryPinnedCodesRequest): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _236.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _236.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryPinnedCodesResponse;
                fromJSON(object: any): _236.QueryPinnedCodesResponse;
                toJSON(message: _236.QueryPinnedCodesResponse): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _236.QueryPinnedCodesResponse;
            };
            StoreCodeProposal: {
                encode(message: _234.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.StoreCodeProposal;
                fromJSON(object: any): _234.StoreCodeProposal;
                toJSON(message: _234.StoreCodeProposal): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _234.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _234.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.InstantiateContractProposal;
                fromJSON(object: any): _234.InstantiateContractProposal;
                toJSON(message: _234.InstantiateContractProposal): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _234.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _234.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.MigrateContractProposal;
                fromJSON(object: any): _234.MigrateContractProposal;
                toJSON(message: _234.MigrateContractProposal): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _234.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _234.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.SudoContractProposal;
                fromJSON(object: any): _234.SudoContractProposal;
                toJSON(message: _234.SudoContractProposal): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _234.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _234.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.ExecuteContractProposal;
                fromJSON(object: any): _234.ExecuteContractProposal;
                toJSON(message: _234.ExecuteContractProposal): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _234.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _234.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.UpdateAdminProposal;
                fromJSON(object: any): _234.UpdateAdminProposal;
                toJSON(message: _234.UpdateAdminProposal): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _234.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _234.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.ClearAdminProposal;
                fromJSON(object: any): _234.ClearAdminProposal;
                toJSON(message: _234.ClearAdminProposal): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _234.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _234.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.PinCodesProposal;
                fromJSON(object: any): _234.PinCodesProposal;
                toJSON(message: _234.PinCodesProposal): unknown;
                fromPartial<I_46 extends unknown>(object: I_46): _234.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _234.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.UnpinCodesProposal;
                fromJSON(object: any): _234.UnpinCodesProposal;
                toJSON(message: _234.UnpinCodesProposal): unknown;
                fromPartial<I_47 extends unknown>(object: I_47): _234.UnpinCodesProposal;
            };
            MsgIBCSend: {
                encode(message: _232.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgIBCSend;
                fromJSON(object: any): _232.MsgIBCSend;
                toJSON(message: _232.MsgIBCSend): unknown;
                fromPartial<I_48 extends unknown>(object: I_48): _232.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _232.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgIBCCloseChannel;
                fromJSON(object: any): _232.MsgIBCCloseChannel;
                toJSON(message: _232.MsgIBCCloseChannel): unknown;
                fromPartial<I_49 extends unknown>(object: I_49): _232.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _230.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.GenesisState;
                fromJSON(object: any): _230.GenesisState;
                toJSON(message: _230.GenesisState): unknown;
                fromPartial<I_50 extends unknown>(object: I_50): _230.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _230.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.GenesisState_GenMsgs;
                fromJSON(object: any): _230.GenesisState_GenMsgs;
                toJSON(message: _230.GenesisState_GenMsgs): unknown;
                fromPartial<I_51 extends unknown>(object: I_51): _230.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _230.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.Code;
                fromJSON(object: any): _230.Code;
                toJSON(message: _230.Code): unknown;
                fromPartial<I_52 extends unknown>(object: I_52): _230.Code;
            };
            Contract: {
                encode(message: _230.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.Contract;
                fromJSON(object: any): _230.Contract;
                toJSON(message: _230.Contract): unknown;
                fromPartial<I_53 extends unknown>(object: I_53): _230.Contract;
            };
            Sequence: {
                encode(message: _230.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.Sequence;
                fromJSON(object: any): _230.Sequence;
                toJSON(message: _230.Sequence): unknown;
                fromPartial<I_54 extends unknown>(object: I_54): _230.Sequence;
            };
        };
    }
}
export declare const gogoproto: {};
export declare namespace google {
    const api: {
        Visibility: {
            encode(message: _307.Visibility, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.Visibility;
            fromJSON(object: any): _307.Visibility;
            toJSON(message: _307.Visibility): unknown;
            fromPartial<I extends unknown>(object: I): _307.Visibility;
        };
        VisibilityRule: {
            encode(message: _307.VisibilityRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.VisibilityRule;
            fromJSON(object: any): _307.VisibilityRule;
            toJSON(message: _307.VisibilityRule): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _307.VisibilityRule;
        };
        Usage: {
            encode(message: _305.Usage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _305.Usage;
            fromJSON(object: any): _305.Usage;
            toJSON(message: _305.Usage): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _305.Usage;
        };
        UsageRule: {
            encode(message: _305.UsageRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _305.UsageRule;
            fromJSON(object: any): _305.UsageRule;
            toJSON(message: _305.UsageRule): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _305.UsageRule;
        };
        SystemParameters: {
            encode(message: _303.SystemParameters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.SystemParameters;
            fromJSON(object: any): _303.SystemParameters;
            toJSON(message: _303.SystemParameters): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _303.SystemParameters;
        };
        SystemParameterRule: {
            encode(message: _303.SystemParameterRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.SystemParameterRule;
            fromJSON(object: any): _303.SystemParameterRule;
            toJSON(message: _303.SystemParameterRule): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _303.SystemParameterRule;
        };
        SystemParameter: {
            encode(message: _303.SystemParameter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.SystemParameter;
            fromJSON(object: any): _303.SystemParameter;
            toJSON(message: _303.SystemParameter): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _303.SystemParameter;
        };
        SourceInfo: {
            encode(message: _301.SourceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.SourceInfo;
            fromJSON(object: any): _301.SourceInfo;
            toJSON(message: _301.SourceInfo): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _301.SourceInfo;
        };
        Service: {
            encode(message: _299.Service, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _299.Service;
            fromJSON(object: any): _299.Service;
            toJSON(message: _299.Service): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _299.Service;
        };
        RoutingRule: {
            encode(message: _297.RoutingRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _297.RoutingRule;
            fromJSON(object: any): _297.RoutingRule;
            toJSON(message: _297.RoutingRule): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _297.RoutingRule;
        };
        RoutingParameter: {
            encode(message: _297.RoutingParameter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _297.RoutingParameter;
            fromJSON(object: any): _297.RoutingParameter;
            toJSON(message: _297.RoutingParameter): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _297.RoutingParameter;
        };
        resourceDescriptor_HistoryFromJSON(object: any): _295.ResourceDescriptor_History;
        resourceDescriptor_HistoryToJSON(object: _295.ResourceDescriptor_History): string;
        resourceDescriptor_StyleFromJSON(object: any): _295.ResourceDescriptor_Style;
        resourceDescriptor_StyleToJSON(object: _295.ResourceDescriptor_Style): string;
        ResourceDescriptor: {
            encode(message: _295.ResourceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _295.ResourceDescriptor;
            fromJSON(object: any): _295.ResourceDescriptor;
            toJSON(message: _295.ResourceDescriptor): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _295.ResourceDescriptor;
        };
        ResourceDescriptor_History: typeof _295.ResourceDescriptor_History;
        ResourceDescriptor_Style: typeof _295.ResourceDescriptor_Style;
        ResourceReference: {
            encode(message: _295.ResourceReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _295.ResourceReference;
            fromJSON(object: any): _295.ResourceReference;
            toJSON(message: _295.ResourceReference): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _295.ResourceReference;
        };
        Quota: {
            encode(message: _293.Quota, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.Quota;
            fromJSON(object: any): _293.Quota;
            toJSON(message: _293.Quota): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _293.Quota;
        };
        MetricRule: {
            encode(message: _293.MetricRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.MetricRule;
            fromJSON(object: any): _293.MetricRule;
            toJSON(message: _293.MetricRule): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _293.MetricRule;
        };
        MetricRule_MetricCostsEntry: {
            encode(message: _293.MetricRule_MetricCostsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.MetricRule_MetricCostsEntry;
            fromJSON(object: any): _293.MetricRule_MetricCostsEntry;
            toJSON(message: _293.MetricRule_MetricCostsEntry): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _293.MetricRule_MetricCostsEntry;
        };
        QuotaLimit: {
            encode(message: _293.QuotaLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.QuotaLimit;
            fromJSON(object: any): _293.QuotaLimit;
            toJSON(message: _293.QuotaLimit): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _293.QuotaLimit;
        };
        QuotaLimit_ValuesEntry: {
            encode(message: _293.QuotaLimit_ValuesEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.QuotaLimit_ValuesEntry;
            fromJSON(object: any): _293.QuotaLimit_ValuesEntry;
            toJSON(message: _293.QuotaLimit_ValuesEntry): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _293.QuotaLimit_ValuesEntry;
        };
        Monitoring: {
            encode(message: _291.Monitoring, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _291.Monitoring;
            fromJSON(object: any): _291.Monitoring;
            toJSON(message: _291.Monitoring): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _291.Monitoring;
        };
        Monitoring_MonitoringDestination: {
            encode(message: _291.Monitoring_MonitoringDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _291.Monitoring_MonitoringDestination;
            fromJSON(object: any): _291.Monitoring_MonitoringDestination;
            toJSON(message: _291.Monitoring_MonitoringDestination): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _291.Monitoring_MonitoringDestination;
        };
        MonitoredResourceDescriptor: {
            encode(message: _289.MonitoredResourceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MonitoredResourceDescriptor;
            fromJSON(object: any): _289.MonitoredResourceDescriptor;
            toJSON(message: _289.MonitoredResourceDescriptor): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _289.MonitoredResourceDescriptor;
        };
        MonitoredResource: {
            encode(message: _289.MonitoredResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MonitoredResource;
            fromJSON(object: any): _289.MonitoredResource;
            toJSON(message: _289.MonitoredResource): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _289.MonitoredResource;
        };
        MonitoredResource_LabelsEntry: {
            encode(message: _289.MonitoredResource_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MonitoredResource_LabelsEntry;
            fromJSON(object: any): _289.MonitoredResource_LabelsEntry;
            toJSON(message: _289.MonitoredResource_LabelsEntry): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _289.MonitoredResource_LabelsEntry;
        };
        MonitoredResourceMetadata: {
            encode(message: _289.MonitoredResourceMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MonitoredResourceMetadata;
            fromJSON(object: any): _289.MonitoredResourceMetadata;
            toJSON(message: _289.MonitoredResourceMetadata): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _289.MonitoredResourceMetadata;
        };
        MonitoredResourceMetadata_UserLabelsEntry: {
            encode(message: _289.MonitoredResourceMetadata_UserLabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MonitoredResourceMetadata_UserLabelsEntry;
            fromJSON(object: any): _289.MonitoredResourceMetadata_UserLabelsEntry;
            toJSON(message: _289.MonitoredResourceMetadata_UserLabelsEntry): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _289.MonitoredResourceMetadata_UserLabelsEntry;
        };
        metricDescriptor_MetricKindFromJSON(object: any): _287.MetricDescriptor_MetricKind;
        metricDescriptor_MetricKindToJSON(object: _287.MetricDescriptor_MetricKind): string;
        metricDescriptor_ValueTypeFromJSON(object: any): _287.MetricDescriptor_ValueType;
        metricDescriptor_ValueTypeToJSON(object: _287.MetricDescriptor_ValueType): string;
        MetricDescriptor: {
            encode(message: _287.MetricDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _287.MetricDescriptor;
            fromJSON(object: any): _287.MetricDescriptor;
            toJSON(message: _287.MetricDescriptor): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _287.MetricDescriptor;
        };
        MetricDescriptor_MetricKind: typeof _287.MetricDescriptor_MetricKind;
        MetricDescriptor_ValueType: typeof _287.MetricDescriptor_ValueType;
        MetricDescriptor_MetricDescriptorMetadata: {
            encode(message: _287.MetricDescriptor_MetricDescriptorMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _287.MetricDescriptor_MetricDescriptorMetadata;
            fromJSON(object: any): _287.MetricDescriptor_MetricDescriptorMetadata;
            toJSON(message: _287.MetricDescriptor_MetricDescriptorMetadata): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _287.MetricDescriptor_MetricDescriptorMetadata;
        };
        Metric: {
            encode(message: _287.Metric, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _287.Metric;
            fromJSON(object: any): _287.Metric;
            toJSON(message: _287.Metric): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _287.Metric;
        };
        Metric_LabelsEntry: {
            encode(message: _287.Metric_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _287.Metric_LabelsEntry;
            fromJSON(object: any): _287.Metric_LabelsEntry;
            toJSON(message: _287.Metric_LabelsEntry): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _287.Metric_LabelsEntry;
        };
        Logging: {
            encode(message: _285.Logging, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.Logging;
            fromJSON(object: any): _285.Logging;
            toJSON(message: _285.Logging): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _285.Logging;
        };
        Logging_LoggingDestination: {
            encode(message: _285.Logging_LoggingDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.Logging_LoggingDestination;
            fromJSON(object: any): _285.Logging_LoggingDestination;
            toJSON(message: _285.Logging_LoggingDestination): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _285.Logging_LoggingDestination;
        };
        LogDescriptor: {
            encode(message: _283.LogDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.LogDescriptor;
            fromJSON(object: any): _283.LogDescriptor;
            toJSON(message: _283.LogDescriptor): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _283.LogDescriptor;
        };
        launchStageFromJSON(object: any): _281.LaunchStage;
        launchStageToJSON(object: _281.LaunchStage): string;
        LaunchStage: typeof _281.LaunchStage;
        labelDescriptor_ValueTypeFromJSON(object: any): _279.LabelDescriptor_ValueType;
        labelDescriptor_ValueTypeToJSON(object: _279.LabelDescriptor_ValueType): string;
        LabelDescriptor: {
            encode(message: _279.LabelDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.LabelDescriptor;
            fromJSON(object: any): _279.LabelDescriptor;
            toJSON(message: _279.LabelDescriptor): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _279.LabelDescriptor;
        };
        LabelDescriptor_ValueType: typeof _279.LabelDescriptor_ValueType;
        HttpBody: {
            encode(message: _277.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.HttpBody;
            fromJSON(object: any): _277.HttpBody;
            toJSON(message: _277.HttpBody): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _277.HttpBody;
        };
        Http: {
            encode(message: _275.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.Http;
            fromJSON(object: any): _275.Http;
            toJSON(message: _275.Http): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _275.Http;
        };
        HttpRule: {
            encode(message: _275.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.HttpRule;
            fromJSON(object: any): _275.HttpRule;
            toJSON(message: _275.HttpRule): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _275.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _275.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.CustomHttpPattern;
            fromJSON(object: any): _275.CustomHttpPattern;
            toJSON(message: _275.CustomHttpPattern): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _275.CustomHttpPattern;
        };
        fieldBehaviorFromJSON(object: any): _273.FieldBehavior;
        fieldBehaviorToJSON(object: _273.FieldBehavior): string;
        FieldBehavior: typeof _273.FieldBehavior;
        errorReasonFromJSON(object: any): _271.ErrorReason;
        errorReasonToJSON(object: _271.ErrorReason): string;
        ErrorReason: typeof _271.ErrorReason;
        Endpoint: {
            encode(message: _269.Endpoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.Endpoint;
            fromJSON(object: any): _269.Endpoint;
            toJSON(message: _269.Endpoint): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _269.Endpoint;
        };
        Documentation: {
            encode(message: _267.Documentation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.Documentation;
            fromJSON(object: any): _267.Documentation;
            toJSON(message: _267.Documentation): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _267.Documentation;
        };
        DocumentationRule: {
            encode(message: _267.DocumentationRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.DocumentationRule;
            fromJSON(object: any): _267.DocumentationRule;
            toJSON(message: _267.DocumentationRule): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _267.DocumentationRule;
        };
        Page: {
            encode(message: _267.Page, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.Page;
            fromJSON(object: any): _267.Page;
            toJSON(message: _267.Page): unknown;
            fromPartial<I_40 extends unknown>(object: I_40): _267.Page;
        };
        Distribution: {
            encode(message: _265.Distribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.Distribution;
            fromJSON(object: any): _265.Distribution;
            toJSON(message: _265.Distribution): unknown;
            fromPartial<I_41 extends unknown>(object: I_41): _265.Distribution;
        };
        Distribution_Range: {
            encode(message: _265.Distribution_Range, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.Distribution_Range;
            fromJSON(object: any): _265.Distribution_Range;
            toJSON(message: _265.Distribution_Range): unknown;
            fromPartial<I_42 extends unknown>(object: I_42): _265.Distribution_Range;
        };
        Distribution_BucketOptions: {
            encode(message: _265.Distribution_BucketOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.Distribution_BucketOptions;
            fromJSON(object: any): _265.Distribution_BucketOptions;
            toJSON(message: _265.Distribution_BucketOptions): unknown;
            fromPartial<I_43 extends unknown>(object: I_43): _265.Distribution_BucketOptions;
        };
        Distribution_BucketOptions_Linear: {
            encode(message: _265.Distribution_BucketOptions_Linear, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.Distribution_BucketOptions_Linear;
            fromJSON(object: any): _265.Distribution_BucketOptions_Linear;
            toJSON(message: _265.Distribution_BucketOptions_Linear): unknown;
            fromPartial<I_44 extends unknown>(object: I_44): _265.Distribution_BucketOptions_Linear;
        };
        Distribution_BucketOptions_Exponential: {
            encode(message: _265.Distribution_BucketOptions_Exponential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.Distribution_BucketOptions_Exponential;
            fromJSON(object: any): _265.Distribution_BucketOptions_Exponential;
            toJSON(message: _265.Distribution_BucketOptions_Exponential): unknown;
            fromPartial<I_45 extends unknown>(object: I_45): _265.Distribution_BucketOptions_Exponential;
        };
        Distribution_BucketOptions_Explicit: {
            encode(message: _265.Distribution_BucketOptions_Explicit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.Distribution_BucketOptions_Explicit;
            fromJSON(object: any): _265.Distribution_BucketOptions_Explicit;
            toJSON(message: _265.Distribution_BucketOptions_Explicit): unknown;
            fromPartial<I_46 extends unknown>(object: I_46): _265.Distribution_BucketOptions_Explicit;
        };
        Distribution_Exemplar: {
            encode(message: _265.Distribution_Exemplar, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.Distribution_Exemplar;
            fromJSON(object: any): _265.Distribution_Exemplar;
            toJSON(message: _265.Distribution_Exemplar): unknown;
            fromPartial<I_47 extends unknown>(object: I_47): _265.Distribution_Exemplar;
        };
        Control: {
            encode(message: _263.Control, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.Control;
            fromJSON(object: any): _263.Control;
            toJSON(message: _263.Control): unknown;
            fromPartial<I_48 extends unknown>(object: I_48): _263.Control;
        };
        Context: {
            encode(message: _261.Context, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.Context;
            fromJSON(object: any): _261.Context;
            toJSON(message: _261.Context): unknown;
            fromPartial<I_49 extends unknown>(object: I_49): _261.Context;
        };
        ContextRule: {
            encode(message: _261.ContextRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.ContextRule;
            fromJSON(object: any): _261.ContextRule;
            toJSON(message: _261.ContextRule): unknown;
            fromPartial<I_50 extends unknown>(object: I_50): _261.ContextRule;
        };
        property_PropertyTypeFromJSON(object: any): _259.Property_PropertyType;
        property_PropertyTypeToJSON(object: _259.Property_PropertyType): string;
        ProjectProperties: {
            encode(message: _259.ProjectProperties, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.ProjectProperties;
            fromJSON(object: any): _259.ProjectProperties;
            toJSON(message: _259.ProjectProperties): unknown;
            fromPartial<I_51 extends unknown>(object: I_51): _259.ProjectProperties;
        };
        Property: {
            encode(message: _259.Property, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.Property;
            fromJSON(object: any): _259.Property;
            toJSON(message: _259.Property): unknown;
            fromPartial<I_52 extends unknown>(object: I_52): _259.Property;
        };
        Property_PropertyType: typeof _259.Property_PropertyType;
        changeTypeFromJSON(object: any): _257.ChangeType;
        changeTypeToJSON(object: _257.ChangeType): string;
        ChangeType: typeof _257.ChangeType;
        ConfigChange: {
            encode(message: _257.ConfigChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.ConfigChange;
            fromJSON(object: any): _257.ConfigChange;
            toJSON(message: _257.ConfigChange): unknown;
            fromPartial<I_53 extends unknown>(object: I_53): _257.ConfigChange;
        };
        Advice: {
            encode(message: _257.Advice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.Advice;
            fromJSON(object: any): _257.Advice;
            toJSON(message: _257.Advice): unknown;
            fromPartial<I_54 extends unknown>(object: I_54): _257.Advice;
        };
        Billing: {
            encode(message: _253.Billing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.Billing;
            fromJSON(object: any): _253.Billing;
            toJSON(message: _253.Billing): unknown;
            fromPartial<I_55 extends unknown>(object: I_55): _253.Billing;
        };
        Billing_BillingDestination: {
            encode(message: _253.Billing_BillingDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.Billing_BillingDestination;
            fromJSON(object: any): _253.Billing_BillingDestination;
            toJSON(message: _253.Billing_BillingDestination): unknown;
            fromPartial<I_56 extends unknown>(object: I_56): _253.Billing_BillingDestination;
        };
        backendRule_PathTranslationFromJSON(object: any): _251.BackendRule_PathTranslation;
        backendRule_PathTranslationToJSON(object: _251.BackendRule_PathTranslation): string;
        Backend: {
            encode(message: _251.Backend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.Backend;
            fromJSON(object: any): _251.Backend;
            toJSON(message: _251.Backend): unknown;
            fromPartial<I_57 extends unknown>(object: I_57): _251.Backend;
        };
        BackendRule: {
            encode(message: _251.BackendRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.BackendRule;
            fromJSON(object: any): _251.BackendRule;
            toJSON(message: _251.BackendRule): unknown;
            fromPartial<I_58 extends unknown>(object: I_58): _251.BackendRule;
        };
        BackendRule_PathTranslation: typeof _251.BackendRule_PathTranslation;
        Authentication: {
            encode(message: _249.Authentication, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.Authentication;
            fromJSON(object: any): _249.Authentication;
            toJSON(message: _249.Authentication): unknown;
            fromPartial<I_59 extends unknown>(object: I_59): _249.Authentication;
        };
        AuthenticationRule: {
            encode(message: _249.AuthenticationRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.AuthenticationRule;
            fromJSON(object: any): _249.AuthenticationRule;
            toJSON(message: _249.AuthenticationRule): unknown;
            fromPartial<I_60 extends unknown>(object: I_60): _249.AuthenticationRule;
        };
        JwtLocation: {
            encode(message: _249.JwtLocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.JwtLocation;
            fromJSON(object: any): _249.JwtLocation;
            toJSON(message: _249.JwtLocation): unknown;
            fromPartial<I_61 extends unknown>(object: I_61): _249.JwtLocation;
        };
        AuthProvider: {
            encode(message: _249.AuthProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.AuthProvider;
            fromJSON(object: any): _249.AuthProvider;
            toJSON(message: _249.AuthProvider): unknown;
            fromPartial<I_62 extends unknown>(object: I_62): _249.AuthProvider;
        };
        OAuthRequirements: {
            encode(message: _249.OAuthRequirements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.OAuthRequirements;
            fromJSON(object: any): _249.OAuthRequirements;
            toJSON(message: _249.OAuthRequirements): unknown;
            fromPartial<I_63 extends unknown>(object: I_63): _249.OAuthRequirements;
        };
        AuthRequirement: {
            encode(message: _249.AuthRequirement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.AuthRequirement;
            fromJSON(object: any): _249.AuthRequirement;
            toJSON(message: _249.AuthRequirement): unknown;
            fromPartial<I_64 extends unknown>(object: I_64): _249.AuthRequirement;
        };
    };
    namespace logging {
        const type: {
            logSeverityFromJSON(object: any): _311.LogSeverity;
            logSeverityToJSON(object: _311.LogSeverity): string;
            LogSeverity: typeof _311.LogSeverity;
            HttpRequest: {
                encode(message: _309.HttpRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _309.HttpRequest;
                fromJSON(object: any): _309.HttpRequest;
                toJSON(message: _309.HttpRequest): unknown;
                fromPartial<I extends unknown>(object: I): _309.HttpRequest;
            };
        };
        const v2: {
            tailLogEntriesResponse_SuppressionInfo_ReasonFromJSON(object: any): _319.TailLogEntriesResponse_SuppressionInfo_Reason;
            tailLogEntriesResponse_SuppressionInfo_ReasonToJSON(object: _319.TailLogEntriesResponse_SuppressionInfo_Reason): string;
            DeleteLogRequest: {
                encode(message: _319.DeleteLogRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _319.DeleteLogRequest;
                fromJSON(object: any): _319.DeleteLogRequest;
                toJSON(message: _319.DeleteLogRequest): unknown;
                fromPartial<I extends unknown>(object: I): _319.DeleteLogRequest;
            };
            WriteLogEntriesRequest: {
                encode(message: _319.WriteLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _319.WriteLogEntriesRequest;
                fromJSON(object: any): _319.WriteLogEntriesRequest;
                toJSON(message: _319.WriteLogEntriesRequest): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _319.WriteLogEntriesRequest;
            };
            WriteLogEntriesRequest_LabelsEntry: {
                encode(message: _319.WriteLogEntriesRequest_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _319.WriteLogEntriesRequest_LabelsEntry;
                fromJSON(object: any): _319.WriteLogEntriesRequest_LabelsEntry;
                toJSON(message: _319.WriteLogEntriesRequest_LabelsEntry): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _319.WriteLogEntriesRequest_LabelsEntry;
            };
            WriteLogEntriesResponse: {
                encode(_: _319.WriteLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _319.WriteLogEntriesResponse;
                fromJSON(_: any): _319.WriteLogEntriesResponse;
                toJSON(_: _319.WriteLogEntriesResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _319.WriteLogEntriesResponse;
            };
            WriteLogEntriesPartialErrors: {
                encode(message: _319.WriteLogEntriesPartialErrors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _319.WriteLogEntriesPartialErrors;
                fromJSON(object: any): _319.WriteLogEntriesPartialErrors;
                toJSON(message: _319.WriteLogEntriesPartialErrors): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _319.WriteLogEntriesPartialErrors;
            };
            WriteLogEntriesPartialErrors_LogEntryErrorsEntry: {
                encode(message: _319.WriteLogEntriesPartialErrors_LogEntryErrorsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _319.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
                fromJSON(object: any): _319.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
                toJSON(message: _319.WriteLogEntriesPartialErrors_LogEntryErrorsEntry): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _319.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
            };
            ListLogEntriesRequest: {
                encode(message: _319.ListLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _319.ListLogEntriesRequest;
                fromJSON(object: any): _319.ListLogEntriesRequest;
                toJSON(message: _319.ListLogEntriesRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _319.ListLogEntriesRequest;
            };
            ListLogEntriesResponse: {
                encode(message: _319.ListLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _319.ListLogEntriesResponse;
                fromJSON(object: any): _319.ListLogEntriesResponse;
                toJSON(message: _319.ListLogEntriesResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _319.ListLogEntriesResponse;
            };
            ListMonitoredResourceDescriptorsRequest: {
                encode(message: _319.ListMonitoredResourceDescriptorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _319.ListMonitoredResourceDescriptorsRequest;
                fromJSON(object: any): _319.ListMonitoredResourceDescriptorsRequest;
                toJSON(message: _319.ListMonitoredResourceDescriptorsRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _319.ListMonitoredResourceDescriptorsRequest;
            };
            ListMonitoredResourceDescriptorsResponse: {
                encode(message: _319.ListMonitoredResourceDescriptorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _319.ListMonitoredResourceDescriptorsResponse;
                fromJSON(object: any): _319.ListMonitoredResourceDescriptorsResponse;
                toJSON(message: _319.ListMonitoredResourceDescriptorsResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _319.ListMonitoredResourceDescriptorsResponse;
            };
            ListLogsRequest: {
                encode(message: _319.ListLogsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _319.ListLogsRequest;
                fromJSON(object: any): _319.ListLogsRequest;
                toJSON(message: _319.ListLogsRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _319.ListLogsRequest;
            };
            ListLogsResponse: {
                encode(message: _319.ListLogsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _319.ListLogsResponse;
                fromJSON(object: any): _319.ListLogsResponse;
                toJSON(message: _319.ListLogsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _319.ListLogsResponse;
            };
            TailLogEntriesRequest: {
                encode(message: _319.TailLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _319.TailLogEntriesRequest;
                fromJSON(object: any): _319.TailLogEntriesRequest;
                toJSON(message: _319.TailLogEntriesRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _319.TailLogEntriesRequest;
            };
            TailLogEntriesResponse: {
                encode(message: _319.TailLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _319.TailLogEntriesResponse;
                fromJSON(object: any): _319.TailLogEntriesResponse;
                toJSON(message: _319.TailLogEntriesResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _319.TailLogEntriesResponse;
            };
            TailLogEntriesResponse_SuppressionInfo: {
                encode(message: _319.TailLogEntriesResponse_SuppressionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _319.TailLogEntriesResponse_SuppressionInfo;
                fromJSON(object: any): _319.TailLogEntriesResponse_SuppressionInfo;
                toJSON(message: _319.TailLogEntriesResponse_SuppressionInfo): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _319.TailLogEntriesResponse_SuppressionInfo;
            };
            TailLogEntriesResponse_SuppressionInfo_Reason: typeof _319.TailLogEntriesResponse_SuppressionInfo_Reason;
            LoggingServiceV2ClientImpl: typeof _319.LoggingServiceV2ClientImpl;
            logMetric_ApiVersionFromJSON(object: any): _317.LogMetric_ApiVersion;
            logMetric_ApiVersionToJSON(object: _317.LogMetric_ApiVersion): string;
            LogMetric: {
                encode(message: _317.LogMetric, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _317.LogMetric;
                fromJSON(object: any): _317.LogMetric;
                toJSON(message: _317.LogMetric): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _317.LogMetric;
            };
            LogMetric_ApiVersion: typeof _317.LogMetric_ApiVersion;
            LogMetric_LabelExtractorsEntry: {
                encode(message: _317.LogMetric_LabelExtractorsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _317.LogMetric_LabelExtractorsEntry;
                fromJSON(object: any): _317.LogMetric_LabelExtractorsEntry;
                toJSON(message: _317.LogMetric_LabelExtractorsEntry): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _317.LogMetric_LabelExtractorsEntry;
            };
            ListLogMetricsRequest: {
                encode(message: _317.ListLogMetricsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _317.ListLogMetricsRequest;
                fromJSON(object: any): _317.ListLogMetricsRequest;
                toJSON(message: _317.ListLogMetricsRequest): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _317.ListLogMetricsRequest;
            };
            ListLogMetricsResponse: {
                encode(message: _317.ListLogMetricsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _317.ListLogMetricsResponse;
                fromJSON(object: any): _317.ListLogMetricsResponse;
                toJSON(message: _317.ListLogMetricsResponse): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _317.ListLogMetricsResponse;
            };
            GetLogMetricRequest: {
                encode(message: _317.GetLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _317.GetLogMetricRequest;
                fromJSON(object: any): _317.GetLogMetricRequest;
                toJSON(message: _317.GetLogMetricRequest): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _317.GetLogMetricRequest;
            };
            CreateLogMetricRequest: {
                encode(message: _317.CreateLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _317.CreateLogMetricRequest;
                fromJSON(object: any): _317.CreateLogMetricRequest;
                toJSON(message: _317.CreateLogMetricRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _317.CreateLogMetricRequest;
            };
            UpdateLogMetricRequest: {
                encode(message: _317.UpdateLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _317.UpdateLogMetricRequest;
                fromJSON(object: any): _317.UpdateLogMetricRequest;
                toJSON(message: _317.UpdateLogMetricRequest): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _317.UpdateLogMetricRequest;
            };
            DeleteLogMetricRequest: {
                encode(message: _317.DeleteLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _317.DeleteLogMetricRequest;
                fromJSON(object: any): _317.DeleteLogMetricRequest;
                toJSON(message: _317.DeleteLogMetricRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _317.DeleteLogMetricRequest;
            };
            MetricsServiceV2ClientImpl: typeof _317.MetricsServiceV2ClientImpl;
            lifecycleStateFromJSON(object: any): _315.LifecycleState;
            lifecycleStateToJSON(object: _315.LifecycleState): string;
            operationStateFromJSON(object: any): _315.OperationState;
            operationStateToJSON(object: _315.OperationState): string;
            logSink_VersionFormatFromJSON(object: any): _315.LogSink_VersionFormat;
            logSink_VersionFormatToJSON(object: _315.LogSink_VersionFormat): string;
            LifecycleState: typeof _315.LifecycleState;
            OperationState: typeof _315.OperationState;
            LogBucket: {
                encode(message: _315.LogBucket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.LogBucket;
                fromJSON(object: any): _315.LogBucket;
                toJSON(message: _315.LogBucket): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _315.LogBucket;
            };
            LogView: {
                encode(message: _315.LogView, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.LogView;
                fromJSON(object: any): _315.LogView;
                toJSON(message: _315.LogView): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _315.LogView;
            };
            LogSink: {
                encode(message: _315.LogSink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.LogSink;
                fromJSON(object: any): _315.LogSink;
                toJSON(message: _315.LogSink): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _315.LogSink;
            };
            LogSink_VersionFormat: typeof _315.LogSink_VersionFormat;
            BigQueryOptions: {
                encode(message: _315.BigQueryOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.BigQueryOptions;
                fromJSON(object: any): _315.BigQueryOptions;
                toJSON(message: _315.BigQueryOptions): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _315.BigQueryOptions;
            };
            ListBucketsRequest: {
                encode(message: _315.ListBucketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.ListBucketsRequest;
                fromJSON(object: any): _315.ListBucketsRequest;
                toJSON(message: _315.ListBucketsRequest): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _315.ListBucketsRequest;
            };
            ListBucketsResponse: {
                encode(message: _315.ListBucketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.ListBucketsResponse;
                fromJSON(object: any): _315.ListBucketsResponse;
                toJSON(message: _315.ListBucketsResponse): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _315.ListBucketsResponse;
            };
            CreateBucketRequest: {
                encode(message: _315.CreateBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.CreateBucketRequest;
                fromJSON(object: any): _315.CreateBucketRequest;
                toJSON(message: _315.CreateBucketRequest): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _315.CreateBucketRequest;
            };
            UpdateBucketRequest: {
                encode(message: _315.UpdateBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.UpdateBucketRequest;
                fromJSON(object: any): _315.UpdateBucketRequest;
                toJSON(message: _315.UpdateBucketRequest): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _315.UpdateBucketRequest;
            };
            GetBucketRequest: {
                encode(message: _315.GetBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.GetBucketRequest;
                fromJSON(object: any): _315.GetBucketRequest;
                toJSON(message: _315.GetBucketRequest): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _315.GetBucketRequest;
            };
            DeleteBucketRequest: {
                encode(message: _315.DeleteBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.DeleteBucketRequest;
                fromJSON(object: any): _315.DeleteBucketRequest;
                toJSON(message: _315.DeleteBucketRequest): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _315.DeleteBucketRequest;
            };
            UndeleteBucketRequest: {
                encode(message: _315.UndeleteBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.UndeleteBucketRequest;
                fromJSON(object: any): _315.UndeleteBucketRequest;
                toJSON(message: _315.UndeleteBucketRequest): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _315.UndeleteBucketRequest;
            };
            ListViewsRequest: {
                encode(message: _315.ListViewsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.ListViewsRequest;
                fromJSON(object: any): _315.ListViewsRequest;
                toJSON(message: _315.ListViewsRequest): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _315.ListViewsRequest;
            };
            ListViewsResponse: {
                encode(message: _315.ListViewsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.ListViewsResponse;
                fromJSON(object: any): _315.ListViewsResponse;
                toJSON(message: _315.ListViewsResponse): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _315.ListViewsResponse;
            };
            CreateViewRequest: {
                encode(message: _315.CreateViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.CreateViewRequest;
                fromJSON(object: any): _315.CreateViewRequest;
                toJSON(message: _315.CreateViewRequest): unknown;
                fromPartial<I_36 extends unknown>(object: I_36): _315.CreateViewRequest;
            };
            UpdateViewRequest: {
                encode(message: _315.UpdateViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.UpdateViewRequest;
                fromJSON(object: any): _315.UpdateViewRequest;
                toJSON(message: _315.UpdateViewRequest): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _315.UpdateViewRequest;
            };
            GetViewRequest: {
                encode(message: _315.GetViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.GetViewRequest;
                fromJSON(object: any): _315.GetViewRequest;
                toJSON(message: _315.GetViewRequest): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _315.GetViewRequest;
            };
            DeleteViewRequest: {
                encode(message: _315.DeleteViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.DeleteViewRequest;
                fromJSON(object: any): _315.DeleteViewRequest;
                toJSON(message: _315.DeleteViewRequest): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _315.DeleteViewRequest;
            };
            ListSinksRequest: {
                encode(message: _315.ListSinksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.ListSinksRequest;
                fromJSON(object: any): _315.ListSinksRequest;
                toJSON(message: _315.ListSinksRequest): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _315.ListSinksRequest;
            };
            ListSinksResponse: {
                encode(message: _315.ListSinksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.ListSinksResponse;
                fromJSON(object: any): _315.ListSinksResponse;
                toJSON(message: _315.ListSinksResponse): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _315.ListSinksResponse;
            };
            GetSinkRequest: {
                encode(message: _315.GetSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.GetSinkRequest;
                fromJSON(object: any): _315.GetSinkRequest;
                toJSON(message: _315.GetSinkRequest): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _315.GetSinkRequest;
            };
            CreateSinkRequest: {
                encode(message: _315.CreateSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.CreateSinkRequest;
                fromJSON(object: any): _315.CreateSinkRequest;
                toJSON(message: _315.CreateSinkRequest): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _315.CreateSinkRequest;
            };
            UpdateSinkRequest: {
                encode(message: _315.UpdateSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.UpdateSinkRequest;
                fromJSON(object: any): _315.UpdateSinkRequest;
                toJSON(message: _315.UpdateSinkRequest): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _315.UpdateSinkRequest;
            };
            DeleteSinkRequest: {
                encode(message: _315.DeleteSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.DeleteSinkRequest;
                fromJSON(object: any): _315.DeleteSinkRequest;
                toJSON(message: _315.DeleteSinkRequest): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _315.DeleteSinkRequest;
            };
            LogExclusion: {
                encode(message: _315.LogExclusion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.LogExclusion;
                fromJSON(object: any): _315.LogExclusion;
                toJSON(message: _315.LogExclusion): unknown;
                fromPartial<I_46 extends unknown>(object: I_46): _315.LogExclusion;
            };
            ListExclusionsRequest: {
                encode(message: _315.ListExclusionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.ListExclusionsRequest;
                fromJSON(object: any): _315.ListExclusionsRequest;
                toJSON(message: _315.ListExclusionsRequest): unknown;
                fromPartial<I_47 extends unknown>(object: I_47): _315.ListExclusionsRequest;
            };
            ListExclusionsResponse: {
                encode(message: _315.ListExclusionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.ListExclusionsResponse;
                fromJSON(object: any): _315.ListExclusionsResponse;
                toJSON(message: _315.ListExclusionsResponse): unknown;
                fromPartial<I_48 extends unknown>(object: I_48): _315.ListExclusionsResponse;
            };
            GetExclusionRequest: {
                encode(message: _315.GetExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.GetExclusionRequest;
                fromJSON(object: any): _315.GetExclusionRequest;
                toJSON(message: _315.GetExclusionRequest): unknown;
                fromPartial<I_49 extends unknown>(object: I_49): _315.GetExclusionRequest;
            };
            CreateExclusionRequest: {
                encode(message: _315.CreateExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.CreateExclusionRequest;
                fromJSON(object: any): _315.CreateExclusionRequest;
                toJSON(message: _315.CreateExclusionRequest): unknown;
                fromPartial<I_50 extends unknown>(object: I_50): _315.CreateExclusionRequest;
            };
            UpdateExclusionRequest: {
                encode(message: _315.UpdateExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.UpdateExclusionRequest;
                fromJSON(object: any): _315.UpdateExclusionRequest;
                toJSON(message: _315.UpdateExclusionRequest): unknown;
                fromPartial<I_51 extends unknown>(object: I_51): _315.UpdateExclusionRequest;
            };
            DeleteExclusionRequest: {
                encode(message: _315.DeleteExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.DeleteExclusionRequest;
                fromJSON(object: any): _315.DeleteExclusionRequest;
                toJSON(message: _315.DeleteExclusionRequest): unknown;
                fromPartial<I_52 extends unknown>(object: I_52): _315.DeleteExclusionRequest;
            };
            GetCmekSettingsRequest: {
                encode(message: _315.GetCmekSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.GetCmekSettingsRequest;
                fromJSON(object: any): _315.GetCmekSettingsRequest;
                toJSON(message: _315.GetCmekSettingsRequest): unknown;
                fromPartial<I_53 extends unknown>(object: I_53): _315.GetCmekSettingsRequest;
            };
            UpdateCmekSettingsRequest: {
                encode(message: _315.UpdateCmekSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.UpdateCmekSettingsRequest;
                fromJSON(object: any): _315.UpdateCmekSettingsRequest;
                toJSON(message: _315.UpdateCmekSettingsRequest): unknown;
                fromPartial<I_54 extends unknown>(object: I_54): _315.UpdateCmekSettingsRequest;
            };
            CmekSettings: {
                encode(message: _315.CmekSettings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.CmekSettings;
                fromJSON(object: any): _315.CmekSettings;
                toJSON(message: _315.CmekSettings): unknown;
                fromPartial<I_55 extends unknown>(object: I_55): _315.CmekSettings;
            };
            GetSettingsRequest: {
                encode(message: _315.GetSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.GetSettingsRequest;
                fromJSON(object: any): _315.GetSettingsRequest;
                toJSON(message: _315.GetSettingsRequest): unknown;
                fromPartial<I_56 extends unknown>(object: I_56): _315.GetSettingsRequest;
            };
            UpdateSettingsRequest: {
                encode(message: _315.UpdateSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.UpdateSettingsRequest;
                fromJSON(object: any): _315.UpdateSettingsRequest;
                toJSON(message: _315.UpdateSettingsRequest): unknown;
                fromPartial<I_57 extends unknown>(object: I_57): _315.UpdateSettingsRequest;
            };
            Settings: {
                encode(message: _315.Settings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.Settings;
                fromJSON(object: any): _315.Settings;
                toJSON(message: _315.Settings): unknown;
                fromPartial<I_58 extends unknown>(object: I_58): _315.Settings;
            };
            CopyLogEntriesRequest: {
                encode(message: _315.CopyLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.CopyLogEntriesRequest;
                fromJSON(object: any): _315.CopyLogEntriesRequest;
                toJSON(message: _315.CopyLogEntriesRequest): unknown;
                fromPartial<I_59 extends unknown>(object: I_59): _315.CopyLogEntriesRequest;
            };
            CopyLogEntriesMetadata: {
                encode(message: _315.CopyLogEntriesMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.CopyLogEntriesMetadata;
                fromJSON(object: any): _315.CopyLogEntriesMetadata;
                toJSON(message: _315.CopyLogEntriesMetadata): unknown;
                fromPartial<I_60 extends unknown>(object: I_60): _315.CopyLogEntriesMetadata;
            };
            CopyLogEntriesResponse: {
                encode(message: _315.CopyLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.CopyLogEntriesResponse;
                fromJSON(object: any): _315.CopyLogEntriesResponse;
                toJSON(message: _315.CopyLogEntriesResponse): unknown;
                fromPartial<I_61 extends unknown>(object: I_61): _315.CopyLogEntriesResponse;
            };
            ConfigServiceV2ClientImpl: typeof _315.ConfigServiceV2ClientImpl;
            LogEntry: {
                encode(message: _313.LogEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.LogEntry;
                fromJSON(object: any): _313.LogEntry;
                toJSON(message: _313.LogEntry): unknown;
                fromPartial<I_62 extends unknown>(object: I_62): _313.LogEntry;
            };
            LogEntry_LabelsEntry: {
                encode(message: _313.LogEntry_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.LogEntry_LabelsEntry;
                fromJSON(object: any): _313.LogEntry_LabelsEntry;
                toJSON(message: _313.LogEntry_LabelsEntry): unknown;
                fromPartial<I_63 extends unknown>(object: I_63): _313.LogEntry_LabelsEntry;
            };
            LogEntryOperation: {
                encode(message: _313.LogEntryOperation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.LogEntryOperation;
                fromJSON(object: any): _313.LogEntryOperation;
                toJSON(message: _313.LogEntryOperation): unknown;
                fromPartial<I_64 extends unknown>(object: I_64): _313.LogEntryOperation;
            };
            LogEntrySourceLocation: {
                encode(message: _313.LogEntrySourceLocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.LogEntrySourceLocation;
                fromJSON(object: any): _313.LogEntrySourceLocation;
                toJSON(message: _313.LogEntrySourceLocation): unknown;
                fromPartial<I_65 extends unknown>(object: I_65): _313.LogEntrySourceLocation;
            };
            LogSplit: {
                encode(message: _313.LogSplit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.LogSplit;
                fromJSON(object: any): _313.LogSplit;
                toJSON(message: _313.LogSplit): unknown;
                fromPartial<I_66 extends unknown>(object: I_66): _313.LogSplit;
            };
        };
    }
    const longrunning: {
        Operation: {
            encode(message: _321.Operation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _321.Operation;
            fromJSON(object: any): _321.Operation;
            toJSON(message: _321.Operation): unknown;
            fromPartial<I extends unknown>(object: I): _321.Operation;
        };
        GetOperationRequest: {
            encode(message: _321.GetOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _321.GetOperationRequest;
            fromJSON(object: any): _321.GetOperationRequest;
            toJSON(message: _321.GetOperationRequest): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _321.GetOperationRequest;
        };
        ListOperationsRequest: {
            encode(message: _321.ListOperationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _321.ListOperationsRequest;
            fromJSON(object: any): _321.ListOperationsRequest;
            toJSON(message: _321.ListOperationsRequest): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _321.ListOperationsRequest;
        };
        ListOperationsResponse: {
            encode(message: _321.ListOperationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _321.ListOperationsResponse;
            fromJSON(object: any): _321.ListOperationsResponse;
            toJSON(message: _321.ListOperationsResponse): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _321.ListOperationsResponse;
        };
        CancelOperationRequest: {
            encode(message: _321.CancelOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _321.CancelOperationRequest;
            fromJSON(object: any): _321.CancelOperationRequest;
            toJSON(message: _321.CancelOperationRequest): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _321.CancelOperationRequest;
        };
        DeleteOperationRequest: {
            encode(message: _321.DeleteOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _321.DeleteOperationRequest;
            fromJSON(object: any): _321.DeleteOperationRequest;
            toJSON(message: _321.DeleteOperationRequest): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _321.DeleteOperationRequest;
        };
        WaitOperationRequest: {
            encode(message: _321.WaitOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _321.WaitOperationRequest;
            fromJSON(object: any): _321.WaitOperationRequest;
            toJSON(message: _321.WaitOperationRequest): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _321.WaitOperationRequest;
        };
        OperationInfo: {
            encode(message: _321.OperationInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _321.OperationInfo;
            fromJSON(object: any): _321.OperationInfo;
            toJSON(message: _321.OperationInfo): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _321.OperationInfo;
        };
        OperationsClientImpl: typeof _321.OperationsClientImpl;
    };
    const protobuf: {
        DoubleValue: {
            encode(message: _343.DoubleValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _343.DoubleValue;
            fromJSON(object: any): _343.DoubleValue;
            toJSON(message: _343.DoubleValue): unknown;
            fromPartial<I extends unknown>(object: I): _343.DoubleValue;
        };
        FloatValue: {
            encode(message: _343.FloatValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _343.FloatValue;
            fromJSON(object: any): _343.FloatValue;
            toJSON(message: _343.FloatValue): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _343.FloatValue;
        };
        Int64Value: {
            encode(message: _343.Int64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _343.Int64Value;
            fromJSON(object: any): _343.Int64Value;
            toJSON(message: _343.Int64Value): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _343.Int64Value;
        };
        UInt64Value: {
            encode(message: _343.UInt64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _343.UInt64Value;
            fromJSON(object: any): _343.UInt64Value;
            toJSON(message: _343.UInt64Value): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _343.UInt64Value;
        };
        Int32Value: {
            encode(message: _343.Int32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _343.Int32Value;
            fromJSON(object: any): _343.Int32Value;
            toJSON(message: _343.Int32Value): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _343.Int32Value;
        };
        UInt32Value: {
            encode(message: _343.UInt32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _343.UInt32Value;
            fromJSON(object: any): _343.UInt32Value;
            toJSON(message: _343.UInt32Value): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _343.UInt32Value;
        };
        BoolValue: {
            encode(message: _343.BoolValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _343.BoolValue;
            fromJSON(object: any): _343.BoolValue;
            toJSON(message: _343.BoolValue): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _343.BoolValue;
        };
        StringValue: {
            encode(message: _343.StringValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _343.StringValue;
            fromJSON(object: any): _343.StringValue;
            toJSON(message: _343.StringValue): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _343.StringValue;
        };
        BytesValue: {
            encode(message: _343.BytesValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _343.BytesValue;
            fromJSON(object: any): _343.BytesValue;
            toJSON(message: _343.BytesValue): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _343.BytesValue;
        };
        syntaxFromJSON(object: any): _341.Syntax;
        syntaxToJSON(object: _341.Syntax): string;
        field_KindFromJSON(object: any): _341.Field_Kind;
        field_KindToJSON(object: _341.Field_Kind): string;
        field_CardinalityFromJSON(object: any): _341.Field_Cardinality;
        field_CardinalityToJSON(object: _341.Field_Cardinality): string;
        Syntax: typeof _341.Syntax;
        Type: {
            encode(message: _341.Type, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _341.Type;
            fromJSON(object: any): _341.Type;
            toJSON(message: _341.Type): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _341.Type;
        };
        Field: {
            encode(message: _341.Field, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _341.Field;
            fromJSON(object: any): _341.Field;
            toJSON(message: _341.Field): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _341.Field;
        };
        Field_Kind: typeof _341.Field_Kind;
        Field_Cardinality: typeof _341.Field_Cardinality;
        Enum: {
            encode(message: _341.Enum, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _341.Enum;
            fromJSON(object: any): _341.Enum;
            toJSON(message: _341.Enum): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _341.Enum;
        };
        EnumValue: {
            encode(message: _341.EnumValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _341.EnumValue;
            fromJSON(object: any): _341.EnumValue;
            toJSON(message: _341.EnumValue): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _341.EnumValue;
        };
        Option: {
            encode(message: _341.Option, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _341.Option;
            fromJSON(object: any): _341.Option;
            toJSON(message: _341.Option): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _341.Option;
        };
        Timestamp: {
            encode(message: _339.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.Timestamp;
            fromJSON(object: any): _339.Timestamp;
            toJSON(message: _339.Timestamp): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _339.Timestamp;
        };
        nullValueFromJSON(object: any): _337.NullValue;
        nullValueToJSON(object: _337.NullValue): string;
        NullValue: typeof _337.NullValue;
        Struct: {
            encode(message: _337.Struct, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.Struct;
            fromJSON(object: any): _337.Struct;
            toJSON(message: _337.Struct): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _337.Struct;
            wrap(object: {
                [key: string]: any;
            }): _337.Struct;
            unwrap(message: _337.Struct): {
                [key: string]: any;
            };
        };
        Struct_FieldsEntry: {
            encode(message: _337.Struct_FieldsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.Struct_FieldsEntry;
            fromJSON(object: any): _337.Struct_FieldsEntry;
            toJSON(message: _337.Struct_FieldsEntry): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _337.Struct_FieldsEntry;
        };
        Value: {
            encode(message: _337.Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.Value;
            fromJSON(object: any): _337.Value;
            toJSON(message: _337.Value): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _337.Value;
            wrap(value: any): _337.Value;
            unwrap(message: _337.Value): string | number | boolean | Object | any[];
        };
        ListValue: {
            encode(message: _337.ListValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.ListValue;
            fromJSON(object: any): _337.ListValue;
            toJSON(message: _337.ListValue): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _337.ListValue;
            wrap(value: any[]): _337.ListValue;
            unwrap(message: _337.ListValue): any[];
        };
        SourceContext: {
            encode(message: _335.SourceContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.SourceContext;
            fromJSON(object: any): _335.SourceContext;
            toJSON(message: _335.SourceContext): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _335.SourceContext;
        };
        FieldMask: {
            encode(message: _333.FieldMask, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _333.FieldMask;
            fromJSON(object: any): _333.FieldMask;
            toJSON(message: _333.FieldMask): string;
            fromPartial<I_20 extends unknown>(object: I_20): _333.FieldMask;
            wrap(paths: string[]): _333.FieldMask;
            unwrap(message: _333.FieldMask): string[];
        };
        Empty: {
            encode(_: _331.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _331.Empty;
            fromJSON(_: any): _331.Empty;
            toJSON(_: _331.Empty): unknown;
            fromPartial<I_21 extends unknown>(_: I_21): _331.Empty;
        };
        Duration: {
            encode(message: _329.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _329.Duration;
            fromJSON(object: any): _329.Duration;
            toJSON(message: _329.Duration): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _329.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _327.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _327.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _327.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _327.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _327.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _327.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _327.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _327.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _327.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _327.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _327.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _327.MethodOptions_IdempotencyLevel): string;
        FileDescriptorSet: {
            encode(message: _327.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.FileDescriptorSet;
            fromJSON(object: any): _327.FileDescriptorSet;
            toJSON(message: _327.FileDescriptorSet): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _327.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _327.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.FileDescriptorProto;
            fromJSON(object: any): _327.FileDescriptorProto;
            toJSON(message: _327.FileDescriptorProto): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _327.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _327.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.DescriptorProto;
            fromJSON(object: any): _327.DescriptorProto;
            toJSON(message: _327.DescriptorProto): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _327.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _327.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _327.DescriptorProto_ExtensionRange;
            toJSON(message: _327.DescriptorProto_ExtensionRange): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _327.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _327.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.DescriptorProto_ReservedRange;
            fromJSON(object: any): _327.DescriptorProto_ReservedRange;
            toJSON(message: _327.DescriptorProto_ReservedRange): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _327.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _327.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.ExtensionRangeOptions;
            fromJSON(object: any): _327.ExtensionRangeOptions;
            toJSON(message: _327.ExtensionRangeOptions): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _327.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _327.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.FieldDescriptorProto;
            fromJSON(object: any): _327.FieldDescriptorProto;
            toJSON(message: _327.FieldDescriptorProto): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _327.FieldDescriptorProto;
        };
        FieldDescriptorProto_Type: typeof _327.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _327.FieldDescriptorProto_Label;
        OneofDescriptorProto: {
            encode(message: _327.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.OneofDescriptorProto;
            fromJSON(object: any): _327.OneofDescriptorProto;
            toJSON(message: _327.OneofDescriptorProto): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _327.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _327.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.EnumDescriptorProto;
            fromJSON(object: any): _327.EnumDescriptorProto;
            toJSON(message: _327.EnumDescriptorProto): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _327.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _327.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _327.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _327.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _327.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _327.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.EnumValueDescriptorProto;
            fromJSON(object: any): _327.EnumValueDescriptorProto;
            toJSON(message: _327.EnumValueDescriptorProto): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _327.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _327.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.ServiceDescriptorProto;
            fromJSON(object: any): _327.ServiceDescriptorProto;
            toJSON(message: _327.ServiceDescriptorProto): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _327.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _327.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.MethodDescriptorProto;
            fromJSON(object: any): _327.MethodDescriptorProto;
            toJSON(message: _327.MethodDescriptorProto): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _327.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _327.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.FileOptions;
            fromJSON(object: any): _327.FileOptions;
            toJSON(message: _327.FileOptions): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _327.FileOptions;
        };
        FileOptions_OptimizeMode: typeof _327.FileOptions_OptimizeMode;
        MessageOptions: {
            encode(message: _327.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.MessageOptions;
            fromJSON(object: any): _327.MessageOptions;
            toJSON(message: _327.MessageOptions): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _327.MessageOptions;
        };
        FieldOptions: {
            encode(message: _327.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.FieldOptions;
            fromJSON(object: any): _327.FieldOptions;
            toJSON(message: _327.FieldOptions): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _327.FieldOptions;
        };
        FieldOptions_CType: typeof _327.FieldOptions_CType;
        FieldOptions_JSType: typeof _327.FieldOptions_JSType;
        OneofOptions: {
            encode(message: _327.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.OneofOptions;
            fromJSON(object: any): _327.OneofOptions;
            toJSON(message: _327.OneofOptions): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _327.OneofOptions;
        };
        EnumOptions: {
            encode(message: _327.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.EnumOptions;
            fromJSON(object: any): _327.EnumOptions;
            toJSON(message: _327.EnumOptions): unknown;
            fromPartial<I_40 extends unknown>(object: I_40): _327.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _327.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.EnumValueOptions;
            fromJSON(object: any): _327.EnumValueOptions;
            toJSON(message: _327.EnumValueOptions): unknown;
            fromPartial<I_41 extends unknown>(object: I_41): _327.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _327.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.ServiceOptions;
            fromJSON(object: any): _327.ServiceOptions;
            toJSON(message: _327.ServiceOptions): unknown;
            fromPartial<I_42 extends unknown>(object: I_42): _327.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _327.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.MethodOptions;
            fromJSON(object: any): _327.MethodOptions;
            toJSON(message: _327.MethodOptions): unknown;
            fromPartial<I_43 extends unknown>(object: I_43): _327.MethodOptions;
        };
        MethodOptions_IdempotencyLevel: typeof _327.MethodOptions_IdempotencyLevel;
        UninterpretedOption: {
            encode(message: _327.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.UninterpretedOption;
            fromJSON(object: any): _327.UninterpretedOption;
            toJSON(message: _327.UninterpretedOption): unknown;
            fromPartial<I_44 extends unknown>(object: I_44): _327.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _327.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.UninterpretedOption_NamePart;
            fromJSON(object: any): _327.UninterpretedOption_NamePart;
            toJSON(message: _327.UninterpretedOption_NamePart): unknown;
            fromPartial<I_45 extends unknown>(object: I_45): _327.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _327.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.SourceCodeInfo;
            fromJSON(object: any): _327.SourceCodeInfo;
            toJSON(message: _327.SourceCodeInfo): unknown;
            fromPartial<I_46 extends unknown>(object: I_46): _327.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _327.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.SourceCodeInfo_Location;
            fromJSON(object: any): _327.SourceCodeInfo_Location;
            toJSON(message: _327.SourceCodeInfo_Location): unknown;
            fromPartial<I_47 extends unknown>(object: I_47): _327.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _327.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.GeneratedCodeInfo;
            fromJSON(object: any): _327.GeneratedCodeInfo;
            toJSON(message: _327.GeneratedCodeInfo): unknown;
            fromPartial<I_48 extends unknown>(object: I_48): _327.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _327.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _327.GeneratedCodeInfo_Annotation;
            toJSON(message: _327.GeneratedCodeInfo_Annotation): unknown;
            fromPartial<I_49 extends unknown>(object: I_49): _327.GeneratedCodeInfo_Annotation;
        };
        Api: {
            encode(message: _325.Api, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _325.Api;
            fromJSON(object: any): _325.Api;
            toJSON(message: _325.Api): unknown;
            fromPartial<I_50 extends unknown>(object: I_50): _325.Api;
        };
        Method: {
            encode(message: _325.Method, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _325.Method;
            fromJSON(object: any): _325.Method;
            toJSON(message: _325.Method): unknown;
            fromPartial<I_51 extends unknown>(object: I_51): _325.Method;
        };
        Mixin: {
            encode(message: _325.Mixin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _325.Mixin;
            fromJSON(object: any): _325.Mixin;
            toJSON(message: _325.Mixin): unknown;
            fromPartial<I_52 extends unknown>(object: I_52): _325.Mixin;
        };
        Any: {
            encode(message: _323.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _323.Any;
            fromJSON(object: any): _323.Any;
            toJSON(message: _323.Any): unknown;
            fromPartial<I_53 extends unknown>(object: I_53): _323.Any;
        };
    };
    const rpc: {
        Status: {
            encode(message: _349.Status, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _349.Status;
            fromJSON(object: any): _349.Status;
            toJSON(message: _349.Status): unknown;
            fromPartial<I extends unknown>(object: I): _349.Status;
        };
        RetryInfo: {
            encode(message: _347.RetryInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.RetryInfo;
            fromJSON(object: any): _347.RetryInfo;
            toJSON(message: _347.RetryInfo): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _347.RetryInfo;
        };
        DebugInfo: {
            encode(message: _347.DebugInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.DebugInfo;
            fromJSON(object: any): _347.DebugInfo;
            toJSON(message: _347.DebugInfo): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _347.DebugInfo;
        };
        QuotaFailure: {
            encode(message: _347.QuotaFailure, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.QuotaFailure;
            fromJSON(object: any): _347.QuotaFailure;
            toJSON(message: _347.QuotaFailure): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _347.QuotaFailure;
        };
        QuotaFailure_Violation: {
            encode(message: _347.QuotaFailure_Violation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.QuotaFailure_Violation;
            fromJSON(object: any): _347.QuotaFailure_Violation;
            toJSON(message: _347.QuotaFailure_Violation): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _347.QuotaFailure_Violation;
        };
        ErrorInfo: {
            encode(message: _347.ErrorInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.ErrorInfo;
            fromJSON(object: any): _347.ErrorInfo;
            toJSON(message: _347.ErrorInfo): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _347.ErrorInfo;
        };
        ErrorInfo_MetadataEntry: {
            encode(message: _347.ErrorInfo_MetadataEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.ErrorInfo_MetadataEntry;
            fromJSON(object: any): _347.ErrorInfo_MetadataEntry;
            toJSON(message: _347.ErrorInfo_MetadataEntry): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _347.ErrorInfo_MetadataEntry;
        };
        PreconditionFailure: {
            encode(message: _347.PreconditionFailure, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.PreconditionFailure;
            fromJSON(object: any): _347.PreconditionFailure;
            toJSON(message: _347.PreconditionFailure): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _347.PreconditionFailure;
        };
        PreconditionFailure_Violation: {
            encode(message: _347.PreconditionFailure_Violation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.PreconditionFailure_Violation;
            fromJSON(object: any): _347.PreconditionFailure_Violation;
            toJSON(message: _347.PreconditionFailure_Violation): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _347.PreconditionFailure_Violation;
        };
        BadRequest: {
            encode(message: _347.BadRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.BadRequest;
            fromJSON(object: any): _347.BadRequest;
            toJSON(message: _347.BadRequest): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _347.BadRequest;
        };
        BadRequest_FieldViolation: {
            encode(message: _347.BadRequest_FieldViolation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.BadRequest_FieldViolation;
            fromJSON(object: any): _347.BadRequest_FieldViolation;
            toJSON(message: _347.BadRequest_FieldViolation): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _347.BadRequest_FieldViolation;
        };
        RequestInfo: {
            encode(message: _347.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.RequestInfo;
            fromJSON(object: any): _347.RequestInfo;
            toJSON(message: _347.RequestInfo): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _347.RequestInfo;
        };
        ResourceInfo: {
            encode(message: _347.ResourceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.ResourceInfo;
            fromJSON(object: any): _347.ResourceInfo;
            toJSON(message: _347.ResourceInfo): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _347.ResourceInfo;
        };
        Help: {
            encode(message: _347.Help, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.Help;
            fromJSON(object: any): _347.Help;
            toJSON(message: _347.Help): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _347.Help;
        };
        Help_Link: {
            encode(message: _347.Help_Link, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.Help_Link;
            fromJSON(object: any): _347.Help_Link;
            toJSON(message: _347.Help_Link): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _347.Help_Link;
        };
        LocalizedMessage: {
            encode(message: _347.LocalizedMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.LocalizedMessage;
            fromJSON(object: any): _347.LocalizedMessage;
            toJSON(message: _347.LocalizedMessage): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _347.LocalizedMessage;
        };
        codeFromJSON(object: any): _345.Code;
        codeToJSON(object: _345.Code): string;
        Code: typeof _345.Code;
    };
}
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgTransfer: {
                    encode(message: _357.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _357.MsgTransfer;
                    fromJSON(object: any): _357.MsgTransfer;
                    toJSON(message: _357.MsgTransfer): unknown;
                    fromPartial<I extends unknown>(object: I): _357.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _357.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _357.MsgTransferResponse;
                    fromJSON(_: any): _357.MsgTransferResponse;
                    toJSON(_: _357.MsgTransferResponse): unknown;
                    fromPartial<I_1 extends unknown>(_: I_1): _357.MsgTransferResponse;
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _357.MsgTransfer) => {
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
                        }) => _357.MsgTransfer;
                    };
                };
                encoded: {
                    transfer(value: _357.MsgTransfer): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                messages: {
                    transfer(value: _357.MsgTransfer): {
                        typeUrl: string;
                        value: _357.MsgTransfer;
                    };
                };
                DenomTrace: {
                    encode(message: _355.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _355.DenomTrace;
                    fromJSON(object: any): _355.DenomTrace;
                    toJSON(message: _355.DenomTrace): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _355.DenomTrace;
                };
                Params: {
                    encode(message: _355.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _355.Params;
                    fromJSON(object: any): _355.Params;
                    toJSON(message: _355.Params): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _355.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _353.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _353.QueryDenomTraceRequest;
                    fromJSON(object: any): _353.QueryDenomTraceRequest;
                    toJSON(message: _353.QueryDenomTraceRequest): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _353.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _353.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _353.QueryDenomTraceResponse;
                    fromJSON(object: any): _353.QueryDenomTraceResponse;
                    toJSON(message: _353.QueryDenomTraceResponse): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _353.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _353.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _353.QueryDenomTracesRequest;
                    fromJSON(object: any): _353.QueryDenomTracesRequest;
                    toJSON(message: _353.QueryDenomTracesRequest): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _353.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _353.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _353.QueryDenomTracesResponse;
                    fromJSON(object: any): _353.QueryDenomTracesResponse;
                    toJSON(message: _353.QueryDenomTracesResponse): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _353.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _353.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _353.QueryParamsRequest;
                    fromJSON(_: any): _353.QueryParamsRequest;
                    toJSON(_: _353.QueryParamsRequest): unknown;
                    fromPartial<I_8 extends unknown>(_: I_8): _353.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _353.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _353.QueryParamsResponse;
                    fromJSON(object: any): _353.QueryParamsResponse;
                    toJSON(message: _353.QueryParamsResponse): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _353.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _351.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.GenesisState;
                    fromJSON(object: any): _351.GenesisState;
                    toJSON(message: _351.GenesisState): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _351.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _362.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _362.FungibleTokenPacketData;
                    fromJSON(object: any): _362.FungibleTokenPacketData;
                    toJSON(message: _362.FungibleTokenPacketData): unknown;
                    fromPartial<I extends unknown>(object: I): _362.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgChannelOpenInit: {
                    encode(message: _370.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.MsgChannelOpenInit;
                    fromJSON(object: any): _370.MsgChannelOpenInit;
                    toJSON(message: _370.MsgChannelOpenInit): unknown;
                    fromPartial<I extends unknown>(object: I): _370.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _370.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _370.MsgChannelOpenInitResponse;
                    toJSON(_: _370.MsgChannelOpenInitResponse): unknown;
                    fromPartial<I_1 extends unknown>(_: I_1): _370.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _370.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.MsgChannelOpenTry;
                    fromJSON(object: any): _370.MsgChannelOpenTry;
                    toJSON(message: _370.MsgChannelOpenTry): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _370.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _370.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _370.MsgChannelOpenTryResponse;
                    toJSON(_: _370.MsgChannelOpenTryResponse): unknown;
                    fromPartial<I_3 extends unknown>(_: I_3): _370.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _370.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.MsgChannelOpenAck;
                    fromJSON(object: any): _370.MsgChannelOpenAck;
                    toJSON(message: _370.MsgChannelOpenAck): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _370.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _370.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _370.MsgChannelOpenAckResponse;
                    toJSON(_: _370.MsgChannelOpenAckResponse): unknown;
                    fromPartial<I_5 extends unknown>(_: I_5): _370.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _370.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.MsgChannelOpenConfirm;
                    fromJSON(object: any): _370.MsgChannelOpenConfirm;
                    toJSON(message: _370.MsgChannelOpenConfirm): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _370.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _370.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _370.MsgChannelOpenConfirmResponse;
                    toJSON(_: _370.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial<I_7 extends unknown>(_: I_7): _370.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _370.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.MsgChannelCloseInit;
                    fromJSON(object: any): _370.MsgChannelCloseInit;
                    toJSON(message: _370.MsgChannelCloseInit): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _370.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _370.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _370.MsgChannelCloseInitResponse;
                    toJSON(_: _370.MsgChannelCloseInitResponse): unknown;
                    fromPartial<I_9 extends unknown>(_: I_9): _370.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _370.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.MsgChannelCloseConfirm;
                    fromJSON(object: any): _370.MsgChannelCloseConfirm;
                    toJSON(message: _370.MsgChannelCloseConfirm): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _370.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _370.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _370.MsgChannelCloseConfirmResponse;
                    toJSON(_: _370.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial<I_11 extends unknown>(_: I_11): _370.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _370.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.MsgRecvPacket;
                    fromJSON(object: any): _370.MsgRecvPacket;
                    toJSON(message: _370.MsgRecvPacket): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _370.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _370.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.MsgRecvPacketResponse;
                    fromJSON(_: any): _370.MsgRecvPacketResponse;
                    toJSON(_: _370.MsgRecvPacketResponse): unknown;
                    fromPartial<I_13 extends unknown>(_: I_13): _370.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _370.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.MsgTimeout;
                    fromJSON(object: any): _370.MsgTimeout;
                    toJSON(message: _370.MsgTimeout): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _370.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _370.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.MsgTimeoutResponse;
                    fromJSON(_: any): _370.MsgTimeoutResponse;
                    toJSON(_: _370.MsgTimeoutResponse): unknown;
                    fromPartial<I_15 extends unknown>(_: I_15): _370.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _370.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.MsgTimeoutOnClose;
                    fromJSON(object: any): _370.MsgTimeoutOnClose;
                    toJSON(message: _370.MsgTimeoutOnClose): unknown;
                    fromPartial<I_16 extends unknown>(object: I_16): _370.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _370.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _370.MsgTimeoutOnCloseResponse;
                    toJSON(_: _370.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial<I_17 extends unknown>(_: I_17): _370.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _370.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.MsgAcknowledgement;
                    fromJSON(object: any): _370.MsgAcknowledgement;
                    toJSON(message: _370.MsgAcknowledgement): unknown;
                    fromPartial<I_18 extends unknown>(object: I_18): _370.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _370.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.MsgAcknowledgementResponse;
                    fromJSON(_: any): _370.MsgAcknowledgementResponse;
                    toJSON(_: _370.MsgAcknowledgementResponse): unknown;
                    fromPartial<I_19 extends unknown>(_: I_19): _370.MsgAcknowledgementResponse;
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _370.MsgChannelOpenInit) => {
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
                        }) => _370.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _370.MsgChannelOpenTry) => {
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
                        }) => _370.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _370.MsgChannelOpenAck) => {
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
                        }) => _370.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _370.MsgChannelOpenConfirm) => {
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
                        }) => _370.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _370.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _370.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _370.MsgChannelCloseConfirm) => {
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
                        }) => _370.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _370.MsgRecvPacket) => {
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
                        }) => _370.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _370.MsgTimeout) => {
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
                        }) => _370.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _370.MsgTimeoutOnClose) => {
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
                        }) => _370.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _370.MsgAcknowledgement) => {
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
                        }) => _370.MsgAcknowledgement;
                    };
                };
                encoded: {
                    channelOpenInit(value: _370.MsgChannelOpenInit): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelOpenTry(value: _370.MsgChannelOpenTry): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelOpenAck(value: _370.MsgChannelOpenAck): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelOpenConfirm(value: _370.MsgChannelOpenConfirm): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelCloseInit(value: _370.MsgChannelCloseInit): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelCloseConfirm(value: _370.MsgChannelCloseConfirm): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    recvPacket(value: _370.MsgRecvPacket): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    timeout(value: _370.MsgTimeout): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    timeoutOnClose(value: _370.MsgTimeoutOnClose): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    acknowledgement(value: _370.MsgAcknowledgement): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                messages: {
                    channelOpenInit(value: _370.MsgChannelOpenInit): {
                        typeUrl: string;
                        value: _370.MsgChannelOpenInit;
                    };
                    channelOpenTry(value: _370.MsgChannelOpenTry): {
                        typeUrl: string;
                        value: _370.MsgChannelOpenTry;
                    };
                    channelOpenAck(value: _370.MsgChannelOpenAck): {
                        typeUrl: string;
                        value: _370.MsgChannelOpenAck;
                    };
                    channelOpenConfirm(value: _370.MsgChannelOpenConfirm): {
                        typeUrl: string;
                        value: _370.MsgChannelOpenConfirm;
                    };
                    channelCloseInit(value: _370.MsgChannelCloseInit): {
                        typeUrl: string;
                        value: _370.MsgChannelCloseInit;
                    };
                    channelCloseConfirm(value: _370.MsgChannelCloseConfirm): {
                        typeUrl: string;
                        value: _370.MsgChannelCloseConfirm;
                    };
                    recvPacket(value: _370.MsgRecvPacket): {
                        typeUrl: string;
                        value: _370.MsgRecvPacket;
                    };
                    timeout(value: _370.MsgTimeout): {
                        typeUrl: string;
                        value: _370.MsgTimeout;
                    };
                    timeoutOnClose(value: _370.MsgTimeoutOnClose): {
                        typeUrl: string;
                        value: _370.MsgTimeoutOnClose;
                    };
                    acknowledgement(value: _370.MsgAcknowledgement): {
                        typeUrl: string;
                        value: _370.MsgAcknowledgement;
                    };
                };
                QueryChannelRequest: {
                    encode(message: _368.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryChannelRequest;
                    fromJSON(object: any): _368.QueryChannelRequest;
                    toJSON(message: _368.QueryChannelRequest): unknown;
                    fromPartial<I_20 extends unknown>(object: I_20): _368.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _368.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryChannelResponse;
                    fromJSON(object: any): _368.QueryChannelResponse;
                    toJSON(message: _368.QueryChannelResponse): unknown;
                    fromPartial<I_21 extends unknown>(object: I_21): _368.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _368.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryChannelsRequest;
                    fromJSON(object: any): _368.QueryChannelsRequest;
                    toJSON(message: _368.QueryChannelsRequest): unknown;
                    fromPartial<I_22 extends unknown>(object: I_22): _368.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _368.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryChannelsResponse;
                    fromJSON(object: any): _368.QueryChannelsResponse;
                    toJSON(message: _368.QueryChannelsResponse): unknown;
                    fromPartial<I_23 extends unknown>(object: I_23): _368.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _368.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _368.QueryConnectionChannelsRequest;
                    toJSON(message: _368.QueryConnectionChannelsRequest): unknown;
                    fromPartial<I_24 extends unknown>(object: I_24): _368.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _368.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _368.QueryConnectionChannelsResponse;
                    toJSON(message: _368.QueryConnectionChannelsResponse): unknown;
                    fromPartial<I_25 extends unknown>(object: I_25): _368.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _368.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryChannelClientStateRequest;
                    fromJSON(object: any): _368.QueryChannelClientStateRequest;
                    toJSON(message: _368.QueryChannelClientStateRequest): unknown;
                    fromPartial<I_26 extends unknown>(object: I_26): _368.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _368.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryChannelClientStateResponse;
                    fromJSON(object: any): _368.QueryChannelClientStateResponse;
                    toJSON(message: _368.QueryChannelClientStateResponse): unknown;
                    fromPartial<I_27 extends unknown>(object: I_27): _368.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _368.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _368.QueryChannelConsensusStateRequest;
                    toJSON(message: _368.QueryChannelConsensusStateRequest): unknown;
                    fromPartial<I_28 extends unknown>(object: I_28): _368.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _368.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _368.QueryChannelConsensusStateResponse;
                    toJSON(message: _368.QueryChannelConsensusStateResponse): unknown;
                    fromPartial<I_29 extends unknown>(object: I_29): _368.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _368.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _368.QueryPacketCommitmentRequest;
                    toJSON(message: _368.QueryPacketCommitmentRequest): unknown;
                    fromPartial<I_30 extends unknown>(object: I_30): _368.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _368.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _368.QueryPacketCommitmentResponse;
                    toJSON(message: _368.QueryPacketCommitmentResponse): unknown;
                    fromPartial<I_31 extends unknown>(object: I_31): _368.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _368.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _368.QueryPacketCommitmentsRequest;
                    toJSON(message: _368.QueryPacketCommitmentsRequest): unknown;
                    fromPartial<I_32 extends unknown>(object: I_32): _368.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _368.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _368.QueryPacketCommitmentsResponse;
                    toJSON(message: _368.QueryPacketCommitmentsResponse): unknown;
                    fromPartial<I_33 extends unknown>(object: I_33): _368.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _368.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryPacketReceiptRequest;
                    fromJSON(object: any): _368.QueryPacketReceiptRequest;
                    toJSON(message: _368.QueryPacketReceiptRequest): unknown;
                    fromPartial<I_34 extends unknown>(object: I_34): _368.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _368.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryPacketReceiptResponse;
                    fromJSON(object: any): _368.QueryPacketReceiptResponse;
                    toJSON(message: _368.QueryPacketReceiptResponse): unknown;
                    fromPartial<I_35 extends unknown>(object: I_35): _368.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _368.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _368.QueryPacketAcknowledgementRequest;
                    toJSON(message: _368.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial<I_36 extends unknown>(object: I_36): _368.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _368.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _368.QueryPacketAcknowledgementResponse;
                    toJSON(message: _368.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial<I_37 extends unknown>(object: I_37): _368.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _368.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _368.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _368.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial<I_38 extends unknown>(object: I_38): _368.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _368.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _368.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _368.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial<I_39 extends unknown>(object: I_39): _368.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _368.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _368.QueryUnreceivedPacketsRequest;
                    toJSON(message: _368.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial<I_40 extends unknown>(object: I_40): _368.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _368.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _368.QueryUnreceivedPacketsResponse;
                    toJSON(message: _368.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial<I_41 extends unknown>(object: I_41): _368.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _368.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _368.QueryUnreceivedAcksRequest;
                    toJSON(message: _368.QueryUnreceivedAcksRequest): unknown;
                    fromPartial<I_42 extends unknown>(object: I_42): _368.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _368.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _368.QueryUnreceivedAcksResponse;
                    toJSON(message: _368.QueryUnreceivedAcksResponse): unknown;
                    fromPartial<I_43 extends unknown>(object: I_43): _368.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _368.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _368.QueryNextSequenceReceiveRequest;
                    toJSON(message: _368.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial<I_44 extends unknown>(object: I_44): _368.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _368.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _368.QueryNextSequenceReceiveResponse;
                    toJSON(message: _368.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial<I_45 extends unknown>(object: I_45): _368.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _366.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _366.GenesisState;
                    fromJSON(object: any): _366.GenesisState;
                    toJSON(message: _366.GenesisState): unknown;
                    fromPartial<I_46 extends unknown>(object: I_46): _366.GenesisState;
                };
                PacketSequence: {
                    encode(message: _366.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _366.PacketSequence;
                    fromJSON(object: any): _366.PacketSequence;
                    toJSON(message: _366.PacketSequence): unknown;
                    fromPartial<I_47 extends unknown>(object: I_47): _366.PacketSequence;
                };
                stateFromJSON(object: any): _364.State;
                stateToJSON(object: _364.State): string;
                orderFromJSON(object: any): _364.Order;
                orderToJSON(object: _364.Order): string;
                State: typeof _364.State;
                Order: typeof _364.Order;
                Channel: {
                    encode(message: _364.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.Channel;
                    fromJSON(object: any): _364.Channel;
                    toJSON(message: _364.Channel): unknown;
                    fromPartial<I_48 extends unknown>(object: I_48): _364.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _364.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.IdentifiedChannel;
                    fromJSON(object: any): _364.IdentifiedChannel;
                    toJSON(message: _364.IdentifiedChannel): unknown;
                    fromPartial<I_49 extends unknown>(object: I_49): _364.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _364.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.Counterparty;
                    fromJSON(object: any): _364.Counterparty;
                    toJSON(message: _364.Counterparty): unknown;
                    fromPartial<I_50 extends unknown>(object: I_50): _364.Counterparty;
                };
                Packet: {
                    encode(message: _364.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.Packet;
                    fromJSON(object: any): _364.Packet;
                    toJSON(message: _364.Packet): unknown;
                    fromPartial<I_51 extends unknown>(object: I_51): _364.Packet;
                };
                PacketState: {
                    encode(message: _364.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.PacketState;
                    fromJSON(object: any): _364.PacketState;
                    toJSON(message: _364.PacketState): unknown;
                    fromPartial<I_52 extends unknown>(object: I_52): _364.PacketState;
                };
                Acknowledgement: {
                    encode(message: _364.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.Acknowledgement;
                    fromJSON(object: any): _364.Acknowledgement;
                    toJSON(message: _364.Acknowledgement): unknown;
                    fromPartial<I_53 extends unknown>(object: I_53): _364.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgCreateClient: {
                    encode(message: _381.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _381.MsgCreateClient;
                    fromJSON(object: any): _381.MsgCreateClient;
                    toJSON(message: _381.MsgCreateClient): unknown;
                    fromPartial<I extends unknown>(object: I): _381.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _381.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _381.MsgCreateClientResponse;
                    fromJSON(_: any): _381.MsgCreateClientResponse;
                    toJSON(_: _381.MsgCreateClientResponse): unknown;
                    fromPartial<I_1 extends unknown>(_: I_1): _381.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _381.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _381.MsgUpdateClient;
                    fromJSON(object: any): _381.MsgUpdateClient;
                    toJSON(message: _381.MsgUpdateClient): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _381.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _381.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _381.MsgUpdateClientResponse;
                    fromJSON(_: any): _381.MsgUpdateClientResponse;
                    toJSON(_: _381.MsgUpdateClientResponse): unknown;
                    fromPartial<I_3 extends unknown>(_: I_3): _381.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _381.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _381.MsgUpgradeClient;
                    fromJSON(object: any): _381.MsgUpgradeClient;
                    toJSON(message: _381.MsgUpgradeClient): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _381.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _381.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _381.MsgUpgradeClientResponse;
                    fromJSON(_: any): _381.MsgUpgradeClientResponse;
                    toJSON(_: _381.MsgUpgradeClientResponse): unknown;
                    fromPartial<I_5 extends unknown>(_: I_5): _381.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _381.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _381.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _381.MsgSubmitMisbehaviour;
                    toJSON(message: _381.MsgSubmitMisbehaviour): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _381.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _381.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _381.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _381.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _381.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial<I_7 extends unknown>(_: I_7): _381.MsgSubmitMisbehaviourResponse;
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _381.MsgCreateClient) => {
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
                        }) => _381.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _381.MsgUpdateClient) => {
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
                        }) => _381.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _381.MsgUpgradeClient) => {
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
                        }) => _381.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _381.MsgSubmitMisbehaviour) => {
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
                        }) => _381.MsgSubmitMisbehaviour;
                    };
                };
                encoded: {
                    createClient(value: _381.MsgCreateClient): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    updateClient(value: _381.MsgUpdateClient): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    upgradeClient(value: _381.MsgUpgradeClient): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    submitMisbehaviour(value: _381.MsgSubmitMisbehaviour): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                messages: {
                    createClient(value: _381.MsgCreateClient): {
                        typeUrl: string;
                        value: _381.MsgCreateClient;
                    };
                    updateClient(value: _381.MsgUpdateClient): {
                        typeUrl: string;
                        value: _381.MsgUpdateClient;
                    };
                    upgradeClient(value: _381.MsgUpgradeClient): {
                        typeUrl: string;
                        value: _381.MsgUpgradeClient;
                    };
                    submitMisbehaviour(value: _381.MsgSubmitMisbehaviour): {
                        typeUrl: string;
                        value: _381.MsgSubmitMisbehaviour;
                    };
                };
                QueryClientStateRequest: {
                    encode(message: _379.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryClientStateRequest;
                    fromJSON(object: any): _379.QueryClientStateRequest;
                    toJSON(message: _379.QueryClientStateRequest): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _379.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _379.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryClientStateResponse;
                    fromJSON(object: any): _379.QueryClientStateResponse;
                    toJSON(message: _379.QueryClientStateResponse): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _379.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _379.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryClientStatesRequest;
                    fromJSON(object: any): _379.QueryClientStatesRequest;
                    toJSON(message: _379.QueryClientStatesRequest): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _379.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _379.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryClientStatesResponse;
                    fromJSON(object: any): _379.QueryClientStatesResponse;
                    toJSON(message: _379.QueryClientStatesResponse): unknown;
                    fromPartial<I_11 extends unknown>(object: I_11): _379.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _379.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryConsensusStateRequest;
                    fromJSON(object: any): _379.QueryConsensusStateRequest;
                    toJSON(message: _379.QueryConsensusStateRequest): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _379.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _379.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryConsensusStateResponse;
                    fromJSON(object: any): _379.QueryConsensusStateResponse;
                    toJSON(message: _379.QueryConsensusStateResponse): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _379.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _379.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryConsensusStatesRequest;
                    fromJSON(object: any): _379.QueryConsensusStatesRequest;
                    toJSON(message: _379.QueryConsensusStatesRequest): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _379.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _379.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryConsensusStatesResponse;
                    fromJSON(object: any): _379.QueryConsensusStatesResponse;
                    toJSON(message: _379.QueryConsensusStatesResponse): unknown;
                    fromPartial<I_15 extends unknown>(object: I_15): _379.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _379.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryClientStatusRequest;
                    fromJSON(object: any): _379.QueryClientStatusRequest;
                    toJSON(message: _379.QueryClientStatusRequest): unknown;
                    fromPartial<I_16 extends unknown>(object: I_16): _379.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _379.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryClientStatusResponse;
                    fromJSON(object: any): _379.QueryClientStatusResponse;
                    toJSON(message: _379.QueryClientStatusResponse): unknown;
                    fromPartial<I_17 extends unknown>(object: I_17): _379.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _379.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryClientParamsRequest;
                    fromJSON(_: any): _379.QueryClientParamsRequest;
                    toJSON(_: _379.QueryClientParamsRequest): unknown;
                    fromPartial<I_18 extends unknown>(_: I_18): _379.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _379.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryClientParamsResponse;
                    fromJSON(object: any): _379.QueryClientParamsResponse;
                    toJSON(message: _379.QueryClientParamsResponse): unknown;
                    fromPartial<I_19 extends unknown>(object: I_19): _379.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _379.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _379.QueryUpgradedClientStateRequest;
                    toJSON(_: _379.QueryUpgradedClientStateRequest): unknown;
                    fromPartial<I_20 extends unknown>(_: I_20): _379.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _379.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _379.QueryUpgradedClientStateResponse;
                    toJSON(message: _379.QueryUpgradedClientStateResponse): unknown;
                    fromPartial<I_21 extends unknown>(object: I_21): _379.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _379.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _379.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _379.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial<I_22 extends unknown>(_: I_22): _379.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _379.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _379.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _379.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial<I_23 extends unknown>(object: I_23): _379.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _377.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _377.GenesisState;
                    fromJSON(object: any): _377.GenesisState;
                    toJSON(message: _377.GenesisState): unknown;
                    fromPartial<I_24 extends unknown>(object: I_24): _377.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _377.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _377.GenesisMetadata;
                    fromJSON(object: any): _377.GenesisMetadata;
                    toJSON(message: _377.GenesisMetadata): unknown;
                    fromPartial<I_25 extends unknown>(object: I_25): _377.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _377.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _377.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _377.IdentifiedGenesisMetadata;
                    toJSON(message: _377.IdentifiedGenesisMetadata): unknown;
                    fromPartial<I_26 extends unknown>(object: I_26): _377.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _375.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _375.IdentifiedClientState;
                    fromJSON(object: any): _375.IdentifiedClientState;
                    toJSON(message: _375.IdentifiedClientState): unknown;
                    fromPartial<I_27 extends unknown>(object: I_27): _375.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _375.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _375.ConsensusStateWithHeight;
                    fromJSON(object: any): _375.ConsensusStateWithHeight;
                    toJSON(message: _375.ConsensusStateWithHeight): unknown;
                    fromPartial<I_28 extends unknown>(object: I_28): _375.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _375.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _375.ClientConsensusStates;
                    fromJSON(object: any): _375.ClientConsensusStates;
                    toJSON(message: _375.ClientConsensusStates): unknown;
                    fromPartial<I_29 extends unknown>(object: I_29): _375.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _375.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _375.ClientUpdateProposal;
                    fromJSON(object: any): _375.ClientUpdateProposal;
                    toJSON(message: _375.ClientUpdateProposal): unknown;
                    fromPartial<I_30 extends unknown>(object: I_30): _375.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _375.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _375.UpgradeProposal;
                    fromJSON(object: any): _375.UpgradeProposal;
                    toJSON(message: _375.UpgradeProposal): unknown;
                    fromPartial<I_31 extends unknown>(object: I_31): _375.UpgradeProposal;
                };
                Height: {
                    encode(message: _375.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _375.Height;
                    fromJSON(object: any): _375.Height;
                    toJSON(message: _375.Height): unknown;
                    fromPartial<I_32 extends unknown>(object: I_32): _375.Height;
                };
                Params: {
                    encode(message: _375.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _375.Params;
                    fromJSON(object: any): _375.Params;
                    toJSON(message: _375.Params): unknown;
                    fromPartial<I_33 extends unknown>(object: I_33): _375.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _386.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.MerkleRoot;
                    fromJSON(object: any): _386.MerkleRoot;
                    toJSON(message: _386.MerkleRoot): unknown;
                    fromPartial<I extends unknown>(object: I): _386.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _386.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.MerklePrefix;
                    fromJSON(object: any): _386.MerklePrefix;
                    toJSON(message: _386.MerklePrefix): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _386.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _386.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.MerklePath;
                    fromJSON(object: any): _386.MerklePath;
                    toJSON(message: _386.MerklePath): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _386.MerklePath;
                };
                MerkleProof: {
                    encode(message: _386.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.MerkleProof;
                    fromJSON(object: any): _386.MerkleProof;
                    toJSON(message: _386.MerkleProof): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _386.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgConnectionOpenInit: {
                    encode(message: _394.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _394.MsgConnectionOpenInit;
                    fromJSON(object: any): _394.MsgConnectionOpenInit;
                    toJSON(message: _394.MsgConnectionOpenInit): unknown;
                    fromPartial<I extends unknown>(object: I): _394.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _394.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _394.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _394.MsgConnectionOpenInitResponse;
                    toJSON(_: _394.MsgConnectionOpenInitResponse): unknown;
                    fromPartial<I_1 extends unknown>(_: I_1): _394.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _394.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _394.MsgConnectionOpenTry;
                    fromJSON(object: any): _394.MsgConnectionOpenTry;
                    toJSON(message: _394.MsgConnectionOpenTry): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _394.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _394.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _394.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _394.MsgConnectionOpenTryResponse;
                    toJSON(_: _394.MsgConnectionOpenTryResponse): unknown;
                    fromPartial<I_3 extends unknown>(_: I_3): _394.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _394.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _394.MsgConnectionOpenAck;
                    fromJSON(object: any): _394.MsgConnectionOpenAck;
                    toJSON(message: _394.MsgConnectionOpenAck): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _394.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _394.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _394.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _394.MsgConnectionOpenAckResponse;
                    toJSON(_: _394.MsgConnectionOpenAckResponse): unknown;
                    fromPartial<I_5 extends unknown>(_: I_5): _394.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _394.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _394.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _394.MsgConnectionOpenConfirm;
                    toJSON(message: _394.MsgConnectionOpenConfirm): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _394.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _394.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _394.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _394.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _394.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial<I_7 extends unknown>(_: I_7): _394.MsgConnectionOpenConfirmResponse;
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _394.MsgConnectionOpenInit) => {
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
                        }) => _394.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _394.MsgConnectionOpenTry) => {
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
                        }) => _394.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _394.MsgConnectionOpenAck) => {
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
                        }) => _394.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _394.MsgConnectionOpenConfirm) => {
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
                        }) => _394.MsgConnectionOpenConfirm;
                    };
                };
                encoded: {
                    connectionOpenInit(value: _394.MsgConnectionOpenInit): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    connectionOpenTry(value: _394.MsgConnectionOpenTry): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    connectionOpenAck(value: _394.MsgConnectionOpenAck): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    connectionOpenConfirm(value: _394.MsgConnectionOpenConfirm): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                messages: {
                    connectionOpenInit(value: _394.MsgConnectionOpenInit): {
                        typeUrl: string;
                        value: _394.MsgConnectionOpenInit;
                    };
                    connectionOpenTry(value: _394.MsgConnectionOpenTry): {
                        typeUrl: string;
                        value: _394.MsgConnectionOpenTry;
                    };
                    connectionOpenAck(value: _394.MsgConnectionOpenAck): {
                        typeUrl: string;
                        value: _394.MsgConnectionOpenAck;
                    };
                    connectionOpenConfirm(value: _394.MsgConnectionOpenConfirm): {
                        typeUrl: string;
                        value: _394.MsgConnectionOpenConfirm;
                    };
                };
                QueryConnectionRequest: {
                    encode(message: _392.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.QueryConnectionRequest;
                    fromJSON(object: any): _392.QueryConnectionRequest;
                    toJSON(message: _392.QueryConnectionRequest): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _392.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _392.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.QueryConnectionResponse;
                    fromJSON(object: any): _392.QueryConnectionResponse;
                    toJSON(message: _392.QueryConnectionResponse): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _392.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _392.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.QueryConnectionsRequest;
                    fromJSON(object: any): _392.QueryConnectionsRequest;
                    toJSON(message: _392.QueryConnectionsRequest): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _392.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _392.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.QueryConnectionsResponse;
                    fromJSON(object: any): _392.QueryConnectionsResponse;
                    toJSON(message: _392.QueryConnectionsResponse): unknown;
                    fromPartial<I_11 extends unknown>(object: I_11): _392.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _392.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.QueryClientConnectionsRequest;
                    fromJSON(object: any): _392.QueryClientConnectionsRequest;
                    toJSON(message: _392.QueryClientConnectionsRequest): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _392.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _392.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.QueryClientConnectionsResponse;
                    fromJSON(object: any): _392.QueryClientConnectionsResponse;
                    toJSON(message: _392.QueryClientConnectionsResponse): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _392.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _392.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _392.QueryConnectionClientStateRequest;
                    toJSON(message: _392.QueryConnectionClientStateRequest): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _392.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _392.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _392.QueryConnectionClientStateResponse;
                    toJSON(message: _392.QueryConnectionClientStateResponse): unknown;
                    fromPartial<I_15 extends unknown>(object: I_15): _392.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _392.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _392.QueryConnectionConsensusStateRequest;
                    toJSON(message: _392.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial<I_16 extends unknown>(object: I_16): _392.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _392.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _392.QueryConnectionConsensusStateResponse;
                    toJSON(message: _392.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial<I_17 extends unknown>(object: I_17): _392.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _390.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _390.GenesisState;
                    fromJSON(object: any): _390.GenesisState;
                    toJSON(message: _390.GenesisState): unknown;
                    fromPartial<I_18 extends unknown>(object: I_18): _390.GenesisState;
                };
                stateFromJSON(object: any): _388.State;
                stateToJSON(object: _388.State): string;
                State: typeof _388.State;
                ConnectionEnd: {
                    encode(message: _388.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _388.ConnectionEnd;
                    fromJSON(object: any): _388.ConnectionEnd;
                    toJSON(message: _388.ConnectionEnd): unknown;
                    fromPartial<I_19 extends unknown>(object: I_19): _388.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _388.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _388.IdentifiedConnection;
                    fromJSON(object: any): _388.IdentifiedConnection;
                    toJSON(message: _388.IdentifiedConnection): unknown;
                    fromPartial<I_20 extends unknown>(object: I_20): _388.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _388.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _388.Counterparty;
                    fromJSON(object: any): _388.Counterparty;
                    toJSON(message: _388.Counterparty): unknown;
                    fromPartial<I_21 extends unknown>(object: I_21): _388.Counterparty;
                };
                ClientPaths: {
                    encode(message: _388.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _388.ClientPaths;
                    fromJSON(object: any): _388.ClientPaths;
                    toJSON(message: _388.ClientPaths): unknown;
                    fromPartial<I_22 extends unknown>(object: I_22): _388.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _388.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _388.ConnectionPaths;
                    fromJSON(object: any): _388.ConnectionPaths;
                    toJSON(message: _388.ConnectionPaths): unknown;
                    fromPartial<I_23 extends unknown>(object: I_23): _388.ConnectionPaths;
                };
                Version: {
                    encode(message: _388.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _388.Version;
                    fromJSON(object: any): _388.Version;
                    toJSON(message: _388.Version): unknown;
                    fromPartial<I_24 extends unknown>(object: I_24): _388.Version;
                };
                Params: {
                    encode(message: _388.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _388.Params;
                    fromJSON(object: any): _388.Params;
                    toJSON(message: _388.Params): unknown;
                    fromPartial<I_25 extends unknown>(object: I_25): _388.Params;
                };
            };
        }
        namespace port {
            const v1: {
                QueryAppVersionRequest: {
                    encode(message: _399.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _399.QueryAppVersionRequest;
                    fromJSON(object: any): _399.QueryAppVersionRequest;
                    toJSON(message: _399.QueryAppVersionRequest): unknown;
                    fromPartial<I extends unknown>(object: I): _399.QueryAppVersionRequest;
                };
                QueryAppVersionResponse: {
                    encode(message: _399.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _399.QueryAppVersionResponse;
                    fromJSON(object: any): _399.QueryAppVersionResponse;
                    toJSON(message: _399.QueryAppVersionResponse): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _399.QueryAppVersionResponse;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _401.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _401.GenesisState;
                    fromJSON(object: any): _401.GenesisState;
                    toJSON(message: _401.GenesisState): unknown;
                    fromPartial<I extends unknown>(object: I): _401.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _403.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.ClientState;
                    fromJSON(object: any): _403.ClientState;
                    toJSON(message: _403.ClientState): unknown;
                    fromPartial<I extends unknown>(object: I): _403.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _405.DataType;
                dataTypeToJSON(object: _405.DataType): string;
                DataType: typeof _405.DataType;
                ClientState: {
                    encode(message: _405.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.ClientState;
                    fromJSON(object: any): _405.ClientState;
                    toJSON(message: _405.ClientState): unknown;
                    fromPartial<I extends unknown>(object: I): _405.ClientState;
                };
                ConsensusState: {
                    encode(message: _405.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.ConsensusState;
                    fromJSON(object: any): _405.ConsensusState;
                    toJSON(message: _405.ConsensusState): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _405.ConsensusState;
                };
                Header: {
                    encode(message: _405.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.Header;
                    fromJSON(object: any): _405.Header;
                    toJSON(message: _405.Header): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _405.Header;
                };
                Misbehaviour: {
                    encode(message: _405.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.Misbehaviour;
                    fromJSON(object: any): _405.Misbehaviour;
                    toJSON(message: _405.Misbehaviour): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _405.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _405.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.SignatureAndData;
                    fromJSON(object: any): _405.SignatureAndData;
                    toJSON(message: _405.SignatureAndData): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _405.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _405.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.TimestampedSignatureData;
                    fromJSON(object: any): _405.TimestampedSignatureData;
                    toJSON(message: _405.TimestampedSignatureData): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _405.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _405.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.SignBytes;
                    fromJSON(object: any): _405.SignBytes;
                    toJSON(message: _405.SignBytes): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _405.SignBytes;
                };
                HeaderData: {
                    encode(message: _405.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.HeaderData;
                    fromJSON(object: any): _405.HeaderData;
                    toJSON(message: _405.HeaderData): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _405.HeaderData;
                };
                ClientStateData: {
                    encode(message: _405.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.ClientStateData;
                    fromJSON(object: any): _405.ClientStateData;
                    toJSON(message: _405.ClientStateData): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _405.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _405.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.ConsensusStateData;
                    fromJSON(object: any): _405.ConsensusStateData;
                    toJSON(message: _405.ConsensusStateData): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _405.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _405.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.ConnectionStateData;
                    fromJSON(object: any): _405.ConnectionStateData;
                    toJSON(message: _405.ConnectionStateData): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _405.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _405.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.ChannelStateData;
                    fromJSON(object: any): _405.ChannelStateData;
                    toJSON(message: _405.ChannelStateData): unknown;
                    fromPartial<I_11 extends unknown>(object: I_11): _405.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _405.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.PacketCommitmentData;
                    fromJSON(object: any): _405.PacketCommitmentData;
                    toJSON(message: _405.PacketCommitmentData): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _405.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _405.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.PacketAcknowledgementData;
                    fromJSON(object: any): _405.PacketAcknowledgementData;
                    toJSON(message: _405.PacketAcknowledgementData): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _405.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _405.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.PacketReceiptAbsenceData;
                    fromJSON(object: any): _405.PacketReceiptAbsenceData;
                    toJSON(message: _405.PacketReceiptAbsenceData): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _405.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _405.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.NextSequenceRecvData;
                    fromJSON(object: any): _405.NextSequenceRecvData;
                    toJSON(message: _405.NextSequenceRecvData): unknown;
                    fromPartial<I_15 extends unknown>(object: I_15): _405.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _407.DataType;
                dataTypeToJSON(object: _407.DataType): string;
                DataType: typeof _407.DataType;
                ClientState: {
                    encode(message: _407.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.ClientState;
                    fromJSON(object: any): _407.ClientState;
                    toJSON(message: _407.ClientState): unknown;
                    fromPartial<I extends unknown>(object: I): _407.ClientState;
                };
                ConsensusState: {
                    encode(message: _407.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.ConsensusState;
                    fromJSON(object: any): _407.ConsensusState;
                    toJSON(message: _407.ConsensusState): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _407.ConsensusState;
                };
                Header: {
                    encode(message: _407.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.Header;
                    fromJSON(object: any): _407.Header;
                    toJSON(message: _407.Header): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _407.Header;
                };
                Misbehaviour: {
                    encode(message: _407.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.Misbehaviour;
                    fromJSON(object: any): _407.Misbehaviour;
                    toJSON(message: _407.Misbehaviour): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _407.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _407.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.SignatureAndData;
                    fromJSON(object: any): _407.SignatureAndData;
                    toJSON(message: _407.SignatureAndData): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _407.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _407.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.TimestampedSignatureData;
                    fromJSON(object: any): _407.TimestampedSignatureData;
                    toJSON(message: _407.TimestampedSignatureData): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _407.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _407.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.SignBytes;
                    fromJSON(object: any): _407.SignBytes;
                    toJSON(message: _407.SignBytes): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _407.SignBytes;
                };
                HeaderData: {
                    encode(message: _407.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.HeaderData;
                    fromJSON(object: any): _407.HeaderData;
                    toJSON(message: _407.HeaderData): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _407.HeaderData;
                };
                ClientStateData: {
                    encode(message: _407.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.ClientStateData;
                    fromJSON(object: any): _407.ClientStateData;
                    toJSON(message: _407.ClientStateData): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _407.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _407.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.ConsensusStateData;
                    fromJSON(object: any): _407.ConsensusStateData;
                    toJSON(message: _407.ConsensusStateData): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _407.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _407.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.ConnectionStateData;
                    fromJSON(object: any): _407.ConnectionStateData;
                    toJSON(message: _407.ConnectionStateData): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _407.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _407.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.ChannelStateData;
                    fromJSON(object: any): _407.ChannelStateData;
                    toJSON(message: _407.ChannelStateData): unknown;
                    fromPartial<I_11 extends unknown>(object: I_11): _407.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _407.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.PacketCommitmentData;
                    fromJSON(object: any): _407.PacketCommitmentData;
                    toJSON(message: _407.PacketCommitmentData): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _407.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _407.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.PacketAcknowledgementData;
                    fromJSON(object: any): _407.PacketAcknowledgementData;
                    toJSON(message: _407.PacketAcknowledgementData): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _407.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _407.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.PacketReceiptAbsenceData;
                    fromJSON(object: any): _407.PacketReceiptAbsenceData;
                    toJSON(message: _407.PacketReceiptAbsenceData): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _407.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _407.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.NextSequenceRecvData;
                    fromJSON(object: any): _407.NextSequenceRecvData;
                    toJSON(message: _407.NextSequenceRecvData): unknown;
                    fromPartial<I_15 extends unknown>(object: I_15): _407.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _409.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _409.ClientState;
                    fromJSON(object: any): _409.ClientState;
                    toJSON(message: _409.ClientState): unknown;
                    fromPartial<I extends unknown>(object: I): _409.ClientState;
                };
                ConsensusState: {
                    encode(message: _409.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _409.ConsensusState;
                    fromJSON(object: any): _409.ConsensusState;
                    toJSON(message: _409.ConsensusState): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _409.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _409.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _409.Misbehaviour;
                    fromJSON(object: any): _409.Misbehaviour;
                    toJSON(message: _409.Misbehaviour): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _409.Misbehaviour;
                };
                Header: {
                    encode(message: _409.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _409.Header;
                    fromJSON(object: any): _409.Header;
                    toJSON(message: _409.Header): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _409.Header;
                };
                Fraction: {
                    encode(message: _409.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _409.Fraction;
                    fromJSON(object: any): _409.Fraction;
                    toJSON(message: _409.Fraction): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _409.Fraction;
                };
            };
        }
    }
}
export declare namespace osmosis {
    namespace claim {
        const v1beta1: {
            QueryModuleAccountBalanceRequest: {
                encode(_: _417.QueryModuleAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryModuleAccountBalanceRequest;
                fromJSON(_: any): _417.QueryModuleAccountBalanceRequest;
                toJSON(_: _417.QueryModuleAccountBalanceRequest): unknown;
                fromPartial<I extends unknown>(_: I): _417.QueryModuleAccountBalanceRequest;
            };
            QueryModuleAccountBalanceResponse: {
                encode(message: _417.QueryModuleAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryModuleAccountBalanceResponse;
                fromJSON(object: any): _417.QueryModuleAccountBalanceResponse;
                toJSON(message: _417.QueryModuleAccountBalanceResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _417.QueryModuleAccountBalanceResponse;
            };
            QueryParamsRequest: {
                encode(_: _417.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryParamsRequest;
                fromJSON(_: any): _417.QueryParamsRequest;
                toJSON(_: _417.QueryParamsRequest): unknown;
                fromPartial<I_2 extends unknown>(_: I_2): _417.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _417.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryParamsResponse;
                fromJSON(object: any): _417.QueryParamsResponse;
                toJSON(message: _417.QueryParamsResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _417.QueryParamsResponse;
            };
            QueryClaimRecordRequest: {
                encode(message: _417.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryClaimRecordRequest;
                fromJSON(object: any): _417.QueryClaimRecordRequest;
                toJSON(message: _417.QueryClaimRecordRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _417.QueryClaimRecordRequest;
            };
            QueryClaimRecordResponse: {
                encode(message: _417.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryClaimRecordResponse;
                fromJSON(object: any): _417.QueryClaimRecordResponse;
                toJSON(message: _417.QueryClaimRecordResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _417.QueryClaimRecordResponse;
            };
            QueryClaimableForActionRequest: {
                encode(message: _417.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryClaimableForActionRequest;
                fromJSON(object: any): _417.QueryClaimableForActionRequest;
                toJSON(message: _417.QueryClaimableForActionRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _417.QueryClaimableForActionRequest;
            };
            QueryClaimableForActionResponse: {
                encode(message: _417.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryClaimableForActionResponse;
                fromJSON(object: any): _417.QueryClaimableForActionResponse;
                toJSON(message: _417.QueryClaimableForActionResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _417.QueryClaimableForActionResponse;
            };
            QueryTotalClaimableRequest: {
                encode(message: _417.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryTotalClaimableRequest;
                fromJSON(object: any): _417.QueryTotalClaimableRequest;
                toJSON(message: _417.QueryTotalClaimableRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _417.QueryTotalClaimableRequest;
            };
            QueryTotalClaimableResponse: {
                encode(message: _417.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryTotalClaimableResponse;
                fromJSON(object: any): _417.QueryTotalClaimableResponse;
                toJSON(message: _417.QueryTotalClaimableResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _417.QueryTotalClaimableResponse;
            };
            Params: {
                encode(message: _415.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _415.Params;
                fromJSON(object: any): _415.Params;
                toJSON(message: _415.Params): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _415.Params;
            };
            GenesisState: {
                encode(message: _413.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _413.GenesisState;
                fromJSON(object: any): _413.GenesisState;
                toJSON(message: _413.GenesisState): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _413.GenesisState;
            };
            actionFromJSON(object: any): _411.Action;
            actionToJSON(object: _411.Action): string;
            Action: typeof _411.Action;
            ClaimRecord: {
                encode(message: _411.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _411.ClaimRecord;
                fromJSON(object: any): _411.ClaimRecord;
                toJSON(message: _411.ClaimRecord): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _411.ClaimRecord;
            };
        };
    }
    namespace epochs {
        const v1beta1: {
            QueryEpochsInfoRequest: {
                encode(_: _421.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _421.QueryEpochsInfoRequest;
                fromJSON(_: any): _421.QueryEpochsInfoRequest;
                toJSON(_: _421.QueryEpochsInfoRequest): unknown;
                fromPartial<I extends unknown>(_: I): _421.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _421.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _421.QueryEpochsInfoResponse;
                fromJSON(object: any): _421.QueryEpochsInfoResponse;
                toJSON(message: _421.QueryEpochsInfoResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _421.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _421.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _421.QueryCurrentEpochRequest;
                fromJSON(object: any): _421.QueryCurrentEpochRequest;
                toJSON(message: _421.QueryCurrentEpochRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _421.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _421.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _421.QueryCurrentEpochResponse;
                fromJSON(object: any): _421.QueryCurrentEpochResponse;
                toJSON(message: _421.QueryCurrentEpochResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _421.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _419.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _419.EpochInfo;
                fromJSON(object: any): _419.EpochInfo;
                toJSON(message: _419.EpochInfo): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _419.EpochInfo;
            };
            GenesisState: {
                encode(message: _419.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _419.GenesisState;
                fromJSON(object: any): _419.GenesisState;
                toJSON(message: _419.GenesisState): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _419.GenesisState;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgJoinPool: {
                encode(message: _431.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.MsgJoinPool;
                fromJSON(object: any): _431.MsgJoinPool;
                toJSON(message: _431.MsgJoinPool): unknown;
                fromPartial<I extends unknown>(object: I): _431.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(_: _431.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.MsgJoinPoolResponse;
                fromJSON(_: any): _431.MsgJoinPoolResponse;
                toJSON(_: _431.MsgJoinPoolResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _431.MsgJoinPoolResponse;
            };
            MsgExitPool: {
                encode(message: _431.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.MsgExitPool;
                fromJSON(object: any): _431.MsgExitPool;
                toJSON(message: _431.MsgExitPool): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _431.MsgExitPool;
            };
            MsgExitPoolResponse: {
                encode(_: _431.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.MsgExitPoolResponse;
                fromJSON(_: any): _431.MsgExitPoolResponse;
                toJSON(_: _431.MsgExitPoolResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _431.MsgExitPoolResponse;
            };
            SwapAmountInRoute: {
                encode(message: _431.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.SwapAmountInRoute;
                fromJSON(object: any): _431.SwapAmountInRoute;
                toJSON(message: _431.SwapAmountInRoute): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _431.SwapAmountInRoute;
            };
            MsgSwapExactAmountIn: {
                encode(message: _431.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.MsgSwapExactAmountIn;
                fromJSON(object: any): _431.MsgSwapExactAmountIn;
                toJSON(message: _431.MsgSwapExactAmountIn): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _431.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _431.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.MsgSwapExactAmountInResponse;
                fromJSON(object: any): _431.MsgSwapExactAmountInResponse;
                toJSON(message: _431.MsgSwapExactAmountInResponse): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _431.MsgSwapExactAmountInResponse;
            };
            SwapAmountOutRoute: {
                encode(message: _431.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.SwapAmountOutRoute;
                fromJSON(object: any): _431.SwapAmountOutRoute;
                toJSON(message: _431.SwapAmountOutRoute): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _431.SwapAmountOutRoute;
            };
            MsgSwapExactAmountOut: {
                encode(message: _431.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.MsgSwapExactAmountOut;
                fromJSON(object: any): _431.MsgSwapExactAmountOut;
                toJSON(message: _431.MsgSwapExactAmountOut): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _431.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _431.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.MsgSwapExactAmountOutResponse;
                fromJSON(object: any): _431.MsgSwapExactAmountOutResponse;
                toJSON(message: _431.MsgSwapExactAmountOutResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _431.MsgSwapExactAmountOutResponse;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _431.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.MsgJoinSwapExternAmountIn;
                fromJSON(object: any): _431.MsgJoinSwapExternAmountIn;
                toJSON(message: _431.MsgJoinSwapExternAmountIn): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _431.MsgJoinSwapExternAmountIn;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _431.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.MsgJoinSwapExternAmountInResponse;
                fromJSON(object: any): _431.MsgJoinSwapExternAmountInResponse;
                toJSON(message: _431.MsgJoinSwapExternAmountInResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _431.MsgJoinSwapExternAmountInResponse;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _431.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.MsgJoinSwapShareAmountOut;
                fromJSON(object: any): _431.MsgJoinSwapShareAmountOut;
                toJSON(message: _431.MsgJoinSwapShareAmountOut): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _431.MsgJoinSwapShareAmountOut;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _431.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.MsgJoinSwapShareAmountOutResponse;
                fromJSON(object: any): _431.MsgJoinSwapShareAmountOutResponse;
                toJSON(message: _431.MsgJoinSwapShareAmountOutResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _431.MsgJoinSwapShareAmountOutResponse;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _431.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.MsgExitSwapShareAmountIn;
                fromJSON(object: any): _431.MsgExitSwapShareAmountIn;
                toJSON(message: _431.MsgExitSwapShareAmountIn): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _431.MsgExitSwapShareAmountIn;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _431.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.MsgExitSwapShareAmountInResponse;
                fromJSON(object: any): _431.MsgExitSwapShareAmountInResponse;
                toJSON(message: _431.MsgExitSwapShareAmountInResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _431.MsgExitSwapShareAmountInResponse;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _431.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.MsgExitSwapExternAmountOut;
                fromJSON(object: any): _431.MsgExitSwapExternAmountOut;
                toJSON(message: _431.MsgExitSwapExternAmountOut): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _431.MsgExitSwapExternAmountOut;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _431.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.MsgExitSwapExternAmountOutResponse;
                fromJSON(object: any): _431.MsgExitSwapExternAmountOutResponse;
                toJSON(message: _431.MsgExitSwapExternAmountOutResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _431.MsgExitSwapExternAmountOutResponse;
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: _431.MsgJoinPool) => {
                        sender: string;
                        pool_id: string;
                        share_out_amount: string;
                        token_in_maxs: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, pool_id, share_out_amount, token_in_maxs }: {
                        sender: string;
                        pool_id: string;
                        share_out_amount: string;
                        token_in_maxs: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _431.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: _431.MsgExitPool) => {
                        sender: string;
                        pool_id: string;
                        share_in_amount: string;
                        token_out_mins: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, pool_id, share_in_amount, token_out_mins }: {
                        sender: string;
                        pool_id: string;
                        share_in_amount: string;
                        token_out_mins: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _431.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _431.MsgSwapExactAmountIn) => {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_out_denom: string;
                        }[];
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        token_out_min_amount: string;
                    };
                    fromAmino: ({ sender, routes, token_in, token_out_min_amount }: {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_out_denom: string;
                        }[];
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        token_out_min_amount: string;
                    }) => _431.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _431.MsgSwapExactAmountOut) => {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_in_denom: string;
                        }[];
                        token_in_max_amount: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, routes, token_in_max_amount, token_out }: {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_in_denom: string;
                        }[];
                        token_in_max_amount: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                    }) => _431.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: _431.MsgJoinSwapExternAmountIn) => {
                        sender: string;
                        pool_id: string;
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        share_out_min_amount: string;
                    };
                    fromAmino: ({ sender, pool_id, token_in, share_out_min_amount }: {
                        sender: string;
                        pool_id: string;
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        share_out_min_amount: string;
                    }) => _431.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: _431.MsgJoinSwapShareAmountOut) => {
                        sender: string;
                        pool_id: string;
                        token_in_denom: string;
                        share_out_amount: string;
                        token_in_max_amount: string;
                    };
                    fromAmino: ({ sender, pool_id, token_in_denom, share_out_amount, token_in_max_amount }: {
                        sender: string;
                        pool_id: string;
                        token_in_denom: string;
                        share_out_amount: string;
                        token_in_max_amount: string;
                    }) => _431.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: _431.MsgExitSwapExternAmountOut) => {
                        sender: string;
                        pool_id: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                        share_in_max_amount: string;
                    };
                    fromAmino: ({ sender, pool_id, token_out, share_in_max_amount }: {
                        sender: string;
                        pool_id: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                        share_in_max_amount: string;
                    }) => _431.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: _431.MsgExitSwapShareAmountIn) => {
                        sender: string;
                        pool_id: string;
                        token_out_denom: string;
                        share_in_amount: string;
                        token_out_min_amount: string;
                    };
                    fromAmino: ({ sender, pool_id, token_out_denom, share_in_amount, token_out_min_amount }: {
                        sender: string;
                        pool_id: string;
                        token_out_denom: string;
                        share_in_amount: string;
                        token_out_min_amount: string;
                    }) => _431.MsgExitSwapShareAmountIn;
                };
            };
            encoded: {
                joinPool(value: _431.MsgJoinPool): {
                    type_url: string;
                    value: Uint8Array;
                };
                exitPool(value: _431.MsgExitPool): {
                    type_url: string;
                    value: Uint8Array;
                };
                swapExactAmountIn(value: _431.MsgSwapExactAmountIn): {
                    type_url: string;
                    value: Uint8Array;
                };
                swapExactAmountOut(value: _431.MsgSwapExactAmountOut): {
                    type_url: string;
                    value: Uint8Array;
                };
                joinSwapExternAmountIn(value: _431.MsgJoinSwapExternAmountIn): {
                    type_url: string;
                    value: Uint8Array;
                };
                joinSwapShareAmountOut(value: _431.MsgJoinSwapShareAmountOut): {
                    type_url: string;
                    value: Uint8Array;
                };
                exitSwapExternAmountOut(value: _431.MsgExitSwapExternAmountOut): {
                    type_url: string;
                    value: Uint8Array;
                };
                exitSwapShareAmountIn(value: _431.MsgExitSwapShareAmountIn): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            messages: {
                joinPool(value: _431.MsgJoinPool): {
                    typeUrl: string;
                    value: _431.MsgJoinPool;
                };
                exitPool(value: _431.MsgExitPool): {
                    typeUrl: string;
                    value: _431.MsgExitPool;
                };
                swapExactAmountIn(value: _431.MsgSwapExactAmountIn): {
                    typeUrl: string;
                    value: _431.MsgSwapExactAmountIn;
                };
                swapExactAmountOut(value: _431.MsgSwapExactAmountOut): {
                    typeUrl: string;
                    value: _431.MsgSwapExactAmountOut;
                };
                joinSwapExternAmountIn(value: _431.MsgJoinSwapExternAmountIn): {
                    typeUrl: string;
                    value: _431.MsgJoinSwapExternAmountIn;
                };
                joinSwapShareAmountOut(value: _431.MsgJoinSwapShareAmountOut): {
                    typeUrl: string;
                    value: _431.MsgJoinSwapShareAmountOut;
                };
                exitSwapExternAmountOut(value: _431.MsgExitSwapExternAmountOut): {
                    typeUrl: string;
                    value: _431.MsgExitSwapExternAmountOut;
                };
                exitSwapShareAmountIn(value: _431.MsgExitSwapShareAmountIn): {
                    typeUrl: string;
                    value: _431.MsgExitSwapShareAmountIn;
                };
            };
            QueryPoolRequest: {
                encode(message: _429.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QueryPoolRequest;
                fromJSON(object: any): _429.QueryPoolRequest;
                toJSON(message: _429.QueryPoolRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _429.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _429.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QueryPoolResponse;
                fromJSON(object: any): _429.QueryPoolResponse;
                toJSON(message: _429.QueryPoolResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _429.QueryPoolResponse;
            };
            QueryPoolsRequest: {
                encode(message: _429.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QueryPoolsRequest;
                fromJSON(object: any): _429.QueryPoolsRequest;
                toJSON(message: _429.QueryPoolsRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _429.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _429.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QueryPoolsResponse;
                fromJSON(object: any): _429.QueryPoolsResponse;
                toJSON(message: _429.QueryPoolsResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _429.QueryPoolsResponse;
            };
            QueryNumPoolsRequest: {
                encode(_: _429.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QueryNumPoolsRequest;
                fromJSON(_: any): _429.QueryNumPoolsRequest;
                toJSON(_: _429.QueryNumPoolsRequest): unknown;
                fromPartial<I_22 extends unknown>(_: I_22): _429.QueryNumPoolsRequest;
            };
            QueryNumPoolsResponse: {
                encode(message: _429.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QueryNumPoolsResponse;
                fromJSON(object: any): _429.QueryNumPoolsResponse;
                toJSON(message: _429.QueryNumPoolsResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _429.QueryNumPoolsResponse;
            };
            QueryPoolParamsRequest: {
                encode(message: _429.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QueryPoolParamsRequest;
                fromJSON(object: any): _429.QueryPoolParamsRequest;
                toJSON(message: _429.QueryPoolParamsRequest): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _429.QueryPoolParamsRequest;
            };
            QueryPoolParamsResponse: {
                encode(message: _429.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QueryPoolParamsResponse;
                fromJSON(object: any): _429.QueryPoolParamsResponse;
                toJSON(message: _429.QueryPoolParamsResponse): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _429.QueryPoolParamsResponse;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _429.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QueryTotalPoolLiquidityRequest;
                fromJSON(object: any): _429.QueryTotalPoolLiquidityRequest;
                toJSON(message: _429.QueryTotalPoolLiquidityRequest): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _429.QueryTotalPoolLiquidityRequest;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _429.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QueryTotalPoolLiquidityResponse;
                fromJSON(object: any): _429.QueryTotalPoolLiquidityResponse;
                toJSON(message: _429.QueryTotalPoolLiquidityResponse): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _429.QueryTotalPoolLiquidityResponse;
            };
            QueryTotalSharesRequest: {
                encode(message: _429.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QueryTotalSharesRequest;
                fromJSON(object: any): _429.QueryTotalSharesRequest;
                toJSON(message: _429.QueryTotalSharesRequest): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _429.QueryTotalSharesRequest;
            };
            QueryTotalSharesResponse: {
                encode(message: _429.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QueryTotalSharesResponse;
                fromJSON(object: any): _429.QueryTotalSharesResponse;
                toJSON(message: _429.QueryTotalSharesResponse): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _429.QueryTotalSharesResponse;
            };
            QuerySpotPriceRequest: {
                encode(message: _429.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QuerySpotPriceRequest;
                fromJSON(object: any): _429.QuerySpotPriceRequest;
                toJSON(message: _429.QuerySpotPriceRequest): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _429.QuerySpotPriceRequest;
            };
            QuerySpotPriceResponse: {
                encode(message: _429.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QuerySpotPriceResponse;
                fromJSON(object: any): _429.QuerySpotPriceResponse;
                toJSON(message: _429.QuerySpotPriceResponse): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _429.QuerySpotPriceResponse;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _429.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QuerySwapExactAmountInRequest;
                fromJSON(object: any): _429.QuerySwapExactAmountInRequest;
                toJSON(message: _429.QuerySwapExactAmountInRequest): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _429.QuerySwapExactAmountInRequest;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _429.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QuerySwapExactAmountInResponse;
                fromJSON(object: any): _429.QuerySwapExactAmountInResponse;
                toJSON(message: _429.QuerySwapExactAmountInResponse): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _429.QuerySwapExactAmountInResponse;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _429.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QuerySwapExactAmountOutRequest;
                fromJSON(object: any): _429.QuerySwapExactAmountOutRequest;
                toJSON(message: _429.QuerySwapExactAmountOutRequest): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _429.QuerySwapExactAmountOutRequest;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _429.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QuerySwapExactAmountOutResponse;
                fromJSON(object: any): _429.QuerySwapExactAmountOutResponse;
                toJSON(message: _429.QuerySwapExactAmountOutResponse): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _429.QuerySwapExactAmountOutResponse;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _429.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QueryTotalLiquidityRequest;
                fromJSON(_: any): _429.QueryTotalLiquidityRequest;
                toJSON(_: _429.QueryTotalLiquidityRequest): unknown;
                fromPartial<I_36 extends unknown>(_: I_36): _429.QueryTotalLiquidityRequest;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _429.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QueryTotalLiquidityResponse;
                fromJSON(object: any): _429.QueryTotalLiquidityResponse;
                toJSON(message: _429.QueryTotalLiquidityResponse): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _429.QueryTotalLiquidityResponse;
            };
            Params: {
                encode(message: _427.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _427.Params;
                fromJSON(object: any): _427.Params;
                toJSON(message: _427.Params): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _427.Params;
            };
            GenesisState: {
                encode(message: _427.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _427.GenesisState;
                fromJSON(object: any): _427.GenesisState;
                toJSON(message: _427.GenesisState): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _427.GenesisState;
            };
            MsgCreateBalancerPool: {
                encode(message: _425.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.MsgCreateBalancerPool;
                fromJSON(object: any): _425.MsgCreateBalancerPool;
                toJSON(message: _425.MsgCreateBalancerPool): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _425.MsgCreateBalancerPool;
            };
            MsgCreateBalancerPoolResponse: {
                encode(message: _425.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.MsgCreateBalancerPoolResponse;
                fromJSON(object: any): _425.MsgCreateBalancerPoolResponse;
                toJSON(message: _425.MsgCreateBalancerPoolResponse): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _425.MsgCreateBalancerPoolResponse;
            };
            BalancerMsgClientImpl: typeof _425.BalancerMsgClientImpl;
            SmoothWeightChangeParams: {
                encode(message: _423.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _423.SmoothWeightChangeParams;
                fromJSON(object: any): _423.SmoothWeightChangeParams;
                toJSON(message: _423.SmoothWeightChangeParams): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _423.SmoothWeightChangeParams;
            };
            PoolParams: {
                encode(message: _423.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _423.PoolParams;
                fromJSON(object: any): _423.PoolParams;
                toJSON(message: _423.PoolParams): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _423.PoolParams;
            };
            PoolAsset: {
                encode(message: _423.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _423.PoolAsset;
                fromJSON(object: any): _423.PoolAsset;
                toJSON(message: _423.PoolAsset): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _423.PoolAsset;
            };
            Pool: {
                encode(message: _423.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _423.Pool;
                fromJSON(object: any): _423.Pool;
                toJSON(message: _423.Pool): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _423.Pool;
            };
        };
    }
    const incentives: {
        MsgCreateGauge: {
            encode(message: _444.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _444.MsgCreateGauge;
            fromJSON(object: any): _444.MsgCreateGauge;
            toJSON(message: _444.MsgCreateGauge): unknown;
            fromPartial<I extends unknown>(object: I): _444.MsgCreateGauge;
        };
        MsgCreateGaugeResponse: {
            encode(_: _444.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _444.MsgCreateGaugeResponse;
            fromJSON(_: any): _444.MsgCreateGaugeResponse;
            toJSON(_: _444.MsgCreateGaugeResponse): unknown;
            fromPartial<I_1 extends unknown>(_: I_1): _444.MsgCreateGaugeResponse;
        };
        MsgAddToGauge: {
            encode(message: _444.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _444.MsgAddToGauge;
            fromJSON(object: any): _444.MsgAddToGauge;
            toJSON(message: _444.MsgAddToGauge): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _444.MsgAddToGauge;
        };
        MsgAddToGaugeResponse: {
            encode(_: _444.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _444.MsgAddToGaugeResponse;
            fromJSON(_: any): _444.MsgAddToGaugeResponse;
            toJSON(_: _444.MsgAddToGaugeResponse): unknown;
            fromPartial<I_3 extends unknown>(_: I_3): _444.MsgAddToGaugeResponse;
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: _444.MsgCreateGauge) => {
                    is_perpetual: boolean;
                    owner: string;
                    distribute_to: {
                        lock_query_type: number;
                        denom: string;
                        duration: {
                            seconds: string;
                            nanos: number;
                        };
                        timestamp: Date;
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    start_time: Date;
                    num_epochs_paid_over: string;
                };
                fromAmino: ({ is_perpetual, owner, distribute_to, coins, start_time, num_epochs_paid_over }: {
                    is_perpetual: boolean;
                    owner: string;
                    distribute_to: {
                        lock_query_type: number;
                        denom: string;
                        duration: {
                            seconds: string;
                            nanos: number;
                        };
                        timestamp: Date;
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    start_time: Date;
                    num_epochs_paid_over: string;
                }) => _444.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: ({ owner, gaugeId, rewards }: _444.MsgAddToGauge) => {
                    owner: string;
                    gauge_id: string;
                    rewards: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromAmino: ({ owner, gauge_id, rewards }: {
                    owner: string;
                    gauge_id: string;
                    rewards: {
                        denom: string;
                        amount: string;
                    }[];
                }) => _444.MsgAddToGauge;
            };
        };
        encoded: {
            createGauge(value: _444.MsgCreateGauge): {
                type_url: string;
                value: Uint8Array;
            };
            addToGauge(value: _444.MsgAddToGauge): {
                type_url: string;
                value: Uint8Array;
            };
        };
        messages: {
            createGauge(value: _444.MsgCreateGauge): {
                typeUrl: string;
                value: _444.MsgCreateGauge;
            };
            addToGauge(value: _444.MsgAddToGauge): {
                typeUrl: string;
                value: _444.MsgAddToGauge;
            };
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _442.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.ModuleToDistributeCoinsRequest;
            fromJSON(_: any): _442.ModuleToDistributeCoinsRequest;
            toJSON(_: _442.ModuleToDistributeCoinsRequest): unknown;
            fromPartial<I_4 extends unknown>(_: I_4): _442.ModuleToDistributeCoinsRequest;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _442.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.ModuleToDistributeCoinsResponse;
            fromJSON(object: any): _442.ModuleToDistributeCoinsResponse;
            toJSON(message: _442.ModuleToDistributeCoinsResponse): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _442.ModuleToDistributeCoinsResponse;
        };
        ModuleDistributedCoinsRequest: {
            encode(_: _442.ModuleDistributedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.ModuleDistributedCoinsRequest;
            fromJSON(_: any): _442.ModuleDistributedCoinsRequest;
            toJSON(_: _442.ModuleDistributedCoinsRequest): unknown;
            fromPartial<I_6 extends unknown>(_: I_6): _442.ModuleDistributedCoinsRequest;
        };
        ModuleDistributedCoinsResponse: {
            encode(message: _442.ModuleDistributedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.ModuleDistributedCoinsResponse;
            fromJSON(object: any): _442.ModuleDistributedCoinsResponse;
            toJSON(message: _442.ModuleDistributedCoinsResponse): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _442.ModuleDistributedCoinsResponse;
        };
        GaugeByIDRequest: {
            encode(message: _442.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.GaugeByIDRequest;
            fromJSON(object: any): _442.GaugeByIDRequest;
            toJSON(message: _442.GaugeByIDRequest): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _442.GaugeByIDRequest;
        };
        GaugeByIDResponse: {
            encode(message: _442.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.GaugeByIDResponse;
            fromJSON(object: any): _442.GaugeByIDResponse;
            toJSON(message: _442.GaugeByIDResponse): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _442.GaugeByIDResponse;
        };
        GaugesRequest: {
            encode(message: _442.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.GaugesRequest;
            fromJSON(object: any): _442.GaugesRequest;
            toJSON(message: _442.GaugesRequest): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _442.GaugesRequest;
        };
        GaugesResponse: {
            encode(message: _442.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.GaugesResponse;
            fromJSON(object: any): _442.GaugesResponse;
            toJSON(message: _442.GaugesResponse): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _442.GaugesResponse;
        };
        ActiveGaugesRequest: {
            encode(message: _442.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.ActiveGaugesRequest;
            fromJSON(object: any): _442.ActiveGaugesRequest;
            toJSON(message: _442.ActiveGaugesRequest): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _442.ActiveGaugesRequest;
        };
        ActiveGaugesResponse: {
            encode(message: _442.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.ActiveGaugesResponse;
            fromJSON(object: any): _442.ActiveGaugesResponse;
            toJSON(message: _442.ActiveGaugesResponse): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _442.ActiveGaugesResponse;
        };
        ActiveGaugesPerDenomRequest: {
            encode(message: _442.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.ActiveGaugesPerDenomRequest;
            fromJSON(object: any): _442.ActiveGaugesPerDenomRequest;
            toJSON(message: _442.ActiveGaugesPerDenomRequest): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _442.ActiveGaugesPerDenomRequest;
        };
        ActiveGaugesPerDenomResponse: {
            encode(message: _442.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.ActiveGaugesPerDenomResponse;
            fromJSON(object: any): _442.ActiveGaugesPerDenomResponse;
            toJSON(message: _442.ActiveGaugesPerDenomResponse): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _442.ActiveGaugesPerDenomResponse;
        };
        UpcomingGaugesRequest: {
            encode(message: _442.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.UpcomingGaugesRequest;
            fromJSON(object: any): _442.UpcomingGaugesRequest;
            toJSON(message: _442.UpcomingGaugesRequest): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _442.UpcomingGaugesRequest;
        };
        UpcomingGaugesResponse: {
            encode(message: _442.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.UpcomingGaugesResponse;
            fromJSON(object: any): _442.UpcomingGaugesResponse;
            toJSON(message: _442.UpcomingGaugesResponse): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _442.UpcomingGaugesResponse;
        };
        RewardsEstRequest: {
            encode(message: _442.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.RewardsEstRequest;
            fromJSON(object: any): _442.RewardsEstRequest;
            toJSON(message: _442.RewardsEstRequest): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _442.RewardsEstRequest;
        };
        RewardsEstResponse: {
            encode(message: _442.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.RewardsEstResponse;
            fromJSON(object: any): _442.RewardsEstResponse;
            toJSON(message: _442.RewardsEstResponse): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _442.RewardsEstResponse;
        };
        QueryLockableDurationsRequest: {
            encode(_: _442.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.QueryLockableDurationsRequest;
            fromJSON(_: any): _442.QueryLockableDurationsRequest;
            toJSON(_: _442.QueryLockableDurationsRequest): unknown;
            fromPartial<I_20 extends unknown>(_: I_20): _442.QueryLockableDurationsRequest;
        };
        QueryLockableDurationsResponse: {
            encode(message: _442.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _442.QueryLockableDurationsResponse;
            fromJSON(object: any): _442.QueryLockableDurationsResponse;
            toJSON(message: _442.QueryLockableDurationsResponse): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _442.QueryLockableDurationsResponse;
        };
        Params: {
            encode(message: _440.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.Params;
            fromJSON(object: any): _440.Params;
            toJSON(message: _440.Params): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _440.Params;
        };
        GenesisState: {
            encode(message: _438.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _438.GenesisState;
            fromJSON(object: any): _438.GenesisState;
            toJSON(message: _438.GenesisState): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _438.GenesisState;
        };
        Gauge: {
            encode(message: _436.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _436.Gauge;
            fromJSON(object: any): _436.Gauge;
            toJSON(message: _436.Gauge): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _436.Gauge;
        };
        LockableDurationsInfo: {
            encode(message: _436.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _436.LockableDurationsInfo;
            fromJSON(object: any): _436.LockableDurationsInfo;
            toJSON(message: _436.LockableDurationsInfo): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _436.LockableDurationsInfo;
        };
    };
    const lockup: {
        MsgLockTokens: {
            encode(message: _455.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _455.MsgLockTokens;
            fromJSON(object: any): _455.MsgLockTokens;
            toJSON(message: _455.MsgLockTokens): unknown;
            fromPartial<I extends unknown>(object: I): _455.MsgLockTokens;
        };
        MsgLockTokensResponse: {
            encode(message: _455.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _455.MsgLockTokensResponse;
            fromJSON(object: any): _455.MsgLockTokensResponse;
            toJSON(message: _455.MsgLockTokensResponse): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _455.MsgLockTokensResponse;
        };
        MsgBeginUnlockingAll: {
            encode(message: _455.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _455.MsgBeginUnlockingAll;
            fromJSON(object: any): _455.MsgBeginUnlockingAll;
            toJSON(message: _455.MsgBeginUnlockingAll): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _455.MsgBeginUnlockingAll;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _455.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _455.MsgBeginUnlockingAllResponse;
            fromJSON(object: any): _455.MsgBeginUnlockingAllResponse;
            toJSON(message: _455.MsgBeginUnlockingAllResponse): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _455.MsgBeginUnlockingAllResponse;
        };
        MsgBeginUnlocking: {
            encode(message: _455.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _455.MsgBeginUnlocking;
            fromJSON(object: any): _455.MsgBeginUnlocking;
            toJSON(message: _455.MsgBeginUnlocking): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _455.MsgBeginUnlocking;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _455.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _455.MsgBeginUnlockingResponse;
            fromJSON(object: any): _455.MsgBeginUnlockingResponse;
            toJSON(message: _455.MsgBeginUnlockingResponse): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _455.MsgBeginUnlockingResponse;
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: ({ owner, duration, coins }: _455.MsgLockTokens) => {
                    owner: string;
                    duration: {
                        seconds: string;
                        nanos: number;
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromAmino: ({ owner, duration, coins }: {
                    owner: string;
                    duration: {
                        seconds: string;
                        nanos: number;
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                }) => _455.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: ({ owner }: _455.MsgBeginUnlockingAll) => {
                    owner: string;
                };
                fromAmino: ({ owner }: {
                    owner: string;
                }) => _455.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _455.MsgBeginUnlocking) => {
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
                }) => _455.MsgBeginUnlocking;
            };
        };
        encoded: {
            lockTokens(value: _455.MsgLockTokens): {
                type_url: string;
                value: Uint8Array;
            };
            beginUnlockingAll(value: _455.MsgBeginUnlockingAll): {
                type_url: string;
                value: Uint8Array;
            };
            beginUnlocking(value: _455.MsgBeginUnlocking): {
                type_url: string;
                value: Uint8Array;
            };
        };
        messages: {
            lockTokens(value: _455.MsgLockTokens): {
                typeUrl: string;
                value: _455.MsgLockTokens;
            };
            beginUnlockingAll(value: _455.MsgBeginUnlockingAll): {
                typeUrl: string;
                value: _455.MsgBeginUnlockingAll;
            };
            beginUnlocking(value: _455.MsgBeginUnlocking): {
                typeUrl: string;
                value: _455.MsgBeginUnlocking;
            };
        };
        ModuleBalanceRequest: {
            encode(_: _453.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.ModuleBalanceRequest;
            fromJSON(_: any): _453.ModuleBalanceRequest;
            toJSON(_: _453.ModuleBalanceRequest): unknown;
            fromPartial<I_6 extends unknown>(_: I_6): _453.ModuleBalanceRequest;
        };
        ModuleBalanceResponse: {
            encode(message: _453.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.ModuleBalanceResponse;
            fromJSON(object: any): _453.ModuleBalanceResponse;
            toJSON(message: _453.ModuleBalanceResponse): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _453.ModuleBalanceResponse;
        };
        ModuleLockedAmountRequest: {
            encode(_: _453.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.ModuleLockedAmountRequest;
            fromJSON(_: any): _453.ModuleLockedAmountRequest;
            toJSON(_: _453.ModuleLockedAmountRequest): unknown;
            fromPartial<I_8 extends unknown>(_: I_8): _453.ModuleLockedAmountRequest;
        };
        ModuleLockedAmountResponse: {
            encode(message: _453.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.ModuleLockedAmountResponse;
            fromJSON(object: any): _453.ModuleLockedAmountResponse;
            toJSON(message: _453.ModuleLockedAmountResponse): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _453.ModuleLockedAmountResponse;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _453.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.AccountUnlockableCoinsRequest;
            fromJSON(object: any): _453.AccountUnlockableCoinsRequest;
            toJSON(message: _453.AccountUnlockableCoinsRequest): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _453.AccountUnlockableCoinsRequest;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _453.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.AccountUnlockableCoinsResponse;
            fromJSON(object: any): _453.AccountUnlockableCoinsResponse;
            toJSON(message: _453.AccountUnlockableCoinsResponse): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _453.AccountUnlockableCoinsResponse;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _453.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.AccountUnlockingCoinsRequest;
            fromJSON(object: any): _453.AccountUnlockingCoinsRequest;
            toJSON(message: _453.AccountUnlockingCoinsRequest): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _453.AccountUnlockingCoinsRequest;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _453.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.AccountUnlockingCoinsResponse;
            fromJSON(object: any): _453.AccountUnlockingCoinsResponse;
            toJSON(message: _453.AccountUnlockingCoinsResponse): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _453.AccountUnlockingCoinsResponse;
        };
        AccountLockedCoinsRequest: {
            encode(message: _453.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.AccountLockedCoinsRequest;
            fromJSON(object: any): _453.AccountLockedCoinsRequest;
            toJSON(message: _453.AccountLockedCoinsRequest): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _453.AccountLockedCoinsRequest;
        };
        AccountLockedCoinsResponse: {
            encode(message: _453.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.AccountLockedCoinsResponse;
            fromJSON(object: any): _453.AccountLockedCoinsResponse;
            toJSON(message: _453.AccountLockedCoinsResponse): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _453.AccountLockedCoinsResponse;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _453.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.AccountLockedPastTimeRequest;
            fromJSON(object: any): _453.AccountLockedPastTimeRequest;
            toJSON(message: _453.AccountLockedPastTimeRequest): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _453.AccountLockedPastTimeRequest;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _453.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.AccountLockedPastTimeResponse;
            fromJSON(object: any): _453.AccountLockedPastTimeResponse;
            toJSON(message: _453.AccountLockedPastTimeResponse): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _453.AccountLockedPastTimeResponse;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _453.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromJSON(object: any): _453.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toJSON(message: _453.AccountLockedPastTimeNotUnlockingOnlyRequest): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _453.AccountLockedPastTimeNotUnlockingOnlyRequest;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _453.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromJSON(object: any): _453.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toJSON(message: _453.AccountLockedPastTimeNotUnlockingOnlyResponse): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _453.AccountLockedPastTimeNotUnlockingOnlyResponse;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _453.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.AccountUnlockedBeforeTimeRequest;
            fromJSON(object: any): _453.AccountUnlockedBeforeTimeRequest;
            toJSON(message: _453.AccountUnlockedBeforeTimeRequest): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _453.AccountUnlockedBeforeTimeRequest;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _453.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.AccountUnlockedBeforeTimeResponse;
            fromJSON(object: any): _453.AccountUnlockedBeforeTimeResponse;
            toJSON(message: _453.AccountUnlockedBeforeTimeResponse): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _453.AccountUnlockedBeforeTimeResponse;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _453.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.AccountLockedPastTimeDenomRequest;
            fromJSON(object: any): _453.AccountLockedPastTimeDenomRequest;
            toJSON(message: _453.AccountLockedPastTimeDenomRequest): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _453.AccountLockedPastTimeDenomRequest;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _453.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.AccountLockedPastTimeDenomResponse;
            fromJSON(object: any): _453.AccountLockedPastTimeDenomResponse;
            toJSON(message: _453.AccountLockedPastTimeDenomResponse): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _453.AccountLockedPastTimeDenomResponse;
        };
        LockedDenomRequest: {
            encode(message: _453.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.LockedDenomRequest;
            fromJSON(object: any): _453.LockedDenomRequest;
            toJSON(message: _453.LockedDenomRequest): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _453.LockedDenomRequest;
        };
        LockedDenomResponse: {
            encode(message: _453.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.LockedDenomResponse;
            fromJSON(object: any): _453.LockedDenomResponse;
            toJSON(message: _453.LockedDenomResponse): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _453.LockedDenomResponse;
        };
        LockedRequest: {
            encode(message: _453.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.LockedRequest;
            fromJSON(object: any): _453.LockedRequest;
            toJSON(message: _453.LockedRequest): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _453.LockedRequest;
        };
        LockedResponse: {
            encode(message: _453.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.LockedResponse;
            fromJSON(object: any): _453.LockedResponse;
            toJSON(message: _453.LockedResponse): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _453.LockedResponse;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _453.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.SyntheticLockupsByLockupIDRequest;
            fromJSON(object: any): _453.SyntheticLockupsByLockupIDRequest;
            toJSON(message: _453.SyntheticLockupsByLockupIDRequest): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _453.SyntheticLockupsByLockupIDRequest;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _453.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.SyntheticLockupsByLockupIDResponse;
            fromJSON(object: any): _453.SyntheticLockupsByLockupIDResponse;
            toJSON(message: _453.SyntheticLockupsByLockupIDResponse): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _453.SyntheticLockupsByLockupIDResponse;
        };
        AccountLockedLongerDurationRequest: {
            encode(message: _453.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.AccountLockedLongerDurationRequest;
            fromJSON(object: any): _453.AccountLockedLongerDurationRequest;
            toJSON(message: _453.AccountLockedLongerDurationRequest): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _453.AccountLockedLongerDurationRequest;
        };
        AccountLockedLongerDurationResponse: {
            encode(message: _453.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.AccountLockedLongerDurationResponse;
            fromJSON(object: any): _453.AccountLockedLongerDurationResponse;
            toJSON(message: _453.AccountLockedLongerDurationResponse): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _453.AccountLockedLongerDurationResponse;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            encode(message: _453.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromJSON(object: any): _453.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toJSON(message: _453.AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _453.AccountLockedLongerDurationNotUnlockingOnlyRequest;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            encode(message: _453.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromJSON(object: any): _453.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toJSON(message: _453.AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _453.AccountLockedLongerDurationNotUnlockingOnlyResponse;
        };
        AccountLockedLongerDurationDenomRequest: {
            encode(message: _453.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.AccountLockedLongerDurationDenomRequest;
            fromJSON(object: any): _453.AccountLockedLongerDurationDenomRequest;
            toJSON(message: _453.AccountLockedLongerDurationDenomRequest): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _453.AccountLockedLongerDurationDenomRequest;
        };
        AccountLockedLongerDurationDenomResponse: {
            encode(message: _453.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.AccountLockedLongerDurationDenomResponse;
            fromJSON(object: any): _453.AccountLockedLongerDurationDenomResponse;
            toJSON(message: _453.AccountLockedLongerDurationDenomResponse): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _453.AccountLockedLongerDurationDenomResponse;
        };
        lockQueryTypeFromJSON(object: any): _451.LockQueryType;
        lockQueryTypeToJSON(object: _451.LockQueryType): string;
        LockQueryType: typeof _451.LockQueryType;
        PeriodLock: {
            encode(message: _451.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _451.PeriodLock;
            fromJSON(object: any): _451.PeriodLock;
            toJSON(message: _451.PeriodLock): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _451.PeriodLock;
        };
        QueryCondition: {
            encode(message: _451.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _451.QueryCondition;
            fromJSON(object: any): _451.QueryCondition;
            toJSON(message: _451.QueryCondition): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _451.QueryCondition;
        };
        SyntheticLock: {
            encode(message: _451.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _451.SyntheticLock;
            fromJSON(object: any): _451.SyntheticLock;
            toJSON(message: _451.SyntheticLock): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _451.SyntheticLock;
        };
        GenesisState: {
            encode(message: _449.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _449.GenesisState;
            fromJSON(object: any): _449.GenesisState;
            toJSON(message: _449.GenesisState): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _449.GenesisState;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _464.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.QueryParamsRequest;
                fromJSON(_: any): _464.QueryParamsRequest;
                toJSON(_: _464.QueryParamsRequest): unknown;
                fromPartial<I extends unknown>(_: I): _464.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _464.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.QueryParamsResponse;
                fromJSON(object: any): _464.QueryParamsResponse;
                toJSON(message: _464.QueryParamsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _464.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _464.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.QueryEpochProvisionsRequest;
                fromJSON(_: any): _464.QueryEpochProvisionsRequest;
                toJSON(_: _464.QueryEpochProvisionsRequest): unknown;
                fromPartial<I_2 extends unknown>(_: I_2): _464.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _464.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.QueryEpochProvisionsResponse;
                fromJSON(object: any): _464.QueryEpochProvisionsResponse;
                toJSON(message: _464.QueryEpochProvisionsResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _464.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _462.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.Minter;
                fromJSON(object: any): _462.Minter;
                toJSON(message: _462.Minter): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _462.Minter;
            };
            WeightedAddress: {
                encode(message: _462.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.WeightedAddress;
                fromJSON(object: any): _462.WeightedAddress;
                toJSON(message: _462.WeightedAddress): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _462.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _462.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.DistributionProportions;
                fromJSON(object: any): _462.DistributionProportions;
                toJSON(message: _462.DistributionProportions): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _462.DistributionProportions;
            };
            Params: {
                encode(message: _462.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.Params;
                fromJSON(object: any): _462.Params;
                toJSON(message: _462.Params): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _462.Params;
            };
            GenesisState: {
                encode(message: _460.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.GenesisState;
                fromJSON(object: any): _460.GenesisState;
                toJSON(message: _460.GenesisState): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _460.GenesisState;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryGaugeIdsRequest: {
                encode(message: _472.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _472.QueryGaugeIdsRequest;
                fromJSON(object: any): _472.QueryGaugeIdsRequest;
                toJSON(message: _472.QueryGaugeIdsRequest): unknown;
                fromPartial<I extends unknown>(object: I): _472.QueryGaugeIdsRequest;
            };
            QueryGaugeIdsResponse: {
                encode(message: _472.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _472.QueryGaugeIdsResponse;
                fromJSON(object: any): _472.QueryGaugeIdsResponse;
                toJSON(message: _472.QueryGaugeIdsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _472.QueryGaugeIdsResponse;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                encode(message: _472.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _472.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromJSON(object: any): _472.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toJSON(message: _472.QueryGaugeIdsResponse_GaugeIdWithDuration): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _472.QueryGaugeIdsResponse_GaugeIdWithDuration;
            };
            QueryDistrInfoRequest: {
                encode(_: _472.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _472.QueryDistrInfoRequest;
                fromJSON(_: any): _472.QueryDistrInfoRequest;
                toJSON(_: _472.QueryDistrInfoRequest): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _472.QueryDistrInfoRequest;
            };
            QueryDistrInfoResponse: {
                encode(message: _472.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _472.QueryDistrInfoResponse;
                fromJSON(object: any): _472.QueryDistrInfoResponse;
                toJSON(message: _472.QueryDistrInfoResponse): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _472.QueryDistrInfoResponse;
            };
            QueryParamsRequest: {
                encode(_: _472.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _472.QueryParamsRequest;
                fromJSON(_: any): _472.QueryParamsRequest;
                toJSON(_: _472.QueryParamsRequest): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _472.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _472.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _472.QueryParamsResponse;
                fromJSON(object: any): _472.QueryParamsResponse;
                toJSON(message: _472.QueryParamsResponse): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _472.QueryParamsResponse;
            };
            QueryLockableDurationsRequest: {
                encode(_: _472.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _472.QueryLockableDurationsRequest;
                fromJSON(_: any): _472.QueryLockableDurationsRequest;
                toJSON(_: _472.QueryLockableDurationsRequest): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _472.QueryLockableDurationsRequest;
            };
            QueryLockableDurationsResponse: {
                encode(message: _472.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _472.QueryLockableDurationsResponse;
                fromJSON(object: any): _472.QueryLockableDurationsResponse;
                toJSON(message: _472.QueryLockableDurationsResponse): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _472.QueryLockableDurationsResponse;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _472.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _472.QueryIncentivizedPoolsRequest;
                fromJSON(_: any): _472.QueryIncentivizedPoolsRequest;
                toJSON(_: _472.QueryIncentivizedPoolsRequest): unknown;
                fromPartial<I_9 extends unknown>(_: I_9): _472.QueryIncentivizedPoolsRequest;
            };
            IncentivizedPool: {
                encode(message: _472.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _472.IncentivizedPool;
                fromJSON(object: any): _472.IncentivizedPool;
                toJSON(message: _472.IncentivizedPool): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _472.IncentivizedPool;
            };
            QueryIncentivizedPoolsResponse: {
                encode(message: _472.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _472.QueryIncentivizedPoolsResponse;
                fromJSON(object: any): _472.QueryIncentivizedPoolsResponse;
                toJSON(message: _472.QueryIncentivizedPoolsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _472.QueryIncentivizedPoolsResponse;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _472.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _472.QueryExternalIncentiveGaugesRequest;
                fromJSON(_: any): _472.QueryExternalIncentiveGaugesRequest;
                toJSON(_: _472.QueryExternalIncentiveGaugesRequest): unknown;
                fromPartial<I_12 extends unknown>(_: I_12): _472.QueryExternalIncentiveGaugesRequest;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _472.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _472.QueryExternalIncentiveGaugesResponse;
                fromJSON(object: any): _472.QueryExternalIncentiveGaugesResponse;
                toJSON(message: _472.QueryExternalIncentiveGaugesResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _472.QueryExternalIncentiveGaugesResponse;
            };
            Params: {
                encode(message: _470.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _470.Params;
                fromJSON(object: any): _470.Params;
                toJSON(message: _470.Params): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _470.Params;
            };
            LockableDurationsInfo: {
                encode(message: _470.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _470.LockableDurationsInfo;
                fromJSON(object: any): _470.LockableDurationsInfo;
                toJSON(message: _470.LockableDurationsInfo): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _470.LockableDurationsInfo;
            };
            DistrInfo: {
                encode(message: _470.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _470.DistrInfo;
                fromJSON(object: any): _470.DistrInfo;
                toJSON(message: _470.DistrInfo): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _470.DistrInfo;
            };
            DistrRecord: {
                encode(message: _470.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _470.DistrRecord;
                fromJSON(object: any): _470.DistrRecord;
                toJSON(message: _470.DistrRecord): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _470.DistrRecord;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _468.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _468.ReplacePoolIncentivesProposal;
                fromJSON(object: any): _468.ReplacePoolIncentivesProposal;
                toJSON(message: _468.ReplacePoolIncentivesProposal): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _468.ReplacePoolIncentivesProposal;
            };
            UpdatePoolIncentivesProposal: {
                encode(message: _468.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _468.UpdatePoolIncentivesProposal;
                fromJSON(object: any): _468.UpdatePoolIncentivesProposal;
                toJSON(message: _468.UpdatePoolIncentivesProposal): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _468.UpdatePoolIncentivesProposal;
            };
            GenesisState: {
                encode(message: _466.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _466.GenesisState;
                fromJSON(object: any): _466.GenesisState;
                toJSON(message: _466.GenesisState): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _466.GenesisState;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                encode(message: _474.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.Node;
                fromJSON(object: any): _474.Node;
                toJSON(message: _474.Node): unknown;
                fromPartial<I extends unknown>(object: I): _474.Node;
            };
            Child: {
                encode(message: _474.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.Child;
                fromJSON(object: any): _474.Child;
                toJSON(message: _474.Child): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _474.Child;
            };
            Leaf: {
                encode(message: _474.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.Leaf;
                fromJSON(object: any): _474.Leaf;
                toJSON(message: _474.Leaf): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _474.Leaf;
            };
        };
    }
    const superfluid: {
        MsgSuperfluidDelegate: {
            encode(message: _484.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _484.MsgSuperfluidDelegate;
            fromJSON(object: any): _484.MsgSuperfluidDelegate;
            toJSON(message: _484.MsgSuperfluidDelegate): unknown;
            fromPartial<I extends unknown>(object: I): _484.MsgSuperfluidDelegate;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _484.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _484.MsgSuperfluidDelegateResponse;
            fromJSON(_: any): _484.MsgSuperfluidDelegateResponse;
            toJSON(_: _484.MsgSuperfluidDelegateResponse): unknown;
            fromPartial<I_1 extends unknown>(_: I_1): _484.MsgSuperfluidDelegateResponse;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _484.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _484.MsgSuperfluidUndelegate;
            fromJSON(object: any): _484.MsgSuperfluidUndelegate;
            toJSON(message: _484.MsgSuperfluidUndelegate): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _484.MsgSuperfluidUndelegate;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _484.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _484.MsgSuperfluidUndelegateResponse;
            fromJSON(_: any): _484.MsgSuperfluidUndelegateResponse;
            toJSON(_: _484.MsgSuperfluidUndelegateResponse): unknown;
            fromPartial<I_3 extends unknown>(_: I_3): _484.MsgSuperfluidUndelegateResponse;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _484.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _484.MsgSuperfluidUnbondLock;
            fromJSON(object: any): _484.MsgSuperfluidUnbondLock;
            toJSON(message: _484.MsgSuperfluidUnbondLock): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _484.MsgSuperfluidUnbondLock;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _484.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _484.MsgSuperfluidUnbondLockResponse;
            fromJSON(_: any): _484.MsgSuperfluidUnbondLockResponse;
            toJSON(_: _484.MsgSuperfluidUnbondLockResponse): unknown;
            fromPartial<I_5 extends unknown>(_: I_5): _484.MsgSuperfluidUnbondLockResponse;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _484.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _484.MsgLockAndSuperfluidDelegate;
            fromJSON(object: any): _484.MsgLockAndSuperfluidDelegate;
            toJSON(message: _484.MsgLockAndSuperfluidDelegate): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _484.MsgLockAndSuperfluidDelegate;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _484.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _484.MsgLockAndSuperfluidDelegateResponse;
            fromJSON(object: any): _484.MsgLockAndSuperfluidDelegateResponse;
            toJSON(message: _484.MsgLockAndSuperfluidDelegateResponse): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _484.MsgLockAndSuperfluidDelegateResponse;
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId, valAddr }: _484.MsgSuperfluidDelegate) => {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                };
                fromAmino: ({ sender, lock_id, val_addr }: {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                }) => _484.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _484.MsgSuperfluidUndelegate) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _484.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _484.MsgSuperfluidUnbondLock) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _484.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, coins, valAddr }: _484.MsgLockAndSuperfluidDelegate) => {
                    sender: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    val_addr: string;
                };
                fromAmino: ({ sender, coins, val_addr }: {
                    sender: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    val_addr: string;
                }) => _484.MsgLockAndSuperfluidDelegate;
            };
        };
        encoded: {
            superfluidDelegate(value: _484.MsgSuperfluidDelegate): {
                type_url: string;
                value: Uint8Array;
            };
            superfluidUndelegate(value: _484.MsgSuperfluidUndelegate): {
                type_url: string;
                value: Uint8Array;
            };
            superfluidUnbondLock(value: _484.MsgSuperfluidUnbondLock): {
                type_url: string;
                value: Uint8Array;
            };
            lockAndSuperfluidDelegate(value: _484.MsgLockAndSuperfluidDelegate): {
                type_url: string;
                value: Uint8Array;
            };
        };
        messages: {
            superfluidDelegate(value: _484.MsgSuperfluidDelegate): {
                typeUrl: string;
                value: _484.MsgSuperfluidDelegate;
            };
            superfluidUndelegate(value: _484.MsgSuperfluidUndelegate): {
                typeUrl: string;
                value: _484.MsgSuperfluidUndelegate;
            };
            superfluidUnbondLock(value: _484.MsgSuperfluidUnbondLock): {
                typeUrl: string;
                value: _484.MsgSuperfluidUnbondLock;
            };
            lockAndSuperfluidDelegate(value: _484.MsgLockAndSuperfluidDelegate): {
                typeUrl: string;
                value: _484.MsgLockAndSuperfluidDelegate;
            };
        };
        superfluidAssetTypeFromJSON(object: any): _482.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _482.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _482.SuperfluidAssetType;
        SuperfluidAsset: {
            encode(message: _482.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.SuperfluidAsset;
            fromJSON(object: any): _482.SuperfluidAsset;
            toJSON(message: _482.SuperfluidAsset): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _482.SuperfluidAsset;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _482.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.SuperfluidIntermediaryAccount;
            fromJSON(object: any): _482.SuperfluidIntermediaryAccount;
            toJSON(message: _482.SuperfluidIntermediaryAccount): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _482.SuperfluidIntermediaryAccount;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _482.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.OsmoEquivalentMultiplierRecord;
            fromJSON(object: any): _482.OsmoEquivalentMultiplierRecord;
            toJSON(message: _482.OsmoEquivalentMultiplierRecord): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _482.OsmoEquivalentMultiplierRecord;
        };
        SuperfluidDelegationRecord: {
            encode(message: _482.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.SuperfluidDelegationRecord;
            fromJSON(object: any): _482.SuperfluidDelegationRecord;
            toJSON(message: _482.SuperfluidDelegationRecord): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _482.SuperfluidDelegationRecord;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _482.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.LockIdIntermediaryAccountConnection;
            fromJSON(object: any): _482.LockIdIntermediaryAccountConnection;
            toJSON(message: _482.LockIdIntermediaryAccountConnection): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _482.LockIdIntermediaryAccountConnection;
        };
        QueryParamsRequest: {
            encode(_: _480.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.QueryParamsRequest;
            fromJSON(_: any): _480.QueryParamsRequest;
            toJSON(_: _480.QueryParamsRequest): unknown;
            fromPartial<I_13 extends unknown>(_: I_13): _480.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _480.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.QueryParamsResponse;
            fromJSON(object: any): _480.QueryParamsResponse;
            toJSON(message: _480.QueryParamsResponse): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _480.QueryParamsResponse;
        };
        AssetTypeRequest: {
            encode(message: _480.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.AssetTypeRequest;
            fromJSON(object: any): _480.AssetTypeRequest;
            toJSON(message: _480.AssetTypeRequest): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _480.AssetTypeRequest;
        };
        AssetTypeResponse: {
            encode(message: _480.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.AssetTypeResponse;
            fromJSON(object: any): _480.AssetTypeResponse;
            toJSON(message: _480.AssetTypeResponse): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _480.AssetTypeResponse;
        };
        AllAssetsRequest: {
            encode(_: _480.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.AllAssetsRequest;
            fromJSON(_: any): _480.AllAssetsRequest;
            toJSON(_: _480.AllAssetsRequest): unknown;
            fromPartial<I_17 extends unknown>(_: I_17): _480.AllAssetsRequest;
        };
        AllAssetsResponse: {
            encode(message: _480.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.AllAssetsResponse;
            fromJSON(object: any): _480.AllAssetsResponse;
            toJSON(message: _480.AllAssetsResponse): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _480.AllAssetsResponse;
        };
        AssetMultiplierRequest: {
            encode(message: _480.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.AssetMultiplierRequest;
            fromJSON(object: any): _480.AssetMultiplierRequest;
            toJSON(message: _480.AssetMultiplierRequest): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _480.AssetMultiplierRequest;
        };
        AssetMultiplierResponse: {
            encode(message: _480.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.AssetMultiplierResponse;
            fromJSON(object: any): _480.AssetMultiplierResponse;
            toJSON(message: _480.AssetMultiplierResponse): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _480.AssetMultiplierResponse;
        };
        SuperfluidIntermediaryAccountInfo: {
            encode(message: _480.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.SuperfluidIntermediaryAccountInfo;
            fromJSON(object: any): _480.SuperfluidIntermediaryAccountInfo;
            toJSON(message: _480.SuperfluidIntermediaryAccountInfo): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _480.SuperfluidIntermediaryAccountInfo;
        };
        AllIntermediaryAccountsRequest: {
            encode(message: _480.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.AllIntermediaryAccountsRequest;
            fromJSON(object: any): _480.AllIntermediaryAccountsRequest;
            toJSON(message: _480.AllIntermediaryAccountsRequest): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _480.AllIntermediaryAccountsRequest;
        };
        AllIntermediaryAccountsResponse: {
            encode(message: _480.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.AllIntermediaryAccountsResponse;
            fromJSON(object: any): _480.AllIntermediaryAccountsResponse;
            toJSON(message: _480.AllIntermediaryAccountsResponse): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _480.AllIntermediaryAccountsResponse;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _480.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.ConnectedIntermediaryAccountRequest;
            fromJSON(object: any): _480.ConnectedIntermediaryAccountRequest;
            toJSON(message: _480.ConnectedIntermediaryAccountRequest): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _480.ConnectedIntermediaryAccountRequest;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _480.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.ConnectedIntermediaryAccountResponse;
            fromJSON(object: any): _480.ConnectedIntermediaryAccountResponse;
            toJSON(message: _480.ConnectedIntermediaryAccountResponse): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _480.ConnectedIntermediaryAccountResponse;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _480.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.TotalSuperfluidDelegationsRequest;
            fromJSON(_: any): _480.TotalSuperfluidDelegationsRequest;
            toJSON(_: _480.TotalSuperfluidDelegationsRequest): unknown;
            fromPartial<I_26 extends unknown>(_: I_26): _480.TotalSuperfluidDelegationsRequest;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _480.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.TotalSuperfluidDelegationsResponse;
            fromJSON(object: any): _480.TotalSuperfluidDelegationsResponse;
            toJSON(message: _480.TotalSuperfluidDelegationsResponse): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _480.TotalSuperfluidDelegationsResponse;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _480.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.SuperfluidDelegationAmountRequest;
            fromJSON(object: any): _480.SuperfluidDelegationAmountRequest;
            toJSON(message: _480.SuperfluidDelegationAmountRequest): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _480.SuperfluidDelegationAmountRequest;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _480.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.SuperfluidDelegationAmountResponse;
            fromJSON(object: any): _480.SuperfluidDelegationAmountResponse;
            toJSON(message: _480.SuperfluidDelegationAmountResponse): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _480.SuperfluidDelegationAmountResponse;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _480.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.SuperfluidDelegationsByDelegatorRequest;
            fromJSON(object: any): _480.SuperfluidDelegationsByDelegatorRequest;
            toJSON(message: _480.SuperfluidDelegationsByDelegatorRequest): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _480.SuperfluidDelegationsByDelegatorRequest;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _480.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.SuperfluidDelegationsByDelegatorResponse;
            fromJSON(object: any): _480.SuperfluidDelegationsByDelegatorResponse;
            toJSON(message: _480.SuperfluidDelegationsByDelegatorResponse): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _480.SuperfluidDelegationsByDelegatorResponse;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _480.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.SuperfluidUndelegationsByDelegatorRequest;
            fromJSON(object: any): _480.SuperfluidUndelegationsByDelegatorRequest;
            toJSON(message: _480.SuperfluidUndelegationsByDelegatorRequest): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _480.SuperfluidUndelegationsByDelegatorRequest;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _480.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.SuperfluidUndelegationsByDelegatorResponse;
            fromJSON(object: any): _480.SuperfluidUndelegationsByDelegatorResponse;
            toJSON(message: _480.SuperfluidUndelegationsByDelegatorResponse): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _480.SuperfluidUndelegationsByDelegatorResponse;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _480.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.SuperfluidDelegationsByValidatorDenomRequest;
            fromJSON(object: any): _480.SuperfluidDelegationsByValidatorDenomRequest;
            toJSON(message: _480.SuperfluidDelegationsByValidatorDenomRequest): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _480.SuperfluidDelegationsByValidatorDenomRequest;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _480.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.SuperfluidDelegationsByValidatorDenomResponse;
            fromJSON(object: any): _480.SuperfluidDelegationsByValidatorDenomResponse;
            toJSON(message: _480.SuperfluidDelegationsByValidatorDenomResponse): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _480.SuperfluidDelegationsByValidatorDenomResponse;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _480.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromJSON(object: any): _480.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toJSON(message: _480.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _480.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _480.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromJSON(object: any): _480.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toJSON(message: _480.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _480.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
        };
        Params: {
            encode(message: _478.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _478.Params;
            fromJSON(object: any): _478.Params;
            toJSON(message: _478.Params): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _478.Params;
        };
        GenesisState: {
            encode(message: _476.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _476.GenesisState;
            fromJSON(object: any): _476.GenesisState;
            toJSON(message: _476.GenesisState): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _476.GenesisState;
        };
    };
    namespace txfees {
        const v1beta1: {
            QueryFeeTokensRequest: {
                encode(_: _495.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _495.QueryFeeTokensRequest;
                fromJSON(_: any): _495.QueryFeeTokensRequest;
                toJSON(_: _495.QueryFeeTokensRequest): unknown;
                fromPartial<I extends unknown>(_: I): _495.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _495.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _495.QueryFeeTokensResponse;
                fromJSON(object: any): _495.QueryFeeTokensResponse;
                toJSON(message: _495.QueryFeeTokensResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _495.QueryFeeTokensResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _495.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _495.QueryDenomPoolIdRequest;
                fromJSON(object: any): _495.QueryDenomPoolIdRequest;
                toJSON(message: _495.QueryDenomPoolIdRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _495.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _495.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _495.QueryDenomPoolIdResponse;
                fromJSON(object: any): _495.QueryDenomPoolIdResponse;
                toJSON(message: _495.QueryDenomPoolIdResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _495.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _495.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _495.QueryBaseDenomRequest;
                fromJSON(_: any): _495.QueryBaseDenomRequest;
                toJSON(_: _495.QueryBaseDenomRequest): unknown;
                fromPartial<I_4 extends unknown>(_: I_4): _495.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _495.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _495.QueryBaseDenomResponse;
                fromJSON(object: any): _495.QueryBaseDenomResponse;
                toJSON(message: _495.QueryBaseDenomResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _495.QueryBaseDenomResponse;
            };
            UpdateFeeTokenProposal: {
                encode(message: _493.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _493.UpdateFeeTokenProposal;
                fromJSON(object: any): _493.UpdateFeeTokenProposal;
                toJSON(message: _493.UpdateFeeTokenProposal): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _493.UpdateFeeTokenProposal;
            };
            GenesisState: {
                encode(message: _491.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _491.GenesisState;
                fromJSON(object: any): _491.GenesisState;
                toJSON(message: _491.GenesisState): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _491.GenesisState;
            };
            FeeToken: {
                encode(message: _489.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _489.FeeToken;
                fromJSON(object: any): _489.FeeToken;
                toJSON(message: _489.FeeToken): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _489.FeeToken;
            };
        };
    }
}
export declare namespace secret {
    namespace compute {
        const v1beta1: {
            accessTypeFromJSON(object: any): _503.AccessType;
            accessTypeToJSON(object: _503.AccessType): string;
            AccessType: typeof _503.AccessType;
            AccessTypeParam: {
                encode(message: _503.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _503.AccessTypeParam;
                fromJSON(object: any): _503.AccessTypeParam;
                toJSON(message: _503.AccessTypeParam): unknown;
                fromPartial<I extends unknown>(object: I): _503.AccessTypeParam;
            };
            CodeInfo: {
                encode(message: _503.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _503.CodeInfo;
                fromJSON(object: any): _503.CodeInfo;
                toJSON(message: _503.CodeInfo): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _503.CodeInfo;
            };
            ContractCustomInfo: {
                encode(message: _503.ContractCustomInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _503.ContractCustomInfo;
                fromJSON(object: any): _503.ContractCustomInfo;
                toJSON(message: _503.ContractCustomInfo): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _503.ContractCustomInfo;
            };
            ContractInfo: {
                encode(message: _503.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _503.ContractInfo;
                fromJSON(object: any): _503.ContractInfo;
                toJSON(message: _503.ContractInfo): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _503.ContractInfo;
            };
            AbsoluteTxPosition: {
                encode(message: _503.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _503.AbsoluteTxPosition;
                fromJSON(object: any): _503.AbsoluteTxPosition;
                toJSON(message: _503.AbsoluteTxPosition): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _503.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _503.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _503.Model;
                fromJSON(object: any): _503.Model;
                toJSON(message: _503.Model): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _503.Model;
            };
            QueryContractInfoRequest: {
                encode(message: _501.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryContractInfoRequest;
                fromJSON(object: any): _501.QueryContractInfoRequest;
                toJSON(message: _501.QueryContractInfoRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _501.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _501.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryContractInfoResponse;
                fromJSON(object: any): _501.QueryContractInfoResponse;
                toJSON(message: _501.QueryContractInfoResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _501.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _501.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryContractHistoryRequest;
                fromJSON(object: any): _501.QueryContractHistoryRequest;
                toJSON(message: _501.QueryContractHistoryRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _501.QueryContractHistoryRequest;
            };
            QueryContractsByCodeRequest: {
                encode(message: _501.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryContractsByCodeRequest;
                fromJSON(object: any): _501.QueryContractsByCodeRequest;
                toJSON(message: _501.QueryContractsByCodeRequest): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _501.QueryContractsByCodeRequest;
            };
            ContractInfoWithAddress: {
                encode(message: _501.ContractInfoWithAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.ContractInfoWithAddress;
                fromJSON(object: any): _501.ContractInfoWithAddress;
                toJSON(message: _501.ContractInfoWithAddress): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _501.ContractInfoWithAddress;
            };
            QueryContractsByCodeResponse: {
                encode(message: _501.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryContractsByCodeResponse;
                fromJSON(object: any): _501.QueryContractsByCodeResponse;
                toJSON(message: _501.QueryContractsByCodeResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _501.QueryContractsByCodeResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _501.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QuerySmartContractStateRequest;
                fromJSON(object: any): _501.QuerySmartContractStateRequest;
                toJSON(message: _501.QuerySmartContractStateRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _501.QuerySmartContractStateRequest;
            };
            QueryContractAddressByLabelRequest: {
                encode(message: _501.QueryContractAddressByLabelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryContractAddressByLabelRequest;
                fromJSON(object: any): _501.QueryContractAddressByLabelRequest;
                toJSON(message: _501.QueryContractAddressByLabelRequest): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _501.QueryContractAddressByLabelRequest;
            };
            QueryContractKeyRequest: {
                encode(message: _501.QueryContractKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryContractKeyRequest;
                fromJSON(object: any): _501.QueryContractKeyRequest;
                toJSON(message: _501.QueryContractKeyRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _501.QueryContractKeyRequest;
            };
            QueryContractHashRequest: {
                encode(message: _501.QueryContractHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryContractHashRequest;
                fromJSON(object: any): _501.QueryContractHashRequest;
                toJSON(message: _501.QueryContractHashRequest): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _501.QueryContractHashRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _501.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QuerySmartContractStateResponse;
                fromJSON(object: any): _501.QuerySmartContractStateResponse;
                toJSON(message: _501.QuerySmartContractStateResponse): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _501.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _501.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryCodeRequest;
                fromJSON(object: any): _501.QueryCodeRequest;
                toJSON(message: _501.QueryCodeRequest): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _501.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _501.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.CodeInfoResponse;
                fromJSON(object: any): _501.CodeInfoResponse;
                toJSON(message: _501.CodeInfoResponse): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _501.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _501.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryCodeResponse;
                fromJSON(object: any): _501.QueryCodeResponse;
                toJSON(message: _501.QueryCodeResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _501.QueryCodeResponse;
            };
            QueryCodesResponse: {
                encode(message: _501.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryCodesResponse;
                fromJSON(object: any): _501.QueryCodesResponse;
                toJSON(message: _501.QueryCodesResponse): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _501.QueryCodesResponse;
            };
            QueryContractAddressByLabelResponse: {
                encode(message: _501.QueryContractAddressByLabelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryContractAddressByLabelResponse;
                fromJSON(object: any): _501.QueryContractAddressByLabelResponse;
                toJSON(message: _501.QueryContractAddressByLabelResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _501.QueryContractAddressByLabelResponse;
            };
            QueryContractKeyResponse: {
                encode(message: _501.QueryContractKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryContractKeyResponse;
                fromJSON(object: any): _501.QueryContractKeyResponse;
                toJSON(message: _501.QueryContractKeyResponse): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _501.QueryContractKeyResponse;
            };
            QueryContractHashResponse: {
                encode(message: _501.QueryContractHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryContractHashResponse;
                fromJSON(object: any): _501.QueryContractHashResponse;
                toJSON(message: _501.QueryContractHashResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _501.QueryContractHashResponse;
            };
            DecryptedAnswer: {
                encode(message: _501.DecryptedAnswer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.DecryptedAnswer;
                fromJSON(object: any): _501.DecryptedAnswer;
                toJSON(message: _501.DecryptedAnswer): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _501.DecryptedAnswer;
            };
            MsgStoreCode: {
                encode(message: _499.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _499.MsgStoreCode;
                fromJSON(object: any): _499.MsgStoreCode;
                toJSON(message: _499.MsgStoreCode): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _499.MsgStoreCode;
            };
            MsgInstantiateContract: {
                encode(message: _499.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _499.MsgInstantiateContract;
                fromJSON(object: any): _499.MsgInstantiateContract;
                toJSON(message: _499.MsgInstantiateContract): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _499.MsgInstantiateContract;
            };
            MsgExecuteContract: {
                encode(message: _499.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _499.MsgExecuteContract;
                fromJSON(object: any): _499.MsgExecuteContract;
                toJSON(message: _499.MsgExecuteContract): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _499.MsgExecuteContract;
            };
            GenesisState: {
                encode(message: _497.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _497.GenesisState;
                fromJSON(object: any): _497.GenesisState;
                toJSON(message: _497.GenesisState): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _497.GenesisState;
            };
            Code: {
                encode(message: _497.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _497.Code;
                fromJSON(object: any): _497.Code;
                toJSON(message: _497.Code): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _497.Code;
            };
            Contract: {
                encode(message: _497.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _497.Contract;
                fromJSON(object: any): _497.Contract;
                toJSON(message: _497.Contract): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _497.Contract;
            };
            Sequence: {
                encode(message: _497.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _497.Sequence;
                fromJSON(object: any): _497.Sequence;
                toJSON(message: _497.Sequence): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _497.Sequence;
            };
        };
    }
    namespace registration {
        const v1beta1: {
            SeedConfig: {
                encode(message: _511.SeedConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _511.SeedConfig;
                fromJSON(object: any): _511.SeedConfig;
                toJSON(message: _511.SeedConfig): unknown;
                fromPartial<I extends unknown>(object: I): _511.SeedConfig;
            };
            RegistrationNodeInfo: {
                encode(message: _511.RegistrationNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _511.RegistrationNodeInfo;
                fromJSON(object: any): _511.RegistrationNodeInfo;
                toJSON(message: _511.RegistrationNodeInfo): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _511.RegistrationNodeInfo;
            };
            QueryEncryptedSeedRequest: {
                encode(message: _509.QueryEncryptedSeedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.QueryEncryptedSeedRequest;
                fromJSON(object: any): _509.QueryEncryptedSeedRequest;
                toJSON(message: _509.QueryEncryptedSeedRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _509.QueryEncryptedSeedRequest;
            };
            QueryEncryptedSeedResponse: {
                encode(message: _509.QueryEncryptedSeedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.QueryEncryptedSeedResponse;
                fromJSON(object: any): _509.QueryEncryptedSeedResponse;
                toJSON(message: _509.QueryEncryptedSeedResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _509.QueryEncryptedSeedResponse;
            };
            RaAuthenticate: {
                encode(message: _507.RaAuthenticate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _507.RaAuthenticate;
                fromJSON(object: any): _507.RaAuthenticate;
                toJSON(message: _507.RaAuthenticate): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _507.RaAuthenticate;
            };
            MasterCertificate: {
                encode(message: _507.MasterCertificate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _507.MasterCertificate;
                fromJSON(object: any): _507.MasterCertificate;
                toJSON(message: _507.MasterCertificate): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _507.MasterCertificate;
            };
            Key: {
                encode(message: _507.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _507.Key;
                fromJSON(object: any): _507.Key;
                toJSON(message: _507.Key): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _507.Key;
            };
            GenesisState: {
                encode(message: _505.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _505.GenesisState;
                fromJSON(object: any): _505.GenesisState;
                toJSON(message: _505.GenesisState): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _505.GenesisState;
            };
        };
        namespace remote_attestation {
            const v1beta1: {
                QuoteReport: {
                    encode(message: _513.QuoteReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.QuoteReport;
                    fromJSON(object: any): _513.QuoteReport;
                    toJSON(message: _513.QuoteReport): unknown;
                    fromPartial<I extends unknown>(object: I): _513.QuoteReport;
                };
                QuoteReportBody: {
                    encode(message: _513.QuoteReportBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.QuoteReportBody;
                    fromJSON(object: any): _513.QuoteReportBody;
                    toJSON(message: _513.QuoteReportBody): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _513.QuoteReportBody;
                };
                QuoteReportData: {
                    encode(message: _513.QuoteReportData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.QuoteReportData;
                    fromJSON(object: any): _513.QuoteReportData;
                    toJSON(message: _513.QuoteReportData): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _513.QuoteReportData;
                };
                EndorsedAttestationReport: {
                    encode(message: _513.EndorsedAttestationReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.EndorsedAttestationReport;
                    fromJSON(object: any): _513.EndorsedAttestationReport;
                    toJSON(message: _513.EndorsedAttestationReport): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _513.EndorsedAttestationReport;
                };
                SGXEC256Signature: {
                    encode(message: _513.SGXEC256Signature, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.SGXEC256Signature;
                    fromJSON(object: any): _513.SGXEC256Signature;
                    toJSON(message: _513.SGXEC256Signature): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _513.SGXEC256Signature;
                };
                PlatformInfoBlob: {
                    encode(message: _513.PlatformInfoBlob, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.PlatformInfoBlob;
                    fromJSON(object: any): _513.PlatformInfoBlob;
                    toJSON(message: _513.PlatformInfoBlob): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _513.PlatformInfoBlob;
                };
            };
        }
    }
}
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _515.CheckTxType;
        checkTxTypeToJSON(object: _515.CheckTxType): string;
        evidenceTypeFromJSON(object: any): _515.EvidenceType;
        evidenceTypeToJSON(object: _515.EvidenceType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _515.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _515.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _515.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _515.ResponseApplySnapshotChunk_Result): string;
        CheckTxType: typeof _515.CheckTxType;
        EvidenceType: typeof _515.EvidenceType;
        Request: {
            encode(message: _515.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.Request;
            fromJSON(object: any): _515.Request;
            toJSON(message: _515.Request): unknown;
            fromPartial<I extends unknown>(object: I): _515.Request;
        };
        RequestEcho: {
            encode(message: _515.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.RequestEcho;
            fromJSON(object: any): _515.RequestEcho;
            toJSON(message: _515.RequestEcho): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _515.RequestEcho;
        };
        RequestFlush: {
            encode(_: _515.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.RequestFlush;
            fromJSON(_: any): _515.RequestFlush;
            toJSON(_: _515.RequestFlush): unknown;
            fromPartial<I_2 extends unknown>(_: I_2): _515.RequestFlush;
        };
        RequestInfo: {
            encode(message: _515.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.RequestInfo;
            fromJSON(object: any): _515.RequestInfo;
            toJSON(message: _515.RequestInfo): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _515.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _515.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.RequestSetOption;
            fromJSON(object: any): _515.RequestSetOption;
            toJSON(message: _515.RequestSetOption): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _515.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _515.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.RequestInitChain;
            fromJSON(object: any): _515.RequestInitChain;
            toJSON(message: _515.RequestInitChain): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _515.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _515.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.RequestQuery;
            fromJSON(object: any): _515.RequestQuery;
            toJSON(message: _515.RequestQuery): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _515.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _515.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.RequestBeginBlock;
            fromJSON(object: any): _515.RequestBeginBlock;
            toJSON(message: _515.RequestBeginBlock): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _515.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _515.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.RequestCheckTx;
            fromJSON(object: any): _515.RequestCheckTx;
            toJSON(message: _515.RequestCheckTx): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _515.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _515.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.RequestDeliverTx;
            fromJSON(object: any): _515.RequestDeliverTx;
            toJSON(message: _515.RequestDeliverTx): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _515.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _515.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.RequestEndBlock;
            fromJSON(object: any): _515.RequestEndBlock;
            toJSON(message: _515.RequestEndBlock): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _515.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _515.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.RequestCommit;
            fromJSON(_: any): _515.RequestCommit;
            toJSON(_: _515.RequestCommit): unknown;
            fromPartial<I_11 extends unknown>(_: I_11): _515.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _515.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.RequestListSnapshots;
            fromJSON(_: any): _515.RequestListSnapshots;
            toJSON(_: _515.RequestListSnapshots): unknown;
            fromPartial<I_12 extends unknown>(_: I_12): _515.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _515.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.RequestOfferSnapshot;
            fromJSON(object: any): _515.RequestOfferSnapshot;
            toJSON(message: _515.RequestOfferSnapshot): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _515.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _515.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.RequestLoadSnapshotChunk;
            fromJSON(object: any): _515.RequestLoadSnapshotChunk;
            toJSON(message: _515.RequestLoadSnapshotChunk): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _515.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _515.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.RequestApplySnapshotChunk;
            fromJSON(object: any): _515.RequestApplySnapshotChunk;
            toJSON(message: _515.RequestApplySnapshotChunk): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _515.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _515.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.Response;
            fromJSON(object: any): _515.Response;
            toJSON(message: _515.Response): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _515.Response;
        };
        ResponseException: {
            encode(message: _515.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.ResponseException;
            fromJSON(object: any): _515.ResponseException;
            toJSON(message: _515.ResponseException): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _515.ResponseException;
        };
        ResponseEcho: {
            encode(message: _515.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.ResponseEcho;
            fromJSON(object: any): _515.ResponseEcho;
            toJSON(message: _515.ResponseEcho): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _515.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _515.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.ResponseFlush;
            fromJSON(_: any): _515.ResponseFlush;
            toJSON(_: _515.ResponseFlush): unknown;
            fromPartial<I_19 extends unknown>(_: I_19): _515.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _515.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.ResponseInfo;
            fromJSON(object: any): _515.ResponseInfo;
            toJSON(message: _515.ResponseInfo): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _515.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _515.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.ResponseSetOption;
            fromJSON(object: any): _515.ResponseSetOption;
            toJSON(message: _515.ResponseSetOption): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _515.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _515.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.ResponseInitChain;
            fromJSON(object: any): _515.ResponseInitChain;
            toJSON(message: _515.ResponseInitChain): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _515.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _515.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.ResponseQuery;
            fromJSON(object: any): _515.ResponseQuery;
            toJSON(message: _515.ResponseQuery): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _515.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _515.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.ResponseBeginBlock;
            fromJSON(object: any): _515.ResponseBeginBlock;
            toJSON(message: _515.ResponseBeginBlock): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _515.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _515.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.ResponseCheckTx;
            fromJSON(object: any): _515.ResponseCheckTx;
            toJSON(message: _515.ResponseCheckTx): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _515.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _515.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.ResponseDeliverTx;
            fromJSON(object: any): _515.ResponseDeliverTx;
            toJSON(message: _515.ResponseDeliverTx): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _515.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _515.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.ResponseEndBlock;
            fromJSON(object: any): _515.ResponseEndBlock;
            toJSON(message: _515.ResponseEndBlock): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _515.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _515.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.ResponseCommit;
            fromJSON(object: any): _515.ResponseCommit;
            toJSON(message: _515.ResponseCommit): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _515.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _515.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.ResponseListSnapshots;
            fromJSON(object: any): _515.ResponseListSnapshots;
            toJSON(message: _515.ResponseListSnapshots): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _515.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _515.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.ResponseOfferSnapshot;
            fromJSON(object: any): _515.ResponseOfferSnapshot;
            toJSON(message: _515.ResponseOfferSnapshot): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _515.ResponseOfferSnapshot;
        };
        ResponseOfferSnapshot_Result: typeof _515.ResponseOfferSnapshot_Result;
        ResponseLoadSnapshotChunk: {
            encode(message: _515.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _515.ResponseLoadSnapshotChunk;
            toJSON(message: _515.ResponseLoadSnapshotChunk): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _515.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _515.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.ResponseApplySnapshotChunk;
            fromJSON(object: any): _515.ResponseApplySnapshotChunk;
            toJSON(message: _515.ResponseApplySnapshotChunk): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _515.ResponseApplySnapshotChunk;
        };
        ResponseApplySnapshotChunk_Result: typeof _515.ResponseApplySnapshotChunk_Result;
        ConsensusParams: {
            encode(message: _515.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.ConsensusParams;
            fromJSON(object: any): _515.ConsensusParams;
            toJSON(message: _515.ConsensusParams): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _515.ConsensusParams;
        };
        BlockParams: {
            encode(message: _515.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.BlockParams;
            fromJSON(object: any): _515.BlockParams;
            toJSON(message: _515.BlockParams): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _515.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _515.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.LastCommitInfo;
            fromJSON(object: any): _515.LastCommitInfo;
            toJSON(message: _515.LastCommitInfo): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _515.LastCommitInfo;
        };
        Event: {
            encode(message: _515.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.Event;
            fromJSON(object: any): _515.Event;
            toJSON(message: _515.Event): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _515.Event;
        };
        EventAttribute: {
            encode(message: _515.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.EventAttribute;
            fromJSON(object: any): _515.EventAttribute;
            toJSON(message: _515.EventAttribute): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _515.EventAttribute;
        };
        TxResult: {
            encode(message: _515.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.TxResult;
            fromJSON(object: any): _515.TxResult;
            toJSON(message: _515.TxResult): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _515.TxResult;
        };
        Validator: {
            encode(message: _515.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.Validator;
            fromJSON(object: any): _515.Validator;
            toJSON(message: _515.Validator): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _515.Validator;
        };
        ValidatorUpdate: {
            encode(message: _515.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.ValidatorUpdate;
            fromJSON(object: any): _515.ValidatorUpdate;
            toJSON(message: _515.ValidatorUpdate): unknown;
            fromPartial<I_40 extends unknown>(object: I_40): _515.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _515.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.VoteInfo;
            fromJSON(object: any): _515.VoteInfo;
            toJSON(message: _515.VoteInfo): unknown;
            fromPartial<I_41 extends unknown>(object: I_41): _515.VoteInfo;
        };
        Evidence: {
            encode(message: _515.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.Evidence;
            fromJSON(object: any): _515.Evidence;
            toJSON(message: _515.Evidence): unknown;
            fromPartial<I_42 extends unknown>(object: I_42): _515.Evidence;
        };
        Snapshot: {
            encode(message: _515.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.Snapshot;
            fromJSON(object: any): _515.Snapshot;
            toJSON(message: _515.Snapshot): unknown;
            fromPartial<I_43 extends unknown>(object: I_43): _515.Snapshot;
        };
        ABCIApplicationClientImpl: typeof _515.ABCIApplicationClientImpl;
    };
    const crypto: {
        Proof: {
            encode(message: _519.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _519.Proof;
            fromJSON(object: any): _519.Proof;
            toJSON(message: _519.Proof): unknown;
            fromPartial<I extends unknown>(object: I): _519.Proof;
        };
        ValueOp: {
            encode(message: _519.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _519.ValueOp;
            fromJSON(object: any): _519.ValueOp;
            toJSON(message: _519.ValueOp): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _519.ValueOp;
        };
        DominoOp: {
            encode(message: _519.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _519.DominoOp;
            fromJSON(object: any): _519.DominoOp;
            toJSON(message: _519.DominoOp): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _519.DominoOp;
        };
        ProofOp: {
            encode(message: _519.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _519.ProofOp;
            fromJSON(object: any): _519.ProofOp;
            toJSON(message: _519.ProofOp): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _519.ProofOp;
        };
        ProofOps: {
            encode(message: _519.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _519.ProofOps;
            fromJSON(object: any): _519.ProofOps;
            toJSON(message: _519.ProofOps): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _519.ProofOps;
        };
        PublicKey: {
            encode(message: _517.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _517.PublicKey;
            fromJSON(object: any): _517.PublicKey;
            toJSON(message: _517.PublicKey): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _517.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _521.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _521.BitArray;
                fromJSON(object: any): _521.BitArray;
                toJSON(message: _521.BitArray): unknown;
                fromPartial<I extends unknown>(object: I): _521.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _523.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _523.ProtocolVersion;
            fromJSON(object: any): _523.ProtocolVersion;
            toJSON(message: _523.ProtocolVersion): unknown;
            fromPartial<I extends unknown>(object: I): _523.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _523.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _523.NodeInfo;
            fromJSON(object: any): _523.NodeInfo;
            toJSON(message: _523.NodeInfo): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _523.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _523.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _523.NodeInfoOther;
            fromJSON(object: any): _523.NodeInfoOther;
            toJSON(message: _523.NodeInfoOther): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _523.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _523.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _523.PeerInfo;
            fromJSON(object: any): _523.PeerInfo;
            toJSON(message: _523.PeerInfo): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _523.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _523.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _523.PeerAddressInfo;
            fromJSON(object: any): _523.PeerAddressInfo;
            toJSON(message: _523.PeerAddressInfo): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _523.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _533.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.ValidatorSet;
            fromJSON(object: any): _533.ValidatorSet;
            toJSON(message: _533.ValidatorSet): unknown;
            fromPartial<I extends unknown>(object: I): _533.ValidatorSet;
        };
        Validator: {
            encode(message: _533.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.Validator;
            fromJSON(object: any): _533.Validator;
            toJSON(message: _533.Validator): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _533.Validator;
        };
        SimpleValidator: {
            encode(message: _533.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.SimpleValidator;
            fromJSON(object: any): _533.SimpleValidator;
            toJSON(message: _533.SimpleValidator): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _533.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _531.BlockIDFlag;
        blockIDFlagToJSON(object: _531.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _531.SignedMsgType;
        signedMsgTypeToJSON(object: _531.SignedMsgType): string;
        BlockIDFlag: typeof _531.BlockIDFlag;
        SignedMsgType: typeof _531.SignedMsgType;
        PartSetHeader: {
            encode(message: _531.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.PartSetHeader;
            fromJSON(object: any): _531.PartSetHeader;
            toJSON(message: _531.PartSetHeader): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _531.PartSetHeader;
        };
        Part: {
            encode(message: _531.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.Part;
            fromJSON(object: any): _531.Part;
            toJSON(message: _531.Part): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _531.Part;
        };
        BlockID: {
            encode(message: _531.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.BlockID;
            fromJSON(object: any): _531.BlockID;
            toJSON(message: _531.BlockID): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _531.BlockID;
        };
        Header: {
            encode(message: _531.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.Header;
            fromJSON(object: any): _531.Header;
            toJSON(message: _531.Header): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _531.Header;
        };
        Data: {
            encode(message: _531.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.Data;
            fromJSON(object: any): _531.Data;
            toJSON(message: _531.Data): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _531.Data;
        };
        Vote: {
            encode(message: _531.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.Vote;
            fromJSON(object: any): _531.Vote;
            toJSON(message: _531.Vote): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _531.Vote;
        };
        Commit: {
            encode(message: _531.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.Commit;
            fromJSON(object: any): _531.Commit;
            toJSON(message: _531.Commit): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _531.Commit;
        };
        CommitSig: {
            encode(message: _531.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.CommitSig;
            fromJSON(object: any): _531.CommitSig;
            toJSON(message: _531.CommitSig): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _531.CommitSig;
        };
        Proposal: {
            encode(message: _531.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.Proposal;
            fromJSON(object: any): _531.Proposal;
            toJSON(message: _531.Proposal): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _531.Proposal;
        };
        SignedHeader: {
            encode(message: _531.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.SignedHeader;
            fromJSON(object: any): _531.SignedHeader;
            toJSON(message: _531.SignedHeader): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _531.SignedHeader;
        };
        LightBlock: {
            encode(message: _531.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.LightBlock;
            fromJSON(object: any): _531.LightBlock;
            toJSON(message: _531.LightBlock): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _531.LightBlock;
        };
        BlockMeta: {
            encode(message: _531.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.BlockMeta;
            fromJSON(object: any): _531.BlockMeta;
            toJSON(message: _531.BlockMeta): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _531.BlockMeta;
        };
        TxProof: {
            encode(message: _531.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.TxProof;
            fromJSON(object: any): _531.TxProof;
            toJSON(message: _531.TxProof): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _531.TxProof;
        };
        ConsensusParams: {
            encode(message: _529.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _529.ConsensusParams;
            fromJSON(object: any): _529.ConsensusParams;
            toJSON(message: _529.ConsensusParams): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _529.ConsensusParams;
        };
        BlockParams: {
            encode(message: _529.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _529.BlockParams;
            fromJSON(object: any): _529.BlockParams;
            toJSON(message: _529.BlockParams): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _529.BlockParams;
        };
        EvidenceParams: {
            encode(message: _529.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _529.EvidenceParams;
            fromJSON(object: any): _529.EvidenceParams;
            toJSON(message: _529.EvidenceParams): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _529.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _529.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _529.ValidatorParams;
            fromJSON(object: any): _529.ValidatorParams;
            toJSON(message: _529.ValidatorParams): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _529.ValidatorParams;
        };
        VersionParams: {
            encode(message: _529.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _529.VersionParams;
            fromJSON(object: any): _529.VersionParams;
            toJSON(message: _529.VersionParams): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _529.VersionParams;
        };
        HashedParams: {
            encode(message: _529.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _529.HashedParams;
            fromJSON(object: any): _529.HashedParams;
            toJSON(message: _529.HashedParams): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _529.HashedParams;
        };
        Evidence: {
            encode(message: _527.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _527.Evidence;
            fromJSON(object: any): _527.Evidence;
            toJSON(message: _527.Evidence): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _527.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _527.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _527.DuplicateVoteEvidence;
            fromJSON(object: any): _527.DuplicateVoteEvidence;
            toJSON(message: _527.DuplicateVoteEvidence): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _527.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _527.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _527.LightClientAttackEvidence;
            fromJSON(object: any): _527.LightClientAttackEvidence;
            toJSON(message: _527.LightClientAttackEvidence): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _527.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _527.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _527.EvidenceList;
            fromJSON(object: any): _527.EvidenceList;
            toJSON(message: _527.EvidenceList): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _527.EvidenceList;
        };
        Block: {
            encode(message: _525.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.Block;
            fromJSON(object: any): _525.Block;
            toJSON(message: _525.Block): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _525.Block;
        };
    };
    const version: {
        App: {
            encode(message: _535.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _535.App;
            fromJSON(object: any): _535.App;
            toJSON(message: _535.App): unknown;
            fromPartial<I extends unknown>(object: I): _535.App;
        };
        Consensus: {
            encode(message: _535.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _535.Consensus;
            fromJSON(object: any): _535.Consensus;
            toJSON(message: _535.Consensus): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _535.Consensus;
        };
    };
}
