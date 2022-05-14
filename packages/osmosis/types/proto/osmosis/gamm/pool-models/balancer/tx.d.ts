import { PoolParams, PoolAsset } from "./balancerPool";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPool {
    sender: string;
    poolParams: PoolParams;
    poolAssets: PoolAsset[];
    futurePoolGovernor: string;
}
export interface MsgCreateBalancerPoolResponse {
    poolId: Long;
}
export declare const MsgCreateBalancerPool: {
    encode(message: MsgCreateBalancerPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBalancerPool;
    fromJSON(object: any): MsgCreateBalancerPool;
    toJSON(message: MsgCreateBalancerPool): unknown;
    fromPartial<I extends {
        sender?: string;
        poolParams?: {
            swapFee?: string;
            exitFee?: string;
            smoothWeightChangeParams?: {
                startTime?: Date;
                duration?: string;
                initialPoolWeights?: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[];
                targetPoolWeights?: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[];
            };
        };
        poolAssets?: {
            token?: {
                denom?: string;
                amount?: string;
            };
            weight?: string;
        }[];
        futurePoolGovernor?: string;
    } & {
        sender?: string;
        poolParams?: {
            swapFee?: string;
            exitFee?: string;
            smoothWeightChangeParams?: {
                startTime?: Date;
                duration?: string;
                initialPoolWeights?: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[];
                targetPoolWeights?: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[];
            };
        } & {
            swapFee?: string;
            exitFee?: string;
            smoothWeightChangeParams?: {
                startTime?: Date;
                duration?: string;
                initialPoolWeights?: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[];
                targetPoolWeights?: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[];
            } & {
                startTime?: Date;
                duration?: string;
                initialPoolWeights?: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[] & ({
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                } & {
                    token?: {
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I["poolParams"]["smoothWeightChangeParams"]["initialPoolWeights"][number]["token"], keyof import("../../../../cosmos/base/v1beta1/coin").Coin>, never>;
                    weight?: string;
                } & Record<Exclude<keyof I["poolParams"]["smoothWeightChangeParams"]["initialPoolWeights"][number], keyof PoolAsset>, never>)[] & Record<Exclude<keyof I["poolParams"]["smoothWeightChangeParams"]["initialPoolWeights"], keyof {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[]>, never>;
                targetPoolWeights?: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[] & ({
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                } & {
                    token?: {
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I["poolParams"]["smoothWeightChangeParams"]["targetPoolWeights"][number]["token"], keyof import("../../../../cosmos/base/v1beta1/coin").Coin>, never>;
                    weight?: string;
                } & Record<Exclude<keyof I["poolParams"]["smoothWeightChangeParams"]["targetPoolWeights"][number], keyof PoolAsset>, never>)[] & Record<Exclude<keyof I["poolParams"]["smoothWeightChangeParams"]["targetPoolWeights"], keyof {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["poolParams"]["smoothWeightChangeParams"], keyof import("./balancerPool").SmoothWeightChangeParams>, never>;
        } & Record<Exclude<keyof I["poolParams"], keyof PoolParams>, never>;
        poolAssets?: {
            token?: {
                denom?: string;
                amount?: string;
            };
            weight?: string;
        }[] & ({
            token?: {
                denom?: string;
                amount?: string;
            };
            weight?: string;
        } & {
            token?: {
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["poolAssets"][number]["token"], keyof import("../../../../cosmos/base/v1beta1/coin").Coin>, never>;
            weight?: string;
        } & Record<Exclude<keyof I["poolAssets"][number], keyof PoolAsset>, never>)[] & Record<Exclude<keyof I["poolAssets"], keyof {
            token?: {
                denom?: string;
                amount?: string;
            };
            weight?: string;
        }[]>, never>;
        futurePoolGovernor?: string;
    } & Record<Exclude<keyof I, keyof MsgCreateBalancerPool>, never>>(object: I): MsgCreateBalancerPool;
};
export declare const MsgCreateBalancerPoolResponse: {
    encode(message: MsgCreateBalancerPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBalancerPoolResponse;
    fromJSON(object: any): MsgCreateBalancerPoolResponse;
    toJSON(message: MsgCreateBalancerPoolResponse): unknown;
    fromPartial<I extends {
        poolId?: any;
    } & {
        poolId?: any;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): MsgCreateBalancerPoolResponse;
};
