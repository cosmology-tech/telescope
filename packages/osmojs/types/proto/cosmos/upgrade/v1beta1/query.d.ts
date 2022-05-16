import { Plan, ModuleVersion } from "./upgrade";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/**
 * QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanRequest {
}
/**
 * QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanResponse {
    /** plan is the current upgrade plan. */
    plan: Plan;
}
/**
 * QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanRequest {
    /** name is the name of the applied plan to query for. */
    name: string;
}
/**
 * QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanResponse {
    /** height is the block height at which the plan was applied. */
    height: Long;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the Query/UpgradedConsensusState
 * RPC method.
 */
/** @deprecated */
export interface QueryUpgradedConsensusStateRequest {
    /**
     * last height of the current chain must be sent in request
     * as this is the height under which next consensus state is stored
     */
    lastHeight: Long;
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
 * RPC method.
 */
/** @deprecated */
export interface QueryUpgradedConsensusStateResponse {
    /** Since: cosmos-sdk 0.43 */
    upgradedConsensusState: Uint8Array;
}
/**
 * QueryModuleVersionsRequest is the request type for the Query/ModuleVersions
 * RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryModuleVersionsRequest {
    /**
     * module_name is a field to query a specific module
     * consensus version from state. Leaving this empty will
     * fetch the full list of module versions from state
     */
    moduleName: string;
}
/**
 * QueryModuleVersionsResponse is the response type for the Query/ModuleVersions
 * RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryModuleVersionsResponse {
    /** module_versions is a list of module names with their consensus versions. */
    moduleVersions: ModuleVersion[];
}
/**
 * QueryAuthorityRequest is the request type for Query/Authority
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAuthorityRequest {
}
/**
 * QueryAuthorityResponse is the response type for Query/Authority
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAuthorityResponse {
    address: string;
}
export declare const QueryCurrentPlanRequest: {
    encode(_: QueryCurrentPlanRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentPlanRequest;
    fromJSON(_: any): QueryCurrentPlanRequest;
    toJSON(_: QueryCurrentPlanRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryCurrentPlanRequest;
};
export declare const QueryCurrentPlanResponse: {
    encode(message: QueryCurrentPlanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentPlanResponse;
    fromJSON(object: any): QueryCurrentPlanResponse;
    toJSON(message: QueryCurrentPlanResponse): unknown;
    fromPartial<I extends {
        plan?: {
            name?: string;
            time?: Date;
            height?: any;
            info?: string;
            upgradedClientState?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        };
    } & {
        plan?: {
            name?: string;
            time?: Date;
            height?: any;
            info?: string;
            upgradedClientState?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            name?: string;
            time?: Date;
            height?: any;
            info?: string;
            upgradedClientState?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["plan"]["upgradedClientState"], keyof import("../../../google/protobuf/any").Any>, never>;
        } & Record<Exclude<keyof I["plan"], keyof Plan>, never>;
    } & Record<Exclude<keyof I, "plan">, never>>(object: I): QueryCurrentPlanResponse;
};
export declare const QueryAppliedPlanRequest: {
    encode(message: QueryAppliedPlanRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppliedPlanRequest;
    fromJSON(object: any): QueryAppliedPlanRequest;
    toJSON(message: QueryAppliedPlanRequest): unknown;
    fromPartial<I extends {
        name?: string;
    } & {
        name?: string;
    } & Record<Exclude<keyof I, "name">, never>>(object: I): QueryAppliedPlanRequest;
};
export declare const QueryAppliedPlanResponse: {
    encode(message: QueryAppliedPlanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppliedPlanResponse;
    fromJSON(object: any): QueryAppliedPlanResponse;
    toJSON(message: QueryAppliedPlanResponse): unknown;
    fromPartial<I extends {
        height?: any;
    } & {
        height?: any;
    } & Record<Exclude<keyof I, "height">, never>>(object: I): QueryAppliedPlanResponse;
};
export declare const QueryUpgradedConsensusStateRequest: {
    encode(message: QueryUpgradedConsensusStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateRequest;
    fromJSON(object: any): QueryUpgradedConsensusStateRequest;
    toJSON(message: QueryUpgradedConsensusStateRequest): unknown;
    fromPartial<I extends {
        lastHeight?: any;
    } & {
        lastHeight?: any;
    } & Record<Exclude<keyof I, "lastHeight">, never>>(object: I): QueryUpgradedConsensusStateRequest;
};
export declare const QueryUpgradedConsensusStateResponse: {
    encode(message: QueryUpgradedConsensusStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateResponse;
    fromJSON(object: any): QueryUpgradedConsensusStateResponse;
    toJSON(message: QueryUpgradedConsensusStateResponse): unknown;
    fromPartial<I extends {
        upgradedConsensusState?: Uint8Array;
    } & {
        upgradedConsensusState?: Uint8Array;
    } & Record<Exclude<keyof I, "upgradedConsensusState">, never>>(object: I): QueryUpgradedConsensusStateResponse;
};
export declare const QueryModuleVersionsRequest: {
    encode(message: QueryModuleVersionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleVersionsRequest;
    fromJSON(object: any): QueryModuleVersionsRequest;
    toJSON(message: QueryModuleVersionsRequest): unknown;
    fromPartial<I extends {
        moduleName?: string;
    } & {
        moduleName?: string;
    } & Record<Exclude<keyof I, "moduleName">, never>>(object: I): QueryModuleVersionsRequest;
};
export declare const QueryModuleVersionsResponse: {
    encode(message: QueryModuleVersionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleVersionsResponse;
    fromJSON(object: any): QueryModuleVersionsResponse;
    toJSON(message: QueryModuleVersionsResponse): unknown;
    fromPartial<I extends {
        moduleVersions?: {
            name?: string;
            version?: any;
        }[];
    } & {
        moduleVersions?: {
            name?: string;
            version?: any;
        }[] & ({
            name?: string;
            version?: any;
        } & {
            name?: string;
            version?: any;
        } & Record<Exclude<keyof I["moduleVersions"][number], keyof ModuleVersion>, never>)[] & Record<Exclude<keyof I["moduleVersions"], keyof {
            name?: string;
            version?: any;
        }[]>, never>;
    } & Record<Exclude<keyof I, "moduleVersions">, never>>(object: I): QueryModuleVersionsResponse;
};
export declare const QueryAuthorityRequest: {
    encode(_: QueryAuthorityRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuthorityRequest;
    fromJSON(_: any): QueryAuthorityRequest;
    toJSON(_: QueryAuthorityRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryAuthorityRequest;
};
export declare const QueryAuthorityResponse: {
    encode(message: QueryAuthorityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuthorityResponse;
    fromJSON(object: any): QueryAuthorityResponse;
    toJSON(message: QueryAuthorityResponse): unknown;
    fromPartial<I extends {
        address?: string;
    } & {
        address?: string;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): QueryAuthorityResponse;
};
