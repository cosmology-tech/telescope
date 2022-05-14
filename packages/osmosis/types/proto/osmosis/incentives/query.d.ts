import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Gauge } from "./gauge";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface ModuleToDistributeCoinsRequest {
}
export interface ModuleToDistributeCoinsResponse {
    coins: Coin[];
}
export interface ModuleDistributedCoinsRequest {
}
export interface ModuleDistributedCoinsResponse {
    coins: Coin[];
}
export interface GaugeByIDRequest {
    id: Long;
}
export interface GaugeByIDResponse {
    gauge: Gauge;
}
export interface GaugesRequest {
    /** pagination defines an pagination for the request. */
    pagination: PageRequest;
}
export interface GaugesResponse {
    data: Gauge[];
    /** pagination defines an pagination for the response. */
    pagination: PageResponse;
}
export interface ActiveGaugesRequest {
    /** pagination defines an pagination for the request. */
    pagination: PageRequest;
}
export interface ActiveGaugesResponse {
    data: Gauge[];
    /** pagination defines an pagination for the response. */
    pagination: PageResponse;
}
export interface ActiveGaugesPerDenomRequest {
    denom: string;
    /** pagination defines an pagination for the request. */
    pagination: PageRequest;
}
export interface ActiveGaugesPerDenomResponse {
    data: Gauge[];
    /** pagination defines an pagination for the response. */
    pagination: PageResponse;
}
export interface UpcomingGaugesRequest {
    /** pagination defines an pagination for the request. */
    pagination: PageRequest;
}
export interface UpcomingGaugesResponse {
    data: Gauge[];
    /** pagination defines an pagination for the response. */
    pagination: PageResponse;
}
export interface RewardsEstRequest {
    owner: string;
    lockIds: Long[];
    endEpoch: Long;
}
export interface RewardsEstResponse {
    coins: Coin[];
}
export interface QueryLockableDurationsRequest {
}
export interface QueryLockableDurationsResponse {
    lockableDurations: string[];
}
export declare const ModuleToDistributeCoinsRequest: {
    encode(_: ModuleToDistributeCoinsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleToDistributeCoinsRequest;
    fromJSON(_: any): ModuleToDistributeCoinsRequest;
    toJSON(_: ModuleToDistributeCoinsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ModuleToDistributeCoinsRequest;
};
export declare const ModuleToDistributeCoinsResponse: {
    encode(message: ModuleToDistributeCoinsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleToDistributeCoinsResponse;
    fromJSON(object: any): ModuleToDistributeCoinsResponse;
    toJSON(message: ModuleToDistributeCoinsResponse): unknown;
    fromPartial<I extends {
        coins?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        coins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["coins"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "coins">, never>>(object: I): ModuleToDistributeCoinsResponse;
};
export declare const ModuleDistributedCoinsRequest: {
    encode(_: ModuleDistributedCoinsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleDistributedCoinsRequest;
    fromJSON(_: any): ModuleDistributedCoinsRequest;
    toJSON(_: ModuleDistributedCoinsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ModuleDistributedCoinsRequest;
};
export declare const ModuleDistributedCoinsResponse: {
    encode(message: ModuleDistributedCoinsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleDistributedCoinsResponse;
    fromJSON(object: any): ModuleDistributedCoinsResponse;
    toJSON(message: ModuleDistributedCoinsResponse): unknown;
    fromPartial<I extends {
        coins?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        coins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["coins"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "coins">, never>>(object: I): ModuleDistributedCoinsResponse;
};
export declare const GaugeByIDRequest: {
    encode(message: GaugeByIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GaugeByIDRequest;
    fromJSON(object: any): GaugeByIDRequest;
    toJSON(message: GaugeByIDRequest): unknown;
    fromPartial<I extends {
        id?: any;
    } & {
        id?: any;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): GaugeByIDRequest;
};
export declare const GaugeByIDResponse: {
    encode(message: GaugeByIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GaugeByIDResponse;
    fromJSON(object: any): GaugeByIDResponse;
    toJSON(message: GaugeByIDResponse): unknown;
    fromPartial<I extends {
        gauge?: {
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            };
            coins?: {
                denom?: string;
                amount?: string;
            }[];
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        };
    } & {
        gauge?: {
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            };
            coins?: {
                denom?: string;
                amount?: string;
            }[];
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            } & {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            } & Record<Exclude<keyof I["gauge"]["distributeTo"], keyof import("../lockup/lock").QueryCondition>, never>;
            coins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["gauge"]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["gauge"]["coins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["gauge"]["distributedCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["gauge"]["distributedCoins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["gauge"], keyof Gauge>, never>;
    } & Record<Exclude<keyof I, "gauge">, never>>(object: I): GaugeByIDResponse;
};
export declare const GaugesRequest: {
    encode(message: GaugesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GaugesRequest;
    fromJSON(object: any): GaugesRequest;
    toJSON(message: GaugesRequest): unknown;
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
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): GaugesRequest;
};
export declare const GaugesResponse: {
    encode(message: GaugesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GaugesResponse;
    fromJSON(object: any): GaugesResponse;
    toJSON(message: GaugesResponse): unknown;
    fromPartial<I extends {
        data?: {
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            };
            coins?: {
                denom?: string;
                amount?: string;
            }[];
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        data?: {
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            };
            coins?: {
                denom?: string;
                amount?: string;
            }[];
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            };
            coins?: {
                denom?: string;
                amount?: string;
            }[];
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            } & {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            } & Record<Exclude<keyof I["data"][number]["distributeTo"], keyof import("../lockup/lock").QueryCondition>, never>;
            coins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["data"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["data"][number]["coins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["data"][number]["distributedCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["data"][number]["distributedCoins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["data"][number], keyof Gauge>, never>)[] & Record<Exclude<keyof I["data"], keyof {
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            };
            coins?: {
                denom?: string;
                amount?: string;
            }[];
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof GaugesResponse>, never>>(object: I): GaugesResponse;
};
export declare const ActiveGaugesRequest: {
    encode(message: ActiveGaugesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveGaugesRequest;
    fromJSON(object: any): ActiveGaugesRequest;
    toJSON(message: ActiveGaugesRequest): unknown;
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
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): ActiveGaugesRequest;
};
export declare const ActiveGaugesResponse: {
    encode(message: ActiveGaugesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveGaugesResponse;
    fromJSON(object: any): ActiveGaugesResponse;
    toJSON(message: ActiveGaugesResponse): unknown;
    fromPartial<I extends {
        data?: {
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            };
            coins?: {
                denom?: string;
                amount?: string;
            }[];
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        data?: {
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            };
            coins?: {
                denom?: string;
                amount?: string;
            }[];
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            };
            coins?: {
                denom?: string;
                amount?: string;
            }[];
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            } & {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            } & Record<Exclude<keyof I["data"][number]["distributeTo"], keyof import("../lockup/lock").QueryCondition>, never>;
            coins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["data"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["data"][number]["coins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["data"][number]["distributedCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["data"][number]["distributedCoins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["data"][number], keyof Gauge>, never>)[] & Record<Exclude<keyof I["data"], keyof {
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            };
            coins?: {
                denom?: string;
                amount?: string;
            }[];
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof ActiveGaugesResponse>, never>>(object: I): ActiveGaugesResponse;
};
export declare const ActiveGaugesPerDenomRequest: {
    encode(message: ActiveGaugesPerDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveGaugesPerDenomRequest;
    fromJSON(object: any): ActiveGaugesPerDenomRequest;
    toJSON(message: ActiveGaugesPerDenomRequest): unknown;
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
    } & Record<Exclude<keyof I, keyof ActiveGaugesPerDenomRequest>, never>>(object: I): ActiveGaugesPerDenomRequest;
};
export declare const ActiveGaugesPerDenomResponse: {
    encode(message: ActiveGaugesPerDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveGaugesPerDenomResponse;
    fromJSON(object: any): ActiveGaugesPerDenomResponse;
    toJSON(message: ActiveGaugesPerDenomResponse): unknown;
    fromPartial<I extends {
        data?: {
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            };
            coins?: {
                denom?: string;
                amount?: string;
            }[];
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        data?: {
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            };
            coins?: {
                denom?: string;
                amount?: string;
            }[];
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            };
            coins?: {
                denom?: string;
                amount?: string;
            }[];
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            } & {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            } & Record<Exclude<keyof I["data"][number]["distributeTo"], keyof import("../lockup/lock").QueryCondition>, never>;
            coins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["data"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["data"][number]["coins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["data"][number]["distributedCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["data"][number]["distributedCoins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["data"][number], keyof Gauge>, never>)[] & Record<Exclude<keyof I["data"], keyof {
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            };
            coins?: {
                denom?: string;
                amount?: string;
            }[];
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof ActiveGaugesPerDenomResponse>, never>>(object: I): ActiveGaugesPerDenomResponse;
};
export declare const UpcomingGaugesRequest: {
    encode(message: UpcomingGaugesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpcomingGaugesRequest;
    fromJSON(object: any): UpcomingGaugesRequest;
    toJSON(message: UpcomingGaugesRequest): unknown;
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
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): UpcomingGaugesRequest;
};
export declare const UpcomingGaugesResponse: {
    encode(message: UpcomingGaugesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpcomingGaugesResponse;
    fromJSON(object: any): UpcomingGaugesResponse;
    toJSON(message: UpcomingGaugesResponse): unknown;
    fromPartial<I extends {
        data?: {
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            };
            coins?: {
                denom?: string;
                amount?: string;
            }[];
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        data?: {
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            };
            coins?: {
                denom?: string;
                amount?: string;
            }[];
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            };
            coins?: {
                denom?: string;
                amount?: string;
            }[];
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            } & {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            } & Record<Exclude<keyof I["data"][number]["distributeTo"], keyof import("../lockup/lock").QueryCondition>, never>;
            coins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["data"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["data"][number]["coins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["data"][number]["distributedCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["data"][number]["distributedCoins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["data"][number], keyof Gauge>, never>)[] & Record<Exclude<keyof I["data"], keyof {
            id?: any;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            };
            coins?: {
                denom?: string;
                amount?: string;
            }[];
            startTime?: Date;
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof UpcomingGaugesResponse>, never>>(object: I): UpcomingGaugesResponse;
};
export declare const RewardsEstRequest: {
    encode(message: RewardsEstRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardsEstRequest;
    fromJSON(object: any): RewardsEstRequest;
    toJSON(message: RewardsEstRequest): unknown;
    fromPartial<I extends {
        owner?: string;
        lockIds?: any[];
        endEpoch?: any;
    } & {
        owner?: string;
        lockIds?: any[] & any[] & Record<Exclude<keyof I["lockIds"], keyof any[]>, never>;
        endEpoch?: any;
    } & Record<Exclude<keyof I, keyof RewardsEstRequest>, never>>(object: I): RewardsEstRequest;
};
export declare const RewardsEstResponse: {
    encode(message: RewardsEstResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardsEstResponse;
    fromJSON(object: any): RewardsEstResponse;
    toJSON(message: RewardsEstResponse): unknown;
    fromPartial<I extends {
        coins?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        coins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["coins"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "coins">, never>>(object: I): RewardsEstResponse;
};
export declare const QueryLockableDurationsRequest: {
    encode(_: QueryLockableDurationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockableDurationsRequest;
    fromJSON(_: any): QueryLockableDurationsRequest;
    toJSON(_: QueryLockableDurationsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryLockableDurationsRequest;
};
export declare const QueryLockableDurationsResponse: {
    encode(message: QueryLockableDurationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockableDurationsResponse;
    fromJSON(object: any): QueryLockableDurationsResponse;
    toJSON(message: QueryLockableDurationsResponse): unknown;
    fromPartial<I extends {
        lockableDurations?: string[];
    } & {
        lockableDurations?: string[] & string[] & Record<Exclude<keyof I["lockableDurations"], keyof string[]>, never>;
    } & Record<Exclude<keyof I, "lockableDurations">, never>>(object: I): QueryLockableDurationsResponse;
};
