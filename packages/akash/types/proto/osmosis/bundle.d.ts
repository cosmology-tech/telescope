import * as _981 from "./claim/v1beta1/claim";
import * as _982 from "./claim/v1beta1/genesis";
import * as _983 from "./claim/v1beta1/params";
import * as _984 from "./claim/v1beta1/query";
import * as _985 from "./epochs/genesis";
import * as _986 from "./epochs/query";
import * as _987 from "./gamm/pool-models/balancer/balancerPool";
import * as _988 from "./gamm/pool-models/balancer/tx";
import * as _989 from "./gamm/v1beta1/genesis";
import * as _990 from "./gamm/v1beta1/query";
import * as _991 from "./gamm/v1beta1/tx";
import * as _1000 from "./incentives/gauge";
import * as _1001 from "./incentives/genesis";
import * as _1002 from "./incentives/params";
import * as _1003 from "./incentives/query";
import * as _1004 from "./incentives/tx";
import * as _1013 from "./lockup/genesis";
import * as _1014 from "./lockup/lock";
import * as _1015 from "./lockup/query";
import * as _1016 from "./lockup/tx";
import * as _1025 from "./mint/v1beta1/genesis";
import * as _1026 from "./mint/v1beta1/mint";
import * as _1027 from "./mint/v1beta1/query";
import * as _1028 from "./pool-incentives/v1beta1/genesis";
import * as _1029 from "./pool-incentives/v1beta1/gov";
import * as _1030 from "./pool-incentives/v1beta1/incentives";
import * as _1031 from "./pool-incentives/v1beta1/query";
import * as _1032 from "./store/v1beta1/tree";
import * as _1033 from "./superfluid/genesis";
import * as _1034 from "./superfluid/params";
import * as _1035 from "./superfluid/query";
import * as _1036 from "./superfluid/superfluid";
import * as _1037 from "./superfluid/tx";
import * as _1046 from "./txfees/v1beta1/feetoken";
import * as _1047 from "./txfees/v1beta1/genesis";
import * as _1048 from "./txfees/v1beta1/gov";
import * as _1049 from "./txfees/v1beta1/query";
export declare namespace osmosis {
    namespace claim {
        const v1beta1: {
            QueryModuleAccountBalanceRequest: {
                encode(_: _984.QueryModuleAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _984.QueryModuleAccountBalanceRequest;
                fromJSON(_: any): _984.QueryModuleAccountBalanceRequest;
                toJSON(_: _984.QueryModuleAccountBalanceRequest): unknown;
                fromPartial<I extends unknown>(_: I): _984.QueryModuleAccountBalanceRequest;
            };
            QueryModuleAccountBalanceResponse: {
                encode(message: _984.QueryModuleAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _984.QueryModuleAccountBalanceResponse;
                fromJSON(object: any): _984.QueryModuleAccountBalanceResponse;
                toJSON(message: _984.QueryModuleAccountBalanceResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _984.QueryModuleAccountBalanceResponse;
            };
            QueryParamsRequest: {
                encode(_: _984.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _984.QueryParamsRequest;
                fromJSON(_: any): _984.QueryParamsRequest;
                toJSON(_: _984.QueryParamsRequest): unknown;
                fromPartial<I_2 extends unknown>(_: I_2): _984.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _984.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _984.QueryParamsResponse;
                fromJSON(object: any): _984.QueryParamsResponse;
                toJSON(message: _984.QueryParamsResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _984.QueryParamsResponse;
            };
            QueryClaimRecordRequest: {
                encode(message: _984.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _984.QueryClaimRecordRequest;
                fromJSON(object: any): _984.QueryClaimRecordRequest;
                toJSON(message: _984.QueryClaimRecordRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _984.QueryClaimRecordRequest;
            };
            QueryClaimRecordResponse: {
                encode(message: _984.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _984.QueryClaimRecordResponse;
                fromJSON(object: any): _984.QueryClaimRecordResponse;
                toJSON(message: _984.QueryClaimRecordResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _984.QueryClaimRecordResponse;
            };
            QueryClaimableForActionRequest: {
                encode(message: _984.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _984.QueryClaimableForActionRequest;
                fromJSON(object: any): _984.QueryClaimableForActionRequest;
                toJSON(message: _984.QueryClaimableForActionRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _984.QueryClaimableForActionRequest;
            };
            QueryClaimableForActionResponse: {
                encode(message: _984.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _984.QueryClaimableForActionResponse;
                fromJSON(object: any): _984.QueryClaimableForActionResponse;
                toJSON(message: _984.QueryClaimableForActionResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _984.QueryClaimableForActionResponse;
            };
            QueryTotalClaimableRequest: {
                encode(message: _984.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _984.QueryTotalClaimableRequest;
                fromJSON(object: any): _984.QueryTotalClaimableRequest;
                toJSON(message: _984.QueryTotalClaimableRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _984.QueryTotalClaimableRequest;
            };
            QueryTotalClaimableResponse: {
                encode(message: _984.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _984.QueryTotalClaimableResponse;
                fromJSON(object: any): _984.QueryTotalClaimableResponse;
                toJSON(message: _984.QueryTotalClaimableResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _984.QueryTotalClaimableResponse;
            };
            Params: {
                encode(message: _983.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _983.Params;
                fromJSON(object: any): _983.Params;
                toJSON(message: _983.Params): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _983.Params;
            };
            GenesisState: {
                encode(message: _982.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _982.GenesisState;
                fromJSON(object: any): _982.GenesisState;
                toJSON(message: _982.GenesisState): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _982.GenesisState;
            };
            actionFromJSON(object: any): _981.Action;
            actionToJSON(object: _981.Action): string;
            Action: typeof _981.Action;
            ClaimRecord: {
                encode(message: _981.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _981.ClaimRecord;
                fromJSON(object: any): _981.ClaimRecord;
                toJSON(message: _981.ClaimRecord): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _981.ClaimRecord;
            };
        };
    }
    namespace epochs {
        const v1beta1: {
            QueryEpochsInfoRequest: {
                encode(_: _986.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _986.QueryEpochsInfoRequest;
                fromJSON(_: any): _986.QueryEpochsInfoRequest;
                toJSON(_: _986.QueryEpochsInfoRequest): unknown;
                fromPartial<I extends unknown>(_: I): _986.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _986.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _986.QueryEpochsInfoResponse;
                fromJSON(object: any): _986.QueryEpochsInfoResponse;
                toJSON(message: _986.QueryEpochsInfoResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _986.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _986.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _986.QueryCurrentEpochRequest;
                fromJSON(object: any): _986.QueryCurrentEpochRequest;
                toJSON(message: _986.QueryCurrentEpochRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _986.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _986.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _986.QueryCurrentEpochResponse;
                fromJSON(object: any): _986.QueryCurrentEpochResponse;
                toJSON(message: _986.QueryCurrentEpochResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _986.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _985.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _985.EpochInfo;
                fromJSON(object: any): _985.EpochInfo;
                toJSON(message: _985.EpochInfo): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _985.EpochInfo;
            };
            GenesisState: {
                encode(message: _985.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _985.GenesisState;
                fromJSON(object: any): _985.GenesisState;
                toJSON(message: _985.GenesisState): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _985.GenesisState;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgJoinPool: {
                encode(message: _991.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _991.MsgJoinPool;
                fromJSON(object: any): _991.MsgJoinPool;
                toJSON(message: _991.MsgJoinPool): unknown;
                fromPartial<I extends unknown>(object: I): _991.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(_: _991.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _991.MsgJoinPoolResponse;
                fromJSON(_: any): _991.MsgJoinPoolResponse;
                toJSON(_: _991.MsgJoinPoolResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _991.MsgJoinPoolResponse;
            };
            MsgExitPool: {
                encode(message: _991.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _991.MsgExitPool;
                fromJSON(object: any): _991.MsgExitPool;
                toJSON(message: _991.MsgExitPool): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _991.MsgExitPool;
            };
            MsgExitPoolResponse: {
                encode(_: _991.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _991.MsgExitPoolResponse;
                fromJSON(_: any): _991.MsgExitPoolResponse;
                toJSON(_: _991.MsgExitPoolResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _991.MsgExitPoolResponse;
            };
            SwapAmountInRoute: {
                encode(message: _991.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _991.SwapAmountInRoute;
                fromJSON(object: any): _991.SwapAmountInRoute;
                toJSON(message: _991.SwapAmountInRoute): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _991.SwapAmountInRoute;
            };
            MsgSwapExactAmountIn: {
                encode(message: _991.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _991.MsgSwapExactAmountIn;
                fromJSON(object: any): _991.MsgSwapExactAmountIn;
                toJSON(message: _991.MsgSwapExactAmountIn): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _991.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _991.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _991.MsgSwapExactAmountInResponse;
                fromJSON(object: any): _991.MsgSwapExactAmountInResponse;
                toJSON(message: _991.MsgSwapExactAmountInResponse): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _991.MsgSwapExactAmountInResponse;
            };
            SwapAmountOutRoute: {
                encode(message: _991.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _991.SwapAmountOutRoute;
                fromJSON(object: any): _991.SwapAmountOutRoute;
                toJSON(message: _991.SwapAmountOutRoute): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _991.SwapAmountOutRoute;
            };
            MsgSwapExactAmountOut: {
                encode(message: _991.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _991.MsgSwapExactAmountOut;
                fromJSON(object: any): _991.MsgSwapExactAmountOut;
                toJSON(message: _991.MsgSwapExactAmountOut): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _991.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _991.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _991.MsgSwapExactAmountOutResponse;
                fromJSON(object: any): _991.MsgSwapExactAmountOutResponse;
                toJSON(message: _991.MsgSwapExactAmountOutResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _991.MsgSwapExactAmountOutResponse;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _991.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _991.MsgJoinSwapExternAmountIn;
                fromJSON(object: any): _991.MsgJoinSwapExternAmountIn;
                toJSON(message: _991.MsgJoinSwapExternAmountIn): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _991.MsgJoinSwapExternAmountIn;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _991.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _991.MsgJoinSwapExternAmountInResponse;
                fromJSON(object: any): _991.MsgJoinSwapExternAmountInResponse;
                toJSON(message: _991.MsgJoinSwapExternAmountInResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _991.MsgJoinSwapExternAmountInResponse;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _991.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _991.MsgJoinSwapShareAmountOut;
                fromJSON(object: any): _991.MsgJoinSwapShareAmountOut;
                toJSON(message: _991.MsgJoinSwapShareAmountOut): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _991.MsgJoinSwapShareAmountOut;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _991.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _991.MsgJoinSwapShareAmountOutResponse;
                fromJSON(object: any): _991.MsgJoinSwapShareAmountOutResponse;
                toJSON(message: _991.MsgJoinSwapShareAmountOutResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _991.MsgJoinSwapShareAmountOutResponse;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _991.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _991.MsgExitSwapShareAmountIn;
                fromJSON(object: any): _991.MsgExitSwapShareAmountIn;
                toJSON(message: _991.MsgExitSwapShareAmountIn): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _991.MsgExitSwapShareAmountIn;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _991.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _991.MsgExitSwapShareAmountInResponse;
                fromJSON(object: any): _991.MsgExitSwapShareAmountInResponse;
                toJSON(message: _991.MsgExitSwapShareAmountInResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _991.MsgExitSwapShareAmountInResponse;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _991.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _991.MsgExitSwapExternAmountOut;
                fromJSON(object: any): _991.MsgExitSwapExternAmountOut;
                toJSON(message: _991.MsgExitSwapExternAmountOut): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _991.MsgExitSwapExternAmountOut;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _991.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _991.MsgExitSwapExternAmountOutResponse;
                fromJSON(object: any): _991.MsgExitSwapExternAmountOutResponse;
                toJSON(message: _991.MsgExitSwapExternAmountOutResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _991.MsgExitSwapExternAmountOutResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: _991.MsgJoinPool) => {
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
                    }) => _991.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: _991.MsgExitPool) => {
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
                    }) => _991.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _991.MsgSwapExactAmountIn) => {
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
                    }) => _991.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _991.MsgSwapExactAmountOut) => {
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
                    }) => _991.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: _991.MsgJoinSwapExternAmountIn) => {
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
                    }) => _991.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: _991.MsgJoinSwapShareAmountOut) => {
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
                    }) => _991.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: _991.MsgExitSwapExternAmountOut) => {
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
                    }) => _991.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: _991.MsgExitSwapShareAmountIn) => {
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
                    }) => _991.MsgExitSwapShareAmountIn;
                };
            };
            encoded: {
                joinPool(value: _991.MsgJoinPool): {
                    type_url: string;
                    value: Uint8Array;
                };
                exitPool(value: _991.MsgExitPool): {
                    type_url: string;
                    value: Uint8Array;
                };
                swapExactAmountIn(value: _991.MsgSwapExactAmountIn): {
                    type_url: string;
                    value: Uint8Array;
                };
                swapExactAmountOut(value: _991.MsgSwapExactAmountOut): {
                    type_url: string;
                    value: Uint8Array;
                };
                joinSwapExternAmountIn(value: _991.MsgJoinSwapExternAmountIn): {
                    type_url: string;
                    value: Uint8Array;
                };
                joinSwapShareAmountOut(value: _991.MsgJoinSwapShareAmountOut): {
                    type_url: string;
                    value: Uint8Array;
                };
                exitSwapExternAmountOut(value: _991.MsgExitSwapExternAmountOut): {
                    type_url: string;
                    value: Uint8Array;
                };
                exitSwapShareAmountIn(value: _991.MsgExitSwapShareAmountIn): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                joinPool(value: any): {
                    typeUrl: string;
                    value: _991.MsgJoinPool;
                };
                exitPool(value: any): {
                    typeUrl: string;
                    value: _991.MsgExitPool;
                };
                swapExactAmountIn(value: any): {
                    typeUrl: string;
                    value: _991.MsgSwapExactAmountIn;
                };
                swapExactAmountOut(value: any): {
                    typeUrl: string;
                    value: _991.MsgSwapExactAmountOut;
                };
                joinSwapExternAmountIn(value: any): {
                    typeUrl: string;
                    value: _991.MsgJoinSwapExternAmountIn;
                };
                joinSwapShareAmountOut(value: any): {
                    typeUrl: string;
                    value: _991.MsgJoinSwapShareAmountOut;
                };
                exitSwapExternAmountOut(value: any): {
                    typeUrl: string;
                    value: _991.MsgExitSwapExternAmountOut;
                };
                exitSwapShareAmountIn(value: any): {
                    typeUrl: string;
                    value: _991.MsgExitSwapShareAmountIn;
                };
            };
            toJSON: {
                joinPool(value: _991.MsgJoinPool): {
                    typeUrl: string;
                    value: unknown;
                };
                exitPool(value: _991.MsgExitPool): {
                    typeUrl: string;
                    value: unknown;
                };
                swapExactAmountIn(value: _991.MsgSwapExactAmountIn): {
                    typeUrl: string;
                    value: unknown;
                };
                swapExactAmountOut(value: _991.MsgSwapExactAmountOut): {
                    typeUrl: string;
                    value: unknown;
                };
                joinSwapExternAmountIn(value: _991.MsgJoinSwapExternAmountIn): {
                    typeUrl: string;
                    value: unknown;
                };
                joinSwapShareAmountOut(value: _991.MsgJoinSwapShareAmountOut): {
                    typeUrl: string;
                    value: unknown;
                };
                exitSwapExternAmountOut(value: _991.MsgExitSwapExternAmountOut): {
                    typeUrl: string;
                    value: unknown;
                };
                exitSwapShareAmountIn(value: _991.MsgExitSwapShareAmountIn): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                joinPool(value: _991.MsgJoinPool): {
                    typeUrl: string;
                    value: _991.MsgJoinPool;
                };
                exitPool(value: _991.MsgExitPool): {
                    typeUrl: string;
                    value: _991.MsgExitPool;
                };
                swapExactAmountIn(value: _991.MsgSwapExactAmountIn): {
                    typeUrl: string;
                    value: _991.MsgSwapExactAmountIn;
                };
                swapExactAmountOut(value: _991.MsgSwapExactAmountOut): {
                    typeUrl: string;
                    value: _991.MsgSwapExactAmountOut;
                };
                joinSwapExternAmountIn(value: _991.MsgJoinSwapExternAmountIn): {
                    typeUrl: string;
                    value: _991.MsgJoinSwapExternAmountIn;
                };
                joinSwapShareAmountOut(value: _991.MsgJoinSwapShareAmountOut): {
                    typeUrl: string;
                    value: _991.MsgJoinSwapShareAmountOut;
                };
                exitSwapExternAmountOut(value: _991.MsgExitSwapExternAmountOut): {
                    typeUrl: string;
                    value: _991.MsgExitSwapExternAmountOut;
                };
                exitSwapShareAmountIn(value: _991.MsgExitSwapShareAmountIn): {
                    typeUrl: string;
                    value: _991.MsgExitSwapShareAmountIn;
                };
            };
            messages: {
                joinPool(value: _991.MsgJoinPool): {
                    typeUrl: string;
                    value: _991.MsgJoinPool;
                };
                exitPool(value: _991.MsgExitPool): {
                    typeUrl: string;
                    value: _991.MsgExitPool;
                };
                swapExactAmountIn(value: _991.MsgSwapExactAmountIn): {
                    typeUrl: string;
                    value: _991.MsgSwapExactAmountIn;
                };
                swapExactAmountOut(value: _991.MsgSwapExactAmountOut): {
                    typeUrl: string;
                    value: _991.MsgSwapExactAmountOut;
                };
                joinSwapExternAmountIn(value: _991.MsgJoinSwapExternAmountIn): {
                    typeUrl: string;
                    value: _991.MsgJoinSwapExternAmountIn;
                };
                joinSwapShareAmountOut(value: _991.MsgJoinSwapShareAmountOut): {
                    typeUrl: string;
                    value: _991.MsgJoinSwapShareAmountOut;
                };
                exitSwapExternAmountOut(value: _991.MsgExitSwapExternAmountOut): {
                    typeUrl: string;
                    value: _991.MsgExitSwapExternAmountOut;
                };
                exitSwapShareAmountIn(value: _991.MsgExitSwapShareAmountIn): {
                    typeUrl: string;
                    value: _991.MsgExitSwapShareAmountIn;
                };
            };
            QueryPoolRequest: {
                encode(message: _990.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _990.QueryPoolRequest;
                fromJSON(object: any): _990.QueryPoolRequest;
                toJSON(message: _990.QueryPoolRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _990.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _990.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _990.QueryPoolResponse;
                fromJSON(object: any): _990.QueryPoolResponse;
                toJSON(message: _990.QueryPoolResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _990.QueryPoolResponse;
            };
            QueryPoolsRequest: {
                encode(message: _990.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _990.QueryPoolsRequest;
                fromJSON(object: any): _990.QueryPoolsRequest;
                toJSON(message: _990.QueryPoolsRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _990.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _990.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _990.QueryPoolsResponse;
                fromJSON(object: any): _990.QueryPoolsResponse;
                toJSON(message: _990.QueryPoolsResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _990.QueryPoolsResponse;
            };
            QueryNumPoolsRequest: {
                encode(_: _990.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _990.QueryNumPoolsRequest;
                fromJSON(_: any): _990.QueryNumPoolsRequest;
                toJSON(_: _990.QueryNumPoolsRequest): unknown;
                fromPartial<I_22 extends unknown>(_: I_22): _990.QueryNumPoolsRequest;
            };
            QueryNumPoolsResponse: {
                encode(message: _990.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _990.QueryNumPoolsResponse;
                fromJSON(object: any): _990.QueryNumPoolsResponse;
                toJSON(message: _990.QueryNumPoolsResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _990.QueryNumPoolsResponse;
            };
            QueryPoolParamsRequest: {
                encode(message: _990.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _990.QueryPoolParamsRequest;
                fromJSON(object: any): _990.QueryPoolParamsRequest;
                toJSON(message: _990.QueryPoolParamsRequest): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _990.QueryPoolParamsRequest;
            };
            QueryPoolParamsResponse: {
                encode(message: _990.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _990.QueryPoolParamsResponse;
                fromJSON(object: any): _990.QueryPoolParamsResponse;
                toJSON(message: _990.QueryPoolParamsResponse): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _990.QueryPoolParamsResponse;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _990.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _990.QueryTotalPoolLiquidityRequest;
                fromJSON(object: any): _990.QueryTotalPoolLiquidityRequest;
                toJSON(message: _990.QueryTotalPoolLiquidityRequest): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _990.QueryTotalPoolLiquidityRequest;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _990.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _990.QueryTotalPoolLiquidityResponse;
                fromJSON(object: any): _990.QueryTotalPoolLiquidityResponse;
                toJSON(message: _990.QueryTotalPoolLiquidityResponse): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _990.QueryTotalPoolLiquidityResponse;
            };
            QueryTotalSharesRequest: {
                encode(message: _990.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _990.QueryTotalSharesRequest;
                fromJSON(object: any): _990.QueryTotalSharesRequest;
                toJSON(message: _990.QueryTotalSharesRequest): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _990.QueryTotalSharesRequest;
            };
            QueryTotalSharesResponse: {
                encode(message: _990.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _990.QueryTotalSharesResponse;
                fromJSON(object: any): _990.QueryTotalSharesResponse;
                toJSON(message: _990.QueryTotalSharesResponse): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _990.QueryTotalSharesResponse;
            };
            QuerySpotPriceRequest: {
                encode(message: _990.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _990.QuerySpotPriceRequest;
                fromJSON(object: any): _990.QuerySpotPriceRequest;
                toJSON(message: _990.QuerySpotPriceRequest): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _990.QuerySpotPriceRequest;
            };
            QuerySpotPriceResponse: {
                encode(message: _990.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _990.QuerySpotPriceResponse;
                fromJSON(object: any): _990.QuerySpotPriceResponse;
                toJSON(message: _990.QuerySpotPriceResponse): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _990.QuerySpotPriceResponse;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _990.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _990.QuerySwapExactAmountInRequest;
                fromJSON(object: any): _990.QuerySwapExactAmountInRequest;
                toJSON(message: _990.QuerySwapExactAmountInRequest): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _990.QuerySwapExactAmountInRequest;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _990.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _990.QuerySwapExactAmountInResponse;
                fromJSON(object: any): _990.QuerySwapExactAmountInResponse;
                toJSON(message: _990.QuerySwapExactAmountInResponse): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _990.QuerySwapExactAmountInResponse;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _990.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _990.QuerySwapExactAmountOutRequest;
                fromJSON(object: any): _990.QuerySwapExactAmountOutRequest;
                toJSON(message: _990.QuerySwapExactAmountOutRequest): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _990.QuerySwapExactAmountOutRequest;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _990.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _990.QuerySwapExactAmountOutResponse;
                fromJSON(object: any): _990.QuerySwapExactAmountOutResponse;
                toJSON(message: _990.QuerySwapExactAmountOutResponse): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _990.QuerySwapExactAmountOutResponse;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _990.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _990.QueryTotalLiquidityRequest;
                fromJSON(_: any): _990.QueryTotalLiquidityRequest;
                toJSON(_: _990.QueryTotalLiquidityRequest): unknown;
                fromPartial<I_36 extends unknown>(_: I_36): _990.QueryTotalLiquidityRequest;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _990.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _990.QueryTotalLiquidityResponse;
                fromJSON(object: any): _990.QueryTotalLiquidityResponse;
                toJSON(message: _990.QueryTotalLiquidityResponse): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _990.QueryTotalLiquidityResponse;
            };
            Params: {
                encode(message: _989.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _989.Params;
                fromJSON(object: any): _989.Params;
                toJSON(message: _989.Params): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _989.Params;
            };
            GenesisState: {
                encode(message: _989.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _989.GenesisState;
                fromJSON(object: any): _989.GenesisState;
                toJSON(message: _989.GenesisState): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _989.GenesisState;
            };
            MsgCreateBalancerPool: {
                encode(message: _988.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _988.MsgCreateBalancerPool;
                fromJSON(object: any): _988.MsgCreateBalancerPool;
                toJSON(message: _988.MsgCreateBalancerPool): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _988.MsgCreateBalancerPool;
            };
            MsgCreateBalancerPoolResponse: {
                encode(message: _988.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _988.MsgCreateBalancerPoolResponse;
                fromJSON(object: any): _988.MsgCreateBalancerPoolResponse;
                toJSON(message: _988.MsgCreateBalancerPoolResponse): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _988.MsgCreateBalancerPoolResponse;
            };
            BalancerMsgClientImpl: typeof _988.BalancerMsgClientImpl;
            SmoothWeightChangeParams: {
                encode(message: _987.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _987.SmoothWeightChangeParams;
                fromJSON(object: any): _987.SmoothWeightChangeParams;
                toJSON(message: _987.SmoothWeightChangeParams): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _987.SmoothWeightChangeParams;
            };
            PoolParams: {
                encode(message: _987.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _987.PoolParams;
                fromJSON(object: any): _987.PoolParams;
                toJSON(message: _987.PoolParams): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _987.PoolParams;
            };
            PoolAsset: {
                encode(message: _987.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _987.PoolAsset;
                fromJSON(object: any): _987.PoolAsset;
                toJSON(message: _987.PoolAsset): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _987.PoolAsset;
            };
            Pool: {
                encode(message: _987.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _987.Pool;
                fromJSON(object: any): _987.Pool;
                toJSON(message: _987.Pool): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _987.Pool;
            };
        };
    }
    const incentives: {
        MsgCreateGauge: {
            encode(message: _1004.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1004.MsgCreateGauge;
            fromJSON(object: any): _1004.MsgCreateGauge;
            toJSON(message: _1004.MsgCreateGauge): unknown;
            fromPartial<I extends unknown>(object: I): _1004.MsgCreateGauge;
        };
        MsgCreateGaugeResponse: {
            encode(_: _1004.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1004.MsgCreateGaugeResponse;
            fromJSON(_: any): _1004.MsgCreateGaugeResponse;
            toJSON(_: _1004.MsgCreateGaugeResponse): unknown;
            fromPartial<I_1 extends unknown>(_: I_1): _1004.MsgCreateGaugeResponse;
        };
        MsgAddToGauge: {
            encode(message: _1004.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1004.MsgAddToGauge;
            fromJSON(object: any): _1004.MsgAddToGauge;
            toJSON(message: _1004.MsgAddToGauge): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _1004.MsgAddToGauge;
        };
        MsgAddToGaugeResponse: {
            encode(_: _1004.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1004.MsgAddToGaugeResponse;
            fromJSON(_: any): _1004.MsgAddToGaugeResponse;
            toJSON(_: _1004.MsgAddToGaugeResponse): unknown;
            fromPartial<I_3 extends unknown>(_: I_3): _1004.MsgAddToGaugeResponse;
        };
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: _1004.MsgCreateGauge) => {
                    isPerpetual: boolean;
                    owner: string;
                    distributeTo: {
                        lockQueryType: number;
                        denom: string;
                        duration: {
                            seconds: string;
                            nanos: number;
                        };
                        timestamp: Date;
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    startTime: Date;
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
                        timestamp: Date;
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    startTime: Date;
                    numEpochsPaidOver: string;
                }) => _1004.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: ({ owner, gaugeId, rewards }: _1004.MsgAddToGauge) => {
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
                }) => _1004.MsgAddToGauge;
            };
        };
        encoded: {
            createGauge(value: _1004.MsgCreateGauge): {
                type_url: string;
                value: Uint8Array;
            };
            addToGauge(value: _1004.MsgAddToGauge): {
                type_url: string;
                value: Uint8Array;
            };
        };
        fromJSON: {
            createGauge(value: any): {
                typeUrl: string;
                value: _1004.MsgCreateGauge;
            };
            addToGauge(value: any): {
                typeUrl: string;
                value: _1004.MsgAddToGauge;
            };
        };
        toJSON: {
            createGauge(value: _1004.MsgCreateGauge): {
                typeUrl: string;
                value: unknown;
            };
            addToGauge(value: _1004.MsgAddToGauge): {
                typeUrl: string;
                value: unknown;
            };
        };
        json: {
            createGauge(value: _1004.MsgCreateGauge): {
                typeUrl: string;
                value: _1004.MsgCreateGauge;
            };
            addToGauge(value: _1004.MsgAddToGauge): {
                typeUrl: string;
                value: _1004.MsgAddToGauge;
            };
        };
        messages: {
            createGauge(value: _1004.MsgCreateGauge): {
                typeUrl: string;
                value: _1004.MsgCreateGauge;
            };
            addToGauge(value: _1004.MsgAddToGauge): {
                typeUrl: string;
                value: _1004.MsgAddToGauge;
            };
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _1003.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1003.ModuleToDistributeCoinsRequest;
            fromJSON(_: any): _1003.ModuleToDistributeCoinsRequest;
            toJSON(_: _1003.ModuleToDistributeCoinsRequest): unknown;
            fromPartial<I_4 extends unknown>(_: I_4): _1003.ModuleToDistributeCoinsRequest;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _1003.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1003.ModuleToDistributeCoinsResponse;
            fromJSON(object: any): _1003.ModuleToDistributeCoinsResponse;
            toJSON(message: _1003.ModuleToDistributeCoinsResponse): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _1003.ModuleToDistributeCoinsResponse;
        };
        ModuleDistributedCoinsRequest: {
            encode(_: _1003.ModuleDistributedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1003.ModuleDistributedCoinsRequest;
            fromJSON(_: any): _1003.ModuleDistributedCoinsRequest;
            toJSON(_: _1003.ModuleDistributedCoinsRequest): unknown;
            fromPartial<I_6 extends unknown>(_: I_6): _1003.ModuleDistributedCoinsRequest;
        };
        ModuleDistributedCoinsResponse: {
            encode(message: _1003.ModuleDistributedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1003.ModuleDistributedCoinsResponse;
            fromJSON(object: any): _1003.ModuleDistributedCoinsResponse;
            toJSON(message: _1003.ModuleDistributedCoinsResponse): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _1003.ModuleDistributedCoinsResponse;
        };
        GaugeByIDRequest: {
            encode(message: _1003.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1003.GaugeByIDRequest;
            fromJSON(object: any): _1003.GaugeByIDRequest;
            toJSON(message: _1003.GaugeByIDRequest): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _1003.GaugeByIDRequest;
        };
        GaugeByIDResponse: {
            encode(message: _1003.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1003.GaugeByIDResponse;
            fromJSON(object: any): _1003.GaugeByIDResponse;
            toJSON(message: _1003.GaugeByIDResponse): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _1003.GaugeByIDResponse;
        };
        GaugesRequest: {
            encode(message: _1003.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1003.GaugesRequest;
            fromJSON(object: any): _1003.GaugesRequest;
            toJSON(message: _1003.GaugesRequest): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _1003.GaugesRequest;
        };
        GaugesResponse: {
            encode(message: _1003.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1003.GaugesResponse;
            fromJSON(object: any): _1003.GaugesResponse;
            toJSON(message: _1003.GaugesResponse): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _1003.GaugesResponse;
        };
        ActiveGaugesRequest: {
            encode(message: _1003.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1003.ActiveGaugesRequest;
            fromJSON(object: any): _1003.ActiveGaugesRequest;
            toJSON(message: _1003.ActiveGaugesRequest): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _1003.ActiveGaugesRequest;
        };
        ActiveGaugesResponse: {
            encode(message: _1003.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1003.ActiveGaugesResponse;
            fromJSON(object: any): _1003.ActiveGaugesResponse;
            toJSON(message: _1003.ActiveGaugesResponse): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _1003.ActiveGaugesResponse;
        };
        ActiveGaugesPerDenomRequest: {
            encode(message: _1003.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1003.ActiveGaugesPerDenomRequest;
            fromJSON(object: any): _1003.ActiveGaugesPerDenomRequest;
            toJSON(message: _1003.ActiveGaugesPerDenomRequest): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _1003.ActiveGaugesPerDenomRequest;
        };
        ActiveGaugesPerDenomResponse: {
            encode(message: _1003.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1003.ActiveGaugesPerDenomResponse;
            fromJSON(object: any): _1003.ActiveGaugesPerDenomResponse;
            toJSON(message: _1003.ActiveGaugesPerDenomResponse): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _1003.ActiveGaugesPerDenomResponse;
        };
        UpcomingGaugesRequest: {
            encode(message: _1003.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1003.UpcomingGaugesRequest;
            fromJSON(object: any): _1003.UpcomingGaugesRequest;
            toJSON(message: _1003.UpcomingGaugesRequest): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _1003.UpcomingGaugesRequest;
        };
        UpcomingGaugesResponse: {
            encode(message: _1003.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1003.UpcomingGaugesResponse;
            fromJSON(object: any): _1003.UpcomingGaugesResponse;
            toJSON(message: _1003.UpcomingGaugesResponse): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _1003.UpcomingGaugesResponse;
        };
        RewardsEstRequest: {
            encode(message: _1003.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1003.RewardsEstRequest;
            fromJSON(object: any): _1003.RewardsEstRequest;
            toJSON(message: _1003.RewardsEstRequest): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _1003.RewardsEstRequest;
        };
        RewardsEstResponse: {
            encode(message: _1003.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1003.RewardsEstResponse;
            fromJSON(object: any): _1003.RewardsEstResponse;
            toJSON(message: _1003.RewardsEstResponse): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _1003.RewardsEstResponse;
        };
        QueryLockableDurationsRequest: {
            encode(_: _1003.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1003.QueryLockableDurationsRequest;
            fromJSON(_: any): _1003.QueryLockableDurationsRequest;
            toJSON(_: _1003.QueryLockableDurationsRequest): unknown;
            fromPartial<I_20 extends unknown>(_: I_20): _1003.QueryLockableDurationsRequest;
        };
        QueryLockableDurationsResponse: {
            encode(message: _1003.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1003.QueryLockableDurationsResponse;
            fromJSON(object: any): _1003.QueryLockableDurationsResponse;
            toJSON(message: _1003.QueryLockableDurationsResponse): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _1003.QueryLockableDurationsResponse;
        };
        Params: {
            encode(message: _1002.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1002.Params;
            fromJSON(object: any): _1002.Params;
            toJSON(message: _1002.Params): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _1002.Params;
        };
        GenesisState: {
            encode(message: _1001.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1001.GenesisState;
            fromJSON(object: any): _1001.GenesisState;
            toJSON(message: _1001.GenesisState): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _1001.GenesisState;
        };
        Gauge: {
            encode(message: _1000.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1000.Gauge;
            fromJSON(object: any): _1000.Gauge;
            toJSON(message: _1000.Gauge): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _1000.Gauge;
        };
        LockableDurationsInfo: {
            encode(message: _1000.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1000.LockableDurationsInfo;
            fromJSON(object: any): _1000.LockableDurationsInfo;
            toJSON(message: _1000.LockableDurationsInfo): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _1000.LockableDurationsInfo;
        };
    };
    const lockup: {
        MsgLockTokens: {
            encode(message: _1016.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1016.MsgLockTokens;
            fromJSON(object: any): _1016.MsgLockTokens;
            toJSON(message: _1016.MsgLockTokens): unknown;
            fromPartial<I extends unknown>(object: I): _1016.MsgLockTokens;
        };
        MsgLockTokensResponse: {
            encode(message: _1016.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1016.MsgLockTokensResponse;
            fromJSON(object: any): _1016.MsgLockTokensResponse;
            toJSON(message: _1016.MsgLockTokensResponse): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _1016.MsgLockTokensResponse;
        };
        MsgBeginUnlockingAll: {
            encode(message: _1016.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1016.MsgBeginUnlockingAll;
            fromJSON(object: any): _1016.MsgBeginUnlockingAll;
            toJSON(message: _1016.MsgBeginUnlockingAll): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _1016.MsgBeginUnlockingAll;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _1016.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1016.MsgBeginUnlockingAllResponse;
            fromJSON(object: any): _1016.MsgBeginUnlockingAllResponse;
            toJSON(message: _1016.MsgBeginUnlockingAllResponse): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _1016.MsgBeginUnlockingAllResponse;
        };
        MsgBeginUnlocking: {
            encode(message: _1016.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1016.MsgBeginUnlocking;
            fromJSON(object: any): _1016.MsgBeginUnlocking;
            toJSON(message: _1016.MsgBeginUnlocking): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _1016.MsgBeginUnlocking;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _1016.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1016.MsgBeginUnlockingResponse;
            fromJSON(object: any): _1016.MsgBeginUnlockingResponse;
            toJSON(message: _1016.MsgBeginUnlockingResponse): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _1016.MsgBeginUnlockingResponse;
        };
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: ({ owner, duration, coins }: _1016.MsgLockTokens) => {
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
                }) => _1016.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: ({ owner }: _1016.MsgBeginUnlockingAll) => {
                    owner: string;
                };
                fromAmino: ({ owner }: {
                    owner: string;
                }) => _1016.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _1016.MsgBeginUnlocking) => {
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
                }) => _1016.MsgBeginUnlocking;
            };
        };
        encoded: {
            lockTokens(value: _1016.MsgLockTokens): {
                type_url: string;
                value: Uint8Array;
            };
            beginUnlockingAll(value: _1016.MsgBeginUnlockingAll): {
                type_url: string;
                value: Uint8Array;
            };
            beginUnlocking(value: _1016.MsgBeginUnlocking): {
                type_url: string;
                value: Uint8Array;
            };
        };
        fromJSON: {
            lockTokens(value: any): {
                typeUrl: string;
                value: _1016.MsgLockTokens;
            };
            beginUnlockingAll(value: any): {
                typeUrl: string;
                value: _1016.MsgBeginUnlockingAll;
            };
            beginUnlocking(value: any): {
                typeUrl: string;
                value: _1016.MsgBeginUnlocking;
            };
        };
        toJSON: {
            lockTokens(value: _1016.MsgLockTokens): {
                typeUrl: string;
                value: unknown;
            };
            beginUnlockingAll(value: _1016.MsgBeginUnlockingAll): {
                typeUrl: string;
                value: unknown;
            };
            beginUnlocking(value: _1016.MsgBeginUnlocking): {
                typeUrl: string;
                value: unknown;
            };
        };
        json: {
            lockTokens(value: _1016.MsgLockTokens): {
                typeUrl: string;
                value: _1016.MsgLockTokens;
            };
            beginUnlockingAll(value: _1016.MsgBeginUnlockingAll): {
                typeUrl: string;
                value: _1016.MsgBeginUnlockingAll;
            };
            beginUnlocking(value: _1016.MsgBeginUnlocking): {
                typeUrl: string;
                value: _1016.MsgBeginUnlocking;
            };
        };
        messages: {
            lockTokens(value: _1016.MsgLockTokens): {
                typeUrl: string;
                value: _1016.MsgLockTokens;
            };
            beginUnlockingAll(value: _1016.MsgBeginUnlockingAll): {
                typeUrl: string;
                value: _1016.MsgBeginUnlockingAll;
            };
            beginUnlocking(value: _1016.MsgBeginUnlocking): {
                typeUrl: string;
                value: _1016.MsgBeginUnlocking;
            };
        };
        ModuleBalanceRequest: {
            encode(_: _1015.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.ModuleBalanceRequest;
            fromJSON(_: any): _1015.ModuleBalanceRequest;
            toJSON(_: _1015.ModuleBalanceRequest): unknown;
            fromPartial<I_6 extends unknown>(_: I_6): _1015.ModuleBalanceRequest;
        };
        ModuleBalanceResponse: {
            encode(message: _1015.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.ModuleBalanceResponse;
            fromJSON(object: any): _1015.ModuleBalanceResponse;
            toJSON(message: _1015.ModuleBalanceResponse): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _1015.ModuleBalanceResponse;
        };
        ModuleLockedAmountRequest: {
            encode(_: _1015.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.ModuleLockedAmountRequest;
            fromJSON(_: any): _1015.ModuleLockedAmountRequest;
            toJSON(_: _1015.ModuleLockedAmountRequest): unknown;
            fromPartial<I_8 extends unknown>(_: I_8): _1015.ModuleLockedAmountRequest;
        };
        ModuleLockedAmountResponse: {
            encode(message: _1015.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.ModuleLockedAmountResponse;
            fromJSON(object: any): _1015.ModuleLockedAmountResponse;
            toJSON(message: _1015.ModuleLockedAmountResponse): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _1015.ModuleLockedAmountResponse;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _1015.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.AccountUnlockableCoinsRequest;
            fromJSON(object: any): _1015.AccountUnlockableCoinsRequest;
            toJSON(message: _1015.AccountUnlockableCoinsRequest): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _1015.AccountUnlockableCoinsRequest;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _1015.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.AccountUnlockableCoinsResponse;
            fromJSON(object: any): _1015.AccountUnlockableCoinsResponse;
            toJSON(message: _1015.AccountUnlockableCoinsResponse): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _1015.AccountUnlockableCoinsResponse;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _1015.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.AccountUnlockingCoinsRequest;
            fromJSON(object: any): _1015.AccountUnlockingCoinsRequest;
            toJSON(message: _1015.AccountUnlockingCoinsRequest): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _1015.AccountUnlockingCoinsRequest;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _1015.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.AccountUnlockingCoinsResponse;
            fromJSON(object: any): _1015.AccountUnlockingCoinsResponse;
            toJSON(message: _1015.AccountUnlockingCoinsResponse): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _1015.AccountUnlockingCoinsResponse;
        };
        AccountLockedCoinsRequest: {
            encode(message: _1015.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.AccountLockedCoinsRequest;
            fromJSON(object: any): _1015.AccountLockedCoinsRequest;
            toJSON(message: _1015.AccountLockedCoinsRequest): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _1015.AccountLockedCoinsRequest;
        };
        AccountLockedCoinsResponse: {
            encode(message: _1015.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.AccountLockedCoinsResponse;
            fromJSON(object: any): _1015.AccountLockedCoinsResponse;
            toJSON(message: _1015.AccountLockedCoinsResponse): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _1015.AccountLockedCoinsResponse;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _1015.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.AccountLockedPastTimeRequest;
            fromJSON(object: any): _1015.AccountLockedPastTimeRequest;
            toJSON(message: _1015.AccountLockedPastTimeRequest): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _1015.AccountLockedPastTimeRequest;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _1015.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.AccountLockedPastTimeResponse;
            fromJSON(object: any): _1015.AccountLockedPastTimeResponse;
            toJSON(message: _1015.AccountLockedPastTimeResponse): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _1015.AccountLockedPastTimeResponse;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _1015.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromJSON(object: any): _1015.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toJSON(message: _1015.AccountLockedPastTimeNotUnlockingOnlyRequest): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _1015.AccountLockedPastTimeNotUnlockingOnlyRequest;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _1015.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromJSON(object: any): _1015.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toJSON(message: _1015.AccountLockedPastTimeNotUnlockingOnlyResponse): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _1015.AccountLockedPastTimeNotUnlockingOnlyResponse;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _1015.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.AccountUnlockedBeforeTimeRequest;
            fromJSON(object: any): _1015.AccountUnlockedBeforeTimeRequest;
            toJSON(message: _1015.AccountUnlockedBeforeTimeRequest): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _1015.AccountUnlockedBeforeTimeRequest;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _1015.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.AccountUnlockedBeforeTimeResponse;
            fromJSON(object: any): _1015.AccountUnlockedBeforeTimeResponse;
            toJSON(message: _1015.AccountUnlockedBeforeTimeResponse): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _1015.AccountUnlockedBeforeTimeResponse;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _1015.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.AccountLockedPastTimeDenomRequest;
            fromJSON(object: any): _1015.AccountLockedPastTimeDenomRequest;
            toJSON(message: _1015.AccountLockedPastTimeDenomRequest): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _1015.AccountLockedPastTimeDenomRequest;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _1015.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.AccountLockedPastTimeDenomResponse;
            fromJSON(object: any): _1015.AccountLockedPastTimeDenomResponse;
            toJSON(message: _1015.AccountLockedPastTimeDenomResponse): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _1015.AccountLockedPastTimeDenomResponse;
        };
        LockedDenomRequest: {
            encode(message: _1015.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.LockedDenomRequest;
            fromJSON(object: any): _1015.LockedDenomRequest;
            toJSON(message: _1015.LockedDenomRequest): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _1015.LockedDenomRequest;
        };
        LockedDenomResponse: {
            encode(message: _1015.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.LockedDenomResponse;
            fromJSON(object: any): _1015.LockedDenomResponse;
            toJSON(message: _1015.LockedDenomResponse): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _1015.LockedDenomResponse;
        };
        LockedRequest: {
            encode(message: _1015.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.LockedRequest;
            fromJSON(object: any): _1015.LockedRequest;
            toJSON(message: _1015.LockedRequest): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _1015.LockedRequest;
        };
        LockedResponse: {
            encode(message: _1015.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.LockedResponse;
            fromJSON(object: any): _1015.LockedResponse;
            toJSON(message: _1015.LockedResponse): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _1015.LockedResponse;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _1015.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.SyntheticLockupsByLockupIDRequest;
            fromJSON(object: any): _1015.SyntheticLockupsByLockupIDRequest;
            toJSON(message: _1015.SyntheticLockupsByLockupIDRequest): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _1015.SyntheticLockupsByLockupIDRequest;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _1015.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.SyntheticLockupsByLockupIDResponse;
            fromJSON(object: any): _1015.SyntheticLockupsByLockupIDResponse;
            toJSON(message: _1015.SyntheticLockupsByLockupIDResponse): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _1015.SyntheticLockupsByLockupIDResponse;
        };
        AccountLockedLongerDurationRequest: {
            encode(message: _1015.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.AccountLockedLongerDurationRequest;
            fromJSON(object: any): _1015.AccountLockedLongerDurationRequest;
            toJSON(message: _1015.AccountLockedLongerDurationRequest): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _1015.AccountLockedLongerDurationRequest;
        };
        AccountLockedLongerDurationResponse: {
            encode(message: _1015.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.AccountLockedLongerDurationResponse;
            fromJSON(object: any): _1015.AccountLockedLongerDurationResponse;
            toJSON(message: _1015.AccountLockedLongerDurationResponse): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _1015.AccountLockedLongerDurationResponse;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            encode(message: _1015.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromJSON(object: any): _1015.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toJSON(message: _1015.AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _1015.AccountLockedLongerDurationNotUnlockingOnlyRequest;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            encode(message: _1015.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromJSON(object: any): _1015.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toJSON(message: _1015.AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _1015.AccountLockedLongerDurationNotUnlockingOnlyResponse;
        };
        AccountLockedLongerDurationDenomRequest: {
            encode(message: _1015.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.AccountLockedLongerDurationDenomRequest;
            fromJSON(object: any): _1015.AccountLockedLongerDurationDenomRequest;
            toJSON(message: _1015.AccountLockedLongerDurationDenomRequest): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _1015.AccountLockedLongerDurationDenomRequest;
        };
        AccountLockedLongerDurationDenomResponse: {
            encode(message: _1015.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1015.AccountLockedLongerDurationDenomResponse;
            fromJSON(object: any): _1015.AccountLockedLongerDurationDenomResponse;
            toJSON(message: _1015.AccountLockedLongerDurationDenomResponse): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _1015.AccountLockedLongerDurationDenomResponse;
        };
        lockQueryTypeFromJSON(object: any): _1014.LockQueryType;
        lockQueryTypeToJSON(object: _1014.LockQueryType): string;
        LockQueryType: typeof _1014.LockQueryType;
        PeriodLock: {
            encode(message: _1014.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1014.PeriodLock;
            fromJSON(object: any): _1014.PeriodLock;
            toJSON(message: _1014.PeriodLock): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _1014.PeriodLock;
        };
        QueryCondition: {
            encode(message: _1014.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1014.QueryCondition;
            fromJSON(object: any): _1014.QueryCondition;
            toJSON(message: _1014.QueryCondition): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _1014.QueryCondition;
        };
        SyntheticLock: {
            encode(message: _1014.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1014.SyntheticLock;
            fromJSON(object: any): _1014.SyntheticLock;
            toJSON(message: _1014.SyntheticLock): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _1014.SyntheticLock;
        };
        GenesisState: {
            encode(message: _1013.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1013.GenesisState;
            fromJSON(object: any): _1013.GenesisState;
            toJSON(message: _1013.GenesisState): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _1013.GenesisState;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _1027.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1027.QueryParamsRequest;
                fromJSON(_: any): _1027.QueryParamsRequest;
                toJSON(_: _1027.QueryParamsRequest): unknown;
                fromPartial<I extends unknown>(_: I): _1027.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _1027.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1027.QueryParamsResponse;
                fromJSON(object: any): _1027.QueryParamsResponse;
                toJSON(message: _1027.QueryParamsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _1027.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _1027.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1027.QueryEpochProvisionsRequest;
                fromJSON(_: any): _1027.QueryEpochProvisionsRequest;
                toJSON(_: _1027.QueryEpochProvisionsRequest): unknown;
                fromPartial<I_2 extends unknown>(_: I_2): _1027.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _1027.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1027.QueryEpochProvisionsResponse;
                fromJSON(object: any): _1027.QueryEpochProvisionsResponse;
                toJSON(message: _1027.QueryEpochProvisionsResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _1027.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _1026.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1026.Minter;
                fromJSON(object: any): _1026.Minter;
                toJSON(message: _1026.Minter): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _1026.Minter;
            };
            WeightedAddress: {
                encode(message: _1026.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1026.WeightedAddress;
                fromJSON(object: any): _1026.WeightedAddress;
                toJSON(message: _1026.WeightedAddress): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _1026.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _1026.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1026.DistributionProportions;
                fromJSON(object: any): _1026.DistributionProportions;
                toJSON(message: _1026.DistributionProportions): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _1026.DistributionProportions;
            };
            Params: {
                encode(message: _1026.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1026.Params;
                fromJSON(object: any): _1026.Params;
                toJSON(message: _1026.Params): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _1026.Params;
            };
            GenesisState: {
                encode(message: _1025.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1025.GenesisState;
                fromJSON(object: any): _1025.GenesisState;
                toJSON(message: _1025.GenesisState): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _1025.GenesisState;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryGaugeIdsRequest: {
                encode(message: _1031.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1031.QueryGaugeIdsRequest;
                fromJSON(object: any): _1031.QueryGaugeIdsRequest;
                toJSON(message: _1031.QueryGaugeIdsRequest): unknown;
                fromPartial<I extends unknown>(object: I): _1031.QueryGaugeIdsRequest;
            };
            QueryGaugeIdsResponse: {
                encode(message: _1031.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1031.QueryGaugeIdsResponse;
                fromJSON(object: any): _1031.QueryGaugeIdsResponse;
                toJSON(message: _1031.QueryGaugeIdsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _1031.QueryGaugeIdsResponse;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                encode(message: _1031.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1031.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromJSON(object: any): _1031.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toJSON(message: _1031.QueryGaugeIdsResponse_GaugeIdWithDuration): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _1031.QueryGaugeIdsResponse_GaugeIdWithDuration;
            };
            QueryDistrInfoRequest: {
                encode(_: _1031.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1031.QueryDistrInfoRequest;
                fromJSON(_: any): _1031.QueryDistrInfoRequest;
                toJSON(_: _1031.QueryDistrInfoRequest): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _1031.QueryDistrInfoRequest;
            };
            QueryDistrInfoResponse: {
                encode(message: _1031.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1031.QueryDistrInfoResponse;
                fromJSON(object: any): _1031.QueryDistrInfoResponse;
                toJSON(message: _1031.QueryDistrInfoResponse): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _1031.QueryDistrInfoResponse;
            };
            QueryParamsRequest: {
                encode(_: _1031.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1031.QueryParamsRequest;
                fromJSON(_: any): _1031.QueryParamsRequest;
                toJSON(_: _1031.QueryParamsRequest): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _1031.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _1031.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1031.QueryParamsResponse;
                fromJSON(object: any): _1031.QueryParamsResponse;
                toJSON(message: _1031.QueryParamsResponse): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _1031.QueryParamsResponse;
            };
            QueryLockableDurationsRequest: {
                encode(_: _1031.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1031.QueryLockableDurationsRequest;
                fromJSON(_: any): _1031.QueryLockableDurationsRequest;
                toJSON(_: _1031.QueryLockableDurationsRequest): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _1031.QueryLockableDurationsRequest;
            };
            QueryLockableDurationsResponse: {
                encode(message: _1031.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1031.QueryLockableDurationsResponse;
                fromJSON(object: any): _1031.QueryLockableDurationsResponse;
                toJSON(message: _1031.QueryLockableDurationsResponse): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _1031.QueryLockableDurationsResponse;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _1031.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1031.QueryIncentivizedPoolsRequest;
                fromJSON(_: any): _1031.QueryIncentivizedPoolsRequest;
                toJSON(_: _1031.QueryIncentivizedPoolsRequest): unknown;
                fromPartial<I_9 extends unknown>(_: I_9): _1031.QueryIncentivizedPoolsRequest;
            };
            IncentivizedPool: {
                encode(message: _1031.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1031.IncentivizedPool;
                fromJSON(object: any): _1031.IncentivizedPool;
                toJSON(message: _1031.IncentivizedPool): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _1031.IncentivizedPool;
            };
            QueryIncentivizedPoolsResponse: {
                encode(message: _1031.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1031.QueryIncentivizedPoolsResponse;
                fromJSON(object: any): _1031.QueryIncentivizedPoolsResponse;
                toJSON(message: _1031.QueryIncentivizedPoolsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _1031.QueryIncentivizedPoolsResponse;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _1031.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1031.QueryExternalIncentiveGaugesRequest;
                fromJSON(_: any): _1031.QueryExternalIncentiveGaugesRequest;
                toJSON(_: _1031.QueryExternalIncentiveGaugesRequest): unknown;
                fromPartial<I_12 extends unknown>(_: I_12): _1031.QueryExternalIncentiveGaugesRequest;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _1031.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1031.QueryExternalIncentiveGaugesResponse;
                fromJSON(object: any): _1031.QueryExternalIncentiveGaugesResponse;
                toJSON(message: _1031.QueryExternalIncentiveGaugesResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _1031.QueryExternalIncentiveGaugesResponse;
            };
            Params: {
                encode(message: _1030.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1030.Params;
                fromJSON(object: any): _1030.Params;
                toJSON(message: _1030.Params): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _1030.Params;
            };
            LockableDurationsInfo: {
                encode(message: _1030.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1030.LockableDurationsInfo;
                fromJSON(object: any): _1030.LockableDurationsInfo;
                toJSON(message: _1030.LockableDurationsInfo): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _1030.LockableDurationsInfo;
            };
            DistrInfo: {
                encode(message: _1030.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1030.DistrInfo;
                fromJSON(object: any): _1030.DistrInfo;
                toJSON(message: _1030.DistrInfo): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _1030.DistrInfo;
            };
            DistrRecord: {
                encode(message: _1030.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1030.DistrRecord;
                fromJSON(object: any): _1030.DistrRecord;
                toJSON(message: _1030.DistrRecord): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _1030.DistrRecord;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _1029.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1029.ReplacePoolIncentivesProposal;
                fromJSON(object: any): _1029.ReplacePoolIncentivesProposal;
                toJSON(message: _1029.ReplacePoolIncentivesProposal): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _1029.ReplacePoolIncentivesProposal;
            };
            UpdatePoolIncentivesProposal: {
                encode(message: _1029.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1029.UpdatePoolIncentivesProposal;
                fromJSON(object: any): _1029.UpdatePoolIncentivesProposal;
                toJSON(message: _1029.UpdatePoolIncentivesProposal): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _1029.UpdatePoolIncentivesProposal;
            };
            GenesisState: {
                encode(message: _1028.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1028.GenesisState;
                fromJSON(object: any): _1028.GenesisState;
                toJSON(message: _1028.GenesisState): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _1028.GenesisState;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                encode(message: _1032.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1032.Node;
                fromJSON(object: any): _1032.Node;
                toJSON(message: _1032.Node): unknown;
                fromPartial<I extends unknown>(object: I): _1032.Node;
            };
            Child: {
                encode(message: _1032.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1032.Child;
                fromJSON(object: any): _1032.Child;
                toJSON(message: _1032.Child): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _1032.Child;
            };
            Leaf: {
                encode(message: _1032.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1032.Leaf;
                fromJSON(object: any): _1032.Leaf;
                toJSON(message: _1032.Leaf): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _1032.Leaf;
            };
        };
    }
    const superfluid: {
        MsgSuperfluidDelegate: {
            encode(message: _1037.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1037.MsgSuperfluidDelegate;
            fromJSON(object: any): _1037.MsgSuperfluidDelegate;
            toJSON(message: _1037.MsgSuperfluidDelegate): unknown;
            fromPartial<I extends unknown>(object: I): _1037.MsgSuperfluidDelegate;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _1037.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1037.MsgSuperfluidDelegateResponse;
            fromJSON(_: any): _1037.MsgSuperfluidDelegateResponse;
            toJSON(_: _1037.MsgSuperfluidDelegateResponse): unknown;
            fromPartial<I_1 extends unknown>(_: I_1): _1037.MsgSuperfluidDelegateResponse;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _1037.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1037.MsgSuperfluidUndelegate;
            fromJSON(object: any): _1037.MsgSuperfluidUndelegate;
            toJSON(message: _1037.MsgSuperfluidUndelegate): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _1037.MsgSuperfluidUndelegate;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _1037.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1037.MsgSuperfluidUndelegateResponse;
            fromJSON(_: any): _1037.MsgSuperfluidUndelegateResponse;
            toJSON(_: _1037.MsgSuperfluidUndelegateResponse): unknown;
            fromPartial<I_3 extends unknown>(_: I_3): _1037.MsgSuperfluidUndelegateResponse;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _1037.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1037.MsgSuperfluidUnbondLock;
            fromJSON(object: any): _1037.MsgSuperfluidUnbondLock;
            toJSON(message: _1037.MsgSuperfluidUnbondLock): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _1037.MsgSuperfluidUnbondLock;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _1037.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1037.MsgSuperfluidUnbondLockResponse;
            fromJSON(_: any): _1037.MsgSuperfluidUnbondLockResponse;
            toJSON(_: _1037.MsgSuperfluidUnbondLockResponse): unknown;
            fromPartial<I_5 extends unknown>(_: I_5): _1037.MsgSuperfluidUnbondLockResponse;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _1037.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1037.MsgLockAndSuperfluidDelegate;
            fromJSON(object: any): _1037.MsgLockAndSuperfluidDelegate;
            toJSON(message: _1037.MsgLockAndSuperfluidDelegate): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _1037.MsgLockAndSuperfluidDelegate;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _1037.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1037.MsgLockAndSuperfluidDelegateResponse;
            fromJSON(object: any): _1037.MsgLockAndSuperfluidDelegateResponse;
            toJSON(message: _1037.MsgLockAndSuperfluidDelegateResponse): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _1037.MsgLockAndSuperfluidDelegateResponse;
        };
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId, valAddr }: _1037.MsgSuperfluidDelegate) => {
                    sender: string;
                    lockId: string;
                    valAddr: string;
                };
                fromAmino: ({ sender, lockId, valAddr }: {
                    sender: string;
                    lockId: string;
                    valAddr: string;
                }) => _1037.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _1037.MsgSuperfluidUndelegate) => {
                    sender: string;
                    lockId: string;
                };
                fromAmino: ({ sender, lockId }: {
                    sender: string;
                    lockId: string;
                }) => _1037.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _1037.MsgSuperfluidUnbondLock) => {
                    sender: string;
                    lockId: string;
                };
                fromAmino: ({ sender, lockId }: {
                    sender: string;
                    lockId: string;
                }) => _1037.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, coins, valAddr }: _1037.MsgLockAndSuperfluidDelegate) => {
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
                }) => _1037.MsgLockAndSuperfluidDelegate;
            };
        };
        encoded: {
            superfluidDelegate(value: _1037.MsgSuperfluidDelegate): {
                type_url: string;
                value: Uint8Array;
            };
            superfluidUndelegate(value: _1037.MsgSuperfluidUndelegate): {
                type_url: string;
                value: Uint8Array;
            };
            superfluidUnbondLock(value: _1037.MsgSuperfluidUnbondLock): {
                type_url: string;
                value: Uint8Array;
            };
            lockAndSuperfluidDelegate(value: _1037.MsgLockAndSuperfluidDelegate): {
                type_url: string;
                value: Uint8Array;
            };
        };
        fromJSON: {
            superfluidDelegate(value: any): {
                typeUrl: string;
                value: _1037.MsgSuperfluidDelegate;
            };
            superfluidUndelegate(value: any): {
                typeUrl: string;
                value: _1037.MsgSuperfluidUndelegate;
            };
            superfluidUnbondLock(value: any): {
                typeUrl: string;
                value: _1037.MsgSuperfluidUnbondLock;
            };
            lockAndSuperfluidDelegate(value: any): {
                typeUrl: string;
                value: _1037.MsgLockAndSuperfluidDelegate;
            };
        };
        toJSON: {
            superfluidDelegate(value: _1037.MsgSuperfluidDelegate): {
                typeUrl: string;
                value: unknown;
            };
            superfluidUndelegate(value: _1037.MsgSuperfluidUndelegate): {
                typeUrl: string;
                value: unknown;
            };
            superfluidUnbondLock(value: _1037.MsgSuperfluidUnbondLock): {
                typeUrl: string;
                value: unknown;
            };
            lockAndSuperfluidDelegate(value: _1037.MsgLockAndSuperfluidDelegate): {
                typeUrl: string;
                value: unknown;
            };
        };
        json: {
            superfluidDelegate(value: _1037.MsgSuperfluidDelegate): {
                typeUrl: string;
                value: _1037.MsgSuperfluidDelegate;
            };
            superfluidUndelegate(value: _1037.MsgSuperfluidUndelegate): {
                typeUrl: string;
                value: _1037.MsgSuperfluidUndelegate;
            };
            superfluidUnbondLock(value: _1037.MsgSuperfluidUnbondLock): {
                typeUrl: string;
                value: _1037.MsgSuperfluidUnbondLock;
            };
            lockAndSuperfluidDelegate(value: _1037.MsgLockAndSuperfluidDelegate): {
                typeUrl: string;
                value: _1037.MsgLockAndSuperfluidDelegate;
            };
        };
        messages: {
            superfluidDelegate(value: _1037.MsgSuperfluidDelegate): {
                typeUrl: string;
                value: _1037.MsgSuperfluidDelegate;
            };
            superfluidUndelegate(value: _1037.MsgSuperfluidUndelegate): {
                typeUrl: string;
                value: _1037.MsgSuperfluidUndelegate;
            };
            superfluidUnbondLock(value: _1037.MsgSuperfluidUnbondLock): {
                typeUrl: string;
                value: _1037.MsgSuperfluidUnbondLock;
            };
            lockAndSuperfluidDelegate(value: _1037.MsgLockAndSuperfluidDelegate): {
                typeUrl: string;
                value: _1037.MsgLockAndSuperfluidDelegate;
            };
        };
        superfluidAssetTypeFromJSON(object: any): _1036.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _1036.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _1036.SuperfluidAssetType;
        SuperfluidAsset: {
            encode(message: _1036.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.SuperfluidAsset;
            fromJSON(object: any): _1036.SuperfluidAsset;
            toJSON(message: _1036.SuperfluidAsset): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _1036.SuperfluidAsset;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _1036.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.SuperfluidIntermediaryAccount;
            fromJSON(object: any): _1036.SuperfluidIntermediaryAccount;
            toJSON(message: _1036.SuperfluidIntermediaryAccount): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _1036.SuperfluidIntermediaryAccount;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _1036.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.OsmoEquivalentMultiplierRecord;
            fromJSON(object: any): _1036.OsmoEquivalentMultiplierRecord;
            toJSON(message: _1036.OsmoEquivalentMultiplierRecord): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _1036.OsmoEquivalentMultiplierRecord;
        };
        SuperfluidDelegationRecord: {
            encode(message: _1036.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.SuperfluidDelegationRecord;
            fromJSON(object: any): _1036.SuperfluidDelegationRecord;
            toJSON(message: _1036.SuperfluidDelegationRecord): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _1036.SuperfluidDelegationRecord;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _1036.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1036.LockIdIntermediaryAccountConnection;
            fromJSON(object: any): _1036.LockIdIntermediaryAccountConnection;
            toJSON(message: _1036.LockIdIntermediaryAccountConnection): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _1036.LockIdIntermediaryAccountConnection;
        };
        QueryParamsRequest: {
            encode(_: _1035.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1035.QueryParamsRequest;
            fromJSON(_: any): _1035.QueryParamsRequest;
            toJSON(_: _1035.QueryParamsRequest): unknown;
            fromPartial<I_13 extends unknown>(_: I_13): _1035.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _1035.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1035.QueryParamsResponse;
            fromJSON(object: any): _1035.QueryParamsResponse;
            toJSON(message: _1035.QueryParamsResponse): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _1035.QueryParamsResponse;
        };
        AssetTypeRequest: {
            encode(message: _1035.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1035.AssetTypeRequest;
            fromJSON(object: any): _1035.AssetTypeRequest;
            toJSON(message: _1035.AssetTypeRequest): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _1035.AssetTypeRequest;
        };
        AssetTypeResponse: {
            encode(message: _1035.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1035.AssetTypeResponse;
            fromJSON(object: any): _1035.AssetTypeResponse;
            toJSON(message: _1035.AssetTypeResponse): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _1035.AssetTypeResponse;
        };
        AllAssetsRequest: {
            encode(_: _1035.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1035.AllAssetsRequest;
            fromJSON(_: any): _1035.AllAssetsRequest;
            toJSON(_: _1035.AllAssetsRequest): unknown;
            fromPartial<I_17 extends unknown>(_: I_17): _1035.AllAssetsRequest;
        };
        AllAssetsResponse: {
            encode(message: _1035.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1035.AllAssetsResponse;
            fromJSON(object: any): _1035.AllAssetsResponse;
            toJSON(message: _1035.AllAssetsResponse): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _1035.AllAssetsResponse;
        };
        AssetMultiplierRequest: {
            encode(message: _1035.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1035.AssetMultiplierRequest;
            fromJSON(object: any): _1035.AssetMultiplierRequest;
            toJSON(message: _1035.AssetMultiplierRequest): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _1035.AssetMultiplierRequest;
        };
        AssetMultiplierResponse: {
            encode(message: _1035.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1035.AssetMultiplierResponse;
            fromJSON(object: any): _1035.AssetMultiplierResponse;
            toJSON(message: _1035.AssetMultiplierResponse): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _1035.AssetMultiplierResponse;
        };
        SuperfluidIntermediaryAccountInfo: {
            encode(message: _1035.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1035.SuperfluidIntermediaryAccountInfo;
            fromJSON(object: any): _1035.SuperfluidIntermediaryAccountInfo;
            toJSON(message: _1035.SuperfluidIntermediaryAccountInfo): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _1035.SuperfluidIntermediaryAccountInfo;
        };
        AllIntermediaryAccountsRequest: {
            encode(message: _1035.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1035.AllIntermediaryAccountsRequest;
            fromJSON(object: any): _1035.AllIntermediaryAccountsRequest;
            toJSON(message: _1035.AllIntermediaryAccountsRequest): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _1035.AllIntermediaryAccountsRequest;
        };
        AllIntermediaryAccountsResponse: {
            encode(message: _1035.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1035.AllIntermediaryAccountsResponse;
            fromJSON(object: any): _1035.AllIntermediaryAccountsResponse;
            toJSON(message: _1035.AllIntermediaryAccountsResponse): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _1035.AllIntermediaryAccountsResponse;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _1035.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1035.ConnectedIntermediaryAccountRequest;
            fromJSON(object: any): _1035.ConnectedIntermediaryAccountRequest;
            toJSON(message: _1035.ConnectedIntermediaryAccountRequest): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _1035.ConnectedIntermediaryAccountRequest;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _1035.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1035.ConnectedIntermediaryAccountResponse;
            fromJSON(object: any): _1035.ConnectedIntermediaryAccountResponse;
            toJSON(message: _1035.ConnectedIntermediaryAccountResponse): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _1035.ConnectedIntermediaryAccountResponse;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _1035.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1035.TotalSuperfluidDelegationsRequest;
            fromJSON(_: any): _1035.TotalSuperfluidDelegationsRequest;
            toJSON(_: _1035.TotalSuperfluidDelegationsRequest): unknown;
            fromPartial<I_26 extends unknown>(_: I_26): _1035.TotalSuperfluidDelegationsRequest;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _1035.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1035.TotalSuperfluidDelegationsResponse;
            fromJSON(object: any): _1035.TotalSuperfluidDelegationsResponse;
            toJSON(message: _1035.TotalSuperfluidDelegationsResponse): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _1035.TotalSuperfluidDelegationsResponse;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _1035.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1035.SuperfluidDelegationAmountRequest;
            fromJSON(object: any): _1035.SuperfluidDelegationAmountRequest;
            toJSON(message: _1035.SuperfluidDelegationAmountRequest): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _1035.SuperfluidDelegationAmountRequest;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _1035.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1035.SuperfluidDelegationAmountResponse;
            fromJSON(object: any): _1035.SuperfluidDelegationAmountResponse;
            toJSON(message: _1035.SuperfluidDelegationAmountResponse): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _1035.SuperfluidDelegationAmountResponse;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _1035.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1035.SuperfluidDelegationsByDelegatorRequest;
            fromJSON(object: any): _1035.SuperfluidDelegationsByDelegatorRequest;
            toJSON(message: _1035.SuperfluidDelegationsByDelegatorRequest): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _1035.SuperfluidDelegationsByDelegatorRequest;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _1035.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1035.SuperfluidDelegationsByDelegatorResponse;
            fromJSON(object: any): _1035.SuperfluidDelegationsByDelegatorResponse;
            toJSON(message: _1035.SuperfluidDelegationsByDelegatorResponse): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _1035.SuperfluidDelegationsByDelegatorResponse;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _1035.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1035.SuperfluidUndelegationsByDelegatorRequest;
            fromJSON(object: any): _1035.SuperfluidUndelegationsByDelegatorRequest;
            toJSON(message: _1035.SuperfluidUndelegationsByDelegatorRequest): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _1035.SuperfluidUndelegationsByDelegatorRequest;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _1035.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1035.SuperfluidUndelegationsByDelegatorResponse;
            fromJSON(object: any): _1035.SuperfluidUndelegationsByDelegatorResponse;
            toJSON(message: _1035.SuperfluidUndelegationsByDelegatorResponse): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _1035.SuperfluidUndelegationsByDelegatorResponse;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _1035.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1035.SuperfluidDelegationsByValidatorDenomRequest;
            fromJSON(object: any): _1035.SuperfluidDelegationsByValidatorDenomRequest;
            toJSON(message: _1035.SuperfluidDelegationsByValidatorDenomRequest): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _1035.SuperfluidDelegationsByValidatorDenomRequest;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _1035.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1035.SuperfluidDelegationsByValidatorDenomResponse;
            fromJSON(object: any): _1035.SuperfluidDelegationsByValidatorDenomResponse;
            toJSON(message: _1035.SuperfluidDelegationsByValidatorDenomResponse): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _1035.SuperfluidDelegationsByValidatorDenomResponse;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _1035.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1035.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromJSON(object: any): _1035.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toJSON(message: _1035.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _1035.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _1035.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1035.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromJSON(object: any): _1035.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toJSON(message: _1035.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _1035.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
        };
        Params: {
            encode(message: _1034.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1034.Params;
            fromJSON(object: any): _1034.Params;
            toJSON(message: _1034.Params): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _1034.Params;
        };
        GenesisState: {
            encode(message: _1033.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1033.GenesisState;
            fromJSON(object: any): _1033.GenesisState;
            toJSON(message: _1033.GenesisState): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _1033.GenesisState;
        };
    };
    namespace txfees {
        const v1beta1: {
            QueryFeeTokensRequest: {
                encode(_: _1049.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1049.QueryFeeTokensRequest;
                fromJSON(_: any): _1049.QueryFeeTokensRequest;
                toJSON(_: _1049.QueryFeeTokensRequest): unknown;
                fromPartial<I extends unknown>(_: I): _1049.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _1049.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1049.QueryFeeTokensResponse;
                fromJSON(object: any): _1049.QueryFeeTokensResponse;
                toJSON(message: _1049.QueryFeeTokensResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _1049.QueryFeeTokensResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _1049.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1049.QueryDenomPoolIdRequest;
                fromJSON(object: any): _1049.QueryDenomPoolIdRequest;
                toJSON(message: _1049.QueryDenomPoolIdRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _1049.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _1049.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1049.QueryDenomPoolIdResponse;
                fromJSON(object: any): _1049.QueryDenomPoolIdResponse;
                toJSON(message: _1049.QueryDenomPoolIdResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _1049.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _1049.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1049.QueryBaseDenomRequest;
                fromJSON(_: any): _1049.QueryBaseDenomRequest;
                toJSON(_: _1049.QueryBaseDenomRequest): unknown;
                fromPartial<I_4 extends unknown>(_: I_4): _1049.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _1049.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1049.QueryBaseDenomResponse;
                fromJSON(object: any): _1049.QueryBaseDenomResponse;
                toJSON(message: _1049.QueryBaseDenomResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _1049.QueryBaseDenomResponse;
            };
            UpdateFeeTokenProposal: {
                encode(message: _1048.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1048.UpdateFeeTokenProposal;
                fromJSON(object: any): _1048.UpdateFeeTokenProposal;
                toJSON(message: _1048.UpdateFeeTokenProposal): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _1048.UpdateFeeTokenProposal;
            };
            GenesisState: {
                encode(message: _1047.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1047.GenesisState;
                fromJSON(object: any): _1047.GenesisState;
                toJSON(message: _1047.GenesisState): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _1047.GenesisState;
            };
            FeeToken: {
                encode(message: _1046.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1046.FeeToken;
                fromJSON(object: any): _1046.FeeToken;
                toJSON(message: _1046.FeeToken): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _1046.FeeToken;
            };
        };
    }
}
