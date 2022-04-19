import * as _1074 from "./claim/v1beta1/claim";
import * as _1076 from "./claim/v1beta1/genesis";
import * as _1078 from "./claim/v1beta1/params";
import * as _1080 from "./claim/v1beta1/query";
import * as _1082 from "./epochs/genesis";
import * as _1084 from "./epochs/query";
import * as _1086 from "./gamm/pool-models/balancer/balancerPool";
import * as _1088 from "./gamm/pool-models/balancer/tx";
import * as _1090 from "./gamm/v1beta1/genesis";
import * as _1092 from "./gamm/v1beta1/query";
import * as _1094 from "./gamm/v1beta1/tx";
import * as _1102 from "./incentives/gauge";
import * as _1104 from "./incentives/genesis";
import * as _1106 from "./incentives/params";
import * as _1108 from "./incentives/query";
import * as _1110 from "./incentives/tx";
import * as _1118 from "./lockup/genesis";
import * as _1120 from "./lockup/lock";
import * as _1122 from "./lockup/query";
import * as _1124 from "./lockup/tx";
import * as _1132 from "./mint/v1beta1/genesis";
import * as _1134 from "./mint/v1beta1/mint";
import * as _1136 from "./mint/v1beta1/query";
import * as _1138 from "./pool-incentives/v1beta1/genesis";
import * as _1140 from "./pool-incentives/v1beta1/gov";
import * as _1142 from "./pool-incentives/v1beta1/incentives";
import * as _1144 from "./pool-incentives/v1beta1/query";
import * as _1146 from "./store/v1beta1/tree";
import * as _1148 from "./superfluid/genesis";
import * as _1150 from "./superfluid/params";
import * as _1152 from "./superfluid/query";
import * as _1154 from "./superfluid/superfluid";
import * as _1156 from "./superfluid/tx";
import * as _1164 from "./txfees/v1beta1/feetoken";
import * as _1166 from "./txfees/v1beta1/genesis";
import * as _1168 from "./txfees/v1beta1/gov";
import * as _1170 from "./txfees/v1beta1/query";
export declare namespace osmosis {
    namespace claim {
        const v1beta1: {
            QueryModuleAccountBalanceRequest: {
                encode(_: _1080.QueryModuleAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1080.QueryModuleAccountBalanceRequest;
                fromJSON(_: any): _1080.QueryModuleAccountBalanceRequest;
                toJSON(_: _1080.QueryModuleAccountBalanceRequest): unknown;
                fromPartial<I extends unknown>(_: I): _1080.QueryModuleAccountBalanceRequest;
            };
            QueryModuleAccountBalanceResponse: {
                encode(message: _1080.QueryModuleAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1080.QueryModuleAccountBalanceResponse;
                fromJSON(object: any): _1080.QueryModuleAccountBalanceResponse;
                toJSON(message: _1080.QueryModuleAccountBalanceResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _1080.QueryModuleAccountBalanceResponse;
            };
            QueryParamsRequest: {
                encode(_: _1080.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1080.QueryParamsRequest;
                fromJSON(_: any): _1080.QueryParamsRequest;
                toJSON(_: _1080.QueryParamsRequest): unknown;
                fromPartial<I_2 extends unknown>(_: I_2): _1080.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _1080.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1080.QueryParamsResponse;
                fromJSON(object: any): _1080.QueryParamsResponse;
                toJSON(message: _1080.QueryParamsResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _1080.QueryParamsResponse;
            };
            QueryClaimRecordRequest: {
                encode(message: _1080.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1080.QueryClaimRecordRequest;
                fromJSON(object: any): _1080.QueryClaimRecordRequest;
                toJSON(message: _1080.QueryClaimRecordRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _1080.QueryClaimRecordRequest;
            };
            QueryClaimRecordResponse: {
                encode(message: _1080.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1080.QueryClaimRecordResponse;
                fromJSON(object: any): _1080.QueryClaimRecordResponse;
                toJSON(message: _1080.QueryClaimRecordResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _1080.QueryClaimRecordResponse;
            };
            QueryClaimableForActionRequest: {
                encode(message: _1080.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1080.QueryClaimableForActionRequest;
                fromJSON(object: any): _1080.QueryClaimableForActionRequest;
                toJSON(message: _1080.QueryClaimableForActionRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _1080.QueryClaimableForActionRequest;
            };
            QueryClaimableForActionResponse: {
                encode(message: _1080.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1080.QueryClaimableForActionResponse;
                fromJSON(object: any): _1080.QueryClaimableForActionResponse;
                toJSON(message: _1080.QueryClaimableForActionResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _1080.QueryClaimableForActionResponse;
            };
            QueryTotalClaimableRequest: {
                encode(message: _1080.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1080.QueryTotalClaimableRequest;
                fromJSON(object: any): _1080.QueryTotalClaimableRequest;
                toJSON(message: _1080.QueryTotalClaimableRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _1080.QueryTotalClaimableRequest;
            };
            QueryTotalClaimableResponse: {
                encode(message: _1080.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1080.QueryTotalClaimableResponse;
                fromJSON(object: any): _1080.QueryTotalClaimableResponse;
                toJSON(message: _1080.QueryTotalClaimableResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _1080.QueryTotalClaimableResponse;
            };
            Params: {
                encode(message: _1078.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1078.Params;
                fromJSON(object: any): _1078.Params;
                toJSON(message: _1078.Params): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _1078.Params;
            };
            GenesisState: {
                encode(message: _1076.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1076.GenesisState;
                fromJSON(object: any): _1076.GenesisState;
                toJSON(message: _1076.GenesisState): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _1076.GenesisState;
            };
            actionFromJSON(object: any): _1074.Action;
            actionToJSON(object: _1074.Action): string;
            Action: typeof _1074.Action;
            ClaimRecord: {
                encode(message: _1074.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1074.ClaimRecord;
                fromJSON(object: any): _1074.ClaimRecord;
                toJSON(message: _1074.ClaimRecord): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _1074.ClaimRecord;
            };
        };
    }
    namespace epochs {
        const v1beta1: {
            QueryEpochsInfoRequest: {
                encode(_: _1084.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1084.QueryEpochsInfoRequest;
                fromJSON(_: any): _1084.QueryEpochsInfoRequest;
                toJSON(_: _1084.QueryEpochsInfoRequest): unknown;
                fromPartial<I extends unknown>(_: I): _1084.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _1084.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1084.QueryEpochsInfoResponse;
                fromJSON(object: any): _1084.QueryEpochsInfoResponse;
                toJSON(message: _1084.QueryEpochsInfoResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _1084.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _1084.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1084.QueryCurrentEpochRequest;
                fromJSON(object: any): _1084.QueryCurrentEpochRequest;
                toJSON(message: _1084.QueryCurrentEpochRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _1084.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _1084.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1084.QueryCurrentEpochResponse;
                fromJSON(object: any): _1084.QueryCurrentEpochResponse;
                toJSON(message: _1084.QueryCurrentEpochResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _1084.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _1082.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1082.EpochInfo;
                fromJSON(object: any): _1082.EpochInfo;
                toJSON(message: _1082.EpochInfo): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _1082.EpochInfo;
            };
            GenesisState: {
                encode(message: _1082.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1082.GenesisState;
                fromJSON(object: any): _1082.GenesisState;
                toJSON(message: _1082.GenesisState): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _1082.GenesisState;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgJoinPool: {
                encode(message: _1094.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1094.MsgJoinPool;
                fromJSON(object: any): _1094.MsgJoinPool;
                toJSON(message: _1094.MsgJoinPool): unknown;
                fromPartial<I extends unknown>(object: I): _1094.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(_: _1094.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1094.MsgJoinPoolResponse;
                fromJSON(_: any): _1094.MsgJoinPoolResponse;
                toJSON(_: _1094.MsgJoinPoolResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _1094.MsgJoinPoolResponse;
            };
            MsgExitPool: {
                encode(message: _1094.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1094.MsgExitPool;
                fromJSON(object: any): _1094.MsgExitPool;
                toJSON(message: _1094.MsgExitPool): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _1094.MsgExitPool;
            };
            MsgExitPoolResponse: {
                encode(_: _1094.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1094.MsgExitPoolResponse;
                fromJSON(_: any): _1094.MsgExitPoolResponse;
                toJSON(_: _1094.MsgExitPoolResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _1094.MsgExitPoolResponse;
            };
            SwapAmountInRoute: {
                encode(message: _1094.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1094.SwapAmountInRoute;
                fromJSON(object: any): _1094.SwapAmountInRoute;
                toJSON(message: _1094.SwapAmountInRoute): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _1094.SwapAmountInRoute;
            };
            MsgSwapExactAmountIn: {
                encode(message: _1094.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1094.MsgSwapExactAmountIn;
                fromJSON(object: any): _1094.MsgSwapExactAmountIn;
                toJSON(message: _1094.MsgSwapExactAmountIn): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _1094.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _1094.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1094.MsgSwapExactAmountInResponse;
                fromJSON(object: any): _1094.MsgSwapExactAmountInResponse;
                toJSON(message: _1094.MsgSwapExactAmountInResponse): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _1094.MsgSwapExactAmountInResponse;
            };
            SwapAmountOutRoute: {
                encode(message: _1094.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1094.SwapAmountOutRoute;
                fromJSON(object: any): _1094.SwapAmountOutRoute;
                toJSON(message: _1094.SwapAmountOutRoute): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _1094.SwapAmountOutRoute;
            };
            MsgSwapExactAmountOut: {
                encode(message: _1094.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1094.MsgSwapExactAmountOut;
                fromJSON(object: any): _1094.MsgSwapExactAmountOut;
                toJSON(message: _1094.MsgSwapExactAmountOut): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _1094.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _1094.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1094.MsgSwapExactAmountOutResponse;
                fromJSON(object: any): _1094.MsgSwapExactAmountOutResponse;
                toJSON(message: _1094.MsgSwapExactAmountOutResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _1094.MsgSwapExactAmountOutResponse;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _1094.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1094.MsgJoinSwapExternAmountIn;
                fromJSON(object: any): _1094.MsgJoinSwapExternAmountIn;
                toJSON(message: _1094.MsgJoinSwapExternAmountIn): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _1094.MsgJoinSwapExternAmountIn;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _1094.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1094.MsgJoinSwapExternAmountInResponse;
                fromJSON(object: any): _1094.MsgJoinSwapExternAmountInResponse;
                toJSON(message: _1094.MsgJoinSwapExternAmountInResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _1094.MsgJoinSwapExternAmountInResponse;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _1094.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1094.MsgJoinSwapShareAmountOut;
                fromJSON(object: any): _1094.MsgJoinSwapShareAmountOut;
                toJSON(message: _1094.MsgJoinSwapShareAmountOut): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _1094.MsgJoinSwapShareAmountOut;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _1094.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1094.MsgJoinSwapShareAmountOutResponse;
                fromJSON(object: any): _1094.MsgJoinSwapShareAmountOutResponse;
                toJSON(message: _1094.MsgJoinSwapShareAmountOutResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _1094.MsgJoinSwapShareAmountOutResponse;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _1094.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1094.MsgExitSwapShareAmountIn;
                fromJSON(object: any): _1094.MsgExitSwapShareAmountIn;
                toJSON(message: _1094.MsgExitSwapShareAmountIn): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _1094.MsgExitSwapShareAmountIn;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _1094.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1094.MsgExitSwapShareAmountInResponse;
                fromJSON(object: any): _1094.MsgExitSwapShareAmountInResponse;
                toJSON(message: _1094.MsgExitSwapShareAmountInResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _1094.MsgExitSwapShareAmountInResponse;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _1094.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1094.MsgExitSwapExternAmountOut;
                fromJSON(object: any): _1094.MsgExitSwapExternAmountOut;
                toJSON(message: _1094.MsgExitSwapExternAmountOut): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _1094.MsgExitSwapExternAmountOut;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _1094.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1094.MsgExitSwapExternAmountOutResponse;
                fromJSON(object: any): _1094.MsgExitSwapExternAmountOutResponse;
                toJSON(message: _1094.MsgExitSwapExternAmountOutResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _1094.MsgExitSwapExternAmountOutResponse;
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: _1094.MsgJoinPool) => {
                        sender: string;
                        pool_id: string;
                        share_out_amount: string;
                        token_in_maxs: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, pool_id, share_out_amount, token_in_maxs }: {
                        sender: string;
                        pool_id: string;
                        share_out_amount: string;
                        token_in_maxs: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _1094.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: _1094.MsgExitPool) => {
                        sender: string;
                        pool_id: string;
                        share_in_amount: string;
                        token_out_mins: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, pool_id, share_in_amount, token_out_mins }: {
                        sender: string;
                        pool_id: string;
                        share_in_amount: string;
                        token_out_mins: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _1094.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _1094.MsgSwapExactAmountIn) => {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_out_denom: string;
                        }[];
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        token_out_min_amount: string;
                    };
                    fromAmino: ({ sender, routes, token_in, token_out_min_amount }: {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_out_denom: string;
                        }[];
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        token_out_min_amount: string;
                    }) => _1094.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _1094.MsgSwapExactAmountOut) => {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_in_denom: string;
                        }[];
                        token_in_max_amount: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, routes, token_in_max_amount, token_out }: {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_in_denom: string;
                        }[];
                        token_in_max_amount: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                    }) => _1094.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: _1094.MsgJoinSwapExternAmountIn) => {
                        sender: string;
                        pool_id: string;
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        share_out_min_amount: string;
                    };
                    fromAmino: ({ sender, pool_id, token_in, share_out_min_amount }: {
                        sender: string;
                        pool_id: string;
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        share_out_min_amount: string;
                    }) => _1094.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: _1094.MsgJoinSwapShareAmountOut) => {
                        sender: string;
                        pool_id: string;
                        token_in_denom: string;
                        share_out_amount: string;
                        token_in_max_amount: string;
                    };
                    fromAmino: ({ sender, pool_id, token_in_denom, share_out_amount, token_in_max_amount }: {
                        sender: string;
                        pool_id: string;
                        token_in_denom: string;
                        share_out_amount: string;
                        token_in_max_amount: string;
                    }) => _1094.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: _1094.MsgExitSwapExternAmountOut) => {
                        sender: string;
                        pool_id: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                        share_in_max_amount: string;
                    };
                    fromAmino: ({ sender, pool_id, token_out, share_in_max_amount }: {
                        sender: string;
                        pool_id: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                        share_in_max_amount: string;
                    }) => _1094.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: _1094.MsgExitSwapShareAmountIn) => {
                        sender: string;
                        pool_id: string;
                        token_out_denom: string;
                        share_in_amount: string;
                        token_out_min_amount: string;
                    };
                    fromAmino: ({ sender, pool_id, token_out_denom, share_in_amount, token_out_min_amount }: {
                        sender: string;
                        pool_id: string;
                        token_out_denom: string;
                        share_in_amount: string;
                        token_out_min_amount: string;
                    }) => _1094.MsgExitSwapShareAmountIn;
                };
            };
            encoded: {
                joinPool(value: _1094.MsgJoinPool): {
                    type_url: string;
                    value: Uint8Array;
                };
                exitPool(value: _1094.MsgExitPool): {
                    type_url: string;
                    value: Uint8Array;
                };
                swapExactAmountIn(value: _1094.MsgSwapExactAmountIn): {
                    type_url: string;
                    value: Uint8Array;
                };
                swapExactAmountOut(value: _1094.MsgSwapExactAmountOut): {
                    type_url: string;
                    value: Uint8Array;
                };
                joinSwapExternAmountIn(value: _1094.MsgJoinSwapExternAmountIn): {
                    type_url: string;
                    value: Uint8Array;
                };
                joinSwapShareAmountOut(value: _1094.MsgJoinSwapShareAmountOut): {
                    type_url: string;
                    value: Uint8Array;
                };
                exitSwapExternAmountOut(value: _1094.MsgExitSwapExternAmountOut): {
                    type_url: string;
                    value: Uint8Array;
                };
                exitSwapShareAmountIn(value: _1094.MsgExitSwapShareAmountIn): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                joinPool(value: any): {
                    typeUrl: string;
                    value: _1094.MsgJoinPool;
                };
                exitPool(value: any): {
                    typeUrl: string;
                    value: _1094.MsgExitPool;
                };
                swapExactAmountIn(value: any): {
                    typeUrl: string;
                    value: _1094.MsgSwapExactAmountIn;
                };
                swapExactAmountOut(value: any): {
                    typeUrl: string;
                    value: _1094.MsgSwapExactAmountOut;
                };
                joinSwapExternAmountIn(value: any): {
                    typeUrl: string;
                    value: _1094.MsgJoinSwapExternAmountIn;
                };
                joinSwapShareAmountOut(value: any): {
                    typeUrl: string;
                    value: _1094.MsgJoinSwapShareAmountOut;
                };
                exitSwapExternAmountOut(value: any): {
                    typeUrl: string;
                    value: _1094.MsgExitSwapExternAmountOut;
                };
                exitSwapShareAmountIn(value: any): {
                    typeUrl: string;
                    value: _1094.MsgExitSwapShareAmountIn;
                };
            };
            toJSON: {
                joinPool(value: _1094.MsgJoinPool): {
                    typeUrl: string;
                    value: unknown;
                };
                exitPool(value: _1094.MsgExitPool): {
                    typeUrl: string;
                    value: unknown;
                };
                swapExactAmountIn(value: _1094.MsgSwapExactAmountIn): {
                    typeUrl: string;
                    value: unknown;
                };
                swapExactAmountOut(value: _1094.MsgSwapExactAmountOut): {
                    typeUrl: string;
                    value: unknown;
                };
                joinSwapExternAmountIn(value: _1094.MsgJoinSwapExternAmountIn): {
                    typeUrl: string;
                    value: unknown;
                };
                joinSwapShareAmountOut(value: _1094.MsgJoinSwapShareAmountOut): {
                    typeUrl: string;
                    value: unknown;
                };
                exitSwapExternAmountOut(value: _1094.MsgExitSwapExternAmountOut): {
                    typeUrl: string;
                    value: unknown;
                };
                exitSwapShareAmountIn(value: _1094.MsgExitSwapShareAmountIn): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                joinPool(value: _1094.MsgJoinPool): {
                    typeUrl: string;
                    value: _1094.MsgJoinPool;
                };
                exitPool(value: _1094.MsgExitPool): {
                    typeUrl: string;
                    value: _1094.MsgExitPool;
                };
                swapExactAmountIn(value: _1094.MsgSwapExactAmountIn): {
                    typeUrl: string;
                    value: _1094.MsgSwapExactAmountIn;
                };
                swapExactAmountOut(value: _1094.MsgSwapExactAmountOut): {
                    typeUrl: string;
                    value: _1094.MsgSwapExactAmountOut;
                };
                joinSwapExternAmountIn(value: _1094.MsgJoinSwapExternAmountIn): {
                    typeUrl: string;
                    value: _1094.MsgJoinSwapExternAmountIn;
                };
                joinSwapShareAmountOut(value: _1094.MsgJoinSwapShareAmountOut): {
                    typeUrl: string;
                    value: _1094.MsgJoinSwapShareAmountOut;
                };
                exitSwapExternAmountOut(value: _1094.MsgExitSwapExternAmountOut): {
                    typeUrl: string;
                    value: _1094.MsgExitSwapExternAmountOut;
                };
                exitSwapShareAmountIn(value: _1094.MsgExitSwapShareAmountIn): {
                    typeUrl: string;
                    value: _1094.MsgExitSwapShareAmountIn;
                };
            };
            messages: {
                joinPool(value: _1094.MsgJoinPool): {
                    typeUrl: string;
                    value: _1094.MsgJoinPool;
                };
                exitPool(value: _1094.MsgExitPool): {
                    typeUrl: string;
                    value: _1094.MsgExitPool;
                };
                swapExactAmountIn(value: _1094.MsgSwapExactAmountIn): {
                    typeUrl: string;
                    value: _1094.MsgSwapExactAmountIn;
                };
                swapExactAmountOut(value: _1094.MsgSwapExactAmountOut): {
                    typeUrl: string;
                    value: _1094.MsgSwapExactAmountOut;
                };
                joinSwapExternAmountIn(value: _1094.MsgJoinSwapExternAmountIn): {
                    typeUrl: string;
                    value: _1094.MsgJoinSwapExternAmountIn;
                };
                joinSwapShareAmountOut(value: _1094.MsgJoinSwapShareAmountOut): {
                    typeUrl: string;
                    value: _1094.MsgJoinSwapShareAmountOut;
                };
                exitSwapExternAmountOut(value: _1094.MsgExitSwapExternAmountOut): {
                    typeUrl: string;
                    value: _1094.MsgExitSwapExternAmountOut;
                };
                exitSwapShareAmountIn(value: _1094.MsgExitSwapShareAmountIn): {
                    typeUrl: string;
                    value: _1094.MsgExitSwapShareAmountIn;
                };
            };
            QueryPoolRequest: {
                encode(message: _1092.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1092.QueryPoolRequest;
                fromJSON(object: any): _1092.QueryPoolRequest;
                toJSON(message: _1092.QueryPoolRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _1092.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _1092.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1092.QueryPoolResponse;
                fromJSON(object: any): _1092.QueryPoolResponse;
                toJSON(message: _1092.QueryPoolResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _1092.QueryPoolResponse;
            };
            QueryPoolsRequest: {
                encode(message: _1092.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1092.QueryPoolsRequest;
                fromJSON(object: any): _1092.QueryPoolsRequest;
                toJSON(message: _1092.QueryPoolsRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _1092.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _1092.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1092.QueryPoolsResponse;
                fromJSON(object: any): _1092.QueryPoolsResponse;
                toJSON(message: _1092.QueryPoolsResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _1092.QueryPoolsResponse;
            };
            QueryNumPoolsRequest: {
                encode(_: _1092.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1092.QueryNumPoolsRequest;
                fromJSON(_: any): _1092.QueryNumPoolsRequest;
                toJSON(_: _1092.QueryNumPoolsRequest): unknown;
                fromPartial<I_22 extends unknown>(_: I_22): _1092.QueryNumPoolsRequest;
            };
            QueryNumPoolsResponse: {
                encode(message: _1092.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1092.QueryNumPoolsResponse;
                fromJSON(object: any): _1092.QueryNumPoolsResponse;
                toJSON(message: _1092.QueryNumPoolsResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _1092.QueryNumPoolsResponse;
            };
            QueryPoolParamsRequest: {
                encode(message: _1092.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1092.QueryPoolParamsRequest;
                fromJSON(object: any): _1092.QueryPoolParamsRequest;
                toJSON(message: _1092.QueryPoolParamsRequest): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _1092.QueryPoolParamsRequest;
            };
            QueryPoolParamsResponse: {
                encode(message: _1092.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1092.QueryPoolParamsResponse;
                fromJSON(object: any): _1092.QueryPoolParamsResponse;
                toJSON(message: _1092.QueryPoolParamsResponse): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _1092.QueryPoolParamsResponse;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _1092.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1092.QueryTotalPoolLiquidityRequest;
                fromJSON(object: any): _1092.QueryTotalPoolLiquidityRequest;
                toJSON(message: _1092.QueryTotalPoolLiquidityRequest): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _1092.QueryTotalPoolLiquidityRequest;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _1092.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1092.QueryTotalPoolLiquidityResponse;
                fromJSON(object: any): _1092.QueryTotalPoolLiquidityResponse;
                toJSON(message: _1092.QueryTotalPoolLiquidityResponse): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _1092.QueryTotalPoolLiquidityResponse;
            };
            QueryTotalSharesRequest: {
                encode(message: _1092.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1092.QueryTotalSharesRequest;
                fromJSON(object: any): _1092.QueryTotalSharesRequest;
                toJSON(message: _1092.QueryTotalSharesRequest): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _1092.QueryTotalSharesRequest;
            };
            QueryTotalSharesResponse: {
                encode(message: _1092.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1092.QueryTotalSharesResponse;
                fromJSON(object: any): _1092.QueryTotalSharesResponse;
                toJSON(message: _1092.QueryTotalSharesResponse): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _1092.QueryTotalSharesResponse;
            };
            QuerySpotPriceRequest: {
                encode(message: _1092.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1092.QuerySpotPriceRequest;
                fromJSON(object: any): _1092.QuerySpotPriceRequest;
                toJSON(message: _1092.QuerySpotPriceRequest): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _1092.QuerySpotPriceRequest;
            };
            QuerySpotPriceResponse: {
                encode(message: _1092.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1092.QuerySpotPriceResponse;
                fromJSON(object: any): _1092.QuerySpotPriceResponse;
                toJSON(message: _1092.QuerySpotPriceResponse): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _1092.QuerySpotPriceResponse;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _1092.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1092.QuerySwapExactAmountInRequest;
                fromJSON(object: any): _1092.QuerySwapExactAmountInRequest;
                toJSON(message: _1092.QuerySwapExactAmountInRequest): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _1092.QuerySwapExactAmountInRequest;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _1092.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1092.QuerySwapExactAmountInResponse;
                fromJSON(object: any): _1092.QuerySwapExactAmountInResponse;
                toJSON(message: _1092.QuerySwapExactAmountInResponse): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _1092.QuerySwapExactAmountInResponse;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _1092.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1092.QuerySwapExactAmountOutRequest;
                fromJSON(object: any): _1092.QuerySwapExactAmountOutRequest;
                toJSON(message: _1092.QuerySwapExactAmountOutRequest): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _1092.QuerySwapExactAmountOutRequest;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _1092.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1092.QuerySwapExactAmountOutResponse;
                fromJSON(object: any): _1092.QuerySwapExactAmountOutResponse;
                toJSON(message: _1092.QuerySwapExactAmountOutResponse): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _1092.QuerySwapExactAmountOutResponse;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _1092.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1092.QueryTotalLiquidityRequest;
                fromJSON(_: any): _1092.QueryTotalLiquidityRequest;
                toJSON(_: _1092.QueryTotalLiquidityRequest): unknown;
                fromPartial<I_36 extends unknown>(_: I_36): _1092.QueryTotalLiquidityRequest;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _1092.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1092.QueryTotalLiquidityResponse;
                fromJSON(object: any): _1092.QueryTotalLiquidityResponse;
                toJSON(message: _1092.QueryTotalLiquidityResponse): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _1092.QueryTotalLiquidityResponse;
            };
            Params: {
                encode(message: _1090.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1090.Params;
                fromJSON(object: any): _1090.Params;
                toJSON(message: _1090.Params): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _1090.Params;
            };
            GenesisState: {
                encode(message: _1090.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1090.GenesisState;
                fromJSON(object: any): _1090.GenesisState;
                toJSON(message: _1090.GenesisState): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _1090.GenesisState;
            };
            MsgCreateBalancerPool: {
                encode(message: _1088.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1088.MsgCreateBalancerPool;
                fromJSON(object: any): _1088.MsgCreateBalancerPool;
                toJSON(message: _1088.MsgCreateBalancerPool): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _1088.MsgCreateBalancerPool;
            };
            MsgCreateBalancerPoolResponse: {
                encode(message: _1088.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1088.MsgCreateBalancerPoolResponse;
                fromJSON(object: any): _1088.MsgCreateBalancerPoolResponse;
                toJSON(message: _1088.MsgCreateBalancerPoolResponse): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _1088.MsgCreateBalancerPoolResponse;
            };
            BalancerMsgClientImpl: typeof _1088.BalancerMsgClientImpl;
            SmoothWeightChangeParams: {
                encode(message: _1086.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1086.SmoothWeightChangeParams;
                fromJSON(object: any): _1086.SmoothWeightChangeParams;
                toJSON(message: _1086.SmoothWeightChangeParams): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _1086.SmoothWeightChangeParams;
            };
            PoolParams: {
                encode(message: _1086.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1086.PoolParams;
                fromJSON(object: any): _1086.PoolParams;
                toJSON(message: _1086.PoolParams): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _1086.PoolParams;
            };
            PoolAsset: {
                encode(message: _1086.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1086.PoolAsset;
                fromJSON(object: any): _1086.PoolAsset;
                toJSON(message: _1086.PoolAsset): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _1086.PoolAsset;
            };
            Pool: {
                encode(message: _1086.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1086.Pool;
                fromJSON(object: any): _1086.Pool;
                toJSON(message: _1086.Pool): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _1086.Pool;
            };
        };
    }
    const incentives: {
        MsgCreateGauge: {
            encode(message: _1110.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1110.MsgCreateGauge;
            fromJSON(object: any): _1110.MsgCreateGauge;
            toJSON(message: _1110.MsgCreateGauge): unknown;
            fromPartial<I extends unknown>(object: I): _1110.MsgCreateGauge;
        };
        MsgCreateGaugeResponse: {
            encode(_: _1110.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1110.MsgCreateGaugeResponse;
            fromJSON(_: any): _1110.MsgCreateGaugeResponse;
            toJSON(_: _1110.MsgCreateGaugeResponse): unknown;
            fromPartial<I_1 extends unknown>(_: I_1): _1110.MsgCreateGaugeResponse;
        };
        MsgAddToGauge: {
            encode(message: _1110.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1110.MsgAddToGauge;
            fromJSON(object: any): _1110.MsgAddToGauge;
            toJSON(message: _1110.MsgAddToGauge): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _1110.MsgAddToGauge;
        };
        MsgAddToGaugeResponse: {
            encode(_: _1110.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1110.MsgAddToGaugeResponse;
            fromJSON(_: any): _1110.MsgAddToGaugeResponse;
            toJSON(_: _1110.MsgAddToGaugeResponse): unknown;
            fromPartial<I_3 extends unknown>(_: I_3): _1110.MsgAddToGaugeResponse;
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: _1110.MsgCreateGauge) => {
                    is_perpetual: boolean;
                    owner: string;
                    distribute_to: {
                        lock_query_type: number;
                        denom: string;
                        duration: string;
                        timestamp: Date;
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    start_time: Date;
                    num_epochs_paid_over: string;
                };
                fromAmino: ({ is_perpetual, owner, distribute_to, coins, start_time, num_epochs_paid_over }: {
                    is_perpetual: boolean;
                    owner: string;
                    distribute_to: {
                        lock_query_type: number;
                        denom: string;
                        duration: string;
                        timestamp: Date;
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    start_time: Date;
                    num_epochs_paid_over: string;
                }) => _1110.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: ({ owner, gaugeId, rewards }: _1110.MsgAddToGauge) => {
                    owner: string;
                    gauge_id: string;
                    rewards: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromAmino: ({ owner, gauge_id, rewards }: {
                    owner: string;
                    gauge_id: string;
                    rewards: {
                        denom: string;
                        amount: string;
                    }[];
                }) => _1110.MsgAddToGauge;
            };
        };
        encoded: {
            createGauge(value: _1110.MsgCreateGauge): {
                type_url: string;
                value: Uint8Array;
            };
            addToGauge(value: _1110.MsgAddToGauge): {
                type_url: string;
                value: Uint8Array;
            };
        };
        fromJSON: {
            createGauge(value: any): {
                typeUrl: string;
                value: _1110.MsgCreateGauge;
            };
            addToGauge(value: any): {
                typeUrl: string;
                value: _1110.MsgAddToGauge;
            };
        };
        toJSON: {
            createGauge(value: _1110.MsgCreateGauge): {
                typeUrl: string;
                value: unknown;
            };
            addToGauge(value: _1110.MsgAddToGauge): {
                typeUrl: string;
                value: unknown;
            };
        };
        json: {
            createGauge(value: _1110.MsgCreateGauge): {
                typeUrl: string;
                value: _1110.MsgCreateGauge;
            };
            addToGauge(value: _1110.MsgAddToGauge): {
                typeUrl: string;
                value: _1110.MsgAddToGauge;
            };
        };
        messages: {
            createGauge(value: _1110.MsgCreateGauge): {
                typeUrl: string;
                value: _1110.MsgCreateGauge;
            };
            addToGauge(value: _1110.MsgAddToGauge): {
                typeUrl: string;
                value: _1110.MsgAddToGauge;
            };
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _1108.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1108.ModuleToDistributeCoinsRequest;
            fromJSON(_: any): _1108.ModuleToDistributeCoinsRequest;
            toJSON(_: _1108.ModuleToDistributeCoinsRequest): unknown;
            fromPartial<I_4 extends unknown>(_: I_4): _1108.ModuleToDistributeCoinsRequest;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _1108.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1108.ModuleToDistributeCoinsResponse;
            fromJSON(object: any): _1108.ModuleToDistributeCoinsResponse;
            toJSON(message: _1108.ModuleToDistributeCoinsResponse): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _1108.ModuleToDistributeCoinsResponse;
        };
        ModuleDistributedCoinsRequest: {
            encode(_: _1108.ModuleDistributedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1108.ModuleDistributedCoinsRequest;
            fromJSON(_: any): _1108.ModuleDistributedCoinsRequest;
            toJSON(_: _1108.ModuleDistributedCoinsRequest): unknown;
            fromPartial<I_6 extends unknown>(_: I_6): _1108.ModuleDistributedCoinsRequest;
        };
        ModuleDistributedCoinsResponse: {
            encode(message: _1108.ModuleDistributedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1108.ModuleDistributedCoinsResponse;
            fromJSON(object: any): _1108.ModuleDistributedCoinsResponse;
            toJSON(message: _1108.ModuleDistributedCoinsResponse): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _1108.ModuleDistributedCoinsResponse;
        };
        GaugeByIDRequest: {
            encode(message: _1108.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1108.GaugeByIDRequest;
            fromJSON(object: any): _1108.GaugeByIDRequest;
            toJSON(message: _1108.GaugeByIDRequest): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _1108.GaugeByIDRequest;
        };
        GaugeByIDResponse: {
            encode(message: _1108.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1108.GaugeByIDResponse;
            fromJSON(object: any): _1108.GaugeByIDResponse;
            toJSON(message: _1108.GaugeByIDResponse): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _1108.GaugeByIDResponse;
        };
        GaugesRequest: {
            encode(message: _1108.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1108.GaugesRequest;
            fromJSON(object: any): _1108.GaugesRequest;
            toJSON(message: _1108.GaugesRequest): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _1108.GaugesRequest;
        };
        GaugesResponse: {
            encode(message: _1108.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1108.GaugesResponse;
            fromJSON(object: any): _1108.GaugesResponse;
            toJSON(message: _1108.GaugesResponse): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _1108.GaugesResponse;
        };
        ActiveGaugesRequest: {
            encode(message: _1108.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1108.ActiveGaugesRequest;
            fromJSON(object: any): _1108.ActiveGaugesRequest;
            toJSON(message: _1108.ActiveGaugesRequest): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _1108.ActiveGaugesRequest;
        };
        ActiveGaugesResponse: {
            encode(message: _1108.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1108.ActiveGaugesResponse;
            fromJSON(object: any): _1108.ActiveGaugesResponse;
            toJSON(message: _1108.ActiveGaugesResponse): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _1108.ActiveGaugesResponse;
        };
        ActiveGaugesPerDenomRequest: {
            encode(message: _1108.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1108.ActiveGaugesPerDenomRequest;
            fromJSON(object: any): _1108.ActiveGaugesPerDenomRequest;
            toJSON(message: _1108.ActiveGaugesPerDenomRequest): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _1108.ActiveGaugesPerDenomRequest;
        };
        ActiveGaugesPerDenomResponse: {
            encode(message: _1108.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1108.ActiveGaugesPerDenomResponse;
            fromJSON(object: any): _1108.ActiveGaugesPerDenomResponse;
            toJSON(message: _1108.ActiveGaugesPerDenomResponse): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _1108.ActiveGaugesPerDenomResponse;
        };
        UpcomingGaugesRequest: {
            encode(message: _1108.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1108.UpcomingGaugesRequest;
            fromJSON(object: any): _1108.UpcomingGaugesRequest;
            toJSON(message: _1108.UpcomingGaugesRequest): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _1108.UpcomingGaugesRequest;
        };
        UpcomingGaugesResponse: {
            encode(message: _1108.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1108.UpcomingGaugesResponse;
            fromJSON(object: any): _1108.UpcomingGaugesResponse;
            toJSON(message: _1108.UpcomingGaugesResponse): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _1108.UpcomingGaugesResponse;
        };
        RewardsEstRequest: {
            encode(message: _1108.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1108.RewardsEstRequest;
            fromJSON(object: any): _1108.RewardsEstRequest;
            toJSON(message: _1108.RewardsEstRequest): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _1108.RewardsEstRequest;
        };
        RewardsEstResponse: {
            encode(message: _1108.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1108.RewardsEstResponse;
            fromJSON(object: any): _1108.RewardsEstResponse;
            toJSON(message: _1108.RewardsEstResponse): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _1108.RewardsEstResponse;
        };
        QueryLockableDurationsRequest: {
            encode(_: _1108.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1108.QueryLockableDurationsRequest;
            fromJSON(_: any): _1108.QueryLockableDurationsRequest;
            toJSON(_: _1108.QueryLockableDurationsRequest): unknown;
            fromPartial<I_20 extends unknown>(_: I_20): _1108.QueryLockableDurationsRequest;
        };
        QueryLockableDurationsResponse: {
            encode(message: _1108.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1108.QueryLockableDurationsResponse;
            fromJSON(object: any): _1108.QueryLockableDurationsResponse;
            toJSON(message: _1108.QueryLockableDurationsResponse): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _1108.QueryLockableDurationsResponse;
        };
        Params: {
            encode(message: _1106.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1106.Params;
            fromJSON(object: any): _1106.Params;
            toJSON(message: _1106.Params): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _1106.Params;
        };
        GenesisState: {
            encode(message: _1104.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1104.GenesisState;
            fromJSON(object: any): _1104.GenesisState;
            toJSON(message: _1104.GenesisState): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _1104.GenesisState;
        };
        Gauge: {
            encode(message: _1102.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1102.Gauge;
            fromJSON(object: any): _1102.Gauge;
            toJSON(message: _1102.Gauge): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _1102.Gauge;
        };
        LockableDurationsInfo: {
            encode(message: _1102.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1102.LockableDurationsInfo;
            fromJSON(object: any): _1102.LockableDurationsInfo;
            toJSON(message: _1102.LockableDurationsInfo): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _1102.LockableDurationsInfo;
        };
    };
    const lockup: {
        MsgLockTokens: {
            encode(message: _1124.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1124.MsgLockTokens;
            fromJSON(object: any): _1124.MsgLockTokens;
            toJSON(message: _1124.MsgLockTokens): unknown;
            fromPartial<I extends unknown>(object: I): _1124.MsgLockTokens;
        };
        MsgLockTokensResponse: {
            encode(message: _1124.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1124.MsgLockTokensResponse;
            fromJSON(object: any): _1124.MsgLockTokensResponse;
            toJSON(message: _1124.MsgLockTokensResponse): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _1124.MsgLockTokensResponse;
        };
        MsgBeginUnlockingAll: {
            encode(message: _1124.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1124.MsgBeginUnlockingAll;
            fromJSON(object: any): _1124.MsgBeginUnlockingAll;
            toJSON(message: _1124.MsgBeginUnlockingAll): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _1124.MsgBeginUnlockingAll;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _1124.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1124.MsgBeginUnlockingAllResponse;
            fromJSON(object: any): _1124.MsgBeginUnlockingAllResponse;
            toJSON(message: _1124.MsgBeginUnlockingAllResponse): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _1124.MsgBeginUnlockingAllResponse;
        };
        MsgBeginUnlocking: {
            encode(message: _1124.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1124.MsgBeginUnlocking;
            fromJSON(object: any): _1124.MsgBeginUnlocking;
            toJSON(message: _1124.MsgBeginUnlocking): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _1124.MsgBeginUnlocking;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _1124.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1124.MsgBeginUnlockingResponse;
            fromJSON(object: any): _1124.MsgBeginUnlockingResponse;
            toJSON(message: _1124.MsgBeginUnlockingResponse): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _1124.MsgBeginUnlockingResponse;
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: ({ owner, duration, coins }: _1124.MsgLockTokens) => {
                    owner: string;
                    duration: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromAmino: ({ owner, duration, coins }: {
                    owner: string;
                    duration: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                }) => _1124.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: ({ owner }: _1124.MsgBeginUnlockingAll) => {
                    owner: string;
                };
                fromAmino: ({ owner }: {
                    owner: string;
                }) => _1124.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _1124.MsgBeginUnlocking) => {
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
                }) => _1124.MsgBeginUnlocking;
            };
        };
        encoded: {
            lockTokens(value: _1124.MsgLockTokens): {
                type_url: string;
                value: Uint8Array;
            };
            beginUnlockingAll(value: _1124.MsgBeginUnlockingAll): {
                type_url: string;
                value: Uint8Array;
            };
            beginUnlocking(value: _1124.MsgBeginUnlocking): {
                type_url: string;
                value: Uint8Array;
            };
        };
        fromJSON: {
            lockTokens(value: any): {
                typeUrl: string;
                value: _1124.MsgLockTokens;
            };
            beginUnlockingAll(value: any): {
                typeUrl: string;
                value: _1124.MsgBeginUnlockingAll;
            };
            beginUnlocking(value: any): {
                typeUrl: string;
                value: _1124.MsgBeginUnlocking;
            };
        };
        toJSON: {
            lockTokens(value: _1124.MsgLockTokens): {
                typeUrl: string;
                value: unknown;
            };
            beginUnlockingAll(value: _1124.MsgBeginUnlockingAll): {
                typeUrl: string;
                value: unknown;
            };
            beginUnlocking(value: _1124.MsgBeginUnlocking): {
                typeUrl: string;
                value: unknown;
            };
        };
        json: {
            lockTokens(value: _1124.MsgLockTokens): {
                typeUrl: string;
                value: _1124.MsgLockTokens;
            };
            beginUnlockingAll(value: _1124.MsgBeginUnlockingAll): {
                typeUrl: string;
                value: _1124.MsgBeginUnlockingAll;
            };
            beginUnlocking(value: _1124.MsgBeginUnlocking): {
                typeUrl: string;
                value: _1124.MsgBeginUnlocking;
            };
        };
        messages: {
            lockTokens(value: _1124.MsgLockTokens): {
                typeUrl: string;
                value: _1124.MsgLockTokens;
            };
            beginUnlockingAll(value: _1124.MsgBeginUnlockingAll): {
                typeUrl: string;
                value: _1124.MsgBeginUnlockingAll;
            };
            beginUnlocking(value: _1124.MsgBeginUnlocking): {
                typeUrl: string;
                value: _1124.MsgBeginUnlocking;
            };
        };
        ModuleBalanceRequest: {
            encode(_: _1122.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.ModuleBalanceRequest;
            fromJSON(_: any): _1122.ModuleBalanceRequest;
            toJSON(_: _1122.ModuleBalanceRequest): unknown;
            fromPartial<I_6 extends unknown>(_: I_6): _1122.ModuleBalanceRequest;
        };
        ModuleBalanceResponse: {
            encode(message: _1122.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.ModuleBalanceResponse;
            fromJSON(object: any): _1122.ModuleBalanceResponse;
            toJSON(message: _1122.ModuleBalanceResponse): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _1122.ModuleBalanceResponse;
        };
        ModuleLockedAmountRequest: {
            encode(_: _1122.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.ModuleLockedAmountRequest;
            fromJSON(_: any): _1122.ModuleLockedAmountRequest;
            toJSON(_: _1122.ModuleLockedAmountRequest): unknown;
            fromPartial<I_8 extends unknown>(_: I_8): _1122.ModuleLockedAmountRequest;
        };
        ModuleLockedAmountResponse: {
            encode(message: _1122.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.ModuleLockedAmountResponse;
            fromJSON(object: any): _1122.ModuleLockedAmountResponse;
            toJSON(message: _1122.ModuleLockedAmountResponse): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _1122.ModuleLockedAmountResponse;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _1122.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.AccountUnlockableCoinsRequest;
            fromJSON(object: any): _1122.AccountUnlockableCoinsRequest;
            toJSON(message: _1122.AccountUnlockableCoinsRequest): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _1122.AccountUnlockableCoinsRequest;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _1122.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.AccountUnlockableCoinsResponse;
            fromJSON(object: any): _1122.AccountUnlockableCoinsResponse;
            toJSON(message: _1122.AccountUnlockableCoinsResponse): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _1122.AccountUnlockableCoinsResponse;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _1122.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.AccountUnlockingCoinsRequest;
            fromJSON(object: any): _1122.AccountUnlockingCoinsRequest;
            toJSON(message: _1122.AccountUnlockingCoinsRequest): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _1122.AccountUnlockingCoinsRequest;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _1122.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.AccountUnlockingCoinsResponse;
            fromJSON(object: any): _1122.AccountUnlockingCoinsResponse;
            toJSON(message: _1122.AccountUnlockingCoinsResponse): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _1122.AccountUnlockingCoinsResponse;
        };
        AccountLockedCoinsRequest: {
            encode(message: _1122.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.AccountLockedCoinsRequest;
            fromJSON(object: any): _1122.AccountLockedCoinsRequest;
            toJSON(message: _1122.AccountLockedCoinsRequest): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _1122.AccountLockedCoinsRequest;
        };
        AccountLockedCoinsResponse: {
            encode(message: _1122.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.AccountLockedCoinsResponse;
            fromJSON(object: any): _1122.AccountLockedCoinsResponse;
            toJSON(message: _1122.AccountLockedCoinsResponse): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _1122.AccountLockedCoinsResponse;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _1122.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.AccountLockedPastTimeRequest;
            fromJSON(object: any): _1122.AccountLockedPastTimeRequest;
            toJSON(message: _1122.AccountLockedPastTimeRequest): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _1122.AccountLockedPastTimeRequest;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _1122.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.AccountLockedPastTimeResponse;
            fromJSON(object: any): _1122.AccountLockedPastTimeResponse;
            toJSON(message: _1122.AccountLockedPastTimeResponse): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _1122.AccountLockedPastTimeResponse;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _1122.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromJSON(object: any): _1122.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toJSON(message: _1122.AccountLockedPastTimeNotUnlockingOnlyRequest): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _1122.AccountLockedPastTimeNotUnlockingOnlyRequest;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _1122.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromJSON(object: any): _1122.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toJSON(message: _1122.AccountLockedPastTimeNotUnlockingOnlyResponse): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _1122.AccountLockedPastTimeNotUnlockingOnlyResponse;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _1122.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.AccountUnlockedBeforeTimeRequest;
            fromJSON(object: any): _1122.AccountUnlockedBeforeTimeRequest;
            toJSON(message: _1122.AccountUnlockedBeforeTimeRequest): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _1122.AccountUnlockedBeforeTimeRequest;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _1122.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.AccountUnlockedBeforeTimeResponse;
            fromJSON(object: any): _1122.AccountUnlockedBeforeTimeResponse;
            toJSON(message: _1122.AccountUnlockedBeforeTimeResponse): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _1122.AccountUnlockedBeforeTimeResponse;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _1122.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.AccountLockedPastTimeDenomRequest;
            fromJSON(object: any): _1122.AccountLockedPastTimeDenomRequest;
            toJSON(message: _1122.AccountLockedPastTimeDenomRequest): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _1122.AccountLockedPastTimeDenomRequest;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _1122.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.AccountLockedPastTimeDenomResponse;
            fromJSON(object: any): _1122.AccountLockedPastTimeDenomResponse;
            toJSON(message: _1122.AccountLockedPastTimeDenomResponse): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _1122.AccountLockedPastTimeDenomResponse;
        };
        LockedDenomRequest: {
            encode(message: _1122.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.LockedDenomRequest;
            fromJSON(object: any): _1122.LockedDenomRequest;
            toJSON(message: _1122.LockedDenomRequest): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _1122.LockedDenomRequest;
        };
        LockedDenomResponse: {
            encode(message: _1122.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.LockedDenomResponse;
            fromJSON(object: any): _1122.LockedDenomResponse;
            toJSON(message: _1122.LockedDenomResponse): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _1122.LockedDenomResponse;
        };
        LockedRequest: {
            encode(message: _1122.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.LockedRequest;
            fromJSON(object: any): _1122.LockedRequest;
            toJSON(message: _1122.LockedRequest): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _1122.LockedRequest;
        };
        LockedResponse: {
            encode(message: _1122.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.LockedResponse;
            fromJSON(object: any): _1122.LockedResponse;
            toJSON(message: _1122.LockedResponse): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _1122.LockedResponse;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _1122.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.SyntheticLockupsByLockupIDRequest;
            fromJSON(object: any): _1122.SyntheticLockupsByLockupIDRequest;
            toJSON(message: _1122.SyntheticLockupsByLockupIDRequest): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _1122.SyntheticLockupsByLockupIDRequest;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _1122.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.SyntheticLockupsByLockupIDResponse;
            fromJSON(object: any): _1122.SyntheticLockupsByLockupIDResponse;
            toJSON(message: _1122.SyntheticLockupsByLockupIDResponse): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _1122.SyntheticLockupsByLockupIDResponse;
        };
        AccountLockedLongerDurationRequest: {
            encode(message: _1122.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.AccountLockedLongerDurationRequest;
            fromJSON(object: any): _1122.AccountLockedLongerDurationRequest;
            toJSON(message: _1122.AccountLockedLongerDurationRequest): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _1122.AccountLockedLongerDurationRequest;
        };
        AccountLockedLongerDurationResponse: {
            encode(message: _1122.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.AccountLockedLongerDurationResponse;
            fromJSON(object: any): _1122.AccountLockedLongerDurationResponse;
            toJSON(message: _1122.AccountLockedLongerDurationResponse): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _1122.AccountLockedLongerDurationResponse;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            encode(message: _1122.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromJSON(object: any): _1122.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toJSON(message: _1122.AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _1122.AccountLockedLongerDurationNotUnlockingOnlyRequest;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            encode(message: _1122.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromJSON(object: any): _1122.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toJSON(message: _1122.AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _1122.AccountLockedLongerDurationNotUnlockingOnlyResponse;
        };
        AccountLockedLongerDurationDenomRequest: {
            encode(message: _1122.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.AccountLockedLongerDurationDenomRequest;
            fromJSON(object: any): _1122.AccountLockedLongerDurationDenomRequest;
            toJSON(message: _1122.AccountLockedLongerDurationDenomRequest): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _1122.AccountLockedLongerDurationDenomRequest;
        };
        AccountLockedLongerDurationDenomResponse: {
            encode(message: _1122.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1122.AccountLockedLongerDurationDenomResponse;
            fromJSON(object: any): _1122.AccountLockedLongerDurationDenomResponse;
            toJSON(message: _1122.AccountLockedLongerDurationDenomResponse): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _1122.AccountLockedLongerDurationDenomResponse;
        };
        lockQueryTypeFromJSON(object: any): _1120.LockQueryType;
        lockQueryTypeToJSON(object: _1120.LockQueryType): string;
        LockQueryType: typeof _1120.LockQueryType;
        PeriodLock: {
            encode(message: _1120.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1120.PeriodLock;
            fromJSON(object: any): _1120.PeriodLock;
            toJSON(message: _1120.PeriodLock): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _1120.PeriodLock;
        };
        QueryCondition: {
            encode(message: _1120.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1120.QueryCondition;
            fromJSON(object: any): _1120.QueryCondition;
            toJSON(message: _1120.QueryCondition): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _1120.QueryCondition;
        };
        SyntheticLock: {
            encode(message: _1120.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1120.SyntheticLock;
            fromJSON(object: any): _1120.SyntheticLock;
            toJSON(message: _1120.SyntheticLock): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _1120.SyntheticLock;
        };
        GenesisState: {
            encode(message: _1118.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1118.GenesisState;
            fromJSON(object: any): _1118.GenesisState;
            toJSON(message: _1118.GenesisState): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _1118.GenesisState;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _1136.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1136.QueryParamsRequest;
                fromJSON(_: any): _1136.QueryParamsRequest;
                toJSON(_: _1136.QueryParamsRequest): unknown;
                fromPartial<I extends unknown>(_: I): _1136.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _1136.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1136.QueryParamsResponse;
                fromJSON(object: any): _1136.QueryParamsResponse;
                toJSON(message: _1136.QueryParamsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _1136.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _1136.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1136.QueryEpochProvisionsRequest;
                fromJSON(_: any): _1136.QueryEpochProvisionsRequest;
                toJSON(_: _1136.QueryEpochProvisionsRequest): unknown;
                fromPartial<I_2 extends unknown>(_: I_2): _1136.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _1136.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1136.QueryEpochProvisionsResponse;
                fromJSON(object: any): _1136.QueryEpochProvisionsResponse;
                toJSON(message: _1136.QueryEpochProvisionsResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _1136.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _1134.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1134.Minter;
                fromJSON(object: any): _1134.Minter;
                toJSON(message: _1134.Minter): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _1134.Minter;
            };
            WeightedAddress: {
                encode(message: _1134.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1134.WeightedAddress;
                fromJSON(object: any): _1134.WeightedAddress;
                toJSON(message: _1134.WeightedAddress): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _1134.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _1134.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1134.DistributionProportions;
                fromJSON(object: any): _1134.DistributionProportions;
                toJSON(message: _1134.DistributionProportions): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _1134.DistributionProportions;
            };
            Params: {
                encode(message: _1134.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1134.Params;
                fromJSON(object: any): _1134.Params;
                toJSON(message: _1134.Params): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _1134.Params;
            };
            GenesisState: {
                encode(message: _1132.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1132.GenesisState;
                fromJSON(object: any): _1132.GenesisState;
                toJSON(message: _1132.GenesisState): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _1132.GenesisState;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryGaugeIdsRequest: {
                encode(message: _1144.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1144.QueryGaugeIdsRequest;
                fromJSON(object: any): _1144.QueryGaugeIdsRequest;
                toJSON(message: _1144.QueryGaugeIdsRequest): unknown;
                fromPartial<I extends unknown>(object: I): _1144.QueryGaugeIdsRequest;
            };
            QueryGaugeIdsResponse: {
                encode(message: _1144.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1144.QueryGaugeIdsResponse;
                fromJSON(object: any): _1144.QueryGaugeIdsResponse;
                toJSON(message: _1144.QueryGaugeIdsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _1144.QueryGaugeIdsResponse;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                encode(message: _1144.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1144.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromJSON(object: any): _1144.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toJSON(message: _1144.QueryGaugeIdsResponse_GaugeIdWithDuration): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _1144.QueryGaugeIdsResponse_GaugeIdWithDuration;
            };
            QueryDistrInfoRequest: {
                encode(_: _1144.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1144.QueryDistrInfoRequest;
                fromJSON(_: any): _1144.QueryDistrInfoRequest;
                toJSON(_: _1144.QueryDistrInfoRequest): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _1144.QueryDistrInfoRequest;
            };
            QueryDistrInfoResponse: {
                encode(message: _1144.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1144.QueryDistrInfoResponse;
                fromJSON(object: any): _1144.QueryDistrInfoResponse;
                toJSON(message: _1144.QueryDistrInfoResponse): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _1144.QueryDistrInfoResponse;
            };
            QueryParamsRequest: {
                encode(_: _1144.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1144.QueryParamsRequest;
                fromJSON(_: any): _1144.QueryParamsRequest;
                toJSON(_: _1144.QueryParamsRequest): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _1144.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _1144.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1144.QueryParamsResponse;
                fromJSON(object: any): _1144.QueryParamsResponse;
                toJSON(message: _1144.QueryParamsResponse): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _1144.QueryParamsResponse;
            };
            QueryLockableDurationsRequest: {
                encode(_: _1144.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1144.QueryLockableDurationsRequest;
                fromJSON(_: any): _1144.QueryLockableDurationsRequest;
                toJSON(_: _1144.QueryLockableDurationsRequest): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _1144.QueryLockableDurationsRequest;
            };
            QueryLockableDurationsResponse: {
                encode(message: _1144.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1144.QueryLockableDurationsResponse;
                fromJSON(object: any): _1144.QueryLockableDurationsResponse;
                toJSON(message: _1144.QueryLockableDurationsResponse): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _1144.QueryLockableDurationsResponse;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _1144.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1144.QueryIncentivizedPoolsRequest;
                fromJSON(_: any): _1144.QueryIncentivizedPoolsRequest;
                toJSON(_: _1144.QueryIncentivizedPoolsRequest): unknown;
                fromPartial<I_9 extends unknown>(_: I_9): _1144.QueryIncentivizedPoolsRequest;
            };
            IncentivizedPool: {
                encode(message: _1144.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1144.IncentivizedPool;
                fromJSON(object: any): _1144.IncentivizedPool;
                toJSON(message: _1144.IncentivizedPool): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _1144.IncentivizedPool;
            };
            QueryIncentivizedPoolsResponse: {
                encode(message: _1144.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1144.QueryIncentivizedPoolsResponse;
                fromJSON(object: any): _1144.QueryIncentivizedPoolsResponse;
                toJSON(message: _1144.QueryIncentivizedPoolsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _1144.QueryIncentivizedPoolsResponse;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _1144.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1144.QueryExternalIncentiveGaugesRequest;
                fromJSON(_: any): _1144.QueryExternalIncentiveGaugesRequest;
                toJSON(_: _1144.QueryExternalIncentiveGaugesRequest): unknown;
                fromPartial<I_12 extends unknown>(_: I_12): _1144.QueryExternalIncentiveGaugesRequest;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _1144.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1144.QueryExternalIncentiveGaugesResponse;
                fromJSON(object: any): _1144.QueryExternalIncentiveGaugesResponse;
                toJSON(message: _1144.QueryExternalIncentiveGaugesResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _1144.QueryExternalIncentiveGaugesResponse;
            };
            Params: {
                encode(message: _1142.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1142.Params;
                fromJSON(object: any): _1142.Params;
                toJSON(message: _1142.Params): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _1142.Params;
            };
            LockableDurationsInfo: {
                encode(message: _1142.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1142.LockableDurationsInfo;
                fromJSON(object: any): _1142.LockableDurationsInfo;
                toJSON(message: _1142.LockableDurationsInfo): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _1142.LockableDurationsInfo;
            };
            DistrInfo: {
                encode(message: _1142.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1142.DistrInfo;
                fromJSON(object: any): _1142.DistrInfo;
                toJSON(message: _1142.DistrInfo): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _1142.DistrInfo;
            };
            DistrRecord: {
                encode(message: _1142.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1142.DistrRecord;
                fromJSON(object: any): _1142.DistrRecord;
                toJSON(message: _1142.DistrRecord): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _1142.DistrRecord;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _1140.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1140.ReplacePoolIncentivesProposal;
                fromJSON(object: any): _1140.ReplacePoolIncentivesProposal;
                toJSON(message: _1140.ReplacePoolIncentivesProposal): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _1140.ReplacePoolIncentivesProposal;
            };
            UpdatePoolIncentivesProposal: {
                encode(message: _1140.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1140.UpdatePoolIncentivesProposal;
                fromJSON(object: any): _1140.UpdatePoolIncentivesProposal;
                toJSON(message: _1140.UpdatePoolIncentivesProposal): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _1140.UpdatePoolIncentivesProposal;
            };
            GenesisState: {
                encode(message: _1138.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1138.GenesisState;
                fromJSON(object: any): _1138.GenesisState;
                toJSON(message: _1138.GenesisState): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _1138.GenesisState;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                encode(message: _1146.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1146.Node;
                fromJSON(object: any): _1146.Node;
                toJSON(message: _1146.Node): unknown;
                fromPartial<I extends unknown>(object: I): _1146.Node;
            };
            Child: {
                encode(message: _1146.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1146.Child;
                fromJSON(object: any): _1146.Child;
                toJSON(message: _1146.Child): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _1146.Child;
            };
            Leaf: {
                encode(message: _1146.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1146.Leaf;
                fromJSON(object: any): _1146.Leaf;
                toJSON(message: _1146.Leaf): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _1146.Leaf;
            };
        };
    }
    const superfluid: {
        MsgSuperfluidDelegate: {
            encode(message: _1156.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1156.MsgSuperfluidDelegate;
            fromJSON(object: any): _1156.MsgSuperfluidDelegate;
            toJSON(message: _1156.MsgSuperfluidDelegate): unknown;
            fromPartial<I extends unknown>(object: I): _1156.MsgSuperfluidDelegate;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _1156.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1156.MsgSuperfluidDelegateResponse;
            fromJSON(_: any): _1156.MsgSuperfluidDelegateResponse;
            toJSON(_: _1156.MsgSuperfluidDelegateResponse): unknown;
            fromPartial<I_1 extends unknown>(_: I_1): _1156.MsgSuperfluidDelegateResponse;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _1156.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1156.MsgSuperfluidUndelegate;
            fromJSON(object: any): _1156.MsgSuperfluidUndelegate;
            toJSON(message: _1156.MsgSuperfluidUndelegate): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _1156.MsgSuperfluidUndelegate;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _1156.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1156.MsgSuperfluidUndelegateResponse;
            fromJSON(_: any): _1156.MsgSuperfluidUndelegateResponse;
            toJSON(_: _1156.MsgSuperfluidUndelegateResponse): unknown;
            fromPartial<I_3 extends unknown>(_: I_3): _1156.MsgSuperfluidUndelegateResponse;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _1156.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1156.MsgSuperfluidUnbondLock;
            fromJSON(object: any): _1156.MsgSuperfluidUnbondLock;
            toJSON(message: _1156.MsgSuperfluidUnbondLock): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _1156.MsgSuperfluidUnbondLock;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _1156.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1156.MsgSuperfluidUnbondLockResponse;
            fromJSON(_: any): _1156.MsgSuperfluidUnbondLockResponse;
            toJSON(_: _1156.MsgSuperfluidUnbondLockResponse): unknown;
            fromPartial<I_5 extends unknown>(_: I_5): _1156.MsgSuperfluidUnbondLockResponse;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _1156.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1156.MsgLockAndSuperfluidDelegate;
            fromJSON(object: any): _1156.MsgLockAndSuperfluidDelegate;
            toJSON(message: _1156.MsgLockAndSuperfluidDelegate): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _1156.MsgLockAndSuperfluidDelegate;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _1156.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1156.MsgLockAndSuperfluidDelegateResponse;
            fromJSON(object: any): _1156.MsgLockAndSuperfluidDelegateResponse;
            toJSON(message: _1156.MsgLockAndSuperfluidDelegateResponse): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _1156.MsgLockAndSuperfluidDelegateResponse;
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId, valAddr }: _1156.MsgSuperfluidDelegate) => {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                };
                fromAmino: ({ sender, lock_id, val_addr }: {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                }) => _1156.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _1156.MsgSuperfluidUndelegate) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _1156.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _1156.MsgSuperfluidUnbondLock) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _1156.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, coins, valAddr }: _1156.MsgLockAndSuperfluidDelegate) => {
                    sender: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    val_addr: string;
                };
                fromAmino: ({ sender, coins, val_addr }: {
                    sender: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    val_addr: string;
                }) => _1156.MsgLockAndSuperfluidDelegate;
            };
        };
        encoded: {
            superfluidDelegate(value: _1156.MsgSuperfluidDelegate): {
                type_url: string;
                value: Uint8Array;
            };
            superfluidUndelegate(value: _1156.MsgSuperfluidUndelegate): {
                type_url: string;
                value: Uint8Array;
            };
            superfluidUnbondLock(value: _1156.MsgSuperfluidUnbondLock): {
                type_url: string;
                value: Uint8Array;
            };
            lockAndSuperfluidDelegate(value: _1156.MsgLockAndSuperfluidDelegate): {
                type_url: string;
                value: Uint8Array;
            };
        };
        fromJSON: {
            superfluidDelegate(value: any): {
                typeUrl: string;
                value: _1156.MsgSuperfluidDelegate;
            };
            superfluidUndelegate(value: any): {
                typeUrl: string;
                value: _1156.MsgSuperfluidUndelegate;
            };
            superfluidUnbondLock(value: any): {
                typeUrl: string;
                value: _1156.MsgSuperfluidUnbondLock;
            };
            lockAndSuperfluidDelegate(value: any): {
                typeUrl: string;
                value: _1156.MsgLockAndSuperfluidDelegate;
            };
        };
        toJSON: {
            superfluidDelegate(value: _1156.MsgSuperfluidDelegate): {
                typeUrl: string;
                value: unknown;
            };
            superfluidUndelegate(value: _1156.MsgSuperfluidUndelegate): {
                typeUrl: string;
                value: unknown;
            };
            superfluidUnbondLock(value: _1156.MsgSuperfluidUnbondLock): {
                typeUrl: string;
                value: unknown;
            };
            lockAndSuperfluidDelegate(value: _1156.MsgLockAndSuperfluidDelegate): {
                typeUrl: string;
                value: unknown;
            };
        };
        json: {
            superfluidDelegate(value: _1156.MsgSuperfluidDelegate): {
                typeUrl: string;
                value: _1156.MsgSuperfluidDelegate;
            };
            superfluidUndelegate(value: _1156.MsgSuperfluidUndelegate): {
                typeUrl: string;
                value: _1156.MsgSuperfluidUndelegate;
            };
            superfluidUnbondLock(value: _1156.MsgSuperfluidUnbondLock): {
                typeUrl: string;
                value: _1156.MsgSuperfluidUnbondLock;
            };
            lockAndSuperfluidDelegate(value: _1156.MsgLockAndSuperfluidDelegate): {
                typeUrl: string;
                value: _1156.MsgLockAndSuperfluidDelegate;
            };
        };
        messages: {
            superfluidDelegate(value: _1156.MsgSuperfluidDelegate): {
                typeUrl: string;
                value: _1156.MsgSuperfluidDelegate;
            };
            superfluidUndelegate(value: _1156.MsgSuperfluidUndelegate): {
                typeUrl: string;
                value: _1156.MsgSuperfluidUndelegate;
            };
            superfluidUnbondLock(value: _1156.MsgSuperfluidUnbondLock): {
                typeUrl: string;
                value: _1156.MsgSuperfluidUnbondLock;
            };
            lockAndSuperfluidDelegate(value: _1156.MsgLockAndSuperfluidDelegate): {
                typeUrl: string;
                value: _1156.MsgLockAndSuperfluidDelegate;
            };
        };
        superfluidAssetTypeFromJSON(object: any): _1154.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _1154.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _1154.SuperfluidAssetType;
        SuperfluidAsset: {
            encode(message: _1154.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1154.SuperfluidAsset;
            fromJSON(object: any): _1154.SuperfluidAsset;
            toJSON(message: _1154.SuperfluidAsset): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _1154.SuperfluidAsset;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _1154.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1154.SuperfluidIntermediaryAccount;
            fromJSON(object: any): _1154.SuperfluidIntermediaryAccount;
            toJSON(message: _1154.SuperfluidIntermediaryAccount): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _1154.SuperfluidIntermediaryAccount;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _1154.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1154.OsmoEquivalentMultiplierRecord;
            fromJSON(object: any): _1154.OsmoEquivalentMultiplierRecord;
            toJSON(message: _1154.OsmoEquivalentMultiplierRecord): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _1154.OsmoEquivalentMultiplierRecord;
        };
        SuperfluidDelegationRecord: {
            encode(message: _1154.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1154.SuperfluidDelegationRecord;
            fromJSON(object: any): _1154.SuperfluidDelegationRecord;
            toJSON(message: _1154.SuperfluidDelegationRecord): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _1154.SuperfluidDelegationRecord;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _1154.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1154.LockIdIntermediaryAccountConnection;
            fromJSON(object: any): _1154.LockIdIntermediaryAccountConnection;
            toJSON(message: _1154.LockIdIntermediaryAccountConnection): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _1154.LockIdIntermediaryAccountConnection;
        };
        QueryParamsRequest: {
            encode(_: _1152.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1152.QueryParamsRequest;
            fromJSON(_: any): _1152.QueryParamsRequest;
            toJSON(_: _1152.QueryParamsRequest): unknown;
            fromPartial<I_13 extends unknown>(_: I_13): _1152.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _1152.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1152.QueryParamsResponse;
            fromJSON(object: any): _1152.QueryParamsResponse;
            toJSON(message: _1152.QueryParamsResponse): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _1152.QueryParamsResponse;
        };
        AssetTypeRequest: {
            encode(message: _1152.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1152.AssetTypeRequest;
            fromJSON(object: any): _1152.AssetTypeRequest;
            toJSON(message: _1152.AssetTypeRequest): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _1152.AssetTypeRequest;
        };
        AssetTypeResponse: {
            encode(message: _1152.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1152.AssetTypeResponse;
            fromJSON(object: any): _1152.AssetTypeResponse;
            toJSON(message: _1152.AssetTypeResponse): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _1152.AssetTypeResponse;
        };
        AllAssetsRequest: {
            encode(_: _1152.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1152.AllAssetsRequest;
            fromJSON(_: any): _1152.AllAssetsRequest;
            toJSON(_: _1152.AllAssetsRequest): unknown;
            fromPartial<I_17 extends unknown>(_: I_17): _1152.AllAssetsRequest;
        };
        AllAssetsResponse: {
            encode(message: _1152.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1152.AllAssetsResponse;
            fromJSON(object: any): _1152.AllAssetsResponse;
            toJSON(message: _1152.AllAssetsResponse): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _1152.AllAssetsResponse;
        };
        AssetMultiplierRequest: {
            encode(message: _1152.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1152.AssetMultiplierRequest;
            fromJSON(object: any): _1152.AssetMultiplierRequest;
            toJSON(message: _1152.AssetMultiplierRequest): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _1152.AssetMultiplierRequest;
        };
        AssetMultiplierResponse: {
            encode(message: _1152.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1152.AssetMultiplierResponse;
            fromJSON(object: any): _1152.AssetMultiplierResponse;
            toJSON(message: _1152.AssetMultiplierResponse): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _1152.AssetMultiplierResponse;
        };
        SuperfluidIntermediaryAccountInfo: {
            encode(message: _1152.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1152.SuperfluidIntermediaryAccountInfo;
            fromJSON(object: any): _1152.SuperfluidIntermediaryAccountInfo;
            toJSON(message: _1152.SuperfluidIntermediaryAccountInfo): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _1152.SuperfluidIntermediaryAccountInfo;
        };
        AllIntermediaryAccountsRequest: {
            encode(message: _1152.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1152.AllIntermediaryAccountsRequest;
            fromJSON(object: any): _1152.AllIntermediaryAccountsRequest;
            toJSON(message: _1152.AllIntermediaryAccountsRequest): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _1152.AllIntermediaryAccountsRequest;
        };
        AllIntermediaryAccountsResponse: {
            encode(message: _1152.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1152.AllIntermediaryAccountsResponse;
            fromJSON(object: any): _1152.AllIntermediaryAccountsResponse;
            toJSON(message: _1152.AllIntermediaryAccountsResponse): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _1152.AllIntermediaryAccountsResponse;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _1152.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1152.ConnectedIntermediaryAccountRequest;
            fromJSON(object: any): _1152.ConnectedIntermediaryAccountRequest;
            toJSON(message: _1152.ConnectedIntermediaryAccountRequest): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _1152.ConnectedIntermediaryAccountRequest;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _1152.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1152.ConnectedIntermediaryAccountResponse;
            fromJSON(object: any): _1152.ConnectedIntermediaryAccountResponse;
            toJSON(message: _1152.ConnectedIntermediaryAccountResponse): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _1152.ConnectedIntermediaryAccountResponse;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _1152.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1152.TotalSuperfluidDelegationsRequest;
            fromJSON(_: any): _1152.TotalSuperfluidDelegationsRequest;
            toJSON(_: _1152.TotalSuperfluidDelegationsRequest): unknown;
            fromPartial<I_26 extends unknown>(_: I_26): _1152.TotalSuperfluidDelegationsRequest;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _1152.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1152.TotalSuperfluidDelegationsResponse;
            fromJSON(object: any): _1152.TotalSuperfluidDelegationsResponse;
            toJSON(message: _1152.TotalSuperfluidDelegationsResponse): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _1152.TotalSuperfluidDelegationsResponse;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _1152.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1152.SuperfluidDelegationAmountRequest;
            fromJSON(object: any): _1152.SuperfluidDelegationAmountRequest;
            toJSON(message: _1152.SuperfluidDelegationAmountRequest): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _1152.SuperfluidDelegationAmountRequest;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _1152.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1152.SuperfluidDelegationAmountResponse;
            fromJSON(object: any): _1152.SuperfluidDelegationAmountResponse;
            toJSON(message: _1152.SuperfluidDelegationAmountResponse): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _1152.SuperfluidDelegationAmountResponse;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _1152.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1152.SuperfluidDelegationsByDelegatorRequest;
            fromJSON(object: any): _1152.SuperfluidDelegationsByDelegatorRequest;
            toJSON(message: _1152.SuperfluidDelegationsByDelegatorRequest): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _1152.SuperfluidDelegationsByDelegatorRequest;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _1152.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1152.SuperfluidDelegationsByDelegatorResponse;
            fromJSON(object: any): _1152.SuperfluidDelegationsByDelegatorResponse;
            toJSON(message: _1152.SuperfluidDelegationsByDelegatorResponse): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _1152.SuperfluidDelegationsByDelegatorResponse;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _1152.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1152.SuperfluidUndelegationsByDelegatorRequest;
            fromJSON(object: any): _1152.SuperfluidUndelegationsByDelegatorRequest;
            toJSON(message: _1152.SuperfluidUndelegationsByDelegatorRequest): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _1152.SuperfluidUndelegationsByDelegatorRequest;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _1152.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1152.SuperfluidUndelegationsByDelegatorResponse;
            fromJSON(object: any): _1152.SuperfluidUndelegationsByDelegatorResponse;
            toJSON(message: _1152.SuperfluidUndelegationsByDelegatorResponse): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _1152.SuperfluidUndelegationsByDelegatorResponse;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _1152.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1152.SuperfluidDelegationsByValidatorDenomRequest;
            fromJSON(object: any): _1152.SuperfluidDelegationsByValidatorDenomRequest;
            toJSON(message: _1152.SuperfluidDelegationsByValidatorDenomRequest): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _1152.SuperfluidDelegationsByValidatorDenomRequest;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _1152.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1152.SuperfluidDelegationsByValidatorDenomResponse;
            fromJSON(object: any): _1152.SuperfluidDelegationsByValidatorDenomResponse;
            toJSON(message: _1152.SuperfluidDelegationsByValidatorDenomResponse): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _1152.SuperfluidDelegationsByValidatorDenomResponse;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _1152.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1152.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromJSON(object: any): _1152.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toJSON(message: _1152.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _1152.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _1152.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1152.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromJSON(object: any): _1152.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toJSON(message: _1152.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _1152.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
        };
        Params: {
            encode(message: _1150.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1150.Params;
            fromJSON(object: any): _1150.Params;
            toJSON(message: _1150.Params): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _1150.Params;
        };
        GenesisState: {
            encode(message: _1148.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1148.GenesisState;
            fromJSON(object: any): _1148.GenesisState;
            toJSON(message: _1148.GenesisState): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _1148.GenesisState;
        };
    };
    namespace txfees {
        const v1beta1: {
            QueryFeeTokensRequest: {
                encode(_: _1170.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1170.QueryFeeTokensRequest;
                fromJSON(_: any): _1170.QueryFeeTokensRequest;
                toJSON(_: _1170.QueryFeeTokensRequest): unknown;
                fromPartial<I extends unknown>(_: I): _1170.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _1170.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1170.QueryFeeTokensResponse;
                fromJSON(object: any): _1170.QueryFeeTokensResponse;
                toJSON(message: _1170.QueryFeeTokensResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _1170.QueryFeeTokensResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _1170.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1170.QueryDenomPoolIdRequest;
                fromJSON(object: any): _1170.QueryDenomPoolIdRequest;
                toJSON(message: _1170.QueryDenomPoolIdRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _1170.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _1170.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1170.QueryDenomPoolIdResponse;
                fromJSON(object: any): _1170.QueryDenomPoolIdResponse;
                toJSON(message: _1170.QueryDenomPoolIdResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _1170.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _1170.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1170.QueryBaseDenomRequest;
                fromJSON(_: any): _1170.QueryBaseDenomRequest;
                toJSON(_: _1170.QueryBaseDenomRequest): unknown;
                fromPartial<I_4 extends unknown>(_: I_4): _1170.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _1170.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1170.QueryBaseDenomResponse;
                fromJSON(object: any): _1170.QueryBaseDenomResponse;
                toJSON(message: _1170.QueryBaseDenomResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _1170.QueryBaseDenomResponse;
            };
            UpdateFeeTokenProposal: {
                encode(message: _1168.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1168.UpdateFeeTokenProposal;
                fromJSON(object: any): _1168.UpdateFeeTokenProposal;
                toJSON(message: _1168.UpdateFeeTokenProposal): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _1168.UpdateFeeTokenProposal;
            };
            GenesisState: {
                encode(message: _1166.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1166.GenesisState;
                fromJSON(object: any): _1166.GenesisState;
                toJSON(message: _1166.GenesisState): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _1166.GenesisState;
            };
            FeeToken: {
                encode(message: _1164.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1164.FeeToken;
                fromJSON(object: any): _1164.FeeToken;
                toJSON(message: _1164.FeeToken): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _1164.FeeToken;
            };
        };
    }
}
