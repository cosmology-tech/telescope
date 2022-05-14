import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Coin } from "../../base/v1beta1/coin";
import { Params, Metadata } from "./bank";
import * as _m0 from "protobufjs/minimal";
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
    /** address is the address to query balances for. */
    address: string;
    /** denom is the coin denom to query balances for. */
    denom: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
    /** balance is the balance of the coin. */
    balance: Coin;
}
/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */
export interface QueryAllBalancesRequest {
    /** address is the address to query balances for. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */
export interface QueryAllBalancesResponse {
    /** balances is the balances of all the coins. */
    balances: Coin[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 */
export interface QuerySpendableBalancesRequest {
    /** address is the address to query spendable balances for. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 */
export interface QuerySpendableBalancesResponse {
    /** balances is the spendable balances of all the coins. */
    balances: Coin[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface QueryTotalSupplyRequest {
    /**
     * pagination defines an optional pagination for the request.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination: PageRequest;
}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface QueryTotalSupplyResponse {
    /** supply is the supply of the coins */
    supply: Coin[];
    /**
     * pagination defines the pagination in the response.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination: PageResponse;
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequest {
    /** denom is the coin denom to query balances for. */
    denom: string;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponse {
    /** amount is the supply of the coin. */
    amount: Coin;
}
/** QueryParamsRequest defines the request type for querying x/bank parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface QueryParamsResponse {
    params: Params;
}
/** QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method. */
export interface QueryDenomsMetadataRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */
export interface QueryDenomsMetadataResponse {
    /** metadata provides the client information for all the registered tokens. */
    metadatas: Metadata[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method. */
export interface QueryDenomMetadataRequest {
    /** denom is the coin denom to query the metadata for. */
    denom: string;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */
export interface QueryDenomMetadataResponse {
    /** metadata describes and provides all the client information for the requested token. */
    metadata: Metadata;
}
/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 */
export interface QueryDenomOwnersRequest {
    /** denom defines the coin denomination to query all account holders for. */
    denom: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 */
export interface DenomOwner {
    /** address defines the address that owns a particular denomination. */
    address: string;
    /** balance is the balance of the denominated coin for an account. */
    balance: Coin;
}
/** QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query. */
export interface QueryDenomOwnersResponse {
    denomOwners: DenomOwner[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export declare const QueryBalanceRequest: {
    encode(message: QueryBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest;
    fromJSON(object: any): QueryBalanceRequest;
    toJSON(message: QueryBalanceRequest): unknown;
    fromPartial<I extends {
        address?: string;
        denom?: string;
    } & {
        address?: string;
        denom?: string;
    } & Record<Exclude<keyof I, keyof QueryBalanceRequest>, never>>(object: I): QueryBalanceRequest;
};
export declare const QueryBalanceResponse: {
    encode(message: QueryBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse;
    fromJSON(object: any): QueryBalanceResponse;
    toJSON(message: QueryBalanceResponse): unknown;
    fromPartial<I extends {
        balance?: {
            denom?: string;
            amount?: string;
        };
    } & {
        balance?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["balance"], keyof Coin>, never>;
    } & Record<Exclude<keyof I, "balance">, never>>(object: I): QueryBalanceResponse;
};
export declare const QueryAllBalancesRequest: {
    encode(message: QueryAllBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBalancesRequest;
    fromJSON(object: any): QueryAllBalancesRequest;
    toJSON(message: QueryAllBalancesRequest): unknown;
    fromPartial<I extends {
        address?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        address?: string;
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
    } & Record<Exclude<keyof I, keyof QueryAllBalancesRequest>, never>>(object: I): QueryAllBalancesRequest;
};
export declare const QueryAllBalancesResponse: {
    encode(message: QueryAllBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBalancesResponse;
    fromJSON(object: any): QueryAllBalancesResponse;
    toJSON(message: QueryAllBalancesResponse): unknown;
    fromPartial<I extends {
        balances?: {
            denom?: string;
            amount?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        balances?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["balances"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["balances"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryAllBalancesResponse>, never>>(object: I): QueryAllBalancesResponse;
};
export declare const QuerySpendableBalancesRequest: {
    encode(message: QuerySpendableBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpendableBalancesRequest;
    fromJSON(object: any): QuerySpendableBalancesRequest;
    toJSON(message: QuerySpendableBalancesRequest): unknown;
    fromPartial<I extends {
        address?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        address?: string;
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
    } & Record<Exclude<keyof I, keyof QuerySpendableBalancesRequest>, never>>(object: I): QuerySpendableBalancesRequest;
};
export declare const QuerySpendableBalancesResponse: {
    encode(message: QuerySpendableBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpendableBalancesResponse;
    fromJSON(object: any): QuerySpendableBalancesResponse;
    toJSON(message: QuerySpendableBalancesResponse): unknown;
    fromPartial<I extends {
        balances?: {
            denom?: string;
            amount?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        balances?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["balances"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["balances"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QuerySpendableBalancesResponse>, never>>(object: I): QuerySpendableBalancesResponse;
};
export declare const QueryTotalSupplyRequest: {
    encode(message: QueryTotalSupplyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSupplyRequest;
    fromJSON(object: any): QueryTotalSupplyRequest;
    toJSON(message: QueryTotalSupplyRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
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
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): QueryTotalSupplyRequest;
};
export declare const QueryTotalSupplyResponse: {
    encode(message: QueryTotalSupplyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSupplyResponse;
    fromJSON(object: any): QueryTotalSupplyResponse;
    toJSON(message: QueryTotalSupplyResponse): unknown;
    fromPartial<I extends {
        supply?: {
            denom?: string;
            amount?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        supply?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["supply"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["supply"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryTotalSupplyResponse>, never>>(object: I): QueryTotalSupplyResponse;
};
export declare const QuerySupplyOfRequest: {
    encode(message: QuerySupplyOfRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyOfRequest;
    fromJSON(object: any): QuerySupplyOfRequest;
    toJSON(message: QuerySupplyOfRequest): unknown;
    fromPartial<I extends {
        denom?: string;
    } & {
        denom?: string;
    } & Record<Exclude<keyof I, "denom">, never>>(object: I): QuerySupplyOfRequest;
};
export declare const QuerySupplyOfResponse: {
    encode(message: QuerySupplyOfResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyOfResponse;
    fromJSON(object: any): QuerySupplyOfResponse;
    toJSON(message: QuerySupplyOfResponse): unknown;
    fromPartial<I extends {
        amount?: {
            denom?: string;
            amount?: string;
        };
    } & {
        amount?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["amount"], keyof Coin>, never>;
    } & Record<Exclude<keyof I, "amount">, never>>(object: I): QuerySupplyOfResponse;
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
            sendEnabled?: {
                denom?: string;
                enabled?: boolean;
            }[];
            defaultSendEnabled?: boolean;
        };
    } & {
        params?: {
            sendEnabled?: {
                denom?: string;
                enabled?: boolean;
            }[];
            defaultSendEnabled?: boolean;
        } & {
            sendEnabled?: {
                denom?: string;
                enabled?: boolean;
            }[] & ({
                denom?: string;
                enabled?: boolean;
            } & {
                denom?: string;
                enabled?: boolean;
            } & Record<Exclude<keyof I["params"]["sendEnabled"][number], keyof import("./bank").SendEnabled>, never>)[] & Record<Exclude<keyof I["params"]["sendEnabled"], keyof {
                denom?: string;
                enabled?: boolean;
            }[]>, never>;
            defaultSendEnabled?: boolean;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
export declare const QueryDenomsMetadataRequest: {
    encode(message: QueryDenomsMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsMetadataRequest;
    fromJSON(object: any): QueryDenomsMetadataRequest;
    toJSON(message: QueryDenomsMetadataRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
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
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): QueryDenomsMetadataRequest;
};
export declare const QueryDenomsMetadataResponse: {
    encode(message: QueryDenomsMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsMetadataResponse;
    fromJSON(object: any): QueryDenomsMetadataResponse;
    toJSON(message: QueryDenomsMetadataResponse): unknown;
    fromPartial<I extends {
        metadatas?: {
            description?: string;
            denomUnits?: {
                denom?: string;
                exponent?: number;
                aliases?: string[];
            }[];
            base?: string;
            display?: string;
            name?: string;
            symbol?: string;
            uri?: string;
            uriHash?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        metadatas?: {
            description?: string;
            denomUnits?: {
                denom?: string;
                exponent?: number;
                aliases?: string[];
            }[];
            base?: string;
            display?: string;
            name?: string;
            symbol?: string;
            uri?: string;
            uriHash?: string;
        }[] & ({
            description?: string;
            denomUnits?: {
                denom?: string;
                exponent?: number;
                aliases?: string[];
            }[];
            base?: string;
            display?: string;
            name?: string;
            symbol?: string;
            uri?: string;
            uriHash?: string;
        } & {
            description?: string;
            denomUnits?: {
                denom?: string;
                exponent?: number;
                aliases?: string[];
            }[] & ({
                denom?: string;
                exponent?: number;
                aliases?: string[];
            } & {
                denom?: string;
                exponent?: number;
                aliases?: string[] & string[] & Record<Exclude<keyof I["metadatas"][number]["denomUnits"][number]["aliases"], keyof string[]>, never>;
            } & Record<Exclude<keyof I["metadatas"][number]["denomUnits"][number], keyof import("./bank").DenomUnit>, never>)[] & Record<Exclude<keyof I["metadatas"][number]["denomUnits"], keyof {
                denom?: string;
                exponent?: number;
                aliases?: string[];
            }[]>, never>;
            base?: string;
            display?: string;
            name?: string;
            symbol?: string;
            uri?: string;
            uriHash?: string;
        } & Record<Exclude<keyof I["metadatas"][number], keyof Metadata>, never>)[] & Record<Exclude<keyof I["metadatas"], keyof {
            description?: string;
            denomUnits?: {
                denom?: string;
                exponent?: number;
                aliases?: string[];
            }[];
            base?: string;
            display?: string;
            name?: string;
            symbol?: string;
            uri?: string;
            uriHash?: string;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryDenomsMetadataResponse>, never>>(object: I): QueryDenomsMetadataResponse;
};
export declare const QueryDenomMetadataRequest: {
    encode(message: QueryDenomMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomMetadataRequest;
    fromJSON(object: any): QueryDenomMetadataRequest;
    toJSON(message: QueryDenomMetadataRequest): unknown;
    fromPartial<I extends {
        denom?: string;
    } & {
        denom?: string;
    } & Record<Exclude<keyof I, "denom">, never>>(object: I): QueryDenomMetadataRequest;
};
export declare const QueryDenomMetadataResponse: {
    encode(message: QueryDenomMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomMetadataResponse;
    fromJSON(object: any): QueryDenomMetadataResponse;
    toJSON(message: QueryDenomMetadataResponse): unknown;
    fromPartial<I extends {
        metadata?: {
            description?: string;
            denomUnits?: {
                denom?: string;
                exponent?: number;
                aliases?: string[];
            }[];
            base?: string;
            display?: string;
            name?: string;
            symbol?: string;
            uri?: string;
            uriHash?: string;
        };
    } & {
        metadata?: {
            description?: string;
            denomUnits?: {
                denom?: string;
                exponent?: number;
                aliases?: string[];
            }[];
            base?: string;
            display?: string;
            name?: string;
            symbol?: string;
            uri?: string;
            uriHash?: string;
        } & {
            description?: string;
            denomUnits?: {
                denom?: string;
                exponent?: number;
                aliases?: string[];
            }[] & ({
                denom?: string;
                exponent?: number;
                aliases?: string[];
            } & {
                denom?: string;
                exponent?: number;
                aliases?: string[] & string[] & Record<Exclude<keyof I["metadata"]["denomUnits"][number]["aliases"], keyof string[]>, never>;
            } & Record<Exclude<keyof I["metadata"]["denomUnits"][number], keyof import("./bank").DenomUnit>, never>)[] & Record<Exclude<keyof I["metadata"]["denomUnits"], keyof {
                denom?: string;
                exponent?: number;
                aliases?: string[];
            }[]>, never>;
            base?: string;
            display?: string;
            name?: string;
            symbol?: string;
            uri?: string;
            uriHash?: string;
        } & Record<Exclude<keyof I["metadata"], keyof Metadata>, never>;
    } & Record<Exclude<keyof I, "metadata">, never>>(object: I): QueryDenomMetadataResponse;
};
export declare const QueryDenomOwnersRequest: {
    encode(message: QueryDenomOwnersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomOwnersRequest;
    fromJSON(object: any): QueryDenomOwnersRequest;
    toJSON(message: QueryDenomOwnersRequest): unknown;
    fromPartial<I extends {
        denom?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        denom?: string;
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
    } & Record<Exclude<keyof I, keyof QueryDenomOwnersRequest>, never>>(object: I): QueryDenomOwnersRequest;
};
export declare const DenomOwner: {
    encode(message: DenomOwner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DenomOwner;
    fromJSON(object: any): DenomOwner;
    toJSON(message: DenomOwner): unknown;
    fromPartial<I extends {
        address?: string;
        balance?: {
            denom?: string;
            amount?: string;
        };
    } & {
        address?: string;
        balance?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["balance"], keyof Coin>, never>;
    } & Record<Exclude<keyof I, keyof DenomOwner>, never>>(object: I): DenomOwner;
};
export declare const QueryDenomOwnersResponse: {
    encode(message: QueryDenomOwnersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomOwnersResponse;
    fromJSON(object: any): QueryDenomOwnersResponse;
    toJSON(message: QueryDenomOwnersResponse): unknown;
    fromPartial<I extends {
        denomOwners?: {
            address?: string;
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
        denomOwners?: {
            address?: string;
            balance?: {
                denom?: string;
                amount?: string;
            };
        }[] & ({
            address?: string;
            balance?: {
                denom?: string;
                amount?: string;
            };
        } & {
            address?: string;
            balance?: {
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["denomOwners"][number]["balance"], keyof Coin>, never>;
        } & Record<Exclude<keyof I["denomOwners"][number], keyof DenomOwner>, never>)[] & Record<Exclude<keyof I["denomOwners"], keyof {
            address?: string;
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
    } & Record<Exclude<keyof I, keyof QueryDenomOwnersResponse>, never>>(object: I): QueryDenomOwnersResponse;
};
