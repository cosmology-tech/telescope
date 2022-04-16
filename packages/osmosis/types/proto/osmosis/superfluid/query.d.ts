import * as _m0 from "protobufjs/minimal";
import { Params } from "../../osmosis/superfluid/params";
import { SuperfluidAssetType, OsmoEquivalentMultiplierRecord, SuperfluidAsset, SuperfluidDelegationRecord } from "../../osmosis/superfluid/superfluid";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock } from "../../osmosis/lockup/lock";
export interface QueryParamsRequest {
}
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface AssetTypeRequest {
    denom: string;
}
export interface AssetTypeResponse {
    assetType: SuperfluidAssetType;
}
export interface AllAssetsRequest {
}
export interface AllAssetsResponse {
    assets: SuperfluidAsset[];
}
export interface AssetMultiplierRequest {
    denom: string;
}
export interface AssetMultiplierResponse {
    osmoEquivalentMultiplier: OsmoEquivalentMultiplierRecord;
}
export interface SuperfluidIntermediaryAccountInfo {
    denom: string;
    valAddr: string;
    gaugeId: string;
    address: string;
}
export interface AllIntermediaryAccountsRequest {
    pagination: PageRequest;
}
export interface AllIntermediaryAccountsResponse {
    accounts: SuperfluidIntermediaryAccountInfo[];
    pagination: PageResponse;
}
export interface ConnectedIntermediaryAccountRequest {
    lockId: string;
}
export interface ConnectedIntermediaryAccountResponse {
    account: SuperfluidIntermediaryAccountInfo;
}
export interface TotalSuperfluidDelegationsRequest {
}
export interface TotalSuperfluidDelegationsResponse {
    totalDelegations: string;
}
export interface SuperfluidDelegationAmountRequest {
    delegatorAddress: string;
    validatorAddress: string;
    denom: string;
}
export interface SuperfluidDelegationAmountResponse {
    amount: Coin[];
}
export interface SuperfluidDelegationsByDelegatorRequest {
    delegatorAddress: string;
}
export interface SuperfluidDelegationsByDelegatorResponse {
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
    totalDelegatedCoins: Coin[];
}
export interface SuperfluidUndelegationsByDelegatorRequest {
    delegatorAddress: string;
    denom: string;
}
export interface SuperfluidUndelegationsByDelegatorResponse {
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
    totalUndelegatedCoins: Coin[];
    syntheticLocks: SyntheticLock[];
}
export interface SuperfluidDelegationsByValidatorDenomRequest {
    validatorAddress: string;
    denom: string;
}
export interface SuperfluidDelegationsByValidatorDenomResponse {
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    validatorAddress: string;
    denom: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    totalDelegatedCoins: Coin[];
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
            minimumRiskFactor?: string;
        };
    } & {
        params?: {
            minimumRiskFactor?: string;
        } & {
            minimumRiskFactor?: string;
        } & Record<Exclude<keyof I["params"], "minimumRiskFactor">, never>;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
export declare const AssetTypeRequest: {
    encode(message: AssetTypeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetTypeRequest;
    fromJSON(object: any): AssetTypeRequest;
    toJSON(message: AssetTypeRequest): unknown;
    fromPartial<I extends {
        denom?: string;
    } & {
        denom?: string;
    } & Record<Exclude<keyof I, "denom">, never>>(object: I): AssetTypeRequest;
};
export declare const AssetTypeResponse: {
    encode(message: AssetTypeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetTypeResponse;
    fromJSON(object: any): AssetTypeResponse;
    toJSON(message: AssetTypeResponse): unknown;
    fromPartial<I extends {
        assetType?: SuperfluidAssetType;
    } & {
        assetType?: SuperfluidAssetType;
    } & Record<Exclude<keyof I, "assetType">, never>>(object: I): AssetTypeResponse;
};
export declare const AllAssetsRequest: {
    encode(_: AllAssetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllAssetsRequest;
    fromJSON(_: any): AllAssetsRequest;
    toJSON(_: AllAssetsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): AllAssetsRequest;
};
export declare const AllAssetsResponse: {
    encode(message: AllAssetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllAssetsResponse;
    fromJSON(object: any): AllAssetsResponse;
    toJSON(message: AllAssetsResponse): unknown;
    fromPartial<I extends {
        assets?: {
            denom?: string;
            assetType?: SuperfluidAssetType;
        }[];
    } & {
        assets?: {
            denom?: string;
            assetType?: SuperfluidAssetType;
        }[] & ({
            denom?: string;
            assetType?: SuperfluidAssetType;
        } & {
            denom?: string;
            assetType?: SuperfluidAssetType;
        } & Record<Exclude<keyof I["assets"][number], keyof SuperfluidAsset>, never>)[] & Record<Exclude<keyof I["assets"], keyof {
            denom?: string;
            assetType?: SuperfluidAssetType;
        }[]>, never>;
    } & Record<Exclude<keyof I, "assets">, never>>(object: I): AllAssetsResponse;
};
export declare const AssetMultiplierRequest: {
    encode(message: AssetMultiplierRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetMultiplierRequest;
    fromJSON(object: any): AssetMultiplierRequest;
    toJSON(message: AssetMultiplierRequest): unknown;
    fromPartial<I extends {
        denom?: string;
    } & {
        denom?: string;
    } & Record<Exclude<keyof I, "denom">, never>>(object: I): AssetMultiplierRequest;
};
export declare const AssetMultiplierResponse: {
    encode(message: AssetMultiplierResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetMultiplierResponse;
    fromJSON(object: any): AssetMultiplierResponse;
    toJSON(message: AssetMultiplierResponse): unknown;
    fromPartial<I extends {
        osmoEquivalentMultiplier?: {
            epochNumber?: string;
            denom?: string;
            multiplier?: string;
        };
    } & {
        osmoEquivalentMultiplier?: {
            epochNumber?: string;
            denom?: string;
            multiplier?: string;
        } & {
            epochNumber?: string;
            denom?: string;
            multiplier?: string;
        } & Record<Exclude<keyof I["osmoEquivalentMultiplier"], keyof OsmoEquivalentMultiplierRecord>, never>;
    } & Record<Exclude<keyof I, "osmoEquivalentMultiplier">, never>>(object: I): AssetMultiplierResponse;
};
export declare const SuperfluidIntermediaryAccountInfo: {
    encode(message: SuperfluidIntermediaryAccountInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidIntermediaryAccountInfo;
    fromJSON(object: any): SuperfluidIntermediaryAccountInfo;
    toJSON(message: SuperfluidIntermediaryAccountInfo): unknown;
    fromPartial<I extends {
        denom?: string;
        valAddr?: string;
        gaugeId?: string;
        address?: string;
    } & {
        denom?: string;
        valAddr?: string;
        gaugeId?: string;
        address?: string;
    } & Record<Exclude<keyof I, keyof SuperfluidIntermediaryAccountInfo>, never>>(object: I): SuperfluidIntermediaryAccountInfo;
};
export declare const AllIntermediaryAccountsRequest: {
    encode(message: AllIntermediaryAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllIntermediaryAccountsRequest;
    fromJSON(object: any): AllIntermediaryAccountsRequest;
    toJSON(message: AllIntermediaryAccountsRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array;
            offset?: string;
            limit?: string;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: string;
            limit?: string;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: string;
            limit?: string;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): AllIntermediaryAccountsRequest;
};
export declare const AllIntermediaryAccountsResponse: {
    encode(message: AllIntermediaryAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllIntermediaryAccountsResponse;
    fromJSON(object: any): AllIntermediaryAccountsResponse;
    toJSON(message: AllIntermediaryAccountsResponse): unknown;
    fromPartial<I extends {
        accounts?: {
            denom?: string;
            valAddr?: string;
            gaugeId?: string;
            address?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: string;
        };
    } & {
        accounts?: {
            denom?: string;
            valAddr?: string;
            gaugeId?: string;
            address?: string;
        }[] & ({
            denom?: string;
            valAddr?: string;
            gaugeId?: string;
            address?: string;
        } & {
            denom?: string;
            valAddr?: string;
            gaugeId?: string;
            address?: string;
        } & Record<Exclude<keyof I["accounts"][number], keyof SuperfluidIntermediaryAccountInfo>, never>)[] & Record<Exclude<keyof I["accounts"], keyof {
            denom?: string;
            valAddr?: string;
            gaugeId?: string;
            address?: string;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: string;
        } & {
            nextKey?: Uint8Array;
            total?: string;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof AllIntermediaryAccountsResponse>, never>>(object: I): AllIntermediaryAccountsResponse;
};
export declare const ConnectedIntermediaryAccountRequest: {
    encode(message: ConnectedIntermediaryAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectedIntermediaryAccountRequest;
    fromJSON(object: any): ConnectedIntermediaryAccountRequest;
    toJSON(message: ConnectedIntermediaryAccountRequest): unknown;
    fromPartial<I extends {
        lockId?: string;
    } & {
        lockId?: string;
    } & Record<Exclude<keyof I, "lockId">, never>>(object: I): ConnectedIntermediaryAccountRequest;
};
export declare const ConnectedIntermediaryAccountResponse: {
    encode(message: ConnectedIntermediaryAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectedIntermediaryAccountResponse;
    fromJSON(object: any): ConnectedIntermediaryAccountResponse;
    toJSON(message: ConnectedIntermediaryAccountResponse): unknown;
    fromPartial<I extends {
        account?: {
            denom?: string;
            valAddr?: string;
            gaugeId?: string;
            address?: string;
        };
    } & {
        account?: {
            denom?: string;
            valAddr?: string;
            gaugeId?: string;
            address?: string;
        } & {
            denom?: string;
            valAddr?: string;
            gaugeId?: string;
            address?: string;
        } & Record<Exclude<keyof I["account"], keyof SuperfluidIntermediaryAccountInfo>, never>;
    } & Record<Exclude<keyof I, "account">, never>>(object: I): ConnectedIntermediaryAccountResponse;
};
export declare const TotalSuperfluidDelegationsRequest: {
    encode(_: TotalSuperfluidDelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TotalSuperfluidDelegationsRequest;
    fromJSON(_: any): TotalSuperfluidDelegationsRequest;
    toJSON(_: TotalSuperfluidDelegationsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): TotalSuperfluidDelegationsRequest;
};
export declare const TotalSuperfluidDelegationsResponse: {
    encode(message: TotalSuperfluidDelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TotalSuperfluidDelegationsResponse;
    fromJSON(object: any): TotalSuperfluidDelegationsResponse;
    toJSON(message: TotalSuperfluidDelegationsResponse): unknown;
    fromPartial<I extends {
        totalDelegations?: string;
    } & {
        totalDelegations?: string;
    } & Record<Exclude<keyof I, "totalDelegations">, never>>(object: I): TotalSuperfluidDelegationsResponse;
};
export declare const SuperfluidDelegationAmountRequest: {
    encode(message: SuperfluidDelegationAmountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationAmountRequest;
    fromJSON(object: any): SuperfluidDelegationAmountRequest;
    toJSON(message: SuperfluidDelegationAmountRequest): unknown;
    fromPartial<I extends {
        delegatorAddress?: string;
        validatorAddress?: string;
        denom?: string;
    } & {
        delegatorAddress?: string;
        validatorAddress?: string;
        denom?: string;
    } & Record<Exclude<keyof I, keyof SuperfluidDelegationAmountRequest>, never>>(object: I): SuperfluidDelegationAmountRequest;
};
export declare const SuperfluidDelegationAmountResponse: {
    encode(message: SuperfluidDelegationAmountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationAmountResponse;
    fromJSON(object: any): SuperfluidDelegationAmountResponse;
    toJSON(message: SuperfluidDelegationAmountResponse): unknown;
    fromPartial<I extends {
        amount?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        amount?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["amount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["amount"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "amount">, never>>(object: I): SuperfluidDelegationAmountResponse;
};
export declare const SuperfluidDelegationsByDelegatorRequest: {
    encode(message: SuperfluidDelegationsByDelegatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByDelegatorRequest;
    fromJSON(object: any): SuperfluidDelegationsByDelegatorRequest;
    toJSON(message: SuperfluidDelegationsByDelegatorRequest): unknown;
    fromPartial<I extends {
        delegatorAddress?: string;
    } & {
        delegatorAddress?: string;
    } & Record<Exclude<keyof I, "delegatorAddress">, never>>(object: I): SuperfluidDelegationsByDelegatorRequest;
};
export declare const SuperfluidDelegationsByDelegatorResponse: {
    encode(message: SuperfluidDelegationsByDelegatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByDelegatorResponse;
    fromJSON(object: any): SuperfluidDelegationsByDelegatorResponse;
    toJSON(message: SuperfluidDelegationsByDelegatorResponse): unknown;
    fromPartial<I extends {
        superfluidDelegationRecords?: {
            delegatorAddress?: string;
            validatorAddress?: string;
            delegationAmount?: {
                denom?: string;
                amount?: string;
            };
        }[];
        totalDelegatedCoins?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        superfluidDelegationRecords?: {
            delegatorAddress?: string;
            validatorAddress?: string;
            delegationAmount?: {
                denom?: string;
                amount?: string;
            };
        }[] & ({
            delegatorAddress?: string;
            validatorAddress?: string;
            delegationAmount?: {
                denom?: string;
                amount?: string;
            };
        } & {
            delegatorAddress?: string;
            validatorAddress?: string;
            delegationAmount?: {
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["superfluidDelegationRecords"][number]["delegationAmount"], keyof Coin>, never>;
        } & Record<Exclude<keyof I["superfluidDelegationRecords"][number], keyof SuperfluidDelegationRecord>, never>)[] & Record<Exclude<keyof I["superfluidDelegationRecords"], keyof {
            delegatorAddress?: string;
            validatorAddress?: string;
            delegationAmount?: {
                denom?: string;
                amount?: string;
            };
        }[]>, never>;
        totalDelegatedCoins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["totalDelegatedCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["totalDelegatedCoins"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof SuperfluidDelegationsByDelegatorResponse>, never>>(object: I): SuperfluidDelegationsByDelegatorResponse;
};
export declare const SuperfluidUndelegationsByDelegatorRequest: {
    encode(message: SuperfluidUndelegationsByDelegatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidUndelegationsByDelegatorRequest;
    fromJSON(object: any): SuperfluidUndelegationsByDelegatorRequest;
    toJSON(message: SuperfluidUndelegationsByDelegatorRequest): unknown;
    fromPartial<I extends {
        delegatorAddress?: string;
        denom?: string;
    } & {
        delegatorAddress?: string;
        denom?: string;
    } & Record<Exclude<keyof I, keyof SuperfluidUndelegationsByDelegatorRequest>, never>>(object: I): SuperfluidUndelegationsByDelegatorRequest;
};
export declare const SuperfluidUndelegationsByDelegatorResponse: {
    encode(message: SuperfluidUndelegationsByDelegatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidUndelegationsByDelegatorResponse;
    fromJSON(object: any): SuperfluidUndelegationsByDelegatorResponse;
    toJSON(message: SuperfluidUndelegationsByDelegatorResponse): unknown;
    fromPartial<I extends {
        superfluidDelegationRecords?: {
            delegatorAddress?: string;
            validatorAddress?: string;
            delegationAmount?: {
                denom?: string;
                amount?: string;
            };
        }[];
        totalUndelegatedCoins?: {
            denom?: string;
            amount?: string;
        }[];
        syntheticLocks?: {
            underlyingLockId?: string;
            synthDenom?: string;
            endTime?: Date;
            duration?: string;
        }[];
    } & {
        superfluidDelegationRecords?: {
            delegatorAddress?: string;
            validatorAddress?: string;
            delegationAmount?: {
                denom?: string;
                amount?: string;
            };
        }[] & ({
            delegatorAddress?: string;
            validatorAddress?: string;
            delegationAmount?: {
                denom?: string;
                amount?: string;
            };
        } & {
            delegatorAddress?: string;
            validatorAddress?: string;
            delegationAmount?: {
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["superfluidDelegationRecords"][number]["delegationAmount"], keyof Coin>, never>;
        } & Record<Exclude<keyof I["superfluidDelegationRecords"][number], keyof SuperfluidDelegationRecord>, never>)[] & Record<Exclude<keyof I["superfluidDelegationRecords"], keyof {
            delegatorAddress?: string;
            validatorAddress?: string;
            delegationAmount?: {
                denom?: string;
                amount?: string;
            };
        }[]>, never>;
        totalUndelegatedCoins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["totalUndelegatedCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["totalUndelegatedCoins"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        syntheticLocks?: {
            underlyingLockId?: string;
            synthDenom?: string;
            endTime?: Date;
            duration?: string;
        }[] & ({
            underlyingLockId?: string;
            synthDenom?: string;
            endTime?: Date;
            duration?: string;
        } & {
            underlyingLockId?: string;
            synthDenom?: string;
            endTime?: Date;
            duration?: string;
        } & Record<Exclude<keyof I["syntheticLocks"][number], keyof SyntheticLock>, never>)[] & Record<Exclude<keyof I["syntheticLocks"], keyof {
            underlyingLockId?: string;
            synthDenom?: string;
            endTime?: Date;
            duration?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof SuperfluidUndelegationsByDelegatorResponse>, never>>(object: I): SuperfluidUndelegationsByDelegatorResponse;
};
export declare const SuperfluidDelegationsByValidatorDenomRequest: {
    encode(message: SuperfluidDelegationsByValidatorDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByValidatorDenomRequest;
    fromJSON(object: any): SuperfluidDelegationsByValidatorDenomRequest;
    toJSON(message: SuperfluidDelegationsByValidatorDenomRequest): unknown;
    fromPartial<I extends {
        validatorAddress?: string;
        denom?: string;
    } & {
        validatorAddress?: string;
        denom?: string;
    } & Record<Exclude<keyof I, keyof SuperfluidDelegationsByValidatorDenomRequest>, never>>(object: I): SuperfluidDelegationsByValidatorDenomRequest;
};
export declare const SuperfluidDelegationsByValidatorDenomResponse: {
    encode(message: SuperfluidDelegationsByValidatorDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByValidatorDenomResponse;
    fromJSON(object: any): SuperfluidDelegationsByValidatorDenomResponse;
    toJSON(message: SuperfluidDelegationsByValidatorDenomResponse): unknown;
    fromPartial<I extends {
        superfluidDelegationRecords?: {
            delegatorAddress?: string;
            validatorAddress?: string;
            delegationAmount?: {
                denom?: string;
                amount?: string;
            };
        }[];
    } & {
        superfluidDelegationRecords?: {
            delegatorAddress?: string;
            validatorAddress?: string;
            delegationAmount?: {
                denom?: string;
                amount?: string;
            };
        }[] & ({
            delegatorAddress?: string;
            validatorAddress?: string;
            delegationAmount?: {
                denom?: string;
                amount?: string;
            };
        } & {
            delegatorAddress?: string;
            validatorAddress?: string;
            delegationAmount?: {
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["superfluidDelegationRecords"][number]["delegationAmount"], keyof Coin>, never>;
        } & Record<Exclude<keyof I["superfluidDelegationRecords"][number], keyof SuperfluidDelegationRecord>, never>)[] & Record<Exclude<keyof I["superfluidDelegationRecords"], keyof {
            delegatorAddress?: string;
            validatorAddress?: string;
            delegationAmount?: {
                denom?: string;
                amount?: string;
            };
        }[]>, never>;
    } & Record<Exclude<keyof I, "superfluidDelegationRecords">, never>>(object: I): SuperfluidDelegationsByValidatorDenomResponse;
};
export declare const EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
    encode(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    fromJSON(object: any): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    toJSON(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
    fromPartial<I extends {
        validatorAddress?: string;
        denom?: string;
    } & {
        validatorAddress?: string;
        denom?: string;
    } & Record<Exclude<keyof I, keyof EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>, never>>(object: I): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
};
export declare const EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
    encode(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    fromJSON(object: any): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    toJSON(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
    fromPartial<I extends {
        totalDelegatedCoins?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        totalDelegatedCoins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["totalDelegatedCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["totalDelegatedCoins"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "totalDelegatedCoins">, never>>(object: I): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
};
/** Query defines the gRPC querier service. */
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
