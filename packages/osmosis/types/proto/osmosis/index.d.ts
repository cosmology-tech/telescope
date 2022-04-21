import * as _747 from "./claim/v1beta1/claim";
import * as _748 from "./claim/v1beta1/genesis";
import * as _749 from "./claim/v1beta1/params";
import * as _750 from "./claim/v1beta1/query";
import * as _751 from "./epochs/genesis";
import * as _752 from "./epochs/query";
import * as _753 from "./gamm/pool-models/balancer/balancerPool";
import * as _754 from "./gamm/pool-models/balancer/tx";
import * as _755 from "./gamm/v1beta1/genesis";
import * as _756 from "./gamm/v1beta1/query";
import * as _757 from "./gamm/v1beta1/tx";
import * as _766 from "./incentives/gauge";
import * as _767 from "./incentives/genesis";
import * as _768 from "./incentives/params";
import * as _769 from "./incentives/query";
import * as _770 from "./incentives/tx";
import * as _779 from "./lockup/genesis";
import * as _780 from "./lockup/lock";
import * as _781 from "./lockup/query";
import * as _782 from "./lockup/tx";
import * as _791 from "./mint/v1beta1/genesis";
import * as _792 from "./mint/v1beta1/mint";
import * as _793 from "./mint/v1beta1/query";
import * as _794 from "./pool-incentives/v1beta1/genesis";
import * as _795 from "./pool-incentives/v1beta1/gov";
import * as _796 from "./pool-incentives/v1beta1/incentives";
import * as _797 from "./pool-incentives/v1beta1/query";
import * as _798 from "./store/v1beta1/tree";
import * as _799 from "./superfluid/genesis";
import * as _800 from "./superfluid/params";
import * as _801 from "./superfluid/query";
import * as _802 from "./superfluid/superfluid";
import * as _803 from "./superfluid/tx";
import * as _812 from "./txfees/v1beta1/feetoken";
import * as _813 from "./txfees/v1beta1/genesis";
import * as _814 from "./txfees/v1beta1/gov";
import * as _815 from "./txfees/v1beta1/query";
export declare namespace osmosis {
    namespace claim {
        const v1beta1: {
            QueryModuleAccountBalanceRequest: {
                encode(_: _750.QueryModuleAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _750.QueryModuleAccountBalanceRequest;
                fromJSON(_: any): _750.QueryModuleAccountBalanceRequest;
                toJSON(_: _750.QueryModuleAccountBalanceRequest): unknown;
                fromPartial<I extends unknown>(_: I): _750.QueryModuleAccountBalanceRequest;
            };
            QueryModuleAccountBalanceResponse: {
                encode(message: _750.QueryModuleAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _750.QueryModuleAccountBalanceResponse;
                fromJSON(object: any): _750.QueryModuleAccountBalanceResponse;
                toJSON(message: _750.QueryModuleAccountBalanceResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _750.QueryModuleAccountBalanceResponse;
            };
            QueryParamsRequest: {
                encode(_: _750.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _750.QueryParamsRequest;
                fromJSON(_: any): _750.QueryParamsRequest;
                toJSON(_: _750.QueryParamsRequest): unknown;
                fromPartial<I_2 extends unknown>(_: I_2): _750.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _750.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _750.QueryParamsResponse;
                fromJSON(object: any): _750.QueryParamsResponse;
                toJSON(message: _750.QueryParamsResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _750.QueryParamsResponse;
            };
            QueryClaimRecordRequest: {
                encode(message: _750.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _750.QueryClaimRecordRequest;
                fromJSON(object: any): _750.QueryClaimRecordRequest;
                toJSON(message: _750.QueryClaimRecordRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _750.QueryClaimRecordRequest;
            };
            QueryClaimRecordResponse: {
                encode(message: _750.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _750.QueryClaimRecordResponse;
                fromJSON(object: any): _750.QueryClaimRecordResponse;
                toJSON(message: _750.QueryClaimRecordResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _750.QueryClaimRecordResponse;
            };
            QueryClaimableForActionRequest: {
                encode(message: _750.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _750.QueryClaimableForActionRequest;
                fromJSON(object: any): _750.QueryClaimableForActionRequest;
                toJSON(message: _750.QueryClaimableForActionRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _750.QueryClaimableForActionRequest;
            };
            QueryClaimableForActionResponse: {
                encode(message: _750.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _750.QueryClaimableForActionResponse;
                fromJSON(object: any): _750.QueryClaimableForActionResponse;
                toJSON(message: _750.QueryClaimableForActionResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _750.QueryClaimableForActionResponse;
            };
            QueryTotalClaimableRequest: {
                encode(message: _750.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _750.QueryTotalClaimableRequest;
                fromJSON(object: any): _750.QueryTotalClaimableRequest;
                toJSON(message: _750.QueryTotalClaimableRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _750.QueryTotalClaimableRequest;
            };
            QueryTotalClaimableResponse: {
                encode(message: _750.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _750.QueryTotalClaimableResponse;
                fromJSON(object: any): _750.QueryTotalClaimableResponse;
                toJSON(message: _750.QueryTotalClaimableResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _750.QueryTotalClaimableResponse;
            };
            Params: {
                encode(message: _749.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _749.Params;
                fromJSON(object: any): _749.Params;
                toJSON(message: _749.Params): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _749.Params;
            };
            GenesisState: {
                encode(message: _748.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _748.GenesisState;
                fromJSON(object: any): _748.GenesisState;
                toJSON(message: _748.GenesisState): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _748.GenesisState;
            };
            actionFromJSON(object: any): _747.Action;
            actionToJSON(object: _747.Action): string;
            Action: typeof _747.Action;
            ClaimRecord: {
                encode(message: _747.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _747.ClaimRecord;
                fromJSON(object: any): _747.ClaimRecord;
                toJSON(message: _747.ClaimRecord): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _747.ClaimRecord;
            };
        };
    }
    namespace epochs {
        const v1beta1: {
            QueryEpochsInfoRequest: {
                encode(_: _752.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.QueryEpochsInfoRequest;
                fromJSON(_: any): _752.QueryEpochsInfoRequest;
                toJSON(_: _752.QueryEpochsInfoRequest): unknown;
                fromPartial<I extends unknown>(_: I): _752.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _752.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.QueryEpochsInfoResponse;
                fromJSON(object: any): _752.QueryEpochsInfoResponse;
                toJSON(message: _752.QueryEpochsInfoResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _752.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _752.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.QueryCurrentEpochRequest;
                fromJSON(object: any): _752.QueryCurrentEpochRequest;
                toJSON(message: _752.QueryCurrentEpochRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _752.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _752.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.QueryCurrentEpochResponse;
                fromJSON(object: any): _752.QueryCurrentEpochResponse;
                toJSON(message: _752.QueryCurrentEpochResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _752.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _751.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _751.EpochInfo;
                fromJSON(object: any): _751.EpochInfo;
                toJSON(message: _751.EpochInfo): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _751.EpochInfo;
            };
            GenesisState: {
                encode(message: _751.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _751.GenesisState;
                fromJSON(object: any): _751.GenesisState;
                toJSON(message: _751.GenesisState): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _751.GenesisState;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgJoinPool: {
                encode(message: _757.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgJoinPool;
                fromJSON(object: any): _757.MsgJoinPool;
                toJSON(message: _757.MsgJoinPool): unknown;
                fromPartial<I extends unknown>(object: I): _757.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(_: _757.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgJoinPoolResponse;
                fromJSON(_: any): _757.MsgJoinPoolResponse;
                toJSON(_: _757.MsgJoinPoolResponse): unknown;
                fromPartial<I_1 extends unknown>(_: I_1): _757.MsgJoinPoolResponse;
            };
            MsgExitPool: {
                encode(message: _757.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgExitPool;
                fromJSON(object: any): _757.MsgExitPool;
                toJSON(message: _757.MsgExitPool): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _757.MsgExitPool;
            };
            MsgExitPoolResponse: {
                encode(_: _757.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgExitPoolResponse;
                fromJSON(_: any): _757.MsgExitPoolResponse;
                toJSON(_: _757.MsgExitPoolResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _757.MsgExitPoolResponse;
            };
            SwapAmountInRoute: {
                encode(message: _757.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.SwapAmountInRoute;
                fromJSON(object: any): _757.SwapAmountInRoute;
                toJSON(message: _757.SwapAmountInRoute): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _757.SwapAmountInRoute;
            };
            MsgSwapExactAmountIn: {
                encode(message: _757.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgSwapExactAmountIn;
                fromJSON(object: any): _757.MsgSwapExactAmountIn;
                toJSON(message: _757.MsgSwapExactAmountIn): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _757.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _757.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgSwapExactAmountInResponse;
                fromJSON(object: any): _757.MsgSwapExactAmountInResponse;
                toJSON(message: _757.MsgSwapExactAmountInResponse): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _757.MsgSwapExactAmountInResponse;
            };
            SwapAmountOutRoute: {
                encode(message: _757.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.SwapAmountOutRoute;
                fromJSON(object: any): _757.SwapAmountOutRoute;
                toJSON(message: _757.SwapAmountOutRoute): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _757.SwapAmountOutRoute;
            };
            MsgSwapExactAmountOut: {
                encode(message: _757.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgSwapExactAmountOut;
                fromJSON(object: any): _757.MsgSwapExactAmountOut;
                toJSON(message: _757.MsgSwapExactAmountOut): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _757.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _757.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgSwapExactAmountOutResponse;
                fromJSON(object: any): _757.MsgSwapExactAmountOutResponse;
                toJSON(message: _757.MsgSwapExactAmountOutResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _757.MsgSwapExactAmountOutResponse;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _757.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgJoinSwapExternAmountIn;
                fromJSON(object: any): _757.MsgJoinSwapExternAmountIn;
                toJSON(message: _757.MsgJoinSwapExternAmountIn): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _757.MsgJoinSwapExternAmountIn;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _757.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgJoinSwapExternAmountInResponse;
                fromJSON(object: any): _757.MsgJoinSwapExternAmountInResponse;
                toJSON(message: _757.MsgJoinSwapExternAmountInResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _757.MsgJoinSwapExternAmountInResponse;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _757.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgJoinSwapShareAmountOut;
                fromJSON(object: any): _757.MsgJoinSwapShareAmountOut;
                toJSON(message: _757.MsgJoinSwapShareAmountOut): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _757.MsgJoinSwapShareAmountOut;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _757.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgJoinSwapShareAmountOutResponse;
                fromJSON(object: any): _757.MsgJoinSwapShareAmountOutResponse;
                toJSON(message: _757.MsgJoinSwapShareAmountOutResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _757.MsgJoinSwapShareAmountOutResponse;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _757.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgExitSwapShareAmountIn;
                fromJSON(object: any): _757.MsgExitSwapShareAmountIn;
                toJSON(message: _757.MsgExitSwapShareAmountIn): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _757.MsgExitSwapShareAmountIn;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _757.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgExitSwapShareAmountInResponse;
                fromJSON(object: any): _757.MsgExitSwapShareAmountInResponse;
                toJSON(message: _757.MsgExitSwapShareAmountInResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _757.MsgExitSwapShareAmountInResponse;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _757.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgExitSwapExternAmountOut;
                fromJSON(object: any): _757.MsgExitSwapExternAmountOut;
                toJSON(message: _757.MsgExitSwapExternAmountOut): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _757.MsgExitSwapExternAmountOut;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _757.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgExitSwapExternAmountOutResponse;
                fromJSON(object: any): _757.MsgExitSwapExternAmountOutResponse;
                toJSON(message: _757.MsgExitSwapExternAmountOutResponse): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _757.MsgExitSwapExternAmountOutResponse;
            };
            registry: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    encode(message: _757.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgJoinPool;
                    fromJSON(object: any): _757.MsgJoinPool;
                    toJSON(message: _757.MsgJoinPool): unknown;
                    fromPartial<I extends unknown>(object: I): _757.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    encode(message: _757.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgExitPool;
                    fromJSON(object: any): _757.MsgExitPool;
                    toJSON(message: _757.MsgExitPool): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _757.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    encode(message: _757.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgSwapExactAmountIn;
                    fromJSON(object: any): _757.MsgSwapExactAmountIn;
                    toJSON(message: _757.MsgSwapExactAmountIn): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _757.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    encode(message: _757.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgSwapExactAmountOut;
                    fromJSON(object: any): _757.MsgSwapExactAmountOut;
                    toJSON(message: _757.MsgSwapExactAmountOut): unknown;
                    fromPartial<I_8 extends unknown>(object: I_8): _757.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    encode(message: _757.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgJoinSwapExternAmountIn;
                    fromJSON(object: any): _757.MsgJoinSwapExternAmountIn;
                    toJSON(message: _757.MsgJoinSwapExternAmountIn): unknown;
                    fromPartial<I_10 extends unknown>(object: I_10): _757.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    encode(message: _757.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgJoinSwapShareAmountOut;
                    fromJSON(object: any): _757.MsgJoinSwapShareAmountOut;
                    toJSON(message: _757.MsgJoinSwapShareAmountOut): unknown;
                    fromPartial<I_12 extends unknown>(object: I_12): _757.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    encode(message: _757.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgExitSwapExternAmountOut;
                    fromJSON(object: any): _757.MsgExitSwapExternAmountOut;
                    toJSON(message: _757.MsgExitSwapExternAmountOut): unknown;
                    fromPartial<I_16 extends unknown>(object: I_16): _757.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    encode(message: _757.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgExitSwapShareAmountIn;
                    fromJSON(object: any): _757.MsgExitSwapShareAmountIn;
                    toJSON(message: _757.MsgExitSwapShareAmountIn): unknown;
                    fromPartial<I_14 extends unknown>(object: I_14): _757.MsgExitSwapShareAmountIn;
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: _757.MsgJoinPool) => {
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
                    }) => _757.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: _757.MsgExitPool) => {
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
                    }) => _757.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _757.MsgSwapExactAmountIn) => {
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
                    }) => _757.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _757.MsgSwapExactAmountOut) => {
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
                    }) => _757.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: _757.MsgJoinSwapExternAmountIn) => {
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
                    }) => _757.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: _757.MsgJoinSwapShareAmountOut) => {
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
                    }) => _757.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: _757.MsgExitSwapExternAmountOut) => {
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
                    }) => _757.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: _757.MsgExitSwapShareAmountIn) => {
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
                    }) => _757.MsgExitSwapShareAmountIn;
                };
            };
            encoded: {
                joinPool(value: _757.MsgJoinPool): {
                    type_url: string;
                    value: Uint8Array;
                };
                exitPool(value: _757.MsgExitPool): {
                    type_url: string;
                    value: Uint8Array;
                };
                swapExactAmountIn(value: _757.MsgSwapExactAmountIn): {
                    type_url: string;
                    value: Uint8Array;
                };
                swapExactAmountOut(value: _757.MsgSwapExactAmountOut): {
                    type_url: string;
                    value: Uint8Array;
                };
                joinSwapExternAmountIn(value: _757.MsgJoinSwapExternAmountIn): {
                    type_url: string;
                    value: Uint8Array;
                };
                joinSwapShareAmountOut(value: _757.MsgJoinSwapShareAmountOut): {
                    type_url: string;
                    value: Uint8Array;
                };
                exitSwapExternAmountOut(value: _757.MsgExitSwapExternAmountOut): {
                    type_url: string;
                    value: Uint8Array;
                };
                exitSwapShareAmountIn(value: _757.MsgExitSwapShareAmountIn): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                joinPool(value: any): {
                    typeUrl: string;
                    value: _757.MsgJoinPool;
                };
                exitPool(value: any): {
                    typeUrl: string;
                    value: _757.MsgExitPool;
                };
                swapExactAmountIn(value: any): {
                    typeUrl: string;
                    value: _757.MsgSwapExactAmountIn;
                };
                swapExactAmountOut(value: any): {
                    typeUrl: string;
                    value: _757.MsgSwapExactAmountOut;
                };
                joinSwapExternAmountIn(value: any): {
                    typeUrl: string;
                    value: _757.MsgJoinSwapExternAmountIn;
                };
                joinSwapShareAmountOut(value: any): {
                    typeUrl: string;
                    value: _757.MsgJoinSwapShareAmountOut;
                };
                exitSwapExternAmountOut(value: any): {
                    typeUrl: string;
                    value: _757.MsgExitSwapExternAmountOut;
                };
                exitSwapShareAmountIn(value: any): {
                    typeUrl: string;
                    value: _757.MsgExitSwapShareAmountIn;
                };
            };
            toJSON: {
                joinPool(value: _757.MsgJoinPool): {
                    typeUrl: string;
                    value: unknown;
                };
                exitPool(value: _757.MsgExitPool): {
                    typeUrl: string;
                    value: unknown;
                };
                swapExactAmountIn(value: _757.MsgSwapExactAmountIn): {
                    typeUrl: string;
                    value: unknown;
                };
                swapExactAmountOut(value: _757.MsgSwapExactAmountOut): {
                    typeUrl: string;
                    value: unknown;
                };
                joinSwapExternAmountIn(value: _757.MsgJoinSwapExternAmountIn): {
                    typeUrl: string;
                    value: unknown;
                };
                joinSwapShareAmountOut(value: _757.MsgJoinSwapShareAmountOut): {
                    typeUrl: string;
                    value: unknown;
                };
                exitSwapExternAmountOut(value: _757.MsgExitSwapExternAmountOut): {
                    typeUrl: string;
                    value: unknown;
                };
                exitSwapShareAmountIn(value: _757.MsgExitSwapShareAmountIn): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                joinPool(value: _757.MsgJoinPool): {
                    typeUrl: string;
                    value: _757.MsgJoinPool;
                };
                exitPool(value: _757.MsgExitPool): {
                    typeUrl: string;
                    value: _757.MsgExitPool;
                };
                swapExactAmountIn(value: _757.MsgSwapExactAmountIn): {
                    typeUrl: string;
                    value: _757.MsgSwapExactAmountIn;
                };
                swapExactAmountOut(value: _757.MsgSwapExactAmountOut): {
                    typeUrl: string;
                    value: _757.MsgSwapExactAmountOut;
                };
                joinSwapExternAmountIn(value: _757.MsgJoinSwapExternAmountIn): {
                    typeUrl: string;
                    value: _757.MsgJoinSwapExternAmountIn;
                };
                joinSwapShareAmountOut(value: _757.MsgJoinSwapShareAmountOut): {
                    typeUrl: string;
                    value: _757.MsgJoinSwapShareAmountOut;
                };
                exitSwapExternAmountOut(value: _757.MsgExitSwapExternAmountOut): {
                    typeUrl: string;
                    value: _757.MsgExitSwapExternAmountOut;
                };
                exitSwapShareAmountIn(value: _757.MsgExitSwapShareAmountIn): {
                    typeUrl: string;
                    value: _757.MsgExitSwapShareAmountIn;
                };
            };
            messages: {
                joinPool(value: _757.MsgJoinPool): {
                    typeUrl: string;
                    value: _757.MsgJoinPool;
                };
                exitPool(value: _757.MsgExitPool): {
                    typeUrl: string;
                    value: _757.MsgExitPool;
                };
                swapExactAmountIn(value: _757.MsgSwapExactAmountIn): {
                    typeUrl: string;
                    value: _757.MsgSwapExactAmountIn;
                };
                swapExactAmountOut(value: _757.MsgSwapExactAmountOut): {
                    typeUrl: string;
                    value: _757.MsgSwapExactAmountOut;
                };
                joinSwapExternAmountIn(value: _757.MsgJoinSwapExternAmountIn): {
                    typeUrl: string;
                    value: _757.MsgJoinSwapExternAmountIn;
                };
                joinSwapShareAmountOut(value: _757.MsgJoinSwapShareAmountOut): {
                    typeUrl: string;
                    value: _757.MsgJoinSwapShareAmountOut;
                };
                exitSwapExternAmountOut(value: _757.MsgExitSwapExternAmountOut): {
                    typeUrl: string;
                    value: _757.MsgExitSwapExternAmountOut;
                };
                exitSwapShareAmountIn(value: _757.MsgExitSwapShareAmountIn): {
                    typeUrl: string;
                    value: _757.MsgExitSwapShareAmountIn;
                };
            };
            QueryPoolRequest: {
                encode(message: _756.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _756.QueryPoolRequest;
                fromJSON(object: any): _756.QueryPoolRequest;
                toJSON(message: _756.QueryPoolRequest): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _756.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _756.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _756.QueryPoolResponse;
                fromJSON(object: any): _756.QueryPoolResponse;
                toJSON(message: _756.QueryPoolResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _756.QueryPoolResponse;
            };
            QueryPoolsRequest: {
                encode(message: _756.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _756.QueryPoolsRequest;
                fromJSON(object: any): _756.QueryPoolsRequest;
                toJSON(message: _756.QueryPoolsRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _756.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _756.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _756.QueryPoolsResponse;
                fromJSON(object: any): _756.QueryPoolsResponse;
                toJSON(message: _756.QueryPoolsResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _756.QueryPoolsResponse;
            };
            QueryNumPoolsRequest: {
                encode(_: _756.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _756.QueryNumPoolsRequest;
                fromJSON(_: any): _756.QueryNumPoolsRequest;
                toJSON(_: _756.QueryNumPoolsRequest): unknown;
                fromPartial<I_22 extends unknown>(_: I_22): _756.QueryNumPoolsRequest;
            };
            QueryNumPoolsResponse: {
                encode(message: _756.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _756.QueryNumPoolsResponse;
                fromJSON(object: any): _756.QueryNumPoolsResponse;
                toJSON(message: _756.QueryNumPoolsResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _756.QueryNumPoolsResponse;
            };
            QueryPoolParamsRequest: {
                encode(message: _756.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _756.QueryPoolParamsRequest;
                fromJSON(object: any): _756.QueryPoolParamsRequest;
                toJSON(message: _756.QueryPoolParamsRequest): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _756.QueryPoolParamsRequest;
            };
            QueryPoolParamsResponse: {
                encode(message: _756.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _756.QueryPoolParamsResponse;
                fromJSON(object: any): _756.QueryPoolParamsResponse;
                toJSON(message: _756.QueryPoolParamsResponse): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _756.QueryPoolParamsResponse;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _756.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _756.QueryTotalPoolLiquidityRequest;
                fromJSON(object: any): _756.QueryTotalPoolLiquidityRequest;
                toJSON(message: _756.QueryTotalPoolLiquidityRequest): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _756.QueryTotalPoolLiquidityRequest;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _756.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _756.QueryTotalPoolLiquidityResponse;
                fromJSON(object: any): _756.QueryTotalPoolLiquidityResponse;
                toJSON(message: _756.QueryTotalPoolLiquidityResponse): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _756.QueryTotalPoolLiquidityResponse;
            };
            QueryTotalSharesRequest: {
                encode(message: _756.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _756.QueryTotalSharesRequest;
                fromJSON(object: any): _756.QueryTotalSharesRequest;
                toJSON(message: _756.QueryTotalSharesRequest): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _756.QueryTotalSharesRequest;
            };
            QueryTotalSharesResponse: {
                encode(message: _756.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _756.QueryTotalSharesResponse;
                fromJSON(object: any): _756.QueryTotalSharesResponse;
                toJSON(message: _756.QueryTotalSharesResponse): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _756.QueryTotalSharesResponse;
            };
            QuerySpotPriceRequest: {
                encode(message: _756.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _756.QuerySpotPriceRequest;
                fromJSON(object: any): _756.QuerySpotPriceRequest;
                toJSON(message: _756.QuerySpotPriceRequest): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _756.QuerySpotPriceRequest;
            };
            QuerySpotPriceResponse: {
                encode(message: _756.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _756.QuerySpotPriceResponse;
                fromJSON(object: any): _756.QuerySpotPriceResponse;
                toJSON(message: _756.QuerySpotPriceResponse): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _756.QuerySpotPriceResponse;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _756.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _756.QuerySwapExactAmountInRequest;
                fromJSON(object: any): _756.QuerySwapExactAmountInRequest;
                toJSON(message: _756.QuerySwapExactAmountInRequest): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _756.QuerySwapExactAmountInRequest;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _756.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _756.QuerySwapExactAmountInResponse;
                fromJSON(object: any): _756.QuerySwapExactAmountInResponse;
                toJSON(message: _756.QuerySwapExactAmountInResponse): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _756.QuerySwapExactAmountInResponse;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _756.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _756.QuerySwapExactAmountOutRequest;
                fromJSON(object: any): _756.QuerySwapExactAmountOutRequest;
                toJSON(message: _756.QuerySwapExactAmountOutRequest): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _756.QuerySwapExactAmountOutRequest;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _756.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _756.QuerySwapExactAmountOutResponse;
                fromJSON(object: any): _756.QuerySwapExactAmountOutResponse;
                toJSON(message: _756.QuerySwapExactAmountOutResponse): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _756.QuerySwapExactAmountOutResponse;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _756.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _756.QueryTotalLiquidityRequest;
                fromJSON(_: any): _756.QueryTotalLiquidityRequest;
                toJSON(_: _756.QueryTotalLiquidityRequest): unknown;
                fromPartial<I_36 extends unknown>(_: I_36): _756.QueryTotalLiquidityRequest;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _756.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _756.QueryTotalLiquidityResponse;
                fromJSON(object: any): _756.QueryTotalLiquidityResponse;
                toJSON(message: _756.QueryTotalLiquidityResponse): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _756.QueryTotalLiquidityResponse;
            };
            Params: {
                encode(message: _755.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _755.Params;
                fromJSON(object: any): _755.Params;
                toJSON(message: _755.Params): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _755.Params;
            };
            GenesisState: {
                encode(message: _755.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _755.GenesisState;
                fromJSON(object: any): _755.GenesisState;
                toJSON(message: _755.GenesisState): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _755.GenesisState;
            };
            MsgCreateBalancerPool: {
                encode(message: _754.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _754.MsgCreateBalancerPool;
                fromJSON(object: any): _754.MsgCreateBalancerPool;
                toJSON(message: _754.MsgCreateBalancerPool): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _754.MsgCreateBalancerPool;
            };
            MsgCreateBalancerPoolResponse: {
                encode(message: _754.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _754.MsgCreateBalancerPoolResponse;
                fromJSON(object: any): _754.MsgCreateBalancerPoolResponse;
                toJSON(message: _754.MsgCreateBalancerPoolResponse): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _754.MsgCreateBalancerPoolResponse;
            };
            BalancerMsgClientImpl: typeof _754.BalancerMsgClientImpl;
            SmoothWeightChangeParams: {
                encode(message: _753.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _753.SmoothWeightChangeParams;
                fromJSON(object: any): _753.SmoothWeightChangeParams;
                toJSON(message: _753.SmoothWeightChangeParams): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _753.SmoothWeightChangeParams;
            };
            PoolParams: {
                encode(message: _753.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _753.PoolParams;
                fromJSON(object: any): _753.PoolParams;
                toJSON(message: _753.PoolParams): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _753.PoolParams;
            };
            PoolAsset: {
                encode(message: _753.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _753.PoolAsset;
                fromJSON(object: any): _753.PoolAsset;
                toJSON(message: _753.PoolAsset): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _753.PoolAsset;
            };
            Pool: {
                encode(message: _753.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _753.Pool;
                fromJSON(object: any): _753.Pool;
                toJSON(message: _753.Pool): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _753.Pool;
            };
        };
    }
    const incentives: {
        MsgCreateGauge: {
            encode(message: _770.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _770.MsgCreateGauge;
            fromJSON(object: any): _770.MsgCreateGauge;
            toJSON(message: _770.MsgCreateGauge): unknown;
            fromPartial<I extends unknown>(object: I): _770.MsgCreateGauge;
        };
        MsgCreateGaugeResponse: {
            encode(_: _770.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _770.MsgCreateGaugeResponse;
            fromJSON(_: any): _770.MsgCreateGaugeResponse;
            toJSON(_: _770.MsgCreateGaugeResponse): unknown;
            fromPartial<I_1 extends unknown>(_: I_1): _770.MsgCreateGaugeResponse;
        };
        MsgAddToGauge: {
            encode(message: _770.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _770.MsgAddToGauge;
            fromJSON(object: any): _770.MsgAddToGauge;
            toJSON(message: _770.MsgAddToGauge): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _770.MsgAddToGauge;
        };
        MsgAddToGaugeResponse: {
            encode(_: _770.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _770.MsgAddToGaugeResponse;
            fromJSON(_: any): _770.MsgAddToGaugeResponse;
            toJSON(_: _770.MsgAddToGaugeResponse): unknown;
            fromPartial<I_3 extends unknown>(_: I_3): _770.MsgAddToGaugeResponse;
        };
        registry: {
            "/osmosis.incentives.MsgCreateGauge": {
                encode(message: _770.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _770.MsgCreateGauge;
                fromJSON(object: any): _770.MsgCreateGauge;
                toJSON(message: _770.MsgCreateGauge): unknown;
                fromPartial<I extends unknown>(object: I): _770.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                encode(message: _770.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _770.MsgAddToGauge;
                fromJSON(object: any): _770.MsgAddToGauge;
                toJSON(message: _770.MsgAddToGauge): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _770.MsgAddToGauge;
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: _770.MsgCreateGauge) => {
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
                }) => _770.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: ({ owner, gaugeId, rewards }: _770.MsgAddToGauge) => {
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
                }) => _770.MsgAddToGauge;
            };
        };
        encoded: {
            createGauge(value: _770.MsgCreateGauge): {
                type_url: string;
                value: Uint8Array;
            };
            addToGauge(value: _770.MsgAddToGauge): {
                type_url: string;
                value: Uint8Array;
            };
        };
        fromJSON: {
            createGauge(value: any): {
                typeUrl: string;
                value: _770.MsgCreateGauge;
            };
            addToGauge(value: any): {
                typeUrl: string;
                value: _770.MsgAddToGauge;
            };
        };
        toJSON: {
            createGauge(value: _770.MsgCreateGauge): {
                typeUrl: string;
                value: unknown;
            };
            addToGauge(value: _770.MsgAddToGauge): {
                typeUrl: string;
                value: unknown;
            };
        };
        json: {
            createGauge(value: _770.MsgCreateGauge): {
                typeUrl: string;
                value: _770.MsgCreateGauge;
            };
            addToGauge(value: _770.MsgAddToGauge): {
                typeUrl: string;
                value: _770.MsgAddToGauge;
            };
        };
        messages: {
            createGauge(value: _770.MsgCreateGauge): {
                typeUrl: string;
                value: _770.MsgCreateGauge;
            };
            addToGauge(value: _770.MsgAddToGauge): {
                typeUrl: string;
                value: _770.MsgAddToGauge;
            };
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _769.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _769.ModuleToDistributeCoinsRequest;
            fromJSON(_: any): _769.ModuleToDistributeCoinsRequest;
            toJSON(_: _769.ModuleToDistributeCoinsRequest): unknown;
            fromPartial<I_4 extends unknown>(_: I_4): _769.ModuleToDistributeCoinsRequest;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _769.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _769.ModuleToDistributeCoinsResponse;
            fromJSON(object: any): _769.ModuleToDistributeCoinsResponse;
            toJSON(message: _769.ModuleToDistributeCoinsResponse): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _769.ModuleToDistributeCoinsResponse;
        };
        ModuleDistributedCoinsRequest: {
            encode(_: _769.ModuleDistributedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _769.ModuleDistributedCoinsRequest;
            fromJSON(_: any): _769.ModuleDistributedCoinsRequest;
            toJSON(_: _769.ModuleDistributedCoinsRequest): unknown;
            fromPartial<I_6 extends unknown>(_: I_6): _769.ModuleDistributedCoinsRequest;
        };
        ModuleDistributedCoinsResponse: {
            encode(message: _769.ModuleDistributedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _769.ModuleDistributedCoinsResponse;
            fromJSON(object: any): _769.ModuleDistributedCoinsResponse;
            toJSON(message: _769.ModuleDistributedCoinsResponse): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _769.ModuleDistributedCoinsResponse;
        };
        GaugeByIDRequest: {
            encode(message: _769.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _769.GaugeByIDRequest;
            fromJSON(object: any): _769.GaugeByIDRequest;
            toJSON(message: _769.GaugeByIDRequest): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _769.GaugeByIDRequest;
        };
        GaugeByIDResponse: {
            encode(message: _769.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _769.GaugeByIDResponse;
            fromJSON(object: any): _769.GaugeByIDResponse;
            toJSON(message: _769.GaugeByIDResponse): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _769.GaugeByIDResponse;
        };
        GaugesRequest: {
            encode(message: _769.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _769.GaugesRequest;
            fromJSON(object: any): _769.GaugesRequest;
            toJSON(message: _769.GaugesRequest): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _769.GaugesRequest;
        };
        GaugesResponse: {
            encode(message: _769.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _769.GaugesResponse;
            fromJSON(object: any): _769.GaugesResponse;
            toJSON(message: _769.GaugesResponse): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _769.GaugesResponse;
        };
        ActiveGaugesRequest: {
            encode(message: _769.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _769.ActiveGaugesRequest;
            fromJSON(object: any): _769.ActiveGaugesRequest;
            toJSON(message: _769.ActiveGaugesRequest): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _769.ActiveGaugesRequest;
        };
        ActiveGaugesResponse: {
            encode(message: _769.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _769.ActiveGaugesResponse;
            fromJSON(object: any): _769.ActiveGaugesResponse;
            toJSON(message: _769.ActiveGaugesResponse): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _769.ActiveGaugesResponse;
        };
        ActiveGaugesPerDenomRequest: {
            encode(message: _769.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _769.ActiveGaugesPerDenomRequest;
            fromJSON(object: any): _769.ActiveGaugesPerDenomRequest;
            toJSON(message: _769.ActiveGaugesPerDenomRequest): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _769.ActiveGaugesPerDenomRequest;
        };
        ActiveGaugesPerDenomResponse: {
            encode(message: _769.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _769.ActiveGaugesPerDenomResponse;
            fromJSON(object: any): _769.ActiveGaugesPerDenomResponse;
            toJSON(message: _769.ActiveGaugesPerDenomResponse): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _769.ActiveGaugesPerDenomResponse;
        };
        UpcomingGaugesRequest: {
            encode(message: _769.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _769.UpcomingGaugesRequest;
            fromJSON(object: any): _769.UpcomingGaugesRequest;
            toJSON(message: _769.UpcomingGaugesRequest): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _769.UpcomingGaugesRequest;
        };
        UpcomingGaugesResponse: {
            encode(message: _769.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _769.UpcomingGaugesResponse;
            fromJSON(object: any): _769.UpcomingGaugesResponse;
            toJSON(message: _769.UpcomingGaugesResponse): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _769.UpcomingGaugesResponse;
        };
        RewardsEstRequest: {
            encode(message: _769.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _769.RewardsEstRequest;
            fromJSON(object: any): _769.RewardsEstRequest;
            toJSON(message: _769.RewardsEstRequest): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _769.RewardsEstRequest;
        };
        RewardsEstResponse: {
            encode(message: _769.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _769.RewardsEstResponse;
            fromJSON(object: any): _769.RewardsEstResponse;
            toJSON(message: _769.RewardsEstResponse): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _769.RewardsEstResponse;
        };
        QueryLockableDurationsRequest: {
            encode(_: _769.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _769.QueryLockableDurationsRequest;
            fromJSON(_: any): _769.QueryLockableDurationsRequest;
            toJSON(_: _769.QueryLockableDurationsRequest): unknown;
            fromPartial<I_20 extends unknown>(_: I_20): _769.QueryLockableDurationsRequest;
        };
        QueryLockableDurationsResponse: {
            encode(message: _769.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _769.QueryLockableDurationsResponse;
            fromJSON(object: any): _769.QueryLockableDurationsResponse;
            toJSON(message: _769.QueryLockableDurationsResponse): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _769.QueryLockableDurationsResponse;
        };
        Params: {
            encode(message: _768.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _768.Params;
            fromJSON(object: any): _768.Params;
            toJSON(message: _768.Params): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _768.Params;
        };
        GenesisState: {
            encode(message: _767.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _767.GenesisState;
            fromJSON(object: any): _767.GenesisState;
            toJSON(message: _767.GenesisState): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _767.GenesisState;
        };
        Gauge: {
            encode(message: _766.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _766.Gauge;
            fromJSON(object: any): _766.Gauge;
            toJSON(message: _766.Gauge): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _766.Gauge;
        };
        LockableDurationsInfo: {
            encode(message: _766.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _766.LockableDurationsInfo;
            fromJSON(object: any): _766.LockableDurationsInfo;
            toJSON(message: _766.LockableDurationsInfo): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _766.LockableDurationsInfo;
        };
    };
    const lockup: {
        MsgLockTokens: {
            encode(message: _782.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _782.MsgLockTokens;
            fromJSON(object: any): _782.MsgLockTokens;
            toJSON(message: _782.MsgLockTokens): unknown;
            fromPartial<I extends unknown>(object: I): _782.MsgLockTokens;
        };
        MsgLockTokensResponse: {
            encode(message: _782.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _782.MsgLockTokensResponse;
            fromJSON(object: any): _782.MsgLockTokensResponse;
            toJSON(message: _782.MsgLockTokensResponse): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _782.MsgLockTokensResponse;
        };
        MsgBeginUnlockingAll: {
            encode(message: _782.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _782.MsgBeginUnlockingAll;
            fromJSON(object: any): _782.MsgBeginUnlockingAll;
            toJSON(message: _782.MsgBeginUnlockingAll): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _782.MsgBeginUnlockingAll;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _782.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _782.MsgBeginUnlockingAllResponse;
            fromJSON(object: any): _782.MsgBeginUnlockingAllResponse;
            toJSON(message: _782.MsgBeginUnlockingAllResponse): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _782.MsgBeginUnlockingAllResponse;
        };
        MsgBeginUnlocking: {
            encode(message: _782.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _782.MsgBeginUnlocking;
            fromJSON(object: any): _782.MsgBeginUnlocking;
            toJSON(message: _782.MsgBeginUnlocking): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _782.MsgBeginUnlocking;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _782.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _782.MsgBeginUnlockingResponse;
            fromJSON(object: any): _782.MsgBeginUnlockingResponse;
            toJSON(message: _782.MsgBeginUnlockingResponse): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _782.MsgBeginUnlockingResponse;
        };
        registry: {
            "/osmosis.lockup.MsgLockTokens": {
                encode(message: _782.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _782.MsgLockTokens;
                fromJSON(object: any): _782.MsgLockTokens;
                toJSON(message: _782.MsgLockTokens): unknown;
                fromPartial<I extends unknown>(object: I): _782.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                encode(message: _782.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _782.MsgBeginUnlockingAll;
                fromJSON(object: any): _782.MsgBeginUnlockingAll;
                toJSON(message: _782.MsgBeginUnlockingAll): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _782.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                encode(message: _782.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _782.MsgBeginUnlocking;
                fromJSON(object: any): _782.MsgBeginUnlocking;
                toJSON(message: _782.MsgBeginUnlocking): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _782.MsgBeginUnlocking;
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: ({ owner, duration, coins }: _782.MsgLockTokens) => {
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
                }) => _782.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: ({ owner }: _782.MsgBeginUnlockingAll) => {
                    owner: string;
                };
                fromAmino: ({ owner }: {
                    owner: string;
                }) => _782.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _782.MsgBeginUnlocking) => {
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
                }) => _782.MsgBeginUnlocking;
            };
        };
        encoded: {
            lockTokens(value: _782.MsgLockTokens): {
                type_url: string;
                value: Uint8Array;
            };
            beginUnlockingAll(value: _782.MsgBeginUnlockingAll): {
                type_url: string;
                value: Uint8Array;
            };
            beginUnlocking(value: _782.MsgBeginUnlocking): {
                type_url: string;
                value: Uint8Array;
            };
        };
        fromJSON: {
            lockTokens(value: any): {
                typeUrl: string;
                value: _782.MsgLockTokens;
            };
            beginUnlockingAll(value: any): {
                typeUrl: string;
                value: _782.MsgBeginUnlockingAll;
            };
            beginUnlocking(value: any): {
                typeUrl: string;
                value: _782.MsgBeginUnlocking;
            };
        };
        toJSON: {
            lockTokens(value: _782.MsgLockTokens): {
                typeUrl: string;
                value: unknown;
            };
            beginUnlockingAll(value: _782.MsgBeginUnlockingAll): {
                typeUrl: string;
                value: unknown;
            };
            beginUnlocking(value: _782.MsgBeginUnlocking): {
                typeUrl: string;
                value: unknown;
            };
        };
        json: {
            lockTokens(value: _782.MsgLockTokens): {
                typeUrl: string;
                value: _782.MsgLockTokens;
            };
            beginUnlockingAll(value: _782.MsgBeginUnlockingAll): {
                typeUrl: string;
                value: _782.MsgBeginUnlockingAll;
            };
            beginUnlocking(value: _782.MsgBeginUnlocking): {
                typeUrl: string;
                value: _782.MsgBeginUnlocking;
            };
        };
        messages: {
            lockTokens(value: _782.MsgLockTokens): {
                typeUrl: string;
                value: _782.MsgLockTokens;
            };
            beginUnlockingAll(value: _782.MsgBeginUnlockingAll): {
                typeUrl: string;
                value: _782.MsgBeginUnlockingAll;
            };
            beginUnlocking(value: _782.MsgBeginUnlocking): {
                typeUrl: string;
                value: _782.MsgBeginUnlocking;
            };
        };
        ModuleBalanceRequest: {
            encode(_: _781.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.ModuleBalanceRequest;
            fromJSON(_: any): _781.ModuleBalanceRequest;
            toJSON(_: _781.ModuleBalanceRequest): unknown;
            fromPartial<I_6 extends unknown>(_: I_6): _781.ModuleBalanceRequest;
        };
        ModuleBalanceResponse: {
            encode(message: _781.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.ModuleBalanceResponse;
            fromJSON(object: any): _781.ModuleBalanceResponse;
            toJSON(message: _781.ModuleBalanceResponse): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _781.ModuleBalanceResponse;
        };
        ModuleLockedAmountRequest: {
            encode(_: _781.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.ModuleLockedAmountRequest;
            fromJSON(_: any): _781.ModuleLockedAmountRequest;
            toJSON(_: _781.ModuleLockedAmountRequest): unknown;
            fromPartial<I_8 extends unknown>(_: I_8): _781.ModuleLockedAmountRequest;
        };
        ModuleLockedAmountResponse: {
            encode(message: _781.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.ModuleLockedAmountResponse;
            fromJSON(object: any): _781.ModuleLockedAmountResponse;
            toJSON(message: _781.ModuleLockedAmountResponse): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _781.ModuleLockedAmountResponse;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _781.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.AccountUnlockableCoinsRequest;
            fromJSON(object: any): _781.AccountUnlockableCoinsRequest;
            toJSON(message: _781.AccountUnlockableCoinsRequest): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _781.AccountUnlockableCoinsRequest;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _781.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.AccountUnlockableCoinsResponse;
            fromJSON(object: any): _781.AccountUnlockableCoinsResponse;
            toJSON(message: _781.AccountUnlockableCoinsResponse): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _781.AccountUnlockableCoinsResponse;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _781.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.AccountUnlockingCoinsRequest;
            fromJSON(object: any): _781.AccountUnlockingCoinsRequest;
            toJSON(message: _781.AccountUnlockingCoinsRequest): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _781.AccountUnlockingCoinsRequest;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _781.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.AccountUnlockingCoinsResponse;
            fromJSON(object: any): _781.AccountUnlockingCoinsResponse;
            toJSON(message: _781.AccountUnlockingCoinsResponse): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _781.AccountUnlockingCoinsResponse;
        };
        AccountLockedCoinsRequest: {
            encode(message: _781.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.AccountLockedCoinsRequest;
            fromJSON(object: any): _781.AccountLockedCoinsRequest;
            toJSON(message: _781.AccountLockedCoinsRequest): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _781.AccountLockedCoinsRequest;
        };
        AccountLockedCoinsResponse: {
            encode(message: _781.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.AccountLockedCoinsResponse;
            fromJSON(object: any): _781.AccountLockedCoinsResponse;
            toJSON(message: _781.AccountLockedCoinsResponse): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _781.AccountLockedCoinsResponse;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _781.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.AccountLockedPastTimeRequest;
            fromJSON(object: any): _781.AccountLockedPastTimeRequest;
            toJSON(message: _781.AccountLockedPastTimeRequest): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _781.AccountLockedPastTimeRequest;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _781.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.AccountLockedPastTimeResponse;
            fromJSON(object: any): _781.AccountLockedPastTimeResponse;
            toJSON(message: _781.AccountLockedPastTimeResponse): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _781.AccountLockedPastTimeResponse;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _781.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromJSON(object: any): _781.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toJSON(message: _781.AccountLockedPastTimeNotUnlockingOnlyRequest): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _781.AccountLockedPastTimeNotUnlockingOnlyRequest;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _781.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromJSON(object: any): _781.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toJSON(message: _781.AccountLockedPastTimeNotUnlockingOnlyResponse): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _781.AccountLockedPastTimeNotUnlockingOnlyResponse;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _781.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.AccountUnlockedBeforeTimeRequest;
            fromJSON(object: any): _781.AccountUnlockedBeforeTimeRequest;
            toJSON(message: _781.AccountUnlockedBeforeTimeRequest): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _781.AccountUnlockedBeforeTimeRequest;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _781.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.AccountUnlockedBeforeTimeResponse;
            fromJSON(object: any): _781.AccountUnlockedBeforeTimeResponse;
            toJSON(message: _781.AccountUnlockedBeforeTimeResponse): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _781.AccountUnlockedBeforeTimeResponse;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _781.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.AccountLockedPastTimeDenomRequest;
            fromJSON(object: any): _781.AccountLockedPastTimeDenomRequest;
            toJSON(message: _781.AccountLockedPastTimeDenomRequest): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _781.AccountLockedPastTimeDenomRequest;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _781.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.AccountLockedPastTimeDenomResponse;
            fromJSON(object: any): _781.AccountLockedPastTimeDenomResponse;
            toJSON(message: _781.AccountLockedPastTimeDenomResponse): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _781.AccountLockedPastTimeDenomResponse;
        };
        LockedDenomRequest: {
            encode(message: _781.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.LockedDenomRequest;
            fromJSON(object: any): _781.LockedDenomRequest;
            toJSON(message: _781.LockedDenomRequest): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _781.LockedDenomRequest;
        };
        LockedDenomResponse: {
            encode(message: _781.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.LockedDenomResponse;
            fromJSON(object: any): _781.LockedDenomResponse;
            toJSON(message: _781.LockedDenomResponse): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _781.LockedDenomResponse;
        };
        LockedRequest: {
            encode(message: _781.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.LockedRequest;
            fromJSON(object: any): _781.LockedRequest;
            toJSON(message: _781.LockedRequest): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _781.LockedRequest;
        };
        LockedResponse: {
            encode(message: _781.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.LockedResponse;
            fromJSON(object: any): _781.LockedResponse;
            toJSON(message: _781.LockedResponse): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _781.LockedResponse;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _781.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.SyntheticLockupsByLockupIDRequest;
            fromJSON(object: any): _781.SyntheticLockupsByLockupIDRequest;
            toJSON(message: _781.SyntheticLockupsByLockupIDRequest): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _781.SyntheticLockupsByLockupIDRequest;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _781.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.SyntheticLockupsByLockupIDResponse;
            fromJSON(object: any): _781.SyntheticLockupsByLockupIDResponse;
            toJSON(message: _781.SyntheticLockupsByLockupIDResponse): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _781.SyntheticLockupsByLockupIDResponse;
        };
        AccountLockedLongerDurationRequest: {
            encode(message: _781.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.AccountLockedLongerDurationRequest;
            fromJSON(object: any): _781.AccountLockedLongerDurationRequest;
            toJSON(message: _781.AccountLockedLongerDurationRequest): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _781.AccountLockedLongerDurationRequest;
        };
        AccountLockedLongerDurationResponse: {
            encode(message: _781.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.AccountLockedLongerDurationResponse;
            fromJSON(object: any): _781.AccountLockedLongerDurationResponse;
            toJSON(message: _781.AccountLockedLongerDurationResponse): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _781.AccountLockedLongerDurationResponse;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            encode(message: _781.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromJSON(object: any): _781.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toJSON(message: _781.AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _781.AccountLockedLongerDurationNotUnlockingOnlyRequest;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            encode(message: _781.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromJSON(object: any): _781.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toJSON(message: _781.AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _781.AccountLockedLongerDurationNotUnlockingOnlyResponse;
        };
        AccountLockedLongerDurationDenomRequest: {
            encode(message: _781.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.AccountLockedLongerDurationDenomRequest;
            fromJSON(object: any): _781.AccountLockedLongerDurationDenomRequest;
            toJSON(message: _781.AccountLockedLongerDurationDenomRequest): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _781.AccountLockedLongerDurationDenomRequest;
        };
        AccountLockedLongerDurationDenomResponse: {
            encode(message: _781.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.AccountLockedLongerDurationDenomResponse;
            fromJSON(object: any): _781.AccountLockedLongerDurationDenomResponse;
            toJSON(message: _781.AccountLockedLongerDurationDenomResponse): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _781.AccountLockedLongerDurationDenomResponse;
        };
        lockQueryTypeFromJSON(object: any): _780.LockQueryType;
        lockQueryTypeToJSON(object: _780.LockQueryType): string;
        LockQueryType: typeof _780.LockQueryType;
        PeriodLock: {
            encode(message: _780.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _780.PeriodLock;
            fromJSON(object: any): _780.PeriodLock;
            toJSON(message: _780.PeriodLock): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _780.PeriodLock;
        };
        QueryCondition: {
            encode(message: _780.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _780.QueryCondition;
            fromJSON(object: any): _780.QueryCondition;
            toJSON(message: _780.QueryCondition): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _780.QueryCondition;
        };
        SyntheticLock: {
            encode(message: _780.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _780.SyntheticLock;
            fromJSON(object: any): _780.SyntheticLock;
            toJSON(message: _780.SyntheticLock): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _780.SyntheticLock;
        };
        GenesisState: {
            encode(message: _779.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _779.GenesisState;
            fromJSON(object: any): _779.GenesisState;
            toJSON(message: _779.GenesisState): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _779.GenesisState;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _793.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _793.QueryParamsRequest;
                fromJSON(_: any): _793.QueryParamsRequest;
                toJSON(_: _793.QueryParamsRequest): unknown;
                fromPartial<I extends unknown>(_: I): _793.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _793.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _793.QueryParamsResponse;
                fromJSON(object: any): _793.QueryParamsResponse;
                toJSON(message: _793.QueryParamsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _793.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _793.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _793.QueryEpochProvisionsRequest;
                fromJSON(_: any): _793.QueryEpochProvisionsRequest;
                toJSON(_: _793.QueryEpochProvisionsRequest): unknown;
                fromPartial<I_2 extends unknown>(_: I_2): _793.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _793.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _793.QueryEpochProvisionsResponse;
                fromJSON(object: any): _793.QueryEpochProvisionsResponse;
                toJSON(message: _793.QueryEpochProvisionsResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _793.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _792.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _792.Minter;
                fromJSON(object: any): _792.Minter;
                toJSON(message: _792.Minter): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _792.Minter;
            };
            WeightedAddress: {
                encode(message: _792.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _792.WeightedAddress;
                fromJSON(object: any): _792.WeightedAddress;
                toJSON(message: _792.WeightedAddress): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _792.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _792.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _792.DistributionProportions;
                fromJSON(object: any): _792.DistributionProportions;
                toJSON(message: _792.DistributionProportions): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _792.DistributionProportions;
            };
            Params: {
                encode(message: _792.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _792.Params;
                fromJSON(object: any): _792.Params;
                toJSON(message: _792.Params): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _792.Params;
            };
            GenesisState: {
                encode(message: _791.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _791.GenesisState;
                fromJSON(object: any): _791.GenesisState;
                toJSON(message: _791.GenesisState): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _791.GenesisState;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryGaugeIdsRequest: {
                encode(message: _797.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _797.QueryGaugeIdsRequest;
                fromJSON(object: any): _797.QueryGaugeIdsRequest;
                toJSON(message: _797.QueryGaugeIdsRequest): unknown;
                fromPartial<I extends unknown>(object: I): _797.QueryGaugeIdsRequest;
            };
            QueryGaugeIdsResponse: {
                encode(message: _797.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _797.QueryGaugeIdsResponse;
                fromJSON(object: any): _797.QueryGaugeIdsResponse;
                toJSON(message: _797.QueryGaugeIdsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _797.QueryGaugeIdsResponse;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                encode(message: _797.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _797.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromJSON(object: any): _797.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toJSON(message: _797.QueryGaugeIdsResponse_GaugeIdWithDuration): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _797.QueryGaugeIdsResponse_GaugeIdWithDuration;
            };
            QueryDistrInfoRequest: {
                encode(_: _797.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _797.QueryDistrInfoRequest;
                fromJSON(_: any): _797.QueryDistrInfoRequest;
                toJSON(_: _797.QueryDistrInfoRequest): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _797.QueryDistrInfoRequest;
            };
            QueryDistrInfoResponse: {
                encode(message: _797.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _797.QueryDistrInfoResponse;
                fromJSON(object: any): _797.QueryDistrInfoResponse;
                toJSON(message: _797.QueryDistrInfoResponse): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _797.QueryDistrInfoResponse;
            };
            QueryParamsRequest: {
                encode(_: _797.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _797.QueryParamsRequest;
                fromJSON(_: any): _797.QueryParamsRequest;
                toJSON(_: _797.QueryParamsRequest): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _797.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _797.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _797.QueryParamsResponse;
                fromJSON(object: any): _797.QueryParamsResponse;
                toJSON(message: _797.QueryParamsResponse): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _797.QueryParamsResponse;
            };
            QueryLockableDurationsRequest: {
                encode(_: _797.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _797.QueryLockableDurationsRequest;
                fromJSON(_: any): _797.QueryLockableDurationsRequest;
                toJSON(_: _797.QueryLockableDurationsRequest): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _797.QueryLockableDurationsRequest;
            };
            QueryLockableDurationsResponse: {
                encode(message: _797.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _797.QueryLockableDurationsResponse;
                fromJSON(object: any): _797.QueryLockableDurationsResponse;
                toJSON(message: _797.QueryLockableDurationsResponse): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _797.QueryLockableDurationsResponse;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _797.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _797.QueryIncentivizedPoolsRequest;
                fromJSON(_: any): _797.QueryIncentivizedPoolsRequest;
                toJSON(_: _797.QueryIncentivizedPoolsRequest): unknown;
                fromPartial<I_9 extends unknown>(_: I_9): _797.QueryIncentivizedPoolsRequest;
            };
            IncentivizedPool: {
                encode(message: _797.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _797.IncentivizedPool;
                fromJSON(object: any): _797.IncentivizedPool;
                toJSON(message: _797.IncentivizedPool): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _797.IncentivizedPool;
            };
            QueryIncentivizedPoolsResponse: {
                encode(message: _797.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _797.QueryIncentivizedPoolsResponse;
                fromJSON(object: any): _797.QueryIncentivizedPoolsResponse;
                toJSON(message: _797.QueryIncentivizedPoolsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _797.QueryIncentivizedPoolsResponse;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _797.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _797.QueryExternalIncentiveGaugesRequest;
                fromJSON(_: any): _797.QueryExternalIncentiveGaugesRequest;
                toJSON(_: _797.QueryExternalIncentiveGaugesRequest): unknown;
                fromPartial<I_12 extends unknown>(_: I_12): _797.QueryExternalIncentiveGaugesRequest;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _797.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _797.QueryExternalIncentiveGaugesResponse;
                fromJSON(object: any): _797.QueryExternalIncentiveGaugesResponse;
                toJSON(message: _797.QueryExternalIncentiveGaugesResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _797.QueryExternalIncentiveGaugesResponse;
            };
            Params: {
                encode(message: _796.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _796.Params;
                fromJSON(object: any): _796.Params;
                toJSON(message: _796.Params): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _796.Params;
            };
            LockableDurationsInfo: {
                encode(message: _796.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _796.LockableDurationsInfo;
                fromJSON(object: any): _796.LockableDurationsInfo;
                toJSON(message: _796.LockableDurationsInfo): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _796.LockableDurationsInfo;
            };
            DistrInfo: {
                encode(message: _796.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _796.DistrInfo;
                fromJSON(object: any): _796.DistrInfo;
                toJSON(message: _796.DistrInfo): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _796.DistrInfo;
            };
            DistrRecord: {
                encode(message: _796.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _796.DistrRecord;
                fromJSON(object: any): _796.DistrRecord;
                toJSON(message: _796.DistrRecord): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _796.DistrRecord;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _795.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _795.ReplacePoolIncentivesProposal;
                fromJSON(object: any): _795.ReplacePoolIncentivesProposal;
                toJSON(message: _795.ReplacePoolIncentivesProposal): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _795.ReplacePoolIncentivesProposal;
            };
            UpdatePoolIncentivesProposal: {
                encode(message: _795.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _795.UpdatePoolIncentivesProposal;
                fromJSON(object: any): _795.UpdatePoolIncentivesProposal;
                toJSON(message: _795.UpdatePoolIncentivesProposal): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _795.UpdatePoolIncentivesProposal;
            };
            GenesisState: {
                encode(message: _794.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _794.GenesisState;
                fromJSON(object: any): _794.GenesisState;
                toJSON(message: _794.GenesisState): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _794.GenesisState;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                encode(message: _798.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _798.Node;
                fromJSON(object: any): _798.Node;
                toJSON(message: _798.Node): unknown;
                fromPartial<I extends unknown>(object: I): _798.Node;
            };
            Child: {
                encode(message: _798.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _798.Child;
                fromJSON(object: any): _798.Child;
                toJSON(message: _798.Child): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _798.Child;
            };
            Leaf: {
                encode(message: _798.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _798.Leaf;
                fromJSON(object: any): _798.Leaf;
                toJSON(message: _798.Leaf): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _798.Leaf;
            };
        };
    }
    const superfluid: {
        MsgSuperfluidDelegate: {
            encode(message: _803.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _803.MsgSuperfluidDelegate;
            fromJSON(object: any): _803.MsgSuperfluidDelegate;
            toJSON(message: _803.MsgSuperfluidDelegate): unknown;
            fromPartial<I extends unknown>(object: I): _803.MsgSuperfluidDelegate;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _803.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _803.MsgSuperfluidDelegateResponse;
            fromJSON(_: any): _803.MsgSuperfluidDelegateResponse;
            toJSON(_: _803.MsgSuperfluidDelegateResponse): unknown;
            fromPartial<I_1 extends unknown>(_: I_1): _803.MsgSuperfluidDelegateResponse;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _803.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _803.MsgSuperfluidUndelegate;
            fromJSON(object: any): _803.MsgSuperfluidUndelegate;
            toJSON(message: _803.MsgSuperfluidUndelegate): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _803.MsgSuperfluidUndelegate;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _803.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _803.MsgSuperfluidUndelegateResponse;
            fromJSON(_: any): _803.MsgSuperfluidUndelegateResponse;
            toJSON(_: _803.MsgSuperfluidUndelegateResponse): unknown;
            fromPartial<I_3 extends unknown>(_: I_3): _803.MsgSuperfluidUndelegateResponse;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _803.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _803.MsgSuperfluidUnbondLock;
            fromJSON(object: any): _803.MsgSuperfluidUnbondLock;
            toJSON(message: _803.MsgSuperfluidUnbondLock): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _803.MsgSuperfluidUnbondLock;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _803.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _803.MsgSuperfluidUnbondLockResponse;
            fromJSON(_: any): _803.MsgSuperfluidUnbondLockResponse;
            toJSON(_: _803.MsgSuperfluidUnbondLockResponse): unknown;
            fromPartial<I_5 extends unknown>(_: I_5): _803.MsgSuperfluidUnbondLockResponse;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _803.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _803.MsgLockAndSuperfluidDelegate;
            fromJSON(object: any): _803.MsgLockAndSuperfluidDelegate;
            toJSON(message: _803.MsgLockAndSuperfluidDelegate): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _803.MsgLockAndSuperfluidDelegate;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _803.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _803.MsgLockAndSuperfluidDelegateResponse;
            fromJSON(object: any): _803.MsgLockAndSuperfluidDelegateResponse;
            toJSON(message: _803.MsgLockAndSuperfluidDelegateResponse): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _803.MsgLockAndSuperfluidDelegateResponse;
        };
        registry: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                encode(message: _803.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _803.MsgSuperfluidDelegate;
                fromJSON(object: any): _803.MsgSuperfluidDelegate;
                toJSON(message: _803.MsgSuperfluidDelegate): unknown;
                fromPartial<I extends unknown>(object: I): _803.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                encode(message: _803.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _803.MsgSuperfluidUndelegate;
                fromJSON(object: any): _803.MsgSuperfluidUndelegate;
                toJSON(message: _803.MsgSuperfluidUndelegate): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _803.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                encode(message: _803.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _803.MsgSuperfluidUnbondLock;
                fromJSON(object: any): _803.MsgSuperfluidUnbondLock;
                toJSON(message: _803.MsgSuperfluidUnbondLock): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _803.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                encode(message: _803.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _803.MsgLockAndSuperfluidDelegate;
                fromJSON(object: any): _803.MsgLockAndSuperfluidDelegate;
                toJSON(message: _803.MsgLockAndSuperfluidDelegate): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _803.MsgLockAndSuperfluidDelegate;
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId, valAddr }: _803.MsgSuperfluidDelegate) => {
                    sender: string;
                    lockId: string;
                    valAddr: string;
                };
                fromAmino: ({ sender, lockId, valAddr }: {
                    sender: string;
                    lockId: string;
                    valAddr: string;
                }) => _803.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _803.MsgSuperfluidUndelegate) => {
                    sender: string;
                    lockId: string;
                };
                fromAmino: ({ sender, lockId }: {
                    sender: string;
                    lockId: string;
                }) => _803.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _803.MsgSuperfluidUnbondLock) => {
                    sender: string;
                    lockId: string;
                };
                fromAmino: ({ sender, lockId }: {
                    sender: string;
                    lockId: string;
                }) => _803.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, coins, valAddr }: _803.MsgLockAndSuperfluidDelegate) => {
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
                }) => _803.MsgLockAndSuperfluidDelegate;
            };
        };
        encoded: {
            superfluidDelegate(value: _803.MsgSuperfluidDelegate): {
                type_url: string;
                value: Uint8Array;
            };
            superfluidUndelegate(value: _803.MsgSuperfluidUndelegate): {
                type_url: string;
                value: Uint8Array;
            };
            superfluidUnbondLock(value: _803.MsgSuperfluidUnbondLock): {
                type_url: string;
                value: Uint8Array;
            };
            lockAndSuperfluidDelegate(value: _803.MsgLockAndSuperfluidDelegate): {
                type_url: string;
                value: Uint8Array;
            };
        };
        fromJSON: {
            superfluidDelegate(value: any): {
                typeUrl: string;
                value: _803.MsgSuperfluidDelegate;
            };
            superfluidUndelegate(value: any): {
                typeUrl: string;
                value: _803.MsgSuperfluidUndelegate;
            };
            superfluidUnbondLock(value: any): {
                typeUrl: string;
                value: _803.MsgSuperfluidUnbondLock;
            };
            lockAndSuperfluidDelegate(value: any): {
                typeUrl: string;
                value: _803.MsgLockAndSuperfluidDelegate;
            };
        };
        toJSON: {
            superfluidDelegate(value: _803.MsgSuperfluidDelegate): {
                typeUrl: string;
                value: unknown;
            };
            superfluidUndelegate(value: _803.MsgSuperfluidUndelegate): {
                typeUrl: string;
                value: unknown;
            };
            superfluidUnbondLock(value: _803.MsgSuperfluidUnbondLock): {
                typeUrl: string;
                value: unknown;
            };
            lockAndSuperfluidDelegate(value: _803.MsgLockAndSuperfluidDelegate): {
                typeUrl: string;
                value: unknown;
            };
        };
        json: {
            superfluidDelegate(value: _803.MsgSuperfluidDelegate): {
                typeUrl: string;
                value: _803.MsgSuperfluidDelegate;
            };
            superfluidUndelegate(value: _803.MsgSuperfluidUndelegate): {
                typeUrl: string;
                value: _803.MsgSuperfluidUndelegate;
            };
            superfluidUnbondLock(value: _803.MsgSuperfluidUnbondLock): {
                typeUrl: string;
                value: _803.MsgSuperfluidUnbondLock;
            };
            lockAndSuperfluidDelegate(value: _803.MsgLockAndSuperfluidDelegate): {
                typeUrl: string;
                value: _803.MsgLockAndSuperfluidDelegate;
            };
        };
        messages: {
            superfluidDelegate(value: _803.MsgSuperfluidDelegate): {
                typeUrl: string;
                value: _803.MsgSuperfluidDelegate;
            };
            superfluidUndelegate(value: _803.MsgSuperfluidUndelegate): {
                typeUrl: string;
                value: _803.MsgSuperfluidUndelegate;
            };
            superfluidUnbondLock(value: _803.MsgSuperfluidUnbondLock): {
                typeUrl: string;
                value: _803.MsgSuperfluidUnbondLock;
            };
            lockAndSuperfluidDelegate(value: _803.MsgLockAndSuperfluidDelegate): {
                typeUrl: string;
                value: _803.MsgLockAndSuperfluidDelegate;
            };
        };
        superfluidAssetTypeFromJSON(object: any): _802.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _802.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _802.SuperfluidAssetType;
        SuperfluidAsset: {
            encode(message: _802.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.SuperfluidAsset;
            fromJSON(object: any): _802.SuperfluidAsset;
            toJSON(message: _802.SuperfluidAsset): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _802.SuperfluidAsset;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _802.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.SuperfluidIntermediaryAccount;
            fromJSON(object: any): _802.SuperfluidIntermediaryAccount;
            toJSON(message: _802.SuperfluidIntermediaryAccount): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _802.SuperfluidIntermediaryAccount;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _802.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.OsmoEquivalentMultiplierRecord;
            fromJSON(object: any): _802.OsmoEquivalentMultiplierRecord;
            toJSON(message: _802.OsmoEquivalentMultiplierRecord): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _802.OsmoEquivalentMultiplierRecord;
        };
        SuperfluidDelegationRecord: {
            encode(message: _802.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.SuperfluidDelegationRecord;
            fromJSON(object: any): _802.SuperfluidDelegationRecord;
            toJSON(message: _802.SuperfluidDelegationRecord): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _802.SuperfluidDelegationRecord;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _802.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.LockIdIntermediaryAccountConnection;
            fromJSON(object: any): _802.LockIdIntermediaryAccountConnection;
            toJSON(message: _802.LockIdIntermediaryAccountConnection): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _802.LockIdIntermediaryAccountConnection;
        };
        QueryParamsRequest: {
            encode(_: _801.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _801.QueryParamsRequest;
            fromJSON(_: any): _801.QueryParamsRequest;
            toJSON(_: _801.QueryParamsRequest): unknown;
            fromPartial<I_13 extends unknown>(_: I_13): _801.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _801.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _801.QueryParamsResponse;
            fromJSON(object: any): _801.QueryParamsResponse;
            toJSON(message: _801.QueryParamsResponse): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _801.QueryParamsResponse;
        };
        AssetTypeRequest: {
            encode(message: _801.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _801.AssetTypeRequest;
            fromJSON(object: any): _801.AssetTypeRequest;
            toJSON(message: _801.AssetTypeRequest): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _801.AssetTypeRequest;
        };
        AssetTypeResponse: {
            encode(message: _801.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _801.AssetTypeResponse;
            fromJSON(object: any): _801.AssetTypeResponse;
            toJSON(message: _801.AssetTypeResponse): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _801.AssetTypeResponse;
        };
        AllAssetsRequest: {
            encode(_: _801.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _801.AllAssetsRequest;
            fromJSON(_: any): _801.AllAssetsRequest;
            toJSON(_: _801.AllAssetsRequest): unknown;
            fromPartial<I_17 extends unknown>(_: I_17): _801.AllAssetsRequest;
        };
        AllAssetsResponse: {
            encode(message: _801.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _801.AllAssetsResponse;
            fromJSON(object: any): _801.AllAssetsResponse;
            toJSON(message: _801.AllAssetsResponse): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _801.AllAssetsResponse;
        };
        AssetMultiplierRequest: {
            encode(message: _801.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _801.AssetMultiplierRequest;
            fromJSON(object: any): _801.AssetMultiplierRequest;
            toJSON(message: _801.AssetMultiplierRequest): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _801.AssetMultiplierRequest;
        };
        AssetMultiplierResponse: {
            encode(message: _801.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _801.AssetMultiplierResponse;
            fromJSON(object: any): _801.AssetMultiplierResponse;
            toJSON(message: _801.AssetMultiplierResponse): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _801.AssetMultiplierResponse;
        };
        SuperfluidIntermediaryAccountInfo: {
            encode(message: _801.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _801.SuperfluidIntermediaryAccountInfo;
            fromJSON(object: any): _801.SuperfluidIntermediaryAccountInfo;
            toJSON(message: _801.SuperfluidIntermediaryAccountInfo): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _801.SuperfluidIntermediaryAccountInfo;
        };
        AllIntermediaryAccountsRequest: {
            encode(message: _801.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _801.AllIntermediaryAccountsRequest;
            fromJSON(object: any): _801.AllIntermediaryAccountsRequest;
            toJSON(message: _801.AllIntermediaryAccountsRequest): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _801.AllIntermediaryAccountsRequest;
        };
        AllIntermediaryAccountsResponse: {
            encode(message: _801.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _801.AllIntermediaryAccountsResponse;
            fromJSON(object: any): _801.AllIntermediaryAccountsResponse;
            toJSON(message: _801.AllIntermediaryAccountsResponse): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _801.AllIntermediaryAccountsResponse;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _801.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _801.ConnectedIntermediaryAccountRequest;
            fromJSON(object: any): _801.ConnectedIntermediaryAccountRequest;
            toJSON(message: _801.ConnectedIntermediaryAccountRequest): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _801.ConnectedIntermediaryAccountRequest;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _801.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _801.ConnectedIntermediaryAccountResponse;
            fromJSON(object: any): _801.ConnectedIntermediaryAccountResponse;
            toJSON(message: _801.ConnectedIntermediaryAccountResponse): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _801.ConnectedIntermediaryAccountResponse;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _801.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _801.TotalSuperfluidDelegationsRequest;
            fromJSON(_: any): _801.TotalSuperfluidDelegationsRequest;
            toJSON(_: _801.TotalSuperfluidDelegationsRequest): unknown;
            fromPartial<I_26 extends unknown>(_: I_26): _801.TotalSuperfluidDelegationsRequest;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _801.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _801.TotalSuperfluidDelegationsResponse;
            fromJSON(object: any): _801.TotalSuperfluidDelegationsResponse;
            toJSON(message: _801.TotalSuperfluidDelegationsResponse): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _801.TotalSuperfluidDelegationsResponse;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _801.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _801.SuperfluidDelegationAmountRequest;
            fromJSON(object: any): _801.SuperfluidDelegationAmountRequest;
            toJSON(message: _801.SuperfluidDelegationAmountRequest): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _801.SuperfluidDelegationAmountRequest;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _801.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _801.SuperfluidDelegationAmountResponse;
            fromJSON(object: any): _801.SuperfluidDelegationAmountResponse;
            toJSON(message: _801.SuperfluidDelegationAmountResponse): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _801.SuperfluidDelegationAmountResponse;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _801.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _801.SuperfluidDelegationsByDelegatorRequest;
            fromJSON(object: any): _801.SuperfluidDelegationsByDelegatorRequest;
            toJSON(message: _801.SuperfluidDelegationsByDelegatorRequest): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _801.SuperfluidDelegationsByDelegatorRequest;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _801.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _801.SuperfluidDelegationsByDelegatorResponse;
            fromJSON(object: any): _801.SuperfluidDelegationsByDelegatorResponse;
            toJSON(message: _801.SuperfluidDelegationsByDelegatorResponse): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _801.SuperfluidDelegationsByDelegatorResponse;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _801.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _801.SuperfluidUndelegationsByDelegatorRequest;
            fromJSON(object: any): _801.SuperfluidUndelegationsByDelegatorRequest;
            toJSON(message: _801.SuperfluidUndelegationsByDelegatorRequest): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _801.SuperfluidUndelegationsByDelegatorRequest;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _801.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _801.SuperfluidUndelegationsByDelegatorResponse;
            fromJSON(object: any): _801.SuperfluidUndelegationsByDelegatorResponse;
            toJSON(message: _801.SuperfluidUndelegationsByDelegatorResponse): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _801.SuperfluidUndelegationsByDelegatorResponse;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _801.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _801.SuperfluidDelegationsByValidatorDenomRequest;
            fromJSON(object: any): _801.SuperfluidDelegationsByValidatorDenomRequest;
            toJSON(message: _801.SuperfluidDelegationsByValidatorDenomRequest): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _801.SuperfluidDelegationsByValidatorDenomRequest;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _801.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _801.SuperfluidDelegationsByValidatorDenomResponse;
            fromJSON(object: any): _801.SuperfluidDelegationsByValidatorDenomResponse;
            toJSON(message: _801.SuperfluidDelegationsByValidatorDenomResponse): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _801.SuperfluidDelegationsByValidatorDenomResponse;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _801.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _801.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromJSON(object: any): _801.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toJSON(message: _801.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _801.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _801.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _801.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromJSON(object: any): _801.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toJSON(message: _801.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _801.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
        };
        Params: {
            encode(message: _800.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _800.Params;
            fromJSON(object: any): _800.Params;
            toJSON(message: _800.Params): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _800.Params;
        };
        GenesisState: {
            encode(message: _799.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _799.GenesisState;
            fromJSON(object: any): _799.GenesisState;
            toJSON(message: _799.GenesisState): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _799.GenesisState;
        };
    };
    namespace txfees {
        const v1beta1: {
            QueryFeeTokensRequest: {
                encode(_: _815.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _815.QueryFeeTokensRequest;
                fromJSON(_: any): _815.QueryFeeTokensRequest;
                toJSON(_: _815.QueryFeeTokensRequest): unknown;
                fromPartial<I extends unknown>(_: I): _815.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _815.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _815.QueryFeeTokensResponse;
                fromJSON(object: any): _815.QueryFeeTokensResponse;
                toJSON(message: _815.QueryFeeTokensResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _815.QueryFeeTokensResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _815.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _815.QueryDenomPoolIdRequest;
                fromJSON(object: any): _815.QueryDenomPoolIdRequest;
                toJSON(message: _815.QueryDenomPoolIdRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _815.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _815.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _815.QueryDenomPoolIdResponse;
                fromJSON(object: any): _815.QueryDenomPoolIdResponse;
                toJSON(message: _815.QueryDenomPoolIdResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _815.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _815.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _815.QueryBaseDenomRequest;
                fromJSON(_: any): _815.QueryBaseDenomRequest;
                toJSON(_: _815.QueryBaseDenomRequest): unknown;
                fromPartial<I_4 extends unknown>(_: I_4): _815.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _815.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _815.QueryBaseDenomResponse;
                fromJSON(object: any): _815.QueryBaseDenomResponse;
                toJSON(message: _815.QueryBaseDenomResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _815.QueryBaseDenomResponse;
            };
            UpdateFeeTokenProposal: {
                encode(message: _814.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _814.UpdateFeeTokenProposal;
                fromJSON(object: any): _814.UpdateFeeTokenProposal;
                toJSON(message: _814.UpdateFeeTokenProposal): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _814.UpdateFeeTokenProposal;
            };
            GenesisState: {
                encode(message: _813.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _813.GenesisState;
                fromJSON(object: any): _813.GenesisState;
                toJSON(message: _813.GenesisState): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _813.GenesisState;
            };
            FeeToken: {
                encode(message: _812.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _812.FeeToken;
                fromJSON(object: any): _812.FeeToken;
                toJSON(message: _812.FeeToken): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _812.FeeToken;
            };
        };
    }
}
