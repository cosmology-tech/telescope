import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Validator, DelegationResponse, UnbondingDelegation, RedelegationResponse, HistoricalInfo, Pool, Params } from "./staking";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequest {
    /** status enables to query for validators matching a given status. */
    status: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponse {
    /** validators contains all the queried validators. */
    validators: Validator[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequest {
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponse {
    /** validator defines the the validator info. */
    validator: Validator;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequest {
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponse {
    delegationResponses: DelegationResponse[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequest {
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponse {
    unbondingResponses: UnbondingDelegation[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponse {
    /** delegation_responses defines the delegation info of a delegation. */
    delegationResponse: DelegationResponse;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponse {
    /** unbond defines the unbonding information of a delegation. */
    unbond: UnbondingDelegation;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponse {
    /** delegation_responses defines all the delegations' info of a delegator. */
    delegationResponses: DelegationResponse[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponse {
    unbondingResponses: UnbondingDelegation[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** src_validator_addr defines the validator address to redelegate from. */
    srcValidatorAddr: string;
    /** dst_validator_addr defines the validator address to redelegate to. */
    dstValidatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponse {
    redelegationResponses: RedelegationResponse[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
    /** validators defines the the validators' info of a delegator. */
    validators: Validator[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponse {
    /** validator defines the the validator info. */
    validator: Validator;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequest {
    /** height defines at which height to query the historical info. */
    height: Long;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponse {
    /** hist defines the historical info at the given height. */
    hist: HistoricalInfo;
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {
}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
    /** pool defines the pool info. */
    pool: Pool;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export declare const QueryValidatorsRequest: {
    encode(message: QueryValidatorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsRequest;
    fromJSON(object: any): QueryValidatorsRequest;
    toJSON(message: QueryValidatorsRequest): unknown;
    fromPartial<I extends {
        status?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        status?: string;
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
    } & Record<Exclude<keyof I, keyof QueryValidatorsRequest>, never>>(object: I): QueryValidatorsRequest;
};
export declare const QueryValidatorsResponse: {
    encode(message: QueryValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsResponse;
    fromJSON(object: any): QueryValidatorsResponse;
    toJSON(message: QueryValidatorsResponse): unknown;
    fromPartial<I extends {
        validators?: {
            operatorAddress?: string;
            consensusPubkey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            jailed?: boolean;
            status?: import("./staking").BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            };
            unbondingHeight?: any;
            unbondingTime?: Date;
            commission?: {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                };
                updateTime?: Date;
            };
            minSelfDelegation?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        validators?: {
            operatorAddress?: string;
            consensusPubkey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            jailed?: boolean;
            status?: import("./staking").BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            };
            unbondingHeight?: any;
            unbondingTime?: Date;
            commission?: {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                };
                updateTime?: Date;
            };
            minSelfDelegation?: string;
        }[] & ({
            operatorAddress?: string;
            consensusPubkey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            jailed?: boolean;
            status?: import("./staking").BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            };
            unbondingHeight?: any;
            unbondingTime?: Date;
            commission?: {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                };
                updateTime?: Date;
            };
            minSelfDelegation?: string;
        } & {
            operatorAddress?: string;
            consensusPubkey?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["validators"][number]["consensusPubkey"], keyof import("../../../google/protobuf/any").Any>, never>;
            jailed?: boolean;
            status?: import("./staking").BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            } & {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            } & Record<Exclude<keyof I["validators"][number]["description"], keyof import("./staking").Description>, never>;
            unbondingHeight?: any;
            unbondingTime?: Date;
            commission?: {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                };
                updateTime?: Date;
            } & {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                } & {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                } & Record<Exclude<keyof I["validators"][number]["commission"]["commissionRates"], keyof import("./staking").CommissionRates>, never>;
                updateTime?: Date;
            } & Record<Exclude<keyof I["validators"][number]["commission"], keyof import("./staking").Commission>, never>;
            minSelfDelegation?: string;
        } & Record<Exclude<keyof I["validators"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["validators"], keyof {
            operatorAddress?: string;
            consensusPubkey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            jailed?: boolean;
            status?: import("./staking").BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            };
            unbondingHeight?: any;
            unbondingTime?: Date;
            commission?: {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                };
                updateTime?: Date;
            };
            minSelfDelegation?: string;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryValidatorsResponse>, never>>(object: I): QueryValidatorsResponse;
};
export declare const QueryValidatorRequest: {
    encode(message: QueryValidatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorRequest;
    fromJSON(object: any): QueryValidatorRequest;
    toJSON(message: QueryValidatorRequest): unknown;
    fromPartial<I extends {
        validatorAddr?: string;
    } & {
        validatorAddr?: string;
    } & Record<Exclude<keyof I, "validatorAddr">, never>>(object: I): QueryValidatorRequest;
};
export declare const QueryValidatorResponse: {
    encode(message: QueryValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorResponse;
    fromJSON(object: any): QueryValidatorResponse;
    toJSON(message: QueryValidatorResponse): unknown;
    fromPartial<I extends {
        validator?: {
            operatorAddress?: string;
            consensusPubkey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            jailed?: boolean;
            status?: import("./staking").BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            };
            unbondingHeight?: any;
            unbondingTime?: Date;
            commission?: {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                };
                updateTime?: Date;
            };
            minSelfDelegation?: string;
        };
    } & {
        validator?: {
            operatorAddress?: string;
            consensusPubkey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            jailed?: boolean;
            status?: import("./staking").BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            };
            unbondingHeight?: any;
            unbondingTime?: Date;
            commission?: {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                };
                updateTime?: Date;
            };
            minSelfDelegation?: string;
        } & {
            operatorAddress?: string;
            consensusPubkey?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["validator"]["consensusPubkey"], keyof import("../../../google/protobuf/any").Any>, never>;
            jailed?: boolean;
            status?: import("./staking").BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            } & {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            } & Record<Exclude<keyof I["validator"]["description"], keyof import("./staking").Description>, never>;
            unbondingHeight?: any;
            unbondingTime?: Date;
            commission?: {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                };
                updateTime?: Date;
            } & {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                } & {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                } & Record<Exclude<keyof I["validator"]["commission"]["commissionRates"], keyof import("./staking").CommissionRates>, never>;
                updateTime?: Date;
            } & Record<Exclude<keyof I["validator"]["commission"], keyof import("./staking").Commission>, never>;
            minSelfDelegation?: string;
        } & Record<Exclude<keyof I["validator"], keyof Validator>, never>;
    } & Record<Exclude<keyof I, "validator">, never>>(object: I): QueryValidatorResponse;
};
export declare const QueryValidatorDelegationsRequest: {
    encode(message: QueryValidatorDelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorDelegationsRequest;
    fromJSON(object: any): QueryValidatorDelegationsRequest;
    toJSON(message: QueryValidatorDelegationsRequest): unknown;
    fromPartial<I extends {
        validatorAddr?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        validatorAddr?: string;
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
    } & Record<Exclude<keyof I, keyof QueryValidatorDelegationsRequest>, never>>(object: I): QueryValidatorDelegationsRequest;
};
export declare const QueryValidatorDelegationsResponse: {
    encode(message: QueryValidatorDelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorDelegationsResponse;
    fromJSON(object: any): QueryValidatorDelegationsResponse;
    toJSON(message: QueryValidatorDelegationsResponse): unknown;
    fromPartial<I extends {
        delegationResponses?: {
            delegation?: {
                delegatorAddress?: string;
                validatorAddress?: string;
                shares?: string;
            };
            balance?: {
                denom?: string;
                amount?: string;
            };
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        delegationResponses?: {
            delegation?: {
                delegatorAddress?: string;
                validatorAddress?: string;
                shares?: string;
            };
            balance?: {
                denom?: string;
                amount?: string;
            };
        }[] & ({
            delegation?: {
                delegatorAddress?: string;
                validatorAddress?: string;
                shares?: string;
            };
            balance?: {
                denom?: string;
                amount?: string;
            };
        } & {
            delegation?: {
                delegatorAddress?: string;
                validatorAddress?: string;
                shares?: string;
            } & {
                delegatorAddress?: string;
                validatorAddress?: string;
                shares?: string;
            } & Record<Exclude<keyof I["delegationResponses"][number]["delegation"], keyof import("./staking").Delegation>, never>;
            balance?: {
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["delegationResponses"][number]["balance"], keyof import("../../base/v1beta1/coin").Coin>, never>;
        } & Record<Exclude<keyof I["delegationResponses"][number], keyof DelegationResponse>, never>)[] & Record<Exclude<keyof I["delegationResponses"], keyof {
            delegation?: {
                delegatorAddress?: string;
                validatorAddress?: string;
                shares?: string;
            };
            balance?: {
                denom?: string;
                amount?: string;
            };
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryValidatorDelegationsResponse>, never>>(object: I): QueryValidatorDelegationsResponse;
};
export declare const QueryValidatorUnbondingDelegationsRequest: {
    encode(message: QueryValidatorUnbondingDelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsRequest;
    fromJSON(object: any): QueryValidatorUnbondingDelegationsRequest;
    toJSON(message: QueryValidatorUnbondingDelegationsRequest): unknown;
    fromPartial<I extends {
        validatorAddr?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        validatorAddr?: string;
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
    } & Record<Exclude<keyof I, keyof QueryValidatorUnbondingDelegationsRequest>, never>>(object: I): QueryValidatorUnbondingDelegationsRequest;
};
export declare const QueryValidatorUnbondingDelegationsResponse: {
    encode(message: QueryValidatorUnbondingDelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsResponse;
    fromJSON(object: any): QueryValidatorUnbondingDelegationsResponse;
    toJSON(message: QueryValidatorUnbondingDelegationsResponse): unknown;
    fromPartial<I extends {
        unbondingResponses?: {
            delegatorAddress?: string;
            validatorAddress?: string;
            entries?: {
                creationHeight?: any;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            }[];
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        unbondingResponses?: {
            delegatorAddress?: string;
            validatorAddress?: string;
            entries?: {
                creationHeight?: any;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            }[];
        }[] & ({
            delegatorAddress?: string;
            validatorAddress?: string;
            entries?: {
                creationHeight?: any;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            }[];
        } & {
            delegatorAddress?: string;
            validatorAddress?: string;
            entries?: {
                creationHeight?: any;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            }[] & ({
                creationHeight?: any;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            } & {
                creationHeight?: any;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            } & Record<Exclude<keyof I["unbondingResponses"][number]["entries"][number], keyof import("./staking").UnbondingDelegationEntry>, never>)[] & Record<Exclude<keyof I["unbondingResponses"][number]["entries"], keyof {
                creationHeight?: any;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["unbondingResponses"][number], keyof UnbondingDelegation>, never>)[] & Record<Exclude<keyof I["unbondingResponses"], keyof {
            delegatorAddress?: string;
            validatorAddress?: string;
            entries?: {
                creationHeight?: any;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            }[];
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryValidatorUnbondingDelegationsResponse>, never>>(object: I): QueryValidatorUnbondingDelegationsResponse;
};
export declare const QueryDelegationRequest: {
    encode(message: QueryDelegationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationRequest;
    fromJSON(object: any): QueryDelegationRequest;
    toJSON(message: QueryDelegationRequest): unknown;
    fromPartial<I extends {
        delegatorAddr?: string;
        validatorAddr?: string;
    } & {
        delegatorAddr?: string;
        validatorAddr?: string;
    } & Record<Exclude<keyof I, keyof QueryDelegationRequest>, never>>(object: I): QueryDelegationRequest;
};
export declare const QueryDelegationResponse: {
    encode(message: QueryDelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationResponse;
    fromJSON(object: any): QueryDelegationResponse;
    toJSON(message: QueryDelegationResponse): unknown;
    fromPartial<I extends {
        delegationResponse?: {
            delegation?: {
                delegatorAddress?: string;
                validatorAddress?: string;
                shares?: string;
            };
            balance?: {
                denom?: string;
                amount?: string;
            };
        };
    } & {
        delegationResponse?: {
            delegation?: {
                delegatorAddress?: string;
                validatorAddress?: string;
                shares?: string;
            };
            balance?: {
                denom?: string;
                amount?: string;
            };
        } & {
            delegation?: {
                delegatorAddress?: string;
                validatorAddress?: string;
                shares?: string;
            } & {
                delegatorAddress?: string;
                validatorAddress?: string;
                shares?: string;
            } & Record<Exclude<keyof I["delegationResponse"]["delegation"], keyof import("./staking").Delegation>, never>;
            balance?: {
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["delegationResponse"]["balance"], keyof import("../../base/v1beta1/coin").Coin>, never>;
        } & Record<Exclude<keyof I["delegationResponse"], keyof DelegationResponse>, never>;
    } & Record<Exclude<keyof I, "delegationResponse">, never>>(object: I): QueryDelegationResponse;
};
export declare const QueryUnbondingDelegationRequest: {
    encode(message: QueryUnbondingDelegationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingDelegationRequest;
    fromJSON(object: any): QueryUnbondingDelegationRequest;
    toJSON(message: QueryUnbondingDelegationRequest): unknown;
    fromPartial<I extends {
        delegatorAddr?: string;
        validatorAddr?: string;
    } & {
        delegatorAddr?: string;
        validatorAddr?: string;
    } & Record<Exclude<keyof I, keyof QueryUnbondingDelegationRequest>, never>>(object: I): QueryUnbondingDelegationRequest;
};
export declare const QueryUnbondingDelegationResponse: {
    encode(message: QueryUnbondingDelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingDelegationResponse;
    fromJSON(object: any): QueryUnbondingDelegationResponse;
    toJSON(message: QueryUnbondingDelegationResponse): unknown;
    fromPartial<I extends {
        unbond?: {
            delegatorAddress?: string;
            validatorAddress?: string;
            entries?: {
                creationHeight?: any;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            }[];
        };
    } & {
        unbond?: {
            delegatorAddress?: string;
            validatorAddress?: string;
            entries?: {
                creationHeight?: any;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            }[];
        } & {
            delegatorAddress?: string;
            validatorAddress?: string;
            entries?: {
                creationHeight?: any;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            }[] & ({
                creationHeight?: any;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            } & {
                creationHeight?: any;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            } & Record<Exclude<keyof I["unbond"]["entries"][number], keyof import("./staking").UnbondingDelegationEntry>, never>)[] & Record<Exclude<keyof I["unbond"]["entries"], keyof {
                creationHeight?: any;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["unbond"], keyof UnbondingDelegation>, never>;
    } & Record<Exclude<keyof I, "unbond">, never>>(object: I): QueryUnbondingDelegationResponse;
};
export declare const QueryDelegatorDelegationsRequest: {
    encode(message: QueryDelegatorDelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorDelegationsRequest;
    fromJSON(object: any): QueryDelegatorDelegationsRequest;
    toJSON(message: QueryDelegatorDelegationsRequest): unknown;
    fromPartial<I extends {
        delegatorAddr?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        delegatorAddr?: string;
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
    } & Record<Exclude<keyof I, keyof QueryDelegatorDelegationsRequest>, never>>(object: I): QueryDelegatorDelegationsRequest;
};
export declare const QueryDelegatorDelegationsResponse: {
    encode(message: QueryDelegatorDelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorDelegationsResponse;
    fromJSON(object: any): QueryDelegatorDelegationsResponse;
    toJSON(message: QueryDelegatorDelegationsResponse): unknown;
    fromPartial<I extends {
        delegationResponses?: {
            delegation?: {
                delegatorAddress?: string;
                validatorAddress?: string;
                shares?: string;
            };
            balance?: {
                denom?: string;
                amount?: string;
            };
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        delegationResponses?: {
            delegation?: {
                delegatorAddress?: string;
                validatorAddress?: string;
                shares?: string;
            };
            balance?: {
                denom?: string;
                amount?: string;
            };
        }[] & ({
            delegation?: {
                delegatorAddress?: string;
                validatorAddress?: string;
                shares?: string;
            };
            balance?: {
                denom?: string;
                amount?: string;
            };
        } & {
            delegation?: {
                delegatorAddress?: string;
                validatorAddress?: string;
                shares?: string;
            } & {
                delegatorAddress?: string;
                validatorAddress?: string;
                shares?: string;
            } & Record<Exclude<keyof I["delegationResponses"][number]["delegation"], keyof import("./staking").Delegation>, never>;
            balance?: {
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["delegationResponses"][number]["balance"], keyof import("../../base/v1beta1/coin").Coin>, never>;
        } & Record<Exclude<keyof I["delegationResponses"][number], keyof DelegationResponse>, never>)[] & Record<Exclude<keyof I["delegationResponses"], keyof {
            delegation?: {
                delegatorAddress?: string;
                validatorAddress?: string;
                shares?: string;
            };
            balance?: {
                denom?: string;
                amount?: string;
            };
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryDelegatorDelegationsResponse>, never>>(object: I): QueryDelegatorDelegationsResponse;
};
export declare const QueryDelegatorUnbondingDelegationsRequest: {
    encode(message: QueryDelegatorUnbondingDelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsRequest;
    fromJSON(object: any): QueryDelegatorUnbondingDelegationsRequest;
    toJSON(message: QueryDelegatorUnbondingDelegationsRequest): unknown;
    fromPartial<I extends {
        delegatorAddr?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        delegatorAddr?: string;
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
    } & Record<Exclude<keyof I, keyof QueryDelegatorUnbondingDelegationsRequest>, never>>(object: I): QueryDelegatorUnbondingDelegationsRequest;
};
export declare const QueryDelegatorUnbondingDelegationsResponse: {
    encode(message: QueryDelegatorUnbondingDelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsResponse;
    fromJSON(object: any): QueryDelegatorUnbondingDelegationsResponse;
    toJSON(message: QueryDelegatorUnbondingDelegationsResponse): unknown;
    fromPartial<I extends {
        unbondingResponses?: {
            delegatorAddress?: string;
            validatorAddress?: string;
            entries?: {
                creationHeight?: any;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            }[];
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        unbondingResponses?: {
            delegatorAddress?: string;
            validatorAddress?: string;
            entries?: {
                creationHeight?: any;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            }[];
        }[] & ({
            delegatorAddress?: string;
            validatorAddress?: string;
            entries?: {
                creationHeight?: any;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            }[];
        } & {
            delegatorAddress?: string;
            validatorAddress?: string;
            entries?: {
                creationHeight?: any;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            }[] & ({
                creationHeight?: any;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            } & {
                creationHeight?: any;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            } & Record<Exclude<keyof I["unbondingResponses"][number]["entries"][number], keyof import("./staking").UnbondingDelegationEntry>, never>)[] & Record<Exclude<keyof I["unbondingResponses"][number]["entries"], keyof {
                creationHeight?: any;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["unbondingResponses"][number], keyof UnbondingDelegation>, never>)[] & Record<Exclude<keyof I["unbondingResponses"], keyof {
            delegatorAddress?: string;
            validatorAddress?: string;
            entries?: {
                creationHeight?: any;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            }[];
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryDelegatorUnbondingDelegationsResponse>, never>>(object: I): QueryDelegatorUnbondingDelegationsResponse;
};
export declare const QueryRedelegationsRequest: {
    encode(message: QueryRedelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedelegationsRequest;
    fromJSON(object: any): QueryRedelegationsRequest;
    toJSON(message: QueryRedelegationsRequest): unknown;
    fromPartial<I extends {
        delegatorAddr?: string;
        srcValidatorAddr?: string;
        dstValidatorAddr?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        delegatorAddr?: string;
        srcValidatorAddr?: string;
        dstValidatorAddr?: string;
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
    } & Record<Exclude<keyof I, keyof QueryRedelegationsRequest>, never>>(object: I): QueryRedelegationsRequest;
};
export declare const QueryRedelegationsResponse: {
    encode(message: QueryRedelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedelegationsResponse;
    fromJSON(object: any): QueryRedelegationsResponse;
    toJSON(message: QueryRedelegationsResponse): unknown;
    fromPartial<I extends {
        redelegationResponses?: {
            redelegation?: {
                delegatorAddress?: string;
                validatorSrcAddress?: string;
                validatorDstAddress?: string;
                entries?: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                }[];
            };
            entries?: {
                redelegationEntry?: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                };
                balance?: string;
            }[];
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        redelegationResponses?: {
            redelegation?: {
                delegatorAddress?: string;
                validatorSrcAddress?: string;
                validatorDstAddress?: string;
                entries?: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                }[];
            };
            entries?: {
                redelegationEntry?: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                };
                balance?: string;
            }[];
        }[] & ({
            redelegation?: {
                delegatorAddress?: string;
                validatorSrcAddress?: string;
                validatorDstAddress?: string;
                entries?: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                }[];
            };
            entries?: {
                redelegationEntry?: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                };
                balance?: string;
            }[];
        } & {
            redelegation?: {
                delegatorAddress?: string;
                validatorSrcAddress?: string;
                validatorDstAddress?: string;
                entries?: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                }[];
            } & {
                delegatorAddress?: string;
                validatorSrcAddress?: string;
                validatorDstAddress?: string;
                entries?: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                }[] & ({
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                } & {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                } & Record<Exclude<keyof I["redelegationResponses"][number]["redelegation"]["entries"][number], keyof import("./staking").RedelegationEntry>, never>)[] & Record<Exclude<keyof I["redelegationResponses"][number]["redelegation"]["entries"], keyof {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["redelegationResponses"][number]["redelegation"], keyof import("./staking").Redelegation>, never>;
            entries?: {
                redelegationEntry?: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                };
                balance?: string;
            }[] & ({
                redelegationEntry?: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                };
                balance?: string;
            } & {
                redelegationEntry?: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                } & {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                } & Record<Exclude<keyof I["redelegationResponses"][number]["entries"][number]["redelegationEntry"], keyof import("./staking").RedelegationEntry>, never>;
                balance?: string;
            } & Record<Exclude<keyof I["redelegationResponses"][number]["entries"][number], keyof import("./staking").RedelegationEntryResponse>, never>)[] & Record<Exclude<keyof I["redelegationResponses"][number]["entries"], keyof {
                redelegationEntry?: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                };
                balance?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["redelegationResponses"][number], keyof RedelegationResponse>, never>)[] & Record<Exclude<keyof I["redelegationResponses"], keyof {
            redelegation?: {
                delegatorAddress?: string;
                validatorSrcAddress?: string;
                validatorDstAddress?: string;
                entries?: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                }[];
            };
            entries?: {
                redelegationEntry?: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                };
                balance?: string;
            }[];
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryRedelegationsResponse>, never>>(object: I): QueryRedelegationsResponse;
};
export declare const QueryDelegatorValidatorsRequest: {
    encode(message: QueryDelegatorValidatorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsRequest;
    fromJSON(object: any): QueryDelegatorValidatorsRequest;
    toJSON(message: QueryDelegatorValidatorsRequest): unknown;
    fromPartial<I extends {
        delegatorAddr?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        delegatorAddr?: string;
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
    } & Record<Exclude<keyof I, keyof QueryDelegatorValidatorsRequest>, never>>(object: I): QueryDelegatorValidatorsRequest;
};
export declare const QueryDelegatorValidatorsResponse: {
    encode(message: QueryDelegatorValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsResponse;
    fromJSON(object: any): QueryDelegatorValidatorsResponse;
    toJSON(message: QueryDelegatorValidatorsResponse): unknown;
    fromPartial<I extends {
        validators?: {
            operatorAddress?: string;
            consensusPubkey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            jailed?: boolean;
            status?: import("./staking").BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            };
            unbondingHeight?: any;
            unbondingTime?: Date;
            commission?: {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                };
                updateTime?: Date;
            };
            minSelfDelegation?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        validators?: {
            operatorAddress?: string;
            consensusPubkey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            jailed?: boolean;
            status?: import("./staking").BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            };
            unbondingHeight?: any;
            unbondingTime?: Date;
            commission?: {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                };
                updateTime?: Date;
            };
            minSelfDelegation?: string;
        }[] & ({
            operatorAddress?: string;
            consensusPubkey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            jailed?: boolean;
            status?: import("./staking").BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            };
            unbondingHeight?: any;
            unbondingTime?: Date;
            commission?: {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                };
                updateTime?: Date;
            };
            minSelfDelegation?: string;
        } & {
            operatorAddress?: string;
            consensusPubkey?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["validators"][number]["consensusPubkey"], keyof import("../../../google/protobuf/any").Any>, never>;
            jailed?: boolean;
            status?: import("./staking").BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            } & {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            } & Record<Exclude<keyof I["validators"][number]["description"], keyof import("./staking").Description>, never>;
            unbondingHeight?: any;
            unbondingTime?: Date;
            commission?: {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                };
                updateTime?: Date;
            } & {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                } & {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                } & Record<Exclude<keyof I["validators"][number]["commission"]["commissionRates"], keyof import("./staking").CommissionRates>, never>;
                updateTime?: Date;
            } & Record<Exclude<keyof I["validators"][number]["commission"], keyof import("./staking").Commission>, never>;
            minSelfDelegation?: string;
        } & Record<Exclude<keyof I["validators"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["validators"], keyof {
            operatorAddress?: string;
            consensusPubkey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            jailed?: boolean;
            status?: import("./staking").BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            };
            unbondingHeight?: any;
            unbondingTime?: Date;
            commission?: {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                };
                updateTime?: Date;
            };
            minSelfDelegation?: string;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryDelegatorValidatorsResponse>, never>>(object: I): QueryDelegatorValidatorsResponse;
};
export declare const QueryDelegatorValidatorRequest: {
    encode(message: QueryDelegatorValidatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorRequest;
    fromJSON(object: any): QueryDelegatorValidatorRequest;
    toJSON(message: QueryDelegatorValidatorRequest): unknown;
    fromPartial<I extends {
        delegatorAddr?: string;
        validatorAddr?: string;
    } & {
        delegatorAddr?: string;
        validatorAddr?: string;
    } & Record<Exclude<keyof I, keyof QueryDelegatorValidatorRequest>, never>>(object: I): QueryDelegatorValidatorRequest;
};
export declare const QueryDelegatorValidatorResponse: {
    encode(message: QueryDelegatorValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorResponse;
    fromJSON(object: any): QueryDelegatorValidatorResponse;
    toJSON(message: QueryDelegatorValidatorResponse): unknown;
    fromPartial<I extends {
        validator?: {
            operatorAddress?: string;
            consensusPubkey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            jailed?: boolean;
            status?: import("./staking").BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            };
            unbondingHeight?: any;
            unbondingTime?: Date;
            commission?: {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                };
                updateTime?: Date;
            };
            minSelfDelegation?: string;
        };
    } & {
        validator?: {
            operatorAddress?: string;
            consensusPubkey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            jailed?: boolean;
            status?: import("./staking").BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            };
            unbondingHeight?: any;
            unbondingTime?: Date;
            commission?: {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                };
                updateTime?: Date;
            };
            minSelfDelegation?: string;
        } & {
            operatorAddress?: string;
            consensusPubkey?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["validator"]["consensusPubkey"], keyof import("../../../google/protobuf/any").Any>, never>;
            jailed?: boolean;
            status?: import("./staking").BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            } & {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            } & Record<Exclude<keyof I["validator"]["description"], keyof import("./staking").Description>, never>;
            unbondingHeight?: any;
            unbondingTime?: Date;
            commission?: {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                };
                updateTime?: Date;
            } & {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                } & {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                } & Record<Exclude<keyof I["validator"]["commission"]["commissionRates"], keyof import("./staking").CommissionRates>, never>;
                updateTime?: Date;
            } & Record<Exclude<keyof I["validator"]["commission"], keyof import("./staking").Commission>, never>;
            minSelfDelegation?: string;
        } & Record<Exclude<keyof I["validator"], keyof Validator>, never>;
    } & Record<Exclude<keyof I, "validator">, never>>(object: I): QueryDelegatorValidatorResponse;
};
export declare const QueryHistoricalInfoRequest: {
    encode(message: QueryHistoricalInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalInfoRequest;
    fromJSON(object: any): QueryHistoricalInfoRequest;
    toJSON(message: QueryHistoricalInfoRequest): unknown;
    fromPartial<I extends {
        height?: any;
    } & {
        height?: any;
    } & Record<Exclude<keyof I, "height">, never>>(object: I): QueryHistoricalInfoRequest;
};
export declare const QueryHistoricalInfoResponse: {
    encode(message: QueryHistoricalInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalInfoResponse;
    fromJSON(object: any): QueryHistoricalInfoResponse;
    toJSON(message: QueryHistoricalInfoResponse): unknown;
    fromPartial<I extends {
        hist?: {
            header?: {
                version?: {
                    block?: any;
                    app?: any;
                };
                chainId?: string;
                height?: any;
                time?: Date;
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            };
            valset?: {
                operatorAddress?: string;
                consensusPubkey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                jailed?: boolean;
                status?: import("./staking").BondStatus;
                tokens?: string;
                delegatorShares?: string;
                description?: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    securityContact?: string;
                    details?: string;
                };
                unbondingHeight?: any;
                unbondingTime?: Date;
                commission?: {
                    commissionRates?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    updateTime?: Date;
                };
                minSelfDelegation?: string;
            }[];
        };
    } & {
        hist?: {
            header?: {
                version?: {
                    block?: any;
                    app?: any;
                };
                chainId?: string;
                height?: any;
                time?: Date;
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            };
            valset?: {
                operatorAddress?: string;
                consensusPubkey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                jailed?: boolean;
                status?: import("./staking").BondStatus;
                tokens?: string;
                delegatorShares?: string;
                description?: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    securityContact?: string;
                    details?: string;
                };
                unbondingHeight?: any;
                unbondingTime?: Date;
                commission?: {
                    commissionRates?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    updateTime?: Date;
                };
                minSelfDelegation?: string;
            }[];
        } & {
            header?: {
                version?: {
                    block?: any;
                    app?: any;
                };
                chainId?: string;
                height?: any;
                time?: Date;
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            } & {
                version?: {
                    block?: any;
                    app?: any;
                } & {
                    block?: any;
                    app?: any;
                } & Record<Exclude<keyof I["hist"]["header"]["version"], keyof import("../../../tendermint/version/types").Consensus>, never>;
                chainId?: string;
                height?: any;
                time?: Date;
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                } & {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    } & {
                        total?: number;
                        hash?: Uint8Array;
                    } & Record<Exclude<keyof I["hist"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../../../tendermint/types/types").PartSetHeader>, never>;
                } & Record<Exclude<keyof I["hist"]["header"]["lastBlockId"], keyof import("../../../tendermint/types/types").BlockID>, never>;
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            } & Record<Exclude<keyof I["hist"]["header"], keyof import("../../../tendermint/types/types").Header>, never>;
            valset?: {
                operatorAddress?: string;
                consensusPubkey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                jailed?: boolean;
                status?: import("./staking").BondStatus;
                tokens?: string;
                delegatorShares?: string;
                description?: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    securityContact?: string;
                    details?: string;
                };
                unbondingHeight?: any;
                unbondingTime?: Date;
                commission?: {
                    commissionRates?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    updateTime?: Date;
                };
                minSelfDelegation?: string;
            }[] & ({
                operatorAddress?: string;
                consensusPubkey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                jailed?: boolean;
                status?: import("./staking").BondStatus;
                tokens?: string;
                delegatorShares?: string;
                description?: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    securityContact?: string;
                    details?: string;
                };
                unbondingHeight?: any;
                unbondingTime?: Date;
                commission?: {
                    commissionRates?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    updateTime?: Date;
                };
                minSelfDelegation?: string;
            } & {
                operatorAddress?: string;
                consensusPubkey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["hist"]["valset"][number]["consensusPubkey"], keyof import("../../../google/protobuf/any").Any>, never>;
                jailed?: boolean;
                status?: import("./staking").BondStatus;
                tokens?: string;
                delegatorShares?: string;
                description?: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    securityContact?: string;
                    details?: string;
                } & {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    securityContact?: string;
                    details?: string;
                } & Record<Exclude<keyof I["hist"]["valset"][number]["description"], keyof import("./staking").Description>, never>;
                unbondingHeight?: any;
                unbondingTime?: Date;
                commission?: {
                    commissionRates?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    updateTime?: Date;
                } & {
                    commissionRates?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    } & {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    } & Record<Exclude<keyof I["hist"]["valset"][number]["commission"]["commissionRates"], keyof import("./staking").CommissionRates>, never>;
                    updateTime?: Date;
                } & Record<Exclude<keyof I["hist"]["valset"][number]["commission"], keyof import("./staking").Commission>, never>;
                minSelfDelegation?: string;
            } & Record<Exclude<keyof I["hist"]["valset"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["hist"]["valset"], keyof {
                operatorAddress?: string;
                consensusPubkey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                jailed?: boolean;
                status?: import("./staking").BondStatus;
                tokens?: string;
                delegatorShares?: string;
                description?: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    securityContact?: string;
                    details?: string;
                };
                unbondingHeight?: any;
                unbondingTime?: Date;
                commission?: {
                    commissionRates?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    updateTime?: Date;
                };
                minSelfDelegation?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["hist"], keyof HistoricalInfo>, never>;
    } & Record<Exclude<keyof I, "hist">, never>>(object: I): QueryHistoricalInfoResponse;
};
export declare const QueryPoolRequest: {
    encode(_: QueryPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest;
    fromJSON(_: any): QueryPoolRequest;
    toJSON(_: QueryPoolRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryPoolRequest;
};
export declare const QueryPoolResponse: {
    encode(message: QueryPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse;
    fromJSON(object: any): QueryPoolResponse;
    toJSON(message: QueryPoolResponse): unknown;
    fromPartial<I extends {
        pool?: {
            notBondedTokens?: string;
            bondedTokens?: string;
        };
    } & {
        pool?: {
            notBondedTokens?: string;
            bondedTokens?: string;
        } & {
            notBondedTokens?: string;
            bondedTokens?: string;
        } & Record<Exclude<keyof I["pool"], keyof Pool>, never>;
    } & Record<Exclude<keyof I, "pool">, never>>(object: I): QueryPoolResponse;
};
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
            unbondingTime?: string;
            maxValidators?: number;
            maxEntries?: number;
            historicalEntries?: number;
            bondDenom?: string;
            minCommissionRate?: string;
        };
    } & {
        params?: {
            unbondingTime?: string;
            maxValidators?: number;
            maxEntries?: number;
            historicalEntries?: number;
            bondDenom?: string;
            minCommissionRate?: string;
        } & {
            unbondingTime?: string;
            maxValidators?: number;
            maxEntries?: number;
            historicalEntries?: number;
            bondDenom?: string;
            minCommissionRate?: string;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
