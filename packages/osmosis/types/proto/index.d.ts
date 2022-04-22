import * as _0 from "./confio/proofs";
import * as _1 from "./cosmos_proto/cosmos";
import * as _2 from "./cosmos/app/v1alpha1/config";
import * as _3 from "./cosmos/app/v1alpha1/module";
import * as _4 from "./cosmos/app/v1alpha1/query";
import * as _5 from "./cosmos/auth/v1beta1/auth";
import * as _6 from "./cosmos/auth/v1beta1/genesis";
import * as _7 from "./cosmos/auth/v1beta1/query";
import * as _8 from "./cosmos/authz/v1beta1/authz";
import * as _9 from "./cosmos/authz/v1beta1/event";
import * as _10 from "./cosmos/authz/v1beta1/genesis";
import * as _11 from "./cosmos/authz/v1beta1/query";
import * as _12 from "./cosmos/authz/v1beta1/tx";
import * as _21 from "./cosmos/bank/v1beta1/authz";
import * as _22 from "./cosmos/bank/v1beta1/bank";
import * as _23 from "./cosmos/bank/v1beta1/genesis";
import * as _24 from "./cosmos/bank/v1beta1/query";
import * as _25 from "./cosmos/bank/v1beta1/tx";
import * as _34 from "./cosmos/base/abci/v1beta1/abci";
import * as _35 from "./cosmos/base/kv/v1beta1/kv";
import * as _36 from "./cosmos/base/query/v1beta1/pagination";
import * as _37 from "./cosmos/base/reflection/v1beta1/reflection";
import * as _38 from "./cosmos/base/reflection/v2alpha1/reflection";
import * as _39 from "./cosmos/base/snapshots/v1beta1/snapshot";
import * as _40 from "./cosmos/base/store/v1beta1/commit_info";
import * as _41 from "./cosmos/base/store/v1beta1/listening";
import * as _42 from "./cosmos/base/tendermint/v1beta1/query";
import * as _43 from "./cosmos/base/v1beta1/coin";
import * as _44 from "./cosmos/capability/v1beta1/capability";
import * as _45 from "./cosmos/capability/v1beta1/genesis";
import * as _46 from "./cosmos/crisis/v1beta1/genesis";
import * as _47 from "./cosmos/crisis/v1beta1/tx";
import * as _56 from "./cosmos/crypto/ed25519/keys";
import * as _57 from "./cosmos/crypto/hd/v1/hd";
import * as _58 from "./cosmos/crypto/keyring/v1/record";
import * as _59 from "./cosmos/crypto/multisig/keys";
import * as _60 from "./cosmos/crypto/secp256k1/keys";
import * as _61 from "./cosmos/crypto/secp256r1/keys";
import * as _62 from "./cosmos/distribution/v1beta1/distribution";
import * as _63 from "./cosmos/distribution/v1beta1/genesis";
import * as _64 from "./cosmos/distribution/v1beta1/query";
import * as _65 from "./cosmos/distribution/v1beta1/tx";
import * as _74 from "./cosmos/evidence/v1beta1/evidence";
import * as _75 from "./cosmos/evidence/v1beta1/genesis";
import * as _76 from "./cosmos/evidence/v1beta1/query";
import * as _77 from "./cosmos/evidence/v1beta1/tx";
import * as _86 from "./cosmos/feegrant/v1beta1/feegrant";
import * as _87 from "./cosmos/feegrant/v1beta1/genesis";
import * as _88 from "./cosmos/feegrant/v1beta1/query";
import * as _89 from "./cosmos/feegrant/v1beta1/tx";
import * as _98 from "./cosmos/genutil/v1beta1/genesis";
import * as _99 from "./cosmos/gov/v1/genesis";
import * as _100 from "./cosmos/gov/v1/gov";
import * as _101 from "./cosmos/gov/v1/query";
import * as _102 from "./cosmos/gov/v1/tx";
import * as _111 from "./cosmos/gov/v1beta1/genesis";
import * as _112 from "./cosmos/gov/v1beta1/gov";
import * as _113 from "./cosmos/gov/v1beta1/query";
import * as _114 from "./cosmos/gov/v1beta1/tx";
import * as _123 from "./cosmos/group/v1/events";
import * as _124 from "./cosmos/group/v1/genesis";
import * as _125 from "./cosmos/group/v1/query";
import * as _126 from "./cosmos/group/v1/tx";
import * as _135 from "./cosmos/group/v1/types";
import * as _136 from "./cosmos/mint/v1beta1/genesis";
import * as _137 from "./cosmos/mint/v1beta1/mint";
import * as _138 from "./cosmos/mint/v1beta1/query";
import * as _140 from "./cosmos/nft/v1beta1/event";
import * as _141 from "./cosmos/nft/v1beta1/genesis";
import * as _142 from "./cosmos/nft/v1beta1/nft";
import * as _143 from "./cosmos/nft/v1beta1/query";
import * as _144 from "./cosmos/nft/v1beta1/tx";
import * as _153 from "./cosmos/orm/v1/orm";
import * as _154 from "./cosmos/orm/v1alpha1/schema";
import * as _155 from "./cosmos/params/v1beta1/params";
import * as _156 from "./cosmos/params/v1beta1/query";
import * as _157 from "./cosmos/slashing/v1beta1/genesis";
import * as _158 from "./cosmos/slashing/v1beta1/query";
import * as _159 from "./cosmos/slashing/v1beta1/slashing";
import * as _160 from "./cosmos/slashing/v1beta1/tx";
import * as _169 from "./cosmos/staking/v1beta1/authz";
import * as _170 from "./cosmos/staking/v1beta1/genesis";
import * as _171 from "./cosmos/staking/v1beta1/query";
import * as _172 from "./cosmos/staking/v1beta1/staking";
import * as _173 from "./cosmos/staking/v1beta1/tx";
import * as _182 from "./cosmos/tx/signing/v1beta1/signing";
import * as _183 from "./cosmos/tx/v1beta1/service";
import * as _184 from "./cosmos/tx/v1beta1/tx";
import * as _185 from "./cosmos/upgrade/v1beta1/query";
import * as _186 from "./cosmos/upgrade/v1beta1/tx";
import * as _195 from "./cosmos/upgrade/v1beta1/upgrade";
import * as _196 from "./cosmos/vesting/v1beta1/tx";
import * as _205 from "./cosmos/vesting/v1beta1/vesting";
import * as _206 from "./cosmwasm/wasm/v1/genesis";
import * as _207 from "./cosmwasm/wasm/v1/ibc";
import * as _208 from "./cosmwasm/wasm/v1/proposal";
import * as _209 from "./cosmwasm/wasm/v1/query";
import * as _210 from "./cosmwasm/wasm/v1/tx";
import * as _219 from "./cosmwasm/wasm/v1/types";
import * as _222 from "./google/api/auth";
import * as _223 from "./google/api/backend";
import * as _224 from "./google/api/billing";
import * as _226 from "./google/api/config_change";
import * as _227 from "./google/api/consumer";
import * as _228 from "./google/api/context";
import * as _229 from "./google/api/control";
import * as _230 from "./google/api/distribution";
import * as _231 from "./google/api/documentation";
import * as _232 from "./google/api/endpoint";
import * as _233 from "./google/api/error_reason";
import * as _234 from "./google/api/field_behavior";
import * as _235 from "./google/api/http";
import * as _236 from "./google/api/httpbody";
import * as _237 from "./google/api/label";
import * as _238 from "./google/api/launch_stage";
import * as _239 from "./google/api/log";
import * as _240 from "./google/api/logging";
import * as _241 from "./google/api/metric";
import * as _242 from "./google/api/monitored_resource";
import * as _243 from "./google/api/monitoring";
import * as _244 from "./google/api/quota";
import * as _245 from "./google/api/resource";
import * as _246 from "./google/api/routing";
import * as _247 from "./google/api/service";
import * as _248 from "./google/api/source_info";
import * as _249 from "./google/api/system_parameter";
import * as _250 from "./google/api/usage";
import * as _251 from "./google/api/visibility";
import * as _252 from "./google/logging/type/http_request";
import * as _253 from "./google/logging/type/log_severity";
import * as _254 from "./google/logging/v2/log_entry";
import * as _255 from "./google/logging/v2/logging_config";
import * as _256 from "./google/logging/v2/logging_metrics";
import * as _257 from "./google/logging/v2/logging";
import * as _258 from "./google/longrunning/operations";
import * as _259 from "./google/protobuf/any";
import * as _260 from "./google/protobuf/api";
import * as _261 from "./google/protobuf/descriptor";
import * as _262 from "./google/protobuf/duration";
import * as _263 from "./google/protobuf/empty";
import * as _264 from "./google/protobuf/field_mask";
import * as _265 from "./google/protobuf/source_context";
import * as _266 from "./google/protobuf/struct";
import * as _267 from "./google/protobuf/timestamp";
import * as _268 from "./google/protobuf/type";
import * as _269 from "./google/protobuf/wrappers";
import * as _270 from "./google/rpc/code";
import * as _271 from "./google/rpc/error_details";
import * as _272 from "./google/rpc/status";
import * as _273 from "./ibc/applications/transfer/v1/genesis";
import * as _274 from "./ibc/applications/transfer/v1/query";
import * as _275 from "./ibc/applications/transfer/v1/transfer";
import * as _276 from "./ibc/applications/transfer/v1/tx";
import * as _285 from "./ibc/applications/transfer/v2/packet";
import * as _286 from "./ibc/core/channel/v1/channel";
import * as _287 from "./ibc/core/channel/v1/genesis";
import * as _288 from "./ibc/core/channel/v1/query";
import * as _289 from "./ibc/core/channel/v1/tx";
import * as _298 from "./ibc/core/client/v1/client";
import * as _299 from "./ibc/core/client/v1/genesis";
import * as _300 from "./ibc/core/client/v1/query";
import * as _301 from "./ibc/core/client/v1/tx";
import * as _310 from "./ibc/core/commitment/v1/commitment";
import * as _311 from "./ibc/core/connection/v1/connection";
import * as _312 from "./ibc/core/connection/v1/genesis";
import * as _313 from "./ibc/core/connection/v1/query";
import * as _314 from "./ibc/core/connection/v1/tx";
import * as _323 from "./ibc/core/port/v1/query";
import * as _324 from "./ibc/core/types/v1/genesis";
import * as _325 from "./ibc/lightclients/localhost/v1/localhost";
import * as _326 from "./ibc/lightclients/solomachine/v1/solomachine";
import * as _327 from "./ibc/lightclients/solomachine/v2/solomachine";
import * as _328 from "./ibc/lightclients/tendermint/v1/tendermint";
import * as _329 from "./osmosis/claim/v1beta1/claim";
import * as _330 from "./osmosis/claim/v1beta1/genesis";
import * as _331 from "./osmosis/claim/v1beta1/params";
import * as _332 from "./osmosis/claim/v1beta1/query";
import * as _333 from "./osmosis/epochs/genesis";
import * as _334 from "./osmosis/epochs/query";
import * as _335 from "./osmosis/gamm/pool-models/balancer/balancerPool";
import * as _336 from "./osmosis/gamm/pool-models/balancer/tx";
import * as _337 from "./osmosis/gamm/v1beta1/genesis";
import * as _338 from "./osmosis/gamm/v1beta1/query";
import * as _339 from "./osmosis/gamm/v1beta1/tx";
import * as _348 from "./osmosis/incentives/gauge";
import * as _349 from "./osmosis/incentives/genesis";
import * as _350 from "./osmosis/incentives/params";
import * as _351 from "./osmosis/incentives/query";
import * as _352 from "./osmosis/incentives/tx";
import * as _361 from "./osmosis/lockup/genesis";
import * as _362 from "./osmosis/lockup/lock";
import * as _363 from "./osmosis/lockup/query";
import * as _364 from "./osmosis/lockup/tx";
import * as _373 from "./osmosis/mint/v1beta1/genesis";
import * as _374 from "./osmosis/mint/v1beta1/mint";
import * as _375 from "./osmosis/mint/v1beta1/query";
import * as _376 from "./osmosis/pool-incentives/v1beta1/genesis";
import * as _377 from "./osmosis/pool-incentives/v1beta1/gov";
import * as _378 from "./osmosis/pool-incentives/v1beta1/incentives";
import * as _379 from "./osmosis/pool-incentives/v1beta1/query";
import * as _380 from "./osmosis/store/v1beta1/tree";
import * as _381 from "./osmosis/superfluid/genesis";
import * as _382 from "./osmosis/superfluid/params";
import * as _383 from "./osmosis/superfluid/query";
import * as _384 from "./osmosis/superfluid/superfluid";
import * as _385 from "./osmosis/superfluid/tx";
import * as _394 from "./osmosis/txfees/v1beta1/feetoken";
import * as _395 from "./osmosis/txfees/v1beta1/genesis";
import * as _396 from "./osmosis/txfees/v1beta1/gov";
import * as _397 from "./osmosis/txfees/v1beta1/query";
import * as _398 from "./secret/compute/v1beta1/genesis";
import * as _399 from "./secret/compute/v1beta1/msg";
import * as _400 from "./secret/compute/v1beta1/query";
import * as _401 from "./secret/compute/v1beta1/types";
import * as _402 from "./secret/registration/v1beta1/genesis";
import * as _403 from "./secret/registration/v1beta1/msg";
import * as _404 from "./secret/registration/v1beta1/query";
import * as _405 from "./secret/registration/v1beta1/types";
import * as _406 from "./secret/registration/v1beta1/remote_attestation/types";
import * as _407 from "./tendermint/abci/types";
import * as _408 from "./tendermint/crypto/keys";
import * as _409 from "./tendermint/crypto/proof";
import * as _410 from "./tendermint/libs/bits/types";
import * as _411 from "./tendermint/p2p/types";
import * as _412 from "./tendermint/types/block";
import * as _413 from "./tendermint/types/evidence";
import * as _414 from "./tendermint/types/params";
import * as _415 from "./tendermint/types/types";
import * as _416 from "./tendermint/types/validator";
import * as _417 from "./tendermint/version/types";
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
    scalarTypeFromJSON(object: any): _1.ScalarType;
    scalarTypeToJSON(object: _1.ScalarType): string;
    ScalarType: typeof _1.ScalarType;
    InterfaceDescriptor: {
        encode(message: _1.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.InterfaceDescriptor;
        fromJSON(object: any): _1.InterfaceDescriptor;
        toJSON(message: _1.InterfaceDescriptor): unknown;
        fromPartial<I extends unknown>(object: I): _1.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _1.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ScalarDescriptor;
        fromJSON(object: any): _1.ScalarDescriptor;
        toJSON(message: _1.ScalarDescriptor): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): _1.ScalarDescriptor;
    };
};
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryConfigRequest: {
                encode(_: _4.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryConfigRequest;
                fromJSON(_: any): _4.QueryConfigRequest;
                toJSON(_: _4.QueryConfigRequest): unknown;
                fromPartial<I extends unknown>(_: I): _4.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _4.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryConfigResponse;
                fromJSON(object: any): _4.QueryConfigResponse;
                toJSON(message: _4.QueryConfigResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _4.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _3.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ModuleDescriptor;
                fromJSON(object: any): _3.ModuleDescriptor;
                toJSON(message: _3.ModuleDescriptor): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _3.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _3.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.PackageReference;
                fromJSON(object: any): _3.PackageReference;
                toJSON(message: _3.PackageReference): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _3.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _3.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MigrateFromInfo;
                fromJSON(object: any): _3.MigrateFromInfo;
                toJSON(message: _3.MigrateFromInfo): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _3.MigrateFromInfo;
            };
            Config: {
                encode(message: _2.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Config;
                fromJSON(object: any): _2.Config;
                toJSON(message: _2.Config): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _2.Config;
            };
            ModuleConfig: {
                encode(message: _2.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ModuleConfig;
                fromJSON(object: any): _2.ModuleConfig;
                toJSON(message: _2.ModuleConfig): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _2.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryAccountsRequest: {
                encode(message: _7.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountsRequest;
                fromJSON(object: any): _7.QueryAccountsRequest;
                toJSON(message: _7.QueryAccountsRequest): unknown;
                fromPartial<I extends unknown>(object: I): _7.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _7.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountsResponse;
                fromJSON(object: any): _7.QueryAccountsResponse;
                toJSON(message: _7.QueryAccountsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _7.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _7.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountRequest;
                fromJSON(object: any): _7.QueryAccountRequest;
                toJSON(message: _7.QueryAccountRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _7.QueryAccountRequest;
            };
            QueryModuleAccountsRequest: {
                encode(_: _7.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryModuleAccountsRequest;
                fromJSON(_: any): _7.QueryModuleAccountsRequest;
                toJSON(_: _7.QueryModuleAccountsRequest): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _7.QueryModuleAccountsRequest;
            };
            QueryParamsResponse: {
                encode(message: _7.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryParamsResponse;
                fromJSON(object: any): _7.QueryParamsResponse;
                toJSON(message: _7.QueryParamsResponse): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _7.QueryParamsResponse;
            };
            QueryAccountResponse: {
                encode(message: _7.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountResponse;
                fromJSON(object: any): _7.QueryAccountResponse;
                toJSON(message: _7.QueryAccountResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _7.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _7.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryParamsRequest;
                fromJSON(_: any): _7.QueryParamsRequest;
                toJSON(_: _7.QueryParamsRequest): unknown;
                fromPartial<I_6 extends unknown>(_: I_6): _7.QueryParamsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _7.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryModuleAccountsResponse;
                fromJSON(object: any): _7.QueryModuleAccountsResponse;
                toJSON(message: _7.QueryModuleAccountsResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _7.QueryModuleAccountsResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _7.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Bech32PrefixRequest;
                fromJSON(_: any): _7.Bech32PrefixRequest;
                toJSON(_: _7.Bech32PrefixRequest): unknown;
                fromPartial<I_8 extends unknown>(_: I_8): _7.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _7.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Bech32PrefixResponse;
                fromJSON(object: any): _7.Bech32PrefixResponse;
                toJSON(message: _7.Bech32PrefixResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _7.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _7.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressBytesToStringRequest;
                fromJSON(object: any): _7.AddressBytesToStringRequest;
                toJSON(message: _7.AddressBytesToStringRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _7.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _7.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressBytesToStringResponse;
                fromJSON(object: any): _7.AddressBytesToStringResponse;
                toJSON(message: _7.AddressBytesToStringResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _7.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _7.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressStringToBytesRequest;
                fromJSON(object: any): _7.AddressStringToBytesRequest;
                toJSON(message: _7.AddressStringToBytesRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _7.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _7.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressStringToBytesResponse;
                fromJSON(object: any): _7.AddressStringToBytesResponse;
                toJSON(message: _7.AddressStringToBytesResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _7.AddressStringToBytesResponse;
            };
            GenesisState: {
                encode(message: _6.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.GenesisState;
                fromJSON(object: any): _6.GenesisState;
                toJSON(message: _6.GenesisState): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _6.GenesisState;
            };
            BaseAccount: {
                encode(message: _5.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.BaseAccount;
                fromJSON(object: any): _5.BaseAccount;
                toJSON(message: _5.BaseAccount): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _5.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _5.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.ModuleAccount;
                fromJSON(object: any): _5.ModuleAccount;
                toJSON(message: _5.ModuleAccount): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _5.ModuleAccount;
            };
            Params: {
                encode(message: _5.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Params;
                fromJSON(object: any): _5.Params;
                toJSON(message: _5.Params): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _5.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgGrant: {
                encode(message: _12.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgGrant;
                fromJSON(object: any): _12.MsgGrant;
                toJSON(message: _12.MsgGrant): unknown;
                fromPartial<I extends unknown>(object: I): _12.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _12.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgExecResponse;
                fromJSON(object: any): _12.MsgExecResponse;
                toJSON(message: _12.MsgExecResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _12.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _12.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgExec;
                fromJSON(object: any): _12.MsgExec;
                toJSON(message: _12.MsgExec): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _12.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _12.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgGrantResponse;
                fromJSON(_: any): _12.MsgGrantResponse;
                toJSON(_: _12.MsgGrantResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _12.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _12.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgRevoke;
                fromJSON(object: any): _12.MsgRevoke;
                toJSON(message: _12.MsgRevoke): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _12.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _12.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgRevokeResponse;
                fromJSON(_: any): _12.MsgRevokeResponse;
                toJSON(_: _12.MsgRevokeResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _12.MsgRevokeResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _12.MsgGrant) => {
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
                    }) => _12.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _12.MsgExec) => {
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
                    }) => _12.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _12.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _12.MsgRevoke;
                };
            };
            encoded: {
                grant(value: _12.MsgGrant): {
                    type_url: string;
                    value: Uint8Array;
                };
                exec(value: _12.MsgExec): {
                    type_url: string;
                    value: Uint8Array;
                };
                revoke(value: _12.MsgRevoke): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                grant(value: any): {
                    typeUrl: string;
                    value: _12.MsgGrant;
                };
                exec(value: any): {
                    typeUrl: string;
                    value: _12.MsgExec;
                };
                revoke(value: any): {
                    typeUrl: string;
                    value: _12.MsgRevoke;
                };
            };
            toJSON: {
                grant(value: _12.MsgGrant): {
                    typeUrl: string;
                    value: unknown;
                };
                exec(value: _12.MsgExec): {
                    typeUrl: string;
                    value: unknown;
                };
                revoke(value: _12.MsgRevoke): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                grant(value: _12.MsgGrant): {
                    typeUrl: string;
                    value: _12.MsgGrant;
                };
                exec(value: _12.MsgExec): {
                    typeUrl: string;
                    value: _12.MsgExec;
                };
                revoke(value: _12.MsgRevoke): {
                    typeUrl: string;
                    value: _12.MsgRevoke;
                };
            };
            messages: {
                grant(value: _12.MsgGrant): {
                    typeUrl: string;
                    value: _12.MsgGrant;
                };
                exec(value: _12.MsgExec): {
                    typeUrl: string;
                    value: _12.MsgExec;
                };
                revoke(value: _12.MsgRevoke): {
                    typeUrl: string;
                    value: _12.MsgRevoke;
                };
            };
            QueryGrantsRequest: {
                encode(message: _11.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGrantsRequest;
                fromJSON(object: any): _11.QueryGrantsRequest;
                toJSON(message: _11.QueryGrantsRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _11.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _11.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGrantsResponse;
                fromJSON(object: any): _11.QueryGrantsResponse;
                toJSON(message: _11.QueryGrantsResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _11.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _11.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranterGrantsRequest;
                fromJSON(object: any): _11.QueryGranterGrantsRequest;
                toJSON(message: _11.QueryGranterGrantsRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _11.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _11.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranterGrantsResponse;
                fromJSON(object: any): _11.QueryGranterGrantsResponse;
                toJSON(message: _11.QueryGranterGrantsResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _11.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _11.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranteeGrantsRequest;
                fromJSON(object: any): _11.QueryGranteeGrantsRequest;
                toJSON(message: _11.QueryGranteeGrantsRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _11.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _11.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranteeGrantsResponse;
                fromJSON(object: any): _11.QueryGranteeGrantsResponse;
                toJSON(message: _11.QueryGranteeGrantsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _11.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _10.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GenesisState;
                fromJSON(object: any): _10.GenesisState;
                toJSON(message: _10.GenesisState): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _10.GenesisState;
            };
            EventGrant: {
                encode(message: _9.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.EventGrant;
                fromJSON(object: any): _9.EventGrant;
                toJSON(message: _9.EventGrant): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _9.EventGrant;
            };
            EventRevoke: {
                encode(message: _9.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.EventRevoke;
                fromJSON(object: any): _9.EventRevoke;
                toJSON(message: _9.EventRevoke): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _9.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _8.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GenericAuthorization;
                fromJSON(object: any): _8.GenericAuthorization;
                toJSON(message: _8.GenericAuthorization): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _8.GenericAuthorization;
            };
            Grant: {
                encode(message: _8.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Grant;
                fromJSON(object: any): _8.Grant;
                toJSON(message: _8.Grant): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _8.Grant;
            };
            GrantAuthorization: {
                encode(message: _8.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GrantAuthorization;
                fromJSON(object: any): _8.GrantAuthorization;
                toJSON(message: _8.GrantAuthorization): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _8.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _8.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GrantQueueItem;
                fromJSON(object: any): _8.GrantQueueItem;
                toJSON(message: _8.GrantQueueItem): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _8.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgSend: {
                encode(message: _25.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgSend;
                fromJSON(object: any): _25.MsgSend;
                toJSON(message: _25.MsgSend): unknown;
                fromPartial<I extends unknown>(object: I): _25.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _25.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgSendResponse;
                fromJSON(_: any): _25.MsgSendResponse;
                toJSON(_: _25.MsgSendResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _25.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _25.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgMultiSend;
                fromJSON(object: any): _25.MsgMultiSend;
                toJSON(message: _25.MsgMultiSend): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _25.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _25.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgMultiSendResponse;
                fromJSON(_: any): _25.MsgMultiSendResponse;
                toJSON(_: _25.MsgMultiSendResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _25.MsgMultiSendResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _25.MsgSend) => {
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
                    }) => _25.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _25.MsgMultiSend) => {
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
                    }) => _25.MsgMultiSend;
                };
            };
            encoded: {
                send(value: _25.MsgSend): {
                    type_url: string;
                    value: Uint8Array;
                };
                multiSend(value: _25.MsgMultiSend): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                send(value: any): {
                    typeUrl: string;
                    value: _25.MsgSend;
                };
                multiSend(value: any): {
                    typeUrl: string;
                    value: _25.MsgMultiSend;
                };
            };
            toJSON: {
                send(value: _25.MsgSend): {
                    typeUrl: string;
                    value: unknown;
                };
                multiSend(value: _25.MsgMultiSend): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                send(value: _25.MsgSend): {
                    typeUrl: string;
                    value: _25.MsgSend;
                };
                multiSend(value: _25.MsgMultiSend): {
                    typeUrl: string;
                    value: _25.MsgMultiSend;
                };
            };
            messages: {
                send(value: _25.MsgSend): {
                    typeUrl: string;
                    value: _25.MsgSend;
                };
                multiSend(value: _25.MsgMultiSend): {
                    typeUrl: string;
                    value: _25.MsgMultiSend;
                };
            };
            QueryBalanceRequest: {
                encode(message: _24.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryBalanceRequest;
                fromJSON(object: any): _24.QueryBalanceRequest;
                toJSON(message: _24.QueryBalanceRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _24.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _24.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryBalanceResponse;
                fromJSON(object: any): _24.QueryBalanceResponse;
                toJSON(message: _24.QueryBalanceResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _24.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _24.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryAllBalancesRequest;
                fromJSON(object: any): _24.QueryAllBalancesRequest;
                toJSON(message: _24.QueryAllBalancesRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _24.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _24.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryAllBalancesResponse;
                fromJSON(object: any): _24.QueryAllBalancesResponse;
                toJSON(message: _24.QueryAllBalancesResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _24.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _24.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QuerySpendableBalancesRequest;
                fromJSON(object: any): _24.QuerySpendableBalancesRequest;
                toJSON(message: _24.QuerySpendableBalancesRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _24.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _24.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QuerySpendableBalancesResponse;
                fromJSON(object: any): _24.QuerySpendableBalancesResponse;
                toJSON(message: _24.QuerySpendableBalancesResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _24.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _24.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryTotalSupplyRequest;
                fromJSON(object: any): _24.QueryTotalSupplyRequest;
                toJSON(message: _24.QueryTotalSupplyRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _24.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _24.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryTotalSupplyResponse;
                fromJSON(object: any): _24.QueryTotalSupplyResponse;
                toJSON(message: _24.QueryTotalSupplyResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _24.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _24.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QuerySupplyOfRequest;
                fromJSON(object: any): _24.QuerySupplyOfRequest;
                toJSON(message: _24.QuerySupplyOfRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _24.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _24.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QuerySupplyOfResponse;
                fromJSON(object: any): _24.QuerySupplyOfResponse;
                toJSON(message: _24.QuerySupplyOfResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _24.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _24.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryParamsRequest;
                fromJSON(_: any): _24.QueryParamsRequest;
                toJSON(_: _24.QueryParamsRequest): unknown;
                fromPartial<I_14 extends unknown>(_: I_14): _24.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _24.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryParamsResponse;
                fromJSON(object: any): _24.QueryParamsResponse;
                toJSON(message: _24.QueryParamsResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _24.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _24.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDenomsMetadataRequest;
                fromJSON(object: any): _24.QueryDenomsMetadataRequest;
                toJSON(message: _24.QueryDenomsMetadataRequest): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _24.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _24.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDenomsMetadataResponse;
                fromJSON(object: any): _24.QueryDenomsMetadataResponse;
                toJSON(message: _24.QueryDenomsMetadataResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _24.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _24.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDenomMetadataRequest;
                fromJSON(object: any): _24.QueryDenomMetadataRequest;
                toJSON(message: _24.QueryDenomMetadataRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _24.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _24.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDenomMetadataResponse;
                fromJSON(object: any): _24.QueryDenomMetadataResponse;
                toJSON(message: _24.QueryDenomMetadataResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _24.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _24.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDenomOwnersRequest;
                fromJSON(object: any): _24.QueryDenomOwnersRequest;
                toJSON(message: _24.QueryDenomOwnersRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _24.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _24.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.DenomOwner;
                fromJSON(object: any): _24.DenomOwner;
                toJSON(message: _24.DenomOwner): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _24.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _24.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDenomOwnersResponse;
                fromJSON(object: any): _24.QueryDenomOwnersResponse;
                toJSON(message: _24.QueryDenomOwnersResponse): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _24.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _23.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GenesisState;
                fromJSON(object: any): _23.GenesisState;
                toJSON(message: _23.GenesisState): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _23.GenesisState;
            };
            Balance: {
                encode(message: _23.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Balance;
                fromJSON(object: any): _23.Balance;
                toJSON(message: _23.Balance): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _23.Balance;
            };
            Params: {
                encode(message: _22.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Params;
                fromJSON(object: any): _22.Params;
                toJSON(message: _22.Params): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _22.Params;
            };
            SendEnabled: {
                encode(message: _22.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.SendEnabled;
                fromJSON(object: any): _22.SendEnabled;
                toJSON(message: _22.SendEnabled): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _22.SendEnabled;
            };
            Input: {
                encode(message: _22.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Input;
                fromJSON(object: any): _22.Input;
                toJSON(message: _22.Input): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _22.Input;
            };
            Output: {
                encode(message: _22.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Output;
                fromJSON(object: any): _22.Output;
                toJSON(message: _22.Output): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _22.Output;
            };
            Supply: {
                encode(message: _22.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Supply;
                fromJSON(object: any): _22.Supply;
                toJSON(message: _22.Supply): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _22.Supply;
            };
            DenomUnit: {
                encode(message: _22.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.DenomUnit;
                fromJSON(object: any): _22.DenomUnit;
                toJSON(message: _22.DenomUnit): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _22.DenomUnit;
            };
            Metadata: {
                encode(message: _22.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Metadata;
                fromJSON(object: any): _22.Metadata;
                toJSON(message: _22.Metadata): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _22.Metadata;
            };
            SendAuthorization: {
                encode(message: _21.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.SendAuthorization;
                fromJSON(object: any): _21.SendAuthorization;
                toJSON(message: _21.SendAuthorization): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _21.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _34.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.TxResponse;
                    fromJSON(object: any): _34.TxResponse;
                    toJSON(message: _34.TxResponse): unknown;
                    fromPartial<I extends unknown>(object: I): _34.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _34.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ABCIMessageLog;
                    fromJSON(object: any): _34.ABCIMessageLog;
                    toJSON(message: _34.ABCIMessageLog): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _34.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _34.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.StringEvent;
                    fromJSON(object: any): _34.StringEvent;
                    toJSON(message: _34.StringEvent): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _34.StringEvent;
                };
                Attribute: {
                    encode(message: _34.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Attribute;
                    fromJSON(object: any): _34.Attribute;
                    toJSON(message: _34.Attribute): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _34.Attribute;
                };
                GasInfo: {
                    encode(message: _34.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.GasInfo;
                    fromJSON(object: any): _34.GasInfo;
                    toJSON(message: _34.GasInfo): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _34.GasInfo;
                };
                Result: {
                    encode(message: _34.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Result;
                    fromJSON(object: any): _34.Result;
                    toJSON(message: _34.Result): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _34.Result;
                };
                SimulationResponse: {
                    encode(message: _34.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.SimulationResponse;
                    fromJSON(object: any): _34.SimulationResponse;
                    toJSON(message: _34.SimulationResponse): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _34.SimulationResponse;
                };
                MsgData: {
                    encode(message: _34.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgData;
                    fromJSON(object: any): _34.MsgData;
                    toJSON(message: _34.MsgData): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _34.MsgData;
                };
                TxMsgData: {
                    encode(message: _34.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.TxMsgData;
                    fromJSON(object: any): _34.TxMsgData;
                    toJSON(message: _34.TxMsgData): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _34.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _34.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.SearchTxsResult;
                    fromJSON(object: any): _34.SearchTxsResult;
                    toJSON(message: _34.SearchTxsResult): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _34.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _35.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Pairs;
                    fromJSON(object: any): _35.Pairs;
                    toJSON(message: _35.Pairs): unknown;
                    fromPartial<I extends unknown>(object: I): _35.Pairs;
                };
                Pair: {
                    encode(message: _35.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Pair;
                    fromJSON(object: any): _35.Pair;
                    toJSON(message: _35.Pair): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _35.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _36.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.PageRequest;
                    fromJSON(object: any): _36.PageRequest;
                    toJSON(message: _36.PageRequest): unknown;
                    fromPartial<I extends unknown>(object: I): _36.PageRequest;
                };
                PageResponse: {
                    encode(message: _36.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.PageResponse;
                    fromJSON(object: any): _36.PageResponse;
                    toJSON(message: _36.PageResponse): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _36.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _37.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ListAllInterfacesRequest;
                    fromJSON(_: any): _37.ListAllInterfacesRequest;
                    toJSON(_: _37.ListAllInterfacesRequest): unknown;
                    fromPartial<I extends unknown>(_: I): _37.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _37.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ListAllInterfacesResponse;
                    fromJSON(object: any): _37.ListAllInterfacesResponse;
                    toJSON(message: _37.ListAllInterfacesResponse): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _37.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _37.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ListImplementationsRequest;
                    fromJSON(object: any): _37.ListImplementationsRequest;
                    toJSON(message: _37.ListImplementationsRequest): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _37.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _37.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ListImplementationsResponse;
                    fromJSON(object: any): _37.ListImplementationsResponse;
                    toJSON(message: _37.ListImplementationsResponse): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _37.ListImplementationsResponse;
                };
                ReflectionServiceClientImpl: typeof _37.ReflectionServiceClientImpl;
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _38.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.AppDescriptor;
                    fromJSON(object: any): _38.AppDescriptor;
                    toJSON(message: _38.AppDescriptor): unknown;
                    fromPartial<I extends unknown>(object: I): _38.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _38.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.TxDescriptor;
                    fromJSON(object: any): _38.TxDescriptor;
                    toJSON(message: _38.TxDescriptor): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _38.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _38.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.AuthnDescriptor;
                    fromJSON(object: any): _38.AuthnDescriptor;
                    toJSON(message: _38.AuthnDescriptor): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _38.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _38.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.SigningModeDescriptor;
                    fromJSON(object: any): _38.SigningModeDescriptor;
                    toJSON(message: _38.SigningModeDescriptor): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _38.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _38.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ChainDescriptor;
                    fromJSON(object: any): _38.ChainDescriptor;
                    toJSON(message: _38.ChainDescriptor): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _38.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _38.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.CodecDescriptor;
                    fromJSON(object: any): _38.CodecDescriptor;
                    toJSON(message: _38.CodecDescriptor): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _38.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _38.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.InterfaceDescriptor;
                    fromJSON(object: any): _38.InterfaceDescriptor;
                    toJSON(message: _38.InterfaceDescriptor): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _38.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _38.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _38.InterfaceImplementerDescriptor;
                    toJSON(message: _38.InterfaceImplementerDescriptor): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _38.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _38.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _38.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _38.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _38.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _38.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ConfigurationDescriptor;
                    fromJSON(object: any): _38.ConfigurationDescriptor;
                    toJSON(message: _38.ConfigurationDescriptor): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _38.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _38.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgDescriptor;
                    fromJSON(object: any): _38.MsgDescriptor;
                    toJSON(message: _38.MsgDescriptor): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _38.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _38.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _38.GetAuthnDescriptorRequest;
                    toJSON(_: _38.GetAuthnDescriptorRequest): unknown;
                    fromPartial<I_11 extends unknown>(_: I_11): _38.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _38.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _38.GetAuthnDescriptorResponse;
                    toJSON(message: _38.GetAuthnDescriptorResponse): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _38.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _38.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.GetChainDescriptorRequest;
                    fromJSON(_: any): _38.GetChainDescriptorRequest;
                    toJSON(_: _38.GetChainDescriptorRequest): unknown;
                    fromPartial<I_13 extends unknown>(_: I_13): _38.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _38.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.GetChainDescriptorResponse;
                    fromJSON(object: any): _38.GetChainDescriptorResponse;
                    toJSON(message: _38.GetChainDescriptorResponse): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _38.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _38.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.GetCodecDescriptorRequest;
                    fromJSON(_: any): _38.GetCodecDescriptorRequest;
                    toJSON(_: _38.GetCodecDescriptorRequest): unknown;
                    fromPartial<I_15 extends unknown>(_: I_15): _38.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _38.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.GetCodecDescriptorResponse;
                    fromJSON(object: any): _38.GetCodecDescriptorResponse;
                    toJSON(message: _38.GetCodecDescriptorResponse): unknown;
                    fromPartial<I_16 extends unknown>(object: I_16): _38.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _38.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _38.GetConfigurationDescriptorRequest;
                    toJSON(_: _38.GetConfigurationDescriptorRequest): unknown;
                    fromPartial<I_17 extends unknown>(_: I_17): _38.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _38.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _38.GetConfigurationDescriptorResponse;
                    toJSON(message: _38.GetConfigurationDescriptorResponse): unknown;
                    fromPartial<I_18 extends unknown>(object: I_18): _38.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _38.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _38.GetQueryServicesDescriptorRequest;
                    toJSON(_: _38.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial<I_19 extends unknown>(_: I_19): _38.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _38.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _38.GetQueryServicesDescriptorResponse;
                    toJSON(message: _38.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial<I_20 extends unknown>(object: I_20): _38.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _38.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.GetTxDescriptorRequest;
                    fromJSON(_: any): _38.GetTxDescriptorRequest;
                    toJSON(_: _38.GetTxDescriptorRequest): unknown;
                    fromPartial<I_21 extends unknown>(_: I_21): _38.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _38.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.GetTxDescriptorResponse;
                    fromJSON(object: any): _38.GetTxDescriptorResponse;
                    toJSON(message: _38.GetTxDescriptorResponse): unknown;
                    fromPartial<I_22 extends unknown>(object: I_22): _38.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _38.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryServicesDescriptor;
                    fromJSON(object: any): _38.QueryServicesDescriptor;
                    toJSON(message: _38.QueryServicesDescriptor): unknown;
                    fromPartial<I_23 extends unknown>(object: I_23): _38.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _38.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryServiceDescriptor;
                    fromJSON(object: any): _38.QueryServiceDescriptor;
                    toJSON(message: _38.QueryServiceDescriptor): unknown;
                    fromPartial<I_24 extends unknown>(object: I_24): _38.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _38.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryMethodDescriptor;
                    fromJSON(object: any): _38.QueryMethodDescriptor;
                    toJSON(message: _38.QueryMethodDescriptor): unknown;
                    fromPartial<I_25 extends unknown>(object: I_25): _38.QueryMethodDescriptor;
                };
                ReflectionServiceClientImpl: typeof _38.ReflectionServiceClientImpl;
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _39.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Snapshot;
                    fromJSON(object: any): _39.Snapshot;
                    toJSON(message: _39.Snapshot): unknown;
                    fromPartial<I extends unknown>(object: I): _39.Snapshot;
                };
                Metadata: {
                    encode(message: _39.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Metadata;
                    fromJSON(object: any): _39.Metadata;
                    toJSON(message: _39.Metadata): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _39.Metadata;
                };
                SnapshotItem: {
                    encode(message: _39.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SnapshotItem;
                    fromJSON(object: any): _39.SnapshotItem;
                    toJSON(message: _39.SnapshotItem): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _39.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _39.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SnapshotStoreItem;
                    fromJSON(object: any): _39.SnapshotStoreItem;
                    toJSON(message: _39.SnapshotStoreItem): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _39.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _39.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SnapshotIAVLItem;
                    fromJSON(object: any): _39.SnapshotIAVLItem;
                    toJSON(message: _39.SnapshotIAVLItem): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _39.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _39.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SnapshotExtensionMeta;
                    fromJSON(object: any): _39.SnapshotExtensionMeta;
                    toJSON(message: _39.SnapshotExtensionMeta): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _39.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _39.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SnapshotExtensionPayload;
                    fromJSON(object: any): _39.SnapshotExtensionPayload;
                    toJSON(message: _39.SnapshotExtensionPayload): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _39.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _39.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SnapshotKVItem;
                    fromJSON(object: any): _39.SnapshotKVItem;
                    toJSON(message: _39.SnapshotKVItem): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _39.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _39.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SnapshotSchema;
                    fromJSON(object: any): _39.SnapshotSchema;
                    toJSON(message: _39.SnapshotSchema): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _39.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _41.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.StoreKVPair;
                    fromJSON(object: any): _41.StoreKVPair;
                    toJSON(message: _41.StoreKVPair): unknown;
                    fromPartial<I extends unknown>(object: I): _41.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _40.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.CommitInfo;
                    fromJSON(object: any): _40.CommitInfo;
                    toJSON(message: _40.CommitInfo): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _40.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _40.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.StoreInfo;
                    fromJSON(object: any): _40.StoreInfo;
                    toJSON(message: _40.StoreInfo): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _40.StoreInfo;
                };
                CommitID: {
                    encode(message: _40.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.CommitID;
                    fromJSON(object: any): _40.CommitID;
                    toJSON(message: _40.CommitID): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _40.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                GetValidatorSetByHeightRequest: {
                    encode(message: _42.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _42.GetValidatorSetByHeightRequest;
                    toJSON(message: _42.GetValidatorSetByHeightRequest): unknown;
                    fromPartial<I extends unknown>(object: I): _42.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _42.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _42.GetValidatorSetByHeightResponse;
                    toJSON(message: _42.GetValidatorSetByHeightResponse): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _42.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _42.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _42.GetLatestValidatorSetRequest;
                    toJSON(message: _42.GetLatestValidatorSetRequest): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _42.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _42.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _42.GetLatestValidatorSetResponse;
                    toJSON(message: _42.GetLatestValidatorSetResponse): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _42.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _42.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Validator;
                    fromJSON(object: any): _42.Validator;
                    toJSON(message: _42.Validator): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _42.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _42.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GetBlockByHeightRequest;
                    fromJSON(object: any): _42.GetBlockByHeightRequest;
                    toJSON(message: _42.GetBlockByHeightRequest): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _42.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _42.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GetBlockByHeightResponse;
                    fromJSON(object: any): _42.GetBlockByHeightResponse;
                    toJSON(message: _42.GetBlockByHeightResponse): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _42.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _42.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GetLatestBlockRequest;
                    fromJSON(_: any): _42.GetLatestBlockRequest;
                    toJSON(_: _42.GetLatestBlockRequest): unknown;
                    fromPartial<I_7 extends unknown>(_: I_7): _42.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _42.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GetLatestBlockResponse;
                    fromJSON(object: any): _42.GetLatestBlockResponse;
                    toJSON(message: _42.GetLatestBlockResponse): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _42.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _42.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GetSyncingRequest;
                    fromJSON(_: any): _42.GetSyncingRequest;
                    toJSON(_: _42.GetSyncingRequest): unknown;
                    fromPartial<I_9 extends unknown>(_: I_9): _42.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _42.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GetSyncingResponse;
                    fromJSON(object: any): _42.GetSyncingResponse;
                    toJSON(message: _42.GetSyncingResponse): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _42.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _42.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GetNodeInfoRequest;
                    fromJSON(_: any): _42.GetNodeInfoRequest;
                    toJSON(_: _42.GetNodeInfoRequest): unknown;
                    fromPartial<I_11 extends unknown>(_: I_11): _42.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _42.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GetNodeInfoResponse;
                    fromJSON(object: any): _42.GetNodeInfoResponse;
                    toJSON(message: _42.GetNodeInfoResponse): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _42.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _42.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.VersionInfo;
                    fromJSON(object: any): _42.VersionInfo;
                    toJSON(message: _42.VersionInfo): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _42.VersionInfo;
                };
                Module: {
                    encode(message: _42.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Module;
                    fromJSON(object: any): _42.Module;
                    toJSON(message: _42.Module): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _42.Module;
                };
                ServiceClientImpl: typeof _42.ServiceClientImpl;
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _43.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Coin;
                fromJSON(object: any): _43.Coin;
                toJSON(message: _43.Coin): unknown;
                fromPartial<I extends unknown>(object: I): _43.Coin;
            };
            DecCoin: {
                encode(message: _43.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.DecCoin;
                fromJSON(object: any): _43.DecCoin;
                toJSON(message: _43.DecCoin): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _43.DecCoin;
            };
            IntProto: {
                encode(message: _43.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.IntProto;
                fromJSON(object: any): _43.IntProto;
                toJSON(message: _43.IntProto): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _43.IntProto;
            };
            DecProto: {
                encode(message: _43.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.DecProto;
                fromJSON(object: any): _43.DecProto;
                toJSON(message: _43.DecProto): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _43.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _45.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GenesisOwners;
                fromJSON(object: any): _45.GenesisOwners;
                toJSON(message: _45.GenesisOwners): unknown;
                fromPartial<I extends unknown>(object: I): _45.GenesisOwners;
            };
            GenesisState: {
                encode(message: _45.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GenesisState;
                fromJSON(object: any): _45.GenesisState;
                toJSON(message: _45.GenesisState): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _45.GenesisState;
            };
            Capability: {
                encode(message: _44.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Capability;
                fromJSON(object: any): _44.Capability;
                toJSON(message: _44.Capability): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _44.Capability;
            };
            Owner: {
                encode(message: _44.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Owner;
                fromJSON(object: any): _44.Owner;
                toJSON(message: _44.Owner): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _44.Owner;
            };
            CapabilityOwners: {
                encode(message: _44.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.CapabilityOwners;
                fromJSON(object: any): _44.CapabilityOwners;
                toJSON(message: _44.CapabilityOwners): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _44.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgVerifyInvariant: {
                encode(message: _47.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgVerifyInvariant;
                fromJSON(object: any): _47.MsgVerifyInvariant;
                toJSON(message: _47.MsgVerifyInvariant): unknown;
                fromPartial<I extends unknown>(object: I): _47.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _47.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgVerifyInvariantResponse;
                fromJSON(_: any): _47.MsgVerifyInvariantResponse;
                toJSON(_: _47.MsgVerifyInvariantResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _47.MsgVerifyInvariantResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _47.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _47.MsgVerifyInvariant;
                };
            };
            encoded: {
                verifyInvariant(value: _47.MsgVerifyInvariant): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                verifyInvariant(value: any): {
                    typeUrl: string;
                    value: _47.MsgVerifyInvariant;
                };
            };
            toJSON: {
                verifyInvariant(value: _47.MsgVerifyInvariant): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                verifyInvariant(value: _47.MsgVerifyInvariant): {
                    typeUrl: string;
                    value: _47.MsgVerifyInvariant;
                };
            };
            messages: {
                verifyInvariant(value: _47.MsgVerifyInvariant): {
                    typeUrl: string;
                    value: _47.MsgVerifyInvariant;
                };
            };
            GenesisState: {
                encode(message: _46.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.GenesisState;
                fromJSON(object: any): _46.GenesisState;
                toJSON(message: _46.GenesisState): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _46.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _56.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.PubKey;
                fromJSON(object: any): _56.PubKey;
                toJSON(message: _56.PubKey): unknown;
                fromPartial<I extends unknown>(object: I): _56.PubKey;
            };
            PrivKey: {
                encode(message: _56.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.PrivKey;
                fromJSON(object: any): _56.PrivKey;
                toJSON(message: _56.PrivKey): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _56.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _57.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.BIP44Params;
                    fromJSON(object: any): _57.BIP44Params;
                    toJSON(message: _57.BIP44Params): unknown;
                    fromPartial<I extends unknown>(object: I): _57.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _58.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Record;
                    fromJSON(object: any): _58.Record;
                    toJSON(message: _58.Record): unknown;
                    fromPartial<I extends unknown>(object: I): _58.Record;
                };
                Record_Local: {
                    encode(message: _58.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Record_Local;
                    fromJSON(object: any): _58.Record_Local;
                    toJSON(message: _58.Record_Local): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _58.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _58.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Record_Ledger;
                    fromJSON(object: any): _58.Record_Ledger;
                    toJSON(message: _58.Record_Ledger): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _58.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _58.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Record_Multi;
                    fromJSON(_: any): _58.Record_Multi;
                    toJSON(_: _58.Record_Multi): unknown;
                    fromPartial<I_3 extends unknown>(_: I_3): _58.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _58.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Record_Offline;
                    fromJSON(_: any): _58.Record_Offline;
                    toJSON(_: _58.Record_Offline): unknown;
                    fromPartial<I_4 extends unknown>(_: I_4): _58.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _59.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.LegacyAminoPubKey;
                fromJSON(object: any): _59.LegacyAminoPubKey;
                toJSON(message: _59.LegacyAminoPubKey): unknown;
                fromPartial<I extends unknown>(object: I): _59.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _60.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.PubKey;
                fromJSON(object: any): _60.PubKey;
                toJSON(message: _60.PubKey): unknown;
                fromPartial<I extends unknown>(object: I): _60.PubKey;
            };
            PrivKey: {
                encode(message: _60.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.PrivKey;
                fromJSON(object: any): _60.PrivKey;
                toJSON(message: _60.PrivKey): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _60.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _61.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.PubKey;
                fromJSON(object: any): _61.PubKey;
                toJSON(message: _61.PubKey): unknown;
                fromPartial<I extends unknown>(object: I): _61.PubKey;
            };
            PrivKey: {
                encode(message: _61.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.PrivKey;
                fromJSON(object: any): _61.PrivKey;
                toJSON(message: _61.PrivKey): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _61.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgSetWithdrawAddress: {
                encode(message: _65.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgSetWithdrawAddress;
                fromJSON(object: any): _65.MsgSetWithdrawAddress;
                toJSON(message: _65.MsgSetWithdrawAddress): unknown;
                fromPartial<I extends unknown>(object: I): _65.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _65.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _65.MsgSetWithdrawAddressResponse;
                toJSON(_: _65.MsgSetWithdrawAddressResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _65.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _65.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _65.MsgWithdrawDelegatorReward;
                toJSON(message: _65.MsgWithdrawDelegatorReward): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _65.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _65.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _65.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _65.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _65.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _65.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _65.MsgWithdrawValidatorCommission;
                toJSON(message: _65.MsgWithdrawValidatorCommission): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _65.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _65.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _65.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _65.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _65.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _65.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgFundCommunityPool;
                fromJSON(object: any): _65.MsgFundCommunityPool;
                toJSON(message: _65.MsgFundCommunityPool): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _65.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _65.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _65.MsgFundCommunityPoolResponse;
                toJSON(_: _65.MsgFundCommunityPoolResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _65.MsgFundCommunityPoolResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _65.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _65.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _65.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _65.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _65.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _65.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _65.MsgFundCommunityPool) => {
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
                    }) => _65.MsgFundCommunityPool;
                };
            };
            encoded: {
                setWithdrawAddress(value: _65.MsgSetWithdrawAddress): {
                    type_url: string;
                    value: Uint8Array;
                };
                withdrawDelegatorReward(value: _65.MsgWithdrawDelegatorReward): {
                    type_url: string;
                    value: Uint8Array;
                };
                withdrawValidatorCommission(value: _65.MsgWithdrawValidatorCommission): {
                    type_url: string;
                    value: Uint8Array;
                };
                fundCommunityPool(value: _65.MsgFundCommunityPool): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                setWithdrawAddress(value: any): {
                    typeUrl: string;
                    value: _65.MsgSetWithdrawAddress;
                };
                withdrawDelegatorReward(value: any): {
                    typeUrl: string;
                    value: _65.MsgWithdrawDelegatorReward;
                };
                withdrawValidatorCommission(value: any): {
                    typeUrl: string;
                    value: _65.MsgWithdrawValidatorCommission;
                };
                fundCommunityPool(value: any): {
                    typeUrl: string;
                    value: _65.MsgFundCommunityPool;
                };
            };
            toJSON: {
                setWithdrawAddress(value: _65.MsgSetWithdrawAddress): {
                    typeUrl: string;
                    value: unknown;
                };
                withdrawDelegatorReward(value: _65.MsgWithdrawDelegatorReward): {
                    typeUrl: string;
                    value: unknown;
                };
                withdrawValidatorCommission(value: _65.MsgWithdrawValidatorCommission): {
                    typeUrl: string;
                    value: unknown;
                };
                fundCommunityPool(value: _65.MsgFundCommunityPool): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                setWithdrawAddress(value: _65.MsgSetWithdrawAddress): {
                    typeUrl: string;
                    value: _65.MsgSetWithdrawAddress;
                };
                withdrawDelegatorReward(value: _65.MsgWithdrawDelegatorReward): {
                    typeUrl: string;
                    value: _65.MsgWithdrawDelegatorReward;
                };
                withdrawValidatorCommission(value: _65.MsgWithdrawValidatorCommission): {
                    typeUrl: string;
                    value: _65.MsgWithdrawValidatorCommission;
                };
                fundCommunityPool(value: _65.MsgFundCommunityPool): {
                    typeUrl: string;
                    value: _65.MsgFundCommunityPool;
                };
            };
            messages: {
                setWithdrawAddress(value: _65.MsgSetWithdrawAddress): {
                    typeUrl: string;
                    value: _65.MsgSetWithdrawAddress;
                };
                withdrawDelegatorReward(value: _65.MsgWithdrawDelegatorReward): {
                    typeUrl: string;
                    value: _65.MsgWithdrawDelegatorReward;
                };
                withdrawValidatorCommission(value: _65.MsgWithdrawValidatorCommission): {
                    typeUrl: string;
                    value: _65.MsgWithdrawValidatorCommission;
                };
                fundCommunityPool(value: _65.MsgFundCommunityPool): {
                    typeUrl: string;
                    value: _65.MsgFundCommunityPool;
                };
            };
            QueryParamsRequest: {
                encode(_: _64.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryParamsRequest;
                fromJSON(_: any): _64.QueryParamsRequest;
                toJSON(_: _64.QueryParamsRequest): unknown;
                fromPartial<I_8 extends unknown>(_: I_8): _64.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _64.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryParamsResponse;
                fromJSON(object: any): _64.QueryParamsResponse;
                toJSON(message: _64.QueryParamsResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _64.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _64.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _64.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _64.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _64.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _64.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _64.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _64.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _64.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _64.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryValidatorCommissionRequest;
                fromJSON(object: any): _64.QueryValidatorCommissionRequest;
                toJSON(message: _64.QueryValidatorCommissionRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _64.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _64.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryValidatorCommissionResponse;
                fromJSON(object: any): _64.QueryValidatorCommissionResponse;
                toJSON(message: _64.QueryValidatorCommissionResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _64.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _64.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryValidatorSlashesRequest;
                fromJSON(object: any): _64.QueryValidatorSlashesRequest;
                toJSON(message: _64.QueryValidatorSlashesRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _64.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _64.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryValidatorSlashesResponse;
                fromJSON(object: any): _64.QueryValidatorSlashesResponse;
                toJSON(message: _64.QueryValidatorSlashesResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _64.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _64.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryDelegationRewardsRequest;
                fromJSON(object: any): _64.QueryDelegationRewardsRequest;
                toJSON(message: _64.QueryDelegationRewardsRequest): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _64.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _64.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryDelegationRewardsResponse;
                fromJSON(object: any): _64.QueryDelegationRewardsResponse;
                toJSON(message: _64.QueryDelegationRewardsResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _64.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _64.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _64.QueryDelegationTotalRewardsRequest;
                toJSON(message: _64.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _64.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _64.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _64.QueryDelegationTotalRewardsResponse;
                toJSON(message: _64.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _64.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _64.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _64.QueryDelegatorValidatorsRequest;
                toJSON(message: _64.QueryDelegatorValidatorsRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _64.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _64.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _64.QueryDelegatorValidatorsResponse;
                toJSON(message: _64.QueryDelegatorValidatorsResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _64.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _64.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _64.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _64.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _64.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _64.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _64.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _64.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _64.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _64.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryCommunityPoolRequest;
                fromJSON(_: any): _64.QueryCommunityPoolRequest;
                toJSON(_: _64.QueryCommunityPoolRequest): unknown;
                fromPartial<I_24 extends unknown>(_: I_24): _64.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _64.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryCommunityPoolResponse;
                fromJSON(object: any): _64.QueryCommunityPoolResponse;
                toJSON(message: _64.QueryCommunityPoolResponse): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _64.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _63.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.DelegatorWithdrawInfo;
                fromJSON(object: any): _63.DelegatorWithdrawInfo;
                toJSON(message: _63.DelegatorWithdrawInfo): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _63.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _63.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _63.ValidatorOutstandingRewardsRecord;
                toJSON(message: _63.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _63.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _63.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _63.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _63.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _63.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _63.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _63.ValidatorHistoricalRewardsRecord;
                toJSON(message: _63.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _63.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _63.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _63.ValidatorCurrentRewardsRecord;
                toJSON(message: _63.ValidatorCurrentRewardsRecord): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _63.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _63.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.DelegatorStartingInfoRecord;
                fromJSON(object: any): _63.DelegatorStartingInfoRecord;
                toJSON(message: _63.DelegatorStartingInfoRecord): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _63.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _63.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.ValidatorSlashEventRecord;
                fromJSON(object: any): _63.ValidatorSlashEventRecord;
                toJSON(message: _63.ValidatorSlashEventRecord): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _63.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _63.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GenesisState;
                fromJSON(object: any): _63.GenesisState;
                toJSON(message: _63.GenesisState): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _63.GenesisState;
            };
            Params: {
                encode(message: _62.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Params;
                fromJSON(object: any): _62.Params;
                toJSON(message: _62.Params): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _62.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _62.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ValidatorHistoricalRewards;
                fromJSON(object: any): _62.ValidatorHistoricalRewards;
                toJSON(message: _62.ValidatorHistoricalRewards): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _62.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _62.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ValidatorCurrentRewards;
                fromJSON(object: any): _62.ValidatorCurrentRewards;
                toJSON(message: _62.ValidatorCurrentRewards): unknown;
                fromPartial<I_36 extends unknown>(object: I_36): _62.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _62.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ValidatorAccumulatedCommission;
                fromJSON(object: any): _62.ValidatorAccumulatedCommission;
                toJSON(message: _62.ValidatorAccumulatedCommission): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _62.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _62.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ValidatorOutstandingRewards;
                fromJSON(object: any): _62.ValidatorOutstandingRewards;
                toJSON(message: _62.ValidatorOutstandingRewards): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _62.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _62.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ValidatorSlashEvent;
                fromJSON(object: any): _62.ValidatorSlashEvent;
                toJSON(message: _62.ValidatorSlashEvent): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _62.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _62.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ValidatorSlashEvents;
                fromJSON(object: any): _62.ValidatorSlashEvents;
                toJSON(message: _62.ValidatorSlashEvents): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _62.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _62.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.FeePool;
                fromJSON(object: any): _62.FeePool;
                toJSON(message: _62.FeePool): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _62.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _62.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.CommunityPoolSpendProposal;
                fromJSON(object: any): _62.CommunityPoolSpendProposal;
                toJSON(message: _62.CommunityPoolSpendProposal): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _62.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _62.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.DelegatorStartingInfo;
                fromJSON(object: any): _62.DelegatorStartingInfo;
                toJSON(message: _62.DelegatorStartingInfo): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _62.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _62.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.DelegationDelegatorReward;
                fromJSON(object: any): _62.DelegationDelegatorReward;
                toJSON(message: _62.DelegationDelegatorReward): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _62.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _62.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _62.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _62.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _62.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgSubmitEvidence: {
                encode(message: _77.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgSubmitEvidence;
                fromJSON(object: any): _77.MsgSubmitEvidence;
                toJSON(message: _77.MsgSubmitEvidence): unknown;
                fromPartial<I extends unknown>(object: I): _77.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _77.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _77.MsgSubmitEvidenceResponse;
                toJSON(message: _77.MsgSubmitEvidenceResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _77.MsgSubmitEvidenceResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _77.MsgSubmitEvidence) => {
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
                    }) => _77.MsgSubmitEvidence;
                };
            };
            encoded: {
                submitEvidence(value: _77.MsgSubmitEvidence): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                submitEvidence(value: any): {
                    typeUrl: string;
                    value: _77.MsgSubmitEvidence;
                };
            };
            toJSON: {
                submitEvidence(value: _77.MsgSubmitEvidence): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                submitEvidence(value: _77.MsgSubmitEvidence): {
                    typeUrl: string;
                    value: _77.MsgSubmitEvidence;
                };
            };
            messages: {
                submitEvidence(value: _77.MsgSubmitEvidence): {
                    typeUrl: string;
                    value: _77.MsgSubmitEvidence;
                };
            };
            QueryEvidenceRequest: {
                encode(message: _76.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryEvidenceRequest;
                fromJSON(object: any): _76.QueryEvidenceRequest;
                toJSON(message: _76.QueryEvidenceRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _76.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _76.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryEvidenceResponse;
                fromJSON(object: any): _76.QueryEvidenceResponse;
                toJSON(message: _76.QueryEvidenceResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _76.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _76.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryAllEvidenceRequest;
                fromJSON(object: any): _76.QueryAllEvidenceRequest;
                toJSON(message: _76.QueryAllEvidenceRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _76.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _76.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryAllEvidenceResponse;
                fromJSON(object: any): _76.QueryAllEvidenceResponse;
                toJSON(message: _76.QueryAllEvidenceResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _76.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _75.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.GenesisState;
                fromJSON(object: any): _75.GenesisState;
                toJSON(message: _75.GenesisState): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _75.GenesisState;
            };
            Equivocation: {
                encode(message: _74.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Equivocation;
                fromJSON(object: any): _74.Equivocation;
                toJSON(message: _74.Equivocation): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _74.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgGrantAllowance: {
                encode(message: _89.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgGrantAllowance;
                fromJSON(object: any): _89.MsgGrantAllowance;
                toJSON(message: _89.MsgGrantAllowance): unknown;
                fromPartial<I extends unknown>(object: I): _89.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _89.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgGrantAllowanceResponse;
                fromJSON(_: any): _89.MsgGrantAllowanceResponse;
                toJSON(_: _89.MsgGrantAllowanceResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _89.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _89.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgRevokeAllowance;
                fromJSON(object: any): _89.MsgRevokeAllowance;
                toJSON(message: _89.MsgRevokeAllowance): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _89.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _89.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _89.MsgRevokeAllowanceResponse;
                toJSON(_: _89.MsgRevokeAllowanceResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _89.MsgRevokeAllowanceResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _89.MsgGrantAllowance) => {
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
                    }) => _89.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _89.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _89.MsgRevokeAllowance;
                };
            };
            encoded: {
                grantAllowance(value: _89.MsgGrantAllowance): {
                    type_url: string;
                    value: Uint8Array;
                };
                revokeAllowance(value: _89.MsgRevokeAllowance): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                grantAllowance(value: any): {
                    typeUrl: string;
                    value: _89.MsgGrantAllowance;
                };
                revokeAllowance(value: any): {
                    typeUrl: string;
                    value: _89.MsgRevokeAllowance;
                };
            };
            toJSON: {
                grantAllowance(value: _89.MsgGrantAllowance): {
                    typeUrl: string;
                    value: unknown;
                };
                revokeAllowance(value: _89.MsgRevokeAllowance): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                grantAllowance(value: _89.MsgGrantAllowance): {
                    typeUrl: string;
                    value: _89.MsgGrantAllowance;
                };
                revokeAllowance(value: _89.MsgRevokeAllowance): {
                    typeUrl: string;
                    value: _89.MsgRevokeAllowance;
                };
            };
            messages: {
                grantAllowance(value: _89.MsgGrantAllowance): {
                    typeUrl: string;
                    value: _89.MsgGrantAllowance;
                };
                revokeAllowance(value: _89.MsgRevokeAllowance): {
                    typeUrl: string;
                    value: _89.MsgRevokeAllowance;
                };
            };
            QueryAllowanceRequest: {
                encode(message: _88.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryAllowanceRequest;
                fromJSON(object: any): _88.QueryAllowanceRequest;
                toJSON(message: _88.QueryAllowanceRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _88.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _88.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryAllowanceResponse;
                fromJSON(object: any): _88.QueryAllowanceResponse;
                toJSON(message: _88.QueryAllowanceResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _88.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _88.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryAllowancesRequest;
                fromJSON(object: any): _88.QueryAllowancesRequest;
                toJSON(message: _88.QueryAllowancesRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _88.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _88.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryAllowancesResponse;
                fromJSON(object: any): _88.QueryAllowancesResponse;
                toJSON(message: _88.QueryAllowancesResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _88.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _88.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _88.QueryAllowancesByGranterRequest;
                toJSON(message: _88.QueryAllowancesByGranterRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _88.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _88.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _88.QueryAllowancesByGranterResponse;
                toJSON(message: _88.QueryAllowancesByGranterResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _88.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _87.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.GenesisState;
                fromJSON(object: any): _87.GenesisState;
                toJSON(message: _87.GenesisState): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _87.GenesisState;
            };
            BasicAllowance: {
                encode(message: _86.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.BasicAllowance;
                fromJSON(object: any): _86.BasicAllowance;
                toJSON(message: _86.BasicAllowance): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _86.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _86.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.PeriodicAllowance;
                fromJSON(object: any): _86.PeriodicAllowance;
                toJSON(message: _86.PeriodicAllowance): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _86.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _86.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.AllowedMsgAllowance;
                fromJSON(object: any): _86.AllowedMsgAllowance;
                toJSON(message: _86.AllowedMsgAllowance): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _86.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _86.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Grant;
                fromJSON(object: any): _86.Grant;
                toJSON(message: _86.Grant): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _86.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _98.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.GenesisState;
                fromJSON(object: any): _98.GenesisState;
                toJSON(message: _98.GenesisState): unknown;
                fromPartial<I extends unknown>(object: I): _98.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgSubmitProposal: {
                encode(message: _102.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgSubmitProposal;
                fromJSON(object: any): _102.MsgSubmitProposal;
                toJSON(message: _102.MsgSubmitProposal): unknown;
                fromPartial<I extends unknown>(object: I): _102.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _102.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgSubmitProposalResponse;
                fromJSON(object: any): _102.MsgSubmitProposalResponse;
                toJSON(message: _102.MsgSubmitProposalResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _102.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _102.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgExecLegacyContent;
                fromJSON(object: any): _102.MsgExecLegacyContent;
                toJSON(message: _102.MsgExecLegacyContent): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _102.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _102.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgExecLegacyContentResponse;
                fromJSON(_: any): _102.MsgExecLegacyContentResponse;
                toJSON(_: _102.MsgExecLegacyContentResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _102.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _102.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgVote;
                fromJSON(object: any): _102.MsgVote;
                toJSON(message: _102.MsgVote): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _102.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _102.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgVoteResponse;
                fromJSON(_: any): _102.MsgVoteResponse;
                toJSON(_: _102.MsgVoteResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _102.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _102.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgVoteWeighted;
                fromJSON(object: any): _102.MsgVoteWeighted;
                toJSON(message: _102.MsgVoteWeighted): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _102.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _102.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgVoteWeightedResponse;
                fromJSON(_: any): _102.MsgVoteWeightedResponse;
                toJSON(_: _102.MsgVoteWeightedResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _102.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _102.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgDeposit;
                fromJSON(object: any): _102.MsgDeposit;
                toJSON(message: _102.MsgDeposit): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _102.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _102.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgDepositResponse;
                fromJSON(_: any): _102.MsgDepositResponse;
                toJSON(_: _102.MsgDepositResponse): unknown;
                fromPartial<I_9 extends unknown>(_: I_9): _102.MsgDepositResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _102.MsgSubmitProposal) => {
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
                    }) => _102.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _102.MsgExecLegacyContent) => {
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
                    }) => _102.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _102.MsgVote) => {
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
                    }) => _102.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _102.MsgVoteWeighted) => {
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
                    }) => _102.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _102.MsgDeposit) => {
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
                    }) => _102.MsgDeposit;
                };
            };
            encoded: {
                submitProposal(value: _102.MsgSubmitProposal): {
                    type_url: string;
                    value: Uint8Array;
                };
                execLegacyContent(value: _102.MsgExecLegacyContent): {
                    type_url: string;
                    value: Uint8Array;
                };
                vote(value: _102.MsgVote): {
                    type_url: string;
                    value: Uint8Array;
                };
                voteWeighted(value: _102.MsgVoteWeighted): {
                    type_url: string;
                    value: Uint8Array;
                };
                deposit(value: _102.MsgDeposit): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                submitProposal(value: any): {
                    typeUrl: string;
                    value: _102.MsgSubmitProposal;
                };
                execLegacyContent(value: any): {
                    typeUrl: string;
                    value: _102.MsgExecLegacyContent;
                };
                vote(value: any): {
                    typeUrl: string;
                    value: _102.MsgVote;
                };
                voteWeighted(value: any): {
                    typeUrl: string;
                    value: _102.MsgVoteWeighted;
                };
                deposit(value: any): {
                    typeUrl: string;
                    value: _102.MsgDeposit;
                };
            };
            toJSON: {
                submitProposal(value: _102.MsgSubmitProposal): {
                    typeUrl: string;
                    value: unknown;
                };
                execLegacyContent(value: _102.MsgExecLegacyContent): {
                    typeUrl: string;
                    value: unknown;
                };
                vote(value: _102.MsgVote): {
                    typeUrl: string;
                    value: unknown;
                };
                voteWeighted(value: _102.MsgVoteWeighted): {
                    typeUrl: string;
                    value: unknown;
                };
                deposit(value: _102.MsgDeposit): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                submitProposal(value: _102.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _102.MsgSubmitProposal;
                };
                execLegacyContent(value: _102.MsgExecLegacyContent): {
                    typeUrl: string;
                    value: _102.MsgExecLegacyContent;
                };
                vote(value: _102.MsgVote): {
                    typeUrl: string;
                    value: _102.MsgVote;
                };
                voteWeighted(value: _102.MsgVoteWeighted): {
                    typeUrl: string;
                    value: _102.MsgVoteWeighted;
                };
                deposit(value: _102.MsgDeposit): {
                    typeUrl: string;
                    value: _102.MsgDeposit;
                };
            };
            messages: {
                submitProposal(value: _102.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _102.MsgSubmitProposal;
                };
                execLegacyContent(value: _102.MsgExecLegacyContent): {
                    typeUrl: string;
                    value: _102.MsgExecLegacyContent;
                };
                vote(value: _102.MsgVote): {
                    typeUrl: string;
                    value: _102.MsgVote;
                };
                voteWeighted(value: _102.MsgVoteWeighted): {
                    typeUrl: string;
                    value: _102.MsgVoteWeighted;
                };
                deposit(value: _102.MsgDeposit): {
                    typeUrl: string;
                    value: _102.MsgDeposit;
                };
            };
            QueryProposalRequest: {
                encode(message: _101.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryProposalRequest;
                fromJSON(object: any): _101.QueryProposalRequest;
                toJSON(message: _101.QueryProposalRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _101.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _101.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryProposalResponse;
                fromJSON(object: any): _101.QueryProposalResponse;
                toJSON(message: _101.QueryProposalResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _101.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _101.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryProposalsRequest;
                fromJSON(object: any): _101.QueryProposalsRequest;
                toJSON(message: _101.QueryProposalsRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _101.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _101.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryProposalsResponse;
                fromJSON(object: any): _101.QueryProposalsResponse;
                toJSON(message: _101.QueryProposalsResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _101.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _101.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryVoteRequest;
                fromJSON(object: any): _101.QueryVoteRequest;
                toJSON(message: _101.QueryVoteRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _101.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _101.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryVoteResponse;
                fromJSON(object: any): _101.QueryVoteResponse;
                toJSON(message: _101.QueryVoteResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _101.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _101.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryVotesRequest;
                fromJSON(object: any): _101.QueryVotesRequest;
                toJSON(message: _101.QueryVotesRequest): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _101.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _101.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryVotesResponse;
                fromJSON(object: any): _101.QueryVotesResponse;
                toJSON(message: _101.QueryVotesResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _101.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _101.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryParamsRequest;
                fromJSON(object: any): _101.QueryParamsRequest;
                toJSON(message: _101.QueryParamsRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _101.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _101.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryParamsResponse;
                fromJSON(object: any): _101.QueryParamsResponse;
                toJSON(message: _101.QueryParamsResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _101.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _101.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryDepositRequest;
                fromJSON(object: any): _101.QueryDepositRequest;
                toJSON(message: _101.QueryDepositRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _101.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _101.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryDepositResponse;
                fromJSON(object: any): _101.QueryDepositResponse;
                toJSON(message: _101.QueryDepositResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _101.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _101.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryDepositsRequest;
                fromJSON(object: any): _101.QueryDepositsRequest;
                toJSON(message: _101.QueryDepositsRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _101.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _101.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryDepositsResponse;
                fromJSON(object: any): _101.QueryDepositsResponse;
                toJSON(message: _101.QueryDepositsResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _101.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _101.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryTallyResultRequest;
                fromJSON(object: any): _101.QueryTallyResultRequest;
                toJSON(message: _101.QueryTallyResultRequest): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _101.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _101.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryTallyResultResponse;
                fromJSON(object: any): _101.QueryTallyResultResponse;
                toJSON(message: _101.QueryTallyResultResponse): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _101.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _100.VoteOption;
            voteOptionToJSON(object: _100.VoteOption): string;
            proposalStatusFromJSON(object: any): _100.ProposalStatus;
            proposalStatusToJSON(object: _100.ProposalStatus): string;
            VoteOption: typeof _100.VoteOption;
            ProposalStatus: typeof _100.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _100.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.WeightedVoteOption;
                fromJSON(object: any): _100.WeightedVoteOption;
                toJSON(message: _100.WeightedVoteOption): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _100.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _100.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Deposit;
                fromJSON(object: any): _100.Deposit;
                toJSON(message: _100.Deposit): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _100.Deposit;
            };
            Proposal: {
                encode(message: _100.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Proposal;
                fromJSON(object: any): _100.Proposal;
                toJSON(message: _100.Proposal): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _100.Proposal;
            };
            TallyResult: {
                encode(message: _100.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.TallyResult;
                fromJSON(object: any): _100.TallyResult;
                toJSON(message: _100.TallyResult): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _100.TallyResult;
            };
            Vote: {
                encode(message: _100.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Vote;
                fromJSON(object: any): _100.Vote;
                toJSON(message: _100.Vote): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _100.Vote;
            };
            DepositParams: {
                encode(message: _100.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.DepositParams;
                fromJSON(object: any): _100.DepositParams;
                toJSON(message: _100.DepositParams): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _100.DepositParams;
            };
            VotingParams: {
                encode(message: _100.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.VotingParams;
                fromJSON(object: any): _100.VotingParams;
                toJSON(message: _100.VotingParams): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _100.VotingParams;
            };
            TallyParams: {
                encode(message: _100.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.TallyParams;
                fromJSON(object: any): _100.TallyParams;
                toJSON(message: _100.TallyParams): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _100.TallyParams;
            };
            GenesisState: {
                encode(message: _99.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.GenesisState;
                fromJSON(object: any): _99.GenesisState;
                toJSON(message: _99.GenesisState): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _99.GenesisState;
            };
        };
        const v1beta1: {
            MsgSubmitProposal: {
                encode(message: _114.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgSubmitProposal;
                fromJSON(object: any): _114.MsgSubmitProposal;
                toJSON(message: _114.MsgSubmitProposal): unknown;
                fromPartial<I extends unknown>(object: I): _114.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _114.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgSubmitProposalResponse;
                fromJSON(object: any): _114.MsgSubmitProposalResponse;
                toJSON(message: _114.MsgSubmitProposalResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _114.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _114.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgVote;
                fromJSON(object: any): _114.MsgVote;
                toJSON(message: _114.MsgVote): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _114.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _114.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgVoteResponse;
                fromJSON(_: any): _114.MsgVoteResponse;
                toJSON(_: _114.MsgVoteResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _114.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _114.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgVoteWeighted;
                fromJSON(object: any): _114.MsgVoteWeighted;
                toJSON(message: _114.MsgVoteWeighted): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _114.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _114.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgVoteWeightedResponse;
                fromJSON(_: any): _114.MsgVoteWeightedResponse;
                toJSON(_: _114.MsgVoteWeightedResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _114.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _114.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgDeposit;
                fromJSON(object: any): _114.MsgDeposit;
                toJSON(message: _114.MsgDeposit): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _114.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _114.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgDepositResponse;
                fromJSON(_: any): _114.MsgDepositResponse;
                toJSON(_: _114.MsgDepositResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _114.MsgDepositResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _114.MsgSubmitProposal) => {
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
                    }) => _114.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _114.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _114.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _114.MsgVoteWeighted) => {
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
                    }) => _114.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _114.MsgDeposit) => {
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
                    }) => _114.MsgDeposit;
                };
            };
            encoded: {
                submitProposal(value: _114.MsgSubmitProposal): {
                    type_url: string;
                    value: Uint8Array;
                };
                vote(value: _114.MsgVote): {
                    type_url: string;
                    value: Uint8Array;
                };
                voteWeighted(value: _114.MsgVoteWeighted): {
                    type_url: string;
                    value: Uint8Array;
                };
                deposit(value: _114.MsgDeposit): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                submitProposal(value: any): {
                    typeUrl: string;
                    value: _114.MsgSubmitProposal;
                };
                vote(value: any): {
                    typeUrl: string;
                    value: _114.MsgVote;
                };
                voteWeighted(value: any): {
                    typeUrl: string;
                    value: _114.MsgVoteWeighted;
                };
                deposit(value: any): {
                    typeUrl: string;
                    value: _114.MsgDeposit;
                };
            };
            toJSON: {
                submitProposal(value: _114.MsgSubmitProposal): {
                    typeUrl: string;
                    value: unknown;
                };
                vote(value: _114.MsgVote): {
                    typeUrl: string;
                    value: unknown;
                };
                voteWeighted(value: _114.MsgVoteWeighted): {
                    typeUrl: string;
                    value: unknown;
                };
                deposit(value: _114.MsgDeposit): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                submitProposal(value: _114.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _114.MsgSubmitProposal;
                };
                vote(value: _114.MsgVote): {
                    typeUrl: string;
                    value: _114.MsgVote;
                };
                voteWeighted(value: _114.MsgVoteWeighted): {
                    typeUrl: string;
                    value: _114.MsgVoteWeighted;
                };
                deposit(value: _114.MsgDeposit): {
                    typeUrl: string;
                    value: _114.MsgDeposit;
                };
            };
            messages: {
                submitProposal(value: _114.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _114.MsgSubmitProposal;
                };
                vote(value: _114.MsgVote): {
                    typeUrl: string;
                    value: _114.MsgVote;
                };
                voteWeighted(value: _114.MsgVoteWeighted): {
                    typeUrl: string;
                    value: _114.MsgVoteWeighted;
                };
                deposit(value: _114.MsgDeposit): {
                    typeUrl: string;
                    value: _114.MsgDeposit;
                };
            };
            QueryProposalRequest: {
                encode(message: _113.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryProposalRequest;
                fromJSON(object: any): _113.QueryProposalRequest;
                toJSON(message: _113.QueryProposalRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _113.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _113.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryProposalResponse;
                fromJSON(object: any): _113.QueryProposalResponse;
                toJSON(message: _113.QueryProposalResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _113.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _113.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryProposalsRequest;
                fromJSON(object: any): _113.QueryProposalsRequest;
                toJSON(message: _113.QueryProposalsRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _113.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _113.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryProposalsResponse;
                fromJSON(object: any): _113.QueryProposalsResponse;
                toJSON(message: _113.QueryProposalsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _113.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _113.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryVoteRequest;
                fromJSON(object: any): _113.QueryVoteRequest;
                toJSON(message: _113.QueryVoteRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _113.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _113.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryVoteResponse;
                fromJSON(object: any): _113.QueryVoteResponse;
                toJSON(message: _113.QueryVoteResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _113.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _113.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryVotesRequest;
                fromJSON(object: any): _113.QueryVotesRequest;
                toJSON(message: _113.QueryVotesRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _113.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _113.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryVotesResponse;
                fromJSON(object: any): _113.QueryVotesResponse;
                toJSON(message: _113.QueryVotesResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _113.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _113.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryParamsRequest;
                fromJSON(object: any): _113.QueryParamsRequest;
                toJSON(message: _113.QueryParamsRequest): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _113.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _113.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryParamsResponse;
                fromJSON(object: any): _113.QueryParamsResponse;
                toJSON(message: _113.QueryParamsResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _113.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _113.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryDepositRequest;
                fromJSON(object: any): _113.QueryDepositRequest;
                toJSON(message: _113.QueryDepositRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _113.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _113.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryDepositResponse;
                fromJSON(object: any): _113.QueryDepositResponse;
                toJSON(message: _113.QueryDepositResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _113.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _113.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryDepositsRequest;
                fromJSON(object: any): _113.QueryDepositsRequest;
                toJSON(message: _113.QueryDepositsRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _113.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _113.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryDepositsResponse;
                fromJSON(object: any): _113.QueryDepositsResponse;
                toJSON(message: _113.QueryDepositsResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _113.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _113.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryTallyResultRequest;
                fromJSON(object: any): _113.QueryTallyResultRequest;
                toJSON(message: _113.QueryTallyResultRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _113.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _113.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryTallyResultResponse;
                fromJSON(object: any): _113.QueryTallyResultResponse;
                toJSON(message: _113.QueryTallyResultResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _113.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _112.VoteOption;
            voteOptionToJSON(object: _112.VoteOption): string;
            proposalStatusFromJSON(object: any): _112.ProposalStatus;
            proposalStatusToJSON(object: _112.ProposalStatus): string;
            VoteOption: typeof _112.VoteOption;
            ProposalStatus: typeof _112.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _112.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.WeightedVoteOption;
                fromJSON(object: any): _112.WeightedVoteOption;
                toJSON(message: _112.WeightedVoteOption): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _112.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _112.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.TextProposal;
                fromJSON(object: any): _112.TextProposal;
                toJSON(message: _112.TextProposal): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _112.TextProposal;
            };
            Deposit: {
                encode(message: _112.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Deposit;
                fromJSON(object: any): _112.Deposit;
                toJSON(message: _112.Deposit): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _112.Deposit;
            };
            Proposal: {
                encode(message: _112.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Proposal;
                fromJSON(object: any): _112.Proposal;
                toJSON(message: _112.Proposal): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _112.Proposal;
            };
            TallyResult: {
                encode(message: _112.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.TallyResult;
                fromJSON(object: any): _112.TallyResult;
                toJSON(message: _112.TallyResult): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _112.TallyResult;
            };
            Vote: {
                encode(message: _112.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Vote;
                fromJSON(object: any): _112.Vote;
                toJSON(message: _112.Vote): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _112.Vote;
            };
            DepositParams: {
                encode(message: _112.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.DepositParams;
                fromJSON(object: any): _112.DepositParams;
                toJSON(message: _112.DepositParams): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _112.DepositParams;
            };
            VotingParams: {
                encode(message: _112.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.VotingParams;
                fromJSON(object: any): _112.VotingParams;
                toJSON(message: _112.VotingParams): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _112.VotingParams;
            };
            TallyParams: {
                encode(message: _112.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.TallyParams;
                fromJSON(object: any): _112.TallyParams;
                toJSON(message: _112.TallyParams): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _112.TallyParams;
            };
            GenesisState: {
                encode(message: _111.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.GenesisState;
                fromJSON(object: any): _111.GenesisState;
                toJSON(message: _111.GenesisState): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _111.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            voteOptionFromJSON(object: any): _135.VoteOption;
            voteOptionToJSON(object: _135.VoteOption): string;
            proposalStatusFromJSON(object: any): _135.ProposalStatus;
            proposalStatusToJSON(object: _135.ProposalStatus): string;
            proposalResultFromJSON(object: any): _135.ProposalResult;
            proposalResultToJSON(object: _135.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _135.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _135.ProposalExecutorResult): string;
            VoteOption: typeof _135.VoteOption;
            ProposalStatus: typeof _135.ProposalStatus;
            ProposalResult: typeof _135.ProposalResult;
            ProposalExecutorResult: typeof _135.ProposalExecutorResult;
            Member: {
                encode(message: _135.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.Member;
                fromJSON(object: any): _135.Member;
                toJSON(message: _135.Member): unknown;
                fromPartial<I extends unknown>(object: I): _135.Member;
            };
            Members: {
                encode(message: _135.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.Members;
                fromJSON(object: any): _135.Members;
                toJSON(message: _135.Members): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _135.Members;
            };
            ThresholdDecisionPolicy: {
                encode(message: _135.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.ThresholdDecisionPolicy;
                fromJSON(object: any): _135.ThresholdDecisionPolicy;
                toJSON(message: _135.ThresholdDecisionPolicy): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _135.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _135.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.PercentageDecisionPolicy;
                fromJSON(object: any): _135.PercentageDecisionPolicy;
                toJSON(message: _135.PercentageDecisionPolicy): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _135.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _135.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.DecisionPolicyWindows;
                fromJSON(object: any): _135.DecisionPolicyWindows;
                toJSON(message: _135.DecisionPolicyWindows): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _135.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _135.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.GroupInfo;
                fromJSON(object: any): _135.GroupInfo;
                toJSON(message: _135.GroupInfo): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _135.GroupInfo;
            };
            GroupMember: {
                encode(message: _135.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.GroupMember;
                fromJSON(object: any): _135.GroupMember;
                toJSON(message: _135.GroupMember): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _135.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _135.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.GroupPolicyInfo;
                fromJSON(object: any): _135.GroupPolicyInfo;
                toJSON(message: _135.GroupPolicyInfo): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _135.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _135.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.Proposal;
                fromJSON(object: any): _135.Proposal;
                toJSON(message: _135.Proposal): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _135.Proposal;
            };
            TallyResult: {
                encode(message: _135.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.TallyResult;
                fromJSON(object: any): _135.TallyResult;
                toJSON(message: _135.TallyResult): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _135.TallyResult;
            };
            Vote: {
                encode(message: _135.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.Vote;
                fromJSON(object: any): _135.Vote;
                toJSON(message: _135.Vote): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _135.Vote;
            };
            execFromJSON(object: any): _126.Exec;
            execToJSON(object: _126.Exec): string;
            Exec: typeof _126.Exec;
            MsgCreateGroup: {
                encode(message: _126.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgCreateGroup;
                fromJSON(object: any): _126.MsgCreateGroup;
                toJSON(message: _126.MsgCreateGroup): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _126.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _126.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgCreateGroupResponse;
                fromJSON(object: any): _126.MsgCreateGroupResponse;
                toJSON(message: _126.MsgCreateGroupResponse): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _126.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _126.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgUpdateGroupMembers;
                fromJSON(object: any): _126.MsgUpdateGroupMembers;
                toJSON(message: _126.MsgUpdateGroupMembers): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _126.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _126.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _126.MsgUpdateGroupMembersResponse;
                toJSON(_: _126.MsgUpdateGroupMembersResponse): unknown;
                fromPartial<I_14 extends unknown>(_: I_14): _126.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _126.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgUpdateGroupAdmin;
                fromJSON(object: any): _126.MsgUpdateGroupAdmin;
                toJSON(message: _126.MsgUpdateGroupAdmin): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _126.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _126.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _126.MsgUpdateGroupAdminResponse;
                toJSON(_: _126.MsgUpdateGroupAdminResponse): unknown;
                fromPartial<I_16 extends unknown>(_: I_16): _126.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _126.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgUpdateGroupMetadata;
                fromJSON(object: any): _126.MsgUpdateGroupMetadata;
                toJSON(message: _126.MsgUpdateGroupMetadata): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _126.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _126.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _126.MsgUpdateGroupMetadataResponse;
                toJSON(_: _126.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial<I_18 extends unknown>(_: I_18): _126.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _126.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgCreateGroupPolicy;
                fromJSON(object: any): _126.MsgCreateGroupPolicy;
                toJSON(message: _126.MsgCreateGroupPolicy): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _126.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _126.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _126.MsgCreateGroupPolicyResponse;
                toJSON(message: _126.MsgCreateGroupPolicyResponse): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _126.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _126.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _126.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _126.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _126.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _126.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _126.MsgCreateGroupWithPolicy;
                toJSON(message: _126.MsgCreateGroupWithPolicy): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _126.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _126.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _126.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _126.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _126.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _126.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _126.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _126.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial<I_24 extends unknown>(_: I_24): _126.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _126.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _126.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _126.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _126.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _126.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _126.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _126.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial<I_26 extends unknown>(_: I_26): _126.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _126.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _126.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _126.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _126.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _126.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _126.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _126.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial<I_28 extends unknown>(_: I_28): _126.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _126.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgSubmitProposal;
                fromJSON(object: any): _126.MsgSubmitProposal;
                toJSON(message: _126.MsgSubmitProposal): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _126.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _126.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgSubmitProposalResponse;
                fromJSON(object: any): _126.MsgSubmitProposalResponse;
                toJSON(message: _126.MsgSubmitProposalResponse): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _126.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _126.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgWithdrawProposal;
                fromJSON(object: any): _126.MsgWithdrawProposal;
                toJSON(message: _126.MsgWithdrawProposal): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _126.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _126.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgWithdrawProposalResponse;
                fromJSON(_: any): _126.MsgWithdrawProposalResponse;
                toJSON(_: _126.MsgWithdrawProposalResponse): unknown;
                fromPartial<I_32 extends unknown>(_: I_32): _126.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _126.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgVote;
                fromJSON(object: any): _126.MsgVote;
                toJSON(message: _126.MsgVote): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _126.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _126.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgVoteResponse;
                fromJSON(_: any): _126.MsgVoteResponse;
                toJSON(_: _126.MsgVoteResponse): unknown;
                fromPartial<I_34 extends unknown>(_: I_34): _126.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _126.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgExec;
                fromJSON(object: any): _126.MsgExec;
                toJSON(message: _126.MsgExec): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _126.MsgExec;
            };
            MsgExecResponse: {
                encode(_: _126.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgExecResponse;
                fromJSON(_: any): _126.MsgExecResponse;
                toJSON(_: _126.MsgExecResponse): unknown;
                fromPartial<I_36 extends unknown>(_: I_36): _126.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _126.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgLeaveGroup;
                fromJSON(object: any): _126.MsgLeaveGroup;
                toJSON(message: _126.MsgLeaveGroup): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _126.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _126.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgLeaveGroupResponse;
                fromJSON(_: any): _126.MsgLeaveGroupResponse;
                toJSON(_: _126.MsgLeaveGroupResponse): unknown;
                fromPartial<I_38 extends unknown>(_: I_38): _126.MsgLeaveGroupResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _126.MsgCreateGroup) => {
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
                    }) => _126.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _126.MsgUpdateGroupMembers) => {
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
                    }) => _126.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _126.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _126.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _126.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _126.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _126.MsgCreateGroupPolicy) => {
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
                    }) => _126.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _126.MsgCreateGroupWithPolicy) => {
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
                    }) => _126.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, address, newAdmin }: _126.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, address, new_admin }: {
                        admin: string;
                        address: string;
                        new_admin: string;
                    }) => _126.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, address, decisionPolicy }: _126.MsgUpdateGroupPolicyDecisionPolicy) => {
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
                    }) => _126.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, address, metadata }: _126.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, address, metadata }: {
                        admin: string;
                        address: string;
                        metadata: string;
                    }) => _126.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ address, proposers, metadata, messages, exec }: _126.MsgSubmitProposal) => {
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
                    }) => _126.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _126.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _126.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _126.MsgVote) => {
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
                    }) => _126.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, signer }: _126.MsgExec) => {
                        proposal_id: string;
                        signer: string;
                    };
                    fromAmino: ({ proposal_id, signer }: {
                        proposal_id: string;
                        signer: string;
                    }) => _126.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _126.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _126.MsgLeaveGroup;
                };
            };
            encoded: {
                createGroup(value: _126.MsgCreateGroup): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupMembers(value: _126.MsgUpdateGroupMembers): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupAdmin(value: _126.MsgUpdateGroupAdmin): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupMetadata(value: _126.MsgUpdateGroupMetadata): {
                    type_url: string;
                    value: Uint8Array;
                };
                createGroupPolicy(value: _126.MsgCreateGroupPolicy): {
                    type_url: string;
                    value: Uint8Array;
                };
                createGroupWithPolicy(value: _126.MsgCreateGroupWithPolicy): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupPolicyAdmin(value: _126.MsgUpdateGroupPolicyAdmin): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupPolicyDecisionPolicy(value: _126.MsgUpdateGroupPolicyDecisionPolicy): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateGroupPolicyMetadata(value: _126.MsgUpdateGroupPolicyMetadata): {
                    type_url: string;
                    value: Uint8Array;
                };
                submitProposal(value: _126.MsgSubmitProposal): {
                    type_url: string;
                    value: Uint8Array;
                };
                withdrawProposal(value: _126.MsgWithdrawProposal): {
                    type_url: string;
                    value: Uint8Array;
                };
                vote(value: _126.MsgVote): {
                    type_url: string;
                    value: Uint8Array;
                };
                exec(value: _126.MsgExec): {
                    type_url: string;
                    value: Uint8Array;
                };
                leaveGroup(value: _126.MsgLeaveGroup): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                createGroup(value: any): {
                    typeUrl: string;
                    value: _126.MsgCreateGroup;
                };
                updateGroupMembers(value: any): {
                    typeUrl: string;
                    value: _126.MsgUpdateGroupMembers;
                };
                updateGroupAdmin(value: any): {
                    typeUrl: string;
                    value: _126.MsgUpdateGroupAdmin;
                };
                updateGroupMetadata(value: any): {
                    typeUrl: string;
                    value: _126.MsgUpdateGroupMetadata;
                };
                createGroupPolicy(value: any): {
                    typeUrl: string;
                    value: _126.MsgCreateGroupPolicy;
                };
                createGroupWithPolicy(value: any): {
                    typeUrl: string;
                    value: _126.MsgCreateGroupWithPolicy;
                };
                updateGroupPolicyAdmin(value: any): {
                    typeUrl: string;
                    value: _126.MsgUpdateGroupPolicyAdmin;
                };
                updateGroupPolicyDecisionPolicy(value: any): {
                    typeUrl: string;
                    value: _126.MsgUpdateGroupPolicyDecisionPolicy;
                };
                updateGroupPolicyMetadata(value: any): {
                    typeUrl: string;
                    value: _126.MsgUpdateGroupPolicyMetadata;
                };
                submitProposal(value: any): {
                    typeUrl: string;
                    value: _126.MsgSubmitProposal;
                };
                withdrawProposal(value: any): {
                    typeUrl: string;
                    value: _126.MsgWithdrawProposal;
                };
                vote(value: any): {
                    typeUrl: string;
                    value: _126.MsgVote;
                };
                exec(value: any): {
                    typeUrl: string;
                    value: _126.MsgExec;
                };
                leaveGroup(value: any): {
                    typeUrl: string;
                    value: _126.MsgLeaveGroup;
                };
            };
            toJSON: {
                createGroup(value: _126.MsgCreateGroup): {
                    typeUrl: string;
                    value: unknown;
                };
                updateGroupMembers(value: _126.MsgUpdateGroupMembers): {
                    typeUrl: string;
                    value: unknown;
                };
                updateGroupAdmin(value: _126.MsgUpdateGroupAdmin): {
                    typeUrl: string;
                    value: unknown;
                };
                updateGroupMetadata(value: _126.MsgUpdateGroupMetadata): {
                    typeUrl: string;
                    value: unknown;
                };
                createGroupPolicy(value: _126.MsgCreateGroupPolicy): {
                    typeUrl: string;
                    value: unknown;
                };
                createGroupWithPolicy(value: _126.MsgCreateGroupWithPolicy): {
                    typeUrl: string;
                    value: unknown;
                };
                updateGroupPolicyAdmin(value: _126.MsgUpdateGroupPolicyAdmin): {
                    typeUrl: string;
                    value: unknown;
                };
                updateGroupPolicyDecisionPolicy(value: _126.MsgUpdateGroupPolicyDecisionPolicy): {
                    typeUrl: string;
                    value: unknown;
                };
                updateGroupPolicyMetadata(value: _126.MsgUpdateGroupPolicyMetadata): {
                    typeUrl: string;
                    value: unknown;
                };
                submitProposal(value: _126.MsgSubmitProposal): {
                    typeUrl: string;
                    value: unknown;
                };
                withdrawProposal(value: _126.MsgWithdrawProposal): {
                    typeUrl: string;
                    value: unknown;
                };
                vote(value: _126.MsgVote): {
                    typeUrl: string;
                    value: unknown;
                };
                exec(value: _126.MsgExec): {
                    typeUrl: string;
                    value: unknown;
                };
                leaveGroup(value: _126.MsgLeaveGroup): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                createGroup(value: _126.MsgCreateGroup): {
                    typeUrl: string;
                    value: _126.MsgCreateGroup;
                };
                updateGroupMembers(value: _126.MsgUpdateGroupMembers): {
                    typeUrl: string;
                    value: _126.MsgUpdateGroupMembers;
                };
                updateGroupAdmin(value: _126.MsgUpdateGroupAdmin): {
                    typeUrl: string;
                    value: _126.MsgUpdateGroupAdmin;
                };
                updateGroupMetadata(value: _126.MsgUpdateGroupMetadata): {
                    typeUrl: string;
                    value: _126.MsgUpdateGroupMetadata;
                };
                createGroupPolicy(value: _126.MsgCreateGroupPolicy): {
                    typeUrl: string;
                    value: _126.MsgCreateGroupPolicy;
                };
                createGroupWithPolicy(value: _126.MsgCreateGroupWithPolicy): {
                    typeUrl: string;
                    value: _126.MsgCreateGroupWithPolicy;
                };
                updateGroupPolicyAdmin(value: _126.MsgUpdateGroupPolicyAdmin): {
                    typeUrl: string;
                    value: _126.MsgUpdateGroupPolicyAdmin;
                };
                updateGroupPolicyDecisionPolicy(value: _126.MsgUpdateGroupPolicyDecisionPolicy): {
                    typeUrl: string;
                    value: _126.MsgUpdateGroupPolicyDecisionPolicy;
                };
                updateGroupPolicyMetadata(value: _126.MsgUpdateGroupPolicyMetadata): {
                    typeUrl: string;
                    value: _126.MsgUpdateGroupPolicyMetadata;
                };
                submitProposal(value: _126.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _126.MsgSubmitProposal;
                };
                withdrawProposal(value: _126.MsgWithdrawProposal): {
                    typeUrl: string;
                    value: _126.MsgWithdrawProposal;
                };
                vote(value: _126.MsgVote): {
                    typeUrl: string;
                    value: _126.MsgVote;
                };
                exec(value: _126.MsgExec): {
                    typeUrl: string;
                    value: _126.MsgExec;
                };
                leaveGroup(value: _126.MsgLeaveGroup): {
                    typeUrl: string;
                    value: _126.MsgLeaveGroup;
                };
            };
            messages: {
                createGroup(value: _126.MsgCreateGroup): {
                    typeUrl: string;
                    value: _126.MsgCreateGroup;
                };
                updateGroupMembers(value: _126.MsgUpdateGroupMembers): {
                    typeUrl: string;
                    value: _126.MsgUpdateGroupMembers;
                };
                updateGroupAdmin(value: _126.MsgUpdateGroupAdmin): {
                    typeUrl: string;
                    value: _126.MsgUpdateGroupAdmin;
                };
                updateGroupMetadata(value: _126.MsgUpdateGroupMetadata): {
                    typeUrl: string;
                    value: _126.MsgUpdateGroupMetadata;
                };
                createGroupPolicy(value: _126.MsgCreateGroupPolicy): {
                    typeUrl: string;
                    value: _126.MsgCreateGroupPolicy;
                };
                createGroupWithPolicy(value: _126.MsgCreateGroupWithPolicy): {
                    typeUrl: string;
                    value: _126.MsgCreateGroupWithPolicy;
                };
                updateGroupPolicyAdmin(value: _126.MsgUpdateGroupPolicyAdmin): {
                    typeUrl: string;
                    value: _126.MsgUpdateGroupPolicyAdmin;
                };
                updateGroupPolicyDecisionPolicy(value: _126.MsgUpdateGroupPolicyDecisionPolicy): {
                    typeUrl: string;
                    value: _126.MsgUpdateGroupPolicyDecisionPolicy;
                };
                updateGroupPolicyMetadata(value: _126.MsgUpdateGroupPolicyMetadata): {
                    typeUrl: string;
                    value: _126.MsgUpdateGroupPolicyMetadata;
                };
                submitProposal(value: _126.MsgSubmitProposal): {
                    typeUrl: string;
                    value: _126.MsgSubmitProposal;
                };
                withdrawProposal(value: _126.MsgWithdrawProposal): {
                    typeUrl: string;
                    value: _126.MsgWithdrawProposal;
                };
                vote(value: _126.MsgVote): {
                    typeUrl: string;
                    value: _126.MsgVote;
                };
                exec(value: _126.MsgExec): {
                    typeUrl: string;
                    value: _126.MsgExec;
                };
                leaveGroup(value: _126.MsgLeaveGroup): {
                    typeUrl: string;
                    value: _126.MsgLeaveGroup;
                };
            };
            QueryGroupInfoRequest: {
                encode(message: _125.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryGroupInfoRequest;
                fromJSON(object: any): _125.QueryGroupInfoRequest;
                toJSON(message: _125.QueryGroupInfoRequest): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _125.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _125.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryGroupInfoResponse;
                fromJSON(object: any): _125.QueryGroupInfoResponse;
                toJSON(message: _125.QueryGroupInfoResponse): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _125.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _125.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _125.QueryGroupPolicyInfoRequest;
                toJSON(message: _125.QueryGroupPolicyInfoRequest): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _125.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _125.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _125.QueryGroupPolicyInfoResponse;
                toJSON(message: _125.QueryGroupPolicyInfoResponse): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _125.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _125.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryGroupMembersRequest;
                fromJSON(object: any): _125.QueryGroupMembersRequest;
                toJSON(message: _125.QueryGroupMembersRequest): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _125.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _125.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryGroupMembersResponse;
                fromJSON(object: any): _125.QueryGroupMembersResponse;
                toJSON(message: _125.QueryGroupMembersResponse): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _125.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _125.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryGroupsByAdminRequest;
                fromJSON(object: any): _125.QueryGroupsByAdminRequest;
                toJSON(message: _125.QueryGroupsByAdminRequest): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _125.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _125.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryGroupsByAdminResponse;
                fromJSON(object: any): _125.QueryGroupsByAdminResponse;
                toJSON(message: _125.QueryGroupsByAdminResponse): unknown;
                fromPartial<I_46 extends unknown>(object: I_46): _125.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _125.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _125.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _125.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial<I_47 extends unknown>(object: I_47): _125.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _125.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _125.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _125.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial<I_48 extends unknown>(object: I_48): _125.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _125.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _125.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _125.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial<I_49 extends unknown>(object: I_49): _125.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _125.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _125.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _125.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial<I_50 extends unknown>(object: I_50): _125.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _125.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryProposalRequest;
                fromJSON(object: any): _125.QueryProposalRequest;
                toJSON(message: _125.QueryProposalRequest): unknown;
                fromPartial<I_51 extends unknown>(object: I_51): _125.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _125.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryProposalResponse;
                fromJSON(object: any): _125.QueryProposalResponse;
                toJSON(message: _125.QueryProposalResponse): unknown;
                fromPartial<I_52 extends unknown>(object: I_52): _125.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _125.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _125.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _125.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial<I_53 extends unknown>(object: I_53): _125.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _125.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _125.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _125.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial<I_54 extends unknown>(object: I_54): _125.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _125.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _125.QueryVoteByProposalVoterRequest;
                toJSON(message: _125.QueryVoteByProposalVoterRequest): unknown;
                fromPartial<I_55 extends unknown>(object: I_55): _125.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _125.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _125.QueryVoteByProposalVoterResponse;
                toJSON(message: _125.QueryVoteByProposalVoterResponse): unknown;
                fromPartial<I_56 extends unknown>(object: I_56): _125.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _125.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryVotesByProposalRequest;
                fromJSON(object: any): _125.QueryVotesByProposalRequest;
                toJSON(message: _125.QueryVotesByProposalRequest): unknown;
                fromPartial<I_57 extends unknown>(object: I_57): _125.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _125.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryVotesByProposalResponse;
                fromJSON(object: any): _125.QueryVotesByProposalResponse;
                toJSON(message: _125.QueryVotesByProposalResponse): unknown;
                fromPartial<I_58 extends unknown>(object: I_58): _125.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _125.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryVotesByVoterRequest;
                fromJSON(object: any): _125.QueryVotesByVoterRequest;
                toJSON(message: _125.QueryVotesByVoterRequest): unknown;
                fromPartial<I_59 extends unknown>(object: I_59): _125.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _125.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryVotesByVoterResponse;
                fromJSON(object: any): _125.QueryVotesByVoterResponse;
                toJSON(message: _125.QueryVotesByVoterResponse): unknown;
                fromPartial<I_60 extends unknown>(object: I_60): _125.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _125.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryGroupsByMemberRequest;
                fromJSON(object: any): _125.QueryGroupsByMemberRequest;
                toJSON(message: _125.QueryGroupsByMemberRequest): unknown;
                fromPartial<I_61 extends unknown>(object: I_61): _125.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _125.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryGroupsByMemberResponse;
                fromJSON(object: any): _125.QueryGroupsByMemberResponse;
                toJSON(message: _125.QueryGroupsByMemberResponse): unknown;
                fromPartial<I_62 extends unknown>(object: I_62): _125.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _125.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryTallyResultRequest;
                fromJSON(object: any): _125.QueryTallyResultRequest;
                toJSON(message: _125.QueryTallyResultRequest): unknown;
                fromPartial<I_63 extends unknown>(object: I_63): _125.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _125.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.QueryTallyResultResponse;
                fromJSON(object: any): _125.QueryTallyResultResponse;
                toJSON(message: _125.QueryTallyResultResponse): unknown;
                fromPartial<I_64 extends unknown>(object: I_64): _125.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _124.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.GenesisState;
                fromJSON(object: any): _124.GenesisState;
                toJSON(message: _124.GenesisState): unknown;
                fromPartial<I_65 extends unknown>(object: I_65): _124.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _123.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.EventCreateGroup;
                fromJSON(object: any): _123.EventCreateGroup;
                toJSON(message: _123.EventCreateGroup): unknown;
                fromPartial<I_66 extends unknown>(object: I_66): _123.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _123.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.EventUpdateGroup;
                fromJSON(object: any): _123.EventUpdateGroup;
                toJSON(message: _123.EventUpdateGroup): unknown;
                fromPartial<I_67 extends unknown>(object: I_67): _123.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _123.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.EventCreateGroupPolicy;
                fromJSON(object: any): _123.EventCreateGroupPolicy;
                toJSON(message: _123.EventCreateGroupPolicy): unknown;
                fromPartial<I_68 extends unknown>(object: I_68): _123.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _123.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.EventUpdateGroupPolicy;
                fromJSON(object: any): _123.EventUpdateGroupPolicy;
                toJSON(message: _123.EventUpdateGroupPolicy): unknown;
                fromPartial<I_69 extends unknown>(object: I_69): _123.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _123.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.EventSubmitProposal;
                fromJSON(object: any): _123.EventSubmitProposal;
                toJSON(message: _123.EventSubmitProposal): unknown;
                fromPartial<I_70 extends unknown>(object: I_70): _123.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _123.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.EventWithdrawProposal;
                fromJSON(object: any): _123.EventWithdrawProposal;
                toJSON(message: _123.EventWithdrawProposal): unknown;
                fromPartial<I_71 extends unknown>(object: I_71): _123.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _123.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.EventVote;
                fromJSON(object: any): _123.EventVote;
                toJSON(message: _123.EventVote): unknown;
                fromPartial<I_72 extends unknown>(object: I_72): _123.EventVote;
            };
            EventExec: {
                encode(message: _123.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.EventExec;
                fromJSON(object: any): _123.EventExec;
                toJSON(message: _123.EventExec): unknown;
                fromPartial<I_73 extends unknown>(object: I_73): _123.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _123.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.EventLeaveGroup;
                fromJSON(object: any): _123.EventLeaveGroup;
                toJSON(message: _123.EventLeaveGroup): unknown;
                fromPartial<I_74 extends unknown>(object: I_74): _123.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _138.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryParamsRequest;
                fromJSON(_: any): _138.QueryParamsRequest;
                toJSON(_: _138.QueryParamsRequest): unknown;
                fromPartial<I extends unknown>(_: I): _138.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _138.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryParamsResponse;
                fromJSON(object: any): _138.QueryParamsResponse;
                toJSON(message: _138.QueryParamsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _138.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _138.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryInflationRequest;
                fromJSON(_: any): _138.QueryInflationRequest;
                toJSON(_: _138.QueryInflationRequest): unknown;
                fromPartial<I_2 extends unknown>(_: I_2): _138.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _138.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryInflationResponse;
                fromJSON(object: any): _138.QueryInflationResponse;
                toJSON(message: _138.QueryInflationResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _138.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _138.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _138.QueryAnnualProvisionsRequest;
                toJSON(_: _138.QueryAnnualProvisionsRequest): unknown;
                fromPartial<I_4 extends unknown>(_: I_4): _138.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _138.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _138.QueryAnnualProvisionsResponse;
                toJSON(message: _138.QueryAnnualProvisionsResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _138.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _137.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Minter;
                fromJSON(object: any): _137.Minter;
                toJSON(message: _137.Minter): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _137.Minter;
            };
            Params: {
                encode(message: _137.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Params;
                fromJSON(object: any): _137.Params;
                toJSON(message: _137.Params): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _137.Params;
            };
            GenesisState: {
                encode(message: _136.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GenesisState;
                fromJSON(object: any): _136.GenesisState;
                toJSON(message: _136.GenesisState): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _136.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgSend: {
                encode(message: _144.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgSend;
                fromJSON(object: any): _144.MsgSend;
                toJSON(message: _144.MsgSend): unknown;
                fromPartial<I extends unknown>(object: I): _144.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _144.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgSendResponse;
                fromJSON(_: any): _144.MsgSendResponse;
                toJSON(_: _144.MsgSendResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _144.MsgSendResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _144.MsgSend) => {
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
                    }) => _144.MsgSend;
                };
            };
            encoded: {
                send(value: _144.MsgSend): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                send(value: any): {
                    typeUrl: string;
                    value: _144.MsgSend;
                };
            };
            toJSON: {
                send(value: _144.MsgSend): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                send(value: _144.MsgSend): {
                    typeUrl: string;
                    value: _144.MsgSend;
                };
            };
            messages: {
                send(value: _144.MsgSend): {
                    typeUrl: string;
                    value: _144.MsgSend;
                };
            };
            QueryBalanceRequest: {
                encode(message: _143.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryBalanceRequest;
                fromJSON(object: any): _143.QueryBalanceRequest;
                toJSON(message: _143.QueryBalanceRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _143.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _143.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryBalanceResponse;
                fromJSON(object: any): _143.QueryBalanceResponse;
                toJSON(message: _143.QueryBalanceResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _143.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _143.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryOwnerRequest;
                fromJSON(object: any): _143.QueryOwnerRequest;
                toJSON(message: _143.QueryOwnerRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _143.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _143.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryOwnerResponse;
                fromJSON(object: any): _143.QueryOwnerResponse;
                toJSON(message: _143.QueryOwnerResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _143.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _143.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QuerySupplyRequest;
                fromJSON(object: any): _143.QuerySupplyRequest;
                toJSON(message: _143.QuerySupplyRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _143.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _143.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QuerySupplyResponse;
                fromJSON(object: any): _143.QuerySupplyResponse;
                toJSON(message: _143.QuerySupplyResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _143.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _143.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryNFTsRequest;
                fromJSON(object: any): _143.QueryNFTsRequest;
                toJSON(message: _143.QueryNFTsRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _143.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _143.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryNFTsResponse;
                fromJSON(object: any): _143.QueryNFTsResponse;
                toJSON(message: _143.QueryNFTsResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _143.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _143.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryNFTRequest;
                fromJSON(object: any): _143.QueryNFTRequest;
                toJSON(message: _143.QueryNFTRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _143.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _143.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryNFTResponse;
                fromJSON(object: any): _143.QueryNFTResponse;
                toJSON(message: _143.QueryNFTResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _143.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _143.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryClassRequest;
                fromJSON(object: any): _143.QueryClassRequest;
                toJSON(message: _143.QueryClassRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _143.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _143.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryClassResponse;
                fromJSON(object: any): _143.QueryClassResponse;
                toJSON(message: _143.QueryClassResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _143.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _143.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryClassesRequest;
                fromJSON(object: any): _143.QueryClassesRequest;
                toJSON(message: _143.QueryClassesRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _143.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _143.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryClassesResponse;
                fromJSON(object: any): _143.QueryClassesResponse;
                toJSON(message: _143.QueryClassesResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _143.QueryClassesResponse;
            };
            Class: {
                encode(message: _142.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Class;
                fromJSON(object: any): _142.Class;
                toJSON(message: _142.Class): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _142.Class;
            };
            NFT: {
                encode(message: _142.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.NFT;
                fromJSON(object: any): _142.NFT;
                toJSON(message: _142.NFT): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _142.NFT;
            };
            GenesisState: {
                encode(message: _141.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.GenesisState;
                fromJSON(object: any): _141.GenesisState;
                toJSON(message: _141.GenesisState): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _141.GenesisState;
            };
            Entry: {
                encode(message: _141.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Entry;
                fromJSON(object: any): _141.Entry;
                toJSON(message: _141.Entry): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _141.Entry;
            };
            EventSend: {
                encode(message: _140.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.EventSend;
                fromJSON(object: any): _140.EventSend;
                toJSON(message: _140.EventSend): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _140.EventSend;
            };
            EventMint: {
                encode(message: _140.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.EventMint;
                fromJSON(object: any): _140.EventMint;
                toJSON(message: _140.EventMint): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _140.EventMint;
            };
            EventBurn: {
                encode(message: _140.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.EventBurn;
                fromJSON(object: any): _140.EventBurn;
                toJSON(message: _140.EventBurn): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _140.EventBurn;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _153.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.TableDescriptor;
                fromJSON(object: any): _153.TableDescriptor;
                toJSON(message: _153.TableDescriptor): unknown;
                fromPartial<I extends unknown>(object: I): _153.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _153.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.PrimaryKeyDescriptor;
                fromJSON(object: any): _153.PrimaryKeyDescriptor;
                toJSON(message: _153.PrimaryKeyDescriptor): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _153.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _153.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.SecondaryIndexDescriptor;
                fromJSON(object: any): _153.SecondaryIndexDescriptor;
                toJSON(message: _153.SecondaryIndexDescriptor): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _153.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _153.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.SingletonDescriptor;
                fromJSON(object: any): _153.SingletonDescriptor;
                toJSON(message: _153.SingletonDescriptor): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _153.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _154.StorageType;
            storageTypeToJSON(object: _154.StorageType): string;
            StorageType: typeof _154.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _154.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.ModuleSchemaDescriptor;
                fromJSON(object: any): _154.ModuleSchemaDescriptor;
                toJSON(message: _154.ModuleSchemaDescriptor): unknown;
                fromPartial<I extends unknown>(object: I): _154.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _154.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _154.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _154.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _154.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryParamsRequest: {
                encode(message: _156.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryParamsRequest;
                fromJSON(object: any): _156.QueryParamsRequest;
                toJSON(message: _156.QueryParamsRequest): unknown;
                fromPartial<I extends unknown>(object: I): _156.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _156.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryParamsResponse;
                fromJSON(object: any): _156.QueryParamsResponse;
                toJSON(message: _156.QueryParamsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _156.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _156.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QuerySubspacesRequest;
                fromJSON(_: any): _156.QuerySubspacesRequest;
                toJSON(_: _156.QuerySubspacesRequest): unknown;
                fromPartial<I_2 extends unknown>(_: I_2): _156.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _156.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QuerySubspacesResponse;
                fromJSON(object: any): _156.QuerySubspacesResponse;
                toJSON(message: _156.QuerySubspacesResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _156.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _156.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Subspace;
                fromJSON(object: any): _156.Subspace;
                toJSON(message: _156.Subspace): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _156.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _155.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ParameterChangeProposal;
                fromJSON(object: any): _155.ParameterChangeProposal;
                toJSON(message: _155.ParameterChangeProposal): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _155.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _155.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ParamChange;
                fromJSON(object: any): _155.ParamChange;
                toJSON(message: _155.ParamChange): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _155.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgUnjail: {
                encode(message: _160.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgUnjail;
                fromJSON(object: any): _160.MsgUnjail;
                toJSON(message: _160.MsgUnjail): unknown;
                fromPartial<I extends unknown>(object: I): _160.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _160.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgUnjailResponse;
                fromJSON(_: any): _160.MsgUnjailResponse;
                toJSON(_: _160.MsgUnjailResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _160.MsgUnjailResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _160.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _160.MsgUnjail;
                };
            };
            encoded: {
                unjail(value: _160.MsgUnjail): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                unjail(value: any): {
                    typeUrl: string;
                    value: _160.MsgUnjail;
                };
            };
            toJSON: {
                unjail(value: _160.MsgUnjail): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                unjail(value: _160.MsgUnjail): {
                    typeUrl: string;
                    value: _160.MsgUnjail;
                };
            };
            messages: {
                unjail(value: _160.MsgUnjail): {
                    typeUrl: string;
                    value: _160.MsgUnjail;
                };
            };
            ValidatorSigningInfo: {
                encode(message: _159.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.ValidatorSigningInfo;
                fromJSON(object: any): _159.ValidatorSigningInfo;
                toJSON(message: _159.ValidatorSigningInfo): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _159.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _159.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Params;
                fromJSON(object: any): _159.Params;
                toJSON(message: _159.Params): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _159.Params;
            };
            QueryParamsRequest: {
                encode(_: _158.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryParamsRequest;
                fromJSON(_: any): _158.QueryParamsRequest;
                toJSON(_: _158.QueryParamsRequest): unknown;
                fromPartial<I_4 extends unknown>(_: I_4): _158.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _158.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryParamsResponse;
                fromJSON(object: any): _158.QueryParamsResponse;
                toJSON(message: _158.QueryParamsResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _158.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _158.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QuerySigningInfoRequest;
                fromJSON(object: any): _158.QuerySigningInfoRequest;
                toJSON(message: _158.QuerySigningInfoRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _158.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _158.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QuerySigningInfoResponse;
                fromJSON(object: any): _158.QuerySigningInfoResponse;
                toJSON(message: _158.QuerySigningInfoResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _158.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _158.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QuerySigningInfosRequest;
                fromJSON(object: any): _158.QuerySigningInfosRequest;
                toJSON(message: _158.QuerySigningInfosRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _158.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _158.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QuerySigningInfosResponse;
                fromJSON(object: any): _158.QuerySigningInfosResponse;
                toJSON(message: _158.QuerySigningInfosResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _158.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _157.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.GenesisState;
                fromJSON(object: any): _157.GenesisState;
                toJSON(message: _157.GenesisState): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _157.GenesisState;
            };
            SigningInfo: {
                encode(message: _157.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.SigningInfo;
                fromJSON(object: any): _157.SigningInfo;
                toJSON(message: _157.SigningInfo): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _157.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _157.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ValidatorMissedBlocks;
                fromJSON(object: any): _157.ValidatorMissedBlocks;
                toJSON(message: _157.ValidatorMissedBlocks): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _157.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _157.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MissedBlock;
                fromJSON(object: any): _157.MissedBlock;
                toJSON(message: _157.MissedBlock): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _157.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgCreateValidator: {
                encode(message: _173.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgCreateValidator;
                fromJSON(object: any): _173.MsgCreateValidator;
                toJSON(message: _173.MsgCreateValidator): unknown;
                fromPartial<I extends unknown>(object: I): _173.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _173.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgCreateValidatorResponse;
                fromJSON(_: any): _173.MsgCreateValidatorResponse;
                toJSON(_: _173.MsgCreateValidatorResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _173.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _173.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgEditValidator;
                fromJSON(object: any): _173.MsgEditValidator;
                toJSON(message: _173.MsgEditValidator): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _173.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _173.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgEditValidatorResponse;
                fromJSON(_: any): _173.MsgEditValidatorResponse;
                toJSON(_: _173.MsgEditValidatorResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _173.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _173.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgDelegate;
                fromJSON(object: any): _173.MsgDelegate;
                toJSON(message: _173.MsgDelegate): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _173.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _173.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgDelegateResponse;
                fromJSON(_: any): _173.MsgDelegateResponse;
                toJSON(_: _173.MsgDelegateResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _173.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _173.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgBeginRedelegate;
                fromJSON(object: any): _173.MsgBeginRedelegate;
                toJSON(message: _173.MsgBeginRedelegate): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _173.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _173.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgBeginRedelegateResponse;
                fromJSON(object: any): _173.MsgBeginRedelegateResponse;
                toJSON(message: _173.MsgBeginRedelegateResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _173.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _173.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgUndelegate;
                fromJSON(object: any): _173.MsgUndelegate;
                toJSON(message: _173.MsgUndelegate): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _173.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _173.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgUndelegateResponse;
                fromJSON(object: any): _173.MsgUndelegateResponse;
                toJSON(message: _173.MsgUndelegateResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _173.MsgUndelegateResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _173.MsgCreateValidator) => {
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
                    }) => _173.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _173.MsgEditValidator) => {
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
                    }) => _173.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _173.MsgDelegate) => {
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
                    }) => _173.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _173.MsgBeginRedelegate) => {
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
                    }) => _173.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _173.MsgUndelegate) => {
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
                    }) => _173.MsgUndelegate;
                };
            };
            encoded: {
                createValidator(value: _173.MsgCreateValidator): {
                    type_url: string;
                    value: Uint8Array;
                };
                editValidator(value: _173.MsgEditValidator): {
                    type_url: string;
                    value: Uint8Array;
                };
                delegate(value: _173.MsgDelegate): {
                    type_url: string;
                    value: Uint8Array;
                };
                beginRedelegate(value: _173.MsgBeginRedelegate): {
                    type_url: string;
                    value: Uint8Array;
                };
                undelegate(value: _173.MsgUndelegate): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                createValidator(value: any): {
                    typeUrl: string;
                    value: _173.MsgCreateValidator;
                };
                editValidator(value: any): {
                    typeUrl: string;
                    value: _173.MsgEditValidator;
                };
                delegate(value: any): {
                    typeUrl: string;
                    value: _173.MsgDelegate;
                };
                beginRedelegate(value: any): {
                    typeUrl: string;
                    value: _173.MsgBeginRedelegate;
                };
                undelegate(value: any): {
                    typeUrl: string;
                    value: _173.MsgUndelegate;
                };
            };
            toJSON: {
                createValidator(value: _173.MsgCreateValidator): {
                    typeUrl: string;
                    value: unknown;
                };
                editValidator(value: _173.MsgEditValidator): {
                    typeUrl: string;
                    value: unknown;
                };
                delegate(value: _173.MsgDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                beginRedelegate(value: _173.MsgBeginRedelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                undelegate(value: _173.MsgUndelegate): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                createValidator(value: _173.MsgCreateValidator): {
                    typeUrl: string;
                    value: _173.MsgCreateValidator;
                };
                editValidator(value: _173.MsgEditValidator): {
                    typeUrl: string;
                    value: _173.MsgEditValidator;
                };
                delegate(value: _173.MsgDelegate): {
                    typeUrl: string;
                    value: _173.MsgDelegate;
                };
                beginRedelegate(value: _173.MsgBeginRedelegate): {
                    typeUrl: string;
                    value: _173.MsgBeginRedelegate;
                };
                undelegate(value: _173.MsgUndelegate): {
                    typeUrl: string;
                    value: _173.MsgUndelegate;
                };
            };
            messages: {
                createValidator(value: _173.MsgCreateValidator): {
                    typeUrl: string;
                    value: _173.MsgCreateValidator;
                };
                editValidator(value: _173.MsgEditValidator): {
                    typeUrl: string;
                    value: _173.MsgEditValidator;
                };
                delegate(value: _173.MsgDelegate): {
                    typeUrl: string;
                    value: _173.MsgDelegate;
                };
                beginRedelegate(value: _173.MsgBeginRedelegate): {
                    typeUrl: string;
                    value: _173.MsgBeginRedelegate;
                };
                undelegate(value: _173.MsgUndelegate): {
                    typeUrl: string;
                    value: _173.MsgUndelegate;
                };
            };
            bondStatusFromJSON(object: any): _172.BondStatus;
            bondStatusToJSON(object: _172.BondStatus): string;
            BondStatus: typeof _172.BondStatus;
            HistoricalInfo: {
                encode(message: _172.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.HistoricalInfo;
                fromJSON(object: any): _172.HistoricalInfo;
                toJSON(message: _172.HistoricalInfo): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _172.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _172.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.CommissionRates;
                fromJSON(object: any): _172.CommissionRates;
                toJSON(message: _172.CommissionRates): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _172.CommissionRates;
            };
            Commission: {
                encode(message: _172.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Commission;
                fromJSON(object: any): _172.Commission;
                toJSON(message: _172.Commission): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _172.Commission;
            };
            Description: {
                encode(message: _172.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Description;
                fromJSON(object: any): _172.Description;
                toJSON(message: _172.Description): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _172.Description;
            };
            Validator: {
                encode(message: _172.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Validator;
                fromJSON(object: any): _172.Validator;
                toJSON(message: _172.Validator): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _172.Validator;
            };
            ValAddresses: {
                encode(message: _172.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ValAddresses;
                fromJSON(object: any): _172.ValAddresses;
                toJSON(message: _172.ValAddresses): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _172.ValAddresses;
            };
            DVPair: {
                encode(message: _172.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.DVPair;
                fromJSON(object: any): _172.DVPair;
                toJSON(message: _172.DVPair): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _172.DVPair;
            };
            DVPairs: {
                encode(message: _172.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.DVPairs;
                fromJSON(object: any): _172.DVPairs;
                toJSON(message: _172.DVPairs): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _172.DVPairs;
            };
            DVVTriplet: {
                encode(message: _172.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.DVVTriplet;
                fromJSON(object: any): _172.DVVTriplet;
                toJSON(message: _172.DVVTriplet): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _172.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _172.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.DVVTriplets;
                fromJSON(object: any): _172.DVVTriplets;
                toJSON(message: _172.DVVTriplets): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _172.DVVTriplets;
            };
            Delegation: {
                encode(message: _172.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Delegation;
                fromJSON(object: any): _172.Delegation;
                toJSON(message: _172.Delegation): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _172.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _172.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.UnbondingDelegation;
                fromJSON(object: any): _172.UnbondingDelegation;
                toJSON(message: _172.UnbondingDelegation): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _172.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _172.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.UnbondingDelegationEntry;
                fromJSON(object: any): _172.UnbondingDelegationEntry;
                toJSON(message: _172.UnbondingDelegationEntry): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _172.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _172.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.RedelegationEntry;
                fromJSON(object: any): _172.RedelegationEntry;
                toJSON(message: _172.RedelegationEntry): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _172.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _172.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Redelegation;
                fromJSON(object: any): _172.Redelegation;
                toJSON(message: _172.Redelegation): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _172.Redelegation;
            };
            Params: {
                encode(message: _172.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Params;
                fromJSON(object: any): _172.Params;
                toJSON(message: _172.Params): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _172.Params;
            };
            DelegationResponse: {
                encode(message: _172.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.DelegationResponse;
                fromJSON(object: any): _172.DelegationResponse;
                toJSON(message: _172.DelegationResponse): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _172.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _172.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.RedelegationEntryResponse;
                fromJSON(object: any): _172.RedelegationEntryResponse;
                toJSON(message: _172.RedelegationEntryResponse): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _172.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _172.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.RedelegationResponse;
                fromJSON(object: any): _172.RedelegationResponse;
                toJSON(message: _172.RedelegationResponse): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _172.RedelegationResponse;
            };
            Pool: {
                encode(message: _172.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Pool;
                fromJSON(object: any): _172.Pool;
                toJSON(message: _172.Pool): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _172.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _171.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryValidatorsRequest;
                fromJSON(object: any): _171.QueryValidatorsRequest;
                toJSON(message: _171.QueryValidatorsRequest): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _171.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _171.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryValidatorsResponse;
                fromJSON(object: any): _171.QueryValidatorsResponse;
                toJSON(message: _171.QueryValidatorsResponse): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _171.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _171.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryValidatorRequest;
                fromJSON(object: any): _171.QueryValidatorRequest;
                toJSON(message: _171.QueryValidatorRequest): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _171.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _171.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryValidatorResponse;
                fromJSON(object: any): _171.QueryValidatorResponse;
                toJSON(message: _171.QueryValidatorResponse): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _171.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _171.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _171.QueryValidatorDelegationsRequest;
                toJSON(message: _171.QueryValidatorDelegationsRequest): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _171.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _171.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _171.QueryValidatorDelegationsResponse;
                toJSON(message: _171.QueryValidatorDelegationsResponse): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _171.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _171.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _171.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _171.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial<I_36 extends unknown>(object: I_36): _171.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _171.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _171.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _171.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _171.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _171.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryDelegationRequest;
                fromJSON(object: any): _171.QueryDelegationRequest;
                toJSON(message: _171.QueryDelegationRequest): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _171.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _171.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryDelegationResponse;
                fromJSON(object: any): _171.QueryDelegationResponse;
                toJSON(message: _171.QueryDelegationResponse): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _171.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _171.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _171.QueryUnbondingDelegationRequest;
                toJSON(message: _171.QueryUnbondingDelegationRequest): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _171.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _171.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _171.QueryUnbondingDelegationResponse;
                toJSON(message: _171.QueryUnbondingDelegationResponse): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _171.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _171.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _171.QueryDelegatorDelegationsRequest;
                toJSON(message: _171.QueryDelegatorDelegationsRequest): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _171.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _171.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _171.QueryDelegatorDelegationsResponse;
                toJSON(message: _171.QueryDelegatorDelegationsResponse): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _171.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _171.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _171.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _171.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _171.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _171.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _171.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _171.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _171.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _171.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryRedelegationsRequest;
                fromJSON(object: any): _171.QueryRedelegationsRequest;
                toJSON(message: _171.QueryRedelegationsRequest): unknown;
                fromPartial<I_46 extends unknown>(object: I_46): _171.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _171.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryRedelegationsResponse;
                fromJSON(object: any): _171.QueryRedelegationsResponse;
                toJSON(message: _171.QueryRedelegationsResponse): unknown;
                fromPartial<I_47 extends unknown>(object: I_47): _171.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _171.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _171.QueryDelegatorValidatorsRequest;
                toJSON(message: _171.QueryDelegatorValidatorsRequest): unknown;
                fromPartial<I_48 extends unknown>(object: I_48): _171.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _171.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _171.QueryDelegatorValidatorsResponse;
                toJSON(message: _171.QueryDelegatorValidatorsResponse): unknown;
                fromPartial<I_49 extends unknown>(object: I_49): _171.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _171.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _171.QueryDelegatorValidatorRequest;
                toJSON(message: _171.QueryDelegatorValidatorRequest): unknown;
                fromPartial<I_50 extends unknown>(object: I_50): _171.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _171.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _171.QueryDelegatorValidatorResponse;
                toJSON(message: _171.QueryDelegatorValidatorResponse): unknown;
                fromPartial<I_51 extends unknown>(object: I_51): _171.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _171.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryHistoricalInfoRequest;
                fromJSON(object: any): _171.QueryHistoricalInfoRequest;
                toJSON(message: _171.QueryHistoricalInfoRequest): unknown;
                fromPartial<I_52 extends unknown>(object: I_52): _171.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _171.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryHistoricalInfoResponse;
                fromJSON(object: any): _171.QueryHistoricalInfoResponse;
                toJSON(message: _171.QueryHistoricalInfoResponse): unknown;
                fromPartial<I_53 extends unknown>(object: I_53): _171.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _171.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryPoolRequest;
                fromJSON(_: any): _171.QueryPoolRequest;
                toJSON(_: _171.QueryPoolRequest): unknown;
                fromPartial<I_54 extends unknown>(_: I_54): _171.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _171.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryPoolResponse;
                fromJSON(object: any): _171.QueryPoolResponse;
                toJSON(message: _171.QueryPoolResponse): unknown;
                fromPartial<I_55 extends unknown>(object: I_55): _171.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _171.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryParamsRequest;
                fromJSON(_: any): _171.QueryParamsRequest;
                toJSON(_: _171.QueryParamsRequest): unknown;
                fromPartial<I_56 extends unknown>(_: I_56): _171.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _171.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryParamsResponse;
                fromJSON(object: any): _171.QueryParamsResponse;
                toJSON(message: _171.QueryParamsResponse): unknown;
                fromPartial<I_57 extends unknown>(object: I_57): _171.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _170.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.GenesisState;
                fromJSON(object: any): _170.GenesisState;
                toJSON(message: _170.GenesisState): unknown;
                fromPartial<I_58 extends unknown>(object: I_58): _170.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _170.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.LastValidatorPower;
                fromJSON(object: any): _170.LastValidatorPower;
                toJSON(message: _170.LastValidatorPower): unknown;
                fromPartial<I_59 extends unknown>(object: I_59): _170.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _169.AuthorizationType;
            authorizationTypeToJSON(object: _169.AuthorizationType): string;
            AuthorizationType: typeof _169.AuthorizationType;
            StakeAuthorization: {
                encode(message: _169.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.StakeAuthorization;
                fromJSON(object: any): _169.StakeAuthorization;
                toJSON(message: _169.StakeAuthorization): unknown;
                fromPartial<I_60 extends unknown>(object: I_60): _169.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _169.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.StakeAuthorization_Validators;
                fromJSON(object: any): _169.StakeAuthorization_Validators;
                toJSON(message: _169.StakeAuthorization_Validators): unknown;
                fromPartial<I_61 extends unknown>(object: I_61): _169.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _182.SignMode;
                signModeToJSON(object: _182.SignMode): string;
                SignMode: typeof _182.SignMode;
                SignatureDescriptors: {
                    encode(message: _182.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.SignatureDescriptors;
                    fromJSON(object: any): _182.SignatureDescriptors;
                    toJSON(message: _182.SignatureDescriptors): unknown;
                    fromPartial<I extends unknown>(object: I): _182.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _182.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.SignatureDescriptor;
                    fromJSON(object: any): _182.SignatureDescriptor;
                    toJSON(message: _182.SignatureDescriptor): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _182.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _182.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.SignatureDescriptor_Data;
                    fromJSON(object: any): _182.SignatureDescriptor_Data;
                    toJSON(message: _182.SignatureDescriptor_Data): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _182.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _182.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _182.SignatureDescriptor_Data_Single;
                    toJSON(message: _182.SignatureDescriptor_Data_Single): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _182.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _182.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _182.SignatureDescriptor_Data_Multi;
                    toJSON(message: _182.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _182.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            Tx: {
                encode(message: _184.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.Tx;
                fromJSON(object: any): _184.Tx;
                toJSON(message: _184.Tx): unknown;
                fromPartial<I extends unknown>(object: I): _184.Tx;
            };
            TxRaw: {
                encode(message: _184.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.TxRaw;
                fromJSON(object: any): _184.TxRaw;
                toJSON(message: _184.TxRaw): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _184.TxRaw;
            };
            SignDoc: {
                encode(message: _184.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.SignDoc;
                fromJSON(object: any): _184.SignDoc;
                toJSON(message: _184.SignDoc): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _184.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _184.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.SignDocDirectAux;
                fromJSON(object: any): _184.SignDocDirectAux;
                toJSON(message: _184.SignDocDirectAux): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _184.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _184.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.TxBody;
                fromJSON(object: any): _184.TxBody;
                toJSON(message: _184.TxBody): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _184.TxBody;
            };
            AuthInfo: {
                encode(message: _184.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.AuthInfo;
                fromJSON(object: any): _184.AuthInfo;
                toJSON(message: _184.AuthInfo): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _184.AuthInfo;
            };
            SignerInfo: {
                encode(message: _184.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.SignerInfo;
                fromJSON(object: any): _184.SignerInfo;
                toJSON(message: _184.SignerInfo): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _184.SignerInfo;
            };
            ModeInfo: {
                encode(message: _184.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.ModeInfo;
                fromJSON(object: any): _184.ModeInfo;
                toJSON(message: _184.ModeInfo): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _184.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _184.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.ModeInfo_Single;
                fromJSON(object: any): _184.ModeInfo_Single;
                toJSON(message: _184.ModeInfo_Single): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _184.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _184.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.ModeInfo_Multi;
                fromJSON(object: any): _184.ModeInfo_Multi;
                toJSON(message: _184.ModeInfo_Multi): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _184.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _184.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.Fee;
                fromJSON(object: any): _184.Fee;
                toJSON(message: _184.Fee): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _184.Fee;
            };
            Tip: {
                encode(message: _184.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.Tip;
                fromJSON(object: any): _184.Tip;
                toJSON(message: _184.Tip): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _184.Tip;
            };
            AuxSignerData: {
                encode(message: _184.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.AuxSignerData;
                fromJSON(object: any): _184.AuxSignerData;
                toJSON(message: _184.AuxSignerData): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _184.AuxSignerData;
            };
            orderByFromJSON(object: any): _183.OrderBy;
            orderByToJSON(object: _183.OrderBy): string;
            broadcastModeFromJSON(object: any): _183.BroadcastMode;
            broadcastModeToJSON(object: _183.BroadcastMode): string;
            OrderBy: typeof _183.OrderBy;
            BroadcastMode: typeof _183.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _183.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.GetTxsEventRequest;
                fromJSON(object: any): _183.GetTxsEventRequest;
                toJSON(message: _183.GetTxsEventRequest): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _183.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _183.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.GetTxsEventResponse;
                fromJSON(object: any): _183.GetTxsEventResponse;
                toJSON(message: _183.GetTxsEventResponse): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _183.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _183.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.BroadcastTxRequest;
                fromJSON(object: any): _183.BroadcastTxRequest;
                toJSON(message: _183.BroadcastTxRequest): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _183.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _183.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.BroadcastTxResponse;
                fromJSON(object: any): _183.BroadcastTxResponse;
                toJSON(message: _183.BroadcastTxResponse): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _183.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _183.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.SimulateRequest;
                fromJSON(object: any): _183.SimulateRequest;
                toJSON(message: _183.SimulateRequest): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _183.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _183.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.SimulateResponse;
                fromJSON(object: any): _183.SimulateResponse;
                toJSON(message: _183.SimulateResponse): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _183.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _183.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.GetTxRequest;
                fromJSON(object: any): _183.GetTxRequest;
                toJSON(message: _183.GetTxRequest): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _183.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _183.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.GetTxResponse;
                fromJSON(object: any): _183.GetTxResponse;
                toJSON(message: _183.GetTxResponse): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _183.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _183.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.GetBlockWithTxsRequest;
                fromJSON(object: any): _183.GetBlockWithTxsRequest;
                toJSON(message: _183.GetBlockWithTxsRequest): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _183.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _183.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.GetBlockWithTxsResponse;
                fromJSON(object: any): _183.GetBlockWithTxsResponse;
                toJSON(message: _183.GetBlockWithTxsResponse): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _183.GetBlockWithTxsResponse;
            };
            ServiceClientImpl: typeof _183.ServiceClientImpl;
        };
    }
    namespace upgrade {
        const v1beta1: {
            Plan: {
                encode(message: _195.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.Plan;
                fromJSON(object: any): _195.Plan;
                toJSON(message: _195.Plan): unknown;
                fromPartial<I extends unknown>(object: I): _195.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _195.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.SoftwareUpgradeProposal;
                fromJSON(object: any): _195.SoftwareUpgradeProposal;
                toJSON(message: _195.SoftwareUpgradeProposal): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _195.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _195.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _195.CancelSoftwareUpgradeProposal;
                toJSON(message: _195.CancelSoftwareUpgradeProposal): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _195.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _195.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.ModuleVersion;
                fromJSON(object: any): _195.ModuleVersion;
                toJSON(message: _195.ModuleVersion): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _195.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _186.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.MsgSoftwareUpgrade;
                fromJSON(object: any): _186.MsgSoftwareUpgrade;
                toJSON(message: _186.MsgSoftwareUpgrade): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _186.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _186.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _186.MsgSoftwareUpgradeResponse;
                toJSON(_: _186.MsgSoftwareUpgradeResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _186.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _186.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.MsgCancelUpgrade;
                fromJSON(object: any): _186.MsgCancelUpgrade;
                toJSON(message: _186.MsgCancelUpgrade): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _186.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _186.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.MsgCancelUpgradeResponse;
                fromJSON(_: any): _186.MsgCancelUpgradeResponse;
                toJSON(_: _186.MsgCancelUpgradeResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _186.MsgCancelUpgradeResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _186.MsgSoftwareUpgrade) => {
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
                    }) => _186.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _186.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _186.MsgCancelUpgrade;
                };
            };
            encoded: {
                softwareUpgrade(value: _186.MsgSoftwareUpgrade): {
                    type_url: string;
                    value: Uint8Array;
                };
                cancelUpgrade(value: _186.MsgCancelUpgrade): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                softwareUpgrade(value: any): {
                    typeUrl: string;
                    value: _186.MsgSoftwareUpgrade;
                };
                cancelUpgrade(value: any): {
                    typeUrl: string;
                    value: _186.MsgCancelUpgrade;
                };
            };
            toJSON: {
                softwareUpgrade(value: _186.MsgSoftwareUpgrade): {
                    typeUrl: string;
                    value: unknown;
                };
                cancelUpgrade(value: _186.MsgCancelUpgrade): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                softwareUpgrade(value: _186.MsgSoftwareUpgrade): {
                    typeUrl: string;
                    value: _186.MsgSoftwareUpgrade;
                };
                cancelUpgrade(value: _186.MsgCancelUpgrade): {
                    typeUrl: string;
                    value: _186.MsgCancelUpgrade;
                };
            };
            messages: {
                softwareUpgrade(value: _186.MsgSoftwareUpgrade): {
                    typeUrl: string;
                    value: _186.MsgSoftwareUpgrade;
                };
                cancelUpgrade(value: _186.MsgCancelUpgrade): {
                    typeUrl: string;
                    value: _186.MsgCancelUpgrade;
                };
            };
            QueryCurrentPlanRequest: {
                encode(_: _185.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.QueryCurrentPlanRequest;
                fromJSON(_: any): _185.QueryCurrentPlanRequest;
                toJSON(_: _185.QueryCurrentPlanRequest): unknown;
                fromPartial<I_8 extends unknown>(_: I_8): _185.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _185.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.QueryCurrentPlanResponse;
                fromJSON(object: any): _185.QueryCurrentPlanResponse;
                toJSON(message: _185.QueryCurrentPlanResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _185.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _185.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.QueryAppliedPlanRequest;
                fromJSON(object: any): _185.QueryAppliedPlanRequest;
                toJSON(message: _185.QueryAppliedPlanRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _185.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _185.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.QueryAppliedPlanResponse;
                fromJSON(object: any): _185.QueryAppliedPlanResponse;
                toJSON(message: _185.QueryAppliedPlanResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _185.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _185.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _185.QueryUpgradedConsensusStateRequest;
                toJSON(message: _185.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _185.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _185.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _185.QueryUpgradedConsensusStateResponse;
                toJSON(message: _185.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _185.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _185.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.QueryModuleVersionsRequest;
                fromJSON(object: any): _185.QueryModuleVersionsRequest;
                toJSON(message: _185.QueryModuleVersionsRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _185.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _185.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.QueryModuleVersionsResponse;
                fromJSON(object: any): _185.QueryModuleVersionsResponse;
                toJSON(message: _185.QueryModuleVersionsResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _185.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _185.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.QueryAuthorityRequest;
                fromJSON(_: any): _185.QueryAuthorityRequest;
                toJSON(_: _185.QueryAuthorityRequest): unknown;
                fromPartial<I_16 extends unknown>(_: I_16): _185.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _185.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.QueryAuthorityResponse;
                fromJSON(object: any): _185.QueryAuthorityResponse;
                toJSON(message: _185.QueryAuthorityResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _185.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            BaseVestingAccount: {
                encode(message: _205.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.BaseVestingAccount;
                fromJSON(object: any): _205.BaseVestingAccount;
                toJSON(message: _205.BaseVestingAccount): unknown;
                fromPartial<I extends unknown>(object: I): _205.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _205.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.ContinuousVestingAccount;
                fromJSON(object: any): _205.ContinuousVestingAccount;
                toJSON(message: _205.ContinuousVestingAccount): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _205.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _205.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.DelayedVestingAccount;
                fromJSON(object: any): _205.DelayedVestingAccount;
                toJSON(message: _205.DelayedVestingAccount): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _205.DelayedVestingAccount;
            };
            Period: {
                encode(message: _205.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.Period;
                fromJSON(object: any): _205.Period;
                toJSON(message: _205.Period): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _205.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _205.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.PeriodicVestingAccount;
                fromJSON(object: any): _205.PeriodicVestingAccount;
                toJSON(message: _205.PeriodicVestingAccount): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _205.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _205.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.PermanentLockedAccount;
                fromJSON(object: any): _205.PermanentLockedAccount;
                toJSON(message: _205.PermanentLockedAccount): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _205.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _196.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgCreateVestingAccount;
                fromJSON(object: any): _196.MsgCreateVestingAccount;
                toJSON(message: _196.MsgCreateVestingAccount): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _196.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _196.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _196.MsgCreateVestingAccountResponse;
                toJSON(_: _196.MsgCreateVestingAccountResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _196.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _196.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _196.MsgCreatePermanentLockedAccount;
                toJSON(message: _196.MsgCreatePermanentLockedAccount): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _196.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _196.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _196.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _196.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial<I_9 extends unknown>(_: I_9): _196.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _196.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _196.MsgCreatePeriodicVestingAccount;
                toJSON(message: _196.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _196.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _196.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _196.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _196.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial<I_11 extends unknown>(_: I_11): _196.MsgCreatePeriodicVestingAccountResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _196.MsgCreateVestingAccount) => {
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
                    }) => _196.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _196.MsgCreatePermanentLockedAccount) => {
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
                    }) => _196.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _196.MsgCreatePeriodicVestingAccount) => {
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
                    }) => _196.MsgCreatePeriodicVestingAccount;
                };
            };
            encoded: {
                createVestingAccount(value: _196.MsgCreateVestingAccount): {
                    type_url: string;
                    value: Uint8Array;
                };
                createPermanentLockedAccount(value: _196.MsgCreatePermanentLockedAccount): {
                    type_url: string;
                    value: Uint8Array;
                };
                createPeriodicVestingAccount(value: _196.MsgCreatePeriodicVestingAccount): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                createVestingAccount(value: any): {
                    typeUrl: string;
                    value: _196.MsgCreateVestingAccount;
                };
                createPermanentLockedAccount(value: any): {
                    typeUrl: string;
                    value: _196.MsgCreatePermanentLockedAccount;
                };
                createPeriodicVestingAccount(value: any): {
                    typeUrl: string;
                    value: _196.MsgCreatePeriodicVestingAccount;
                };
            };
            toJSON: {
                createVestingAccount(value: _196.MsgCreateVestingAccount): {
                    typeUrl: string;
                    value: unknown;
                };
                createPermanentLockedAccount(value: _196.MsgCreatePermanentLockedAccount): {
                    typeUrl: string;
                    value: unknown;
                };
                createPeriodicVestingAccount(value: _196.MsgCreatePeriodicVestingAccount): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                createVestingAccount(value: _196.MsgCreateVestingAccount): {
                    typeUrl: string;
                    value: _196.MsgCreateVestingAccount;
                };
                createPermanentLockedAccount(value: _196.MsgCreatePermanentLockedAccount): {
                    typeUrl: string;
                    value: _196.MsgCreatePermanentLockedAccount;
                };
                createPeriodicVestingAccount(value: _196.MsgCreatePeriodicVestingAccount): {
                    typeUrl: string;
                    value: _196.MsgCreatePeriodicVestingAccount;
                };
            };
            messages: {
                createVestingAccount(value: _196.MsgCreateVestingAccount): {
                    typeUrl: string;
                    value: _196.MsgCreateVestingAccount;
                };
                createPermanentLockedAccount(value: _196.MsgCreatePermanentLockedAccount): {
                    typeUrl: string;
                    value: _196.MsgCreatePermanentLockedAccount;
                };
                createPeriodicVestingAccount(value: _196.MsgCreatePeriodicVestingAccount): {
                    typeUrl: string;
                    value: _196.MsgCreatePeriodicVestingAccount;
                };
            };
        };
    }
}
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            accessTypeFromJSON(object: any): _219.AccessType;
            accessTypeToJSON(object: _219.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _219.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _219.ContractCodeHistoryOperationType): string;
            AccessType: typeof _219.AccessType;
            ContractCodeHistoryOperationType: typeof _219.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _219.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.AccessTypeParam;
                fromJSON(object: any): _219.AccessTypeParam;
                toJSON(message: _219.AccessTypeParam): unknown;
                fromPartial<I extends unknown>(object: I): _219.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _219.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.AccessConfig;
                fromJSON(object: any): _219.AccessConfig;
                toJSON(message: _219.AccessConfig): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _219.AccessConfig;
            };
            Params: {
                encode(message: _219.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.Params;
                fromJSON(object: any): _219.Params;
                toJSON(message: _219.Params): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _219.Params;
            };
            CodeInfo: {
                encode(message: _219.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.CodeInfo;
                fromJSON(object: any): _219.CodeInfo;
                toJSON(message: _219.CodeInfo): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _219.CodeInfo;
            };
            ContractInfo: {
                encode(message: _219.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.ContractInfo;
                fromJSON(object: any): _219.ContractInfo;
                toJSON(message: _219.ContractInfo): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _219.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _219.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.ContractCodeHistoryEntry;
                fromJSON(object: any): _219.ContractCodeHistoryEntry;
                toJSON(message: _219.ContractCodeHistoryEntry): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _219.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _219.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.AbsoluteTxPosition;
                fromJSON(object: any): _219.AbsoluteTxPosition;
                toJSON(message: _219.AbsoluteTxPosition): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _219.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _219.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.Model;
                fromJSON(object: any): _219.Model;
                toJSON(message: _219.Model): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _219.Model;
            };
            MsgStoreCode: {
                encode(message: _210.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.MsgStoreCode;
                fromJSON(object: any): _210.MsgStoreCode;
                toJSON(message: _210.MsgStoreCode): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _210.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _210.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.MsgStoreCodeResponse;
                fromJSON(object: any): _210.MsgStoreCodeResponse;
                toJSON(message: _210.MsgStoreCodeResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _210.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _210.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.MsgInstantiateContract;
                fromJSON(object: any): _210.MsgInstantiateContract;
                toJSON(message: _210.MsgInstantiateContract): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _210.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _210.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.MsgInstantiateContractResponse;
                fromJSON(object: any): _210.MsgInstantiateContractResponse;
                toJSON(message: _210.MsgInstantiateContractResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _210.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _210.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.MsgExecuteContract;
                fromJSON(object: any): _210.MsgExecuteContract;
                toJSON(message: _210.MsgExecuteContract): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _210.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _210.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.MsgExecuteContractResponse;
                fromJSON(object: any): _210.MsgExecuteContractResponse;
                toJSON(message: _210.MsgExecuteContractResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _210.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _210.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.MsgMigrateContract;
                fromJSON(object: any): _210.MsgMigrateContract;
                toJSON(message: _210.MsgMigrateContract): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _210.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _210.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.MsgMigrateContractResponse;
                fromJSON(object: any): _210.MsgMigrateContractResponse;
                toJSON(message: _210.MsgMigrateContractResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _210.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _210.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.MsgUpdateAdmin;
                fromJSON(object: any): _210.MsgUpdateAdmin;
                toJSON(message: _210.MsgUpdateAdmin): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _210.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _210.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.MsgUpdateAdminResponse;
                fromJSON(_: any): _210.MsgUpdateAdminResponse;
                toJSON(_: _210.MsgUpdateAdminResponse): unknown;
                fromPartial<I_17 extends unknown>(_: I_17): _210.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _210.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.MsgClearAdmin;
                fromJSON(object: any): _210.MsgClearAdmin;
                toJSON(message: _210.MsgClearAdmin): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _210.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _210.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.MsgClearAdminResponse;
                fromJSON(_: any): _210.MsgClearAdminResponse;
                toJSON(_: _210.MsgClearAdminResponse): unknown;
                fromPartial<I_19 extends unknown>(_: I_19): _210.MsgClearAdminResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _210.MsgStoreCode) => {
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
                    }) => _210.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _210.MsgInstantiateContract) => {
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
                    }) => _210.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _210.MsgExecuteContract) => {
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
                    }) => _210.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _210.MsgMigrateContract) => {
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
                    }) => _210.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _210.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _210.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _210.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _210.MsgClearAdmin;
                };
            };
            encoded: {
                storeCode(value: _210.MsgStoreCode): {
                    type_url: string;
                    value: Uint8Array;
                };
                instantiateContract(value: _210.MsgInstantiateContract): {
                    type_url: string;
                    value: Uint8Array;
                };
                executeContract(value: _210.MsgExecuteContract): {
                    type_url: string;
                    value: Uint8Array;
                };
                migrateContract(value: _210.MsgMigrateContract): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateAdmin(value: _210.MsgUpdateAdmin): {
                    type_url: string;
                    value: Uint8Array;
                };
                clearAdmin(value: _210.MsgClearAdmin): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                storeCode(value: any): {
                    typeUrl: string;
                    value: _210.MsgStoreCode;
                };
                instantiateContract(value: any): {
                    typeUrl: string;
                    value: _210.MsgInstantiateContract;
                };
                executeContract(value: any): {
                    typeUrl: string;
                    value: _210.MsgExecuteContract;
                };
                migrateContract(value: any): {
                    typeUrl: string;
                    value: _210.MsgMigrateContract;
                };
                updateAdmin(value: any): {
                    typeUrl: string;
                    value: _210.MsgUpdateAdmin;
                };
                clearAdmin(value: any): {
                    typeUrl: string;
                    value: _210.MsgClearAdmin;
                };
            };
            toJSON: {
                storeCode(value: _210.MsgStoreCode): {
                    typeUrl: string;
                    value: unknown;
                };
                instantiateContract(value: _210.MsgInstantiateContract): {
                    typeUrl: string;
                    value: unknown;
                };
                executeContract(value: _210.MsgExecuteContract): {
                    typeUrl: string;
                    value: unknown;
                };
                migrateContract(value: _210.MsgMigrateContract): {
                    typeUrl: string;
                    value: unknown;
                };
                updateAdmin(value: _210.MsgUpdateAdmin): {
                    typeUrl: string;
                    value: unknown;
                };
                clearAdmin(value: _210.MsgClearAdmin): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                storeCode(value: _210.MsgStoreCode): {
                    typeUrl: string;
                    value: _210.MsgStoreCode;
                };
                instantiateContract(value: _210.MsgInstantiateContract): {
                    typeUrl: string;
                    value: _210.MsgInstantiateContract;
                };
                executeContract(value: _210.MsgExecuteContract): {
                    typeUrl: string;
                    value: _210.MsgExecuteContract;
                };
                migrateContract(value: _210.MsgMigrateContract): {
                    typeUrl: string;
                    value: _210.MsgMigrateContract;
                };
                updateAdmin(value: _210.MsgUpdateAdmin): {
                    typeUrl: string;
                    value: _210.MsgUpdateAdmin;
                };
                clearAdmin(value: _210.MsgClearAdmin): {
                    typeUrl: string;
                    value: _210.MsgClearAdmin;
                };
            };
            messages: {
                storeCode(value: _210.MsgStoreCode): {
                    typeUrl: string;
                    value: _210.MsgStoreCode;
                };
                instantiateContract(value: _210.MsgInstantiateContract): {
                    typeUrl: string;
                    value: _210.MsgInstantiateContract;
                };
                executeContract(value: _210.MsgExecuteContract): {
                    typeUrl: string;
                    value: _210.MsgExecuteContract;
                };
                migrateContract(value: _210.MsgMigrateContract): {
                    typeUrl: string;
                    value: _210.MsgMigrateContract;
                };
                updateAdmin(value: _210.MsgUpdateAdmin): {
                    typeUrl: string;
                    value: _210.MsgUpdateAdmin;
                };
                clearAdmin(value: _210.MsgClearAdmin): {
                    typeUrl: string;
                    value: _210.MsgClearAdmin;
                };
            };
            QueryContractInfoRequest: {
                encode(message: _209.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.QueryContractInfoRequest;
                fromJSON(object: any): _209.QueryContractInfoRequest;
                toJSON(message: _209.QueryContractInfoRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _209.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _209.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.QueryContractInfoResponse;
                fromJSON(object: any): _209.QueryContractInfoResponse;
                toJSON(message: _209.QueryContractInfoResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _209.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _209.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.QueryContractHistoryRequest;
                fromJSON(object: any): _209.QueryContractHistoryRequest;
                toJSON(message: _209.QueryContractHistoryRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _209.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _209.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.QueryContractHistoryResponse;
                fromJSON(object: any): _209.QueryContractHistoryResponse;
                toJSON(message: _209.QueryContractHistoryResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _209.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _209.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.QueryContractsByCodeRequest;
                fromJSON(object: any): _209.QueryContractsByCodeRequest;
                toJSON(message: _209.QueryContractsByCodeRequest): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _209.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _209.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.QueryContractsByCodeResponse;
                fromJSON(object: any): _209.QueryContractsByCodeResponse;
                toJSON(message: _209.QueryContractsByCodeResponse): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _209.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _209.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.QueryAllContractStateRequest;
                fromJSON(object: any): _209.QueryAllContractStateRequest;
                toJSON(message: _209.QueryAllContractStateRequest): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _209.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _209.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.QueryAllContractStateResponse;
                fromJSON(object: any): _209.QueryAllContractStateResponse;
                toJSON(message: _209.QueryAllContractStateResponse): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _209.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _209.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.QueryRawContractStateRequest;
                fromJSON(object: any): _209.QueryRawContractStateRequest;
                toJSON(message: _209.QueryRawContractStateRequest): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _209.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _209.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.QueryRawContractStateResponse;
                fromJSON(object: any): _209.QueryRawContractStateResponse;
                toJSON(message: _209.QueryRawContractStateResponse): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _209.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _209.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.QuerySmartContractStateRequest;
                fromJSON(object: any): _209.QuerySmartContractStateRequest;
                toJSON(message: _209.QuerySmartContractStateRequest): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _209.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _209.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.QuerySmartContractStateResponse;
                fromJSON(object: any): _209.QuerySmartContractStateResponse;
                toJSON(message: _209.QuerySmartContractStateResponse): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _209.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _209.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.QueryCodeRequest;
                fromJSON(object: any): _209.QueryCodeRequest;
                toJSON(message: _209.QueryCodeRequest): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _209.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _209.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.CodeInfoResponse;
                fromJSON(object: any): _209.CodeInfoResponse;
                toJSON(message: _209.CodeInfoResponse): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _209.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _209.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.QueryCodeResponse;
                fromJSON(object: any): _209.QueryCodeResponse;
                toJSON(message: _209.QueryCodeResponse): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _209.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _209.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.QueryCodesRequest;
                fromJSON(object: any): _209.QueryCodesRequest;
                toJSON(message: _209.QueryCodesRequest): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _209.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _209.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.QueryCodesResponse;
                fromJSON(object: any): _209.QueryCodesResponse;
                toJSON(message: _209.QueryCodesResponse): unknown;
                fromPartial<I_36 extends unknown>(object: I_36): _209.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _209.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.QueryPinnedCodesRequest;
                fromJSON(object: any): _209.QueryPinnedCodesRequest;
                toJSON(message: _209.QueryPinnedCodesRequest): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _209.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _209.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.QueryPinnedCodesResponse;
                fromJSON(object: any): _209.QueryPinnedCodesResponse;
                toJSON(message: _209.QueryPinnedCodesResponse): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _209.QueryPinnedCodesResponse;
            };
            StoreCodeProposal: {
                encode(message: _208.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.StoreCodeProposal;
                fromJSON(object: any): _208.StoreCodeProposal;
                toJSON(message: _208.StoreCodeProposal): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _208.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _208.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.InstantiateContractProposal;
                fromJSON(object: any): _208.InstantiateContractProposal;
                toJSON(message: _208.InstantiateContractProposal): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _208.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _208.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MigrateContractProposal;
                fromJSON(object: any): _208.MigrateContractProposal;
                toJSON(message: _208.MigrateContractProposal): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _208.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _208.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.SudoContractProposal;
                fromJSON(object: any): _208.SudoContractProposal;
                toJSON(message: _208.SudoContractProposal): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _208.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _208.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.ExecuteContractProposal;
                fromJSON(object: any): _208.ExecuteContractProposal;
                toJSON(message: _208.ExecuteContractProposal): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _208.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _208.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.UpdateAdminProposal;
                fromJSON(object: any): _208.UpdateAdminProposal;
                toJSON(message: _208.UpdateAdminProposal): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _208.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _208.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.ClearAdminProposal;
                fromJSON(object: any): _208.ClearAdminProposal;
                toJSON(message: _208.ClearAdminProposal): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _208.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _208.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.PinCodesProposal;
                fromJSON(object: any): _208.PinCodesProposal;
                toJSON(message: _208.PinCodesProposal): unknown;
                fromPartial<I_46 extends unknown>(object: I_46): _208.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _208.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.UnpinCodesProposal;
                fromJSON(object: any): _208.UnpinCodesProposal;
                toJSON(message: _208.UnpinCodesProposal): unknown;
                fromPartial<I_47 extends unknown>(object: I_47): _208.UnpinCodesProposal;
            };
            MsgIBCSend: {
                encode(message: _207.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.MsgIBCSend;
                fromJSON(object: any): _207.MsgIBCSend;
                toJSON(message: _207.MsgIBCSend): unknown;
                fromPartial<I_48 extends unknown>(object: I_48): _207.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _207.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.MsgIBCCloseChannel;
                fromJSON(object: any): _207.MsgIBCCloseChannel;
                toJSON(message: _207.MsgIBCCloseChannel): unknown;
                fromPartial<I_49 extends unknown>(object: I_49): _207.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _206.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.GenesisState;
                fromJSON(object: any): _206.GenesisState;
                toJSON(message: _206.GenesisState): unknown;
                fromPartial<I_50 extends unknown>(object: I_50): _206.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _206.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.GenesisState_GenMsgs;
                fromJSON(object: any): _206.GenesisState_GenMsgs;
                toJSON(message: _206.GenesisState_GenMsgs): unknown;
                fromPartial<I_51 extends unknown>(object: I_51): _206.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _206.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.Code;
                fromJSON(object: any): _206.Code;
                toJSON(message: _206.Code): unknown;
                fromPartial<I_52 extends unknown>(object: I_52): _206.Code;
            };
            Contract: {
                encode(message: _206.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.Contract;
                fromJSON(object: any): _206.Contract;
                toJSON(message: _206.Contract): unknown;
                fromPartial<I_53 extends unknown>(object: I_53): _206.Contract;
            };
            Sequence: {
                encode(message: _206.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.Sequence;
                fromJSON(object: any): _206.Sequence;
                toJSON(message: _206.Sequence): unknown;
                fromPartial<I_54 extends unknown>(object: I_54): _206.Sequence;
            };
        };
    }
}
export declare const gogoproto: {};
export declare namespace google {
    const api: {
        Visibility: {
            encode(message: _251.Visibility, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.Visibility;
            fromJSON(object: any): _251.Visibility;
            toJSON(message: _251.Visibility): unknown;
            fromPartial<I extends unknown>(object: I): _251.Visibility;
        };
        VisibilityRule: {
            encode(message: _251.VisibilityRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.VisibilityRule;
            fromJSON(object: any): _251.VisibilityRule;
            toJSON(message: _251.VisibilityRule): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _251.VisibilityRule;
        };
        Usage: {
            encode(message: _250.Usage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.Usage;
            fromJSON(object: any): _250.Usage;
            toJSON(message: _250.Usage): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _250.Usage;
        };
        UsageRule: {
            encode(message: _250.UsageRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.UsageRule;
            fromJSON(object: any): _250.UsageRule;
            toJSON(message: _250.UsageRule): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _250.UsageRule;
        };
        SystemParameters: {
            encode(message: _249.SystemParameters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.SystemParameters;
            fromJSON(object: any): _249.SystemParameters;
            toJSON(message: _249.SystemParameters): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _249.SystemParameters;
        };
        SystemParameterRule: {
            encode(message: _249.SystemParameterRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.SystemParameterRule;
            fromJSON(object: any): _249.SystemParameterRule;
            toJSON(message: _249.SystemParameterRule): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _249.SystemParameterRule;
        };
        SystemParameter: {
            encode(message: _249.SystemParameter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.SystemParameter;
            fromJSON(object: any): _249.SystemParameter;
            toJSON(message: _249.SystemParameter): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _249.SystemParameter;
        };
        SourceInfo: {
            encode(message: _248.SourceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.SourceInfo;
            fromJSON(object: any): _248.SourceInfo;
            toJSON(message: _248.SourceInfo): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _248.SourceInfo;
        };
        Service: {
            encode(message: _247.Service, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.Service;
            fromJSON(object: any): _247.Service;
            toJSON(message: _247.Service): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _247.Service;
        };
        RoutingRule: {
            encode(message: _246.RoutingRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.RoutingRule;
            fromJSON(object: any): _246.RoutingRule;
            toJSON(message: _246.RoutingRule): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _246.RoutingRule;
        };
        RoutingParameter: {
            encode(message: _246.RoutingParameter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.RoutingParameter;
            fromJSON(object: any): _246.RoutingParameter;
            toJSON(message: _246.RoutingParameter): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _246.RoutingParameter;
        };
        resourceDescriptor_HistoryFromJSON(object: any): _245.ResourceDescriptor_History;
        resourceDescriptor_HistoryToJSON(object: _245.ResourceDescriptor_History): string;
        resourceDescriptor_StyleFromJSON(object: any): _245.ResourceDescriptor_Style;
        resourceDescriptor_StyleToJSON(object: _245.ResourceDescriptor_Style): string;
        ResourceDescriptor: {
            encode(message: _245.ResourceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.ResourceDescriptor;
            fromJSON(object: any): _245.ResourceDescriptor;
            toJSON(message: _245.ResourceDescriptor): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _245.ResourceDescriptor;
        };
        ResourceDescriptor_History: typeof _245.ResourceDescriptor_History;
        ResourceDescriptor_Style: typeof _245.ResourceDescriptor_Style;
        ResourceReference: {
            encode(message: _245.ResourceReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.ResourceReference;
            fromJSON(object: any): _245.ResourceReference;
            toJSON(message: _245.ResourceReference): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _245.ResourceReference;
        };
        Quota: {
            encode(message: _244.Quota, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.Quota;
            fromJSON(object: any): _244.Quota;
            toJSON(message: _244.Quota): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _244.Quota;
        };
        MetricRule: {
            encode(message: _244.MetricRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.MetricRule;
            fromJSON(object: any): _244.MetricRule;
            toJSON(message: _244.MetricRule): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _244.MetricRule;
        };
        MetricRule_MetricCostsEntry: {
            encode(message: _244.MetricRule_MetricCostsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.MetricRule_MetricCostsEntry;
            fromJSON(object: any): _244.MetricRule_MetricCostsEntry;
            toJSON(message: _244.MetricRule_MetricCostsEntry): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _244.MetricRule_MetricCostsEntry;
        };
        QuotaLimit: {
            encode(message: _244.QuotaLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QuotaLimit;
            fromJSON(object: any): _244.QuotaLimit;
            toJSON(message: _244.QuotaLimit): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _244.QuotaLimit;
        };
        QuotaLimit_ValuesEntry: {
            encode(message: _244.QuotaLimit_ValuesEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QuotaLimit_ValuesEntry;
            fromJSON(object: any): _244.QuotaLimit_ValuesEntry;
            toJSON(message: _244.QuotaLimit_ValuesEntry): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _244.QuotaLimit_ValuesEntry;
        };
        Monitoring: {
            encode(message: _243.Monitoring, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.Monitoring;
            fromJSON(object: any): _243.Monitoring;
            toJSON(message: _243.Monitoring): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _243.Monitoring;
        };
        Monitoring_MonitoringDestination: {
            encode(message: _243.Monitoring_MonitoringDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.Monitoring_MonitoringDestination;
            fromJSON(object: any): _243.Monitoring_MonitoringDestination;
            toJSON(message: _243.Monitoring_MonitoringDestination): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _243.Monitoring_MonitoringDestination;
        };
        MonitoredResourceDescriptor: {
            encode(message: _242.MonitoredResourceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.MonitoredResourceDescriptor;
            fromJSON(object: any): _242.MonitoredResourceDescriptor;
            toJSON(message: _242.MonitoredResourceDescriptor): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _242.MonitoredResourceDescriptor;
        };
        MonitoredResource: {
            encode(message: _242.MonitoredResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.MonitoredResource;
            fromJSON(object: any): _242.MonitoredResource;
            toJSON(message: _242.MonitoredResource): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _242.MonitoredResource;
        };
        MonitoredResource_LabelsEntry: {
            encode(message: _242.MonitoredResource_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.MonitoredResource_LabelsEntry;
            fromJSON(object: any): _242.MonitoredResource_LabelsEntry;
            toJSON(message: _242.MonitoredResource_LabelsEntry): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _242.MonitoredResource_LabelsEntry;
        };
        MonitoredResourceMetadata: {
            encode(message: _242.MonitoredResourceMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.MonitoredResourceMetadata;
            fromJSON(object: any): _242.MonitoredResourceMetadata;
            toJSON(message: _242.MonitoredResourceMetadata): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _242.MonitoredResourceMetadata;
        };
        MonitoredResourceMetadata_UserLabelsEntry: {
            encode(message: _242.MonitoredResourceMetadata_UserLabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.MonitoredResourceMetadata_UserLabelsEntry;
            fromJSON(object: any): _242.MonitoredResourceMetadata_UserLabelsEntry;
            toJSON(message: _242.MonitoredResourceMetadata_UserLabelsEntry): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _242.MonitoredResourceMetadata_UserLabelsEntry;
        };
        metricDescriptor_MetricKindFromJSON(object: any): _241.MetricDescriptor_MetricKind;
        metricDescriptor_MetricKindToJSON(object: _241.MetricDescriptor_MetricKind): string;
        metricDescriptor_ValueTypeFromJSON(object: any): _241.MetricDescriptor_ValueType;
        metricDescriptor_ValueTypeToJSON(object: _241.MetricDescriptor_ValueType): string;
        MetricDescriptor: {
            encode(message: _241.MetricDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MetricDescriptor;
            fromJSON(object: any): _241.MetricDescriptor;
            toJSON(message: _241.MetricDescriptor): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _241.MetricDescriptor;
        };
        MetricDescriptor_MetricKind: typeof _241.MetricDescriptor_MetricKind;
        MetricDescriptor_ValueType: typeof _241.MetricDescriptor_ValueType;
        MetricDescriptor_MetricDescriptorMetadata: {
            encode(message: _241.MetricDescriptor_MetricDescriptorMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MetricDescriptor_MetricDescriptorMetadata;
            fromJSON(object: any): _241.MetricDescriptor_MetricDescriptorMetadata;
            toJSON(message: _241.MetricDescriptor_MetricDescriptorMetadata): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _241.MetricDescriptor_MetricDescriptorMetadata;
        };
        Metric: {
            encode(message: _241.Metric, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.Metric;
            fromJSON(object: any): _241.Metric;
            toJSON(message: _241.Metric): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _241.Metric;
        };
        Metric_LabelsEntry: {
            encode(message: _241.Metric_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.Metric_LabelsEntry;
            fromJSON(object: any): _241.Metric_LabelsEntry;
            toJSON(message: _241.Metric_LabelsEntry): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _241.Metric_LabelsEntry;
        };
        Logging: {
            encode(message: _240.Logging, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.Logging;
            fromJSON(object: any): _240.Logging;
            toJSON(message: _240.Logging): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _240.Logging;
        };
        Logging_LoggingDestination: {
            encode(message: _240.Logging_LoggingDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.Logging_LoggingDestination;
            fromJSON(object: any): _240.Logging_LoggingDestination;
            toJSON(message: _240.Logging_LoggingDestination): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _240.Logging_LoggingDestination;
        };
        LogDescriptor: {
            encode(message: _239.LogDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.LogDescriptor;
            fromJSON(object: any): _239.LogDescriptor;
            toJSON(message: _239.LogDescriptor): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _239.LogDescriptor;
        };
        launchStageFromJSON(object: any): _238.LaunchStage;
        launchStageToJSON(object: _238.LaunchStage): string;
        LaunchStage: typeof _238.LaunchStage;
        labelDescriptor_ValueTypeFromJSON(object: any): _237.LabelDescriptor_ValueType;
        labelDescriptor_ValueTypeToJSON(object: _237.LabelDescriptor_ValueType): string;
        LabelDescriptor: {
            encode(message: _237.LabelDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.LabelDescriptor;
            fromJSON(object: any): _237.LabelDescriptor;
            toJSON(message: _237.LabelDescriptor): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _237.LabelDescriptor;
        };
        LabelDescriptor_ValueType: typeof _237.LabelDescriptor_ValueType;
        HttpBody: {
            encode(message: _236.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.HttpBody;
            fromJSON(object: any): _236.HttpBody;
            toJSON(message: _236.HttpBody): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _236.HttpBody;
        };
        Http: {
            encode(message: _235.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.Http;
            fromJSON(object: any): _235.Http;
            toJSON(message: _235.Http): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _235.Http;
        };
        HttpRule: {
            encode(message: _235.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.HttpRule;
            fromJSON(object: any): _235.HttpRule;
            toJSON(message: _235.HttpRule): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _235.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _235.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.CustomHttpPattern;
            fromJSON(object: any): _235.CustomHttpPattern;
            toJSON(message: _235.CustomHttpPattern): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _235.CustomHttpPattern;
        };
        fieldBehaviorFromJSON(object: any): _234.FieldBehavior;
        fieldBehaviorToJSON(object: _234.FieldBehavior): string;
        FieldBehavior: typeof _234.FieldBehavior;
        errorReasonFromJSON(object: any): _233.ErrorReason;
        errorReasonToJSON(object: _233.ErrorReason): string;
        ErrorReason: typeof _233.ErrorReason;
        Endpoint: {
            encode(message: _232.Endpoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.Endpoint;
            fromJSON(object: any): _232.Endpoint;
            toJSON(message: _232.Endpoint): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _232.Endpoint;
        };
        Documentation: {
            encode(message: _231.Documentation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.Documentation;
            fromJSON(object: any): _231.Documentation;
            toJSON(message: _231.Documentation): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _231.Documentation;
        };
        DocumentationRule: {
            encode(message: _231.DocumentationRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.DocumentationRule;
            fromJSON(object: any): _231.DocumentationRule;
            toJSON(message: _231.DocumentationRule): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _231.DocumentationRule;
        };
        Page: {
            encode(message: _231.Page, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.Page;
            fromJSON(object: any): _231.Page;
            toJSON(message: _231.Page): unknown;
            fromPartial<I_40 extends unknown>(object: I_40): _231.Page;
        };
        Distribution: {
            encode(message: _230.Distribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.Distribution;
            fromJSON(object: any): _230.Distribution;
            toJSON(message: _230.Distribution): unknown;
            fromPartial<I_41 extends unknown>(object: I_41): _230.Distribution;
        };
        Distribution_Range: {
            encode(message: _230.Distribution_Range, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.Distribution_Range;
            fromJSON(object: any): _230.Distribution_Range;
            toJSON(message: _230.Distribution_Range): unknown;
            fromPartial<I_42 extends unknown>(object: I_42): _230.Distribution_Range;
        };
        Distribution_BucketOptions: {
            encode(message: _230.Distribution_BucketOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.Distribution_BucketOptions;
            fromJSON(object: any): _230.Distribution_BucketOptions;
            toJSON(message: _230.Distribution_BucketOptions): unknown;
            fromPartial<I_43 extends unknown>(object: I_43): _230.Distribution_BucketOptions;
        };
        Distribution_BucketOptions_Linear: {
            encode(message: _230.Distribution_BucketOptions_Linear, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.Distribution_BucketOptions_Linear;
            fromJSON(object: any): _230.Distribution_BucketOptions_Linear;
            toJSON(message: _230.Distribution_BucketOptions_Linear): unknown;
            fromPartial<I_44 extends unknown>(object: I_44): _230.Distribution_BucketOptions_Linear;
        };
        Distribution_BucketOptions_Exponential: {
            encode(message: _230.Distribution_BucketOptions_Exponential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.Distribution_BucketOptions_Exponential;
            fromJSON(object: any): _230.Distribution_BucketOptions_Exponential;
            toJSON(message: _230.Distribution_BucketOptions_Exponential): unknown;
            fromPartial<I_45 extends unknown>(object: I_45): _230.Distribution_BucketOptions_Exponential;
        };
        Distribution_BucketOptions_Explicit: {
            encode(message: _230.Distribution_BucketOptions_Explicit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.Distribution_BucketOptions_Explicit;
            fromJSON(object: any): _230.Distribution_BucketOptions_Explicit;
            toJSON(message: _230.Distribution_BucketOptions_Explicit): unknown;
            fromPartial<I_46 extends unknown>(object: I_46): _230.Distribution_BucketOptions_Explicit;
        };
        Distribution_Exemplar: {
            encode(message: _230.Distribution_Exemplar, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.Distribution_Exemplar;
            fromJSON(object: any): _230.Distribution_Exemplar;
            toJSON(message: _230.Distribution_Exemplar): unknown;
            fromPartial<I_47 extends unknown>(object: I_47): _230.Distribution_Exemplar;
        };
        Control: {
            encode(message: _229.Control, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.Control;
            fromJSON(object: any): _229.Control;
            toJSON(message: _229.Control): unknown;
            fromPartial<I_48 extends unknown>(object: I_48): _229.Control;
        };
        Context: {
            encode(message: _228.Context, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.Context;
            fromJSON(object: any): _228.Context;
            toJSON(message: _228.Context): unknown;
            fromPartial<I_49 extends unknown>(object: I_49): _228.Context;
        };
        ContextRule: {
            encode(message: _228.ContextRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.ContextRule;
            fromJSON(object: any): _228.ContextRule;
            toJSON(message: _228.ContextRule): unknown;
            fromPartial<I_50 extends unknown>(object: I_50): _228.ContextRule;
        };
        property_PropertyTypeFromJSON(object: any): _227.Property_PropertyType;
        property_PropertyTypeToJSON(object: _227.Property_PropertyType): string;
        ProjectProperties: {
            encode(message: _227.ProjectProperties, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.ProjectProperties;
            fromJSON(object: any): _227.ProjectProperties;
            toJSON(message: _227.ProjectProperties): unknown;
            fromPartial<I_51 extends unknown>(object: I_51): _227.ProjectProperties;
        };
        Property: {
            encode(message: _227.Property, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.Property;
            fromJSON(object: any): _227.Property;
            toJSON(message: _227.Property): unknown;
            fromPartial<I_52 extends unknown>(object: I_52): _227.Property;
        };
        Property_PropertyType: typeof _227.Property_PropertyType;
        changeTypeFromJSON(object: any): _226.ChangeType;
        changeTypeToJSON(object: _226.ChangeType): string;
        ChangeType: typeof _226.ChangeType;
        ConfigChange: {
            encode(message: _226.ConfigChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.ConfigChange;
            fromJSON(object: any): _226.ConfigChange;
            toJSON(message: _226.ConfigChange): unknown;
            fromPartial<I_53 extends unknown>(object: I_53): _226.ConfigChange;
        };
        Advice: {
            encode(message: _226.Advice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.Advice;
            fromJSON(object: any): _226.Advice;
            toJSON(message: _226.Advice): unknown;
            fromPartial<I_54 extends unknown>(object: I_54): _226.Advice;
        };
        Billing: {
            encode(message: _224.Billing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.Billing;
            fromJSON(object: any): _224.Billing;
            toJSON(message: _224.Billing): unknown;
            fromPartial<I_55 extends unknown>(object: I_55): _224.Billing;
        };
        Billing_BillingDestination: {
            encode(message: _224.Billing_BillingDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.Billing_BillingDestination;
            fromJSON(object: any): _224.Billing_BillingDestination;
            toJSON(message: _224.Billing_BillingDestination): unknown;
            fromPartial<I_56 extends unknown>(object: I_56): _224.Billing_BillingDestination;
        };
        backendRule_PathTranslationFromJSON(object: any): _223.BackendRule_PathTranslation;
        backendRule_PathTranslationToJSON(object: _223.BackendRule_PathTranslation): string;
        Backend: {
            encode(message: _223.Backend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.Backend;
            fromJSON(object: any): _223.Backend;
            toJSON(message: _223.Backend): unknown;
            fromPartial<I_57 extends unknown>(object: I_57): _223.Backend;
        };
        BackendRule: {
            encode(message: _223.BackendRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.BackendRule;
            fromJSON(object: any): _223.BackendRule;
            toJSON(message: _223.BackendRule): unknown;
            fromPartial<I_58 extends unknown>(object: I_58): _223.BackendRule;
        };
        BackendRule_PathTranslation: typeof _223.BackendRule_PathTranslation;
        Authentication: {
            encode(message: _222.Authentication, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.Authentication;
            fromJSON(object: any): _222.Authentication;
            toJSON(message: _222.Authentication): unknown;
            fromPartial<I_59 extends unknown>(object: I_59): _222.Authentication;
        };
        AuthenticationRule: {
            encode(message: _222.AuthenticationRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.AuthenticationRule;
            fromJSON(object: any): _222.AuthenticationRule;
            toJSON(message: _222.AuthenticationRule): unknown;
            fromPartial<I_60 extends unknown>(object: I_60): _222.AuthenticationRule;
        };
        JwtLocation: {
            encode(message: _222.JwtLocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.JwtLocation;
            fromJSON(object: any): _222.JwtLocation;
            toJSON(message: _222.JwtLocation): unknown;
            fromPartial<I_61 extends unknown>(object: I_61): _222.JwtLocation;
        };
        AuthProvider: {
            encode(message: _222.AuthProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.AuthProvider;
            fromJSON(object: any): _222.AuthProvider;
            toJSON(message: _222.AuthProvider): unknown;
            fromPartial<I_62 extends unknown>(object: I_62): _222.AuthProvider;
        };
        OAuthRequirements: {
            encode(message: _222.OAuthRequirements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.OAuthRequirements;
            fromJSON(object: any): _222.OAuthRequirements;
            toJSON(message: _222.OAuthRequirements): unknown;
            fromPartial<I_63 extends unknown>(object: I_63): _222.OAuthRequirements;
        };
        AuthRequirement: {
            encode(message: _222.AuthRequirement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.AuthRequirement;
            fromJSON(object: any): _222.AuthRequirement;
            toJSON(message: _222.AuthRequirement): unknown;
            fromPartial<I_64 extends unknown>(object: I_64): _222.AuthRequirement;
        };
    };
    namespace logging {
        const type: {
            logSeverityFromJSON(object: any): _253.LogSeverity;
            logSeverityToJSON(object: _253.LogSeverity): string;
            LogSeverity: typeof _253.LogSeverity;
            HttpRequest: {
                encode(message: _252.HttpRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.HttpRequest;
                fromJSON(object: any): _252.HttpRequest;
                toJSON(message: _252.HttpRequest): unknown;
                fromPartial<I extends unknown>(object: I): _252.HttpRequest;
            };
        };
        const v2: {
            tailLogEntriesResponse_SuppressionInfo_ReasonFromJSON(object: any): _257.TailLogEntriesResponse_SuppressionInfo_Reason;
            tailLogEntriesResponse_SuppressionInfo_ReasonToJSON(object: _257.TailLogEntriesResponse_SuppressionInfo_Reason): string;
            DeleteLogRequest: {
                encode(message: _257.DeleteLogRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.DeleteLogRequest;
                fromJSON(object: any): _257.DeleteLogRequest;
                toJSON(message: _257.DeleteLogRequest): unknown;
                fromPartial<I extends unknown>(object: I): _257.DeleteLogRequest;
            };
            WriteLogEntriesRequest: {
                encode(message: _257.WriteLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.WriteLogEntriesRequest;
                fromJSON(object: any): _257.WriteLogEntriesRequest;
                toJSON(message: _257.WriteLogEntriesRequest): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _257.WriteLogEntriesRequest;
            };
            WriteLogEntriesRequest_LabelsEntry: {
                encode(message: _257.WriteLogEntriesRequest_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.WriteLogEntriesRequest_LabelsEntry;
                fromJSON(object: any): _257.WriteLogEntriesRequest_LabelsEntry;
                toJSON(message: _257.WriteLogEntriesRequest_LabelsEntry): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _257.WriteLogEntriesRequest_LabelsEntry;
            };
            WriteLogEntriesResponse: {
                encode(_: _257.WriteLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.WriteLogEntriesResponse;
                fromJSON(_: any): _257.WriteLogEntriesResponse;
                toJSON(_: _257.WriteLogEntriesResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _257.WriteLogEntriesResponse;
            };
            WriteLogEntriesPartialErrors: {
                encode(message: _257.WriteLogEntriesPartialErrors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.WriteLogEntriesPartialErrors;
                fromJSON(object: any): _257.WriteLogEntriesPartialErrors;
                toJSON(message: _257.WriteLogEntriesPartialErrors): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _257.WriteLogEntriesPartialErrors;
            };
            WriteLogEntriesPartialErrors_LogEntryErrorsEntry: {
                encode(message: _257.WriteLogEntriesPartialErrors_LogEntryErrorsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
                fromJSON(object: any): _257.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
                toJSON(message: _257.WriteLogEntriesPartialErrors_LogEntryErrorsEntry): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _257.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
            };
            ListLogEntriesRequest: {
                encode(message: _257.ListLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.ListLogEntriesRequest;
                fromJSON(object: any): _257.ListLogEntriesRequest;
                toJSON(message: _257.ListLogEntriesRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _257.ListLogEntriesRequest;
            };
            ListLogEntriesResponse: {
                encode(message: _257.ListLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.ListLogEntriesResponse;
                fromJSON(object: any): _257.ListLogEntriesResponse;
                toJSON(message: _257.ListLogEntriesResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _257.ListLogEntriesResponse;
            };
            ListMonitoredResourceDescriptorsRequest: {
                encode(message: _257.ListMonitoredResourceDescriptorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.ListMonitoredResourceDescriptorsRequest;
                fromJSON(object: any): _257.ListMonitoredResourceDescriptorsRequest;
                toJSON(message: _257.ListMonitoredResourceDescriptorsRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _257.ListMonitoredResourceDescriptorsRequest;
            };
            ListMonitoredResourceDescriptorsResponse: {
                encode(message: _257.ListMonitoredResourceDescriptorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.ListMonitoredResourceDescriptorsResponse;
                fromJSON(object: any): _257.ListMonitoredResourceDescriptorsResponse;
                toJSON(message: _257.ListMonitoredResourceDescriptorsResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _257.ListMonitoredResourceDescriptorsResponse;
            };
            ListLogsRequest: {
                encode(message: _257.ListLogsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.ListLogsRequest;
                fromJSON(object: any): _257.ListLogsRequest;
                toJSON(message: _257.ListLogsRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _257.ListLogsRequest;
            };
            ListLogsResponse: {
                encode(message: _257.ListLogsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.ListLogsResponse;
                fromJSON(object: any): _257.ListLogsResponse;
                toJSON(message: _257.ListLogsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _257.ListLogsResponse;
            };
            TailLogEntriesRequest: {
                encode(message: _257.TailLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.TailLogEntriesRequest;
                fromJSON(object: any): _257.TailLogEntriesRequest;
                toJSON(message: _257.TailLogEntriesRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _257.TailLogEntriesRequest;
            };
            TailLogEntriesResponse: {
                encode(message: _257.TailLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.TailLogEntriesResponse;
                fromJSON(object: any): _257.TailLogEntriesResponse;
                toJSON(message: _257.TailLogEntriesResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _257.TailLogEntriesResponse;
            };
            TailLogEntriesResponse_SuppressionInfo: {
                encode(message: _257.TailLogEntriesResponse_SuppressionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.TailLogEntriesResponse_SuppressionInfo;
                fromJSON(object: any): _257.TailLogEntriesResponse_SuppressionInfo;
                toJSON(message: _257.TailLogEntriesResponse_SuppressionInfo): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _257.TailLogEntriesResponse_SuppressionInfo;
            };
            TailLogEntriesResponse_SuppressionInfo_Reason: typeof _257.TailLogEntriesResponse_SuppressionInfo_Reason;
            LoggingServiceV2ClientImpl: typeof _257.LoggingServiceV2ClientImpl;
            logMetric_ApiVersionFromJSON(object: any): _256.LogMetric_ApiVersion;
            logMetric_ApiVersionToJSON(object: _256.LogMetric_ApiVersion): string;
            LogMetric: {
                encode(message: _256.LogMetric, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.LogMetric;
                fromJSON(object: any): _256.LogMetric;
                toJSON(message: _256.LogMetric): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _256.LogMetric;
            };
            LogMetric_ApiVersion: typeof _256.LogMetric_ApiVersion;
            LogMetric_LabelExtractorsEntry: {
                encode(message: _256.LogMetric_LabelExtractorsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.LogMetric_LabelExtractorsEntry;
                fromJSON(object: any): _256.LogMetric_LabelExtractorsEntry;
                toJSON(message: _256.LogMetric_LabelExtractorsEntry): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _256.LogMetric_LabelExtractorsEntry;
            };
            ListLogMetricsRequest: {
                encode(message: _256.ListLogMetricsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.ListLogMetricsRequest;
                fromJSON(object: any): _256.ListLogMetricsRequest;
                toJSON(message: _256.ListLogMetricsRequest): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _256.ListLogMetricsRequest;
            };
            ListLogMetricsResponse: {
                encode(message: _256.ListLogMetricsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.ListLogMetricsResponse;
                fromJSON(object: any): _256.ListLogMetricsResponse;
                toJSON(message: _256.ListLogMetricsResponse): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _256.ListLogMetricsResponse;
            };
            GetLogMetricRequest: {
                encode(message: _256.GetLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.GetLogMetricRequest;
                fromJSON(object: any): _256.GetLogMetricRequest;
                toJSON(message: _256.GetLogMetricRequest): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _256.GetLogMetricRequest;
            };
            CreateLogMetricRequest: {
                encode(message: _256.CreateLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.CreateLogMetricRequest;
                fromJSON(object: any): _256.CreateLogMetricRequest;
                toJSON(message: _256.CreateLogMetricRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _256.CreateLogMetricRequest;
            };
            UpdateLogMetricRequest: {
                encode(message: _256.UpdateLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.UpdateLogMetricRequest;
                fromJSON(object: any): _256.UpdateLogMetricRequest;
                toJSON(message: _256.UpdateLogMetricRequest): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _256.UpdateLogMetricRequest;
            };
            DeleteLogMetricRequest: {
                encode(message: _256.DeleteLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.DeleteLogMetricRequest;
                fromJSON(object: any): _256.DeleteLogMetricRequest;
                toJSON(message: _256.DeleteLogMetricRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _256.DeleteLogMetricRequest;
            };
            MetricsServiceV2ClientImpl: typeof _256.MetricsServiceV2ClientImpl;
            lifecycleStateFromJSON(object: any): _255.LifecycleState;
            lifecycleStateToJSON(object: _255.LifecycleState): string;
            operationStateFromJSON(object: any): _255.OperationState;
            operationStateToJSON(object: _255.OperationState): string;
            logSink_VersionFormatFromJSON(object: any): _255.LogSink_VersionFormat;
            logSink_VersionFormatToJSON(object: _255.LogSink_VersionFormat): string;
            LifecycleState: typeof _255.LifecycleState;
            OperationState: typeof _255.OperationState;
            LogBucket: {
                encode(message: _255.LogBucket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.LogBucket;
                fromJSON(object: any): _255.LogBucket;
                toJSON(message: _255.LogBucket): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _255.LogBucket;
            };
            LogView: {
                encode(message: _255.LogView, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.LogView;
                fromJSON(object: any): _255.LogView;
                toJSON(message: _255.LogView): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _255.LogView;
            };
            LogSink: {
                encode(message: _255.LogSink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.LogSink;
                fromJSON(object: any): _255.LogSink;
                toJSON(message: _255.LogSink): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _255.LogSink;
            };
            LogSink_VersionFormat: typeof _255.LogSink_VersionFormat;
            BigQueryOptions: {
                encode(message: _255.BigQueryOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.BigQueryOptions;
                fromJSON(object: any): _255.BigQueryOptions;
                toJSON(message: _255.BigQueryOptions): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _255.BigQueryOptions;
            };
            ListBucketsRequest: {
                encode(message: _255.ListBucketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.ListBucketsRequest;
                fromJSON(object: any): _255.ListBucketsRequest;
                toJSON(message: _255.ListBucketsRequest): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _255.ListBucketsRequest;
            };
            ListBucketsResponse: {
                encode(message: _255.ListBucketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.ListBucketsResponse;
                fromJSON(object: any): _255.ListBucketsResponse;
                toJSON(message: _255.ListBucketsResponse): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _255.ListBucketsResponse;
            };
            CreateBucketRequest: {
                encode(message: _255.CreateBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.CreateBucketRequest;
                fromJSON(object: any): _255.CreateBucketRequest;
                toJSON(message: _255.CreateBucketRequest): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _255.CreateBucketRequest;
            };
            UpdateBucketRequest: {
                encode(message: _255.UpdateBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.UpdateBucketRequest;
                fromJSON(object: any): _255.UpdateBucketRequest;
                toJSON(message: _255.UpdateBucketRequest): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _255.UpdateBucketRequest;
            };
            GetBucketRequest: {
                encode(message: _255.GetBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.GetBucketRequest;
                fromJSON(object: any): _255.GetBucketRequest;
                toJSON(message: _255.GetBucketRequest): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _255.GetBucketRequest;
            };
            DeleteBucketRequest: {
                encode(message: _255.DeleteBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.DeleteBucketRequest;
                fromJSON(object: any): _255.DeleteBucketRequest;
                toJSON(message: _255.DeleteBucketRequest): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _255.DeleteBucketRequest;
            };
            UndeleteBucketRequest: {
                encode(message: _255.UndeleteBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.UndeleteBucketRequest;
                fromJSON(object: any): _255.UndeleteBucketRequest;
                toJSON(message: _255.UndeleteBucketRequest): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _255.UndeleteBucketRequest;
            };
            ListViewsRequest: {
                encode(message: _255.ListViewsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.ListViewsRequest;
                fromJSON(object: any): _255.ListViewsRequest;
                toJSON(message: _255.ListViewsRequest): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _255.ListViewsRequest;
            };
            ListViewsResponse: {
                encode(message: _255.ListViewsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.ListViewsResponse;
                fromJSON(object: any): _255.ListViewsResponse;
                toJSON(message: _255.ListViewsResponse): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _255.ListViewsResponse;
            };
            CreateViewRequest: {
                encode(message: _255.CreateViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.CreateViewRequest;
                fromJSON(object: any): _255.CreateViewRequest;
                toJSON(message: _255.CreateViewRequest): unknown;
                fromPartial<I_36 extends unknown>(object: I_36): _255.CreateViewRequest;
            };
            UpdateViewRequest: {
                encode(message: _255.UpdateViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.UpdateViewRequest;
                fromJSON(object: any): _255.UpdateViewRequest;
                toJSON(message: _255.UpdateViewRequest): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _255.UpdateViewRequest;
            };
            GetViewRequest: {
                encode(message: _255.GetViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.GetViewRequest;
                fromJSON(object: any): _255.GetViewRequest;
                toJSON(message: _255.GetViewRequest): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _255.GetViewRequest;
            };
            DeleteViewRequest: {
                encode(message: _255.DeleteViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.DeleteViewRequest;
                fromJSON(object: any): _255.DeleteViewRequest;
                toJSON(message: _255.DeleteViewRequest): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _255.DeleteViewRequest;
            };
            ListSinksRequest: {
                encode(message: _255.ListSinksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.ListSinksRequest;
                fromJSON(object: any): _255.ListSinksRequest;
                toJSON(message: _255.ListSinksRequest): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _255.ListSinksRequest;
            };
            ListSinksResponse: {
                encode(message: _255.ListSinksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.ListSinksResponse;
                fromJSON(object: any): _255.ListSinksResponse;
                toJSON(message: _255.ListSinksResponse): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _255.ListSinksResponse;
            };
            GetSinkRequest: {
                encode(message: _255.GetSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.GetSinkRequest;
                fromJSON(object: any): _255.GetSinkRequest;
                toJSON(message: _255.GetSinkRequest): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _255.GetSinkRequest;
            };
            CreateSinkRequest: {
                encode(message: _255.CreateSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.CreateSinkRequest;
                fromJSON(object: any): _255.CreateSinkRequest;
                toJSON(message: _255.CreateSinkRequest): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _255.CreateSinkRequest;
            };
            UpdateSinkRequest: {
                encode(message: _255.UpdateSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.UpdateSinkRequest;
                fromJSON(object: any): _255.UpdateSinkRequest;
                toJSON(message: _255.UpdateSinkRequest): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _255.UpdateSinkRequest;
            };
            DeleteSinkRequest: {
                encode(message: _255.DeleteSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.DeleteSinkRequest;
                fromJSON(object: any): _255.DeleteSinkRequest;
                toJSON(message: _255.DeleteSinkRequest): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _255.DeleteSinkRequest;
            };
            LogExclusion: {
                encode(message: _255.LogExclusion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.LogExclusion;
                fromJSON(object: any): _255.LogExclusion;
                toJSON(message: _255.LogExclusion): unknown;
                fromPartial<I_46 extends unknown>(object: I_46): _255.LogExclusion;
            };
            ListExclusionsRequest: {
                encode(message: _255.ListExclusionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.ListExclusionsRequest;
                fromJSON(object: any): _255.ListExclusionsRequest;
                toJSON(message: _255.ListExclusionsRequest): unknown;
                fromPartial<I_47 extends unknown>(object: I_47): _255.ListExclusionsRequest;
            };
            ListExclusionsResponse: {
                encode(message: _255.ListExclusionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.ListExclusionsResponse;
                fromJSON(object: any): _255.ListExclusionsResponse;
                toJSON(message: _255.ListExclusionsResponse): unknown;
                fromPartial<I_48 extends unknown>(object: I_48): _255.ListExclusionsResponse;
            };
            GetExclusionRequest: {
                encode(message: _255.GetExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.GetExclusionRequest;
                fromJSON(object: any): _255.GetExclusionRequest;
                toJSON(message: _255.GetExclusionRequest): unknown;
                fromPartial<I_49 extends unknown>(object: I_49): _255.GetExclusionRequest;
            };
            CreateExclusionRequest: {
                encode(message: _255.CreateExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.CreateExclusionRequest;
                fromJSON(object: any): _255.CreateExclusionRequest;
                toJSON(message: _255.CreateExclusionRequest): unknown;
                fromPartial<I_50 extends unknown>(object: I_50): _255.CreateExclusionRequest;
            };
            UpdateExclusionRequest: {
                encode(message: _255.UpdateExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.UpdateExclusionRequest;
                fromJSON(object: any): _255.UpdateExclusionRequest;
                toJSON(message: _255.UpdateExclusionRequest): unknown;
                fromPartial<I_51 extends unknown>(object: I_51): _255.UpdateExclusionRequest;
            };
            DeleteExclusionRequest: {
                encode(message: _255.DeleteExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.DeleteExclusionRequest;
                fromJSON(object: any): _255.DeleteExclusionRequest;
                toJSON(message: _255.DeleteExclusionRequest): unknown;
                fromPartial<I_52 extends unknown>(object: I_52): _255.DeleteExclusionRequest;
            };
            GetCmekSettingsRequest: {
                encode(message: _255.GetCmekSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.GetCmekSettingsRequest;
                fromJSON(object: any): _255.GetCmekSettingsRequest;
                toJSON(message: _255.GetCmekSettingsRequest): unknown;
                fromPartial<I_53 extends unknown>(object: I_53): _255.GetCmekSettingsRequest;
            };
            UpdateCmekSettingsRequest: {
                encode(message: _255.UpdateCmekSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.UpdateCmekSettingsRequest;
                fromJSON(object: any): _255.UpdateCmekSettingsRequest;
                toJSON(message: _255.UpdateCmekSettingsRequest): unknown;
                fromPartial<I_54 extends unknown>(object: I_54): _255.UpdateCmekSettingsRequest;
            };
            CmekSettings: {
                encode(message: _255.CmekSettings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.CmekSettings;
                fromJSON(object: any): _255.CmekSettings;
                toJSON(message: _255.CmekSettings): unknown;
                fromPartial<I_55 extends unknown>(object: I_55): _255.CmekSettings;
            };
            GetSettingsRequest: {
                encode(message: _255.GetSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.GetSettingsRequest;
                fromJSON(object: any): _255.GetSettingsRequest;
                toJSON(message: _255.GetSettingsRequest): unknown;
                fromPartial<I_56 extends unknown>(object: I_56): _255.GetSettingsRequest;
            };
            UpdateSettingsRequest: {
                encode(message: _255.UpdateSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.UpdateSettingsRequest;
                fromJSON(object: any): _255.UpdateSettingsRequest;
                toJSON(message: _255.UpdateSettingsRequest): unknown;
                fromPartial<I_57 extends unknown>(object: I_57): _255.UpdateSettingsRequest;
            };
            Settings: {
                encode(message: _255.Settings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.Settings;
                fromJSON(object: any): _255.Settings;
                toJSON(message: _255.Settings): unknown;
                fromPartial<I_58 extends unknown>(object: I_58): _255.Settings;
            };
            CopyLogEntriesRequest: {
                encode(message: _255.CopyLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.CopyLogEntriesRequest;
                fromJSON(object: any): _255.CopyLogEntriesRequest;
                toJSON(message: _255.CopyLogEntriesRequest): unknown;
                fromPartial<I_59 extends unknown>(object: I_59): _255.CopyLogEntriesRequest;
            };
            CopyLogEntriesMetadata: {
                encode(message: _255.CopyLogEntriesMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.CopyLogEntriesMetadata;
                fromJSON(object: any): _255.CopyLogEntriesMetadata;
                toJSON(message: _255.CopyLogEntriesMetadata): unknown;
                fromPartial<I_60 extends unknown>(object: I_60): _255.CopyLogEntriesMetadata;
            };
            CopyLogEntriesResponse: {
                encode(message: _255.CopyLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.CopyLogEntriesResponse;
                fromJSON(object: any): _255.CopyLogEntriesResponse;
                toJSON(message: _255.CopyLogEntriesResponse): unknown;
                fromPartial<I_61 extends unknown>(object: I_61): _255.CopyLogEntriesResponse;
            };
            ConfigServiceV2ClientImpl: typeof _255.ConfigServiceV2ClientImpl;
            LogEntry: {
                encode(message: _254.LogEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.LogEntry;
                fromJSON(object: any): _254.LogEntry;
                toJSON(message: _254.LogEntry): unknown;
                fromPartial<I_62 extends unknown>(object: I_62): _254.LogEntry;
            };
            LogEntry_LabelsEntry: {
                encode(message: _254.LogEntry_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.LogEntry_LabelsEntry;
                fromJSON(object: any): _254.LogEntry_LabelsEntry;
                toJSON(message: _254.LogEntry_LabelsEntry): unknown;
                fromPartial<I_63 extends unknown>(object: I_63): _254.LogEntry_LabelsEntry;
            };
            LogEntryOperation: {
                encode(message: _254.LogEntryOperation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.LogEntryOperation;
                fromJSON(object: any): _254.LogEntryOperation;
                toJSON(message: _254.LogEntryOperation): unknown;
                fromPartial<I_64 extends unknown>(object: I_64): _254.LogEntryOperation;
            };
            LogEntrySourceLocation: {
                encode(message: _254.LogEntrySourceLocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.LogEntrySourceLocation;
                fromJSON(object: any): _254.LogEntrySourceLocation;
                toJSON(message: _254.LogEntrySourceLocation): unknown;
                fromPartial<I_65 extends unknown>(object: I_65): _254.LogEntrySourceLocation;
            };
            LogSplit: {
                encode(message: _254.LogSplit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.LogSplit;
                fromJSON(object: any): _254.LogSplit;
                toJSON(message: _254.LogSplit): unknown;
                fromPartial<I_66 extends unknown>(object: I_66): _254.LogSplit;
            };
        };
    }
    const longrunning: {
        Operation: {
            encode(message: _258.Operation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.Operation;
            fromJSON(object: any): _258.Operation;
            toJSON(message: _258.Operation): unknown;
            fromPartial<I extends unknown>(object: I): _258.Operation;
        };
        GetOperationRequest: {
            encode(message: _258.GetOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.GetOperationRequest;
            fromJSON(object: any): _258.GetOperationRequest;
            toJSON(message: _258.GetOperationRequest): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _258.GetOperationRequest;
        };
        ListOperationsRequest: {
            encode(message: _258.ListOperationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.ListOperationsRequest;
            fromJSON(object: any): _258.ListOperationsRequest;
            toJSON(message: _258.ListOperationsRequest): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _258.ListOperationsRequest;
        };
        ListOperationsResponse: {
            encode(message: _258.ListOperationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.ListOperationsResponse;
            fromJSON(object: any): _258.ListOperationsResponse;
            toJSON(message: _258.ListOperationsResponse): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _258.ListOperationsResponse;
        };
        CancelOperationRequest: {
            encode(message: _258.CancelOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.CancelOperationRequest;
            fromJSON(object: any): _258.CancelOperationRequest;
            toJSON(message: _258.CancelOperationRequest): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _258.CancelOperationRequest;
        };
        DeleteOperationRequest: {
            encode(message: _258.DeleteOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.DeleteOperationRequest;
            fromJSON(object: any): _258.DeleteOperationRequest;
            toJSON(message: _258.DeleteOperationRequest): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _258.DeleteOperationRequest;
        };
        WaitOperationRequest: {
            encode(message: _258.WaitOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.WaitOperationRequest;
            fromJSON(object: any): _258.WaitOperationRequest;
            toJSON(message: _258.WaitOperationRequest): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _258.WaitOperationRequest;
        };
        OperationInfo: {
            encode(message: _258.OperationInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.OperationInfo;
            fromJSON(object: any): _258.OperationInfo;
            toJSON(message: _258.OperationInfo): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _258.OperationInfo;
        };
        OperationsClientImpl: typeof _258.OperationsClientImpl;
    };
    const protobuf: {
        DoubleValue: {
            encode(message: _269.DoubleValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.DoubleValue;
            fromJSON(object: any): _269.DoubleValue;
            toJSON(message: _269.DoubleValue): unknown;
            fromPartial<I extends unknown>(object: I): _269.DoubleValue;
        };
        FloatValue: {
            encode(message: _269.FloatValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.FloatValue;
            fromJSON(object: any): _269.FloatValue;
            toJSON(message: _269.FloatValue): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _269.FloatValue;
        };
        Int64Value: {
            encode(message: _269.Int64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.Int64Value;
            fromJSON(object: any): _269.Int64Value;
            toJSON(message: _269.Int64Value): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _269.Int64Value;
        };
        UInt64Value: {
            encode(message: _269.UInt64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.UInt64Value;
            fromJSON(object: any): _269.UInt64Value;
            toJSON(message: _269.UInt64Value): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _269.UInt64Value;
        };
        Int32Value: {
            encode(message: _269.Int32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.Int32Value;
            fromJSON(object: any): _269.Int32Value;
            toJSON(message: _269.Int32Value): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _269.Int32Value;
        };
        UInt32Value: {
            encode(message: _269.UInt32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.UInt32Value;
            fromJSON(object: any): _269.UInt32Value;
            toJSON(message: _269.UInt32Value): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _269.UInt32Value;
        };
        BoolValue: {
            encode(message: _269.BoolValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.BoolValue;
            fromJSON(object: any): _269.BoolValue;
            toJSON(message: _269.BoolValue): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _269.BoolValue;
        };
        StringValue: {
            encode(message: _269.StringValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.StringValue;
            fromJSON(object: any): _269.StringValue;
            toJSON(message: _269.StringValue): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _269.StringValue;
        };
        BytesValue: {
            encode(message: _269.BytesValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.BytesValue;
            fromJSON(object: any): _269.BytesValue;
            toJSON(message: _269.BytesValue): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _269.BytesValue;
        };
        syntaxFromJSON(object: any): _268.Syntax;
        syntaxToJSON(object: _268.Syntax): string;
        field_KindFromJSON(object: any): _268.Field_Kind;
        field_KindToJSON(object: _268.Field_Kind): string;
        field_CardinalityFromJSON(object: any): _268.Field_Cardinality;
        field_CardinalityToJSON(object: _268.Field_Cardinality): string;
        Syntax: typeof _268.Syntax;
        Type: {
            encode(message: _268.Type, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.Type;
            fromJSON(object: any): _268.Type;
            toJSON(message: _268.Type): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _268.Type;
        };
        Field: {
            encode(message: _268.Field, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.Field;
            fromJSON(object: any): _268.Field;
            toJSON(message: _268.Field): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _268.Field;
        };
        Field_Kind: typeof _268.Field_Kind;
        Field_Cardinality: typeof _268.Field_Cardinality;
        Enum: {
            encode(message: _268.Enum, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.Enum;
            fromJSON(object: any): _268.Enum;
            toJSON(message: _268.Enum): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _268.Enum;
        };
        EnumValue: {
            encode(message: _268.EnumValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.EnumValue;
            fromJSON(object: any): _268.EnumValue;
            toJSON(message: _268.EnumValue): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _268.EnumValue;
        };
        Option: {
            encode(message: _268.Option, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.Option;
            fromJSON(object: any): _268.Option;
            toJSON(message: _268.Option): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _268.Option;
        };
        Timestamp: {
            encode(message: _267.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.Timestamp;
            fromJSON(object: any): _267.Timestamp;
            toJSON(message: _267.Timestamp): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _267.Timestamp;
        };
        nullValueFromJSON(object: any): _266.NullValue;
        nullValueToJSON(object: _266.NullValue): string;
        NullValue: typeof _266.NullValue;
        Struct: {
            encode(message: _266.Struct, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.Struct;
            fromJSON(object: any): _266.Struct;
            toJSON(message: _266.Struct): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _266.Struct;
            wrap(object: {
                [key: string]: any;
            }): _266.Struct;
            unwrap(message: _266.Struct): {
                [key: string]: any;
            };
        };
        Struct_FieldsEntry: {
            encode(message: _266.Struct_FieldsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.Struct_FieldsEntry;
            fromJSON(object: any): _266.Struct_FieldsEntry;
            toJSON(message: _266.Struct_FieldsEntry): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _266.Struct_FieldsEntry;
        };
        Value: {
            encode(message: _266.Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.Value;
            fromJSON(object: any): _266.Value;
            toJSON(message: _266.Value): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _266.Value;
            wrap(value: any): _266.Value;
            unwrap(message: _266.Value): string | number | boolean | Object | any[];
        };
        ListValue: {
            encode(message: _266.ListValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.ListValue;
            fromJSON(object: any): _266.ListValue;
            toJSON(message: _266.ListValue): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _266.ListValue;
            wrap(value: any[]): _266.ListValue;
            unwrap(message: _266.ListValue): any[];
        };
        SourceContext: {
            encode(message: _265.SourceContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.SourceContext;
            fromJSON(object: any): _265.SourceContext;
            toJSON(message: _265.SourceContext): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _265.SourceContext;
        };
        FieldMask: {
            encode(message: _264.FieldMask, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _264.FieldMask;
            fromJSON(object: any): _264.FieldMask;
            toJSON(message: _264.FieldMask): string;
            fromPartial<I_20 extends unknown>(object: I_20): _264.FieldMask;
            wrap(paths: string[]): _264.FieldMask;
            unwrap(message: _264.FieldMask): string[];
        };
        Empty: {
            encode(_: _263.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.Empty;
            fromJSON(_: any): _263.Empty;
            toJSON(_: _263.Empty): unknown;
            fromPartial<I_21 extends unknown>(_: I_21): _263.Empty;
        };
        Duration: {
            encode(message: _262.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.Duration;
            fromJSON(object: any): _262.Duration;
            toJSON(message: _262.Duration): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _262.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _261.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _261.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _261.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _261.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _261.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _261.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _261.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _261.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _261.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _261.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _261.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _261.MethodOptions_IdempotencyLevel): string;
        FileDescriptorSet: {
            encode(message: _261.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.FileDescriptorSet;
            fromJSON(object: any): _261.FileDescriptorSet;
            toJSON(message: _261.FileDescriptorSet): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _261.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _261.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.FileDescriptorProto;
            fromJSON(object: any): _261.FileDescriptorProto;
            toJSON(message: _261.FileDescriptorProto): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _261.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _261.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.DescriptorProto;
            fromJSON(object: any): _261.DescriptorProto;
            toJSON(message: _261.DescriptorProto): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _261.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _261.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _261.DescriptorProto_ExtensionRange;
            toJSON(message: _261.DescriptorProto_ExtensionRange): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _261.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _261.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.DescriptorProto_ReservedRange;
            fromJSON(object: any): _261.DescriptorProto_ReservedRange;
            toJSON(message: _261.DescriptorProto_ReservedRange): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _261.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _261.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.ExtensionRangeOptions;
            fromJSON(object: any): _261.ExtensionRangeOptions;
            toJSON(message: _261.ExtensionRangeOptions): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _261.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _261.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.FieldDescriptorProto;
            fromJSON(object: any): _261.FieldDescriptorProto;
            toJSON(message: _261.FieldDescriptorProto): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _261.FieldDescriptorProto;
        };
        FieldDescriptorProto_Type: typeof _261.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _261.FieldDescriptorProto_Label;
        OneofDescriptorProto: {
            encode(message: _261.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.OneofDescriptorProto;
            fromJSON(object: any): _261.OneofDescriptorProto;
            toJSON(message: _261.OneofDescriptorProto): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _261.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _261.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.EnumDescriptorProto;
            fromJSON(object: any): _261.EnumDescriptorProto;
            toJSON(message: _261.EnumDescriptorProto): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _261.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _261.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _261.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _261.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _261.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _261.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.EnumValueDescriptorProto;
            fromJSON(object: any): _261.EnumValueDescriptorProto;
            toJSON(message: _261.EnumValueDescriptorProto): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _261.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _261.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.ServiceDescriptorProto;
            fromJSON(object: any): _261.ServiceDescriptorProto;
            toJSON(message: _261.ServiceDescriptorProto): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _261.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _261.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.MethodDescriptorProto;
            fromJSON(object: any): _261.MethodDescriptorProto;
            toJSON(message: _261.MethodDescriptorProto): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _261.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _261.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.FileOptions;
            fromJSON(object: any): _261.FileOptions;
            toJSON(message: _261.FileOptions): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _261.FileOptions;
        };
        FileOptions_OptimizeMode: typeof _261.FileOptions_OptimizeMode;
        MessageOptions: {
            encode(message: _261.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.MessageOptions;
            fromJSON(object: any): _261.MessageOptions;
            toJSON(message: _261.MessageOptions): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _261.MessageOptions;
        };
        FieldOptions: {
            encode(message: _261.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.FieldOptions;
            fromJSON(object: any): _261.FieldOptions;
            toJSON(message: _261.FieldOptions): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _261.FieldOptions;
        };
        FieldOptions_CType: typeof _261.FieldOptions_CType;
        FieldOptions_JSType: typeof _261.FieldOptions_JSType;
        OneofOptions: {
            encode(message: _261.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.OneofOptions;
            fromJSON(object: any): _261.OneofOptions;
            toJSON(message: _261.OneofOptions): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _261.OneofOptions;
        };
        EnumOptions: {
            encode(message: _261.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.EnumOptions;
            fromJSON(object: any): _261.EnumOptions;
            toJSON(message: _261.EnumOptions): unknown;
            fromPartial<I_40 extends unknown>(object: I_40): _261.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _261.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.EnumValueOptions;
            fromJSON(object: any): _261.EnumValueOptions;
            toJSON(message: _261.EnumValueOptions): unknown;
            fromPartial<I_41 extends unknown>(object: I_41): _261.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _261.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.ServiceOptions;
            fromJSON(object: any): _261.ServiceOptions;
            toJSON(message: _261.ServiceOptions): unknown;
            fromPartial<I_42 extends unknown>(object: I_42): _261.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _261.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.MethodOptions;
            fromJSON(object: any): _261.MethodOptions;
            toJSON(message: _261.MethodOptions): unknown;
            fromPartial<I_43 extends unknown>(object: I_43): _261.MethodOptions;
        };
        MethodOptions_IdempotencyLevel: typeof _261.MethodOptions_IdempotencyLevel;
        UninterpretedOption: {
            encode(message: _261.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.UninterpretedOption;
            fromJSON(object: any): _261.UninterpretedOption;
            toJSON(message: _261.UninterpretedOption): unknown;
            fromPartial<I_44 extends unknown>(object: I_44): _261.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _261.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.UninterpretedOption_NamePart;
            fromJSON(object: any): _261.UninterpretedOption_NamePart;
            toJSON(message: _261.UninterpretedOption_NamePart): unknown;
            fromPartial<I_45 extends unknown>(object: I_45): _261.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _261.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.SourceCodeInfo;
            fromJSON(object: any): _261.SourceCodeInfo;
            toJSON(message: _261.SourceCodeInfo): unknown;
            fromPartial<I_46 extends unknown>(object: I_46): _261.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _261.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.SourceCodeInfo_Location;
            fromJSON(object: any): _261.SourceCodeInfo_Location;
            toJSON(message: _261.SourceCodeInfo_Location): unknown;
            fromPartial<I_47 extends unknown>(object: I_47): _261.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _261.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.GeneratedCodeInfo;
            fromJSON(object: any): _261.GeneratedCodeInfo;
            toJSON(message: _261.GeneratedCodeInfo): unknown;
            fromPartial<I_48 extends unknown>(object: I_48): _261.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _261.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _261.GeneratedCodeInfo_Annotation;
            toJSON(message: _261.GeneratedCodeInfo_Annotation): unknown;
            fromPartial<I_49 extends unknown>(object: I_49): _261.GeneratedCodeInfo_Annotation;
        };
        Api: {
            encode(message: _260.Api, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.Api;
            fromJSON(object: any): _260.Api;
            toJSON(message: _260.Api): unknown;
            fromPartial<I_50 extends unknown>(object: I_50): _260.Api;
        };
        Method: {
            encode(message: _260.Method, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.Method;
            fromJSON(object: any): _260.Method;
            toJSON(message: _260.Method): unknown;
            fromPartial<I_51 extends unknown>(object: I_51): _260.Method;
        };
        Mixin: {
            encode(message: _260.Mixin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.Mixin;
            fromJSON(object: any): _260.Mixin;
            toJSON(message: _260.Mixin): unknown;
            fromPartial<I_52 extends unknown>(object: I_52): _260.Mixin;
        };
        Any: {
            encode(message: _259.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.Any;
            fromJSON(object: any): _259.Any;
            toJSON(message: _259.Any): unknown;
            fromPartial<I_53 extends unknown>(object: I_53): _259.Any;
        };
    };
    const rpc: {
        Status: {
            encode(message: _272.Status, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.Status;
            fromJSON(object: any): _272.Status;
            toJSON(message: _272.Status): unknown;
            fromPartial<I extends unknown>(object: I): _272.Status;
        };
        RetryInfo: {
            encode(message: _271.RetryInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.RetryInfo;
            fromJSON(object: any): _271.RetryInfo;
            toJSON(message: _271.RetryInfo): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _271.RetryInfo;
        };
        DebugInfo: {
            encode(message: _271.DebugInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.DebugInfo;
            fromJSON(object: any): _271.DebugInfo;
            toJSON(message: _271.DebugInfo): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _271.DebugInfo;
        };
        QuotaFailure: {
            encode(message: _271.QuotaFailure, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.QuotaFailure;
            fromJSON(object: any): _271.QuotaFailure;
            toJSON(message: _271.QuotaFailure): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _271.QuotaFailure;
        };
        QuotaFailure_Violation: {
            encode(message: _271.QuotaFailure_Violation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.QuotaFailure_Violation;
            fromJSON(object: any): _271.QuotaFailure_Violation;
            toJSON(message: _271.QuotaFailure_Violation): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _271.QuotaFailure_Violation;
        };
        ErrorInfo: {
            encode(message: _271.ErrorInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.ErrorInfo;
            fromJSON(object: any): _271.ErrorInfo;
            toJSON(message: _271.ErrorInfo): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _271.ErrorInfo;
        };
        ErrorInfo_MetadataEntry: {
            encode(message: _271.ErrorInfo_MetadataEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.ErrorInfo_MetadataEntry;
            fromJSON(object: any): _271.ErrorInfo_MetadataEntry;
            toJSON(message: _271.ErrorInfo_MetadataEntry): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _271.ErrorInfo_MetadataEntry;
        };
        PreconditionFailure: {
            encode(message: _271.PreconditionFailure, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.PreconditionFailure;
            fromJSON(object: any): _271.PreconditionFailure;
            toJSON(message: _271.PreconditionFailure): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _271.PreconditionFailure;
        };
        PreconditionFailure_Violation: {
            encode(message: _271.PreconditionFailure_Violation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.PreconditionFailure_Violation;
            fromJSON(object: any): _271.PreconditionFailure_Violation;
            toJSON(message: _271.PreconditionFailure_Violation): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _271.PreconditionFailure_Violation;
        };
        BadRequest: {
            encode(message: _271.BadRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.BadRequest;
            fromJSON(object: any): _271.BadRequest;
            toJSON(message: _271.BadRequest): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _271.BadRequest;
        };
        BadRequest_FieldViolation: {
            encode(message: _271.BadRequest_FieldViolation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.BadRequest_FieldViolation;
            fromJSON(object: any): _271.BadRequest_FieldViolation;
            toJSON(message: _271.BadRequest_FieldViolation): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _271.BadRequest_FieldViolation;
        };
        RequestInfo: {
            encode(message: _271.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.RequestInfo;
            fromJSON(object: any): _271.RequestInfo;
            toJSON(message: _271.RequestInfo): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _271.RequestInfo;
        };
        ResourceInfo: {
            encode(message: _271.ResourceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.ResourceInfo;
            fromJSON(object: any): _271.ResourceInfo;
            toJSON(message: _271.ResourceInfo): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _271.ResourceInfo;
        };
        Help: {
            encode(message: _271.Help, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.Help;
            fromJSON(object: any): _271.Help;
            toJSON(message: _271.Help): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _271.Help;
        };
        Help_Link: {
            encode(message: _271.Help_Link, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.Help_Link;
            fromJSON(object: any): _271.Help_Link;
            toJSON(message: _271.Help_Link): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _271.Help_Link;
        };
        LocalizedMessage: {
            encode(message: _271.LocalizedMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.LocalizedMessage;
            fromJSON(object: any): _271.LocalizedMessage;
            toJSON(message: _271.LocalizedMessage): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _271.LocalizedMessage;
        };
        codeFromJSON(object: any): _270.Code;
        codeToJSON(object: _270.Code): string;
        Code: typeof _270.Code;
    };
}
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgTransfer: {
                    encode(message: _276.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.MsgTransfer;
                    fromJSON(object: any): _276.MsgTransfer;
                    toJSON(message: _276.MsgTransfer): unknown;
                    fromPartial<I extends unknown>(object: I): _276.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _276.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.MsgTransferResponse;
                    fromJSON(_: any): _276.MsgTransferResponse;
                    toJSON(_: _276.MsgTransferResponse): unknown;
                    fromPartial<I_1 extends unknown>(_: I_1): _276.MsgTransferResponse;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _276.MsgTransfer) => {
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
                        }) => _276.MsgTransfer;
                    };
                };
                encoded: {
                    transfer(value: _276.MsgTransfer): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                fromJSON: {
                    transfer(value: any): {
                        typeUrl: string;
                        value: _276.MsgTransfer;
                    };
                };
                toJSON: {
                    transfer(value: _276.MsgTransfer): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                json: {
                    transfer(value: _276.MsgTransfer): {
                        typeUrl: string;
                        value: _276.MsgTransfer;
                    };
                };
                messages: {
                    transfer(value: _276.MsgTransfer): {
                        typeUrl: string;
                        value: _276.MsgTransfer;
                    };
                };
                DenomTrace: {
                    encode(message: _275.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.DenomTrace;
                    fromJSON(object: any): _275.DenomTrace;
                    toJSON(message: _275.DenomTrace): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _275.DenomTrace;
                };
                Params: {
                    encode(message: _275.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.Params;
                    fromJSON(object: any): _275.Params;
                    toJSON(message: _275.Params): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _275.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _274.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _274.QueryDenomTraceRequest;
                    fromJSON(object: any): _274.QueryDenomTraceRequest;
                    toJSON(message: _274.QueryDenomTraceRequest): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _274.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _274.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _274.QueryDenomTraceResponse;
                    fromJSON(object: any): _274.QueryDenomTraceResponse;
                    toJSON(message: _274.QueryDenomTraceResponse): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _274.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _274.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _274.QueryDenomTracesRequest;
                    fromJSON(object: any): _274.QueryDenomTracesRequest;
                    toJSON(message: _274.QueryDenomTracesRequest): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _274.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _274.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _274.QueryDenomTracesResponse;
                    fromJSON(object: any): _274.QueryDenomTracesResponse;
                    toJSON(message: _274.QueryDenomTracesResponse): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _274.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _274.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _274.QueryParamsRequest;
                    fromJSON(_: any): _274.QueryParamsRequest;
                    toJSON(_: _274.QueryParamsRequest): unknown;
                    fromPartial<I_8 extends unknown>(_: I_8): _274.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _274.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _274.QueryParamsResponse;
                    fromJSON(object: any): _274.QueryParamsResponse;
                    toJSON(message: _274.QueryParamsResponse): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _274.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _273.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.GenesisState;
                    fromJSON(object: any): _273.GenesisState;
                    toJSON(message: _273.GenesisState): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _273.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _285.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.FungibleTokenPacketData;
                    fromJSON(object: any): _285.FungibleTokenPacketData;
                    toJSON(message: _285.FungibleTokenPacketData): unknown;
                    fromPartial<I extends unknown>(object: I): _285.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgChannelOpenInit: {
                    encode(message: _289.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MsgChannelOpenInit;
                    fromJSON(object: any): _289.MsgChannelOpenInit;
                    toJSON(message: _289.MsgChannelOpenInit): unknown;
                    fromPartial<I extends unknown>(object: I): _289.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _289.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _289.MsgChannelOpenInitResponse;
                    toJSON(_: _289.MsgChannelOpenInitResponse): unknown;
                    fromPartial<I_1 extends unknown>(_: I_1): _289.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _289.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MsgChannelOpenTry;
                    fromJSON(object: any): _289.MsgChannelOpenTry;
                    toJSON(message: _289.MsgChannelOpenTry): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _289.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _289.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _289.MsgChannelOpenTryResponse;
                    toJSON(_: _289.MsgChannelOpenTryResponse): unknown;
                    fromPartial<I_3 extends unknown>(_: I_3): _289.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _289.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MsgChannelOpenAck;
                    fromJSON(object: any): _289.MsgChannelOpenAck;
                    toJSON(message: _289.MsgChannelOpenAck): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _289.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _289.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _289.MsgChannelOpenAckResponse;
                    toJSON(_: _289.MsgChannelOpenAckResponse): unknown;
                    fromPartial<I_5 extends unknown>(_: I_5): _289.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _289.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MsgChannelOpenConfirm;
                    fromJSON(object: any): _289.MsgChannelOpenConfirm;
                    toJSON(message: _289.MsgChannelOpenConfirm): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _289.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _289.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _289.MsgChannelOpenConfirmResponse;
                    toJSON(_: _289.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial<I_7 extends unknown>(_: I_7): _289.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _289.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MsgChannelCloseInit;
                    fromJSON(object: any): _289.MsgChannelCloseInit;
                    toJSON(message: _289.MsgChannelCloseInit): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _289.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _289.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _289.MsgChannelCloseInitResponse;
                    toJSON(_: _289.MsgChannelCloseInitResponse): unknown;
                    fromPartial<I_9 extends unknown>(_: I_9): _289.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _289.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MsgChannelCloseConfirm;
                    fromJSON(object: any): _289.MsgChannelCloseConfirm;
                    toJSON(message: _289.MsgChannelCloseConfirm): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _289.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _289.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _289.MsgChannelCloseConfirmResponse;
                    toJSON(_: _289.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial<I_11 extends unknown>(_: I_11): _289.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _289.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MsgRecvPacket;
                    fromJSON(object: any): _289.MsgRecvPacket;
                    toJSON(message: _289.MsgRecvPacket): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _289.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _289.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MsgRecvPacketResponse;
                    fromJSON(_: any): _289.MsgRecvPacketResponse;
                    toJSON(_: _289.MsgRecvPacketResponse): unknown;
                    fromPartial<I_13 extends unknown>(_: I_13): _289.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _289.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MsgTimeout;
                    fromJSON(object: any): _289.MsgTimeout;
                    toJSON(message: _289.MsgTimeout): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _289.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _289.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MsgTimeoutResponse;
                    fromJSON(_: any): _289.MsgTimeoutResponse;
                    toJSON(_: _289.MsgTimeoutResponse): unknown;
                    fromPartial<I_15 extends unknown>(_: I_15): _289.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _289.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MsgTimeoutOnClose;
                    fromJSON(object: any): _289.MsgTimeoutOnClose;
                    toJSON(message: _289.MsgTimeoutOnClose): unknown;
                    fromPartial<I_16 extends unknown>(object: I_16): _289.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _289.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _289.MsgTimeoutOnCloseResponse;
                    toJSON(_: _289.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial<I_17 extends unknown>(_: I_17): _289.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _289.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MsgAcknowledgement;
                    fromJSON(object: any): _289.MsgAcknowledgement;
                    toJSON(message: _289.MsgAcknowledgement): unknown;
                    fromPartial<I_18 extends unknown>(object: I_18): _289.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _289.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MsgAcknowledgementResponse;
                    fromJSON(_: any): _289.MsgAcknowledgementResponse;
                    toJSON(_: _289.MsgAcknowledgementResponse): unknown;
                    fromPartial<I_19 extends unknown>(_: I_19): _289.MsgAcknowledgementResponse;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _289.MsgChannelOpenInit) => {
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
                        }) => _289.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _289.MsgChannelOpenTry) => {
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
                        }) => _289.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _289.MsgChannelOpenAck) => {
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
                        }) => _289.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _289.MsgChannelOpenConfirm) => {
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
                        }) => _289.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _289.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _289.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _289.MsgChannelCloseConfirm) => {
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
                        }) => _289.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _289.MsgRecvPacket) => {
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
                        }) => _289.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _289.MsgTimeout) => {
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
                        }) => _289.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _289.MsgTimeoutOnClose) => {
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
                        }) => _289.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _289.MsgAcknowledgement) => {
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
                        }) => _289.MsgAcknowledgement;
                    };
                };
                encoded: {
                    channelOpenInit(value: _289.MsgChannelOpenInit): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelOpenTry(value: _289.MsgChannelOpenTry): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelOpenAck(value: _289.MsgChannelOpenAck): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelOpenConfirm(value: _289.MsgChannelOpenConfirm): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelCloseInit(value: _289.MsgChannelCloseInit): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    channelCloseConfirm(value: _289.MsgChannelCloseConfirm): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    recvPacket(value: _289.MsgRecvPacket): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    timeout(value: _289.MsgTimeout): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    timeoutOnClose(value: _289.MsgTimeoutOnClose): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    acknowledgement(value: _289.MsgAcknowledgement): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                fromJSON: {
                    channelOpenInit(value: any): {
                        typeUrl: string;
                        value: _289.MsgChannelOpenInit;
                    };
                    channelOpenTry(value: any): {
                        typeUrl: string;
                        value: _289.MsgChannelOpenTry;
                    };
                    channelOpenAck(value: any): {
                        typeUrl: string;
                        value: _289.MsgChannelOpenAck;
                    };
                    channelOpenConfirm(value: any): {
                        typeUrl: string;
                        value: _289.MsgChannelOpenConfirm;
                    };
                    channelCloseInit(value: any): {
                        typeUrl: string;
                        value: _289.MsgChannelCloseInit;
                    };
                    channelCloseConfirm(value: any): {
                        typeUrl: string;
                        value: _289.MsgChannelCloseConfirm;
                    };
                    recvPacket(value: any): {
                        typeUrl: string;
                        value: _289.MsgRecvPacket;
                    };
                    timeout(value: any): {
                        typeUrl: string;
                        value: _289.MsgTimeout;
                    };
                    timeoutOnClose(value: any): {
                        typeUrl: string;
                        value: _289.MsgTimeoutOnClose;
                    };
                    acknowledgement(value: any): {
                        typeUrl: string;
                        value: _289.MsgAcknowledgement;
                    };
                };
                toJSON: {
                    channelOpenInit(value: _289.MsgChannelOpenInit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelOpenTry(value: _289.MsgChannelOpenTry): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelOpenAck(value: _289.MsgChannelOpenAck): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelOpenConfirm(value: _289.MsgChannelOpenConfirm): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelCloseInit(value: _289.MsgChannelCloseInit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    channelCloseConfirm(value: _289.MsgChannelCloseConfirm): {
                        typeUrl: string;
                        value: unknown;
                    };
                    recvPacket(value: _289.MsgRecvPacket): {
                        typeUrl: string;
                        value: unknown;
                    };
                    timeout(value: _289.MsgTimeout): {
                        typeUrl: string;
                        value: unknown;
                    };
                    timeoutOnClose(value: _289.MsgTimeoutOnClose): {
                        typeUrl: string;
                        value: unknown;
                    };
                    acknowledgement(value: _289.MsgAcknowledgement): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                json: {
                    channelOpenInit(value: _289.MsgChannelOpenInit): {
                        typeUrl: string;
                        value: _289.MsgChannelOpenInit;
                    };
                    channelOpenTry(value: _289.MsgChannelOpenTry): {
                        typeUrl: string;
                        value: _289.MsgChannelOpenTry;
                    };
                    channelOpenAck(value: _289.MsgChannelOpenAck): {
                        typeUrl: string;
                        value: _289.MsgChannelOpenAck;
                    };
                    channelOpenConfirm(value: _289.MsgChannelOpenConfirm): {
                        typeUrl: string;
                        value: _289.MsgChannelOpenConfirm;
                    };
                    channelCloseInit(value: _289.MsgChannelCloseInit): {
                        typeUrl: string;
                        value: _289.MsgChannelCloseInit;
                    };
                    channelCloseConfirm(value: _289.MsgChannelCloseConfirm): {
                        typeUrl: string;
                        value: _289.MsgChannelCloseConfirm;
                    };
                    recvPacket(value: _289.MsgRecvPacket): {
                        typeUrl: string;
                        value: _289.MsgRecvPacket;
                    };
                    timeout(value: _289.MsgTimeout): {
                        typeUrl: string;
                        value: _289.MsgTimeout;
                    };
                    timeoutOnClose(value: _289.MsgTimeoutOnClose): {
                        typeUrl: string;
                        value: _289.MsgTimeoutOnClose;
                    };
                    acknowledgement(value: _289.MsgAcknowledgement): {
                        typeUrl: string;
                        value: _289.MsgAcknowledgement;
                    };
                };
                messages: {
                    channelOpenInit(value: _289.MsgChannelOpenInit): {
                        typeUrl: string;
                        value: _289.MsgChannelOpenInit;
                    };
                    channelOpenTry(value: _289.MsgChannelOpenTry): {
                        typeUrl: string;
                        value: _289.MsgChannelOpenTry;
                    };
                    channelOpenAck(value: _289.MsgChannelOpenAck): {
                        typeUrl: string;
                        value: _289.MsgChannelOpenAck;
                    };
                    channelOpenConfirm(value: _289.MsgChannelOpenConfirm): {
                        typeUrl: string;
                        value: _289.MsgChannelOpenConfirm;
                    };
                    channelCloseInit(value: _289.MsgChannelCloseInit): {
                        typeUrl: string;
                        value: _289.MsgChannelCloseInit;
                    };
                    channelCloseConfirm(value: _289.MsgChannelCloseConfirm): {
                        typeUrl: string;
                        value: _289.MsgChannelCloseConfirm;
                    };
                    recvPacket(value: _289.MsgRecvPacket): {
                        typeUrl: string;
                        value: _289.MsgRecvPacket;
                    };
                    timeout(value: _289.MsgTimeout): {
                        typeUrl: string;
                        value: _289.MsgTimeout;
                    };
                    timeoutOnClose(value: _289.MsgTimeoutOnClose): {
                        typeUrl: string;
                        value: _289.MsgTimeoutOnClose;
                    };
                    acknowledgement(value: _289.MsgAcknowledgement): {
                        typeUrl: string;
                        value: _289.MsgAcknowledgement;
                    };
                };
                QueryChannelRequest: {
                    encode(message: _288.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryChannelRequest;
                    fromJSON(object: any): _288.QueryChannelRequest;
                    toJSON(message: _288.QueryChannelRequest): unknown;
                    fromPartial<I_20 extends unknown>(object: I_20): _288.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _288.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryChannelResponse;
                    fromJSON(object: any): _288.QueryChannelResponse;
                    toJSON(message: _288.QueryChannelResponse): unknown;
                    fromPartial<I_21 extends unknown>(object: I_21): _288.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _288.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryChannelsRequest;
                    fromJSON(object: any): _288.QueryChannelsRequest;
                    toJSON(message: _288.QueryChannelsRequest): unknown;
                    fromPartial<I_22 extends unknown>(object: I_22): _288.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _288.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryChannelsResponse;
                    fromJSON(object: any): _288.QueryChannelsResponse;
                    toJSON(message: _288.QueryChannelsResponse): unknown;
                    fromPartial<I_23 extends unknown>(object: I_23): _288.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _288.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _288.QueryConnectionChannelsRequest;
                    toJSON(message: _288.QueryConnectionChannelsRequest): unknown;
                    fromPartial<I_24 extends unknown>(object: I_24): _288.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _288.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _288.QueryConnectionChannelsResponse;
                    toJSON(message: _288.QueryConnectionChannelsResponse): unknown;
                    fromPartial<I_25 extends unknown>(object: I_25): _288.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _288.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryChannelClientStateRequest;
                    fromJSON(object: any): _288.QueryChannelClientStateRequest;
                    toJSON(message: _288.QueryChannelClientStateRequest): unknown;
                    fromPartial<I_26 extends unknown>(object: I_26): _288.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _288.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryChannelClientStateResponse;
                    fromJSON(object: any): _288.QueryChannelClientStateResponse;
                    toJSON(message: _288.QueryChannelClientStateResponse): unknown;
                    fromPartial<I_27 extends unknown>(object: I_27): _288.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _288.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _288.QueryChannelConsensusStateRequest;
                    toJSON(message: _288.QueryChannelConsensusStateRequest): unknown;
                    fromPartial<I_28 extends unknown>(object: I_28): _288.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _288.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _288.QueryChannelConsensusStateResponse;
                    toJSON(message: _288.QueryChannelConsensusStateResponse): unknown;
                    fromPartial<I_29 extends unknown>(object: I_29): _288.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _288.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _288.QueryPacketCommitmentRequest;
                    toJSON(message: _288.QueryPacketCommitmentRequest): unknown;
                    fromPartial<I_30 extends unknown>(object: I_30): _288.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _288.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _288.QueryPacketCommitmentResponse;
                    toJSON(message: _288.QueryPacketCommitmentResponse): unknown;
                    fromPartial<I_31 extends unknown>(object: I_31): _288.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _288.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _288.QueryPacketCommitmentsRequest;
                    toJSON(message: _288.QueryPacketCommitmentsRequest): unknown;
                    fromPartial<I_32 extends unknown>(object: I_32): _288.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _288.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _288.QueryPacketCommitmentsResponse;
                    toJSON(message: _288.QueryPacketCommitmentsResponse): unknown;
                    fromPartial<I_33 extends unknown>(object: I_33): _288.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _288.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryPacketReceiptRequest;
                    fromJSON(object: any): _288.QueryPacketReceiptRequest;
                    toJSON(message: _288.QueryPacketReceiptRequest): unknown;
                    fromPartial<I_34 extends unknown>(object: I_34): _288.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _288.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryPacketReceiptResponse;
                    fromJSON(object: any): _288.QueryPacketReceiptResponse;
                    toJSON(message: _288.QueryPacketReceiptResponse): unknown;
                    fromPartial<I_35 extends unknown>(object: I_35): _288.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _288.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _288.QueryPacketAcknowledgementRequest;
                    toJSON(message: _288.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial<I_36 extends unknown>(object: I_36): _288.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _288.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _288.QueryPacketAcknowledgementResponse;
                    toJSON(message: _288.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial<I_37 extends unknown>(object: I_37): _288.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _288.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _288.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _288.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial<I_38 extends unknown>(object: I_38): _288.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _288.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _288.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _288.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial<I_39 extends unknown>(object: I_39): _288.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _288.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _288.QueryUnreceivedPacketsRequest;
                    toJSON(message: _288.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial<I_40 extends unknown>(object: I_40): _288.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _288.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _288.QueryUnreceivedPacketsResponse;
                    toJSON(message: _288.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial<I_41 extends unknown>(object: I_41): _288.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _288.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _288.QueryUnreceivedAcksRequest;
                    toJSON(message: _288.QueryUnreceivedAcksRequest): unknown;
                    fromPartial<I_42 extends unknown>(object: I_42): _288.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _288.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _288.QueryUnreceivedAcksResponse;
                    toJSON(message: _288.QueryUnreceivedAcksResponse): unknown;
                    fromPartial<I_43 extends unknown>(object: I_43): _288.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _288.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _288.QueryNextSequenceReceiveRequest;
                    toJSON(message: _288.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial<I_44 extends unknown>(object: I_44): _288.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _288.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _288.QueryNextSequenceReceiveResponse;
                    toJSON(message: _288.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial<I_45 extends unknown>(object: I_45): _288.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _287.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _287.GenesisState;
                    fromJSON(object: any): _287.GenesisState;
                    toJSON(message: _287.GenesisState): unknown;
                    fromPartial<I_46 extends unknown>(object: I_46): _287.GenesisState;
                };
                PacketSequence: {
                    encode(message: _287.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _287.PacketSequence;
                    fromJSON(object: any): _287.PacketSequence;
                    toJSON(message: _287.PacketSequence): unknown;
                    fromPartial<I_47 extends unknown>(object: I_47): _287.PacketSequence;
                };
                stateFromJSON(object: any): _286.State;
                stateToJSON(object: _286.State): string;
                orderFromJSON(object: any): _286.Order;
                orderToJSON(object: _286.Order): string;
                State: typeof _286.State;
                Order: typeof _286.Order;
                Channel: {
                    encode(message: _286.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.Channel;
                    fromJSON(object: any): _286.Channel;
                    toJSON(message: _286.Channel): unknown;
                    fromPartial<I_48 extends unknown>(object: I_48): _286.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _286.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.IdentifiedChannel;
                    fromJSON(object: any): _286.IdentifiedChannel;
                    toJSON(message: _286.IdentifiedChannel): unknown;
                    fromPartial<I_49 extends unknown>(object: I_49): _286.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _286.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.Counterparty;
                    fromJSON(object: any): _286.Counterparty;
                    toJSON(message: _286.Counterparty): unknown;
                    fromPartial<I_50 extends unknown>(object: I_50): _286.Counterparty;
                };
                Packet: {
                    encode(message: _286.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.Packet;
                    fromJSON(object: any): _286.Packet;
                    toJSON(message: _286.Packet): unknown;
                    fromPartial<I_51 extends unknown>(object: I_51): _286.Packet;
                };
                PacketState: {
                    encode(message: _286.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.PacketState;
                    fromJSON(object: any): _286.PacketState;
                    toJSON(message: _286.PacketState): unknown;
                    fromPartial<I_52 extends unknown>(object: I_52): _286.PacketState;
                };
                Acknowledgement: {
                    encode(message: _286.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.Acknowledgement;
                    fromJSON(object: any): _286.Acknowledgement;
                    toJSON(message: _286.Acknowledgement): unknown;
                    fromPartial<I_53 extends unknown>(object: I_53): _286.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgCreateClient: {
                    encode(message: _301.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.MsgCreateClient;
                    fromJSON(object: any): _301.MsgCreateClient;
                    toJSON(message: _301.MsgCreateClient): unknown;
                    fromPartial<I extends unknown>(object: I): _301.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _301.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.MsgCreateClientResponse;
                    fromJSON(_: any): _301.MsgCreateClientResponse;
                    toJSON(_: _301.MsgCreateClientResponse): unknown;
                    fromPartial<I_1 extends unknown>(_: I_1): _301.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _301.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.MsgUpdateClient;
                    fromJSON(object: any): _301.MsgUpdateClient;
                    toJSON(message: _301.MsgUpdateClient): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _301.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _301.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.MsgUpdateClientResponse;
                    fromJSON(_: any): _301.MsgUpdateClientResponse;
                    toJSON(_: _301.MsgUpdateClientResponse): unknown;
                    fromPartial<I_3 extends unknown>(_: I_3): _301.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _301.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.MsgUpgradeClient;
                    fromJSON(object: any): _301.MsgUpgradeClient;
                    toJSON(message: _301.MsgUpgradeClient): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _301.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _301.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.MsgUpgradeClientResponse;
                    fromJSON(_: any): _301.MsgUpgradeClientResponse;
                    toJSON(_: _301.MsgUpgradeClientResponse): unknown;
                    fromPartial<I_5 extends unknown>(_: I_5): _301.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _301.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _301.MsgSubmitMisbehaviour;
                    toJSON(message: _301.MsgSubmitMisbehaviour): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _301.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _301.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _301.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _301.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial<I_7 extends unknown>(_: I_7): _301.MsgSubmitMisbehaviourResponse;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _301.MsgCreateClient) => {
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
                        }) => _301.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _301.MsgUpdateClient) => {
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
                        }) => _301.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _301.MsgUpgradeClient) => {
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
                        }) => _301.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _301.MsgSubmitMisbehaviour) => {
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
                        }) => _301.MsgSubmitMisbehaviour;
                    };
                };
                encoded: {
                    createClient(value: _301.MsgCreateClient): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    updateClient(value: _301.MsgUpdateClient): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    upgradeClient(value: _301.MsgUpgradeClient): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    submitMisbehaviour(value: _301.MsgSubmitMisbehaviour): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                fromJSON: {
                    createClient(value: any): {
                        typeUrl: string;
                        value: _301.MsgCreateClient;
                    };
                    updateClient(value: any): {
                        typeUrl: string;
                        value: _301.MsgUpdateClient;
                    };
                    upgradeClient(value: any): {
                        typeUrl: string;
                        value: _301.MsgUpgradeClient;
                    };
                    submitMisbehaviour(value: any): {
                        typeUrl: string;
                        value: _301.MsgSubmitMisbehaviour;
                    };
                };
                toJSON: {
                    createClient(value: _301.MsgCreateClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClient(value: _301.MsgUpdateClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                    upgradeClient(value: _301.MsgUpgradeClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitMisbehaviour(value: _301.MsgSubmitMisbehaviour): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                json: {
                    createClient(value: _301.MsgCreateClient): {
                        typeUrl: string;
                        value: _301.MsgCreateClient;
                    };
                    updateClient(value: _301.MsgUpdateClient): {
                        typeUrl: string;
                        value: _301.MsgUpdateClient;
                    };
                    upgradeClient(value: _301.MsgUpgradeClient): {
                        typeUrl: string;
                        value: _301.MsgUpgradeClient;
                    };
                    submitMisbehaviour(value: _301.MsgSubmitMisbehaviour): {
                        typeUrl: string;
                        value: _301.MsgSubmitMisbehaviour;
                    };
                };
                messages: {
                    createClient(value: _301.MsgCreateClient): {
                        typeUrl: string;
                        value: _301.MsgCreateClient;
                    };
                    updateClient(value: _301.MsgUpdateClient): {
                        typeUrl: string;
                        value: _301.MsgUpdateClient;
                    };
                    upgradeClient(value: _301.MsgUpgradeClient): {
                        typeUrl: string;
                        value: _301.MsgUpgradeClient;
                    };
                    submitMisbehaviour(value: _301.MsgSubmitMisbehaviour): {
                        typeUrl: string;
                        value: _301.MsgSubmitMisbehaviour;
                    };
                };
                QueryClientStateRequest: {
                    encode(message: _300.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.QueryClientStateRequest;
                    fromJSON(object: any): _300.QueryClientStateRequest;
                    toJSON(message: _300.QueryClientStateRequest): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _300.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _300.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.QueryClientStateResponse;
                    fromJSON(object: any): _300.QueryClientStateResponse;
                    toJSON(message: _300.QueryClientStateResponse): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _300.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _300.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.QueryClientStatesRequest;
                    fromJSON(object: any): _300.QueryClientStatesRequest;
                    toJSON(message: _300.QueryClientStatesRequest): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _300.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _300.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.QueryClientStatesResponse;
                    fromJSON(object: any): _300.QueryClientStatesResponse;
                    toJSON(message: _300.QueryClientStatesResponse): unknown;
                    fromPartial<I_11 extends unknown>(object: I_11): _300.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _300.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.QueryConsensusStateRequest;
                    fromJSON(object: any): _300.QueryConsensusStateRequest;
                    toJSON(message: _300.QueryConsensusStateRequest): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _300.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _300.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.QueryConsensusStateResponse;
                    fromJSON(object: any): _300.QueryConsensusStateResponse;
                    toJSON(message: _300.QueryConsensusStateResponse): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _300.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _300.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.QueryConsensusStatesRequest;
                    fromJSON(object: any): _300.QueryConsensusStatesRequest;
                    toJSON(message: _300.QueryConsensusStatesRequest): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _300.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _300.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.QueryConsensusStatesResponse;
                    fromJSON(object: any): _300.QueryConsensusStatesResponse;
                    toJSON(message: _300.QueryConsensusStatesResponse): unknown;
                    fromPartial<I_15 extends unknown>(object: I_15): _300.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _300.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.QueryClientStatusRequest;
                    fromJSON(object: any): _300.QueryClientStatusRequest;
                    toJSON(message: _300.QueryClientStatusRequest): unknown;
                    fromPartial<I_16 extends unknown>(object: I_16): _300.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _300.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.QueryClientStatusResponse;
                    fromJSON(object: any): _300.QueryClientStatusResponse;
                    toJSON(message: _300.QueryClientStatusResponse): unknown;
                    fromPartial<I_17 extends unknown>(object: I_17): _300.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _300.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.QueryClientParamsRequest;
                    fromJSON(_: any): _300.QueryClientParamsRequest;
                    toJSON(_: _300.QueryClientParamsRequest): unknown;
                    fromPartial<I_18 extends unknown>(_: I_18): _300.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _300.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.QueryClientParamsResponse;
                    fromJSON(object: any): _300.QueryClientParamsResponse;
                    toJSON(message: _300.QueryClientParamsResponse): unknown;
                    fromPartial<I_19 extends unknown>(object: I_19): _300.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _300.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _300.QueryUpgradedClientStateRequest;
                    toJSON(_: _300.QueryUpgradedClientStateRequest): unknown;
                    fromPartial<I_20 extends unknown>(_: I_20): _300.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _300.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _300.QueryUpgradedClientStateResponse;
                    toJSON(message: _300.QueryUpgradedClientStateResponse): unknown;
                    fromPartial<I_21 extends unknown>(object: I_21): _300.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _300.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _300.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _300.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial<I_22 extends unknown>(_: I_22): _300.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _300.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _300.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _300.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial<I_23 extends unknown>(object: I_23): _300.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _299.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _299.GenesisState;
                    fromJSON(object: any): _299.GenesisState;
                    toJSON(message: _299.GenesisState): unknown;
                    fromPartial<I_24 extends unknown>(object: I_24): _299.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _299.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _299.GenesisMetadata;
                    fromJSON(object: any): _299.GenesisMetadata;
                    toJSON(message: _299.GenesisMetadata): unknown;
                    fromPartial<I_25 extends unknown>(object: I_25): _299.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _299.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _299.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _299.IdentifiedGenesisMetadata;
                    toJSON(message: _299.IdentifiedGenesisMetadata): unknown;
                    fromPartial<I_26 extends unknown>(object: I_26): _299.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _298.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.IdentifiedClientState;
                    fromJSON(object: any): _298.IdentifiedClientState;
                    toJSON(message: _298.IdentifiedClientState): unknown;
                    fromPartial<I_27 extends unknown>(object: I_27): _298.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _298.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.ConsensusStateWithHeight;
                    fromJSON(object: any): _298.ConsensusStateWithHeight;
                    toJSON(message: _298.ConsensusStateWithHeight): unknown;
                    fromPartial<I_28 extends unknown>(object: I_28): _298.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _298.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.ClientConsensusStates;
                    fromJSON(object: any): _298.ClientConsensusStates;
                    toJSON(message: _298.ClientConsensusStates): unknown;
                    fromPartial<I_29 extends unknown>(object: I_29): _298.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _298.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.ClientUpdateProposal;
                    fromJSON(object: any): _298.ClientUpdateProposal;
                    toJSON(message: _298.ClientUpdateProposal): unknown;
                    fromPartial<I_30 extends unknown>(object: I_30): _298.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _298.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.UpgradeProposal;
                    fromJSON(object: any): _298.UpgradeProposal;
                    toJSON(message: _298.UpgradeProposal): unknown;
                    fromPartial<I_31 extends unknown>(object: I_31): _298.UpgradeProposal;
                };
                Height: {
                    encode(message: _298.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.Height;
                    fromJSON(object: any): _298.Height;
                    toJSON(message: _298.Height): unknown;
                    fromPartial<I_32 extends unknown>(object: I_32): _298.Height;
                };
                Params: {
                    encode(message: _298.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.Params;
                    fromJSON(object: any): _298.Params;
                    toJSON(message: _298.Params): unknown;
                    fromPartial<I_33 extends unknown>(object: I_33): _298.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _310.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.MerkleRoot;
                    fromJSON(object: any): _310.MerkleRoot;
                    toJSON(message: _310.MerkleRoot): unknown;
                    fromPartial<I extends unknown>(object: I): _310.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _310.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.MerklePrefix;
                    fromJSON(object: any): _310.MerklePrefix;
                    toJSON(message: _310.MerklePrefix): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _310.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _310.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.MerklePath;
                    fromJSON(object: any): _310.MerklePath;
                    toJSON(message: _310.MerklePath): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _310.MerklePath;
                };
                MerkleProof: {
                    encode(message: _310.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.MerkleProof;
                    fromJSON(object: any): _310.MerkleProof;
                    toJSON(message: _310.MerkleProof): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _310.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgConnectionOpenInit: {
                    encode(message: _314.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgConnectionOpenInit;
                    fromJSON(object: any): _314.MsgConnectionOpenInit;
                    toJSON(message: _314.MsgConnectionOpenInit): unknown;
                    fromPartial<I extends unknown>(object: I): _314.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _314.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _314.MsgConnectionOpenInitResponse;
                    toJSON(_: _314.MsgConnectionOpenInitResponse): unknown;
                    fromPartial<I_1 extends unknown>(_: I_1): _314.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _314.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgConnectionOpenTry;
                    fromJSON(object: any): _314.MsgConnectionOpenTry;
                    toJSON(message: _314.MsgConnectionOpenTry): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _314.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _314.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _314.MsgConnectionOpenTryResponse;
                    toJSON(_: _314.MsgConnectionOpenTryResponse): unknown;
                    fromPartial<I_3 extends unknown>(_: I_3): _314.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _314.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgConnectionOpenAck;
                    fromJSON(object: any): _314.MsgConnectionOpenAck;
                    toJSON(message: _314.MsgConnectionOpenAck): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _314.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _314.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _314.MsgConnectionOpenAckResponse;
                    toJSON(_: _314.MsgConnectionOpenAckResponse): unknown;
                    fromPartial<I_5 extends unknown>(_: I_5): _314.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _314.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _314.MsgConnectionOpenConfirm;
                    toJSON(message: _314.MsgConnectionOpenConfirm): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _314.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _314.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _314.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _314.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial<I_7 extends unknown>(_: I_7): _314.MsgConnectionOpenConfirmResponse;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _314.MsgConnectionOpenInit) => {
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
                        }) => _314.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _314.MsgConnectionOpenTry) => {
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
                        }) => _314.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _314.MsgConnectionOpenAck) => {
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
                        }) => _314.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _314.MsgConnectionOpenConfirm) => {
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
                        }) => _314.MsgConnectionOpenConfirm;
                    };
                };
                encoded: {
                    connectionOpenInit(value: _314.MsgConnectionOpenInit): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    connectionOpenTry(value: _314.MsgConnectionOpenTry): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    connectionOpenAck(value: _314.MsgConnectionOpenAck): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    connectionOpenConfirm(value: _314.MsgConnectionOpenConfirm): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                fromJSON: {
                    connectionOpenInit(value: any): {
                        typeUrl: string;
                        value: _314.MsgConnectionOpenInit;
                    };
                    connectionOpenTry(value: any): {
                        typeUrl: string;
                        value: _314.MsgConnectionOpenTry;
                    };
                    connectionOpenAck(value: any): {
                        typeUrl: string;
                        value: _314.MsgConnectionOpenAck;
                    };
                    connectionOpenConfirm(value: any): {
                        typeUrl: string;
                        value: _314.MsgConnectionOpenConfirm;
                    };
                };
                toJSON: {
                    connectionOpenInit(value: _314.MsgConnectionOpenInit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    connectionOpenTry(value: _314.MsgConnectionOpenTry): {
                        typeUrl: string;
                        value: unknown;
                    };
                    connectionOpenAck(value: _314.MsgConnectionOpenAck): {
                        typeUrl: string;
                        value: unknown;
                    };
                    connectionOpenConfirm(value: _314.MsgConnectionOpenConfirm): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                json: {
                    connectionOpenInit(value: _314.MsgConnectionOpenInit): {
                        typeUrl: string;
                        value: _314.MsgConnectionOpenInit;
                    };
                    connectionOpenTry(value: _314.MsgConnectionOpenTry): {
                        typeUrl: string;
                        value: _314.MsgConnectionOpenTry;
                    };
                    connectionOpenAck(value: _314.MsgConnectionOpenAck): {
                        typeUrl: string;
                        value: _314.MsgConnectionOpenAck;
                    };
                    connectionOpenConfirm(value: _314.MsgConnectionOpenConfirm): {
                        typeUrl: string;
                        value: _314.MsgConnectionOpenConfirm;
                    };
                };
                messages: {
                    connectionOpenInit(value: _314.MsgConnectionOpenInit): {
                        typeUrl: string;
                        value: _314.MsgConnectionOpenInit;
                    };
                    connectionOpenTry(value: _314.MsgConnectionOpenTry): {
                        typeUrl: string;
                        value: _314.MsgConnectionOpenTry;
                    };
                    connectionOpenAck(value: _314.MsgConnectionOpenAck): {
                        typeUrl: string;
                        value: _314.MsgConnectionOpenAck;
                    };
                    connectionOpenConfirm(value: _314.MsgConnectionOpenConfirm): {
                        typeUrl: string;
                        value: _314.MsgConnectionOpenConfirm;
                    };
                };
                QueryConnectionRequest: {
                    encode(message: _313.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.QueryConnectionRequest;
                    fromJSON(object: any): _313.QueryConnectionRequest;
                    toJSON(message: _313.QueryConnectionRequest): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _313.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _313.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.QueryConnectionResponse;
                    fromJSON(object: any): _313.QueryConnectionResponse;
                    toJSON(message: _313.QueryConnectionResponse): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _313.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _313.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.QueryConnectionsRequest;
                    fromJSON(object: any): _313.QueryConnectionsRequest;
                    toJSON(message: _313.QueryConnectionsRequest): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _313.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _313.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.QueryConnectionsResponse;
                    fromJSON(object: any): _313.QueryConnectionsResponse;
                    toJSON(message: _313.QueryConnectionsResponse): unknown;
                    fromPartial<I_11 extends unknown>(object: I_11): _313.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _313.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.QueryClientConnectionsRequest;
                    fromJSON(object: any): _313.QueryClientConnectionsRequest;
                    toJSON(message: _313.QueryClientConnectionsRequest): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _313.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _313.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.QueryClientConnectionsResponse;
                    fromJSON(object: any): _313.QueryClientConnectionsResponse;
                    toJSON(message: _313.QueryClientConnectionsResponse): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _313.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _313.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _313.QueryConnectionClientStateRequest;
                    toJSON(message: _313.QueryConnectionClientStateRequest): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _313.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _313.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _313.QueryConnectionClientStateResponse;
                    toJSON(message: _313.QueryConnectionClientStateResponse): unknown;
                    fromPartial<I_15 extends unknown>(object: I_15): _313.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _313.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _313.QueryConnectionConsensusStateRequest;
                    toJSON(message: _313.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial<I_16 extends unknown>(object: I_16): _313.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _313.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _313.QueryConnectionConsensusStateResponse;
                    toJSON(message: _313.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial<I_17 extends unknown>(object: I_17): _313.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _312.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _312.GenesisState;
                    fromJSON(object: any): _312.GenesisState;
                    toJSON(message: _312.GenesisState): unknown;
                    fromPartial<I_18 extends unknown>(object: I_18): _312.GenesisState;
                };
                stateFromJSON(object: any): _311.State;
                stateToJSON(object: _311.State): string;
                State: typeof _311.State;
                ConnectionEnd: {
                    encode(message: _311.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.ConnectionEnd;
                    fromJSON(object: any): _311.ConnectionEnd;
                    toJSON(message: _311.ConnectionEnd): unknown;
                    fromPartial<I_19 extends unknown>(object: I_19): _311.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _311.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.IdentifiedConnection;
                    fromJSON(object: any): _311.IdentifiedConnection;
                    toJSON(message: _311.IdentifiedConnection): unknown;
                    fromPartial<I_20 extends unknown>(object: I_20): _311.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _311.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.Counterparty;
                    fromJSON(object: any): _311.Counterparty;
                    toJSON(message: _311.Counterparty): unknown;
                    fromPartial<I_21 extends unknown>(object: I_21): _311.Counterparty;
                };
                ClientPaths: {
                    encode(message: _311.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.ClientPaths;
                    fromJSON(object: any): _311.ClientPaths;
                    toJSON(message: _311.ClientPaths): unknown;
                    fromPartial<I_22 extends unknown>(object: I_22): _311.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _311.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.ConnectionPaths;
                    fromJSON(object: any): _311.ConnectionPaths;
                    toJSON(message: _311.ConnectionPaths): unknown;
                    fromPartial<I_23 extends unknown>(object: I_23): _311.ConnectionPaths;
                };
                Version: {
                    encode(message: _311.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.Version;
                    fromJSON(object: any): _311.Version;
                    toJSON(message: _311.Version): unknown;
                    fromPartial<I_24 extends unknown>(object: I_24): _311.Version;
                };
                Params: {
                    encode(message: _311.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.Params;
                    fromJSON(object: any): _311.Params;
                    toJSON(message: _311.Params): unknown;
                    fromPartial<I_25 extends unknown>(object: I_25): _311.Params;
                };
            };
        }
        namespace port {
            const v1: {
                QueryAppVersionRequest: {
                    encode(message: _323.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _323.QueryAppVersionRequest;
                    fromJSON(object: any): _323.QueryAppVersionRequest;
                    toJSON(message: _323.QueryAppVersionRequest): unknown;
                    fromPartial<I extends unknown>(object: I): _323.QueryAppVersionRequest;
                };
                QueryAppVersionResponse: {
                    encode(message: _323.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _323.QueryAppVersionResponse;
                    fromJSON(object: any): _323.QueryAppVersionResponse;
                    toJSON(message: _323.QueryAppVersionResponse): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _323.QueryAppVersionResponse;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _324.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _324.GenesisState;
                    fromJSON(object: any): _324.GenesisState;
                    toJSON(message: _324.GenesisState): unknown;
                    fromPartial<I extends unknown>(object: I): _324.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _325.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _325.ClientState;
                    fromJSON(object: any): _325.ClientState;
                    toJSON(message: _325.ClientState): unknown;
                    fromPartial<I extends unknown>(object: I): _325.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _326.DataType;
                dataTypeToJSON(object: _326.DataType): string;
                DataType: typeof _326.DataType;
                ClientState: {
                    encode(message: _326.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.ClientState;
                    fromJSON(object: any): _326.ClientState;
                    toJSON(message: _326.ClientState): unknown;
                    fromPartial<I extends unknown>(object: I): _326.ClientState;
                };
                ConsensusState: {
                    encode(message: _326.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.ConsensusState;
                    fromJSON(object: any): _326.ConsensusState;
                    toJSON(message: _326.ConsensusState): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _326.ConsensusState;
                };
                Header: {
                    encode(message: _326.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.Header;
                    fromJSON(object: any): _326.Header;
                    toJSON(message: _326.Header): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _326.Header;
                };
                Misbehaviour: {
                    encode(message: _326.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.Misbehaviour;
                    fromJSON(object: any): _326.Misbehaviour;
                    toJSON(message: _326.Misbehaviour): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _326.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _326.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.SignatureAndData;
                    fromJSON(object: any): _326.SignatureAndData;
                    toJSON(message: _326.SignatureAndData): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _326.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _326.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.TimestampedSignatureData;
                    fromJSON(object: any): _326.TimestampedSignatureData;
                    toJSON(message: _326.TimestampedSignatureData): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _326.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _326.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.SignBytes;
                    fromJSON(object: any): _326.SignBytes;
                    toJSON(message: _326.SignBytes): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _326.SignBytes;
                };
                HeaderData: {
                    encode(message: _326.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.HeaderData;
                    fromJSON(object: any): _326.HeaderData;
                    toJSON(message: _326.HeaderData): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _326.HeaderData;
                };
                ClientStateData: {
                    encode(message: _326.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.ClientStateData;
                    fromJSON(object: any): _326.ClientStateData;
                    toJSON(message: _326.ClientStateData): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _326.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _326.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.ConsensusStateData;
                    fromJSON(object: any): _326.ConsensusStateData;
                    toJSON(message: _326.ConsensusStateData): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _326.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _326.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.ConnectionStateData;
                    fromJSON(object: any): _326.ConnectionStateData;
                    toJSON(message: _326.ConnectionStateData): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _326.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _326.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.ChannelStateData;
                    fromJSON(object: any): _326.ChannelStateData;
                    toJSON(message: _326.ChannelStateData): unknown;
                    fromPartial<I_11 extends unknown>(object: I_11): _326.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _326.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.PacketCommitmentData;
                    fromJSON(object: any): _326.PacketCommitmentData;
                    toJSON(message: _326.PacketCommitmentData): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _326.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _326.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.PacketAcknowledgementData;
                    fromJSON(object: any): _326.PacketAcknowledgementData;
                    toJSON(message: _326.PacketAcknowledgementData): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _326.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _326.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.PacketReceiptAbsenceData;
                    fromJSON(object: any): _326.PacketReceiptAbsenceData;
                    toJSON(message: _326.PacketReceiptAbsenceData): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _326.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _326.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _326.NextSequenceRecvData;
                    fromJSON(object: any): _326.NextSequenceRecvData;
                    toJSON(message: _326.NextSequenceRecvData): unknown;
                    fromPartial<I_15 extends unknown>(object: I_15): _326.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _327.DataType;
                dataTypeToJSON(object: _327.DataType): string;
                DataType: typeof _327.DataType;
                ClientState: {
                    encode(message: _327.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.ClientState;
                    fromJSON(object: any): _327.ClientState;
                    toJSON(message: _327.ClientState): unknown;
                    fromPartial<I extends unknown>(object: I): _327.ClientState;
                };
                ConsensusState: {
                    encode(message: _327.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.ConsensusState;
                    fromJSON(object: any): _327.ConsensusState;
                    toJSON(message: _327.ConsensusState): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _327.ConsensusState;
                };
                Header: {
                    encode(message: _327.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.Header;
                    fromJSON(object: any): _327.Header;
                    toJSON(message: _327.Header): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _327.Header;
                };
                Misbehaviour: {
                    encode(message: _327.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.Misbehaviour;
                    fromJSON(object: any): _327.Misbehaviour;
                    toJSON(message: _327.Misbehaviour): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _327.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _327.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.SignatureAndData;
                    fromJSON(object: any): _327.SignatureAndData;
                    toJSON(message: _327.SignatureAndData): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _327.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _327.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.TimestampedSignatureData;
                    fromJSON(object: any): _327.TimestampedSignatureData;
                    toJSON(message: _327.TimestampedSignatureData): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _327.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _327.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.SignBytes;
                    fromJSON(object: any): _327.SignBytes;
                    toJSON(message: _327.SignBytes): unknown;
                    fromPartial<I_6 extends unknown>(object: I_6): _327.SignBytes;
                };
                HeaderData: {
                    encode(message: _327.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.HeaderData;
                    fromJSON(object: any): _327.HeaderData;
                    toJSON(message: _327.HeaderData): unknown;
                    fromPartial<I_7 extends unknown>(object: I_7): _327.HeaderData;
                };
                ClientStateData: {
                    encode(message: _327.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.ClientStateData;
                    fromJSON(object: any): _327.ClientStateData;
                    toJSON(message: _327.ClientStateData): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _327.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _327.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.ConsensusStateData;
                    fromJSON(object: any): _327.ConsensusStateData;
                    toJSON(message: _327.ConsensusStateData): unknown;
                    fromPartial<I_9 extends unknown>(object: I_9): _327.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _327.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.ConnectionStateData;
                    fromJSON(object: any): _327.ConnectionStateData;
                    toJSON(message: _327.ConnectionStateData): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _327.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _327.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.ChannelStateData;
                    fromJSON(object: any): _327.ChannelStateData;
                    toJSON(message: _327.ChannelStateData): unknown;
                    fromPartial<I_11 extends unknown>(object: I_11): _327.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _327.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.PacketCommitmentData;
                    fromJSON(object: any): _327.PacketCommitmentData;
                    toJSON(message: _327.PacketCommitmentData): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _327.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _327.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.PacketAcknowledgementData;
                    fromJSON(object: any): _327.PacketAcknowledgementData;
                    toJSON(message: _327.PacketAcknowledgementData): unknown;
                    fromPartial<I_13 extends unknown>(object: I_13): _327.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _327.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.PacketReceiptAbsenceData;
                    fromJSON(object: any): _327.PacketReceiptAbsenceData;
                    toJSON(message: _327.PacketReceiptAbsenceData): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _327.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _327.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _327.NextSequenceRecvData;
                    fromJSON(object: any): _327.NextSequenceRecvData;
                    toJSON(message: _327.NextSequenceRecvData): unknown;
                    fromPartial<I_15 extends unknown>(object: I_15): _327.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _328.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _328.ClientState;
                    fromJSON(object: any): _328.ClientState;
                    toJSON(message: _328.ClientState): unknown;
                    fromPartial<I extends unknown>(object: I): _328.ClientState;
                };
                ConsensusState: {
                    encode(message: _328.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _328.ConsensusState;
                    fromJSON(object: any): _328.ConsensusState;
                    toJSON(message: _328.ConsensusState): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _328.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _328.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _328.Misbehaviour;
                    fromJSON(object: any): _328.Misbehaviour;
                    toJSON(message: _328.Misbehaviour): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _328.Misbehaviour;
                };
                Header: {
                    encode(message: _328.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _328.Header;
                    fromJSON(object: any): _328.Header;
                    toJSON(message: _328.Header): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _328.Header;
                };
                Fraction: {
                    encode(message: _328.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _328.Fraction;
                    fromJSON(object: any): _328.Fraction;
                    toJSON(message: _328.Fraction): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _328.Fraction;
                };
            };
        }
    }
}
export declare namespace osmosis {
    namespace claim {
        const v1beta1: {
            QueryModuleAccountBalanceRequest: {
                encode(_: _332.QueryModuleAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _332.QueryModuleAccountBalanceRequest;
                fromJSON(_: any): _332.QueryModuleAccountBalanceRequest;
                toJSON(_: _332.QueryModuleAccountBalanceRequest): unknown;
                fromPartial<I extends unknown>(_: I): _332.QueryModuleAccountBalanceRequest;
            };
            QueryModuleAccountBalanceResponse: {
                encode(message: _332.QueryModuleAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _332.QueryModuleAccountBalanceResponse;
                fromJSON(object: any): _332.QueryModuleAccountBalanceResponse;
                toJSON(message: _332.QueryModuleAccountBalanceResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _332.QueryModuleAccountBalanceResponse;
            };
            QueryParamsRequest: {
                encode(_: _332.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _332.QueryParamsRequest;
                fromJSON(_: any): _332.QueryParamsRequest;
                toJSON(_: _332.QueryParamsRequest): unknown;
                fromPartial<I_2 extends unknown>(_: I_2): _332.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _332.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _332.QueryParamsResponse;
                fromJSON(object: any): _332.QueryParamsResponse;
                toJSON(message: _332.QueryParamsResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _332.QueryParamsResponse;
            };
            QueryClaimRecordRequest: {
                encode(message: _332.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _332.QueryClaimRecordRequest;
                fromJSON(object: any): _332.QueryClaimRecordRequest;
                toJSON(message: _332.QueryClaimRecordRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _332.QueryClaimRecordRequest;
            };
            QueryClaimRecordResponse: {
                encode(message: _332.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _332.QueryClaimRecordResponse;
                fromJSON(object: any): _332.QueryClaimRecordResponse;
                toJSON(message: _332.QueryClaimRecordResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _332.QueryClaimRecordResponse;
            };
            QueryClaimableForActionRequest: {
                encode(message: _332.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _332.QueryClaimableForActionRequest;
                fromJSON(object: any): _332.QueryClaimableForActionRequest;
                toJSON(message: _332.QueryClaimableForActionRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _332.QueryClaimableForActionRequest;
            };
            QueryClaimableForActionResponse: {
                encode(message: _332.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _332.QueryClaimableForActionResponse;
                fromJSON(object: any): _332.QueryClaimableForActionResponse;
                toJSON(message: _332.QueryClaimableForActionResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _332.QueryClaimableForActionResponse;
            };
            QueryTotalClaimableRequest: {
                encode(message: _332.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _332.QueryTotalClaimableRequest;
                fromJSON(object: any): _332.QueryTotalClaimableRequest;
                toJSON(message: _332.QueryTotalClaimableRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _332.QueryTotalClaimableRequest;
            };
            QueryTotalClaimableResponse: {
                encode(message: _332.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _332.QueryTotalClaimableResponse;
                fromJSON(object: any): _332.QueryTotalClaimableResponse;
                toJSON(message: _332.QueryTotalClaimableResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _332.QueryTotalClaimableResponse;
            };
            Params: {
                encode(message: _331.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _331.Params;
                fromJSON(object: any): _331.Params;
                toJSON(message: _331.Params): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _331.Params;
            };
            GenesisState: {
                encode(message: _330.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _330.GenesisState;
                fromJSON(object: any): _330.GenesisState;
                toJSON(message: _330.GenesisState): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _330.GenesisState;
            };
            actionFromJSON(object: any): _329.Action;
            actionToJSON(object: _329.Action): string;
            Action: typeof _329.Action;
            ClaimRecord: {
                encode(message: _329.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _329.ClaimRecord;
                fromJSON(object: any): _329.ClaimRecord;
                toJSON(message: _329.ClaimRecord): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _329.ClaimRecord;
            };
        };
    }
    namespace epochs {
        const v1beta1: {
            QueryEpochsInfoRequest: {
                encode(_: _334.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _334.QueryEpochsInfoRequest;
                fromJSON(_: any): _334.QueryEpochsInfoRequest;
                toJSON(_: _334.QueryEpochsInfoRequest): unknown;
                fromPartial<I extends unknown>(_: I): _334.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _334.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _334.QueryEpochsInfoResponse;
                fromJSON(object: any): _334.QueryEpochsInfoResponse;
                toJSON(message: _334.QueryEpochsInfoResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _334.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _334.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _334.QueryCurrentEpochRequest;
                fromJSON(object: any): _334.QueryCurrentEpochRequest;
                toJSON(message: _334.QueryCurrentEpochRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _334.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _334.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _334.QueryCurrentEpochResponse;
                fromJSON(object: any): _334.QueryCurrentEpochResponse;
                toJSON(message: _334.QueryCurrentEpochResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _334.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _333.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _333.EpochInfo;
                fromJSON(object: any): _333.EpochInfo;
                toJSON(message: _333.EpochInfo): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _333.EpochInfo;
            };
            GenesisState: {
                encode(message: _333.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _333.GenesisState;
                fromJSON(object: any): _333.GenesisState;
                toJSON(message: _333.GenesisState): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _333.GenesisState;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgJoinPool: {
                encode(message: _339.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgJoinPool;
                fromJSON(object: any): _339.MsgJoinPool;
                toJSON(message: _339.MsgJoinPool): unknown;
                fromPartial<I extends unknown>(object: I): _339.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(_: _339.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgJoinPoolResponse;
                fromJSON(_: any): _339.MsgJoinPoolResponse;
                toJSON(_: _339.MsgJoinPoolResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _339.MsgJoinPoolResponse;
            };
            MsgExitPool: {
                encode(message: _339.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgExitPool;
                fromJSON(object: any): _339.MsgExitPool;
                toJSON(message: _339.MsgExitPool): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _339.MsgExitPool;
            };
            MsgExitPoolResponse: {
                encode(_: _339.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgExitPoolResponse;
                fromJSON(_: any): _339.MsgExitPoolResponse;
                toJSON(_: _339.MsgExitPoolResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _339.MsgExitPoolResponse;
            };
            SwapAmountInRoute: {
                encode(message: _339.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.SwapAmountInRoute;
                fromJSON(object: any): _339.SwapAmountInRoute;
                toJSON(message: _339.SwapAmountInRoute): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _339.SwapAmountInRoute;
            };
            MsgSwapExactAmountIn: {
                encode(message: _339.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgSwapExactAmountIn;
                fromJSON(object: any): _339.MsgSwapExactAmountIn;
                toJSON(message: _339.MsgSwapExactAmountIn): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _339.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _339.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgSwapExactAmountInResponse;
                fromJSON(object: any): _339.MsgSwapExactAmountInResponse;
                toJSON(message: _339.MsgSwapExactAmountInResponse): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _339.MsgSwapExactAmountInResponse;
            };
            SwapAmountOutRoute: {
                encode(message: _339.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.SwapAmountOutRoute;
                fromJSON(object: any): _339.SwapAmountOutRoute;
                toJSON(message: _339.SwapAmountOutRoute): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _339.SwapAmountOutRoute;
            };
            MsgSwapExactAmountOut: {
                encode(message: _339.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgSwapExactAmountOut;
                fromJSON(object: any): _339.MsgSwapExactAmountOut;
                toJSON(message: _339.MsgSwapExactAmountOut): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _339.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _339.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgSwapExactAmountOutResponse;
                fromJSON(object: any): _339.MsgSwapExactAmountOutResponse;
                toJSON(message: _339.MsgSwapExactAmountOutResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _339.MsgSwapExactAmountOutResponse;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _339.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgJoinSwapExternAmountIn;
                fromJSON(object: any): _339.MsgJoinSwapExternAmountIn;
                toJSON(message: _339.MsgJoinSwapExternAmountIn): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _339.MsgJoinSwapExternAmountIn;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _339.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgJoinSwapExternAmountInResponse;
                fromJSON(object: any): _339.MsgJoinSwapExternAmountInResponse;
                toJSON(message: _339.MsgJoinSwapExternAmountInResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _339.MsgJoinSwapExternAmountInResponse;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _339.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgJoinSwapShareAmountOut;
                fromJSON(object: any): _339.MsgJoinSwapShareAmountOut;
                toJSON(message: _339.MsgJoinSwapShareAmountOut): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _339.MsgJoinSwapShareAmountOut;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _339.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgJoinSwapShareAmountOutResponse;
                fromJSON(object: any): _339.MsgJoinSwapShareAmountOutResponse;
                toJSON(message: _339.MsgJoinSwapShareAmountOutResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _339.MsgJoinSwapShareAmountOutResponse;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _339.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgExitSwapShareAmountIn;
                fromJSON(object: any): _339.MsgExitSwapShareAmountIn;
                toJSON(message: _339.MsgExitSwapShareAmountIn): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _339.MsgExitSwapShareAmountIn;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _339.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgExitSwapShareAmountInResponse;
                fromJSON(object: any): _339.MsgExitSwapShareAmountInResponse;
                toJSON(message: _339.MsgExitSwapShareAmountInResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _339.MsgExitSwapShareAmountInResponse;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _339.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgExitSwapExternAmountOut;
                fromJSON(object: any): _339.MsgExitSwapExternAmountOut;
                toJSON(message: _339.MsgExitSwapExternAmountOut): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _339.MsgExitSwapExternAmountOut;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _339.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.MsgExitSwapExternAmountOutResponse;
                fromJSON(object: any): _339.MsgExitSwapExternAmountOutResponse;
                toJSON(message: _339.MsgExitSwapExternAmountOutResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _339.MsgExitSwapExternAmountOutResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: _339.MsgJoinPool) => {
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
                    }) => _339.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: _339.MsgExitPool) => {
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
                    }) => _339.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _339.MsgSwapExactAmountIn) => {
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
                    }) => _339.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _339.MsgSwapExactAmountOut) => {
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
                    }) => _339.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: _339.MsgJoinSwapExternAmountIn) => {
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
                    }) => _339.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: _339.MsgJoinSwapShareAmountOut) => {
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
                    }) => _339.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: _339.MsgExitSwapExternAmountOut) => {
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
                    }) => _339.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: _339.MsgExitSwapShareAmountIn) => {
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
                    }) => _339.MsgExitSwapShareAmountIn;
                };
            };
            encoded: {
                joinPool(value: _339.MsgJoinPool): {
                    type_url: string;
                    value: Uint8Array;
                };
                exitPool(value: _339.MsgExitPool): {
                    type_url: string;
                    value: Uint8Array;
                };
                swapExactAmountIn(value: _339.MsgSwapExactAmountIn): {
                    type_url: string;
                    value: Uint8Array;
                };
                swapExactAmountOut(value: _339.MsgSwapExactAmountOut): {
                    type_url: string;
                    value: Uint8Array;
                };
                joinSwapExternAmountIn(value: _339.MsgJoinSwapExternAmountIn): {
                    type_url: string;
                    value: Uint8Array;
                };
                joinSwapShareAmountOut(value: _339.MsgJoinSwapShareAmountOut): {
                    type_url: string;
                    value: Uint8Array;
                };
                exitSwapExternAmountOut(value: _339.MsgExitSwapExternAmountOut): {
                    type_url: string;
                    value: Uint8Array;
                };
                exitSwapShareAmountIn(value: _339.MsgExitSwapShareAmountIn): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                joinPool(value: any): {
                    typeUrl: string;
                    value: _339.MsgJoinPool;
                };
                exitPool(value: any): {
                    typeUrl: string;
                    value: _339.MsgExitPool;
                };
                swapExactAmountIn(value: any): {
                    typeUrl: string;
                    value: _339.MsgSwapExactAmountIn;
                };
                swapExactAmountOut(value: any): {
                    typeUrl: string;
                    value: _339.MsgSwapExactAmountOut;
                };
                joinSwapExternAmountIn(value: any): {
                    typeUrl: string;
                    value: _339.MsgJoinSwapExternAmountIn;
                };
                joinSwapShareAmountOut(value: any): {
                    typeUrl: string;
                    value: _339.MsgJoinSwapShareAmountOut;
                };
                exitSwapExternAmountOut(value: any): {
                    typeUrl: string;
                    value: _339.MsgExitSwapExternAmountOut;
                };
                exitSwapShareAmountIn(value: any): {
                    typeUrl: string;
                    value: _339.MsgExitSwapShareAmountIn;
                };
            };
            toJSON: {
                joinPool(value: _339.MsgJoinPool): {
                    typeUrl: string;
                    value: unknown;
                };
                exitPool(value: _339.MsgExitPool): {
                    typeUrl: string;
                    value: unknown;
                };
                swapExactAmountIn(value: _339.MsgSwapExactAmountIn): {
                    typeUrl: string;
                    value: unknown;
                };
                swapExactAmountOut(value: _339.MsgSwapExactAmountOut): {
                    typeUrl: string;
                    value: unknown;
                };
                joinSwapExternAmountIn(value: _339.MsgJoinSwapExternAmountIn): {
                    typeUrl: string;
                    value: unknown;
                };
                joinSwapShareAmountOut(value: _339.MsgJoinSwapShareAmountOut): {
                    typeUrl: string;
                    value: unknown;
                };
                exitSwapExternAmountOut(value: _339.MsgExitSwapExternAmountOut): {
                    typeUrl: string;
                    value: unknown;
                };
                exitSwapShareAmountIn(value: _339.MsgExitSwapShareAmountIn): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                joinPool(value: _339.MsgJoinPool): {
                    typeUrl: string;
                    value: _339.MsgJoinPool;
                };
                exitPool(value: _339.MsgExitPool): {
                    typeUrl: string;
                    value: _339.MsgExitPool;
                };
                swapExactAmountIn(value: _339.MsgSwapExactAmountIn): {
                    typeUrl: string;
                    value: _339.MsgSwapExactAmountIn;
                };
                swapExactAmountOut(value: _339.MsgSwapExactAmountOut): {
                    typeUrl: string;
                    value: _339.MsgSwapExactAmountOut;
                };
                joinSwapExternAmountIn(value: _339.MsgJoinSwapExternAmountIn): {
                    typeUrl: string;
                    value: _339.MsgJoinSwapExternAmountIn;
                };
                joinSwapShareAmountOut(value: _339.MsgJoinSwapShareAmountOut): {
                    typeUrl: string;
                    value: _339.MsgJoinSwapShareAmountOut;
                };
                exitSwapExternAmountOut(value: _339.MsgExitSwapExternAmountOut): {
                    typeUrl: string;
                    value: _339.MsgExitSwapExternAmountOut;
                };
                exitSwapShareAmountIn(value: _339.MsgExitSwapShareAmountIn): {
                    typeUrl: string;
                    value: _339.MsgExitSwapShareAmountIn;
                };
            };
            messages: {
                joinPool(value: _339.MsgJoinPool): {
                    typeUrl: string;
                    value: _339.MsgJoinPool;
                };
                exitPool(value: _339.MsgExitPool): {
                    typeUrl: string;
                    value: _339.MsgExitPool;
                };
                swapExactAmountIn(value: _339.MsgSwapExactAmountIn): {
                    typeUrl: string;
                    value: _339.MsgSwapExactAmountIn;
                };
                swapExactAmountOut(value: _339.MsgSwapExactAmountOut): {
                    typeUrl: string;
                    value: _339.MsgSwapExactAmountOut;
                };
                joinSwapExternAmountIn(value: _339.MsgJoinSwapExternAmountIn): {
                    typeUrl: string;
                    value: _339.MsgJoinSwapExternAmountIn;
                };
                joinSwapShareAmountOut(value: _339.MsgJoinSwapShareAmountOut): {
                    typeUrl: string;
                    value: _339.MsgJoinSwapShareAmountOut;
                };
                exitSwapExternAmountOut(value: _339.MsgExitSwapExternAmountOut): {
                    typeUrl: string;
                    value: _339.MsgExitSwapExternAmountOut;
                };
                exitSwapShareAmountIn(value: _339.MsgExitSwapShareAmountIn): {
                    typeUrl: string;
                    value: _339.MsgExitSwapShareAmountIn;
                };
            };
            QueryPoolRequest: {
                encode(message: _338.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.QueryPoolRequest;
                fromJSON(object: any): _338.QueryPoolRequest;
                toJSON(message: _338.QueryPoolRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _338.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _338.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.QueryPoolResponse;
                fromJSON(object: any): _338.QueryPoolResponse;
                toJSON(message: _338.QueryPoolResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _338.QueryPoolResponse;
            };
            QueryPoolsRequest: {
                encode(message: _338.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.QueryPoolsRequest;
                fromJSON(object: any): _338.QueryPoolsRequest;
                toJSON(message: _338.QueryPoolsRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _338.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _338.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.QueryPoolsResponse;
                fromJSON(object: any): _338.QueryPoolsResponse;
                toJSON(message: _338.QueryPoolsResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _338.QueryPoolsResponse;
            };
            QueryNumPoolsRequest: {
                encode(_: _338.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.QueryNumPoolsRequest;
                fromJSON(_: any): _338.QueryNumPoolsRequest;
                toJSON(_: _338.QueryNumPoolsRequest): unknown;
                fromPartial<I_22 extends unknown>(_: I_22): _338.QueryNumPoolsRequest;
            };
            QueryNumPoolsResponse: {
                encode(message: _338.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.QueryNumPoolsResponse;
                fromJSON(object: any): _338.QueryNumPoolsResponse;
                toJSON(message: _338.QueryNumPoolsResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _338.QueryNumPoolsResponse;
            };
            QueryPoolParamsRequest: {
                encode(message: _338.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.QueryPoolParamsRequest;
                fromJSON(object: any): _338.QueryPoolParamsRequest;
                toJSON(message: _338.QueryPoolParamsRequest): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _338.QueryPoolParamsRequest;
            };
            QueryPoolParamsResponse: {
                encode(message: _338.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.QueryPoolParamsResponse;
                fromJSON(object: any): _338.QueryPoolParamsResponse;
                toJSON(message: _338.QueryPoolParamsResponse): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _338.QueryPoolParamsResponse;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _338.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.QueryTotalPoolLiquidityRequest;
                fromJSON(object: any): _338.QueryTotalPoolLiquidityRequest;
                toJSON(message: _338.QueryTotalPoolLiquidityRequest): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _338.QueryTotalPoolLiquidityRequest;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _338.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.QueryTotalPoolLiquidityResponse;
                fromJSON(object: any): _338.QueryTotalPoolLiquidityResponse;
                toJSON(message: _338.QueryTotalPoolLiquidityResponse): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _338.QueryTotalPoolLiquidityResponse;
            };
            QueryTotalSharesRequest: {
                encode(message: _338.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.QueryTotalSharesRequest;
                fromJSON(object: any): _338.QueryTotalSharesRequest;
                toJSON(message: _338.QueryTotalSharesRequest): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _338.QueryTotalSharesRequest;
            };
            QueryTotalSharesResponse: {
                encode(message: _338.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.QueryTotalSharesResponse;
                fromJSON(object: any): _338.QueryTotalSharesResponse;
                toJSON(message: _338.QueryTotalSharesResponse): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _338.QueryTotalSharesResponse;
            };
            QuerySpotPriceRequest: {
                encode(message: _338.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.QuerySpotPriceRequest;
                fromJSON(object: any): _338.QuerySpotPriceRequest;
                toJSON(message: _338.QuerySpotPriceRequest): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _338.QuerySpotPriceRequest;
            };
            QuerySpotPriceResponse: {
                encode(message: _338.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.QuerySpotPriceResponse;
                fromJSON(object: any): _338.QuerySpotPriceResponse;
                toJSON(message: _338.QuerySpotPriceResponse): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _338.QuerySpotPriceResponse;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _338.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.QuerySwapExactAmountInRequest;
                fromJSON(object: any): _338.QuerySwapExactAmountInRequest;
                toJSON(message: _338.QuerySwapExactAmountInRequest): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _338.QuerySwapExactAmountInRequest;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _338.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.QuerySwapExactAmountInResponse;
                fromJSON(object: any): _338.QuerySwapExactAmountInResponse;
                toJSON(message: _338.QuerySwapExactAmountInResponse): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _338.QuerySwapExactAmountInResponse;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _338.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.QuerySwapExactAmountOutRequest;
                fromJSON(object: any): _338.QuerySwapExactAmountOutRequest;
                toJSON(message: _338.QuerySwapExactAmountOutRequest): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _338.QuerySwapExactAmountOutRequest;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _338.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.QuerySwapExactAmountOutResponse;
                fromJSON(object: any): _338.QuerySwapExactAmountOutResponse;
                toJSON(message: _338.QuerySwapExactAmountOutResponse): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _338.QuerySwapExactAmountOutResponse;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _338.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.QueryTotalLiquidityRequest;
                fromJSON(_: any): _338.QueryTotalLiquidityRequest;
                toJSON(_: _338.QueryTotalLiquidityRequest): unknown;
                fromPartial<I_36 extends unknown>(_: I_36): _338.QueryTotalLiquidityRequest;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _338.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.QueryTotalLiquidityResponse;
                fromJSON(object: any): _338.QueryTotalLiquidityResponse;
                toJSON(message: _338.QueryTotalLiquidityResponse): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _338.QueryTotalLiquidityResponse;
            };
            Params: {
                encode(message: _337.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.Params;
                fromJSON(object: any): _337.Params;
                toJSON(message: _337.Params): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _337.Params;
            };
            GenesisState: {
                encode(message: _337.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.GenesisState;
                fromJSON(object: any): _337.GenesisState;
                toJSON(message: _337.GenesisState): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _337.GenesisState;
            };
            MsgCreateBalancerPool: {
                encode(message: _336.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _336.MsgCreateBalancerPool;
                fromJSON(object: any): _336.MsgCreateBalancerPool;
                toJSON(message: _336.MsgCreateBalancerPool): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _336.MsgCreateBalancerPool;
            };
            MsgCreateBalancerPoolResponse: {
                encode(message: _336.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _336.MsgCreateBalancerPoolResponse;
                fromJSON(object: any): _336.MsgCreateBalancerPoolResponse;
                toJSON(message: _336.MsgCreateBalancerPoolResponse): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _336.MsgCreateBalancerPoolResponse;
            };
            BalancerMsgClientImpl: typeof _336.BalancerMsgClientImpl;
            SmoothWeightChangeParams: {
                encode(message: _335.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.SmoothWeightChangeParams;
                fromJSON(object: any): _335.SmoothWeightChangeParams;
                toJSON(message: _335.SmoothWeightChangeParams): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _335.SmoothWeightChangeParams;
            };
            PoolParams: {
                encode(message: _335.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.PoolParams;
                fromJSON(object: any): _335.PoolParams;
                toJSON(message: _335.PoolParams): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _335.PoolParams;
            };
            PoolAsset: {
                encode(message: _335.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.PoolAsset;
                fromJSON(object: any): _335.PoolAsset;
                toJSON(message: _335.PoolAsset): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _335.PoolAsset;
            };
            Pool: {
                encode(message: _335.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.Pool;
                fromJSON(object: any): _335.Pool;
                toJSON(message: _335.Pool): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _335.Pool;
            };
        };
    }
    const incentives: {
        MsgCreateGauge: {
            encode(message: _352.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _352.MsgCreateGauge;
            fromJSON(object: any): _352.MsgCreateGauge;
            toJSON(message: _352.MsgCreateGauge): unknown;
            fromPartial<I extends unknown>(object: I): _352.MsgCreateGauge;
        };
        MsgCreateGaugeResponse: {
            encode(_: _352.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _352.MsgCreateGaugeResponse;
            fromJSON(_: any): _352.MsgCreateGaugeResponse;
            toJSON(_: _352.MsgCreateGaugeResponse): unknown;
            fromPartial<I_1 extends unknown>(_: I_1): _352.MsgCreateGaugeResponse;
        };
        MsgAddToGauge: {
            encode(message: _352.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _352.MsgAddToGauge;
            fromJSON(object: any): _352.MsgAddToGauge;
            toJSON(message: _352.MsgAddToGauge): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _352.MsgAddToGauge;
        };
        MsgAddToGaugeResponse: {
            encode(_: _352.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _352.MsgAddToGaugeResponse;
            fromJSON(_: any): _352.MsgAddToGaugeResponse;
            toJSON(_: _352.MsgAddToGaugeResponse): unknown;
            fromPartial<I_3 extends unknown>(_: I_3): _352.MsgAddToGaugeResponse;
        };
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: _352.MsgCreateGauge) => {
                    isPerpetual: boolean;
                    owner: string;
                    distributeTo: {
                        lockQueryType: number;
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
                    startTime: Date;
                    numEpochsPaidOver: string;
                };
                fromAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: {
                    isPerpetual: boolean;
                    owner: string;
                    distributeTo: {
                        lockQueryType: number;
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
                    startTime: Date;
                    numEpochsPaidOver: string;
                }) => _352.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: ({ owner, gaugeId, rewards }: _352.MsgAddToGauge) => {
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
                }) => _352.MsgAddToGauge;
            };
        };
        encoded: {
            createGauge(value: _352.MsgCreateGauge): {
                type_url: string;
                value: Uint8Array;
            };
            addToGauge(value: _352.MsgAddToGauge): {
                type_url: string;
                value: Uint8Array;
            };
        };
        fromJSON: {
            createGauge(value: any): {
                typeUrl: string;
                value: _352.MsgCreateGauge;
            };
            addToGauge(value: any): {
                typeUrl: string;
                value: _352.MsgAddToGauge;
            };
        };
        toJSON: {
            createGauge(value: _352.MsgCreateGauge): {
                typeUrl: string;
                value: unknown;
            };
            addToGauge(value: _352.MsgAddToGauge): {
                typeUrl: string;
                value: unknown;
            };
        };
        json: {
            createGauge(value: _352.MsgCreateGauge): {
                typeUrl: string;
                value: _352.MsgCreateGauge;
            };
            addToGauge(value: _352.MsgAddToGauge): {
                typeUrl: string;
                value: _352.MsgAddToGauge;
            };
        };
        messages: {
            createGauge(value: _352.MsgCreateGauge): {
                typeUrl: string;
                value: _352.MsgCreateGauge;
            };
            addToGauge(value: _352.MsgAddToGauge): {
                typeUrl: string;
                value: _352.MsgAddToGauge;
            };
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _351.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.ModuleToDistributeCoinsRequest;
            fromJSON(_: any): _351.ModuleToDistributeCoinsRequest;
            toJSON(_: _351.ModuleToDistributeCoinsRequest): unknown;
            fromPartial<I_4 extends unknown>(_: I_4): _351.ModuleToDistributeCoinsRequest;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _351.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.ModuleToDistributeCoinsResponse;
            fromJSON(object: any): _351.ModuleToDistributeCoinsResponse;
            toJSON(message: _351.ModuleToDistributeCoinsResponse): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _351.ModuleToDistributeCoinsResponse;
        };
        ModuleDistributedCoinsRequest: {
            encode(_: _351.ModuleDistributedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.ModuleDistributedCoinsRequest;
            fromJSON(_: any): _351.ModuleDistributedCoinsRequest;
            toJSON(_: _351.ModuleDistributedCoinsRequest): unknown;
            fromPartial<I_6 extends unknown>(_: I_6): _351.ModuleDistributedCoinsRequest;
        };
        ModuleDistributedCoinsResponse: {
            encode(message: _351.ModuleDistributedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.ModuleDistributedCoinsResponse;
            fromJSON(object: any): _351.ModuleDistributedCoinsResponse;
            toJSON(message: _351.ModuleDistributedCoinsResponse): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _351.ModuleDistributedCoinsResponse;
        };
        GaugeByIDRequest: {
            encode(message: _351.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.GaugeByIDRequest;
            fromJSON(object: any): _351.GaugeByIDRequest;
            toJSON(message: _351.GaugeByIDRequest): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _351.GaugeByIDRequest;
        };
        GaugeByIDResponse: {
            encode(message: _351.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.GaugeByIDResponse;
            fromJSON(object: any): _351.GaugeByIDResponse;
            toJSON(message: _351.GaugeByIDResponse): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _351.GaugeByIDResponse;
        };
        GaugesRequest: {
            encode(message: _351.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.GaugesRequest;
            fromJSON(object: any): _351.GaugesRequest;
            toJSON(message: _351.GaugesRequest): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _351.GaugesRequest;
        };
        GaugesResponse: {
            encode(message: _351.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.GaugesResponse;
            fromJSON(object: any): _351.GaugesResponse;
            toJSON(message: _351.GaugesResponse): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _351.GaugesResponse;
        };
        ActiveGaugesRequest: {
            encode(message: _351.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.ActiveGaugesRequest;
            fromJSON(object: any): _351.ActiveGaugesRequest;
            toJSON(message: _351.ActiveGaugesRequest): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _351.ActiveGaugesRequest;
        };
        ActiveGaugesResponse: {
            encode(message: _351.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.ActiveGaugesResponse;
            fromJSON(object: any): _351.ActiveGaugesResponse;
            toJSON(message: _351.ActiveGaugesResponse): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _351.ActiveGaugesResponse;
        };
        ActiveGaugesPerDenomRequest: {
            encode(message: _351.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.ActiveGaugesPerDenomRequest;
            fromJSON(object: any): _351.ActiveGaugesPerDenomRequest;
            toJSON(message: _351.ActiveGaugesPerDenomRequest): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _351.ActiveGaugesPerDenomRequest;
        };
        ActiveGaugesPerDenomResponse: {
            encode(message: _351.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.ActiveGaugesPerDenomResponse;
            fromJSON(object: any): _351.ActiveGaugesPerDenomResponse;
            toJSON(message: _351.ActiveGaugesPerDenomResponse): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _351.ActiveGaugesPerDenomResponse;
        };
        UpcomingGaugesRequest: {
            encode(message: _351.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.UpcomingGaugesRequest;
            fromJSON(object: any): _351.UpcomingGaugesRequest;
            toJSON(message: _351.UpcomingGaugesRequest): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _351.UpcomingGaugesRequest;
        };
        UpcomingGaugesResponse: {
            encode(message: _351.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.UpcomingGaugesResponse;
            fromJSON(object: any): _351.UpcomingGaugesResponse;
            toJSON(message: _351.UpcomingGaugesResponse): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _351.UpcomingGaugesResponse;
        };
        RewardsEstRequest: {
            encode(message: _351.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.RewardsEstRequest;
            fromJSON(object: any): _351.RewardsEstRequest;
            toJSON(message: _351.RewardsEstRequest): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _351.RewardsEstRequest;
        };
        RewardsEstResponse: {
            encode(message: _351.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.RewardsEstResponse;
            fromJSON(object: any): _351.RewardsEstResponse;
            toJSON(message: _351.RewardsEstResponse): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _351.RewardsEstResponse;
        };
        QueryLockableDurationsRequest: {
            encode(_: _351.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.QueryLockableDurationsRequest;
            fromJSON(_: any): _351.QueryLockableDurationsRequest;
            toJSON(_: _351.QueryLockableDurationsRequest): unknown;
            fromPartial<I_20 extends unknown>(_: I_20): _351.QueryLockableDurationsRequest;
        };
        QueryLockableDurationsResponse: {
            encode(message: _351.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.QueryLockableDurationsResponse;
            fromJSON(object: any): _351.QueryLockableDurationsResponse;
            toJSON(message: _351.QueryLockableDurationsResponse): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _351.QueryLockableDurationsResponse;
        };
        Params: {
            encode(message: _350.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.Params;
            fromJSON(object: any): _350.Params;
            toJSON(message: _350.Params): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _350.Params;
        };
        GenesisState: {
            encode(message: _349.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _349.GenesisState;
            fromJSON(object: any): _349.GenesisState;
            toJSON(message: _349.GenesisState): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _349.GenesisState;
        };
        Gauge: {
            encode(message: _348.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _348.Gauge;
            fromJSON(object: any): _348.Gauge;
            toJSON(message: _348.Gauge): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _348.Gauge;
        };
        LockableDurationsInfo: {
            encode(message: _348.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _348.LockableDurationsInfo;
            fromJSON(object: any): _348.LockableDurationsInfo;
            toJSON(message: _348.LockableDurationsInfo): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _348.LockableDurationsInfo;
        };
    };
    const lockup: {
        MsgLockTokens: {
            encode(message: _364.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.MsgLockTokens;
            fromJSON(object: any): _364.MsgLockTokens;
            toJSON(message: _364.MsgLockTokens): unknown;
            fromPartial<I extends unknown>(object: I): _364.MsgLockTokens;
        };
        MsgLockTokensResponse: {
            encode(message: _364.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.MsgLockTokensResponse;
            fromJSON(object: any): _364.MsgLockTokensResponse;
            toJSON(message: _364.MsgLockTokensResponse): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _364.MsgLockTokensResponse;
        };
        MsgBeginUnlockingAll: {
            encode(message: _364.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.MsgBeginUnlockingAll;
            fromJSON(object: any): _364.MsgBeginUnlockingAll;
            toJSON(message: _364.MsgBeginUnlockingAll): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _364.MsgBeginUnlockingAll;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _364.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.MsgBeginUnlockingAllResponse;
            fromJSON(object: any): _364.MsgBeginUnlockingAllResponse;
            toJSON(message: _364.MsgBeginUnlockingAllResponse): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _364.MsgBeginUnlockingAllResponse;
        };
        MsgBeginUnlocking: {
            encode(message: _364.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.MsgBeginUnlocking;
            fromJSON(object: any): _364.MsgBeginUnlocking;
            toJSON(message: _364.MsgBeginUnlocking): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _364.MsgBeginUnlocking;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _364.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.MsgBeginUnlockingResponse;
            fromJSON(object: any): _364.MsgBeginUnlockingResponse;
            toJSON(message: _364.MsgBeginUnlockingResponse): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _364.MsgBeginUnlockingResponse;
        };
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: ({ owner, duration, coins }: _364.MsgLockTokens) => {
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
                }) => _364.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: ({ owner }: _364.MsgBeginUnlockingAll) => {
                    owner: string;
                };
                fromAmino: ({ owner }: {
                    owner: string;
                }) => _364.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _364.MsgBeginUnlocking) => {
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
                }) => _364.MsgBeginUnlocking;
            };
        };
        encoded: {
            lockTokens(value: _364.MsgLockTokens): {
                type_url: string;
                value: Uint8Array;
            };
            beginUnlockingAll(value: _364.MsgBeginUnlockingAll): {
                type_url: string;
                value: Uint8Array;
            };
            beginUnlocking(value: _364.MsgBeginUnlocking): {
                type_url: string;
                value: Uint8Array;
            };
        };
        fromJSON: {
            lockTokens(value: any): {
                typeUrl: string;
                value: _364.MsgLockTokens;
            };
            beginUnlockingAll(value: any): {
                typeUrl: string;
                value: _364.MsgBeginUnlockingAll;
            };
            beginUnlocking(value: any): {
                typeUrl: string;
                value: _364.MsgBeginUnlocking;
            };
        };
        toJSON: {
            lockTokens(value: _364.MsgLockTokens): {
                typeUrl: string;
                value: unknown;
            };
            beginUnlockingAll(value: _364.MsgBeginUnlockingAll): {
                typeUrl: string;
                value: unknown;
            };
            beginUnlocking(value: _364.MsgBeginUnlocking): {
                typeUrl: string;
                value: unknown;
            };
        };
        json: {
            lockTokens(value: _364.MsgLockTokens): {
                typeUrl: string;
                value: _364.MsgLockTokens;
            };
            beginUnlockingAll(value: _364.MsgBeginUnlockingAll): {
                typeUrl: string;
                value: _364.MsgBeginUnlockingAll;
            };
            beginUnlocking(value: _364.MsgBeginUnlocking): {
                typeUrl: string;
                value: _364.MsgBeginUnlocking;
            };
        };
        messages: {
            lockTokens(value: _364.MsgLockTokens): {
                typeUrl: string;
                value: _364.MsgLockTokens;
            };
            beginUnlockingAll(value: _364.MsgBeginUnlockingAll): {
                typeUrl: string;
                value: _364.MsgBeginUnlockingAll;
            };
            beginUnlocking(value: _364.MsgBeginUnlocking): {
                typeUrl: string;
                value: _364.MsgBeginUnlocking;
            };
        };
        ModuleBalanceRequest: {
            encode(_: _363.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.ModuleBalanceRequest;
            fromJSON(_: any): _363.ModuleBalanceRequest;
            toJSON(_: _363.ModuleBalanceRequest): unknown;
            fromPartial<I_6 extends unknown>(_: I_6): _363.ModuleBalanceRequest;
        };
        ModuleBalanceResponse: {
            encode(message: _363.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.ModuleBalanceResponse;
            fromJSON(object: any): _363.ModuleBalanceResponse;
            toJSON(message: _363.ModuleBalanceResponse): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _363.ModuleBalanceResponse;
        };
        ModuleLockedAmountRequest: {
            encode(_: _363.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.ModuleLockedAmountRequest;
            fromJSON(_: any): _363.ModuleLockedAmountRequest;
            toJSON(_: _363.ModuleLockedAmountRequest): unknown;
            fromPartial<I_8 extends unknown>(_: I_8): _363.ModuleLockedAmountRequest;
        };
        ModuleLockedAmountResponse: {
            encode(message: _363.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.ModuleLockedAmountResponse;
            fromJSON(object: any): _363.ModuleLockedAmountResponse;
            toJSON(message: _363.ModuleLockedAmountResponse): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _363.ModuleLockedAmountResponse;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _363.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.AccountUnlockableCoinsRequest;
            fromJSON(object: any): _363.AccountUnlockableCoinsRequest;
            toJSON(message: _363.AccountUnlockableCoinsRequest): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _363.AccountUnlockableCoinsRequest;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _363.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.AccountUnlockableCoinsResponse;
            fromJSON(object: any): _363.AccountUnlockableCoinsResponse;
            toJSON(message: _363.AccountUnlockableCoinsResponse): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _363.AccountUnlockableCoinsResponse;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _363.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.AccountUnlockingCoinsRequest;
            fromJSON(object: any): _363.AccountUnlockingCoinsRequest;
            toJSON(message: _363.AccountUnlockingCoinsRequest): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _363.AccountUnlockingCoinsRequest;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _363.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.AccountUnlockingCoinsResponse;
            fromJSON(object: any): _363.AccountUnlockingCoinsResponse;
            toJSON(message: _363.AccountUnlockingCoinsResponse): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _363.AccountUnlockingCoinsResponse;
        };
        AccountLockedCoinsRequest: {
            encode(message: _363.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.AccountLockedCoinsRequest;
            fromJSON(object: any): _363.AccountLockedCoinsRequest;
            toJSON(message: _363.AccountLockedCoinsRequest): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _363.AccountLockedCoinsRequest;
        };
        AccountLockedCoinsResponse: {
            encode(message: _363.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.AccountLockedCoinsResponse;
            fromJSON(object: any): _363.AccountLockedCoinsResponse;
            toJSON(message: _363.AccountLockedCoinsResponse): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _363.AccountLockedCoinsResponse;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _363.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.AccountLockedPastTimeRequest;
            fromJSON(object: any): _363.AccountLockedPastTimeRequest;
            toJSON(message: _363.AccountLockedPastTimeRequest): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _363.AccountLockedPastTimeRequest;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _363.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.AccountLockedPastTimeResponse;
            fromJSON(object: any): _363.AccountLockedPastTimeResponse;
            toJSON(message: _363.AccountLockedPastTimeResponse): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _363.AccountLockedPastTimeResponse;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _363.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromJSON(object: any): _363.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toJSON(message: _363.AccountLockedPastTimeNotUnlockingOnlyRequest): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _363.AccountLockedPastTimeNotUnlockingOnlyRequest;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _363.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromJSON(object: any): _363.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toJSON(message: _363.AccountLockedPastTimeNotUnlockingOnlyResponse): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _363.AccountLockedPastTimeNotUnlockingOnlyResponse;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _363.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.AccountUnlockedBeforeTimeRequest;
            fromJSON(object: any): _363.AccountUnlockedBeforeTimeRequest;
            toJSON(message: _363.AccountUnlockedBeforeTimeRequest): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _363.AccountUnlockedBeforeTimeRequest;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _363.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.AccountUnlockedBeforeTimeResponse;
            fromJSON(object: any): _363.AccountUnlockedBeforeTimeResponse;
            toJSON(message: _363.AccountUnlockedBeforeTimeResponse): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _363.AccountUnlockedBeforeTimeResponse;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _363.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.AccountLockedPastTimeDenomRequest;
            fromJSON(object: any): _363.AccountLockedPastTimeDenomRequest;
            toJSON(message: _363.AccountLockedPastTimeDenomRequest): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _363.AccountLockedPastTimeDenomRequest;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _363.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.AccountLockedPastTimeDenomResponse;
            fromJSON(object: any): _363.AccountLockedPastTimeDenomResponse;
            toJSON(message: _363.AccountLockedPastTimeDenomResponse): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _363.AccountLockedPastTimeDenomResponse;
        };
        LockedDenomRequest: {
            encode(message: _363.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.LockedDenomRequest;
            fromJSON(object: any): _363.LockedDenomRequest;
            toJSON(message: _363.LockedDenomRequest): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _363.LockedDenomRequest;
        };
        LockedDenomResponse: {
            encode(message: _363.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.LockedDenomResponse;
            fromJSON(object: any): _363.LockedDenomResponse;
            toJSON(message: _363.LockedDenomResponse): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _363.LockedDenomResponse;
        };
        LockedRequest: {
            encode(message: _363.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.LockedRequest;
            fromJSON(object: any): _363.LockedRequest;
            toJSON(message: _363.LockedRequest): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _363.LockedRequest;
        };
        LockedResponse: {
            encode(message: _363.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.LockedResponse;
            fromJSON(object: any): _363.LockedResponse;
            toJSON(message: _363.LockedResponse): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _363.LockedResponse;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _363.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.SyntheticLockupsByLockupIDRequest;
            fromJSON(object: any): _363.SyntheticLockupsByLockupIDRequest;
            toJSON(message: _363.SyntheticLockupsByLockupIDRequest): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _363.SyntheticLockupsByLockupIDRequest;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _363.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.SyntheticLockupsByLockupIDResponse;
            fromJSON(object: any): _363.SyntheticLockupsByLockupIDResponse;
            toJSON(message: _363.SyntheticLockupsByLockupIDResponse): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _363.SyntheticLockupsByLockupIDResponse;
        };
        AccountLockedLongerDurationRequest: {
            encode(message: _363.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.AccountLockedLongerDurationRequest;
            fromJSON(object: any): _363.AccountLockedLongerDurationRequest;
            toJSON(message: _363.AccountLockedLongerDurationRequest): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _363.AccountLockedLongerDurationRequest;
        };
        AccountLockedLongerDurationResponse: {
            encode(message: _363.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.AccountLockedLongerDurationResponse;
            fromJSON(object: any): _363.AccountLockedLongerDurationResponse;
            toJSON(message: _363.AccountLockedLongerDurationResponse): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _363.AccountLockedLongerDurationResponse;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            encode(message: _363.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromJSON(object: any): _363.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toJSON(message: _363.AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _363.AccountLockedLongerDurationNotUnlockingOnlyRequest;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            encode(message: _363.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromJSON(object: any): _363.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toJSON(message: _363.AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _363.AccountLockedLongerDurationNotUnlockingOnlyResponse;
        };
        AccountLockedLongerDurationDenomRequest: {
            encode(message: _363.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.AccountLockedLongerDurationDenomRequest;
            fromJSON(object: any): _363.AccountLockedLongerDurationDenomRequest;
            toJSON(message: _363.AccountLockedLongerDurationDenomRequest): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _363.AccountLockedLongerDurationDenomRequest;
        };
        AccountLockedLongerDurationDenomResponse: {
            encode(message: _363.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.AccountLockedLongerDurationDenomResponse;
            fromJSON(object: any): _363.AccountLockedLongerDurationDenomResponse;
            toJSON(message: _363.AccountLockedLongerDurationDenomResponse): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _363.AccountLockedLongerDurationDenomResponse;
        };
        lockQueryTypeFromJSON(object: any): _362.LockQueryType;
        lockQueryTypeToJSON(object: _362.LockQueryType): string;
        LockQueryType: typeof _362.LockQueryType;
        PeriodLock: {
            encode(message: _362.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _362.PeriodLock;
            fromJSON(object: any): _362.PeriodLock;
            toJSON(message: _362.PeriodLock): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _362.PeriodLock;
        };
        QueryCondition: {
            encode(message: _362.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _362.QueryCondition;
            fromJSON(object: any): _362.QueryCondition;
            toJSON(message: _362.QueryCondition): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _362.QueryCondition;
        };
        SyntheticLock: {
            encode(message: _362.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _362.SyntheticLock;
            fromJSON(object: any): _362.SyntheticLock;
            toJSON(message: _362.SyntheticLock): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _362.SyntheticLock;
        };
        GenesisState: {
            encode(message: _361.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _361.GenesisState;
            fromJSON(object: any): _361.GenesisState;
            toJSON(message: _361.GenesisState): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _361.GenesisState;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _375.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _375.QueryParamsRequest;
                fromJSON(_: any): _375.QueryParamsRequest;
                toJSON(_: _375.QueryParamsRequest): unknown;
                fromPartial<I extends unknown>(_: I): _375.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _375.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _375.QueryParamsResponse;
                fromJSON(object: any): _375.QueryParamsResponse;
                toJSON(message: _375.QueryParamsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _375.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _375.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _375.QueryEpochProvisionsRequest;
                fromJSON(_: any): _375.QueryEpochProvisionsRequest;
                toJSON(_: _375.QueryEpochProvisionsRequest): unknown;
                fromPartial<I_2 extends unknown>(_: I_2): _375.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _375.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _375.QueryEpochProvisionsResponse;
                fromJSON(object: any): _375.QueryEpochProvisionsResponse;
                toJSON(message: _375.QueryEpochProvisionsResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _375.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _374.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _374.Minter;
                fromJSON(object: any): _374.Minter;
                toJSON(message: _374.Minter): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _374.Minter;
            };
            WeightedAddress: {
                encode(message: _374.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _374.WeightedAddress;
                fromJSON(object: any): _374.WeightedAddress;
                toJSON(message: _374.WeightedAddress): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _374.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _374.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _374.DistributionProportions;
                fromJSON(object: any): _374.DistributionProportions;
                toJSON(message: _374.DistributionProportions): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _374.DistributionProportions;
            };
            Params: {
                encode(message: _374.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _374.Params;
                fromJSON(object: any): _374.Params;
                toJSON(message: _374.Params): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _374.Params;
            };
            GenesisState: {
                encode(message: _373.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _373.GenesisState;
                fromJSON(object: any): _373.GenesisState;
                toJSON(message: _373.GenesisState): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _373.GenesisState;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryGaugeIdsRequest: {
                encode(message: _379.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryGaugeIdsRequest;
                fromJSON(object: any): _379.QueryGaugeIdsRequest;
                toJSON(message: _379.QueryGaugeIdsRequest): unknown;
                fromPartial<I extends unknown>(object: I): _379.QueryGaugeIdsRequest;
            };
            QueryGaugeIdsResponse: {
                encode(message: _379.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryGaugeIdsResponse;
                fromJSON(object: any): _379.QueryGaugeIdsResponse;
                toJSON(message: _379.QueryGaugeIdsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _379.QueryGaugeIdsResponse;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                encode(message: _379.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromJSON(object: any): _379.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toJSON(message: _379.QueryGaugeIdsResponse_GaugeIdWithDuration): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _379.QueryGaugeIdsResponse_GaugeIdWithDuration;
            };
            QueryDistrInfoRequest: {
                encode(_: _379.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryDistrInfoRequest;
                fromJSON(_: any): _379.QueryDistrInfoRequest;
                toJSON(_: _379.QueryDistrInfoRequest): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _379.QueryDistrInfoRequest;
            };
            QueryDistrInfoResponse: {
                encode(message: _379.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryDistrInfoResponse;
                fromJSON(object: any): _379.QueryDistrInfoResponse;
                toJSON(message: _379.QueryDistrInfoResponse): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _379.QueryDistrInfoResponse;
            };
            QueryParamsRequest: {
                encode(_: _379.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryParamsRequest;
                fromJSON(_: any): _379.QueryParamsRequest;
                toJSON(_: _379.QueryParamsRequest): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _379.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _379.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryParamsResponse;
                fromJSON(object: any): _379.QueryParamsResponse;
                toJSON(message: _379.QueryParamsResponse): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _379.QueryParamsResponse;
            };
            QueryLockableDurationsRequest: {
                encode(_: _379.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryLockableDurationsRequest;
                fromJSON(_: any): _379.QueryLockableDurationsRequest;
                toJSON(_: _379.QueryLockableDurationsRequest): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _379.QueryLockableDurationsRequest;
            };
            QueryLockableDurationsResponse: {
                encode(message: _379.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryLockableDurationsResponse;
                fromJSON(object: any): _379.QueryLockableDurationsResponse;
                toJSON(message: _379.QueryLockableDurationsResponse): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _379.QueryLockableDurationsResponse;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _379.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryIncentivizedPoolsRequest;
                fromJSON(_: any): _379.QueryIncentivizedPoolsRequest;
                toJSON(_: _379.QueryIncentivizedPoolsRequest): unknown;
                fromPartial<I_9 extends unknown>(_: I_9): _379.QueryIncentivizedPoolsRequest;
            };
            IncentivizedPool: {
                encode(message: _379.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.IncentivizedPool;
                fromJSON(object: any): _379.IncentivizedPool;
                toJSON(message: _379.IncentivizedPool): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _379.IncentivizedPool;
            };
            QueryIncentivizedPoolsResponse: {
                encode(message: _379.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryIncentivizedPoolsResponse;
                fromJSON(object: any): _379.QueryIncentivizedPoolsResponse;
                toJSON(message: _379.QueryIncentivizedPoolsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _379.QueryIncentivizedPoolsResponse;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _379.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryExternalIncentiveGaugesRequest;
                fromJSON(_: any): _379.QueryExternalIncentiveGaugesRequest;
                toJSON(_: _379.QueryExternalIncentiveGaugesRequest): unknown;
                fromPartial<I_12 extends unknown>(_: I_12): _379.QueryExternalIncentiveGaugesRequest;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _379.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryExternalIncentiveGaugesResponse;
                fromJSON(object: any): _379.QueryExternalIncentiveGaugesResponse;
                toJSON(message: _379.QueryExternalIncentiveGaugesResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _379.QueryExternalIncentiveGaugesResponse;
            };
            Params: {
                encode(message: _378.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _378.Params;
                fromJSON(object: any): _378.Params;
                toJSON(message: _378.Params): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _378.Params;
            };
            LockableDurationsInfo: {
                encode(message: _378.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _378.LockableDurationsInfo;
                fromJSON(object: any): _378.LockableDurationsInfo;
                toJSON(message: _378.LockableDurationsInfo): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _378.LockableDurationsInfo;
            };
            DistrInfo: {
                encode(message: _378.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _378.DistrInfo;
                fromJSON(object: any): _378.DistrInfo;
                toJSON(message: _378.DistrInfo): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _378.DistrInfo;
            };
            DistrRecord: {
                encode(message: _378.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _378.DistrRecord;
                fromJSON(object: any): _378.DistrRecord;
                toJSON(message: _378.DistrRecord): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _378.DistrRecord;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _377.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _377.ReplacePoolIncentivesProposal;
                fromJSON(object: any): _377.ReplacePoolIncentivesProposal;
                toJSON(message: _377.ReplacePoolIncentivesProposal): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _377.ReplacePoolIncentivesProposal;
            };
            UpdatePoolIncentivesProposal: {
                encode(message: _377.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _377.UpdatePoolIncentivesProposal;
                fromJSON(object: any): _377.UpdatePoolIncentivesProposal;
                toJSON(message: _377.UpdatePoolIncentivesProposal): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _377.UpdatePoolIncentivesProposal;
            };
            GenesisState: {
                encode(message: _376.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _376.GenesisState;
                fromJSON(object: any): _376.GenesisState;
                toJSON(message: _376.GenesisState): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _376.GenesisState;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                encode(message: _380.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _380.Node;
                fromJSON(object: any): _380.Node;
                toJSON(message: _380.Node): unknown;
                fromPartial<I extends unknown>(object: I): _380.Node;
            };
            Child: {
                encode(message: _380.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _380.Child;
                fromJSON(object: any): _380.Child;
                toJSON(message: _380.Child): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _380.Child;
            };
            Leaf: {
                encode(message: _380.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _380.Leaf;
                fromJSON(object: any): _380.Leaf;
                toJSON(message: _380.Leaf): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _380.Leaf;
            };
        };
    }
    const superfluid: {
        MsgSuperfluidDelegate: {
            encode(message: _385.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _385.MsgSuperfluidDelegate;
            fromJSON(object: any): _385.MsgSuperfluidDelegate;
            toJSON(message: _385.MsgSuperfluidDelegate): unknown;
            fromPartial<I extends unknown>(object: I): _385.MsgSuperfluidDelegate;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _385.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _385.MsgSuperfluidDelegateResponse;
            fromJSON(_: any): _385.MsgSuperfluidDelegateResponse;
            toJSON(_: _385.MsgSuperfluidDelegateResponse): unknown;
            fromPartial<I_1 extends unknown>(_: I_1): _385.MsgSuperfluidDelegateResponse;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _385.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _385.MsgSuperfluidUndelegate;
            fromJSON(object: any): _385.MsgSuperfluidUndelegate;
            toJSON(message: _385.MsgSuperfluidUndelegate): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _385.MsgSuperfluidUndelegate;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _385.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _385.MsgSuperfluidUndelegateResponse;
            fromJSON(_: any): _385.MsgSuperfluidUndelegateResponse;
            toJSON(_: _385.MsgSuperfluidUndelegateResponse): unknown;
            fromPartial<I_3 extends unknown>(_: I_3): _385.MsgSuperfluidUndelegateResponse;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _385.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _385.MsgSuperfluidUnbondLock;
            fromJSON(object: any): _385.MsgSuperfluidUnbondLock;
            toJSON(message: _385.MsgSuperfluidUnbondLock): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _385.MsgSuperfluidUnbondLock;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _385.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _385.MsgSuperfluidUnbondLockResponse;
            fromJSON(_: any): _385.MsgSuperfluidUnbondLockResponse;
            toJSON(_: _385.MsgSuperfluidUnbondLockResponse): unknown;
            fromPartial<I_5 extends unknown>(_: I_5): _385.MsgSuperfluidUnbondLockResponse;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _385.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _385.MsgLockAndSuperfluidDelegate;
            fromJSON(object: any): _385.MsgLockAndSuperfluidDelegate;
            toJSON(message: _385.MsgLockAndSuperfluidDelegate): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _385.MsgLockAndSuperfluidDelegate;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _385.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _385.MsgLockAndSuperfluidDelegateResponse;
            fromJSON(object: any): _385.MsgLockAndSuperfluidDelegateResponse;
            toJSON(message: _385.MsgLockAndSuperfluidDelegateResponse): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _385.MsgLockAndSuperfluidDelegateResponse;
        };
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId, valAddr }: _385.MsgSuperfluidDelegate) => {
                    sender: string;
                    lockId: string;
                    valAddr: string;
                };
                fromAmino: ({ sender, lockId, valAddr }: {
                    sender: string;
                    lockId: string;
                    valAddr: string;
                }) => _385.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _385.MsgSuperfluidUndelegate) => {
                    sender: string;
                    lockId: string;
                };
                fromAmino: ({ sender, lockId }: {
                    sender: string;
                    lockId: string;
                }) => _385.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _385.MsgSuperfluidUnbondLock) => {
                    sender: string;
                    lockId: string;
                };
                fromAmino: ({ sender, lockId }: {
                    sender: string;
                    lockId: string;
                }) => _385.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, coins, valAddr }: _385.MsgLockAndSuperfluidDelegate) => {
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
                }) => _385.MsgLockAndSuperfluidDelegate;
            };
        };
        encoded: {
            superfluidDelegate(value: _385.MsgSuperfluidDelegate): {
                type_url: string;
                value: Uint8Array;
            };
            superfluidUndelegate(value: _385.MsgSuperfluidUndelegate): {
                type_url: string;
                value: Uint8Array;
            };
            superfluidUnbondLock(value: _385.MsgSuperfluidUnbondLock): {
                type_url: string;
                value: Uint8Array;
            };
            lockAndSuperfluidDelegate(value: _385.MsgLockAndSuperfluidDelegate): {
                type_url: string;
                value: Uint8Array;
            };
        };
        fromJSON: {
            superfluidDelegate(value: any): {
                typeUrl: string;
                value: _385.MsgSuperfluidDelegate;
            };
            superfluidUndelegate(value: any): {
                typeUrl: string;
                value: _385.MsgSuperfluidUndelegate;
            };
            superfluidUnbondLock(value: any): {
                typeUrl: string;
                value: _385.MsgSuperfluidUnbondLock;
            };
            lockAndSuperfluidDelegate(value: any): {
                typeUrl: string;
                value: _385.MsgLockAndSuperfluidDelegate;
            };
        };
        toJSON: {
            superfluidDelegate(value: _385.MsgSuperfluidDelegate): {
                typeUrl: string;
                value: unknown;
            };
            superfluidUndelegate(value: _385.MsgSuperfluidUndelegate): {
                typeUrl: string;
                value: unknown;
            };
            superfluidUnbondLock(value: _385.MsgSuperfluidUnbondLock): {
                typeUrl: string;
                value: unknown;
            };
            lockAndSuperfluidDelegate(value: _385.MsgLockAndSuperfluidDelegate): {
                typeUrl: string;
                value: unknown;
            };
        };
        json: {
            superfluidDelegate(value: _385.MsgSuperfluidDelegate): {
                typeUrl: string;
                value: _385.MsgSuperfluidDelegate;
            };
            superfluidUndelegate(value: _385.MsgSuperfluidUndelegate): {
                typeUrl: string;
                value: _385.MsgSuperfluidUndelegate;
            };
            superfluidUnbondLock(value: _385.MsgSuperfluidUnbondLock): {
                typeUrl: string;
                value: _385.MsgSuperfluidUnbondLock;
            };
            lockAndSuperfluidDelegate(value: _385.MsgLockAndSuperfluidDelegate): {
                typeUrl: string;
                value: _385.MsgLockAndSuperfluidDelegate;
            };
        };
        messages: {
            superfluidDelegate(value: _385.MsgSuperfluidDelegate): {
                typeUrl: string;
                value: _385.MsgSuperfluidDelegate;
            };
            superfluidUndelegate(value: _385.MsgSuperfluidUndelegate): {
                typeUrl: string;
                value: _385.MsgSuperfluidUndelegate;
            };
            superfluidUnbondLock(value: _385.MsgSuperfluidUnbondLock): {
                typeUrl: string;
                value: _385.MsgSuperfluidUnbondLock;
            };
            lockAndSuperfluidDelegate(value: _385.MsgLockAndSuperfluidDelegate): {
                typeUrl: string;
                value: _385.MsgLockAndSuperfluidDelegate;
            };
        };
        superfluidAssetTypeFromJSON(object: any): _384.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _384.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _384.SuperfluidAssetType;
        SuperfluidAsset: {
            encode(message: _384.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _384.SuperfluidAsset;
            fromJSON(object: any): _384.SuperfluidAsset;
            toJSON(message: _384.SuperfluidAsset): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _384.SuperfluidAsset;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _384.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _384.SuperfluidIntermediaryAccount;
            fromJSON(object: any): _384.SuperfluidIntermediaryAccount;
            toJSON(message: _384.SuperfluidIntermediaryAccount): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _384.SuperfluidIntermediaryAccount;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _384.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _384.OsmoEquivalentMultiplierRecord;
            fromJSON(object: any): _384.OsmoEquivalentMultiplierRecord;
            toJSON(message: _384.OsmoEquivalentMultiplierRecord): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _384.OsmoEquivalentMultiplierRecord;
        };
        SuperfluidDelegationRecord: {
            encode(message: _384.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _384.SuperfluidDelegationRecord;
            fromJSON(object: any): _384.SuperfluidDelegationRecord;
            toJSON(message: _384.SuperfluidDelegationRecord): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _384.SuperfluidDelegationRecord;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _384.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _384.LockIdIntermediaryAccountConnection;
            fromJSON(object: any): _384.LockIdIntermediaryAccountConnection;
            toJSON(message: _384.LockIdIntermediaryAccountConnection): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _384.LockIdIntermediaryAccountConnection;
        };
        QueryParamsRequest: {
            encode(_: _383.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.QueryParamsRequest;
            fromJSON(_: any): _383.QueryParamsRequest;
            toJSON(_: _383.QueryParamsRequest): unknown;
            fromPartial<I_13 extends unknown>(_: I_13): _383.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _383.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.QueryParamsResponse;
            fromJSON(object: any): _383.QueryParamsResponse;
            toJSON(message: _383.QueryParamsResponse): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _383.QueryParamsResponse;
        };
        AssetTypeRequest: {
            encode(message: _383.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.AssetTypeRequest;
            fromJSON(object: any): _383.AssetTypeRequest;
            toJSON(message: _383.AssetTypeRequest): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _383.AssetTypeRequest;
        };
        AssetTypeResponse: {
            encode(message: _383.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.AssetTypeResponse;
            fromJSON(object: any): _383.AssetTypeResponse;
            toJSON(message: _383.AssetTypeResponse): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _383.AssetTypeResponse;
        };
        AllAssetsRequest: {
            encode(_: _383.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.AllAssetsRequest;
            fromJSON(_: any): _383.AllAssetsRequest;
            toJSON(_: _383.AllAssetsRequest): unknown;
            fromPartial<I_17 extends unknown>(_: I_17): _383.AllAssetsRequest;
        };
        AllAssetsResponse: {
            encode(message: _383.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.AllAssetsResponse;
            fromJSON(object: any): _383.AllAssetsResponse;
            toJSON(message: _383.AllAssetsResponse): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _383.AllAssetsResponse;
        };
        AssetMultiplierRequest: {
            encode(message: _383.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.AssetMultiplierRequest;
            fromJSON(object: any): _383.AssetMultiplierRequest;
            toJSON(message: _383.AssetMultiplierRequest): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _383.AssetMultiplierRequest;
        };
        AssetMultiplierResponse: {
            encode(message: _383.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.AssetMultiplierResponse;
            fromJSON(object: any): _383.AssetMultiplierResponse;
            toJSON(message: _383.AssetMultiplierResponse): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _383.AssetMultiplierResponse;
        };
        SuperfluidIntermediaryAccountInfo: {
            encode(message: _383.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.SuperfluidIntermediaryAccountInfo;
            fromJSON(object: any): _383.SuperfluidIntermediaryAccountInfo;
            toJSON(message: _383.SuperfluidIntermediaryAccountInfo): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _383.SuperfluidIntermediaryAccountInfo;
        };
        AllIntermediaryAccountsRequest: {
            encode(message: _383.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.AllIntermediaryAccountsRequest;
            fromJSON(object: any): _383.AllIntermediaryAccountsRequest;
            toJSON(message: _383.AllIntermediaryAccountsRequest): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _383.AllIntermediaryAccountsRequest;
        };
        AllIntermediaryAccountsResponse: {
            encode(message: _383.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.AllIntermediaryAccountsResponse;
            fromJSON(object: any): _383.AllIntermediaryAccountsResponse;
            toJSON(message: _383.AllIntermediaryAccountsResponse): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _383.AllIntermediaryAccountsResponse;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _383.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.ConnectedIntermediaryAccountRequest;
            fromJSON(object: any): _383.ConnectedIntermediaryAccountRequest;
            toJSON(message: _383.ConnectedIntermediaryAccountRequest): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _383.ConnectedIntermediaryAccountRequest;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _383.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.ConnectedIntermediaryAccountResponse;
            fromJSON(object: any): _383.ConnectedIntermediaryAccountResponse;
            toJSON(message: _383.ConnectedIntermediaryAccountResponse): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _383.ConnectedIntermediaryAccountResponse;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _383.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.TotalSuperfluidDelegationsRequest;
            fromJSON(_: any): _383.TotalSuperfluidDelegationsRequest;
            toJSON(_: _383.TotalSuperfluidDelegationsRequest): unknown;
            fromPartial<I_26 extends unknown>(_: I_26): _383.TotalSuperfluidDelegationsRequest;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _383.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.TotalSuperfluidDelegationsResponse;
            fromJSON(object: any): _383.TotalSuperfluidDelegationsResponse;
            toJSON(message: _383.TotalSuperfluidDelegationsResponse): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _383.TotalSuperfluidDelegationsResponse;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _383.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.SuperfluidDelegationAmountRequest;
            fromJSON(object: any): _383.SuperfluidDelegationAmountRequest;
            toJSON(message: _383.SuperfluidDelegationAmountRequest): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _383.SuperfluidDelegationAmountRequest;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _383.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.SuperfluidDelegationAmountResponse;
            fromJSON(object: any): _383.SuperfluidDelegationAmountResponse;
            toJSON(message: _383.SuperfluidDelegationAmountResponse): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _383.SuperfluidDelegationAmountResponse;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _383.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.SuperfluidDelegationsByDelegatorRequest;
            fromJSON(object: any): _383.SuperfluidDelegationsByDelegatorRequest;
            toJSON(message: _383.SuperfluidDelegationsByDelegatorRequest): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _383.SuperfluidDelegationsByDelegatorRequest;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _383.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.SuperfluidDelegationsByDelegatorResponse;
            fromJSON(object: any): _383.SuperfluidDelegationsByDelegatorResponse;
            toJSON(message: _383.SuperfluidDelegationsByDelegatorResponse): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _383.SuperfluidDelegationsByDelegatorResponse;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _383.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.SuperfluidUndelegationsByDelegatorRequest;
            fromJSON(object: any): _383.SuperfluidUndelegationsByDelegatorRequest;
            toJSON(message: _383.SuperfluidUndelegationsByDelegatorRequest): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _383.SuperfluidUndelegationsByDelegatorRequest;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _383.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.SuperfluidUndelegationsByDelegatorResponse;
            fromJSON(object: any): _383.SuperfluidUndelegationsByDelegatorResponse;
            toJSON(message: _383.SuperfluidUndelegationsByDelegatorResponse): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _383.SuperfluidUndelegationsByDelegatorResponse;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _383.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.SuperfluidDelegationsByValidatorDenomRequest;
            fromJSON(object: any): _383.SuperfluidDelegationsByValidatorDenomRequest;
            toJSON(message: _383.SuperfluidDelegationsByValidatorDenomRequest): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _383.SuperfluidDelegationsByValidatorDenomRequest;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _383.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.SuperfluidDelegationsByValidatorDenomResponse;
            fromJSON(object: any): _383.SuperfluidDelegationsByValidatorDenomResponse;
            toJSON(message: _383.SuperfluidDelegationsByValidatorDenomResponse): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _383.SuperfluidDelegationsByValidatorDenomResponse;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _383.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromJSON(object: any): _383.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toJSON(message: _383.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _383.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _383.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromJSON(object: any): _383.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toJSON(message: _383.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _383.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
        };
        Params: {
            encode(message: _382.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.Params;
            fromJSON(object: any): _382.Params;
            toJSON(message: _382.Params): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _382.Params;
        };
        GenesisState: {
            encode(message: _381.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _381.GenesisState;
            fromJSON(object: any): _381.GenesisState;
            toJSON(message: _381.GenesisState): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _381.GenesisState;
        };
    };
    namespace txfees {
        const v1beta1: {
            QueryFeeTokensRequest: {
                encode(_: _397.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _397.QueryFeeTokensRequest;
                fromJSON(_: any): _397.QueryFeeTokensRequest;
                toJSON(_: _397.QueryFeeTokensRequest): unknown;
                fromPartial<I extends unknown>(_: I): _397.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _397.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _397.QueryFeeTokensResponse;
                fromJSON(object: any): _397.QueryFeeTokensResponse;
                toJSON(message: _397.QueryFeeTokensResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _397.QueryFeeTokensResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _397.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _397.QueryDenomPoolIdRequest;
                fromJSON(object: any): _397.QueryDenomPoolIdRequest;
                toJSON(message: _397.QueryDenomPoolIdRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _397.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _397.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _397.QueryDenomPoolIdResponse;
                fromJSON(object: any): _397.QueryDenomPoolIdResponse;
                toJSON(message: _397.QueryDenomPoolIdResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _397.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _397.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _397.QueryBaseDenomRequest;
                fromJSON(_: any): _397.QueryBaseDenomRequest;
                toJSON(_: _397.QueryBaseDenomRequest): unknown;
                fromPartial<I_4 extends unknown>(_: I_4): _397.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _397.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _397.QueryBaseDenomResponse;
                fromJSON(object: any): _397.QueryBaseDenomResponse;
                toJSON(message: _397.QueryBaseDenomResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _397.QueryBaseDenomResponse;
            };
            UpdateFeeTokenProposal: {
                encode(message: _396.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _396.UpdateFeeTokenProposal;
                fromJSON(object: any): _396.UpdateFeeTokenProposal;
                toJSON(message: _396.UpdateFeeTokenProposal): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _396.UpdateFeeTokenProposal;
            };
            GenesisState: {
                encode(message: _395.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _395.GenesisState;
                fromJSON(object: any): _395.GenesisState;
                toJSON(message: _395.GenesisState): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _395.GenesisState;
            };
            FeeToken: {
                encode(message: _394.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _394.FeeToken;
                fromJSON(object: any): _394.FeeToken;
                toJSON(message: _394.FeeToken): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _394.FeeToken;
            };
        };
    }
}
export declare namespace secret {
    namespace compute {
        const v1beta1: {
            accessTypeFromJSON(object: any): _401.AccessType;
            accessTypeToJSON(object: _401.AccessType): string;
            AccessType: typeof _401.AccessType;
            AccessTypeParam: {
                encode(message: _401.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _401.AccessTypeParam;
                fromJSON(object: any): _401.AccessTypeParam;
                toJSON(message: _401.AccessTypeParam): unknown;
                fromPartial<I extends unknown>(object: I): _401.AccessTypeParam;
            };
            CodeInfo: {
                encode(message: _401.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _401.CodeInfo;
                fromJSON(object: any): _401.CodeInfo;
                toJSON(message: _401.CodeInfo): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _401.CodeInfo;
            };
            ContractCustomInfo: {
                encode(message: _401.ContractCustomInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _401.ContractCustomInfo;
                fromJSON(object: any): _401.ContractCustomInfo;
                toJSON(message: _401.ContractCustomInfo): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _401.ContractCustomInfo;
            };
            ContractInfo: {
                encode(message: _401.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _401.ContractInfo;
                fromJSON(object: any): _401.ContractInfo;
                toJSON(message: _401.ContractInfo): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _401.ContractInfo;
            };
            AbsoluteTxPosition: {
                encode(message: _401.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _401.AbsoluteTxPosition;
                fromJSON(object: any): _401.AbsoluteTxPosition;
                toJSON(message: _401.AbsoluteTxPosition): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _401.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _401.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _401.Model;
                fromJSON(object: any): _401.Model;
                toJSON(message: _401.Model): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _401.Model;
            };
            QueryContractInfoRequest: {
                encode(message: _400.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryContractInfoRequest;
                fromJSON(object: any): _400.QueryContractInfoRequest;
                toJSON(message: _400.QueryContractInfoRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _400.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _400.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryContractInfoResponse;
                fromJSON(object: any): _400.QueryContractInfoResponse;
                toJSON(message: _400.QueryContractInfoResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _400.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _400.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryContractHistoryRequest;
                fromJSON(object: any): _400.QueryContractHistoryRequest;
                toJSON(message: _400.QueryContractHistoryRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _400.QueryContractHistoryRequest;
            };
            QueryContractsByCodeRequest: {
                encode(message: _400.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryContractsByCodeRequest;
                fromJSON(object: any): _400.QueryContractsByCodeRequest;
                toJSON(message: _400.QueryContractsByCodeRequest): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _400.QueryContractsByCodeRequest;
            };
            ContractInfoWithAddress: {
                encode(message: _400.ContractInfoWithAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.ContractInfoWithAddress;
                fromJSON(object: any): _400.ContractInfoWithAddress;
                toJSON(message: _400.ContractInfoWithAddress): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _400.ContractInfoWithAddress;
            };
            QueryContractsByCodeResponse: {
                encode(message: _400.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryContractsByCodeResponse;
                fromJSON(object: any): _400.QueryContractsByCodeResponse;
                toJSON(message: _400.QueryContractsByCodeResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _400.QueryContractsByCodeResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _400.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QuerySmartContractStateRequest;
                fromJSON(object: any): _400.QuerySmartContractStateRequest;
                toJSON(message: _400.QuerySmartContractStateRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _400.QuerySmartContractStateRequest;
            };
            QueryContractAddressByLabelRequest: {
                encode(message: _400.QueryContractAddressByLabelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryContractAddressByLabelRequest;
                fromJSON(object: any): _400.QueryContractAddressByLabelRequest;
                toJSON(message: _400.QueryContractAddressByLabelRequest): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _400.QueryContractAddressByLabelRequest;
            };
            QueryContractKeyRequest: {
                encode(message: _400.QueryContractKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryContractKeyRequest;
                fromJSON(object: any): _400.QueryContractKeyRequest;
                toJSON(message: _400.QueryContractKeyRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _400.QueryContractKeyRequest;
            };
            QueryContractHashRequest: {
                encode(message: _400.QueryContractHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryContractHashRequest;
                fromJSON(object: any): _400.QueryContractHashRequest;
                toJSON(message: _400.QueryContractHashRequest): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _400.QueryContractHashRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _400.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QuerySmartContractStateResponse;
                fromJSON(object: any): _400.QuerySmartContractStateResponse;
                toJSON(message: _400.QuerySmartContractStateResponse): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _400.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _400.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryCodeRequest;
                fromJSON(object: any): _400.QueryCodeRequest;
                toJSON(message: _400.QueryCodeRequest): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _400.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _400.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.CodeInfoResponse;
                fromJSON(object: any): _400.CodeInfoResponse;
                toJSON(message: _400.CodeInfoResponse): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _400.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _400.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryCodeResponse;
                fromJSON(object: any): _400.QueryCodeResponse;
                toJSON(message: _400.QueryCodeResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _400.QueryCodeResponse;
            };
            QueryCodesResponse: {
                encode(message: _400.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryCodesResponse;
                fromJSON(object: any): _400.QueryCodesResponse;
                toJSON(message: _400.QueryCodesResponse): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _400.QueryCodesResponse;
            };
            QueryContractAddressByLabelResponse: {
                encode(message: _400.QueryContractAddressByLabelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryContractAddressByLabelResponse;
                fromJSON(object: any): _400.QueryContractAddressByLabelResponse;
                toJSON(message: _400.QueryContractAddressByLabelResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _400.QueryContractAddressByLabelResponse;
            };
            QueryContractKeyResponse: {
                encode(message: _400.QueryContractKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryContractKeyResponse;
                fromJSON(object: any): _400.QueryContractKeyResponse;
                toJSON(message: _400.QueryContractKeyResponse): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _400.QueryContractKeyResponse;
            };
            QueryContractHashResponse: {
                encode(message: _400.QueryContractHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryContractHashResponse;
                fromJSON(object: any): _400.QueryContractHashResponse;
                toJSON(message: _400.QueryContractHashResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _400.QueryContractHashResponse;
            };
            DecryptedAnswer: {
                encode(message: _400.DecryptedAnswer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.DecryptedAnswer;
                fromJSON(object: any): _400.DecryptedAnswer;
                toJSON(message: _400.DecryptedAnswer): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _400.DecryptedAnswer;
            };
            MsgStoreCode: {
                encode(message: _399.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _399.MsgStoreCode;
                fromJSON(object: any): _399.MsgStoreCode;
                toJSON(message: _399.MsgStoreCode): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _399.MsgStoreCode;
            };
            MsgInstantiateContract: {
                encode(message: _399.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _399.MsgInstantiateContract;
                fromJSON(object: any): _399.MsgInstantiateContract;
                toJSON(message: _399.MsgInstantiateContract): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _399.MsgInstantiateContract;
            };
            MsgExecuteContract: {
                encode(message: _399.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _399.MsgExecuteContract;
                fromJSON(object: any): _399.MsgExecuteContract;
                toJSON(message: _399.MsgExecuteContract): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _399.MsgExecuteContract;
            };
            GenesisState: {
                encode(message: _398.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _398.GenesisState;
                fromJSON(object: any): _398.GenesisState;
                toJSON(message: _398.GenesisState): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _398.GenesisState;
            };
            Code: {
                encode(message: _398.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _398.Code;
                fromJSON(object: any): _398.Code;
                toJSON(message: _398.Code): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _398.Code;
            };
            Contract: {
                encode(message: _398.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _398.Contract;
                fromJSON(object: any): _398.Contract;
                toJSON(message: _398.Contract): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _398.Contract;
            };
            Sequence: {
                encode(message: _398.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _398.Sequence;
                fromJSON(object: any): _398.Sequence;
                toJSON(message: _398.Sequence): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _398.Sequence;
            };
        };
    }
    namespace registration {
        const v1beta1: {
            SeedConfig: {
                encode(message: _405.SeedConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.SeedConfig;
                fromJSON(object: any): _405.SeedConfig;
                toJSON(message: _405.SeedConfig): unknown;
                fromPartial<I extends unknown>(object: I): _405.SeedConfig;
            };
            RegistrationNodeInfo: {
                encode(message: _405.RegistrationNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.RegistrationNodeInfo;
                fromJSON(object: any): _405.RegistrationNodeInfo;
                toJSON(message: _405.RegistrationNodeInfo): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _405.RegistrationNodeInfo;
            };
            QueryEncryptedSeedRequest: {
                encode(message: _404.QueryEncryptedSeedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _404.QueryEncryptedSeedRequest;
                fromJSON(object: any): _404.QueryEncryptedSeedRequest;
                toJSON(message: _404.QueryEncryptedSeedRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _404.QueryEncryptedSeedRequest;
            };
            QueryEncryptedSeedResponse: {
                encode(message: _404.QueryEncryptedSeedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _404.QueryEncryptedSeedResponse;
                fromJSON(object: any): _404.QueryEncryptedSeedResponse;
                toJSON(message: _404.QueryEncryptedSeedResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _404.QueryEncryptedSeedResponse;
            };
            RaAuthenticate: {
                encode(message: _403.RaAuthenticate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.RaAuthenticate;
                fromJSON(object: any): _403.RaAuthenticate;
                toJSON(message: _403.RaAuthenticate): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _403.RaAuthenticate;
            };
            MasterCertificate: {
                encode(message: _403.MasterCertificate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MasterCertificate;
                fromJSON(object: any): _403.MasterCertificate;
                toJSON(message: _403.MasterCertificate): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _403.MasterCertificate;
            };
            Key: {
                encode(message: _403.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.Key;
                fromJSON(object: any): _403.Key;
                toJSON(message: _403.Key): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _403.Key;
            };
            GenesisState: {
                encode(message: _402.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _402.GenesisState;
                fromJSON(object: any): _402.GenesisState;
                toJSON(message: _402.GenesisState): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _402.GenesisState;
            };
        };
        namespace remote_attestation {
            const v1beta1: {
                QuoteReport: {
                    encode(message: _406.QuoteReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.QuoteReport;
                    fromJSON(object: any): _406.QuoteReport;
                    toJSON(message: _406.QuoteReport): unknown;
                    fromPartial<I extends unknown>(object: I): _406.QuoteReport;
                };
                QuoteReportBody: {
                    encode(message: _406.QuoteReportBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.QuoteReportBody;
                    fromJSON(object: any): _406.QuoteReportBody;
                    toJSON(message: _406.QuoteReportBody): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _406.QuoteReportBody;
                };
                QuoteReportData: {
                    encode(message: _406.QuoteReportData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.QuoteReportData;
                    fromJSON(object: any): _406.QuoteReportData;
                    toJSON(message: _406.QuoteReportData): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _406.QuoteReportData;
                };
                EndorsedAttestationReport: {
                    encode(message: _406.EndorsedAttestationReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.EndorsedAttestationReport;
                    fromJSON(object: any): _406.EndorsedAttestationReport;
                    toJSON(message: _406.EndorsedAttestationReport): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _406.EndorsedAttestationReport;
                };
                SGXEC256Signature: {
                    encode(message: _406.SGXEC256Signature, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.SGXEC256Signature;
                    fromJSON(object: any): _406.SGXEC256Signature;
                    toJSON(message: _406.SGXEC256Signature): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _406.SGXEC256Signature;
                };
                PlatformInfoBlob: {
                    encode(message: _406.PlatformInfoBlob, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.PlatformInfoBlob;
                    fromJSON(object: any): _406.PlatformInfoBlob;
                    toJSON(message: _406.PlatformInfoBlob): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _406.PlatformInfoBlob;
                };
            };
        }
    }
}
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _407.CheckTxType;
        checkTxTypeToJSON(object: _407.CheckTxType): string;
        evidenceTypeFromJSON(object: any): _407.EvidenceType;
        evidenceTypeToJSON(object: _407.EvidenceType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _407.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _407.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _407.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _407.ResponseApplySnapshotChunk_Result): string;
        CheckTxType: typeof _407.CheckTxType;
        EvidenceType: typeof _407.EvidenceType;
        Request: {
            encode(message: _407.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.Request;
            fromJSON(object: any): _407.Request;
            toJSON(message: _407.Request): unknown;
            fromPartial<I extends unknown>(object: I): _407.Request;
        };
        RequestEcho: {
            encode(message: _407.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.RequestEcho;
            fromJSON(object: any): _407.RequestEcho;
            toJSON(message: _407.RequestEcho): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _407.RequestEcho;
        };
        RequestFlush: {
            encode(_: _407.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.RequestFlush;
            fromJSON(_: any): _407.RequestFlush;
            toJSON(_: _407.RequestFlush): unknown;
            fromPartial<I_2 extends unknown>(_: I_2): _407.RequestFlush;
        };
        RequestInfo: {
            encode(message: _407.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.RequestInfo;
            fromJSON(object: any): _407.RequestInfo;
            toJSON(message: _407.RequestInfo): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _407.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _407.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.RequestSetOption;
            fromJSON(object: any): _407.RequestSetOption;
            toJSON(message: _407.RequestSetOption): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _407.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _407.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.RequestInitChain;
            fromJSON(object: any): _407.RequestInitChain;
            toJSON(message: _407.RequestInitChain): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _407.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _407.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.RequestQuery;
            fromJSON(object: any): _407.RequestQuery;
            toJSON(message: _407.RequestQuery): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _407.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _407.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.RequestBeginBlock;
            fromJSON(object: any): _407.RequestBeginBlock;
            toJSON(message: _407.RequestBeginBlock): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _407.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _407.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.RequestCheckTx;
            fromJSON(object: any): _407.RequestCheckTx;
            toJSON(message: _407.RequestCheckTx): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _407.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _407.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.RequestDeliverTx;
            fromJSON(object: any): _407.RequestDeliverTx;
            toJSON(message: _407.RequestDeliverTx): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _407.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _407.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.RequestEndBlock;
            fromJSON(object: any): _407.RequestEndBlock;
            toJSON(message: _407.RequestEndBlock): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _407.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _407.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.RequestCommit;
            fromJSON(_: any): _407.RequestCommit;
            toJSON(_: _407.RequestCommit): unknown;
            fromPartial<I_11 extends unknown>(_: I_11): _407.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _407.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.RequestListSnapshots;
            fromJSON(_: any): _407.RequestListSnapshots;
            toJSON(_: _407.RequestListSnapshots): unknown;
            fromPartial<I_12 extends unknown>(_: I_12): _407.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _407.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.RequestOfferSnapshot;
            fromJSON(object: any): _407.RequestOfferSnapshot;
            toJSON(message: _407.RequestOfferSnapshot): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _407.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _407.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.RequestLoadSnapshotChunk;
            fromJSON(object: any): _407.RequestLoadSnapshotChunk;
            toJSON(message: _407.RequestLoadSnapshotChunk): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _407.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _407.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.RequestApplySnapshotChunk;
            fromJSON(object: any): _407.RequestApplySnapshotChunk;
            toJSON(message: _407.RequestApplySnapshotChunk): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _407.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _407.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.Response;
            fromJSON(object: any): _407.Response;
            toJSON(message: _407.Response): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _407.Response;
        };
        ResponseException: {
            encode(message: _407.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.ResponseException;
            fromJSON(object: any): _407.ResponseException;
            toJSON(message: _407.ResponseException): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _407.ResponseException;
        };
        ResponseEcho: {
            encode(message: _407.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.ResponseEcho;
            fromJSON(object: any): _407.ResponseEcho;
            toJSON(message: _407.ResponseEcho): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _407.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _407.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.ResponseFlush;
            fromJSON(_: any): _407.ResponseFlush;
            toJSON(_: _407.ResponseFlush): unknown;
            fromPartial<I_19 extends unknown>(_: I_19): _407.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _407.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.ResponseInfo;
            fromJSON(object: any): _407.ResponseInfo;
            toJSON(message: _407.ResponseInfo): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _407.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _407.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.ResponseSetOption;
            fromJSON(object: any): _407.ResponseSetOption;
            toJSON(message: _407.ResponseSetOption): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _407.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _407.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.ResponseInitChain;
            fromJSON(object: any): _407.ResponseInitChain;
            toJSON(message: _407.ResponseInitChain): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _407.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _407.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.ResponseQuery;
            fromJSON(object: any): _407.ResponseQuery;
            toJSON(message: _407.ResponseQuery): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _407.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _407.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.ResponseBeginBlock;
            fromJSON(object: any): _407.ResponseBeginBlock;
            toJSON(message: _407.ResponseBeginBlock): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _407.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _407.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.ResponseCheckTx;
            fromJSON(object: any): _407.ResponseCheckTx;
            toJSON(message: _407.ResponseCheckTx): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _407.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _407.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.ResponseDeliverTx;
            fromJSON(object: any): _407.ResponseDeliverTx;
            toJSON(message: _407.ResponseDeliverTx): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _407.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _407.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.ResponseEndBlock;
            fromJSON(object: any): _407.ResponseEndBlock;
            toJSON(message: _407.ResponseEndBlock): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _407.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _407.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.ResponseCommit;
            fromJSON(object: any): _407.ResponseCommit;
            toJSON(message: _407.ResponseCommit): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _407.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _407.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.ResponseListSnapshots;
            fromJSON(object: any): _407.ResponseListSnapshots;
            toJSON(message: _407.ResponseListSnapshots): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _407.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _407.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.ResponseOfferSnapshot;
            fromJSON(object: any): _407.ResponseOfferSnapshot;
            toJSON(message: _407.ResponseOfferSnapshot): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _407.ResponseOfferSnapshot;
        };
        ResponseOfferSnapshot_Result: typeof _407.ResponseOfferSnapshot_Result;
        ResponseLoadSnapshotChunk: {
            encode(message: _407.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _407.ResponseLoadSnapshotChunk;
            toJSON(message: _407.ResponseLoadSnapshotChunk): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _407.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _407.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.ResponseApplySnapshotChunk;
            fromJSON(object: any): _407.ResponseApplySnapshotChunk;
            toJSON(message: _407.ResponseApplySnapshotChunk): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _407.ResponseApplySnapshotChunk;
        };
        ResponseApplySnapshotChunk_Result: typeof _407.ResponseApplySnapshotChunk_Result;
        ConsensusParams: {
            encode(message: _407.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.ConsensusParams;
            fromJSON(object: any): _407.ConsensusParams;
            toJSON(message: _407.ConsensusParams): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _407.ConsensusParams;
        };
        BlockParams: {
            encode(message: _407.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.BlockParams;
            fromJSON(object: any): _407.BlockParams;
            toJSON(message: _407.BlockParams): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _407.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _407.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.LastCommitInfo;
            fromJSON(object: any): _407.LastCommitInfo;
            toJSON(message: _407.LastCommitInfo): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _407.LastCommitInfo;
        };
        Event: {
            encode(message: _407.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.Event;
            fromJSON(object: any): _407.Event;
            toJSON(message: _407.Event): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _407.Event;
        };
        EventAttribute: {
            encode(message: _407.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.EventAttribute;
            fromJSON(object: any): _407.EventAttribute;
            toJSON(message: _407.EventAttribute): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _407.EventAttribute;
        };
        TxResult: {
            encode(message: _407.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.TxResult;
            fromJSON(object: any): _407.TxResult;
            toJSON(message: _407.TxResult): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _407.TxResult;
        };
        Validator: {
            encode(message: _407.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.Validator;
            fromJSON(object: any): _407.Validator;
            toJSON(message: _407.Validator): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _407.Validator;
        };
        ValidatorUpdate: {
            encode(message: _407.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.ValidatorUpdate;
            fromJSON(object: any): _407.ValidatorUpdate;
            toJSON(message: _407.ValidatorUpdate): unknown;
            fromPartial<I_40 extends unknown>(object: I_40): _407.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _407.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.VoteInfo;
            fromJSON(object: any): _407.VoteInfo;
            toJSON(message: _407.VoteInfo): unknown;
            fromPartial<I_41 extends unknown>(object: I_41): _407.VoteInfo;
        };
        Evidence: {
            encode(message: _407.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.Evidence;
            fromJSON(object: any): _407.Evidence;
            toJSON(message: _407.Evidence): unknown;
            fromPartial<I_42 extends unknown>(object: I_42): _407.Evidence;
        };
        Snapshot: {
            encode(message: _407.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.Snapshot;
            fromJSON(object: any): _407.Snapshot;
            toJSON(message: _407.Snapshot): unknown;
            fromPartial<I_43 extends unknown>(object: I_43): _407.Snapshot;
        };
        ABCIApplicationClientImpl: typeof _407.ABCIApplicationClientImpl;
    };
    const crypto: {
        Proof: {
            encode(message: _409.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _409.Proof;
            fromJSON(object: any): _409.Proof;
            toJSON(message: _409.Proof): unknown;
            fromPartial<I extends unknown>(object: I): _409.Proof;
        };
        ValueOp: {
            encode(message: _409.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _409.ValueOp;
            fromJSON(object: any): _409.ValueOp;
            toJSON(message: _409.ValueOp): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _409.ValueOp;
        };
        DominoOp: {
            encode(message: _409.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _409.DominoOp;
            fromJSON(object: any): _409.DominoOp;
            toJSON(message: _409.DominoOp): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _409.DominoOp;
        };
        ProofOp: {
            encode(message: _409.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _409.ProofOp;
            fromJSON(object: any): _409.ProofOp;
            toJSON(message: _409.ProofOp): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _409.ProofOp;
        };
        ProofOps: {
            encode(message: _409.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _409.ProofOps;
            fromJSON(object: any): _409.ProofOps;
            toJSON(message: _409.ProofOps): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _409.ProofOps;
        };
        PublicKey: {
            encode(message: _408.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _408.PublicKey;
            fromJSON(object: any): _408.PublicKey;
            toJSON(message: _408.PublicKey): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _408.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _410.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _410.BitArray;
                fromJSON(object: any): _410.BitArray;
                toJSON(message: _410.BitArray): unknown;
                fromPartial<I extends unknown>(object: I): _410.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _411.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _411.ProtocolVersion;
            fromJSON(object: any): _411.ProtocolVersion;
            toJSON(message: _411.ProtocolVersion): unknown;
            fromPartial<I extends unknown>(object: I): _411.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _411.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _411.NodeInfo;
            fromJSON(object: any): _411.NodeInfo;
            toJSON(message: _411.NodeInfo): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _411.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _411.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _411.NodeInfoOther;
            fromJSON(object: any): _411.NodeInfoOther;
            toJSON(message: _411.NodeInfoOther): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _411.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _411.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _411.PeerInfo;
            fromJSON(object: any): _411.PeerInfo;
            toJSON(message: _411.PeerInfo): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _411.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _411.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _411.PeerAddressInfo;
            fromJSON(object: any): _411.PeerAddressInfo;
            toJSON(message: _411.PeerAddressInfo): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _411.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _416.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.ValidatorSet;
            fromJSON(object: any): _416.ValidatorSet;
            toJSON(message: _416.ValidatorSet): unknown;
            fromPartial<I extends unknown>(object: I): _416.ValidatorSet;
        };
        Validator: {
            encode(message: _416.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.Validator;
            fromJSON(object: any): _416.Validator;
            toJSON(message: _416.Validator): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _416.Validator;
        };
        SimpleValidator: {
            encode(message: _416.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.SimpleValidator;
            fromJSON(object: any): _416.SimpleValidator;
            toJSON(message: _416.SimpleValidator): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _416.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _415.BlockIDFlag;
        blockIDFlagToJSON(object: _415.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _415.SignedMsgType;
        signedMsgTypeToJSON(object: _415.SignedMsgType): string;
        BlockIDFlag: typeof _415.BlockIDFlag;
        SignedMsgType: typeof _415.SignedMsgType;
        PartSetHeader: {
            encode(message: _415.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _415.PartSetHeader;
            fromJSON(object: any): _415.PartSetHeader;
            toJSON(message: _415.PartSetHeader): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _415.PartSetHeader;
        };
        Part: {
            encode(message: _415.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _415.Part;
            fromJSON(object: any): _415.Part;
            toJSON(message: _415.Part): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _415.Part;
        };
        BlockID: {
            encode(message: _415.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _415.BlockID;
            fromJSON(object: any): _415.BlockID;
            toJSON(message: _415.BlockID): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _415.BlockID;
        };
        Header: {
            encode(message: _415.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _415.Header;
            fromJSON(object: any): _415.Header;
            toJSON(message: _415.Header): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _415.Header;
        };
        Data: {
            encode(message: _415.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _415.Data;
            fromJSON(object: any): _415.Data;
            toJSON(message: _415.Data): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _415.Data;
        };
        Vote: {
            encode(message: _415.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _415.Vote;
            fromJSON(object: any): _415.Vote;
            toJSON(message: _415.Vote): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _415.Vote;
        };
        Commit: {
            encode(message: _415.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _415.Commit;
            fromJSON(object: any): _415.Commit;
            toJSON(message: _415.Commit): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _415.Commit;
        };
        CommitSig: {
            encode(message: _415.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _415.CommitSig;
            fromJSON(object: any): _415.CommitSig;
            toJSON(message: _415.CommitSig): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _415.CommitSig;
        };
        Proposal: {
            encode(message: _415.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _415.Proposal;
            fromJSON(object: any): _415.Proposal;
            toJSON(message: _415.Proposal): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _415.Proposal;
        };
        SignedHeader: {
            encode(message: _415.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _415.SignedHeader;
            fromJSON(object: any): _415.SignedHeader;
            toJSON(message: _415.SignedHeader): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _415.SignedHeader;
        };
        LightBlock: {
            encode(message: _415.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _415.LightBlock;
            fromJSON(object: any): _415.LightBlock;
            toJSON(message: _415.LightBlock): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _415.LightBlock;
        };
        BlockMeta: {
            encode(message: _415.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _415.BlockMeta;
            fromJSON(object: any): _415.BlockMeta;
            toJSON(message: _415.BlockMeta): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _415.BlockMeta;
        };
        TxProof: {
            encode(message: _415.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _415.TxProof;
            fromJSON(object: any): _415.TxProof;
            toJSON(message: _415.TxProof): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _415.TxProof;
        };
        ConsensusParams: {
            encode(message: _414.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _414.ConsensusParams;
            fromJSON(object: any): _414.ConsensusParams;
            toJSON(message: _414.ConsensusParams): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _414.ConsensusParams;
        };
        BlockParams: {
            encode(message: _414.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _414.BlockParams;
            fromJSON(object: any): _414.BlockParams;
            toJSON(message: _414.BlockParams): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _414.BlockParams;
        };
        EvidenceParams: {
            encode(message: _414.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _414.EvidenceParams;
            fromJSON(object: any): _414.EvidenceParams;
            toJSON(message: _414.EvidenceParams): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _414.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _414.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _414.ValidatorParams;
            fromJSON(object: any): _414.ValidatorParams;
            toJSON(message: _414.ValidatorParams): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _414.ValidatorParams;
        };
        VersionParams: {
            encode(message: _414.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _414.VersionParams;
            fromJSON(object: any): _414.VersionParams;
            toJSON(message: _414.VersionParams): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _414.VersionParams;
        };
        HashedParams: {
            encode(message: _414.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _414.HashedParams;
            fromJSON(object: any): _414.HashedParams;
            toJSON(message: _414.HashedParams): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _414.HashedParams;
        };
        Evidence: {
            encode(message: _413.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _413.Evidence;
            fromJSON(object: any): _413.Evidence;
            toJSON(message: _413.Evidence): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _413.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _413.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _413.DuplicateVoteEvidence;
            fromJSON(object: any): _413.DuplicateVoteEvidence;
            toJSON(message: _413.DuplicateVoteEvidence): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _413.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _413.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _413.LightClientAttackEvidence;
            fromJSON(object: any): _413.LightClientAttackEvidence;
            toJSON(message: _413.LightClientAttackEvidence): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _413.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _413.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _413.EvidenceList;
            fromJSON(object: any): _413.EvidenceList;
            toJSON(message: _413.EvidenceList): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _413.EvidenceList;
        };
        Block: {
            encode(message: _412.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _412.Block;
            fromJSON(object: any): _412.Block;
            toJSON(message: _412.Block): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _412.Block;
        };
    };
    const version: {
        App: {
            encode(message: _417.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.App;
            fromJSON(object: any): _417.App;
            toJSON(message: _417.App): unknown;
            fromPartial<I extends unknown>(object: I): _417.App;
        };
        Consensus: {
            encode(message: _417.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.Consensus;
            fromJSON(object: any): _417.Consensus;
            toJSON(message: _417.Consensus): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _417.Consensus;
        };
    };
}
export * from './client';
