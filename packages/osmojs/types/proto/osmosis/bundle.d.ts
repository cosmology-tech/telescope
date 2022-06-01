import * as _132 from "./claim/v1beta1/claim";
import * as _133 from "./claim/v1beta1/genesis";
import * as _134 from "./claim/v1beta1/params";
import * as _135 from "./claim/v1beta1/query";
import * as _136 from "./epochs/genesis";
import * as _137 from "./epochs/query";
import * as _138 from "./gamm/pool-models/balancer/balancerPool";
import * as _139 from "./gamm/pool-models/balancer/tx";
import * as _140 from "./gamm/v1beta1/genesis";
import * as _141 from "./gamm/v1beta1/query";
import * as _142 from "./gamm/v1beta1/tx";
import * as _143 from "./incentives/gauge";
import * as _144 from "./incentives/genesis";
import * as _145 from "./incentives/params";
import * as _146 from "./incentives/query";
import * as _147 from "./incentives/tx";
import * as _148 from "./lockup/genesis";
import * as _149 from "./lockup/lock";
import * as _150 from "./lockup/query";
import * as _151 from "./lockup/tx";
import * as _152 from "./mint/v1beta1/genesis";
import * as _153 from "./mint/v1beta1/mint";
import * as _154 from "./mint/v1beta1/query";
import * as _155 from "./pool-incentives/v1beta1/genesis";
import * as _156 from "./pool-incentives/v1beta1/gov";
import * as _157 from "./pool-incentives/v1beta1/incentives";
import * as _158 from "./pool-incentives/v1beta1/query";
import * as _159 from "./store/v1beta1/tree";
import * as _160 from "./superfluid/genesis";
import * as _161 from "./superfluid/params";
import * as _162 from "./superfluid/query";
import * as _163 from "./superfluid/superfluid";
import * as _164 from "./superfluid/tx";
import * as _165 from "./txfees/v1beta1/feetoken";
import * as _166 from "./txfees/v1beta1/genesis";
import * as _167 from "./txfees/v1beta1/gov";
import * as _168 from "./txfees/v1beta1/query";
export declare namespace osmosis {
    namespace claim {
        const v1beta1: {
            QueryModuleAccountBalanceRequest: {
                encode(_: _135.QueryModuleAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryModuleAccountBalanceRequest;
                fromJSON(_: any): _135.QueryModuleAccountBalanceRequest;
                toJSON(_: _135.QueryModuleAccountBalanceRequest): unknown;
                fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): _135.QueryModuleAccountBalanceRequest;
            };
            QueryModuleAccountBalanceResponse: {
                encode(message: _135.QueryModuleAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryModuleAccountBalanceResponse;
                fromJSON(object: any): _135.QueryModuleAccountBalanceResponse;
                toJSON(message: _135.QueryModuleAccountBalanceResponse): unknown;
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
                } & Record<Exclude<keyof I_1, "moduleAccountBalance">, never>>(object: I_1): _135.QueryModuleAccountBalanceResponse;
            };
            QueryParamsRequest: {
                encode(_: _135.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryParamsRequest;
                fromJSON(_: any): _135.QueryParamsRequest;
                toJSON(_: _135.QueryParamsRequest): unknown;
                fromPartial<I_2 extends {} & {} & Record<Exclude<keyof I_2, never>, never>>(_: I_2): _135.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _135.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryParamsResponse;
                fromJSON(object: any): _135.QueryParamsResponse;
                toJSON(message: _135.QueryParamsResponse): unknown;
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
                    } & Record<Exclude<keyof I_3["params"], keyof _134.Params>, never>;
                } & Record<Exclude<keyof I_3, "params">, never>>(object: I_3): _135.QueryParamsResponse;
            };
            QueryClaimRecordRequest: {
                encode(message: _135.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryClaimRecordRequest;
                fromJSON(object: any): _135.QueryClaimRecordRequest;
                toJSON(message: _135.QueryClaimRecordRequest): unknown;
                fromPartial<I_4 extends {
                    address?: string;
                } & {
                    address?: string;
                } & Record<Exclude<keyof I_4, "address">, never>>(object: I_4): _135.QueryClaimRecordRequest;
            };
            QueryClaimRecordResponse: {
                encode(message: _135.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryClaimRecordResponse;
                fromJSON(object: any): _135.QueryClaimRecordResponse;
                toJSON(message: _135.QueryClaimRecordResponse): unknown;
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
                    } & Record<Exclude<keyof I_5["claimRecord"], keyof _132.ClaimRecord>, never>;
                } & Record<Exclude<keyof I_5, "claimRecord">, never>>(object: I_5): _135.QueryClaimRecordResponse;
            };
            QueryClaimableForActionRequest: {
                encode(message: _135.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryClaimableForActionRequest;
                fromJSON(object: any): _135.QueryClaimableForActionRequest;
                toJSON(message: _135.QueryClaimableForActionRequest): unknown;
                fromPartial<I_6 extends {
                    address?: string;
                    action?: _132.Action;
                } & {
                    address?: string;
                    action?: _132.Action;
                } & Record<Exclude<keyof I_6, keyof _135.QueryClaimableForActionRequest>, never>>(object: I_6): _135.QueryClaimableForActionRequest;
            };
            QueryClaimableForActionResponse: {
                encode(message: _135.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryClaimableForActionResponse;
                fromJSON(object: any): _135.QueryClaimableForActionResponse;
                toJSON(message: _135.QueryClaimableForActionResponse): unknown;
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
                } & Record<Exclude<keyof I_7, "coins">, never>>(object: I_7): _135.QueryClaimableForActionResponse;
            };
            QueryTotalClaimableRequest: {
                encode(message: _135.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryTotalClaimableRequest;
                fromJSON(object: any): _135.QueryTotalClaimableRequest;
                toJSON(message: _135.QueryTotalClaimableRequest): unknown;
                fromPartial<I_8 extends {
                    address?: string;
                } & {
                    address?: string;
                } & Record<Exclude<keyof I_8, "address">, never>>(object: I_8): _135.QueryTotalClaimableRequest;
            };
            QueryTotalClaimableResponse: {
                encode(message: _135.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryTotalClaimableResponse;
                fromJSON(object: any): _135.QueryTotalClaimableResponse;
                toJSON(message: _135.QueryTotalClaimableResponse): unknown;
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
                } & Record<Exclude<keyof I_9, "coins">, never>>(object: I_9): _135.QueryTotalClaimableResponse;
            };
            Params: {
                encode(message: _134.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Params;
                fromJSON(object: any): _134.Params;
                toJSON(message: _134.Params): unknown;
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
                } & Record<Exclude<keyof I_10, keyof _134.Params>, never>>(object: I_10): _134.Params;
            };
            GenesisState: {
                encode(message: _133.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.GenesisState;
                fromJSON(object: any): _133.GenesisState;
                toJSON(message: _133.GenesisState): unknown;
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
                    } & Record<Exclude<keyof I_11["params"], keyof _134.Params>, never>;
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
                    } & Record<Exclude<keyof I_11["claimRecords"][number], keyof _132.ClaimRecord>, never>)[] & Record<Exclude<keyof I_11["claimRecords"], keyof {
                        address?: string;
                        initialClaimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        actionCompleted?: boolean[];
                    }[]>, never>;
                } & Record<Exclude<keyof I_11, keyof _133.GenesisState>, never>>(object: I_11): _133.GenesisState;
            };
            actionFromJSON(object: any): _132.Action;
            actionToJSON(object: _132.Action): string;
            Action: typeof _132.Action;
            ClaimRecord: {
                encode(message: _132.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ClaimRecord;
                fromJSON(object: any): _132.ClaimRecord;
                toJSON(message: _132.ClaimRecord): unknown;
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
                } & Record<Exclude<keyof I_12, keyof _132.ClaimRecord>, never>>(object: I_12): _132.ClaimRecord;
            };
        };
    }
    namespace epochs {
        const v1beta1: {
            QueryEpochsInfoRequest: {
                encode(_: _137.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryEpochsInfoRequest;
                fromJSON(_: any): _137.QueryEpochsInfoRequest;
                toJSON(_: _137.QueryEpochsInfoRequest): unknown;
                fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): _137.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _137.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryEpochsInfoResponse;
                fromJSON(object: any): _137.QueryEpochsInfoResponse;
                toJSON(message: _137.QueryEpochsInfoResponse): unknown;
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
                    } & Record<Exclude<keyof I_1["epochs"][number], keyof _136.EpochInfo>, never>)[] & Record<Exclude<keyof I_1["epochs"], keyof {
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: any;
                    }[]>, never>;
                } & Record<Exclude<keyof I_1, "epochs">, never>>(object: I_1): _137.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _137.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryCurrentEpochRequest;
                fromJSON(object: any): _137.QueryCurrentEpochRequest;
                toJSON(message: _137.QueryCurrentEpochRequest): unknown;
                fromPartial<I_2 extends {
                    identifier?: string;
                } & {
                    identifier?: string;
                } & Record<Exclude<keyof I_2, "identifier">, never>>(object: I_2): _137.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _137.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryCurrentEpochResponse;
                fromJSON(object: any): _137.QueryCurrentEpochResponse;
                toJSON(message: _137.QueryCurrentEpochResponse): unknown;
                fromPartial<I_3 extends {
                    currentEpoch?: any;
                } & {
                    currentEpoch?: any;
                } & Record<Exclude<keyof I_3, "currentEpoch">, never>>(object: I_3): _137.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _136.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.EpochInfo;
                fromJSON(object: any): _136.EpochInfo;
                toJSON(message: _136.EpochInfo): unknown;
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
                } & Record<Exclude<keyof I_4, keyof _136.EpochInfo>, never>>(object: I_4): _136.EpochInfo;
            };
            GenesisState: {
                encode(message: _136.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GenesisState;
                fromJSON(object: any): _136.GenesisState;
                toJSON(message: _136.GenesisState): unknown;
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
                    } & Record<Exclude<keyof I_5["epochs"][number], keyof _136.EpochInfo>, never>)[] & Record<Exclude<keyof I_5["epochs"], keyof {
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: any;
                    }[]>, never>;
                } & Record<Exclude<keyof I_5, "epochs">, never>>(object: I_5): _136.GenesisState;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _142.MsgJoinPool): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _142.MsgExitPool): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _142.MsgSwapExactAmountIn): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _142.MsgSwapExactAmountOut): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _142.MsgJoinSwapExternAmountIn): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _142.MsgJoinSwapShareAmountOut): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _142.MsgExitSwapExternAmountOut): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _142.MsgExitSwapShareAmountIn): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _142.MsgJoinPool): {
                        typeUrl: string;
                        value: _142.MsgJoinPool;
                    };
                    exitPool(value: _142.MsgExitPool): {
                        typeUrl: string;
                        value: _142.MsgExitPool;
                    };
                    swapExactAmountIn(value: _142.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _142.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _142.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _142.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _142.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _142.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _142.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _142.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _142.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _142.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _142.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _142.MsgExitSwapShareAmountIn;
                    };
                };
                toJSON: {
                    joinPool(value: _142.MsgJoinPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitPool(value: _142.MsgExitPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountIn(value: _142.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountOut(value: _142.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapExternAmountIn(value: _142.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapShareAmountOut(value: _142.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapExternAmountOut(value: _142.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapShareAmountIn(value: _142.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    joinPool(value: any): {
                        typeUrl: string;
                        value: _142.MsgJoinPool;
                    };
                    exitPool(value: any): {
                        typeUrl: string;
                        value: _142.MsgExitPool;
                    };
                    swapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _142.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _142.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: any): {
                        typeUrl: string;
                        value: _142.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: any): {
                        typeUrl: string;
                        value: _142.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: any): {
                        typeUrl: string;
                        value: _142.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: any): {
                        typeUrl: string;
                        value: _142.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _142.MsgJoinPool): {
                        typeUrl: string;
                        value: _142.MsgJoinPool;
                    };
                    exitPool(value: _142.MsgExitPool): {
                        typeUrl: string;
                        value: _142.MsgExitPool;
                    };
                    swapExactAmountIn(value: _142.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _142.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _142.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _142.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _142.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _142.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _142.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _142.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _142.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _142.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _142.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _142.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: _142.MsgJoinPool) => {
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
                    }) => _142.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: _142.MsgExitPool) => {
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
                    }) => _142.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _142.MsgSwapExactAmountIn) => {
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
                    }) => _142.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _142.MsgSwapExactAmountOut) => {
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
                    }) => _142.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: _142.MsgJoinSwapExternAmountIn) => {
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
                    }) => _142.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: _142.MsgJoinSwapShareAmountOut) => {
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
                    }) => _142.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: _142.MsgExitSwapExternAmountOut) => {
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
                    }) => _142.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: _142.MsgExitSwapShareAmountIn) => {
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
                    }) => _142.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                encode(message: _142.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgJoinPool;
                fromJSON(object: any): _142.MsgJoinPool;
                toJSON(message: _142.MsgJoinPool): unknown;
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
                } & Record<Exclude<keyof I, keyof _142.MsgJoinPool>, never>>(object: I): _142.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(_: _142.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgJoinPoolResponse;
                fromJSON(_: any): _142.MsgJoinPoolResponse;
                toJSON(_: _142.MsgJoinPoolResponse): unknown;
                fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _142.MsgJoinPoolResponse;
            };
            MsgExitPool: {
                encode(message: _142.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgExitPool;
                fromJSON(object: any): _142.MsgExitPool;
                toJSON(message: _142.MsgExitPool): unknown;
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
                } & Record<Exclude<keyof I_2, keyof _142.MsgExitPool>, never>>(object: I_2): _142.MsgExitPool;
            };
            MsgExitPoolResponse: {
                encode(_: _142.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgExitPoolResponse;
                fromJSON(_: any): _142.MsgExitPoolResponse;
                toJSON(_: _142.MsgExitPoolResponse): unknown;
                fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _142.MsgExitPoolResponse;
            };
            SwapAmountInRoute: {
                encode(message: _142.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.SwapAmountInRoute;
                fromJSON(object: any): _142.SwapAmountInRoute;
                toJSON(message: _142.SwapAmountInRoute): unknown;
                fromPartial<I_4 extends {
                    poolId?: any;
                    tokenOutDenom?: string;
                } & {
                    poolId?: any;
                    tokenOutDenom?: string;
                } & Record<Exclude<keyof I_4, keyof _142.SwapAmountInRoute>, never>>(object: I_4): _142.SwapAmountInRoute;
            };
            MsgSwapExactAmountIn: {
                encode(message: _142.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgSwapExactAmountIn;
                fromJSON(object: any): _142.MsgSwapExactAmountIn;
                toJSON(message: _142.MsgSwapExactAmountIn): unknown;
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
                    } & Record<Exclude<keyof I_5["routes"][number], keyof _142.SwapAmountInRoute>, never>)[] & Record<Exclude<keyof I_5["routes"], keyof {
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
                } & Record<Exclude<keyof I_5, keyof _142.MsgSwapExactAmountIn>, never>>(object: I_5): _142.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _142.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgSwapExactAmountInResponse;
                fromJSON(object: any): _142.MsgSwapExactAmountInResponse;
                toJSON(message: _142.MsgSwapExactAmountInResponse): unknown;
                fromPartial<I_6 extends {
                    tokenOutAmount?: string;
                } & {
                    tokenOutAmount?: string;
                } & Record<Exclude<keyof I_6, "tokenOutAmount">, never>>(object: I_6): _142.MsgSwapExactAmountInResponse;
            };
            SwapAmountOutRoute: {
                encode(message: _142.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.SwapAmountOutRoute;
                fromJSON(object: any): _142.SwapAmountOutRoute;
                toJSON(message: _142.SwapAmountOutRoute): unknown;
                fromPartial<I_7 extends {
                    poolId?: any;
                    tokenInDenom?: string;
                } & {
                    poolId?: any;
                    tokenInDenom?: string;
                } & Record<Exclude<keyof I_7, keyof _142.SwapAmountOutRoute>, never>>(object: I_7): _142.SwapAmountOutRoute;
            };
            MsgSwapExactAmountOut: {
                encode(message: _142.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgSwapExactAmountOut;
                fromJSON(object: any): _142.MsgSwapExactAmountOut;
                toJSON(message: _142.MsgSwapExactAmountOut): unknown;
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
                    } & Record<Exclude<keyof I_8["routes"][number], keyof _142.SwapAmountOutRoute>, never>)[] & Record<Exclude<keyof I_8["routes"], keyof {
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
                } & Record<Exclude<keyof I_8, keyof _142.MsgSwapExactAmountOut>, never>>(object: I_8): _142.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _142.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgSwapExactAmountOutResponse;
                fromJSON(object: any): _142.MsgSwapExactAmountOutResponse;
                toJSON(message: _142.MsgSwapExactAmountOutResponse): unknown;
                fromPartial<I_9 extends {
                    tokenInAmount?: string;
                } & {
                    tokenInAmount?: string;
                } & Record<Exclude<keyof I_9, "tokenInAmount">, never>>(object: I_9): _142.MsgSwapExactAmountOutResponse;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _142.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgJoinSwapExternAmountIn;
                fromJSON(object: any): _142.MsgJoinSwapExternAmountIn;
                toJSON(message: _142.MsgJoinSwapExternAmountIn): unknown;
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
                } & Record<Exclude<keyof I_10, keyof _142.MsgJoinSwapExternAmountIn>, never>>(object: I_10): _142.MsgJoinSwapExternAmountIn;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _142.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgJoinSwapExternAmountInResponse;
                fromJSON(object: any): _142.MsgJoinSwapExternAmountInResponse;
                toJSON(message: _142.MsgJoinSwapExternAmountInResponse): unknown;
                fromPartial<I_11 extends {
                    shareOutAmount?: string;
                } & {
                    shareOutAmount?: string;
                } & Record<Exclude<keyof I_11, "shareOutAmount">, never>>(object: I_11): _142.MsgJoinSwapExternAmountInResponse;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _142.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgJoinSwapShareAmountOut;
                fromJSON(object: any): _142.MsgJoinSwapShareAmountOut;
                toJSON(message: _142.MsgJoinSwapShareAmountOut): unknown;
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
                } & Record<Exclude<keyof I_12, keyof _142.MsgJoinSwapShareAmountOut>, never>>(object: I_12): _142.MsgJoinSwapShareAmountOut;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _142.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgJoinSwapShareAmountOutResponse;
                fromJSON(object: any): _142.MsgJoinSwapShareAmountOutResponse;
                toJSON(message: _142.MsgJoinSwapShareAmountOutResponse): unknown;
                fromPartial<I_13 extends {
                    tokenInAmount?: string;
                } & {
                    tokenInAmount?: string;
                } & Record<Exclude<keyof I_13, "tokenInAmount">, never>>(object: I_13): _142.MsgJoinSwapShareAmountOutResponse;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _142.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgExitSwapShareAmountIn;
                fromJSON(object: any): _142.MsgExitSwapShareAmountIn;
                toJSON(message: _142.MsgExitSwapShareAmountIn): unknown;
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
                } & Record<Exclude<keyof I_14, keyof _142.MsgExitSwapShareAmountIn>, never>>(object: I_14): _142.MsgExitSwapShareAmountIn;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _142.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgExitSwapShareAmountInResponse;
                fromJSON(object: any): _142.MsgExitSwapShareAmountInResponse;
                toJSON(message: _142.MsgExitSwapShareAmountInResponse): unknown;
                fromPartial<I_15 extends {
                    tokenOutAmount?: string;
                } & {
                    tokenOutAmount?: string;
                } & Record<Exclude<keyof I_15, "tokenOutAmount">, never>>(object: I_15): _142.MsgExitSwapShareAmountInResponse;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _142.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgExitSwapExternAmountOut;
                fromJSON(object: any): _142.MsgExitSwapExternAmountOut;
                toJSON(message: _142.MsgExitSwapExternAmountOut): unknown;
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
                } & Record<Exclude<keyof I_16, keyof _142.MsgExitSwapExternAmountOut>, never>>(object: I_16): _142.MsgExitSwapExternAmountOut;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _142.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgExitSwapExternAmountOutResponse;
                fromJSON(object: any): _142.MsgExitSwapExternAmountOutResponse;
                toJSON(message: _142.MsgExitSwapExternAmountOutResponse): unknown;
                fromPartial<I_17 extends {
                    shareInAmount?: string;
                } & {
                    shareInAmount?: string;
                } & Record<Exclude<keyof I_17, "shareInAmount">, never>>(object: I_17): _142.MsgExitSwapExternAmountOutResponse;
            };
            QueryPoolRequest: {
                encode(message: _141.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryPoolRequest;
                fromJSON(object: any): _141.QueryPoolRequest;
                toJSON(message: _141.QueryPoolRequest): unknown;
                fromPartial<I_18 extends {
                    poolId?: any;
                } & {
                    poolId?: any;
                } & Record<Exclude<keyof I_18, "poolId">, never>>(object: I_18): _141.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _141.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryPoolResponse;
                fromJSON(object: any): _141.QueryPoolResponse;
                toJSON(message: _141.QueryPoolResponse): unknown;
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
                } & Record<Exclude<keyof I_19, "pool">, never>>(object: I_19): _141.QueryPoolResponse;
            };
            QueryPoolsRequest: {
                encode(message: _141.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryPoolsRequest;
                fromJSON(object: any): _141.QueryPoolsRequest;
                toJSON(message: _141.QueryPoolsRequest): unknown;
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
                } & Record<Exclude<keyof I_20, "pagination">, never>>(object: I_20): _141.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _141.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryPoolsResponse;
                fromJSON(object: any): _141.QueryPoolsResponse;
                toJSON(message: _141.QueryPoolsResponse): unknown;
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
                } & Record<Exclude<keyof I_21, keyof _141.QueryPoolsResponse>, never>>(object: I_21): _141.QueryPoolsResponse;
            };
            QueryNumPoolsRequest: {
                encode(_: _141.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryNumPoolsRequest;
                fromJSON(_: any): _141.QueryNumPoolsRequest;
                toJSON(_: _141.QueryNumPoolsRequest): unknown;
                fromPartial<I_22 extends {} & {} & Record<Exclude<keyof I_22, never>, never>>(_: I_22): _141.QueryNumPoolsRequest;
            };
            QueryNumPoolsResponse: {
                encode(message: _141.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryNumPoolsResponse;
                fromJSON(object: any): _141.QueryNumPoolsResponse;
                toJSON(message: _141.QueryNumPoolsResponse): unknown;
                fromPartial<I_23 extends {
                    numPools?: any;
                } & {
                    numPools?: any;
                } & Record<Exclude<keyof I_23, "numPools">, never>>(object: I_23): _141.QueryNumPoolsResponse;
            };
            QueryPoolParamsRequest: {
                encode(message: _141.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryPoolParamsRequest;
                fromJSON(object: any): _141.QueryPoolParamsRequest;
                toJSON(message: _141.QueryPoolParamsRequest): unknown;
                fromPartial<I_24 extends {
                    poolId?: any;
                } & {
                    poolId?: any;
                } & Record<Exclude<keyof I_24, "poolId">, never>>(object: I_24): _141.QueryPoolParamsRequest;
            };
            QueryPoolParamsResponse: {
                encode(message: _141.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryPoolParamsResponse;
                fromJSON(object: any): _141.QueryPoolParamsResponse;
                toJSON(message: _141.QueryPoolParamsResponse): unknown;
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
                } & Record<Exclude<keyof I_25, "params">, never>>(object: I_25): _141.QueryPoolParamsResponse;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _141.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryTotalPoolLiquidityRequest;
                fromJSON(object: any): _141.QueryTotalPoolLiquidityRequest;
                toJSON(message: _141.QueryTotalPoolLiquidityRequest): unknown;
                fromPartial<I_26 extends {
                    poolId?: any;
                } & {
                    poolId?: any;
                } & Record<Exclude<keyof I_26, "poolId">, never>>(object: I_26): _141.QueryTotalPoolLiquidityRequest;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _141.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryTotalPoolLiquidityResponse;
                fromJSON(object: any): _141.QueryTotalPoolLiquidityResponse;
                toJSON(message: _141.QueryTotalPoolLiquidityResponse): unknown;
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
                } & Record<Exclude<keyof I_27, "liquidity">, never>>(object: I_27): _141.QueryTotalPoolLiquidityResponse;
            };
            QueryTotalSharesRequest: {
                encode(message: _141.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryTotalSharesRequest;
                fromJSON(object: any): _141.QueryTotalSharesRequest;
                toJSON(message: _141.QueryTotalSharesRequest): unknown;
                fromPartial<I_28 extends {
                    poolId?: any;
                } & {
                    poolId?: any;
                } & Record<Exclude<keyof I_28, "poolId">, never>>(object: I_28): _141.QueryTotalSharesRequest;
            };
            QueryTotalSharesResponse: {
                encode(message: _141.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryTotalSharesResponse;
                fromJSON(object: any): _141.QueryTotalSharesResponse;
                toJSON(message: _141.QueryTotalSharesResponse): unknown;
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
                } & Record<Exclude<keyof I_29, "totalShares">, never>>(object: I_29): _141.QueryTotalSharesResponse;
            };
            QuerySpotPriceRequest: {
                encode(message: _141.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QuerySpotPriceRequest;
                fromJSON(object: any): _141.QuerySpotPriceRequest;
                toJSON(message: _141.QuerySpotPriceRequest): unknown;
                fromPartial<I_30 extends {
                    poolId?: any;
                    tokenInDenom?: string;
                    tokenOutDenom?: string;
                } & {
                    poolId?: any;
                    tokenInDenom?: string;
                    tokenOutDenom?: string;
                } & Record<Exclude<keyof I_30, keyof _141.QuerySpotPriceRequest>, never>>(object: I_30): _141.QuerySpotPriceRequest;
            };
            QuerySpotPriceResponse: {
                encode(message: _141.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QuerySpotPriceResponse;
                fromJSON(object: any): _141.QuerySpotPriceResponse;
                toJSON(message: _141.QuerySpotPriceResponse): unknown;
                fromPartial<I_31 extends {
                    spotPrice?: string;
                } & {
                    spotPrice?: string;
                } & Record<Exclude<keyof I_31, "spotPrice">, never>>(object: I_31): _141.QuerySpotPriceResponse;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _141.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QuerySwapExactAmountInRequest;
                fromJSON(object: any): _141.QuerySwapExactAmountInRequest;
                toJSON(message: _141.QuerySwapExactAmountInRequest): unknown;
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
                    } & Record<Exclude<keyof I_32["routes"][number], keyof _142.SwapAmountInRoute>, never>)[] & Record<Exclude<keyof I_32["routes"], keyof {
                        poolId?: any;
                        tokenOutDenom?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_32, keyof _141.QuerySwapExactAmountInRequest>, never>>(object: I_32): _141.QuerySwapExactAmountInRequest;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _141.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QuerySwapExactAmountInResponse;
                fromJSON(object: any): _141.QuerySwapExactAmountInResponse;
                toJSON(message: _141.QuerySwapExactAmountInResponse): unknown;
                fromPartial<I_33 extends {
                    tokenOutAmount?: string;
                } & {
                    tokenOutAmount?: string;
                } & Record<Exclude<keyof I_33, "tokenOutAmount">, never>>(object: I_33): _141.QuerySwapExactAmountInResponse;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _141.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QuerySwapExactAmountOutRequest;
                fromJSON(object: any): _141.QuerySwapExactAmountOutRequest;
                toJSON(message: _141.QuerySwapExactAmountOutRequest): unknown;
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
                    } & Record<Exclude<keyof I_34["routes"][number], keyof _142.SwapAmountOutRoute>, never>)[] & Record<Exclude<keyof I_34["routes"], keyof {
                        poolId?: any;
                        tokenInDenom?: string;
                    }[]>, never>;
                    tokenOut?: string;
                } & Record<Exclude<keyof I_34, keyof _141.QuerySwapExactAmountOutRequest>, never>>(object: I_34): _141.QuerySwapExactAmountOutRequest;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _141.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QuerySwapExactAmountOutResponse;
                fromJSON(object: any): _141.QuerySwapExactAmountOutResponse;
                toJSON(message: _141.QuerySwapExactAmountOutResponse): unknown;
                fromPartial<I_35 extends {
                    tokenInAmount?: string;
                } & {
                    tokenInAmount?: string;
                } & Record<Exclude<keyof I_35, "tokenInAmount">, never>>(object: I_35): _141.QuerySwapExactAmountOutResponse;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _141.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryTotalLiquidityRequest;
                fromJSON(_: any): _141.QueryTotalLiquidityRequest;
                toJSON(_: _141.QueryTotalLiquidityRequest): unknown;
                fromPartial<I_36 extends {} & {} & Record<Exclude<keyof I_36, never>, never>>(_: I_36): _141.QueryTotalLiquidityRequest;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _141.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryTotalLiquidityResponse;
                fromJSON(object: any): _141.QueryTotalLiquidityResponse;
                toJSON(message: _141.QueryTotalLiquidityResponse): unknown;
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
                } & Record<Exclude<keyof I_37, "liquidity">, never>>(object: I_37): _141.QueryTotalLiquidityResponse;
            };
            Params: {
                encode(message: _140.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Params;
                fromJSON(object: any): _140.Params;
                toJSON(message: _140.Params): unknown;
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
                } & Record<Exclude<keyof I_38, "poolCreationFee">, never>>(object: I_38): _140.Params;
            };
            GenesisState: {
                encode(message: _140.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.GenesisState;
                fromJSON(object: any): _140.GenesisState;
                toJSON(message: _140.GenesisState): unknown;
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
                } & Record<Exclude<keyof I_39, keyof _140.GenesisState>, never>>(object: I_39): _140.GenesisState;
            };
            MsgCreateBalancerPool: {
                encode(message: _139.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgCreateBalancerPool;
                fromJSON(object: any): _139.MsgCreateBalancerPool;
                toJSON(message: _139.MsgCreateBalancerPool): unknown;
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
                            } & Record<Exclude<keyof I_40["poolParams"]["smoothWeightChangeParams"]["initialPoolWeights"][number], keyof _138.PoolAsset>, never>)[] & Record<Exclude<keyof I_40["poolParams"]["smoothWeightChangeParams"]["initialPoolWeights"], keyof {
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
                            } & Record<Exclude<keyof I_40["poolParams"]["smoothWeightChangeParams"]["targetPoolWeights"][number], keyof _138.PoolAsset>, never>)[] & Record<Exclude<keyof I_40["poolParams"]["smoothWeightChangeParams"]["targetPoolWeights"], keyof {
                                token?: {
                                    denom?: string;
                                    amount?: string;
                                };
                                weight?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_40["poolParams"]["smoothWeightChangeParams"], keyof _138.SmoothWeightChangeParams>, never>;
                    } & Record<Exclude<keyof I_40["poolParams"], keyof _138.PoolParams>, never>;
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
                    } & Record<Exclude<keyof I_40["poolAssets"][number], keyof _138.PoolAsset>, never>)[] & Record<Exclude<keyof I_40["poolAssets"], keyof {
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        weight?: string;
                    }[]>, never>;
                    futurePoolGovernor?: string;
                } & Record<Exclude<keyof I_40, keyof _139.MsgCreateBalancerPool>, never>>(object: I_40): _139.MsgCreateBalancerPool;
            };
            MsgCreateBalancerPoolResponse: {
                encode(message: _139.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgCreateBalancerPoolResponse;
                fromJSON(object: any): _139.MsgCreateBalancerPoolResponse;
                toJSON(message: _139.MsgCreateBalancerPoolResponse): unknown;
                fromPartial<I_41 extends {
                    poolId?: any;
                } & {
                    poolId?: any;
                } & Record<Exclude<keyof I_41, "poolId">, never>>(object: I_41): _139.MsgCreateBalancerPoolResponse;
            };
            SmoothWeightChangeParams: {
                encode(message: _138.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.SmoothWeightChangeParams;
                fromJSON(object: any): _138.SmoothWeightChangeParams;
                toJSON(message: _138.SmoothWeightChangeParams): unknown;
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
                    } & Record<Exclude<keyof I_42["initialPoolWeights"][number], keyof _138.PoolAsset>, never>)[] & Record<Exclude<keyof I_42["initialPoolWeights"], keyof {
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
                    } & Record<Exclude<keyof I_42["targetPoolWeights"][number], keyof _138.PoolAsset>, never>)[] & Record<Exclude<keyof I_42["targetPoolWeights"], keyof {
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        weight?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_42, keyof _138.SmoothWeightChangeParams>, never>>(object: I_42): _138.SmoothWeightChangeParams;
            };
            PoolParams: {
                encode(message: _138.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.PoolParams;
                fromJSON(object: any): _138.PoolParams;
                toJSON(message: _138.PoolParams): unknown;
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
                        } & Record<Exclude<keyof I_43["smoothWeightChangeParams"]["initialPoolWeights"][number], keyof _138.PoolAsset>, never>)[] & Record<Exclude<keyof I_43["smoothWeightChangeParams"]["initialPoolWeights"], keyof {
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
                        } & Record<Exclude<keyof I_43["smoothWeightChangeParams"]["targetPoolWeights"][number], keyof _138.PoolAsset>, never>)[] & Record<Exclude<keyof I_43["smoothWeightChangeParams"]["targetPoolWeights"], keyof {
                            token?: {
                                denom?: string;
                                amount?: string;
                            };
                            weight?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_43["smoothWeightChangeParams"], keyof _138.SmoothWeightChangeParams>, never>;
                } & Record<Exclude<keyof I_43, keyof _138.PoolParams>, never>>(object: I_43): _138.PoolParams;
            };
            PoolAsset: {
                encode(message: _138.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.PoolAsset;
                fromJSON(object: any): _138.PoolAsset;
                toJSON(message: _138.PoolAsset): unknown;
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
                } & Record<Exclude<keyof I_44, keyof _138.PoolAsset>, never>>(object: I_44): _138.PoolAsset;
            };
            Pool: {
                encode(message: _138.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Pool;
                fromJSON(object: any): _138.Pool;
                toJSON(message: _138.Pool): unknown;
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
                            } & Record<Exclude<keyof I_45["poolParams"]["smoothWeightChangeParams"]["initialPoolWeights"][number], keyof _138.PoolAsset>, never>)[] & Record<Exclude<keyof I_45["poolParams"]["smoothWeightChangeParams"]["initialPoolWeights"], keyof {
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
                            } & Record<Exclude<keyof I_45["poolParams"]["smoothWeightChangeParams"]["targetPoolWeights"][number], keyof _138.PoolAsset>, never>)[] & Record<Exclude<keyof I_45["poolParams"]["smoothWeightChangeParams"]["targetPoolWeights"], keyof {
                                token?: {
                                    denom?: string;
                                    amount?: string;
                                };
                                weight?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_45["poolParams"]["smoothWeightChangeParams"], keyof _138.SmoothWeightChangeParams>, never>;
                    } & Record<Exclude<keyof I_45["poolParams"], keyof _138.PoolParams>, never>;
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
                    } & Record<Exclude<keyof I_45["poolAssets"][number], keyof _138.PoolAsset>, never>)[] & Record<Exclude<keyof I_45["poolAssets"], keyof {
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        weight?: string;
                    }[]>, never>;
                    totalWeight?: string;
                } & Record<Exclude<keyof I_45, keyof _138.Pool>, never>>(object: I_45): _138.Pool;
            };
        };
    }
    const incentives: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _147.MsgCreateGauge): {
                    type_url: string;
                    value: Uint8Array;
                };
                addToGauge(value: _147.MsgAddToGauge): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _147.MsgCreateGauge): {
                    typeUrl: string;
                    value: _147.MsgCreateGauge;
                };
                addToGauge(value: _147.MsgAddToGauge): {
                    typeUrl: string;
                    value: _147.MsgAddToGauge;
                };
            };
            toJSON: {
                createGauge(value: _147.MsgCreateGauge): {
                    typeUrl: string;
                    value: unknown;
                };
                addToGauge(value: _147.MsgAddToGauge): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                createGauge(value: any): {
                    typeUrl: string;
                    value: _147.MsgCreateGauge;
                };
                addToGauge(value: any): {
                    typeUrl: string;
                    value: _147.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _147.MsgCreateGauge): {
                    typeUrl: string;
                    value: _147.MsgCreateGauge;
                };
                addToGauge(value: _147.MsgAddToGauge): {
                    typeUrl: string;
                    value: _147.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: _147.MsgCreateGauge) => {
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
                }) => _147.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: ({ owner, gaugeId, rewards }: _147.MsgAddToGauge) => {
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
                }) => _147.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            encode(message: _147.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgCreateGauge;
            fromJSON(object: any): _147.MsgCreateGauge;
            toJSON(message: _147.MsgCreateGauge): unknown;
            fromPartial<I extends {
                isPerpetual?: boolean;
                owner?: string;
                distributeTo?: {
                    lockQueryType?: _149.LockQueryType;
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
                    lockQueryType?: _149.LockQueryType;
                    denom?: string;
                    duration?: string;
                    timestamp?: Date;
                } & {
                    lockQueryType?: _149.LockQueryType;
                    denom?: string;
                    duration?: string;
                    timestamp?: Date;
                } & Record<Exclude<keyof I["distributeTo"], keyof _149.QueryCondition>, never>;
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
            } & Record<Exclude<keyof I, keyof _147.MsgCreateGauge>, never>>(object: I): _147.MsgCreateGauge;
        };
        MsgCreateGaugeResponse: {
            encode(_: _147.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgCreateGaugeResponse;
            fromJSON(_: any): _147.MsgCreateGaugeResponse;
            toJSON(_: _147.MsgCreateGaugeResponse): unknown;
            fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _147.MsgCreateGaugeResponse;
        };
        MsgAddToGauge: {
            encode(message: _147.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgAddToGauge;
            fromJSON(object: any): _147.MsgAddToGauge;
            toJSON(message: _147.MsgAddToGauge): unknown;
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
            } & Record<Exclude<keyof I_2, keyof _147.MsgAddToGauge>, never>>(object: I_2): _147.MsgAddToGauge;
        };
        MsgAddToGaugeResponse: {
            encode(_: _147.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgAddToGaugeResponse;
            fromJSON(_: any): _147.MsgAddToGaugeResponse;
            toJSON(_: _147.MsgAddToGaugeResponse): unknown;
            fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _147.MsgAddToGaugeResponse;
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _146.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ModuleToDistributeCoinsRequest;
            fromJSON(_: any): _146.ModuleToDistributeCoinsRequest;
            toJSON(_: _146.ModuleToDistributeCoinsRequest): unknown;
            fromPartial<I_4 extends {} & {} & Record<Exclude<keyof I_4, never>, never>>(_: I_4): _146.ModuleToDistributeCoinsRequest;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _146.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ModuleToDistributeCoinsResponse;
            fromJSON(object: any): _146.ModuleToDistributeCoinsResponse;
            toJSON(message: _146.ModuleToDistributeCoinsResponse): unknown;
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
            } & Record<Exclude<keyof I_5, "coins">, never>>(object: I_5): _146.ModuleToDistributeCoinsResponse;
        };
        ModuleDistributedCoinsRequest: {
            encode(_: _146.ModuleDistributedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ModuleDistributedCoinsRequest;
            fromJSON(_: any): _146.ModuleDistributedCoinsRequest;
            toJSON(_: _146.ModuleDistributedCoinsRequest): unknown;
            fromPartial<I_6 extends {} & {} & Record<Exclude<keyof I_6, never>, never>>(_: I_6): _146.ModuleDistributedCoinsRequest;
        };
        ModuleDistributedCoinsResponse: {
            encode(message: _146.ModuleDistributedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ModuleDistributedCoinsResponse;
            fromJSON(object: any): _146.ModuleDistributedCoinsResponse;
            toJSON(message: _146.ModuleDistributedCoinsResponse): unknown;
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
            } & Record<Exclude<keyof I_7, "coins">, never>>(object: I_7): _146.ModuleDistributedCoinsResponse;
        };
        GaugeByIDRequest: {
            encode(message: _146.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.GaugeByIDRequest;
            fromJSON(object: any): _146.GaugeByIDRequest;
            toJSON(message: _146.GaugeByIDRequest): unknown;
            fromPartial<I_8 extends {
                id?: any;
            } & {
                id?: any;
            } & Record<Exclude<keyof I_8, "id">, never>>(object: I_8): _146.GaugeByIDRequest;
        };
        GaugeByIDResponse: {
            encode(message: _146.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.GaugeByIDResponse;
            fromJSON(object: any): _146.GaugeByIDResponse;
            toJSON(message: _146.GaugeByIDResponse): unknown;
            fromPartial<I_9 extends {
                gauge?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _149.LockQueryType;
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
                        lockQueryType?: _149.LockQueryType;
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
                        lockQueryType?: _149.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    } & {
                        lockQueryType?: _149.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    } & Record<Exclude<keyof I_9["gauge"]["distributeTo"], keyof _149.QueryCondition>, never>;
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
                } & Record<Exclude<keyof I_9["gauge"], keyof _143.Gauge>, never>;
            } & Record<Exclude<keyof I_9, "gauge">, never>>(object: I_9): _146.GaugeByIDResponse;
        };
        GaugesRequest: {
            encode(message: _146.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.GaugesRequest;
            fromJSON(object: any): _146.GaugesRequest;
            toJSON(message: _146.GaugesRequest): unknown;
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
            } & Record<Exclude<keyof I_10, "pagination">, never>>(object: I_10): _146.GaugesRequest;
        };
        GaugesResponse: {
            encode(message: _146.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.GaugesResponse;
            fromJSON(object: any): _146.GaugesResponse;
            toJSON(message: _146.GaugesResponse): unknown;
            fromPartial<I_11 extends {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _149.LockQueryType;
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
                        lockQueryType?: _149.LockQueryType;
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
                        lockQueryType?: _149.LockQueryType;
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
                        lockQueryType?: _149.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    } & {
                        lockQueryType?: _149.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    } & Record<Exclude<keyof I_11["data"][number]["distributeTo"], keyof _149.QueryCondition>, never>;
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
                } & Record<Exclude<keyof I_11["data"][number], keyof _143.Gauge>, never>)[] & Record<Exclude<keyof I_11["data"], keyof {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _149.LockQueryType;
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
            } & Record<Exclude<keyof I_11, keyof _146.GaugesResponse>, never>>(object: I_11): _146.GaugesResponse;
        };
        ActiveGaugesRequest: {
            encode(message: _146.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ActiveGaugesRequest;
            fromJSON(object: any): _146.ActiveGaugesRequest;
            toJSON(message: _146.ActiveGaugesRequest): unknown;
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
            } & Record<Exclude<keyof I_12, "pagination">, never>>(object: I_12): _146.ActiveGaugesRequest;
        };
        ActiveGaugesResponse: {
            encode(message: _146.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ActiveGaugesResponse;
            fromJSON(object: any): _146.ActiveGaugesResponse;
            toJSON(message: _146.ActiveGaugesResponse): unknown;
            fromPartial<I_13 extends {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _149.LockQueryType;
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
                        lockQueryType?: _149.LockQueryType;
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
                        lockQueryType?: _149.LockQueryType;
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
                        lockQueryType?: _149.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    } & {
                        lockQueryType?: _149.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    } & Record<Exclude<keyof I_13["data"][number]["distributeTo"], keyof _149.QueryCondition>, never>;
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
                } & Record<Exclude<keyof I_13["data"][number], keyof _143.Gauge>, never>)[] & Record<Exclude<keyof I_13["data"], keyof {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _149.LockQueryType;
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
            } & Record<Exclude<keyof I_13, keyof _146.ActiveGaugesResponse>, never>>(object: I_13): _146.ActiveGaugesResponse;
        };
        ActiveGaugesPerDenomRequest: {
            encode(message: _146.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ActiveGaugesPerDenomRequest;
            fromJSON(object: any): _146.ActiveGaugesPerDenomRequest;
            toJSON(message: _146.ActiveGaugesPerDenomRequest): unknown;
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
            } & Record<Exclude<keyof I_14, keyof _146.ActiveGaugesPerDenomRequest>, never>>(object: I_14): _146.ActiveGaugesPerDenomRequest;
        };
        ActiveGaugesPerDenomResponse: {
            encode(message: _146.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ActiveGaugesPerDenomResponse;
            fromJSON(object: any): _146.ActiveGaugesPerDenomResponse;
            toJSON(message: _146.ActiveGaugesPerDenomResponse): unknown;
            fromPartial<I_15 extends {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _149.LockQueryType;
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
                        lockQueryType?: _149.LockQueryType;
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
                        lockQueryType?: _149.LockQueryType;
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
                        lockQueryType?: _149.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    } & {
                        lockQueryType?: _149.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    } & Record<Exclude<keyof I_15["data"][number]["distributeTo"], keyof _149.QueryCondition>, never>;
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
                } & Record<Exclude<keyof I_15["data"][number], keyof _143.Gauge>, never>)[] & Record<Exclude<keyof I_15["data"], keyof {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _149.LockQueryType;
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
            } & Record<Exclude<keyof I_15, keyof _146.ActiveGaugesPerDenomResponse>, never>>(object: I_15): _146.ActiveGaugesPerDenomResponse;
        };
        UpcomingGaugesRequest: {
            encode(message: _146.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.UpcomingGaugesRequest;
            fromJSON(object: any): _146.UpcomingGaugesRequest;
            toJSON(message: _146.UpcomingGaugesRequest): unknown;
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
            } & Record<Exclude<keyof I_16, "pagination">, never>>(object: I_16): _146.UpcomingGaugesRequest;
        };
        UpcomingGaugesResponse: {
            encode(message: _146.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.UpcomingGaugesResponse;
            fromJSON(object: any): _146.UpcomingGaugesResponse;
            toJSON(message: _146.UpcomingGaugesResponse): unknown;
            fromPartial<I_17 extends {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _149.LockQueryType;
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
                        lockQueryType?: _149.LockQueryType;
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
                        lockQueryType?: _149.LockQueryType;
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
                        lockQueryType?: _149.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    } & {
                        lockQueryType?: _149.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    } & Record<Exclude<keyof I_17["data"][number]["distributeTo"], keyof _149.QueryCondition>, never>;
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
                } & Record<Exclude<keyof I_17["data"][number], keyof _143.Gauge>, never>)[] & Record<Exclude<keyof I_17["data"], keyof {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _149.LockQueryType;
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
            } & Record<Exclude<keyof I_17, keyof _146.UpcomingGaugesResponse>, never>>(object: I_17): _146.UpcomingGaugesResponse;
        };
        RewardsEstRequest: {
            encode(message: _146.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.RewardsEstRequest;
            fromJSON(object: any): _146.RewardsEstRequest;
            toJSON(message: _146.RewardsEstRequest): unknown;
            fromPartial<I_18 extends {
                owner?: string;
                lockIds?: any[];
                endEpoch?: any;
            } & {
                owner?: string;
                lockIds?: any[] & any[] & Record<Exclude<keyof I_18["lockIds"], keyof any[]>, never>;
                endEpoch?: any;
            } & Record<Exclude<keyof I_18, keyof _146.RewardsEstRequest>, never>>(object: I_18): _146.RewardsEstRequest;
        };
        RewardsEstResponse: {
            encode(message: _146.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.RewardsEstResponse;
            fromJSON(object: any): _146.RewardsEstResponse;
            toJSON(message: _146.RewardsEstResponse): unknown;
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
            } & Record<Exclude<keyof I_19, "coins">, never>>(object: I_19): _146.RewardsEstResponse;
        };
        QueryLockableDurationsRequest: {
            encode(_: _146.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryLockableDurationsRequest;
            fromJSON(_: any): _146.QueryLockableDurationsRequest;
            toJSON(_: _146.QueryLockableDurationsRequest): unknown;
            fromPartial<I_20 extends {} & {} & Record<Exclude<keyof I_20, never>, never>>(_: I_20): _146.QueryLockableDurationsRequest;
        };
        QueryLockableDurationsResponse: {
            encode(message: _146.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryLockableDurationsResponse;
            fromJSON(object: any): _146.QueryLockableDurationsResponse;
            toJSON(message: _146.QueryLockableDurationsResponse): unknown;
            fromPartial<I_21 extends {
                lockableDurations?: string[];
            } & {
                lockableDurations?: string[] & string[] & Record<Exclude<keyof I_21["lockableDurations"], keyof string[]>, never>;
            } & Record<Exclude<keyof I_21, "lockableDurations">, never>>(object: I_21): _146.QueryLockableDurationsResponse;
        };
        Params: {
            encode(message: _145.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Params;
            fromJSON(object: any): _145.Params;
            toJSON(message: _145.Params): unknown;
            fromPartial<I_22 extends {
                distrEpochIdentifier?: string;
            } & {
                distrEpochIdentifier?: string;
            } & Record<Exclude<keyof I_22, "distrEpochIdentifier">, never>>(object: I_22): _145.Params;
        };
        GenesisState: {
            encode(message: _144.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.GenesisState;
            fromJSON(object: any): _144.GenesisState;
            toJSON(message: _144.GenesisState): unknown;
            fromPartial<I_23 extends {
                params?: {
                    distrEpochIdentifier?: string;
                };
                gauges?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _149.LockQueryType;
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
                        lockQueryType?: _149.LockQueryType;
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
                        lockQueryType?: _149.LockQueryType;
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
                        lockQueryType?: _149.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    } & {
                        lockQueryType?: _149.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    } & Record<Exclude<keyof I_23["gauges"][number]["distributeTo"], keyof _149.QueryCondition>, never>;
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
                } & Record<Exclude<keyof I_23["gauges"][number], keyof _143.Gauge>, never>)[] & Record<Exclude<keyof I_23["gauges"], keyof {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _149.LockQueryType;
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
            } & Record<Exclude<keyof I_23, keyof _144.GenesisState>, never>>(object: I_23): _144.GenesisState;
        };
        Gauge: {
            encode(message: _143.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.Gauge;
            fromJSON(object: any): _143.Gauge;
            toJSON(message: _143.Gauge): unknown;
            fromPartial<I_24 extends {
                id?: any;
                isPerpetual?: boolean;
                distributeTo?: {
                    lockQueryType?: _149.LockQueryType;
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
                    lockQueryType?: _149.LockQueryType;
                    denom?: string;
                    duration?: string;
                    timestamp?: Date;
                } & {
                    lockQueryType?: _149.LockQueryType;
                    denom?: string;
                    duration?: string;
                    timestamp?: Date;
                } & Record<Exclude<keyof I_24["distributeTo"], keyof _149.QueryCondition>, never>;
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
            } & Record<Exclude<keyof I_24, keyof _143.Gauge>, never>>(object: I_24): _143.Gauge;
        };
        LockableDurationsInfo: {
            encode(message: _143.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.LockableDurationsInfo;
            fromJSON(object: any): _143.LockableDurationsInfo;
            toJSON(message: _143.LockableDurationsInfo): unknown;
            fromPartial<I_25 extends {
                lockableDurations?: string[];
            } & {
                lockableDurations?: string[] & string[] & Record<Exclude<keyof I_25["lockableDurations"], keyof string[]>, never>;
            } & Record<Exclude<keyof I_25, "lockableDurations">, never>>(object: I_25): _143.LockableDurationsInfo;
        };
    };
    const lockup: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _151.MsgLockTokens): {
                    type_url: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _151.MsgBeginUnlockingAll): {
                    type_url: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _151.MsgBeginUnlocking): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _151.MsgLockTokens): {
                    typeUrl: string;
                    value: _151.MsgLockTokens;
                };
                beginUnlockingAll(value: _151.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _151.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _151.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _151.MsgBeginUnlocking;
                };
            };
            toJSON: {
                lockTokens(value: _151.MsgLockTokens): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlockingAll(value: _151.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlocking(value: _151.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                lockTokens(value: any): {
                    typeUrl: string;
                    value: _151.MsgLockTokens;
                };
                beginUnlockingAll(value: any): {
                    typeUrl: string;
                    value: _151.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: any): {
                    typeUrl: string;
                    value: _151.MsgBeginUnlocking;
                };
            };
            fromPartial: {
                lockTokens(value: _151.MsgLockTokens): {
                    typeUrl: string;
                    value: _151.MsgLockTokens;
                };
                beginUnlockingAll(value: _151.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _151.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _151.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _151.MsgBeginUnlocking;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: ({ owner, duration, coins }: _151.MsgLockTokens) => {
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
                }) => _151.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: ({ owner }: _151.MsgBeginUnlockingAll) => {
                    owner: string;
                };
                fromAmino: ({ owner }: {
                    owner: string;
                }) => _151.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _151.MsgBeginUnlocking) => {
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
                }) => _151.MsgBeginUnlocking;
            };
        };
        MsgLockTokens: {
            encode(message: _151.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgLockTokens;
            fromJSON(object: any): _151.MsgLockTokens;
            toJSON(message: _151.MsgLockTokens): unknown;
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
            } & Record<Exclude<keyof I, keyof _151.MsgLockTokens>, never>>(object: I): _151.MsgLockTokens;
        };
        MsgLockTokensResponse: {
            encode(message: _151.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgLockTokensResponse;
            fromJSON(object: any): _151.MsgLockTokensResponse;
            toJSON(message: _151.MsgLockTokensResponse): unknown;
            fromPartial<I_1 extends {
                ID?: any;
            } & {
                ID?: any;
            } & Record<Exclude<keyof I_1, "ID">, never>>(object: I_1): _151.MsgLockTokensResponse;
        };
        MsgBeginUnlockingAll: {
            encode(message: _151.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgBeginUnlockingAll;
            fromJSON(object: any): _151.MsgBeginUnlockingAll;
            toJSON(message: _151.MsgBeginUnlockingAll): unknown;
            fromPartial<I_2 extends {
                owner?: string;
            } & {
                owner?: string;
            } & Record<Exclude<keyof I_2, "owner">, never>>(object: I_2): _151.MsgBeginUnlockingAll;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _151.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgBeginUnlockingAllResponse;
            fromJSON(object: any): _151.MsgBeginUnlockingAllResponse;
            toJSON(message: _151.MsgBeginUnlockingAllResponse): unknown;
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
                } & Record<Exclude<keyof I_3["unlocks"][number], keyof _149.PeriodLock>, never>)[] & Record<Exclude<keyof I_3["unlocks"], keyof {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_3, "unlocks">, never>>(object: I_3): _151.MsgBeginUnlockingAllResponse;
        };
        MsgBeginUnlocking: {
            encode(message: _151.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgBeginUnlocking;
            fromJSON(object: any): _151.MsgBeginUnlocking;
            toJSON(message: _151.MsgBeginUnlocking): unknown;
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
            } & Record<Exclude<keyof I_4, keyof _151.MsgBeginUnlocking>, never>>(object: I_4): _151.MsgBeginUnlocking;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _151.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgBeginUnlockingResponse;
            fromJSON(object: any): _151.MsgBeginUnlockingResponse;
            toJSON(message: _151.MsgBeginUnlockingResponse): unknown;
            fromPartial<I_5 extends {
                success?: boolean;
            } & {
                success?: boolean;
            } & Record<Exclude<keyof I_5, "success">, never>>(object: I_5): _151.MsgBeginUnlockingResponse;
        };
        ModuleBalanceRequest: {
            encode(_: _150.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ModuleBalanceRequest;
            fromJSON(_: any): _150.ModuleBalanceRequest;
            toJSON(_: _150.ModuleBalanceRequest): unknown;
            fromPartial<I_6 extends {} & {} & Record<Exclude<keyof I_6, never>, never>>(_: I_6): _150.ModuleBalanceRequest;
        };
        ModuleBalanceResponse: {
            encode(message: _150.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ModuleBalanceResponse;
            fromJSON(object: any): _150.ModuleBalanceResponse;
            toJSON(message: _150.ModuleBalanceResponse): unknown;
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
            } & Record<Exclude<keyof I_7, "coins">, never>>(object: I_7): _150.ModuleBalanceResponse;
        };
        ModuleLockedAmountRequest: {
            encode(_: _150.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ModuleLockedAmountRequest;
            fromJSON(_: any): _150.ModuleLockedAmountRequest;
            toJSON(_: _150.ModuleLockedAmountRequest): unknown;
            fromPartial<I_8 extends {} & {} & Record<Exclude<keyof I_8, never>, never>>(_: I_8): _150.ModuleLockedAmountRequest;
        };
        ModuleLockedAmountResponse: {
            encode(message: _150.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ModuleLockedAmountResponse;
            fromJSON(object: any): _150.ModuleLockedAmountResponse;
            toJSON(message: _150.ModuleLockedAmountResponse): unknown;
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
            } & Record<Exclude<keyof I_9, "coins">, never>>(object: I_9): _150.ModuleLockedAmountResponse;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _150.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountUnlockableCoinsRequest;
            fromJSON(object: any): _150.AccountUnlockableCoinsRequest;
            toJSON(message: _150.AccountUnlockableCoinsRequest): unknown;
            fromPartial<I_10 extends {
                owner?: string;
            } & {
                owner?: string;
            } & Record<Exclude<keyof I_10, "owner">, never>>(object: I_10): _150.AccountUnlockableCoinsRequest;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _150.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountUnlockableCoinsResponse;
            fromJSON(object: any): _150.AccountUnlockableCoinsResponse;
            toJSON(message: _150.AccountUnlockableCoinsResponse): unknown;
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
            } & Record<Exclude<keyof I_11, "coins">, never>>(object: I_11): _150.AccountUnlockableCoinsResponse;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _150.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountUnlockingCoinsRequest;
            fromJSON(object: any): _150.AccountUnlockingCoinsRequest;
            toJSON(message: _150.AccountUnlockingCoinsRequest): unknown;
            fromPartial<I_12 extends {
                owner?: string;
            } & {
                owner?: string;
            } & Record<Exclude<keyof I_12, "owner">, never>>(object: I_12): _150.AccountUnlockingCoinsRequest;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _150.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountUnlockingCoinsResponse;
            fromJSON(object: any): _150.AccountUnlockingCoinsResponse;
            toJSON(message: _150.AccountUnlockingCoinsResponse): unknown;
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
            } & Record<Exclude<keyof I_13, "coins">, never>>(object: I_13): _150.AccountUnlockingCoinsResponse;
        };
        AccountLockedCoinsRequest: {
            encode(message: _150.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedCoinsRequest;
            fromJSON(object: any): _150.AccountLockedCoinsRequest;
            toJSON(message: _150.AccountLockedCoinsRequest): unknown;
            fromPartial<I_14 extends {
                owner?: string;
            } & {
                owner?: string;
            } & Record<Exclude<keyof I_14, "owner">, never>>(object: I_14): _150.AccountLockedCoinsRequest;
        };
        AccountLockedCoinsResponse: {
            encode(message: _150.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedCoinsResponse;
            fromJSON(object: any): _150.AccountLockedCoinsResponse;
            toJSON(message: _150.AccountLockedCoinsResponse): unknown;
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
            } & Record<Exclude<keyof I_15, "coins">, never>>(object: I_15): _150.AccountLockedCoinsResponse;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _150.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedPastTimeRequest;
            fromJSON(object: any): _150.AccountLockedPastTimeRequest;
            toJSON(message: _150.AccountLockedPastTimeRequest): unknown;
            fromPartial<I_16 extends {
                owner?: string;
                timestamp?: Date;
            } & {
                owner?: string;
                timestamp?: Date;
            } & Record<Exclude<keyof I_16, keyof _150.AccountLockedPastTimeRequest>, never>>(object: I_16): _150.AccountLockedPastTimeRequest;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _150.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedPastTimeResponse;
            fromJSON(object: any): _150.AccountLockedPastTimeResponse;
            toJSON(message: _150.AccountLockedPastTimeResponse): unknown;
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
                } & Record<Exclude<keyof I_17["locks"][number], keyof _149.PeriodLock>, never>)[] & Record<Exclude<keyof I_17["locks"], keyof {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_17, "locks">, never>>(object: I_17): _150.AccountLockedPastTimeResponse;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _150.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromJSON(object: any): _150.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toJSON(message: _150.AccountLockedPastTimeNotUnlockingOnlyRequest): unknown;
            fromPartial<I_18 extends {
                owner?: string;
                timestamp?: Date;
            } & {
                owner?: string;
                timestamp?: Date;
            } & Record<Exclude<keyof I_18, keyof _150.AccountLockedPastTimeNotUnlockingOnlyRequest>, never>>(object: I_18): _150.AccountLockedPastTimeNotUnlockingOnlyRequest;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _150.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromJSON(object: any): _150.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toJSON(message: _150.AccountLockedPastTimeNotUnlockingOnlyResponse): unknown;
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
                } & Record<Exclude<keyof I_19["locks"][number], keyof _149.PeriodLock>, never>)[] & Record<Exclude<keyof I_19["locks"], keyof {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_19, "locks">, never>>(object: I_19): _150.AccountLockedPastTimeNotUnlockingOnlyResponse;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _150.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountUnlockedBeforeTimeRequest;
            fromJSON(object: any): _150.AccountUnlockedBeforeTimeRequest;
            toJSON(message: _150.AccountUnlockedBeforeTimeRequest): unknown;
            fromPartial<I_20 extends {
                owner?: string;
                timestamp?: Date;
            } & {
                owner?: string;
                timestamp?: Date;
            } & Record<Exclude<keyof I_20, keyof _150.AccountUnlockedBeforeTimeRequest>, never>>(object: I_20): _150.AccountUnlockedBeforeTimeRequest;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _150.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountUnlockedBeforeTimeResponse;
            fromJSON(object: any): _150.AccountUnlockedBeforeTimeResponse;
            toJSON(message: _150.AccountUnlockedBeforeTimeResponse): unknown;
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
                } & Record<Exclude<keyof I_21["locks"][number], keyof _149.PeriodLock>, never>)[] & Record<Exclude<keyof I_21["locks"], keyof {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_21, "locks">, never>>(object: I_21): _150.AccountUnlockedBeforeTimeResponse;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _150.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedPastTimeDenomRequest;
            fromJSON(object: any): _150.AccountLockedPastTimeDenomRequest;
            toJSON(message: _150.AccountLockedPastTimeDenomRequest): unknown;
            fromPartial<I_22 extends {
                owner?: string;
                timestamp?: Date;
                denom?: string;
            } & {
                owner?: string;
                timestamp?: Date;
                denom?: string;
            } & Record<Exclude<keyof I_22, keyof _150.AccountLockedPastTimeDenomRequest>, never>>(object: I_22): _150.AccountLockedPastTimeDenomRequest;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _150.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedPastTimeDenomResponse;
            fromJSON(object: any): _150.AccountLockedPastTimeDenomResponse;
            toJSON(message: _150.AccountLockedPastTimeDenomResponse): unknown;
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
                } & Record<Exclude<keyof I_23["locks"][number], keyof _149.PeriodLock>, never>)[] & Record<Exclude<keyof I_23["locks"], keyof {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_23, "locks">, never>>(object: I_23): _150.AccountLockedPastTimeDenomResponse;
        };
        LockedDenomRequest: {
            encode(message: _150.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.LockedDenomRequest;
            fromJSON(object: any): _150.LockedDenomRequest;
            toJSON(message: _150.LockedDenomRequest): unknown;
            fromPartial<I_24 extends {
                denom?: string;
                duration?: string;
            } & {
                denom?: string;
                duration?: string;
            } & Record<Exclude<keyof I_24, keyof _150.LockedDenomRequest>, never>>(object: I_24): _150.LockedDenomRequest;
        };
        LockedDenomResponse: {
            encode(message: _150.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.LockedDenomResponse;
            fromJSON(object: any): _150.LockedDenomResponse;
            toJSON(message: _150.LockedDenomResponse): unknown;
            fromPartial<I_25 extends {
                amount?: string;
            } & {
                amount?: string;
            } & Record<Exclude<keyof I_25, "amount">, never>>(object: I_25): _150.LockedDenomResponse;
        };
        LockedRequest: {
            encode(message: _150.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.LockedRequest;
            fromJSON(object: any): _150.LockedRequest;
            toJSON(message: _150.LockedRequest): unknown;
            fromPartial<I_26 extends {
                lockId?: any;
            } & {
                lockId?: any;
            } & Record<Exclude<keyof I_26, "lockId">, never>>(object: I_26): _150.LockedRequest;
        };
        LockedResponse: {
            encode(message: _150.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.LockedResponse;
            fromJSON(object: any): _150.LockedResponse;
            toJSON(message: _150.LockedResponse): unknown;
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
                } & Record<Exclude<keyof I_27["lock"], keyof _149.PeriodLock>, never>;
            } & Record<Exclude<keyof I_27, "lock">, never>>(object: I_27): _150.LockedResponse;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _150.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.SyntheticLockupsByLockupIDRequest;
            fromJSON(object: any): _150.SyntheticLockupsByLockupIDRequest;
            toJSON(message: _150.SyntheticLockupsByLockupIDRequest): unknown;
            fromPartial<I_28 extends {
                lockId?: any;
            } & {
                lockId?: any;
            } & Record<Exclude<keyof I_28, "lockId">, never>>(object: I_28): _150.SyntheticLockupsByLockupIDRequest;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _150.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.SyntheticLockupsByLockupIDResponse;
            fromJSON(object: any): _150.SyntheticLockupsByLockupIDResponse;
            toJSON(message: _150.SyntheticLockupsByLockupIDResponse): unknown;
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
                } & Record<Exclude<keyof I_29["syntheticLocks"][number], keyof _149.SyntheticLock>, never>)[] & Record<Exclude<keyof I_29["syntheticLocks"], keyof {
                    underlyingLockId?: any;
                    synthDenom?: string;
                    endTime?: Date;
                    duration?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I_29, "syntheticLocks">, never>>(object: I_29): _150.SyntheticLockupsByLockupIDResponse;
        };
        AccountLockedLongerDurationRequest: {
            encode(message: _150.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedLongerDurationRequest;
            fromJSON(object: any): _150.AccountLockedLongerDurationRequest;
            toJSON(message: _150.AccountLockedLongerDurationRequest): unknown;
            fromPartial<I_30 extends {
                owner?: string;
                duration?: string;
            } & {
                owner?: string;
                duration?: string;
            } & Record<Exclude<keyof I_30, keyof _150.AccountLockedLongerDurationRequest>, never>>(object: I_30): _150.AccountLockedLongerDurationRequest;
        };
        AccountLockedLongerDurationResponse: {
            encode(message: _150.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedLongerDurationResponse;
            fromJSON(object: any): _150.AccountLockedLongerDurationResponse;
            toJSON(message: _150.AccountLockedLongerDurationResponse): unknown;
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
                } & Record<Exclude<keyof I_31["locks"][number], keyof _149.PeriodLock>, never>)[] & Record<Exclude<keyof I_31["locks"], keyof {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_31, "locks">, never>>(object: I_31): _150.AccountLockedLongerDurationResponse;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            encode(message: _150.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromJSON(object: any): _150.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toJSON(message: _150.AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown;
            fromPartial<I_32 extends {
                owner?: string;
                duration?: string;
            } & {
                owner?: string;
                duration?: string;
            } & Record<Exclude<keyof I_32, keyof _150.AccountLockedLongerDurationNotUnlockingOnlyRequest>, never>>(object: I_32): _150.AccountLockedLongerDurationNotUnlockingOnlyRequest;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            encode(message: _150.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromJSON(object: any): _150.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toJSON(message: _150.AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown;
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
                } & Record<Exclude<keyof I_33["locks"][number], keyof _149.PeriodLock>, never>)[] & Record<Exclude<keyof I_33["locks"], keyof {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_33, "locks">, never>>(object: I_33): _150.AccountLockedLongerDurationNotUnlockingOnlyResponse;
        };
        AccountLockedLongerDurationDenomRequest: {
            encode(message: _150.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedLongerDurationDenomRequest;
            fromJSON(object: any): _150.AccountLockedLongerDurationDenomRequest;
            toJSON(message: _150.AccountLockedLongerDurationDenomRequest): unknown;
            fromPartial<I_34 extends {
                owner?: string;
                duration?: string;
                denom?: string;
            } & {
                owner?: string;
                duration?: string;
                denom?: string;
            } & Record<Exclude<keyof I_34, keyof _150.AccountLockedLongerDurationDenomRequest>, never>>(object: I_34): _150.AccountLockedLongerDurationDenomRequest;
        };
        AccountLockedLongerDurationDenomResponse: {
            encode(message: _150.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedLongerDurationDenomResponse;
            fromJSON(object: any): _150.AccountLockedLongerDurationDenomResponse;
            toJSON(message: _150.AccountLockedLongerDurationDenomResponse): unknown;
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
                } & Record<Exclude<keyof I_35["locks"][number], keyof _149.PeriodLock>, never>)[] & Record<Exclude<keyof I_35["locks"], keyof {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_35, "locks">, never>>(object: I_35): _150.AccountLockedLongerDurationDenomResponse;
        };
        lockQueryTypeFromJSON(object: any): _149.LockQueryType;
        lockQueryTypeToJSON(object: _149.LockQueryType): string;
        LockQueryType: typeof _149.LockQueryType;
        PeriodLock: {
            encode(message: _149.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.PeriodLock;
            fromJSON(object: any): _149.PeriodLock;
            toJSON(message: _149.PeriodLock): unknown;
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
            } & Record<Exclude<keyof I_36, keyof _149.PeriodLock>, never>>(object: I_36): _149.PeriodLock;
        };
        QueryCondition: {
            encode(message: _149.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.QueryCondition;
            fromJSON(object: any): _149.QueryCondition;
            toJSON(message: _149.QueryCondition): unknown;
            fromPartial<I_37 extends {
                lockQueryType?: _149.LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            } & {
                lockQueryType?: _149.LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            } & Record<Exclude<keyof I_37, keyof _149.QueryCondition>, never>>(object: I_37): _149.QueryCondition;
        };
        SyntheticLock: {
            encode(message: _149.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.SyntheticLock;
            fromJSON(object: any): _149.SyntheticLock;
            toJSON(message: _149.SyntheticLock): unknown;
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
            } & Record<Exclude<keyof I_38, keyof _149.SyntheticLock>, never>>(object: I_38): _149.SyntheticLock;
        };
        GenesisState: {
            encode(message: _148.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.GenesisState;
            fromJSON(object: any): _148.GenesisState;
            toJSON(message: _148.GenesisState): unknown;
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
                } & Record<Exclude<keyof I_39["locks"][number], keyof _149.PeriodLock>, never>)[] & Record<Exclude<keyof I_39["locks"], keyof {
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
                } & Record<Exclude<keyof I_39["syntheticLocks"][number], keyof _149.SyntheticLock>, never>)[] & Record<Exclude<keyof I_39["syntheticLocks"], keyof {
                    underlyingLockId?: any;
                    synthDenom?: string;
                    endTime?: Date;
                    duration?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I_39, keyof _148.GenesisState>, never>>(object: I_39): _148.GenesisState;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _154.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryParamsRequest;
                fromJSON(_: any): _154.QueryParamsRequest;
                toJSON(_: _154.QueryParamsRequest): unknown;
                fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): _154.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _154.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryParamsResponse;
                fromJSON(object: any): _154.QueryParamsResponse;
                toJSON(message: _154.QueryParamsResponse): unknown;
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
                        } & Record<Exclude<keyof I_1["params"]["distributionProportions"], keyof _153.DistributionProportions>, never>;
                        weightedDeveloperRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[] & ({
                            address?: string;
                            weight?: string;
                        } & {
                            address?: string;
                            weight?: string;
                        } & Record<Exclude<keyof I_1["params"]["weightedDeveloperRewardsReceivers"][number], keyof _153.WeightedAddress>, never>)[] & Record<Exclude<keyof I_1["params"]["weightedDeveloperRewardsReceivers"], keyof {
                            address?: string;
                            weight?: string;
                        }[]>, never>;
                        mintingRewardsDistributionStartEpoch?: any;
                    } & Record<Exclude<keyof I_1["params"], keyof _153.Params>, never>;
                } & Record<Exclude<keyof I_1, "params">, never>>(object: I_1): _154.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _154.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryEpochProvisionsRequest;
                fromJSON(_: any): _154.QueryEpochProvisionsRequest;
                toJSON(_: _154.QueryEpochProvisionsRequest): unknown;
                fromPartial<I_2 extends {} & {} & Record<Exclude<keyof I_2, never>, never>>(_: I_2): _154.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _154.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryEpochProvisionsResponse;
                fromJSON(object: any): _154.QueryEpochProvisionsResponse;
                toJSON(message: _154.QueryEpochProvisionsResponse): unknown;
                fromPartial<I_3 extends {
                    epochProvisions?: Uint8Array;
                } & {
                    epochProvisions?: Uint8Array;
                } & Record<Exclude<keyof I_3, "epochProvisions">, never>>(object: I_3): _154.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _153.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Minter;
                fromJSON(object: any): _153.Minter;
                toJSON(message: _153.Minter): unknown;
                fromPartial<I_4 extends {
                    epochProvisions?: string;
                } & {
                    epochProvisions?: string;
                } & Record<Exclude<keyof I_4, "epochProvisions">, never>>(object: I_4): _153.Minter;
            };
            WeightedAddress: {
                encode(message: _153.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.WeightedAddress;
                fromJSON(object: any): _153.WeightedAddress;
                toJSON(message: _153.WeightedAddress): unknown;
                fromPartial<I_5 extends {
                    address?: string;
                    weight?: string;
                } & {
                    address?: string;
                    weight?: string;
                } & Record<Exclude<keyof I_5, keyof _153.WeightedAddress>, never>>(object: I_5): _153.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _153.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.DistributionProportions;
                fromJSON(object: any): _153.DistributionProportions;
                toJSON(message: _153.DistributionProportions): unknown;
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
                } & Record<Exclude<keyof I_6, keyof _153.DistributionProportions>, never>>(object: I_6): _153.DistributionProportions;
            };
            Params: {
                encode(message: _153.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Params;
                fromJSON(object: any): _153.Params;
                toJSON(message: _153.Params): unknown;
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
                    } & Record<Exclude<keyof I_7["distributionProportions"], keyof _153.DistributionProportions>, never>;
                    weightedDeveloperRewardsReceivers?: {
                        address?: string;
                        weight?: string;
                    }[] & ({
                        address?: string;
                        weight?: string;
                    } & {
                        address?: string;
                        weight?: string;
                    } & Record<Exclude<keyof I_7["weightedDeveloperRewardsReceivers"][number], keyof _153.WeightedAddress>, never>)[] & Record<Exclude<keyof I_7["weightedDeveloperRewardsReceivers"], keyof {
                        address?: string;
                        weight?: string;
                    }[]>, never>;
                    mintingRewardsDistributionStartEpoch?: any;
                } & Record<Exclude<keyof I_7, keyof _153.Params>, never>>(object: I_7): _153.Params;
            };
            GenesisState: {
                encode(message: _152.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.GenesisState;
                fromJSON(object: any): _152.GenesisState;
                toJSON(message: _152.GenesisState): unknown;
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
                        } & Record<Exclude<keyof I_8["params"]["distributionProportions"], keyof _153.DistributionProportions>, never>;
                        weightedDeveloperRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[] & ({
                            address?: string;
                            weight?: string;
                        } & {
                            address?: string;
                            weight?: string;
                        } & Record<Exclude<keyof I_8["params"]["weightedDeveloperRewardsReceivers"][number], keyof _153.WeightedAddress>, never>)[] & Record<Exclude<keyof I_8["params"]["weightedDeveloperRewardsReceivers"], keyof {
                            address?: string;
                            weight?: string;
                        }[]>, never>;
                        mintingRewardsDistributionStartEpoch?: any;
                    } & Record<Exclude<keyof I_8["params"], keyof _153.Params>, never>;
                    halvenStartedEpoch?: any;
                } & Record<Exclude<keyof I_8, keyof _152.GenesisState>, never>>(object: I_8): _152.GenesisState;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryGaugeIdsRequest: {
                encode(message: _158.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryGaugeIdsRequest;
                fromJSON(object: any): _158.QueryGaugeIdsRequest;
                toJSON(message: _158.QueryGaugeIdsRequest): unknown;
                fromPartial<I extends {
                    poolId?: any;
                } & {
                    poolId?: any;
                } & Record<Exclude<keyof I, "poolId">, never>>(object: I): _158.QueryGaugeIdsRequest;
            };
            QueryGaugeIdsResponse: {
                encode(message: _158.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryGaugeIdsResponse;
                fromJSON(object: any): _158.QueryGaugeIdsResponse;
                toJSON(message: _158.QueryGaugeIdsResponse): unknown;
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
                    } & Record<Exclude<keyof I_1["gaugeIdsWithDuration"][number], keyof _158.QueryGaugeIdsResponse_GaugeIdWithDuration>, never>)[] & Record<Exclude<keyof I_1["gaugeIdsWithDuration"], keyof {
                        gaugeId?: any;
                        duration?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_1, "gaugeIdsWithDuration">, never>>(object: I_1): _158.QueryGaugeIdsResponse;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                encode(message: _158.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromJSON(object: any): _158.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toJSON(message: _158.QueryGaugeIdsResponse_GaugeIdWithDuration): unknown;
                fromPartial<I_2 extends {
                    gaugeId?: any;
                    duration?: string;
                } & {
                    gaugeId?: any;
                    duration?: string;
                } & Record<Exclude<keyof I_2, keyof _158.QueryGaugeIdsResponse_GaugeIdWithDuration>, never>>(object: I_2): _158.QueryGaugeIdsResponse_GaugeIdWithDuration;
            };
            QueryDistrInfoRequest: {
                encode(_: _158.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryDistrInfoRequest;
                fromJSON(_: any): _158.QueryDistrInfoRequest;
                toJSON(_: _158.QueryDistrInfoRequest): unknown;
                fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _158.QueryDistrInfoRequest;
            };
            QueryDistrInfoResponse: {
                encode(message: _158.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryDistrInfoResponse;
                fromJSON(object: any): _158.QueryDistrInfoResponse;
                toJSON(message: _158.QueryDistrInfoResponse): unknown;
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
                        } & Record<Exclude<keyof I_4["distrInfo"]["records"][number], keyof _157.DistrRecord>, never>)[] & Record<Exclude<keyof I_4["distrInfo"]["records"], keyof {
                            gaugeId?: any;
                            weight?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_4["distrInfo"], keyof _157.DistrInfo>, never>;
                } & Record<Exclude<keyof I_4, "distrInfo">, never>>(object: I_4): _158.QueryDistrInfoResponse;
            };
            QueryParamsRequest: {
                encode(_: _158.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryParamsRequest;
                fromJSON(_: any): _158.QueryParamsRequest;
                toJSON(_: _158.QueryParamsRequest): unknown;
                fromPartial<I_5 extends {} & {} & Record<Exclude<keyof I_5, never>, never>>(_: I_5): _158.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _158.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryParamsResponse;
                fromJSON(object: any): _158.QueryParamsResponse;
                toJSON(message: _158.QueryParamsResponse): unknown;
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
                } & Record<Exclude<keyof I_6, "params">, never>>(object: I_6): _158.QueryParamsResponse;
            };
            QueryLockableDurationsRequest: {
                encode(_: _158.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryLockableDurationsRequest;
                fromJSON(_: any): _158.QueryLockableDurationsRequest;
                toJSON(_: _158.QueryLockableDurationsRequest): unknown;
                fromPartial<I_7 extends {} & {} & Record<Exclude<keyof I_7, never>, never>>(_: I_7): _158.QueryLockableDurationsRequest;
            };
            QueryLockableDurationsResponse: {
                encode(message: _158.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryLockableDurationsResponse;
                fromJSON(object: any): _158.QueryLockableDurationsResponse;
                toJSON(message: _158.QueryLockableDurationsResponse): unknown;
                fromPartial<I_8 extends {
                    lockableDurations?: string[];
                } & {
                    lockableDurations?: string[] & string[] & Record<Exclude<keyof I_8["lockableDurations"], keyof string[]>, never>;
                } & Record<Exclude<keyof I_8, "lockableDurations">, never>>(object: I_8): _158.QueryLockableDurationsResponse;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _158.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryIncentivizedPoolsRequest;
                fromJSON(_: any): _158.QueryIncentivizedPoolsRequest;
                toJSON(_: _158.QueryIncentivizedPoolsRequest): unknown;
                fromPartial<I_9 extends {} & {} & Record<Exclude<keyof I_9, never>, never>>(_: I_9): _158.QueryIncentivizedPoolsRequest;
            };
            IncentivizedPool: {
                encode(message: _158.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.IncentivizedPool;
                fromJSON(object: any): _158.IncentivizedPool;
                toJSON(message: _158.IncentivizedPool): unknown;
                fromPartial<I_10 extends {
                    poolId?: any;
                    lockableDuration?: string;
                    gaugeId?: any;
                } & {
                    poolId?: any;
                    lockableDuration?: string;
                    gaugeId?: any;
                } & Record<Exclude<keyof I_10, keyof _158.IncentivizedPool>, never>>(object: I_10): _158.IncentivizedPool;
            };
            QueryIncentivizedPoolsResponse: {
                encode(message: _158.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryIncentivizedPoolsResponse;
                fromJSON(object: any): _158.QueryIncentivizedPoolsResponse;
                toJSON(message: _158.QueryIncentivizedPoolsResponse): unknown;
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
                    } & Record<Exclude<keyof I_11["incentivizedPools"][number], keyof _158.IncentivizedPool>, never>)[] & Record<Exclude<keyof I_11["incentivizedPools"], keyof {
                        poolId?: any;
                        lockableDuration?: string;
                        gaugeId?: any;
                    }[]>, never>;
                } & Record<Exclude<keyof I_11, "incentivizedPools">, never>>(object: I_11): _158.QueryIncentivizedPoolsResponse;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _158.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryExternalIncentiveGaugesRequest;
                fromJSON(_: any): _158.QueryExternalIncentiveGaugesRequest;
                toJSON(_: _158.QueryExternalIncentiveGaugesRequest): unknown;
                fromPartial<I_12 extends {} & {} & Record<Exclude<keyof I_12, never>, never>>(_: I_12): _158.QueryExternalIncentiveGaugesRequest;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _158.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryExternalIncentiveGaugesResponse;
                fromJSON(object: any): _158.QueryExternalIncentiveGaugesResponse;
                toJSON(message: _158.QueryExternalIncentiveGaugesResponse): unknown;
                fromPartial<I_13 extends {
                    data?: {
                        id?: any;
                        isPerpetual?: boolean;
                        distributeTo?: {
                            lockQueryType?: _149.LockQueryType;
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
                            lockQueryType?: _149.LockQueryType;
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
                            lockQueryType?: _149.LockQueryType;
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
                            lockQueryType?: _149.LockQueryType;
                            denom?: string;
                            duration?: string;
                            timestamp?: Date;
                        } & {
                            lockQueryType?: _149.LockQueryType;
                            denom?: string;
                            duration?: string;
                            timestamp?: Date;
                        } & Record<Exclude<keyof I_13["data"][number]["distributeTo"], keyof _149.QueryCondition>, never>;
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
                    } & Record<Exclude<keyof I_13["data"][number], keyof _143.Gauge>, never>)[] & Record<Exclude<keyof I_13["data"], keyof {
                        id?: any;
                        isPerpetual?: boolean;
                        distributeTo?: {
                            lockQueryType?: _149.LockQueryType;
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
                } & Record<Exclude<keyof I_13, "data">, never>>(object: I_13): _158.QueryExternalIncentiveGaugesResponse;
            };
            Params: {
                encode(message: _157.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Params;
                fromJSON(object: any): _157.Params;
                toJSON(message: _157.Params): unknown;
                fromPartial<I_14 extends {
                    mintedDenom?: string;
                } & {
                    mintedDenom?: string;
                } & Record<Exclude<keyof I_14, "mintedDenom">, never>>(object: I_14): _157.Params;
            };
            LockableDurationsInfo: {
                encode(message: _157.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.LockableDurationsInfo;
                fromJSON(object: any): _157.LockableDurationsInfo;
                toJSON(message: _157.LockableDurationsInfo): unknown;
                fromPartial<I_15 extends {
                    lockableDurations?: string[];
                } & {
                    lockableDurations?: string[] & string[] & Record<Exclude<keyof I_15["lockableDurations"], keyof string[]>, never>;
                } & Record<Exclude<keyof I_15, "lockableDurations">, never>>(object: I_15): _157.LockableDurationsInfo;
            };
            DistrInfo: {
                encode(message: _157.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.DistrInfo;
                fromJSON(object: any): _157.DistrInfo;
                toJSON(message: _157.DistrInfo): unknown;
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
                    } & Record<Exclude<keyof I_16["records"][number], keyof _157.DistrRecord>, never>)[] & Record<Exclude<keyof I_16["records"], keyof {
                        gaugeId?: any;
                        weight?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_16, keyof _157.DistrInfo>, never>>(object: I_16): _157.DistrInfo;
            };
            DistrRecord: {
                encode(message: _157.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.DistrRecord;
                fromJSON(object: any): _157.DistrRecord;
                toJSON(message: _157.DistrRecord): unknown;
                fromPartial<I_17 extends {
                    gaugeId?: any;
                    weight?: string;
                } & {
                    gaugeId?: any;
                    weight?: string;
                } & Record<Exclude<keyof I_17, keyof _157.DistrRecord>, never>>(object: I_17): _157.DistrRecord;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _156.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ReplacePoolIncentivesProposal;
                fromJSON(object: any): _156.ReplacePoolIncentivesProposal;
                toJSON(message: _156.ReplacePoolIncentivesProposal): unknown;
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
                    } & Record<Exclude<keyof I_18["records"][number], keyof _157.DistrRecord>, never>)[] & Record<Exclude<keyof I_18["records"], keyof {
                        gaugeId?: any;
                        weight?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_18, keyof _156.ReplacePoolIncentivesProposal>, never>>(object: I_18): _156.ReplacePoolIncentivesProposal;
            };
            UpdatePoolIncentivesProposal: {
                encode(message: _156.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.UpdatePoolIncentivesProposal;
                fromJSON(object: any): _156.UpdatePoolIncentivesProposal;
                toJSON(message: _156.UpdatePoolIncentivesProposal): unknown;
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
                    } & Record<Exclude<keyof I_19["records"][number], keyof _157.DistrRecord>, never>)[] & Record<Exclude<keyof I_19["records"], keyof {
                        gaugeId?: any;
                        weight?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_19, keyof _156.UpdatePoolIncentivesProposal>, never>>(object: I_19): _156.UpdatePoolIncentivesProposal;
            };
            GenesisState: {
                encode(message: _155.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.GenesisState;
                fromJSON(object: any): _155.GenesisState;
                toJSON(message: _155.GenesisState): unknown;
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
                        } & Record<Exclude<keyof I_20["distrInfo"]["records"][number], keyof _157.DistrRecord>, never>)[] & Record<Exclude<keyof I_20["distrInfo"]["records"], keyof {
                            gaugeId?: any;
                            weight?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_20["distrInfo"], keyof _157.DistrInfo>, never>;
                } & Record<Exclude<keyof I_20, keyof _155.GenesisState>, never>>(object: I_20): _155.GenesisState;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                encode(message: _159.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Node;
                fromJSON(object: any): _159.Node;
                toJSON(message: _159.Node): unknown;
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
                    } & Record<Exclude<keyof I["children"][number], keyof _159.Child>, never>)[] & Record<Exclude<keyof I["children"], keyof {
                        index?: Uint8Array;
                        accumulation?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I, "children">, never>>(object: I): _159.Node;
            };
            Child: {
                encode(message: _159.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Child;
                fromJSON(object: any): _159.Child;
                toJSON(message: _159.Child): unknown;
                fromPartial<I_1 extends {
                    index?: Uint8Array;
                    accumulation?: string;
                } & {
                    index?: Uint8Array;
                    accumulation?: string;
                } & Record<Exclude<keyof I_1, keyof _159.Child>, never>>(object: I_1): _159.Child;
            };
            Leaf: {
                encode(message: _159.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Leaf;
                fromJSON(object: any): _159.Leaf;
                toJSON(message: _159.Leaf): unknown;
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
                    } & Record<Exclude<keyof I_2["leaf"], keyof _159.Child>, never>;
                } & Record<Exclude<keyof I_2, "leaf">, never>>(object: I_2): _159.Leaf;
            };
        };
    }
    const superfluid: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _164.MsgSuperfluidDelegate): {
                    type_url: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _164.MsgSuperfluidUndelegate): {
                    type_url: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _164.MsgSuperfluidUnbondLock): {
                    type_url: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _164.MsgLockAndSuperfluidDelegate): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _164.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _164.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _164.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _164.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _164.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _164.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _164.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _164.MsgLockAndSuperfluidDelegate;
                };
            };
            toJSON: {
                superfluidDelegate(value: _164.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUndelegate(value: _164.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUnbondLock(value: _164.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: unknown;
                };
                lockAndSuperfluidDelegate(value: _164.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                superfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _164.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: any): {
                    typeUrl: string;
                    value: _164.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: any): {
                    typeUrl: string;
                    value: _164.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _164.MsgLockAndSuperfluidDelegate;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _164.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _164.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _164.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _164.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _164.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _164.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _164.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _164.MsgLockAndSuperfluidDelegate;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId, valAddr }: _164.MsgSuperfluidDelegate) => {
                    sender: string;
                    lockId: string;
                    valAddr: string;
                };
                fromAmino: ({ sender, lockId, valAddr }: {
                    sender: string;
                    lockId: string;
                    valAddr: string;
                }) => _164.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _164.MsgSuperfluidUndelegate) => {
                    sender: string;
                    lockId: string;
                };
                fromAmino: ({ sender, lockId }: {
                    sender: string;
                    lockId: string;
                }) => _164.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _164.MsgSuperfluidUnbondLock) => {
                    sender: string;
                    lockId: string;
                };
                fromAmino: ({ sender, lockId }: {
                    sender: string;
                    lockId: string;
                }) => _164.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, coins, valAddr }: _164.MsgLockAndSuperfluidDelegate) => {
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
                }) => _164.MsgLockAndSuperfluidDelegate;
            };
        };
        MsgSuperfluidDelegate: {
            encode(message: _164.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgSuperfluidDelegate;
            fromJSON(object: any): _164.MsgSuperfluidDelegate;
            toJSON(message: _164.MsgSuperfluidDelegate): unknown;
            fromPartial<I extends {
                sender?: string;
                lockId?: any;
                valAddr?: string;
            } & {
                sender?: string;
                lockId?: any;
                valAddr?: string;
            } & Record<Exclude<keyof I, keyof _164.MsgSuperfluidDelegate>, never>>(object: I): _164.MsgSuperfluidDelegate;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _164.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgSuperfluidDelegateResponse;
            fromJSON(_: any): _164.MsgSuperfluidDelegateResponse;
            toJSON(_: _164.MsgSuperfluidDelegateResponse): unknown;
            fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _164.MsgSuperfluidDelegateResponse;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _164.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgSuperfluidUndelegate;
            fromJSON(object: any): _164.MsgSuperfluidUndelegate;
            toJSON(message: _164.MsgSuperfluidUndelegate): unknown;
            fromPartial<I_2 extends {
                sender?: string;
                lockId?: any;
            } & {
                sender?: string;
                lockId?: any;
            } & Record<Exclude<keyof I_2, keyof _164.MsgSuperfluidUndelegate>, never>>(object: I_2): _164.MsgSuperfluidUndelegate;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _164.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgSuperfluidUndelegateResponse;
            fromJSON(_: any): _164.MsgSuperfluidUndelegateResponse;
            toJSON(_: _164.MsgSuperfluidUndelegateResponse): unknown;
            fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _164.MsgSuperfluidUndelegateResponse;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _164.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgSuperfluidUnbondLock;
            fromJSON(object: any): _164.MsgSuperfluidUnbondLock;
            toJSON(message: _164.MsgSuperfluidUnbondLock): unknown;
            fromPartial<I_4 extends {
                sender?: string;
                lockId?: any;
            } & {
                sender?: string;
                lockId?: any;
            } & Record<Exclude<keyof I_4, keyof _164.MsgSuperfluidUnbondLock>, never>>(object: I_4): _164.MsgSuperfluidUnbondLock;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _164.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgSuperfluidUnbondLockResponse;
            fromJSON(_: any): _164.MsgSuperfluidUnbondLockResponse;
            toJSON(_: _164.MsgSuperfluidUnbondLockResponse): unknown;
            fromPartial<I_5 extends {} & {} & Record<Exclude<keyof I_5, never>, never>>(_: I_5): _164.MsgSuperfluidUnbondLockResponse;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _164.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgLockAndSuperfluidDelegate;
            fromJSON(object: any): _164.MsgLockAndSuperfluidDelegate;
            toJSON(message: _164.MsgLockAndSuperfluidDelegate): unknown;
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
            } & Record<Exclude<keyof I_6, keyof _164.MsgLockAndSuperfluidDelegate>, never>>(object: I_6): _164.MsgLockAndSuperfluidDelegate;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _164.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgLockAndSuperfluidDelegateResponse;
            fromJSON(object: any): _164.MsgLockAndSuperfluidDelegateResponse;
            toJSON(message: _164.MsgLockAndSuperfluidDelegateResponse): unknown;
            fromPartial<I_7 extends {
                ID?: any;
            } & {
                ID?: any;
            } & Record<Exclude<keyof I_7, "ID">, never>>(object: I_7): _164.MsgLockAndSuperfluidDelegateResponse;
        };
        superfluidAssetTypeFromJSON(object: any): _163.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _163.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _163.SuperfluidAssetType;
        SuperfluidAsset: {
            encode(message: _163.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.SuperfluidAsset;
            fromJSON(object: any): _163.SuperfluidAsset;
            toJSON(message: _163.SuperfluidAsset): unknown;
            fromPartial<I_8 extends {
                denom?: string;
                assetType?: _163.SuperfluidAssetType;
            } & {
                denom?: string;
                assetType?: _163.SuperfluidAssetType;
            } & Record<Exclude<keyof I_8, keyof _163.SuperfluidAsset>, never>>(object: I_8): _163.SuperfluidAsset;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _163.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.SuperfluidIntermediaryAccount;
            fromJSON(object: any): _163.SuperfluidIntermediaryAccount;
            toJSON(message: _163.SuperfluidIntermediaryAccount): unknown;
            fromPartial<I_9 extends {
                denom?: string;
                valAddr?: string;
                gaugeId?: any;
            } & {
                denom?: string;
                valAddr?: string;
                gaugeId?: any;
            } & Record<Exclude<keyof I_9, keyof _163.SuperfluidIntermediaryAccount>, never>>(object: I_9): _163.SuperfluidIntermediaryAccount;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _163.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.OsmoEquivalentMultiplierRecord;
            fromJSON(object: any): _163.OsmoEquivalentMultiplierRecord;
            toJSON(message: _163.OsmoEquivalentMultiplierRecord): unknown;
            fromPartial<I_10 extends {
                epochNumber?: any;
                denom?: string;
                multiplier?: string;
            } & {
                epochNumber?: any;
                denom?: string;
                multiplier?: string;
            } & Record<Exclude<keyof I_10, keyof _163.OsmoEquivalentMultiplierRecord>, never>>(object: I_10): _163.OsmoEquivalentMultiplierRecord;
        };
        SuperfluidDelegationRecord: {
            encode(message: _163.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.SuperfluidDelegationRecord;
            fromJSON(object: any): _163.SuperfluidDelegationRecord;
            toJSON(message: _163.SuperfluidDelegationRecord): unknown;
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
            } & Record<Exclude<keyof I_11, keyof _163.SuperfluidDelegationRecord>, never>>(object: I_11): _163.SuperfluidDelegationRecord;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _163.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.LockIdIntermediaryAccountConnection;
            fromJSON(object: any): _163.LockIdIntermediaryAccountConnection;
            toJSON(message: _163.LockIdIntermediaryAccountConnection): unknown;
            fromPartial<I_12 extends {
                lockId?: any;
                intermediaryAccount?: string;
            } & {
                lockId?: any;
                intermediaryAccount?: string;
            } & Record<Exclude<keyof I_12, keyof _163.LockIdIntermediaryAccountConnection>, never>>(object: I_12): _163.LockIdIntermediaryAccountConnection;
        };
        QueryParamsRequest: {
            encode(_: _162.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryParamsRequest;
            fromJSON(_: any): _162.QueryParamsRequest;
            toJSON(_: _162.QueryParamsRequest): unknown;
            fromPartial<I_13 extends {} & {} & Record<Exclude<keyof I_13, never>, never>>(_: I_13): _162.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _162.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryParamsResponse;
            fromJSON(object: any): _162.QueryParamsResponse;
            toJSON(message: _162.QueryParamsResponse): unknown;
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
            } & Record<Exclude<keyof I_14, "params">, never>>(object: I_14): _162.QueryParamsResponse;
        };
        AssetTypeRequest: {
            encode(message: _162.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.AssetTypeRequest;
            fromJSON(object: any): _162.AssetTypeRequest;
            toJSON(message: _162.AssetTypeRequest): unknown;
            fromPartial<I_15 extends {
                denom?: string;
            } & {
                denom?: string;
            } & Record<Exclude<keyof I_15, "denom">, never>>(object: I_15): _162.AssetTypeRequest;
        };
        AssetTypeResponse: {
            encode(message: _162.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.AssetTypeResponse;
            fromJSON(object: any): _162.AssetTypeResponse;
            toJSON(message: _162.AssetTypeResponse): unknown;
            fromPartial<I_16 extends {
                assetType?: _163.SuperfluidAssetType;
            } & {
                assetType?: _163.SuperfluidAssetType;
            } & Record<Exclude<keyof I_16, "assetType">, never>>(object: I_16): _162.AssetTypeResponse;
        };
        AllAssetsRequest: {
            encode(_: _162.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.AllAssetsRequest;
            fromJSON(_: any): _162.AllAssetsRequest;
            toJSON(_: _162.AllAssetsRequest): unknown;
            fromPartial<I_17 extends {} & {} & Record<Exclude<keyof I_17, never>, never>>(_: I_17): _162.AllAssetsRequest;
        };
        AllAssetsResponse: {
            encode(message: _162.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.AllAssetsResponse;
            fromJSON(object: any): _162.AllAssetsResponse;
            toJSON(message: _162.AllAssetsResponse): unknown;
            fromPartial<I_18 extends {
                assets?: {
                    denom?: string;
                    assetType?: _163.SuperfluidAssetType;
                }[];
            } & {
                assets?: {
                    denom?: string;
                    assetType?: _163.SuperfluidAssetType;
                }[] & ({
                    denom?: string;
                    assetType?: _163.SuperfluidAssetType;
                } & {
                    denom?: string;
                    assetType?: _163.SuperfluidAssetType;
                } & Record<Exclude<keyof I_18["assets"][number], keyof _163.SuperfluidAsset>, never>)[] & Record<Exclude<keyof I_18["assets"], keyof {
                    denom?: string;
                    assetType?: _163.SuperfluidAssetType;
                }[]>, never>;
            } & Record<Exclude<keyof I_18, "assets">, never>>(object: I_18): _162.AllAssetsResponse;
        };
        AssetMultiplierRequest: {
            encode(message: _162.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.AssetMultiplierRequest;
            fromJSON(object: any): _162.AssetMultiplierRequest;
            toJSON(message: _162.AssetMultiplierRequest): unknown;
            fromPartial<I_19 extends {
                denom?: string;
            } & {
                denom?: string;
            } & Record<Exclude<keyof I_19, "denom">, never>>(object: I_19): _162.AssetMultiplierRequest;
        };
        AssetMultiplierResponse: {
            encode(message: _162.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.AssetMultiplierResponse;
            fromJSON(object: any): _162.AssetMultiplierResponse;
            toJSON(message: _162.AssetMultiplierResponse): unknown;
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
                } & Record<Exclude<keyof I_20["osmoEquivalentMultiplier"], keyof _163.OsmoEquivalentMultiplierRecord>, never>;
            } & Record<Exclude<keyof I_20, "osmoEquivalentMultiplier">, never>>(object: I_20): _162.AssetMultiplierResponse;
        };
        SuperfluidIntermediaryAccountInfo: {
            encode(message: _162.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.SuperfluidIntermediaryAccountInfo;
            fromJSON(object: any): _162.SuperfluidIntermediaryAccountInfo;
            toJSON(message: _162.SuperfluidIntermediaryAccountInfo): unknown;
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
            } & Record<Exclude<keyof I_21, keyof _162.SuperfluidIntermediaryAccountInfo>, never>>(object: I_21): _162.SuperfluidIntermediaryAccountInfo;
        };
        AllIntermediaryAccountsRequest: {
            encode(message: _162.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.AllIntermediaryAccountsRequest;
            fromJSON(object: any): _162.AllIntermediaryAccountsRequest;
            toJSON(message: _162.AllIntermediaryAccountsRequest): unknown;
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
            } & Record<Exclude<keyof I_22, "pagination">, never>>(object: I_22): _162.AllIntermediaryAccountsRequest;
        };
        AllIntermediaryAccountsResponse: {
            encode(message: _162.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.AllIntermediaryAccountsResponse;
            fromJSON(object: any): _162.AllIntermediaryAccountsResponse;
            toJSON(message: _162.AllIntermediaryAccountsResponse): unknown;
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
                } & Record<Exclude<keyof I_23["accounts"][number], keyof _162.SuperfluidIntermediaryAccountInfo>, never>)[] & Record<Exclude<keyof I_23["accounts"], keyof {
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
            } & Record<Exclude<keyof I_23, keyof _162.AllIntermediaryAccountsResponse>, never>>(object: I_23): _162.AllIntermediaryAccountsResponse;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _162.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ConnectedIntermediaryAccountRequest;
            fromJSON(object: any): _162.ConnectedIntermediaryAccountRequest;
            toJSON(message: _162.ConnectedIntermediaryAccountRequest): unknown;
            fromPartial<I_24 extends {
                lockId?: any;
            } & {
                lockId?: any;
            } & Record<Exclude<keyof I_24, "lockId">, never>>(object: I_24): _162.ConnectedIntermediaryAccountRequest;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _162.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ConnectedIntermediaryAccountResponse;
            fromJSON(object: any): _162.ConnectedIntermediaryAccountResponse;
            toJSON(message: _162.ConnectedIntermediaryAccountResponse): unknown;
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
                } & Record<Exclude<keyof I_25["account"], keyof _162.SuperfluidIntermediaryAccountInfo>, never>;
            } & Record<Exclude<keyof I_25, "account">, never>>(object: I_25): _162.ConnectedIntermediaryAccountResponse;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _162.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.TotalSuperfluidDelegationsRequest;
            fromJSON(_: any): _162.TotalSuperfluidDelegationsRequest;
            toJSON(_: _162.TotalSuperfluidDelegationsRequest): unknown;
            fromPartial<I_26 extends {} & {} & Record<Exclude<keyof I_26, never>, never>>(_: I_26): _162.TotalSuperfluidDelegationsRequest;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _162.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.TotalSuperfluidDelegationsResponse;
            fromJSON(object: any): _162.TotalSuperfluidDelegationsResponse;
            toJSON(message: _162.TotalSuperfluidDelegationsResponse): unknown;
            fromPartial<I_27 extends {
                totalDelegations?: string;
            } & {
                totalDelegations?: string;
            } & Record<Exclude<keyof I_27, "totalDelegations">, never>>(object: I_27): _162.TotalSuperfluidDelegationsResponse;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _162.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.SuperfluidDelegationAmountRequest;
            fromJSON(object: any): _162.SuperfluidDelegationAmountRequest;
            toJSON(message: _162.SuperfluidDelegationAmountRequest): unknown;
            fromPartial<I_28 extends {
                delegatorAddress?: string;
                validatorAddress?: string;
                denom?: string;
            } & {
                delegatorAddress?: string;
                validatorAddress?: string;
                denom?: string;
            } & Record<Exclude<keyof I_28, keyof _162.SuperfluidDelegationAmountRequest>, never>>(object: I_28): _162.SuperfluidDelegationAmountRequest;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _162.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.SuperfluidDelegationAmountResponse;
            fromJSON(object: any): _162.SuperfluidDelegationAmountResponse;
            toJSON(message: _162.SuperfluidDelegationAmountResponse): unknown;
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
            } & Record<Exclude<keyof I_29, "amount">, never>>(object: I_29): _162.SuperfluidDelegationAmountResponse;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _162.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.SuperfluidDelegationsByDelegatorRequest;
            fromJSON(object: any): _162.SuperfluidDelegationsByDelegatorRequest;
            toJSON(message: _162.SuperfluidDelegationsByDelegatorRequest): unknown;
            fromPartial<I_30 extends {
                delegatorAddress?: string;
            } & {
                delegatorAddress?: string;
            } & Record<Exclude<keyof I_30, "delegatorAddress">, never>>(object: I_30): _162.SuperfluidDelegationsByDelegatorRequest;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _162.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.SuperfluidDelegationsByDelegatorResponse;
            fromJSON(object: any): _162.SuperfluidDelegationsByDelegatorResponse;
            toJSON(message: _162.SuperfluidDelegationsByDelegatorResponse): unknown;
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
                } & Record<Exclude<keyof I_31["superfluidDelegationRecords"][number], keyof _163.SuperfluidDelegationRecord>, never>)[] & Record<Exclude<keyof I_31["superfluidDelegationRecords"], keyof {
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
            } & Record<Exclude<keyof I_31, keyof _162.SuperfluidDelegationsByDelegatorResponse>, never>>(object: I_31): _162.SuperfluidDelegationsByDelegatorResponse;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _162.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.SuperfluidUndelegationsByDelegatorRequest;
            fromJSON(object: any): _162.SuperfluidUndelegationsByDelegatorRequest;
            toJSON(message: _162.SuperfluidUndelegationsByDelegatorRequest): unknown;
            fromPartial<I_32 extends {
                delegatorAddress?: string;
                denom?: string;
            } & {
                delegatorAddress?: string;
                denom?: string;
            } & Record<Exclude<keyof I_32, keyof _162.SuperfluidUndelegationsByDelegatorRequest>, never>>(object: I_32): _162.SuperfluidUndelegationsByDelegatorRequest;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _162.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.SuperfluidUndelegationsByDelegatorResponse;
            fromJSON(object: any): _162.SuperfluidUndelegationsByDelegatorResponse;
            toJSON(message: _162.SuperfluidUndelegationsByDelegatorResponse): unknown;
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
                } & Record<Exclude<keyof I_33["superfluidDelegationRecords"][number], keyof _163.SuperfluidDelegationRecord>, never>)[] & Record<Exclude<keyof I_33["superfluidDelegationRecords"], keyof {
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
                } & Record<Exclude<keyof I_33["syntheticLocks"][number], keyof _149.SyntheticLock>, never>)[] & Record<Exclude<keyof I_33["syntheticLocks"], keyof {
                    underlyingLockId?: any;
                    synthDenom?: string;
                    endTime?: Date;
                    duration?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I_33, keyof _162.SuperfluidUndelegationsByDelegatorResponse>, never>>(object: I_33): _162.SuperfluidUndelegationsByDelegatorResponse;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _162.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.SuperfluidDelegationsByValidatorDenomRequest;
            fromJSON(object: any): _162.SuperfluidDelegationsByValidatorDenomRequest;
            toJSON(message: _162.SuperfluidDelegationsByValidatorDenomRequest): unknown;
            fromPartial<I_34 extends {
                validatorAddress?: string;
                denom?: string;
            } & {
                validatorAddress?: string;
                denom?: string;
            } & Record<Exclude<keyof I_34, keyof _162.SuperfluidDelegationsByValidatorDenomRequest>, never>>(object: I_34): _162.SuperfluidDelegationsByValidatorDenomRequest;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _162.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.SuperfluidDelegationsByValidatorDenomResponse;
            fromJSON(object: any): _162.SuperfluidDelegationsByValidatorDenomResponse;
            toJSON(message: _162.SuperfluidDelegationsByValidatorDenomResponse): unknown;
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
                } & Record<Exclude<keyof I_35["superfluidDelegationRecords"][number], keyof _163.SuperfluidDelegationRecord>, never>)[] & Record<Exclude<keyof I_35["superfluidDelegationRecords"], keyof {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    delegationAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                }[]>, never>;
            } & Record<Exclude<keyof I_35, "superfluidDelegationRecords">, never>>(object: I_35): _162.SuperfluidDelegationsByValidatorDenomResponse;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _162.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromJSON(object: any): _162.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toJSON(message: _162.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
            fromPartial<I_36 extends {
                validatorAddress?: string;
                denom?: string;
            } & {
                validatorAddress?: string;
                denom?: string;
            } & Record<Exclude<keyof I_36, keyof _162.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>, never>>(object: I_36): _162.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _162.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromJSON(object: any): _162.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toJSON(message: _162.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
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
            } & Record<Exclude<keyof I_37, "totalDelegatedCoins">, never>>(object: I_37): _162.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
        };
        Params: {
            encode(message: _161.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.Params;
            fromJSON(object: any): _161.Params;
            toJSON(message: _161.Params): unknown;
            fromPartial<I_38 extends {
                minimumRiskFactor?: string;
            } & {
                minimumRiskFactor?: string;
            } & Record<Exclude<keyof I_38, "minimumRiskFactor">, never>>(object: I_38): _161.Params;
        };
        GenesisState: {
            encode(message: _160.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.GenesisState;
            fromJSON(object: any): _160.GenesisState;
            toJSON(message: _160.GenesisState): unknown;
            fromPartial<I_39 extends {
                params?: {
                    minimumRiskFactor?: string;
                };
                superfluidAssets?: {
                    denom?: string;
                    assetType?: _163.SuperfluidAssetType;
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
                    assetType?: _163.SuperfluidAssetType;
                }[] & ({
                    denom?: string;
                    assetType?: _163.SuperfluidAssetType;
                } & {
                    denom?: string;
                    assetType?: _163.SuperfluidAssetType;
                } & Record<Exclude<keyof I_39["superfluidAssets"][number], keyof _163.SuperfluidAsset>, never>)[] & Record<Exclude<keyof I_39["superfluidAssets"], keyof {
                    denom?: string;
                    assetType?: _163.SuperfluidAssetType;
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
                } & Record<Exclude<keyof I_39["osmoEquivalentMultipliers"][number], keyof _163.OsmoEquivalentMultiplierRecord>, never>)[] & Record<Exclude<keyof I_39["osmoEquivalentMultipliers"], keyof {
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
                } & Record<Exclude<keyof I_39["intermediaryAccounts"][number], keyof _163.SuperfluidIntermediaryAccount>, never>)[] & Record<Exclude<keyof I_39["intermediaryAccounts"], keyof {
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
                } & Record<Exclude<keyof I_39["intemediaryAccountConnections"][number], keyof _163.LockIdIntermediaryAccountConnection>, never>)[] & Record<Exclude<keyof I_39["intemediaryAccountConnections"], keyof {
                    lockId?: any;
                    intermediaryAccount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I_39, keyof _160.GenesisState>, never>>(object: I_39): _160.GenesisState;
        };
    };
    namespace txfees {
        const v1beta1: {
            QueryFeeTokensRequest: {
                encode(_: _168.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryFeeTokensRequest;
                fromJSON(_: any): _168.QueryFeeTokensRequest;
                toJSON(_: _168.QueryFeeTokensRequest): unknown;
                fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): _168.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _168.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryFeeTokensResponse;
                fromJSON(object: any): _168.QueryFeeTokensResponse;
                toJSON(message: _168.QueryFeeTokensResponse): unknown;
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
                    } & Record<Exclude<keyof I_1["feeTokens"][number], keyof _165.FeeToken>, never>)[] & Record<Exclude<keyof I_1["feeTokens"], keyof {
                        denom?: string;
                        poolID?: any;
                    }[]>, never>;
                } & Record<Exclude<keyof I_1, "feeTokens">, never>>(object: I_1): _168.QueryFeeTokensResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _168.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryDenomPoolIdRequest;
                fromJSON(object: any): _168.QueryDenomPoolIdRequest;
                toJSON(message: _168.QueryDenomPoolIdRequest): unknown;
                fromPartial<I_2 extends {
                    denom?: string;
                } & {
                    denom?: string;
                } & Record<Exclude<keyof I_2, "denom">, never>>(object: I_2): _168.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _168.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryDenomPoolIdResponse;
                fromJSON(object: any): _168.QueryDenomPoolIdResponse;
                toJSON(message: _168.QueryDenomPoolIdResponse): unknown;
                fromPartial<I_3 extends {
                    poolID?: any;
                } & {
                    poolID?: any;
                } & Record<Exclude<keyof I_3, "poolID">, never>>(object: I_3): _168.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _168.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryBaseDenomRequest;
                fromJSON(_: any): _168.QueryBaseDenomRequest;
                toJSON(_: _168.QueryBaseDenomRequest): unknown;
                fromPartial<I_4 extends {} & {} & Record<Exclude<keyof I_4, never>, never>>(_: I_4): _168.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _168.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryBaseDenomResponse;
                fromJSON(object: any): _168.QueryBaseDenomResponse;
                toJSON(message: _168.QueryBaseDenomResponse): unknown;
                fromPartial<I_5 extends {
                    baseDenom?: string;
                } & {
                    baseDenom?: string;
                } & Record<Exclude<keyof I_5, "baseDenom">, never>>(object: I_5): _168.QueryBaseDenomResponse;
            };
            UpdateFeeTokenProposal: {
                encode(message: _167.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.UpdateFeeTokenProposal;
                fromJSON(object: any): _167.UpdateFeeTokenProposal;
                toJSON(message: _167.UpdateFeeTokenProposal): unknown;
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
                    } & Record<Exclude<keyof I_6["feetoken"], keyof _165.FeeToken>, never>;
                } & Record<Exclude<keyof I_6, keyof _167.UpdateFeeTokenProposal>, never>>(object: I_6): _167.UpdateFeeTokenProposal;
            };
            GenesisState: {
                encode(message: _166.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.GenesisState;
                fromJSON(object: any): _166.GenesisState;
                toJSON(message: _166.GenesisState): unknown;
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
                    } & Record<Exclude<keyof I_7["feetokens"][number], keyof _165.FeeToken>, never>)[] & Record<Exclude<keyof I_7["feetokens"], keyof {
                        denom?: string;
                        poolID?: any;
                    }[]>, never>;
                } & Record<Exclude<keyof I_7, keyof _166.GenesisState>, never>>(object: I_7): _166.GenesisState;
            };
            FeeToken: {
                encode(message: _165.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.FeeToken;
                fromJSON(object: any): _165.FeeToken;
                toJSON(message: _165.FeeToken): unknown;
                fromPartial<I_8 extends {
                    denom?: string;
                    poolID?: any;
                } & {
                    denom?: string;
                    poolID?: any;
                } & Record<Exclude<keyof I_8, keyof _165.FeeToken>, never>>(object: I_8): _165.FeeToken;
            };
        };
    }
}
