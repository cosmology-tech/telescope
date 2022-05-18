import * as _177 from "./claim/v1beta1/claim";
import * as _178 from "./claim/v1beta1/genesis";
import * as _179 from "./claim/v1beta1/params";
import * as _180 from "./claim/v1beta1/query";
import * as _181 from "./epochs/genesis";
import * as _182 from "./epochs/query";
import * as _183 from "./gamm/pool-models/balancer/balancerPool";
import * as _184 from "./gamm/pool-models/balancer/tx";
import * as _185 from "./gamm/v1beta1/genesis";
import * as _186 from "./gamm/v1beta1/query";
import * as _187 from "./gamm/v1beta1/tx";
import * as _188 from "./incentives/gauge";
import * as _189 from "./incentives/genesis";
import * as _190 from "./incentives/params";
import * as _191 from "./incentives/query";
import * as _192 from "./incentives/tx";
import * as _193 from "./lockup/genesis";
import * as _194 from "./lockup/lock";
import * as _195 from "./lockup/query";
import * as _196 from "./lockup/tx";
import * as _197 from "./mint/v1beta1/genesis";
import * as _198 from "./mint/v1beta1/mint";
import * as _199 from "./mint/v1beta1/query";
import * as _200 from "./pool-incentives/v1beta1/genesis";
import * as _201 from "./pool-incentives/v1beta1/gov";
import * as _202 from "./pool-incentives/v1beta1/incentives";
import * as _203 from "./pool-incentives/v1beta1/query";
import * as _204 from "./store/v1beta1/tree";
import * as _205 from "./superfluid/genesis";
import * as _206 from "./superfluid/params";
import * as _207 from "./superfluid/query";
import * as _208 from "./superfluid/superfluid";
import * as _209 from "./superfluid/tx";
import * as _210 from "./txfees/v1beta1/feetoken";
import * as _211 from "./txfees/v1beta1/genesis";
import * as _212 from "./txfees/v1beta1/gov";
import * as _213 from "./txfees/v1beta1/query";
export declare namespace osmosis {
    namespace claim {
        const v1beta1: {
            QueryModuleAccountBalanceRequest: {
                encode(_: _180.QueryModuleAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.QueryModuleAccountBalanceRequest;
                fromJSON(_: any): _180.QueryModuleAccountBalanceRequest;
                toJSON(_: _180.QueryModuleAccountBalanceRequest): unknown;
                fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): _180.QueryModuleAccountBalanceRequest;
            };
            QueryModuleAccountBalanceResponse: {
                encode(message: _180.QueryModuleAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.QueryModuleAccountBalanceResponse;
                fromJSON(object: any): _180.QueryModuleAccountBalanceResponse;
                toJSON(message: _180.QueryModuleAccountBalanceResponse): unknown;
                fromPartial<I_1 extends {
                    moduleAccountBalance?: {
                        denom?: string;
                        amount?: string;
                    }[];
                } & {
                    moduleAccountBalance?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_1["moduleAccountBalance"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_1["moduleAccountBalance"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_1, "moduleAccountBalance">, never>>(object: I_1): _180.QueryModuleAccountBalanceResponse;
            };
            QueryParamsRequest: {
                encode(_: _180.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.QueryParamsRequest;
                fromJSON(_: any): _180.QueryParamsRequest;
                toJSON(_: _180.QueryParamsRequest): unknown;
                fromPartial<I_2 extends {} & {} & Record<Exclude<keyof I_2, never>, never>>(_: I_2): _180.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _180.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.QueryParamsResponse;
                fromJSON(object: any): _180.QueryParamsResponse;
                toJSON(message: _180.QueryParamsResponse): unknown;
                fromPartial<I_3 extends {
                    params?: {
                        airdropStartTime?: Date;
                        durationUntilDecay?: string;
                        durationOfDecay?: string;
                        claimDenom?: string;
                    };
                } & {
                    params?: {
                        airdropStartTime?: Date;
                        durationUntilDecay?: string;
                        durationOfDecay?: string;
                        claimDenom?: string;
                    } & {
                        airdropStartTime?: Date;
                        durationUntilDecay?: string;
                        durationOfDecay?: string;
                        claimDenom?: string;
                    } & Record<Exclude<keyof I_3["params"], keyof _179.Params>, never>;
                } & Record<Exclude<keyof I_3, "params">, never>>(object: I_3): _180.QueryParamsResponse;
            };
            QueryClaimRecordRequest: {
                encode(message: _180.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.QueryClaimRecordRequest;
                fromJSON(object: any): _180.QueryClaimRecordRequest;
                toJSON(message: _180.QueryClaimRecordRequest): unknown;
                fromPartial<I_4 extends {
                    address?: string;
                } & {
                    address?: string;
                } & Record<Exclude<keyof I_4, "address">, never>>(object: I_4): _180.QueryClaimRecordRequest;
            };
            QueryClaimRecordResponse: {
                encode(message: _180.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.QueryClaimRecordResponse;
                fromJSON(object: any): _180.QueryClaimRecordResponse;
                toJSON(message: _180.QueryClaimRecordResponse): unknown;
                fromPartial<I_5 extends {
                    claimRecord?: {
                        address?: string;
                        initialClaimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        actionCompleted?: boolean[];
                    };
                } & {
                    claimRecord?: {
                        address?: string;
                        initialClaimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        actionCompleted?: boolean[];
                    } & {
                        address?: string;
                        initialClaimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[] & ({
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I_5["claimRecord"]["initialClaimableAmount"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_5["claimRecord"]["initialClaimableAmount"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                        actionCompleted?: boolean[] & boolean[] & Record<Exclude<keyof I_5["claimRecord"]["actionCompleted"], keyof boolean[]>, never>;
                    } & Record<Exclude<keyof I_5["claimRecord"], keyof _177.ClaimRecord>, never>;
                } & Record<Exclude<keyof I_5, "claimRecord">, never>>(object: I_5): _180.QueryClaimRecordResponse;
            };
            QueryClaimableForActionRequest: {
                encode(message: _180.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.QueryClaimableForActionRequest;
                fromJSON(object: any): _180.QueryClaimableForActionRequest;
                toJSON(message: _180.QueryClaimableForActionRequest): unknown;
                fromPartial<I_6 extends {
                    address?: string;
                    action?: _177.Action;
                } & {
                    address?: string;
                    action?: _177.Action;
                } & Record<Exclude<keyof I_6, keyof _180.QueryClaimableForActionRequest>, never>>(object: I_6): _180.QueryClaimableForActionRequest;
            };
            QueryClaimableForActionResponse: {
                encode(message: _180.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.QueryClaimableForActionResponse;
                fromJSON(object: any): _180.QueryClaimableForActionResponse;
                toJSON(message: _180.QueryClaimableForActionResponse): unknown;
                fromPartial<I_7 extends {
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
                    } & Record<Exclude<keyof I_7["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_7["coins"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_7, "coins">, never>>(object: I_7): _180.QueryClaimableForActionResponse;
            };
            QueryTotalClaimableRequest: {
                encode(message: _180.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.QueryTotalClaimableRequest;
                fromJSON(object: any): _180.QueryTotalClaimableRequest;
                toJSON(message: _180.QueryTotalClaimableRequest): unknown;
                fromPartial<I_8 extends {
                    address?: string;
                } & {
                    address?: string;
                } & Record<Exclude<keyof I_8, "address">, never>>(object: I_8): _180.QueryTotalClaimableRequest;
            };
            QueryTotalClaimableResponse: {
                encode(message: _180.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.QueryTotalClaimableResponse;
                fromJSON(object: any): _180.QueryTotalClaimableResponse;
                toJSON(message: _180.QueryTotalClaimableResponse): unknown;
                fromPartial<I_9 extends {
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
                    } & Record<Exclude<keyof I_9["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_9["coins"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_9, "coins">, never>>(object: I_9): _180.QueryTotalClaimableResponse;
            };
            Params: {
                encode(message: _179.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.Params;
                fromJSON(object: any): _179.Params;
                toJSON(message: _179.Params): unknown;
                fromPartial<I_10 extends {
                    airdropStartTime?: Date;
                    durationUntilDecay?: string;
                    durationOfDecay?: string;
                    claimDenom?: string;
                } & {
                    airdropStartTime?: Date;
                    durationUntilDecay?: string;
                    durationOfDecay?: string;
                    claimDenom?: string;
                } & Record<Exclude<keyof I_10, keyof _179.Params>, never>>(object: I_10): _179.Params;
            };
            GenesisState: {
                encode(message: _178.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.GenesisState;
                fromJSON(object: any): _178.GenesisState;
                toJSON(message: _178.GenesisState): unknown;
                fromPartial<I_11 extends {
                    moduleAccountBalance?: {
                        denom?: string;
                        amount?: string;
                    };
                    params?: {
                        airdropStartTime?: Date;
                        durationUntilDecay?: string;
                        durationOfDecay?: string;
                        claimDenom?: string;
                    };
                    claimRecords?: {
                        address?: string;
                        initialClaimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        actionCompleted?: boolean[];
                    }[];
                } & {
                    moduleAccountBalance?: {
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_11["moduleAccountBalance"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                    params?: {
                        airdropStartTime?: Date;
                        durationUntilDecay?: string;
                        durationOfDecay?: string;
                        claimDenom?: string;
                    } & {
                        airdropStartTime?: Date;
                        durationUntilDecay?: string;
                        durationOfDecay?: string;
                        claimDenom?: string;
                    } & Record<Exclude<keyof I_11["params"], keyof _179.Params>, never>;
                    claimRecords?: {
                        address?: string;
                        initialClaimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        actionCompleted?: boolean[];
                    }[] & ({
                        address?: string;
                        initialClaimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        actionCompleted?: boolean[];
                    } & {
                        address?: string;
                        initialClaimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[] & ({
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I_11["claimRecords"][number]["initialClaimableAmount"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_11["claimRecords"][number]["initialClaimableAmount"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                        actionCompleted?: boolean[] & boolean[] & Record<Exclude<keyof I_11["claimRecords"][number]["actionCompleted"], keyof boolean[]>, never>;
                    } & Record<Exclude<keyof I_11["claimRecords"][number], keyof _177.ClaimRecord>, never>)[] & Record<Exclude<keyof I_11["claimRecords"], keyof {
                        address?: string;
                        initialClaimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        actionCompleted?: boolean[];
                    }[]>, never>;
                } & Record<Exclude<keyof I_11, keyof _178.GenesisState>, never>>(object: I_11): _178.GenesisState;
            };
            actionFromJSON(object: any): _177.Action;
            actionToJSON(object: _177.Action): string;
            Action: typeof _177.Action;
            ClaimRecord: {
                encode(message: _177.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.ClaimRecord;
                fromJSON(object: any): _177.ClaimRecord;
                toJSON(message: _177.ClaimRecord): unknown;
                fromPartial<I_12 extends {
                    address?: string;
                    initialClaimableAmount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    actionCompleted?: boolean[];
                } & {
                    address?: string;
                    initialClaimableAmount?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_12["initialClaimableAmount"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_12["initialClaimableAmount"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                    actionCompleted?: boolean[] & boolean[] & Record<Exclude<keyof I_12["actionCompleted"], keyof boolean[]>, never>;
                } & Record<Exclude<keyof I_12, keyof _177.ClaimRecord>, never>>(object: I_12): _177.ClaimRecord;
            };
        };
    }
    namespace epochs {
        const v1beta1: {
            QueryEpochsInfoRequest: {
                encode(_: _182.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryEpochsInfoRequest;
                fromJSON(_: any): _182.QueryEpochsInfoRequest;
                toJSON(_: _182.QueryEpochsInfoRequest): unknown;
                fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): _182.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _182.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryEpochsInfoResponse;
                fromJSON(object: any): _182.QueryEpochsInfoResponse;
                toJSON(message: _182.QueryEpochsInfoResponse): unknown;
                fromPartial<I_1 extends {
                    epochs?: {
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: any;
                    }[];
                } & {
                    epochs?: {
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: any;
                    }[] & ({
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: any;
                    } & {
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: any;
                    } & Record<Exclude<keyof I_1["epochs"][number], keyof _181.EpochInfo>, never>)[] & Record<Exclude<keyof I_1["epochs"], keyof {
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: any;
                    }[]>, never>;
                } & Record<Exclude<keyof I_1, "epochs">, never>>(object: I_1): _182.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _182.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryCurrentEpochRequest;
                fromJSON(object: any): _182.QueryCurrentEpochRequest;
                toJSON(message: _182.QueryCurrentEpochRequest): unknown;
                fromPartial<I_2 extends {
                    identifier?: string;
                } & {
                    identifier?: string;
                } & Record<Exclude<keyof I_2, "identifier">, never>>(object: I_2): _182.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _182.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryCurrentEpochResponse;
                fromJSON(object: any): _182.QueryCurrentEpochResponse;
                toJSON(message: _182.QueryCurrentEpochResponse): unknown;
                fromPartial<I_3 extends {
                    currentEpoch?: any;
                } & {
                    currentEpoch?: any;
                } & Record<Exclude<keyof I_3, "currentEpoch">, never>>(object: I_3): _182.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _181.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.EpochInfo;
                fromJSON(object: any): _181.EpochInfo;
                toJSON(message: _181.EpochInfo): unknown;
                fromPartial<I_4 extends {
                    identifier?: string;
                    startTime?: Date;
                    duration?: string;
                    currentEpoch?: any;
                    currentEpochStartTime?: Date;
                    epochCountingStarted?: boolean;
                    currentEpochStartHeight?: any;
                } & {
                    identifier?: string;
                    startTime?: Date;
                    duration?: string;
                    currentEpoch?: any;
                    currentEpochStartTime?: Date;
                    epochCountingStarted?: boolean;
                    currentEpochStartHeight?: any;
                } & Record<Exclude<keyof I_4, keyof _181.EpochInfo>, never>>(object: I_4): _181.EpochInfo;
            };
            GenesisState: {
                encode(message: _181.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.GenesisState;
                fromJSON(object: any): _181.GenesisState;
                toJSON(message: _181.GenesisState): unknown;
                fromPartial<I_5 extends {
                    epochs?: {
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: any;
                    }[];
                } & {
                    epochs?: {
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: any;
                    }[] & ({
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: any;
                    } & {
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: any;
                    } & Record<Exclude<keyof I_5["epochs"][number], keyof _181.EpochInfo>, never>)[] & Record<Exclude<keyof I_5["epochs"], keyof {
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: any;
                    }[]>, never>;
                } & Record<Exclude<keyof I_5, "epochs">, never>>(object: I_5): _181.GenesisState;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _187.MsgJoinPool): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _187.MsgExitPool): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _187.MsgSwapExactAmountIn): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _187.MsgSwapExactAmountOut): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _187.MsgJoinSwapExternAmountIn): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _187.MsgJoinSwapShareAmountOut): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _187.MsgExitSwapExternAmountOut): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _187.MsgExitSwapShareAmountIn): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _187.MsgJoinPool): {
                        typeUrl: string;
                        value: _187.MsgJoinPool;
                    };
                    exitPool(value: _187.MsgExitPool): {
                        typeUrl: string;
                        value: _187.MsgExitPool;
                    };
                    swapExactAmountIn(value: _187.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _187.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _187.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _187.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _187.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _187.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _187.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _187.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _187.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _187.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _187.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _187.MsgExitSwapShareAmountIn;
                    };
                };
                toJSON: {
                    joinPool(value: _187.MsgJoinPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitPool(value: _187.MsgExitPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountIn(value: _187.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountOut(value: _187.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapExternAmountIn(value: _187.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapShareAmountOut(value: _187.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapExternAmountOut(value: _187.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapShareAmountIn(value: _187.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    joinPool(value: any): {
                        typeUrl: string;
                        value: _187.MsgJoinPool;
                    };
                    exitPool(value: any): {
                        typeUrl: string;
                        value: _187.MsgExitPool;
                    };
                    swapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _187.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _187.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: any): {
                        typeUrl: string;
                        value: _187.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: any): {
                        typeUrl: string;
                        value: _187.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: any): {
                        typeUrl: string;
                        value: _187.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: any): {
                        typeUrl: string;
                        value: _187.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _187.MsgJoinPool): {
                        typeUrl: string;
                        value: _187.MsgJoinPool;
                    };
                    exitPool(value: _187.MsgExitPool): {
                        typeUrl: string;
                        value: _187.MsgExitPool;
                    };
                    swapExactAmountIn(value: _187.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _187.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _187.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _187.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _187.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _187.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _187.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _187.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _187.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _187.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _187.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _187.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: _187.MsgJoinPool) => {
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
                    }) => _187.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: _187.MsgExitPool) => {
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
                    }) => _187.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _187.MsgSwapExactAmountIn) => {
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
                    }) => _187.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _187.MsgSwapExactAmountOut) => {
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
                    }) => _187.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: _187.MsgJoinSwapExternAmountIn) => {
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
                    }) => _187.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: _187.MsgJoinSwapShareAmountOut) => {
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
                    }) => _187.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: _187.MsgExitSwapExternAmountOut) => {
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
                    }) => _187.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: _187.MsgExitSwapShareAmountIn) => {
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
                    }) => _187.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                encode(message: _187.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgJoinPool;
                fromJSON(object: any): _187.MsgJoinPool;
                toJSON(message: _187.MsgJoinPool): unknown;
                fromPartial<I extends {
                    sender?: string;
                    poolId?: any;
                    shareOutAmount?: string;
                    tokenInMaxs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                } & {
                    sender?: string;
                    poolId?: any;
                    shareOutAmount?: string;
                    tokenInMaxs?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I["tokenInMaxs"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["tokenInMaxs"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I, keyof _187.MsgJoinPool>, never>>(object: I): _187.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(_: _187.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgJoinPoolResponse;
                fromJSON(_: any): _187.MsgJoinPoolResponse;
                toJSON(_: _187.MsgJoinPoolResponse): unknown;
                fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _187.MsgJoinPoolResponse;
            };
            MsgExitPool: {
                encode(message: _187.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgExitPool;
                fromJSON(object: any): _187.MsgExitPool;
                toJSON(message: _187.MsgExitPool): unknown;
                fromPartial<I_2 extends {
                    sender?: string;
                    poolId?: any;
                    shareInAmount?: string;
                    tokenOutMins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                } & {
                    sender?: string;
                    poolId?: any;
                    shareInAmount?: string;
                    tokenOutMins?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_2["tokenOutMins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_2["tokenOutMins"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_2, keyof _187.MsgExitPool>, never>>(object: I_2): _187.MsgExitPool;
            };
            MsgExitPoolResponse: {
                encode(_: _187.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgExitPoolResponse;
                fromJSON(_: any): _187.MsgExitPoolResponse;
                toJSON(_: _187.MsgExitPoolResponse): unknown;
                fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _187.MsgExitPoolResponse;
            };
            SwapAmountInRoute: {
                encode(message: _187.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.SwapAmountInRoute;
                fromJSON(object: any): _187.SwapAmountInRoute;
                toJSON(message: _187.SwapAmountInRoute): unknown;
                fromPartial<I_4 extends {
                    poolId?: any;
                    tokenOutDenom?: string;
                } & {
                    poolId?: any;
                    tokenOutDenom?: string;
                } & Record<Exclude<keyof I_4, keyof _187.SwapAmountInRoute>, never>>(object: I_4): _187.SwapAmountInRoute;
            };
            MsgSwapExactAmountIn: {
                encode(message: _187.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgSwapExactAmountIn;
                fromJSON(object: any): _187.MsgSwapExactAmountIn;
                toJSON(message: _187.MsgSwapExactAmountIn): unknown;
                fromPartial<I_5 extends {
                    sender?: string;
                    routes?: {
                        poolId?: any;
                        tokenOutDenom?: string;
                    }[];
                    tokenIn?: {
                        denom?: string;
                        amount?: string;
                    };
                    tokenOutMinAmount?: string;
                } & {
                    sender?: string;
                    routes?: {
                        poolId?: any;
                        tokenOutDenom?: string;
                    }[] & ({
                        poolId?: any;
                        tokenOutDenom?: string;
                    } & {
                        poolId?: any;
                        tokenOutDenom?: string;
                    } & Record<Exclude<keyof I_5["routes"][number], keyof _187.SwapAmountInRoute>, never>)[] & Record<Exclude<keyof I_5["routes"], keyof {
                        poolId?: any;
                        tokenOutDenom?: string;
                    }[]>, never>;
                    tokenIn?: {
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_5["tokenIn"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                    tokenOutMinAmount?: string;
                } & Record<Exclude<keyof I_5, keyof _187.MsgSwapExactAmountIn>, never>>(object: I_5): _187.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _187.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgSwapExactAmountInResponse;
                fromJSON(object: any): _187.MsgSwapExactAmountInResponse;
                toJSON(message: _187.MsgSwapExactAmountInResponse): unknown;
                fromPartial<I_6 extends {
                    tokenOutAmount?: string;
                } & {
                    tokenOutAmount?: string;
                } & Record<Exclude<keyof I_6, "tokenOutAmount">, never>>(object: I_6): _187.MsgSwapExactAmountInResponse;
            };
            SwapAmountOutRoute: {
                encode(message: _187.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.SwapAmountOutRoute;
                fromJSON(object: any): _187.SwapAmountOutRoute;
                toJSON(message: _187.SwapAmountOutRoute): unknown;
                fromPartial<I_7 extends {
                    poolId?: any;
                    tokenInDenom?: string;
                } & {
                    poolId?: any;
                    tokenInDenom?: string;
                } & Record<Exclude<keyof I_7, keyof _187.SwapAmountOutRoute>, never>>(object: I_7): _187.SwapAmountOutRoute;
            };
            MsgSwapExactAmountOut: {
                encode(message: _187.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgSwapExactAmountOut;
                fromJSON(object: any): _187.MsgSwapExactAmountOut;
                toJSON(message: _187.MsgSwapExactAmountOut): unknown;
                fromPartial<I_8 extends {
                    sender?: string;
                    routes?: {
                        poolId?: any;
                        tokenInDenom?: string;
                    }[];
                    tokenInMaxAmount?: string;
                    tokenOut?: {
                        denom?: string;
                        amount?: string;
                    };
                } & {
                    sender?: string;
                    routes?: {
                        poolId?: any;
                        tokenInDenom?: string;
                    }[] & ({
                        poolId?: any;
                        tokenInDenom?: string;
                    } & {
                        poolId?: any;
                        tokenInDenom?: string;
                    } & Record<Exclude<keyof I_8["routes"][number], keyof _187.SwapAmountOutRoute>, never>)[] & Record<Exclude<keyof I_8["routes"], keyof {
                        poolId?: any;
                        tokenInDenom?: string;
                    }[]>, never>;
                    tokenInMaxAmount?: string;
                    tokenOut?: {
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_8["tokenOut"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                } & Record<Exclude<keyof I_8, keyof _187.MsgSwapExactAmountOut>, never>>(object: I_8): _187.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _187.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgSwapExactAmountOutResponse;
                fromJSON(object: any): _187.MsgSwapExactAmountOutResponse;
                toJSON(message: _187.MsgSwapExactAmountOutResponse): unknown;
                fromPartial<I_9 extends {
                    tokenInAmount?: string;
                } & {
                    tokenInAmount?: string;
                } & Record<Exclude<keyof I_9, "tokenInAmount">, never>>(object: I_9): _187.MsgSwapExactAmountOutResponse;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _187.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgJoinSwapExternAmountIn;
                fromJSON(object: any): _187.MsgJoinSwapExternAmountIn;
                toJSON(message: _187.MsgJoinSwapExternAmountIn): unknown;
                fromPartial<I_10 extends {
                    sender?: string;
                    poolId?: any;
                    tokenIn?: {
                        denom?: string;
                        amount?: string;
                    };
                    shareOutMinAmount?: string;
                } & {
                    sender?: string;
                    poolId?: any;
                    tokenIn?: {
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_10["tokenIn"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                    shareOutMinAmount?: string;
                } & Record<Exclude<keyof I_10, keyof _187.MsgJoinSwapExternAmountIn>, never>>(object: I_10): _187.MsgJoinSwapExternAmountIn;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _187.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgJoinSwapExternAmountInResponse;
                fromJSON(object: any): _187.MsgJoinSwapExternAmountInResponse;
                toJSON(message: _187.MsgJoinSwapExternAmountInResponse): unknown;
                fromPartial<I_11 extends {
                    shareOutAmount?: string;
                } & {
                    shareOutAmount?: string;
                } & Record<Exclude<keyof I_11, "shareOutAmount">, never>>(object: I_11): _187.MsgJoinSwapExternAmountInResponse;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _187.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgJoinSwapShareAmountOut;
                fromJSON(object: any): _187.MsgJoinSwapShareAmountOut;
                toJSON(message: _187.MsgJoinSwapShareAmountOut): unknown;
                fromPartial<I_12 extends {
                    sender?: string;
                    poolId?: any;
                    tokenInDenom?: string;
                    shareOutAmount?: string;
                    tokenInMaxAmount?: string;
                } & {
                    sender?: string;
                    poolId?: any;
                    tokenInDenom?: string;
                    shareOutAmount?: string;
                    tokenInMaxAmount?: string;
                } & Record<Exclude<keyof I_12, keyof _187.MsgJoinSwapShareAmountOut>, never>>(object: I_12): _187.MsgJoinSwapShareAmountOut;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _187.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgJoinSwapShareAmountOutResponse;
                fromJSON(object: any): _187.MsgJoinSwapShareAmountOutResponse;
                toJSON(message: _187.MsgJoinSwapShareAmountOutResponse): unknown;
                fromPartial<I_13 extends {
                    tokenInAmount?: string;
                } & {
                    tokenInAmount?: string;
                } & Record<Exclude<keyof I_13, "tokenInAmount">, never>>(object: I_13): _187.MsgJoinSwapShareAmountOutResponse;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _187.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgExitSwapShareAmountIn;
                fromJSON(object: any): _187.MsgExitSwapShareAmountIn;
                toJSON(message: _187.MsgExitSwapShareAmountIn): unknown;
                fromPartial<I_14 extends {
                    sender?: string;
                    poolId?: any;
                    tokenOutDenom?: string;
                    shareInAmount?: string;
                    tokenOutMinAmount?: string;
                } & {
                    sender?: string;
                    poolId?: any;
                    tokenOutDenom?: string;
                    shareInAmount?: string;
                    tokenOutMinAmount?: string;
                } & Record<Exclude<keyof I_14, keyof _187.MsgExitSwapShareAmountIn>, never>>(object: I_14): _187.MsgExitSwapShareAmountIn;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _187.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgExitSwapShareAmountInResponse;
                fromJSON(object: any): _187.MsgExitSwapShareAmountInResponse;
                toJSON(message: _187.MsgExitSwapShareAmountInResponse): unknown;
                fromPartial<I_15 extends {
                    tokenOutAmount?: string;
                } & {
                    tokenOutAmount?: string;
                } & Record<Exclude<keyof I_15, "tokenOutAmount">, never>>(object: I_15): _187.MsgExitSwapShareAmountInResponse;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _187.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgExitSwapExternAmountOut;
                fromJSON(object: any): _187.MsgExitSwapExternAmountOut;
                toJSON(message: _187.MsgExitSwapExternAmountOut): unknown;
                fromPartial<I_16 extends {
                    sender?: string;
                    poolId?: any;
                    tokenOut?: {
                        denom?: string;
                        amount?: string;
                    };
                    shareInMaxAmount?: string;
                } & {
                    sender?: string;
                    poolId?: any;
                    tokenOut?: {
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_16["tokenOut"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                    shareInMaxAmount?: string;
                } & Record<Exclude<keyof I_16, keyof _187.MsgExitSwapExternAmountOut>, never>>(object: I_16): _187.MsgExitSwapExternAmountOut;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _187.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgExitSwapExternAmountOutResponse;
                fromJSON(object: any): _187.MsgExitSwapExternAmountOutResponse;
                toJSON(message: _187.MsgExitSwapExternAmountOutResponse): unknown;
                fromPartial<I_17 extends {
                    shareInAmount?: string;
                } & {
                    shareInAmount?: string;
                } & Record<Exclude<keyof I_17, "shareInAmount">, never>>(object: I_17): _187.MsgExitSwapExternAmountOutResponse;
            };
            QueryPoolRequest: {
                encode(message: _186.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryPoolRequest;
                fromJSON(object: any): _186.QueryPoolRequest;
                toJSON(message: _186.QueryPoolRequest): unknown;
                fromPartial<I_18 extends {
                    poolId?: any;
                } & {
                    poolId?: any;
                } & Record<Exclude<keyof I_18, "poolId">, never>>(object: I_18): _186.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _186.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryPoolResponse;
                fromJSON(object: any): _186.QueryPoolResponse;
                toJSON(message: _186.QueryPoolResponse): unknown;
                fromPartial<I_19 extends {
                    pool?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                } & {
                    pool?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I_19["pool"], keyof import("../google/protobuf/any").Any>, never>;
                } & Record<Exclude<keyof I_19, "pool">, never>>(object: I_19): _186.QueryPoolResponse;
            };
            QueryPoolsRequest: {
                encode(message: _186.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryPoolsRequest;
                fromJSON(object: any): _186.QueryPoolsRequest;
                toJSON(message: _186.QueryPoolsRequest): unknown;
                fromPartial<I_20 extends {
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
                    } & Record<Exclude<keyof I_20["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I_20, "pagination">, never>>(object: I_20): _186.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _186.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryPoolsResponse;
                fromJSON(object: any): _186.QueryPoolsResponse;
                toJSON(message: _186.QueryPoolsResponse): unknown;
                fromPartial<I_21 extends {
                    pools?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                } & {
                    pools?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[] & ({
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I_21["pools"][number], keyof import("../google/protobuf/any").Any>, never>)[] & Record<Exclude<keyof I_21["pools"], keyof {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[]>, never>;
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    } & {
                        nextKey?: Uint8Array;
                        total?: any;
                    } & Record<Exclude<keyof I_21["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_21, keyof _186.QueryPoolsResponse>, never>>(object: I_21): _186.QueryPoolsResponse;
            };
            QueryNumPoolsRequest: {
                encode(_: _186.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryNumPoolsRequest;
                fromJSON(_: any): _186.QueryNumPoolsRequest;
                toJSON(_: _186.QueryNumPoolsRequest): unknown;
                fromPartial<I_22 extends {} & {} & Record<Exclude<keyof I_22, never>, never>>(_: I_22): _186.QueryNumPoolsRequest;
            };
            QueryNumPoolsResponse: {
                encode(message: _186.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryNumPoolsResponse;
                fromJSON(object: any): _186.QueryNumPoolsResponse;
                toJSON(message: _186.QueryNumPoolsResponse): unknown;
                fromPartial<I_23 extends {
                    numPools?: any;
                } & {
                    numPools?: any;
                } & Record<Exclude<keyof I_23, "numPools">, never>>(object: I_23): _186.QueryNumPoolsResponse;
            };
            QueryPoolParamsRequest: {
                encode(message: _186.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryPoolParamsRequest;
                fromJSON(object: any): _186.QueryPoolParamsRequest;
                toJSON(message: _186.QueryPoolParamsRequest): unknown;
                fromPartial<I_24 extends {
                    poolId?: any;
                } & {
                    poolId?: any;
                } & Record<Exclude<keyof I_24, "poolId">, never>>(object: I_24): _186.QueryPoolParamsRequest;
            };
            QueryPoolParamsResponse: {
                encode(message: _186.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryPoolParamsResponse;
                fromJSON(object: any): _186.QueryPoolParamsResponse;
                toJSON(message: _186.QueryPoolParamsResponse): unknown;
                fromPartial<I_25 extends {
                    params?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                } & {
                    params?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I_25["params"], keyof import("../google/protobuf/any").Any>, never>;
                } & Record<Exclude<keyof I_25, "params">, never>>(object: I_25): _186.QueryPoolParamsResponse;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _186.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryTotalPoolLiquidityRequest;
                fromJSON(object: any): _186.QueryTotalPoolLiquidityRequest;
                toJSON(message: _186.QueryTotalPoolLiquidityRequest): unknown;
                fromPartial<I_26 extends {
                    poolId?: any;
                } & {
                    poolId?: any;
                } & Record<Exclude<keyof I_26, "poolId">, never>>(object: I_26): _186.QueryTotalPoolLiquidityRequest;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _186.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryTotalPoolLiquidityResponse;
                fromJSON(object: any): _186.QueryTotalPoolLiquidityResponse;
                toJSON(message: _186.QueryTotalPoolLiquidityResponse): unknown;
                fromPartial<I_27 extends {
                    liquidity?: {
                        denom?: string;
                        amount?: string;
                    }[];
                } & {
                    liquidity?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_27["liquidity"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_27["liquidity"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_27, "liquidity">, never>>(object: I_27): _186.QueryTotalPoolLiquidityResponse;
            };
            QueryTotalSharesRequest: {
                encode(message: _186.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryTotalSharesRequest;
                fromJSON(object: any): _186.QueryTotalSharesRequest;
                toJSON(message: _186.QueryTotalSharesRequest): unknown;
                fromPartial<I_28 extends {
                    poolId?: any;
                } & {
                    poolId?: any;
                } & Record<Exclude<keyof I_28, "poolId">, never>>(object: I_28): _186.QueryTotalSharesRequest;
            };
            QueryTotalSharesResponse: {
                encode(message: _186.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryTotalSharesResponse;
                fromJSON(object: any): _186.QueryTotalSharesResponse;
                toJSON(message: _186.QueryTotalSharesResponse): unknown;
                fromPartial<I_29 extends {
                    totalShares?: {
                        denom?: string;
                        amount?: string;
                    };
                } & {
                    totalShares?: {
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_29["totalShares"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                } & Record<Exclude<keyof I_29, "totalShares">, never>>(object: I_29): _186.QueryTotalSharesResponse;
            };
            QuerySpotPriceRequest: {
                encode(message: _186.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QuerySpotPriceRequest;
                fromJSON(object: any): _186.QuerySpotPriceRequest;
                toJSON(message: _186.QuerySpotPriceRequest): unknown;
                fromPartial<I_30 extends {
                    poolId?: any;
                    tokenInDenom?: string;
                    tokenOutDenom?: string;
                } & {
                    poolId?: any;
                    tokenInDenom?: string;
                    tokenOutDenom?: string;
                } & Record<Exclude<keyof I_30, keyof _186.QuerySpotPriceRequest>, never>>(object: I_30): _186.QuerySpotPriceRequest;
            };
            QuerySpotPriceResponse: {
                encode(message: _186.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QuerySpotPriceResponse;
                fromJSON(object: any): _186.QuerySpotPriceResponse;
                toJSON(message: _186.QuerySpotPriceResponse): unknown;
                fromPartial<I_31 extends {
                    spotPrice?: string;
                } & {
                    spotPrice?: string;
                } & Record<Exclude<keyof I_31, "spotPrice">, never>>(object: I_31): _186.QuerySpotPriceResponse;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _186.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QuerySwapExactAmountInRequest;
                fromJSON(object: any): _186.QuerySwapExactAmountInRequest;
                toJSON(message: _186.QuerySwapExactAmountInRequest): unknown;
                fromPartial<I_32 extends {
                    sender?: string;
                    poolId?: any;
                    tokenIn?: string;
                    routes?: {
                        poolId?: any;
                        tokenOutDenom?: string;
                    }[];
                } & {
                    sender?: string;
                    poolId?: any;
                    tokenIn?: string;
                    routes?: {
                        poolId?: any;
                        tokenOutDenom?: string;
                    }[] & ({
                        poolId?: any;
                        tokenOutDenom?: string;
                    } & {
                        poolId?: any;
                        tokenOutDenom?: string;
                    } & Record<Exclude<keyof I_32["routes"][number], keyof _187.SwapAmountInRoute>, never>)[] & Record<Exclude<keyof I_32["routes"], keyof {
                        poolId?: any;
                        tokenOutDenom?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_32, keyof _186.QuerySwapExactAmountInRequest>, never>>(object: I_32): _186.QuerySwapExactAmountInRequest;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _186.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QuerySwapExactAmountInResponse;
                fromJSON(object: any): _186.QuerySwapExactAmountInResponse;
                toJSON(message: _186.QuerySwapExactAmountInResponse): unknown;
                fromPartial<I_33 extends {
                    tokenOutAmount?: string;
                } & {
                    tokenOutAmount?: string;
                } & Record<Exclude<keyof I_33, "tokenOutAmount">, never>>(object: I_33): _186.QuerySwapExactAmountInResponse;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _186.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QuerySwapExactAmountOutRequest;
                fromJSON(object: any): _186.QuerySwapExactAmountOutRequest;
                toJSON(message: _186.QuerySwapExactAmountOutRequest): unknown;
                fromPartial<I_34 extends {
                    sender?: string;
                    poolId?: any;
                    routes?: {
                        poolId?: any;
                        tokenInDenom?: string;
                    }[];
                    tokenOut?: string;
                } & {
                    sender?: string;
                    poolId?: any;
                    routes?: {
                        poolId?: any;
                        tokenInDenom?: string;
                    }[] & ({
                        poolId?: any;
                        tokenInDenom?: string;
                    } & {
                        poolId?: any;
                        tokenInDenom?: string;
                    } & Record<Exclude<keyof I_34["routes"][number], keyof _187.SwapAmountOutRoute>, never>)[] & Record<Exclude<keyof I_34["routes"], keyof {
                        poolId?: any;
                        tokenInDenom?: string;
                    }[]>, never>;
                    tokenOut?: string;
                } & Record<Exclude<keyof I_34, keyof _186.QuerySwapExactAmountOutRequest>, never>>(object: I_34): _186.QuerySwapExactAmountOutRequest;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _186.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QuerySwapExactAmountOutResponse;
                fromJSON(object: any): _186.QuerySwapExactAmountOutResponse;
                toJSON(message: _186.QuerySwapExactAmountOutResponse): unknown;
                fromPartial<I_35 extends {
                    tokenInAmount?: string;
                } & {
                    tokenInAmount?: string;
                } & Record<Exclude<keyof I_35, "tokenInAmount">, never>>(object: I_35): _186.QuerySwapExactAmountOutResponse;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _186.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryTotalLiquidityRequest;
                fromJSON(_: any): _186.QueryTotalLiquidityRequest;
                toJSON(_: _186.QueryTotalLiquidityRequest): unknown;
                fromPartial<I_36 extends {} & {} & Record<Exclude<keyof I_36, never>, never>>(_: I_36): _186.QueryTotalLiquidityRequest;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _186.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryTotalLiquidityResponse;
                fromJSON(object: any): _186.QueryTotalLiquidityResponse;
                toJSON(message: _186.QueryTotalLiquidityResponse): unknown;
                fromPartial<I_37 extends {
                    liquidity?: {
                        denom?: string;
                        amount?: string;
                    }[];
                } & {
                    liquidity?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_37["liquidity"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_37["liquidity"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_37, "liquidity">, never>>(object: I_37): _186.QueryTotalLiquidityResponse;
            };
            Params: {
                encode(message: _185.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.Params;
                fromJSON(object: any): _185.Params;
                toJSON(message: _185.Params): unknown;
                fromPartial<I_38 extends {
                    poolCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                } & {
                    poolCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_38["poolCreationFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_38["poolCreationFee"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_38, "poolCreationFee">, never>>(object: I_38): _185.Params;
            };
            GenesisState: {
                encode(message: _185.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.GenesisState;
                fromJSON(object: any): _185.GenesisState;
                toJSON(message: _185.GenesisState): unknown;
                fromPartial<I_39 extends {
                    pools?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    nextPoolNumber?: any;
                    params?: {
                        poolCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                } & {
                    pools?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[] & ({
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I_39["pools"][number], keyof import("../google/protobuf/any").Any>, never>)[] & Record<Exclude<keyof I_39["pools"], keyof {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[]>, never>;
                    nextPoolNumber?: any;
                    params?: {
                        poolCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    } & {
                        poolCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[] & ({
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I_39["params"]["poolCreationFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_39["params"]["poolCreationFee"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_39["params"], "poolCreationFee">, never>;
                } & Record<Exclude<keyof I_39, keyof _185.GenesisState>, never>>(object: I_39): _185.GenesisState;
            };
            MsgCreateBalancerPool: {
                encode(message: _184.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgCreateBalancerPool;
                fromJSON(object: any): _184.MsgCreateBalancerPool;
                toJSON(message: _184.MsgCreateBalancerPool): unknown;
                fromPartial<I_40 extends {
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
                                } & Record<Exclude<keyof I_40["poolParams"]["smoothWeightChangeParams"]["initialPoolWeights"][number]["token"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                                weight?: string;
                            } & Record<Exclude<keyof I_40["poolParams"]["smoothWeightChangeParams"]["initialPoolWeights"][number], keyof _183.PoolAsset>, never>)[] & Record<Exclude<keyof I_40["poolParams"]["smoothWeightChangeParams"]["initialPoolWeights"], keyof {
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
                                } & Record<Exclude<keyof I_40["poolParams"]["smoothWeightChangeParams"]["targetPoolWeights"][number]["token"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                                weight?: string;
                            } & Record<Exclude<keyof I_40["poolParams"]["smoothWeightChangeParams"]["targetPoolWeights"][number], keyof _183.PoolAsset>, never>)[] & Record<Exclude<keyof I_40["poolParams"]["smoothWeightChangeParams"]["targetPoolWeights"], keyof {
                                token?: {
                                    denom?: string;
                                    amount?: string;
                                };
                                weight?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_40["poolParams"]["smoothWeightChangeParams"], keyof _183.SmoothWeightChangeParams>, never>;
                    } & Record<Exclude<keyof I_40["poolParams"], keyof _183.PoolParams>, never>;
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
                        } & Record<Exclude<keyof I_40["poolAssets"][number]["token"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                        weight?: string;
                    } & Record<Exclude<keyof I_40["poolAssets"][number], keyof _183.PoolAsset>, never>)[] & Record<Exclude<keyof I_40["poolAssets"], keyof {
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        weight?: string;
                    }[]>, never>;
                    futurePoolGovernor?: string;
                } & Record<Exclude<keyof I_40, keyof _184.MsgCreateBalancerPool>, never>>(object: I_40): _184.MsgCreateBalancerPool;
            };
            MsgCreateBalancerPoolResponse: {
                encode(message: _184.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgCreateBalancerPoolResponse;
                fromJSON(object: any): _184.MsgCreateBalancerPoolResponse;
                toJSON(message: _184.MsgCreateBalancerPoolResponse): unknown;
                fromPartial<I_41 extends {
                    poolId?: any;
                } & {
                    poolId?: any;
                } & Record<Exclude<keyof I_41, "poolId">, never>>(object: I_41): _184.MsgCreateBalancerPoolResponse;
            };
            SmoothWeightChangeParams: {
                encode(message: _183.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.SmoothWeightChangeParams;
                fromJSON(object: any): _183.SmoothWeightChangeParams;
                toJSON(message: _183.SmoothWeightChangeParams): unknown;
                fromPartial<I_42 extends {
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
                        } & Record<Exclude<keyof I_42["initialPoolWeights"][number]["token"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                        weight?: string;
                    } & Record<Exclude<keyof I_42["initialPoolWeights"][number], keyof _183.PoolAsset>, never>)[] & Record<Exclude<keyof I_42["initialPoolWeights"], keyof {
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
                        } & Record<Exclude<keyof I_42["targetPoolWeights"][number]["token"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                        weight?: string;
                    } & Record<Exclude<keyof I_42["targetPoolWeights"][number], keyof _183.PoolAsset>, never>)[] & Record<Exclude<keyof I_42["targetPoolWeights"], keyof {
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        weight?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_42, keyof _183.SmoothWeightChangeParams>, never>>(object: I_42): _183.SmoothWeightChangeParams;
            };
            PoolParams: {
                encode(message: _183.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.PoolParams;
                fromJSON(object: any): _183.PoolParams;
                toJSON(message: _183.PoolParams): unknown;
                fromPartial<I_43 extends {
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
                            } & Record<Exclude<keyof I_43["smoothWeightChangeParams"]["initialPoolWeights"][number]["token"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                            weight?: string;
                        } & Record<Exclude<keyof I_43["smoothWeightChangeParams"]["initialPoolWeights"][number], keyof _183.PoolAsset>, never>)[] & Record<Exclude<keyof I_43["smoothWeightChangeParams"]["initialPoolWeights"], keyof {
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
                            } & Record<Exclude<keyof I_43["smoothWeightChangeParams"]["targetPoolWeights"][number]["token"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                            weight?: string;
                        } & Record<Exclude<keyof I_43["smoothWeightChangeParams"]["targetPoolWeights"][number], keyof _183.PoolAsset>, never>)[] & Record<Exclude<keyof I_43["smoothWeightChangeParams"]["targetPoolWeights"], keyof {
                            token?: {
                                denom?: string;
                                amount?: string;
                            };
                            weight?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_43["smoothWeightChangeParams"], keyof _183.SmoothWeightChangeParams>, never>;
                } & Record<Exclude<keyof I_43, keyof _183.PoolParams>, never>>(object: I_43): _183.PoolParams;
            };
            PoolAsset: {
                encode(message: _183.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.PoolAsset;
                fromJSON(object: any): _183.PoolAsset;
                toJSON(message: _183.PoolAsset): unknown;
                fromPartial<I_44 extends {
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
                    } & Record<Exclude<keyof I_44["token"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                    weight?: string;
                } & Record<Exclude<keyof I_44, keyof _183.PoolAsset>, never>>(object: I_44): _183.PoolAsset;
            };
            Pool: {
                encode(message: _183.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.Pool;
                fromJSON(object: any): _183.Pool;
                toJSON(message: _183.Pool): unknown;
                fromPartial<I_45 extends {
                    address?: string;
                    id?: any;
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
                    futurePoolGovernor?: string;
                    totalShares?: {
                        denom?: string;
                        amount?: string;
                    };
                    poolAssets?: {
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        weight?: string;
                    }[];
                    totalWeight?: string;
                } & {
                    address?: string;
                    id?: any;
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
                                } & Record<Exclude<keyof I_45["poolParams"]["smoothWeightChangeParams"]["initialPoolWeights"][number]["token"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                                weight?: string;
                            } & Record<Exclude<keyof I_45["poolParams"]["smoothWeightChangeParams"]["initialPoolWeights"][number], keyof _183.PoolAsset>, never>)[] & Record<Exclude<keyof I_45["poolParams"]["smoothWeightChangeParams"]["initialPoolWeights"], keyof {
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
                                } & Record<Exclude<keyof I_45["poolParams"]["smoothWeightChangeParams"]["targetPoolWeights"][number]["token"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                                weight?: string;
                            } & Record<Exclude<keyof I_45["poolParams"]["smoothWeightChangeParams"]["targetPoolWeights"][number], keyof _183.PoolAsset>, never>)[] & Record<Exclude<keyof I_45["poolParams"]["smoothWeightChangeParams"]["targetPoolWeights"], keyof {
                                token?: {
                                    denom?: string;
                                    amount?: string;
                                };
                                weight?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_45["poolParams"]["smoothWeightChangeParams"], keyof _183.SmoothWeightChangeParams>, never>;
                    } & Record<Exclude<keyof I_45["poolParams"], keyof _183.PoolParams>, never>;
                    futurePoolGovernor?: string;
                    totalShares?: {
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_45["totalShares"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
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
                        } & Record<Exclude<keyof I_45["poolAssets"][number]["token"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                        weight?: string;
                    } & Record<Exclude<keyof I_45["poolAssets"][number], keyof _183.PoolAsset>, never>)[] & Record<Exclude<keyof I_45["poolAssets"], keyof {
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        weight?: string;
                    }[]>, never>;
                    totalWeight?: string;
                } & Record<Exclude<keyof I_45, keyof _183.Pool>, never>>(object: I_45): _183.Pool;
            };
        };
    }
    const incentives: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _192.MsgCreateGauge): {
                    type_url: string;
                    value: Uint8Array;
                };
                addToGauge(value: _192.MsgAddToGauge): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _192.MsgCreateGauge): {
                    typeUrl: string;
                    value: _192.MsgCreateGauge;
                };
                addToGauge(value: _192.MsgAddToGauge): {
                    typeUrl: string;
                    value: _192.MsgAddToGauge;
                };
            };
            toJSON: {
                createGauge(value: _192.MsgCreateGauge): {
                    typeUrl: string;
                    value: unknown;
                };
                addToGauge(value: _192.MsgAddToGauge): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                createGauge(value: any): {
                    typeUrl: string;
                    value: _192.MsgCreateGauge;
                };
                addToGauge(value: any): {
                    typeUrl: string;
                    value: _192.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _192.MsgCreateGauge): {
                    typeUrl: string;
                    value: _192.MsgCreateGauge;
                };
                addToGauge(value: _192.MsgAddToGauge): {
                    typeUrl: string;
                    value: _192.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: _192.MsgCreateGauge) => {
                    isPerpetual: boolean;
                    owner: string;
                    distributeTo: {
                        lockQueryType: number;
                        denom: string;
                        duration: {
                            seconds: string;
                            nanos: number;
                        };
                        timestamp: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    startTime: {
                        seconds: string;
                        nanos: number;
                    };
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
                        timestamp: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    startTime: {
                        seconds: string;
                        nanos: number;
                    };
                    numEpochsPaidOver: string;
                }) => _192.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: ({ owner, gaugeId, rewards }: _192.MsgAddToGauge) => {
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
                }) => _192.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            encode(message: _192.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.MsgCreateGauge;
            fromJSON(object: any): _192.MsgCreateGauge;
            toJSON(message: _192.MsgCreateGauge): unknown;
            fromPartial<I extends {
                isPerpetual?: boolean;
                owner?: string;
                distributeTo?: {
                    lockQueryType?: _194.LockQueryType;
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
            } & {
                isPerpetual?: boolean;
                owner?: string;
                distributeTo?: {
                    lockQueryType?: _194.LockQueryType;
                    denom?: string;
                    duration?: string;
                    timestamp?: Date;
                } & {
                    lockQueryType?: _194.LockQueryType;
                    denom?: string;
                    duration?: string;
                    timestamp?: Date;
                } & Record<Exclude<keyof I["distributeTo"], keyof _194.QueryCondition>, never>;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[] & ({
                    denom?: string;
                    amount?: string;
                } & {
                    denom?: string;
                    amount?: string;
                } & Record<Exclude<keyof I["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["coins"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
                startTime?: Date;
                numEpochsPaidOver?: any;
            } & Record<Exclude<keyof I, keyof _192.MsgCreateGauge>, never>>(object: I): _192.MsgCreateGauge;
        };
        MsgCreateGaugeResponse: {
            encode(_: _192.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.MsgCreateGaugeResponse;
            fromJSON(_: any): _192.MsgCreateGaugeResponse;
            toJSON(_: _192.MsgCreateGaugeResponse): unknown;
            fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _192.MsgCreateGaugeResponse;
        };
        MsgAddToGauge: {
            encode(message: _192.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.MsgAddToGauge;
            fromJSON(object: any): _192.MsgAddToGauge;
            toJSON(message: _192.MsgAddToGauge): unknown;
            fromPartial<I_2 extends {
                owner?: string;
                gaugeId?: any;
                rewards?: {
                    denom?: string;
                    amount?: string;
                }[];
            } & {
                owner?: string;
                gaugeId?: any;
                rewards?: {
                    denom?: string;
                    amount?: string;
                }[] & ({
                    denom?: string;
                    amount?: string;
                } & {
                    denom?: string;
                    amount?: string;
                } & Record<Exclude<keyof I_2["rewards"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_2["rewards"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I_2, keyof _192.MsgAddToGauge>, never>>(object: I_2): _192.MsgAddToGauge;
        };
        MsgAddToGaugeResponse: {
            encode(_: _192.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.MsgAddToGaugeResponse;
            fromJSON(_: any): _192.MsgAddToGaugeResponse;
            toJSON(_: _192.MsgAddToGaugeResponse): unknown;
            fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _192.MsgAddToGaugeResponse;
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _191.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ModuleToDistributeCoinsRequest;
            fromJSON(_: any): _191.ModuleToDistributeCoinsRequest;
            toJSON(_: _191.ModuleToDistributeCoinsRequest): unknown;
            fromPartial<I_4 extends {} & {} & Record<Exclude<keyof I_4, never>, never>>(_: I_4): _191.ModuleToDistributeCoinsRequest;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _191.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ModuleToDistributeCoinsResponse;
            fromJSON(object: any): _191.ModuleToDistributeCoinsResponse;
            toJSON(message: _191.ModuleToDistributeCoinsResponse): unknown;
            fromPartial<I_5 extends {
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
                } & Record<Exclude<keyof I_5["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_5["coins"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I_5, "coins">, never>>(object: I_5): _191.ModuleToDistributeCoinsResponse;
        };
        ModuleDistributedCoinsRequest: {
            encode(_: _191.ModuleDistributedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ModuleDistributedCoinsRequest;
            fromJSON(_: any): _191.ModuleDistributedCoinsRequest;
            toJSON(_: _191.ModuleDistributedCoinsRequest): unknown;
            fromPartial<I_6 extends {} & {} & Record<Exclude<keyof I_6, never>, never>>(_: I_6): _191.ModuleDistributedCoinsRequest;
        };
        ModuleDistributedCoinsResponse: {
            encode(message: _191.ModuleDistributedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ModuleDistributedCoinsResponse;
            fromJSON(object: any): _191.ModuleDistributedCoinsResponse;
            toJSON(message: _191.ModuleDistributedCoinsResponse): unknown;
            fromPartial<I_7 extends {
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
                } & Record<Exclude<keyof I_7["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_7["coins"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I_7, "coins">, never>>(object: I_7): _191.ModuleDistributedCoinsResponse;
        };
        GaugeByIDRequest: {
            encode(message: _191.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.GaugeByIDRequest;
            fromJSON(object: any): _191.GaugeByIDRequest;
            toJSON(message: _191.GaugeByIDRequest): unknown;
            fromPartial<I_8 extends {
                id?: any;
            } & {
                id?: any;
            } & Record<Exclude<keyof I_8, "id">, never>>(object: I_8): _191.GaugeByIDRequest;
        };
        GaugeByIDResponse: {
            encode(message: _191.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.GaugeByIDResponse;
            fromJSON(object: any): _191.GaugeByIDResponse;
            toJSON(message: _191.GaugeByIDResponse): unknown;
            fromPartial<I_9 extends {
                gauge?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _194.LockQueryType;
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
                        lockQueryType?: _194.LockQueryType;
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
                        lockQueryType?: _194.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    } & {
                        lockQueryType?: _194.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    } & Record<Exclude<keyof I_9["gauge"]["distributeTo"], keyof _194.QueryCondition>, never>;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_9["gauge"]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_9["gauge"]["coins"], keyof {
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
                    } & Record<Exclude<keyof I_9["gauge"]["distributedCoins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_9["gauge"]["distributedCoins"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_9["gauge"], keyof _188.Gauge>, never>;
            } & Record<Exclude<keyof I_9, "gauge">, never>>(object: I_9): _191.GaugeByIDResponse;
        };
        GaugesRequest: {
            encode(message: _191.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.GaugesRequest;
            fromJSON(object: any): _191.GaugesRequest;
            toJSON(message: _191.GaugesRequest): unknown;
            fromPartial<I_10 extends {
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
                } & Record<Exclude<keyof I_10["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
            } & Record<Exclude<keyof I_10, "pagination">, never>>(object: I_10): _191.GaugesRequest;
        };
        GaugesResponse: {
            encode(message: _191.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.GaugesResponse;
            fromJSON(object: any): _191.GaugesResponse;
            toJSON(message: _191.GaugesResponse): unknown;
            fromPartial<I_11 extends {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _194.LockQueryType;
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
                        lockQueryType?: _194.LockQueryType;
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
                        lockQueryType?: _194.LockQueryType;
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
                        lockQueryType?: _194.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    } & {
                        lockQueryType?: _194.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    } & Record<Exclude<keyof I_11["data"][number]["distributeTo"], keyof _194.QueryCondition>, never>;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_11["data"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_11["data"][number]["coins"], keyof {
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
                    } & Record<Exclude<keyof I_11["data"][number]["distributedCoins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_11["data"][number]["distributedCoins"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_11["data"][number], keyof _188.Gauge>, never>)[] & Record<Exclude<keyof I_11["data"], keyof {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _194.LockQueryType;
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
                } & Record<Exclude<keyof I_11["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
            } & Record<Exclude<keyof I_11, keyof _191.GaugesResponse>, never>>(object: I_11): _191.GaugesResponse;
        };
        ActiveGaugesRequest: {
            encode(message: _191.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ActiveGaugesRequest;
            fromJSON(object: any): _191.ActiveGaugesRequest;
            toJSON(message: _191.ActiveGaugesRequest): unknown;
            fromPartial<I_12 extends {
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
                } & Record<Exclude<keyof I_12["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
            } & Record<Exclude<keyof I_12, "pagination">, never>>(object: I_12): _191.ActiveGaugesRequest;
        };
        ActiveGaugesResponse: {
            encode(message: _191.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ActiveGaugesResponse;
            fromJSON(object: any): _191.ActiveGaugesResponse;
            toJSON(message: _191.ActiveGaugesResponse): unknown;
            fromPartial<I_13 extends {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _194.LockQueryType;
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
                        lockQueryType?: _194.LockQueryType;
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
                        lockQueryType?: _194.LockQueryType;
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
                        lockQueryType?: _194.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    } & {
                        lockQueryType?: _194.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    } & Record<Exclude<keyof I_13["data"][number]["distributeTo"], keyof _194.QueryCondition>, never>;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_13["data"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_13["data"][number]["coins"], keyof {
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
                    } & Record<Exclude<keyof I_13["data"][number]["distributedCoins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_13["data"][number]["distributedCoins"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_13["data"][number], keyof _188.Gauge>, never>)[] & Record<Exclude<keyof I_13["data"], keyof {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _194.LockQueryType;
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
                } & Record<Exclude<keyof I_13["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
            } & Record<Exclude<keyof I_13, keyof _191.ActiveGaugesResponse>, never>>(object: I_13): _191.ActiveGaugesResponse;
        };
        ActiveGaugesPerDenomRequest: {
            encode(message: _191.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ActiveGaugesPerDenomRequest;
            fromJSON(object: any): _191.ActiveGaugesPerDenomRequest;
            toJSON(message: _191.ActiveGaugesPerDenomRequest): unknown;
            fromPartial<I_14 extends {
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
                } & Record<Exclude<keyof I_14["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
            } & Record<Exclude<keyof I_14, keyof _191.ActiveGaugesPerDenomRequest>, never>>(object: I_14): _191.ActiveGaugesPerDenomRequest;
        };
        ActiveGaugesPerDenomResponse: {
            encode(message: _191.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ActiveGaugesPerDenomResponse;
            fromJSON(object: any): _191.ActiveGaugesPerDenomResponse;
            toJSON(message: _191.ActiveGaugesPerDenomResponse): unknown;
            fromPartial<I_15 extends {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _194.LockQueryType;
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
                        lockQueryType?: _194.LockQueryType;
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
                        lockQueryType?: _194.LockQueryType;
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
                        lockQueryType?: _194.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    } & {
                        lockQueryType?: _194.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    } & Record<Exclude<keyof I_15["data"][number]["distributeTo"], keyof _194.QueryCondition>, never>;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_15["data"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_15["data"][number]["coins"], keyof {
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
                    } & Record<Exclude<keyof I_15["data"][number]["distributedCoins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_15["data"][number]["distributedCoins"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_15["data"][number], keyof _188.Gauge>, never>)[] & Record<Exclude<keyof I_15["data"], keyof {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _194.LockQueryType;
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
                } & Record<Exclude<keyof I_15["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
            } & Record<Exclude<keyof I_15, keyof _191.ActiveGaugesPerDenomResponse>, never>>(object: I_15): _191.ActiveGaugesPerDenomResponse;
        };
        UpcomingGaugesRequest: {
            encode(message: _191.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.UpcomingGaugesRequest;
            fromJSON(object: any): _191.UpcomingGaugesRequest;
            toJSON(message: _191.UpcomingGaugesRequest): unknown;
            fromPartial<I_16 extends {
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
                } & Record<Exclude<keyof I_16["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
            } & Record<Exclude<keyof I_16, "pagination">, never>>(object: I_16): _191.UpcomingGaugesRequest;
        };
        UpcomingGaugesResponse: {
            encode(message: _191.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.UpcomingGaugesResponse;
            fromJSON(object: any): _191.UpcomingGaugesResponse;
            toJSON(message: _191.UpcomingGaugesResponse): unknown;
            fromPartial<I_17 extends {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _194.LockQueryType;
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
                        lockQueryType?: _194.LockQueryType;
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
                        lockQueryType?: _194.LockQueryType;
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
                        lockQueryType?: _194.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    } & {
                        lockQueryType?: _194.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    } & Record<Exclude<keyof I_17["data"][number]["distributeTo"], keyof _194.QueryCondition>, never>;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_17["data"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_17["data"][number]["coins"], keyof {
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
                    } & Record<Exclude<keyof I_17["data"][number]["distributedCoins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_17["data"][number]["distributedCoins"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_17["data"][number], keyof _188.Gauge>, never>)[] & Record<Exclude<keyof I_17["data"], keyof {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _194.LockQueryType;
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
                } & Record<Exclude<keyof I_17["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
            } & Record<Exclude<keyof I_17, keyof _191.UpcomingGaugesResponse>, never>>(object: I_17): _191.UpcomingGaugesResponse;
        };
        RewardsEstRequest: {
            encode(message: _191.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RewardsEstRequest;
            fromJSON(object: any): _191.RewardsEstRequest;
            toJSON(message: _191.RewardsEstRequest): unknown;
            fromPartial<I_18 extends {
                owner?: string;
                lockIds?: any[];
                endEpoch?: any;
            } & {
                owner?: string;
                lockIds?: any[] & any[] & Record<Exclude<keyof I_18["lockIds"], keyof any[]>, never>;
                endEpoch?: any;
            } & Record<Exclude<keyof I_18, keyof _191.RewardsEstRequest>, never>>(object: I_18): _191.RewardsEstRequest;
        };
        RewardsEstResponse: {
            encode(message: _191.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RewardsEstResponse;
            fromJSON(object: any): _191.RewardsEstResponse;
            toJSON(message: _191.RewardsEstResponse): unknown;
            fromPartial<I_19 extends {
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
                } & Record<Exclude<keyof I_19["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_19["coins"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I_19, "coins">, never>>(object: I_19): _191.RewardsEstResponse;
        };
        QueryLockableDurationsRequest: {
            encode(_: _191.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.QueryLockableDurationsRequest;
            fromJSON(_: any): _191.QueryLockableDurationsRequest;
            toJSON(_: _191.QueryLockableDurationsRequest): unknown;
            fromPartial<I_20 extends {} & {} & Record<Exclude<keyof I_20, never>, never>>(_: I_20): _191.QueryLockableDurationsRequest;
        };
        QueryLockableDurationsResponse: {
            encode(message: _191.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.QueryLockableDurationsResponse;
            fromJSON(object: any): _191.QueryLockableDurationsResponse;
            toJSON(message: _191.QueryLockableDurationsResponse): unknown;
            fromPartial<I_21 extends {
                lockableDurations?: string[];
            } & {
                lockableDurations?: string[] & string[] & Record<Exclude<keyof I_21["lockableDurations"], keyof string[]>, never>;
            } & Record<Exclude<keyof I_21, "lockableDurations">, never>>(object: I_21): _191.QueryLockableDurationsResponse;
        };
        Params: {
            encode(message: _190.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.Params;
            fromJSON(object: any): _190.Params;
            toJSON(message: _190.Params): unknown;
            fromPartial<I_22 extends {
                distrEpochIdentifier?: string;
            } & {
                distrEpochIdentifier?: string;
            } & Record<Exclude<keyof I_22, "distrEpochIdentifier">, never>>(object: I_22): _190.Params;
        };
        GenesisState: {
            encode(message: _189.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.GenesisState;
            fromJSON(object: any): _189.GenesisState;
            toJSON(message: _189.GenesisState): unknown;
            fromPartial<I_23 extends {
                params?: {
                    distrEpochIdentifier?: string;
                };
                gauges?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _194.LockQueryType;
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
                lockableDurations?: string[];
                lastGaugeId?: any;
            } & {
                params?: {
                    distrEpochIdentifier?: string;
                } & {
                    distrEpochIdentifier?: string;
                } & Record<Exclude<keyof I_23["params"], "distrEpochIdentifier">, never>;
                gauges?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _194.LockQueryType;
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
                        lockQueryType?: _194.LockQueryType;
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
                        lockQueryType?: _194.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    } & {
                        lockQueryType?: _194.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    } & Record<Exclude<keyof I_23["gauges"][number]["distributeTo"], keyof _194.QueryCondition>, never>;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_23["gauges"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_23["gauges"][number]["coins"], keyof {
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
                    } & Record<Exclude<keyof I_23["gauges"][number]["distributedCoins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_23["gauges"][number]["distributedCoins"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_23["gauges"][number], keyof _188.Gauge>, never>)[] & Record<Exclude<keyof I_23["gauges"], keyof {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _194.LockQueryType;
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
                lockableDurations?: string[] & string[] & Record<Exclude<keyof I_23["lockableDurations"], keyof string[]>, never>;
                lastGaugeId?: any;
            } & Record<Exclude<keyof I_23, keyof _189.GenesisState>, never>>(object: I_23): _189.GenesisState;
        };
        Gauge: {
            encode(message: _188.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.Gauge;
            fromJSON(object: any): _188.Gauge;
            toJSON(message: _188.Gauge): unknown;
            fromPartial<I_24 extends {
                id?: any;
                isPerpetual?: boolean;
                distributeTo?: {
                    lockQueryType?: _194.LockQueryType;
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
                    lockQueryType?: _194.LockQueryType;
                    denom?: string;
                    duration?: string;
                    timestamp?: Date;
                } & {
                    lockQueryType?: _194.LockQueryType;
                    denom?: string;
                    duration?: string;
                    timestamp?: Date;
                } & Record<Exclude<keyof I_24["distributeTo"], keyof _194.QueryCondition>, never>;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[] & ({
                    denom?: string;
                    amount?: string;
                } & {
                    denom?: string;
                    amount?: string;
                } & Record<Exclude<keyof I_24["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_24["coins"], keyof {
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
                } & Record<Exclude<keyof I_24["distributedCoins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_24["distributedCoins"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I_24, keyof _188.Gauge>, never>>(object: I_24): _188.Gauge;
        };
        LockableDurationsInfo: {
            encode(message: _188.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.LockableDurationsInfo;
            fromJSON(object: any): _188.LockableDurationsInfo;
            toJSON(message: _188.LockableDurationsInfo): unknown;
            fromPartial<I_25 extends {
                lockableDurations?: string[];
            } & {
                lockableDurations?: string[] & string[] & Record<Exclude<keyof I_25["lockableDurations"], keyof string[]>, never>;
            } & Record<Exclude<keyof I_25, "lockableDurations">, never>>(object: I_25): _188.LockableDurationsInfo;
        };
    };
    const lockup: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _196.MsgLockTokens): {
                    type_url: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _196.MsgBeginUnlockingAll): {
                    type_url: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _196.MsgBeginUnlocking): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _196.MsgLockTokens): {
                    typeUrl: string;
                    value: _196.MsgLockTokens;
                };
                beginUnlockingAll(value: _196.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _196.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _196.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _196.MsgBeginUnlocking;
                };
            };
            toJSON: {
                lockTokens(value: _196.MsgLockTokens): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlockingAll(value: _196.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlocking(value: _196.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                lockTokens(value: any): {
                    typeUrl: string;
                    value: _196.MsgLockTokens;
                };
                beginUnlockingAll(value: any): {
                    typeUrl: string;
                    value: _196.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: any): {
                    typeUrl: string;
                    value: _196.MsgBeginUnlocking;
                };
            };
            fromPartial: {
                lockTokens(value: _196.MsgLockTokens): {
                    typeUrl: string;
                    value: _196.MsgLockTokens;
                };
                beginUnlockingAll(value: _196.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _196.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _196.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _196.MsgBeginUnlocking;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: ({ owner, duration, coins }: _196.MsgLockTokens) => {
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
                }) => _196.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: ({ owner }: _196.MsgBeginUnlockingAll) => {
                    owner: string;
                };
                fromAmino: ({ owner }: {
                    owner: string;
                }) => _196.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _196.MsgBeginUnlocking) => {
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
                }) => _196.MsgBeginUnlocking;
            };
        };
        MsgLockTokens: {
            encode(message: _196.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgLockTokens;
            fromJSON(object: any): _196.MsgLockTokens;
            toJSON(message: _196.MsgLockTokens): unknown;
            fromPartial<I extends {
                owner?: string;
                duration?: string;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            } & {
                owner?: string;
                duration?: string;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[] & ({
                    denom?: string;
                    amount?: string;
                } & {
                    denom?: string;
                    amount?: string;
                } & Record<Exclude<keyof I["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["coins"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I, keyof _196.MsgLockTokens>, never>>(object: I): _196.MsgLockTokens;
        };
        MsgLockTokensResponse: {
            encode(message: _196.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgLockTokensResponse;
            fromJSON(object: any): _196.MsgLockTokensResponse;
            toJSON(message: _196.MsgLockTokensResponse): unknown;
            fromPartial<I_1 extends {
                ID?: any;
            } & {
                ID?: any;
            } & Record<Exclude<keyof I_1, "ID">, never>>(object: I_1): _196.MsgLockTokensResponse;
        };
        MsgBeginUnlockingAll: {
            encode(message: _196.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgBeginUnlockingAll;
            fromJSON(object: any): _196.MsgBeginUnlockingAll;
            toJSON(message: _196.MsgBeginUnlockingAll): unknown;
            fromPartial<I_2 extends {
                owner?: string;
            } & {
                owner?: string;
            } & Record<Exclude<keyof I_2, "owner">, never>>(object: I_2): _196.MsgBeginUnlockingAll;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _196.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgBeginUnlockingAllResponse;
            fromJSON(object: any): _196.MsgBeginUnlockingAllResponse;
            toJSON(message: _196.MsgBeginUnlockingAllResponse): unknown;
            fromPartial<I_3 extends {
                unlocks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            } & {
                unlocks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[] & ({
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                } & {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_3["unlocks"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_3["unlocks"][number]["coins"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_3["unlocks"][number], keyof _194.PeriodLock>, never>)[] & Record<Exclude<keyof I_3["unlocks"], keyof {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_3, "unlocks">, never>>(object: I_3): _196.MsgBeginUnlockingAllResponse;
        };
        MsgBeginUnlocking: {
            encode(message: _196.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgBeginUnlocking;
            fromJSON(object: any): _196.MsgBeginUnlocking;
            toJSON(message: _196.MsgBeginUnlocking): unknown;
            fromPartial<I_4 extends {
                owner?: string;
                ID?: any;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            } & {
                owner?: string;
                ID?: any;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[] & ({
                    denom?: string;
                    amount?: string;
                } & {
                    denom?: string;
                    amount?: string;
                } & Record<Exclude<keyof I_4["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_4["coins"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I_4, keyof _196.MsgBeginUnlocking>, never>>(object: I_4): _196.MsgBeginUnlocking;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _196.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgBeginUnlockingResponse;
            fromJSON(object: any): _196.MsgBeginUnlockingResponse;
            toJSON(message: _196.MsgBeginUnlockingResponse): unknown;
            fromPartial<I_5 extends {
                success?: boolean;
            } & {
                success?: boolean;
            } & Record<Exclude<keyof I_5, "success">, never>>(object: I_5): _196.MsgBeginUnlockingResponse;
        };
        ModuleBalanceRequest: {
            encode(_: _195.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.ModuleBalanceRequest;
            fromJSON(_: any): _195.ModuleBalanceRequest;
            toJSON(_: _195.ModuleBalanceRequest): unknown;
            fromPartial<I_6 extends {} & {} & Record<Exclude<keyof I_6, never>, never>>(_: I_6): _195.ModuleBalanceRequest;
        };
        ModuleBalanceResponse: {
            encode(message: _195.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.ModuleBalanceResponse;
            fromJSON(object: any): _195.ModuleBalanceResponse;
            toJSON(message: _195.ModuleBalanceResponse): unknown;
            fromPartial<I_7 extends {
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
                } & Record<Exclude<keyof I_7["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_7["coins"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I_7, "coins">, never>>(object: I_7): _195.ModuleBalanceResponse;
        };
        ModuleLockedAmountRequest: {
            encode(_: _195.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.ModuleLockedAmountRequest;
            fromJSON(_: any): _195.ModuleLockedAmountRequest;
            toJSON(_: _195.ModuleLockedAmountRequest): unknown;
            fromPartial<I_8 extends {} & {} & Record<Exclude<keyof I_8, never>, never>>(_: I_8): _195.ModuleLockedAmountRequest;
        };
        ModuleLockedAmountResponse: {
            encode(message: _195.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.ModuleLockedAmountResponse;
            fromJSON(object: any): _195.ModuleLockedAmountResponse;
            toJSON(message: _195.ModuleLockedAmountResponse): unknown;
            fromPartial<I_9 extends {
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
                } & Record<Exclude<keyof I_9["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_9["coins"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I_9, "coins">, never>>(object: I_9): _195.ModuleLockedAmountResponse;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _195.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.AccountUnlockableCoinsRequest;
            fromJSON(object: any): _195.AccountUnlockableCoinsRequest;
            toJSON(message: _195.AccountUnlockableCoinsRequest): unknown;
            fromPartial<I_10 extends {
                owner?: string;
            } & {
                owner?: string;
            } & Record<Exclude<keyof I_10, "owner">, never>>(object: I_10): _195.AccountUnlockableCoinsRequest;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _195.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.AccountUnlockableCoinsResponse;
            fromJSON(object: any): _195.AccountUnlockableCoinsResponse;
            toJSON(message: _195.AccountUnlockableCoinsResponse): unknown;
            fromPartial<I_11 extends {
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
                } & Record<Exclude<keyof I_11["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_11["coins"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I_11, "coins">, never>>(object: I_11): _195.AccountUnlockableCoinsResponse;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _195.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.AccountUnlockingCoinsRequest;
            fromJSON(object: any): _195.AccountUnlockingCoinsRequest;
            toJSON(message: _195.AccountUnlockingCoinsRequest): unknown;
            fromPartial<I_12 extends {
                owner?: string;
            } & {
                owner?: string;
            } & Record<Exclude<keyof I_12, "owner">, never>>(object: I_12): _195.AccountUnlockingCoinsRequest;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _195.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.AccountUnlockingCoinsResponse;
            fromJSON(object: any): _195.AccountUnlockingCoinsResponse;
            toJSON(message: _195.AccountUnlockingCoinsResponse): unknown;
            fromPartial<I_13 extends {
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
                } & Record<Exclude<keyof I_13["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_13["coins"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I_13, "coins">, never>>(object: I_13): _195.AccountUnlockingCoinsResponse;
        };
        AccountLockedCoinsRequest: {
            encode(message: _195.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.AccountLockedCoinsRequest;
            fromJSON(object: any): _195.AccountLockedCoinsRequest;
            toJSON(message: _195.AccountLockedCoinsRequest): unknown;
            fromPartial<I_14 extends {
                owner?: string;
            } & {
                owner?: string;
            } & Record<Exclude<keyof I_14, "owner">, never>>(object: I_14): _195.AccountLockedCoinsRequest;
        };
        AccountLockedCoinsResponse: {
            encode(message: _195.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.AccountLockedCoinsResponse;
            fromJSON(object: any): _195.AccountLockedCoinsResponse;
            toJSON(message: _195.AccountLockedCoinsResponse): unknown;
            fromPartial<I_15 extends {
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
                } & Record<Exclude<keyof I_15["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_15["coins"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I_15, "coins">, never>>(object: I_15): _195.AccountLockedCoinsResponse;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _195.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.AccountLockedPastTimeRequest;
            fromJSON(object: any): _195.AccountLockedPastTimeRequest;
            toJSON(message: _195.AccountLockedPastTimeRequest): unknown;
            fromPartial<I_16 extends {
                owner?: string;
                timestamp?: Date;
            } & {
                owner?: string;
                timestamp?: Date;
            } & Record<Exclude<keyof I_16, keyof _195.AccountLockedPastTimeRequest>, never>>(object: I_16): _195.AccountLockedPastTimeRequest;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _195.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.AccountLockedPastTimeResponse;
            fromJSON(object: any): _195.AccountLockedPastTimeResponse;
            toJSON(message: _195.AccountLockedPastTimeResponse): unknown;
            fromPartial<I_17 extends {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            } & {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[] & ({
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                } & {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_17["locks"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_17["locks"][number]["coins"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_17["locks"][number], keyof _194.PeriodLock>, never>)[] & Record<Exclude<keyof I_17["locks"], keyof {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_17, "locks">, never>>(object: I_17): _195.AccountLockedPastTimeResponse;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _195.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromJSON(object: any): _195.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toJSON(message: _195.AccountLockedPastTimeNotUnlockingOnlyRequest): unknown;
            fromPartial<I_18 extends {
                owner?: string;
                timestamp?: Date;
            } & {
                owner?: string;
                timestamp?: Date;
            } & Record<Exclude<keyof I_18, keyof _195.AccountLockedPastTimeNotUnlockingOnlyRequest>, never>>(object: I_18): _195.AccountLockedPastTimeNotUnlockingOnlyRequest;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _195.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromJSON(object: any): _195.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toJSON(message: _195.AccountLockedPastTimeNotUnlockingOnlyResponse): unknown;
            fromPartial<I_19 extends {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            } & {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[] & ({
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                } & {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_19["locks"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_19["locks"][number]["coins"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_19["locks"][number], keyof _194.PeriodLock>, never>)[] & Record<Exclude<keyof I_19["locks"], keyof {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_19, "locks">, never>>(object: I_19): _195.AccountLockedPastTimeNotUnlockingOnlyResponse;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _195.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.AccountUnlockedBeforeTimeRequest;
            fromJSON(object: any): _195.AccountUnlockedBeforeTimeRequest;
            toJSON(message: _195.AccountUnlockedBeforeTimeRequest): unknown;
            fromPartial<I_20 extends {
                owner?: string;
                timestamp?: Date;
            } & {
                owner?: string;
                timestamp?: Date;
            } & Record<Exclude<keyof I_20, keyof _195.AccountUnlockedBeforeTimeRequest>, never>>(object: I_20): _195.AccountUnlockedBeforeTimeRequest;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _195.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.AccountUnlockedBeforeTimeResponse;
            fromJSON(object: any): _195.AccountUnlockedBeforeTimeResponse;
            toJSON(message: _195.AccountUnlockedBeforeTimeResponse): unknown;
            fromPartial<I_21 extends {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            } & {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[] & ({
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                } & {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_21["locks"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_21["locks"][number]["coins"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_21["locks"][number], keyof _194.PeriodLock>, never>)[] & Record<Exclude<keyof I_21["locks"], keyof {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_21, "locks">, never>>(object: I_21): _195.AccountUnlockedBeforeTimeResponse;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _195.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.AccountLockedPastTimeDenomRequest;
            fromJSON(object: any): _195.AccountLockedPastTimeDenomRequest;
            toJSON(message: _195.AccountLockedPastTimeDenomRequest): unknown;
            fromPartial<I_22 extends {
                owner?: string;
                timestamp?: Date;
                denom?: string;
            } & {
                owner?: string;
                timestamp?: Date;
                denom?: string;
            } & Record<Exclude<keyof I_22, keyof _195.AccountLockedPastTimeDenomRequest>, never>>(object: I_22): _195.AccountLockedPastTimeDenomRequest;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _195.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.AccountLockedPastTimeDenomResponse;
            fromJSON(object: any): _195.AccountLockedPastTimeDenomResponse;
            toJSON(message: _195.AccountLockedPastTimeDenomResponse): unknown;
            fromPartial<I_23 extends {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            } & {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[] & ({
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                } & {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_23["locks"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_23["locks"][number]["coins"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_23["locks"][number], keyof _194.PeriodLock>, never>)[] & Record<Exclude<keyof I_23["locks"], keyof {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_23, "locks">, never>>(object: I_23): _195.AccountLockedPastTimeDenomResponse;
        };
        LockedDenomRequest: {
            encode(message: _195.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.LockedDenomRequest;
            fromJSON(object: any): _195.LockedDenomRequest;
            toJSON(message: _195.LockedDenomRequest): unknown;
            fromPartial<I_24 extends {
                denom?: string;
                duration?: string;
            } & {
                denom?: string;
                duration?: string;
            } & Record<Exclude<keyof I_24, keyof _195.LockedDenomRequest>, never>>(object: I_24): _195.LockedDenomRequest;
        };
        LockedDenomResponse: {
            encode(message: _195.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.LockedDenomResponse;
            fromJSON(object: any): _195.LockedDenomResponse;
            toJSON(message: _195.LockedDenomResponse): unknown;
            fromPartial<I_25 extends {
                amount?: string;
            } & {
                amount?: string;
            } & Record<Exclude<keyof I_25, "amount">, never>>(object: I_25): _195.LockedDenomResponse;
        };
        LockedRequest: {
            encode(message: _195.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.LockedRequest;
            fromJSON(object: any): _195.LockedRequest;
            toJSON(message: _195.LockedRequest): unknown;
            fromPartial<I_26 extends {
                lockId?: any;
            } & {
                lockId?: any;
            } & Record<Exclude<keyof I_26, "lockId">, never>>(object: I_26): _195.LockedRequest;
        };
        LockedResponse: {
            encode(message: _195.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.LockedResponse;
            fromJSON(object: any): _195.LockedResponse;
            toJSON(message: _195.LockedResponse): unknown;
            fromPartial<I_27 extends {
                lock?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                };
            } & {
                lock?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                } & {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_27["lock"]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_27["lock"]["coins"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_27["lock"], keyof _194.PeriodLock>, never>;
            } & Record<Exclude<keyof I_27, "lock">, never>>(object: I_27): _195.LockedResponse;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _195.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.SyntheticLockupsByLockupIDRequest;
            fromJSON(object: any): _195.SyntheticLockupsByLockupIDRequest;
            toJSON(message: _195.SyntheticLockupsByLockupIDRequest): unknown;
            fromPartial<I_28 extends {
                lockId?: any;
            } & {
                lockId?: any;
            } & Record<Exclude<keyof I_28, "lockId">, never>>(object: I_28): _195.SyntheticLockupsByLockupIDRequest;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _195.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.SyntheticLockupsByLockupIDResponse;
            fromJSON(object: any): _195.SyntheticLockupsByLockupIDResponse;
            toJSON(message: _195.SyntheticLockupsByLockupIDResponse): unknown;
            fromPartial<I_29 extends {
                syntheticLocks?: {
                    underlyingLockId?: any;
                    synthDenom?: string;
                    endTime?: Date;
                    duration?: string;
                }[];
            } & {
                syntheticLocks?: {
                    underlyingLockId?: any;
                    synthDenom?: string;
                    endTime?: Date;
                    duration?: string;
                }[] & ({
                    underlyingLockId?: any;
                    synthDenom?: string;
                    endTime?: Date;
                    duration?: string;
                } & {
                    underlyingLockId?: any;
                    synthDenom?: string;
                    endTime?: Date;
                    duration?: string;
                } & Record<Exclude<keyof I_29["syntheticLocks"][number], keyof _194.SyntheticLock>, never>)[] & Record<Exclude<keyof I_29["syntheticLocks"], keyof {
                    underlyingLockId?: any;
                    synthDenom?: string;
                    endTime?: Date;
                    duration?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I_29, "syntheticLocks">, never>>(object: I_29): _195.SyntheticLockupsByLockupIDResponse;
        };
        AccountLockedLongerDurationRequest: {
            encode(message: _195.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.AccountLockedLongerDurationRequest;
            fromJSON(object: any): _195.AccountLockedLongerDurationRequest;
            toJSON(message: _195.AccountLockedLongerDurationRequest): unknown;
            fromPartial<I_30 extends {
                owner?: string;
                duration?: string;
            } & {
                owner?: string;
                duration?: string;
            } & Record<Exclude<keyof I_30, keyof _195.AccountLockedLongerDurationRequest>, never>>(object: I_30): _195.AccountLockedLongerDurationRequest;
        };
        AccountLockedLongerDurationResponse: {
            encode(message: _195.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.AccountLockedLongerDurationResponse;
            fromJSON(object: any): _195.AccountLockedLongerDurationResponse;
            toJSON(message: _195.AccountLockedLongerDurationResponse): unknown;
            fromPartial<I_31 extends {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            } & {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[] & ({
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                } & {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_31["locks"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_31["locks"][number]["coins"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_31["locks"][number], keyof _194.PeriodLock>, never>)[] & Record<Exclude<keyof I_31["locks"], keyof {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_31, "locks">, never>>(object: I_31): _195.AccountLockedLongerDurationResponse;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            encode(message: _195.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromJSON(object: any): _195.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toJSON(message: _195.AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown;
            fromPartial<I_32 extends {
                owner?: string;
                duration?: string;
            } & {
                owner?: string;
                duration?: string;
            } & Record<Exclude<keyof I_32, keyof _195.AccountLockedLongerDurationNotUnlockingOnlyRequest>, never>>(object: I_32): _195.AccountLockedLongerDurationNotUnlockingOnlyRequest;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            encode(message: _195.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromJSON(object: any): _195.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toJSON(message: _195.AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown;
            fromPartial<I_33 extends {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            } & {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[] & ({
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                } & {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_33["locks"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_33["locks"][number]["coins"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_33["locks"][number], keyof _194.PeriodLock>, never>)[] & Record<Exclude<keyof I_33["locks"], keyof {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_33, "locks">, never>>(object: I_33): _195.AccountLockedLongerDurationNotUnlockingOnlyResponse;
        };
        AccountLockedLongerDurationDenomRequest: {
            encode(message: _195.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.AccountLockedLongerDurationDenomRequest;
            fromJSON(object: any): _195.AccountLockedLongerDurationDenomRequest;
            toJSON(message: _195.AccountLockedLongerDurationDenomRequest): unknown;
            fromPartial<I_34 extends {
                owner?: string;
                duration?: string;
                denom?: string;
            } & {
                owner?: string;
                duration?: string;
                denom?: string;
            } & Record<Exclude<keyof I_34, keyof _195.AccountLockedLongerDurationDenomRequest>, never>>(object: I_34): _195.AccountLockedLongerDurationDenomRequest;
        };
        AccountLockedLongerDurationDenomResponse: {
            encode(message: _195.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.AccountLockedLongerDurationDenomResponse;
            fromJSON(object: any): _195.AccountLockedLongerDurationDenomResponse;
            toJSON(message: _195.AccountLockedLongerDurationDenomResponse): unknown;
            fromPartial<I_35 extends {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            } & {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[] & ({
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                } & {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_35["locks"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_35["locks"][number]["coins"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_35["locks"][number], keyof _194.PeriodLock>, never>)[] & Record<Exclude<keyof I_35["locks"], keyof {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_35, "locks">, never>>(object: I_35): _195.AccountLockedLongerDurationDenomResponse;
        };
        lockQueryTypeFromJSON(object: any): _194.LockQueryType;
        lockQueryTypeToJSON(object: _194.LockQueryType): string;
        LockQueryType: typeof _194.LockQueryType;
        PeriodLock: {
            encode(message: _194.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.PeriodLock;
            fromJSON(object: any): _194.PeriodLock;
            toJSON(message: _194.PeriodLock): unknown;
            fromPartial<I_36 extends {
                ID?: any;
                owner?: string;
                duration?: string;
                endTime?: Date;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            } & {
                ID?: any;
                owner?: string;
                duration?: string;
                endTime?: Date;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[] & ({
                    denom?: string;
                    amount?: string;
                } & {
                    denom?: string;
                    amount?: string;
                } & Record<Exclude<keyof I_36["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_36["coins"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I_36, keyof _194.PeriodLock>, never>>(object: I_36): _194.PeriodLock;
        };
        QueryCondition: {
            encode(message: _194.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryCondition;
            fromJSON(object: any): _194.QueryCondition;
            toJSON(message: _194.QueryCondition): unknown;
            fromPartial<I_37 extends {
                lockQueryType?: _194.LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            } & {
                lockQueryType?: _194.LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            } & Record<Exclude<keyof I_37, keyof _194.QueryCondition>, never>>(object: I_37): _194.QueryCondition;
        };
        SyntheticLock: {
            encode(message: _194.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.SyntheticLock;
            fromJSON(object: any): _194.SyntheticLock;
            toJSON(message: _194.SyntheticLock): unknown;
            fromPartial<I_38 extends {
                underlyingLockId?: any;
                synthDenom?: string;
                endTime?: Date;
                duration?: string;
            } & {
                underlyingLockId?: any;
                synthDenom?: string;
                endTime?: Date;
                duration?: string;
            } & Record<Exclude<keyof I_38, keyof _194.SyntheticLock>, never>>(object: I_38): _194.SyntheticLock;
        };
        GenesisState: {
            encode(message: _193.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.GenesisState;
            fromJSON(object: any): _193.GenesisState;
            toJSON(message: _193.GenesisState): unknown;
            fromPartial<I_39 extends {
                lastLockId?: any;
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                syntheticLocks?: {
                    underlyingLockId?: any;
                    synthDenom?: string;
                    endTime?: Date;
                    duration?: string;
                }[];
            } & {
                lastLockId?: any;
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[] & ({
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                } & {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_39["locks"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_39["locks"][number]["coins"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_39["locks"][number], keyof _194.PeriodLock>, never>)[] & Record<Exclude<keyof I_39["locks"], keyof {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[]>, never>;
                syntheticLocks?: {
                    underlyingLockId?: any;
                    synthDenom?: string;
                    endTime?: Date;
                    duration?: string;
                }[] & ({
                    underlyingLockId?: any;
                    synthDenom?: string;
                    endTime?: Date;
                    duration?: string;
                } & {
                    underlyingLockId?: any;
                    synthDenom?: string;
                    endTime?: Date;
                    duration?: string;
                } & Record<Exclude<keyof I_39["syntheticLocks"][number], keyof _194.SyntheticLock>, never>)[] & Record<Exclude<keyof I_39["syntheticLocks"], keyof {
                    underlyingLockId?: any;
                    synthDenom?: string;
                    endTime?: Date;
                    duration?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I_39, keyof _193.GenesisState>, never>>(object: I_39): _193.GenesisState;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _199.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryParamsRequest;
                fromJSON(_: any): _199.QueryParamsRequest;
                toJSON(_: _199.QueryParamsRequest): unknown;
                fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): _199.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _199.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryParamsResponse;
                fromJSON(object: any): _199.QueryParamsResponse;
                toJSON(message: _199.QueryParamsResponse): unknown;
                fromPartial<I_1 extends {
                    params?: {
                        mintDenom?: string;
                        genesisEpochProvisions?: string;
                        epochIdentifier?: string;
                        reductionPeriodInEpochs?: any;
                        reductionFactor?: string;
                        distributionProportions?: {
                            staking?: string;
                            poolIncentives?: string;
                            developerRewards?: string;
                            communityPool?: string;
                        };
                        weightedDeveloperRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[];
                        mintingRewardsDistributionStartEpoch?: any;
                    };
                } & {
                    params?: {
                        mintDenom?: string;
                        genesisEpochProvisions?: string;
                        epochIdentifier?: string;
                        reductionPeriodInEpochs?: any;
                        reductionFactor?: string;
                        distributionProportions?: {
                            staking?: string;
                            poolIncentives?: string;
                            developerRewards?: string;
                            communityPool?: string;
                        };
                        weightedDeveloperRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[];
                        mintingRewardsDistributionStartEpoch?: any;
                    } & {
                        mintDenom?: string;
                        genesisEpochProvisions?: string;
                        epochIdentifier?: string;
                        reductionPeriodInEpochs?: any;
                        reductionFactor?: string;
                        distributionProportions?: {
                            staking?: string;
                            poolIncentives?: string;
                            developerRewards?: string;
                            communityPool?: string;
                        } & {
                            staking?: string;
                            poolIncentives?: string;
                            developerRewards?: string;
                            communityPool?: string;
                        } & Record<Exclude<keyof I_1["params"]["distributionProportions"], keyof _198.DistributionProportions>, never>;
                        weightedDeveloperRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[] & ({
                            address?: string;
                            weight?: string;
                        } & {
                            address?: string;
                            weight?: string;
                        } & Record<Exclude<keyof I_1["params"]["weightedDeveloperRewardsReceivers"][number], keyof _198.WeightedAddress>, never>)[] & Record<Exclude<keyof I_1["params"]["weightedDeveloperRewardsReceivers"], keyof {
                            address?: string;
                            weight?: string;
                        }[]>, never>;
                        mintingRewardsDistributionStartEpoch?: any;
                    } & Record<Exclude<keyof I_1["params"], keyof _198.Params>, never>;
                } & Record<Exclude<keyof I_1, "params">, never>>(object: I_1): _199.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _199.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryEpochProvisionsRequest;
                fromJSON(_: any): _199.QueryEpochProvisionsRequest;
                toJSON(_: _199.QueryEpochProvisionsRequest): unknown;
                fromPartial<I_2 extends {} & {} & Record<Exclude<keyof I_2, never>, never>>(_: I_2): _199.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _199.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryEpochProvisionsResponse;
                fromJSON(object: any): _199.QueryEpochProvisionsResponse;
                toJSON(message: _199.QueryEpochProvisionsResponse): unknown;
                fromPartial<I_3 extends {
                    epochProvisions?: Uint8Array;
                } & {
                    epochProvisions?: Uint8Array;
                } & Record<Exclude<keyof I_3, "epochProvisions">, never>>(object: I_3): _199.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _198.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Minter;
                fromJSON(object: any): _198.Minter;
                toJSON(message: _198.Minter): unknown;
                fromPartial<I_4 extends {
                    epochProvisions?: string;
                } & {
                    epochProvisions?: string;
                } & Record<Exclude<keyof I_4, "epochProvisions">, never>>(object: I_4): _198.Minter;
            };
            WeightedAddress: {
                encode(message: _198.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.WeightedAddress;
                fromJSON(object: any): _198.WeightedAddress;
                toJSON(message: _198.WeightedAddress): unknown;
                fromPartial<I_5 extends {
                    address?: string;
                    weight?: string;
                } & {
                    address?: string;
                    weight?: string;
                } & Record<Exclude<keyof I_5, keyof _198.WeightedAddress>, never>>(object: I_5): _198.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _198.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.DistributionProportions;
                fromJSON(object: any): _198.DistributionProportions;
                toJSON(message: _198.DistributionProportions): unknown;
                fromPartial<I_6 extends {
                    staking?: string;
                    poolIncentives?: string;
                    developerRewards?: string;
                    communityPool?: string;
                } & {
                    staking?: string;
                    poolIncentives?: string;
                    developerRewards?: string;
                    communityPool?: string;
                } & Record<Exclude<keyof I_6, keyof _198.DistributionProportions>, never>>(object: I_6): _198.DistributionProportions;
            };
            Params: {
                encode(message: _198.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Params;
                fromJSON(object: any): _198.Params;
                toJSON(message: _198.Params): unknown;
                fromPartial<I_7 extends {
                    mintDenom?: string;
                    genesisEpochProvisions?: string;
                    epochIdentifier?: string;
                    reductionPeriodInEpochs?: any;
                    reductionFactor?: string;
                    distributionProportions?: {
                        staking?: string;
                        poolIncentives?: string;
                        developerRewards?: string;
                        communityPool?: string;
                    };
                    weightedDeveloperRewardsReceivers?: {
                        address?: string;
                        weight?: string;
                    }[];
                    mintingRewardsDistributionStartEpoch?: any;
                } & {
                    mintDenom?: string;
                    genesisEpochProvisions?: string;
                    epochIdentifier?: string;
                    reductionPeriodInEpochs?: any;
                    reductionFactor?: string;
                    distributionProportions?: {
                        staking?: string;
                        poolIncentives?: string;
                        developerRewards?: string;
                        communityPool?: string;
                    } & {
                        staking?: string;
                        poolIncentives?: string;
                        developerRewards?: string;
                        communityPool?: string;
                    } & Record<Exclude<keyof I_7["distributionProportions"], keyof _198.DistributionProportions>, never>;
                    weightedDeveloperRewardsReceivers?: {
                        address?: string;
                        weight?: string;
                    }[] & ({
                        address?: string;
                        weight?: string;
                    } & {
                        address?: string;
                        weight?: string;
                    } & Record<Exclude<keyof I_7["weightedDeveloperRewardsReceivers"][number], keyof _198.WeightedAddress>, never>)[] & Record<Exclude<keyof I_7["weightedDeveloperRewardsReceivers"], keyof {
                        address?: string;
                        weight?: string;
                    }[]>, never>;
                    mintingRewardsDistributionStartEpoch?: any;
                } & Record<Exclude<keyof I_7, keyof _198.Params>, never>>(object: I_7): _198.Params;
            };
            GenesisState: {
                encode(message: _197.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.GenesisState;
                fromJSON(object: any): _197.GenesisState;
                toJSON(message: _197.GenesisState): unknown;
                fromPartial<I_8 extends {
                    minter?: {
                        epochProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        genesisEpochProvisions?: string;
                        epochIdentifier?: string;
                        reductionPeriodInEpochs?: any;
                        reductionFactor?: string;
                        distributionProportions?: {
                            staking?: string;
                            poolIncentives?: string;
                            developerRewards?: string;
                            communityPool?: string;
                        };
                        weightedDeveloperRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[];
                        mintingRewardsDistributionStartEpoch?: any;
                    };
                    halvenStartedEpoch?: any;
                } & {
                    minter?: {
                        epochProvisions?: string;
                    } & {
                        epochProvisions?: string;
                    } & Record<Exclude<keyof I_8["minter"], "epochProvisions">, never>;
                    params?: {
                        mintDenom?: string;
                        genesisEpochProvisions?: string;
                        epochIdentifier?: string;
                        reductionPeriodInEpochs?: any;
                        reductionFactor?: string;
                        distributionProportions?: {
                            staking?: string;
                            poolIncentives?: string;
                            developerRewards?: string;
                            communityPool?: string;
                        };
                        weightedDeveloperRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[];
                        mintingRewardsDistributionStartEpoch?: any;
                    } & {
                        mintDenom?: string;
                        genesisEpochProvisions?: string;
                        epochIdentifier?: string;
                        reductionPeriodInEpochs?: any;
                        reductionFactor?: string;
                        distributionProportions?: {
                            staking?: string;
                            poolIncentives?: string;
                            developerRewards?: string;
                            communityPool?: string;
                        } & {
                            staking?: string;
                            poolIncentives?: string;
                            developerRewards?: string;
                            communityPool?: string;
                        } & Record<Exclude<keyof I_8["params"]["distributionProportions"], keyof _198.DistributionProportions>, never>;
                        weightedDeveloperRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[] & ({
                            address?: string;
                            weight?: string;
                        } & {
                            address?: string;
                            weight?: string;
                        } & Record<Exclude<keyof I_8["params"]["weightedDeveloperRewardsReceivers"][number], keyof _198.WeightedAddress>, never>)[] & Record<Exclude<keyof I_8["params"]["weightedDeveloperRewardsReceivers"], keyof {
                            address?: string;
                            weight?: string;
                        }[]>, never>;
                        mintingRewardsDistributionStartEpoch?: any;
                    } & Record<Exclude<keyof I_8["params"], keyof _198.Params>, never>;
                    halvenStartedEpoch?: any;
                } & Record<Exclude<keyof I_8, keyof _197.GenesisState>, never>>(object: I_8): _197.GenesisState;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryGaugeIdsRequest: {
                encode(message: _203.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryGaugeIdsRequest;
                fromJSON(object: any): _203.QueryGaugeIdsRequest;
                toJSON(message: _203.QueryGaugeIdsRequest): unknown;
                fromPartial<I extends {
                    poolId?: any;
                } & {
                    poolId?: any;
                } & Record<Exclude<keyof I, "poolId">, never>>(object: I): _203.QueryGaugeIdsRequest;
            };
            QueryGaugeIdsResponse: {
                encode(message: _203.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryGaugeIdsResponse;
                fromJSON(object: any): _203.QueryGaugeIdsResponse;
                toJSON(message: _203.QueryGaugeIdsResponse): unknown;
                fromPartial<I_1 extends {
                    gaugeIdsWithDuration?: {
                        gaugeId?: any;
                        duration?: string;
                    }[];
                } & {
                    gaugeIdsWithDuration?: {
                        gaugeId?: any;
                        duration?: string;
                    }[] & ({
                        gaugeId?: any;
                        duration?: string;
                    } & {
                        gaugeId?: any;
                        duration?: string;
                    } & Record<Exclude<keyof I_1["gaugeIdsWithDuration"][number], keyof _203.QueryGaugeIdsResponse_GaugeIdWithDuration>, never>)[] & Record<Exclude<keyof I_1["gaugeIdsWithDuration"], keyof {
                        gaugeId?: any;
                        duration?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_1, "gaugeIdsWithDuration">, never>>(object: I_1): _203.QueryGaugeIdsResponse;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                encode(message: _203.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromJSON(object: any): _203.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toJSON(message: _203.QueryGaugeIdsResponse_GaugeIdWithDuration): unknown;
                fromPartial<I_2 extends {
                    gaugeId?: any;
                    duration?: string;
                } & {
                    gaugeId?: any;
                    duration?: string;
                } & Record<Exclude<keyof I_2, keyof _203.QueryGaugeIdsResponse_GaugeIdWithDuration>, never>>(object: I_2): _203.QueryGaugeIdsResponse_GaugeIdWithDuration;
            };
            QueryDistrInfoRequest: {
                encode(_: _203.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryDistrInfoRequest;
                fromJSON(_: any): _203.QueryDistrInfoRequest;
                toJSON(_: _203.QueryDistrInfoRequest): unknown;
                fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _203.QueryDistrInfoRequest;
            };
            QueryDistrInfoResponse: {
                encode(message: _203.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryDistrInfoResponse;
                fromJSON(object: any): _203.QueryDistrInfoResponse;
                toJSON(message: _203.QueryDistrInfoResponse): unknown;
                fromPartial<I_4 extends {
                    distrInfo?: {
                        totalWeight?: string;
                        records?: {
                            gaugeId?: any;
                            weight?: string;
                        }[];
                    };
                } & {
                    distrInfo?: {
                        totalWeight?: string;
                        records?: {
                            gaugeId?: any;
                            weight?: string;
                        }[];
                    } & {
                        totalWeight?: string;
                        records?: {
                            gaugeId?: any;
                            weight?: string;
                        }[] & ({
                            gaugeId?: any;
                            weight?: string;
                        } & {
                            gaugeId?: any;
                            weight?: string;
                        } & Record<Exclude<keyof I_4["distrInfo"]["records"][number], keyof _202.DistrRecord>, never>)[] & Record<Exclude<keyof I_4["distrInfo"]["records"], keyof {
                            gaugeId?: any;
                            weight?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_4["distrInfo"], keyof _202.DistrInfo>, never>;
                } & Record<Exclude<keyof I_4, "distrInfo">, never>>(object: I_4): _203.QueryDistrInfoResponse;
            };
            QueryParamsRequest: {
                encode(_: _203.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryParamsRequest;
                fromJSON(_: any): _203.QueryParamsRequest;
                toJSON(_: _203.QueryParamsRequest): unknown;
                fromPartial<I_5 extends {} & {} & Record<Exclude<keyof I_5, never>, never>>(_: I_5): _203.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _203.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryParamsResponse;
                fromJSON(object: any): _203.QueryParamsResponse;
                toJSON(message: _203.QueryParamsResponse): unknown;
                fromPartial<I_6 extends {
                    params?: {
                        mintedDenom?: string;
                    };
                } & {
                    params?: {
                        mintedDenom?: string;
                    } & {
                        mintedDenom?: string;
                    } & Record<Exclude<keyof I_6["params"], "mintedDenom">, never>;
                } & Record<Exclude<keyof I_6, "params">, never>>(object: I_6): _203.QueryParamsResponse;
            };
            QueryLockableDurationsRequest: {
                encode(_: _203.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryLockableDurationsRequest;
                fromJSON(_: any): _203.QueryLockableDurationsRequest;
                toJSON(_: _203.QueryLockableDurationsRequest): unknown;
                fromPartial<I_7 extends {} & {} & Record<Exclude<keyof I_7, never>, never>>(_: I_7): _203.QueryLockableDurationsRequest;
            };
            QueryLockableDurationsResponse: {
                encode(message: _203.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryLockableDurationsResponse;
                fromJSON(object: any): _203.QueryLockableDurationsResponse;
                toJSON(message: _203.QueryLockableDurationsResponse): unknown;
                fromPartial<I_8 extends {
                    lockableDurations?: string[];
                } & {
                    lockableDurations?: string[] & string[] & Record<Exclude<keyof I_8["lockableDurations"], keyof string[]>, never>;
                } & Record<Exclude<keyof I_8, "lockableDurations">, never>>(object: I_8): _203.QueryLockableDurationsResponse;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _203.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryIncentivizedPoolsRequest;
                fromJSON(_: any): _203.QueryIncentivizedPoolsRequest;
                toJSON(_: _203.QueryIncentivizedPoolsRequest): unknown;
                fromPartial<I_9 extends {} & {} & Record<Exclude<keyof I_9, never>, never>>(_: I_9): _203.QueryIncentivizedPoolsRequest;
            };
            IncentivizedPool: {
                encode(message: _203.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.IncentivizedPool;
                fromJSON(object: any): _203.IncentivizedPool;
                toJSON(message: _203.IncentivizedPool): unknown;
                fromPartial<I_10 extends {
                    poolId?: any;
                    lockableDuration?: string;
                    gaugeId?: any;
                } & {
                    poolId?: any;
                    lockableDuration?: string;
                    gaugeId?: any;
                } & Record<Exclude<keyof I_10, keyof _203.IncentivizedPool>, never>>(object: I_10): _203.IncentivizedPool;
            };
            QueryIncentivizedPoolsResponse: {
                encode(message: _203.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryIncentivizedPoolsResponse;
                fromJSON(object: any): _203.QueryIncentivizedPoolsResponse;
                toJSON(message: _203.QueryIncentivizedPoolsResponse): unknown;
                fromPartial<I_11 extends {
                    incentivizedPools?: {
                        poolId?: any;
                        lockableDuration?: string;
                        gaugeId?: any;
                    }[];
                } & {
                    incentivizedPools?: {
                        poolId?: any;
                        lockableDuration?: string;
                        gaugeId?: any;
                    }[] & ({
                        poolId?: any;
                        lockableDuration?: string;
                        gaugeId?: any;
                    } & {
                        poolId?: any;
                        lockableDuration?: string;
                        gaugeId?: any;
                    } & Record<Exclude<keyof I_11["incentivizedPools"][number], keyof _203.IncentivizedPool>, never>)[] & Record<Exclude<keyof I_11["incentivizedPools"], keyof {
                        poolId?: any;
                        lockableDuration?: string;
                        gaugeId?: any;
                    }[]>, never>;
                } & Record<Exclude<keyof I_11, "incentivizedPools">, never>>(object: I_11): _203.QueryIncentivizedPoolsResponse;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _203.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryExternalIncentiveGaugesRequest;
                fromJSON(_: any): _203.QueryExternalIncentiveGaugesRequest;
                toJSON(_: _203.QueryExternalIncentiveGaugesRequest): unknown;
                fromPartial<I_12 extends {} & {} & Record<Exclude<keyof I_12, never>, never>>(_: I_12): _203.QueryExternalIncentiveGaugesRequest;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _203.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryExternalIncentiveGaugesResponse;
                fromJSON(object: any): _203.QueryExternalIncentiveGaugesResponse;
                toJSON(message: _203.QueryExternalIncentiveGaugesResponse): unknown;
                fromPartial<I_13 extends {
                    data?: {
                        id?: any;
                        isPerpetual?: boolean;
                        distributeTo?: {
                            lockQueryType?: _194.LockQueryType;
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
                } & {
                    data?: {
                        id?: any;
                        isPerpetual?: boolean;
                        distributeTo?: {
                            lockQueryType?: _194.LockQueryType;
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
                            lockQueryType?: _194.LockQueryType;
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
                            lockQueryType?: _194.LockQueryType;
                            denom?: string;
                            duration?: string;
                            timestamp?: Date;
                        } & {
                            lockQueryType?: _194.LockQueryType;
                            denom?: string;
                            duration?: string;
                            timestamp?: Date;
                        } & Record<Exclude<keyof I_13["data"][number]["distributeTo"], keyof _194.QueryCondition>, never>;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[] & ({
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I_13["data"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_13["data"][number]["coins"], keyof {
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
                        } & Record<Exclude<keyof I_13["data"][number]["distributedCoins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_13["data"][number]["distributedCoins"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_13["data"][number], keyof _188.Gauge>, never>)[] & Record<Exclude<keyof I_13["data"], keyof {
                        id?: any;
                        isPerpetual?: boolean;
                        distributeTo?: {
                            lockQueryType?: _194.LockQueryType;
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
                } & Record<Exclude<keyof I_13, "data">, never>>(object: I_13): _203.QueryExternalIncentiveGaugesResponse;
            };
            Params: {
                encode(message: _202.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.Params;
                fromJSON(object: any): _202.Params;
                toJSON(message: _202.Params): unknown;
                fromPartial<I_14 extends {
                    mintedDenom?: string;
                } & {
                    mintedDenom?: string;
                } & Record<Exclude<keyof I_14, "mintedDenom">, never>>(object: I_14): _202.Params;
            };
            LockableDurationsInfo: {
                encode(message: _202.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.LockableDurationsInfo;
                fromJSON(object: any): _202.LockableDurationsInfo;
                toJSON(message: _202.LockableDurationsInfo): unknown;
                fromPartial<I_15 extends {
                    lockableDurations?: string[];
                } & {
                    lockableDurations?: string[] & string[] & Record<Exclude<keyof I_15["lockableDurations"], keyof string[]>, never>;
                } & Record<Exclude<keyof I_15, "lockableDurations">, never>>(object: I_15): _202.LockableDurationsInfo;
            };
            DistrInfo: {
                encode(message: _202.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.DistrInfo;
                fromJSON(object: any): _202.DistrInfo;
                toJSON(message: _202.DistrInfo): unknown;
                fromPartial<I_16 extends {
                    totalWeight?: string;
                    records?: {
                        gaugeId?: any;
                        weight?: string;
                    }[];
                } & {
                    totalWeight?: string;
                    records?: {
                        gaugeId?: any;
                        weight?: string;
                    }[] & ({
                        gaugeId?: any;
                        weight?: string;
                    } & {
                        gaugeId?: any;
                        weight?: string;
                    } & Record<Exclude<keyof I_16["records"][number], keyof _202.DistrRecord>, never>)[] & Record<Exclude<keyof I_16["records"], keyof {
                        gaugeId?: any;
                        weight?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_16, keyof _202.DistrInfo>, never>>(object: I_16): _202.DistrInfo;
            };
            DistrRecord: {
                encode(message: _202.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.DistrRecord;
                fromJSON(object: any): _202.DistrRecord;
                toJSON(message: _202.DistrRecord): unknown;
                fromPartial<I_17 extends {
                    gaugeId?: any;
                    weight?: string;
                } & {
                    gaugeId?: any;
                    weight?: string;
                } & Record<Exclude<keyof I_17, keyof _202.DistrRecord>, never>>(object: I_17): _202.DistrRecord;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _201.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.ReplacePoolIncentivesProposal;
                fromJSON(object: any): _201.ReplacePoolIncentivesProposal;
                toJSON(message: _201.ReplacePoolIncentivesProposal): unknown;
                fromPartial<I_18 extends {
                    title?: string;
                    description?: string;
                    records?: {
                        gaugeId?: any;
                        weight?: string;
                    }[];
                } & {
                    title?: string;
                    description?: string;
                    records?: {
                        gaugeId?: any;
                        weight?: string;
                    }[] & ({
                        gaugeId?: any;
                        weight?: string;
                    } & {
                        gaugeId?: any;
                        weight?: string;
                    } & Record<Exclude<keyof I_18["records"][number], keyof _202.DistrRecord>, never>)[] & Record<Exclude<keyof I_18["records"], keyof {
                        gaugeId?: any;
                        weight?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_18, keyof _201.ReplacePoolIncentivesProposal>, never>>(object: I_18): _201.ReplacePoolIncentivesProposal;
            };
            UpdatePoolIncentivesProposal: {
                encode(message: _201.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.UpdatePoolIncentivesProposal;
                fromJSON(object: any): _201.UpdatePoolIncentivesProposal;
                toJSON(message: _201.UpdatePoolIncentivesProposal): unknown;
                fromPartial<I_19 extends {
                    title?: string;
                    description?: string;
                    records?: {
                        gaugeId?: any;
                        weight?: string;
                    }[];
                } & {
                    title?: string;
                    description?: string;
                    records?: {
                        gaugeId?: any;
                        weight?: string;
                    }[] & ({
                        gaugeId?: any;
                        weight?: string;
                    } & {
                        gaugeId?: any;
                        weight?: string;
                    } & Record<Exclude<keyof I_19["records"][number], keyof _202.DistrRecord>, never>)[] & Record<Exclude<keyof I_19["records"], keyof {
                        gaugeId?: any;
                        weight?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_19, keyof _201.UpdatePoolIncentivesProposal>, never>>(object: I_19): _201.UpdatePoolIncentivesProposal;
            };
            GenesisState: {
                encode(message: _200.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.GenesisState;
                fromJSON(object: any): _200.GenesisState;
                toJSON(message: _200.GenesisState): unknown;
                fromPartial<I_20 extends {
                    params?: {
                        mintedDenom?: string;
                    };
                    lockableDurations?: string[];
                    distrInfo?: {
                        totalWeight?: string;
                        records?: {
                            gaugeId?: any;
                            weight?: string;
                        }[];
                    };
                } & {
                    params?: {
                        mintedDenom?: string;
                    } & {
                        mintedDenom?: string;
                    } & Record<Exclude<keyof I_20["params"], "mintedDenom">, never>;
                    lockableDurations?: string[] & string[] & Record<Exclude<keyof I_20["lockableDurations"], keyof string[]>, never>;
                    distrInfo?: {
                        totalWeight?: string;
                        records?: {
                            gaugeId?: any;
                            weight?: string;
                        }[];
                    } & {
                        totalWeight?: string;
                        records?: {
                            gaugeId?: any;
                            weight?: string;
                        }[] & ({
                            gaugeId?: any;
                            weight?: string;
                        } & {
                            gaugeId?: any;
                            weight?: string;
                        } & Record<Exclude<keyof I_20["distrInfo"]["records"][number], keyof _202.DistrRecord>, never>)[] & Record<Exclude<keyof I_20["distrInfo"]["records"], keyof {
                            gaugeId?: any;
                            weight?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_20["distrInfo"], keyof _202.DistrInfo>, never>;
                } & Record<Exclude<keyof I_20, keyof _200.GenesisState>, never>>(object: I_20): _200.GenesisState;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                encode(message: _204.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.Node;
                fromJSON(object: any): _204.Node;
                toJSON(message: _204.Node): unknown;
                fromPartial<I extends {
                    children?: {
                        index?: Uint8Array;
                        accumulation?: string;
                    }[];
                } & {
                    children?: {
                        index?: Uint8Array;
                        accumulation?: string;
                    }[] & ({
                        index?: Uint8Array;
                        accumulation?: string;
                    } & {
                        index?: Uint8Array;
                        accumulation?: string;
                    } & Record<Exclude<keyof I["children"][number], keyof _204.Child>, never>)[] & Record<Exclude<keyof I["children"], keyof {
                        index?: Uint8Array;
                        accumulation?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I, "children">, never>>(object: I): _204.Node;
            };
            Child: {
                encode(message: _204.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.Child;
                fromJSON(object: any): _204.Child;
                toJSON(message: _204.Child): unknown;
                fromPartial<I_1 extends {
                    index?: Uint8Array;
                    accumulation?: string;
                } & {
                    index?: Uint8Array;
                    accumulation?: string;
                } & Record<Exclude<keyof I_1, keyof _204.Child>, never>>(object: I_1): _204.Child;
            };
            Leaf: {
                encode(message: _204.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.Leaf;
                fromJSON(object: any): _204.Leaf;
                toJSON(message: _204.Leaf): unknown;
                fromPartial<I_2 extends {
                    leaf?: {
                        index?: Uint8Array;
                        accumulation?: string;
                    };
                } & {
                    leaf?: {
                        index?: Uint8Array;
                        accumulation?: string;
                    } & {
                        index?: Uint8Array;
                        accumulation?: string;
                    } & Record<Exclude<keyof I_2["leaf"], keyof _204.Child>, never>;
                } & Record<Exclude<keyof I_2, "leaf">, never>>(object: I_2): _204.Leaf;
            };
        };
    }
    const superfluid: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _209.MsgSuperfluidDelegate): {
                    type_url: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _209.MsgSuperfluidUndelegate): {
                    type_url: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _209.MsgSuperfluidUnbondLock): {
                    type_url: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _209.MsgLockAndSuperfluidDelegate): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _209.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _209.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _209.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _209.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _209.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _209.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _209.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _209.MsgLockAndSuperfluidDelegate;
                };
            };
            toJSON: {
                superfluidDelegate(value: _209.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUndelegate(value: _209.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUnbondLock(value: _209.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: unknown;
                };
                lockAndSuperfluidDelegate(value: _209.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                superfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _209.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: any): {
                    typeUrl: string;
                    value: _209.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: any): {
                    typeUrl: string;
                    value: _209.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _209.MsgLockAndSuperfluidDelegate;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _209.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _209.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _209.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _209.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _209.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _209.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _209.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _209.MsgLockAndSuperfluidDelegate;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId, valAddr }: _209.MsgSuperfluidDelegate) => {
                    sender: string;
                    lockId: string;
                    valAddr: string;
                };
                fromAmino: ({ sender, lockId, valAddr }: {
                    sender: string;
                    lockId: string;
                    valAddr: string;
                }) => _209.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _209.MsgSuperfluidUndelegate) => {
                    sender: string;
                    lockId: string;
                };
                fromAmino: ({ sender, lockId }: {
                    sender: string;
                    lockId: string;
                }) => _209.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _209.MsgSuperfluidUnbondLock) => {
                    sender: string;
                    lockId: string;
                };
                fromAmino: ({ sender, lockId }: {
                    sender: string;
                    lockId: string;
                }) => _209.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, coins, valAddr }: _209.MsgLockAndSuperfluidDelegate) => {
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
                }) => _209.MsgLockAndSuperfluidDelegate;
            };
        };
        MsgSuperfluidDelegate: {
            encode(message: _209.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.MsgSuperfluidDelegate;
            fromJSON(object: any): _209.MsgSuperfluidDelegate;
            toJSON(message: _209.MsgSuperfluidDelegate): unknown;
            fromPartial<I extends {
                sender?: string;
                lockId?: any;
                valAddr?: string;
            } & {
                sender?: string;
                lockId?: any;
                valAddr?: string;
            } & Record<Exclude<keyof I, keyof _209.MsgSuperfluidDelegate>, never>>(object: I): _209.MsgSuperfluidDelegate;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _209.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.MsgSuperfluidDelegateResponse;
            fromJSON(_: any): _209.MsgSuperfluidDelegateResponse;
            toJSON(_: _209.MsgSuperfluidDelegateResponse): unknown;
            fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _209.MsgSuperfluidDelegateResponse;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _209.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.MsgSuperfluidUndelegate;
            fromJSON(object: any): _209.MsgSuperfluidUndelegate;
            toJSON(message: _209.MsgSuperfluidUndelegate): unknown;
            fromPartial<I_2 extends {
                sender?: string;
                lockId?: any;
            } & {
                sender?: string;
                lockId?: any;
            } & Record<Exclude<keyof I_2, keyof _209.MsgSuperfluidUndelegate>, never>>(object: I_2): _209.MsgSuperfluidUndelegate;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _209.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.MsgSuperfluidUndelegateResponse;
            fromJSON(_: any): _209.MsgSuperfluidUndelegateResponse;
            toJSON(_: _209.MsgSuperfluidUndelegateResponse): unknown;
            fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _209.MsgSuperfluidUndelegateResponse;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _209.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.MsgSuperfluidUnbondLock;
            fromJSON(object: any): _209.MsgSuperfluidUnbondLock;
            toJSON(message: _209.MsgSuperfluidUnbondLock): unknown;
            fromPartial<I_4 extends {
                sender?: string;
                lockId?: any;
            } & {
                sender?: string;
                lockId?: any;
            } & Record<Exclude<keyof I_4, keyof _209.MsgSuperfluidUnbondLock>, never>>(object: I_4): _209.MsgSuperfluidUnbondLock;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _209.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.MsgSuperfluidUnbondLockResponse;
            fromJSON(_: any): _209.MsgSuperfluidUnbondLockResponse;
            toJSON(_: _209.MsgSuperfluidUnbondLockResponse): unknown;
            fromPartial<I_5 extends {} & {} & Record<Exclude<keyof I_5, never>, never>>(_: I_5): _209.MsgSuperfluidUnbondLockResponse;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _209.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.MsgLockAndSuperfluidDelegate;
            fromJSON(object: any): _209.MsgLockAndSuperfluidDelegate;
            toJSON(message: _209.MsgLockAndSuperfluidDelegate): unknown;
            fromPartial<I_6 extends {
                sender?: string;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
                valAddr?: string;
            } & {
                sender?: string;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[] & ({
                    denom?: string;
                    amount?: string;
                } & {
                    denom?: string;
                    amount?: string;
                } & Record<Exclude<keyof I_6["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_6["coins"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
                valAddr?: string;
            } & Record<Exclude<keyof I_6, keyof _209.MsgLockAndSuperfluidDelegate>, never>>(object: I_6): _209.MsgLockAndSuperfluidDelegate;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _209.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.MsgLockAndSuperfluidDelegateResponse;
            fromJSON(object: any): _209.MsgLockAndSuperfluidDelegateResponse;
            toJSON(message: _209.MsgLockAndSuperfluidDelegateResponse): unknown;
            fromPartial<I_7 extends {
                ID?: any;
            } & {
                ID?: any;
            } & Record<Exclude<keyof I_7, "ID">, never>>(object: I_7): _209.MsgLockAndSuperfluidDelegateResponse;
        };
        superfluidAssetTypeFromJSON(object: any): _208.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _208.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _208.SuperfluidAssetType;
        SuperfluidAsset: {
            encode(message: _208.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.SuperfluidAsset;
            fromJSON(object: any): _208.SuperfluidAsset;
            toJSON(message: _208.SuperfluidAsset): unknown;
            fromPartial<I_8 extends {
                denom?: string;
                assetType?: _208.SuperfluidAssetType;
            } & {
                denom?: string;
                assetType?: _208.SuperfluidAssetType;
            } & Record<Exclude<keyof I_8, keyof _208.SuperfluidAsset>, never>>(object: I_8): _208.SuperfluidAsset;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _208.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.SuperfluidIntermediaryAccount;
            fromJSON(object: any): _208.SuperfluidIntermediaryAccount;
            toJSON(message: _208.SuperfluidIntermediaryAccount): unknown;
            fromPartial<I_9 extends {
                denom?: string;
                valAddr?: string;
                gaugeId?: any;
            } & {
                denom?: string;
                valAddr?: string;
                gaugeId?: any;
            } & Record<Exclude<keyof I_9, keyof _208.SuperfluidIntermediaryAccount>, never>>(object: I_9): _208.SuperfluidIntermediaryAccount;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _208.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.OsmoEquivalentMultiplierRecord;
            fromJSON(object: any): _208.OsmoEquivalentMultiplierRecord;
            toJSON(message: _208.OsmoEquivalentMultiplierRecord): unknown;
            fromPartial<I_10 extends {
                epochNumber?: any;
                denom?: string;
                multiplier?: string;
            } & {
                epochNumber?: any;
                denom?: string;
                multiplier?: string;
            } & Record<Exclude<keyof I_10, keyof _208.OsmoEquivalentMultiplierRecord>, never>>(object: I_10): _208.OsmoEquivalentMultiplierRecord;
        };
        SuperfluidDelegationRecord: {
            encode(message: _208.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.SuperfluidDelegationRecord;
            fromJSON(object: any): _208.SuperfluidDelegationRecord;
            toJSON(message: _208.SuperfluidDelegationRecord): unknown;
            fromPartial<I_11 extends {
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
                } & Record<Exclude<keyof I_11["delegationAmount"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
            } & Record<Exclude<keyof I_11, keyof _208.SuperfluidDelegationRecord>, never>>(object: I_11): _208.SuperfluidDelegationRecord;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _208.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.LockIdIntermediaryAccountConnection;
            fromJSON(object: any): _208.LockIdIntermediaryAccountConnection;
            toJSON(message: _208.LockIdIntermediaryAccountConnection): unknown;
            fromPartial<I_12 extends {
                lockId?: any;
                intermediaryAccount?: string;
            } & {
                lockId?: any;
                intermediaryAccount?: string;
            } & Record<Exclude<keyof I_12, keyof _208.LockIdIntermediaryAccountConnection>, never>>(object: I_12): _208.LockIdIntermediaryAccountConnection;
        };
        QueryParamsRequest: {
            encode(_: _207.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryParamsRequest;
            fromJSON(_: any): _207.QueryParamsRequest;
            toJSON(_: _207.QueryParamsRequest): unknown;
            fromPartial<I_13 extends {} & {} & Record<Exclude<keyof I_13, never>, never>>(_: I_13): _207.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _207.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryParamsResponse;
            fromJSON(object: any): _207.QueryParamsResponse;
            toJSON(message: _207.QueryParamsResponse): unknown;
            fromPartial<I_14 extends {
                params?: {
                    minimumRiskFactor?: string;
                };
            } & {
                params?: {
                    minimumRiskFactor?: string;
                } & {
                    minimumRiskFactor?: string;
                } & Record<Exclude<keyof I_14["params"], "minimumRiskFactor">, never>;
            } & Record<Exclude<keyof I_14, "params">, never>>(object: I_14): _207.QueryParamsResponse;
        };
        AssetTypeRequest: {
            encode(message: _207.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.AssetTypeRequest;
            fromJSON(object: any): _207.AssetTypeRequest;
            toJSON(message: _207.AssetTypeRequest): unknown;
            fromPartial<I_15 extends {
                denom?: string;
            } & {
                denom?: string;
            } & Record<Exclude<keyof I_15, "denom">, never>>(object: I_15): _207.AssetTypeRequest;
        };
        AssetTypeResponse: {
            encode(message: _207.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.AssetTypeResponse;
            fromJSON(object: any): _207.AssetTypeResponse;
            toJSON(message: _207.AssetTypeResponse): unknown;
            fromPartial<I_16 extends {
                assetType?: _208.SuperfluidAssetType;
            } & {
                assetType?: _208.SuperfluidAssetType;
            } & Record<Exclude<keyof I_16, "assetType">, never>>(object: I_16): _207.AssetTypeResponse;
        };
        AllAssetsRequest: {
            encode(_: _207.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.AllAssetsRequest;
            fromJSON(_: any): _207.AllAssetsRequest;
            toJSON(_: _207.AllAssetsRequest): unknown;
            fromPartial<I_17 extends {} & {} & Record<Exclude<keyof I_17, never>, never>>(_: I_17): _207.AllAssetsRequest;
        };
        AllAssetsResponse: {
            encode(message: _207.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.AllAssetsResponse;
            fromJSON(object: any): _207.AllAssetsResponse;
            toJSON(message: _207.AllAssetsResponse): unknown;
            fromPartial<I_18 extends {
                assets?: {
                    denom?: string;
                    assetType?: _208.SuperfluidAssetType;
                }[];
            } & {
                assets?: {
                    denom?: string;
                    assetType?: _208.SuperfluidAssetType;
                }[] & ({
                    denom?: string;
                    assetType?: _208.SuperfluidAssetType;
                } & {
                    denom?: string;
                    assetType?: _208.SuperfluidAssetType;
                } & Record<Exclude<keyof I_18["assets"][number], keyof _208.SuperfluidAsset>, never>)[] & Record<Exclude<keyof I_18["assets"], keyof {
                    denom?: string;
                    assetType?: _208.SuperfluidAssetType;
                }[]>, never>;
            } & Record<Exclude<keyof I_18, "assets">, never>>(object: I_18): _207.AllAssetsResponse;
        };
        AssetMultiplierRequest: {
            encode(message: _207.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.AssetMultiplierRequest;
            fromJSON(object: any): _207.AssetMultiplierRequest;
            toJSON(message: _207.AssetMultiplierRequest): unknown;
            fromPartial<I_19 extends {
                denom?: string;
            } & {
                denom?: string;
            } & Record<Exclude<keyof I_19, "denom">, never>>(object: I_19): _207.AssetMultiplierRequest;
        };
        AssetMultiplierResponse: {
            encode(message: _207.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.AssetMultiplierResponse;
            fromJSON(object: any): _207.AssetMultiplierResponse;
            toJSON(message: _207.AssetMultiplierResponse): unknown;
            fromPartial<I_20 extends {
                osmoEquivalentMultiplier?: {
                    epochNumber?: any;
                    denom?: string;
                    multiplier?: string;
                };
            } & {
                osmoEquivalentMultiplier?: {
                    epochNumber?: any;
                    denom?: string;
                    multiplier?: string;
                } & {
                    epochNumber?: any;
                    denom?: string;
                    multiplier?: string;
                } & Record<Exclude<keyof I_20["osmoEquivalentMultiplier"], keyof _208.OsmoEquivalentMultiplierRecord>, never>;
            } & Record<Exclude<keyof I_20, "osmoEquivalentMultiplier">, never>>(object: I_20): _207.AssetMultiplierResponse;
        };
        SuperfluidIntermediaryAccountInfo: {
            encode(message: _207.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.SuperfluidIntermediaryAccountInfo;
            fromJSON(object: any): _207.SuperfluidIntermediaryAccountInfo;
            toJSON(message: _207.SuperfluidIntermediaryAccountInfo): unknown;
            fromPartial<I_21 extends {
                denom?: string;
                valAddr?: string;
                gaugeId?: any;
                address?: string;
            } & {
                denom?: string;
                valAddr?: string;
                gaugeId?: any;
                address?: string;
            } & Record<Exclude<keyof I_21, keyof _207.SuperfluidIntermediaryAccountInfo>, never>>(object: I_21): _207.SuperfluidIntermediaryAccountInfo;
        };
        AllIntermediaryAccountsRequest: {
            encode(message: _207.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.AllIntermediaryAccountsRequest;
            fromJSON(object: any): _207.AllIntermediaryAccountsRequest;
            toJSON(message: _207.AllIntermediaryAccountsRequest): unknown;
            fromPartial<I_22 extends {
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
                } & Record<Exclude<keyof I_22["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
            } & Record<Exclude<keyof I_22, "pagination">, never>>(object: I_22): _207.AllIntermediaryAccountsRequest;
        };
        AllIntermediaryAccountsResponse: {
            encode(message: _207.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.AllIntermediaryAccountsResponse;
            fromJSON(object: any): _207.AllIntermediaryAccountsResponse;
            toJSON(message: _207.AllIntermediaryAccountsResponse): unknown;
            fromPartial<I_23 extends {
                accounts?: {
                    denom?: string;
                    valAddr?: string;
                    gaugeId?: any;
                    address?: string;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            } & {
                accounts?: {
                    denom?: string;
                    valAddr?: string;
                    gaugeId?: any;
                    address?: string;
                }[] & ({
                    denom?: string;
                    valAddr?: string;
                    gaugeId?: any;
                    address?: string;
                } & {
                    denom?: string;
                    valAddr?: string;
                    gaugeId?: any;
                    address?: string;
                } & Record<Exclude<keyof I_23["accounts"][number], keyof _207.SuperfluidIntermediaryAccountInfo>, never>)[] & Record<Exclude<keyof I_23["accounts"], keyof {
                    denom?: string;
                    valAddr?: string;
                    gaugeId?: any;
                    address?: string;
                }[]>, never>;
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                } & {
                    nextKey?: Uint8Array;
                    total?: any;
                } & Record<Exclude<keyof I_23["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
            } & Record<Exclude<keyof I_23, keyof _207.AllIntermediaryAccountsResponse>, never>>(object: I_23): _207.AllIntermediaryAccountsResponse;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _207.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.ConnectedIntermediaryAccountRequest;
            fromJSON(object: any): _207.ConnectedIntermediaryAccountRequest;
            toJSON(message: _207.ConnectedIntermediaryAccountRequest): unknown;
            fromPartial<I_24 extends {
                lockId?: any;
            } & {
                lockId?: any;
            } & Record<Exclude<keyof I_24, "lockId">, never>>(object: I_24): _207.ConnectedIntermediaryAccountRequest;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _207.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.ConnectedIntermediaryAccountResponse;
            fromJSON(object: any): _207.ConnectedIntermediaryAccountResponse;
            toJSON(message: _207.ConnectedIntermediaryAccountResponse): unknown;
            fromPartial<I_25 extends {
                account?: {
                    denom?: string;
                    valAddr?: string;
                    gaugeId?: any;
                    address?: string;
                };
            } & {
                account?: {
                    denom?: string;
                    valAddr?: string;
                    gaugeId?: any;
                    address?: string;
                } & {
                    denom?: string;
                    valAddr?: string;
                    gaugeId?: any;
                    address?: string;
                } & Record<Exclude<keyof I_25["account"], keyof _207.SuperfluidIntermediaryAccountInfo>, never>;
            } & Record<Exclude<keyof I_25, "account">, never>>(object: I_25): _207.ConnectedIntermediaryAccountResponse;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _207.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.TotalSuperfluidDelegationsRequest;
            fromJSON(_: any): _207.TotalSuperfluidDelegationsRequest;
            toJSON(_: _207.TotalSuperfluidDelegationsRequest): unknown;
            fromPartial<I_26 extends {} & {} & Record<Exclude<keyof I_26, never>, never>>(_: I_26): _207.TotalSuperfluidDelegationsRequest;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _207.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.TotalSuperfluidDelegationsResponse;
            fromJSON(object: any): _207.TotalSuperfluidDelegationsResponse;
            toJSON(message: _207.TotalSuperfluidDelegationsResponse): unknown;
            fromPartial<I_27 extends {
                totalDelegations?: string;
            } & {
                totalDelegations?: string;
            } & Record<Exclude<keyof I_27, "totalDelegations">, never>>(object: I_27): _207.TotalSuperfluidDelegationsResponse;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _207.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.SuperfluidDelegationAmountRequest;
            fromJSON(object: any): _207.SuperfluidDelegationAmountRequest;
            toJSON(message: _207.SuperfluidDelegationAmountRequest): unknown;
            fromPartial<I_28 extends {
                delegatorAddress?: string;
                validatorAddress?: string;
                denom?: string;
            } & {
                delegatorAddress?: string;
                validatorAddress?: string;
                denom?: string;
            } & Record<Exclude<keyof I_28, keyof _207.SuperfluidDelegationAmountRequest>, never>>(object: I_28): _207.SuperfluidDelegationAmountRequest;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _207.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.SuperfluidDelegationAmountResponse;
            fromJSON(object: any): _207.SuperfluidDelegationAmountResponse;
            toJSON(message: _207.SuperfluidDelegationAmountResponse): unknown;
            fromPartial<I_29 extends {
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
                } & Record<Exclude<keyof I_29["amount"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_29["amount"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I_29, "amount">, never>>(object: I_29): _207.SuperfluidDelegationAmountResponse;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _207.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.SuperfluidDelegationsByDelegatorRequest;
            fromJSON(object: any): _207.SuperfluidDelegationsByDelegatorRequest;
            toJSON(message: _207.SuperfluidDelegationsByDelegatorRequest): unknown;
            fromPartial<I_30 extends {
                delegatorAddress?: string;
            } & {
                delegatorAddress?: string;
            } & Record<Exclude<keyof I_30, "delegatorAddress">, never>>(object: I_30): _207.SuperfluidDelegationsByDelegatorRequest;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _207.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.SuperfluidDelegationsByDelegatorResponse;
            fromJSON(object: any): _207.SuperfluidDelegationsByDelegatorResponse;
            toJSON(message: _207.SuperfluidDelegationsByDelegatorResponse): unknown;
            fromPartial<I_31 extends {
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
                    } & Record<Exclude<keyof I_31["superfluidDelegationRecords"][number]["delegationAmount"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                } & Record<Exclude<keyof I_31["superfluidDelegationRecords"][number], keyof _208.SuperfluidDelegationRecord>, never>)[] & Record<Exclude<keyof I_31["superfluidDelegationRecords"], keyof {
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
                } & Record<Exclude<keyof I_31["totalDelegatedCoins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_31["totalDelegatedCoins"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I_31, keyof _207.SuperfluidDelegationsByDelegatorResponse>, never>>(object: I_31): _207.SuperfluidDelegationsByDelegatorResponse;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _207.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.SuperfluidUndelegationsByDelegatorRequest;
            fromJSON(object: any): _207.SuperfluidUndelegationsByDelegatorRequest;
            toJSON(message: _207.SuperfluidUndelegationsByDelegatorRequest): unknown;
            fromPartial<I_32 extends {
                delegatorAddress?: string;
                denom?: string;
            } & {
                delegatorAddress?: string;
                denom?: string;
            } & Record<Exclude<keyof I_32, keyof _207.SuperfluidUndelegationsByDelegatorRequest>, never>>(object: I_32): _207.SuperfluidUndelegationsByDelegatorRequest;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _207.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.SuperfluidUndelegationsByDelegatorResponse;
            fromJSON(object: any): _207.SuperfluidUndelegationsByDelegatorResponse;
            toJSON(message: _207.SuperfluidUndelegationsByDelegatorResponse): unknown;
            fromPartial<I_33 extends {
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
                    underlyingLockId?: any;
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
                    } & Record<Exclude<keyof I_33["superfluidDelegationRecords"][number]["delegationAmount"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                } & Record<Exclude<keyof I_33["superfluidDelegationRecords"][number], keyof _208.SuperfluidDelegationRecord>, never>)[] & Record<Exclude<keyof I_33["superfluidDelegationRecords"], keyof {
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
                } & Record<Exclude<keyof I_33["totalUndelegatedCoins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_33["totalUndelegatedCoins"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
                syntheticLocks?: {
                    underlyingLockId?: any;
                    synthDenom?: string;
                    endTime?: Date;
                    duration?: string;
                }[] & ({
                    underlyingLockId?: any;
                    synthDenom?: string;
                    endTime?: Date;
                    duration?: string;
                } & {
                    underlyingLockId?: any;
                    synthDenom?: string;
                    endTime?: Date;
                    duration?: string;
                } & Record<Exclude<keyof I_33["syntheticLocks"][number], keyof _194.SyntheticLock>, never>)[] & Record<Exclude<keyof I_33["syntheticLocks"], keyof {
                    underlyingLockId?: any;
                    synthDenom?: string;
                    endTime?: Date;
                    duration?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I_33, keyof _207.SuperfluidUndelegationsByDelegatorResponse>, never>>(object: I_33): _207.SuperfluidUndelegationsByDelegatorResponse;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _207.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.SuperfluidDelegationsByValidatorDenomRequest;
            fromJSON(object: any): _207.SuperfluidDelegationsByValidatorDenomRequest;
            toJSON(message: _207.SuperfluidDelegationsByValidatorDenomRequest): unknown;
            fromPartial<I_34 extends {
                validatorAddress?: string;
                denom?: string;
            } & {
                validatorAddress?: string;
                denom?: string;
            } & Record<Exclude<keyof I_34, keyof _207.SuperfluidDelegationsByValidatorDenomRequest>, never>>(object: I_34): _207.SuperfluidDelegationsByValidatorDenomRequest;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _207.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.SuperfluidDelegationsByValidatorDenomResponse;
            fromJSON(object: any): _207.SuperfluidDelegationsByValidatorDenomResponse;
            toJSON(message: _207.SuperfluidDelegationsByValidatorDenomResponse): unknown;
            fromPartial<I_35 extends {
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
                    } & Record<Exclude<keyof I_35["superfluidDelegationRecords"][number]["delegationAmount"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                } & Record<Exclude<keyof I_35["superfluidDelegationRecords"][number], keyof _208.SuperfluidDelegationRecord>, never>)[] & Record<Exclude<keyof I_35["superfluidDelegationRecords"], keyof {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    delegationAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                }[]>, never>;
            } & Record<Exclude<keyof I_35, "superfluidDelegationRecords">, never>>(object: I_35): _207.SuperfluidDelegationsByValidatorDenomResponse;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _207.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromJSON(object: any): _207.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toJSON(message: _207.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
            fromPartial<I_36 extends {
                validatorAddress?: string;
                denom?: string;
            } & {
                validatorAddress?: string;
                denom?: string;
            } & Record<Exclude<keyof I_36, keyof _207.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>, never>>(object: I_36): _207.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _207.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromJSON(object: any): _207.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toJSON(message: _207.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
            fromPartial<I_37 extends {
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
                } & Record<Exclude<keyof I_37["totalDelegatedCoins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_37["totalDelegatedCoins"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I_37, "totalDelegatedCoins">, never>>(object: I_37): _207.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
        };
        Params: {
            encode(message: _206.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.Params;
            fromJSON(object: any): _206.Params;
            toJSON(message: _206.Params): unknown;
            fromPartial<I_38 extends {
                minimumRiskFactor?: string;
            } & {
                minimumRiskFactor?: string;
            } & Record<Exclude<keyof I_38, "minimumRiskFactor">, never>>(object: I_38): _206.Params;
        };
        GenesisState: {
            encode(message: _205.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.GenesisState;
            fromJSON(object: any): _205.GenesisState;
            toJSON(message: _205.GenesisState): unknown;
            fromPartial<I_39 extends {
                params?: {
                    minimumRiskFactor?: string;
                };
                superfluidAssets?: {
                    denom?: string;
                    assetType?: _208.SuperfluidAssetType;
                }[];
                osmoEquivalentMultipliers?: {
                    epochNumber?: any;
                    denom?: string;
                    multiplier?: string;
                }[];
                intermediaryAccounts?: {
                    denom?: string;
                    valAddr?: string;
                    gaugeId?: any;
                }[];
                intemediaryAccountConnections?: {
                    lockId?: any;
                    intermediaryAccount?: string;
                }[];
            } & {
                params?: {
                    minimumRiskFactor?: string;
                } & {
                    minimumRiskFactor?: string;
                } & Record<Exclude<keyof I_39["params"], "minimumRiskFactor">, never>;
                superfluidAssets?: {
                    denom?: string;
                    assetType?: _208.SuperfluidAssetType;
                }[] & ({
                    denom?: string;
                    assetType?: _208.SuperfluidAssetType;
                } & {
                    denom?: string;
                    assetType?: _208.SuperfluidAssetType;
                } & Record<Exclude<keyof I_39["superfluidAssets"][number], keyof _208.SuperfluidAsset>, never>)[] & Record<Exclude<keyof I_39["superfluidAssets"], keyof {
                    denom?: string;
                    assetType?: _208.SuperfluidAssetType;
                }[]>, never>;
                osmoEquivalentMultipliers?: {
                    epochNumber?: any;
                    denom?: string;
                    multiplier?: string;
                }[] & ({
                    epochNumber?: any;
                    denom?: string;
                    multiplier?: string;
                } & {
                    epochNumber?: any;
                    denom?: string;
                    multiplier?: string;
                } & Record<Exclude<keyof I_39["osmoEquivalentMultipliers"][number], keyof _208.OsmoEquivalentMultiplierRecord>, never>)[] & Record<Exclude<keyof I_39["osmoEquivalentMultipliers"], keyof {
                    epochNumber?: any;
                    denom?: string;
                    multiplier?: string;
                }[]>, never>;
                intermediaryAccounts?: {
                    denom?: string;
                    valAddr?: string;
                    gaugeId?: any;
                }[] & ({
                    denom?: string;
                    valAddr?: string;
                    gaugeId?: any;
                } & {
                    denom?: string;
                    valAddr?: string;
                    gaugeId?: any;
                } & Record<Exclude<keyof I_39["intermediaryAccounts"][number], keyof _208.SuperfluidIntermediaryAccount>, never>)[] & Record<Exclude<keyof I_39["intermediaryAccounts"], keyof {
                    denom?: string;
                    valAddr?: string;
                    gaugeId?: any;
                }[]>, never>;
                intemediaryAccountConnections?: {
                    lockId?: any;
                    intermediaryAccount?: string;
                }[] & ({
                    lockId?: any;
                    intermediaryAccount?: string;
                } & {
                    lockId?: any;
                    intermediaryAccount?: string;
                } & Record<Exclude<keyof I_39["intemediaryAccountConnections"][number], keyof _208.LockIdIntermediaryAccountConnection>, never>)[] & Record<Exclude<keyof I_39["intemediaryAccountConnections"], keyof {
                    lockId?: any;
                    intermediaryAccount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I_39, keyof _205.GenesisState>, never>>(object: I_39): _205.GenesisState;
        };
    };
    namespace txfees {
        const v1beta1: {
            QueryFeeTokensRequest: {
                encode(_: _213.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.QueryFeeTokensRequest;
                fromJSON(_: any): _213.QueryFeeTokensRequest;
                toJSON(_: _213.QueryFeeTokensRequest): unknown;
                fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): _213.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _213.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.QueryFeeTokensResponse;
                fromJSON(object: any): _213.QueryFeeTokensResponse;
                toJSON(message: _213.QueryFeeTokensResponse): unknown;
                fromPartial<I_1 extends {
                    feeTokens?: {
                        denom?: string;
                        poolID?: any;
                    }[];
                } & {
                    feeTokens?: {
                        denom?: string;
                        poolID?: any;
                    }[] & ({
                        denom?: string;
                        poolID?: any;
                    } & {
                        denom?: string;
                        poolID?: any;
                    } & Record<Exclude<keyof I_1["feeTokens"][number], keyof _210.FeeToken>, never>)[] & Record<Exclude<keyof I_1["feeTokens"], keyof {
                        denom?: string;
                        poolID?: any;
                    }[]>, never>;
                } & Record<Exclude<keyof I_1, "feeTokens">, never>>(object: I_1): _213.QueryFeeTokensResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _213.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.QueryDenomPoolIdRequest;
                fromJSON(object: any): _213.QueryDenomPoolIdRequest;
                toJSON(message: _213.QueryDenomPoolIdRequest): unknown;
                fromPartial<I_2 extends {
                    denom?: string;
                } & {
                    denom?: string;
                } & Record<Exclude<keyof I_2, "denom">, never>>(object: I_2): _213.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _213.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.QueryDenomPoolIdResponse;
                fromJSON(object: any): _213.QueryDenomPoolIdResponse;
                toJSON(message: _213.QueryDenomPoolIdResponse): unknown;
                fromPartial<I_3 extends {
                    poolID?: any;
                } & {
                    poolID?: any;
                } & Record<Exclude<keyof I_3, "poolID">, never>>(object: I_3): _213.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _213.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.QueryBaseDenomRequest;
                fromJSON(_: any): _213.QueryBaseDenomRequest;
                toJSON(_: _213.QueryBaseDenomRequest): unknown;
                fromPartial<I_4 extends {} & {} & Record<Exclude<keyof I_4, never>, never>>(_: I_4): _213.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _213.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.QueryBaseDenomResponse;
                fromJSON(object: any): _213.QueryBaseDenomResponse;
                toJSON(message: _213.QueryBaseDenomResponse): unknown;
                fromPartial<I_5 extends {
                    baseDenom?: string;
                } & {
                    baseDenom?: string;
                } & Record<Exclude<keyof I_5, "baseDenom">, never>>(object: I_5): _213.QueryBaseDenomResponse;
            };
            UpdateFeeTokenProposal: {
                encode(message: _212.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.UpdateFeeTokenProposal;
                fromJSON(object: any): _212.UpdateFeeTokenProposal;
                toJSON(message: _212.UpdateFeeTokenProposal): unknown;
                fromPartial<I_6 extends {
                    title?: string;
                    description?: string;
                    feetoken?: {
                        denom?: string;
                        poolID?: any;
                    };
                } & {
                    title?: string;
                    description?: string;
                    feetoken?: {
                        denom?: string;
                        poolID?: any;
                    } & {
                        denom?: string;
                        poolID?: any;
                    } & Record<Exclude<keyof I_6["feetoken"], keyof _210.FeeToken>, never>;
                } & Record<Exclude<keyof I_6, keyof _212.UpdateFeeTokenProposal>, never>>(object: I_6): _212.UpdateFeeTokenProposal;
            };
            GenesisState: {
                encode(message: _211.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.GenesisState;
                fromJSON(object: any): _211.GenesisState;
                toJSON(message: _211.GenesisState): unknown;
                fromPartial<I_7 extends {
                    basedenom?: string;
                    feetokens?: {
                        denom?: string;
                        poolID?: any;
                    }[];
                } & {
                    basedenom?: string;
                    feetokens?: {
                        denom?: string;
                        poolID?: any;
                    }[] & ({
                        denom?: string;
                        poolID?: any;
                    } & {
                        denom?: string;
                        poolID?: any;
                    } & Record<Exclude<keyof I_7["feetokens"][number], keyof _210.FeeToken>, never>)[] & Record<Exclude<keyof I_7["feetokens"], keyof {
                        denom?: string;
                        poolID?: any;
                    }[]>, never>;
                } & Record<Exclude<keyof I_7, keyof _211.GenesisState>, never>>(object: I_7): _211.GenesisState;
            };
            FeeToken: {
                encode(message: _210.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.FeeToken;
                fromJSON(object: any): _210.FeeToken;
                toJSON(message: _210.FeeToken): unknown;
                fromPartial<I_8 extends {
                    denom?: string;
                    poolID?: any;
                } & {
                    denom?: string;
                    poolID?: any;
                } & Record<Exclude<keyof I_8, keyof _210.FeeToken>, never>>(object: I_8): _210.FeeToken;
            };
        };
    }
}
