import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Params, ValidatorOutstandingRewards, ValidatorAccumulatedCommission, ValidatorSlashEvent, DelegationDelegatorReward } from "./distribution";
import { DecCoin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsRequest {
    /** validator_address defines the validator address to query for. */
    validatorAddress: string;
}
/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsResponse {
    rewards: ValidatorOutstandingRewards;
}
/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionRequest {
    /** validator_address defines the validator address to query for. */
    validatorAddress: string;
}
/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionResponse {
    /** commission defines the commision the validator received. */
    commission: ValidatorAccumulatedCommission;
}
/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */
export interface QueryValidatorSlashesRequest {
    /** validator_address defines the validator address to query for. */
    validatorAddress: string;
    /** starting_height defines the optional starting height to query the slashes. */
    startingHeight: Long;
    /** starting_height defines the optional ending height to query the slashes. */
    endingHeight: Long;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */
export interface QueryValidatorSlashesResponse {
    /** slashes defines the slashes the validator received. */
    slashes: ValidatorSlashEvent[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequest {
    /** delegator_address defines the delegator address to query for. */
    delegatorAddress: string;
    /** validator_address defines the validator address to query for. */
    validatorAddress: string;
}
/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponse {
    /** rewards defines the rewards accrued by a delegation. */
    rewards: DecCoin[];
}
/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsRequest {
    /** delegator_address defines the delegator address to query for. */
    delegatorAddress: string;
}
/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsResponse {
    /** rewards defines all the rewards accrued by a delegator. */
    rewards: DelegationDelegatorReward[];
    /** total defines the sum of all the rewards. */
    total: DecCoin[];
}
/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
    /** delegator_address defines the delegator address to query for. */
    delegatorAddress: string;
}
/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
    /** validators defines the validators a delegator is delegating for. */
    validators: string[];
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequest {
    /** delegator_address defines the delegator address to query for. */
    delegatorAddress: string;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponse {
    /** withdraw_address defines the delegator address to query for. */
    withdrawAddress: string;
}
/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequest {
}
/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponse {
    /** pool defines community pool's coins. */
    pool: DecCoin[];
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial<I extends {
        params?: {
            communityTax?: string;
            baseProposerReward?: string;
            bonusProposerReward?: string;
            withdrawAddrEnabled?: boolean;
        };
    } & {
        params?: {
            communityTax?: string;
            baseProposerReward?: string;
            bonusProposerReward?: string;
            withdrawAddrEnabled?: boolean;
        } & {
            communityTax?: string;
            baseProposerReward?: string;
            bonusProposerReward?: string;
            withdrawAddrEnabled?: boolean;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
export declare const QueryValidatorOutstandingRewardsRequest: {
    encode(message: QueryValidatorOutstandingRewardsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorOutstandingRewardsRequest;
    fromJSON(object: any): QueryValidatorOutstandingRewardsRequest;
    toJSON(message: QueryValidatorOutstandingRewardsRequest): unknown;
    fromPartial<I extends {
        validatorAddress?: string;
    } & {
        validatorAddress?: string;
    } & Record<Exclude<keyof I, "validatorAddress">, never>>(object: I): QueryValidatorOutstandingRewardsRequest;
};
export declare const QueryValidatorOutstandingRewardsResponse: {
    encode(message: QueryValidatorOutstandingRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorOutstandingRewardsResponse;
    fromJSON(object: any): QueryValidatorOutstandingRewardsResponse;
    toJSON(message: QueryValidatorOutstandingRewardsResponse): unknown;
    fromPartial<I extends {
        rewards?: {
            rewards?: {
                denom?: string;
                amount?: string;
            }[];
        };
    } & {
        rewards?: {
            rewards?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            rewards?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["rewards"]["rewards"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["rewards"]["rewards"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["rewards"], "rewards">, never>;
    } & Record<Exclude<keyof I, "rewards">, never>>(object: I): QueryValidatorOutstandingRewardsResponse;
};
export declare const QueryValidatorCommissionRequest: {
    encode(message: QueryValidatorCommissionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorCommissionRequest;
    fromJSON(object: any): QueryValidatorCommissionRequest;
    toJSON(message: QueryValidatorCommissionRequest): unknown;
    fromPartial<I extends {
        validatorAddress?: string;
    } & {
        validatorAddress?: string;
    } & Record<Exclude<keyof I, "validatorAddress">, never>>(object: I): QueryValidatorCommissionRequest;
};
export declare const QueryValidatorCommissionResponse: {
    encode(message: QueryValidatorCommissionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorCommissionResponse;
    fromJSON(object: any): QueryValidatorCommissionResponse;
    toJSON(message: QueryValidatorCommissionResponse): unknown;
    fromPartial<I extends {
        commission?: {
            commission?: {
                denom?: string;
                amount?: string;
            }[];
        };
    } & {
        commission?: {
            commission?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            commission?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["commission"]["commission"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["commission"]["commission"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["commission"], "commission">, never>;
    } & Record<Exclude<keyof I, "commission">, never>>(object: I): QueryValidatorCommissionResponse;
};
export declare const QueryValidatorSlashesRequest: {
    encode(message: QueryValidatorSlashesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorSlashesRequest;
    fromJSON(object: any): QueryValidatorSlashesRequest;
    toJSON(message: QueryValidatorSlashesRequest): unknown;
    fromPartial<I extends {
        validatorAddress?: string;
        startingHeight?: any;
        endingHeight?: any;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        validatorAddress?: string;
        startingHeight?: any;
        endingHeight?: any;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof QueryValidatorSlashesRequest>, never>>(object: I): QueryValidatorSlashesRequest;
};
export declare const QueryValidatorSlashesResponse: {
    encode(message: QueryValidatorSlashesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorSlashesResponse;
    fromJSON(object: any): QueryValidatorSlashesResponse;
    toJSON(message: QueryValidatorSlashesResponse): unknown;
    fromPartial<I extends {
        slashes?: {
            validatorPeriod?: any;
            fraction?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        slashes?: {
            validatorPeriod?: any;
            fraction?: string;
        }[] & ({
            validatorPeriod?: any;
            fraction?: string;
        } & {
            validatorPeriod?: any;
            fraction?: string;
        } & Record<Exclude<keyof I["slashes"][number], keyof ValidatorSlashEvent>, never>)[] & Record<Exclude<keyof I["slashes"], keyof {
            validatorPeriod?: any;
            fraction?: string;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryValidatorSlashesResponse>, never>>(object: I): QueryValidatorSlashesResponse;
};
export declare const QueryDelegationRewardsRequest: {
    encode(message: QueryDelegationRewardsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationRewardsRequest;
    fromJSON(object: any): QueryDelegationRewardsRequest;
    toJSON(message: QueryDelegationRewardsRequest): unknown;
    fromPartial<I extends {
        delegatorAddress?: string;
        validatorAddress?: string;
    } & {
        delegatorAddress?: string;
        validatorAddress?: string;
    } & Record<Exclude<keyof I, keyof QueryDelegationRewardsRequest>, never>>(object: I): QueryDelegationRewardsRequest;
};
export declare const QueryDelegationRewardsResponse: {
    encode(message: QueryDelegationRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationRewardsResponse;
    fromJSON(object: any): QueryDelegationRewardsResponse;
    toJSON(message: QueryDelegationRewardsResponse): unknown;
    fromPartial<I extends {
        rewards?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        rewards?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["rewards"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["rewards"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "rewards">, never>>(object: I): QueryDelegationRewardsResponse;
};
export declare const QueryDelegationTotalRewardsRequest: {
    encode(message: QueryDelegationTotalRewardsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationTotalRewardsRequest;
    fromJSON(object: any): QueryDelegationTotalRewardsRequest;
    toJSON(message: QueryDelegationTotalRewardsRequest): unknown;
    fromPartial<I extends {
        delegatorAddress?: string;
    } & {
        delegatorAddress?: string;
    } & Record<Exclude<keyof I, "delegatorAddress">, never>>(object: I): QueryDelegationTotalRewardsRequest;
};
export declare const QueryDelegationTotalRewardsResponse: {
    encode(message: QueryDelegationTotalRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationTotalRewardsResponse;
    fromJSON(object: any): QueryDelegationTotalRewardsResponse;
    toJSON(message: QueryDelegationTotalRewardsResponse): unknown;
    fromPartial<I extends {
        rewards?: {
            validatorAddress?: string;
            reward?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
        total?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        rewards?: {
            validatorAddress?: string;
            reward?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            validatorAddress?: string;
            reward?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            validatorAddress?: string;
            reward?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["rewards"][number]["reward"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["rewards"][number]["reward"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["rewards"][number], keyof DelegationDelegatorReward>, never>)[] & Record<Exclude<keyof I["rewards"], keyof {
            validatorAddress?: string;
            reward?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
        total?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["total"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["total"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof QueryDelegationTotalRewardsResponse>, never>>(object: I): QueryDelegationTotalRewardsResponse;
};
export declare const QueryDelegatorValidatorsRequest: {
    encode(message: QueryDelegatorValidatorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsRequest;
    fromJSON(object: any): QueryDelegatorValidatorsRequest;
    toJSON(message: QueryDelegatorValidatorsRequest): unknown;
    fromPartial<I extends {
        delegatorAddress?: string;
    } & {
        delegatorAddress?: string;
    } & Record<Exclude<keyof I, "delegatorAddress">, never>>(object: I): QueryDelegatorValidatorsRequest;
};
export declare const QueryDelegatorValidatorsResponse: {
    encode(message: QueryDelegatorValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsResponse;
    fromJSON(object: any): QueryDelegatorValidatorsResponse;
    toJSON(message: QueryDelegatorValidatorsResponse): unknown;
    fromPartial<I extends {
        validators?: string[];
    } & {
        validators?: string[] & string[] & Record<Exclude<keyof I["validators"], keyof string[]>, never>;
    } & Record<Exclude<keyof I, "validators">, never>>(object: I): QueryDelegatorValidatorsResponse;
};
export declare const QueryDelegatorWithdrawAddressRequest: {
    encode(message: QueryDelegatorWithdrawAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressRequest;
    fromJSON(object: any): QueryDelegatorWithdrawAddressRequest;
    toJSON(message: QueryDelegatorWithdrawAddressRequest): unknown;
    fromPartial<I extends {
        delegatorAddress?: string;
    } & {
        delegatorAddress?: string;
    } & Record<Exclude<keyof I, "delegatorAddress">, never>>(object: I): QueryDelegatorWithdrawAddressRequest;
};
export declare const QueryDelegatorWithdrawAddressResponse: {
    encode(message: QueryDelegatorWithdrawAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressResponse;
    fromJSON(object: any): QueryDelegatorWithdrawAddressResponse;
    toJSON(message: QueryDelegatorWithdrawAddressResponse): unknown;
    fromPartial<I extends {
        withdrawAddress?: string;
    } & {
        withdrawAddress?: string;
    } & Record<Exclude<keyof I, "withdrawAddress">, never>>(object: I): QueryDelegatorWithdrawAddressResponse;
};
export declare const QueryCommunityPoolRequest: {
    encode(_: QueryCommunityPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommunityPoolRequest;
    fromJSON(_: any): QueryCommunityPoolRequest;
    toJSON(_: QueryCommunityPoolRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryCommunityPoolRequest;
};
export declare const QueryCommunityPoolResponse: {
    encode(message: QueryCommunityPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommunityPoolResponse;
    fromJSON(object: any): QueryCommunityPoolResponse;
    toJSON(message: QueryCommunityPoolResponse): unknown;
    fromPartial<I extends {
        pool?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        pool?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["pool"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["pool"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "pool">, never>>(object: I): QueryCommunityPoolResponse;
};
